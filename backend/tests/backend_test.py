"""Backend API tests for the landing page, blog fallback, and AI symptom guide."""
import json
import os
import re
import uuid

import pytest
import requests
from dotenv import dotenv_values

frontend_env = dotenv_values("/app/frontend/.env")
base_url = os.environ.get("REACT_APP_BACKEND_URL") or frontend_env.get("REACT_APP_BACKEND_URL")
if not base_url:
    raise RuntimeError("REACT_APP_BACKEND_URL is missing")
BASE_URL = base_url.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


# Root health and status persistence endpoints.
def test_root(client):
    response = client.get(f"{API}/", timeout=30)
    assert response.status_code == 200, response.text
    assert response.json() == {"message": "Dr. Meisam Lund API"}


def test_status_create_and_get_persistence(client):
    client_name = f"TEST_T1_{uuid.uuid4()}"
    create_response = client.post(f"{API}/status", json={"client_name": client_name}, timeout=30)
    assert create_response.status_code == 200, create_response.text
    created = create_response.json()
    assert isinstance(created.get("id"), str) and created["id"]
    assert created["client_name"] == client_name
    assert isinstance(created.get("timestamp"), str) and created["timestamp"]

    get_response = client.get(f"{API}/status", timeout=30)
    assert get_response.status_code == 200, get_response.text
    statuses = get_response.json()
    assert isinstance(statuses, list)
    persisted = next((item for item in statuses if item.get("id") == created["id"]), None)
    assert persisted is not None
    assert persisted["client_name"] == client_name
    assert "_id" not in persisted


# WordPress-unconfigured graceful fallback endpoint.
def test_blog_posts_unconfigured_fallback(client):
    response = client.get(f"{API}/blog/posts", params={"limit": 6}, timeout=30)
    assert response.status_code == 200, response.text
    assert response.json() == {"configured": False, "posts": []}


# AI symptom-check localization, schema, persona, and dash sanitization.
REQUIRED_KEYS = {
    "id",
    "symptom",
    "intro",
    "possible_causes",
    "when_surgery_helps",
    "red_flags",
    "when_to_book",
    "disclaimer",
}


def _post_symptom(client, language):
    return client.post(
        f"{API}/symptom-check",
        json={"symptom": "Gallstones", "details": "", "language": language},
        timeout=90,
    )


def _assert_common_symptom_response(response):
    assert response.status_code == 200, response.text
    data = response.json()
    assert set(data) == REQUIRED_KEYS
    assert data["symptom"] == "Gallstones"
    assert isinstance(data["id"], str) and data["id"]
    assert isinstance(data["intro"], str) and data["intro"].strip()
    assert isinstance(data["possible_causes"], list) and data["possible_causes"]
    assert all(isinstance(value, str) and value.strip() for value in data["possible_causes"])
    assert isinstance(data["when_surgery_helps"], str) and data["when_surgery_helps"].strip()
    assert isinstance(data["red_flags"], list) and data["red_flags"]
    assert all(isinstance(value, str) and value.strip() for value in data["red_flags"])
    assert isinstance(data["when_to_book"], str) and data["when_to_book"].strip()
    assert isinstance(data["disclaimer"], str) and data["disclaimer"].strip()
    serialized = json.dumps(data, ensure_ascii=False)
    assert "—" not in serialized, f"Em dash leaked into response: {serialized}"
    assert "–" not in serialized, f"En dash leaked into response: {serialized}"
    return data


def test_symptom_check_en_gallstones(client):
    data = _assert_common_symptom_response(_post_symptom(client, "en"))
    joined = f'{data["intro"]} {data["when_surgery_helps"]} {data["when_to_book"]}'.lower()
    assert any(marker in joined for marker in ("i ", "i'm", "i've", "my ", "in my")), joined


def test_symptom_check_ar_gallstones(client):
    data = _assert_common_symptom_response(_post_symptom(client, "ar"))
    joined = " ".join(
        [
            data["intro"],
            *data["possible_causes"],
            data["when_surgery_helps"],
            *data["red_flags"],
            data["when_to_book"],
            data["disclaimer"],
        ]
    )
    assert re.search(r"[\u0600-\u06FF]", joined), f"Response was not Arabic: {joined}"
