---
title: "Managing ACL Permissions"
description: "This article provides instructions on changing dataset-level ACL settings, adding, changing, and viewing a ACL item permissions, using the ACL editor screens, and general information on ACLs."
weight: 55
aliases: 
- /scale/scaleuireference/storage/pools/permissionsscale/
- /scale/scaletutorials/storage/pools/permissionsscale/
tags:
- scaleacls
- scaledatasets
- scalepools
- scalestorage
---

{{< toc >}}

TrueNAS SCALE provides basic permissions settings and a full Access Control List (ACL) editor to define dataset permissions.
ACL permissions control the actions users can perform on dataset contents.

{{< hint info >}}
An Access Control List (ACL) is a set of account permissions associated with a dataset and applied to directories or files within that dataset.
TrueNAS uses ACLs to manage user interactions with shared datasets and creates them when users add a dataset to a pool.
{{< /hint >}}

## ACL Types in SCALE

TrueNAS SCALE offers two ACL types: POSIX which is the SCALE default, and NFSv4. 
For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "ACLPrimer.md" >}}).

For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "/content/References/ACLPrimer.md" >}}). 

## Viewing ACL Permissions

The **Permissions** widget, shown on the **Datasets** screen after selecting a dataset, displays the ACL owner, group, and items for that dataset.

You can also see the two basic ACL settings (**ACL Type** and **ACL Mode**) on both the **Add Dataset** and **Edit Dataset** screens in the **Advanced Options** settings for non-root datasets. 
You cannot change the root dataset (pool level) ACL or permissions. 

ACL permissions are viewable on the **Datasets > Permissions** widget. 
You can edit permissions for all datasets except the root dataset.

![PermissionsWidgetParentDataset](/images/SCALE/22.12/PermissionsWidgetParentDataset.png "View Parent Dataset NSFv4 Permissions")

The ACL items for the NFSv4 ACL listed on the **Permissions** widget are buttons that open configuration options in the **Permissions Widget**.
The ACL items for a POSIX ACL listed on the widget are not buttons and do not open the same permissions options.

![PermissionsWidgetPOSIXACL](/images/SCALE/22.12/PermissionsWidgetPOSIXACL.png "Permissions Widget POSIX ACL")

## Managing Dataset ACLs

You can change ACLs when you add a dataset or want to change it.
You can change dataset-level settings or change each ACL item permissions.
You can change the ACL type from inheriting from the parent dataset to an NFSv4 or a POSIX ACL type.

{{< hint warning >}}
You cannot change the root (pool level) dataset ACL. 

To avoid problems with production datasets, do not change the ACL dataset settings!
{{< /hint >}}

### Adding Dataset ACL Settings

When adding an ACL, you can leave the dataset default settings or you can change dataset level ACL settings.

{{< expand "What type of ACL is created when adding a new dataset?" "v" >}}
The default **ACL Type** setting is determined when the dataset is created. 
If the dataset **Share Type** is  **SMB**, the default ACL type is NFSv4. If the share type is **Generic** the default ACL type is POSIX. 

The **ACL Type** default setting is **Inherit**, which means it inherits the ACL type from the parent dataset. 

If you add a dataset as a child of a dataset with an NSFv4 ACL and you do not change the **ACL Type** from **Inherit** to **POSIX**, the dataset inherits the NSFv4 ACL type from the parent dataset even if the **Share Type** is set to **Generic**.

If you add a dataset from the root or a parent dataset with a POSIX ACL, and you change the **ACL Type** setting from **Inherit** to one of the other options, then the **ACL Type** setting and not the parent dataset determines the ACL type added. 

{{< /expand >}}

A warning displays every time you change the **ACL Type** setting.

If you add a child dataset nested under a non-root parent with an NFSv4 dataset, and you leave **ACL Type** set to **Inherit**, the system opens the **Set ACL for this dataset** window with the option to return to the **Datasets** screen or to open the ACL manager. 
Click **Return to Pool List** to return to the **Datasets** screen or click **Go to ACL Manager** to open the **Select a Preset ACL** window and **Edit ACL** screen.

![SelectAPresetACL](/images/SCALE/22.12/SelectAPresetACL.png "Select a preset ACL")

Select the radio button to either use an existing preset or create a new one. 
Since **ACL Type** is set to **Inherit**, the child dataset inherits an NSFv4 ACL, and the options are all NFSv4 presets.

Select the preset, then click **Preset** to load the NSFv4 pre-configured permissions that match the preset you selected and close the window. 
You can edit the ACL using the **ACL Editor** screen.

### Changing Dataset Level ACL Settings

The **ACL Type** and **ACL Mode** settings, found on both the **Add Dataset** and **Edit Dataset** screens in the **Advanced Options** settings for non-root datasets, are editable but not advised on production systems with datasets currently in use due to possible production disruptions if you make a mistake.

If you want to change the **ACL Type** and **ACL Mode** settings, do it before you begin using the dataset in your production environments.

{{< hint warning >}}
WARNING: Changing the **ACL Type** affects how TrueNAS writes and reads on-disk ZFS ACL.

When the ACL type changes from POSIX to NFSv4, internal ZFS ACLs do not migrate by default, and access ACLs encoded in posix1e extended attributes convert to native ZFS ACLs. 

When the ACL type changes from NFSv4 to POSIX, native ZFS ACLs do not convert to posix1e extended attributes, but ZFS uses the native ACL for access checks.    

To prevent unexpected permissions behavior, you must manually set new dataset ACLs recursively after changing the ACL type.   

Setting new ACLs recursively is destructive. We suggest creating a ZFS snapshot of the dataset before changing the ACL type or modifying permissions.
{{< /hint >}}
{{< expand "Click Here for More Information" "v" >}}
From the **Datasets** screen:

To change the ACL settings on a new dataset, click **Add Dataset**, then click **Advanced Options** and scroll down to the **ACL Type** and **ACL Mode** settings. 
To change the ACL settings on an existing dataset, click **Edit** on the **Dataset Details** widget to open the **Edit Dataset** screen.  
Click **Advanced Options**, then scroll down to the **ACL Type** and **ACL Mode** settings. 

![EditDatasetAdvancedACLOptions](/images/SCALE/22.12/EditDatasetAdvancedACLOptions.png "Edit Dataset Advanced Options for ACLs")

You cannot change the **ACL Mode** setting until you select the **ACL Type** from the dropdown list. 
This changes the **ACL Mode** setting to the setting that works for the selected type. 

Changing the **ACL Type** from **Inherit** to any other type displays a warning window with the impact of the change.

![ChangeACLTypeWarnings](/images/SCALE/22.12/ChangeACLTypeWarning.png "Changing ACL Type Warning")

Leave **ACL Type** set to **Inherit** to preserve the ACL type from the parent dataset. For SCALE, which is based on Linux, select either **SMB/NFSv4** or **POSIX** options. 

NFSv4 is richer than POSIX and is used to losslessly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers). 
POSIX ACLs are a Linux-specific ZFS feature used when an organization data backup target does not support native NFSv4 ACLs. 
Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs. 

{{< hint warning >}}
All datasets within an SMB share path must have identical ACL types.
{{< /hint >}} 

The **ACL Mode** setting determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs. 
See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property. 

When **ACL Type** is set to **NFSv4** your **ACL Mode** options are **Passthrough** or **Restricted**. 
Select **Passthrough** to only update ACL entries related to the file or directory mode. 
**Restricted** which does not allow chmod to make changes to files or directories with a non-trivial ACL. 
An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. 
When set to **Restricted** it optimizes a dataset for SMB sharing, but it can also require further optimizations. For example, configuring an [rsync task]({{< relref "SCALE/SCALETutorials/DataProtection/RsyncTasksSCALE.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field.
{{< /expand >}}
### Editing ACL Item Permissions

{{< hint ok >}}
You can view permissions for any dataset but the edit option only displays on the **Permissions** widget for non-root datasets.

Configuring advanced permissions overrides basic permissions configured on the **Add Dataset** screen.
{{< /hint >}}
You can edit ACL item permissions when you create your dataset or modify them after you save the dataset.
{{< expand "Click Here for More Information" "v" >}}
From the **Datasets** screen, select the dataset on the tree table to display the dataset widgets for it.

If the **Permissions** widget is an NSFv4 ACL, the ACL items are buttons you can use to open an edit expandable with **Permissions Advanced** and **Flags Advanced** options. 
Select the settings to include or exclude. Click on the next item, owner, or group to open another expandable for that ACL item.

![PermissionsWidgetOwnerNSFv4Options](/images/SCALE/22.12/PermissionsWidgetOwnerNSFv4Options.png "Edit NFSv4 Permissions")

To change more permissions, such as the owner or group, or to add/remove ACL items, click **Edit** to open the **Edit ACL** screen for NSFv4 ACLs or the **Unix Permissions Editor** for POSIX ACLs. 

![EditACLScreen](/images/SCALE/22.12/EditACLScreen.png "Edit ACL NFSv4 Permissions")

The **Edit** button is the only option to change POSIX ACLs. Click to open the **UNIX Permissions Editor** screen. 

![EditACLSetACLPOSIXScreen](/images/SCALE/22.12/EditACLSetACLPOSIXScreen.png "Edit Permissions Unix Permissions Editor")

To change the owner or group, begin typing the user name, then select the user from the dropdown list.

![EditACLSelectOwner](/images/SCALE/22.12/EditACLSelectOwner.png "Edit ACL Select Owner")

Select the group name the same way.

Set the read/write/execute permissions in the **Access Control Entry** area of the screen.

![EditACLScreenEditUser](/images/SCALE/22.12/EditACLScreenEditUser.png "Edit ACL Edit Owner")

Click **Apply Owner** and **Apply Group** under the **Owner** and **Group** fields. 
To prevent errors, TrueNAS only submits changes if you enable **Apply Owner** and **Apply Group**.

{{< hint warning >}}
A common misconfiguration is removing the **Execute** permission from a dataset that is a parent to other child datasets.
Removing this permission results lost access to the path.
{{< /hint >}}

If you want to apply these settings to all child datasets, select **Apply permissions recursively**, then click **Confirm** and then **Continue** on the warning dialog.

Click **Save Access Control List** to save the change and if you do not want to use an ACL preset.
{{< /expand >}}
### Using Presets
From the **Edit ACL** configuration screen, click **Use ACL Preset** to open the **Select a preset ACL** window.
Select the radio button to either use an existing preset or to create a new preset, then select the preset from the dropdown.

![SelectAPresetACLNFSv4](/images/SCALE/22.12/SelectAPresetACLNFSv4.png "NFS4 Select a preset ACL")

The list of preset options is based on the type of ACL (NFSv4 or POSIX). 
Click **Continue** to open the **Edit ACL** screen with the selected preset added. 

When you first create a POSIX ACL, to use a preset, click **Set ACL** on the **Unix Permissions Editor** screen. 
Each default preset loads different permissions to the **Edit ACL** screen. The **Create a custom preset** opens the **Edit ACL** screen with no default permission settings.

Make any other changes you want to make to ACL items, adding or removing permission levels, assigning permissions to a particular user or group, then click **Save Access Control List** to save and close the editor. The **Permissions** widget displays your changes.

### Adding or Modifying ACL Items

To add a new item to an ACL, first click **Add Item**. Select that item then select the value in **Who**. Next set the permissions for this new item.

To modify existing ACL items, first select the item then make your changes to that item.

Select the **Who** value from the dropdown list of users on the system if modifying a **User** permission, or from a list of groups on the system if a **Group** permission, and then select the **Permissions** below the **Who** field. 

See [nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://manpages.debian.org/testing/nfs4-acl-tools/nfs4_setfacl.1.en.html).
Whatever you select in **Who** highlights the **Access Control List** entry on the left side of the screen.

Select **Flags** to specify how this ACL item applies to newly created directories and files within the dataset. 
Basic flags enable or disable ACE inheritance. 
Advanced flags allow further control of how the ACE applies to files and directories in the dataset. 
### Editing POSIX ACL Items

If your dataset uses a POSIX ACL, the **Edit** button on the **Permissions** widget opens the **Unix Permissions Editor** screen.
{{< expand "Click Here for More Information" "v" >}}

![EditPermissionsScreenPOSIXACL](/images/SCALE/22.12/EditPermissionsScreenPOSIXACL.png "POSIX Edit Permissions Screen")

First, select or type the name of the user in **Owner**. The owner controls which TrueNAS user and group has full control of this dataset.

Next select or type the name of the group in **Owner Group**.

Select the Read, Write, and Execute permissions for each User, Group, and Other, then click **Apply User** and **Apply Group**.

To open the POSIX **Edit ACL** screen, click **Set ACL**.

![EditACLSetACLPOSIXScreen](/images/SCALE/22.12/EditACLSetACLPOSIXScreen.png "POSIX Edit ACL Screen")

Select the ACE (Access Control Entity) on the **Access Control List** then set the **Owner** and **Group**. Click **Apply Owner** and **Apply Group**.
Select the user object from the **Who** dropdown list, and then select the permissions and flags.

If you want to apply this preset to all child datasets select **Apply permissions recursively**.

To add another item to your ACL, click **Add Item**. To display the ACL presets window, click **Use ACL Preset**.

Click **Save Access Control List** when you finish configuring settings for the user, group, or object ACE in the **Who** field.
{{< /expand >}}
### Using Shell to View ACL Details

To view ACL information from the console, go to **System Settings > Shell** and enter:

```shell
getfacl /mnt/path/to/dataset
```

{{< taglist tag="scaleacls" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}