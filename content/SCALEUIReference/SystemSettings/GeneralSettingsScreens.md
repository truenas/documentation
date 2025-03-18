---
title: "General Settings Screen"
description: "Provides information on General system setting screen, widgets, and settings for getting support, changing console or the GUI, localization, and keyboard setups, and adding NTP servers."
weight: 20
tags:
 - settings
 - console
 - ntp
 - configuration files
---

The **General Settings** screen has five widgets that show current general system settings and include buttons for related actions and configuration options. The widgets are:

* **[Support](#support-widget)**
* **[GUI](#gui-settings-screen)**
* **[Localization](#localization-settings-screen)**
* **[NTP](#add-ntp-server-screen)**
* System [**Email**](#email-options-screen)

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralScreen.png" alt="General Settings Screen" id="General Settings Screen" >}}

## Manage Configuration

The **[Manage Configuration](#manage-configuration)** dropdown shows two options, one to download the system config file and the other to upload a system config file.
The option to reset system settings to the default configuration shows after uploading a configuration file.

### Download File

The **Download File** option opens the **Save Configuration** dialog, where users can download the current system configuration to the local machine.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigurationWindow.png" alt="Save Configuration" id="Save Configuration" >}}

The **Export Password Secret Seed** option includes encrypted passwords in the downloaded configuration file.
This option allows you to restore the configuration file to a different operating system device where the decryption seed is not already present.
Users must physically secure configuration file backups containing the seed to prevent unauthorized access or password decryption.

### Upload File

The **Upload File** option opens the **Upload Config** dialog, which allows users to choose a previously saved TrueNAS configuration to replace the current system configuration.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralUploadConfig.png" alt="Upload Config" id="Upload Config" >}}

**Choose File** opens a file browser window to locate the downloaded and saved configuration file.
  After selecting the file, the **Upload Config** window opens.
**Upload** uploads the selected configuration file.

{{< hint type=warning >}}
All passwords reset if the uploaded configuration file was saved without **Export Password Secret Seed** enabled.
{{< /hint >}}

### Reset to Defaults

The **Reset to Defaults** option opens the **Reset Configuration** dialog.
Using **Resetting to Defaults** returns the system configuration to factory settings and restarts the system. Users must set a new login password.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralResetConfiguration.png" alt="Reset Configuration" id="Reset Configuration" >}}

{{< hint type=warning >}}
Save the system current configuration with the _Download File_ option before resetting the configuration to default settings.

Not saving the system configuration before resetting it, can result in losing data that is not backed up, and losing the ability to revert to the previous configuration.
{{< /hint >}}

## Support Widget

The **Support** widget shows general hardware and software specifications and links to the [Documentation Hub](https://www.truenas.com/docs/), [TrueNAS Forums](https://forums.truenas.com/), and offers [TrueNAS Licensing](https://www.ixsystems.com/support/) information.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralSupportWidget.png" alt="Support Widget" id="Support Widget" >}}

**Add License** opens the **[License](#license-screen)** screen.

**File Ticket** opens the **[Send Feedback](#feedback-window)** window.

### License Screen

The **License** screen allows copying your license pasting it in the form and saving it. 

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseEntry.png" alt="License Entry" id="License Entry" >}}

**Reload Now** reloads the page.

**End User License Agreement (EULA)** opens a copy of the TrueNAS end user license agreement.
After thoroughly and completely reading it, **I AGREE** digitally marks it signed, then closes the screen and updates the **Support** widget with the license and hardware information.

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseComplete.png" alt="Support Widget with License" id="Support Widget with License" >}}

**This is a production system** indicates the system is used in a production, non-test environment.
**Proceed** sends TrueNAS an email notification that the system is in production.

### Proactive Support Screen

Silver/Gold coverage customers can enable proactive support.
This feature automatically emails TrueNAS when certain conditions occur in a TrueNAS system.

**Proactive Support** opens a window where you configure proactive support.

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSCALEProactiveSupportForm.png" alt="Proactive Support Form" id="Proactive Support Form" >}}

**Primary Contact** and **Secondary Contact** fields specify customer name, title, and contact information.

**Enable iXsystems Proactive Support** and **Save** notifies the TrueNAS team the system is configured for proactive support.

## GUI Settings Screen

The **GUI Settings** screen shows configuration settings for the TrueNAS web interface.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralGuiSettings.png" alt="GUI Settings Screen" id="GUI Settings Screen" >}}

{{< expand "GUI Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Theme** | Select a color theme from the dropdown list of options. Options are: **ixDark** (default option), **ixBlue**, **Dracula**, **Nord**, **Paper**, **Soloarized Dark**, **Midnight**, and **High Contrast**. Selecting an option immediately changes the UI to the selected color theme. |
| **GUI SSL Certificate** | Sets the selected certificate as the SSH certificate. **truenas_default** is the default self-signed certificate. The system uses a self-signed certificate to enable encrypted web interface connections. **Manage Certificates** opens the [Certificates]({{< relref "/SCALEUIReference/credentials/certificates/_index.md" >}}) screen. Certificates added to TrueNAS show on this list. |
| **Web Interface IPv4 Address** | Select an IP address to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface IPv6 Address** | Select an IPv6 address from the dropdown list to limit usage when accessing the administrative GUI. The default is **::**. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface HTTP Port** | Sets a non-standard port to access the GUI over HTTP. The default is **80**. Changing this setting might require changing a [Firefox configuration setting](https://support.mozilla.org/en-US/kb/connection-settings-firefox). |
| **Web Interface HTTPS Port** | Sets a non-standard port to access the GUI over HTTPS. The default is **443**. |
| **HTTPS Protocols** | Sets a cryptographic protocol(s) for securing client/server connections. Select the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS can use for connection security from the dropdown list of options:<br><li>**TLSv1**<br><li>**TLSv1.1**<br><li>**TLSV1.2** selected by default<br><li>**TLSv1.3** (selected by default)</li> |
| **Web Interface HTTP -> HTTPS Redirect** | Select to redirect HTTP connections to HTTPS. A GUI SSL certificate is required for HTTPS. Activating this sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year. After adding a new certificate select it or use the default TrueNAS certificate in **GUI SSL Certificate**. |
| **Usage Collection** | Select to enable sending anonymous usage statistics to iXsystems. For more information about what usage data is collected, see the [TrueNAS Data Collection Statement]({{< relref "/GettingStarted/UserAgreements/DataCollectionStatement.md" >}}). |
| **Show Console Messages** | Select to show console messages in real-time at the bottom of the browser. |
{{< /truetable >}}
{{< /expand >}}

## Localization Settings Screen

The **Localization** widget shows the current language, date, time format, time zone, and console keyboard map settings for the TrueNAS system.
Provides access to a configuration screen to customize settings.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralLocalizationSettings.png" alt="Localization Settings Screen" id="Localization Settings Screen" >}}

**Settings** opens the **Localization Settings** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralLocalizationSettings.png" alt="Localization Settings Screen" id="Localization Settings Screen" >}}

{{< expand "Localization Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Language** | Sets the language for the UI screens. The default setting is **English** but might be customized to the language based on the country of origin for an Enterprise customer. Clear the field and begin typing to filter the list or scroll down and select a language from the dropdown list. |
| **Console Keyboard Map** | Sets a language for the keyboard layout, for example, **English (US)** for American English. Select and option the dropdown list. |
| **Timezone** | Set the geographical time zone for the system. Clear the field and begin typing to filter the list or scroll down to select a time zone from the dropdown list. |
| **Date Format** | Select a date format from the dropdown list. |
| **Time Format** | Select a time format from the dropdown list. |
{{< /truetable >}}
{{< /expand >}}

## Add NTP Server Screen
The **Add NTP Server** screen shows settings to configure Network Time Protocol (NTP) servers that sync the local TrueNAS system with an accurate external reference.
By default, new installations use several existing NTP servers. TrueNAS supports adding custom NTP servers.

**Add** on the **NTP Servers** widget opens the **Add NTP Server** screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralAddNTPServer.png" alt="Add NTP Server Screen" id="Add NTP Server Screen" >}}

{{< expand "Add NTP Server Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Address** | Enter the host name or IP address of the NTP server. |
| **Burst** | Select to enable using a non-public NTP server. Recommended when **Max Poll** is greater than **10**. Only use on personal NTP servers or those under direct control. Do not enable it when using public NTP servers. |
| **IBurst** | Select to enable and speed up the initial synchronization (seconds instead of minutes). |
| **Prefer** | Select to enable when using highly accurate NTP servers such as those with time monitoring hardware. Only use for these highly accurate NTP servers. |
| **Min Poll** | Sets the minimum polling interval. Enter a numeric value in seconds, as a power of 2. For example, 6 means 2^6, or 64 seconds. The default is **6**, and the minimum value is **4**. |
| **Max Poll** | Sets the maximum polling interval. Enter a numeric in seconds, as a power of 2. For example, 10 means 2^10, or 1,024 seconds. The default is **10**, and the maximum value is **17**. |
| **Force** | Select to enable. Forces the addition of the NTP server, even if it is currently unreachable. |
{{< /truetable >}}
{{< /expand >}}

## Email Options Screen

The **Email** widget shows the send-email method configured in TrueNAS, such as *SMTP*.

**Settings** opens the **Email Options** configuration screen.
Settings change based on the selected send-mail method. Options:
* [**SMTP**](#smtp) shows standard SMTP configuration settings.
* [**GMail OAuth**](#gmail-oauth) shows the Gmail configuration options.
* **Outlook OAuth** shows Outlook configuration options.

### SMTP Email Options

The **Email Options** screen with **SMTP** selected shows standard email configuration settings.

{{< trueimage src="/images/SCALE/SystemSettings/EmailOptionsSMTP.png" alt="SMTP Email Options" id="SMTP Email Options" >}}

**Send Test Mail** generates a test email to confirm the system email settings entered work correctly.

**Save** stores the email configuration and closes the **Email Options** screen.

{{< expand "SMTP Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **From Email** | Enter the user account email address to use for the envelope **From**  email address, the address sending emails and configured on either the Add or Edit User screen. For more information, see [**User Screens**]({{< relref "LocalUsersScreensSCALE.md" >}}). |
| **From Name** | Enter the name to show in front of the sending email address, for example *truenas system 1* in *truenas system 1@example.com*. |
| **Outgoing Mail Server** | Host name or IP address of SMTP server used to send emails. |
| **Mail Server Port** | SMTP port number. Typically **25**, **465** (secure SMTP), or **587** (submission). |
| **Security** | Select the security option from the dropdown list. Options are:<br><li>**Plain (No Encryption)**<br><li>**SSL (Implicit TLS)**<br><li>**TLS (STARTTLS)**</li> For more information on types, see [email encryption](https://www.fastmail.com/help/technical/ssltlsstarttls.html). |
| **SMTP Authentication** | Select to enable [SMTP AUTH](https://en.wikipedia.org/wiki/SMTP_Authentication) using plain Simple Authentication and Security Layer (SASL) for authentication and data security. Applies and requires a valid simple username and password authentication method. |
| **Username** | Shows after selecting **SMTP Authentication**. The user name for the sending email account,is typically the full email address. Enter the username if the SMTP server requires authentication. |
| **Password** | Shows after selecting **SMTP Authentication**. Enter the password for the sending email account, for the SMTP server. Only plain ASCII characters are accepted.|
{{< /truetable >}}
{{< /expand >}}

### OAuth Email Options

**Gmail OAuth** and **Outlook OAuth** options show the **From Email** and **From Name** fields and a log-in-to button for the email method selected. 
**GMail OAuth** shows **Log In To Gmail** and **Outlook OAuth** shows **Log In To Outlook**.
These login methods step through a sequence of login screens for the selected method.
For more information, see [Setting Up System Email]({{< relref "SettingUpSystemEmail.md" >}})