---
title: "Sharing Storage"
geekdocCollapseSection: true
weight: 30
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
{{< /tabs >}}

With simple sharing done, TrueNAS is now installed, accessible, storing and backing up data, and sharing data over your network.
If necessary, TrueNAS also provides more features with [Virtualization]({{< relref "Virtualization" >}}) solutions.

For reference material about each web interface screen and advanced configuration or tuning procedures, see the remaining sections in the TrueNAS CORE and Enterprise section.
These sections are organized in order of appearance in the TrueNAS interface, with additional topics for [3rd party solutions]({{< relref "/CORE/Solutions/_index.md" >}}), [API reference guide]({{< relref "/CORE/API/_index.md" >}}), official [notices]({{< relref "/CORE/Notices/_index.md" >}}) from iXsystems, Inc, and [community recommendations]({{< relref "/CORE/UserRecommends/_index.md" >}}).
