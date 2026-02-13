# Notable Changes Generation Prompt

## Task Overview

Generate notable changes for TrueNAS {VERSION} release notes by:
1. Analyzing the Jira tickets provided below
2. Triaging tickets into "include" vs "exclude" categories based on user-facing impact
3. Writing included tickets as notable changes following TrueNAS documentation style
4. Documenting excluded tickets with clear reasoning
5. Saving the results to the specified output files

## Your Task

You are generating notable changes for TrueNAS release notes. Your responsibilities:
1. Triage Jira tickets into "include" vs "exclude" categories
2. Write notable changes in the TrueNAS documentation style
3. Provide reasoning for excluded tickets
4. Save outputs to the files specified at the end of this prompt

## Triage Criteria

### INCLUDE tickets if they meet ANY of these criteria:

**Critical Issues:**
- Critical or High priority bugs that affect core functionality
- Data loss, corruption, or security vulnerabilities
- System crashes, panics, or deadlocks
- Issues that prevent users from performing basic operations

**User-Visible Changes:**
- New features or functionality visible in the WebUI
- Changes to SMB, NFS, iSCSI, or other sharing protocols
- Improvements to Apps, Replication, or Storage management
- Certificate, Network, or System configuration changes
- Performance improvements users will notice

**Breaking Changes:**
- Changes that require user action during upgrade
- Deprecation of features or APIs
- Changes to default behavior

**Labels and Indicators:**
- Tickets with `release_notes_mention` label
- Tickets with `perf_impact` label
- High severity scores (>= 10 from preprocessing)

### EXCLUDE tickets if they meet ANY of these criteria:

**Backend-Only Changes:**
- API documentation updates (unless they affect user workflows)
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

### Format Template

```markdown
* {Action verb} {brief description} ([{TICKET-KEY}]({jira-url})).
  {Detailed explanation of impact, what was broken, what changed, user benefits.}
```

### Writing Rules

1. **Action Verbs** (choose appropriate verb):
   - **Fixes** - Bug fixes that restore expected functionality
   - **Improves** - Enhancements to existing features
   - **Adds** - New features or capabilities
   - **Updates** - Changes to existing behavior
   - **Resolves** - Solutions to known issues
   - **Removes** - Deprecated features or functionality
   - **Enhances** - Improvements to performance or usability

2. **Style Requirements:**
   - Present tense, active voice
   - 5th-grade reading level (simple, clear language)
   - First sentence: What changed (1 line, no indent)
   - Second sentence: Impact, previous behavior, new behavior (indented 2 spaces)
   - No gerunds (-ing words like "improving", "adding")
   - No semicolons
   - Bold UI elements: **Button Name**, **Screen Name**
   - Code formatting: `field_name`, `/path/to/file`

3. **Structure:**
   - One ticket = one bullet point (exception: closely related tickets can be combined)
   - Group by severity: Critical issues first, then features, then minor fixes
   - Keep explanations concise but informative

### Examples from TrueNAS 25.10.2

**Good Example 1 (Bug Fix):**
```markdown
* Fixes an issue with the Add Disk function failing when used in some circumstances due to excessive API calls ([NAS-139459](https://ixsystems.atlassian.net/browse/NAS-139459)).
  An issue with excessive API calls caused the Add Disk function to fail in some situations. The API calls are improved so this error should not occur going forward.
```

**Good Example 2 (Feature Enhancement):**
```markdown
* Improves the handling of SMB share ACLs when multiple users access the same share ([NAS-138234](https://ixsystems.atlassian.net/browse/NAS-138234)).
  Previously, concurrent access to SMB shares could lead to ACL conflicts. The new implementation properly handles simultaneous connections and preserves permissions.
```

**Good Example 3 (Critical Security):**
```markdown
* Resolves a security vulnerability in certificate validation that could allow unauthorized access ([NAS-140123](https://ixsystems.atlassian.net/browse/NAS-140123)).
  Certificate validation was not properly verifying certificate chains in some configurations. This is now fixed to ensure all certificates are fully validated before allowing connections.
```

## Input Format

You will receive a JSON array of tickets with the following structure:

```json
[
  {
    "key": "NAS-139459",
    "summary": "Reduce excessive API calls...",
    "priority": "Medium",
    "status": "Done",
    "type": "Bug",
    "components": ["WebUI"],
    "labels": ["release_notes_mention"],
    "fix_versions": ["SCALE-25.10.2"],
    "pr_links": ["https://github.com/truenas/webui/pull/13168"],
    "severity_score": 8,
    "user_facing": true,
    "jira_url": "https://ixsystems.atlassian.net/browse/NAS-139459"
  }
]
```

## Output Format

You will generate two separate outputs:

### Notable Changes Format

Markdown bullet list with this structure:
```markdown
* Fixes an issue with... ([NAS-XXXXX](https://...)).
  Detailed explanation...

* Improves performance of... ([NAS-XXXXX](https://...)).
  Detailed explanation...
```

**Requirements:**
- One bullet point per ticket (may combine closely related tickets)
- Each bullet starts with action verb (Fixes, Improves, Adds, etc.)
- Include Jira link in format: `([NAS-XXXXX](https://...))`
- First line: brief description (no indent)
- Second line: detailed impact explanation (indented 2 spaces)
- Sort by severity: critical issues first

### Excluded Tickets Format

Markdown table with three columns:
```markdown
| Ticket | Summary | Reason for Exclusion |
|--------|---------|---------------------|
| [NAS-XXXXX](https://...) | API documentation update | Backend-only change with no user impact |
| [NAS-XXXXX](https://...) | Refactor code structure | Internal refactoring with no functional changes |
```

**Requirements:**
- Include ticket link in first column
- Brief summary in second column
- Clear, specific reason in third column

## Tips for Claude

- **When uncertain about user impact:** Err on the side of exclusion. It's better to omit a ticket than include one that doesn't affect users.
- **Combine related tickets:** If multiple tickets address the same underlying issue, combine them into one notable change entry.
- **Focus on "why users care":** The second sentence should answer: "What does this fix/improve for users?"
- **Use specific examples:** If the ticket mentions specific error messages or workflows, include them.
- **Keep it simple:** Avoid technical jargon unless necessary. Explain complex concepts in simple terms.

## Version-Specific Considerations

### 25.10.x Series
- Focus on stability and bug fixes
- Highlight any performance improvements
- Note any changes to Apps functionality
- Call out SMB/NFS improvements (common pain points)

### Major Releases (e.g., 26.x)
- Emphasize new features
- Highlight architectural changes
- Note deprecated features
- Include upgrade considerations

## Quality Checklist

Before finalizing notable changes, verify:

- [ ] All included tickets have clear user impact
- [ ] Action verbs are appropriate (Fixes, Improves, Adds, etc.)
- [ ] No gerunds (-ing words) are used
- [ ] UI elements are bolded
- [ ] Code elements use backticks
- [ ] Each entry has Jira link
- [ ] Entries are sorted by severity
- [ ] Language is simple and clear (5th-grade level)
- [ ] Excluded tickets have clear reasoning
- [ ] No duplicate entries or combined tickets without justification
