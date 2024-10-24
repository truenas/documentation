---
title: "Managing General Settings"
description: "Provides information on configuring GUI options, localizing TrueNAS SCALE to your region and language, and adding NTP servers."
weight: 20
tags:
- settings
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- configuration files
---

The TrueNAS SCALE General Settings section provides settings options for support, graphic user interface, localization, NTP servers, and system configuration.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralScreen.png" alt="General Settings Screen" id="General Settings Screen" >}}

## Support

The **Support** widget shows information about the TrueNAS version and system hardware.
Links to the open source documentation, community forums, and official Enterprise licensing from iXsystems are also provided.

**Add License** opens the sidebar with a field to paste a TrueNAS Enterprise license ([details]({{< relref "AddLicenseProactiveSupport.md" >}})).

**File Ticket** opens a window to provide feedback directly to the development team.
{{< expand "Feedback window" "v" >}}
{{< include file="/static/includes/FeedbackWindow.md" >}}
{{< /expand >}}

## Configuring GUI Options

The **GUI** widget allows users to configure the TrueNAS SCALE web interface address. Click **Settings** to open the **GUI Settings** configuration screen.

### Changing the GUI SSL Certificate

The system uses a self-signed certificate to enable encrypted web interface connections. To change the default certificate, select a different certificate that was created or imported in the **Certificates** section from the **GUI SSL Certificate** dropdown list.

### Setting the Web Interface IP Address

To set the WebUI IP address, if using IPv4 addresses, select a recent IP address from the **Web Interface IPv4 Address** dropdown list. This limits the usage when accessing the administrative GUI. The built-in HTTP server binds to the wildcard address of 0.0.0.0 (any address) and issues an alert if the specified address becomes unavailable. If using an IPv6 address, select a recent IP address from the **Web Interface IPv6 Address** dropdown list.

### Configuring HTTPS Options

To allow configuring a non-standard port to access the GUI over HTTPS, enter a port number in the **Web Interface HTTPS Port** field.

Select the cryptographic protocols for securing client/server connections from the **HTTPS Protocols** dropdown list. Select the [Transport Layer Security (TLS)](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions TrueNAS SCALE can use for connection security.

To redirect HTTP connections to HTTPS, select **Web Interface HTTP -> HTTPS Redirect**. A GUI SSL Certificate is required for HTTPS.
Activating this also sets the [HTTP Strict Transport Security (HSTS)](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) maximum age to 31536000 seconds (one year).
This means that after a browser connects to the web interface for the first time, the browser continues to use HTTPS and renews this setting every year.
A warning displays when setting this function.

{{< include file="/static/includes/AppsVMsNoHTTPS.md" >}}

To send failed HTTP request data which can include client and server IP addresses, failed method call tracebacks, and middleware log file contents to iXsystems, select **Crash Reporting**.

### Sending Usage Statistics to iXsystems
To send anonymous usage statistics to iXsystems, select the **Usage Collection** option.

For more information about what usage data is collected, see the [TrueNAS Data Collection Statement]({{< relref "/GettingStarted/UserAgreements/DataCollectionStatement.md" >}}).

### Showing Console Messages
To display console messages in real time at the bottom of the browser, select the **Show Console Messages** option.

## Localizing TrueNAS SCALE

To change the WebUI on-screen language and set the keyboard to work with the selected language, click **Settings** on the **System > General > Localization** widget. The **Localization Settings** configuration screen opens.

Select the language from the **Language** dropdown list, and then the keyboard layout in **Console Keyboard Map**.

Enter the time zone in **Timezone** and then select the local date and time formats to use.

Click **Save**.

## Adding NTP Servers

The **NTP Servers** widget allows users to configure Network Time Protocol (NTP) servers.
These sync the local system time with an accurate external reference.
By default, new installations use several existing NTP servers. TrueNAS SCALE supports adding custom NTP servers.

## Setting Up System Email

The **Email** widget displays information about current system mail settings.
When configured, an automatic script sends a nightly email to the administrator account containing important information such as the health of the disks.

To configure the system email send method, click **Settings** to open the **Email Options** screen.
Select either [**SMTP**](#smtp) or [**GMail OAuth**](#gmail-oauth) to display the relevant configuration settings.
