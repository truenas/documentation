#!/usr/bin/env python3
"""Refresh the published changelog CSVs from public Jira filters.

Runs against a checkout of a version branch. Reads static/data/changelog-sources.json
(version value -> Jira filter ID), fetches each filter from Jira's public REST API
(no credentials, public issues only), merges the result into the existing CSVs and
rebuilds the "All" file with combine-changelogs.py.

Exit codes: 0 = ran cleanly (whether or not anything changed). 1 = at least one
version failed; the CSVs for versions that failed are left untouched.
"""

import csv
import requests
from dataclasses import dataclass, field
from datetime import datetime
from pathlib import Path

JIRA_BASE = "https://ixsystems.atlassian.net"
SEARCH_URL = f"{JIRA_BASE}/rest/api/2/search/jql"
FIELDS = ("summary,description,fixVersions,status,created,updated,priority,"
          "resolution,versions,security,labels,issuetype")
PAGE_SIZE = 100
TIMEOUT = 60


class JiraError(Exception):
    """The Jira API returned an error or something we could not read."""


def format_jira_date(iso):
    """Convert an API timestamp to Jira's CSV export format, e.g. '22/Aug/26 5:37 PM'.

    Keeps the wall-clock time embedded in the string rather than converting zones.
    """
    dt = datetime.strptime(iso, "%Y-%m-%dT%H:%M:%S.%f%z")
    hour = dt.hour % 12 or 12
    return f"{dt.strftime('%d/%b/%y')} {hour}:{dt.minute:02d} {'AM' if dt.hour < 12 else 'PM'}"


def fetch_filter(filter_id, session=None):
    """Return every issue (raw Jira dicts) the filter currently returns, across all pages."""
    session = session or requests.Session()
    issues = []
    token = None
    while True:
        params = {"jql": f"filter={filter_id}", "maxResults": PAGE_SIZE, "fields": FIELDS}
        if token:
            params["nextPageToken"] = token
        response = session.get(SEARCH_URL, params=params, timeout=TIMEOUT)
        if response.status_code != 200:
            raise JiraError(f"filter {filter_id}: HTTP {response.status_code}")
        try:
            page = response.json()
        except ValueError as exc:
            raise JiraError(f"filter {filter_id}: response was not JSON ({exc})") from exc
        issues.extend(page.get("issues", []))
        if page.get("isLast", True):
            return issues
        token = page.get("nextPageToken")
        if not token:
            raise JiraError(f"filter {filter_id}: page was not last but gave no nextPageToken")


def _name(value):
    return value["name"] if value else ""


def issue_to_columns(issue):
    """Map a Jira issue to export column name -> list of values.

    Single-value columns hold a one-element list. Multi-value columns (Fix versions,
    Affects versions, Labels) hold one entry per value and may be empty.
    """
    fields = issue["fields"]
    return {
        "Issue Type": [_name(fields.get("issuetype"))],
        "Issue key": [issue["key"]],
        "Issue id": [issue["id"]],
        "Summary": [fields.get("summary") or ""],
        "Description": [fields.get("description") or ""],
        "Fix versions": [v["name"] for v in fields.get("fixVersions") or []],
        "Status": [_name(fields.get("status"))],
        "Created": [format_jira_date(fields["created"]) if fields.get("created") else ""],
        "Updated": [format_jira_date(fields["updated"]) if fields.get("updated") else ""],
        "Priority": [_name(fields.get("priority"))],
        "Resolution": [_name(fields.get("resolution"))],
        "Affects versions": [v["name"] for v in fields.get("versions") or []],
        "Security Level": [_name(fields.get("security"))],
        "Labels": list(fields.get("labels") or []),
    }


MULTI_COLUMNS = ("Fix versions", "Affects versions", "Labels")
# Compared per issue. Issue key is the match key; Created and Updated are deliberately absent.
SINGLE_SIGNIFICANT = ("Issue Type", "Summary", "Status", "Priority", "Resolution", "Security Level")


def read_csv(path):
    """Return (header, rows) with rows as raw lists. Blank rows are skipped."""
    with open(path, "r", newline="", encoding="utf-8-sig") as f:
        records = list(csv.reader(f))
    if not records:
        return [], []
    rows = [r for r in records[1:] if any(cell.strip() for cell in r)]
    return records[0], rows


def write_csv(path, header, rows):
    """Write UTF-8 with \\n line endings, matching combine-changelogs.py."""
    with open(path, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f, lineterminator="\n")
        writer.writerow(header)
        writer.writerows(rows)


def row_to_columns(header, row):
    """Map a raw CSV row to column name -> values, comparable with issue_to_columns output.

    Empty values of repeated columns are dropped; short rows read as empty strings.
    """
    columns = {}
    for name, value in zip(header, row):
        columns.setdefault(name, []).append(value)
    for name in MULTI_COLUMNS:
        columns[name] = [v for v in columns.get(name, []) if v]
    return columns


def _first(columns, name):
    values = columns.get(name) or [""]
    return values[0]


def significant(columns, has_description):
    """Comparable value for the fields whose change warrants a PR."""
    parts = [_first(columns, name) for name in SINGLE_SIGNIFICANT]
    if has_description:
        parts.append(_first(columns, "Description").replace("\r\n", "\n").strip())
    parts.extend(tuple(sorted(columns.get(name, []))) for name in MULTI_COLUMNS)
    return tuple(parts)


@dataclass
class Delta:
    added: list = field(default_factory=list)
    removed: list = field(default_factory=list)
    changed: list = field(default_factory=list)

    @property
    def empty(self):
        return not (self.added or self.removed or self.changed)


def _layout(header, columns):
    """Lay column values out under the header, repeating names in order (as combine does)."""
    used = {}
    out = []
    for name in header:
        index = used.get(name, 0)
        used[name] = index + 1
        values = columns.get(name, [])
        out.append(values[index] if index < len(values) else "")
    return out


def _widen(header, rows, needed):
    """Add repeated columns so each MULTI column has `needed[name]` slots; pad existing rows."""
    header = list(header)
    rows = [list(r) + [""] * (len(header) - len(r)) for r in rows]
    for name in MULTI_COLUMNS:
        missing = needed.get(name, 0) - header.count(name)
        if missing <= 0 or name not in header:
            continue
        at = max(i for i, h in enumerate(header) if h == name) + 1
        header[at:at] = [name] * missing
        for row in rows:
            row[at:at] = [""] * missing
    return header, rows


def merge(header, rows, issues):
    """Merge Jira issues into existing CSV rows. Returns (header, rows, Delta).

    Only added, removed and changed issues touch the file; every other row is kept as read.
    """
    has_description = "Description" in header
    key_index = header.index("Issue key")
    existing = {r[key_index]: r for r in rows if len(r) > key_index and r[key_index]}
    delta = Delta()
    fresh = {}
    for issue in issues:
        columns = issue_to_columns(issue)
        key = issue["key"]
        if key not in existing:
            delta.added.append(key)
            fresh[key] = columns
        elif significant(row_to_columns(header, existing[key]), has_description) != \
                significant(columns, has_description):
            delta.changed.append(key)
            fresh[key] = columns
    api_keys = {issue["key"] for issue in issues}
    delta.removed = [key for key in existing if key not in api_keys]
    removed = set(delta.removed)
    changed = set(delta.changed)

    if delta.empty:
        return header, rows, delta

    needed = {name: max((len(c.get(name, [])) for c in fresh.values()), default=0)
              for name in MULTI_COLUMNS}
    new_header, padded = _widen(header, rows, needed)

    new_rows = []
    for row in padded:
        key = row[key_index] if len(row) > key_index else ""
        if key in removed:
            continue
        if key in changed:
            new_rows.append(_layout(new_header, fresh[key]))
        else:
            new_rows.append(row)
    new_rows.extend(_layout(new_header, fresh[key]) for key in delta.added)
    return new_header, new_rows, delta
