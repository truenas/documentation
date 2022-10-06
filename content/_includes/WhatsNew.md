---
---

Based on your feedback and also to prepare for even more content creation, the Documentation Hub has had some changes for the CORE 13.0 release!

{{< toc >}}

### Text Suggestions are Live!

As the Docs Hub matures, we are excited to continue providing more opportunities for Open Source contribution and even further reduce the barrier to [contributing documentation]({{< relref "ContentUpdate.md" >}})!
For the CORE 13.0 release, the Docs Hub expanded to allow readers to suggest new text to the content.
The only requirement is logging in with a [Google](https://support.google.com/accounts/answer/27441?hl=en) or [GitHub](https://github.com/signup) account.

The website uses [Commento](https://commento.io/) to add a Reddit-style comment thread after the content of each article.
This allows suggesting new content on that page and readers interacting with each other and upvoting suggestions.
A team of moderators periodically reviews the suggestions and integrates them into the content when enough upvotes are accumulated and the suggestion is validated.

### Software Release Notes Rework

As part of unifying content, release notes for the different software applications are now available with the related documentation:
* CORE: https://www.truenas.com/docs/core/corereleasenotes/
* SCALE: https://www.truenas.com/docs/scale/scalereleasenotes/
* TrueCommand: https://www.truenas.com/docs/truecommand/tcreleasenotes/

These locations now contain all the release notes for each release of the current Major Version the live Documentation Hub is tracking.
Release notes and notices that are relevent to previous major versions are available in the [Documentation Archive](/archive) alongside static copies of that version's documentation.

Each new unified release notes article for CORE, SCALE, and TrueCommand also contains the development roadmap for each major version.
The current minor release notes are placed at the top of the article and previous minor release notes placed behind an expandable element, so alleviate vertical scrolling.

#### CORE and SCALE Next Version Articles

Information about upcoming CORE and SCALE major versions is being placed in two new locations:
* CORE: https://www.truenas.com/docs/core/corenextversion/
* SCALE: https://www.truenas.com/docs/scale/scalenextversion/

These sections are dynamically updated with development notes, early release notes, and instructions for obtaining builds of the next release.

### Topical Organization for Software Documentation

To better provide purposeful and direct documentation, CORE and SCALE content is reorganized into three primary subsections:
* **Getting Started Guide** ([CORE](/core/gettingstarted/), [SCALE](/scale/gettingstarted/)): this guide provides some introductory information about the software and provides step-by-step instructions for installing and some initial configuration of the software.
* **Configuration Tutorials** ([CORE](/core/coretutorials/), [SCALE](/scale/scaletutorials/)): content in this section is written for accomplishing some specific task in the software.
  Tutorials range from simple procedures to complicated use-cases.
* **UI Reference Guide** ([CORE](/core/uireference/), [SCALE](/scale/scaleuireference/)): This is a descriptive guide of the various menus and options you will encounter when using the software.
  The structure of this section *parallels* the layout of the TrueNAS web interface.

No content was removed with these changes, but is now recategorized as either tutorial or descriptive.
This is intended to help readers sort and find their desired content faster, provide an improved experience for readers that are looking for either simple descriptive content or specific use-case tutorials, and better organize content for future expansion.

#### Solutions Guide Rework

The [Solutions]({{< relref "/solutions/_index.md" >}}) articles are elevated out of the CORE documentation area and is refocusing on providing version-agnostic background information and tutorials about general system use cases or integrations with other vendor solutions.

### Expanded Download or Print Options

Each top-level section of CORE and SCALE documentation also has a **Download or Print** option.
This combines all the individual articles in that section into a single document format that can be downloaded as a PDF, physically printed, or saved as HTML.
