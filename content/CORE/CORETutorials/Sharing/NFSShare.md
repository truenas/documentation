---
title: "NFS Share Creation"
description: "Provides information on how to create a Network File Share (NFS) on your TrueNAS."
weight: 30
aliases:
 - /core/sharing/nfs/nfsshare/
 - /core/coretutorials/sharing/nfs/nfsshare/
tags:
- corenfs
---

{{< toc >}}

Creating a Network File System (NFS) share on TrueNAS makes a lot of data available for anyone with share access.
Depending on the share configuration, it can restrict users to read or write privileges.

{{< hint type=note >}}
NFS treats each dataset as its own file system.
When creating the NFS share on the server, the specified dataset is the location that client accesses.
If you choose a parent dataset as the NFS file share location, the client cannot access any nested or child datasets beneath the parent.

If you need to create shares that include child datasets, SMB sharing is an option.
Note that Windows NFS Client versions currently support only NFSv2 and NFSv3.
{{< /hint >}}

## Adding an NFS Share Dataset

Before creating an NFS share, create the dataset you want the share to use for data storage.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

We recommend creating a new dataset with the **Share Type** set to **Generic** for the new NFS share.

## Creating an NFS Share

Go to **Sharing > Unix Shares (NFS)** and click **ADD**.

{{< trueimage src="/images/CORE/Sharing/SharingNFSAdd.png" alt="Add NFS Share" id="Add NFS Share" >}}

Use the file browser to select the dataset to share.
Enter an optional **Description** to help identify the share.
Clicking **SUBMIT** creates the share.
There is the option to select **ENABLE SERVICE** while creating the share to start the service.
With this option selected, the service starts automatically after any reboots.

{{< trueimage src="/images/CORE/Sharing/SharingNFSAddServiceEnable.png" alt="Enable NFS Service" id="Enable NFS Service" >}}

If you wish to create the share but not immediately enable it, select **CANCEL**.

{{< trueimage src="/images/CORE/Sharing/SharingNFSAddServiceEnableSuccess.png" alt="NFS Enabled" id="NFS Enabled" >}}

### NFS Share Settings

See [Sharing NFS Screen]({{< relref "NFSShareScreen.md" >}}) for more information on NFS share settings.

To edit an existing NFS share, go to **Sharing > Unix Shares (NFS)** and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> **> Edit**.
The options available are identical to the share creation options.

## Configure the NFS Service

To begin sharing the data, go to **Services** and click the **NFS** toggle.
If you want NFS sharing to activate immediately after TrueNAS boots, set **Start Automatically**.

NFS service settings can be configured by clicking <i class="fa fa-pen" aria-hidden="true" title="Configure"></i> (Configure).
See [NFS Screen]({{< relref "/CORE/UIReference/Services/NFSScreen.md" >}}) for details.

Unless a specific setting is needed, it is recommended to use the default settings for the NFS service.
When TrueNAS is already connected to [Active Directory]({{< relref "/CORE/CORETutorials/DirectoryServices/ActiveDirectory.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [kerberos keytab]({{< relref "/CORE/CORETutorials/DirectoryServices/Kerberos.md" >}}).

## Connecting to the NFS Share with a Linux/Unix OS

The NFS share connects with various operating systems.
The recommendation is to use a Linux/Unix operating system.
Using a Linux/Unix operating system, download the `nfs-common` kernel module.
Do this using the package manager of the installed distribution.
For example, on Ubuntu/Debian, enter `sudo apt-get install nfs-common` in the terminal.

After installing the module, connect to an NFS share by entering `sudo mount -t nfs {IPaddressOfTrueNASsystem}:{path/to/nfsShare} {localMountPoint}`, where *{IPaddressOfTrueNASsystem}* is the IP address of the remote TrueNAS system that contains the NFS share, *{path/to/nfsShare}* is the path to the NFS share on the TrueNAS system, and *{localMountPoint}* is a local directory on the host system configured for the mounted NFS share.
For example, `sudo mount -t nfs 10.239.15.110:/mnt/pool1/photoDataset /mnt` mounts the NFS share *photoDataset* to the local directory `/mnt`.

By default, anyone that connects to the NFS share only has the read permission.
To change the default permissions, edit the share.
Go to **Advanced Options** and change the **Access** settings.

{{< hint type=important >}}
ESXI 6.7 or later is required for read/write functionality with NFSv4 shares.
{{< /hint >}}

{{< taglist tag="corenfs" limit="10" >}}
