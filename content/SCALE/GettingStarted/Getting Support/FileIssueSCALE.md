---
title: "Filing an Issue Ticket in SCALE"
description: "Provides information on using TrueNAS SCALE UI to file an issue ticket in Jira."
weight: 20
aliases:
tags:
- scalesupport
---


{{< toc >}}


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

{{< taglist tag="scalesupport" limit="10" title="Related Support Articles" >}}
