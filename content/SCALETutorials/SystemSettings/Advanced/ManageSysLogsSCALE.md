---
title: "Managing System Logging"
description: "Provides information on setting up or changing the syslog server, the level of logging and the information included in the logs, and using TLS as the transport protocol."
weight: 20
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
The **Syslog** widget on the **System > Advanced Settings** screen allows users determine how and when the system sends log messages to a connected syslog server.
The **Syslog** widget displays the existing system logging settings.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsSyslogWidget.png" alt="Syslog Widget" id="Syslog Widget" >}}

{{< hint type=note >}}
Before configuring your syslog server to use TLS as the **Syslog Transport** method, first make sure you add a certificate and certificate authority (CA) to the TrueNAS system. Go to **Credentials > Certificates** and use the **Certificate Authority (CA)** and **Certificates** widgets to verify you have the required certificates or to add them.
{{< /hint >}}

Click **Configure** to open the **Syslog** configuration screen.
The **Syslog** configuration screen settings specify the logging level the system uses to record system events, the syslog server DNS host name or IP, the transport protocol it uses, and if using TLS, the certificate and certificate authority (CA) for that server, and finally if it uses the system dataset to store the logs.

{{< trueimage src="/images/SCALE/SystemSettings/SyslogConfigScreen.png" alt="Syslog Settings Screen" id="Syslog Settings Screen" >}}

Enter the remote syslog server DNS host name or IP address in **Syslog Server**. To use non-standard port numbers like *mysyslogserver:1928*, add a colon and the port number to the host name. Log entries are written to local logs and sent to the remote syslog server.

Enter the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection in **Syslog Transport**. Selecting Transport Layer Security (TLS) displays the **Syslog TLS Certificate** and **Syslog TSL Certificate Authority** fields.

Next, select the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server TLS certificate from the **Syslog TLS Certificate** dropdown list, and select the TLS CA for the TLS server from the **Syslog TLS Certificate Authority** dropdown list.

Select **Use FQDN for Logging** to include the fully-qualified domain name (FQDN) in logs to precisely identify systems with similar host names.

Select the minimum log priority level to send to the remote syslog server from **Syslog Level** the dropdown list.
The system only sends logs at or above this level.

Click **Save**.
