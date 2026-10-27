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
read_csv = _mod.read_csv
write_csv = _mod.write_csv
row_to_columns = _mod.row_to_columns
significant = _mod.significant
merge = _mod.merge


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


# --- read / diff / merge ---

HEADER = ["Issue Type", "Issue key", "Issue id", "Summary", "Fix versions", "Fix versions",
          "Status", "Created", "Updated", "Priority", "Resolution", "Affects versions",
          "Security Level", "Labels", "Labels"]


def _row(key="NAS-1", summary="A summary", fix=("26.0.0-BETA.3",), status="Done",
         updated="08/Oct/26 5:57 AM", labels=("a",)):
    fix = list(fix) + [""] * (2 - len(fix))
    labels = list(labels) + [""] * (2 - len(labels))
    return ["Defect", key, "10", summary, fix[0], fix[1], status, "21/Jul/26 3:44 PM", updated,
            "Medium", "Complete", "", "", labels[0], labels[1]]


def _api(key="NAS-1", summary="A summary", fix=("26.0.0-BETA.3",), status="Done",
         updated="2026-10-09T05:57:00.000-0400", labels=("a",), description=None):
    return _issue_for(key, summary, fix, status, updated, labels, description)


def _issue_for(key, summary, fix, status, updated, labels, description):
    issue = _issue(summary=summary, fixVersions=[{"name": v} for v in fix],
                   status={"name": status}, updated=updated, labels=list(labels),
                   resolution={"name": "Complete"}, description=description)
    issue["key"] = key
    return issue


def test_merge_no_change_when_only_updated_differs():
    header, rows, delta = merge(HEADER, [_row()], [_api()])
    assert delta.empty
    assert rows == [_row()]


def test_merge_ignores_fix_version_order():
    row = _row(fix=("A", "B"))
    _, _, delta = merge(HEADER, [row], [_api(fix=("B", "A"))])
    assert delta.empty


def test_merge_added_changed_removed():
    rows = [_row("NAS-1"), _row("NAS-2")]
    issues = [_api("NAS-2", summary="New summary"), _api("NAS-3")]
    header, new_rows, delta = merge(HEADER, rows, issues)
    assert delta.added == ["NAS-3"]
    assert delta.changed == ["NAS-2"]
    assert delta.removed == ["NAS-1"]
    assert [r[1] for r in new_rows] == ["NAS-2", "NAS-3"]
    assert new_rows[0][3] == "New summary"


def test_merge_keeps_untouched_rows_verbatim():
    odd = _row("NAS-1", updated="weird updated string")
    rows = [odd, _row("NAS-2")]
    issues = [_api("NAS-1"), _api("NAS-2", summary="changed")]
    _, new_rows, delta = merge(HEADER, rows, issues)
    assert delta.changed == ["NAS-2"]
    assert new_rows[0] == odd


def test_merge_widens_repeated_columns():
    rows = [_row("NAS-1")]
    issues = [_api("NAS-1"), _api("NAS-2", labels=("a", "b", "c"))]
    header, new_rows, delta = merge(HEADER, rows, issues)
    assert header.count("Labels") == 3
    assert len(set(len(r) for r in new_rows)) == 1
    assert len(new_rows[0]) == len(header)
    by_key = {r[1]: r for r in new_rows}
    first_label = header.index("Labels")
    assert by_key["NAS-1"][first_label:first_label + 3] == ["a", "", ""]
    assert by_key["NAS-2"][first_label:first_label + 3] == ["a", "b", "c"]


def test_merge_does_not_add_description_column():
    issues = [_api("NAS-1"), _api("NAS-2", description="Some text")]
    header, new_rows, delta = merge(HEADER, [_row("NAS-1")], issues)
    assert "Description" not in header
    assert delta.added == ["NAS-2"]
    assert len(new_rows[1]) == len(header)


def test_description_compared_only_when_column_present():
    header = HEADER[:4] + ["Description"] + HEADER[4:]
    row = _row()
    row.insert(4, "line one\r\nline two")
    _, _, delta = merge(header, [row], [_api(description="line one\nline two")])
    assert delta.empty
    _, _, delta = merge(header, [row], [_api(description="different text")])
    assert delta.changed == ["NAS-1"]
    # the same description change is invisible when the file has no Description column
    _, _, delta = merge(HEADER, [_row()], [_api(description="different text")])
    assert delta.empty


def test_row_to_columns_drops_empty_repeated_values():
    cols = row_to_columns(HEADER, _row(fix=("A",), labels=("x",)))
    assert cols["Fix versions"] == ["A"]
    assert cols["Labels"] == ["x"]
    assert cols["Summary"] == ["A summary"]


def test_significant_ignores_updated_and_created():
    a = row_to_columns(HEADER, _row(updated="01/Jan/26 1:00 AM"))
    b = row_to_columns(HEADER, _row(updated="02/Feb/26 2:00 PM"))
    assert significant(a, False) == significant(b, False)


def test_csv_roundtrip_special_characters(tmp_path):
    header = ["Issue key", "Description"]
    text = 'has, commas "and quotes"\nnewline\r\ncrlf \u2019smart\u2019 caf\u00e9'
    path = tmp_path / "x.csv"
    write_csv(path, header, [["NAS-1", text]])
    got_header, got_rows = read_csv(path)
    assert got_header == header
    assert got_rows == [["NAS-1", text]]
