---
title: "FTP, SFTP, and TFTP"
weight: 20
---

The [File Transfer Protocol (FTP)](https://tools.ietf.org/html/rfc959) is a simple option for data transfers.
The additional SSH and Trivial FTP options provide secure or simple config file transfer methods, respectively.

Options for configuring **FTP**, **SSH**, and **TFTP** are in the system **Services**.
Click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i> to configure the related service.

{{< tabs "FTP Services Configurations" >}}
{{< tab "FTP" >}}
FTP requires a new dataset and local user account.

Go to **Storage > Pools** to add a new dataset.
![StoragePoolsAddDataset](</images/CORE/12.0/StoragePoolsAddDataset.png "Adding a new Dataset")

Next, go to **Accounts > Users > Add** to create a local user on the TrueNAS.
![AccountsUsersAdd](</images/CORE/12.0/AccountsUsersAdd.png "Adding a new User Account")

Assign a user name, password, and link the newly created dataset for the FTP share as the home directory of the user.
This can be done on a per user basis, or a global account for FTP can also be created, for example OurOrgFTPacnt, etc.

Return to **Storage > Pools**, find the new dataset, and click <i class="fa fa-ellipsis-v"></i> > *Edit Permissions*.
Set the **Owner** fields (user and group) to the newly created user account.
Be sure to click *Apply User* and *Apply Group* before saving.

![StoragePoolsEditPermissionsBasic](/images/CORE/12.0/StoragePoolsEditPermissionsBasic.png "Basic Permissions Editor")

### Service Configuration

To configure FTP, go to the **Services** page, find the **FTP** entry, and click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![Services FTP Options](/images/CORE/12.0/ServicesFTPOptions.png "Services FTP Options")

Configure the options according to your environment and security considerations.

{{< include file="static/includes/ServicesFTPFields.md.part" markdown="true" >}}

Ensure *chroot* is enabled as this helps confine FTP sessions to a local user's home directory and allow *Local User Login*.

Unless necessary, do NOT allow anonymous or root access.
For better security, enable TLS when possible.
This is effectively [FTPS](https://tools.ietf.org/html/rfc4217).
When FTP is exposed to a WAN, enable TLS.

### FTP Connection

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images here show using [FileZilla](https://filezilla-project.org/client_features.php), a free option.

The user name and password are those of the local user account on the TrueNAS.
The default directory is the same as the user's <file>/home</file> directory.
After connecting, directories can be created and files uploaded and downloaded.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")

{{< /tab >}}
{{< tab "SFTP" >}}
SFTP or SSH File Transfer Protocol, is available by enabling SSH remote access to the TrueNAS system.
SFTP is more secure than standard FTP as it applies SSL encryption on all transfers by default.

Go to **Services**, find the **SSH** entry, and click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![ServicesSSHOptions](/images/CORE/12.0/ServicesSSHOptions.png "SSH Options")

Set *Allow Password Authentication* and decide if *Log in as Root with Password* is needed.
SSH with root is a security vulnerability as it allows full remote control over the NAS with a terminal, not just SFTP transfer access.
Review the remaining options and configure according to your environment or security needs.

{{< expand "SSH Service Options" "v" >}}
{{< include file="static/includes/ServicesSSHFields.md.part" markdown="true" >}}
{{< /expand >}}

### SFTP Connections

Similar to the FTP setup, open FileZilla or another FTP client, or command line.
This article shows using FileZilla as an example.
Using FileZilla, enter *SFTP://'TrueNAS IP'*, *'username'*, *'password'*, and port **22** to connect.

{{< hint warning >}}
SFTP does not have chroot locking.
While chroot is not 100% secure, the lack of chroot allows users to easily move up to the root directory and view internal system information.
If this level of access is a concern, FTP with TLS may be the more secure choice.
{{< /hint >}}

### SFTP in a TrueNAS Jail

Another way to allow SFTP access without granting read access to other areas of the NAS itself is to set up a jail and enable SSH.

Go to **Jails > Add**.
Provide a name for the jail and pick a target FreeBSD image.
11.3 was used for the purpose of this guide.

Set the networking options to either DHCP or a static IP and confirm to create.

![JailsAddNetworking](/images/CORE/12.0/JailsAddNetworking.png "Jail Networking Options")

After the is created, open the jail menu by clicking the expand icon **>** on the right-hand side of the jail.
Click *START* and open the *SHELL*.

Similar to the initial FTP setup, create a user in the jail.
Enter `adduser` and follow the prompts including the password and home directory location.
When complete, the jail asks to confirm the credentials.

![JailsShellUserAdd](/images/CORE/12.0/JailsShellUserAdd.png "Adding a new user to a jail")

Enable SSH by editing the <file>/etc/rc.conf</file> file.
Type `vi /etc/rc.conf` or `ee /etc/rc.conf` depending on preference, add `sshd_enable = "YES"` to the file, save, and exit.
Type `service sshd enabled` to enable the service (enabled vs start indicates whether sshd starts one time or on every reboot).

![JailsShellEditRCConf](/images/CORE/12.0/JailsShellEditRCConf.png "Enabling SSH in a jail")

Using an FTP client, such as FileZilla, log in with the jail IP address and user credentials. Like with SSH on TrueNAS, browsing to other folders and locations beyond the user's home directory is possible, but unlike running on TrueNAS directly, only the components of the jail are available.

![FilezillaJailConnectSFTP](/images/CORE/FilezillaJailConnectSFTP.png "Filezilla SFTP Connect to TrueNAS Jail")
{{< /tab >}}
{{< tab "TFTP" >}}
The Trivial File Transfer Protocol (TFTP) is a light-weight version of FTP typically used to transfer configuration or boot files between machines, such as routers, in a local environment.
TFTP provides an extremely limited set of commands and provides no authentication.

When the TrueNAS system is only storing images and configuration files for network devices, configure and start the TFTP service.
Starting the TFTP service opens UDP port *69*.

![ServicesTFTPOptions](/images/CORE/12.0/ServicesTFTPOptions.png "TFTP Service Options")

{{< include file="static/includes/ServicesTFTPFields.md.part" markdown="true" >}}

{{< /tab >}}
{{< /tabs >}}
