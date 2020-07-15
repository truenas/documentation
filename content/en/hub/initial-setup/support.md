---
title: "Reporting an issue"
description: "Filing a Bug Ticket or Feature Requests in TrueNAS"
---

## Support
The TrueNAS® **Support** option provides a built-in ticketing system for generating bug reports and feature requests.

<img src="/images/TN-12.0-support.PNG">
<br><br>

## Support Menu

This screen provides a built-in interface to the TrueNAS® issue tracker located at https://jira.ixsystems.com.

An account is required to create tickets and receive notifications as issues are addressed.

Log in to an existing account to enter an issue. If you do not have an account yet, go to https://jira.ixsystems.com, click **Register**, and fill out the form. Reply to the registration email to validate the account before logging in.

Before creating a bug report or feature request, ensure that an existing report does not already exist at https://jira.ixsystems.com. If a similar issue is already present and has not been marked Closed or Resolved, comment on that issue, adding new information to help solve it. When similar issues are *Closed* or *Resolved*, create a new issue and refer to the previous issue.

*Note*: Update the system to the latest version of STABLE and retest before reporting an issue. Newer versions of the software might have already fixed the problem.

To generate a report using the built-in *Support* screen, complete these fields:

**Username**: enter the login name created when registering at https://jira.ixsystems.com.

**Password**: enter the password associated with the registered login name.

**Type**: select *Bug* when reporting an issue or *Feature* when requesting a new feature.

**Category**: this drop-down menu is empty until a registered Username and Password are entered. The field remains empty if either value is incorrect. After the *Username* and *Password* are validated, possible categories are populated to the drop-down menu. Select the one that best describes the bug or feature being reported.

**Attach Debug**: enabling this option is recommended so an overview of the system hardware, build string, and configuration is automatically generated and included with the ticket. Generating and attaching a debug to the ticket can take some time.

Debug file attachments are limited to 20 MiB. If the debug file is too large to include, unset the option to generate the debug file and let the system create an issue ticket as shown below. Manually create a debug file by going to **System** ➞ **Advanced** and clicking **SAVE DEBUG**.

Go to the ticket at https://jira.ixsystems.com and add the debug file as a private attachment.

**Subject**: enter a descriptive title for the ticket. A good Subject makes it easy to find similar reports.

**Description**: enter a one- to three-paragraph summary of the issue that describes the problem, and if applicable, what steps can be taken to reproduce it.

**Attach screenshots**: select screenshots on the client system to include with the report.

Click **SUBMIT** to automatically generate and upload the report to the issue tracker (https://jira.ixsystems.com). This process can take several minutes while information is collected and sent. All files included with the report are added to the issue tracker ticket as private attachments and can only be accessed by the creator of the ticket and iXsystems.

After the new ticket is created, the ticket URL is shown for viewing or updating with more information.
