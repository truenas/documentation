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


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

To access SMB share management options, go to **Shares** screen with the **Windows (SMB) Shares** widget.
The widget lists SMB shares configured on but is not the complete list.
To see a complete list of shares, click on **Windows (SMB) Shares <span class="material-icons">launch</span>** header to open the **Shares > SMB** screen.
The <span class="material-icons">more_vert</span> dropdown list to the right of each share shows four options that open other screens or dialogs that provide access to share settings.

## Sharing Administrator Access
{{< include file="/static/includes/SharingAdminRole.md" >}}

## Managing SMB Shares
To manage an SMB share, click <span class="material-icons">more_vert</span> dropdown list to the right of each share to see the options for the share you want to manage. Options are:

* **Edit** opens the **Edit SMB** screen where you can change settings for the share.
* **Edit Share ACL** opens the **Share ACL** screen where you can [add or edit ACL entries](#configuring-smb-share-acl).
* **Edit Filesystem ACL** opens the **Edit ACL** screen where you can edit the dataset permissions for the share.
  The **Dataset Preset** option determines the ACL type and therefore the **ACL Editor** screen that opens.
* **Delete** opens a delete confirmation dialog. Use this to delete the share and remove it from the system. Delete does not affect shared data.

## Modifying ACL Permissions for SMB Shares
You have two options that modify ACL permissions for SMB shares:

* **Edit Share ACL** modifies ACL permissions that apply to the SMB share.

* **Edit Filesystem ACL** modifies ACL permissions at the share dataset level.

See the [ACL Primer](https://www.truenas.com/docs/references/aclprimer/) for general information on Access Control Lists (ACLs) in general, the [Permissions]({{< ref "PermissionsSCALE" >}}) article for more details on configuring ACLs, and [**Edit ACL** Screen]({{< ref "EditACLScreens" >}}) for more information on the dataset ACL editor screens and setting options.

### Configuring the SMB Share ACL

{{< include file="/static/includes/ShareACLPermissions.md" >}}

### Configuring Dataset File System ACL

{{< include file="/static/includes/FilesystemACLPermissions.md" >}}

#### Changing the built-in-user Group Permissions

{{< include file="/static/includes/ChangeBuiltin-UserACL.md" >}}

#### Adding a New Share Group

{{< include file="/static/includes/AddNewSMBShareGroupAndACE.md" >}}

#### Using the Traverse Permission

{{< include file="/static/includes/UsingTraversePermission.md" >}}
