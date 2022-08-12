---
title: "Configuring FTP"
description: "This article provides information on how to configure File Transfer Protocol (FTP) on your TrueNAS."
weight: 30
tags:
- coreftp
---


## FTP Connections

FTP connections cannot share connections with other accounts, such as SMB connections. FTP connections need a new dataset and local user account.

Go to **Storage > Pools** to add a new dataset.

![StoragePoolsImportPools](/images/CORE/13.0/StoragePoolsImportPools.png "Adding a new Dataset")

Next, go to **Accounts > Users > Add** to create a local user on the TrueNAS.

![AccountsUsersAdd](/images/CORE/12.0/AccountsUsersAdd.png "Adding a new User Account")

Assign a user name and password. Link the new dataset for the FTP share as the home directory of the user.
Link the new dataset for the FTP share on a per user basis, or create a global account for FTP. Example: OurOrgFTPacnt, etc.

Return to **Storage > Pools**, find the new dataset, and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i>**> Edit Permissions**.
In the **Owner** fields, select the new user account as the **User** and **Group** from the dropdown list. 
Be sure to select **Apply User** and **Apply Group** before saving.

![StoragePoolsEditPermissionsBasic](/images/CORE/12.0/StoragePoolsEditPermissionsBasic.png "Basic Permissions Editor")

### Service Configuration

To configure FTP, go to the **Services** page, find the **FTP** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![Services FTP Options](/images/CORE/12.0/ServicesFTPOptions.png "Services FTP Options")

Configure the options according to your environment and security considerations. See [FTP Screen]({{< relref "/CORE/UIReference/Services/FTPScreen.md" >}})

### Advanced Options

Enable **chroot** to help confine FTP sessions to a local user home directory and allow **Local User Login**.

{{< hint warning >}}
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
