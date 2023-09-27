---
title: "SSH Service Screen"
description: "Provides information on the SSH service screens and settings."
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

{{< hint type=warning >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless you require external connections.
See [Security Recommendations](https://www.truenas.com/docs/solutions/optimizations/security/) for more security considerations when using SSH.
{{< /hint>}}
## SSH Basic Settings Options

The **Basic Settings** options display by default when you edit the SSH service.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesSSHBasicSettingsGenOptionsSCALE.png" alt="SSH Basic Settings General Options" id="SSH Basic Settings General Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **TCP Port** | Enter the port number for SSH connection requests. |
| **Password Login Groups** | List of TrueNAS account groups allowed to use a password for logging in to the system with SSH. Click in the field to see a list of current account groups. Begin typing in the field to filter the groups list. Left click a list item to add it to the field. Click the <span class="iconify" data-icon="mdi:close-circle"></span> for an entry to remove it from the field. |
| **Allow Password Authentication** | Select to enable and allow using a password to authenticate the SSH login. If disabled (not selected), authentication changes to require [SSH keys]({{< relref "AddSSHConnectionKeyPair.md" >}}) for all users. This requires additional setup for both the SSH client and server. **Warning:** when directory services are enabled, this setting grants access to all users the directory service imported. |
| **Allow Kerberos Authentication** | Select to allow Kerberos authentication. Ensure valid entries exist in **Directory Services > Kerberos Realms** and **Directory Services > Kerberos Keytabs** and the system can communicate with the Kerberos domain controller before enabling this option. |
| **Allow TCP Port Forwarding** | Select to allow users to bypass firewall restrictions using the SSH port [forwarding feature](https://www.symantec.com/connect/articles/ssh-port-forwarding). For best security leave disabled. |
{{< /truetable >}}
### SSH Advanced Settings Options
**Advanced Settings** include the **General Options** settings. Advanced settings specify bind interfaces, SFTP settings, ciphers and any additional parameters you want to use.

{{< trueimage src="/images/SCALE/SystemSettings/SSHServicesAdvancedSettings.png" alt="SSH Advanced Settings Options" id="SSH Advanced Settings Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Bind Interfaces** | Select the network interface configured on your system for SSH to listen on from the dropdown list. Leave all options unselected for SSH to listen on all interfaces. |
| **Compress Connections** | Select to attempt to reduce latency over slow networks. |
| **SFTP Log Level** | Select the [syslog(3)](https://manpages.debian.org/bullseye/manpages-dev/syslog.3.en.html) level of the SFTP server from the dropdown list. Options are **Quiet**, **Fatal**, **Error**, **Info**, **Verbose**, **Debug**, **Debug2** or **Debug3**. |
| **SFTP Log Facility** | Select the [syslog(3)](https://www.freebsd.org/cgi/man.cgi?query=syslog) facility of the SFTP server option from the dropdown list. Options are **Daemon**, **User**, **Auth** and **Local 0** through **Local7**. |
| **Weak Ciphers** | Select a cypher from the dropdown list. Options are **None** or **AES128-CBC**. To allow more ciphers for [sshd(8)](https://man7.org/linux/man-pages/man8/sshd.8.html) in addition to the defaults in [sshd_config(5)](https://man7.org/linux/man-pages/man5/sshd_config.5.html). Use **None** to allow unencrypted SSH connections. Use **AES128-CBC** to allow the 128-bit [Advanced Encryption Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf).<br>  WARNING: These ciphers are security vulnerabilities. Only allow them in a secure network environment. |
| **Auxiliary Parameters** | Enter any [sshd_config(5)](https://man7.org/linux/man-pages/man5/sshd_config.5.html) options not covered in this screen. Enter one option per line. Options added are case-sensitive. Misspellings can prevent the SSH service from starting. |
{{< /truetable >}}

{{< taglist tag="scalessh" limit="10" >}}
