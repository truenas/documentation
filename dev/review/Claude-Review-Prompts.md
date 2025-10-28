# TrueNAS Documentation Review System for Claude Code

This system provides comprehensive review and automated fixes for TrueNAS documentation, with actionable checklists and progress tracking.

## Quick Start Guide

**Step 1**: Choose your prompt type and copy the complete prompt:
- **Tutorial drafts** → Use [Draft Tutorial Review and Fix Prompt](#draft-tutorial-review-and-fix-prompt)
- **Reference/UI drafts** → Use [Draft Reference Documentation Review and Fix Prompt](#draft-reference-documentation-review-and-fix-prompt) 

**Step 2**: Replace the placeholder with your file path:
- `TUTORIAL_FILE_PATH` → `/path/to/your/tutorial.md`
- `REFERENCE_FILE_PATH` → `/path/to/your/reference.md`

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

## Draft Tutorial Review and Fix Prompt

```
Please review and improve the DRAFT tutorial documentation file at TUTORIAL_FILE_PATH using a draft-focused approach that prioritizes content clarity and structural issues.

**CONTEXT: This is a draft document** - focus on helping the writer improve content quality, clarity, user experience, and style guide compliance.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the tutorial style guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/TrueNAS-Tutorial-Style-Guide.md and the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md.

Then review the DRAFT tutorial file at TUTORIAL_FILE_PATH with emphasis on content quality and user experience:

AUTOMATED FIXES (use Edit/MultiEdit tools ONLY when absolutely certain):
- Fix obvious typos and spelling errors (like 'fle' → 'file')
- Replace 'will' with present tense alternatives (when clearly future tense)
- Replace 'may' with 'might', 'could', or 'can' (when expressing possibility)
- Fix actual duplicate words (like 'the the' BUT NEVER 'edit edit' or 'delete delete' patterns with icons)
- Correct basic punctuation issues (missing periods, extra spaces)
- Convert markdown images ![alt](src "title") to {{< trueimage src="src" alt="descriptive alt text" id="Readable Description" >}} format
- DO NOT modify material icon formatting - inline styles may be intentional

PRIORITY 1 - CONTENT & CLARITY ANALYSIS:
- **Task flow logic**: Does the tutorial sequence make sense? Are steps in logical order?
- **Clarity for international readers**: Flag idioms, cultural references, complex sentence structures
- **Reading level**: Identify overly complex sentences, jargon without explanation, passive voice
- **User context**: Does the intro clearly explain what users accomplish and why?
- **Prerequisites and assumptions**: Are required knowledge/setup steps clearly stated?
- **Error handling**: Are potential failure points and troubleshooting addressed?

PRIORITY 2 - STRUCTURE & COMPLETENESS:
- Heading hierarchy compliance (title case H2, sentence case H3+)
- Introduction structure (functional purpose pattern)
- Step formatting and numbering consistency
- Cross-reference accuracy and usefulness
- Screenshot placement and relevance to content
- Missing sections or incomplete explanations

PRIORITY 3 - STYLE GUIDE COMPLIANCE:
- Hugo shortcode usage and formatting
- UI element documentation (bold formatting, naming consistency)
- Voice and tense consistency
- Navigation path accuracy
- Include file analysis for shared content

IMPORTANT: 
- DO NOT flag patterns like '<i>edit</i> edit' or '<i>delete</i> delete' as issues - these are intentional accessibility patterns
- DO NOT suggest filename changes or naming convention issues - filenames are managed separately from content quality
- DO NOT modify icon + text patterns like 'delete icon' or 'edit button' - these are acceptable as-is
- DO NOT flag &NewLine; at the beginning of include files as issues - this is intentional Hugo formatting
- Hugo {{< include file="..." >}} shortcodes inject content inline - read the included files and analyze their content for style guide compliance just like the main document
- When suggesting fixes for included content, reference the include file path: "Include file /static/includes/filename.md, Line X:"
- Include file improvements benefit multiple documents that use the same includes
- Focus on helping the writer create better content for users

OUTPUT FORMAT - PROVIDE ALL DETAILS TO USER:
1. **AUTOMATIC FIXES APPLIED** (with before/after examples):
   - Line X: 'old text' → 'new text'
   - Line Y: 'old text' → 'new text'

2. **CONTENT & CLARITY ISSUES** (Priority 1 - most important for draft improvement):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Clarity, flow, or user experience problem]
     - **Suggestion**: [How to improve for better user understanding]
     - **Why**: [Impact on user success/international accessibility]

3. **STRUCTURAL ISSUES** (Priority 2 - important for completeness):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Missing content, organization, or structural problem]
     - **Suggestion**: [What to add/reorganize/clarify]
     - **Why**: [How this improves the tutorial experience]

4. **STYLE & FORMATTING** (Priority 3 - polish for publication):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Style guide or formatting inconsistency]
     - **Fix**: [Exact replacement text or specific action]
     - **Why**: [Consistency/standard compliance benefit]

5. **DRAFT IMPROVEMENT CHECKLIST**:
   - [x] Automatic fixes applied (X items)
   - [ ] Content issue 1: [Brief description with line number]
   - [ ] Content issue 2: [Brief description with line number]  
   - [ ] Structural issue 1: [Brief description with line number]
   - [ ] Style issue 1: [Brief description with line number]

IMPORTANT: This is draft feedback - help the writer create clear, usable content that follows style guide standards."
```

---


## Draft Reference Documentation Review and Fix Prompt

```
Please review and improve the DRAFT reference documentation file at REFERENCE_FILE_PATH using a draft-focused approach that prioritizes content completeness and user clarity.

**CONTEXT: This is a draft document** - focus on helping the writer create comprehensive, clear UI documentation that users can successfully follow.

This prompt handles all reference documentation types including screens, widgets, dialogs, and UI components.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the reference style guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/TrueNAS-Reference-Style-Guide.md and the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md.

Then review the DRAFT reference file at REFERENCE_FILE_PATH with emphasis on content completeness and usability:

AUTOMATED FIXES (use Edit/MultiEdit tools ONLY when absolutely certain):
- Fix obvious typos and spelling errors (like 'fle' → 'file')
- Replace 'will' with present tense alternatives (when clearly future tense)
- Replace 'may' with 'might', 'could', or 'can' (when expressing possibility)
- Fix actual duplicate words (like 'the the' BUT NEVER icon patterns like 'edit edit', 'delete delete', or 'delete icon')
- Convert markdown images ![alt](src "title") to {{< trueimage src="src" alt="descriptive alt text" id="Readable Description" >}} format
- DO NOT modify material icon formatting - inline styles may be intentional
- DO NOT change icon + text patterns (like 'delete icon' or 'edit button') - these are acceptable as-is
- Fix basic table formatting issues (only clear errors like missing pipes)

PRIORITY 1 - CONTENT COMPLETENESS & CLARITY:
- **Field/setting descriptions**: Are all UI elements documented? Do descriptions explain purpose and impact?
- **User task context**: Can users understand what each setting accomplishes and when to use it?
- **International reader clarity**: Flag complex sentences, idioms, cultural assumptions
- **Missing information**: Are there UI elements shown in screenshots but not documented?
- **Prerequisite context**: Do users understand what screen/feature this relates to in their workflow?
- **Value/option explanations**: Are dropdown options, field formats, or valid inputs clearly explained?

PRIORITY 2 - STRUCTURE & ORGANIZATION:
- Hierarchical organization (Widget → List → Details)
- Table structure ({{< truetable >}} usage, Setting|Description format)
- Screenshot placement and relevance to content sections
- Cross-reference accuracy and usefulness for user navigation
- Navigation path accuracy (how users reach this screen)
- Missing sections for UI components visible in screenshots

PRIORITY 3 - STYLE GUIDE COMPLIANCE:
- UI element documentation completeness
- Hugo shortcode usage and formatting
- Voice and tense consistency
- Include file analysis for shared content

IMPORTANT: 
- DO NOT flag patterns like '<i>edit</i> edit' or '<i>delete</i> delete' as issues - these are intentional accessibility patterns
- DO NOT suggest filename changes or naming convention issues - filenames are managed separately from content quality
- DO NOT modify icon + text patterns like 'delete icon' or 'edit button' - these are acceptable as-is
- DO NOT flag &NewLine; at the beginning of include files as issues - this is intentional Hugo formatting
- Hugo {{< include file="..." >}} shortcodes inject content inline - read the included files and analyze their content for style guide compliance just like the main document
- When suggesting fixes for included content, reference the include file path: "Include file /static/includes/filename.md, Line X:"
- Include file improvements benefit multiple documents that use the same includes
- Focus on helping the writer create complete, usable UI documentation

OUTPUT FORMAT - PROVIDE ALL DETAILS TO USER:
1. **AUTOMATIC FIXES APPLIED** (with before/after examples):
   - Line X: 'old text' → 'new text'
   - Line Y: 'old text' → 'new text'

2. **CONTENT COMPLETENESS ISSUES** (Priority 1 - most important for draft improvement):
   - **Line X**: [Current text excerpt or missing content area]
     - **Issue**: [Missing documentation, unclear description, or user context problem]
     - **Suggestion**: [What information to add or clarify for users]
     - **Why**: [How this helps users successfully complete their tasks]

3. **STRUCTURE & ORGANIZATION ISSUES** (Priority 2 - important for usability):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Organization, navigation, or structural problem]
     - **Suggestion**: [How to improve layout/organization/flow]
     - **Why**: [How this improves user experience with the documentation]

4. **STYLE & FORMATTING** (Priority 3 - polish for publication):
   - **Line X**: [Current text excerpt]
     - **Issue**: [Style guide or formatting inconsistency]
     - **Fix**: [Exact replacement text or specific action]
     - **Why**: [Consistency/standard compliance benefit]

5. **DRAFT IMPROVEMENT CHECKLIST**:
   - [x] Automatic fixes applied (X items)
   - [ ] Content issue 1: [Brief description with line number]
   - [ ] Content issue 2: [Brief description with line number]
   - [ ] Structural issue 1: [Brief description with line number]
   - [ ] Style issue 1: [Brief description with line number]

IMPORTANT: This is draft feedback - help the writer create complete, clear UI documentation that follows style guide standards."
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