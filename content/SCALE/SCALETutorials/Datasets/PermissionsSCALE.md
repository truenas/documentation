---
title: "Setting Up Permissions"
description: "Provides instructions on viewing and editing ACL permissions, using the ACL editor screens, and general information on ACLs."
weight: 55
aliases:
 - /scale/scaleuireference/storage/pools/permissionsscale
 - /scale/scaletutorials/storage/pools/permissionsscale
 - /scale/scaletutorials/storage/datasets/permissionsscale/
tags:
 - acl
 - datasets
 - pools
 - permissions
---

TrueNAS SCALE provides basic permissions settings and an access control list (ACL) editor to define dataset permissions.
ACL permissions control the actions users can perform on dataset contents and on shares.

{{< hint type=note >}}
An Access Control List (ACL) is a set of account permissions associated with a dataset that applies to directories or files within that dataset.
TrueNAS uses ACLs to manage user interactions with shared datasets and creates them when users add a dataset to a pool.
{{< /hint >}}

## ACL Types in SCALE
TrueNAS SCALE offers two ACL types: POSIX (the SCALE default) and SMB/NFSv4.
For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer](https://www.truenas.com/docs/references/aclprimer/).

The **Dataset Preset** setting on the **Add Dataset** screen determines the type of ACL for the dataset.
You can see the ACL type in the **ACL Type** on the **Edit Dataset > Advanced Options** screen.
This setting determines the ACL editor screen displayed after clicking **Edit Filesystem ACL** on a share widget or **Edit** on the **Permissions** widget for the dataset.

* **Generic** sets the dataset ACL type to **POSIX**, and the **Select a preset ACL** window displays first.
  After you select a preset and click **Continue**, a POSIX type **ACL Editor** screen displays.

* **SMB** sets the dataset ACL type to **NFSv4**, and the **ACL Editor** for an NFSv4 ACL displays.

Since SCALE gives users the option to use either POSIX or NFSv4 share [ACL types](https://www.truenas.com/docs/references/aclprimer/), the **ACL Editor** screen differs depending on which ACL type the file system uses.

Both the POSIX and NFSv4 **ACL Editors** allow you to define ACL user accounts or groups that own or have specific permissions to the shared dataset.
The **User** and **Group** values show which accounts own or have full permissions to the dataset.

## Viewing Permissions

Basic ACL permissions are viewable and configurable in the **Datasets** screen. Select a dataset to view its permissions in the **Permissions** widget.

{{< trueimage src="/images/SCALE/Datasets/ViewRootDatasetPermissionsWidget.png" alt="View Root Dataset Permissions" id="View Root Dataset Permissions" >}}

## Editing POSIX ACL Permissions

{{< hint type=tip >}}
You can view permissions for any dataset, but the edit option only displays on the **Permissions** widget for non-root datasets.

Configuring advanced permissions overrides basic permissions configured on the add and edit dataset screens.
{{< /hint >}}

Select a non-root dataset, then click **Edit** in the **Permissions** widget.

{{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Unix Permissions Editor" id="Unix Permissions Editor" >}}

If a POSIX ACL, Enter or select the **Owner** user from the **User** dropdown list, set the read/write/execute permissions, and then select **Apply User** to confirm changes.
The options include users created manually or imported from a directory service. Repeat for the **Owner** field. Select the name from the dropdown list, set the read/write/execute permissions, then select **Apply Group** to confirm the changes.
To prevent errors, TrueNAS only submits changes when selected.

{{< hint type=important >}}
A common misconfiguration is removing the **Execute** permission from a dataset that is a parent to other child datasets.
Removing this permission results in lost access to the path.
{{< /hint >}}

If you want to apply these settings to all child datasets, select **Apply permissions recursively**.

Click **Save** if you do not want to use an ACL preset.

Change the default settings to your preferred primary account and group and select **Apply permissions recursively** before saving any changes.

See [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for information on the ACL editor screens and setting options.

### Adding a New Preset (POSIX ACL)
From the **Unix Permissions Editor** screen:
1. Click **Set ACL**.
   The **Select a preset ACL** dialog opens.

2. Select the **Select a present ACL** radio button to use a [pre-configured set of permissions](#using-acl-entries-aces-on-a-posix-acl-editor).
   Select the preset you want to use from the **Default ACL Options** dropdown list, or click **Create a custom ACL** to configure your own set of permissions.
   Click **Continue**.

   {{< trueimage src="/images/SCALE/Datasets/SelectAPresetPOSIXACL.png" alt="Select A Preset POSIX ACL" id="Select A Preset POSIX ACL" >}}

   Each default preset loads different permissions to the **Edit ACL** screen. The **Create a custom preset** option opens the **Edit ACL** screen with no default permission settings.

   {{< trueimage src="/images/SCALE/Datasets/CreateCustomACL.png" alt="Edit ACL for POSIX ACL" id="Edit ACL for POSIX ACL" >}}

3. Select or enter the administrative user name in **Owner**, then click **Apply Owner**.
   The owner controls which TrueNAS user and group has full control of the dataset.
   
4. Select or enter the group name in **Owner Group**, then click **Apply Group**. 

5. Select the ACE entry on the list **Access Control List** on the left of the screen just below **Owner** and **Owner Group**. If adding a new entry, click **Add Item**.

6. Select the **Who** value from the dropdown list. If selecting **User**, the **User** field displays below the **Who** field. Same for **Group**.
   Select a name from the dropdown list of options or begin typing the name to see a narrowed list of options to select from.
   Whatever is selected in **Who** highlights the **Access Control List** entry on the left side of the screen.

6. Select the **Read**, **Modify**, and/or **Execute** permissions. 

   Select **Default** for **Flags** to add default POSIX flags to the selected object on the **Access Control List** on the left of the screen.

7. (Optional) Select **Apply permissions recursively**, found below the list of access control entries, if you want to apply this preset to all child datasets select.

8. (Optional) Click **Use Preset** to display the ACL presets window to select a predefined set of permission from the list of presets.
   See [Using Preset ACL Entries (POSIX ACL)](#using-preset-acl-entries-posix-acl) for the list of presets.

9. Click **Save as Preset** to add this to the list of ACL presets. Click **Save Access Control List** to save the changes made to the ACL.

### Configuring an ACL (NFSv4 ACL)
An NFS4 ACL preset loads pre-configured permissions to match general permissions situations.

{{< hint type="important" title="Changing the ACL Type" >}}
Changing the ACL type affects how TrueNAS writes and reads on-disk ZFS ACL.

When the ACL type changes from POSIX to NFSv4, internal ZFS ACLs do not migrate by default, and access ACLs encoded in posix1e extended attributes convert to native ZFS ACLs.

When the ACL type changes from NFSv4 to POSIX, native ZFS ACLs do not convert to posix1e extended attributes, but ZFS will use the native ACL for access checks.

To prevent unexpected permissions behavior, you must manually set new dataset ACLs recursively after changing the ACL type.

**Setting new ACLs recursively is destructive.**
We suggest creating a ZFS snapshot of the dataset before changing the ACL type or modifying permissions.
{{< /hint >}}

To edit permissions and change the ACL permissions:

Go to **Datasets**, select the dataset row, scroll down to the **Permissions** widget and click **Edit**. The **Unix Permissions Editor** screen opens.

1. Click **Set ACL** to configure advanced NFS4 permissions. If you want to use an ACL preset, click **Set ACL**.
   The **Edit ACL** screen opens with the **Select a preset ACL** dialog as the first step.

2. Select the **Select a present ACL** radio button to use a pre-configured set of permissions.
   Select the preset you want to use from the **Default ACL Options** dropdown list, or click **Create a custom ACL** to configure your own set of permissions.
   Click **Continue**.

   {{< trueimage src="/images/SCALE/Datasets/NFS4SelectAPresetACLWindow.png" alt="NFS4 Select a preset ACL" id="NFS4 Select a preset ACL" >}}

   Each default preset loads different permissions to the **Edit ACL** screen. The **Create a custom preset** option opens the **Edit ACL** screen with no default permission settings.

   {{< trueimage src="/images/SCALE/Datasets//EditACLScreenNFSv4Type.png" alt="Edit ACL for NFSv4 ACL" id="Edit ACL for NFSv4 ACL" >}}

3. Select or enter the administrative user name in **Owner**, then click **Apply Owner**.
   The owner controls which TrueNAS user and group has full control of the dataset.
   
4. Select or enter the group name in **Owner Group**, then click **Apply Group**. 

5. Select the ACE entry on the list **Access Control List** on the left of the screen just below **Owner** and **Owner Group**. If adding a new entry, click **Add Item**.

6. Select the **Who** value from the dropdown list. If selecting **User**, the **User** field displays below the **Who** field. Same for **Group**.
   Select a name from the dropdown list of options or begin typing the name to see a narrowed list of options to select from.
   Whatever is selected in **Who** highlights the **Access Control List** entry on the left side of the screen.

7. Select permission type from the **Permissions** dropdown list. 
   When **Basic** is selected, the list displays four options: **Read**, **Modify**, **Traverse** and **Full Control**.
   Basic flags enable or disable ACE inheritance.

   Select **Advanced** to select more granular controls from the options displayed.
   Advanced flags allow further control of how the ACE applies to files and directories in the dataset.

   See [nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://manpages.debian.org/testing/nfs4-acl-tools/nfs4_setfacl.1.en.html).

   Select **Flags** to specify how this ACE applies to newly created directories and files within the dataset.

8. (Optional) Select **Apply permissions recursively**, found below the list of access control entries, if you want to apply this preset to all child datasets select.
   This is not generally recommended as recursive changes often cause permissions issues (see the warning at the top of this section).

9. (Optional) Click **Use Preset** to display the ACL presets window to select a predefined set of permission from the list of presets.
   See [Using Preset ACL Entries (NFS ACL)](#using-preset-acl-entries-nfsv4-acl)

10. Click **Save Access Control List** to save the changes for the user or group selected. (Optional) Click **Save as Preset** to add this to the list of ACL presets.

### Using Preset ACL Entries (NFSv4 ACL)
To rewrite the current ACL with a standardized preset, follow the steps above in [Configuring an ACL](#configuring-an-acl-nfsv4-acl) to step 8 where you click **Use Preset**, and then select an option:

* **NFS4_OPEN** gives the owner and group full dataset control. All other accounts can modify the dataset contents.  
* **NFS4_RESTRICTED** gives the owner full dataset control. Group can modify the dataset contents.
* **NFS4_HOME** gives the owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_DOMAIN_HOME** gives the owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_ADMIN** gives the admin user and builtin_administrators group full dataset control. All other accounts can navigate the dataset.

Click **Save Access Control List** to add this ACE entry to the **Access Control List**.

### Using Preset ACL Entries (POSIX ACL) 
If the file system uses a POSIX ACL, if the first option presented is to select an existing preset or the option to create a custom preset.

To rewrite the current ACL with a standardized preset, click **Use Preset** and then select an option:

* **POSIX_OPEN** gives owner and group full dataset control. All other accounts can modify the dataset contents.  
* **POSIX_RESTRICTED** gives owner full dataset control. Group can modify the dataset contents.
* **POSIX_HOME** gives owner full dataset control. Group can modify the dataset contents. All other accounts can navigate the dataset.
* **POSIX_ADMIN** gives the admin user and builtin_administrators group full dataset control. All other accounts can navigate the dataset.

If creating a custom preset, a POSIX-based **Edit ACL** screen opens. Follow the steps in [Adding a New Preset (POSIX ACL)](#adding-a-new-preset-posix-acl) to set the owner and owner group, then the ACL entries (user, group) and permissions from the options shown.