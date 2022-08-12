---
title: "Adding NFS Shares"
description: "This article provides instructions on adding NFS shares, starting NFS service and accessing the share."
weight: 60
aliases: 
tags:
 - scalenfs
 - scaleshares
---

{{< toc >}}

## About UNIX (NFS) Shares

Creating a Network File System (NFS) share on TrueNAS makes a lot of data available for anyone with share access.
Depending on the share configuration, it can restrict users to read or write privileges.

{{< include file="static/includes/General/SharingPrereqs.md.part" markdown="true" >}}

## Creating an NFS Share Tutorial Video

{{< embed-video name="scaleangelfishnfsshare" >}}

## Creating an NFS Share
Go to **Shares > Unix (NFS) Shares** and click **Add**.

![SharingNFSAddSCALE](/images/SCALE/SharingNFSAddSCALE.png "Services NFS Add")

Use the file browser to select the dataset to be shared.
You can enter an optional text to help identify the share in **Description**.
Clicking **Save** creates the share.
At the time of creation, you can select **Enable Service** for the service to start and to automatically start after any reboots.
If you wish to create the share but not immediately enable it, select **Cancel**.

### NFS Share Settings

| Setting | Description |
|---------|---------------|
| Path | Type or browse to the full path to the pool or dataset to share. Click **Add** to configure multiple paths. |
| Description | Enter any notes or reminders about the share.   |
| Enabled | Enable this NFS share. Unset to disable this NFS share without deleting the configuration. |
| Add networks | Enter an allowed network in network/mask CIDR notation. Click **Add** to define another authorized network. Defining an authorized network restricts access to all other networks. Leave empty to allow all networks. |
| Add hosts | Enter a hostname or IP address to allow that system access to the NFS share. Click **Add** to define another allowed system. Defining authorized systems restricts access to all other systems. Leave the field empty to allow all systems access to the share. |

### Advanced Options Settings 
{{< expand "Click here for more information" "v" >}}
Opening the **Advanced Options** allows tuning the share access permissions and defining authorized networks.

![SharingNFSAdvancedSCALE](/images/SCALE/SharingNFSAdvancedSCALE.png "Advanced NFS Share Options")

| Setting | Value | Description |
|---------|-------|-------------|
| Read Only | checkbox | Prohibits writing to the share when set. |
| Maproot User | string or drop-down | Select a user to apply that user's permissions to the *root* user. |
| Maproot Group | string or drop-down | Select a group to apply that group's permissions to the *root* user. |
| Mapall User | string or drop-down | Permissions for the chosen user applied to all clients. |
| Mapall Group | string or drop-down | Permissions for the chosen group are applied to all clients. |
{{< /expand >}}

To edit an existing NFS share, go to **Shares > Unix Shares (NFS)** and click the share you want to edit.
The options available are identical to the share creation options.

## Configuring the NFS Service

To begin sharing, go to **System Settings > Services** and click the **NFS** toggle to running.
Select **Start Automatically** if you want NFS to activate when TrueNAS boots.

Configure NFS service settings by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesNFSOptionsSCALE](/images/SCALE/ServicesNFSOptionsSCALE.png "Services NFS Options")

| Setting | Description |
|---------|-------------|
| Bind IP Addresses | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |
| Enable NFSv4 | Set to switch from NFSv3 to NFSv4.  |
| NFSv3 ownership model for NFSv4 | Set when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| Require Kerberos for NFSv4 | Set to force NFS shares to fail if the Kerberos ticket is unavailable. |
| Serve UDP NFS clients | Set if NFS clients need to use the User Datagram Protocol (UDP). |
| Support >16 groups | Set when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. |
| mountd(8) bind port | Enter a number to bind [mountd](https://manpages.debian.org/testing/mount/mount.8.en.html) only to that port. |
| rpc.statd(8) bind port | Enter a number to bind [rpc.statd](https://manpages.debian.org/testing/nfs-common/statd.8.en.html) only to that port. |
| rpc.lockd(8) bind port | Enter a number to bind [rpc.lockd](https://manpages.debian.org/testing/manpages-ja/rpc.lockd.8.ja.html) only to that port. |

Unless you need a specific setting, we recommend using the default NFS settings.

When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}). 

## Connecting to the NFS Share

Although you can connect to an NFS share with various operating systems, it is recommended to use a Linux/Unix operating system.
First, download the `nfs-common` kernel module.
This can be done using the installed distribution package manager.
For example, on Ubuntu/Debian, enter command `sudo apt-get install nfs-common` in the terminal.

After installing the module, connect to an NFS share by entering command `sudo mount -t nfs {IPaddressOfTrueNASsystem}:{path/to/nfsShare} {localMountPoint}`.
Where *{IPaddressOfTrueNASsystem}* is the remote TrueNAS system IP address that contains the NFS share, *{path/to/nfsShare}* is the path to the NFS share on the TrueNAS system, and *{localMountPoint}* is a local directory on the host system configured for the mounted NFS share.
For example, `sudo mount -t nfs 10.239.15.110:/mnt/Pool1/NFS_Share /mnt` mounts the NFS share *NFS_Share* to the local directory */mnt*.

You can also use the linux `nconnect` function to let your NFS mount to support multiple TCP connections. 
To enable `nconnect`, enter command `sudo mount -t nfs -o rw,nconnect=16 {IPaddressOfTrueNASsystem}:{path/to/nfsShare} {localMountPoint}`. 
Where *{IPaddressOfTrueNASsystem}*, *{path/to/nfsShare}*, and *{localMountPoint}* are the same you used when connecting to the share.
For example, `sudo mount -t nfs -o rw,nconnect=16 10.239.15.110:/mnt/Pool1/NFS_Share /mnt`.

By default, anyone that connects to the NFS share only has read permission.
To change the default permissions, edit the share, open the **Advanced Options**, and change the **Access** settings.

{{< hint warning >}}
ESXI 6.7 or later is required for read/write functionality with NFSv4 shares.
{{< /hint >}}

{{< taglist tag="scalenfs" limit="10" >}}