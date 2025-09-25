---
# FRONTMATTER TEMPLATE FOR REFERENCE DOCUMENTATION
# Complete metadata structure optimized for UI reference content

title: "[Screen Name in Title Case]"
# Match the main H1 heading exactly - use title case for screen names
# Examples: "Network Interfaces List Screen", "Storage Pool Creation Wizard", "System General Settings"
# Pattern: [Feature] [Screen Type] OR [Feature] [Action] [Screen Type]

description: "[Descriptive summary of screen purpose and functionality]"
# Brief functional description for search results and navigation
# Focus on what the screen displays/enables, not user actions
# Use present tense, descriptive voice (not instructional)
# Example: "Displays available network interfaces with configuration options and status information."

weight: 10
# Numerical ordering within section (typically increments of 10)
# Reference docs often use: 10, 20, 30, etc.

tags:
- "[primary-feature]"
- "[ui-area]"
- "[screen-type]"
# Reference-specific tags for content aggregation
# Examples: "interfaces", "network", "configuration", "list-screen", "reference"

# OPTIONAL FRONTMATTER FIELDS
# Only include when applicable:

aliases:
# - "/old-path/"
# Use for URL redirects from legacy documentation paths

# draft: true
# Only use draft when absolutely required - remove this comment when template is used
---

<!-- 
REFERENCE DOCUMENTATION TEMPLATE FOR TRUENAS
===========================================

This template handles all reference documentation types including:
- Full screen documentation
- Screen sections and widgets
- Dialogs and forms within screens
- UI elements and components

This template follows established patterns from the TrueNAS Reference Style Guide:
- Screen-level organization with subsections for widgets/dialogs (93% consistency)
- Screenshot before table placement (85% pattern)
- {{< truetable >}} usage (94% of reference docs)
- Two-column "Setting | Description" format (89% pattern)
- Required field notation with "(Required)" (91% consistency)
- Descriptive voice, not instructional (reference standard)

REFERENCE DOCUMENTATION PRINCIPLES:
- Describe what screens/fields/components DO, not how to use them
- Present tense, active voice, descriptive language
- Focus on functionality, not user actions
- Comprehensive field/option documentation
- Parent-child screen relationships (67% pattern)
- Document all UI elements within screen context

PRESCRIPTIVE WRITING REMINDERS FOR REFERENCE:
- NEVER use "will" → stay present tense ("This displays" not "This will display")
- NEVER use "may" for possibility → use "might", "could", or "can"
- NEVER use bold for emphasis → only for UI elements (**Setting Name**)
- NEVER use second person pronouns → descriptive voice ("Enter the value" not "You enter")
- NEVER use gerunds (-ing words) → causes tense/voice errors
- Use 5th grade reading level for international audience
- Be literal - avoid idioms, keep sentences under 30 words
- Use "after" or "when" instead of "once" for sequence
- Include articles (a, an, the) for Global English readers
- Give pronouns clear antecedents for non-native speakers

HUGO SHORTCODE STANDARDS:
- {{< truetable >}} for all settings tables
- {{< trueimage >}} for screenshots (97% consistency)
- {{< ref >}} for internal cross-references (88% consistency)
- {{< expand >}} for detailed sections (15% usage pattern)
- {{< enterprise >}} for enterprise-specific features
- {{< hint >}} for warnings and important information

UI ELEMENT FORMATTING RULES:
- **Bold** ONLY for UI elements (buttons, fields, menus, screen names)
- *Italics* for variables, examples, first-use terms
- `Code formatting` for specific values, file paths, commands
- <kbd>Tags</kbd> for keyboard buttons
- <file>Tags</file> for specific filenames
-->

<!-- NAVIGATION BREADCRUMB (82% consistency pattern) -->
<!-- NOTE: No H1 heading needed in body - Hugo generates H1 from frontmatter title automatically -->
**Navigation Path**: **[Section]** > **[Subsection]** > **[Screen Name]**
<!-- Example: **Navigation Path**: **Network** > **Interfaces** > **Interfaces List** -->

<!-- SCREEN INTRODUCTION (Descriptive Purpose) -->
<!-- Write 2-3 sentences describing the screen's functional purpose -->
<!-- Use present tense, descriptive voice - focus on what the screen displays/enables -->
<!-- Example: "The Network Interfaces screen displays all configured network interfaces with their current status and basic configuration information. This screen provides access to interface management functions and serves as the primary navigation point for network interface configuration." -->

[Write 2-3 sentences describing the screen's functional purpose and what it displays. Use descriptive, present tense language that explains what the screen does rather than how to use it.]

<!-- ENTERPRISE MARKING (if applicable) -->
<!-- Use after navigation path, before screenshot -->
{{< enterprise >}}
This feature is available in TrueNAS Enterprise only.
{{< /enterprise >}}

<!-- SCREENSHOT SECTION (97% consistency, 85% placement before tables) -->
{{< trueimage src="/images/SCALE/[Area]/[Feature][ScreenName].png" alt="[Descriptive alt text matching screen function]" id="[Screen Description]" >}}

<!-- 
SCREENSHOT NAMING CONVENTION (89% consistency):
Pattern: /images/SCALE/[Area]/[Feature][ScreenType].png
- Area: Primary navigation section (Network, Storage, System, etc.)
- Feature: Specific functionality (Interfaces, Pools, Users, etc.)
- ScreenType: Screen identifier (ListScreen, AddDialog, ConfigForm, etc.)

ALT TEXT REQUIREMENTS (71% consistency):
- Describe screen function, not just contents
- Good: "Network interface configuration screen showing available interfaces"
- Avoid: "Screenshot" or just the feature name
-->

<!-- SCREEN WIDGETS AND ELEMENTS (flexible section) -->
## Screen Elements

<!-- Use this section to document widgets, dashboard elements, or major screen components -->
<!-- This replaces the need for separate "component" documentation -->
<!-- Document each widget/element as a subsection -->

### [Widget/Element Name]

[Describe what this widget or element displays and its function within the screen.]

<!-- Widget/Element screenshot if needed -->
{{< trueimage src="/images/SCALE/[Area]/[Feature][ElementName].png" alt="[Element description]" id="[Element Name]" >}}

<!-- Widget/Element information table if applicable -->
{{< truetable >}}
| Information | Description |
|-------------|-------------|
| **[Data Type]** | [What this data shows and how it updates] |
| **[Status Indicator]** | [What different states indicate] |
{{< /truetable >}}

**Function**: [What clicking or interacting with this element does]
**Location**: [Where this element appears on the screen]

<!-- SETTINGS TABLE SECTION (94% use {{< truetable >}}) -->
## [Section Name] Settings
<!-- Use descriptive section names: "Interface Settings", "Basic Configuration", "Advanced Options" -->

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Setting Name** | (Required) [Functional description of what this setting does and its purpose]. [Additional details about options, format requirements, or dependencies]. |
| **Option Field** | Select the [purpose/function] option:<br>• **Option 1** - [Description of what this option does]<br>• **Option 2** - [Description of what this option does]<br>• **Option 3** - [Description of what this option does] |
| **Text Input Field** | Enter [type of data] to [purpose/function]. [Format requirements or examples]. Example: *example-value* |
| **Checkbox Option** | Select to [enable/configure specific functionality]. [Effect of enabling/disabling this option]. |
| **Advanced Setting** | [Description of advanced functionality]. [When to use this setting or what it affects]. |
{{< /truetable >}}

<!-- 
FIELD DESCRIPTION PATTERNS:
- Required fields: Start with "(Required)" (91% consistency)
- Dropdown options: Use bullet format with option descriptions (78% consistency)
- Examples: Use italics for variable examples (*example-value*)
- UI elements: Bold for buttons, fields, options (**Save**, **Advanced**)
- Cross-references: Use {{< ref >}} shortcode (88% consistency)
- Boolean fields: Describe both enabled/disabled states when relevant
-->

<!-- ADVANCED SETTINGS (using expand shortcode - 15% usage pattern) -->
{{< expand "Advanced Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Advanced Option 1** | [Description of advanced functionality that most users won't need]. |
| **Advanced Option 2** | [Description of specialized configuration option]. |
{{< /truetable >}}
{{< /expand >}}

<!-- DIALOG DOCUMENTATION (for screens with dialogs - 89% include delete confirmations) -->
## [Action] Dialog

<!-- Document confirmation dialogs, especially for destructive actions -->
<!-- Pattern: "Action + Item Type + Dialog" naming (76% consistency) -->

Clicking **[Action Button]** displays the [Action] [Item Type] confirmation dialog.

<!-- DIALOG SCREENSHOT (if needed) -->
{{< trueimage src="/images/SCALE/[Area]/[Feature][Action]Dialog.png" alt="[Action] confirmation dialog" id="[Action] [Item] Dialog" >}}

<!-- DIALOG SETTINGS TABLE -->
{{< truetable >}}
| Field | Description |
|-------|-------------|
| **Item Name** | Displays the selected [item type] (read-only). |
| **Confirm** | (Required) Select to enable the **[Action]** button. The **[Action]** button remains disabled until this checkbox is selected. |
| **Additional Option** | Optional setting for [specific functionality related to the action]. |
{{< /truetable >}}

<!-- CONFIRMATION CHECKBOX PATTERN (83% consistency) -->
{{< hint type=danger >}}
**Warning**: This action [specific consequence]. This cannot be undone.
{{< /hint >}}

<!-- MATERIAL ICONS DOCUMENTATION (96% consistency) -->
## Screen Actions

<!-- Document icon-based actions when applicable -->
{{< truetable >}}
| Action | Description |
|--------|-------------|
| <span class="material-icons" aria-hidden="true" title="Edit">edit</span> **Edit** | Click to modify [item] settings. Opens the [Item] Configuration screen. |
| <span class="material-icons" aria-hidden="true" title="Delete">delete</span> **Delete** | Click to remove the [item]. Displays confirmation dialog before deletion. |
| <span class="material-icons" aria-hidden="true" title="Add">add</span> **Add** | Click to create a new [item]. Opens the [Item] Creation dialog. |
{{< /truetable >}}

<!-- 
For themed icons (new standard), use:
{{< themed-icon src="/images/SCALE/[Screen]/[IconName].svg" alt="Icon Description" >}}
-->

<!-- CROSS-REFERENCES SECTION (88% use {{< ref >}} shortcode) -->
## Related Screens

<!-- Document parent-child relationships (67% pattern) -->
<!-- Link to related configuration screens and documentation -->

**Parent Screen**: {{< ref "[parent-screen-path].md" >}} - [Brief description of parent screen relationship]

**Child Screens**:
- {{< ref "[child-screen-path].md" >}} - [Description of child screen purpose]
- {{< ref "[another-child-path].md" >}} - [Description of another child screen]

**Related Configuration**:
- {{< ref "[related-config-path].md" >}} - [Description of related settings or procedures]

<!-- VERSION-SPECIFIC INFORMATION (when applicable) -->
{{< hint type=caution >}}
**Version Note**: This feature requires TrueNAS SCALE [version] or later. In earlier versions, this functionality was located under **[Previous Location]**.
{{< /hint >}}

<!-- PLATFORM-SPECIFIC INFORMATION (when applicable) -->
{{< hint type=caution >}}
**Platform Note**: [Specific platform behavior or limitations that users should be aware of].
{{< /hint >}}

<!-- ADDITIONAL INFORMATION SECTIONS (use expand for optional details) -->
{{< expand "Field Format Requirements" "v" >}}
**Input Validation and Formatting:**

- **[Field Name]**: [Specific format requirements, character limits, validation rules]
- **[Another Field]**: [Format requirements, allowed characters, examples]
- **[Numeric Field]**: [Valid ranges, units, default values]

{{< /expand >}}

{{< expand "Common Configuration Examples" "v" >}}
**Typical Use Cases:**

This section can include common configuration patterns or examples without being instructional. Focus on describing what different configurations accomplish rather than how to implement them.

{{< /expand >}}

<!-- TROUBLESHOOTING SECTION (when applicable to the screen) -->
{{< expand "Common Issues" "v" >}}
**Configuration Issues:**

- **[Issue Description]**: [What causes this and what users see]
- **[Another Issue]**: [Description of the problem and its indicators]

{{< /expand >}}

<!-- 
TEMPLATE USAGE NOTES:
===================

1. HIERARCHICAL ORGANIZATION (93% consistency):
   Follow Widget → List Screen → Details Screen progression where applicable

2. SETTINGS GROUPINGS (79% consistency):
   Organize into "Basic Settings" and "Advanced Settings" when appropriate

3. REQUIRED vs OPTIONAL NOTATION:
   - Use "(Required)" at start of description (91% pattern)
   - Acceptable variation: "(Required)" at end (16% usage)

4. DROPDOWN OPTIONS FORMAT (78% consistency):
   Use bullet points with option descriptions for all dropdown fields

5. EXAMPLE VALUES (72% consistency):
   Provide examples in italics: *192.168.1.100*, *pool-name*

6. BREADCRUMB NAVIGATION (84% consistency):
   Always include navigation path at the top of reference screens

7. CROSS-REFERENCE INTEGRATION:
   Link to parent screens, child screens, and related configuration (67% pattern)

8. DIALOG NAMING PATTERN (76% consistency):
   Follow "Action + Item Type + Dialog" naming convention

9. CONFIRMATION PATTERNS (83% consistency):
   Document checkbox activation requirements for destructive actions

10. MATERIAL ICONS (96% consistency):
    Use consistent span format with aria-hidden and title attributes

Remember: Reference documentation describes functionality, not procedures. 
Focus on what screens and settings DO, not how users should use them.
Use descriptive, present-tense language throughout.
-->