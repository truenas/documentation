---
title: "Configuring SSH Service"
description: "This article provides information on configuring the SSH service in TrueNAS SCALE and using an SFTP connection."
weight: 60
alias: 
tags:
 - scalessh
 - scalesftp
 - scalebackup
---

{{< toc >}}


The SSH service lets users connect to TrueNAS with the [Secure SHell Transport Layer Protocol](https://tools.ietf.org/html/rfc4253).
When using TrueNAS as an SSH server, the users in the network must use [SSH client software](https://www.bing.com/search?q=SSH%20client%20software) to transfer files with SSH.

{{< hint type=warning >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless you require external connections.
See [Security Recommendations]({{< relref "Security.md" >}}) for more security considerations when using SSH.
{{< /hint>}}

## Configuring SSH Service

To configure SSH go to **System Settings > Services**, find **SSH**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the basic settings **General Options** configuration screen.

![ServicesSSHBasicSettingsGenOptionsSCALE](/images/SCALE/22.12/ServicesSSHBasicSettingsGenOptionsSCALE.png "SSH Basic Settings General Options") 

To allow SSH for the admin user, select **Log in as Admin with Password** if not already selected.
To allow SSH for the root user, select **Log in as Root with Password**.
Select **Allow Password Authentication** to allow password authentication for the SSH login.

Click **Save**. Select **Start Automatically** and enable the SSH service.

## Configuring Advanced SSH Settings
If your configuration requires more advanced settings, click **Advanced Settings**.  The basic options display at the top of the **Advanced Settings** screen. 
Configure the options as needed to match your network environment.

![SSHServicesAdvancedSettings](/images/SCALE/22.12/SSHServicesAdvancedSettings.png "SSH Settings Advanced Options") 

We recommend you add these SSH service options in **Auxiliary Parameters**:

* Increase the `ClientAliveInterval` if SSH connections tend to drop.
* Increase the `MaxStartups` value (**10** is default) when you need more concurrent SSH connections.

To configure [ciphers](https://man7.org/linux/man-pages/man5/sshd_config.5.html) to allow or disallow use `ssh -Q cipher` to display a list then add them, separating each with a comma (,). Include the dash (-) before the cipher to exclude from the default set. 

Remember to enable the SSH service in **System Settings > Services** after making changes.
To create and store specific [SSH connections and keypairs]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}), go to **Credentials > Backup Credentials**.

## Using SSH File Transfer Protocol (SFTP) 

SFTP (SSH File Transfer Protocol) is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **System Settings > Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > SSH** basic settings configuration screen.

![ServicesSSHBasicSettingsGenOptionsSCALE](/images/SCALE/22.12/ServicesSSHBasicSettingsGenOptionsSCALE.png "SSH Basic Settings General Options") 

Select **Allow Password Authentication** and decide if you need **Log in as Root with Password** and **Log in as Admin with Password**.
{{< hint type=important >}}
SSH with root is a security vulnerability. It allows users to fully control the NAS remotely with a terminal instead of providing SFTP transfer access.
{{< /hint >}}
Review the remaining options and configure them according to your environment or security needs.

### Using SFTP Connections

Open an FTP client (like FileZilla) or command line. 
This article shows using FileZilla as an example.

Using FileZilla, enter `SFTP://{TrueNAS IP} {username} {password} {port 22}`. Where {TrueNAS IP} is the IP address for your TrueNAS system, {username} is the administrator login user name, and {password} is the adminstrator password, and {port 22} to connect.

{{< hint type=important >}}
SFTP does not offer chroot locking.
While chroot is not 100% secure, lacking chroot lets users move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS might be the more secure choice.
{{< /hint >}}

{{< taglist tag="scalessh" limit="10" >}}
