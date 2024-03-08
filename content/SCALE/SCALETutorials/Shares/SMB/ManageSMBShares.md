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

## Sharing Administrator Access
{{< include file="/_includes/SharingAdminRole.md" >}}

## Managing SMB Shares
To manage an SMB share click the icons on the widget or use the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> on the **Sharing > SMB** details screen to see the options for the share you want to manage. Options are:

* **Edit** opens the **Edit SMB** screen where you can change settings for the share.
* **Edit Share ACL** opens the **Share ACL** screen where you can [add or edit ACL entries](#configuring-smb-share-acl).
* **Edit Filesystem ACL** opens the **Edit ACL** screen where you can edit the dataset permissions for the share.
  The **Dataset Preset** option determines the ACL type and therefore the **ACL Editor** screen that opens.

* **Delete** opens a delete confirmation dialog. Use this to delete the share and remove it from the system. Delete does not affect shared data.

## Modifying ACL Permissions for SMB Shares
You have two options that modify ACL permissions for SMB shares:

* **Edit Share ACL** where you modify ACL permissions applying to the entire SMB share.

* **Edit Filesystem ACL** where you modify ACL permissions at the shared dataset level.

See the [ACL Primer](https://www.truenas.com/docs/references/aclprimer/) for general information on Access Control Lists (ACLs) in general, the [Permissions]({{< relref "PermissionsSCALE.md" >}}) article for more details on configuring ACLs, and [**Edit ACL** Screen]({{< relref "EditACLScreens.md" >}}) for more information on the dataset ACL editor screens and setting options.

### Configuring the SMB Share ACL

{{< include file="/_includes/ShareACLPermissions.md" >}}

### Configuring Dataset File System ACL

{{< include file="/_includes/FilesystemACLPermissions.md" >}}

#### Changing the built-in-user Group Permissions

{{< include file="/_includes/ChangeBuiltin-UserACL.md" >}}

#### Adding a New Share Group

{{< include file="/_includes/AddNewSMBShareGroupAndACE.md" >}}

#### Using the Traverse Permission

{{< include file="/_includes/UsingTraversePermission.md" >}}
