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

The *Support* window displays the systems general hardware and software specs and contains links to the [Documentation Hub](https://www.truenas.com/docs/), [TrueNAS Forums](https://www.truenas.com/community/), and offers [TrueNAS Licensing](https://www.ixsystems.com/support/) information. 

![GeneralSettingsSCALESupport](/images/SCALE/GeneralSettingsSCALESupport.png "SCALE General Settings Support View")

{{< tabs "Support Options" >}}
{{< tab "Add License" >}}

For users with a valid TrueNAS license, click **Add License**.  Copy your license into the box and click **Save**.  

![GeneralSettingsSCALESupportLicenseEntry](/images/SCALE/GeneralSettingsSCALESupportLicenseEntry.png "SCALE General Settings Support License Entry")

You will be prompted to reload the page for the license to take effect, click **RELOAD NOW**.  Log back into the WebUI where the **End User License Agreement (EULA)** will be displayed.  Read it thoroughly and completely.  Once finished, click **I AGREE**.  The system information will be updated to reflect the licensing specifics for the system.

![GeneralSettingsSCALESupportLicenseComplete](/images/SCALE/GeneralSettingsSCALESupportLicenseComplete.png "SCALE General Settings Support License Entry Complete")

Silver and Gold level Support customers can also enable Proactive Support on their hardware to automatically notify iXsystems if an issue occurs. To find more details about the different Warranty and Service Level Agreement (SLA) options available, see [iXsystems Support](https://www.ixsystems.com/support/).

Once the system is ready to be in production, update the status by checking the **This is a production system** checkbox and click the **Proceed** button. This will send an email to iXsystems declaring that the system is in production. TrueNAS has an option to include a initial debug with the email that could assist support in the future.

{{< /tab >}}
{{< tab "File Ticket" >}}

TrueNAS SCALE users are encouraged to report bugs and vote for or suggest new TrueNAS features in the project Jira instance. Have questions? We recommend searching through the software documentation and community resources for answers.

If you encounter a bug or other issue while using TrueNAS SCALE, create a bug report in the [TrueNAS Jira Project](https://jira.ixsystems.com/projects/NAS/). The web interface provides a form to report issues without logging out. We recommend searching the project first to see if aother user already reported the issue. You must have [a Jira account](https://jira.ixsystems.com/secure/Signup!default.jspa) to create a bug ticket.

To report an issue using the web interface, click **File Ticket**.

![GeneralSettingsSCALESupportJiraTicketCreate](/images/SCALE/GeneralSettingsSCALEJiraTicketCreate.png "SCALE General Settings Jira Ticket Creation")

Click **Login to JIRA** and enter your credentials in the fields provided.  After successfully logging in, choose **Allow** for TrueNAS to have read and write access to your data on the Jira site.  A token will be added to the OAuth section of this form.  

![GeneralSettingsSCALESupportJiraLogin](/images/SCALE/GeneralSettingsSCALESupportJiraLogin.png "SCALE General Settings Jira Login")

![GeneralSettingsSCALESupportJiraLogin2](/images/SCALE/GeneralSettingsSCALESupportJiraLogin2.png "SCALE General Settings Jira Login Token")

Once logged into Jira, select either *Bug* or *Feature* as the **Type** of ticket to create, then choose the appropriate *Category* for your request. *Attach Debug* should be checked whenever possible as this gives the TrueNAS Team pertinent information about the system and what could be causing any issues.  If the debug file is too large to attach to your ticket, the following will be displayed:

![GeneralSettingsSCALEJiraTicketDebugToLarge](/images/SCALE/GeneralSettingsSCALEJiraTicketDebugToLarge.png "SCALE General Settings Debug To Large To Attach")  

Provide a brief summary of the issue under *Subject*. For *Description*, outline as thoroughly as possible the reason for submitting the ticket.  Attach any applicable screenshots and click **Save**.

![GeneralSettingsSCALEJiraTicketCompletion](/images/SCALE/GeneralSettingsSCALEJiraTicketCompletion.png "SCALE General Settings Jira Ticket Completion")

Once the ticket has been successfully generated, view it by clicking the link provided in the WebUI.

![GeneralSettingsSCALEJiraTicketLink](/images/SCALE/GeneralSettingsSCALEJiraTicketLink.png "SCALE General Settings Jira Ticket Link")

{{< /tab >}}
{{< tab "Proactive Support" >}}

Silver/Gold Coverage Customers can enable iXsystems Proactive Support.  This feature automatically emails iXsystems when certain conditions occur in a TrueNAS system.  To configure Proactive Support, click the **Get Support** dropdown and select *Proactive Support*.

![GeneralSettingsSCALEProactiveSupport](/images/SCALE/GeneralSettingsSCALEProactiveSupport.png "SCALE General Settings Proactive Support")

Complete all available fields and ensure the **Enable iXsystems Proactive Support** box is checked, click **Save**.

![GeneralSettingsSCALEProactiveSupportForm](/images/SCALE/GeneralSettingsSCALEProactiveSupportForm.png "SCALE General Settings Proactive Support Form")

{{< /tab >}}
{{< /tabs >}}

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
