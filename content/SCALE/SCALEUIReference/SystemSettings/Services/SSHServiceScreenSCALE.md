---
title: "SSH Service Screen"
description: "This article provides information on the SSH service screens and settings."
weight: 60
alias: 
tags:
 - scalessh
 - scalesftp
 - scalebackup
---

{{< toc >}}


The **System Settings > Services > SSH** screen allows you to set up SSH service on TrueNAS SCALE.

Click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > SSH** configuration screen.

{{< hint danger >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless you require external connections.
See [Security Recommendations]({{< relref "Security.md" >}}) for more security considerations when using SSH.
{{< /hint>}}
## SSH Basic Settings Options

The **Basic Settings** options display by default when you edit the SSH service. 

![ServicesSSHBasicSettingsGeneralOptions](/images/SCALE/22.12/ServicesSSHBasicSettingsGeneralOptions.png "SSH Basic Settings General Options")

**General Options**

| Setting | Description |
|---------|-------------|
| **TCP Port** | Enter the port number for SSH connection requests. |
| **Log in as Root with Password** | Select to allow the root (administration) account to log into TrueNAS with a password. You must set a password for the root user account. Root logins are discouraged! |
| **Allow Password Authentication** | Select to allow all user accounts to login via SSH and the account password. Leave checkbox clear to disable and require exchanging SSH keypairs for client systems attempting to access this system. Warning: when directory services are enabled, this setting grants access to all users the directory service imported. When disabled, authentication requires keys for all users. This requires [additional SSH client and server setup](http://the.earth.li/~sgtatham/putty/0.55/htmldoc/Chapter8.html). |
| **Allow Kerberos Authentication** | Select to allow kerberos authentication. Ensure valid entries exist in **Directory Services > Kerberos Realms** and **Directory Services > Kerberos Keytabs** and the system can communicate with the kerberos domain controller before enabling this option. |
| **Allow TCP Port Forwarding** | Select to allow users to bypass firewall restrictions using the SSH port [forwarding feature](https://www.symantec.com/connect/articles/ssh-port-forwarding). For best security leave this option disabled. |

### SSH Advanced Settings Options
**Advanced Settings** include the **General Options** settings. Advanced settings specify bind interfaces, SFTP settings, ciphers and any additional parameters you want to use.

![ServicesSSHAdvancedSettingsOptions](/images/SCALE/22.12/ServicesSSHAdvancedSettingsOptions.png "SSH Advanced Settings Options")

| Setting | Description |
|---------|-------------|
| **Bind Interfaces** | Select the network interface on your system for SSH to listen on from the dropdown list. Leave all options unselected for SSH to listen on all interfaces. |
| **Compress Connections** | Select to attempt to reduce latency over slow networks. |
| **SFTP Log Level** | Select the [syslog(3)](https://manpages.debian.org/bullseye/manpages-dev/syslog.3.en.html) level of the SFTP server from the dropdown list options. Options are **Quiet**, **Fatal**, **Error**, **Info**, **Verbose**, **Debug**, **Debug2** or **Debug3**. |
| **SFTP Log Facility** | Select the [syslog(3)](https://www.freebsd.org/cgi/man.cgi?query=syslog) facility of the SFTP server option from the dropdown list. Options are **Daemon**, **User**, **Auth** and **Local 0** through **Local7**. |
| **Weak Ciphers** | Select a cypher from the dropdown list. Options are **None** or **AES128-CBC**. To allow more ciphers for [sshd(8)](https://www.freebsd.org/cgi/man.cgi?query=sshd) in addition to the defaults in [sshd_config(5)](https://www.freebsd.org/cgi/man.cgi?query=sshd_config). Use **None** to allow unencrypted SSH connections. Use **AES128-CBC** to allow the 128-bit [Advanced Encryption Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf).<br>  WARNING: These ciphers are security vulnerabilities. Only allow them in a secure network environment. |
| **Auxiliary Parameters** | Enter any [sshd_config(5)](https://manpages.debian.org/bullseye/openssh-server/sshd_config.5.en.html) options not covered in this screen. Enter one option per line. Options added are case-sensitive. Misspellings can prevent the SSH service from starting. |

{{< taglist tag="scalessh" limit="10" >}}
