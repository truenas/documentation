---
title: "Sharing Storage"
description: "This article describes sharing configurations on TrueNAS CORE."
geekdocCollapseSection: true
weight: 70
tags:
- coregettingstarted
- corestorage
---

{{< toc >}}

With TrueNAS **Storage** configured and backed up, it's time to begin sharing data.
There are several available sharing solutions, but we'll look at the most common in this article.
Choose a tab to get started with simple sharing examples:

## Sharing Data

{{< tabs "Methods" >}}
{{< tab "Windows (SMB)" >}}
### Requirements

* Dataset with *Share Type* set to *SMB*.
* TrueNAS user accounts with *Samba Authentication* set.

### Set Permissions

Go to **Storage > Pools** and find the dataset to share.
Click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> and *Edit Permissions*.

![StoragePoolsEditACL](/images/CORE/12.0/StoragePoolsEditACL.png "Editing SMB dataset permissions")

Click *SELECT AN ACL PRESET*, open the drop down, and choose *OPEN*.
Click *SAVE*.

### Create the Share

Go to **Sharing > Windows Shares (SMB)** and click *ADD*.

![SMBShareAdd](/images/CORE/12.0/SharingSMBAdd.png "Basic SMB Share Options")

Only the *Path* and *Name* are initially required.
The *Path* is the directory tree on TrueNAS that is shared using the SMB protocol.
The *Name* forms part of the "full share pathname" when SMB clients connect.

![SharingSMBAddBasicExample](/images/CORE/12.0/SharingSMBAddBasicExample.png "SMB Share Example")

Click *SUBMIT* to save the configuration to **Sharing > Windows Shares (SMB)**.

### Activate the Service

Go to **Services** and toggle **SMB**.
Set *Start Automatically* when you want the share to become accessible immediately after TrueNAS boots.

### Connecting to the Share

On a Windows 10 system, open the **File Browser**.

![WindowsFileBrowser](/images/CORE/WindowsFileBrowser.png "Windows 10 File Browser")

In the navigation bar, enter `\\` and the TrueNAS system name.
When prompted, enter the TrueNAS user account credentials and begin browsing the dataset.

![WindowsSMBShareConnected](/images/CORE/WindowsSMBShareConnected.png "Viewing the SMB Dataset")
{{< /tab >}}
{{< tab "Unix-like (NFS)" >}}
### Requirements

* TrueNAS dataset to share.
* Client systems might require additional packages like `nfs-common`.

### Creating the Share

Go to **Sharing > Unix Shares (NFS)** and click *ADD*.

![SharingNFSAdd](/images/CORE/12.0/SharingNFSAdd.png "Creating a new NFS share")

Use the file browser to select the dataset to be shared and click *SUBMIT*.
When prompted, click *ENABLE SERVICE* to immediately begin sharing the dataset.

### Accessing the Dataset

On a Unix-like system, open a command line.
Enter `showmount -e` *`IPADDRESS`*, replacing *IPADDRESS* with your TrueNAS system address:

```
tmoore@ChimaeraPrime:~$ showmount -e 10.238.15.194
Export list for 10.238.15.194:
/mnt/pool1/testds (everyone)
```

Now make a local directory for the NFS mount:

```
tmoore@ChimaeraPrime:~$ sudo mkdir nfstemp/
```

Finally, mount the shared directory:

```
tmoore@ChimaeraPrime:~$ sudo mount -t nfs 10.238.15.194:/mnt/pool1/testds nfstemp/
```

From here, `cd` into the local directory and view or modify the files as needed.
{{< /tab >}}
{{< tab "Block Shares (iSCSI)">}}
Block sharing is a complicated scenario that requires detailed configuration steps and knowledge of your network environment.
A simple configuration is beyond the scope of this getting started guide, but detailed articles are available in in the [iSCSI Sharing topic]({{< relref "iSCSIShare.md" >}})
{{< /tab >}}
{{< /tabs >}}

With simple sharing done, TrueNAS is now installed, accessible, and capable to receive or share data over your network.
Now it's time to protect the TrueNAS storage by setting up [data backups]({{< relref "DataBackups.md" >}})

{{< taglist tag="coregettingstarted" limit="10" >}}
