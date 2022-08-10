---
title: "Edit ACL Screens"
description: "This article describes the ACL permissions screens and settings for POSIX and NFSv4 ACLs, and the conditions that result in addition setting options."
weight: 45
aliases: 
tags:
 - scaleacls
 - scaledatasets
 - scalestorage
---


{{< toc >}}


TrueNAS SCALE offers two ACL types, POSIX which is the SCALE default, and NFSv4. 
For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "ACLPrimer.md" >}}).

The **ACL Type** setting, found in the **Advanced Options** of both the **Add Dataset** and **Edit Dataset** screens, determines the ACL presets available on the **Select a preset ACL** window and also determines which permissions editor screens you see after you click the <span class="material-icons">edit</span> edit icon on the **Dataset Permissions** widget.

If **ACL Type** is set to **NSFv4**, you can select the **ACL Mode** you want to use. 

{{< hint ok >}}
NFSv4 is a type of access control list (ACL) that is not related to the type of share you might use (SMB or NFS).
{{< /hint >}}

## Unix Permissions Editor Screen

If you selected **POSIX** or **Inherit** as your ACL type, the first screen you see after you click edit on the **Dataset Permissions** widget is the **Storage > Edit Permissions** screen with the **Unix Permissions Editor** basic ACL configuration settings.

![EditPermissionsUnixPermissionsEditor](/images/SCALE/22.02/EditPermissionsUnixPermissionsEditor.png "Edit Permissions Unix Permissions Editor")

Use the settings on this screen to configure basic ACL permissions.

### Owner Settings
The **Owner** section controls which TrueNAS user and group has full control of this dataset.
{{< expand "Click here for details" "v" >}}
| Setting | Description |
|---------|-------------|
| **User** | Enter or select a user to control the dataset. Users created manually or imported from a directory service appear in the menu. |
| **Apply User** | Select to confirm user changes. To prevent errors, TrueNAS only submits changes only after you select this option. |
| **Group** | Enter or select the group to control the dataset. Groups created manually or imported from a directory service appear in the menu. |
| **Apply Group** | Select to confirm group changes. To prevent errors, TrueNAS only submits changes only after you select this option. |
{{< /expand >}}
### Access Settings
The **Access** section lets users define the basic **Read**, **Write**, and **Execute** permissions for the **User**, **Group**, and **Other** accounts that might access this dataset.

{{< hint warning >}}
A common misconfiguration is removing the **Execute** permission from a dataset that is a parent to other child datasets.
Removing this permission results lost access to the path.
{{< /hint >}}
### Advanced Settings
The **Advanced** section lets users **Apply Permissions Recursively** to all directories, files, and child datasets within the current dataset. 

To access advanced POSIX ACL settings, click **Add ACL** on the **Unix Permissions Editor**. The **Select a preset ACL** window displays with two radio buttons. 

## Select A Preset ACL 

{{< hint warning >}}
Selecting a preset replaces the ACL currently displayed on the Edit ACL screen and deletes any unsaved changes.
{{< /hint >}}

There are two different **Select a preset ACL** windows. 
{{< expand "Click here for details" "v" >}}
If using **POSIX** or **Inherit** as the **ACL Type** setting, the window with three setting options displays before you see the **Edit ACL** screen. 
These setting options allow you to select and use a pre-configured set of permissions that match general permissions situations or to create a custom set of permissions. 
You can add to a pre-configured ACL preset on the **Edit ACL** screen.

![PosixSelectAPresetACLWindow](/images/SCALE/22.02/PosixSelectAPresetACLWindow.png "POSIX Select a Preset ACL")

If using **NFSv4** as the **ACL Type** setting, you access the NFS4 **Select a Preset ACL** window from the **Edit ACL** screen by clicking **Use Preset ACL**.

![NFS4SelectAPresetACLDialog](/images/SCALE/22.02/NFS4SelectAPresetACLDialog.png "NFS4 Select a Preset ACL")

The **ACL Type** setting determines the pre-configured options presented on the **Default ACL Options** dropdown list on each of these windows. 
For POSIX, the options are **POSIX_OPEN**, **POSIX_RESTRICTED**, or **POSIX_HOME**. For NFSv4, the options are **NFS4_OPEN**, **NFS4_RESTRICTED**, **NFS4_HOME**, and **NFS4_DOMAIN_HOME**.

| Setting | Description |
|---------|-------------|
| **Select a preset ACL** | Click this radio button to populate the **Default ACL Options** dropdown list with a set of pre-configured POSIX permissions. |
| **Create a custom ACL** | Click this radio button to display the **Edit ACL** screen with no default permissions, users or groups to configure your own set of permissions after you click **Continue**. |

Click **Continue** to display the **Edit ACL** screen.
{{< /expand >}}
## Edit ACL Screen

The **Edit ACL** screen displays different setting options based on the **ACL Type** setting on the **Add Dataset** or **Edit Dataset** screen in the **Advanced Options** section.

The section below describe the differences between screens for each ACL type.

### ACL Editor Settings - POSIX and NFSv4

Select any user account or group manually entered or imported from a directory service in the **Owner** or **Owner Group**. The value entered or selected in each field displays in the **Access Control List** below these fields. 

**Dataset** displays the dataset path (name) you selected to edit.

![ACLEditorSettings](/images/SCALE/22.02/ACLEditorSettings.png "ACL Editor Settings") 

### Access Control List - POSIX and NFS4
The **Access Control List** section displays the items and a permissions summary for the **owner@**, **group@** and **everyone@** for both POSIX and NSFv4 ACL types. The list of items changes based on a selected pre-configured set of permissions.

To add a new item to the ACL, click **Add Item**, define **Who** the Access Control Entry (ACE) applies to, and configure permissions and inheritance flags for the ACE.

### Edit ACL Functions - POSIX and NFS4
These functions display on the **Edit ACL** screen for both POSIX and NSFv4 ACL types except for **Strip ACL**, it only displays for NSFv4 types.
{{< expand "Click here for details" "v" >}}
![EditACLScreenNFSv4Type](/images/SCALE/22.02/EditACLScreenNFSv4Type.png "NFS4 Edit ACL Screen") 

| Setting | Description |
|---------|-------------|
| **Apply permissions recursively** | Select to apply all settings or changes on the **Edit ACL** screen to all child datasets in the path in **Dataset**. |
| **Add Item** | Adds a new ACE to the **Access Control List**. |
| **Strip ACL** | (NSFv4 only) Remove all ACLs from the current dataset and any directories or files contained within this dataset. Stripping the ACL resets dataset permissions and can make data inaccessible until you create new permissions. |
| **Permissions Editor** | (POSIX only) Displays the **Unix Permissions Editor** screen for POSIX ACL types. |
| **Use ACL Preset** | Displays the **Select a preset ACL** window. If the **ACL Type** setting, found in the **Advanced Options** of both the **Add Dataset** and **Edit Dataset** screens, is **POSIX** or **Inherit** the **Default ACL Options** dropdown displays POSIX pre-configured options. If set to NFSv4, the preset options displayed are pre-configured NSFv4 options. |
| **Save Access Control List** | Saves settings or changes made on the **Edit ACL** screen. |
{{< /expand >}}

### POSIX Access Control Entry Settings
The POSIX **Access Control Entry** settings include **Who**, **Permissions** and **Flags** options.
{{< expand "Click here for details" "v" >}}
![EditACLPOSIXAccessControlEntrySettings](/images/SCALE/22.02/EditACLPOSIXAccessControlEntrySettings.png "POSIX Access Control Entry Settings")

| Setting | Description |
|---------|-------------|
| **Who** | Select the user or group from the dropdown list the permissions apply to. |
| **Permissions** | Select the checkbox for each permission type (**Read**, **Write** and **Execute**) to apply to the user or group in **Who**. "
| **Flags** | Select the **Default** option to include a flag setting for the user or group in **Who**. |
{{< /expand >}}
### NFS4 Access Control Entry Settings
There are two **Access Control Entry** settings, **Who** and **ACL Type**. 
{{< expand "Click here for details" "v" >}}
The NFSv4 **ACL Type** radio buttons change the **Permissions** and **Flags** setting options. Select **Allow** to grant the specified permissions or **Deny** to restrict the permissions for the user or group in **Who**. 

![EditACLNFSv4AccessControlEntrySettings](/images/SCALE/22.02/EditACLNFSv4AccessControlEntrySettings.png "NSFv4 Access Control Entry Settings") 
{{< /expand >}}
### NFS4 Permissions and Flags

TrueNAS divides permissions and inheritance flags into basic and advanced options. The basic permissions options are commonly-used groups of advanced options.
Basic inheritance flags only enable or disable ACE inheritance. Advanced flags offer finer control for applying an ACE to new files or directories.

#### Permissions Settings - Basic
Click the **Basic** radio button to display the **Permissions** dropdown list of options to apply to the user or group in **Who**.
{{< expand "Click here for details" "v" >}}

![EditACLNFSv4BasicPermissionsOptions](/images/SCALE/22.02/EditACLNFSv4BasicPermissionsOptions.png "NSFv4 Basic Permissions Options") 

| Permission | CLI Command | Description |
|------------|-------------|-------------|
| **Read** | `r-x---a-R-c---` | View file or directory contents, attributes, named attributes, and ACL. | 
| **Modify** | `rwxpDdaARWc--s` | Adjust file or directory contents, attributes, and named attributes. Create new files or subdirectories. Includes the *Traverse* permission. | 
| **Traverse** | `--x---a-R-c---` | Execute a file or move through a directory. | 
| **Full Control** | `rwxpDdaARWcCos` | Apply all permissions. | 
{{< /expand >}}
#### Permissions Settings - Advanced
Click the **Advanced** radio button to display the **Permissions** optons to apply to the user or group in **Who**.
{{< expand "Click here for details" "v" >}}

![EditACLNSFv4AdvancedPermissionsOptions](/images/SCALE/22.02/EditACLNSFv4AdvancedPermissionsOptions.png "NSFv4 Advanced Permissions Options") 

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
{{< /expand >}}
#### Flag Settings - Basic
Click the **Basic** radio button to display the flag settings that enable or disable ACE inheritance.
{{< expand "Click here for details" "v" >}}

![EditACLNSFv4BasicFlagsOptions](/images/SCALE/22.02/EditACLNSFv4BasicFlagsOptions.png "NSFv4 Basic Flags Options")

| Flag | CLI Command | Description |
|------|-------------|-------------|
| **Inherit** | `fd-----` | Enable ACE inheritance. | 
| **No Inherit** | `-------` | Disable ACE inheritance. | 
{{< /expand >}}
#### Flag Settings - Advanced
Click the **Advanced** radio button to display the flag settings that not only enable or disable ACE inheritance but also offer finer control for applying an ACE to new files or directories.
{{< expand "Click here for details" "v" >}}

![EditACLNSFv4AdvancedFlagsOptionst](/images/SCALE/22.02/EditACLNSFv4AdvancedFlagsOptions.png "NFSv4 Advanced Flags Options") 

| Flag | CLI Command | Description |
|------|-------------|-------------|
| **File Inherit** | `f` | The ACE is inherited with subdirectories and files. It applies to new files. | 
| **Directory Inherit** | `d` | New subdirectories inherit the full ACE. | 
| **No Propagate Inherit** | `n` | The ACE can only be inherited once. | 
| **Inherit Only** | `i` | Remove the ACE from permission checks but allow new files or subdirectories to inherit it. Inherit Only is removed from these new objects. | 
| **Inherited** | `I` | Set when this dataset inherits the ACE from another dataset. | 
{{< /expand >}}


{{< taglist tag="scaleacls" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}