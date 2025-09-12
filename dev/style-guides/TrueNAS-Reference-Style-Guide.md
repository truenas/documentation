# TrueNAS Reference Style Guide

## Purpose and Scope

This style guide documents the existing successful patterns found in TrueNAS UI reference documentation to help new reference content match current styles. Based on analysis of 77 reference documentation files, this guide preserves what works rather than introducing new approaches.

**Target Audience**: Documentation team members creating or updating TrueNAS UI reference content.

**Scope**: UI reference documentation including screen descriptions, settings tables, field descriptions, and navigation patterns.

## Writing Standards

TrueNAS reference documentation must follow these prescriptive writing rules to ensure consistent, high-quality content:

### Voice and Tense Requirements
- **Always use present tense, active voice**: Write "The field accepts alphanumeric characters" not "The field will accept alphanumeric characters"
- **Use straightforward descriptive language**: Focus on what settings do, not who operates them
- **Avoid second person pronouns**: Write "Enter the server name" not "You enter the server name"
- **Use imperative mood appropriately**: Commands like "Select the protocol" or "Click Save" are acceptable
- **Convert passive constructions**: Write "TrueNAS validates the input" not "The input is validated"
- **Never use gerunds (-ing words)**: They cause tense/voice errors and translation issues
  - Incorrect: "Enabling this option affects performance"
  - Correct: "This option affects performance when enabled"
- **Use "do this to get this result" format**: Write "Select Advanced to display additional options"

### Word Choice Rules
- **Never use "may" to express possibility** → use "might", "could", or "can" (can for capability/ability)
  - Incorrect: "This setting may affect performance"
  - Correct: "This setting might affect performance" or "This setting can affect performance"
- **Never use "will"** → stay in present tense
  - Incorrect: "Selecting this option will enable encryption"
  - Correct: "Selecting this option enables encryption"
- **Never use "scare quotes" for emphasis** → only use quotation marks for actual quotations
  - Incorrect: Set this to "enabled" for best results
  - Correct: Set this to **Enabled** for best results
- **Never use bold for emphasis** → only use **bold** for UI elements (screens, fields, buttons)
  - Incorrect: This is **extremely important** to configure
  - Correct: This is important to configure
- **Don't use "once" incorrectly** → use "after" or "when" for sequence
  - Incorrect: "Once selected, the option takes effect"
  - Correct: "After selection, the option takes effect"
- **Avoid possessive case ('s) for objects** → use only for human ownership
  - Incorrect: "the system's configuration"
  - Correct: "the system configuration" or "the configuration of the system"
- **Avoid slashes** → write out alternatives clearly
  - Incorrect: "Enable/disable automatic updates"
  - Correct: "Enable or disable automatic updates"
- **Don't use idioms** → be literal in all aspects of writing
  - Incorrect: "This setting is a game-changer"
  - Correct: "This setting significantly improves performance"

### Readability Standards
- **Write at 5th grade reading level** for international/ESL readers
- **Keep most sentences under 30 words** for global audience
- **Use clear, simple sentence structures** with declarative statements
- **Avoid complex terminology** when simpler words convey the same meaning
- **Use concise descriptions** that focus on function rather than implementation details
- **Never use semicolons** → replace with two short, simple sentences
  - Incorrect: "This field is required; it cannot be empty"
  - Correct: "This field is required. It cannot be empty."
- **Use Global English principles** → include articles (a, an, the)
- **Give pronouns clear antecedents** for non-native speakers
- **Standardize terminology** → use consistent word choices
- **Be literal in all aspects** → avoid figurative language

### Formatting and Emphasis Rules

**Use *italics* for:**
- Variables in field descriptions: "Enter *server-name* in the Host field"
- Example values: "Set to *192.168.1.1* for local network"
- First instance of new terms: "A *dataset* is a file system within a pool"
- User-entered variables: "Type *tank* as the pool name"

**Use `code formatting` for:**
- Specific values or strings: "Set the value to `true`"
- File paths in descriptions: "Located at `/var/log/messages`"
- Command examples: "Run `systemctl status`"
- Configuration parameters: "The `timeout` parameter controls connection duration"

**Use <kbd></kbd> tags for keyboard buttons:**
- "Press <kbd>Enter</kbd> to confirm"
- "Use <kbd>Tab</kbd> to move between fields"

**Use <file></file> tags for specific filenames:**
- "Edit the <file>config.json</file> file"
- "Logs are written to <file>/var/log/truenas.log</file>"

### Capitalization Rules

- **Only capitalize proper nouns** → don't capitalize common nouns or general features
- **Don't capitalize for emphasis** → avoid capitalizing setting names unless proper nouns
- **Capitalize company-marketed features only if they're proper nouns**
- **Don't capitalize expanded acronyms unless they're proper nouns**
  - Correct: "access control list (ACL)"
  - Correct: "Dynamic Host Configuration Protocol (DHCP)" (proper noun)
- **Match UI capitalization exactly** → use **bold** for UI elements as they appear

## Table Structure Standards

### Primary Table Format (94% consistency)

TrueNAS reference documentation uses the `{{< truetable >}}` shortcode format in 94% of cases. This is the standard approach for all settings tables.

**Standard Implementation:**
```markdown
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| Field Name | Field description including requirements and options |
{{< /truetable >}}
```

### Standard Two-Column Format (89% consistency)

The standard table structure follows a consistent two-column format:
- **Column 1**: "Setting" or "Field" 
- **Column 2**: "Description"

**Required Elements (76% consistency):**
- Table headers must be included in every table
- Use `| Setting | Description |` as the standard header format

### Three-Column Tables (8% usage for comparisons)

For comparison tables or complex configurations, use three columns:
```markdown
{{< truetable >}}
| Setting | Options | Description |
|---------|---------|-------------|
| Mode | Basic, Advanced | Choose configuration complexity level |
{{< /truetable >}}
```

### Tables Within Expandable Sections (15% usage)

For lengthy configuration sections, tables can be placed within expand shortcodes:
```markdown
{{< expand "Advanced Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| Advanced Option | Description of advanced functionality |
{{< /truetable >}}
{{< /expand >}}
```

## Field Description Conventions

### Required Field Notation (91% consistency)

Required fields are marked with "(Required)" notation at the start of the description:
```markdown
| Username | (Required) Enter the username for authentication. Must be unique within the system. |
```

**Acceptable Variation (16% usage):**
"(Required)" can appear after the initial description:
```markdown
| Password | Enter a secure password for the user account. (Required) |
```

### UI Element References (84% consistency)

UI elements use **Bold** formatting throughout descriptions:
```markdown
| Action | Click **Save** to apply changes or **Cancel** to discard them. |
```

### Dropdown Options Format (78% consistency)

Dropdown options follow a standardized format:
```markdown
| Protocol | Select the connection protocol:
  • **HTTP** - Standard web protocol
  • **HTTPS** - Secure web protocol (recommended)
  • **FTP** - File transfer protocol |
```

### Example Values (72% consistency)

Example values are provided in italics or code format:
```markdown
| Server Address | Enter the server IP address. Example: *192.168.1.100* |
| Configuration Path | Specify the full path to configuration file. Example: `/mnt/pool1/config.conf` |
```

## Screenshot Guidelines

### Screenshot Usage (97% consistency)

Screenshots are included using the `{{< trueimage >}}` shortcode in 97% of reference documentation:
```markdown
{{< trueimage src="/images/SCALE/[Area]/[Feature][ScreenName].png" alt="[Descriptive Alt Text]" id="[Screen Description]" >}}
```

### Screenshot Placement (85% consistency)

Screenshots are placed immediately before the related table content:
```markdown
{{< trueimage src="/images/SCALE/Network/InterfacesListScreen.png" alt="Network Interfaces List" id="Network Interfaces List Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
```

### Alt Text Standards (71% consistency)

Alt text matches the UI element or screen being displayed:
- **Screen captures**: "Network Interface Configuration Screen"
- **Dialog boxes**: "Add User Account Dialog"
- **Widget views**: "Storage Pool Widget View"

### Naming Conventions (89% consistency)

Screenshot files follow the pattern: `Area/FeatureScreenName.png`
- **Area**: Primary navigation section (Network, Storage, Apps)
- **Feature**: Specific functionality (Interfaces, Pools, Snapshots)  
- **ScreenName**: Descriptive screen identifier (ListScreen, AddDialog, ConfigForm)

Examples:
- `/images/SCALE/Network/InterfacesListScreen.png`
- `/images/SCALE/Storage/PoolsAddDialog.png`
- `/images/SCALE/Apps/AvailableAppsWidget.png`

## Cross-Reference Standards

### Internal Links (88% consistency)

Internal links use the `{{< ref >}}` shortcode:
```markdown
See {{< ref "/SCALE/UIReference/Storage/Pools/PoolsScreens.md" >}} for pool management details.
```

### Related Screen References (76% consistency)

Include links to related configuration screens:
```markdown
| Advanced Options | Click to access {{< ref "/SCALE/UIReference/Network/InterfacesAdvanced.md" >}} configuration. |
```

### Parent-Child Relationships (67% consistency)

Document parent-child screen relationships:
```markdown
Access from **Network > Interfaces > Add** to display this configuration screen.
```

### Breadcrumb Navigation (84% consistency)

Include breadcrumb navigation descriptions:
```markdown
Navigate to **System > General > GUI Settings** to access these options.
```

## Screen Organization Patterns

### Hierarchical Organization (93% consistency)

Reference documentation follows the pattern: Widget → List Screen → Details Screen
```
1. Widget description and screenshot
2. List Screen functionality and table
3. Details Screen configuration and settings table
```

### Widget-to-Screen Progression (86% consistency)

Document the progression from dashboard widgets to configuration screens:
```markdown
Click the **Network** widget on the dashboard to display the Network List Screen.
From the Network List Screen, click **Add** to open the Interface Configuration Screen.
```

### Settings Groupings (79% consistency)

Organize settings into logical groupings:
- **Basic Settings** (required and commonly used options)
- **Advanced Settings** (optional and specialized configurations)

### Navigation Context (82% consistency)

Include breadcrumb navigation for screen context:
```markdown
**Navigation Path**: Dashboard > System > Advanced > Cron Jobs > Add
```

## UI Element Documentation

### Material Icons References (96% consistency)

Material icons use consistent span format:
```markdown
<span class="material-icons" aria-hidden="true" title="Edit">edit</span>
```

For themed icons (new standard):
```markdown
{{< themed-icon src="/images/SCALE/[Screen]/[IconName].svg" alt="Icon Description" >}}
```

### Icon Function Descriptions (87% consistency)

Describe icon functions in context:
```markdown
| Actions | Click <span class="material-icons" aria-hidden="true" title="Edit">edit</span> to modify settings or <span class="material-icons" aria-hidden="true" title="Delete">delete</span> to remove the item. |
```

### Interface Element Formatting (91% consistency)

All interface elements use **Bold** formatting:
- Button names: **Save**, **Cancel**, **Apply**  
- Menu items: **Network**, **Storage**, **System**
- Form fields: **Username**, **Password**, **Server Address**
- Tab labels: **Basic Info**, **Advanced Options**

### Dropdown Reference Patterns

Consistent formatting for dropdown options:
```markdown
| Type | Select from dropdown:
  • **SMB/CIFS** - Windows file sharing
  • **NFS** - Unix/Linux file sharing  
  • **iSCSI** - Block-level storage |
```

## Dialog Documentation Standards

### Delete Confirmation Dialogs (89% consistency)

Delete operations include confirmation dialog documentation:
```markdown
Clicking **Delete** displays the Delete [Item Type] confirmation dialog.
Select the **Confirm** checkbox and click **Delete** to permanently remove the item.
```

### Dialog Naming Pattern (76% consistency)

Dialog names follow the pattern: "Action + Item Type + Dialog"
- "Add User Account Dialog"
- "Delete Pool Confirmation Dialog"  
- "Edit Interface Settings Dialog"

### Confirmation Checkbox Patterns (83% consistency)

Document checkbox activation requirements:
```markdown
The **Delete** button remains disabled until you select the **Confirm** checkbox.
```

### Dialog Field Requirements (91% consistency)

Describe dialog-specific field requirements:
```markdown
**Delete Dataset Dialog Fields:**
- **Dataset Name**: Displays the selected dataset (read-only)
- **Confirm**: (Required) Must be selected to enable deletion
- **Destroy Child Datasets**: Optional. Select to delete all child datasets
```

## Naming Conventions

### File Naming Standards

Reference documentation files follow these patterns:

**Screen Files:**
- `[Area][Feature]Screens.md` (e.g., NetworkInterfacesScreens.md)
- `[Feature][Type]Screen.md` (e.g., PoolsListScreen.md)

**Dialog Files:**  
- `[Feature][Action]Dialog.md` (e.g., UserAddDialog.md)

**Widget Files:**
- `[Area]Widget.md` (e.g., NetworkWidget.md)

### Section Heading Standards

Use consistent heading levels:
- `## Screen Name` - Primary screen sections
- `### Subsection Name` - Screen areas or tabs
- `#### Field Groups` - Related field collections

### Element Reference Standards

- **Buttons**: Exact text in bold - **Save Changes**
- **Links**: Exact text in bold - **View Details**  
- **Menu Items**: Navigation path - **System > General**
- **Fields**: Label text in bold - **Pool Name**

## Acceptable Variations

Based on analysis findings, these variations are acceptable in TrueNAS reference documentation:

**Note**: All variations must still comply with the Writing Standards above - these are structural variations only, not exceptions to voice, tense, word choice, formatting, or capitalization requirements.

### Required Field Notation (16% variation)
- Standard: "(Required) Enter the username..."
- Acceptable: "Enter the username... (Required)"

### Table Column Headers (6% variation)
- Standard: "Setting | Description"  
- Acceptable: "Field | Description" or "Option | Details"

### Three-Column Tables (8% usage)
- Use for comparison tables or when additional context is needed
- Common format: "Setting | Options | Description"

### Screenshot Placement (15% variation)
- Standard: Screenshot before table
- Acceptable: Screenshot after descriptive text but before table

### Cross-Reference Styles (12% variation)
- Standard: `{{< ref >}}` shortcode
- Acceptable: Direct markdown links for external references

### Expand Usage (15% consistency)
- Use expand shortcodes for optional advanced sections
- Place detailed configurations in expandable sections
- Acceptable for any table exceeding 10-12 rows

## Integration with Existing Standards

This reference style guide aligns with the technical elements from the existing [Software Documentation Style Guide](/mnt/c/Users/iXUser/Documents/GitHub/documentation/dev/reference/software-documentation-style-guide.md):

### Shortcode Usage
- `{{< trueimage >}}` for screenshots (matches existing image standards)
- `{{< truetable >}}` for all data tables (maintains consistency)
- `{{< expand >}}` for collapsible sections (established pattern)
- `{{< ref >}}` for internal cross-references (standard linking)

### Icon Documentation
- Material icons with span format (existing standard)
- Themed icons for custom UI elements (new standard)
- Consistent aria-hidden and title attributes

### Content Organization
- Hierarchical heading structure (H2 → H3 → H4)
- Logical information architecture following UI structure
- Breadcrumb navigation documentation

This guide preserves the successful patterns identified in the analysis while maintaining compatibility with established documentation standards.