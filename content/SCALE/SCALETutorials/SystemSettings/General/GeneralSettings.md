---
title: "Managing General Settings"
description: "This article provides information on configuring GUI options, localizing TrueNAS SCALE to your region and language, and adding NTP servers."
weight: 20
aliases:
tags:
 - scalesettings
---

{{< toc >}}

The TrueNAS SCALE General Settings section provides settings options for support, graphic user interface, localization, NTP servers, and system configuration. 

![GeneralSettingsSCALE](/images/SCALE/GeneralSettingsSCALE.png "SCALE General Settings Screen")

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

{{< include file="/_includes/AppsVMsNoHTTPS.md" type="page" >}}

To send failed HTTP request data which can include client and server IP addresses, failed method call tracebacks, and middleware log file contents to iXsystems, select **Crash Reporting**.

### Sending Usage Statistics to iXsystems
To send anonymous usage statistics to iXsystems, select the **Usage Collection** option.

### Showing Console Messages
To display console messages in real time at the bottom of the browser, select the **Show Console Messages** option.

## Localizing TrueNAS SCALE

To change the WebUI on-screen language and set the keyboard to work with the selected language, click **Settings** on the **System Settings > General > Localization** widget. The **Localization Settings** configuration screen opens.

Select the language from the **Language** dropdown list, and then the keyboard layout in **Console Keyboard Map**.

Enter the time zone in **Timezone** and then select the local date and time formats to use.

Click **Save**.

## Adding NTP Servers 

The **NTP Servers** widget allows users to configure Network Time Protocol (NTP) servers. 
These sync the local system time with an accurate external reference. 
By default, new installations use several existing NTP servers. TrueNAS SCALE supports adding custom NTP servers.

{{< taglist tag="scalesettings" limit="10" >}}
