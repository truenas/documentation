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

Customers who purchase iXystems hardware or that want additional support must have a support contract to use iXystems Support Services. 

### TrueNAS Community

The [TrueNAS Community](https://www.truenas.com/community/) is an active online resource for asking questions, troubleshooting issues, and sharing information with other TrueNAS users.
[Registering](https://www.truenas.com/community/register/) is required for posting.
New users are encouraged to privide a brief [introduction](https://www.truenas.com/community/forums/introductions.25/) of themselves and to review the [forum rules](https://www.truenas.com/community/threads/forum-rules.45124/) before posting.

[Community Resources](https://www.truenas.com/community/resources/) are user contributed articles about every facet of using TrueNAS.
They are organized into broad categories and incorporate a community rating system to better highlight content that the whole community finds helpful.

### Social Media

You are always welcome to network with other TrueNAS users using the various social media platforms!

* [Reddit](https://www.reddit.com/r/truenas/)
* [Twitter](https://twitter.com/TrueNAS)
* [LinkedIn](https://www.linkedin.com/groups/3903140/)
* [Facebook](https://www.facebook.com/freenascommunity)

### Reporting a Bug

If you encounter a bug or other issue while using TrueNAS, create a bug report in the [TrueNAS Jira Project](https://jira.ixsystems.com/projects/NAS/).
The web interface provides a form to report issues without having to log out.
It is recommended to search the project first to see if the issue is already reported.
You need to [create a Jira account](https://jira.ixsystems.com/secure/Signup!default.jspa) before creating a bug ticket.

To report an issue using the web interface, go to **System > Support**.

![UIBugReport](/images/CORE/12.0/UIBugReport.png "Writing a Bug Report")

Enter your Jira information in the **Username** and **Password** fields to verify your account credentials and activate the **Submit** button.
The **Category** dropdown list has a large number of options.
Choose the category that best fits where you encountered the issue.

Attach a debug file and any screenshot to your bug ticket is helps speed up the response and resolution to find and fix the bug.
Debug files are always attached to the ticket privately and are deleted when the ticket is resolved.

Keep the information in **Subject** brief and informative.
Providing a short, descriptive subject allows the community to better find and respond to your issue.
The information in **Description** should contain more details about the problem.
It is recommended to keep the description less than three paragraphs and include any steps to reproduce the issue or error.

### Creating a Debug File

{{< include file="static/includes/CORE/CreateDebug.md.part" markdown="true" >}}

### Suggest New Features

{{< include file="static/includes/General/CreateJiraSuggestion.md.part" markdown="true" >}}

{{< /tab >}}
{{< tab "TrueNAS Enterprise" >}}
In addition to all the TrueNAS CORE support options, TrueNAS Enterprise customers who purchase hardware from iXsystems can receive assistance from iXsystems if an issue occurs with the system.

Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify iXsystems if an issue occurs.
To find more details about the different Warranty and Service Level Agreement (SLA) options available, see https://www.ixsystems.com/support/.

### License Information

The **License Information** area contains the system model, serial numbers, additional hardware, licensed features, support contract type, and support contract expiration date information. The ability to mark the system as a production system is also available.

![SystemSupportLicenseInformation](/images/CORE/12.0/LicenseInformationArea.png "System License Information")

### Production System Reporting

When the system is ready to be in production, update the status by selecting the **This is a production system** checkbox and clicking the **Update Status** button. This sends an email to Support declaring that the system is in production. There is also an option to include a debug in this email that could assist support in the future.

### Configuring Proactive Support

Proactive Support notifies iXsystems by email whenever hardware conditions on the system require attention.
This feature is available to iXsystems Silver and Gold Support customers.

![System Support Proactive Enterprise](/images/CORE/12.0/SystemSupportProactiveEnterprise.png "Proactive Support: Enterprise")

Be sure to add valid email addresses and phone numbers for the contacts to be quickly notified of any issues.

You can also toggle on automatic iXsystesms support alerts in the system console menu (`/etc/netcli` in the **Shell**).
You must disable failover in TrueNAS High Availability systems before toggling on this option.
To use the web interface to disable failover, go to **System > Failover**.

### Filing a Support Ticket

TrueNAS Enterprise customers can file tickets directly with iXsystems Support by going to **System > Support** in the web interface.

![SystemSupportContactEnterprise](/images/CORE/12.0/SystemSupportContactEnterprise.png "Support Contact: Enterprise")

Enter a valid email and phone number.
iXsystems Support uses this information to respond to and resolve the issue.
You can also indicate the system current use and identify how critical the issue is to system usability.

Attaching a debug and screenshots is always recommended to help speed up diagnosing and resolving the issue.
It is also helpful to provide a brief summary in the **Subject** and **Description** fields that describes the problem and any steps to reproduce the issue.

Click **SUBMIT** to generate and send the support ticket to iXsystems.
This process can take several minutes while information is collected and sent.
TrueNAS sends an email alert if ticket creation fails while Proactive Support is active.

After the new ticket is created, the URL displays which allows you to view or update the ticket with more information.
An [iXsystems Support](https://support.ixsystems.com/) account is required to view the ticket.
Click the URL to log in or register with the support portal.
Use the same e-mail address submitted with the ticket when registering.

### Contacting iXsystems Support

{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}

{{< /tab >}}
{{< /tabs >}}

