---
title: "Share Creation"
weight: 10
---

{{< toc >}}

Creating a Network File System (NFS) share on TrueNAS gives the benefit of making lots of data easily available for anyone with share access.
Depending how the share is configured, users accessing the share can be restricted to read or write privileges.

{{< include file="static/includes/SharingPrereqs.md.part" markdown="true" >}}

## Creating an NFS Share

Go to **Sharing > Unix Shares (NFS)** and click *ADD*.

![Services NFS Add](/images/CORE/12.0/SharingNFSAdd.png "Services NFS Add")

Use the file browser to select the dataset to be shared.
An optional *Description* can be entered to help identify the share.
Clicking *SUBMIT* creates the share.
At the time of creation, you can select *ENABLE SERVICE* for the service to start and to automatically start after any reboots.
If you wish to create the share but not immediately enable it, select *CANCEL*.

![Services NFS Add Service Enable](/images/CORE/12.0/SharingNFSAddServiceEnable.png "Services NFS Add Service Enable")

![Services NFS Service Enable Success](/images/CORE/12.0/SharingNFSAddServiceEnableSuccess.png "Services NFS Add Service Enable Success")

### NFS Share Settings

| Setting                           | Value               | Description                                                                                                                                                                                                                                                 |
|-----------------------------------|---------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Path                              | file browser        | Type or browse to the full path to the pool or dataset to share. Click **ADD** to configure multiple paths. |
| Description                       | string              | Enter any notes or reminders about the share.   |
| All dirs                          | checkbox            | Set to allow the client to mount any subdirectory within the **Path**. Leaving disabled only allows clients to mount the **Path** endpoint. |
| Quiet                             | checkbox            | Enabling inhibits some syslog diagnostics to avoid error messages. See [exports(5)](https://www.freebsd.org/cgi/man.cgi?query=exports) for examples. Disabling allows all syslog diagnostics, which can lead to additional cosmetic error messages. |
| Enabled                           | checkbox            | Enable this NFS share. Unset to disable this NFS share without deleting the configuration. |

{{< expand "Advanced Options" "v" >}}
Opening the *ADVANCED OPTIONS* allows tuning the share access permissions and defining authorized networks.

![NFSShareAdvanced](/images/CORE/12.0/SharingNFSAddAdvanced.png "Advanced NFS Share Options")

| Setting | Value | Description |
|---------|-------|-------------|
| Read Only | checkbox | Prohibits writing to the share when set. |
| Maproot User | string or drop down | Select a user to apply that user's permissions to the *root* user. |
| Maproot Group | string or drop down | Select a group to apply that group's permissions to the *root* user. |
| Mapall User | string or drop down | Permissions for the chosen user applied to all clients. |
| Mapall Group | string or drop down | Permissions for the chosen group are applied to all clients. |
| Authorized Networks | IP address | Enter an allowed network in network/mask CIDR notation. Click **ADD** to define another authorized network. Defining an authorized network restricts access to all other networks. Leave empty to allow all networks. |
| Authorized Hosts and IP addresses | string | Enter a hostname or IP address to allow that system access to the NFS share. Click **ADD** to define another allowed system. Defining authorized systems restricts access to all other systems. Leave field empty to allow all systems access to the share. |

{{< /expand >}}

To edit an existing NFS share, go to **Sharing > Unix Shares (NFS)** and click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) > **Edit**.
The options available are identical to the share creation options.

## Configure the NFS Service

To begin sharing the data, go to **Services** and click the *NFS* toggle.
If you want NFS sharing to activate immediately after TrueNAS boots, set *Start Automatically*.

NFS service settings can be configured by clicking <i class="fa fa-pen" aria-hidden="true" title="Configure"></i> (Configure).

![Services NFS Options](/images/CORE/12.0/ServicesNFSOptions.png "Services NFS Options")

| Setting                           | Value     | Description                                                                                                                                                                                             |
|-----------------------------------|-----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Number of servers                 | integer   | Specify how many servers to create. Increase if NFS client responses are slow. Keep this less than or equal to the number of CPUs reported by `sysctl -n kern.smp.cpus` to limit CPU context switching. |
| Bind IP Addresses                 | drop down | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |
| Enable NFSv4                      | checkbox  | Set to switch from NFSv3 to NFSv4. |
| NFSv3 ownership model for NFSv4   | checkbox  | Set when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| Require Kerberos for NFSv4        | checkbox  | Set to force NFS shares to fail if the Kerberos ticket is unavailable. |
| Serve UDP NFS clients             | checkbox  | Set if NFS clients need to use the User Datagram Protocol (UDP). |
| Allow non-root mount              | checkbox  | Set only if required by the NFS client. Set to allow serving non-root mount requests. |
| Support >16 groups                | checkbox  | Set when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. |
| Log mountd(8) requests            | checkbox  | Set to log [mountd](https://www.freebsd.org/cgi/man.cgi?query=mountd) syslog requests. |
| Log rpc.statd(8) and rpc.lockd(8) | checkbox  | Set to log [rpc.statd](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) and [rpc.lockd](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) syslog requests. |
| mountd(8) bind port               | integer   | Enter a number to bind [mountd](https://www.freebsd.org/cgi/man.cgi?query=mountd) only to that port. |
| rpc.statd(8) bind port            | integer   | Enter a number to bind [rpc.statd](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) only to that port. |
| rpc.lockd(8) bind port            | integer   | Enter a number to bind [rpc.lockd](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) only to that port. |

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
