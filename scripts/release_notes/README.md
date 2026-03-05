# TrueNAS Release Notes Automation

This directory contains scripts to automate the generation of notable changes for TrueNAS release notes.

> **🚀 New here?** Check out [QUICKSTART.md](QUICKSTART.md) for a 5-minute guide to get started!

## Overview

The manual process of creating notable changes is time-consuming and involves:
1. Exporting Jira filter data
2. Manually compiling ticket information and PR links
3. Triaging tickets by severity and user-facing impact
4. Writing notable changes in TrueNAS style
5. Integrating into VersionNotes.md

This automation reduces the process from ~2 hours to ~15 minutes.

**Time Savings:** 87.5% reduction (120 min → 15 min)

## Workflow

```
┌──────────────────────────────────────────────┐
│ 1. Export CSV from Jira Filter               │
│    Save as public/data/{version}-changelog.csv│
│    (Manual step - ~2 minutes)                │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│ 2. python release_notes.py prep              │
│    --version 25.10.X                         │
│    - Processes CSV, fetches ticket XML        │
│    - Generates prompt for Claude Code         │
│    Output: output/25_10_X/                   │
│    (~5 minutes for 25 tickets)               │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│ 3. Claude Code: complete the prompt          │
│    "Complete the prompt from                 │
│     output/25_10_X/prompt.txt"               │
│    Saves notable-changes.md                  │
│    (~5 minutes)                              │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│ 4. python release_notes.py apply             │
│    --version 25.10.X                         │
│    - Preview diff, confirm, update            │
│    VersionNotes.md                           │
│    (~1 minute)                               │
└──────────────────────────────────────────────┘
```

## Setup

### 1. Install Dependencies

```bash
cd scripts/release_notes
pip install -r requirements.txt
```

**Required packages:**
- `requests` - HTTP requests for fetching Jira XML
- `beautifulsoup4` - XML parsing
- `lxml` - XML parser backend

**Optional package:**
- `anthropic` - Only needed if using Claude API mode (vs manual mode)

### 2. Make Scripts Executable

```bash
chmod +x process_jira_export.py
chmod +x generate_notable_changes.py
chmod +x update_version_notes.py
```

## Usage

### Prerequisites: Two Conventions

**CSV naming convention:**
Save your Jira export to `documentation/public/data/` named `{version}-changelog.csv`.
Example: `public/data/25.10.2.2-changelog.csv`
The `prep` command finds it automatically.

**VersionNotes.md placeholder:**
The version tab must contain exactly this placeholder before running `apply`:
```html
<!-- Notable changes placeholder -->
```
See [Adding a New Version Tab](#adding-a-new-version-tab).

---

### Step 1: Export CSV from Jira

1. Navigate to the Jira filter for your release
2. Click **Export** → **Export CSV (all fields)**
3. Save as `documentation/public/data/{version}-changelog.csv`

### Step 2: Run prep

```bash
python release_notes.py prep --version 25.10.X
```

Override the CSV path if needed:

```bash
python release_notes.py prep --version 25.10.X --csv /path/to/file.csv
```

**What this does:**
- Reads and validates the CSV
- Fetches XML from the public Jira XML API for each ticket
- Extracts PR links, severity scores, user-facing flags
- Generates `output/25_10_X/prompt.txt` for Claude Code

**Output directory:** `scripts/release_notes/output/25_10_X/`
- `tickets.json` — structured ticket data
- `tickets.md` — human-readable summary
- `prompt.txt` — prompt for Claude Code

### Step 3: Run Claude Code

In your Claude Code session:

```
Complete the prompt from output/25_10_X/prompt.txt
```

Claude Code will:
1. Read the prompt and ticket data
2. Triage tickets by severity and user impact
3. Write notable changes in TrueNAS style
4. Save to `output/25_10_X/notable-changes.md`
5. Save excluded tickets to `output/25_10_X/excluded-tickets.md`

### Step 4: Review generated changes

Open and edit before applying:
- `output/25_10_X/notable-changes.md`
- `output/25_10_X/excluded-tickets.md`

### Step 5: Run apply

```bash
python release_notes.py apply --version 25.10.X
```

**What this does:**
- Locates the `25.10.X` version tab in VersionNotes.md
- Finds the `<!-- Notable changes placeholder -->` and replaces it
- Shows a diff preview and asks for confirmation
- Creates a backup (`VersionNotes.md.backup`) before writing
- Updates VersionNotes.md

---

### Adding a New Version Tab

Before running `apply`, add the new version tab to VersionNotes.md. Minimum required structure:

```html
<div data-tab-id="25.10.X" data-tab-label="25.10.X">

Month DD, YYYY

The TrueNAS team is pleased to release TrueNAS 25.10.X!

**Notable changes:**

<!-- Notable changes placeholder -->

<a href="#full-changelog" target="_blank">Click here</a> to see the full 25.10 changelog or visit the <a href="https://ixsystems.atlassian.net/issues/?filter=XXXXX" target="_blank">TrueNAS 25.10.X (Goldeye) Changelog</a> in Jira.

</div>
```

Also update the front matter `jump_to_buttons` anchor to point to the new version.

> **Important:** The placeholder must be exactly `<!-- Notable changes placeholder -->`. Other text will cause `apply` to warn and fail.

---

### Individual Scripts (Advanced)

The three underlying scripts remain usable standalone for advanced workflows. See their `--help` for options:

```bash
python process_jira_export.py --help
python generate_notable_changes.py --help
python update_version_notes.py --help
```

## Triage Criteria

The scripts use the following criteria to determine which tickets to include:

### Include Tickets That Are:

**Critical Issues:**
- Critical or High priority bugs affecting core functionality
- Data loss, corruption, or security vulnerabilities
- System crashes, panics, or deadlocks
- Issues preventing users from performing basic operations

**User-Visible Changes:**
- New features visible in WebUI
- Changes to SMB, NFS, iSCSI, or other protocols
- Improvements to Apps, Replication, or Storage
- Certificate, Network, or System configuration changes
- Performance improvements users will notice

**Breaking Changes:**
- Changes requiring user action during upgrade
- Deprecation of features or APIs
- Changes to default behavior

**Labels:**
- `release_notes_mention` label
- `perf_impact` label
- High severity scores (calculated from priority + components + keywords)

### Exclude Tickets That Are:

**Backend-Only:**
- API documentation updates (unless affecting user workflows)
- Internal refactoring with no user-visible impact
- Test infrastructure changes
- CI/CD pipeline improvements
- Code quality improvements

**Minor Changes:**
- Typo fixes in code or internal messages
- Small UI polish without functional changes
- Log message improvements
- Minor code cleanup

**Development Infrastructure:**
- Build system changes
- Developer tooling updates
- Internal testing improvements

## Style Guidelines

Notable changes must follow TrueNAS documentation standards:

### Format Template

```markdown
* {Action verb} {brief description} ([{TICKET-KEY}]({jira-url})).
  {Detailed explanation of impact, what was broken, what changed, user benefits.}
```

### Writing Rules

1. **Action Verbs:** Fixes, Improves, Adds, Updates, Resolves, Removes, Enhances
2. **Present tense, active voice**
3. **5th-grade reading level** (simple, clear language)
4. **Structure:**
   - First sentence: What changed (1 line, no indent)
   - Second sentence: Impact, previous behavior, new behavior (indented 2 spaces)
5. **No gerunds** (-ing words like "improving", "adding")
6. **No semicolons**
7. **Bold UI elements:** `**Button Name**`, `**Screen Name**`
8. **Code formatting:** `` `field_name` ``, `` `/path/to/file` ``

### Examples

**Good Example (Bug Fix):**
```markdown
* Fixes an issue with the Add Disk function failing when used in some circumstances due to excessive API calls ([NAS-139459](https://ixsystems.atlassian.net/browse/NAS-139459)).
  An issue with excessive API calls caused the Add Disk function to fail in some situations. The API calls are improved so this error should not occur going forward.
```

**Good Example (Feature Enhancement):**
```markdown
* Improves the handling of SMB share ACLs when multiple users access the same share ([NAS-138234](https://ixsystems.atlassian.net/browse/NAS-138234)).
  Previously, concurrent access to SMB shares could lead to ACL conflicts. The new implementation properly handles simultaneous connections and preserves permissions.
```

## Troubleshooting

### "Failed to fetch XML for ticket"

**Cause:** Network issue or Jira is temporarily unavailable

**Solution:**
- Check internet connection
- Wait a few minutes and try again
- XML files are cached, so re-running won't re-fetch successful tickets

### "Could not find PR links for ticket"

**Causes:**
1. Bugclerk bot hasn't commented yet
2. PR link uses different version format
3. Ticket resolved without PR (rare)

**Solution:**
- Check ticket manually in Jira
- Add PR link manually if needed
- Some tickets legitimately have no PRs (e.g., documentation-only changes)

### "Could not find version section in VersionNotes.md"

**Cause:** Version not yet added to VersionNotes.md

**Solution:**
- Ensure the version section exists in VersionNotes.md first
- Look for pattern: `data-tab-id="25.10.X"` or `## 25.10.X`

### "Could not find placeholder" / "No changes detected"

**Cause:** The version tab in VersionNotes.md does not contain the recognized placeholder.

**Solution:** Ensure the tab contains exactly:
```html
<!-- Notable changes placeholder -->
```
This is the only placeholder `update_version_notes.py` reliably matches for new releases.

### Claude generates low-quality output

**Solutions:**
- Review the prompt template in `prompts/notable_changes_prompt.md`
- Ensure ticket data JSON is well-formed
- Provide examples from previous releases in prompt
- Manually refine Claude's output before integration

## Files

### Scripts

- **release_notes.py** — Unified workflow wrapper (`prep` and `apply` subcommands)
- **process_jira_export.py** — Process CSV and fetch PR links (called by `prep`)
- **generate_notable_changes.py** — Generate notable changes with Claude (called by `prep`)
- **update_version_notes.py** — Update VersionNotes.md (called by `apply`)

### Supporting Files

- **requirements.txt** — Python dependencies
- **prompts/notable_changes_prompt.md** — Claude prompt template and guidelines
- **README.md** — This file
- **QUICKSTART.md** — Quick start guide

## Advanced Usage

### Custom Cache Directory

```bash
./process_jira_export.py \
  --csv export.csv \
  --version 25.10.2 \
  --cache-dir /custom/cache/path
```

### Process Multiple Versions

```bash
# Process 25.10.2
./process_jira_export.py --csv 25.10.2.csv --version 25.10.2

# Process 25.10.3
./process_jira_export.py --csv 25.10.3.csv --version 25.10.3

# Generate changes for both
./generate_notable_changes.py --ticket-data 25_10_2-tickets.json --version 25.10.2 --manual
./generate_notable_changes.py --ticket-data 25_10_3-tickets.json --version 25.10.3 --manual
```

### Customize Triage Criteria

Edit `process_jira_export.py` and modify:

```python
# Add custom user-facing components
USER_FACING_COMPONENTS = [
    "SMB", "NFS", "WebUI", "Apps",
    "YourCustomComponent"  # Add here
]

# Add custom critical keywords
CRITICAL_KEYWORDS = [
    "critical", "failure", "crash",
    "your-keyword"  # Add here
]
```

### Customize Style Guidelines

Edit `prompts/notable_changes_prompt.md` to:
- Add/remove action verbs
- Adjust writing style rules
- Include version-specific examples
- Modify triage criteria

## Integration with CI/CD

You can integrate these scripts into your release workflow:

```bash
#!/bin/bash
# Example release automation script

VERSION="25.10.3"
JIRA_CSV="$VERSION-export.csv"

# Step 1: Download CSV from Jira (manual or automated)
echo "Ensure $JIRA_CSV is downloaded from Jira"

# Step 2: Process tickets
python3 process_jira_export.py \
  --csv "$JIRA_CSV" \
  --version "$VERSION" \
  --format both

# Step 3: Generate notable changes (manual mode)
python3 generate_notable_changes.py \
  --ticket-data "${VERSION//./_}-tickets.json" \
  --version "$VERSION" \
  --manual

echo "Review prompt file and paste into Claude"
echo "Save Claude response to ${VERSION//./_}-notable-changes.md"
read -p "Press enter when ready to continue..."

# Step 4: Update VersionNotes.md
python3 update_version_notes.py \
  --version "$VERSION" \
  --notable-changes "${VERSION//./_}-notable-changes.md" \
  --dry-run

read -p "Review changes above. Continue? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    python3 update_version_notes.py \
      --version "$VERSION" \
      --notable-changes "${VERSION//./_}-notable-changes.md"

    echo "VersionNotes.md updated successfully!"
fi
```

## Future Enhancements

Potential improvements for future versions:

- **Automatic Jira API integration** (eliminate CSV export step)
- **GitHub PR analysis** (files changed, diff size for impact assessment)
- **Breaking changes detection** (auto-flag changes requiring user action)
- **Historical comparison** (track recurring issues across releases)
- **Multi-release changelog aggregation**
- **Natural language improvements** (better summarization)
- **Web UI** (GUI for non-technical users)

## Support

For issues or questions:
1. Check troubleshooting section above
2. Review script help: `./script_name.py --help`
3. Contact the documentation team
4. File an issue in the appropriate repository

## License

These scripts are part of the TrueNAS documentation repository and follow the same license.
