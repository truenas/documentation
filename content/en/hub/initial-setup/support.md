---
title: "Getting Support"
description: "How to find help or contact iXsystems for support."
tags: ["support"]
---

There are a number of options to get support for your TrueNAS installation.
TrueNAS CORE users can engage with the TrueNAS community to answer questions and resolve issues, while TrueNAS Enterprise hardware customers can also access the fast and effective support directly provided by iXsystems.

## Support in TrueNAS CORE

There are a number of resources available to TrueNAS CORE users for answering usage questions or troubleshooting system configurations.
It is always recommended to search through the software documentation and community resources for answers to these questions.

Users are also welcome to report bugs, vote for, or suggest new TrueNAS features in the project Jira instance.

### iX Community

The [iXsystems Community](https://www.ixsystems.com/community/) is an active online resource for asking questions, troubleshooting issues, and sharing information with other TrueNAS users.
[Registering](https://www.ixsystems.com/community/register/) is required for posting.
New users are encouraged to briefly [introduce](https://www.ixsystems.com/community/forums/introductions.25/) themselves and review the [forum rules](https://www.ixsystems.com/community/threads/forum-rules.45124/) before posting.

[Community Resources](https://www.ixsystems.com/community/resources/) are user contributed articles about every facet of using TrueNAS.
They are organized into broad categories and incorporate a community rating system to better highlight content that the whole community has found helpful.

### Social Media

You are always welcome to network with other TrueNAS users using the various social media platforms!

* [Reddit](https://www.reddit.com/r/truenas/)
* [Twitter](https://mobile.twitter.com/freenas)
* [LinkedIn](https://www.linkedin.com/groups/3903140/)
* [Facebook](https://www.facebook.com/freenascommunity)

### Reporting a Bug

If you encounter a bug or other issue while using TrueNAS, you can create a bug report in the [TrueNAS Jira Project](https://jira.ixsystems.com/projects/NAS/) from the TrueNAS web interface.
It is recommended to search the project first to see if the issue has already been reported.
You will need to [create a Jira account](https://jira.ixsystems.com/secure/Signup!default.jspa) before creating a bug ticket.

To report an issue using the web interface, go to **System > Support**.

<img src="/images/TNCore-BugReport.png">
<br><br>

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

The TrueNAS web interface provides an option to save debugging information to a text file.

Go to **System > Advanced** and click **SAVE DEBUG**.
A dialog prompts that **This operation might take a long time. Proceed?**.
You won't be able to click options in the web interface while the debug file is created.
Click **PROCEED** to begin collecting system information into a debug file.
Debug file creation progress is shown in a dialog.

When the debug file is complete, a dialog opens to save it to a location on your local system (i.e. Downloads, Documents etc.) or the file is automatically added to the location you specified for downloaded files.

Debugging information is collected by the `freenas-debug` command line utility.
A copy of the information is saved to `/var/tmp/fndebug`.

#### Web Console Log

A web console log can help to diagnose problems with the user interface.
To save the log before adding to a bug report, you will need to copy the log to a simple text file.
The procedure varies slightly depending on the web browser you are using.

##### Firefox

Open the web console by clicking <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **Web Developer > Web Console** or by pressing <kbd>Ctrl+Shift+K</kbd>.

In the upper right, set `Persist Logs`.

Click  <i class="fa fa-ellipsis-h" aria-hidden="true" title="Options"></i> (Settings).
In the `Web Console` section, set `Enable timestamps`. Click the `Console` tab or press <kbd>Ctrl+Shift+K</kbd> to switch to the console window.

Leave the console open and perform the action that encounters problems.

Right-click in the console window. Choose `Export visible messages to clipboard`.

Open an editor, paste the clipboard, and save to a file called `console.log`.

After saving the file, go back to the console with <i class="fa fa-bars" aria-hidden="true" title="Menu"></i> **Web Developer > Web Console** or by pressing <kbd>Ctrl+Shift+K</kbd>.

In the upper right, unset `Persist Logs`.

##### Chrome

Open the console by clicking  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **More Tools > Developer tools** or by pressing <kbd>Ctrl+Shift+I</kbd>.

Click <i class="fa fa-cog" aria-hidden="true" title="settings"></i> and set `Preserve log`.

Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> **Settings > Preferences**. In the `Console` section, set `Show timestamps`. Close the Preferences window.

Leave the console open and perform the action that encounters problems.

Right-click in the console window. Choose `Save as…` and save to a file called `console.log`.

After saving the file, go back to the console with <i class="fa fa-cog" aria-hidden="true" title="settings"></i>&nbsp **More Tools > Developer tools** or by pressing <kbd>Ctrl+Shift+I</kbd>. Click <i class="fa fa-cog" aria-hidden="true" title="settings"></i>&nbsp and unset `Preserve log`.

### New Features

Want to see a new feature added to TrueNAS?
You can see and vote for community proposed features in the TrueNAS Jira project and make your own feature suggestions.
To see the list of features that have been proposed by the community, go to the TrueNAS Jira project and [search for open suggestions](https://jira.ixsystems.com/issues/?jql=issuetype%20%3D%20Suggestion%20AND%20status%20%3D%20%22Gathering%20Interest%22).
If you find a suggestion that you would also like to see implemented, open that ticket and click *Vote for this issue* in the *People* section of the ticket.

<img src="/images/SuggestionExample.png">
<br><br>

To suggest a new feature, go to https://jira.ixsystems.com/projects/NAS/, log in to your Jira account, and click **Create**.

<img src="/images/SuggestionCreate.png">
<br><br>

Enter a brief *Summary* and describe the new feature you'd like to see added to the software.
After your feature suggestion is created, it will move to the *Gathering Interest* stage, where the rest of the community can review and vote for the feature.
When enough interest has been shown, the TrueNAS Release Council will review the suggestion for feasibility and find where to add the feature in the software roadmap.

## Support in TrueNAS Enterprise

In addition to all the TrueNAS CORE support options, TrueNAS Enterprise customers who purchase hardware from iXsystems can contact iXsystems for support if an issue occurs with the system.
Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify iXsystems if an issue occurs.
To find more details about the different Warranty and Service Level Agreement (SLA) options available, see https://www.ixsystems.com/support/.
To purchase support for your iXsystems TrueNAS Enterprise hardware, please call **1-855-GREP-4-IX** (US Toll Free) or **1-408-943-4100**.

### Production System Reporting

Once the system is ready to be in production, Update the status by checking the **This is a production system** checkbox and click the **Update Status** button. This will send an email to Support declaring that the system is in production. There is an option to include a debug with this email that could assist support in the future.

### Configuring Proactive Support

Proactive Support notifies iXsystems by email whenever hardware conditions on the system require attention.
This feature is available to iXsystems Silver and Gold Support customers.

<img src="/images/EnterpriseProActiveSupport.png">
<br><br>

Be sure to add valid email addresses and phone numbers for the contacts to be quickly notified of any issues.

You can also toggle automatic iXsystesms support alerts in the system console menu (`/etc/netcli` in the **Shell**).
Failover must be disabled in TrueNAS High Availability systems before this option can be toggled.
To administratively disable failover in the web interface, go to **System > Failover**.

### Filing a Support Ticket

TrueNAS Enterprise customers can file tickets directly with iXsystems Support by going to **System > Support** in the web interface.

<img src="/images/EnterpriseContactSupport.png">
<br><br>

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

## TrueCommand Help Desk & Support 

Business hours: 6:00AM to 6:00PM Pacific Time, Monday – Friday, excluding holidays.

To find more details about the different Warranty and Service Level Agreement (SLA) options available, see [TrueCommand Support](https://www.ixsystems.com/support/#truecommand). To purchase support, please call 1-855-GREP-4-IX (US Toll Free) or 1-408-943-4100.

### Contacting iXsystems Support

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky"><b>Contact Method</b></th>
    <th class="tg-0pky"><b>Contact Options</b></th>
  </tr>
  <tr>
    <td class="tg-0pky">Web</td>
    <td class="tg-0pky"><a href="https://support.ixsystems.com" target="_blank">https://support.ixsystems.com</a></td>
  </tr>
  <tr>
    <td class="tg-0pky">Email</td>
    <td class="tg-0pky"><a href="mailto://support.ixsystems.com" target="_blank">support@ixsystems.com</a></td>
  </tr>
  <tr>
    <td class="tg-0pky">Telephone</td>
    <td class="tg-0pky">Monday - Friday, 6:00AM to 6:00PM Pacific Standard Time:<br><br>US-only toll-free: 855-473-7449 option 2<br>Local and international: 408-943-4100 option 2<br></td>
  </tr>
  <tr>
    <td class="tg-0pky">Telephone</td>
    <td class="tg-0pky">After Hours (24x7 Gold Level Support only):<br><br>US-only toll-free: 855-499-5131<br>International: 408-878-3140 (international calling<br>rates will apply)<br></td>
  </tr>
</table>

## This is a test. [this link is bad.](/hub/badlink/)
