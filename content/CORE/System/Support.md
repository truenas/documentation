---
title: "Support"
weight: 180
---

{{< toc >}}

There are a number of options to get support for your TrueNAS installation.
TrueNAS CORE users can engage with the TrueNAS community to answer questions and resolve issues, while TrueNAS Enterprise hardware customers can also access the fast and effective support directly provided by iXsystems.

## Support Options

{{< tabs "Software Support" >}}
{{< tab "TrueNAS CORE" >}}
There are a number of resources available to TrueNAS CORE users for answering usage questions or troubleshooting system configurations.
It is always recommended to search through the software documentation and community resources for answers to these questions.

Users are also welcome to report bugs, vote for, or suggest new TrueNAS features in the project Jira instance.

### TrueNAS Community

The [TrueNAS Community](https://www.truenas.com/community/) is an active online resource for asking questions, troubleshooting issues, and sharing information with other TrueNAS users.
[Registering](https://www.truenas.com/community/register/) is required for posting.
New users are encouraged to briefly [introduce](https://www.truenas.com/community/forums/introductions.25/) themselves and review the [forum rules](https://www.truenas.com/community/threads/forum-rules.45124/) before posting.

[Community Resources](https://www.truenas.com/community/resources/) are user contributed articles about every facet of using TrueNAS.
They are organized into broad categories and incorporate a community rating system to better highlight content that the whole community has found helpful.

### Social Media

You are always welcome to network with other TrueNAS users using the various social media platforms!

* [Reddit](https://www.reddit.com/r/truenas/)
* [Twitter](https://mobile.twitter.com/freenas)
* [LinkedIn](https://www.linkedin.com/groups/3903140/)
* [Facebook](https://www.facebook.com/freenascommunity)

### Reporting a Bug

If you encounter a bug or other issue while using TrueNAS, create a bug report in the [TrueNAS Jira Project](https://jira.ixsystems.com/projects/NAS/).
The web interface provides a form to report issues without having to log out.
It is recommended to search the project first to see if the issue has already been reported.
You will need to [create a Jira account](https://jira.ixsystems.com/secure/Signup!default.jspa) before creating a bug ticket.

To report an issue using the web interface, go to **System > Support**.

![UIBugReport](/images/CORE/12.0/UIBugReport.png "Writing a Bug Report")

Enter your Jira *Username* and *Password* to verify your account credentials and unlock the *Submit* button.
The *Category* dropdown has a large number of options.
Choose the category that best fits where you encountered the issue.

Attaching a debug file or screenshot to your bug ticket is generally recommended to help speed up the response and find the bug.
Debug files are always attached to the ticket privately and are deleted when the ticket is resolved.

Keep the *Subject* brief and informative.
Having a short, descriptive subject allows the community to better find and respond to your issue.
The *Description* should contain more details about the problem.
It is recommended to keep the description less than three paragraphs and include any steps to reproduce the issue or error.

### Creating a Debug File

{{< include file="static/includes/CreateDebug.md.part" markdown="true" >}}


### Suggest New Features

{{< include file="static/includes/CreateJiraSuggestion.md.part" markdown="true" >}}

{{< /tab >}}
{{< tab "TrueNAS Enterprise" >}}
In addition to all the TrueNAS CORE support options, TrueNAS Enterprise customers who purchase hardware from iXsystems can receive assistance from iXsystems if an issue occurs with the system.
Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify iXsystems if an issue occurs.
To find more details about the different Warranty and Service Level Agreement (SLA) options available, see https://www.ixsystems.com/support/.

### Production System Reporting

Once the system is ready to be in production, Update the status by checking the **This is a production system** checkbox and click the **Update Status** button. This will send an email to Support declaring that the system is in production. There is an option to include a debug with this email that could assist support in the future.

### Configuring Proactive Support

Proactive Support notifies iXsystems by email whenever hardware conditions on the system require attention.
This feature is available to iXsystems Silver and Gold Support customers.

![System Support Proactive Enterprise](/images/CORE/12.0/SystemSupportProactiveEnterprise.png "Proactive Support: Enterprise")

Be sure to add valid email addresses and phone numbers for the contacts to be quickly notified of any issues.

You can also toggle automatic iXsystesms support alerts in the system console menu (`/etc/netcli` in the **Shell**).
Failover must be disabled in TrueNAS High Availability systems before this option can be toggled.
To administratively disable failover in the web interface, go to **System > Failover**.

### Filing a Support Ticket

TrueNAS Enterprise customers can file tickets directly with iXsystems Support by going to **System > Support** in the web interface.

![SystemSupportContactEnterprise](/images/CORE/12.0/SystemSupportContactEnterprise.png "Support Contact: Enterprise")

Be sure to enter a valid *Email* and *Phone* number.
iXsystems Support uses this information to quickly respond to and resolve the issue.
You can also indicate the system's current use and identify how critical the issue is to system usability.

Attaching a debug and screenshots are always recommended to help speed up diagnosing and resolving the issue.
It is also helpful to have an informative *Subject* and *Description* that briefly describes the problem and if there any steps to reproduce the issue.

Clicking **SUBMIT** generates and sends the support ticket to iXsystems.
This process can take several minutes while information is collected and sent.
TrueNAS sends an email alert if ticket creation fails while Proactive Support is active.

After the new ticket is created, the URL is shown for viewing or updating with more information.
An [iXsystems Support](https://support.ixsystems.com/) account is required to view the ticket.
Click the URL to log in or register with the support portal.
Use the same e-mail address submitted with the ticket when registering.
{{< /tab >}}
{{< /tabs >}}

## Contacting iXsystems Support

{{< include file="static/includes/iXsystemsSupportContact.html.part" html="true" >}}