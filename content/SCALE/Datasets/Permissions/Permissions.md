---
title: "Configuring ACL Permissions"
description: "Provides general information on ACLs, and instructions on editing and viewing ACL permissions using the ACL editor screens."
weight: 55
aliases:
 - /scale/scaletutorials/datasets/permissionsscale/
 - /scale/scaleuireference/storage/pools/permissionsscale
 - /scale/scaletutorials/storage/pools/permissionsscale
 - /scale/scaletutorials/storage/datasets/permissionsscale/
tags:
 - acl
 - datasets
 - pools
 - permissions
keywords:
- enterprise data storage 
- nas data storage
- data protection
- data provisioning
doctype: tutorial
---


TrueNAS provides basic permissions settings and an access control list (ACL) editor to define dataset permissions.
ACL permissions control the actions users can perform on dataset contents and shares.

{{< hint type=note >}}
An Access Control List (ACL) is a set of account permissions associated with a dataset that applies to directories or files within that dataset.
TrueNAS uses ACLs to manage user interactions with shared datasets.
When you create a dataset, TrueNAS sets the ACL type based on the dataset preset, but you must configure the ACL before it becomes active.
{{< /hint >}}

## ACL Types in TrueNAS

TrueNAS offers two ACL types: POSIX and NFSv4.
The **Dataset Preset** setting on the **Add Dataset** screen determines the type of ACL for the dataset.
Datasets created with the **Generic** dataset preset have the ACL type set to a POSIX (Unix) ACL.
Datasets created with the **SMB** dataset preset have the ACL type set to an NFSv4 ACL.
SMB shares require the more robust configurations in an NFSv4 ACL.
For most cases, a POSIX ACL is all you need.
If you want the more granular ACL controls in the NFSv4 ACL, you can create a dataset using the **SMB** dataset preset without creating an SMB share, or you can use the **ACL Type** option on the **Add Dataset > Advanced Options** screen to change a dataset using the **Generic** preset from a POSIX to NFSv4 ACL.
For a more in-depth explanation of ACLs and configurations in TrueNAS, see our [ACL Primer](https://www.truenas.com/docs/references/aclprimer/).

{{< expand "How do I know what ACL Type my dataset has?" "v" >}}
The **Permissions** widget for the dataset shows the dataset ACL type.
When **Unix Permissions** shows in the widget, the dataset has a POSIX ACL.

Alternatively, click **Edit** on the **Dataset Details** widget for the dataset to open the **Edit Dataset** screen, then click **Advanced Options** and scroll down to the **ACL Type** field to see the ACL type.

You can also check the ACL type while on the **Edit ACL** screen by clicking **Use Preset**, then clicking the down arrow for the **Preset** field in the **Select a preset ACL** window.
{{< /expand >}}

{{< hint type=tip >}}
TrueNAS does not allow creating an ACL for the root dataset of a pool.
{{< /hint >}}

TrueNAS POSIX or NFSv4 [ACL types](https://www.truenas.com/docs/references/aclprimer/), show different options on the **ACL Editor** screen.
Both the POSIX and NFSv4 **ACL Editors** screens allow you to:
* Select a pre-configured ACL by clicking **Use Preset** and then selecting a **Preset** option 
* Customize the ACL by defining the owner user and group and adding ACL entries (ACEs) for individual user accounts or groups
* Select a preset and customize the ACL

When using a preset and customising the ACL, select the preset first and then customize the ACL with new users or groups.
Selecting the preset after adding new ACL entries (ACEs) erases any ACEs added to the ACL, requiring you to re-enter them.
Click **Save Access Control List** when you are done configuring the ACL.
In most cases, the owner user and group should remain set to **root**, but you can change this to the primary admin user and group account with full privileges.
Add ACE items for users, groups, directories, etc., not included in preset configurations to customize access permissions to the dataset.

When adding a dataset using the SMB preset for a share or just setting up an NFSv4 ACL, TrueNAS shows the **Set ACL for this dataset** dialog after you save the dataset.
Click **Go to ACL Manager** to configure the ACL.
You must configure an ACL for the dataset.
The dataset does not have an ACL until you configure it even though you see ACL information in the **Permissions** widget.
This initially indicates the type of ACL created and the default basic permissions.
To access the dataset and files within it, you must set up the ACL with users and access permissions.

If you want to defer configuring the ACL, click **Return to pool list**, but make a note to return to the dataset to configure the ACL before attempting to use it.

{{< hint type="important" title="Changing the ACL Type" >}}
Changing the ACL type affects how TrueNAS writes and reads on-disk ZFS ACLs.

When the ACL type changes from NFSv4 to POSIX, native ZFS ACLs do not convert to POSIX1e extended attributes, but ZFS uses the native ACL for access checks.

To prevent unexpected permissions behavior, you must manually set new dataset ACLs recursively after changing the ACL type.

**Setting new ACLs recursively is destructive.**
We suggest creating a ZFS snapshot of the dataset before changing the ACL type or modifying permissions.
{{< /hint >}}

{{< include file="/static/includes/SkipExecutionCheckWarning.md" >}}

## Configuring POSIX ACL Permissions

The **Unix Permissions Editor** screen shows for datasets using the **Generic** dataset preset.

{{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Unix Permissions Editor" id="Unix Permissions Editor" >}}

Accept the default root in **Owner** and **Owner Group**, or if you want to change this to a system administrator with full permissions, select the admin user name from each dropdown list, then click **Apply Owner** and **Apply Group** to make the change.

Next, select the **Access** levels using the **Read**, **Write**, **Execute** checkboxes for **User**, **Group**, **Other**.

Click **Save** to save changes and close the **Unix Permissions Editor** screen.
To further define the POSIX ACL, click **Set ACL** to open the **Select a preset ACL** window with two options: **Select a preset ACL** and **Create a custom ACL**.

{{< trueimage src="/images/SCALE/Datasets/SelectAPresetPOSIXACL.png" alt="Select a Preset ACL Window" id="Select a Preset ACL Window" >}}

Accept the default option **Select a preset ACL** to choose from the options on the [**Preset** dropdown list](#posix-preset-options).
Select **Create a custom ACL** to open the **Edit ACL** screen for a POSIX ACL with a minimal default configuration.
Selecting a preset also opens the **Edit ACL** screen, but with different default configurations based on the preset selected.

After selecting a preset, click **Continue** to close the preset window and show the **Edit ACL** screen for a POSIX ACL.
Next [add ACL entries](#adding-posix-acl-entries).

### POSIX Preset Options

* **POSIX_OPEN** - Gives the owner and group full dataset control. All other accounts can modify the dataset contents.
  Use for collaborative datasets where multiple users need read/write access.
* **POSIX_RESTRICTED** - Gives the owner full dataset control. The group can modify the dataset contents.
  Others have no access. Use when you want group collaboration but need to restrict outside access.
* **POSIX_HOME** - Gives the owner full dataset control. The group can modify the dataset contents.
  All other accounts can navigate the dataset, but cannot read or modify files.
  Use for private user directories where others need to traverse the path but not access the contents.
* **POSIX_ADMIN** - Gives the admin user and builtin_administrators group full dataset control.
  All other accounts can navigate the dataset but cannot read or modify files.
  Use for administrative datasets that only system administrators should access.

### Adding POSIX ACL Entries

The **Edit ACL** screen shows the ACL owner and owner group and allows you to change both, just as you can on the **Unix Permissions Editor** screen.
It also allows you to define ACL entries, such as users, groups, etc. Presets populate the **Access Control List** with default ACE entries.

You can define the ACE entries when you first configure the POSIX ACL or change ACL entries (ACEs) and permissions for ACEs.
To edit an existing POSIX ACL, go to **Datasets**, select the dataset on the tree table, click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.

When adding an ACL entry (ACE), first add an item, and then assign the type and level of access given to that ACE entry.

{{< trueimage src="/images/SCALE/Datasets/EditPosixACLScreen.png" alt="Edit ACL for POSIX ACL" id="Edit ACL for POSIX ACL" >}}

{{< include file="/static/includes/AddACESteps1-4.md" >}} 
<div style="padding-left: 33px;">The options are <b>Read</b>, <b>Modify</b>, and/or <b>Execute</b> permissions.</div>

5. (Optional) Select **Default** under **Flags**.
   
   The POSIX flag for an ACL entry controls inheritance for newly created files and directories.
   The default flag can only be set on directories, not on files.
   When **Default** is selected, the ACL entry becomes a default ACL that applies to new objects created inside that directory, but it does not affect the access permissions of the current directory, just controls what new files/directories inherit.
   New files inherit the default ACL as their access ACL. New directories inherit the default ACL as both their access ACL and their default ACL.
   This continues down the tree of files and directories.

   If not set, the ACL entry only affects access to the directory itself; new files and directories created inside the dataset do not inherit the permission.

{{< include file="/static/includes/AddACESteps6-7andProcedureEnd.md" >}}

## Changing an ACL Owner or Owner Group

This applies to both POSIX and NFSv4 ACLs. The **Edit ACL** screen for POSIX and NFSv4 ACLs shows different configuration options, but the **Owner** and **Owner Group** settings are the same for both ACL types.

Think of the owner of the ACL as the main traffic cop granting other users access. In most cases, leave the default user set to **root**.
To allow a system administrator access, either change the owner and owner group to that admin user name, or add that admin user as an ACL entry (ACE) and grant it full permissions to allow it to administer the ACL and configure the dataset for other functions like an SMB share.

To change the owner and owner group:

Select the **Owner** user from the **User** dropdown list. To filter the list of users begin typing the name in the field.
Click **Apply Owner** to apply the change.
Next, change the **Owner Group** in the same manner as changing the owner.
Click **Apply Group** to apply the group change.

User and group options include those created manually or imported from a directory service.

To prevent errors, TrueNAS only submits changes after you select the apply options.

{{< hint type=important >}}
A common misconfiguration is not adding or removing the **Execute** permission from a dataset that is a parent to other child datasets.
Removing this permission results in lost access to the path.
{{< /hint >}}

If only changing the owner and owner group, click **Save Access Control List**.

If adding ACL entries, refer to the instructions for each ACL type.

To apply ACL settings to all child datasets, select **Apply permissions recursively**.

Change the default settings to your preferred primary account and group and select **Apply permissions recursively** before saving any changes.

See [Edit ACL Screen]({{< ref "EditACLScreens" >}}) for information on the ACL editor screens and setting options.

{{< hint type=important >}}
Users can grant `root` permissions to containers and instances through an unprivileged root account using the ACL editor in the UI or the TrueNAS API. 

To ensure functionality, add an ACE for the `truenas_container_unpriv_root` user and assign the appropriate permissions (such as **Read**, **Modify**, and **Execute**).

For container environments, verify that the ACL includes an entry for `truenas_container_unpriv_root` with the required access to any dataset paths used by the container.

See [Granting Root Access to Host Paths](/scale/scaletutorials/containers/#granting-root-access-to-host-paths) for more information.
{{< /hint >}}

## Configuring an NFSv4 ACL

Selecting **SMB** in the **Dataset Preset** field on the **Add Dataset** screen applies an NFSv4 ACL type to the dataset.
You can use the **SMB** dataset preset and choose to not create an SMB share as the easiest way to apply an NFSv4 ACL to a dataset, or you can leave **Dataset Preset** set to **Generic**, click **Advanced Options**, scroll down to the **ACL Type** field, and select NFSv4 to apply this to the dataset.

After applying the NFSv4 ACL type to a dataset, you must configure the ACL.
If you uset the **ACL Type** setting on the **Add Dataset > Advanced Options** screen for a dataset with the **Generic** preset to change to an NFSv4 ACL, the **Permissions** widget for the dataset shows **Unix Permission** until you configure the NFSv4 ACL.

{{< trueimage src="/images/SCALE/Datasets/PermissionsWidgetUnixACL.png" alt="Permissions Widget Showing Unix ACL" id="Permissions Widget Showing Unix ACL" >}}

The **Permissions** widget for datasets with the **SMB** preset shows **NFSv4 permissions**, but you still need to configure the ACL permissions. The dataset does not have an ACL applied until you configure the ACL.

{{< trueimage src="/images/SCALE/Datasets/PermissionsWidgetNFSv4ACL.png" alt="Permissions Widget for an NFSv4 ACL" id="Permissions Widget for an NFSv4 ACL" >}}

To edit or configure an NFSv4 ACL, select the dataset on the dataset tree table, then click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.

{{< trueimage src="/images/SCALE/Datasets//EditACLScreenNFSv4Type.png" alt="Edit ACL for NFSv4 ACL" id="Edit ACL for NFSv4 ACL" >}}

You can change the owner and owner group, and/or change, add, or delete an ACE item on the **Access Control List**.

Either change the owner and owner group to the admin user on your system with full administration privileges or add the admin user name as an ACE item on the Access Control List.
This allows the admin user to make functional changes for the dataset and child datasets nested under it.
For example, when configuring shares and private dataset shares. 

To rewrite the current ACL with a standardized preset, click **Use Preset** on the **Edit ACL** screen, which opens the **Select a preset ACL** window.

Select the preset option, then click **Continue** to apply the preset.
Presets load pre-configured permissions to match general permissions situations.

### NFSv4 ACL Presets 

* **NFS4_OPEN** gives the owner and group full dataset control. All other accounts can modify the dataset contents.
* **NFS4_RESTRICTED** gives the owner full dataset control. The group can modify the dataset contents.
* **NFS4_HOME** gives the owner full dataset control. The group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_DOMAIN_HOME** gives the owner full dataset control. The group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_ADMIN** gives the admin user and builtin_administrators group full dataset control. All other accounts can navigate the dataset.

### Adding NFSv4 ACL Entries

The **Edit ACL** screen shows the ACL owner and owner group and allows you to change both.
It also allows you to define ACL entries, such as users, groups, etc. Presets populate the **Access Control List** with default ACE entries.

You can define the ACE entries when you first configure the NFSv4 ACL or change ACL entries (ACEs) and permissions for ACEs when you edit an existing ACL.
To edit an existing NFSv4 ACL, go to **Datasets**, select the dataset on the tree table, click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.

When adding an ACL entry (ACE), first add an item, and then assign the type and level of access given to that ACE entry.

{{< trueimage src="/images/SCALE/Datasets/EditACLScreenNFSv4Type.png" alt="Edit ACL for NFSv4 ACL" id="Edit ACL for NFSv4 ACL" >}}

{{< include file="/static/includes/AddACESteps1-4.md" >}} 

<div style="padding-left: 33px;">If <b>Basic</b> is selected, the <b>Permissions</b> dropdown list shows four options: <b>Read</b>, <b>Modify</b>, <b>Traverse</b>, and <b>Full Control</b>.
If <b>Advanced</b> is selected, the <b>Permissions</b> dropdown list shows 14 checkboxes for more granular control over the permissions granted to the selected ACE entry.
Options are: <b>Read Data</b>, <b>Write Data</b>, <b>Append Data</b>, <b>Read Named Attributes</b>, <b>Write Named Attributes</b>, <b>Execute</b>, <b>Delete Children</b>, <b>Read Attributes</b>, <b>Write Attributes</b>, <b>Delete</b>, <b>Read ACL</b>, <b>Write ACL</b>, <b>Write Owner</b>, and <b>Synchronize</b>.

5. (Optional) Select the ACL flags to apply the ACE item selected on the **Access Control List**, not to the entire ACL.
   Each ACE entry can have different flags set. Flags apply to the files, directories, and subdirectories created in this dataset.
   Flag options:
   * **Basic** shows the **Inherit** and **No Inherit** flags. Just as with the POSIX **Default** flag, this determines if files and directories in this dataset, for the ACE item selected (for example, a user item selected on the **Access Control List**), inherit the ACL from the dataset.
   * **Advanced** shows five flags for more granular control. Flag options are:
     * **File Inherit** - Selected by default. Limits ACL inheritance for files in the dataset for the selected ACE item.
     * **Directory Inherit** - Selected by default. Limits ACL inheritance for directories in the dataset for the selected ACE item.
     * **No Propagate Inherit** - Limits ACL inheritance to direct child directories. Files and directories created in this dataset inherit the ACL, but subdirectories cannot pass it further down the tree for the selected ACE item.
     * **Inherit Only** - Removes the ACE from permission checks but allows new files or subdirectories to inherit it for this dataset and the selected ACE item. **Inherit Only** is removed from these new objects.
     * **Inherited** - Selected by default. Indicates the selected ACE item inherited the ACL from the parent dataset (set by TrueNAS).

   Selecting <b>Advanced</b> allows more granular control of file and directory permissions for a selected ACE item (such as a user) on the **Access Control List**.
   See [Debian nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://manpages.debian.org/testing/nfs4-acl-tools/nfs4_setfacl.1.en.html). 

{{< include file="/static/includes/AddACESteps6-7andProcedureEnd.md" >}}

## Viewing Permissions

Basic ACL permissions are viewable and configurable from the **Permissions** widget on the **Datasets** screen.
Select a dataset, then scroll down to the **Permissions** widget to view owner and individual ACL entry permissions.

To view the **Edit ACL** screen, select the dataset and click **Edit** on the **Permissions** widget, or go to **Sharing** and click on the share widget header to open the list of shares. Select the share, then click the options icon and select **Edit Filesystem ACL**. 

{{< trueimage src="/images/SCALE/Datasets/ViewRootDatasetPermissionsWidget.png" alt="View Root Dataset Permissions" id="View Root Dataset Permissions" >}}

{{< hint type=tip >}}
You can view permissions for any dataset, but the edit option only displays on the **Permissions** widget for non-root datasets.
{{< /hint >}}
