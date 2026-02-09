#!/bin/bash
# Example workflow script for TrueNAS release notes automation
#
# This script demonstrates the complete workflow from CSV export to VersionNotes.md update
# Customize the VERSION variable and CSV file path for your release

set -e  # Exit on error

# Configuration
VERSION="25.10.3"
CSV_FILE="${VERSION}-changelog.csv"
SCRIPTS_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Output directory will be automatically set to output/{version}/
VERSION_SLUG="${VERSION//./_}"
OUTPUT_DIR="output/${VERSION_SLUG}"

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=================================${NC}"
echo -e "${GREEN}TrueNAS Release Notes Automation${NC}"
echo -e "${GREEN}Version: ${VERSION}${NC}"
echo -e "${GREEN}=================================${NC}"
echo ""

# Check if CSV file exists
if [ ! -f "$CSV_FILE" ]; then
    echo -e "${RED}Error: CSV file not found: ${CSV_FILE}${NC}"
    echo ""
    echo "Please export the CSV from Jira first:"
    echo "1. Navigate to Jira filter for ${VERSION}"
    echo "2. Click Export → Export CSV (all fields)"
    echo "3. Save as ${CSV_FILE} in this directory"
    echo ""
    exit 1
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Step 1: Process CSV
echo -e "${YELLOW}Step 1: Processing Jira CSV export${NC}"
echo "This will fetch XML data and extract PR links..."
echo ""

python3 "${SCRIPTS_DIR}/process_jira_export.py" \
    --csv "$CSV_FILE" \
    --version "$VERSION" \
    --format both
    # Output will go to: output/${VERSION_SLUG}/

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to process CSV${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✓ CSV processing complete${NC}"
echo ""

# Step 2: Generate notable changes
echo -e "${YELLOW}Step 2: Generating notable changes${NC}"
echo "Choose mode:"
echo "  [1] Manual mode (generate prompt for Claude)"
echo "  [2] API mode (requires ANTHROPIC_API_KEY)"
echo ""
read -p "Enter choice [1]: " mode_choice
mode_choice=${mode_choice:-1}

VERSION_SLUG="${VERSION//./_}"

if [ "$mode_choice" = "2" ]; then
    # API mode
    if [ -z "$ANTHROPIC_API_KEY" ]; then
        echo -e "${RED}Error: ANTHROPIC_API_KEY not set${NC}"
        echo "Set it with: export ANTHROPIC_API_KEY='your-key'"
        exit 1
    fi

    python3 "${SCRIPTS_DIR}/generate_notable_changes.py" \
        --ticket-data "${OUTPUT_DIR}/tickets.json" \
        --version "$VERSION"

    if [ $? -ne 0 ]; then
        echo -e "${RED}Error: Failed to generate notable changes${NC}"
        exit 1
    fi

    NOTABLE_CHANGES_FILE="${OUTPUT_DIR}/${VERSION_SLUG}-notable-changes.md"

else
    # Manual mode
    python3 "${SCRIPTS_DIR}/generate_notable_changes.py" \
        --ticket-data "${OUTPUT_DIR}/tickets.json" \
        --version "$VERSION" \
        --manual

    if [ $? -ne 0 ]; then
        echo -e "${RED}Error: Failed to generate prompt${NC}"
        exit 1
    fi

    echo ""
    echo -e "${GREEN}✓ Prompt generated${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Open ${OUTPUT_DIR}/prompt.txt"
    echo "2. Copy the entire contents"
    echo "3. Paste into Claude (claude.ai or claude.ai/code)"
    echo "4. Save Claude's response to ${OUTPUT_DIR}/notable-changes.md"
    echo ""
    read -p "Press Enter when you've completed these steps..."

    NOTABLE_CHANGES_FILE="${OUTPUT_DIR}/notable-changes.md"

    if [ ! -f "$NOTABLE_CHANGES_FILE" ]; then
        echo -e "${RED}Error: Notable changes file not found: ${NOTABLE_CHANGES_FILE}${NC}"
        exit 1
    fi
fi

echo ""
echo -e "${GREEN}✓ Notable changes generated${NC}"
echo ""

# Step 3: Update VersionNotes.md
echo -e "${YELLOW}Step 3: Updating VersionNotes.md${NC}"
echo "Running dry-run first to preview changes..."
echo ""

python3 "${SCRIPTS_DIR}/update_version_notes.py" \
    --version "$VERSION" \
    --notable-changes "$NOTABLE_CHANGES_FILE" \
    --dry-run

if [ $? -ne 0 ]; then
    echo -e "${RED}Error: Failed to update VersionNotes.md${NC}"
    exit 1
fi

echo ""
read -p "Apply these changes to VersionNotes.md? [y/N]: " confirm
confirm=${confirm:-n}

if [[ $confirm =~ ^[Yy]$ ]]; then
    python3 "${SCRIPTS_DIR}/update_version_notes.py" \
        --version "$VERSION" \
        --notable-changes "$NOTABLE_CHANGES_FILE"

    if [ $? -ne 0 ]; then
        echo -e "${RED}Error: Failed to update VersionNotes.md${NC}"
        exit 1
    fi

    echo ""
    echo -e "${GREEN}✓ VersionNotes.md updated successfully${NC}"
    echo ""
else
    echo ""
    echo "Update cancelled. You can run the update manually:"
    echo "./update_version_notes.py --version $VERSION --notable-changes $NOTABLE_CHANGES_FILE"
    echo ""
fi

# Summary
echo -e "${GREEN}=================================${NC}"
echo -e "${GREEN}Workflow Complete!${NC}"
echo -e "${GREEN}=================================${NC}"
echo ""
echo "Output files in ${OUTPUT_DIR}:"
echo "  • tickets.json"
echo "  • tickets.md"
echo "  • notable-changes.md"
echo ""
echo "Next steps:"
echo "  1. Review the notable changes in ${OUTPUT_DIR}/${VERSION_SLUG}-notable-changes.md"
echo "  2. Review VersionNotes.md changes"
echo "  3. Commit changes to git"
echo ""
echo -e "${GREEN}Done!${NC}"
