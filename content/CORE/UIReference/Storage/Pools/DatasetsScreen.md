---
title: "Datasets Screens"
description: "Describes how to configure a dataset on TrueNAS CORE."
weight: 17
tags:
- coredataset
- corepermissions
---

{{< toc >}}

Use the **Storage > Pools Add Dataset** screen to add a dataset to your TrueNAS. A TrueNAS dataset is a file system that is created within a data storage pool. There are two settings options, **BASIC OPTIONS** and **ADVANCED OPTIONS**. Use the basic option unless you want to customize your dataset for specific uses cases.

## Add Dataset Screen

### Dataset Basic Options

![AddDatasetBasicOptionsScreen](/images/CORE/13.0/AddDatasetBasicOptionsScreen.png "Add Dataset")

Use **SUBMIT** without entering settings to quickly create a dataset with the default options or after entering settings to save and create the dataset.

The **Name and Options** fields are required to create the dataset.
Datasets typically inherit most of these settings from the root or parent dataset, only a dataset name is required before clicking **SUBMIT**.

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Name** | Enter a unique identifier for the dataset. The name cannot be changed after the dataset is created. |
| **Comments** | Enter notes about the dataset. |
| **Sync** | Select an option from the dropdown list. Select **Standard** uses the sync settings requested by the client software. Select **Always** to wait for data writes to complete, or select **Disabled** to never wait for writes to complete. |
| **Compression level** |Select an option to encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space:<br> **lz4** is generally recommended as it maximizes performance and dynamically identifies the best files to compress.<br> **zstd** is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm that has several options for balancing speed and compression.<br> **gzip** options range from **1** for least compression, best performance, through **9** for maximum compression with greatest performance impact.<br> **zle** is a fast algorithm that only eliminates runs of zeroes.<br>**lzjb** is a legacy algorithm that is not recommended for use. |
| **Enable Atime**| Select an option from the dropdown list. **Inherit (off)** inherits from the pool. **on** updates the access time for files when they are read. **off** disables creating log traffic when reading files to maximize performance. |
| **Encryption** | Select **Inherit (non-encrypted)** to inherit the root or parent dataset encryption properties. Clear the checkmark to either not encrypt the dataset or to configure encryption settings other than those used by the root or parent dataset. See [Encryption]({{< relref "/CORE/CORETutorials/Storage/Pools/StorageEncryption.md" >}}) for more information on encryption. |
{{< /truetable >}}

Use the **Other Options** to help tune the dataset for particular data sharing protocols:

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **ZFS Deduplication** | Select an option to transparently reuse a single copy of duplicated data to save spacefrom the dropdown list. Options are **Inherit (off)**, **on**, **verify** or **off**. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. *Deduplicated data cannot be undeduplicated! |
| **Case Sensitivity** | Select an option from the dropdown list. **Sensitive** assumes file names are case sensitive. **Insensitive** assumes file names are not case sensitive. **Mixed** understands both types of file names. Case sensitivity cannot be changed after the dataset is created! |
| **Share Type** | Select an option from the dropdown list to define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. Options are **Generic** or **SMB**. AFP type shares use **SMB** unless directed to select **Generic**. The type of share cannot be changed after the dataset is created! |
{{< /truetable >}}

### Dataset Advanced Options

Use **ADVANCED OPTIONS** to add additional dataset settings such as quota management tools, basic ACL permissions and a few additional **Other Options** settings fields.

![AddDatasetAdvancedOptionsTop](/images/CORE/13.0/AddDatasetAdvancedOptionsTop.png "Add Dataset Advanced Options")

**Quota Settings for this dataset and/or this dataset and its child datasets**

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Quota for this datset** | Enter an integer to define the maximum allowed space for the dataset. **0** disables quotas. |
| **Quota warning alert at, %** | Enter an integer to generate a warning level [alert]({{< relref "/CORE/UIReference/System/AlertSettings.md" >}}) when consumed space reaches the defined percentage. By default, **Inherit** is selected and the dataset inherits this value from the parent dataset. Clear the checkmark to change the value. |
| **Quota critical alert at, %** | Enter an integer to generate a critical level [alert]({{< relref "/CORE/UIReference/System/AlertSettings.md" >}}) when consumed space reaches the defined percentage. By default, **Inherit** is selected and the dataset inherits this value from the parent dataset. Clear the checkmark to change the value.  |
| **Reserved space for this dataset** | Enter an integer to reserve additional space for datasets that contain logs which could eventually take up all the available free space. **0** is unlimited. |
{{< /truetable >}}

![AddDatasetAdvancedOptionsScreenBottom](/images/CORE/13.0/AddDatasetAdvancedOptionsScreenBottom.png "Add Dataset Advanced Options 2")

Additional **Other Options** Settings

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Read-only** | Select an option from the dropdown list. **On** prevents the dataset being modified. **Off** allows users accessing the dataset to modify its contents. |
| **Exec** | Select an option from the dropdown list. **On** allows processes to executd from within this dataset. **Off** prevents processes from executing in the dataset. It is recommended to set to **On**. |
| **Snapshot directory** | Select an option to control visibility of the <file>.zfs</file> directory on the dataset. Options are **Visible** or **Invisible**. |
|**Copies** | Select an option from the dropdown list to specify the number of duplicate ZFS user data copies stored on this dataset. Choose between **1**, **2**, or **3** redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| **Record Size** | Select an option from the dropdown list for the Logical block size in the dataset. Matching the fixed size of data, as in a database, could result in better performance. |
| **ACL Mode**| Select an option from the dropdown list to determine how [chmod](https://www.freebsd.org/cgi/man.cgi?query=chmod) behaves when adjusting file ACLs. See the [zfs](https://www.freebsd.org/cgi/man.cgi?query=zfs) `aclmode` property.<br> **Passthrough** only updates ACL entries that are related to the file or directory mode.<br> **Restricted** does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. **Restricted** is typically used to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an [rsync task]({{< relref "/CORE/CORETutorials/Tasks/CreatingRsyncTasks.md" >}}) with this dataset could require adding `--no-perms` in the Rsync task **Auxiliary Parameters** field. |
| **Metadata (Special) Small Block Size** | Enter an integer for the threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "/CORE/CORETutorials/Storage/Pools/FusionPool.md" >}}). Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Add a [special class vdev]({{< relref "/CORE/CORETutorials/Storage/Pools/FusionPool.md" >}}) to the pool before setting this property. |
{{< /truetable >}}

## Edit Datasets Screen

Use the **Storage > Pools Edit Dataset** screen to change setting for an existing dataset. The settings are identical to the **Add Dataset** screens above. to access the **Edit Dataset** screens, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset and select **Edit Options**.

## Dataset Edit Permissions Screen

Use the **Storage > Pools Edit Permissions** screen to change permissions settings for a parent dataset. To access the **Edit Permissions** screens, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset and select **Edit Options**.

![DatasetEditPermissionsScreen](/images/CORE/13.0/DatasetEditPermissionsScreen.png "Edit Permissions Screen")

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Dataset Path** | Displays the dataset path for the selected dataset. |
{{< /truetable >}}

**Owner Settings**

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **User** | Either type to search for or use dropdown list to select an existing user on the system that controls this dataset. Dropdown list displays all user on the TrueNAS system. |
| **Apply User** | Select to confirm selected user. As a check on errors, if not selected the user is not submitted. |
| **Group** | Either type to search for or use dropdown list to select an existing group on the system that controls this dataset. Dropdown list displays all user on the TrueNAS system. |
| **Apply Group** | Select to confirm selected group. As a check on errors, if not selected the group is not submitted. |
{{< /truetable >}}

**Access Settings**

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Access Mode** | Select the **Read**, **Write** and **Execute** checkboxes for **User**, **Group**, and **Other** to set the permissions levels.  |
{{< /truetable >}}

**Advanced Settings**

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Apply Permissions Recursively** | Select to apply permissions recursively to all directories and files within the current dataset. |
| **Traverse** | Select to apply permissions recursively to all child datasets of the current dataset. |
{{< /truetable >}}

### USE ACL Manager Screen

Click **USE ACL MANAGER** to open the ACL editor to further customize permissions. After selecting the **Select a preset ACL** radio buttons on the **Create an ACL** dialog, select a **Default ACL Option** from the dropdown list. Options are **OPEN**, **Restricted** or **HOME**. Or **Create a custom ACL**  and then click **CONTINUE** to display the **Edit ACL** screen with the default permissions for the option you selected.

![StoragePoolsEditACLTop](/images/CORE/13.0/StoragePoolsEditACLTop.png "Edit ACL Screen Top")

![StoragePoolsEditACLBottom](/images/CORE/13.0/StoragePoolsEditACLBottom.png "Edit ACL Screen Bottom")

**File Information Settings**

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Path** | Displays the dataset path for the selected dataset. |
| **User** | Either type to search for or use dropdown list to select an existing user on the system that controls this dataset. Dropdown list displays all user on the TrueNAS system. |
| **Apply User** | Select to confirm selected user. As a check on errors, if not selected the user is not submitted. |
| **Group** | Either type to search for or use dropdown list to select an existing group on the system that controls this dataset. Dropdown list displays all user on the TrueNAS system. |
| **Apply Group** | Select to confirm selected group. As a check on errors, if not selected the group is not submitted. |
{{< /truetable >}}

**Access Control List Settings - owner@, group@ and everyone@**

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Who** | Select from the dropdown list of options. Default for each of the three groups of settings is **owner@**, **group@** and **everyone@** but you can change this to either of these additional options **User** or **Group**. Selection modifies values displayed in other settings. |
| **ACL Type** | Select either **Allow** or **Deny** from the dropdown list to specify how permissions apply to the value selected in **Who**. Select **Allow** to grant the specified permissions or **Deny** to restrict the specified permissions. |
| **Permissions Type** | Select either **Basic** or **Advanced** from the dropdown list. **Basic** shows general permissions. **Advanced** shows each specific type of permission for finer control. |
| **Permissions** | Select the permissions to apply to the selected value in **Who**. The list of permissions changes based on the value selected in **Permissions Type**. See [Permissions]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) for more information on permissions by permissions type (**Basic** and **Advanced**). |
| **Flags Type** | Select the set of ACE inheritance flags to display. Options are **Basic** or **Advanced**. If **Basic** non-specific inheritance options show in the list. If **Advanced** the dropdown list shows specific inheritance settings for finer control. |
| **Flags** | Select how this ACE applies to newly created directories and files within the dataset. If **Flag Type** is set to **Basic** options are **Inherit** or **No Inherit**. If **Flag Type** is set to **Advanced** flags are **File Inherit**, **Directory Inherit**, **No Propagate Inherit**, **Inherit Only**, or **Inherited**. |
{{< /truetable >}}

Use **ADD ACL ITEM** to add another set of the ACL permission settings.

Select **Apply permissions recursively** to apply the ACL settings recursively to all directories and files in the current dataset.

**USE PERMISSIONS EDITOR** opens the [**EDIT Permissions**](#dataset-edit-permissions-screen) screen. 

{{< taglist tag="coredataset" limit="10" >}}

{{< taglist tag="corepools" limit="10" title="Related Articles" >}}
