#!/usr/bin/env python3
"""Refresh the published changelog CSVs from public Jira filters.

Runs against a checkout of a version branch. Reads static/data/changelog-sources.json
(version value -> Jira filter ID), fetches each filter from Jira's public REST API
(no credentials, public issues only), merges the result into the existing CSVs and
rebuilds the "All" file with combine-changelogs.py.

Exit codes: 0 = ran cleanly (whether or not anything changed). 1 = at least one
version failed; the CSVs for versions that failed are left untouched.
"""

import requests
from datetime import datetime

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
