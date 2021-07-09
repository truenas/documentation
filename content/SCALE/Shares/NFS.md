---
title: "UNIX Shares (NFS)"
weight: 30
---

{{< toc >}}

## What is Network File System (NFS) ##

The Network File System (NFS) is a client/server application that lets a user share, view, store and update files on a remote system.  The NFS protocol is one of several distributed file system standards for network-attached storage (NAS).  

Network File System shares are accessible from macOS, Linux, BSD, and the professional and enterprise versions (but not the home editions) of Windows. This can be a good choice when the client computers do not all run the same operating system but NFS client software is available for all of them.

## Why use NFS? ##

Creating a Network File System (NFS) share on TrueNAS gives the benefit of making lots of data easily available for anyone with share access. Depending how the share is configured, users accessing the share can be restricted to read or write privileges.

{{< include file="static/includes/SharingPrereqs.md.part" markdown="true" >}}

### Creating an NFS Share ###

Go to **Shares** and within the **UNIX (NFS) Shares** header click *Add*.  

![Services NFS Add](/images/SCALE/SharingNFSAdd.png "Services NFS Add")

Select a path to the dataset by clicking *Add*.  Use the file browser to select the dataset to be shared.  An *Alias* can be used To define a custom shortcut for the *Path*. Enter a memorable name, for example: */nfsshare*. NFS clients can connect using the *Alias* instead of the *Path* when the share is active. A share with multiple paths requires either not using aliases or defining an alias for each path in the share.  An optional Description can be entered to help identify the share.  Clicking *Save* creates the share.

At the time of creation, you can select *ENABLE SERVICE* for the service to start and to automatically start after any reboots.
If you wish to create the share but not immediately enable it, select *CANCEL*.

![Services NFS Add Service Enable](/images/SCALE/SharingNFSAddServiceEnable.png "Services NFS Add Service Enable")


![Services NFS Service Enable Success](/images/SCALE/SharingNFSAddServiceEnableSuccess.png "Services NFS Add Service Enable Success")

### NFS Share Settings ###

| Setting | Value | Description |
|---------|-------|-------------|
| Path    | file browser | Type or browse to the full path to the pool or dataset to share. Click *Add* to configure multiple paths. |
| Description | string | Enter any notes or reminders about the share. |
| Alias | String | Custom shortcut for the *Path* using */nfsshare* format. |
| Enabled | checkbox | Enable this NFS share. Unset to disable this NFS share without deleting the configuration. |
| Add Networks | String | Enter an allowed network in network/mask CIDR notation. Click *Add* to define another authorized network. Defining an authorized network restricts access to all other networks. Leave field empty to allow all networks. |
| Authorized Hosts and IP addresses | string | Enter a hostname or IP address to allow that system access to the NFS share. Click *Add* to define another allowed system. Defining authorized systems restricts access to all other systems. Leave field empty to allow all systems access to the share. |

{{< expand "Advanced Options" "v" >}}
Opening the *Advanced Options* allows tuning the share access permissions.

![NFSShareAdvanced](/images/SCALE/SharingNFSAddAdvanced.png "Advanced NFS Share Options")

| Setting | Value | Description |
|---------|-------|-------------|
| Read Only | checkbox | Prohibits writing to the share when set. |
| Maproot User | string or drop down | Select a user to apply that user's permissions to the *root* user. |
| Maproot Group | string or drop down | Select a group to apply that group's permissions to the *root* user. |
| Mapall User | string or drop down | Permissions for the chosen user applied to all clients. |
| Mapall Group | string or drop down | Permissions for the chosen group are applied to all clients. |

{{< /expand >}}

To edit an existing NFS share, go to the **Shares** page.  

![NFSShareEdit](/images/SCALE/SharingNFSEditService.png "Edit NFS Share Options")

There are multiple ways to enter the edit mode for a share:
1. Click on the **UNIX (NFS) Shares** header.
2. Click on the share *Path* or *Description*, if added.
3. Click *View Details*.  From this page click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> then *Edit*.

![NFSShareAdditionalEdit](/images/SCALE/SharingNFSAdditionalEditService.png "Additional Edit NFS Share Options")

The options available are identical to the share creation options.

## Configure the NFS Service

To begin sharing the data, go to **System Settings > Services** and click the *NFS* toggle.  If you want NFS sharing to activate immediately after TrueNAS boots, set *Start Automatically*.

{{< hint info >}}
 
There are additional paths to the **Services** page.  Go to **Shares** and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> within the **Unix (NFS) Shares** header.  Choose *Config Service*.  The service can also be turned on/off from this same location.
{{< /hint >}}

NFS service settings can be configured by clicking <i class="fa fa-pen" aria-hidden="true" title="Configure"></i> (Configure).

![Services NFS Options](/images/SCALE/ServicesNFSOptions.png "Services NFS Options")

| Setting                           | Value     | Description                                                                                                                                                                                             |
|-----------------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bind IP Addresses                 | drop down | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |
| Enable NFSv4                      | checkbox  | Set to switch from NFSv3 to NFSv4. |
| NFSv3 ownership model for NFSv4   | checkbox  | Set when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| Require Kerberos for NFSv4        | checkbox  | Set to force NFS shares to fail if the Kerberos ticket is unavailable. |
| Serve UDP NFS clients             | checkbox  | Set if NFS clients need to use the User Datagram Protocol (UDP). |
| Support >16 groups                | checkbox  | Set when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. |
| mountd(8) bind port               | integer   | Enter a number to bind [mountd](https://manpages.debian.org/testing/nfs-kernel-server/mountd.8.en.html) only to that port. |
| rpc.statd(8) bind port            | integer   | Enter a number to bind [rpc.statd](https://manpages.debian.org/testing/nfs-common/statd.8.en.html) only to that port. |
| rpc.lockd(8) bind port            | integer   | Enter a number to bind [rpc.lockd](https://manpages.debian.org/testing/nfs-kernel-server/rpc.nfsd.8.en.html) only to that port. |

Unless a specific setting is needed, it is recommended to use the default settings for the NFS service.
When TrueNAS is already connected to [Active Directory]({{< relref "ActiveDirectory.md" >}}), setting *NFSv4* and *Require Kerberos for NFSv4* also requires a [Kerberos Keytab]({{< relref "Kerberos.md#kerberos-keytabs" >}}).

## Connecting to the NFS Share

Although you can connect to an NFS share with various operating systems, it is recommended to use a Linux/Unix operating system.
First, download the `nfs-common` kernel module.
This can be done using the package manager of the installed distribution.
For example, on Ubuntu/Debian, enter `sudo apt-get install nfs-common` in the terminal.

After installing the module, connect to an NFS share by entering `sudo mount -t nfs {IPaddressOfTrueNASsystem}:{path/to/nfsShare} {localMountPoint}`.
In the above example, *{IPaddressOfTrueNASsystem}* is the IP address of the remote TrueNAS system that contains the NFS share, *{path/to/nfsShare}* is the path to the NFS share on the TrueNAS system, and *{localMountPoint}* is a local directory on the host system configured for the mounted NFS share.
For example, `sudo mount -t nfs 10.239.15.110:/mnt/pool1/photoDataset /mnt` will mount the NFS share *photoDataset* to the local directory `/mnt`.

By default, anyone that connects to the NFS share only has the *read* permission.
To change the default permissions, edit the share, open the *Advanced Options*, and change the **Access** settings.
