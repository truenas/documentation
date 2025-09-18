---
title: "General Settings"
description: "Tutorials for configuring many general TrueNAS settings."
geekdocCollapseSection: true
weight: 20
related: false
tags:
- settings
- debug
- proactive support
- feedback
- keyboard language
- screen language
- https options
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- configuration files
---


The TrueNAS **General Settings** provide options to configure support, file a ticket or provide feedback on the UI or a feature, download a system debug, configure a graphic user interface (GUI), set UI and keyboard languages, and add system email.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralScreen.png" alt="General Settings Screen" id="General Settings Screen" >}}

## Configuring Support

The **Support** widget shows information about the TrueNAS version and system hardware.
Links to the open-source TrueNAS documentation, community forums, and official Enterprise licensing are provided.

**Add License** opens a screen where you can paste a copy of your TrueNAS Enterprise license ([details]({{< ref "AddLicenseProactiveSupport" >}})).
After adding a license, the option changes to **Update License**.

**Save Debug** starts a download of the system debug file.

**File Ticket** opens the [**Send Feedback**](#sending-feedback) window with two options: **Rate this page** and **Report a bug**.
These options allow you to report a system bug or to send TrueNAS feedback on the UI and rate a screen. Feedback goes to the TrueNAS development team.
An icon shows on new UI feature screens where TrueNAS is asking you to send feedback, and it allow you to capture a screenshot of that screen.

**Proactive Support** shows for Enterprise-licensed systems.
It opens the **Proactive Support** window, where you enter configuration settings to set up proactive support for an Enterprise system.
For information on configuring proactive support, see [Adding a License and Proactive Support]({{< ref "AddLicenseProactiveSupport" >}}).

## Sending Feedback

TrueNAS provides two feedback options: one to rate a UI screen and the other to report a problem encountered with the system.

Some screens show the option to rate the screen.
Click on the **Send Feedback** ![FeedbackIcon](/images/SCALE/Dashboard/FeedbackIcon.png "Feedback Icon") icon to open the feedback window.
The window allows you to select the **Report a bug** option to open a Jira ticket.

To send feedback, go to **System** > **General Settings**, and click **File Ticket** on the **Support** widget. 
The **File Ticket** option on Enterprise systems shows two options: **File Ticket** and **Proactvie Support**. Select **File Ticket** to open the **Send Feedback** window.

### Rating a UI Screen

Select **Rate this page** to show the options to send feedback on a UI page, add comments, add a screenshot or additional images, or click the link to go to the TrueNAS forum where you can vote for new features on the community forum, report a problem, or suggest improvements directly to the TrueNAS development team.

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindow.png" alt="Send Feedback Window" id="Send Feedback Window" >}}

### Reporting an Issue

Select **Report a bug** to show the options to open an engineering ticket and submit it directly to the TrueNAS development team when a TrueNAS screen or feature is not working as intended.
Submitting a bug report requires a free [Atlassian account](https://id.atlassian.com/signup).

{{< trueimage src="/images/SCALE/SystemSettings/SendFeedbackReportABugWindow.png" alt="Report a Bug Window" id="Report a Bug Window" >}}

{{< expand "Issue Reporting Example" "v" >}}
Select **Report a bug** to see the fields to create a Jira engineering ticket.
For example, reporting a bug where a middleware error and traceback occurred while saving a configuration change. You must have a Jira account to submit a ticket.

Bug reports are created in the publicly visible [TrueNAS Jira project](https://ixsystems.atlassian.net/jira/software/c/projects/NAS/).

Enter a descriptive summary in the **Subject**.
For example, if an application does not update after clicking the update option for the app and you get an error message or traceback after attempting the update, enter *XYZ application fails to update with a traceback* in **Subject**.
Enter the details of actions taken that resulted in the error or failed action in **Message**.
With the same example, enter more details on the issue:
*Clicked on the XYZ app row, stopped the app, clicked **Update**, but the update failed, and showed the following traceback message (include the traceback text).
My system is running on TrueNAS 25.10.0.*
Keep the details concise and focused on how to reproduce the issue, what you expected from the actions taken, and the actual result.
This helps ensure a speedy ticket resolution.
{{< /expand >}}

Include system debug is enabled by default. You can also include screenshot files, which can speed up the issue resolution.
**Attach Debug** is selected by default. This uploads the debug file to a Private Attachment ticket to protect sensitive data in the log files, and it links this ticket to the Jira report ticket. Only authorized TrueNAS developers can access the debug file.

To attach a screenshot of the current page, select **Take screenshot of the current page**, or **Attach additional images**, which opens a file browser where you can select log.txt, image, or video files to attach to the ticket.

{{< hint type=info >}}
Before using this form, take screenshots of the screen, copy the traceback or other error messages to a text file, copy a log into a text file, or create any other file to attach.
After opening this form, attach those files by selecting **Attach additional images** and clicking **Choose File** opens a **File Explorer** window where you can browse to select the files you want to attach to the report.

TrueNAS can show a list of existing Jira tickets with similar summaries.
When there is an existing ticket about the issue, consider clicking on that ticket and leaving a comment instead of creating a new one.
Duplicate tickets are closed in favor of consolidating feedback into one report.

Click **Login To Jira To Submit** to finish and submit the report.
{{< /expand >}}

### Reporting an Issue - Enterprise Licensed Systems

{{< enterprise >}}
When an Enterprise license is applied to the system, the **Report a bug** screen includes additional environment and contact information fields for sending bug reports directly to the TrueNAS team.

{{< trueimage src="/images/SCALE/Dashboard/FeedbackWindowEnterpriseBugReport.png" alt="TrueNAS Enterprise Bug Report Form" id="TrueNAS Enterprise Bug Report Form" >}}

Filling out the entire form with precise details and accurate contact information ensures a prompt response from the TrueNAS Customer Support team.
{{< /enterprise >}}

## Configuring GUI Options

The **GUI** widget allows users to configure the TrueNAS web interface address. Click **Settings** on the widget to open the **GUI Settings** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralGuiSettings.png" alt="GUI Settings Screen" id="GUI Settings Screen" >}}

### Changing the GUI SSL Certificate

The system uses a self-signed certificate to enable encrypted web interface connections.
To change the default certificate, create or import a certificate as described in [Managing Certificates]({{< ref "CertificatesSCALE" >}}) to add it to the dropdown list of certificates available on the system. Select the certificate from the **GUI SSL Certificate** dropdown list.

### Setting the Web Interface IP Address

To set the WebUI IP address, when using IPv4 addresses, select a recent IP address on the **Web Interface IPv4 Address** dropdown list. This limits the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. 
When using an IPv6 address, select a recent IP address from the **Web Interface IPv6 Address** dropdown list.

### Configuring HTTPS Options

To allow configuring a non-standard port to access the GUI over HTTPS, enter a port number in the **Web Interface HTTPS Port** field.

Select the cryptographic protocols for securing client/server connections from the **HTTPS Protocols** dropdown list.
Select the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS can use for connection security.

To redirect HTTP connections to HTTPS, select **Web Interface HTTP -> HTTPS Redirect**. A GUI SSL Certificate is required for HTTPS.
Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year).
This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year.
A warning displays when setting this function.

{{< include file="/static/includes/AppsVMsNoHTTPS.md" >}}

Select **Crash Reporting** to send failed HTTP request data, which might include client and server IP addresses, tracebacks for failed method calls, and middleware log file contents to TrueNAS.

### Sending Usage Statistics and UI Error Reports

To send anonymous usage statistics and WebUI errors to TrueNAS, select the **Usage Collection & UI Error Reporting** option.
When enabled, anonymous usage statistics and WebUI errors are reported to the TrueNAS engineering team.
No personally identifiable information is collected.

When disabled, anonymous usage statistics consisting only of the software version and total system capacity (e.g., TrueNAS 24.04.0, 55 TB) are collected.

For more information about what usage data is collected, see the [TrueNAS Data Collection Statement]({{< ref "/GettingStarted/UserAgreements/DataCollectionStatement" >}}).

### Showing Console Messages

To show real-time console messages at the bottom of the browser window, select **Show Console Messages**.

## Localizing the TrueNAS System

Localizing the TrueNAS system consists of changing the UI language and the keyboard layout to support the selected language, setting the time zone to match where the TrueNAS server is located, and setting date and time formats.

To change the Web UI on-screen language and set the keyboard to work with the selected language, click **Settings** on the **Localization** widget to open the **Localization Settings** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralLocalizationSettings.png" alt="Localization Settings Screen" id="Localization Settings Screen" >}}

Clear the field and begin typing in the field to filter the long list of languages, or scroll to select an option from the **Language** dropdown list.
Scroll to select the keyboard language layout in **Console Keyboard Map**.

Begin typing in the **Timezone** field to filter the long list or scroll down to select the geographic timezone that corresponds to the location of the TrueNAS server.
Select the local date and time formats to use.

Click **Save**.

## Setting Up System Email

The **Email** widget displays information about current system mail settings.
When configured, an automatic script sends a nightly email to the administrator account containing important information, such as the health of the disks.

To configure the system email send method, click **Settings** to open the **Email Options** screen.
Select either [**SMTP**](#smtp) or [**GMail OAuth**](#gmail-oauth) to display the relevant configuration settings.
For more information on configuring system email, see [Setting Up System Email]({{< ref "SettingUpSystemEmail" >}}).

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
