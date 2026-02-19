# Quick Start Guide

Get up and running with release notes automation in 5 minutes.

> **📍 Where to run these commands:** All commands assume you're in the `documentation/scripts/release_notes/` directory. Navigate there first from your documentation repository root.

## Prerequisites

- Python 3.8 or higher
- Internet connection (to fetch Jira data)
- Jira CSV export file
- Claude Code (for automated notable changes generation)

## Installation

**From the documentation repository root:**

**PowerShell (Windows):**
```powershell
# Navigate to the scripts directory
cd scripts\release_notes

# Install dependencies
pip install -r requirements.txt
```

**Bash (Linux/macOS/WSL):**
```bash
# Navigate to the scripts directory
cd scripts/release_notes

# Install dependencies
pip install -r requirements.txt
```

**Or use full path from anywhere:**
```powershell
# PowerShell
cd <your-path>\documentation\scripts\release_notes

# Bash
cd <your-path>/documentation/scripts/release_notes
```

## Quick Workflow

### 1. Export CSV from Jira (2 minutes)

1. Open your Jira filter in browser
2. Click **Export** → **Export CSV (all fields)**
3. Save to `documentation/public/data/` as `25.10.X-changelog.csv`

### 2. Process the CSV (5 minutes)

**PowerShell:**
```powershell
# Process CSV - automatically creates output/25_10_X/ directory
python process_jira_export.py `
  --csv ..\..\public\data\25.10.X-changelog.csv `
  --version 25.10.X
```

**Bash:**
```bash
python process_jira_export.py \
  --csv ../../public/data/25.10.X-changelog.csv \
  --version 25.10.X
```

**Output created:**
- `output/25_10_X/tickets.json` - Structured data for Claude
- `output/25_10_X/tickets.md` - Human-readable summary

### 3. Generate Prompt for Claude Code (1 minute)

**PowerShell:**
```powershell
# Generate prompt file for Claude Code
python generate_notable_changes.py `
  --ticket-data output\25_10_X\tickets.json `
  --version 25.10.X `
  --manual
```

**Bash:**
```bash
python generate_notable_changes.py \
  --ticket-data output/25_10_X/tickets.json \
  --version 25.10.X \
  --manual
```

**Output:** `output/25_10_X/prompt.txt`

### 4. Execute with Claude Code (5 minutes)

In your Claude Code session (this tool!), say:

```
Complete the prompt from output/25_10_X/prompt.txt
```

Claude Code will:
1. Read the prompt and ticket data
2. Analyze and triage tickets
3. Generate notable changes following TrueNAS style
4. Save to `output/25_10_X/notable-changes.md`
5. Save excluded tickets to `output/25_10_X/excluded-tickets.md`

### 5. Review Generated Changes (2 minutes)

**PowerShell:**
```powershell
# Review notable changes
notepad output\25_10_X\notable-changes.md

# Review excluded tickets
notepad output\25_10_X\excluded-tickets.md
```

### 6. Update VersionNotes.md (3 minutes)

**PowerShell:**
```powershell
# Preview changes (dry run)
python update_version_notes.py `
  --version 25.10.X `
  --notable-changes output\25_10_X\notable-changes.md `
  --dry-run

# Apply changes (creates backup automatically)
python update_version_notes.py `
  --version 25.10.X `
  --notable-changes output\25_10_X\notable-changes.md
```

**Bash:**
```bash
# Preview changes
python update_version_notes.py \
  --version 25.10.X \
  --notable-changes output/25_10_X/notable-changes.md \
  --dry-run

# Apply changes
python update_version_notes.py \
  --version 25.10.X \
  --notable-changes output/25_10_X/notable-changes.md
```

## Complete Example (PowerShell)

Here's a complete example for version 25.10.3:

```powershell
# Step 1: Export CSV from Jira (manual)
# Save to: documentation/public/data/25.10.3-changelog.csv

# Step 2: Process CSV
python process_jira_export.py `
  --csv ..\..\public\data\25.10.3-changelog.csv `
  --version 25.10.3

# Step 3: Generate prompt for Claude Code
python generate_notable_changes.py `
  --ticket-data output\25_10_3\tickets.json `
  --version 25.10.3 `
  --manual

# Step 4: In Claude Code, say:
# "Complete the prompt from output/25_10_3/prompt.txt"

# Step 5: Review generated files
notepad output\25_10_3\notable-changes.md
notepad output\25_10_3\excluded-tickets.md

# Step 6: Update VersionNotes.md (dry run first)
python update_version_notes.py `
  --version 25.10.3 `
  --notable-changes output\25_10_3\notable-changes.md `
  --dry-run

# Step 7: Apply changes
python update_version_notes.py `
  --version 25.10.3 `
  --notable-changes output\25_10_3\notable-changes.md

# Done! Commit the changes
git add content/GettingStarted/VersionNotes.md
git commit -m "Add notable changes for 25.10.3"
```

## Time Savings

| Task | Before | After | Savings |
|------|--------|-------|---------|
| Data collection | 30 min | 2 min | 28 min |
| Ticket triage | 45 min | 5 min | 40 min |
| Writing notable changes | 30 min | 5 min | 25 min |
| Integration | 15 min | 3 min | 12 min |
| **Total** | **120 min** | **15 min** | **105 min** |

## Troubleshooting

### "Module not found" error

```bash
# Install dependencies
pip install -r requirements.txt
```

### "CSV file not found"

Make sure you specify the correct path:

```bash
./process_jira_export.py --csv /full/path/to/file.csv --version 25.10.X
```

### "Could not find VersionNotes.md"

Specify the path manually:

```bash
./update_version_notes.py \
  --version 25.10.X \
  --notable-changes draft.md \
  --version-notes /path/to/VersionNotes.md
```

## Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Review [prompts/notable_changes_prompt.md](prompts/notable_changes_prompt.md) for style guidelines
- Customize triage criteria in `process_jira_export.py`

## Support

For questions or issues, consult:
- [README.md](README.md) - Full documentation
- Script help: `./script_name.py --help`
- Contact documentation team
