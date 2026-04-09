---
title: "General Settings Screen"
description: "Provides information on the General Settings screen, cards, and configuration settings for getting support, changing console or the GUI, localization and keyboard setups, and system email."
weight: 50
aliases:
 - /scale/systemsettings/generalsettingsscreens/
 - /scale/scaleclireference/system/cliconfig/
 - /scale/scaleclireference/system/cligeneral/
 - /scale/scaleclireference/system/clisupport/
 - /scale/scaleclireference/system/clitruenas/
 - /scale/systemsettings/generalsettings/
tags:
 - settings
 - console
 - configuration files
doctype: reference
---


The **General Settings** screen has four cards that show current general system settings and include buttons for related actions and configuration options. The cards are:

* **[Support](#support-card)**
* **[GUI](#gui-settings-screen)**
* **[Localization](#localization-settings-screen)**
* **[Email](#email-options-screen)**

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralScreen.png" alt="General Settings Screen" id="General Settings Screen" >}}

Community systems show the same cards, but are not eligible for Enterprise support options or licenses.
Enterprise systems show an image of the system model.

## Support Card

The **Support** card shows system information and provides access to support resources and actions.
All systems show three buttons in the card header:

* **File Ticket** opens a [feedback/report issue window](#send-feedback-window) where users can provide feedback or report an issue and save/attach a system debug file.
* **Save Debug** starts downloading a system debug file to the local machine.
* **Add License** (or **Update License** after a license is applied) opens the **[License](#license-screen)** screen. Requires Full Admin role.

### Community Edition Support Card

The **Support** card for TrueNAS Community Edition shows a banner with a link to the TrueNAS forums for community support, followed by system information including the OS version, system product, CPU model (if detected), memory, and system serial number (if configured).

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSupportCard.png" alt="Support Card" id="Support Card" >}}

A links row at the bottom of the card provides quick access to **Documentation**, **Forums**, and **Licensing** information.

{{< enterprise>}}
### Enterprise Support Card

The **Support** card on the **General Settings** screen for Enterprise systems displays license details including contract type, expiration date, model, system serial, licensed serials, features, and any additional hardware.
Licensed systems with recognized hardware display a product image at the top of the card.

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSupportCardEnterprise.png" alt="Support Card - Enterprise" id="Support Card - Enterprise" >}}

The **This is a production system** toggle, which shows only on TrueNAS Enterprise systems, appears alongside the **Model** field in the license info list.
Enabling it opens the [**Update Production Status**](#update-production-status-dialog) dialog.

### Support Banners

The **Support** card displays a contextual banner depending on the system's license tier and support configuration:

* **Contract expiring soon** — Shows when an active support contract expires within 14 days. Displays the number of days remaining and the expiration date, with a **Contact Us** link to renew.
* **Set up Proactive Support** — Shows for Silver/Gold tier systems where proactive support is available but not yet enabled. Click **Enable** to open the [Proactive Support](#proactive-support-screen) configuration screen.
* **Need help? Looking for support?** (Bronze tier) — Shows for systems where proactive support is not included. Provides an **Explore your options** link to review available support plans.

When proactive support is active, the license info list includes a **Proactive Support: Enabled** row with a **Manage** button to update contact configuration.
{{< /enterprise >}}

### Update Production Status Dialog

The **Update Production Status** dialog can set a TrueNAS Enterprise system to production status and can send an initial system debug to TrueNAS.

{{< trueimage src="/images/SCALE/SystemSettings/UpdateProductionStatusDialog.png" alt="Update Production Status" id="Update Production Status" >}}

**Send initial debug** starts the debug download and file transfer to TrueNAS.

**Proceed** starts the process and sets the system to a production system.

### Send Feedback Window

The **Send Feedback** window shows two options: **Rate this page** and **Report a Bug**, which is the default selection after clicking **File Ticket**.
The **Rate this page** is the default selection after clicking the option to rate a new screen shown in early release with new functional screens or redesigned screens.

#### Report a Bug

{{< trueimage src="/images/SCALE/SystemSettings/SendFeedbackReportABugWindow.png" alt="Send Feedback Window" id="Send Feedback Window" >}}

**Subject** is a text entry field for a brief description of an issue experienced. For example, *Traceback received when pressing Save*.

**Message** is a text entry field for a longer description of what steps were taken and the result. The field provides examples of what to enter. This content populates the Jira ticket description field after clicking **Login To Jira To Submit**.

**Attach debug**, which is selected by default, downloads and attaches a system debug to the Private Attachment Area TrueNaS provides to secure user confidential data that is part of the debug file.

**Take screenshot of the current page**, selected by default, takes a screenshot of the current screen.

**Attach additional images** opens a file browser where you can locate and attach saved logs, screenshots, or video files that help explain the issue reported in the ticket.

**Login To Jira To Submit** opens a Jira login screen where you enter your Jira credentials so TrueNAS can create the ticket for you using your credentials.

#### Rate this page

Select the **Rate this page** to show options to submit review feedback on a UI screen.

{{< trueimage src="/images/SCALE/SystemSettings/FeedbackWindow.png" alt="Rate this page Window" id="Rate this page Window" >}}

Stars set a rating using one (lowest) to five (best) stars.

**Message** is a text entry field for comments about the screen you are rating. Include what you like, don't like, works well, or does not work well, and your exerience with the screen.

**Take screenshot of the current page**, selected by default, takes a screenshot of the current screen.

**Attach additional images** opens a file browser where you can locate and attach saved screenshots or video files that help explain what you report in the ticket.

The **on our forum** link opens the [TrueNAS Community forum](https://forums.truenas.com/feature-requests).

**Submit** sends the report to TrueNAS.

### License Screen

The **License** screen opens after clicking either **Add License** or **Update License** on the **Support** card on the **General Settings** screen.
It allows pasting a copy of your license into the form and saving it. 

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseEntry.png" alt="License Entry" id="License Entry" >}}

**Reload Now** reloads the page.

**End User License Agreement (EULA)** opens a copy of the TrueNAS end user license agreement.
**I AGREE** digitally marks it signed, then closes the screen and updates the **Support** card with the license and hardware information.

**This is a production system** indicates the system is used in a production, non-test environment.
**Proceed** sends TrueNAS an email notification that the system is in production.

### Proactive Support Screen

Silver/Gold coverage customers can enable proactive support.
This feature automatically emails TrueNAS when certain conditions occur in a TrueNAS system.

Click **Enable** in the **Set up Proactive Support** banner, or **Manage** in the proactive support row (when already enabled), to open the proactive support configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/ProactiveSupportForm.png" alt="Proactive Support Form" id="Proactive Support Form" >}}

**Primary Contact** and **Secondary Contact** fields specify the customer name, title, and contact information.

**Enable TrueNAS Proactive Support** and **Save** notifies the TrueNAS team that the system is configured for proactive support.

## GUI Settings Screen

The **GUI Settings** screen shows configuration settings for the TrueNAS web interface.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralGuiSettings.png" alt="GUI Settings Screen" id="GUI Settings Screen" >}}

{{< expand "GUI Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **GUI SSL Certificate** | Sets the selected certificate as the SSH certificate. **truenas_default** is the default certificate. The system uses a self-signed certificate to enable encrypted web interface connections. **Manage Certificates** opens the [Certificates]({{< ref "/SCALE/Credentials/Certificates" >}}) screen. Certificates added or imported into TrueNAS show on this list. |
| **Web Interface IPv4 Address** | Sets an IP address to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface IPv6 Address** | Sets an IPv6 address from the dropdown list to limit usage when accessing the administrative GUI. The default is **::**. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface HTTP Port** | Sets a non-standard port to access the GUI over HTTP. The default is **80**. Changing this setting might require changing a [Firefox configuration setting](https://support.mozilla.org/en-US/kb/connection-settings-firefox). |
| **Web Interface HTTPS Port** | Sets a non-standard port to access the GUI over HTTPS. The default is **443**. |
| **HTTPS Protocols** | Sets a cryptographic protocol(s) for securing client/server connections. Select the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS can use for connection security from the dropdown list of options:<br><li>**TLSv1**<br><li>**TLSv1.1**<br><li>**TLSV1.2** selected by default<br><li>**TLSv1.3** (selected by default)</li> |
| **Web Interface HTTP -> HTTPS Redirect** | Redirects HTTP connections to HTTPS. A GUI SSL certificate is required for HTTPS. Activating this sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year. After adding a new certificate, select it or use the default TrueNAS certificate in **GUI SSL Certificate**. |
| **Usage Collection & UI Error Reporting** | When enabled, anonymous usage statistics and WebUI errors are reported to the TrueNAS engineering team. No personally identifiable information is collected. When disabled, anonymous usage statistics consisting only of the software version and total system capacity (e.g. TrueNAS 24.04.0, 55 TB) are still collected. Information about system configuration and usage is not collected. For more information about what usage data is collected, see the [TrueNAS Data Collection Statement]({{< ref "/SCALE/GettingStarted/UserAgreements/DataCollectionStatement" >}}). |
| **Show Console Messages** | Shows console messages in real-time at the bottom of the browser screen. |
{{< /truetable >}} 
{{< /expand >}}

## Localization Settings Screen

The **Localization** card shows the current time zone and console keyboard map settings for the TrueNAS system.
Provides access to a configuration screen to customize settings.

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsLocalizationCard.png" alt="Localization Card" id="Localization Card" >}}

**Settings** opens the **Localization Settings** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralLocalizationSettings.png" alt="Localization Settings Screen" id="Localization Settings Screen" >}}

{{< expand "Localization Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Console Keyboard Map** | Sets a language for the keyboard layout, for example, **English (US)** for American English. Select an option on the dropdown list, or type in the field to filter the list to show matching languages. |
| **Timezone** | Set the geographical time zone for the system. Allows filtering the list by typing in the field after clearing the default value. Or scroll down to locate and select a timezone from the dropdown list. |
{{< /truetable >}}
{{< /expand >}}

## Email Options Screen

The **Email** card shows the email configured on the system. **Settings** opens the **Email Options** configuration screen.
Setting options change based on the selected send-mail method. Options:
* [**SMTP**](#smtp) shows standard SMTP configuration settings.
* [**GMail OAuth**](#gmail-oauth) shows the Gmail configuration options.
* **Outlook OAuth** shows Outlook configuration options.

### SMTP Email Options

The **Email Options** screen for the **SMTP** option shows standard email configuration settings.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsSMTP.png" alt="SMTP Email Options" id="SMTP Email Options" >}}

**Send Test Mail** generates a test email to confirm that the system email settings entered work correctly.

**Save** stores the email configuration and closes the **Email Options** screen.

{{< expand "SMTP Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **From Email** | Sets the user account email address used for the envelope **From** email address, the address sending emails. |
| **From Name** | Sets the name shown in front of the sending email address, for example, *truenas system 1* in *truenas system 1@example.com*. |
| **Outgoing Mail Server** | Sets the host name or IP address of the SMTP server used to send emails. |
| **Mail Server Port** | Sets the SMTP port number. Typically **25**, **465** (secure SMTP), or **587** (submission). |
| **Security** | Sets the security option to what is selected on the dropdown list. Options are:<br><li>**Plain (No Encryption)**<br><li>**SSL (Implicit TLS)**<br><li>**TLS (STARTTLS)**</li> For more information on types, see [email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html). |
| **SMTP Authentication** | Select to enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using plain Simple Authentication and Security Layer (SASL) for authentication and data security. Applies and requires a valid simple username and password authentication method. |
| **Username** | Shows after selecting **SMTP Authentication**. Sets the username of the sending email account, which is typically the full email address. Enter the username if the SMTP server requires authentication. |
| **Password** | Shows after selecting **SMTP Authentication**. Sets the password for the sending email account for the SMTP server. Only plain ASCII characters are accepted.|
{{< /truetable >}}
{{< /expand >}}

### OAuth Email Options

**Gmail OAuth** and **Outlook OAuth** options show the **From Email** and **From Name** fields and a log-in-to button for the email method selected. 
**GMail OAuth** shows **Log In To Gmail** and **Outlook OAuth** shows **Log In To Outlook**.
These login methods step through a sequence of login screens for the selected method.
For more information, see [Setting Up System Email]({{< ref "SettingUpSystemEmail" >}})