---
title: "Syslog Screens"
description: "This article provides information on the advanced system setting **Syslog** widget and configuration screen settings."
weight: 25
aliases:
tags:
 - scalesettings
 - scalesyslog
---


The **System > Advanced** screen includes configuration settings for setting up system logging in SCALE. 

## Syslog Widget
The **Syslog** widget displays the existing system logging settings that specfy how and when the system sends log messages to the syslog server.

![AdvancedSystemSettingsSyslogWidget](/images/SCALE/22.02/AdvancedSystemSettingsSyslogWidget.png "SCALE Advanced Settings Syslog Widget") 

**Configure** opens the **[Syslog](#syslog-configuration-screen)** configuration screen.

### SysLog Configuration Screen
The **Syslog** configuration screen settings specify the logging level the system uses to record system events, the syslog server DNS host name or IP, the transport protocol it uses, and if using TLS, the certificate and certificate authority (CA) for that server, and finally if it uses the system dataset to store the logs.

![SyslogConfigScreen](/images/SCALE/22.02/SyslogConfigScreen.png "SCALE Syslog Settings Screen") 

| Settings | Description |
|----------|-------------|
| **Use FQDN for Logging** | Select to include the fully-qualified domain name (FQDN) in logs to precisely identify systems with similar host names. |
| **Syslog Level** | Select the logging level the syslog server uses when creating system logs; the system only sends logs matching this level. |
| **Syslog Server** | Enter the remote syslog server DNS host name or IP address. add a colon and the port number to the host name to use non-standard port numbers, like *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. |
| **Syslog Transport** | Enter the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Selecing Transport Layer Security (TLS) displays the **Syslog TLS Certificate** and **Syslog TSL Certificate Authority** fields. This requires preconfiguringing both the system certificate and the certificate authority (CA) for the server. |
| **Syslog TLS Certificate** | Displays after selecing **TLS** in **Syslog Transport**. Select the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server TLS certificate from the dropdown list. Select either the default, or add the certificate and CA for the server using the **Credentials > Certificates** screen **Certificates** widget. |
| **Syslog TLS Certificate Authority** | Displays after selecing **TLS** in **Syslog Transport**. Select the TLS CA for the TLS server from the dropdown list. If not using the default, create the CA for the systlog server TLS certificate on the **Credentials > Certificates > Certificate Authorities** screen. |
| **Use System Dataset** | Select to store system logs on the system dataset. Leave clear to store system logs in `/var/` on the operating system device. |

{{< taglist tag="scalesyslog" limit="10" >}}
{{< taglist tag="scalesettings" limit="10" title="Related System Settings Articles" >}}