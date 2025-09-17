---
# FRONTMATTER TEMPLATE
# Complete metadata structure following Hugo standards

title: "[Tutorial Title in Title Case]"
# Match the main H1 heading exactly - use title case following TrueNAS patterns
# Examples: "Creating SMB Shares", "Setting Up Replication Tasks"

description: "[2-4 sentence description explaining the functional purpose and user benefits]"
# Brief summary for search results and children shortcode
# Focus on what users accomplish, not technical specifications
# Example: "Step-by-step guide for creating SMB shares to provide network access to stored data. Learn how to configure share permissions, optimize performance settings, and troubleshoot common connection issues."

weight: 10
# Numerical ordering within section (typically increments of 10)

tags:
- "[primary-feature]"
- "[secondary-feature]" 
- "[task-type]"
# Use consistent tags for content aggregation
# Examples: "smb", "shares", "networking", "setup", "configuration"

# OPTIONAL FRONTMATTER FIELDS
# Only include when applicable:

aliases:
# - "/old-path/"
# Use for URL redirects from old content paths

# draft: true
# Only use draft when absolutely required - remove this comment when template is used
---

<!-- 
TUTORIAL TEMPLATE FOR TRUENAS DOCUMENTATION
=========================================

This template follows established patterns from the TrueNAS Tutorial Style Guide:
- Overview + Procedure structure (60% pattern)
- Title case H2 headings (85% pattern) 
- Sentence case H3+ headings (70% pattern)
- Present tense, active voice throughout
- Second person direct address
- 5th grade reading level guidelines

PRESCRIPTIVE WRITING REMINDERS:
- NEVER use "will" → stay present tense ("This creates" not "This will create")
- NEVER use "may" for possibility → use "might", "could", or "can" 
- NEVER use bold for emphasis → only for UI elements
- NEVER use gerunds (-ing words) that cause tense errors
- NEVER use semicolons → use two simple sentences
- Keep sentences under 30 words
- Use "after" not "once" for sequence
- Avoid possessive ('s) for objects
- Be literal - no idioms or figurative language
-->

<!-- 
INTRODUCTION SECTION (REQUIRED)
===============================
NOTE: No H1 heading needed in body - Hugo generates H1 from frontmatter title automatically
90% of TrueNAS tutorials follow this pattern:
- 2-4 sentences maximum
- Start with "TrueNAS provides..." / "TrueNAS offers..." (40% frequency pattern)
- Focus on functional purpose and user benefits
- Integrate cross-references naturally within sentences
- Avoid technical specifications - save for procedures
-->

[Opening sentence following the "TrueNAS provides/offers/uses..." pattern explaining what the feature does.]

[Second sentence explaining why users need this functionality and the benefits they receive.]

[Optional third sentence with natural integration of contextual links to related concepts using {{< ref >}} shortcode.]

[Optional fourth sentence defining scope when helpful: "This tutorial covers [specific scope]" or transition to procedure.]

<!-- 
PREREQUISITES SECTION (CONDITIONAL)
===================================
Only include when actual setup dependencies exist (25% frequency pattern)
Use this section ONLY when:
- Required system configuration exists
- Other TrueNAS features must be configured first  
- External setup steps are necessary
- Specific user permissions are required

DO NOT include for:
- Basic TrueNAS administration knowledge
- General system requirements  
- Standard login procedures
- Common navigation tasks
-->

## Before You Begin
<!-- Alternative heading: "## Prerequisites" -->

<!-- Include only when setup dependencies actually exist -->

[Brief explanation of why these prerequisites are necessary]

[List specific requirements as bullet points or numbered steps:]

* [Prerequisite item with link to setup tutorial when helpful: [Feature Setup]({{< ref "setup-tutorial.md" >}})]
* [Another prerequisite with expected state: "SMB service must be running"]
* [External requirement: "Domain controller must be accessible on the network"]

<!-- HINT SHORTCODE for version/platform dependencies -->
{{< hint type=caution >}}
**Note**: This feature requires TrueNAS SCALE 24.04 or later.
{{< /hint >}}

<!-- 
MAIN CONTENT STRUCTURE
======================
Follow the Overview + Procedure pattern (60% of tutorials use this)
- Use H2 for major sections (Title Case preferred)
- Use H3+ for sub-procedures (sentence case preferred)
- Limit main steps to 7-10 maximum
- Only number actions, not results
- Don't exceed 4 levels of nesting
- Include expected results for each action
-->

## Creating [Feature Name]
<!-- Use Title Case for H2 headings following 85% pattern -->

<!-- Brief section introduction when helpful -->
[Optional 1-2 sentence explanation of what this section accomplishes]

<!-- MAIN PROCEDURE -->
1. Navigate to **[Section > Subsection > Feature]**.
   <!-- Always use bold for UI navigation paths with > separators -->
   
   The **[Screen Name]** screen displays.
   <!-- Include expected result - what users see -->

2. Click **[Button Name]** to begin configuration.
   
   The **[Dialog/Form Name]** dialog opens with configuration options.

3. Configure the required settings:

   a. Type *[example-value]* in the **[Field Name]** field.
      <!-- Use italics for user-entered variables -->
      
   b. Select **[Option Name]** from the **[Dropdown Name]** dropdown.
   
   c. Set **[Setting Name]** to **[Value]** to enable the feature.
      <!-- Include purpose: "to enable the feature" -->

4. Configure optional advanced settings:

   {{< expand "Advanced Configuration Options" "v" >}}
   <!-- Use expand shortcode for optional/advanced content -->
   
   a. In the **[Advanced Section]**, set **[Option]** to *[value]*.
   
   b. Enable **[Checkbox Name]** for [specific benefit/purpose].
   
   c. Type *[custom-value]* in **[Advanced Field]** if [specific condition applies].
   
   {{< /expand >}}

5. Click **Save** to apply the configuration.

   TrueNAS validates the settings and creates the [feature]. The **[Feature Name]** appears in the list with a status of **Active**.
   <!-- Always explain what happens - validation, creation, expected result -->

<!-- IMAGE EXAMPLE -->
{{< trueimage src="/images/SCALE/[Section]/[FeatureName][ScreenType].png" alt="[Descriptive text explaining what users see on this screen]" id="[Feature Name Screen ID]" >}}

## Configuring [Specific Feature Aspect]
<!-- H2 Title Case for major configuration areas -->

### Setting up [specific sub-task]
<!-- H3 sentence case for sub-procedures following 70% pattern -->

[Brief explanation of this configuration step and its purpose]

1. In the **[Feature Name]** screen, click the **Edit** <i class="material-icons" aria-hidden="true" title="Edit">edit</i> button for the [item type].
   <!-- Include icon reference when UI shows both icon and text -->

2. Navigate to the **[Tab Name]** tab.

3. Configure [specific setting group]:

   * **[Setting Name]**: [Purpose and recommended value]
   * **[Another Setting]**: [Explanation of options and impact]  
   * **[Third Setting]**: [When to use and expected behavior]

4. Click **Save** to apply changes.

   The system applies the new settings. [Specific result description].

<!-- WARNING EXAMPLE for destructive actions -->
{{< hint type=danger >}}
**Warning**: This action permanently deletes all data in the selected [object]. This cannot be undone.
{{< /hint >}}

<!-- INFO NOTE example -->
{{< hint type=info >}}
**Info**: This setting can be modified after initial configuration without affecting [existing functionality].
{{< /hint >}}

### Verifying [feature] functionality  
<!-- Sentence case H3 for verification steps -->

After completing the configuration, verify that [feature] works correctly:

1. Navigate to **[Verification Location]**.

2. Check that the **[Status Indicator]** shows **[Expected Status]**.

3. Test the functionality:

   a. [First test step with expected result]
   
   b. [Second test step with expected result]
   
   c. [Third test step with expected result]

4. [Final verification step that confirms success]

The [feature] is now configured and ready for use. [Brief statement of what users can now accomplish.]

<!-- 
CROSS-REFERENCE INTEGRATION
============================
Integrate cross-references naturally within sentence flow:
- Provide context for link purpose
- Use descriptive link text matching target content  
- Place links where most helpful in workflow
- Avoid long lists of related links or generic "see also" sections
-->

For additional configuration options, see [Advanced Feature Configuration]({{< ref "advanced-config.md" >}}).

Users can now [access/use/connect to] the configured [feature] as described in [User Access Guide]({{< ref "user-access.md" >}}).

<!-- 
TROUBLESHOOTING SECTION (CONDITIONAL)
=====================================
Only include when common, task-specific issues are known
Focus on problems specific to this procedure, not general troubleshooting
Place inline within steps OR as dedicated section for complex procedures
-->

## Troubleshooting Common Issues
<!-- Only include when task-specific problems are documented -->

### [Specific problem description]

**Symptoms**: [What users observe when this problem occurs]

**Cause**: [Why this problem happens]  

**Solution**: 
1. [First resolution step]
2. [Second resolution step]  
3. [Verification that problem is resolved]

### [Another specific problem]

**Symptoms**: [Observable behavior]

**Resolution**: [Direct fix with explanation]

For additional help, see the [General Troubleshooting Guide]({{< ref "troubleshooting.md" >}}).

<!-- 
ENDING CONVENTIONS
==================  
85% of TrueNAS tutorials end when the task is complete
End with the final procedural step that completes the task
Common patterns:
- Service activation: "Click Start to enable the service"  
- Configuration completion: "Click Save to apply settings"
- Verification: "The connection is now active"
- Task completion: "The feature is now available to users"

DO NOT include:
- Formal conclusion sections
- Summary paragraphs  
- "Next steps" recommendations (unless part of procedure)
- Generic troubleshooting
-->

<!-- 
FINAL TEMPLATE NOTES
=====================

FORMATTING REMINDERS:
- **Bold** only for UI elements (screens, buttons, fields, navigation paths)
- *Italics* for variables, examples, first-use terms
- `Code formatting` for commands, file paths, configuration values  
- <kbd>Tags</kbd> for keyboard buttons
- <file>Tags</file> for specific filenames

SHORTCODE CHECKLIST:
- {{< trueimage >}} for all screenshots with proper alt-text
- {{< truetable >}} for all data tables
- {{< ref >}} for internal cross-references
- {{< hint >}} with appropriate types (danger, caution, info)
- {{< expand >}} for progressive disclosure
- {{< enterprise >}} for enterprise-only features

VOICE AND TONE:
- Present tense, active voice throughout
- Second person direct address ("You configure...")
- Conversational, instructional approach
- Focus on user benefits and task completion
- Clear, actionable steps with expected results

STRUCTURE VALIDATION:
- Introduction explains functional purpose (2-4 sentences)
- Prerequisites only when actual dependencies exist
- Main steps limited to 7-10 maximum  
- Expected results included for each action
- Content ends when task is complete
- Cross-references integrated naturally
- Images aligned with procedural steps
-->