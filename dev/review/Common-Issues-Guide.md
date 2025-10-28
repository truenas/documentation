# Common TrueNAS Documentation Issues Guide

This guide identifies the most frequent issues found in TrueNAS documentation reviews and provides specific solutions based on our style guide analysis.

---

## High-Priority Issues (Must Fix)

These issues significantly impact documentation quality and consistency.

### 1. Voice and Tense Errors

#### Using "will" instead of present tense
**Frequency**: Very common
**Impact**: Violates present tense standard, affects translation

❌ **Incorrect Examples:**
- "This setting will affect system performance"
- "The wizard will create a new pool"  
- "Users will be able to access the share"

✅ **Correct Examples:**
- "This setting affects system performance"
- "The wizard creates a new pool"
- "Users can access the share"

#### Using "may" for possibility
**Frequency**: Common
**Impact**: Inconsistent with style standards

❌ **Incorrect Examples:**
- "You may need to restart the service"
- "The system may display an error"
- "This may cause performance issues"

✅ **Correct Examples:**
- "You might need to restart the service"
- "The system could display an error"  
- "This can cause performance issues"

#### Passive voice usage
**Frequency**: Common in reference docs
**Impact**: Reduces clarity for international readers

❌ **Incorrect Examples:**
- "The pool will be created by the system"
- "Settings are configured by the administrator"
- "The service should be restarted"

✅ **Correct Examples:**
- "The system creates the pool"
- "The administrator configures settings"
- "Restart the service"

### 2. Formatting and Emphasis Errors

#### Bold used for emphasis instead of UI elements
**Frequency**: Very common
**Impact**: Breaks UI element identification system

❌ **Incorrect Examples:**
- "This is **very important** to remember"
- "**Never** delete system files"
- "The process is **complex** and requires care"

✅ **Correct Examples:**
- "This is important to remember" (no bold)
- "Never delete system files" (no bold)
- "Click **Save** to apply changes" (UI element)

#### Missing Hugo shortcodes
**Frequency**: Common in converted content
**Impact**: Breaks theme consistency, accessibility

❌ **Incorrect Examples:**
- `<img src="screenshot.png">` (raw HTML)
- `[Link text](../other-file.md)` (markdown link)
- HTML tables instead of truetable

✅ **Correct Examples:**
- `{{< trueimage src="/images/SCALE/Area/Feature.png" alt="Description" >}}`
- `{{< ref "other-file" >}}`
- `{{< truetable >}}`

### 3. UI Element Documentation Errors

#### Inconsistent UI element formatting  
**Frequency**: Very common
**Impact**: User confusion, inconsistent navigation help

❌ **Incorrect Examples:**
- "Click Save to continue" (no bold)
- "Go to System Settings" (inconsistent)
- "Select 'Advanced Options' from menu" (quotes instead of bold)

✅ **Correct Examples:**
- "Click **Save** to continue"
- "Go to **System > Settings**"
- "Select **Advanced Options** from the menu"

---

## Medium-Priority Issues (Should Fix)

These issues affect consistency and user experience.

### 4. Heading and Structure Problems

#### Incorrect heading hierarchy
**Frequency**: Common
**Impact**: Breaks navigation and SEO

❌ **Incorrect Examples:**
- H2 followed by H4 (skips H3)
- All headings in title case
- Multiple H1 tags in document body

✅ **Correct Examples:**
- Logical progression: H2 → H3 → H4
- H2 in title case: "Managing User Accounts"  
- H3+ in sentence case: "Adding a new user account"

#### Missing or inappropriate prerequisites
**Frequency**: Common
**Impact**: User frustration, incomplete procedures

❌ **Incorrect Examples:**
- Prerequisites on simple tasks that don't need them
- Missing prerequisites on complex setups
- Prerequisites that repeat basic setup info

✅ **Correct Examples:**
- Prerequisites only when setup dependencies exist
- "Before configuring Active Directory, complete initial system setup"
- Link to prerequisite procedures instead of repeating

### 5. Screenshot and Image Issues

#### Missing or incorrect alt-text
**Frequency**: Very common
**Impact**: Accessibility problems, screen reader issues

❌ **Incorrect Examples:**
- `alt="screenshot"` (generic)
- `alt="image1"` (meaningless)
- Missing alt-text entirely

✅ **Correct Examples:**
- `alt="Add SMB Share Basic Options"`
- `alt="System Information Widget"`
- `alt="Delete Confirmation Dialog"`

#### Outdated screenshots
**Frequency**: Common over time
**Impact**: User confusion with current UI

**Solution**: Regular screenshot audit and update process

---

## Low-Priority Issues (Nice to Fix)

These issues improve polish and consistency.

### 6. Writing Style Inconsistencies

#### Sentence length and complexity
**Frequency**: Moderate
**Impact**: Affects readability for ESL users

❌ **Problematic Example:**
"When configuring SMB shares for use with Active Directory authentication, you need to ensure that the domain controller is properly configured, the network connectivity is established, and the time synchronization is accurate, which may require additional configuration steps depending on your network environment."

✅ **Better Example:**
"Configure SMB shares for Active Directory authentication by completing these steps. First, ensure the domain controller is properly configured. Next, establish network connectivity. Finally, verify time synchronization is accurate."

#### Inconsistent terminology
**Frequency**: Common across large documentation sets
**Impact**: User confusion, reduced searchability

**Common Examples:**
- "Login" vs "Log in" (use "log in" as verb, "login" as noun)
- "Setup" vs "Set up" (use "set up" as verb, "setup" as noun)
- "Data set" vs "Dataset" (use "dataset")

### 7. Cross-Reference Problems

#### Broken or missing internal links
**Frequency**: Common after reorganization
**Impact**: Navigation problems, user frustration

❌ **Problematic Examples:**
- `[Old Link](../moved-file.md)` (broken)
- Missing links to related procedures
- Circular references

✅ **Solutions:**
- Use `{{< ref "current-filename" >}}` syntax
- Regular link validation
- Contextual cross-references

---

## Content-Type Specific Issues

### Tutorial-Specific Problems

#### Missing expected results
**Frequency**: Very common
**Impact**: Users don't know if procedure worked

❌ **Incomplete Example:**
"1. Click **Save**"

✅ **Complete Example:**  
"1. Click **Save**. The settings are applied and the service restarts."

#### Too many main steps
**Frequency**: Common in complex procedures
**Impact**: Cognitive overload

**Solution**: Limit to 7-10 main steps, use nested sub-steps

### Reference-Specific Problems

#### Missing required field notation
**Frequency**: Common
**Impact**: Users don't know which fields are mandatory

❌ **Incomplete Example:**
"**Username** - Enter the user account name"

✅ **Complete Example:**
"**Username** - (Required) Enter the user account name"

#### Inconsistent table formatting
**Frequency**: Common
**Impact**: Breaks visual consistency

**Solution**: Always use `{{< truetable >}}` with "Setting | Description" format

---

## Quick Fix Strategies

### For Writers
1. **Use find/replace** for common issues:
   - Find: " will " → Replace: " " (then fix tense)
   - Find: " may " → Replace: " might " or " can "
   - Find: "**" → Verify it's for UI elements only

2. **Check every bold item**: Is it a UI element (button, screen, field)?

3. **Review headings**: H2 title case, H3+ sentence case

### For Reviewers  
1. **Scan for prohibited words**: "will", "may", bold emphasis
2. **Check image shortcodes**: Should be `{{< trueimage >}}`
3. **Verify cross-references**: Should use `{{< ref >}}` 
4. **Count main steps**: Should be 7-10 maximum

### For Team Leads
1. **Common training topics**: Voice/tense, bold usage, shortcodes
2. **Review priority**: Fix high-priority issues first
3. **Pattern tracking**: Note recurring issues for style guide updates

---

## Prevention Strategies

### Before Writing
- [ ] Review appropriate style guide
- [ ] Use correct template
- [ ] Set up spell check with custom dictionary

### During Writing  
- [ ] Check voice and tense continuously
- [ ] Use bold only for UI elements
- [ ] Keep sentences under 30 words

### Before Submitting
- [ ] Run through review checklist
- [ ] Use Claude agent for style review
- [ ] Verify all links and images

---

## Issue Escalation

### When to Ask for Help
- **Style guide conflicts**: When existing guide seems wrong
- **Technical accuracy**: When unsure about UI element names
- **Scope questions**: When unsure if prerequisites are needed

### How to Report Style Guide Issues
1. Document specific examples
2. Note frequency of occurrence  
3. Suggest alternative approach
4. Include impact assessment

---

**Document Updated**: September 12, 2025  
**Usage**: Reference during reviews, use for training new team members