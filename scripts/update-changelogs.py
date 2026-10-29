#!/usr/bin/env python3
"""Refresh the published changelog CSVs from public Jira filters.

Runs against a checkout of a version branch. Reads static/data/changelog-sources.json
(version value -> Jira filter ID), fetches each filter from Jira's public REST API
(no credentials, public issues only), merges the result into the existing CSVs and
rebuilds the "All" file with combine-changelogs.py.

Exit codes: 0 = ran cleanly (whether or not anything changed). 1 = at least one
version failed; the CSVs for versions that failed are left untouched.
"""

import argparse
import csv
import importlib.util
import json
import os
import requests
import sys
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
# Compared per issue: the columns the site displays (Key, Summary, Priority, Status, Fix Versions).
# Issue key is the match key. Everything else, Updated and Description included, is ignored so
# that edits the published table never shows do not open a PR.
SINGLE_SIGNIFICANT = ("Summary", "Priority", "Status")


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


def significant(columns):
    """Comparable value for the fields whose change warrants a PR."""
    parts = [_first(columns, name) for name in SINGLE_SIGNIFICANT]
    parts.append(tuple(sorted(columns.get("Fix versions", []))))
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
        elif significant(row_to_columns(header, existing[key])) != significant(columns):
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


def load_sources(repo):
    """Read static/data/changelog-sources.json; a branch without one has nothing to refresh."""
    path = Path(repo) / "static" / "data" / "changelog-sources.json"
    if not path.exists():
        return {}
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def render_summary(results):
    """Markdown for the PR body. results maps CSV filename -> Delta."""
    lines = []
    for filename, delta in results.items():
        if delta.empty:
            continue
        lines.append(f"### {filename}")
        for title, keys, note in (
            ("Added", delta.added, None),
            ("Removed", delta.removed,
             "No longer returned by the Jira filter (retagged or made private)."),
            ("Changed", delta.changed, None),
        ):
            if not keys:
                continue
            lines.append(f"**{title}** ({len(keys)})" + (f" - {note}" if note else ""))
            lines.extend(f"- [{key}]({JIRA_BASE}/browse/{key})" for key in keys)
        lines.append("")
    return "\n".join(lines)


def _combine(repo, version):
    """Rebuild the "All" file with combine-changelogs.py (it works from the current directory)."""
    path = Path(__file__).resolve().parent / "combine-changelogs.py"
    spec = importlib.util.spec_from_file_location("combine_changelogs", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    previous = os.getcwd()
    os.chdir(repo)
    try:
        module.combine_changelogs(version)
    finally:
        os.chdir(previous)


def _refresh_version(data_dir, filename, filter_id, dry_run):
    """Fetch one filter and merge it into its CSV. Returns the Delta; raises JiraError or ValueError."""
    path = data_dir / filename
    if not path.exists():
        raise ValueError(f"{filename} does not exist")
    header, rows = read_csv(path)
    if "Issue key" not in header:
        raise ValueError(f"{filename} has no Issue key column")
    issues = fetch_filter(filter_id)
    if not issues and rows:
        raise JiraError(f"filter {filter_id} returned no issues but {filename} has {len(rows)}; "
                        "refusing to empty it")
    new_header, new_rows, delta = merge(header, rows, issues)
    if not delta.empty and not dry_run:
        write_csv(path, new_header, new_rows)
    return delta


def main(argv=None):
    parser = argparse.ArgumentParser(description="Refresh changelog CSVs from public Jira filters.")
    parser.add_argument("--repo", default=".", help="checkout of the version branch to refresh")
    parser.add_argument("--dry-run", action="store_true", help="report changes without writing")
    parser.add_argument("--summary", help="where to write the PR summary "
                                          "(default: <repo>/changelog-update-summary.md)")
    args = parser.parse_args(argv)

    repo = Path(args.repo).resolve()
    data_dir = repo / "static" / "data"
    summary_path = Path(args.summary) if args.summary else repo / "changelog-update-summary.md"

    sources = load_sources(repo)
    if not sources:
        print("No changelog-sources.json (or it is empty) - nothing to do.")
        return 0
    with open(data_dir / "changelog-versions.json", "r", encoding="utf-8") as f:
        versions_config = json.load(f)

    failed = False
    results = {}
    changed_groups = []
    for group, versions in sources.items():
        filenames = {v["value"]: v["filename"]
                     for v in versions_config.get(group, {}).get("versions", [])}
        group_changed = False
        for value, filter_id in versions.items():
            filename = filenames.get(value)
            try:
                if not filename:
                    raise ValueError(f"{value} is not listed under {group} in changelog-versions.json")
                delta = _refresh_version(data_dir, filename, filter_id, args.dry_run)
            except (JiraError, requests.RequestException, OSError, ValueError) as exc:
                print(f"ERROR {group}/{value}: {exc}", file=sys.stderr)
                failed = True
                continue
            results[filename] = delta
            print(f"{filename}: {len(delta.added)} added, {len(delta.removed)} removed, "
                  f"{len(delta.changed)} changed")
            group_changed = group_changed or not delta.empty
        if group_changed:
            changed_groups.append(group)

    summary = render_summary(results)
    if summary and args.dry_run:
        print("\n" + summary)
    elif summary:
        summary_path.write_text(summary, encoding="utf-8")
        for group in changed_groups:
            _combine(repo, group)
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
