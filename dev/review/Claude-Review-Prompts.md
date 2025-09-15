# TrueNAS Documentation Review Prompts for Claude Code

This document contains standardized prompts for using Claude Code agents to review TrueNAS documentation for style guide compliance.

## How to Use These Prompts

1. **Copy the appropriate prompt** for your content type
2. **Replace [FILE_PATH]** with the path to the documentation file you want to review
3. **Ask Claude** to use the prompt with the Task tool
4. **Review the feedback** and implement suggested changes
5. **Use the checklist** to verify compliance

---

## Tutorial Review Prompt

```
Please review the tutorial documentation file at [FILE_PATH] for compliance with TrueNAS tutorial standards using an agent.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the tutorial style guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/TrueNAS-Tutorial-Style-Guide.md and the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md.

Then review the tutorial file at [FILE_PATH] for compliance with these standards:

STRUCTURE REVIEW:
- Check heading hierarchy (title case H2, sentence case H3+)
- Verify introduction follows functional purpose pattern (2-4 sentences)
- Confirm prerequisites are only included when setup dependencies exist
- Check for proper task completion ending (no formal conclusions)

WRITING STANDARDS REVIEW:
- Present tense, active voice throughout
- Second person (direct address) usage
- No use of 'may' for possibility (should use 'might', 'could', or 'can')
- No use of 'will' (stay in present tense)
- No 'scare quotes' for emphasis
- Bold only used for UI elements, never for emphasis
- Sentences under 30 words
- 5th grade reading level appropriate
- No gerunds, semicolons, or object possessives

FORMATTING REVIEW:
- Hugo shortcodes used correctly (trueimage, ref, hint, truetable)
- Cross-references use {{< ref >}} shortcode
- Screenshots use {{< trueimage >}} with descriptive alt-text
- UI elements properly formatted in **bold**
- Material Icons formatted consistently

Provide specific feedback organized by:
1. Critical Issues (must fix)
2. Style Improvements (should fix)
3. Minor Suggestions (optional)

For each issue, include the specific line/section and suggested correction."
```

---

## Reference Review Prompt

```
Please review the reference documentation file at [FILE_PATH] for compliance with TrueNAS reference standards using an agent.

This prompt handles all reference documentation types including screens, widgets, dialogs, and UI components.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the reference style guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/TrueNAS-Reference-Style-Guide.md and the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md.

Then review the reference file at [FILE_PATH] for compliance with these standards:

STRUCTURE REVIEW:
- Check hierarchical organization (Widget → List → Details pattern)
- Verify table formatting uses {{< truetable >}} shortcode
- Confirm two-column 'Setting | Description' format
- Check screenshot placement (before related tables)
- Verify cross-references use {{< ref >}} shortcode

UI DOCUMENTATION REVIEW:
- Required fields marked with '(Required)' at description start
- UI elements consistently formatted in **bold**
- Field descriptions include dropdown options when applicable
- Dialog documentation follows 'Action + Item Type + Dialog' naming
- Material Icons properly referenced with aria-labels
- Widget/component sections document functionality within screen context
- All UI elements (screens, dialogs, widgets, forms) properly documented

WRITING STANDARDS REVIEW:
- Present tense, active voice throughout
- Descriptive voice (avoid second person pronouns)
- Imperative mood acceptable for instructions
- No use of 'may' for possibility (should use 'might', 'could', or 'can')
- No use of 'will' (stay in present tense)
- Bold only used for UI elements, never for emphasis
- 5th grade reading level appropriate

TECHNICAL ACCURACY REVIEW:
- Screenshot naming follows convention: /images/SCALE/Area/FeatureScreenName.png
- Alt-text matches UI element being shown
- Cross-references point to correct related screens
- Enterprise features properly marked with {{< enterprise >}}

Provide specific feedback organized by:
1. Critical Issues (must fix)
2. Style Improvements (should fix)  
3. Minor Suggestions (optional)

For each issue, include the specific line/section and suggested correction."
```


---

## General Documentation Review Prompt

```
Please review the documentation file at [FILE_PATH] for general TrueNAS documentation compliance using an agent.

Use the Task tool with a general-purpose agent and provide this prompt:

"Read the common elements guide at /mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/style-guides/Common-Elements-Guide.md and determine if this is tutorial or reference content.

Then review the file at [FILE_PATH] for compliance with these universal standards:

WRITING STANDARDS REVIEW:
- Present tense, active voice throughout
- Appropriate voice for content type (second person for tutorials, descriptive for reference)
- No use of 'may' for possibility (should use 'might', 'could', or 'can')
- No use of 'will' (stay in present tense)
- No 'scare quotes' for emphasis
- Bold only used for UI elements, never for emphasis
- No gerunds, semicolons, or object possessives
- Sentences under 30 words
- 5th grade reading level appropriate

HUGO SHORTCODE REVIEW:
- Images use {{< trueimage >}} with proper alt-text
- Cross-references use {{< ref >}} shortcode  
- Tables use {{< truetable >}} shortcode
- Warnings use {{< hint >}} shortcode appropriately
- Enterprise features marked with {{< enterprise >}}

FORMATTING REVIEW:
- Frontmatter properly structured
- UI elements consistently in **bold**
- Variables and examples in *italics*
- Commands in `code formatting`
- Keyboard buttons use <kbd> tags
- File names use <file> tags

Provide specific feedback organized by:
1. Critical Issues (must fix)
2. Style Improvements (should fix)
3. Minor Suggestions (optional)

For each issue, include the specific line/section and suggested correction."
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

## Usage Examples

### Tutorial Review Example
```
Ask Claude: "Please review the tutorial documentation file at /mnt/c/Users/iXUser/Documents/GitHub/documentation/content/SCALE/SCALETutorials/Shares/SMB/_index.md for compliance with TrueNAS tutorial standards using an agent."
```

### Reference Review Example  
```
Ask Claude: "Please review the reference documentation file at /mnt/c/Users/iXUser/Documents/GitHub/documentation/content/SCALE/SCALEUIReference/SystemSettings/FailoverScreen.md for compliance with TrueNAS reference standards using an agent."
```

### Reference Documentation with Widgets/Components
```
Ask Claude: "Please review the reference documentation file at /mnt/c/Users/iXUser/Documents/GitHub/documentation/content/SCALE/SCALEUIReference/Network/NetworkWidget.md for compliance with TrueNAS reference standards using an agent."
```

### Batch Review
For multiple files, use the general review prompt and specify the content type in your request.

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