---
title: "SSH Service Screen"
description: "This article provides information on configuring the SSH service in SCALE, and using an SFTP connection."
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

{{< hint danger >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless you require external connections.
See [Security Recommendations]({{< relref "Security.md" >}}) for more security considerations when using SSH.
{{< /hint>}}

{{< expand "SSH Tutorial Video" >}}

<!-- {{< embed-video name="scaleangelfishsshaccess" >}} -->

{{< /expand >}}
## Configuring SSH Service

To configure SSH go to **System Settings > Services**, find **SSH**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the basic settings **General Options** configuration screen.

![ServicesSSHBasicSettingsGeneralOptions](/images/SCALE/22.02/ServicesSSHBasicSettingsGeneralOptions.png "SSH Basic Settings General Options")

Configure the options as needed to match your network environment.

We recommend you add these SSH service options in **Auxiliary Parameters**:

* Add `NoneEnabled no` to disable the insecure **none** cipher.
* Increase the `ClientAliveInterval` if SSH connections tend to drop.
* Increase the `ClientMaxStartup` value (**10** is default) when you need more concurrent SSH connections.

Remember to enable the SSH service in **System Settings > Services** after making changes.
To create and store specific [SSH connections and keypairs]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}), go to **Credentials > Backup Credentials**.

## Using SSH File Transfer Protocol (SFTP) 

SFTP (SSH File Transfer Protocol) is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **System Settings > Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > SSH** basic settings configuration screen.

![ServicesSSHBasicSettingsGeneralOptions](/images/SCALE/22.02/ServicesSSHBasicSettingsGeneralOptions.png "SSH Basic Settings General Options")

Select **Allow Password Authentication** and decide if you need **Log in as Root with Password**.
{{< hint warning >}}
SSH with root is a security vulnerability. It allows users to fully control the NAS remotely with a terminal instead of providing SFTP transfer access.
{{< /hint >}}
Review the remaining options and configure them according to your environment or security needs.

### Using SFTP Connections

Open an FTP client (like FileZilla) or command line. 
This article shows using FileZilla as an example.

Using FileZilla, enter `SFTP://{TrueNAS IP} {username} {password} {port 22}`. Where {TrueNAS IP} is the IP address for your TrueNAS system, {username} is the administrator login user name, and {password} is the adminstrator password, and {port 22} to connect.

{{< hint warning >}}
SFTP does not offer chroot locking.
While chroot is not 100% secure, lacking chroot lets users move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS might be the more secure choice.
{{< /hint >}}

{{< taglist tag="scalessh" limit="10" >}}
