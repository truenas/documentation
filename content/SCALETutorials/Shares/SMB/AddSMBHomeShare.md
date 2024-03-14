---
title: "Setting Up SMB Home Shares"
description: "Provides instructions to set up SMB home shares."
weight: 40
aliases: 
tags:
- smb
---

## Setting Up SMB Home Shares
TrueNAS offers the **Use as Home Share** option, found in the **Add SMB** and **Edit SMB** screen **Advanced Options** settings in the **Other Options** section, for organizations or SMEs that want to use a single SMB share to provide a personal directory to every user account.

With home shares, each user is given a personal home directory when connecting to the share.
These home directories are not accessible by other users.
You can use only one share as the home share, but you can create as many non-home shares as you need or want.

Creating an SMB home share requires configuring the system storage and joining Active Directory.

### Adding Local Share Users
Go to **Credentials > Local Users** and click **Add**.
Create a new user name and password.

By default, the user **Home Directory** title comes from the user account name and is added as a new subdirectory of **Home_Share_Dataset**.

![AddUserDirPermsAuthSettings](/images/SCALE/Credentials/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings")

If existing users require access to the home share, go to **Credentials > Local Users** and edit an existing account.

Adjust the user home directory to the appropriate dataset and give it a name to create their own directory.

### Adding Share Users with Directory Services

You can use Active Directory or LDAP to create share users.

If not already created, add a pool, then join Active Directory.

Go to **Storage** and [create a pool]({{< relref "CreatePoolWizard.md" >}}).

Next, [set up the Active Directory]({{< relref "/SCALE/SCALETutorials/credentials/directoryservices/configadscale.md" >}}) that you want to share resources with over your network.

### Creating the Share and Dataset
You can either add the share when you [create the dataset]({{< relref "DatasetsSCALE.md" >}}) for the share on the **Add Dataset** screen, or create the dataset when you add the share on the **Add SMB** screen.
If you want to customize the dataset, use the **Add Dataset** screen.

{{< include file="/_includes/CreateDatasetSCALE.md" >}}

To use the **Add SMB** screen, Click **Add** on the **Windows (SMB) Shares** widget to open the screen.

Set the **Path** to the existing dataset created for the share, or to where you want to add the dataset, then click **Create Dataset**.

Enter a name for the dataset and click **Create Dataset**.
The dataset name populates the share **Name** field and updates the **Path** automatically.
The dataset name becomes the share name. Leave this as the default.
If you change the name follow the naming conventions for:
* [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
* [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

Set the **Purpose** to **No presets**, then click **Advanced Options**.
Scroll down to **Other Options** and set **Use as Home Share**.
Click **Save**.

Enable the **SMB** service when prompted to make the share is available on your network.

After saving the dataset, set the permissions.

### Setting Dataset Permissions
After creating the share and dataset, you can edit permissions using either the **Edit** option on the **Permissions** widget for the dataset, or use the **Edit Filesystem ACL** option for the share on the **Windows (SMB) Share** widget to open the ACL edit screen for the share dataset.
See [SMB Shares]({{< relref "ManageSMBShares.md" >}}) for more information on editing the share dataset permissions.

Click on the new dataset. Scroll down to the **Permissions** widget and click **Edit**.

Click the **Owner** dropdown and select the owner, the repeat for **Group**.
Change the owning group to your Active Directory domain admins. Select **Apply Owner** and **Apply Group**.

![GroupDomainAdminsSCALE](/images/SCALE/Datasets/GroupDomainAdmins.png "Set the owning group to Domain Admins")

Click **Use an ACL Preset** and choose **NFS4_HOME**.
Then, click **Continue**.

![StoragePoolsOptionsEditPermissionsACLPresetHomeSCALE](/images/SCALE/Datasets/StoragePoolsOptionsEditPermissionsACLPresetHome.png "Set the Home ACL Preset")

After adding the user accounts and configuring permissions, users can log in to the share and see a folder matching their user name.

{{< include file="/_includes/SMBShareMSDOSalert.md" >}}
