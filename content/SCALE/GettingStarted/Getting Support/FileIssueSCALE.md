---
title: "Filing an Issue Ticket in SCALE"
description: "This article provides information on using TrueNAS SCALE UI to file an issue ticket in Jira."
weight: 20
aliases:
tags:
- scalesupport
---


{{< toc >}}


## Filing Issue Tickets

{{< include file="/content/_includes/FileIssueTicketSCALE.md" type="page" >}}

### Using File Issue in SCALE

To report an issue using the SCALE UI, go to **System Settings > General** and click **File Ticket** on the **Support** widget to open the **File Ticket** form.

![GeneralSettingsSCALESupportJiraTicketCreate](/images/SCALE/GeneralSettingsSCALEJiraTicketCreate.png "SCALE General Settings Jira Ticket Creation")

Click **Login to JIRA** and enter your credentials in the fields provided. 
After logging in, select **Allow** to give TrueNAS read and write access to your data on the Jira site. A token is added to the OAuth section of this form.  

![GeneralSettingsSCALESupportJiraLogin](/images/SCALE/GeneralSettingsSCALESupportJiraLogin.png "SCALE General Settings Jira Login")

![GeneralSettingsSCALESupportJiraLogin2](/images/SCALE/GeneralSettingsSCALESupportJiraLogin2.png "SCALE General Settings Jira Login Token")

After logging into Jira, select either **Bug** or **Feature** as the **Type** of ticket to create, then choose the appropriate **Category** for your request.

Attach a debug file to all bug tickets. 
Click **Attach Debug**. SCALE generates the debug file, uploads it to the private attachment area, and creates the link to the Jira ticket. Debug files give the TrueNAS team pertinent information about the system and what could be causing any issues. 
If the debug file is too large to attach to your ticket, the following displays:

![GeneralSettingsSCALEJiraTicketDebugToLarge](/images/SCALE/GeneralSettingsSCALEJiraTicketDebugToLarge.png "SCALE General Settings Debug To Large To Attach")  

Provide a brief summary of the issue in **Subject**. 
Enter much details about the issue as possible as the reason for submitting the ticket in the **Description** field. 
Attach any applicable screenshots and click **Save**.

![GeneralSettingsSCALEJiraTicketCompletion](/images/SCALE/GeneralSettingsSCALEJiraTicketCompletion.png "SCALE General Settings Jira Ticket Completion")

After the ticket generates, you can view it by clicking the link provided in the WebUI.

![GeneralSettingsSCALEJiraTicketLink](/images/SCALE/GeneralSettingsSCALEJiraTicketLink.png "SCALE General Settings Jira Ticket Link")

{{< taglist tag="scalesupport" limit="10" title="Related Support Articles" >}}