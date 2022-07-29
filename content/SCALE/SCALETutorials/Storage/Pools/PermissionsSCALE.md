---
title: "Setting Up Permissions"
descritpion: ""
weight: 65
aliases: /scale/scaleuireference/storage/pools/permissionsscale/
tags:
 - scaleacls
 - scaledatasets
 - scalepools
 - scalezovls
 - scalestorage
---

{{< toc >}}

TrueNAS SCALE has a simple permissions manager and a full Access Control List (ACL) editor that defines dataset permissions.
Permissions control the actions users can perform on dataset contents.

## ACL Types in SCALE

TrueNAS SCALE offers two ACL types: POSIX (SCALE default) and NFSv4.

You can select which ACL types you want new datasets to use while creating them.
To change an existing dataset's ACL type, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> button next to the intended dataset and select *Edit Options*. Next, click *Advanced Options*and scroll down to the *ACL Type* drop-down. 

{{< hint warning >}}
**WARNING: Changing the ACL type affects how TrueNAS writes and reads on-disk ZFS ACL.**

When the ACL type changes from POSIX to NFSv4, internal ZFS ACLs do not migrate by default, and access ACLs encoded in posix1e extended attributes convert to native ZFS ACLs. 

When the ACL type changes from NFSv4 to POSIX, native ZFS ACLs do not convert to posix1e extended attributes, but ZFS will use the native ACL for access checks.    

To prevent unexpected permissions behavior, you must manually set new dataset ACLs recursively after changing the ACL type.   

Setting new ACLs recursively is destructive. We suggest creating a ZFS snapshot of the dataset before changing the ACL type or modifying permissions.
{{< /hint >}}

For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "ACLPrimer.md" >}}).

{{< expand "ACL Details from Shell" "v" >}}
To view ACL information from the console, go to **System Settings > Shell** and enter:

```shell
getfacl /mnt/path/to/dataset
```
{{< /expand >}}

## Unix Permissions Editor (POSIX)

The **Unix Permissions Editor** option allows basic adjustments to a dataset's ACL.  Click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the dataset to edit and choose *View Permissions*.
Select <i class="material-icons" aria-hidden="true" title="edit">edit</i> to access the **Unix Permissions Editor** page.

![BasicPermissionsSCALE](/images/SCALE/UnixPermissionsSCALE.png "Unix Permissions Editor")

{{< tabs "Edit Permissions" >}}
{{< tab "Owner" >}}
The *Owner* section controls which TrueNAS *User* and *Group* has full control of this dataset.

| Field | Description |
|------|-------------|
| User | Select a user to control the dataset. Users created manually or imported from a directory service appear in the menu. |
| Apply User | Confirms changes to *User*. To prevent errors, TrueNAS only submits *User* changes when you set this box. |
| Group | Select the group to control the dataset. Groups created manually or imported from a directory service appear in the menu. |
| Apply Group | Confirms changes to *Group*. To prevent errors, TrueNAS only submits *Group* changes when you set this box. |

{{< /tab >}}
{{< tab "Access" >}}
The *Access* section lets users define the basic *Read*, *Write*, and *Execute* permissions for the *User*, *Group*, and *Other* accounts that might access this dataset.
{{< /tab >}}
{{< tab "Advanced" >}}
The *Advanced* section lets users *Apply Permissions Recursively* to all directories, files, and child datasets within the current dataset. Users may also set *Traverse*, which applies permissions recursively to all child datasets in the current dataset.
{{< /tab >}}
{{< /tabs >}}

To switch from the basic permissions editor to the advanced ACL editor, click *Set ACL*. 

{{< hint info >}}
An Access Control List (ACL) is a set of account permissions associated with a dataset and applied to directories or files within that dataset.
TrueNAS uses ACLs to manage user interactions with shared datasets and creates them when users add a dataset to a pool.
{{< /hint >}}

The TrueNAS has options to *Select a preset ACL* or *Create a custom ACL*. The available preset ACLs are *POSIX_OPEN*, *POSIX_RESTRICTED*, or *POSIX_HOME*.

![ACLPresetsSCALE](/images/SCALE/ACLPresetsSCALE.png "ACL Presets")

When creating a custom ACL, use *Add Item* to apply additional permissions to the *Access Control List*.

{{< tabs "POSIX Edit ACL" >}}
{{< tab "POSIX ACL Editor" >}}

| Field | Description |
|-------|-------------|
| Path | Shows the full pathway to the file. |
| Owner | User who controls the dataset. This user always has permissions to read or write the ACL and read or write attributes. Users created manually or imported from a directory service appear in the drop-down menu. |
| Owner Group | The group which controls the dataset. This group has the same permissions as granted to the group@ Who. Groups created manually or imported from a directory service appear in the drop-down menu. |

You can select any user accounts or groups imported from a directory service as the primary *User* or *Group*.
{{< /tab >}}
{{< tab "Access Control List" >}}
Define *Who* the Access Control Entry (ACE) applies to and configure permissions and inheritance flags for the ACE.


| Field | Description |
|------|-------------|
| Who | Access Control Entry (ACE) user or group. Select a specific User or Group for this entry. **Owner@** applies this entry to the user that owns the dataset. **Group@** applies this entry to the group that owns the dataset. **Everyone@** applies this entry to all users and groups. See [nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://manpages.debian.org/testing/nfs4-acl-tools/nfs4_setfacl.1.en.html). |
| User | User account to which this ACL entry applies. |
| Permissions | Select permissions to apply to the chosen Who. Choices change depending on the Permissions Type. |
| Flags | How this ACE applies to newly created directories and files within the dataset. Basic flags enable or disable ACE inheritance. Advanced flags allow further control of how the ACE applies to files and directories in the dataset. |

{{< /tab >}}
{{< /tabs >}}

## ACL Manager (NFSv4)

For *NFSv4* share types, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the dataset to edit and choose *View Permissions*.
![ACLViewPermissionsSCALE](/images/SCALE/ACLViewPermissionsSCALE.png "ACL View Permissions")

Select <i class="material-icons" aria-hidden="true" title="edit">edit</i> and you will be directed to the **Edit ACL** page.
![ACLEditPermissionsSCALE](/images/SCALE/ACLEditPermissionsSCALE.png "ACL Edit Permissions")

{{< tabs "NFSv4 ACL Editing" >}}
{{< tab "NFSv4 ACL Editor" >}}

| Field | Description |
|------|-------------|
| Path | Shows the full pathway to the file. |
| Owner | User who controls the dataset. This user always has permissions to read or write the ACL and read or write attributes. Users created manually or imported from a directory service appear in the drop-down menu. |
| Owner Group | The group which controls the dataset. This group has the same permissions as granted to the group@ Who. Groups created manually or imported from a directory service appear in the drop-down menu. |

You can select any user accounts or groups imported from a directory service as the primary *User* or *Group*.
{{< /tab >}}
{{< tab "Access Control List" >}}
To add a new item to the ACL, click *Add Item*, define *Who* the Access Control Entry (ACE) applies to, and configure permissions and inheritance flags for the ACE.

| Field | Description |
|------|-------------|
| Add Item | Adds a new ACE to the Access Control List. |
| Who | Access Control Entry (ACE) user or group. Select a specific User or Group for this entry. **Owner@** applies this entry to the user that owns the dataset. **Group@** applies this entry to the group that owns the dataset. **Everyone@** applies this entry to all users and groups. See [nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://manpages.debian.org/testing/nfs4-acl-tools/nfs4_setfacl.1.en.html). |
| ACL Type | How the Permissions apply to the chosen Who. Choose Allow to grant the specified permissions and Deny to restrict the specified permissions. |
| Permissions Type | **Basic** shows general permissions. **Advanced** shows each permission type for finer control. |
| Permissions | Select permissions to apply to the chosen Who. Choices change depending on the Permissions Type. |
| Flags Type | Select the set of ACE inheritance Flags to display. Basic shows nonspecific inheritance options. Advanced shows specific inheritance settings for finer control. |
| Flags | How this ACE applies to newly created directories and files within the dataset. Basic flags enable or disable ACE inheritance. Advanced flags allow further control of how the ACE applies to files and directories in the dataset. |
| Strip ACL | This action removes all ACLs from the current dataset and any directories or files contained within this dataset. Stripping the ACL resets dataset permissions and can make data inaccessible until you create new permissions. |
| Use ACL Preset | Choosing an entry loads a preset ACL configured to match general permissions situations. The chosen preset will **REPLACE** the ACL currently displayed in the form and delete any unsaved changes. The preset options are *NFS4_OPEN*, *NFS4_RESTRICTED*, or *NFS4_HOME*.
{{< /tab >}}
{{< /tabs >}}

### Permissions and Flags

TrueNAS divides permissions into Basic and Advanced options. The basic options are commonly-used groups of advanced options.

Basic inheritance flags only enable or disable ACE inheritance. Advanced flags offer finer control for applying an ACE to new files or directories.

{{< tabs "Permissions and Flags" >}}
{{< tab "Basic Permissions" >}}
| Permission | Description |
|---------|-------------|
| Read (`r-x---a-R-c---`) | View file or directory contents, attributes, named attributes, and ACL. | 
| Modify (`rwxpDdaARWc--s`) | Adjust file or directory contents, attributes, and named attributes. Create new files or subdirectories. Includes the *Traverse* permission. | 
| Traverse (`--x---a-R-c---`) | Execute a file or move through a directory. | 
| Full Control (`rwxpDdaARWcCos`) | Apply all permissions. | 
{{< /tab >}}
{{< tab "Advanced Permissions" >}}
| Permission | Description |
|---------|-------------|
| Read Data (`r`) | View file contents or list directory contents. | 
| Write Data (`w`) | Create new files or modify any part of a file. | 
| Append Data (`p`) | Add new data to the end of a file. | 
| Read Named Attributes (`R`) | View the named attributes directory. | 
| Write Named Attributes (`W`) | Create a named attribute directory. Must be paired with the Read Named Attributes permission. | 
| Execute (`x`) | Execute a file, move through, or search a directory. | 
| Delete Children (`D`) | Delete files or subdirectories from inside a directory. | 
| Read Attributes (`a`) | View file or directory non-ACL attributes. | 
| Write Attributes (`A`) | Change file or directory non-ACL attributes. | 
| Delete (`d`) | Remove the file or directory. | 
| Read ACL (`c`) | View the ACL. | 
| Write ACL (`C`) | Change the ACL and the ACL mode. | 
| Write Owner (`o`) | Change the user and group owners of the file or directory. | 
| Synchronize (`s`) | Synchronous file read/write with the server. This permission does not apply to FreeBSD clients. | 
{{< /tab >}}
{{< tab "Basic Flags" >}}
| Flag | Description |
|---------|-------------|
| Inherit (`fd-----`) | Enable ACE inheritance. | 
| No Inherit (`-------`) | Disable ACE inheritance. | 
{{< /tab >}}
{{< tab "Advanced Flags" >}}
| Flag | Description |
|---------|-------------|
| File Inherit (`f`) | The ACE is inherited with subdirectories and files. It applies to new files. | 
| Directory Inherit (`d`) | New subdirectories inherit the full ACE. | 
| No Propagate Inherit (`n`) | The ACE can only be inherited once. | 
| Inherit Only (`i`) | Remove the ACE from permission checks but allow new files or subdirectories to inherit it. Inherit Only is removed from these new objects. | 
| Inherited (`I`) | Set when this dataset inherits the ACE from another dataset. | 
{{< /tab >}}
{{< /tabs >}}


