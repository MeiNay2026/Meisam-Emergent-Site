from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import json
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from emergentintegrations.llm.chat import LlmChat, UserMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY')

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class SymptomRequest(BaseModel):
    symptom: str
    details: Optional[str] = ""
    language: Optional[str] = "en"


class SymptomResponse(BaseModel):
    id: str
    symptom: str
    intro: str
    possible_causes: List[str]
    when_surgery_helps: str
    red_flags: List[str]
    when_to_book: str
    disclaimer: str


# ---------------------------------------------------------------------------
# Symptom Checker persona + prompt
# ---------------------------------------------------------------------------
LANG_NAME = {"en": "English", "ar": "Arabic", "sv": "Swedish"}

SYSTEM_MESSAGE = (
    "You are Dr. Meisam Lund, a Swedish Board Certified Consultant General Surgeon "
    "practising at American Hospital Dubai, with training across Sweden (Karolinska), "
    "the USA (Level I Trauma) and the UAE. You specialise in minimally invasive "
    "(laparoscopic) surgery. You speak to patients in a warm, calm, reassuring and "
    "honest first-person voice ('In my practice...', 'What I usually tell my patients...'). "
    "You reduce anxiety, never alarm unnecessarily, and you are clear that many conditions "
    "do NOT need surgery. You never diagnose definitively online and always recommend a "
    "proper consultation. Keep language plain and human, avoid heavy jargon."
)


def build_prompt(symptom: str, details: str, language: str) -> str:
    lang = LANG_NAME.get(language, "English")
    detail_line = f"The patient adds these details: \"{details}\".\n" if details else ""
    return (
        f"A patient selected the concern: \"{symptom}\".\n"
        f"{detail_line}"
        f"Respond ENTIRELY in {lang}.\n\n"
        "Return ONLY a valid JSON object (no markdown, no code fences) with exactly these keys:\n"
        "{\n"
        '  "intro": "2-3 warm sentences in first person acknowledging the concern",\n'
        '  "possible_causes": ["3-5 short plain-language possible causes"],\n'
        '  "when_surgery_helps": "2-3 sentences on when surgery may genuinely help and when it is not needed",\n'
        '  "red_flags": ["3-4 short warning signs that mean seek care urgently"],\n'
        '  "when_to_book": "1-2 sentences advising when to book a consultation with me",\n'
        '  "disclaimer": "1 short sentence that this is general guidance, not a diagnosis"\n'
        "}\n"
        "Keep every string concise. Do not add keys. Do not wrap in markdown.\n"
        "IMPORTANT STYLE RULE: Never use em dashes or en dashes (the characters "
        "\u2014 or \u2013) anywhere in your response. Use commas, periods, or the word 'and' instead."
    )


def _extract_json(text: str) -> dict:
    text = text.strip()
    # strip code fences if present
    text = re.sub(r"^```(?:json)?", "", text).strip()
    text = re.sub(r"```$", "", text).strip()
    match = re.search(r"\{.*\}", text, re.DOTALL)
    if match:
        text = match.group(0)
    return json.loads(text)


# ---------------------------------------------------------------------------
# Routes
# ---------------------------------------------------------------------------
@api_router.get("/")
async def root():
    return {"message": "Dr. Meisam Lund API"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


def _no_dash(text):
    if isinstance(text, str):
        return text.replace(" \u2014 ", ", ").replace("\u2014", ", ").replace(" \u2013 ", ", ").replace("\u2013", "-")
    if isinstance(text, list):
        return [_no_dash(t) for t in text]
    return text


@api_router.post("/symptom-check", response_model=SymptomResponse)
async def symptom_check(req: SymptomRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=500, detail="LLM key not configured")

    session_id = str(uuid.uuid4())
    try:
        chat = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=session_id,
            system_message=SYSTEM_MESSAGE,
        ).with_model("anthropic", "claude-sonnet-4-6")

        user_message = UserMessage(text=build_prompt(req.symptom, req.details or "", req.language or "en"))
        raw = await chat.send_message(user_message)
        data = _extract_json(raw)
    except Exception as e:
        logger.exception("Symptom check failed")
        raise HTTPException(status_code=502, detail=f"AI service error: {str(e)}")

    result = SymptomResponse(
        id=session_id,
        symptom=req.symptom,
        intro=_no_dash(data.get("intro", "")),
        possible_causes=_no_dash(data.get("possible_causes", []) or []),
        when_surgery_helps=_no_dash(data.get("when_surgery_helps", "")),
        red_flags=_no_dash(data.get("red_flags", []) or []),
        when_to_book=_no_dash(data.get("when_to_book", "")),
        disclaimer=_no_dash(data.get("disclaimer", "")),
    )

    # persist
    doc = result.model_dump()
    doc["details"] = req.details or ""
    doc["language"] = req.language or "en"
    doc["created_at"] = datetime.now(timezone.utc).isoformat()
    await db.symptom_checks.insert_one(doc)

    return result


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
