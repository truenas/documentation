# Common Elements Guide

## Purpose and Scope

This guide documents shared standards and elements used consistently across **both** tutorial and reference documentation for TrueNAS. These common elements serve as the foundation that maintains consistency across all documentation types, ensuring users receive a unified experience regardless of the content format they encounter.

**Scope**: This guide covers elements that appear in both tutorial and reference documentation with high consistency rates (based on analysis of 126 files), serving as the baseline for specialized style guides.

**Integration**: Use this guide in conjunction with:
- TrueNAS Tutorial Style Guide (tutorial-specific elements)
- TrueNAS Reference Style Guide (reference-specific elements)

---

## Writing Standards

These prescriptive writing rules apply to ALL TrueNAS documentation types and must be followed consistently across tutorials, reference documentation, and all other content. These standards ensure high-quality, accessible documentation for our international user base.

### Voice and Tense Requirements (Universal Rules)

**Always use present tense, active voice:**
- Correct: "TrueNAS displays the configuration screen"
- Incorrect: "The configuration screen will be displayed"
- Incorrect: "The configuration screen is displayed by TrueNAS"

**Avoid future tense completely:**
- Never use "will" → convert to present tense
- Incorrect: "This will create a new dataset"
- Correct: "This creates a new dataset"

**Use appropriate point of view for content type:**
- **Tutorials**: Second person (direct address) - "You configure the settings"
- **Reference**: Straightforward descriptive language - "This field accepts numeric values"
- **Reference**: Imperative mood acceptable - "Enter the server address"

### Word Choice Rules (Mandatory Standards)

**Never use "may" to express possibility** → use "might", "could", or "can":
- Incorrect: "You may need to restart the system"
- Correct: "You might need to restart the system"
- Correct: "You could need to restart the system" 
- Correct: "You can restart the system" (for capability/ability)
- Note: Use "can" only for ability/capability, not possibility

**Never use "will"** → stay in present tense:
- Incorrect: "The system will restart automatically"
- Correct: "The system restarts automatically"

**Never use "scare quotes" for emphasis** → only use quotation marks for actual quotations:
- Incorrect: Make sure to "save" your work regularly
- Correct: Make sure to save your work regularly
- Correct: Click **Save** to preserve your work

**Never use bold for emphasis** → only use **bold** for UI elements:
- Incorrect: This is **very important** to remember
- Correct: This is important to remember
- Correct: Click the **Save** button (UI element)

**Use specific terms correctly:**
- Use "once" only if action occurs one time: "This message displays once"
- Use "after" for sequential actions: "After the system starts, configure the settings"
- Avoid "may" for capability: Use "can" instead

### Readability Standards (Quality Requirements)

**Write at 5th grade reading level** for international/ESL readers:
- Use simple, common words when possible
- Avoid jargon and technical terms unless necessary
- Explain technical terms when first introduced

**Use clear, simple sentence structures:**
- Prefer declarative statements over complex constructions
- Use short sentences instead of compound sentences with semicolons
- Avoid nested clauses and complex grammatical structures

**Avoid problematic constructions:**
- **No gerunds (-ing words)** that complicate sentences
  - Incorrect: "Clicking the button means the system can restart"
  - Correct: "Click the button. The system restarts."
- **No passive voice** constructions
  - Incorrect: "The settings are configured by the administrator"
  - Correct: "The administrator configures the settings"
- **No semicolons** → use two simple sentences instead

**Write action-oriented content:**
- Use "do this to get this result" format when possible
- Include expected results when helpful
- Focus on user benefits and task completion

### Content Quality Standards

**Be explicit and clear:**
- Don't assume reader knowledge
- Explain what should happen on screen
- Describe expected results of actions
- Provide troubleshooting context when appropriate

**Use consistent terminology:**
- Maintain the same terms throughout documentation
- Don't vary word choice for the same concept
- Follow established TrueNAS terminology conventions

**Structure content logically:**
- Present information in order of user needs
- Group related information together
- Use progressive disclosure (expand shortcodes) for detailed information

---

## Hugo Shortcode Standards

### Primary Shortcodes (Universal Usage)

#### `{{< truetable >}}` - Table Formatting
- **Usage Frequency**: 94% of reference docs, commonly used in tutorials
- **Purpose**: Standardized table presentation across all content types
- **Implementation**: Required for all data tables

```markdown
{{< truetable >}}
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
{{< /truetable >}}
```

#### `{{< trueimage >}}` - Image Display
- **Usage Frequency**: 97% of reference docs, consistent in tutorials
- **Purpose**: Standardized image formatting with accessibility features
- **Requirements**: Must include alt-text and proper file paths

```markdown
{{< trueimage src="/images/SCALE/Section/FeatureNameScreenType.png" alt="Descriptive text matching screen function" id="Feature Name Screen ID" >}}
```

**Required Parameters:**
- `src`: Absolute path following naming convention
- `alt`: Descriptive text (not just filename)
- `id`: Unique identifier for anchor linking

#### `{{< ref >}}` - Internal Cross-References
- **Usage Frequency**: 88% across both content types
- **Purpose**: Consistent internal linking that updates with URL changes
- **Standard Format**: Reference by filename, not full path

```markdown
[Link Text]({{< ref "filename.md" >}})
```

**Best Practices:**
- Always test links during build process
- Use descriptive link text that makes sense out of context
- Reference the actual filename, not the displayed title

### Content Organization Shortcodes

#### `{{< expand >}}` - Collapsible Content
- **Usage Frequency**: 43% of reference files, strategically used in tutorials
- **Purpose**: Progressive disclosure for detailed information
- **Use Cases**:
  - Additional configuration details
  - Advanced options explanation
  - Troubleshooting steps
  - Optional procedures

```markdown
{{< expand "Need More Details?" "v" >}}
Detailed content that can be hidden by default but accessible when needed.
{{< /expand >}}
```

**Standard Labels:**
- "Need More Details?"
- "Advanced Configuration"
- "Troubleshooting Steps"
- "Additional Information"

#### `{{< hint >}}` - Warning and Note Callouts
- **Purpose**: Consistent formatting for important information
- **Types and Usage**:

**Danger (Red)**: Destructive actions
```markdown
{{< hint type=danger >}}
**Warning**: This action permanently deletes all data on the selected disk(s).
{{< /hint >}}
```

**Caution (Yellow)**: Important considerations
```markdown
{{< hint type=caution >}}
**Note**: This feature requires TrueNAS SCALE 24.04 or later.
{{< /hint >}}
```

**Info (Blue)**: General information
```markdown
{{< hint type=info >}}
**Info**: This setting can be changed after initial configuration.
{{< /hint >}}
```

#### `{{< enterprise >}}` - Enterprise Feature Marking
- **Usage**: Consistent marking of enterprise-only features
- **Placement**: After `{{< toc >}}` shortcode when applicable

```markdown
{{< enterprise >}}
This feature is available in TrueNAS Enterprise only.
{{< /enterprise >}}
```

---

## Warning and Note Callout Guidelines

### Mandatory Warning Situations

**Always use danger-level warnings for:**
- Disk wiping operations
- Data deletion actions
- Encryption key changes
- Network configuration that may cause disconnection
- System reboot requirements for critical changes

**Always use caution-level notes for:**
- Version dependencies
- Platform-specific behavior
- Performance impacts
- Feature availability limitations
- Prerequisites

**Always use info-level notes for:**
- General explanations
- Optional configurations
- Alternative methods
- Related feature information

### Consistent Warning Patterns

**Destructive Actions Pattern:**
```markdown
{{< hint type=danger >}}
**Warning**: This action [specific consequence]. This cannot be undone.
{{< /hint >}}
```

**Version Dependencies Pattern:**
```markdown
{{< hint type=caution >}}
**Note**: This feature requires TrueNAS [version] or later.
{{< /hint >}}
```

**Security Implications Pattern:**
```markdown
{{< hint type=caution >}}
**Security Note**: [Specific security consideration and recommended action].
{{< /hint >}}
```

---

## Cross-Reference and Navigation Standards

### UI Navigation Path Format
**Standard**: Use bold formatting with greater-than symbols for separation

```markdown
Navigate to **System > General > Localization**.
```

**Rules:**
- Always match actual UI text exactly
- Include all levels of navigation hierarchy
- Use **bold** formatting for entire path
- Separate levels with ` > `

### Screen Element References
**UI Elements**: Use **bold** formatting when referencing specific interface elements

```markdown
Click **Save** to apply changes.
Select **Advanced Options** to view additional settings.
The **Status** column shows current service state.
```

**Button Descriptions**: Include both icon and text when both are present
```markdown
Click the **Edit** <i class="material-icons" aria-hidden="true" title="Edit">edit</i> button.
```

### Material Icons References
**Standard**: Reference icons by name consistently across documentation

**Common Icon Patterns:**
- `edit` - Edit/modify functions
- `delete` - Delete/remove functions  
- `add` - Add/create functions
- `more_vert` - Additional options menus
- `info` - Information displays

---

## Image and Screenshot Guidelines

### File Naming Convention
**Pattern**: `/images/SCALE/Section/FeatureNameScreenType.png`

**Components:**
- `SCALE` - Product identifier
- `Section` - Major UI section (Dashboard, Network, Storage, etc.)
- `FeatureName` - Specific feature being documented
- `ScreenType` - Type of screen (List, Add, Edit, Settings, etc.)

**Examples:**
```
/images/SCALE/Network/InterfaceListScreen.png
/images/SCALE/Storage/PoolCreateWizard.png
/images/SCALE/Dashboard/SystemInformationWidget.png
```

### Alt-Text Requirements
**Standard**: Alt-text must describe the screen's function, not just its contents

**Good Examples:**
```markdown
alt="Network interface configuration screen showing available interfaces"
alt="Storage pool creation wizard step 2 of 5"
alt="Dashboard displaying system status and resource usage"
```

**Avoid:**
- Generic descriptions like "screenshot"
- Just the feature name
- Technical file details

### Technical Specifications
**Required Specifications:**
- Format: PNG preferred for screenshots
- Resolution: Match actual UI resolution
- Content: Show complete relevant UI sections
- Annotations: Use consistent callout styling when needed

---

## Frontmatter Standards

### Universal Frontmatter Fields

**Title**: Match the main heading exactly
```yaml
title: "Pool Creation Wizard"
```

**Description**: Brief summary for search results and children shortcode
```yaml
description: "Step-by-step guide for creating storage pools using the TrueNAS SCALE web interface."
```

**Weight**: Numerical ordering within section
```yaml
weight: 10
```

**Tags**: Consistent tagging for related content aggregation
```yaml
tags:
- "pools"
- "storage"
- "setup"
```

### Content Type Indicators
**Draft Status**: For unpublished content
```yaml
draft: true
```

**Aliases**: For URL redirects from old paths
```yaml
aliases:
- /old-path/
- /another-old-path/
```

### Observed Patterns from Analysis
- Reference docs typically use weights in increments of 10
- Tutorial docs often use descriptive tags for grouping
- Version-specific content includes version tags
- Enterprise features tagged with "enterprise"

---

## Typography and Formatting Rules

### Bold Formatting (`**text**`)
**Use bold ONLY for UI elements** → never use bold for emphasis:
- UI elements when referencing their location/existence
- Navigation paths (entire path in bold)
- Field names in forms
- Button names and clickable elements
- Screen names and dialog titles
- Menu items and tab names

**Examples:**
```markdown
The **Pool Name** field is required.
Navigate to **Network > Interfaces**.
Click **Save Configuration**.
```

**Never use bold for emphasis:**
- Incorrect: "This is **very important** to remember"
- Correct: "This is important to remember"
- Incorrect: "This setting is **critical** for security"
- Correct: "This setting is essential for security"

### Code Formatting (`code`)
**Use backticks for:**
- **Specific CLI commands or strings**: "Run the `zpool status` command"
- **Command line output or procedures**: "The output shows `pool: tank`"
- **File paths with extensions**: "Edit the `/etc/ssh/sshd_config` file"
- **Configuration values**: "Set the parameter to `true`"
- **Specific system responses**: "The system returns `Connection successful`"

**Examples:**
```markdown
Run the `ls -la` command.
Edit the `/etc/fstab` file.
Set the value to `true`.
The log shows `Service started successfully`.
```

### Italic Formatting (`*text*`)
**Use italics for:**
- **Variables typed into fields**: "Type *tank* into the Name field"
- **Variables in commands or URLs**: "Replace *your-pool-name* with the actual name"
- **First instance of new terms** followed by definition: "A *dataset* is a file system within a pool"
- **User-entered variables in descriptions**: "Enter *192.168.1.100* for the server address"
- **Example values**: "Set the timeout to *30* seconds"

**Examples:**
```markdown
Replace *your-pool-name* with the actual pool name.
Type *admin* in the **Username** field.
A *snapshot* is a point-in-time copy of data.
```

### List Formatting Standards
**Numbered Lists**: Use for sequential procedures
```markdown
1. First step with specific action
2. Second step building on the first
3. Final step completing the process
```

**Bulleted Lists**: Use for non-sequential information
```markdown
* Feature benefit one
* Feature benefit two
* Feature benefit three
```

**Nested Lists**: Maintain consistent indentation
```markdown
1. Main step
   * Sub-option one
   * Sub-option two
2. Next main step
```

### HTML Tag Formatting

**Use <kbd></kbd> tags for keyboard buttons:**
- "Press <kbd>Enter</kbd> to continue"
- "Use <kbd>Ctrl</kbd>+<kbd>C</kbd> to cancel"
- "Press <kbd>Alt</kbd>+<kbd>Tab</kbd> to switch windows"

**Use <file></file> tags for specific filenames:**
- "Open the <file>config.json</file> file"
- "The log is saved to <file>/var/log/truenas.log</file>"
- "Edit <file>settings.conf</file> for custom configuration"

### Capitalization Rules (Comprehensive)

**Only capitalize proper nouns** → don't capitalize common nouns or general features:
- Incorrect: "Configure the Storage Pool" (unless referring to the UI element **Storage Pool**)
- Correct: "Configure the storage pool" or "Click **Storage Pool** in the interface"

**Don't capitalize for emphasis** → avoid capitalizing feature names unless proper nouns:
- Incorrect: "The Replication feature provides data backup"
- Correct: "The replication feature provides data backup" or "Use **Replication** (UI element)"

**Capitalize company-marketed features only if they're proper nouns:**
- Correct: "TrueNAS SCALE" (product name)
- Correct: "iSCSI protocol" (proper technical term)
- Incorrect: "The Dashboard Feature"
- Correct: "The dashboard feature" or "the **Dashboard**" (UI element)

**Don't capitalize expanded acronyms unless they're proper nouns:**
- Correct: "access control list (ACL)"
- Correct: "Dynamic Host Configuration Protocol (DHCP)" (proper noun)
- Incorrect: "Network File System (NFS)" → Correct: "network file system (NFS)"
- Exception: When the expanded form is also a proper noun or official standard name

---

## Technical Content Guidelines

### Command Examples
**Standard**: Always include proper syntax with explanatory context

**Format:**
```markdown
Run this command to check pool status:
```bash
zpool status
```
```

**Requirements:**
- Include command context/purpose
- Show expected output when relevant
- Note any prerequisites
- Specify user privileges required

### File Path Standards
**Rule**: Use absolute paths consistently

**Correct:**
```markdown
Edit the `/etc/ssh/sshd_config` file.
The logs are located at `/var/log/messages`.
```

**Incorrect:**
```markdown
Edit the `sshd_config` file.
Check the logs in the messages file.
```

### Version Specificity
**Pattern**: Reference version dependencies clearly

**Standard Format:**
```markdown
This feature is available in TrueNAS SCALE 24.04 and later.
In TrueNAS SCALE 23.10, this option was located under **System Settings**.
```

### Platform Differences
**Rule**: Explicitly call out platform-specific behavior

**Standard Format:**
```markdown
{{< hint type=caution >}}
**Platform Note**: Windows clients require SMB2 protocol. Linux clients can use SMB1 through SMB3.
{{< /hint >}}
```

---

## Enterprise Feature Marking

### Consistent Patterns
**Standard Placement**: After table of contents, before main content

```markdown
{{< toc >}}

{{< enterprise >}}
This feature is available in TrueNAS Enterprise only.
{{< /enterprise >}}

## Feature Overview
```

**Section-Level Marking**: For mixed content documents
```markdown
## Enterprise Configuration Options

{{< enterprise >}}
The following options are only available in TrueNAS Enterprise.
{{< /enterprise >}}
```

### Feature Differentiation Language
**Consistent Terminology:**
- "TrueNAS Enterprise only"
- "Enterprise feature"
- "Available in Enterprise editions"

**Avoid:**
- "Premium feature"
- "Commercial version"
- "Paid feature"

---

## Integration Guidelines

### Connection to Specialized Guides

**This Common Elements Guide serves as the foundation for:**

1. **Tutorial Style Guide** - Inherits all common elements plus tutorial-specific standards for:
   - Step-by-step procedures
   - Learning objectives
   - Prerequisites sections
   - Validation steps

2. **Reference Style Guide** - Inherits all common elements plus reference-specific standards for:
   - Parameter documentation
   - Complete option listings
   - Technical specifications
   - API documentation format

### Implementation Priority
**Order of Application:**
1. Apply Common Elements standards (this guide)
2. Apply content-type-specific standards (Tutorial or Reference guide)
3. Apply any project-specific requirements

### Conflict Resolution
**When standards conflict:**
1. Content-type-specific standards override common standards
2. Newer guidance supersedes older guidance
3. User experience considerations take precedence over technical convenience

### Maintenance and Updates
**This guide should be updated when:**
- New shortcodes achieve >40% adoption across both content types
- Existing patterns show >90% consistency
- Technical infrastructure changes affect common elements
- User feedback indicates consistency issues

**Review Schedule:**
- Quarterly review for emerging patterns
- Annual comprehensive review
- Updates as needed for technical changes

---

## Quick Reference Checklist

### Before Publishing Any Documentation:

**Writing Standards:**
- [ ] Present tense, active voice throughout
- [ ] Appropriate point of view (tutorials: second person; reference: descriptive)
- [ ] No use of "will" (use present tense instead)
- [ ] No use of "may" for possibility (use "might" or "could")
- [ ] No "scare quotes" for emphasis
- [ ] **Bold** only for UI elements, not emphasis
- [ ] 5th grade reading level with simple sentence structures
- [ ] Keep most sentences under 30 words
- [ ] No gerunds (-ing words) that cause tense/voice errors
- [ ] No semicolons (use two simple sentences)
- [ ] Use "after" or "when" instead of "once" for sequence
- [ ] Avoid possessive case ('s) for objects
- [ ] Avoid slashes (write out alternatives)
- [ ] Don't use idioms (be literal)
- [ ] Include articles (a, an, the) for Global English
- [ ] Give pronouns clear antecedents
- [ ] Use consistent terminology
- [ ] Use "do this to get this result" format

**Shortcodes:**
- [ ] Images use `{{< trueimage >}}` with proper alt-text
- [ ] Tables use `{{< truetable >}}`
- [ ] Internal links use `{{< ref >}}`
- [ ] Warnings use appropriate `{{< hint >}}` types
- [ ] Enterprise features marked with `{{< enterprise >}}`

**Formatting:**
- [ ] UI elements in **bold** (never bold for emphasis)
- [ ] *Italics* for variables, examples, and first-use terms
- [ ] `Code formatting` for commands, file paths, and values
- [ ] <kbd>Tags</kbd> for keyboard buttons
- [ ] <file>Tags</file> for specific filenames
- [ ] Navigation paths follow **Section > Subsection** format
- [ ] File paths are absolute
- [ ] Only capitalize proper nouns
- [ ] Don't capitalize for emphasis

**Procedure Standards (For Tutorials):**
- [ ] Limit main steps to 7-10 maximum
- [ ] Only number actions, not results
- [ ] Don't exceed 4 levels of nesting
- [ ] Explain expected outcomes for each action

**Content:**
- [ ] Version dependencies noted
- [ ] Platform differences called out
- [ ] Destructive actions warned
- [ ] Images follow naming convention
- [ ] Frontmatter complete and consistent

**Cross-References:**
- [ ] Internal links tested
- [ ] External links verified
- [ ] Related content tagged appropriately
- [ ] Navigation paths match actual UI

This Common Elements Guide ensures consistency across all TrueNAS documentation types while providing the foundation for more specialized content formatting.