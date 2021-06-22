---
title: "Advanced Settings"
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

The TrueNAS SCALE Advanced Settings section provides configuration options for the Console, Syslog, Sysctl, Kernel, Cron Jobs, Init/Shutdown Scripts, System Dataset Pool, and Isolated GPU Device(s).

{{< hint warning >}} 
Advanced Settings have reasonable defaults in place. Changing advanced settings can be dangerous when done incorrectly. Please use caution before saving. Make sure you are comfortable with ZFS, FreeBSD, and system [configuration backup and restoration]({{< relref "GeneralSettings.md" >}}) before making any changes. 
{{< /hint >}}

![AdvancedSettingsSCALE](/images/SCALE/AdvancedSettingsSCALE.png "SCALE Advanced Settings Screen")

## Console

The *Console* wondow allows users to configure the [Console Setup menu]({{< relref "Post-installConfiguration.md" >}}).

| Name | Description |
|------|-------------|
| Show Text Console without Password Prompt | Unset to add a login prompt to the system before the console menu is shown. |
| Enable Serial Console | Do not set this if the Serial Port is disabled. |
| Serial Port | The serial console port address. |
| Serial Speed | The speed (in bits per second) the serial port uses. |
| MOTD Banner | The message that displays when a user logs in with SSH. |

## Syslog 

The *Syslog* window lets users configure how and when the system sends log messages to the Syslog server.

| Name | Description |
|------|-------------|
| Use FQDN for Logging | Set to include the Fully-Qualified Domain Name (FQDN) in logs to precisely identify systems with similar hostnames. |
| Syslog Level | When Syslog Server is defined, only logs matching this level are sent. |
| Syslog Server | Remote syslog server DNS hostname or IP address. Nonstandard port numbers can be used by adding a colon and the port number to the hostname, like `mysyslogserver:1928`. Log entries are written to local logs and sent to the remote syslog server. |
| Syslog Transport | [Transport Protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Choosing Transport Layer Security (TLS) also requires selecting a preconfigured system Certificate. |
| Use System Dataset | Store system logs on the system dataset. Unset to store system logs in /var/ on the operating system device. |

## Sysctl

The *Sysctl* window lets users set up tunables that configure kernel parameters at runtime
