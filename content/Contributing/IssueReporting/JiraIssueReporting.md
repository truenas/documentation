---
title: "Issue Reporting in Jira"
description: "How to report issues using Jira bug reports."
weight: 10
tags:
- contributing
- issues
- support
---

We encourage all users to help us make TrueNAS the best NAS by reporting issues, requesting potentially helpful features, and relaying security vulnerabilities.  

## Issue Reporting in Jira
TrueNAS uses [Jira](https://www.atlassian.com/software/jira) to track bugs and develop features.
You can view public issues without logging in, but you must create an Atlassian account to report bugs.

![TrueNAS Jira Project](/images/Contribute/Jira.png "TrueNAS Jira Project")

## Submitting Bug Reports In Jira

Go to the [TrueNAS project on Jira](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/issues) and click **Create** in the top bar.

![Create Ticket](/images/Contribute/JiraCreate.png "Create Ticket")

Set the **Issue Type** to **Bug**. The form reloads with more fields. Do not select the **Defect** option which is only for internal use.

Developers use most of the fields on bug tickets, but you should fill out the **Summary** and **Description** to provide a usable report and include the **Affects Version** fields.

Enter a short, descriptive title that helps developers find the issue and understand the topic in the **Summary** field.

Enter specific issue details in the **Description** field.

![JiraSummaryDescription](/images/Contribute/JiraSummaryDescription.png "Summary and Description Field")

Select a TrueNAS release from the **Affects Version** dropdown list. If you cannot locate the version of software installed on the dropdown list, include it in the **Description** field.

A good bug report includes these elements:

* A brief, specific, description detailing the problem you encountered.

* The steps to reproduce the issue. A simple list of the steps you took to see the issue is fine.

* An explanation of what should have happened while taking the steps listed above.

* A description of what happened while taking the steps listed above.

* The TrueNAS software version you are using, which is found on the main **Dashboard**.

* The current service configuration if the bug is service-related to help developers replicate your system.

* Any additional details you think can help the developer investigate.

In addition to the above information, please also provide:

* A TrueNAS debug file. This is required to help developers identify and troubleshoot issues on your system.
  
  Include a console log if the error is a web interface issue.
  If unsure how to save these, see the [Adding a Debug File to a Report](#adding-a-debug-file-to-a-jira-ticket) and [Web Console Log](#obtaining-web-console-logs) sections in this article.

* The core file if your system produces a core file error. Save the file and attach it to your ticket.

* Screenshots if the bug is a web interface glitch or a formatting problem.

* A video if screenshots do not adequately show the issue.

When finished filling out the all fields (i.e., **Summary**, **Description**, **Affects Version**, etc.), click **Create** at the bottom of the form.

![Submit Ticket](/images/Contribute/JiraCreateBottom.png "Submit Ticket")

Developers review and update the ticket if/when they need additional information.
The Jira account receives emails about the ticket status.
Developers might request more details as they work to resolve the issue, so check the ticket periodically.

### Security Issues
See https://security.truenas.com/ for security advisories and software bill of materials for specific TrueNAS releases.

Security issues do not appear on public issue trackers due to their sensitive nature.
If you have discovered a suspected security vulnerability in the latest version of a software release, you can [report this directly to the Security Team](mailto:security-officer@ixsystems.com).

## Downloading a Debug File
{{< include file="/static/includes/CreateDebugCORE.md" >}}
{{< include file="/static/includes/CreateDebugSCALE.md" >}}

### Adding a Debug File to a Jira Ticket
Jira provides a public-facing area for files that do not require privacy.
If you are not concerned about data privacy, attach the debug, core, log, or other files to the Jira ticket.
Debug files attached directly to a Jira issue ticket are visible to other users searching and reading Jira issue tickets.

For users concerned about data privacy, TrueNAS provides a link to a secure file attachment ticket where you can upload files with sensitive information like a system debug or screenshot of network connections.

After submitting a bug report, Jira sends a confirmation email with a link to your Jira issue ticket.
The Jira issue ticket includes a link to the **TrueNAS Private File Attachments** area where you can upload the debug file and any other images or logs you kept private. 
Link the private file upload ticket to your Jira issue report before you save the private upload file ticket.

Only authorized individuals can access files attached to private file upload tickets!

Jira tickets with debugs directly attached are marked private, limiting access to only the ticket creator and authorized TrueNAS team members.
Using the private file attachment tickets keeps issue tickets public so others can see the reports and track progress while still protecting private data.

### Attaching Files to New Tickets
Drag and drop public-facing files into the **Attachment** box when creating a new ticket:

![JiraAttachmentNew](/images/Contribute/newjiraattachments.png "NAS Project Bug Creation Form")

To protect your privacy, use the link in the system-generated message in your Jira ticket to upload sensitive information to the TrueNAS Private File Attachments area.
Link your private upload ticket to your Jira issue ticket so developers can locate the file. Files uploaded to this service are only visible to project developers.

### Attaching Files to Existing Tickets
For public-facing files, open the ticket in your browser and either click **Attach**, at the top of the ticket or click the **+**, in the **Attachments** section, to open a local system file browser to select the files.
You can also drag and drop the file onto the **Attachments** box and add any comments about it.

Upload private files to our secure private upload service located at
https://ixsystems.atlassian.net/servicedesk/customer/portal/15/group/37/create/153. Files uploaded to this service are only visible to project developers.

## Obtaining Web Console Logs
Web console logs help diagnose problems with the user interface.
You can add logs to TrueNAS issues for debugging.

{{< expand "Expand for more information about the web console log." "v" >}}

### Firefox
Open the web console by clicking <i class="fa fa-bars" aria-hidden="true" title="Menu"></i> **(Menu) > More Tools > Web Developer Tools** (<kbd>Ctrl-Shift-I</kbd>).

In the upper right, set **Persist Logs**.
Click <i class="fa fa-bars" aria-hidden="true" title="More"></i> (More) > Settings. In the Web Console section, set **Enable timestamps**.

Select the **Console** tab, then click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> (Settings) and set **Show Timestamps** and **Persist Logs**.

Leave the console open and perform the action that encounters problems.
Right-click in the console window and select **Export Visible Messages To > Clipboard**.
Open an editor, paste the clipboard contents, and save to a new <file>console.log</file> file.

After saving the file, open the console with <i class="fa fa-bars" aria-hidden="true" title="Menu"></i> **(Menu) > More Tools > Web Developer Tools** (<kbd>Ctrl-Shift-I</kbd>) and unset *Persist Logs*.

### Chrome
Open the console by clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **(Options) > More Tools > Developer tools** (<kbd>Ctrl-Shift-I</kbd>).

Click <i class="fa fa-cog" aria-hidden="true" title="Settings"></i> **(Preferences)** and select **Preserve log** and **Show timestamps**. Close the **Preferences** window.

Leave the console open and perform the action that encounters problems. Right-click the console window. Choose **Save as** and save the file.

After saving the file, open the console with <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **(Options) > More Tools > Developer tools** (<kbd>Ctrl-Shift-I</kbd>) and select **Preserve log** to clear the checkbox.
{{< /expand >}}
