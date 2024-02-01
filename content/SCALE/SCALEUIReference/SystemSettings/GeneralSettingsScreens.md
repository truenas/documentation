---
title: "General Settings Screen"
description: "Provides information on General system setting screen, widgets, and settings for getting support, changing console or the GUI, localization and keyboard setups, and adding NTP servers."
weight: 20
aliases: 
tags:
 - settings
 - console
 - ntp
---

The TrueNAS SCALE **System Settings > General** screen includes widgets for **[Support](#support-widget)**, **[GUI](#gui-settings-screen)**, **[Localization](#localization-settings-screen)**, **[NTP](#add-ntp-server-screen)**, and system [**Email**](#email-options-screen) functions. Each widget displays information about current settings and includes one or more buttons for related actions and configuration options.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralScreen.png" alt="System General Screen" id="System General Screen" >}}

The **[Manage Configuration](#manage-configuration)** dropdown provides three options to backup, restore, or reset system configuration settings.

## Manage Configuration

TrueNAS SCALE allows users to manage the system configuration via uploading/downloading configurations, or resetting the system to the default configuration.

### Download File

The **Download File** option opens the **Save Configuration** dialog, which allows users to download the current system configuration to the local machine.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigurationWindow.png" alt="Save Configuration" id="Save Configuration" >}}

The **Export Password Secret Seed** option includes encrypted passwords in the downloaded configuration file. This option allows you to restore the configuration file to a different operating system device where the decryption seed is not already present. Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.

### Upload File

The **Upload File** option opens the **Upload Config** dialog, which allows users to choose a previously saved TrueNAS SCALE configuration to replace the current system configuration.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralUploadConfig.png" alt="Upload Config" id="Upload Config" >}}

**Choose File** opens a file browser window where you can locate the downloaded and saved configuration. After selecting the file, it displays in the **Upload Config** window.
**Upload** uploads the selected configuration file.

{{< hint type=warning >}}
All passwords reset if the uploaded configuration file saved without **Export Password Secret Seed** enabled.
{{< /hint >}}

### Reset to Defaults

The **Reset to Defaults** option opens the **Reset Configuration** dialog, which resets the system configuration to factory settings and restarts the system. Users must set a new login password.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralResetConfiguration.png" alt="Reset Configuration" id="Reset Configuration" >}}

{{< hint type=warning >}}
**Save the system current configuration with the _Download File_ option before resetting the configuration to default settings.**

If you do not save the system configuration before resetting it, you may lose data that you did not back up, and you will not be able to revert to the previous configuration.
{{< /hint >}}

## Support Widget

The **Support** widget displays general hardware and software specs and contains links to the [Documentation Hub](https://www.truenas.com/docs/), [TrueNAS Forums](https://www.truenas.com/community/), and offers [TrueNAS Licensing](https://www.ixsystems.com/support/) information.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralSupportWidget.png" alt="Support Widget" id="Support Widget" >}}

**Add License** opens the **[License](#license-screen)** screen.

**File Ticket** opens the **[Feedback Window](#feedback-window)**.

### License Screen

The **License** screen allows you to copy your license into the box and save it.  

{{< expand "Click Here for More Information" "v" >}}
{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseEntry.png" alt="License Entry" id="License Entry" >}}

When prompted to reload the page, click **Reload Now**.  

When the **End User License Agreement (EULA)** opens, read it thoroughly and completely, then click **I AGREE**.
The **Support** widget updates to display license and hardware information.

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSCALESupportLicenseComplete.png" alt="Support Widget with License" id="Support Widget with License" >}}

Select **This is a production system** and click **Proceed** to send iXsystems email notification that the system is in production.
{{< /expand >}}

### Feedback Window

{{< include file="/content/_includes/FeedbackWindow.md" >}}

### Proactive Support Screen

Silver/Gold Coverage Customers can enable iXsystems Proactive Support. This feature automatically emails iXsystems when certain conditions occur in a TrueNAS system.

{{< expand "Click Here for More Information" "v" >}}
To configure Proactive Support, click **Proactive Support** in the **Support** widget.

{{< trueimage src="/images/SCALE/SystemSettings/GeneralSettingsSCALEProactiveSupportForm.png" alt="Proactive Support Form" id="Proactive Support Form" >}}

Complete all available fields, and check the **Enable iXsystems Proactive Support** box, then click **Save**.

{{< /expand >}}

## GUI Settings Screen

Click **Settings** on the **GUI** widget to open the **GUI Settings** screen that allows users to configure the TrueNAS SCALE web interface address.

{{< expand "Click Here for More Information" "v" >}}
Click **Settings** to open the **GUI Settings** screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralGuiSettings.png" alt="GUI Settings Screen" id="GUI Settings Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Theme** | Select a preferred color theme from the dropdown list of eight options. |
| **GUI SSL Certificate** | Select a self-signed certificate from the dropdown list. The system uses a self-signed certificate to enable encrypted web interface connections. **Manage Certificates** opens the [Certificates]({{< relref "/SCALE/SCALEUIReference/credentials/certificates/_index.md" >}}) screen. |
| **Web Interface IPv4 Address** | Select a recent IP address from the dropdown list to limit usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface IPv6 Address** | Select a recent IPv6 address from the dropdown list to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface HTTP Port** | Enter a port number for an HTTP connection to the web interface. Allow configuring a non-standard port to access the GUI over HTTP. Changing this setting might require changing a [Firefox configuration setting](https://support.mozilla.org/en-US/questions/1083282). |
| **Web Interface HTTPS Port** | Enter a port number for an HTTPS connection to the web interface. This field allows configuring a non-standard port to access the GUI over HTTPS. |
| **HTTPS Protocols** | Select the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS SCALE can use for connection security from the dropdown list. Cryptographic protocol for securing client/server connections. |
| **Web Interface HTTP -> HTTPS Redirect** | Select to redirect HTTP connections to HTTPS. A GUI SSL Certificate is required for HTTPS. Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year. |
| **Usage Collection** | Select to enable sending anonymous usage statistics to iXsystems. |
| **Show Console Messages** | Select to display console messages in real-time at the bottom of the browser. |
{{< /truetable >}}
{{< /expand >}}

## Localization Settings Screen

Click **Settings** on the **Localization** widget to open the **Localization Settings** screen that lets users localize their system to a specific region.

{{< expand "Click Here for More Information" "v" >}}
Click **Settings** to open the **Localization Settings** screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralLocalizationSettings.png" alt="Localization Settings Screen" id="Localization Settings Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Language** | Select a language from the dropdown list. |
| **Console Keyboard Map** | Select a language keyboard layout from the dropdown list. |
| **Timezone** | Select a time zone from the dropdown list. |
| **Date Format** | Select a date format from the dropdown list. |
| **Time Format** | Select a time format from the dropdown list. |
{{< /truetable >}}
{{< /expand >}}

## Add NTP Server Screen

Click **Add** on the **NTP Servers** widget to open the **Add NTP Server** screen that allows users to configure Network Time Protocol (NTP) servers, which sync the local system time with an accurate external reference.

{{< expand "Click Here for More Information" "v" >}}
By default, new installations use several existing NTP servers. TrueNAS SCALE supports adding custom NTP servers. Click **Add** to open the **Add NTP Server** screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralAddNTPServer.png" alt="Add NTP Server Screen" id="Add NTP Server Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Address** | Enter the hostname or IP address of the NTP server. |
| **Burst** | Select to use a non-public NTP server. Recommended when **Max Poll** is greater than **10**. Only use on personal NTP servers or those under direct control. Do not enable it when using public NTP servers. |
| **IBurst** | Select to speed up the initial synchronization (seconds instead of minutes). |
| **Prefer** | Select when using highly accurate NTP servers such as those with time monitoring hardware. Only use for these highly accurate NTP servers.  |
| **Min Poll** | Enter the minimum polling interval, in seconds, as a power of 2. For example, 6 means 2^6, or 64 seconds. The default is 6, and the minimum value is 4. |
| **Max Poll** | Enter the maximum polling interval, in seconds, as a power of 2. For example, 10 means 2^10, or 1,024 seconds. The default is 10, and the maximum value is 17. |
| **Force** | Select to force the addition of the NTP server, even if it is currently unreachable. |
{{< /truetable >}}
{{< /expand >}}

## Email Options Screen

Click **Settings** on the **Email** widget to open the **Email Options** screen that allows users to configure the system email send method.

{{< expand "Click Here for More Information" "v" >}}
{{< include file="/_includes/EmailOptions.md" >}}

### SMTP

{{< include file="/_includes/EmailOptionsSMTP.md" >}}

### Gmail OAuth

{{< include file="/_includes/EmailOptionsGmail.md" >}}

{{< /expand >}}
