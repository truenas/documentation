# TrueNAS Tutorial Style Guide

## Purpose and Scope

This style guide documents the existing successful patterns found in TrueNAS tutorial documentation based on analysis of 126 documentation files. The goal is to preserve what works by helping new tutorial content match current established styles and conventions.

This guide focuses specifically on tutorial content that teaches users how to accomplish specific tasks, rather than reference documentation or conceptual overviews. Use this guide to maintain consistency with the proven patterns that TrueNAS users already expect and understand.

## Content Structure Guidelines

TrueNAS tutorials follow three primary structural patterns based on analysis findings:

### Overview + Procedure Pattern (60% of files)
Most TrueNAS tutorials use this straightforward approach:
- Brief functional introduction (2-4 sentences)
- Direct procedural steps
- End when task is complete

### Preparation + Configuration Pattern (25% of files)
Technical setup tutorials typically use:
- Introduction explaining the technology/feature
- Prerequisites or preparation section
- Configuration procedures
- Service activation or verification steps

### Multi-Method Pattern (15% of files)
Some tutorials present multiple approaches:
- Introduction
- Method 1 with complete procedure
- Method 2 with complete procedure
- Brief comparison or recommendation

## Heading Conventions

TrueNAS tutorials demonstrate consistent heading patterns:

### H2 Headings: Title Case (85% frequency)
- "Creating SMB Shares"
- "Configuring Network Settings"
- "Adding User Accounts"
- "Setting Up Replication Tasks"

### H3+ Headings: Sentence Case (70% frequency)
- "Adding a new group"
- "Configuring advanced options"
- "Setting permissions"
- "Testing the connection"

### Technical Terms
Always preserve specific capitalization for technical terms regardless of heading case:
- VMware (not Vmware)
- iSCSI (not Iscsi)
- IPv6 (not Ipv6)
- TrueNAS (not Truenas)
- SMB/NFS/FTP (always uppercase)

### Acceptable Mixed Patterns
TrueNAS documentation accepts both patterns, and mixing is common within the same document. Choose what fits naturally with the specific content.

## Introduction Standards

TrueNAS tutorial introductions follow consistent patterns (90% consistency):

### Opening Patterns
**Most Common (40% of files):** Start with "TrueNAS provides..." or "TrueNAS offers..." or "TrueNAS uses..."

Examples from existing tutorials:
- "TrueNAS provides several options for accessing stored data over a network."
- "TrueNAS offers comprehensive user and group management capabilities."
- "TrueNAS uses ZFS replication to create backup copies of data."

### Structure (2-4 sentences)
1. **Functional purpose:** What the feature does
2. **User benefit:** Why users need this
3. **Context links:** Natural integration of related concepts
4. **Optional scope:** What the tutorial covers (when helpful)

### Voice and Integration
- Focus on user benefits, not technical specifications
- Integrate contextual links naturally within sentences
- Avoid bullet lists or formal prerequisites in introductions
- Keep technical details for the procedural sections

## Prerequisites Guidelines

TrueNAS tutorials include prerequisites only when actual setup dependencies exist (25% frequency):

### When to Include Prerequisites
- Required system configuration exists
- Other TrueNAS features must be configured first
- External setup steps are necessary
- Specific user permissions are required

### Format and Placement
- **Heading:** "## Before You Begin" or "## Prerequisites"
- **Location:** After introduction, before main procedural content
- **Content:** Focus on required setup steps, not system requirements
- **Links:** Include links to related setup tutorials when helpful

### When NOT to Include Prerequisites
- Basic TrueNAS administration knowledge
- General system requirements
- Standard login procedures
- Common navigation tasks

## Writing Standards

TrueNAS tutorial documentation must follow these prescriptive writing rules to ensure consistent, high-quality content:

### Voice and Tense Requirements
- **Always use present tense, active voice**: Write "Click **Save** to apply changes" not "Clicking **Save** will apply changes"
- **Use second person (direct address)**: Write "You configure the settings" not "The user configures the settings"
- **Avoid future tense**: Never use "will" → use present tense instead
- **Convert passive constructions**: Write "TrueNAS displays the menu" not "The menu is displayed by TrueNAS"
- **Never use gerunds (-ing words)**: They cause tense/voice errors and translation issues
  - Incorrect: "Clicking the button enables the service"
  - Correct: "Click the button. The service starts."
- **Use "do this to get this result" format**: Write "Click **Save** to apply changes" or "Click **Save**. The changes are applied."

### Word Choice Rules
- **Never use "may" to express possibility** → use "might", "could", or "can"
  - Incorrect: "You may need to restart the service"
  - Correct: "You might need to restart the service", "You could need to restart the service", or "You can restart the service" (for capability)
- **Never use "will"** → stay in present tense
  - Incorrect: "This will create a new pool"
  - Correct: "This creates a new pool"
- **Never use "scare quotes" for emphasis** → only use quotation marks for actual quotations
  - Incorrect: Click "Save" to continue
  - Correct: Click **Save** to continue
- **Never use bold for emphasis** → only use **bold** for UI elements (screens, fields, buttons)
  - Incorrect: This is **very important** to remember
  - Correct: This is important to remember
- **Don't use "once" incorrectly** → use "after" or "when" for sequence
  - Incorrect: "Once you click Save, the settings apply"
  - Correct: "After you click Save, the settings apply"
- **Avoid possessive case ('s) for objects** → use only for human ownership
  - Incorrect: "the server's status"
  - Correct: "the server status" or "the status of the server"
- **Avoid slashes** → write out alternatives clearly
  - Incorrect: "Enable/disable the service"
  - Correct: "Enable or disable the service"
- **Don't use idioms** → be literal in all aspects of writing
  - Incorrect: "This feature is a game-changer"
  - Correct: "This feature improves system performance"

### Readability Standards
- **Write at 5th grade reading level** for international/ESL readers
- **Keep most sentences under 30 words** for global audience
- **Use clear, simple sentence structures** with declarative statements
- **Avoid complex terminology** when simpler words convey the same meaning
- **Never use semicolons** → replace with two short, simple sentences
  - Incorrect: "Click Save; the settings are applied immediately"
  - Correct: "Click **Save**. The settings are applied immediately."
- **Use Global English principles** → include articles (a, an, the)
- **Give pronouns clear antecedents** for non-native speakers
- **Standardize terminology** → use consistent word choices
- **Be literal in all aspects** → avoid figurative language

### Formatting and Emphasis Rules

**Use *italics* for:**
- Variables typed into fields: "Type *tank* into the Name field"
- Variables in commands or URLs: "Replace *your-pool-name* with the actual name"
- First instance of new terms followed by definition: "A *dataset* is a file system within a pool"
- User-entered variables in descriptions: "Enter *192.168.1.100* for the server address"

**Use `code formatting` for:**
- Specific CLI commands or strings: "Run the `zpool status` command"
- Command line output or procedures: "The output shows `pool: tank`"
- Configuration file paths: "Edit the `/etc/ssh/sshd_config` file"

**Use <kbd></kbd> tags for keyboard buttons:**
- "Press <kbd>Enter</kbd> to continue"
- "Use <kbd>Ctrl</kbd>+<kbd>C</kbd> to cancel"

**Use <file></file> tags for specific filenames:**
- "Open the <file>config.json</file> file"
- "The log is saved to <file>/var/log/truenas.log</file>"

### Capitalization Rules

- **Only capitalize proper nouns** → don't capitalize common nouns or general features
- **Don't capitalize for emphasis** → avoid capitalizing feature names unless proper nouns
- **Capitalize company-marketed features only if they're proper nouns**
- **Don't capitalize expanded acronyms unless they're proper nouns**
  - Correct: "access control list (ACL)"
  - Correct: "Dynamic Host Configuration Protocol (DHCP)" (proper noun)

### Voice and Tone Standards

TrueNAS tutorials maintain a consistent conversational, instructional approach:

### Characteristics
- **Conversational:** Direct address to the user
- **Instructional:** Clear step-by-step guidance
- **Functional:** Focus on completing tasks
- **Supportive:** Assumes users want to succeed

### Procedure Writing Rules

**Limit main steps to 7-10 maximum** → use nested steps for complex procedures:
- If you have more than 10 steps, evaluate whether any can be grouped
- Consider if some steps are really sub-steps of a broader action
- Break complex procedures into multiple shorter procedures when possible

**Only assign step numbers to actions** → not to results or clarifying information:
- Correct: "1. Click **Save**. The configuration is applied."
- Incorrect: "1. Click **Save**. 2. The configuration is applied."

**Don't exceed 4 levels of nesting in procedures:**
- Main step (1.)
- First nested level (a.)
- Second nested level (1.)
- Third nested level (A.)
- Do NOT add a fifth level - restructure instead

**Every action has a result** → explain expected outcomes:
- "Click **Start**. The service status changes to Running."
- "Select the **Advanced** tab. Additional configuration options appear."

### Step Formatting
- Use numbered procedures for sequential tasks
- Keep steps actionable and specific
- Include expected results when helpful
- Use active voice and present tense

### User-Focused Language
- "You can configure..." rather than "The system allows configuration of..."
- "Click **Save**" rather than "The Save button should be clicked"
- "Select your preferred option" rather than "An option must be selected"

## Ending Conventions

TrueNAS tutorials end when the task is complete (85% end with last procedural step):

### Common Ending Patterns
- **Service activation:** "Click **Start** to enable the service"
- **Configuration completion:** "Click **Save** to apply the settings"
- **Verification step:** "The connection should now be active"
- **Task completion:** "The share is now available to users"

### What TrueNAS Tutorials DON'T Include
- Formal conclusion sections
- Summary paragraphs
- "Next steps" recommendations
- Generic troubleshooting (unless task-specific)

### Troubleshooting Integration
When troubleshooting is included, it appears:
- **Inline:** Within relevant procedural steps
- **Dedicated section:** For complex procedures with multiple potential issues
- **Task-specific:** Focused on the specific procedure being documented

## Cross-Reference Patterns

TrueNAS tutorials integrate cross-references naturally:

### Natural Integration
Links appear within sentence flow:
- "Configure the SMB service as described in [SMB Service Configuration](/scale/shares/smb/)"
- "Create user accounts using the [User Management](/scale/credentials/localusers/) procedures"

### Link Context
- Provide enough context for users to understand the link purpose
- Use descriptive link text that matches the target content
- Integrate links where they're most helpful in the workflow

### Avoid
- Long lists of related links
- Links that interrupt the procedural flow
- Generic "see also" sections

## Image and Screenshot Standards

Based on shortcode usage patterns in TrueNAS documentation:

### Image Integration
TrueNAS tutorials use images to:
- Illustrate UI elements being referenced
- Show expected results of configuration steps
- Clarify complex interface areas
- Confirm successful completion

### Shortcode Usage
Images use Hugo shortcodes with descriptive alt text:
```
{{< trueimage src="/images/SCALE/path/to/image.png" alt="Description of what users see" id="Descriptive ID" >}}
```

### Alignment with Procedures
- Align images with the procedural step they illustrate
- Place images after the step they demonstrate
- Ensure images don't interrupt numbered list flow

## Common Variations

TrueNAS documentation accepts several pattern variations:

### Acceptable Heading Variations
- Mix of title case (H2) and sentence case (H3+) - most common
- Consistent sentence case throughout - acceptable
- Consistent title case throughout - acceptable

### Content Organization Options
- Single procedure with sub-steps
- Multiple procedures under topic headings
- Tabbed content for different user types or methods

### Introduction Flexibility
- Brief functional statement (minimum)
- Extended context with background (when needed)
- Direct procedural start (for simple tasks)

### Prerequisites Variability
- "Before You Begin" heading
- "Prerequisites" heading  
- Integrated setup steps (no separate section)
- No prerequisites section (most common)

## Quick Reference Checklist

Use this checklist to ensure tutorial content matches TrueNAS patterns:

**Content Structure:**
- [ ] Introduction explains functional purpose (2-4 sentences)
- [ ] Prerequisites only included when setup dependencies exist
- [ ] Procedures are step-by-step and actionable
- [ ] Content ends when task is complete

**Headings:**
- [ ] H2 headings use title case (preferred) or sentence case
- [ ] H3+ headings use sentence case (preferred) or title case  
- [ ] Technical terms maintain proper capitalization

**Writing Standards:**
- [ ] Present tense, active voice throughout
- [ ] Second person (direct address to user)
- [ ] No use of "will" (use present tense instead)
- [ ] No use of "may" for possibility (use "might" or "could")
- [ ] No "scare quotes" for emphasis
- [ ] **Bold** only for UI elements, not emphasis
- [ ] 5th grade reading level with simple sentence structures
- [ ] No gerunds (-ing words) that complicate sentences
- [ ] No semicolons (use two simple sentences)
- [ ] Keep most sentences under 30 words
- [ ] Use "after" or "when" instead of "once" for sequence
- [ ] Avoid possessive case ('s) for objects
- [ ] Avoid slashes (write out alternatives)
- [ ] Don't use idioms (be literal)
- [ ] Include articles (a, an, the) for Global English
- [ ] Give pronouns clear antecedents
- [ ] Use consistent terminology

**Formatting Standards:**
- [ ] *Italics* for variables and first-use terms
- [ ] `Code formatting` for commands and file paths
- [ ] <kbd>Tags</kbd> for keyboard buttons
- [ ] <file>Tags</file> for specific filenames
- [ ] Only capitalize proper nouns
- [ ] Don't capitalize for emphasis

**Procedure Standards:**
- [ ] Limit main steps to 7-10 maximum
- [ ] Only number actions, not results
- [ ] Don't exceed 4 levels of nesting
- [ ] Explain expected outcomes for each action

**Voice and Tone:**
- [ ] Conversational and instructional approach
- [ ] Direct address to the user
- [ ] Active voice and present tense
- [ ] Focus on user benefits and task completion

**Integration:**
- [ ] Cross-references integrated naturally
- [ ] Images aligned with procedural steps
- [ ] Links provide helpful context
- [ ] Troubleshooting included only when task-specific

## Relationship to Main Style Guide

This tutorial-specific guide complements the main [Software Documentation Style Guide](/dev/reference/software-documentation-style-guide.md) by focusing on patterns specific to tutorial content. For general writing conventions, technical terminology, and formatting standards not covered here, refer to the main style guide.

The patterns documented here represent successful approaches already proven effective in TrueNAS documentation. When in doubt, follow the established patterns rather than creating new approaches.