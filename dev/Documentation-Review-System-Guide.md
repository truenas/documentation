# TrueNAS Documentation Draft Review System

## Overview

The TrueNAS Documentation Draft Review System is a Claude Code-based tool designed to help writers improve their documentation drafts before publication. This system focuses on content quality, clarity, and improved style guide compliance.

**Primary Use Case**: Draft review and improvement - helping writers identify content issues, clarity problems, and structural gaps in their documentation before final editing and publication.

**Important**: This is not a replacement for human editorial review or deterministic style checking tools. It's a draft improvement aid that provides valuable feedback with known limitations.

## How to Use the System

### Step 1: Prepare Your Draft
- Complete your initial draft in markdown format
- Include any screenshots or diagrams you plan to use
- Focus on content completeness

### Step 2: Choose the Right Review Prompt
- **Tutorial drafts**: Use the Draft Tutorial Review and Fix Prompt
- **Reference/UI documentation drafts**: Use the Draft Reference Documentation Review and Fix Prompt

### Step 3: Run the Review
1. Open the complete prompt file: `/dev/review/Claude-Review-Prompts.md`
2. Copy the appropriate draft review prompt in its entirety
3. Replace the placeholder `TUTORIAL_FILE_PATH` or `REFERENCE_FILE_PATH` with your actual file path
4. Paste the complete prompt into Claude Code
5. Claude will use the Task tool to run a comprehensive analysis

### Step 4: Review the Results
The system provides prioritized feedback:

**Priority 1: Content & Clarity Issues**
- Task flow logic and step sequencing
- Clarity for international readers
- Reading level and sentence complexity
- User context and prerequisites
- Missing information or explanations

**Priority 2: Structure & Organization**
- Document hierarchy and organization
- Missing sections or incomplete coverage
- Screenshot placement and relevance
- Cross-reference accuracy

**Priority 3: Style & Formatting**
- Style guide compliance issues
- Formatting inconsistencies
- Hugo shortcode usage

### Step 5: Apply Improvements
- Address Priority 1 issues first (content and clarity)
- Work through Priority 2 issues (structure)
- Consider Priority 3 suggestions (style) as time permits
- Use the provided checklist to track your progress

### What You'll Get
- **Automatic fixes applied**: Typos, tense issues, image format conversion
- **Specific line numbers**: Every issue includes exact locations
- **Actionable suggestions**: Clear guidance on what to change and why
- **Priority-based feedback**: Focus on what matters most for draft improvement
- **Progress tracking**: Checklists to manage your revision workflow

## System Design and Components

### Core Components

**1. Style Guides** (`/dev/style-guides/`)
- `TrueNAS-Tutorial-Style-Guide.md` - Tutorial-specific standards
- `TrueNAS-Reference-Style-Guide.md` - Reference documentation standards  
- `Common-Elements-Guide.md` - Shared formatting and voice guidelines

**2. Review Prompts** (`/dev/review/Claude-Review-Prompts.md`)
- Draft Tutorial Review and Fix Prompt - Content and clarity focused
- Draft Reference Documentation Review and Fix Prompt - Completeness and usability focused
- Complete task instructions for Claude Code agents

**3. Templates** (`/dev/templates/`)
- `tutorial-template.md` - Starting template for new tutorials
- `reference-template.md` - Starting template for new reference docs

### How It Works

1. **Claude Code Task Tool**: The system uses Claude Code's Task tool to launch specialized agents with specific instructions
2. **Style Guide Analysis**: Agents read the comprehensive style guides to understand TrueNAS documentation standards
3. **Draft-Focused Review**: Agents prioritize content quality and user experience over perfect style compliance
4. **Multi-File Analysis**: The system analyzes both main documents and Hugo include files
5. **Structured Output**: Results are formatted for easy action with specific line numbers and replacement text

### Review Process Flow

```
Draft Document → Claude Code Agent → Style Guide Analysis → Prioritized Feedback → Writer Action → Improved Draft
```

The agent performs:
- **Automatic fixes**: Obvious errors (typos, tense, image formatting)
- **Content analysis**: Task flow, clarity, completeness
- **Structural review**: Organization, missing sections, cross-references  
- **Style checking**: Format compliance, Hugo shortcode usage

## Understanding the Limitations

### Why LLMs Are Inconsistent

Large Language Models (LLMs) like Claude are **probabilistic systems**, not deterministic rule engines. This means:

**Same Input ≠ Same Output**
- Running the same review twice can produce different results
- The system might catch different issues on different runs
- Some obvious patterns may be missed inconsistently

**Why This Happens**
- LLMs generate responses based on probability distributions
- Context interpretation can vary between runs
- Complex multi-step processes (like analyzing main files + includes) increase variability
- "Creative" responses prioritize variety over consistency

### Specific Limitations for Documentation Review

**Inconsistent Rule Application**
- May flag `![image]()` formatting in one run but miss it in another
- Might apply tense corrections inconsistently across similar sentences
- Could miss patterns it caught in previous reviews

**False Positives and Negatives**
- May flag intentional patterns (like "edit edit" for accessibility) as errors
- Could miss actual style guide violations
- Might suggest changes that don't align with TrueNAS standards

**Context Forgetting**
- Doesn't remember previous reviews or fixes applied
- May re-suggest changes that were already addressed
- Cannot build on previous feedback consistently

### Why This System Still Works for Drafts

**Lower Stakes Environment**
- Drafts are expected to have issues - inconsistency is less problematic
- Writers manually review all suggestions before applying
- Focus is on improvement, not perfection

**Human Oversight Required**
- All suggestions require human evaluation
- Writers can ignore false positives
- Multiple review rounds catch what was missed

**Value Despite Limitations**
- Catches 70-80% of issues writers might miss
- Provides educational feedback on style guide requirements
- Offers fresh perspective on content clarity
- Identifies structural gaps in documentation

### What We Recommend

**❌ Don't use this system for:**
- Final publication review without human oversight
- Automated style guide enforcement
- Mission-critical consistency requirements
- Situations where 100% accuracy is required

**✅ Do use this system for:**
- Draft improvement and self-editing
- Educational feedback on writing standards
- Content clarity and completeness checking
- Identifying potential issues for human review

## Alternative Approaches for Production

For final publication and consistent style enforcement, consider:

**Vale Linting System**
- Deterministic rule-based checking  
- 100% consistent results
- Custom rules for TrueNAS style guide
- CI/CD integration capability
- Perfect for automated style compliance

**Human Editorial Review**
- Content quality assessment
- Style guide interpretation
- Complex context evaluation
- Final publication approval

**Hybrid Approach**
1. **Draft stage**: Use this LLM system for improvement feedback
2. **Pre-publication**: Apply Vale rules for style compliance
3. **Final review**: Human editor for quality assurance

## Best Practices

### For Writers Using the System

**Do:**
- Use for draft improvement, not final validation
- Review all suggestions critically before applying
- Focus on Priority 1 feedback first (content and clarity)
- Run reviews on near-complete drafts for best results
- Combine with human feedback and editing

**Don't:**
- Apply suggestions blindly without evaluation
- Expect perfect consistency between review runs  
- Use as the sole quality control method
- Skip human review of complex content changes

### For Team Implementation

**Training Approach:**
- Present this as a "draft helper" tool, not an authority
- Emphasize the limitations and need for human judgment
- Provide examples of good vs. poor suggestions to evaluate
- Establish that inconsistency is expected and manageable

**Quality Control:**
- Maintain human editorial oversight
- Use deterministic tools (like Vale) for final style checking
- Track common false positives to improve user guidance
- Regular team feedback on system effectiveness

## Example Files and Workflow

To help team members understand the complete review process, example files are provided in `/dev/examples/example-draft-review/`:

### **Example File Set:**
- **`example-broken-draft.md`** - Original draft with intentional style guide violations, content issues, and structural problems
- **`example-draft-with-automatic-fixes.md`** - Same draft after automatic fixes (typos, tense, image formatting) have been applied
- **`example-draft-with-revisions.md`** - Final version with all suggested improvements implemented
- **`review-feedback-output.md`** - Complete feedback output from the review system showing all detected issues

### **Learning from the Examples:**
1. **Compare the files** to see the progression from broken draft to polished content
2. **Study the feedback output** to understand what types of issues the system catches
3. **Review the final version** to see how suggestions translate into actual improvements
4. **Use as training material** for new team members learning the review process

### **What the Examples Demonstrate:**
- **Content clarity improvements**: Adding functional purpose, simplifying complex sentences
- **Structural enhancements**: Converting procedures to numbered steps, adding expected results
- **Style guide compliance**: Proper UI formatting, Hugo shortcode usage, tense consistency
- **International accessibility**: Removing idioms, simplifying sentence structure

These examples show both the system's capabilities and limitations, helping set appropriate expectations for real-world use.

## Conclusion

The TrueNAS Documentation Draft Review System provides valuable assistance for improving draft content, despite the inherent limitations of LLM-based tools. By understanding these limitations and using the system appropriately - as a draft improvement aid rather than a final authority - teams can benefit from enhanced content quality while maintaining appropriate quality control processes.

The key to success is setting proper expectations: this system helps writers create better drafts, but human oversight and deterministic tools remain essential for final publication quality assurance.

---

**System Location**: `/dev/review/Claude-Review-Prompts.md`  
**Last Updated**: September 2025  
**Maintained By**: Documentation Team