---
title: "General Settings Screen"
description: "This article provides information on general system setting screen widgets and settings for getting support, changing console or the GUI, localization and keyboard setups, and adding NTP servers."
weight: 20
aliases: 
tags:
 - scalesettings
 - scaleconsole
 - scalentp
 - scalelocalization
---

{{< toc >}}

The TrueNAS SCALE **System Settings > General** screen includes widgets for **[Support](#support-widget)**, **[GUI](#gui)**, **[Localization](#localization)**, and **[NTP](#ntp-servers)** functions.   

![SystemGeneralScreen](/images/SCALE/22.12/SystemGeneralScreen.png "System General Screen") 

**[Manage Configuration](#manage-configuration-screens)** provides three options to backup, restore, or reset system configuration settings.

## Manage Configuration Screens

TrueNAS SCALE allows users to manage the system configuration via uploading/downloading configurations, or resetting the system to the default configuration. 

### Download File Window

The **Download File** option opens the **Save Configuration** window, which allows users to download the current system configuration to the local machine.

![SystemGeneralSaveConfiguration](/images/SCALE/22.02/SystemGeneralSaveConfiguration.png "System General Download Save Configuration") 

The **Export Password Secret Seed** option includes encrypted passwords in the downloaded configuration file. This option allows you to restore the configuration file to a different operating system device where the decryption seed is not already present. Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.

### Upload File Window

The **Upload File** option opens the **Upload Config** window, which allows users to choose a previously saved TrueNAS SCALE configuration to replace the current system configuration.

![SystemGeneralUploadConfig](/images/SCALE/22.12/SystemGeneralUploadConfig.png "System General Upload Config") 

**Choose File** opens a file browser window where you can locate the downloaded and saved configuration. After selecting the file, it displays in the **Upload Config** window. 
**Upload** uploads the selected configuration file.

{{< hint type=warning >}}
All passwords reset if the uploaded configuration file saved without **Export Password Secret Seed** enabled.
{{< /hint >}}

### Reset to Defaults Window

The **Reset to Defaults** option opens the **Reset Configuration** window, which resets the system configuration to factory settings and restarts the system. Users must set a new login password.

![SystemGeneralResetConfiguration](/images/SCALE/22.12/SystemGeneralResetConfiguration.png "SCALE General Reset Configuration") 

{{< hint type=warning >}}
**Save the system current configuration with the _Download File_ option before resetting the configuration to default settings.**
 
If you do not save the system configuration before resetting it, you may lose data that you did not back up, and you will not be able to revert to the previous configuration.
{{< /hint >}}

## Support Widget
The **Support** widget displays general hardware and software specs and contains links to the [Documentation Hub](https://www.truenas.com/docs/), [TrueNAS Forums](https://www.truenas.com/community/), and offers [TrueNAS Licensing](https://www.ixsystems.com/support/) information. 

![SystemGeneralSupportWidget](/images/SCALE/22.12/SystemGeneralSupportWidget.png "SCALE General Settings Support Widget")

**Add License** opens the **[License](#license-screens)** screen. 

**File Ticket** opens the **[File Ticket](#file-ticket-screen)** screen.

### License Screens
The **License** screen allows you to copy your license into the box and save it.  
{{< expand "Click Here for More Information" "v" >}}

![GeneralSettingsSCALESupportLicenseEntry](/images/SCALE/GeneralSettingsSCALESupportLicenseEntry.png "SCALE General Settings Support License Entry")

When prompted to reload the page, click **Reload Now**.  

When the **End User License Agreement (EULA)** opens, read it thoroughly and completely, then click **I AGREE**.  

![GeneralSettingsSCALESupportLicenseComplete](/images/SCALE/GeneralSettingsSCALESupportLicenseComplete.png "SCALE General Settings Support License Entry Complete")

Select the **This is a production system** option and click the **Proceed** to notify iXsystems through an email the system sends declaring that the system is in production. 
{{< /expand >}}

### File Ticket Screen
The **File Ticket** screen settings allow you to log into Jira where you can submit a ticket. The screen provides the required ticket information fields to complete when submitting an issue report.
{{< expand "Click Here for More Information" "v" >}}

![GeneralSettingsSCALESupportJiraTicketCreate](/images/SCALE/22.12/GeneralSettingsSCALEJiraTicketCreate.png "SCALE General Settings Jira Ticket Creation")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter the name of the contact person. |
| **Email** | Enter the email of the contact person. Use the format `name@domain.com`. |
| **CC** | Email addresses to receive copies of iXsystems Support messages about this issue. Use the format `name@domain.com`. Separate entries by pressing <kbd>Enter</kbd>. |
| **Phone** | Enter the phone number of the contact person. |
| **Type** | Select Bug when reporting an issue or Suggestion when requesting new functionality. |
| **Environment** | Select the appropriate environment. |
| **Criticality** | Select the appropriate level of criticality. |
| **Subject** | Enter a descriptive title for the new issue. |
| **Description** | Enter a one to three paragraph summary of the issue. Describe the problem and provide any steps to replicate the issue. |
| **Attach Debug** | Set to generate and attach to the new issue a report containing an overview of the system hardware, build string, and configuration. Attaching a debug can take several minutes. |
| **Choose File** | Select one or more screenshots that illustrate the problem. |
{{< /truetable >}}

Click **Save** to submit the ticket and open a window with a link to it.

Click **User Guide** to open a new tab to the [Docs Hub](https://www.truenas.com/docs/).

Click **EULA** to display the end user license agreement.
{{< /expand >}}

### Proactive Support Screen
Silver/Gold Coverage Customers can enable iXsystems Proactive Support. This feature automatically emails iXsystems when certain conditions occur in a TrueNAS system.
{{< expand "Click Here for More Information" "v" >}}
To configure Proactive Support, click **Proactive Support** in the **Support** widget.

Complete all available fields, and check the **Enable iXsystems Proactive Support** box, then click **Save**.

![GeneralSettingsSCALEProactiveSupportForm](/images/SCALE/22.12/GeneralSettingsSCALEProactiveSupportForm.png "SCALE General Settings Proactive Support Form")

{{< /expand >}}

## GUI
The **GUI** widget allows users to configure the TrueNAS SCALE web interface address.
{{< expand "Click Here for More Information" "v" >}}
Click **Settings** to open the **GUI Settings** screen.

![SystemGeneralGuiSettings](/images/SCALE/22.12/SystemGeneralGuiSettings.png "System General GUI Settings") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Theme** | Select a preferred color theme from the dropdown list of eight options. |
| **GUI SSL Certificate** | Select a self-signed certificate from the dropdown list. The system uses a self-signed certificate to enable encrypted web interface connections. |
| **Web Interface IPv4 Address** | Select a recent IP address from the dropdown list to limit usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface IPv6 Address** | Select a recent IPv6 address from the dropdown list to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of **0.0.0.0** (any address) and issues an alert if the specified address becomes unavailable. |
| **Web Interface HTTP Port** | Enter a port number for an HTTP connection to the web interface. Allow configuring a non-standard port to access the GUI over HTTP. Changing this setting might require changing a [Firefox configuration setting](https://www.redbrick.dcu.ie/~d_fens/articles/Firefox:_This_Address_is_Restricted). |
| **Web Interface HTTPS Port** | Enter a port number for an HTTPS connection to the web interface. This field allows configuring a non-standard port to access the GUI over HTTPS. |
| **HTTPS Protocols** | Select the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS SCALE can use for connection security from the dropdown list. Cryptographic protocol for securing client/server connections. |
| **Web Interface HTTP -> HTTPS Redirect** | Select to redirect HTTP connections to HTTPS. A GUI SSL Certificate is required for HTTPS. Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year. |
| **Crash Reporting** | Select to send failed HTTP request data, which can include client and server IP addresses, failed method call tracebacks, and middleware log file contents, to iXsystems. |
| **Usage Collection** | Select to enable sending anonymous usage statistics to iXsystems. |
| **Show Console Messages** | Select to display console messages in real-time at the bottom of the browser. |
{{< /truetable >}}
{{< /expand >}}

## Localization
The **Localization** widget lets users localize their system to a specific region.
{{< expand "Click Here for More Information" "v" >}}
Click **Settings** to open the **Localization Settings** screen.

![SystemGeneralLocalizationSettings](/images/SCALE/22.02/SystemGeneralLocalizationSettings.png "Localization Settings")

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

## NTP Servers
The **NTP Servers** widget allows users to configure Network Time Protocol (NTP) servers, which sync the local system time with an accurate external reference. 
{{< expand "Click Here for More Information" "v" >}}
By default, new installations use several existing NTP servers. TrueNAS SCALE supports adding custom NTP servers. Click **Add** to open the **Add NTP Server** screen.

![SystemGeneralAddNTPServer](/images/SCALE/22.02/SystemGeneralAddNTPServer.png "Add NTP Server")

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

{{< taglist tag="scalesettings" limit="10" >}}
{{< taglist tag="scaleconsole" limit="10" title="Related Console Articles" >}}