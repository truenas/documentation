# TrueNAS Documentation Review Checklist

This comprehensive checklist helps ensure documentation meets TrueNAS quality and consistency standards. Use this for manual reviews or to verify Claude agent feedback.

---

## Pre-Review Setup

### Content Type Identification
- [ ] **Tutorial**: Step-by-step instructions for completing tasks
- [ ] **Reference**: UI screen documentation and technical specifications  
- [ ] **Component**: Individual UI element documentation

### Style Guide References
- [ ] Tutorial: `/documentation/dev/style-guides/TrueNAS-Tutorial-Style-Guide.md`
- [ ] Reference: `/documentation/dev/style-guides/TrueNAS-Reference-Style-Guide.md`
- [ ] Common: `/documentation/dev/style-guides/Common-Elements-Guide.md`

---

## Content Structure Review

### Frontmatter Standards ✓
- [ ] **Title**: Descriptive, matches content purpose
- [ ] **Description**: Clear summary (50-160 characters recommended)
- [ ] **Weight**: Appropriate ordering number
- [ ] **Tags**: Relevant keywords for discoverability
- [ ] **Aliases**: Included if content moved from previous location
- [ ] **Draft**: Set to false for published content

### Heading Hierarchy ✓
- [ ] **H1**: Only in title (frontmatter), not in body
- [ ] **H2**: Title case ("Managing SMB Shares") - 85% pattern
- [ ] **H3+**: Sentence case ("Adding a new share") - 70% pattern
- [ ] **Nesting**: Logical hierarchy, no skipped levels
- [ ] **Length**: Concise and descriptive

### Content Organization ✓
**For Tutorials:**
- [ ] **Introduction**: 2-4 sentences, functional purpose (90% pattern)
- [ ] **Prerequisites**: Only when setup dependencies exist (25% pattern)
- [ ] **Main Content**: Step-by-step procedures
- [ ] **Ending**: Task completion, no formal conclusions (85% pattern)

**For Reference:**
- [ ] **Introduction**: Descriptive, what the screen/feature does
- [ ] **Screenshot**: Before related content (85% pattern)
- [ ] **Settings Tables**: Comprehensive field documentation
- [ ] **Cross-References**: Related screens and parent/child relationships

---

## Writing Standards Review

### Voice and Tense ✓
- [ ] **Present tense**: "The system creates" not "The system will create"
- [ ] **Active voice**: "Click Save" not "Save should be clicked"
- [ ] **Tutorials**: Second person ("You configure the settings")
- [ ] **Reference**: Descriptive voice ("The field accepts values")
- [ ] **Imperative acceptable**: For reference docs ("Enter the server name")

### Prohibited Words and Constructions ✓
- [ ] **No "may" for possibility**: Use "might", "could", or "can"
  - ❌ "You may see an error" → ✅ "You might see an error"
- [ ] **No "will"**: Stay in present tense
  - ❌ "This will create a pool" → ✅ "This creates a pool"
- [ ] **No gerunds (-ing words)**: Cause tense/voice errors
  - ❌ "After clicking Save" → ✅ "After you click Save"
- [ ] **No semicolons**: Use two short sentences instead
- [ ] **No possessive ('s) for objects**: Only for human ownership
  - ❌ "The system's configuration" → ✅ "The system configuration"
- [ ] **No slashes**: Write out alternatives
  - ❌ "enable/disable" → ✅ "enable or disable"
- [ ] **No idioms**: Be literal for international readers

### Sentence Structure ✓
- [ ] **Under 30 words**: Keep sentences concise
- [ ] **5th grade reading level**: Simple structures for ESL readers
- [ ] **Clear antecedents**: Pronouns have obvious references
- [ ] **Articles included**: Use "a", "an", "the" (Global English)

---

## Formatting Standards Review

### Text Emphasis ✓
- [ ] **Bold only for UI elements**: Screens, buttons, fields, settings
  - ✅ Click **Save** to apply changes
  - ❌ This is **important** to remember
- [ ] **Italics for**:
  - Variables: "Type *tank* into the Name field"
  - First instance of terms: "A *dataset* is a file system"
  - User-entered values: "Enter *192.168.1.100* in the IP field"
- [ ] **Code formatting for**:
  - CLI commands: `zfs list`
  - File paths: `/mnt/tank/dataset`
  - Configuration values: `enabled=true`
- [ ] **Keyboard buttons**: Use `<kbd>Enter</kbd>` format
- [ ] **File names**: Use `<file>config.json</file>` format

### Hugo Shortcode Usage ✓
- [ ] **Images**: `{{< trueimage src="/images/SCALE/Area/FeatureName.png" alt="Descriptive Text" id="Descriptive Text" >}}`
- [ ] **Tables**: `{{< truetable >}}` for all settings/options tables
- [ ] **Cross-references**: `{{< ref "filename" >}}` for internal links
- [ ] **Expandable sections**: `{{< expand "Title" "v" >}}` for detailed info
- [ ] **Warnings**: `{{< hint type="warning/info/tip" >}}` for callouts
- [ ] **Enterprise**: `{{< enterprise >}}` for licensed features

### Material Icons ✓
- [ ] **Consistent format**: `<span class="material-icons">icon_name</span>`
- [ ] **Aria labels**: Include `aria-hidden="true"` and `title="Description"`
- [ ] **Context description**: Explain icon function in surrounding text

---

## Content-Specific Standards

### Tutorial-Specific ✓
- [ ] **Step numbering**: Only for actions, not results
- [ ] **Expected results**: Every action has explained outcome  
- [ ] **Nested steps**: Maximum 4 levels (1. a. 1. A.)
- [ ] **Procedures**: Limited to 7-10 main steps
- [ ] **Direct address**: "You click Save" approach
- [ ] **Troubleshooting**: Only when common issues are known

### Reference-Specific ✓
- [ ] **Table format**: Two-column "Setting | Description" (89% pattern)
- [ ] **Required fields**: "(Required)" at start of description (91% pattern)
- [ ] **Dropdown options**: Standardized format for listing choices
- [ ] **Dialog documentation**: "Action + Item Type + Dialog" naming
- [ ] **Screen hierarchy**: Widget → List → Details organization
- [ ] **Confirmation patterns**: "Confirm" checkbox activation described

### Component-Specific ✓
- [ ] **Component type**: Clearly identified (widget/dialog/form/element)
- [ ] **Functional description**: What it DOES, not how to use it
- [ ] **Usage context**: Where it appears, when it's used
- [ ] **Related components**: Parent/child relationships documented
- [ ] **Behavioral documentation**: What happens when interacted with

---

## Technical Accuracy Review

### Screenshots and Images ✓
- [ ] **File naming**: `/images/SCALE/Area/FeatureScreenName.png`
- [ ] **Alt-text**: Descriptive of UI element shown, not generic
- [ ] **Placement**: Before related content (85% reference pattern)
- [ ] **Current version**: Screenshots match current UI
- [ ] **Proper sizing**: Readable but not oversized

### Cross-References ✓
- [ ] **Internal links**: Use `{{< ref "filename" >}}` shortcode
- [ ] **Valid targets**: All links point to existing content
- [ ] **Contextual**: Links are relevant to current content
- [ ] **Parent/child**: Related screens properly linked

### Code and Commands ✓
- [ ] **Syntax accuracy**: All commands and code examples correct
- [ ] **Absolute paths**: Use full paths for file references
- [ ] **Version specificity**: Note when behavior changes between versions
- [ ] **Platform differences**: Windows/Linux distinctions noted

---

## Quality Assurance Checks

### Consistency ✓
- [ ] **Terminology**: Same terms used throughout
- [ ] **UI element names**: Match actual interface text exactly
- [ ] **Capitalization**: Only proper nouns capitalized
- [ ] **Number format**: Consistent (spell out 1-9, use numerals 10+)

### Completeness ✓
- [ ] **All options covered**: Every field/setting documented
- [ ] **Prerequisites met**: Required setup documented when needed
- [ ] **Results explained**: Expected outcomes described
- [ ] **Error conditions**: Common issues addressed when known

### Accessibility ✓
- [ ] **Screen reader friendly**: Alt-text and aria-labels included
- [ ] **International readers**: Simple language, clear structure
- [ ] **Cognitive load**: Information presented in digestible chunks
- [ ] **Navigation aids**: Clear headings and cross-references

---

## Final Review Steps

### Before Publishing ✓
- [ ] **Spell check**: No typos or grammatical errors
- [ ] **Link validation**: All cross-references work
- [ ] **Image verification**: All screenshots load properly
- [ ] **Template compliance**: Matches appropriate template structure
- [ ] **Style guide alignment**: Meets all documented standards

### Post-Review Actions ✓
- [ ] **Address critical issues**: Fix all must-fix items
- [ ] **Consider improvements**: Evaluate should-fix suggestions
- [ ] **Update tracking**: Note any pattern changes for style guide updates
- [ ] **Archive review**: Keep record of feedback for future reference

---

## Common Issues and Solutions

### Writing Problems
**Issue**: Using "will" or "may"
**Solution**: Convert to present tense or use "might/could/can"

**Issue**: Bold for emphasis
**Solution**: Remove emphasis bold, use only for UI elements

**Issue**: Long sentences
**Solution**: Break into shorter sentences under 30 words

### Formatting Problems
**Issue**: Missing shortcodes
**Solution**: Replace HTML with Hugo shortcodes

**Issue**: Inconsistent UI formatting
**Solution**: Ensure all interface elements use **bold**

### Structure Problems
**Issue**: Missing prerequisites when needed
**Solution**: Add only when setup dependencies exist

**Issue**: No expected results
**Solution**: Add outcome description after each action

---

**Document Updated**: September 12, 2025  
**Usage**: Check items as you review, address unchecked items before publishing