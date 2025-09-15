# TrueNAS Documentation Review System for Claude Code

This system provides comprehensive review and automated fixes for TrueNAS documentation, with actionable checklists and progress tracking.

## Quick Start Guide

**Step 1**: Choose your prompt type and copy the complete prompt:
- **Tutorial files** → Use [Tutorial Review and Fix Prompt](#tutorial-review-and-fix-prompt)
- **Reference/UI docs** → Use [Reference Documentation Review and Fix Prompt](#reference-documentation-review-and-fix-prompt) 
- **Unknown type** → Use [General Documentation Review and Fix Prompt](#general-documentation-review-and-fix-prompt)

**Step 2**: Replace the placeholder with your file path:
- `TUTORIAL_FILE_PATH` → `/path/to/your/tutorial.md`
- `REFERENCE_FILE_PATH` → `/path/to/your/reference.md`  
- `GENERAL_FILE_PATH` → `/path/to/your/file.md`

**Step 3**: Paste the complete prompt into Claude and get actionable results!

---

## How the Review System Works

1. **Copy the complete prompt** for your content type
2. **Use Ctrl+F and Replace** to swap placeholder with your file path
3. **Ask Claude** to use the prompt with the Task tool
4. **Review automatic fixes** applied by the agent
5. **Work through manual checklist** by priority (Critical → Important → Minor)
6. **Track progress** using the provided checklist format

---

## Tutorial Review and Fix Prompt

```
Please review and fix the tutorial documentation file at TUTORIAL_FILE_PATH using an enhanced approach that provides both automated fixes and actionable feedback.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the tutorial style guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/TrueNAS-Tutorial-Style-Guide.md and the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md.

Then review the tutorial file at TUTORIAL_FILE_PATH for compliance and make automatic fixes where possible:

AUTOMATED FIXES (use Edit/MultiEdit tools ONLY when absolutely certain):
- Fix obvious typos and spelling errors (like 'fle' → 'file')
- Replace 'will' with present tense alternatives (when clearly future tense)
- Replace 'may' with 'might', 'could', or 'can' (when expressing possibility)
- Fix actual duplicate words (like 'the the' BUT NEVER 'edit edit' or 'delete delete' patterns with icons)
- Correct basic punctuation issues (missing periods, extra spaces)
- DO NOT modify material icon formatting - inline styles may be intentional

ANALYSIS FOR MANUAL REVIEW:
- Heading hierarchy compliance (title case H2, sentence case H3+)
- Introduction structure (functional purpose pattern)
- Long sentences (over 30 words) - suggest rewrites
- Passive voice constructions - suggest active alternatives
- Hugo shortcode usage and cross-references
- Overall structure and organization issues

IMPORTANT: DO NOT flag patterns like '<i>edit</i> edit' or '<i>delete</i> delete' as issues - these are intentional accessibility patterns where icon text serves screen readers and plain text provides visual clarity.

OUTPUT FORMAT - PROVIDE ALL DETAILS TO USER:
1. **AUTOMATIC FIXES APPLIED** (with before/after examples):
   - Line X: 'old text' → 'new text' 
   - Line Y: 'old text' → 'new text'

2. **CRITICAL ISSUES** (must fix immediately):
   - **Line X**: [Current text excerpt]
     - **Issue**: [What's wrong]
     - **Fix**: [Exact replacement text or specific action]
     - **Why**: [Impact on users/functionality]

3. **IMPORTANT ISSUES** (should fix for style compliance):
   - **Line X**: [Current text excerpt] 
     - **Issue**: [Style guide violation]
     - **Fix**: [Exact replacement text or specific action]
     - **Why**: [Style/readability improvement]

4. **MINOR SUGGESTIONS** (optional enhancements):
   - **Line X**: [Current text excerpt]
     - **Suggestion**: [Possible improvement]
     - **Benefit**: [Why this helps]

5. **CHANGE TRACKING CHECKLIST**:
   - [x] Automatic fixes applied (3 items)
   - [ ] Critical issue 1: [Brief description with line number]
   - [ ] Critical issue 2: [Brief description with line number] 
   - [ ] Important issue 1: [Brief description with line number]
   - [ ] etc.

IMPORTANT: Include specific line numbers, exact current text, and precise replacement text for every issue. Make each item immediately actionable."
```

---

## Reference Documentation Review and Fix Prompt

```
Please review and fix the reference documentation file at REFERENCE_FILE_PATH using an enhanced approach that provides both automated fixes and actionable feedback.

This prompt handles all reference documentation types including screens, widgets, dialogs, and UI components.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the reference style guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/TrueNAS-Reference-Style-Guide.md and the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md.

Then review the reference file at REFERENCE_FILE_PATH for compliance and make automatic fixes where possible:

AUTOMATED FIXES (use Edit/MultiEdit tools ONLY when absolutely certain):
- Fix obvious typos and spelling errors (like 'fle' → 'file')
- Replace 'will' with present tense alternatives (when clearly future tense)
- Replace 'may' with 'might', 'could', or 'can' (when expressing possibility)
- Fix actual duplicate words (like 'the the' BUT NEVER 'edit edit' or 'delete delete' patterns with icons)
- DO NOT modify material icon formatting - inline styles may be intentional
- Fix basic table formatting issues (only clear errors like missing pipes)

ANALYSIS FOR MANUAL REVIEW:
- Table structure ({{< truetable >}} usage, Setting|Description format)
- Field descriptions completeness and clarity
- Screenshot placement and alt-text quality
- Cross-reference accuracy and format
- UI element documentation completeness
- Hierarchical organization (Widget → List → Details)

IMPORTANT: DO NOT flag patterns like '<i>edit</i> edit' or '<i>delete</i> delete' as issues - these are intentional accessibility patterns where icon text serves screen readers and plain text provides visual clarity.

OUTPUT FORMAT - PROVIDE ALL DETAILS TO USER:
1. **AUTOMATIC FIXES APPLIED** (with before/after examples):
   - Line X: 'old text' → 'new text'
   - Line Y: 'old text' → 'new text'

2. **CRITICAL ISSUES** (must fix immediately):
   - **Line X**: [Current text excerpt]
     - **Issue**: [What's wrong - missing fields, broken links, etc.]
     - **Fix**: [Exact replacement text or specific action]
     - **Why**: [Impact on user understanding/functionality]

3. **IMPORTANT ISSUES** (should fix for consistency):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Formatting/description problem]
     - **Fix**: [Exact replacement text or specific action] 
     - **Why**: [Consistency/clarity improvement]

4. **MINOR SUGGESTIONS** (optional enhancements):
   - **Line X**: [Current text excerpt]
     - **Suggestion**: [Possible improvement]
     - **Benefit**: [How this helps users]

5. **CHANGE TRACKING CHECKLIST**:
   - [x] Automatic fixes applied (X items)
   - [ ] Critical issue 1: [Brief description with line number]
   - [ ] Critical issue 2: [Brief description with line number]
   - [ ] Important issue 1: [Brief description with line number] 
   - [ ] etc.

IMPORTANT: Include specific line numbers, exact current text, and precise replacement text for every issue. Make each item immediately actionable."
```


---

## General Documentation Review and Fix Prompt

```
Please review and fix the documentation file at GENERAL_FILE_PATH for general TrueNAS documentation compliance using an enhanced approach.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md and determine if this is tutorial or reference content.

Then review the file at GENERAL_FILE_PATH for compliance and make automatic fixes where possible:

AUTOMATED FIXES (use Edit/MultiEdit tools ONLY when absolutely certain):
- Fix obvious typos and spelling errors (like 'fle' → 'file')
- Replace 'will' with present tense alternatives (when clearly future tense) 
- Replace 'may' with 'might', 'could', or 'can' (when expressing possibility)
- Fix actual duplicate words (like 'the the' BUT NEVER 'edit edit' or 'delete delete' patterns with icons)
- Correct basic punctuation issues (missing periods, extra spaces)
- DO NOT modify material icon formatting - inline styles may be intentional

ANALYSIS FOR MANUAL REVIEW:
- Content type compliance (tutorial vs reference voice)
- Hugo shortcode usage and formatting
- Cross-reference accuracy and consistency
- Overall structure and organization
- Writing clarity and readability

IMPORTANT: DO NOT flag patterns like '<i>edit</i> edit' or '<i>delete</i> delete' as issues - these are intentional accessibility patterns where icon text serves screen readers and plain text provides visual clarity.

OUTPUT FORMAT - PROVIDE ALL DETAILS TO USER:
1. **AUTOMATIC FIXES APPLIED** (with before/after examples):
   - Line X: 'old text' → 'new text'
   - Line Y: 'old text' → 'new text'

2. **CRITICAL ISSUES** (must fix immediately):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Functional problem, broken link, major compliance issue]
     - **Fix**: [Exact replacement text or specific action]
     - **Why**: [Impact on functionality/user experience]

3. **IMPORTANT ISSUES** (should fix for consistency):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Style/readability problem]
     - **Fix**: [Exact replacement text or specific action]
     - **Why**: [Consistency/readability improvement]

4. **MINOR SUGGESTIONS** (optional enhancements):
   - **Line X**: [Current text excerpt]
     - **Suggestion**: [Possible improvement]
     - **Benefit**: [Enhancement value]

5. **CHANGE TRACKING CHECKLIST**:
   - [x] Automatic fixes applied (X items)
   - [ ] Critical issue 1: [Brief description with line number]
   - [ ] Critical issue 2: [Brief description with line number]
   - [ ] Important issue 1: [Brief description with line number]
   - [ ] etc.

IMPORTANT: Include specific line numbers, exact current text, and precise replacement text for every issue. Make each item immediately actionable."
```

---

## Quick Review Checklist

Use this checklist after receiving Claude's feedback to ensure all major standards are met:

### Writing Standards ✓
- [ ] Present tense, active voice used throughout
- [ ] Appropriate voice for content type (2nd person for tutorials, descriptive for reference)
- [ ] No "may" for possibility → uses "might", "could", or "can"
- [ ] No "will" → stays in present tense
- [ ] No "scare quotes" for emphasis
- [ ] **Bold** only for UI elements, never emphasis
- [ ] Sentences under 30 words
- [ ] 5th grade reading level appropriate

### Hugo Shortcodes ✓
- [ ] Images use `{{< trueimage >}}` with descriptive alt-text
- [ ] Cross-references use `{{< ref >}}` shortcode
- [ ] Tables use `{{< truetable >}}` shortcode
- [ ] Warnings use appropriate `{{< hint >}}` types
- [ ] Enterprise features marked with `{{< enterprise >}}`

### Formatting Standards ✓
- [ ] UI elements in **bold** (buttons, screens, fields)
- [ ] Variables and examples in *italics*
- [ ] Commands in `code formatting`
- [ ] Keyboard buttons use `<kbd>` tags
- [ ] File names use `<file>` tags
- [ ] Material Icons properly formatted

### Content Structure ✓
- [ ] Frontmatter complete and properly formatted
- [ ] Headings follow hierarchy (title case H2, sentence case H3+)
- [ ] Screenshots placed appropriately (before tables for reference)
- [ ] Cross-references point to correct locations
- [ ] Prerequisites only included when setup dependencies exist

---

## Important Usage Notes

### Easy Copy-and-Replace Process
1. **Copy the complete prompt** from the appropriate section above
2. **Use Ctrl+F to find and replace** the placeholder with your file path:
   - `TUTORIAL_FILE_PATH` → your tutorial file path
   - `REFERENCE_FILE_PATH` → your reference file path  
   - `GENERAL_FILE_PATH` → your general documentation file path
3. **Paste the complete prompt** with your file path into Claude
4. **Include the full Task tool instructions** for consistent results

### Why Short Prompts Don't Work
Brief requests like "review this file using the enhanced approach" will NOT work because:
- Claude has no memory of this system between conversations
- "Enhanced approach" is undefined without explicit instructions
- Different Claude instances would produce inconsistent results
- The specific output format and automated fixes require explicit instruction

---

## Troubleshooting Agent Reviews

**If Claude doesn't use the Task tool:**
- Explicitly request: "Use the Task tool with a general-purpose agent"
- Ensure the prompt includes the full agent instructions

**If feedback is too general:**
- Request specific line numbers and corrections
- Ask for examples of proper alternatives

**If the review misses style guide rules:**
- Verify the agent read the correct style guide files
- Request a second review focusing on specific standards

---

**Document Updated**: September 12, 2025
**Usage**: Copy prompts exactly, replace [FILE_PATH] with actual file paths