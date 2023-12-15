---
title: "Filing an Issue Ticket in SCALE"
description: "Provides information on using TrueNAS SCALE UI to file an issue ticket in Jira."
weight: 20
aliases:
tags:
- support
---

## Filing Issue Tickets

{{< include file="/content/_includes/FileIssueTicketSCALE.md" >}}

### Using File Issue in SCALE

To report an issue using the SCALE UI, go to **System Settings > General** and click **File Ticket** on the **Support** widget to open the **File Ticket** form.

![GeneralSettingsSCALESupportJiraTicketCreate](/images/SCALE/SystemSettings/GeneralSettingsSCALEJiraTicketCreate.png "SCALE General Settings Jira Ticket Creation")

Click **Login to JIRA** and enter your credentials in the fields provided.
After logging in, select **Allow** to give TrueNAS read and write access to your data on the Jira site.

![GeneralSettingsSCALESupportJiraLogin](/images/SCALE/Login/GeneralSettingsSCALESupportJiraLogin.png "SCALE General Settings Jira Login")

![GeneralSettingsSCALESupportJiraLogin2](/images/SCALE/Login/GeneralSettingsSCALESupportJiraLogin2.png "SCALE General Settings Jira Login Token")

After logging into Jira, select either **Bug** or **Feature** as the **Type** of ticket to create, then choose the appropriate **Category** for your request.

Attach a debug file to all bug tickets.
Click **Attach Debug**. SCALE generates the debug file, uploads it to the private attachment area, and creates the link to the Jira ticket. Debug files give the TrueNAS team pertinent information about the system and what could be causing any issues.
If the debug file is too large to attach to your ticket, the following displays:

![GeneralSettingsSCALEJiraTicketDebugToLarge](/images/SCALE/SystemSettings/GeneralSettingsSCALEJiraTicketDebugToLarge.png "SCALE General Settings Debug To Large To Attach")  

Provide a brief summary of the issue in **Subject**.
Enter as many details about the issue as possible and the reason for submitting the ticket in the **Description** field.
Attach any applicable screenshots and click **Save**.

![GeneralSettingsSCALEJiraTicketCompletion](/images/SCALE/SystemSettings/GeneralSettingsSCALEJiraTicketCompletion.png "SCALE General Settings Jira Ticket Completion")

After the ticket generates, the **Ticket** confirmation dialog opens. Click **Open Ticket** to view the ticket in Jira.

![GeneralSettingsSCALEJiraTicketLink](/images/SCALE/SystemSettings/GeneralSettingsSCALEJiraTicketLink.png "SCALE General Settings Jira Ticket Link")

### Creating an Issue In Jira

If logging into Jira and creating an issue ticket, download a system debug after the issue occurs and before you reboot the system to capture log files necessary to troubleshoot and diagnose system issues.

Always store debug files in a secure location.

You can attach the debug directly to the issue ticket if you are not concerned about others accessing the debug file. 
Issues tickets with debug files are marked private during the triage process but this can lead to duplicated reports of the same issue when another user cannot find an existing report that is marked private. 
Duplicate reports of the same issue are closed to allow Engineering staff to focus their efforts on the original issue report.

To protect user data privacy, the TrueNAS Jira project sends the issue reporter a link to a private file attachment area where they can upload their debug file and link the upload ticket to their issue report ticket.
We encourage users to to use the [link](https://ixsystems.atlassian.net/servicedesk/customer/portal/15/group/37/create/153) sent to them in the automated report response to keep the debug file secure and restrict access to only those that require the information to diagnose the cause of the issue reported.
Issues reported though the SCALE UI automatically attach the system debug file to a private attachment ticket and link that ticket to the issue report ticket.

System debugs contain log files which can include personal information such as usernames, and other identifying information about your system such as networking configuration, device serial numbers, etc.
Users can use a file archiver utility, such as 7-Zip File Manager, to open compressed debug archives and review log contents.
Redact any personal data you have concerns about sharing and save the debug file before attaching and linking it to a Jira ticket in the TrueNAS project.
