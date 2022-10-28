---
title: "Getting Support"
description: "This article provides instructions for SCALE users to access TrueNAS Community and Social Media, get system support, report problems, and find system license information."
weight: 10
aliases:
tags:
 - scalesupport
 - scalesettings
---

{{< toc >}}

There are several options to get support for your TrueNAS installation.
TrueNAS SCALE users can engage with the TrueNAS community to answer questions and resolve issues. TrueNAS Enterprise hardware customers can also access the fast and effective support directly provided by iXsystems.

TrueNAS SCALE users are welcome to report bugs and vote for or suggest new TrueNAS features in the project Jira instance.
Have questions? We recommend searching through the software documentation and community resources for answers.

{{< include file="/content/_includes/UsingTrueNASCommunityAndSocialMedia.md" type="page" >}}

![GeneralSettingsSCALESupport](/images/SCALE/GeneralSettingsSCALESupport.png "SCALE General Settings Support View")

## Adding a License
For users with a valid TrueNAS license, click **Add License**. Copy your license into the box and click **Save**.  
{{< expand "Click Here for More Information" "v" >}}

![GeneralSettingsSCALESupportLicenseEntry](/images/SCALE/GeneralSettingsSCALESupportLicenseEntry.png "SCALE General Settings Support License Entry")

You are prompted to reload the page for the license to take effect, click **RELOAD NOW**. 
Log back into the WebUI where the **End User License Agreement (EULA)** displays. 
Read it thoroughly and completely. 
After you finish, click **I AGREE**. The system information updates to reflect the licensing specifics for the system.

![GeneralSettingsSCALESupportLicenseComplete](/images/SCALE/GeneralSettingsSCALESupportLicenseComplete.png "SCALE General Settings Support License Entry Complete")

Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify iXsystems if an issue occurs. 
To find more details about the different Warranty and Service Level Agreement (SLA) options available, see [iXsystems Support](https://www.ixsystems.com/support/).

When the system is ready to be in production, update the status by selecting **This is a production system** and then click the **Proceed** button. This sends an email to iXsystems declaring that the system is in production. 

While not required for declaring the system is in production, TrueNAS has an option to include a initial debug with the email that can assist support in the future.
{{< /expand >}}

## Filing a Ticket

TrueNAS SCALE users are encouraged to report bugs and to vote for or suggest new TrueNAS features in the project Jira instance. 
Have questions? We recommend searching through the software documentation and community resources for answers.

If you encounter a bug or other issue while using TrueNAS SCALE, use the **File Ticket** option on the **System Settings > General** screen to create a bug report in the [TrueNAS Jira Project](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/issues). 
The web interface provides a form to report issues without logging out and that prompts you to provide the information and attachments we need to assist users. 
{{< hint info >}}
At present, all Jira tickets are marked as **iX Private** to safeguard user personal and private data, so it is not possible to search the project first to see if another user already reported the issue. 
{{< /hint >}}

You must have [a Jira account](https://jira.ixsystems.com/secure/Signup!default.jspa) to create a bug ticket.

{{< expand "Filing Issue Tickets" "v" >}}

To report an issue using the web interface, go to **System Settings > General** and click **File Ticket** to open the **File Ticket** form.

![GeneralSettingsSCALESupportJiraTicketCreate](/images/SCALE/GeneralSettingsSCALEJiraTicketCreate.png "SCALE General Settings Jira Ticket Creation")

Click **Login to JIRA** and enter your credentials in the fields provided. 
After logging in, select **Allow** to give TrueNAS read and write access to your data on the Jira site. A token is added to the OAuth section of this form.  

![GeneralSettingsSCALESupportJiraLogin](/images/SCALE/GeneralSettingsSCALESupportJiraLogin.png "SCALE General Settings Jira Login")

![GeneralSettingsSCALESupportJiraLogin2](/images/SCALE/GeneralSettingsSCALESupportJiraLogin2.png "SCALE General Settings Jira Login Token")

After logging into Jira, select either **Bug** or **Feature** as the **Type** of ticket to create, then choose the appropriate **Category** for your request.

Attach a debug file to all bug tickets. Click **Attach Debug** to give the TrueNAS Team pertinent information about the system and what could be causing any issues. 
If the debug file is too large to attach to your ticket, the following displays:

![GeneralSettingsSCALEJiraTicketDebugToLarge](/images/SCALE/GeneralSettingsSCALEJiraTicketDebugToLarge.png "SCALE General Settings Debug To Large To Attach")  

Provide a brief summary of the issue in **Subject**. 
Enter much details about the issue as possible as the reason for submitting the ticket in the **Description** field. 
Attach any applicable screenshots and click **Save**.

![GeneralSettingsSCALEJiraTicketCompletion](/images/SCALE/GeneralSettingsSCALEJiraTicketCompletion.png "SCALE General Settings Jira Ticket Completion")

After the ticket generates, you can view it by clicking the link provided in the WebUI.

![GeneralSettingsSCALEJiraTicketLink](/images/SCALE/GeneralSettingsSCALEJiraTicketLink.png "SCALE General Settings Jira Ticket Link")

{{< /expand >}}

## Using Proactive Support
Silver/Gold Coverage Customers can enable iXsystems Proactive Support. This feature automatically emails iXsystems when certain conditions occur in a TrueNAS system.

To configure Proactive Support, click the **Get Support** dropdown and select **Proactive Support**.

![GeneralSettingsSCALEProactiveSupport](/images/SCALE/GeneralSettingsSCALEProactiveSupport.png "SCALE General Settings Proactive Support")

Complete all available fields and select **Enable iXsystems Proactive Support** if it is not check-marked, then click **Save**.

![GeneralSettingsSCALEProactiveSupportForm](/images/SCALE/GeneralSettingsSCALEProactiveSupportForm.png "SCALE General Settings Proactive Support Form")

## Contacting iXsystems Support

{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}

{{< taglist tag="scalesupport" limit="10" >}}