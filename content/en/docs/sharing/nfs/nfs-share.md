---
title: "Configuring a NFS Share"
description: "A how-to guide on creating a general purpose NFS share."
---

Creating a Network File System (NFS) share on TrueNAS gives the benefit
of making lots of data easily available for anyone with share access.
Depending how the share is setup, users accessing the
share can be restricted to read or write privileges.

To get started, make sure a
<a href="/docs/initial-setup/storage/datasets">dataset has been created</a>.
This dataset serves as share data storage.
If a dataset already exists, proceed to turning the NFS service
on.

## NFS Service

To turn the NFS service on, go to **Services** and click the slider for
*NFS*. If you wish to turn the service on automatically when the TrueNAS
system is rebooted, check the *Start Automatically* box.

> NOTE: The NFS share will not work if the service is not turned on.

The NFS service settings can be configured by clicking
<i class="fas fa-pen"></i>. Don't forget to click *SAVE* when changing
the settings. Unless a specific setting is needed, it is recommended to
use the default settings for the NFS service.

## NFS Share

Now it is time to create the NFS share. Go to
**Sharing > Unix Shares (NFS)** and click *ADD*. Use the file browser to
select the dataset to be shared. An optional *Description* can be set to
help identify the share. At the time of creation, the NFS share is
enabled by default. If you wish to create the share but not enable it
yet, do not check the *Enable* checkbox. Click *SUBMIT*, to create the
share.

To configure more advanced options for the share, click
*ADVANCED OPTIONS*.

Existing NFS shares can be edited by going to
**Sharing > Unix Shares (NFS)** and clicking
<i class="fas fa-ellipsis-v"></i>.

## Connecting to the NFS Share

Although you can connect to an NFS share with various operating systems,
it is recommended to use a Linux/Unix operating system. First, download
the *nfs-common* kernel module. This can be done using the package
manager of the installed distribution. For example, on Ubuntu/Debian
type `sudo apt-get install nfs-common` in the terminal. To connect to a
NFS share, type the command
<code>
sudo mount -t nfs <i>IPaddressOfTrueNASsystem</i>:<i>path/to/nfsShare</i> <i>localMountPoint</i>
</code>.
Where *IPaddressOfTrueNASsystem* is the IP address of the remote TrueNAS
system that contains the NFS share, *path/to/nfsShare* is the path to
the NFS share on the TrueNAS system, and *localMountPoint* is a local
directory on the host system configured for the mounted NFS share. For
example, `sudo mount -t nfs 10.239.15.110:/mnt/pool1/photoDataset /mnt`
will mount the NFS share *photoDataset* to the local directory `/mnt`.
By default, anyone that connects to the NFS share only has the read
permission.
