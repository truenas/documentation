---
title: "Configuring SFTP"
description: "Configuring SSH File Transfer Protocol (SFTP) service on your TrueNAS."
weight: 20
tags:
- coreftp
- coresftp
- coressh
---


## Configuring SFTP Service

SSH File Transfer Protocol (SFTP), is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **Services**, find the **SSH** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHOptions](/images/CORE/12.0/ServicesSSHOptions.png "SSH Options")

Select **Allow Password Authentication**.  

{{< hint type=important >}} 
Evaluate **Log in as Root with Password** for your security environment: 
SSH with root is a security vulnerability. It allows more than SFTP transfer access. SSH with root also allows full remote control over the NAS with a terminal.
{{< /hint >}}

Review the remaining options and configure according to your environment or security needs.

### SSH Service Options

Use the **SSH** screen to configure the system for SFTP. 
See [ServicesSSH]({{< relref "/CORE/UIReference/Services/ServicesSSH.md" >}}) for information on SSH screen settings.

### SFTP Connections

Open FileZilla or another FTP client, or command line.
This example uses FileZilla.
Using FileZilla, enter `SFTP://TrueNAS IP`, `username`, `password`, and port `22` to connect. Where `TrueNAS IP` is the IP address for your system, and `username` and `password` are those you use to connect to the FTP client. Or enter `SFTP://'TrueNAS IP'`, `'username'`, `'password'`, and port `22` to connect.

{{< hint type=important >}}
Chroot is not 100% secure, but SFTP does not have chroot locking. 
The lack of chroot allows users to move up to the root directory. They can view internal system information. If this level of access is a concern, FTP with TLS may be the more secure choice.
{{< /hint >}}

### SFTP in a TrueNAS Jail

Setting up a jail and enabling SSH is another way to allow SFTP access. This does not grant read access to other areas of the NAS itself.

{{< expand "Setting up a Jail for SFTP" "v" >}}
Go to **Jails > Add**.
Provide a name for the jail and pick a target FreeBSD image.
This example uses 11.3.

Select the networking options for either DHCP or a static IP and confirm to create.

![JailsAddNetworking](/images/CORE/12.0/JailsAddNetworking.png "Jail Networking Options")

After the jail is created, click the expand icon **>** on the right-hand side of the jail to open it.
Click **START** and open **SHELL**.

Create a user in the jail. 
Enter command `adduser`. Follow the prompts. Include the password and home directory location.
When complete, the jail asks to confirm the credentials.

![JailsShellUserAdd](/images/CORE/12.0/JailsShellUserAdd.png "Adding a new user to a jail")

Enable SSH by editing the <file>/etc/rc.conf</file> file.
Enter command `vi /etc/rc.conf` or `ee /etc/rc.conf` depending on preference, add `sshd_enable = "YES"` to the file, save, and exit.
Enter command `service sshd enabled` to enable the service (enabled vs start indicates whether sshd starts one time or on every reboot).

![JailsShellEditRCConf](/images/CORE/12.0/JailsShellEditRCConf.png "Enabling SSH in a jail")

Using an FTP client, such as FileZilla, log in with the jail IP address and user credentials. It is like SSH on TrueNAS. Browsing to other folders and locations beyond the user home directory is possible. But unlike running on TrueNAS directly, only the components of the jail are available.

![FilezillaJailConnectSFTP](/images/CORE/FilezillaJailConnectSFTP.png "Filezilla SFTP Connect to TrueNAS Jail")
{{< /expand >}}

{{< taglist tag="coressh" limit="10" >}}
