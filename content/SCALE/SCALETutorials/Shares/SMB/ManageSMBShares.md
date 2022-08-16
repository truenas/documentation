---
title: "Managing SMB Shares"
description: "This article provides instructions on managing existing SMB shares, adding share ACLs, and managing file system ACLs "
weight: 10
aliases: /
tags:
 - scalesmb
 - scaleafp
 - scaleshares
 - scaleacls
---


{{< toc >}}


To access SMB share management options from the **Sharing > Windows (SMB) Shares** screen you need to access the **Sharing >SMB** screen that lists all SMB shares on the system. 
To access this, after going to **Shares**, click the **Windows (SMB) Shares <span class="material-icons">launch</span>** launch icon.

## Managing SMB Shares
To manage an SMB share use the **Sharing > SMB** details screen.
Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> for the share you want to manage. 

Click on the dropdown list option for the operation you want to perform. 

* Click **Edit** to open the **[Edit SMB]({{< relref "SMBSharesScreens.md" >}})** screen where you can change any setting for the share. 

* Click **Edit Share ACL** to open the  **Sharing > SMB > Share ACL** screen where you can [add or edit ACL entries](#configuring-smb-share-acl). 

* Click **Edit Filesystem ACL** to open the **Storage > Edit *POSIX.1e* ACL** screen where you can [edit the SMB dataset permissions](#configure-dataset-file-system-acl). 
  The SMB dataset ACL options you set determine the **ACL Editor** screen displayed.

* Click **Delete** to open a delete confirmation dialog where you delete the share and remove it from the system. Delete does not affect shared data.

## Modifying ACL Permissions for SMB Shares

You have two options that modify ACL permissions for SMB shares:

* To modify SMB share ACL permissions that apply to the users and groups and permissions of the entire SMB share use **Edit Share ACL**. 

* To modify ACL permissions at the dataset level for the users and groups that own or have specific permissions to the shared dataset. 

See both the [Permissions]({{< relref "PermissionsSCALE.md" >}}) article for more details on configuring ACLs and [Edit ACL Screen]({{< relref "/SCALE/SCALEUIReference/Storage/Pools/EditACLScreens.md" >}}) article for more information on the ACL editor screens and setting options.

Also see [Tuning the Dataset ACL]({{< relref "/AddSMBShares.md#Tuning-the-dataset-ACL">}}) for an example of modifying ACL permissions for an SMB share.

### Configuring SMB Share ACL
To configure an Access Control List (ACL) entry for an SMB share use the **Edit Share ACL** option. This opens the **SMB> Share ACL** screen. 
This screen is separate from file system permissions and applies at the entire SMB share level. 
Changes made to permissions on this screen for the selected SMB share do not apply to other file sharing protocol clients or other SMB shares that export the same share **Path**. 

This ACL determines the browse list if you enable **Access Based Share Enumeration**. See [SMB Share Screens]({{< relref "SMBSharesScreens.md" >}}) for more information on settings.

Open is the default. 

From the main **Sharing** screen, click on either **Windows (SMB) Share** or **View Details** to open the **Sharing > SMB** details screen. 
Click the <span class="material-icons">more_vert</span> icon for the SMB share you want to edit ACL permissions for and then click **Edit Share ACL**. 

Either select new values for the ACL entry or click **Add** to add a new block of **Add share_ACL** settings. 
Click **Save** when you finish your changes.

### Configuring Dataset File System ACL
To configure an Access Control List (ACL) entry for the SMB share the path (defined in **Path**) at the dataset level, use the **Edit Filesystem ACL** option. 

The ACL type setting on the **Add Dataset** or **Edit Dataset** configuration screen, in **Advanced Options**, determines the ACL editor screen or windows you see when you click **Edit Filesystem ACL**.

* If you set the dataset **ACL Type** to **POSIX**, the **Select a preset ACL** window displays first.
  After you select a preset and click **Continue** a POSIX type **ACL Editor** screen displays.

* If you set the dataset **ACL Type** to **NFSv4**, the NFSv4 type **ACL Editor** displays.

Since SCALE gives users the option to use either POSIX or NFSv4 share [ACL types]({{< relref "/content/References/ACLPrimer.md" >}}), the **ACL Editor** screen differs depending on which ACL type the file system uses. 

Both the POSIX and NFSv4 **ACL Editors** allow you to define ACL user accounts or groups that own or have specific permissions to the shared dataset. 
The **User** and **Group** values show which accounts own or have full permissions to the dataset. 
Change the default settings to your preferred primary account and group and select **Apply permissions recursively** before saving any changes.

To define permissions for a specific user account or group for this SMB share at the dataset level, click **Add Item**.
Select a **User** or **Group** from the **Who** dropdown list, then select a specific user or group account.
Define how the settings apply to the account, then specify the permissions to apply.
For example, to only allow the *newuser* user permission to view dataset contents but not make changes, set the **ACL Type** to **Allow** and **Permissions** to **Read**.

See both the [Permissions]({{< relref "PermissionsSCALE.md" >}}) for more details on configuring ACLs and [Edit ACL Screen]({{< relref "/SCALE/SCALEUIReference/Storage/Pools/EditACLScreens.md" >}}) for information on the ACL editor screens and setting options.

#### Using Preset ACL Entries (ACEs) on an NFSv4 ACL Editor
To rewrite the current ACL with a standardized preset, click **Use ACL Preset** and select an option:

**NFS4_OPEN** to give the owner and group full dataset control. All other accounts can modify the dataset contents.  
**NFS4_RESTRICTED** to give the owner full dataset control. Group can modify the dataset contents.
**NFS4_HOME** to give the owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.

When finished, click **Save Access Control List** to add this to the **Access Control List**.

#### Using ACL Entries (ACEs) on a POSIX ACL Editor
If the file system uses a POSIX ACL, the first option presented is to select a preset. 

To rewrite the current ACL with a standardized preset, click **Use ACL Preset** and select an option:

**POSIX_OPEN** to give owner and group full dataset control. All other accounts can modify the dataset contents.  
**POSIX_RESTRICTED** to give owner full dataset control. Group can modify the dataset contents.
**POSIX_HOME** to give owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.

{{< taglist tag="scalesmb" limit="10" >}}
{{< taglist tag="scaleafp" limit="10" title="Releated AFP Articles" >}}