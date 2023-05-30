---
title: "Setting Up SMB Home Shares"
description: "Provides instructions to set up SMB home shares."
weight: 40
aliases: 
tags:
- scalesmb
---

{{< toc >}}

{{< include file="/_includes/SMBShareMSDOSalert.md" type="page" >}}

## Setting Up SMB Home Shares

TrueNAS offers the **Use as Home Share** option for organizations or SMEs that want to use a single SMB share to provide a personal directory to every user account.
Each user is given a personal home directory when connecting to the share.
These home directories are not accessible by other users.
Only one share can be used as the home share, but other non-home shares can be created.

Creating an SMB home share requires configuring the system storage and joining Active Directory.

### Creating a Pool and Joining Active Directory

First, go to **Storage** and [create a pool]({{< relref "/SCALE/SCALETutorials/Storage/Pools/CreatePoolSCALE.md" >}}).

Next, [set up the Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}) that you want to share resources with over your network.

### Preparing a Dataset

Go to **Storage** and open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the root dataset in the pool you just created, then click **Add Dataset**.

Name the dataset and set **Share Type** to **SMB**.

After creating the dataset, go to **Storage** and open <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the new dataset. 
Select **View Permissions**, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

Click the **Group** dropdown list and change the owning group to your Active Directory domain admins.

![GroupDomainAdminsSCALE](/images/SCALE/GroupDomainAdminsSCALE.png "Set the owning group to Domain Admins")

Click **Use an ACL Preset** and choose **NFS4_HOME**. Then, click **Continue**.

![StoragePoolsOptionsEditPermissionsACLPresetHomeSCALE](/images/SCALE/StoragePoolsOptionsEditPermissionsACLPresetHomeSCALE.png "Set the Home ACL Preset")

### Creating the Share

Go to **Shares > Windows (SMB) Shares** and click **Add**. 

Set the **Path** to the prepared dataset. 

The **Name** automatically becomes identical to the dataset. Leave this as the default. 
If you change the name follow the naming conventions for:
* [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
* [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea) 

Set the **Purpose** to **No presets**, then click **Advanced Options** and set **Use as Home Share**. Click **Save**.

Enable the **SMB** service in **System Settings > Services** to make the share is available on your network.

### Adding Users

Go to **Credentials > Local Users** and click **Add**. 
Create a new user name and password. 
By default, the user **Home Directory** title comes from the user account name and is added as a new subdirectory of **Home_Share_Dataset**.

![AddUserDirPermsAuthSettings](/images/SCALE/22.12/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings")

If existing users require access to the home share, go to **Credentials > Local Users** and edit an existing account.

Adjust the user home directory to the appropriate dataset and give it a name to create their own directory.

After adding the user accounts and configuring permissions, users can log in to the share and see a folder matching their user name.

{{< taglist tag="scalesmb" limit="10" >}}