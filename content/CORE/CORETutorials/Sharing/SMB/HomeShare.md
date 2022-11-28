---
title: "Home Shares"
description: "This article describes how to configure a Home Share on TrueNAS CORE."
weight: 20
aliases: /core/sharing/smb/homeshare/
tags:
- coresmb
---

{{< toc >}}

TrueNAS offers the **Use as Home Share** option for organizations or SMEs that want to use a single SMB share to provide a personal directory to every user account.

{{< hint warning >}}
The **Use as Home Share** feature is available for a single TrueNAS SMB share. You can create additional SMB shares as described in the [SMB sharing article]({{< relref "/CORE/GettingStarted/SharingStorage.md" >}}) but without the **Use as Home Share** option enabled.
{{< /hint >}}

## Create a Pool and Join Active Directory

First, go to **Storage > Pools** and [create a pool]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolCreate.md" >}}).

Next, [set up the Active Directory]({{< relref "/CORE/CORETutorials/DirectoryServices/ActiveDirectory.md" >}}) that you want to share resources with over your network.

## Prepare a Dataset

Go to **Storage > Pools** and open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the root dataset in the pool you just created, then click **Add Dataset**.

Name the dataset (this article uses *Home_Share_Dataset* as an example) and set the **Share Type** to **SMB**.

![StoragePoolsOptionsDatasetCreateOurhome](/images/CORE/12.0/StoragePoolsOptionsDatasetCreateOurhome.png "Creating the SMB Dataset")

After creating the dataset, go to **Storage > Pools** and open <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the new dataset. Select **Edit Permissions**.

Click the **Group** dropdown menu and change the owning group to your Active Directory domain admins and check **Apply Group**.

![GroupDomainAdmins](/images/CORE/12.0/GroupDomainAdmins.png "Set the owning group to Domain Admins")

Click **Select an ACL Preset** and choose **HOME**. Then, click **SAVE**.

![StoragePoolsOptionsEditPermissionsACLPresetHome](/images/CORE/12.0/StoragePoolsOptionsEditPermissionsACLPresetHome.png "Set the Home ACL Preset")

## Create the Share

Go to **Sharing > Windows Shares (SMB)** and click **ADD**. 

Set the **Path** to the prepared dataset (*Home_Share_Dataset* for example). 

The **Name** automatically changes to be identical to the dataset. Leave this at the default.

Set the **Purpose** to **No presets**, then click **ADVANCED OPTIONS** and check **Use as Home Share**. Click **SUBMIT**.

![SharingSMBAddHomeShareExample](/images/CORE/12.0/SharingSMBAddHomeShareExample.png "Example Home Share")

The ACL editor opens, displaying the home ACL preset values.

![HomeShareACLEditor](/images/CORE/13.0/HomeShareACLEditor.png "Home Share ACL Editor")

Click **SAVE**. Enable the **SMB** service in **Services** to make the share available on your network.

## Add Users

Go to **Accounts > Users** and click **ADD**. Create a new user name and password. By default, the user **Home Director*y* is titled from the user account name and added as a new subdirectory of *Home_Share_Dataset*.

![AccountsUsersEditHomeDir](/images/CORE/12.0/AccountsUsersEditHomeDir.png "Editing a User's Home Directory")

If existing users require access to the home share, go to **Accounts > Users** and edit an existing account.

Adjust the user home directory to the appropriate dataset and give it a name to create their own directory.

After the user accounts have been added and permissions configured, users can log in to the share and see a folder matching their user name.

{{< taglist tag="coresmb" limit="10" >}}
