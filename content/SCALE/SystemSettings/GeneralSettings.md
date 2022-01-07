---
title: "General Settings"
geekdocCollapseSection: true
weight: 20
---

{{< toc >}}

The TrueNAS SCALE General Settings section provides settings options for support, graphic user interface, localization, NTP servers, and system configuration. 

![GeneralSettingsSCALE](/images/SCALE/GeneralSettingsSCALE.png "SCALE General Settings Screen")

## Manage Configuration

TrueNAS SCALE allows users to manage the system configuration via uploading/downloading configurations or resetting the system to the default configuration. 

{{< tabs "Configuration Options" >}}
{{< tab "Download File" >}}
The *Download File* option downloads your TrueNAS SCALE's current configuration to the local machine.

When you download the configuration file, you have the option to *Export Password Secret Seed*, which includes encrypted passwords in the configuration file. This allows the configuration file to be restored to a different operating system device where the decryption seed is not already present. Users must physically secure configuration backups containing the seed to prevent unauthorized access or password decryption.

We recommend backing up the system configuration regularly. Doing so preserves settings when migrating, restoring, or fixing the system if it runs into any issues. Save the configuration file each time the system configuration changes.
{{< /tab >}}
{{< tab "Upload File" >}}
The *Upload File* option gives users the ability to replace the current system configuration with any previously saved TrueNAS SCALE configuration file.

{{< hint danger >}}
All passwords will be reset if the uploaded configuration file was saved without the Password Secret Seed.
{{< /hint >}}
{{< /tab >}}
{{< tab "Reset to Defaults" >}}
The *Reset to Defaults* option resets the system's configuration to factory settings. After the configuration resets, the system will restart and users must set a new login password.

{{< hint danger >}}
**Save the system's current configuration with the _Download File_ option before resetting the configuration to default settings.**
 
If you do not save the system configuration before resetting it, you may lose data that was not backed up, and you will not be able to revert to the previous configuration.
{{< /hint >}}
{{< /tab >}}
{{< /tabs >}}

## Support

The *Support* window in the Advanced Settings screen displays the systems general hardware and software specs and contains links to the Documentation Hub, TrueNAS Forums, and enterprise licensing information. 

There are also buttons that allow users to add an enterprise license or report bugs via a Jira support ticket.

## GUI 

The *GUI* window allows users to configure the TrueNAS SCALE web interface address.

| Name | Description |
|------|-------------|
| GUI SSL Certificate | The system uses a self-signed certificate to enable encrypted web interface connections. To change the default certificate, select a different certificate that was created or imported in the **Certificates** section. |
| Web Interface IPv4 Address | Choose a recent IP address to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of 0.0.0.0 (any address) and issues an alert if the specified address becomes unavailable. |
| Web Interface IPv6 Address | Choose a recent IPv6 address to limit the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of 0.0.0.0 (any address) and issues an alert if the specified address becomes unavailable. |
| Web Interface HTTPS Port | Allow configuring a non-standard port to access the GUI over HTTPS. |
| HTTPS Protocols | Cryptographic protocols for securing client/server connections. Select which [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS SCALE can use for connection security. |
| Web Interface HTTP -> HTTPS Redirect | Redirect HTTP connections to HTTPS. A GUI SSL Certificate is required for HTTPS. Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year). This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year. |
| Crash Reporting | Send failed HTTP request data which can include client and server IP addresses, failed method call tracebacks, and middleware log file contents to iXsystems. |
| Usage Collection | Enable sending anonymous usage statistics to iXsystems. |
| Show Console Messages | Display console messages in real time at the bottom of the browser. |

## Localization 

The *Localization* window lets users localize their system to a specific region.

| Name | Description |
|------|-------------|
| Language | Select a language from the drop-down menu. |
| Date Format | Choose a date format. |
| Time Format | Choose a time format. |
| Timezone | Select a time zone. |
| Console Keyboard Map | Select a keyboard layout. |

## NTP Servers 

The *NTP Servers* window allows user to configure Network Time Protocol (NTP) servers, which sync the local system time with an accurate external reference. By default, new installations use several existing NTP servers. TrueNAS SCALE supports adding custom NTP servers.

{{< include file="static/includes/Reference/SystemNTPServersAddFields.md.part" markdown="true" >}}
