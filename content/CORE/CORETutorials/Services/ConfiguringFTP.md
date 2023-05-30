---
title: "Configuring FTP"
description: "Provides information on how to configure File Transfer Protocol (FTP) on your TrueNAS."
weight: 30
tags:
- coreftp
---


## FTP Connections

FTP connections cannot share connections with other accounts, such as SMB connections. FTP connections need a new dataset and local user account.

Go to **Storage > Pools** to add a new dataset.

![StoragePoolsAddDataset2](/images/CORE/13.0/StoragePoolsAddDataset2.png "Adding a New Dataset")

See [Creating Datasets]({{< relref "CORE/CORETutorials/Storage/Pools/Datasets.md" >}}) for information on how to create the dataset. After this step is completed, the new dataset appears nested beneath the pool.

![StorageAllPoolsDataset](/images/CORE/13.0/StorageAllPoolsDataset.png "New Dataset Listed")

Next, go to **Accounts > Users > Add** to create a local user on the TrueNAS.

![AddUserNamedCORE](/images/CORE/13.0/AddUserNamedCORE.png "Adding a New User Account")

Assign a user name and password. Link the new dataset for the FTP share as the home directory of the user.
Link the new dataset for the FTP share on a per user basis, or create a global account for FTP. Example: OurOrgFTPacnt, etc.

Return to **Storage > Pools**, find the new dataset, and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i>**> Edit Permissions**.
In the **Owner** fields, select the new user account as the **User** and **Group** from the dropdown list. 
Be sure to select **Apply User** and **Apply Group** before saving.

![StoragePoolsEditPermissionsCORE](/images/CORE/13.0/StoragePoolsEditPermissionsCORE.png "Basic Permissions Editor")

### Service Configuration

To configure FTP, go to the **Services** page, find the **FTP** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![FTPServicesGeneralCORE](/images/CORE/13.0/FTPServicesGeneralCORE.png "Services FTP Options")

Configure the options according to your environment and security considerations. See [FTP Screen]({{< relref "/CORE/UIReference/Services/FTPScreen.md" >}})

### Advanced Options

Enable **chroot** to help confine FTP sessions to a local user home directory and allow **Local User Login**.

{{< hint type=important >}}
Unless necessary, do not allow anonymous or root access. For better security, enable TLS when possible.
This is effectively [FTPS](https://tools.ietf.org/html/rfc4217). 
Enable TLS when FTP involves a WAN.  
{{< /hint >}}

### FTP Connection

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images here show using [FileZilla](https://sourceforge.net/projects/filezilla/), a free option.

The user name and password are those of the local user account on the TrueNAS.
The default directory is the same as the user <file>/home</file> directory.
After connecting, you can create directories and upload or download files.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")
 
{{< taglist tag="coreftp" limit="10" >}}
