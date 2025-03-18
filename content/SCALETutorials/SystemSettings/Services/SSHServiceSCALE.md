---
title: "SSH"
description: "Provides information on configuring the SSH service in TrueNAS and using an SFTP connection."
weight: 60
tags:
 - ssh
 - sftp
 - backup
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

The SSH service lets users connect to TrueNAS with the [Secure SHell Transport Layer Protocol](https://tools.ietf.org/html/rfc4253).
When using TrueNAS as an SSH server, the users in the network must use [SSH client software](https://www.bing.com/search?q=SSH%20client%20software) to transfer files with SSH.

{{< hint type=warning >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless you require external connections.
See [Security Recommendations](https://www.truenas.com/docs/solutions/optimizations/security/) for more security considerations when using SSH.
{{< /hint>}}

## Configuring SSH Service

To configure SSH go to **System > Services**, find **SSH**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the basic settings **General Options** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesSSHBasicSettingsGenOptionsSCALE.png" alt="SSH General Options" id="SSH General Options" >}}

Use the **Password Login Groups** and **Allow Password Authentication** settings to allow specific TrueNAS account groups the ability to use password authentication for SSH logins.

Click **Save**. Select **Start Automatically** and enable the SSH service.

## Configuring Advanced SSH Settings
If your configuration requires more advanced settings, click **Advanced Settings**.
The basic options continue to display above the **Advanced Settings** screen.
Configure the options as needed to match your network environment.

{{< trueimage src="/images/SCALE/SystemSettings/SSHServicesAdvancedSettings.png" alt="SSH Advanced Options" id="SSH Advanced Options" >}}

These **Auxiliary Parameters** can be useful when troubleshooting SSH connectivity issues:

* Increase the `ClientAliveInterval` if SSH connections tend to drop.
* Increase the `MaxStartups` value (**10** is default) when you need more concurrent SSH connections.

Remember to enable the SSH service in **System > Services** after making changes.

Create and store SSH connections and keypairs to allow SSH access in **Credentials > Backup Credentials** or by editing an administrative user account. See [Adding SSH Credentials]({{< relref "AddSSHConnectionKeyPair.md" >}}) for more information.

## Using SSH File Transfer Protocol (SFTP)

SFTP (SSH File Transfer Protocol) is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **System > Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > SSH** basic settings configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesSSHBasicSettingsGenOptionsSCALE.png" alt="SSH General Options" id="SSH General Options" >}}

Select **Allow Password Authentication**.

Go to **Credentials > Users**. Click anywhere on the row of the user you want to access SSH to expand the user entry, then click **Edit** to open the **Edit User** configuration screen. Make sure that **SSH password login enabled** is selected. See [Managing Users]({{< relref "managelocalusersscale.md" >}}) for more information.

{{< hint type=danger title="Security Concern" >}}
SSH with root is a security vulnerability. It allows users to fully control the NAS remotely with a terminal instead of providing SFTP transfer access.

Choose a non-root administrative user to allow SSH access.
{{< /hint >}}

Review the remaining options and configure them according to your environment or security needs.

Remember to enable the SSH service in **System > Services** after making changes.

Create and store SSH connections and keypairs to allow SSH access in **Credentials > Backup Credentials** or by editing an administrative user account. See [Adding SSH Credentials]({{< relref "AddSSHConnectionKeyPair.md" >}}) for more information.

TrueNAS shows an error if users activate Global 2FA (Two-Factor Authentication) and attempt to enable password-based SSH authentication without a 2FA token. See [Managing Global 2FA](https://www.truenas.com/docs/SCALETutorials/systemsettings/advanced/manageglobal2fascale/) for more information.

### Using SFTP Connections

Open an FTP client (like FileZilla) or command line.
This article shows using FileZilla as an example.

Using FileZilla, enter `SFTP://{TrueNAS IP} {username} {password} {port 22}`. Where {TrueNAS IP} is the IP address for your TrueNAS system, {username} is the administrator login user name, and {password} is the adminstrator password, and {port 22} to connect.

{{< hint type=important >}}
SFTP does not offer chroot locking.
While chroot is not 100% secure, lacking chroot lets users move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS might be the more secure choice.
{{< /hint >}}
