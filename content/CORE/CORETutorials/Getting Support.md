---
title: "Getting Support"
description: "Describes different options for getting support for TrueNAS CORE."
weight: 16
aliases:
  - /core/system/support
tags:
- support
---


There are several options to get support for your TrueNAS installation.
TrueNAS CORE users can engage with the TrueNAS community to answer questions and resolve issues. TrueNAS Enterprise hardware customers can also access the fast and effective support directly provided by iXsystems.

TrueNAS CORE users are welcome to report bugs and vote for or suggest new TrueNAS features in the project Jira instance.
Have questions? We recommend searching through the software documentation and community resources for answers.

## Reporting a Bug

If you encounter a bug or other issue while using TrueNAS, create a bug report in the [TrueNAS Jira Project](https://ixsystems.atlassian.net/projects/NAS/).
The web interface provides a form to report issues without logging out.
We recommend searching the project first to see if another user already reported the issue.
You must have [a Jira account](https://ixsystems.atlassian.net/secure/Signup!default.jspa) to create a bug ticket.

To report an issue using the web interface, go to **System > Support**.

{{< trueimage src="/images/CORE/System/UIBugReport.png" alt="Writing a Bug Report" id="Writing a Bug Report" >}}

Enter your Jira **Username** and **Password** to verify your account credentials and unlock the **SUBMIT** button.
The **Category** dropdown has a large number of options.
Choose the category that best fits where you encountered the issue.

Attaching a debug file or screenshot to your bug ticket is generally recommended to help speed up the response and find the bug.
TrueNAS attaches debug files to the ticket privately and deletes them when the ticket resolves.

Keep the **Subject** brief and informative.
Having a short, descriptive subject allows the community to easily find and respond to your issue.
The **Description** should contain more details about the problem.
We recommend keeping the description less than three paragraphs and including any steps to reproduce the issue.

### Creating a Debug File
{{< include file="content/_includes/CreateDebugCORE.md" >}}

## Suggesting New Features

{{< include file="content/_includes/CreateJiraSuggestion.md" >}}

## TrueNAS Community

The [TrueNAS Community](https://www.truenas.com/community/) is an active online resource for asking questions, troubleshooting issues, and sharing information with other TrueNAS users.
You must [register](https://www.truenas.com/community/register/) to post.
We encourage new users to briefly [introduce](https://www.truenas.com/community/forums/introductions.25/) themselves and review the [forum rules](https://www.truenas.com/community/threads/forum-rules.45124/) before posting.

[Community Resources](https://www.truenas.com/community/resources/) are user-contributed articles about every facet of using TrueNAS.
They are organized into broad categories and incorporate a community rating system to better highlight content that the whole community has found helpful.

## Social Media

You are always welcome to network with other TrueNAS users using the various social media platforms!

* [Reddit](https://www.reddit.com/r/truenas/)
* [X (Formerly Twitter)](https://twitter.com/TrueNAS)
* [LinkedIn](https://www.linkedin.com/groups/3903140/)
* [Facebook](https://www.facebook.com/freenascommunity)

## TrueNAS Enterprise

{{< enterprise >}}
Proactive Support and the Contact Support options below are only available on TrueNAS Enterprise licensed systems.
Contact the [iXsystems Sales Team](mailto:sales@ixsystems.com) to inquire about purchasing TrueNAS Enterprise licenses.
{{< /enterprise >}}

In addition to all the TrueNAS CORE support options, TrueNAS Enterprise customers who purchase hardware from iXsystems can receive assistance from iXsystems if an issue occurs.

Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify iXsystems if an issue occurs.
To find more details about the different Warranty and Service Level Agreement (SLA) options available, see https://www.ixsystems.com/support/.

### Production System Reporting

Once the system is ready to be in production, update the status by checking the **This is a production system** checkbox and click the **Update Status** button. This will send an email to iXsystems declaring that the system is in production. TrueNAS has an option to include a debug with the email that could assist support in the future.

### Configuring Proactive Support

Proactive Support notifies iXsystems by email whenever hardware conditions on the system require attention.
This feature is available to iXsystems Silver and Gold Support customers.

{{< trueimage src="/images/CORE/System/SystemSupportProactiveEnterprise.png" alt="Proactive Support: Enterprise" id="Proactive Support: Enterprise" >}}

Be sure to add valid email addresses and phone numbers for the contacts to be quickly notified of any issues.

You can also toggle automatic iXsystems support alerts in the system console menu with `/etc/netcli`.
Failover must be disabled in TrueNAS High Availability systems before this option can be toggled.
To administratively disable failover in the web interface, go to **System > Failover**.

### Filing a Support Ticket

TrueNAS Enterprise customers can file tickets directly with iXsystems Support by going to **System > Support**.

{{< trueimage src="/images/CORE/System/SystemSupportContactEnterprise.png" alt="Support Contact: Enterprise" id="Support Contact: Enterprise" >}}

Be sure to enter a valid **Email** and **Phone** number.
iXsystems Support uses this information to quickly respond to and resolve the issue.
You can also indicate the system's current use and identify how critical the issue is to system usability.

We recommend always attaching a debug and screenshots to help speed up diagnosing and resolving the issue.
Select **Attach Debug** to automatically generate a new debug and privately attach it to the issue.
Private debug attachments are only visible to iXsystems engineering staff.

An informative **Subject** and **Description** that briefly describes the problem and if there are any steps to reproduce the issue is also helpful.

Clicking **SUBMIT** generates and sends the support ticket to iXsystems.
This process can take several minutes while information is collected and sent.
TrueNAS sends an email alert if ticket creation fails while Proactive Support is active.

After the creating the new ticket, TrueNAS displays the ticket URL for viewing or updating with more information.
You must have an [iXsystems Support](https://support.ixsystems.com/) account to view the ticket.
Click the URL to log in or register with the support portal.
Use the same email address submitted with the ticket when registering.

## Contacting iXsystems Support

{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
