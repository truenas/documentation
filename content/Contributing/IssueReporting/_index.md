---
title: "Issue Reporting"
geekdocCollapseSection: true
weight: 10
---

We encourage all users to help us make TrueNAS the best NAS OS by submitting bug reports, requesting features that may be helpful to other users, and reporting security vulnerabililties.  

{{< tabs "Issue Reporting" >}}
{{< tab "Bugs and Features" >}}
iXsystems uses [Jira](https://www.atlassian.com/software/jira) to track bugs and develope features.
You can view public issues without logging in, but you must create a Jira account to report bugs or suggest features.

![TrueNAS Jira Project](/images/Contribute/Jira.png "TrueNAS Jira Project")

## Bug Reports

Go to the [TrueNAS project on Jira](https://jira.ixsystems.com/browse/NAS) and click *Create* in the top bar.

![Create Ticket](/images/Contribute/JiraCreate.png "Create Ticket")

Set the *Issue Type* to *Bug*. The form will reload with more fields.
Developers use most of the fields, but you should fill out the *Summary* and *Description* to provide a useful report.

The *Summary* is a short, descriptive title that helps developers find the issue and understand the topic.

The *Description* lets you enter specific issue details.

![JiraSummaryDescription](/images/Contribute/JiraSummaryDescription.png "Summary and Description Field")

A good bug report includes these elements:

* A "to the point" issue description.
  Try to clearly describe the problem that was encountered.

* Reproducing the issue.
  This can be a simple bullet point list of the steps you took to see the issue.

* What should have happened.
  Explain what you expected to happen while taking the steps listed above.

* What did happen.
  Describe what actually happened while taking the steps listed above.

* Software version.
  The TrueNAS **Dashboard** shows the installed version

* Current configuration.
  When the bug is related to a service, include the current configuration of the service.  This helps the developers reproduce your system as close as possible.

* Debugs and console logs.
  Always include a TrueNAS Debug file and, if the error is a web interface issue, please include a console log.
  If unsure how to save these, refer to the [TrueNAS Debug]({{< relref "#truenas-debug" >}}) and [Web Console Log]({{< relref "#web-console-log" >}}) tabs in this article.

* Screenshots
  When the bug is a web interface glitch or a formatting problem, screenshots are very helpful.

* Video
  When screenshots do not adequately show the issue, you can include a video recording of the issue.

* Additional information.
  When there is any additional details that you think can be helpful for the developer investigation, please include it.

When finished filling out the *Description*, click *Create* at the bottom of the form.

![Submit Ticket](/images/Contribute/JiraCreateBottom.png "Submit Ticket")

The ticket will be reviewed and updated when any additional information is needed.
The Jira account receives emails about the ticket status.
Check the ticket periodically as developers can request additional details as they work to resolve the issue.

## Feature Suggestions

{{< include file="static/includes/General/CreateJiraSuggestion.md.part" markdown="true" >}}

## Security Issues

Previous security reports are published to https://security.truenas.com/.

Due to their sensitive nature, security issues are not reported on public issue trackers.
If you have discovered a suspected security vulnerability in the latest version of a software release, you can [report this directly to the Security Team](mailto:security-officer@ixsystems.com).
{{< /tab >}}

{{< tab "TrueNAS Debug" >}}
## Creating a Debug File

{{< include file="static/includes/CORE/CreateDebug.md.part" markdown="true" >}}

{{< expand "TrueNAS SCALE" "v" >}}
TrueNAS SCALE has an identical process in **System Settings > Advanced**.
{{< /expand >}}

## Adding a Debug File to a Report

Jira provides a secure area for uploading files with sensitive information, like a system debug.

{{< tabs "Secure Attachments" >}}
{{< tab "New Tickets" >}}
Drag and drop the file into the **Private Attachment** box:

![JiraNASCreateBug](/images/Contribute/JiraNASCreateBug.png "NAS Project Bug Creation Form")

Clicking *browse* opens a local system file browser for selecting the file.

{{< /tab >}}
{{< tab "Existing Tickets" >}}

Open the ticket in your browser and find the **Attachments** section.

![JiraNASBugHighlightPrivateAttachment](/images/Contribute/JiraNASBugHighlightPrivateAttachment.png "Jira Ticket: Private Attachments")

Click the *+* to open a dialog for adding a new file to the secure area.

![JiraNASAttachPrivateDialog](/images/Contribute/JiraNASAttachPrivateDialog.png "Attaching a private file")

Drag and drop the file, add any comments about it, then click *Attach*.
{{< /tab >}}
{{< /tabs >}}

Uploads in the **Private** section are only visible to project developers.
These files are also removed when the ticket is closed.
{{< /tab >}}

{{< tab "Web Console Log" >}}
A web console log can help to diagnose problems with the user interface.
This document explains how to save the web console log from different browsers.
The log can then be added to a TrueNAS issue for debugging.

{{< tabs "SaveConsoleLog" >}}
{{< tab "Firefox" >}}
## Firefox

Open the web console by clicking  <i class="fa fa-bars" aria-hidden="true" title="Menu"></i> **(Menu) > Web Developer > Web Console** or by pressing <kbd>Ctrl-Shift-K</kbd>.

In the upper right, set *Persist Logs*.
Click <i class="fa fa-bars" aria-hidden="true" title="More"></i> (More) > Settings. In the Web Console section, set **Enable timestamps**. 

For versions *78* and later, click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Settings) in the **Web Console** area and set *Enable timestamps* and *Persist Logs*.
Click the *Console* tab or press <kbd>Ctrl-Shift-K</kbd> to switch to the console window.

Leave the console open and perform the action that encounters problems.
Right-click in the console window and select *Export visible messages to clipboard*.
Open an editor, paste the clipboard contents, and save to a new <file>console.log</file> file.

After saving the file, go back to the console with <i class="fa fa-bars" aria-hidden="true" title="Menu"></i> **(Menu) > Web Developer > Web Console** or by pressing <kbd>Ctrl-Shift-K</kbd>.
Find and unset *Persist Logs*.
{{< /tab >}}
{{< tab "Chrome" >}}
## Chrome

Open the console by clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **(Options) > More Tools > Developer tools** or by pressing <kbd>Ctrl-Shift-I</kbd>.

Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Settings) and set *Preserve log*.

Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **(Options) > Settings > Preferences**. In the **Console** section, set *Show timestamps*. Close the **Preferences** window.

Leave the console open and perform the action that encounters problems.
Right-click in the console window. Choose *Save as…* and save to a file called <file>console.log</file>.

After saving the file, go back to the console with <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **(Options) > More Tools > Developer tools** or by pressing <kbd>Ctrl-Shift-I</kbd>. Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Settings) and unset *Preserve log*.
{{< /tab >}}
{{< /tabs >}}

## Attaching a Console Log File to a Report

Go to the [iXsystems Bug Tracker](https://jira.ixsystems.com). Locate an existing ticket or create a new one reporting the problem.
Attach the console log file to the ticket by dragging it to the **Document Vault**.
{{< /tab >}}
{{< /tabs >}}
