---
title: "Managing SMB Shares"
description: "Provides instructions on managing existing SMB share and dataset ACL permissions."
weight: 20
aliases:
tags:
- smb
- afp
- acl
---

To access SMB share management options, go to **Shares** screen with the **Windows (SMB) Shares** widget.
The widget lists SMB shares configured on but is not the full list.
Each share listed includes four icons that open other screens or dialogs that provide access to share settings.
To see a full list of shares, click on **Windows (SMB) Shares <span class="material-icons">launch</span>** to open the **Sharing > SMB** screen.
Each share row on this screen provides access to the other screens or dialogs with share settings.

## Managing SMB Shares
To manage an SMB share click the icons on the widget or use the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> on the **Sharing > SMB** details screen to see the options for the share you want to manage. 

Click on the dropdown list option for the operation you want to perform. 

* **Edit** opens the **Edit SMB** screen where you can change settings for the share. 

* **Edit Share ACL** opens the  **Share ACL** screen where you can [add or edit ACL entries](#configuring-smb-share-acl). 

* **Edit Filesystem ACL** opens the **Storage > Edit ACL** screen where you can add users or group allowed to access the share. 
  The dataset **Share Type** option determine the ACL type and therefore the **ACL Editor** screen that opens.

* **Delete** opens a delete confirmation dialog where you delete the share and remove it from the system. Delete does not affect shared data.

## Modifying ACL Permissions for SMB Shares
You have two options that modify ACL permissions for SMB shares:

* **Edit Share ACL** that modifies ACL permissions that applies to the users and groups applying to the entire SMB share. 

* **Edit Filesystem ACL** that modifies ACL permissions at the dataset level for the users and groups that own or have specific permissions for the shared dataset. 

See both the [Permissions]({{< relref "PermissionsSCALE.md" >}}) article for more details on configuring ACLs and [**Edit ACL** Screen]({{< relref "EditACLScreens.md" >}}) article for more information on the dataset ACL editor screens and setting options.

Also see [Tuning the Dataset (Filesystem) Permissions]({{< relref "/SCALE/SCALETutorials/Shares/SMB/_index.md #Tuning-ACLs-for-SMB-Shares">}}) for an example of modifying ACL permissions for an SMB share.

### Configuring SMB Share ACL
To configure an Access Control List (ACL) entry for an SMB share use the **Edit Share ACL** option.
This opens the **Share ACL for *sharename*** screen. 
Settings on this screen are separate from dataset-level (file system) permissions in that they apply at the entire SMB share level for the selected share but not to all SMB shares or the dataset. 
Changes made to permissions on this screen do not apply to other file sharing protocol clients or other SMB shares that export the same share path (specified in **Path**). 

{{< hint type=note >}} 
You cannot access SMB shares with the root user. Always change SMB dataset ownership to the intended SMB user. 
{{< /hint >}}

This ACL to sets the browse list if you enable **Access Based Share Enumeration**. 
See [SMB Share Screens]({{< relref "SMBSharesScreens.md" >}}) for more information on settings.

Open is the default. 

From the main **Sharing** screen, click on the <span class="material-icons">share</span> **Edit Share ACL** icon or either **Windows (SMB) Share** or **View Details** to open the **Sharing > SMB** details screen. 
Click the <span class="material-icons">more_vert</span> icon for the SMB share you want to edit ACL permissions for and then click **Edit Share ACL**. 

Either select new values for the ACL entry or click **Add** to add a new block of share ACL settings. 
Click **Save** when you finish your changes.

### Configuring Dataset File System ACL
To configure an Access Control List (ACL) entry for the SMB share the path (defined in **Path**) at the dataset level, use the **Edit Filesystem ACL** option. 

The ACL type setting on the **Add Dataset** or **Edit Dataset** configuration **Advanced Options** screen, determines the ACL editor screen or windows you see when you click **Edit Filesystem ACL**.

* If you set the dataset **ACL Type** to **POSIX**, the **Select a preset ACL** window displays first.
  After you select a preset and click **Continue** a POSIX type **ACL Editor** screen displays.

* If you set the dataset **ACL Type** to **NFSv4**, the NFSv4 type **ACL Editor** displays.

Since SCALE gives users the option to use either POSIX or NFSv4 share [ACL types](https://www.truenas.com/docs/references/aclprimer/), the **ACL Editor** screen differs depending on which ACL type the file system uses. 

Both the POSIX and NFSv4 **ACL Editors** allow you to define ACL user accounts or groups that own or have specific permissions to the shared dataset. 
The **User** and **Group** values show which accounts own or have full permissions to the dataset. 
Change the default settings to your preferred primary account and group and select **Apply permissions recursively** before saving any changes.

To define permissions for a specific user account or group for this SMB share at the dataset level, click **Add Item**.
Select a **User** or **Group** from the **Who** dropdown list, then select a specific user or group account.
Define how the settings apply to the account, then specify the permissions to apply.
For example, to only allow the *newuser* user permission to view dataset contents but not make changes, set the **ACL Type** to **Allow** and **Permissions** to **Read**.

See both the [Permissions]({{< relref "PermissionsSCALE.md" >}}) for more details on configuring ACLs and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for information on the ACL editor screens and setting options.

#### Using Preset ACL Entries (ACEs) on an NFSv4 ACL Editor
To rewrite the current ACL with a standardized preset, click **Use Preset** and select an option:

* **NFS4_OPEN** gives the owner and group full dataset control. All other accounts can modify the dataset contents.  
* **NFS4_RESTRICTED** gives the owner full dataset control. Group can modify the dataset contents.
* **NFS4_HOME** gives the owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_DOMAIN_HOME** gives the owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_ADMIN** gives the admin user and builtin_administrators group full dataset control. All other accounts can navigate the dataset. 

When finished, click **Save Access Control List** to add this to the **Access Control List**.

#### Using ACL Entries (ACEs) on a POSIX ACL Editor
If the file system uses a POSIX ACL, the first option presented is to select a preset. 

To rewrite the current ACL with a standardized preset, click **Use Preset** and select an option:

* **POSIX_OPEN** gives owner and group full dataset control. All other accounts can modify the dataset contents.  
* **POSIX_RESTRICTED** gives owner full dataset control. Group can modify the dataset contents.
* **POSIX_HOME** gives owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.
* **POSIX_ADMIN** gives the admin user and builtin_administrators group full dataset control. All other accounts can navigate the dataset. 
