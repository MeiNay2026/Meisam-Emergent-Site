"""Backend API tests for Dr. Meisam Lund landing page."""
import os
import re
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://meisam-precision.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ----
def test_root(client):
    r = client.get(f"{API}/", timeout=30)
    assert r.status_code == 200
    assert "message" in r.json()


# ---- Symptom checker ----
REQUIRED_KEYS = {"id", "symptom", "intro", "possible_causes", "when_surgery_helps", "red_flags", "when_to_book", "disclaimer"}


def _post_symptom(client, symptom, language, details=""):
    r = client.post(f"{API}/symptom-check", json={"symptom": symptom, "details": details, "language": language}, timeout=90)
    return r


def test_symptom_check_en_gallstones(client):
    r = _post_symptom(client, "Gallstones", "en")
    assert r.status_code == 200, r.text
    data = r.json()
    assert REQUIRED_KEYS.issubset(data.keys())
    assert isinstance(data["possible_causes"], list) and len(data["possible_causes"]) >= 1
    assert isinstance(data["red_flags"], list) and len(data["red_flags"]) >= 1
    # first-person surgeon voice heuristic
    joined = (data["intro"] + " " + data["when_to_book"]).lower()
    assert any(k in joined for k in ["i ", "my ", "in my", "what i", "i usually", "i often", "i want"]), f"Not first person: {data['intro']}"


def test_symptom_check_ar_hernia(client):
    r = _post_symptom(client, "Hernia", "ar")
    assert r.status_code == 200, r.text
    data = r.json()
    assert REQUIRED_KEYS.issubset(data.keys())
    # Arabic script check
    assert re.search(r"[\u0600-\u06FF]", data["intro"]), f"Not Arabic: {data['intro']}"


def test_symptom_check_sv_reflux(client):
    r = _post_symptom(client, "Reflux or heartburn", "sv")
    assert r.status_code == 200, r.text
    data = r.json()
    assert REQUIRED_KEYS.issubset(data.keys())
    # Swedish letter heuristic
    text = data["intro"] + " " + data["when_surgery_helps"]
    assert re.search(r"[åäöÅÄÖ]", text) or any(w in text.lower() for w in [" och ", " att ", " jag ", " min ", " för "]), f"Not Swedish: {data['intro']}"


def test_symptom_check_repeat_persists(client):
    # ensure repeated calls don't error (persistence works)
    r1 = _post_symptom(client, "Gallstones", "en")
    r2 = _post_symptom(client, "Gallstones", "en")
    assert r1.status_code == 200 and r2.status_code == 200
    assert r1.json()["id"] != r2.json()["id"]
