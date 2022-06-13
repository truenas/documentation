---
title: "Configuring FTP"
weight: 30
---


## FTP Services Configurations

FTP requires a new dataset and local user account.
Please create a individual account for FTP connection as it cannot be shared with other accounts, such as SMB connections.

Go to **Storage > Pools** to add a new dataset.

![StoragePoolsAddDataset](/images/CORE/12.0/StoragePoolsAddDataset.png "Adding a new Dataset")

Next, go to **Accounts > Users > Add** to create a local user on the TrueNAS.

![AccountsUsersAdd](/images/CORE/12.0/AccountsUsersAdd.png "Adding a new User Account")

Assign a user name, password, and link the newly created dataset for the FTP share as the home directory of the user.
This can be done on a per user basis, or create a global account for FTP, for example OurOrgFTPacnt, etc.

Return to **Storage > Pools**, find the new dataset, and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> > **Edit Permissions**.
Set the **Owner** fields (user and group) to the newly created user account.
Be sure to click **Apply User** and **Apply Group** before saving.

![StoragePoolsEditPermissionsBasic](/images/CORE/12.0/StoragePoolsEditPermissionsBasic.png "Basic Permissions Editor")

### Service Configuration

To configure FTP, go to the **Services** page, find the **FTP** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![Services FTP Options](/images/CORE/12.0/ServicesFTPOptions.png "Services FTP Options")

Configure the options according to your environment and security considerations. See [FTP Screen]({{< relref "/CORE/UIReference/Services/FTPScreen.md" >}})

Ensure **chroot** is enabled as this helps confine FTP sessions to a local user home directory and allow **Local User Login**.

Unless necessary, do not allow anonymous or root access! 
For better security, enable TLS when possible. 
This is effectively [FTPS](https://tools.ietf.org/html/rfc4217). 
When FTP is exposed to a WAN, enable TLS.

### FTP Connection

Use a browser or FTP client to connect to the TrueNAS FTP share.
The images here show using [FileZilla](https://sourceforge.net/projects/filezilla/), a free option.

The user name and password are those of the local user account on the TrueNAS.
The default directory is the same as the user <file>/home</file> directory.
After connecting, you can create directories and upload or download files.

![FilezillaFTPConnect](/images/CORE/FilezillaFTPConnect.png "Filezilla FTP Connection")

See [FTP Screen]({{< relref "/CORE/UIReference/Services/FTPScreen.md" >}}) for more information on the **FTP** service screen. 
