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
│ 1. Export CSV from Jira Filter              │
│    (Manual step - ~2 minutes)                │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│ 2. Process CSV with process_jira_export.py  │
│    - Fetches XML for each ticket             │
│    - Extracts PR links from comments         │
│    - Calculates severity scores              │
│    - Outputs JSON and markdown               │
│    (~5 minutes for 25 tickets)               │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│ 3. Generate notable changes                  │
│    Option A: Manual (copy-paste to Claude)   │
│    Option B: API (generate_notable_changes)  │
│    (~5 minutes)                              │
└────────────────┬─────────────────────────────┘
                 │
                 ▼
┌──────────────────────────────────────────────┐
│ 4. Update VersionNotes.md                    │
│    - Review generated changes                │
│    - Run update_version_notes.py             │
│    (~3 minutes)                              │
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

### Step 1: Export CSV from Jira

1. Navigate to the Jira filter for your release:
   - Example: https://ixsystems.atlassian.net/issues/?filter=13831
2. Click **Export** button → **Export CSV (all fields)**
3. Save as `{version}-changelog.csv` (e.g., `25.10.2-changelog.csv`)

### Step 2: Process Jira Export

```bash
# Process CSV and generate JSON + markdown
./process_jira_export.py \
  --csv 25.10.2-changelog.csv \
  --version 25.10.2 \
  --format both

# Output files:
# - 25_10_2-tickets.json (for Claude API)
# - 25_10_2-tickets.md (for manual review)
```

**What this does:**
- Reads CSV rows (ticket key, summary, priority, components, etc.)
- For each ticket, fetches XML from public Jira XML API
- Parses bugclerk bot comments for PR links matching the version
- Extracts metadata (labels, components, ticket type)
- Calculates severity scores
- Determines if ticket is user-facing
- Outputs structured data in JSON and markdown formats

**Options:**
- `--csv PATH` - Path to Jira CSV export (required)
- `--version VERSION` - Release version like 25.10.2 (required)
- `--format {json|markdown|both}` - Output format (default: both)
- `--output-dir PATH` - Output directory (default: current directory)
- `--cache-dir PATH` - Cache directory for XML files (default: /tmp/jira_cache)

**Output:**
- `{version}-tickets.json` - Structured ticket data for Claude
- `{version}-tickets.md` - Human-readable ticket summary
- XML files cached in `/tmp/jira_cache/` for faster re-runs

### Step 3: Generate Notable Changes

You have two options:

#### Option A: Manual Mode (Recommended for First Time)

```bash
# Generate prompt file for copy-paste
./generate_notable_changes.py \
  --ticket-data 25_10_2-tickets.json \
  --version 25.10.2 \
  --manual

# This creates: 25_10_2-prompt.txt
```

Then:
1. Open `25_10_2-prompt.txt`
2. Copy the entire contents
3. Paste into Claude (claude.ai or claude.ai/code)
4. Save Claude's response to `25_10_2-notable-changes.md`

#### Option B: API Mode (Requires API Key)

```bash
# Set API key
export ANTHROPIC_API_KEY="your-key-here"

# Generate notable changes using Claude API
./generate_notable_changes.py \
  --ticket-data 25_10_2-tickets.json \
  --version 25.10.2

# Output files:
# - 25_10_2-notable-changes-full.md (complete response)
# - 25_10_2-notable-changes.md (just the bullet points)
# - 25_10_2-excluded-tickets.md (tickets not included with reasons)
```

**What this does:**
- Loads processed ticket data from JSON
- Constructs prompt with triage criteria and style guidelines
- Calls Claude API (or generates prompt for manual use)
- Parses response into notable changes and excluded tickets
- Saves formatted output files

**Options:**
- `--ticket-data PATH` - Path to JSON from step 2 (required)
- `--version VERSION` - Release version (required)
- `--api-key KEY` - Anthropic API key (or use ANTHROPIC_API_KEY env var)
- `--manual` - Generate prompt file instead of calling API
- `--output-dir PATH` - Output directory (default: current directory)

### Step 4: Update VersionNotes.md

```bash
# Dry run (preview changes)
./update_version_notes.py \
  --version 25.10.2 \
  --notable-changes 25_10_2-notable-changes.md \
  --dry-run

# Apply changes
./update_version_notes.py \
  --version 25.10.2 \
  --notable-changes 25_10_2-notable-changes.md

# Specify custom VersionNotes.md location
./update_version_notes.py \
  --version 25.10.2 \
  --notable-changes 25_10_2-notable-changes.md \
  --version-notes /path/to/VersionNotes.md
```

**What this does:**
- Locates the version section in VersionNotes.md
- Finds the placeholder for notable changes
- Replaces placeholder with generated content
- Creates backup: `VersionNotes.md.backup`
- Shows diff of changes
- Updates file (unless --dry-run)

**Options:**
- `--version VERSION` - Release version (required)
- `--notable-changes PATH` - Path to notable changes markdown (required)
- `--version-notes PATH` - Path to VersionNotes.md (auto-detected if not specified)
- `--dry-run` - Preview changes without writing to file

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

### "No changes detected" in dry-run

**Causes:**
1. Placeholder already replaced
2. Version section structure different than expected

**Solution:**
- Check VersionNotes.md manually
- Look for placeholder text: `[Placeholder - Notable changes will be added based on ticket list]`
- Adjust placeholder pattern in script if needed

### Claude generates low-quality output

**Solutions:**
- Review the prompt template in `prompts/notable_changes_prompt.md`
- Ensure ticket data JSON is well-formed
- Provide examples from previous releases in prompt
- Manually refine Claude's output before integration

## Files

### Scripts

- **process_jira_export.py** - Process CSV and fetch PR links
- **generate_notable_changes.py** - Generate notable changes with Claude
- **update_version_notes.py** - Update VersionNotes.md

### Supporting Files

- **requirements.txt** - Python dependencies
- **prompts/notable_changes_prompt.md** - Claude prompt template and guidelines
- **README.md** - This file

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
