---
title: "ACL Screens"
description: "Describes the ACL permissions screens, settings for POSIX and NFSv4 ACLs, and the conditions that result in additional setting options."
weight: 50
aliases:
 - /scale/scaleuireference/datasets/editaclscreens/
 - /scale/scaleuireference/storage/datasets/editaclscreens/
 - /scale/scaleclireference/filesystem/
 - /scale/scaleclireference/filesystem/cliacltemplate/
 - /scale/datasets/editaclscreens/
 - /scale/scaleuireference/storage/pools/permissionsscale
tags:
 - acl
 - datasets
 - permissions
doctype: reference
---


TrueNAS offers two Access Control List (ACL) types: POSIX (the TrueNAS default) and NFSv4.
For a more in-depth explanation of ACLs and configurations in TrueNAS, see our [ACL Primer](https://www.truenas.com/docs/references/aclprimer/).

The **Dataset Preset** option on the **Add Dataset** screen sets the ACL type applied for SMB shares, apps, multi-protocol shares, and general-use datasets.

The **ACL Type** setting in the **Advanced Options** on both the **Add Dataset** and **Edit Dataset** screens determines the ACL presets available on the ACL **Select a preset ACL** window.
It also determines which permissions editor screens you see after you click the <span class="material-icons">edit</span> edit icon on the **Dataset Permissions** card.

Set **ACL Type** to **NSFv4** to activate and select the **ACL Mode** the dataset uses.

{{< include file="/static/includes/SkipExecutionCheckWarning.md" >}}

## Unix Permissions Editor Screen

The **Unix Permissions Editor** opens when editing a dataset with a POSIX ACL. It shows the ACL Owner and Owner Group settings, and allows changing the defaults for each of these settings.
The **Permissions** card shows an at-a-glance view of the POSIX ACL settings associated with the dataset.

{{< trueimage src="/images/SCALE/Datasets/EditPermissionsUnixPermissionsEditor.png" alt="Unix Permissions Editor" id="Unix Permissions Editor" >}}

**Set ACS** opens the **Select a preset ACL** dialog.

**Apply Permissions Recursively** applies the current ACL or permissions settings to all child datasets and directories. Shows a confirmation dialog before changes are applied, and then shows the **Apply permissions to child datasets** option.

{{< hint type="tip" title="Execute Permissions" >}}
A common misconfiguration is removing the **Execute** permission from a dataset that is a parent to other child datasets.
Removing this permission results in lost access to the path.
{{< /hint >}}

{{< expand "POSIX ACL Owner Settings" "v" >}}
The **Owner** section controls which TrueNAS user and group has full control of this dataset.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **User** | Enter or select a user to control the dataset. Users created manually or imported from a directory service appear in the menu. |
| **Apply User** | Select to confirm user changes. To prevent errors, TrueNAS only submits changes after you select this option. |
| **Group** | Enter or select the group to control the dataset. Groups created manually or imported from a directory service appear in the menu. |
| **Apply Group** | Select to confirm group changes. To prevent errors, TrueNAS only submits changes after you select this option. |
{{< /truetable >}}
{{< /expand >}}

### POSIX ACL Access Settings
The **Access** section shows check boxes for the basic **Read**, **Write**, and **Execute** permissions and the **User**, **Group**, and **Other** accounts that might access this dataset.

## Select a Preset ACL

There are two **Select a preset ACL** windows. The first shows options to use a preset ACL or customise the ACL. The other, opened by clicking **Use Preset** on the **Edit ACL** screen, only shows the **Preset** dropdown list.

{{< trueimage src="/images/SCALE/Datasets/PosixSelectAPresetACLWindow.png" alt="POSIX Select a Preset ACL" id="POSIX Select a Preset ACL" >}}

{{< trueimage src="/images/SCALE/Datasets/PosixSelectAPresetACLWindow2.png" alt="Select a Preset ACL from Use Preset" id="Select a Preset ACL from Use Preset" >}}

A selected preset replaces the ACL shown on the **Edit ACL** screen and deletes any unsaved changes.

The POSIX **Select a preset ACL** window opened with the **Set ACL** shows two radio button options:
* **Select a preset ACL** 
* **Create a custom ACL**

**Create a custom ACL** hides the **Preset** dropdown list and shows the **Continue** button that opens the **Edit ACL** screen for a POSIX ACL.

**Use Preset ACL** on the **Edit ACL** screen opens the **Select a Preset ACL** window showing the **Presets** dropdown list and a general statement about ACL presets.

The **Preset** dropdown list shows the preconfigured set of permissions that match general situations.

POSIX preset ACL options are **POSIX_OPEN**, **POSIX_RESTRICTED**, **POSIX_HOME**, and **POSIX_ADMIN**.
NFSv4 present ACL options are **NFS4_OPEN**, **NFS4_RESTRICTED**, **NFS4_HOME**, **NFS4_DOMAIN_HOME**, and **NFS4_ADMIN**.

TrueNAS built-in presets automatically include entries for the `builtin_users` and `builtin_administrators` groups.
Systems joined to Active Directory also include domain users and domain admins entries. User-created presets are not affected.

The **Edit ACL** screen shows options based on ACL type (POSIX or NFSv4).

The section below describes the differences between screens for each ACL type.

## Edit ACL Screen

The **Edit ACL** shows access control list settings for a POSIX or NFSv4 ACL.

The screen is divided into sections:
* **ACL Editor** with the **Owner** and **Owner Group** settings.
* **Access Control List** showing all the entries currently in the ACL.
* **Access Control Entry** showing settings to configure new or change a selected existing ACL entry.

**Path** shows the mount path to the selected dataset.

{{< trueimage src="/images/SCALE/Datasets/ACLEditorSettings.png" alt="ACL Editor Owner Settings" id="ACL Editor Owner Settings" >}}

### Access Control List

The **Access Control List** section lists items and a permissions summary for each ACL entry (owner, group, etc). The list of items changes based on a selected pre-configured set of permissions.

**Add Item** adds a new entry, defaulting to **User -?** until you configure it in the **Access Control Entry** section of the screen.

### Access Control Entry

Shows settings to configure a new ACL entry. It is partitioned into configuration areas:
* **Who**
* **ACL Type**
* **Permissions**
* **Flags**

{{< trueimage src="/images/SCALE/Datasets/EditACLScreenNFSv4Type.png" alt="NFS4 Edit ACL Screen" id="NFS4 Edit ACL Screen" >}}

Additional options and buttons are shown under the **Access Control List** section.

**Apply permissions recursively** applies all settings or changes on the **Edit ACL** screen to all child datasets in the path in **Dataset**.

**Save Access Control List** saves settings or changes made on the **Edit ACL** screen.

**Strip ACL** removes all ACLs from the current dataset and any directories or files contained within this dataset. Stripping the ACL resets dataset permissions and can make data inaccessible until you create new permissions. Only shows for NFSv4 ACLs.

**Presets** has two buttons: **Use Preset** and **Save as Preset**.
**Use Preset** opens the **Select a preset ACL** window. Presets shown are based on the type of ACL (POSIX or NFSv4).
**Save as Preset** saves changes made to the current access control list as a custom preset and adds it to the **Access Control List**.
**Permissions Editor** opens the **Unix Permissions Editor** screen for POSIX ACL types. Only shows for POSIX ACLs.

### Access Control Entry Settings

The POSIX **Access Control Entry** settings include **Who**, **Permissions**, and **Flags** options. 

{{< trueimage src="/images/SCALE/Datasets/EditACLPOSIXAccessControlEntrySettings.png" alt="POSIX Access Control Entry Settings" id="POSIX Access Control Entry Settings" >}}

{{< expand "POSIX ACE Setting" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Who** | Select the user or group from the dropdown list the permissions apply to.  **User** denotes access rights for users identified by the entry qualifier. **Group** denotes access rights for the filegroup. **Other** denotes access rights for processes that do not match any other entry in the ACL. **Group Obj** denotes access rights for the filegroup. **User Obj** denotes access rights for the file owner.<br>**Mask** denotes the maximum access rights user, troup object, or group type entries can grant. |
| **Permissions** | Select the checkbox for each permission type (**Read**, **Write** and **Execute**) to apply to the user or group in **Who**.
| **Flags** | Select the **Default** option to include a flag setting for the user or group in **Who**. |
{{< /truetable >}}
{{< /expand >}}

The NFSv4 **ACL Type** radio buttons change the **Permissions** and **Flags** setting options. **Allow** grants the specified permissions. **Deny** restricts the permissions for the user or group in **Who**.

{{< trueimage src="/images/SCALE/Datasets/EditACLNFSv4AccessControlEntrySettings.png" alt="NSFv4 Access Control Entry Settings" id="NSFv4 Access Control Entry Settings" >}}

{{< expand "NFSv4 ACE Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Who** | Access Control Entry (ACE) user or group. Sets a specific user or group for the entry, and shows the **User** or **Group** dropdown lists showing avaialbe users or group names. See [nfs4_setfacl(1) NFSv4 ACL ENTRIES](https://man7.org/linux/man-pages/man1/nfs4_setfacl.1.html). **owner@** applies this entry to the user that owns the dataset. **group@** applies this entry to the group that owns the dataset. **everyone@** applies this entry to all users and groups.  |
| **User** | Denotes access rights for users identified by the qualifier. Shows when **Who** is set to **User**. |
| **Group** | Denotes access rights for groups identified by the qualifier.   Shows when **Who** is set to **Group**. |
{{< /truetable >}}
{{< /expand >}}

### Permissions and Flags

TrueNAS divides permissions and inheritance flags into basic and advanced options. The basic permission options are commonly used groups of advanced options.
Basic inheritance flags only enable or disable ACE inheritance. Advanced flags offer finer control for applying an ACE to new files or directories.

NFSv4 ACLs have more permission and flag options than POSIX ACLS.

#### Basic Permissions Settings

The **Basic** radio button shows the **Permissions** dropdown list of options that apply to the user or group in **Who**.

{{< trueimage src="/images/SCALE/Datasets/EditACLNFSv4BasicPermissionsOptions.png" alt="NSFv4 Basic Permissions Options" id="NSFv4 Basic Permissions Options" >}}

{{< expand "NFSv4 Basic Permissions Settings" "v" >}}
{{< truetable >}}
| Permission | CLI Command | Description |
|------------|-------------|-------------|
| **Read** | `r-x---a-R-c---` | View file or directory contents, attributes, named attributes, and ACL. | 
| **Modify** | `rwxpDdaARWc--s` | Adjust file or directory contents, attributes, and named attributes. Create new files or subdirectories. Includes the *Traverse* permission. | 
| **Traverse** | `--x---a-R-c---` | Execute a file or move through a directory. | 
| **Full Control** | `rwxpDdaARWcCos` | Apply all permissions. | 
{{< /truetable >}}
{{< /expand >}}

#### Advanced Permissions Settings

The **Advanced** radio button shows the **Permissions** options for the user or group in **Who**.

{{< trueimage src="/images/SCALE/Datasets/EditACLNSFv4AdvancedPermissionsOptions.png" alt="NSFv4 Advanced Permissions Options" id="NSFv4 Advanced Permissions Options" >}}

{{< expand "NFSv4 Advanced Permisions Settings" "v" >}}
{{< truetable >}}
| Permission | CLI Command | Description |
|------------|-------------|-------------|
| **Read Data** | `r` | View file contents or list directory contents. | 
| **Write Data** | `w` | Create new files or modify any part of a file. | 
| **Append Data** | `p` | Add new data to the end of a file. | 
| **Read Named Attributes** | `R` | View the named attributes directory. | 
| **Write Named Attributes** | `W` | Create a named attribute directory. Must be paired with the Read Named Attributes permission. | 
| **Execute** | `x` | Execute a file, move through, or search a directory. | 
| **Delete Children** | `D` | Delete files or subdirectories from inside a directory. | 
| **Read Attributes** | `a` | View file or directory non-ACL attributes. | 
| **Write Attributes** | `A` | Change file or directory non-ACL attributes. | 
| **Delete** | `d` | Remove the file or directory. | 
| **Read ACL** | `c` | View the ACL. | 
| **Write ACL** | `C` | Change the ACL and the ACL mode. | 
| **Write Owner** | `o` | Change the user and group owners of the file or directory. | 
| **Synchronize** | `s` | Synchronous file read/write with the server. This permission does not apply to FreeBSD clients. |
{{< /truetable >}}
{{< /expand >}}

#### NFSv4 Basic Flags

The **Basic** radio button shows the flag settings that enable or disable ACE inheritance.

{{< trueimage src="/images/SCALE/Datasets/EditACLNSFv4BasicFlagsOptions.png" alt="NSFv4 Basic Flags Options" id="NSFv4 Basic Flags Options" >}}

{{< expand "NFSv4 Basic Flag Settings" "v" >}}
{{< truetable >}}
| Flag | CLI Command | Description |
|------|-------------|-------------|
| **Inherit** | `fd-----` | Enable ACE inheritance. | 
| **No Inherit** | `-------` | Disable ACE inheritance. | 
{{< /truetable >}}
{{< /expand >}}

#### NFSv4 Advanced Flags

The **Advanced** radio button shows the flag settings that enable or disable ACE inheritance and offer finer control for applying an ACE to new files or directories.

{{< trueimage src="/images/SCALE/Datasets/EditACLNSFv4AdvancedFlagsOptions.png" alt="NFSv4 Advanced Flags Options" id="NFSv4 Advanced Flags Options" >}}

{{< expand "NFSv4 Advanced Flag Settings" "v" >}}
{{< truetable >}}
| Flag | CLI Command | Description |
|------|-------------|-------------|
| **File Inherit** | `f` | The ACE is inherited with subdirectories and files. It applies to new files. | 
| **Directory Inherit** | `d` | New subdirectories inherit the full ACE. | 
| **No Propagate Inherit** | `n` | The ACE can only be inherited once. | 
| **Inherit Only** | `i` | Remove the ACE from permission checks but allow new files or subdirectories to inherit it. Inherit Only is removed from these new objects. | 
| **Inherited** | `I` | Set when this dataset inherits the ACE from another dataset. |
{{< /truetable >}}
{{< /expand >}}
