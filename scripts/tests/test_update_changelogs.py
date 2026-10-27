# scripts/tests/test_update_changelogs.py
import importlib.util
import os
from unittest.mock import MagicMock

import pytest

# Load the hyphen-named script as a module
_script_path = os.path.join(os.path.dirname(__file__), '..', 'update-changelogs.py')
_spec = importlib.util.spec_from_file_location('update_changelogs', _script_path)
_mod = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_mod)

JiraError = _mod.JiraError
fetch_filter = _mod.fetch_filter
issue_to_columns = _mod.issue_to_columns
format_jira_date = _mod.format_jira_date


# --- format_jira_date ---

def test_format_jira_date():
    assert format_jira_date("2026-08-22T17:37:01.681-0400") == "22/Aug/26 5:37 PM"
    assert format_jira_date("2026-03-02T12:09:00.627-0500") == "02/Mar/26 12:09 PM"


# --- issue_to_columns ---

def _issue(**overrides):
    fields = {
        "issuetype": {"name": "Defect"},
        "summary": "A summary",
        "description": None,
        "fixVersions": [{"name": "26.0.0-BETA.3"}, {"name": "27.0.0-RC.1"}],
        "status": {"name": "Done"},
        "created": "2026-07-21T15:44:00.000-0400",
        "updated": "2026-10-08T05:57:00.000-0400",
        "priority": {"name": "Medium"},
        "resolution": None,
        "versions": [],
        "security": None,
        "labels": ["a"],
    }
    fields.update(overrides)
    return {"key": "NAS-1", "id": "10", "fields": fields}


def test_issue_to_columns_maps_fields():
    cols = issue_to_columns(_issue())
    assert cols["Issue Type"] == ["Defect"]
    assert cols["Issue key"] == ["NAS-1"]
    assert cols["Issue id"] == ["10"]
    assert cols["Fix versions"] == ["26.0.0-BETA.3", "27.0.0-RC.1"]
    assert cols["Labels"] == ["a"]
    assert cols["Affects versions"] == []
    assert cols["Security Level"] == [""]
    assert cols["Resolution"] == [""]
    assert cols["Description"] == [""]
    assert cols["Created"] == ["21/Jul/26 3:44 PM"]
    assert cols["Updated"] == ["08/Oct/26 5:57 AM"]


# --- fetch_filter ---

def _response(status_code, payload):
    resp = MagicMock()
    resp.status_code = status_code
    resp.json.return_value = payload
    return resp


def test_fetch_filter_follows_pagination():
    session = MagicMock()
    session.get.side_effect = [
        _response(200, {"issues": [{"key": "NAS-1"}], "isLast": False, "nextPageToken": "t1"}),
        _response(200, {"issues": [{"key": "NAS-2"}], "isLast": True}),
    ]
    issues = fetch_filter(14697, session=session)
    assert [i["key"] for i in issues] == ["NAS-1", "NAS-2"]
    first_params = session.get.call_args_list[0].kwargs["params"]
    second_params = session.get.call_args_list[1].kwargs["params"]
    assert first_params["jql"] == "filter=14697"
    assert "nextPageToken" not in first_params
    assert second_params["nextPageToken"] == "t1"


def test_fetch_filter_raises_on_http_error():
    session = MagicMock()
    session.get.return_value = _response(500, {})
    with pytest.raises(JiraError):
        fetch_filter(14697, session=session)


def test_fetch_filter_raises_on_malformed_json():
    session = MagicMock()
    resp = _response(200, {})
    resp.json.side_effect = ValueError("bad json")
    session.get.return_value = resp
    with pytest.raises(JiraError):
        fetch_filter(14697, session=session)
