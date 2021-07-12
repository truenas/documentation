---
title: "Home Shares"
weight: 20
---

{{< toc >}}

TrueNAS offers the *Use as Home Share* option for organizations or SMEs that want to use a single SMB share to provide a personal directory to every user account.

{{< hint warning >}}
This feature is available for a single TrueNAS SMB share. Additional SMB shares can be created as described in the [general SMB sharing article]({{< relref "SharingStorage.md" >}}) but without the *Use as Home Share* option enabled.
{{< /hint >}}

## Create a Pool

## Join the Active Directory

## Prepare a Dataset

Create a new dataset in an existing storage pool.
This article uses the example *ourhome*.
Set the *Share Type* to *SMB*.

![StoragePoolsOptionsDatasetCreateOurhome](/images/CORE/12.0/StoragePoolsOptionsDatasetCreateOurhome.jpg "Creating the SMB Dataset")

After creating the dataset, go to **Storage > Pools**, open the dataset options, and select *Edit Permissions*.
Click *Select an ACL Preset* and choose *HOME*.

![StoragePoolsOptionsEditPermissionsACLPresetHome](/images/CORE/12.0/StoragePoolsOptionsEditPermissionsACLPresetHome.png "Set the Home ACL Preset")

Save the ACL and begin creating the home share.

## Create the Share

Go to **Sharing > Windows Shares (SMB) > ADD**. 

Set the *Path* to the prepared dataset (example is *ourhome*). The *Name* automatically changes to be identical to the dataset. Leave this at the default.

Set the *Purpose* to **No presets**, click *ADVANCED OPTIONS*, and select **Use as Home Share**. 

![SharingSMBAddHomeShareExample](/images/CORE/12.0/SharingSMBAddHomeShareExample.png "Example Home Share")

Click *Submit* and enable the SMB service to make the share available on your network.

The final step is to create user accounts in TrueNAS and define their home directories.

## Add Users

Go to **Accounts > Users > ADD**. Create a new user name and password. By default, the user *Home Directory* will be titled from the user account name and added as a new subdirectory of the *ourhome* dataset.

![AccountsUsersEditHomeDir](/images/CORE/12.0/AccountsUsersEditHomeDir.png "Editing a User's Home Directory")

If existing users require access to the home share, go to **Accounts > Users** and edit an existing account.
Adjust the account home directory to the appropriate dataset and give it a name to create their own personal directory.

After the user accounts have been added and permissions configured, users can log in to the common share and see a folder that is titled with their user name.
