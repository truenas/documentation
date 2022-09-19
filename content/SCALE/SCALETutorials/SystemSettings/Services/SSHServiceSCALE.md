---
title: "SSH Service Screen"
description: ""
weight: 40
alias: 
tags:
 - scalessh
 - scalesftp
 - scalebackup
---

{{< toc >}}


{{< expand "SSH Video Tutorial" >}}

<!-- {{< embed-video name="scaleangelfishsshaccess" >}} -->

{{< /expand >}}
The SSH service lets users connect to TrueNAS with the [Secure SHell Transport Layer Protocol](https://tools.ietf.org/html/rfc4253).
When using TrueNAS as an SSH server, the users in the network must use [SSH client software](https://www.bing.com/search?q=SSH%20client%20software) to transfer files with SSH.

{{< hint danger >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless you require external connections.
See [Security Recommendations]({{< relref "Security.md" >}}) for more security considerations when using SSH.
{{< /hint>}}

Activate or configure the SSH service on the **System Settings > Services** page.

To configure SSH go to **System Settings > Services**, find **SSH**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHSCALE](/images/SCALE/ServicesSSHSCALE.png "SSH Options")

Configure the options as needed to match your network environment.
{{< expand "SSH Service Fields" "v" >}}
{{< include file="static/includes/Reference/ServicesSSHFields.md.part" markdown="true" >}}
{{< /expand >}}

We recommend these additional SSH service options:

* Add `NoneEnabled no` to **Auxiliary Parameters** to disable the insecure *none* cipher.
* Increase the **ClientAliveInterval** if SSH connections tend to drop.
* Increase the **ClientMaxStartup** value (**10** is default) when you need more concurrent SSH connections.

Remember to enable the SSH service in **System Settings > Services** after making changes.
To create and store specific [SSH connections and keypairs]({{< relref "/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}), go to **Credentials > Backup Credentials**.

## SFTP 

SFTP (SSH File Transfer Protocol) is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **System Settings > Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHSCALE](/images/SCALE/ServicesSSHSCALE.png "SSH Options")

Set **Allow Password Authentication** and decide if you need **Log in as Root with Password**.
{{< hint warning >}}
SSH with root is a security vulnerability. It allows users to fully control the NAS remotely with a terminal instead of providing SFTP transfer access.
{{< /hint >}}
Review the remaining options and configure them according to your environment or security needs.

{{< include file="static/includes/Reference/ServicesSSHFields.md.part" markdown="true" >}}

### SFTP Connections

Open an FTP client (like FileZilla) or command line. 
This article shows using FileZilla as an example.
Using FileZilla, enter *SFTP://'TrueNAS IP'*, *'username'*, *'password'*, and port **22** to connect.

{{< hint warning >}}
SFTP does not offer chroot locking.
While chroot is not 100% secure, lacking chroot lets users move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS might be the more secure choice.
{{< /hint >}}

{{< taglist tag="scalessh" limit="10" >}}

{{< taglist tag="scalebackup" limit="10" title="Related Backup Credential Articles" >}}
