---
title: "Managing System Logging"
description: "Provides information on setting up or changing syslog server settings, the level of logging, the information included in the logs, and using TLS as the transport protocol."
weight: 20
aliases:
tags:
 - alerts
 - settings
 - syslog
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

{{< include file="/static/includes/AdvancedSettingsWarningSCALE.md" >}}

By default, TrueNAS writes system logs to the system boot device.
The **Syslog** widget on the **System > Advanced Settings** screen allows users determine how and when the system sends log messages to a connected syslog server or server array of two servers.
Each syslog server can have its own host, transport, and TLS certificate settings.

The **Syslog** widget displays the existing system logging settings.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsSyslogWidget.png" alt="Syslog Widget" id="Syslog Widget" >}}

{{< hint type=note >}}
Before configuring your syslog server to use TLS as the **Syslog Transport** method, first add a certificate(s) to the TrueNAS system.
Go to **Credentials > Certificates** and use the **Certificates** widget to verify you have the required certificates, and if not present, to import them.
{{< /hint >}}

Click **Configure** to open the **Syslog** configuration screen.
The **Syslog** configuration screen settings specify the logging level the system uses to record system events, the syslog server DNS host name or IP, the transport protocol it uses, and if using TLS, the certificate for that server, and finally if it uses the system dataset to store the logs.

{{< trueimage src="/images/SCALE/SystemSettings/AddingASyslogServer.png" alt="Adding a Syslog Server" id="Adding a Syslog Server" >}}

Select **Use FQDN for Logging** to include the fully-qualified domain name (FQDN) in logs to precisely identify systems with similar host names.

Select the minimum log priority level to send to the remote syslog server (or array) from the **Syslog Level** dropdown list.
The system only sends logs at or above this level.

Enter the remote syslog server DNS host name or IP address in the Syslog server **Host** field.
To use non-standard port numbers like *mysyslogserver:1928*, add a colon and the port number to the host name.
Log entries are written to local logs and sent to the remote syslog server.

Select the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection in **Transport**.
Selecting Transport Layer Security (TLS) shows the **Syslog TLS Certificate** field.
Select the certificate from the **TLS Certificate** dropdown list.

To add a second syslog server, click **Add Syslog Server** again and repeat the steps above.

Select **Include Audit Logs** to enable audit logging.

Click **Save**.