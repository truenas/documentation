---
title: "Issue Reporting"
description: "This article provides information on how to report issues to TrueNAS."
weight: 10
aliases:
  - /contributing/issuereporting/bugsfeatures/
  - /contributing/issuereporting/debug/
  - /contributing/issuereporting/savewebconsolelog/
tags:
- corecontributing
- scalecontributing
- coreissues
- scaleissues
---

We encourage all users to help us make TrueNAS the best NAS by reporting issues, requesting potentially helpful features, and relaying security vulnerabilities.  

{{< tabs "Issue Reporting" >}}
{{< tab "Bugs and Features" >}}
iXsystems uses [Jira](https://www.atlassian.com/software/jira) to track bugs and develop features.
You can view public issues without logging in, but you must create a Jira account to report bugs or suggest features.

![TrueNAS Jira Project](/images/Contribute/Jira.png "TrueNAS Jira Project")

## Bug Reports

Go to the [TrueNAS project on Jira](https://jira.ixsystems.com/browse/NAS) and click *Create* in the top bar.

![Create Ticket](/images/Contribute/JiraCreate.png "Create Ticket")

Set the *Issue Type* to *Bug*. The form will reload with more fields.
Developers use most of them, but you should fill out the *Summary* and *Description* to provide a useable report.

The *Summary* is a short, descriptive title that helps developers find the issue and understand the topic.

The *Description* lets you enter specific issue details.

![JiraSummaryDescription](/images/Contribute/JiraSummaryDescription.png "Summary and Description Field")

A good bug report includes these elements:

* A "to the point" description detailing the problem you encountered.

* Steps to reproduce the issue. A simple list of the steps you took to see the issue is fine.

* An explaination of what should have happened while taking the steps listed above.

* A description of what actually happened while taking the steps listed above.

* Your TrueNAS software version (found in **Dashboard**).

* If the bug is service-related, include the current service configuration to help developers replicate your system.

* Always include a TrueNAS Debug file. Include a console log if the error is a web interface issue.
  If unsure how to save these, refer to the TrueNAS Debug and Web Console Log tabs on this page.

* Include screenshots if the bug is a web interface glitch or a formatting problem.

* Include a video if screenshots do not adequately show the issue.

* Include additional details you think can help the developer investigate.

When finished filling out the *Description*, click *Create* at the bottom of the form.

![Submit Ticket](/images/Contribute/JiraCreateBottom.png "Submit Ticket")

Developers will review and update the ticket if/when they need additional information.
The Jira account receives emails about the ticket status.
Developers may request more details as they work to resolve the issue, so check the ticket periodically.

## Feature Suggestions

{{< include file="static/includes/General/CreateJiraSuggestion.md.part" markdown="true" >}}

## Security Issues

We publish previous security reports at https://security.truenas.com/.

Security issues do not appear on public issue trackers due to their sensitive nature.
If you have discovered a suspected security vulnerability in the latest version of a software release, you can [report this directly to the Security Team](mailto:security-officer@ixsystems.com).
{{< /tab >}}

{{< tab "TrueNAS Debug" >}}
## Creating a Debug File

{{< include file="static/includes/CORE/CreateDebug.md.part" markdown="true" >}}

## Adding a Debug File to a Report

Jira provides a secure area for uploading files with sensitive information like a system debug.

### New Tickets

Drag and drop the file into the **Private Attachment** box:

![JiraAttachmentNew](/images/Contribute/JiraAttachmentNew.png "NAS Project Bug Creation Form")

Clicking *browse* opens a local system file browser for selecting files.

### Existing Tickets

Open the ticket in your browser and find the **Attachments** section.

![JiraAttachmentExisting](/images/Contribute/JiraAttachmentExisting.png "Jira Ticket: Private Attachments")

Click the *+* to open a dialog for adding a new file to the secure area.

![JiraNASAttachPrivateDialog](/images/Contribute/JiraNASAttachPrivateDialog.png "Attaching a private file")

Drag and drop the file, add any comments about it, then click *Attach*.

Uploads in the **Private** section are only visible to project developers. JIRA removes them when closing the ticket.
{{< /tab >}}

{{< tab "Web Console Log" >}}
## Web Console Log
Web console logs help diagnose problems with the user interface.
You can add logs to TrueNAS issues for debugging.

### Firefox

Open the web console by clicking <i class="fa fa-bars" aria-hidden="true" title="Menu"></i> **(Menu) > More Tools > Web Developer Tools** (<kbd>Ctrl-Shift-I</kbd>).

In the upper right, set *Persist Logs*.
Click <i class="fa fa-bars" aria-hidden="true" title="More"></i> (More) > Settings. In the Web Console section, set **Enable timestamps**. 

Select the *Console* tab, then click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Settings) and set *Show Timestamps* and *Persist Logs*.

Leave the console open and perform the action that encounters problems.
Right-click in the console window and select *Export Visible Messages To > Clipboard*.
Open an editor, paste the clipboard contents, and save to a new <file>console.log</file> file.

After saving the file, open the console with <i class="fa fa-bars" aria-hidden="true" title="Menu"></i> **(Menu) > More Tools > Web Developer Tools** (<kbd>Ctrl-Shift-I</kbd>) and unset *Persist Logs*.

### Chrome

Open the console by clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **(Options) > More Tools > Developer tools** (<kbd>Ctrl-Shift-I</kbd>).

Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> **(Preferences)** and set *Preserve log* and *Show timestamps*. Close the **Preferences** window.

Leave the console open and perform the action that encounters problems. Right-click the console window. Choose *Save as…* and save the file.

After saving the file, open the console with <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **(Options) > More Tools > Developer tools** (<kbd>Ctrl-Shift-I</kbd>) and unset *Preserve log*.

## Attaching a Console Log File to a Report

Go to the [iXsystems Bug Tracker](https://jira.ixsystems.com). Locate an existing ticket or create a new one reporting the problem.
Attach the console log file to the ticket by dragging it to **Attachments**.
{{< /tab >}}
{{< /tabs >}}

{{< taglist tag="corecontributing" limit="10" >}}
