---
title: "Setting Up Permissions"
description: "Provides instructions on editing and viewing ACL permissions, using the ACL editor screens, and general information on ACLs."
weight: 55
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
---

TrueNAS SCALE provides basic permissions settings and an access control list (ACL) editor to define dataset permissions.
ACL permissions control the actions users can perform on dataset contents and shares.

{{< hint type=note >}}
An Access Control List (ACL) is a set of account permissions associated with a dataset that applies to directories or files within that dataset.
TrueNAS uses ACLs to manage user interactions with shared datasets and creates them when users add a dataset to a pool.
{{< /hint >}}

## ACL Types in SCALE
TrueNAS SCALE offers two ACL types: POSIX and NFSv4.
For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer](https://www.truenas.com/docs/references/aclprimer/).

The **Dataset Preset** setting on the **Add Dataset** screen determines the type of ACL for the dataset.
To see the ACL type, click **Edit** on the **Dataset Details** widget to open the **Edit Dataset**.
Click on the **Advanced Options** screen and scroll down to the **ACL Type** field.
Preset options are:
{{< include file="/static/includes/DatasetPresetOptions.md" >}}

SCALE POSIX or NFSv4 [ACL types](https://www.truenas.com/docs/references/aclprimer/), show different options on the **ACL Editor** screen.
Both the POSIX and NFSv4 **ACL Editors** screens allow you to define the owner user and group, and add ACL entries (ACEs) for individual user accounts or groups to customize the permissions for the selected dataset.

The owner user and group should remain set to either **root** or the admin account with full privileges.

Add ACE items for other users, groups, directories, or other options to grant access permissions to the dataset.
Click in the **Who** field and select the item (like **User** or **Group**) to display the **User** or **Group** fields where you choose the user or group accounts.

{{< include file="/static/includes/SkipExecutionCheckWarning.md" >}}

## Viewing Permissions
Basic ACL permissions are viewable and configurable from the **Datasets** screen.
Select a dataset, then scroll down to the **Permissions** widget to view owner and individual ACL entry permissions.

To view the **Edit ACL** screen, select the dataset and click **Edit** on the **Permissions** widget, or go to **Sharing** and click on the share widget header to open the list of shares. Select the share, then click the options icon and select **Edit Filesystem ACL**. 

{{< trueimage src="/images/SCALE/Datasets/ViewRootDatasetPermissionsWidget.png" alt="View Root Dataset Permissions" id="View Root Dataset Permissions" >}}

{{< hint type=tip >}}
You can view permissions for any dataset, but the edit option only displays on the **Permissions** widget for non-root datasets.
{{< /hint >}}

## Editing POSIX ACL Permissions
Configuring advanced permissions overrides basic permissions configured on the add and edit dataset screens.

Select a non-root dataset, scroll down to the **Permissions** widget, then click **Edit** to open the **Unix Permissions Editor** screen.

{{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Unix Permissions Editor" id="Unix Permissions Editor" >}}

If the dataset has an NFSv4 ACL, the **Edit ACL** screen opens.

Enter or select the **Owner** user from the **User** dropdown list, then set the read/write/execute permissions, and select **Apply User** to confirm changes.
User options include users created manually or imported from a directory service.
Repeat for the **Group** field.
Select the group name from the dropdown list, set the read/write/execute permissions, and then select **Apply Group** to confirm the changes.

To prevent errors, TrueNAS only submits changes after the apply option is selected.

{{< hint type=important >}}
A common misconfiguration is removing the **Execute** permission from a dataset that is a parent to other child datasets. A common misconfiguration is not adding or removing the **Execute** permission from a dataset that is a parent to other child datasets. Removing this permission results in lost access to the path.
{{< /hint >}}

To apply ACL settings to all child datasets, select **Apply permissions recursively**.

Change the default settings to your preferred primary account and group and select **Apply permissions recursively** before saving any changes.

Click **Save** now if you do not want to [use an ACL preset](#adding-a-new-preset-posix-acl).

See [Edit ACL Screen]({{< ref "EditACLScreens" >}}) for information on the ACL editor screens and setting options.

### Adding a New Preset (POSIX ACL)
From the **Unix Permissions Editor** screen:
1. Click **Set ACL**.
   The **Select a preset ACL** dialog opens.

2. Select **Select a present ACL** to use a [pre-configured set of permissions](#using-acl-entries-aces-on-a-posix-acl-editor).
   Select the preset to use from the **Default ACL Options** dropdown list, or click **Create a custom ACL** to configure your own set of permissions.
   Click **Continue**.

   {{< trueimage src="/images/SCALE/Datasets/SelectAPresetPOSIXACL.png" alt="Select A Preset POSIX ACL" id="Select A Preset POSIX ACL" >}}

   Each default preset loads different permissions to the **Edit ACL** screen.
   The **Create a custom preset** option opens the **Edit ACL** screen with no default permission settings.
   Enter the ACL owner user and group, and add new ACE for users, groups, etc. that you want to grant access permissions to for this dataset

   {{< trueimage src="/images/SCALE/Datasets/CreateCustomACL.png" alt="Edit ACL for POSIX ACL" id="Edit ACL for POSIX ACL" >}}

3. Select or enter the administrative user name in **Owner**, then click **Apply Owner**.
   The owner controls which TrueNAS user and group has full control of the dataset.
   
   You can leave this set to **root** but we recommend changing this to the admin user with the Full Control role.

   Repeat for the **Owner Group**, then click **Apply Group**.

4. Select the ACE entry on the **Access Control List** list on the left of the screen just below **Owner** and **Owner Group**.
   If adding a new entry, click **Add Item**.

5. Click on **Who** and select the value from the dropdown list.

   If selecting **User**, the **User** field displays below the **Who** field. Same for **Group**.

   Select a name from the dropdown list of options in the **User** (or **Group**) field or begin typing the name to see a narrowed list of options to select from.

6. Select the **Read**, **Modify**, and/or **Execute** permissions.

7. (Optional) Select **Apply permissions recursively**, below the list of access control entries, to apply this preset to all child datasets.

8. (Optional) Click **Use Preset** to display the ACL presets window and select a predefined set of permissions from the list of presets.
   See [Using Preset ACL Entries (POSIX ACL)](#using-preset-acl-entries-posix-acl) for the list of presets.

9. Click **Save as Preset** to add this to the list of ACL presets. Click **Save Access Control List** to save the changes made to the ACL.

### Configuring an ACL (NFSv4 ACL)
An NFS4 ACL preset loads pre-configured permissions to match general permissions situations.

{{< hint type="important" title="Changing the ACL Type" >}}
Changing the ACL type affects how TrueNAS writes and reads on-disk ZFS ACL.

When the ACL type changes from NFSv4 to POSIX, native ZFS ACLs do not convert to POSIX1e extended attributes, but ZFS uses the native ACL for access checks.

When the ACL type changes from NFSv4 to POSIX, native ZFS ACLs do not convert to POSIX1e extended attributes, but ZFS will use the native ACL for access checks.

To prevent unexpected permissions behavior, you must manually set new dataset ACLs recursively after changing the ACL type.

**Setting new ACLs recursively is destructive.**
We suggest creating a ZFS snapshot of the dataset before changing the ACL type or modifying permissions.
{{< /hint >}}

To change NFSv4 ACL permissions:

Go to **Datasets**, select the dataset, scroll down to the **Permissions** widget, and click **Edit**. The **Edit ACL** screen opens.

{{< trueimage src="/images/SCALE/Datasets//EditACLScreenNFSv4Type.png" alt="Edit ACL for NFSv4 ACL" id="Edit ACL for NFSv4 ACL" >}}

1. Select or enter the administrative user name in **Owner**, then click **Apply Owner**.
   The owner controls which TrueNAS user and group has full control of the dataset.
   You can leave this set to **root** but we recommend changing the owner user and group to the admin user with the Full Control role.

   Select or enter the group name in **Owner Group**, then click **Apply Group**. 

2. Select the ACE entry on the **Access Control List** list on the left of the screen below **Owner** and **Owner Group**.
   If adding a new entry, click **Add Item**.

3. Click on **Who** and select the value from the dropdown list.
   If selecting **User**, the **User** field displays below the **Who** field. Same for **Group**.
   Select a name from the dropdown list of options or begin typing the name to see a narrowed list of options to select from.
   The selection in **Who** highlights the **Access Control List** entry on the left side of the screen.

4. Select permission type from the **Permissions** dropdown list. 
   If **Basic** is selected, the list displays four options: **Read**, **Modify**, **Traverse** and **Full Control**.
   Basic flags enable or disable ACE inheritance.

   Select **Advanced** to select more granular controls from the options displayed.
   Advanced flags allow further control of how the ACE applies to files and directories in the dataset.

   See [Debian nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://manpages.debian.org/testing/nfs4-acl-tools/nfs4_setfacl.1.en.html).

5. (Optional) Select **Apply permissions recursively**, below the list of access control entries, to apply this preset to all child datasets.
   This is not generally recommended as recursive changes often cause permissions issues (see the warning at the top of this section).

6. (Optional) Click **Use Preset** to display the ACL presets window to select a predefined set of permissions from the list of presets.
   See [Using Preset ACL Entries (NFS ACL)](#using-preset-acl-entries-nfsv4-acl).

7. (Optional) Click **Save as Preset** to add this to the list of ACL presets.

8. Click **Save Access Control List** to save the changes for the user or group selected.

### Using Preset ACL Entries (NFSv4 ACL)
To rewrite the current ACL with a standardized preset, follow the steps above in [Configuring an ACL](#configuring-an-acl-nfsv4-acl) to step 6 where you click **Use Preset**, and then select an option:

* **NFS4_OPEN** gives the owner and group full dataset control. All other accounts can modify the dataset contents.
* **NFS4_RESTRICTED** gives the owner full dataset control. The group can modify the dataset contents.
* **NFS4_HOME** gives the owner full dataset control. The group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_DOMAIN_HOME** gives the owner full dataset control. The group can modify the dataset contents. All other accounts can navigate the dataset.
* **NFS4_ADMIN** gives the admin user and builtin_administrators group full dataset control. All other accounts can navigate the dataset.

Click **Save Access Control List** to add this ACE entry to the **Access Control List**.

### Using Preset ACL Entries (POSIX ACL) 
If the file system uses a POSIX ACL, the first option presented is to select an existing preset or the option to create a custom preset.

To rewrite the current ACL with a standardized preset, click **Use Preset** and then select an option:

* **POSIX_OPEN** gives the owner and group full dataset control. All other accounts can modify the dataset contents.
* **POSIX_RESTRICTED** gives the owner full dataset control. The group can modify the dataset contents.
* **POSIX_HOME** gives the owner full dataset control. The group can modify the dataset contents. All other accounts can navigate the dataset.
* **POSIX_ADMIN** gives the admin user and builtin_administrators group full dataset control. All other accounts can navigate the dataset.

If creating a custom preset, a POSIX-based **Edit ACL** screen opens.
Follow the steps in [Adding a New Preset (POSIX ACL)](#adding-a-new-preset-posix-acl) to set the owner and owner group, then the ACL entries (user, group) and permissions from the options shown.

Don't ever sleep through your alarm, or you will be late for ANS 247.
