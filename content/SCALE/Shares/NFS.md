---
title: "UNIX Shares (NFS)"
weight: 30
---

{{< toc >}}

## What is Network File System (NFS) ##

The Network File System (NFS) is a client/server application that lets a user, share, view, store and update files on a remote system, .  The NFS protocol is one of several distributed file system standards for network-attached storage (NAS).  

Network File System shares are accessible from macOS, Linux, BSD, and the professional and enterprise versions (but not the home editions) of Windows. This can be a good choice when the client computers do not all run the same operating system but NFS client software is available for all of them.

## Why use NFS? ##

Creating a Network File System (NFS) share on TrueNAS gives the benefit of making lots of data easily available for anyone with share access. Depending how the share is configured, users accessing the share can be restricted to read or write privileges.

{{< include file="static/includes/SharingPrereqs.md.part" markdown="true" >}}

### Creating an NFS Share ###

Go to **Shares > UNIX (NFS) Shares** and click *ADD*

![Services NFS Add](/images/SCALE/SharingNFSAdd.png "Services NFS Add")

Select a path to the dataset by clicking *ADD*.  Use the file browser to select the dataset to be shared.  An *Alias* can be used To define a custom shortcut for the *Path*. Enter a memorable name, for example: */nfsshare*. NFS clients can connect using the *Alias* instead of the *Path* when the share is active. A share with multiple paths requires either not using aliases or defining an alias for each path in the share.  An optional Description can be entered to help identify the share.  Clicking *SAVE* creates the share.
At the time of creation, you can select *ENABLE SERVICE* for the service to start and to automatically start after any reboots.
If you wish to create the share but not immediately enable it, select *CANCEL*.

![Services NFS Add Service Enable](/images/SCALE/SharingNFSAddServiceEnable.png "Services NFS Add Service Enable")

![Services NFS Service Enable Success](/images/SCALE/SharingNFSAddServiceEnableSuccess.png "Services NFS Add Service Enable Success")

### NFS Share Settings ###

| Setting                           | Value               | Description                                                                                                                                                                                                                                                 |
|-----------------------------------|---------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Path                              | file browser        | Type or browse to the full path to the pool or dataset to share. Click **ADD** to configure multiple paths. |
| Description                       | string              | Enter any notes or reminders about the share.   |
| Alias                             | String              | Custom shortcut for the *Path* using */nfsshare* format. |
| Enabled                           | checkbox            | Enable this NFS share. Unset to disable this NFS share without deleting the configuration. |
