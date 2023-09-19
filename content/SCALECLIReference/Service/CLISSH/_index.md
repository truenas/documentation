---
title: "SSH"
description: "Provides information about the service ssh namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 100
draft: false
aliases:
tags:
 - "scalecliservice"
---

{{< toc >}}

## SSH Namespace

The **ssh** namespace has three commands and is based on SSH service functions found in the SCALE API and web UI.
It provides access to SSH service management methods through the **ssh** commands.

## SSH Commands

The following **ssh** commands allow you to view and edit ssh properties.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Bindiface_Choices Command

The `bindiface_choices` command returns a table of available interface for SSH to listen on.

{{< expand "Using the Bindiface_Choices Command">}}
#### Description
The `bindiface_choices` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of available interfaces when successful.

#### Usage
From the CLI prompt, enter:

`service ssh bindiface_choices`

{{< expand "Command Example" "v" >}}
````
service ssh bindiface_choices
+------------+------------+
|       eno1 | eno1       |
|       eno2 | eno2       |
| enp179s0f0 | enp179s0f0 |
| enp179s0f1 | enp179s0f1 |
| enp179s0f2 | enp179s0f2 |
| enp179s0f3 | enp179s0f3 |
+------------+------------+
````
{{< /expand >}}
{{< /expand >}}

### Config Command

The `config` command returns a table with current SSH settings. 

{{< expand "Using the Config Command">}}
#### Description
The `config` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of current SSH service settings when successful.

#### Usage
From the CLI prompt, enter:

`service smart config`

{{< expand "Command Example" "v" >}}
````
ssh config
+---------------------------+------------------------------------------------------------------+
|                        id | 1                                                                |
|                 bindiface | <empty list>                                                     |
|                   tcpport | 22                                                               |
|                 rootlogin | false                                                            |
|                adminlogin | true                                                             |
|              passwordauth | true                                                             |
|              kerberosauth | false                                                            |
|                    tcpfwd | false                                                            |
|               compression | false                                                            |
|                privatekey |                                                                  |
|            sftp_log_level |                                                                  |
|         sftp_log_facility |                                                                  |
|              host_dsa_key | LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQ... |
|          host_dsa_key_pub | c3NoLWRzcyBBQUFBQjNOemFDMWtjM01BQUFDQkFQL3dkaXM5NUdWeHUySXVtb... |
|     host_dsa_key_cert_pub | <null>                                                           |
|            host_ecdsa_key | LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQ... |
|        host_ecdsa_key_pub | ZWNkc2Etc2hhMi1uaXN0cDI1NiBBQUFBRTJWalpITmhMWE5vWVRJdGJtbHpkS... |
|   host_ecdsa_key_cert_pub | <null>                                                           |
|          host_ed25519_key | LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQ... |
|      host_ed25519_key_pub | c3NoLWVkMjU1MTkgQUFBQUMzTnphQzFsWkRJMU5URTVBQUFBSUdFa1hFdUloa... |
| host_ed25519_key_cert_pub | <null>                                                           |
|                  host_key | <null>                                                           |
|              host_key_pub | <null>                                                           |
|              host_rsa_key | LS0tLS1CRUdJTiBPUEVOU1NIIFBSSVZBVEUgS0VZLS0tLS0KYjNCbGJuTnphQ... |
|          host_rsa_key_pub | c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFBREFRQUJBQUFCZ1FDcDBmb09LY... |
|     host_rsa_key_cert_pub | <null>                                                           |
|              weak_ciphers | AES128-CBC                                                       |
|                           | NONE                                                             |
|                   options |                                                                  |
+---------------------------+------------------------------------------------------------------+
````
{{< /expand >}}
{{< /expand >}}

### Update Command
The `update` command allows you to update SSH service settings.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has 12 optional properties; `bindiface`, `tcpport`, `rootlogin`, `adminlogin`, `passwordauth`, `kerberosauth`, `tcpfwd`, `compression`, `sftp_log_level`, `sftp_log_facility`, `weak_ciphers`, and `options`.
See **Update Command Properties** below for details.
After entering `update`, you must include at least one property to update. Separate additional properties with a space.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a blank line when successful.

{{< expand "Update Command Properties">}}
{{< truetable >}}
| Property            | Description                                                                                 | Syntax Example|
|---------------------|---------------------------------------------------------------------------------------------|-------------------------------------------------------------|
| `bindiface`         | The interfaces for SSH to listen on. Leave empty for SSH to listen on all interfaces.       | <code>bindiface=[<i>interface</i>, <i>interface</i>]</code> |
| `tcpport`           | The port you want to use for SSH connection requests.                                       | <code>tcpport=<i>number</i></code> |
| `rootlogin`         | Allows root logins.                                                                         | <code>rootlogin=<i>true</i>/<i>false</i></code> |
| `adminlogin`        | Allows admin logins.                                                                        | <code>adminlogin=<i>true</i>/<i>false</i></code> |
| `passwordauth`      | Allows using a password to authenticate the SSH login.                                      | <code>passwordauth=<i>true</i>/<i>false</i></code> |
| `kerberosauth`      | Allows Kerberos authentication using valid directory services entries.                      | <code>kerberosauth=<i>true</i>/<i>false</i></code> |
| `tcpfwd`            | Allows users to bypass firewall restrictions using the SSH port [forwarding feature](https://www.symantec.com/connect/articles/ssh-port-forwarding).  | <code>tcpfwd=<i>true</i>/<i>false</i></code> |
| `compression`       | When enabled, the system attempts to reduce latency over slow networks.                     | <code>compression=<i>true</i>/<i>false</i></code> |
| `sftp_log_level`    | Select the [syslog(3)](https://man7.org/linux/man-pages/man3/syslog.3.html) level of the SFTP server.                                       | <code>sftp_log_level=<i>LEVEL</i></code> |
| `sftp_log_facility` | Select the [syslog(3)](https://man7.org/linux/man-pages/man3/syslog.3.html) facility of the SFTP server.                                    | <code>sftp_log_facility=<i>FACILITY</i></code> |
| `weak_ciphers`      | Allow more ciphers for [sshd(8)](https://man7.org/linux/man-pages/man8/sshd.8.html) in addition to the defaults in [sshd_config(5)](https://man7.org/linux/man-pages/man5/sshd_config.5.html). | <code>weak_ciphers=[<i>"CIPHER"</i>, <i>"CIPHER"</i>]</code> |
| `options`           | Additional [sshd_config(5)](https://man7.org/linux/man-pages/man5/sshd_config.5.html) options                                                    | <code>options=<i>options</i></code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>service ssh update <i>property</i>=<i>value</i></code>

Where:
* *property* is the property you want to update.
* *value* is the value you want to specify for the *property*.

{{< expand "Command Example" "v" >}}
```
service ssh update bindiface=[] tcpport=22 adminlogin=true weak_ciphers=["NONE", "AES128-CBC"]
```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scalecliservice" limit="10" title="Related CLI SSH Articles" >}}