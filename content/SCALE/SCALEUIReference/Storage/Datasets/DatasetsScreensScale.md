---
title: "Datasets Screen"
description: "Provides information on the settings and functions found on the Datasets screen and widgets."
weight: 10
tag: 
- scaledatasets
- scalestorage
- scaleacls
- scaleencryption
- scalequotas
---


{{< toc >}}


The **Datasets** screen and widgets display information about datasets, provide access to data management functions, indicate the dataset roles, list the services using the dataset, show the encryption status and the permissions the dataset has in place. 
The screen focus is on managing data storage including user and group quotas, snapshots, and other data protection measures. 

The **Datasets** screen displays **No Datasets** with a **Create Pool** button in the center of the screen until you add a pool and the first root dataset.

{{< trueimage src="/images/SCALE/22.12/DatasetsScreenBeforeAddingAPool.png" alt="Datasets Screen Without a Pool" id="1: Datasets Screen Without a Pool" >}}

After creating a dataset, the left side of the screen displays a tree table that lists parent or child datasets (or Zvols). The **Details for *datasetname*** area on the right side of the screen displays a set of dataset widgets.

{{< hint type=note >}}
Large petabyte systems might report storage numbers inaccurately. Storage configurations with more than 9,007,199,254,740,992 bytes round the last 4 digits.

For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}

{{< trueimage src="/images/SCALE/22.12/DatasetsScreenAfterAddingAPool.png" alt="Datasets Screen With a Pool" id="2: Datasets Screen With a Pool" >}}

**Import Data** opens the **[Import Data]({{< relref "ImportDataScreenSCALE.md" >}})** screen. 

**Add Zvol** opens the **[Add Zvol]({{< relref "ZvolsScreensScale.md" >}})** screen.

**Add Dataset** opens the **[Add Dataset](#add-and-edit-dataset-screens)** screen.

## Dataset Tree Table

The datasets tree table lists datasets in an expandable hierarchical structure with the root dataset first, then each direct child or non-root parent dataset follows and with their child datasets nested under them. 
{{< expand "Click Here for More Information" "v" >}}
Click on any root or non-root parent dataset to expand the tree table.
Click on any dataset to select it and display the dataset widgets for that dataset.

{{< trueimage src="/images/SCALE/22.12/DatasetsScreenTreeTableExpanded.png" alt="Dataset Tree Table" id="3: Dataset Tree Table" >}}

The table includes used and available storage space for that dataset, encryption status (locked, unlocked, or unencrypted), the role of that dataset, and what service uses it (i.e., the system dataset, a share, virtual machine, or application). 

### Tree Table Encryption 

{{< include file="/_includes/EncryptionIconsSCALE.md" type="page" >}}

### Tree Table Roles
Dataset tree table roles are represented by icons. Hover over the icons to view the description or icon label. 
Roles in the dataset tree correspond to the **[Roles widget](#roles-widget)**. 
A dataset with an active task include an activity spinner when that task is in progress.

{{< truetable >}}
| Role | Icon | Description |
|------|------|-------------|
| System dataset | ![DatasetRolesSystemDatasetIcon](/images/SCALE/22.12/DatasetRolesSystemDatasetIcon.png "Roles System Dataset Icon") | Indicates the parent (root) dataset designated as the system dataset. To change the system dataset go to **System Settings > Advanced Settings** and edit the **System Dataset Pool**. |
| Share | ![DatasetRolesShareGenericIcon](/images/SCALE/22.12/DatasetRolesShareGenericIcon.png "Roles Dataset Share Icon") | Indicates the dataset is used by a share or that child datasets of the parent are used by shares. |
| SMB share | ![DatasetRolesSMBShareIcon](/images/SCALE/22.12/DatasetRolesSMBShareIcon.png "Roles Dataset SMB Share Icon") | Indicates the dataset is used by an SMB share. |
| VM | ![DatasetRolesVMIcon](/images/SCALE/22.12/DatasetRolesVMIcon.png "Roles Dataset VM Icon") | Indicates the dataset is used by a virtual machine (VM). |
| Apps | ![DatasetRolesAppsIcon](/images/SCALE/22.12/DatasetRolesAppsIcon.png "Roles Apps Dataset Icon") | Indicates this dataset is used by applications and stores Kubernetes configuration and container related data. |
{{< /truetable >}}

{{< /expand >}}

## Dataset Widgets
Each dataset has a set of information cards (widgets) that display in the **Details for *datasetname*** area of the screen. 
These widgets provide information grouped by functional areas. 
The set of widgets for a root or parent dataset differs from child datasets or datasets used by another service or with encryption.

Dataset widgets are:
* **[Dataset Details](#datasets-details-widget)** 
* **[Dataset Space Management](#dataset-space-management-widget)**
* **[Data Protection](#data-protection-widget)**
* **[Permissions](#permissions-widget)**
* **[Roles](#roles-widget)**
* **[ZFS Encryption](#zfs-encryption-widget)**

### Datasets Details Widget
The **Dataset Details** widget lists information on dataset type, and the sync, compression level, case sensitivity, Atime and ZFS deduplication settings. **Path** displays the full path for the selected dataset. 
{{< expand "Click Here for More Information" "v" >}}
A root dataset path displays the pool name alone.

{{< trueimage src="/images/SCALE/22.12/DatasetDetailsWidgetRootDataset.png" alt="Dataset Details Widget Root Dataset" id="4: Dataset Details Widget Root Dataset" >}}

A child dataset path displays the root dataset (pool) name and parent dataset.

{{< trueimage src="/images/SCALE/22.12/DatasetDetailsWidgetChildDataset.png" alt="Dataset Details Widget Child Dataset" id="5: Dataset Details Widget Child Dataset" >}}

**Edit** opens the **[Edit Dataset](#add-and-edit-dataset-screens)** screen for the selected dataset.

**Promote** appears on the **Dataset Details** widget when you select a cloned snapshot on the dataset tree table. 
This option promotes the cloned child dataset and allows users to delete the parent volume that created the clone. 
Otherwise, you cannot delete a clone while the original volume still exists. See [zfs-promote.8](https://openzfs.github.io/openzfs-docs/man/8/zfs-promote.8.html).

Non-root parent and child dataset versions of the card include the **[Delete](#delete-dataset)** option. 
To delete a root dataset, use the **Disconnect/Export** option on the **[Storage Dashboard]({{< relref "StorageDashboardScreen.md" >}})** screen.
{{< /expand >}}

#### Delete Dataset
The **Delete** button on the **Dataset Details** widget opens a window that includes information about other options or services that use the dataset, for example a parent to other datasets and the services the child datasets of a parent dataset uses. 
Non-root parent and child datasets include the **Delete** button. 
{{< expand "Click Here for More Information" "v" >}}
The **Delete** window for a parent dataset (non-root) includes information about snapshots, shares or other services such as Kubernetes or VMs that use the dataset.
If it is a parent to other datasets, the window includes the services a child dataset of this parent dataset uses.

{{< trueimage src="/images/SCALE/22.12/DeleteDatasetParentDataset.png" alt="Delete Dataset Parent Dataset" id="6: Delete Dataset Parent Dataset" >}}

If a child dataset uses services the window displays them.

{{< trueimage src="/images/SCALE/22.12/DeleteDatasetChildUsingAService.png" alt="Delete Dataset Child Dataset Using a Service" id="7: Delete Dataset Child Dataset Using a Service" >}}

If a child dataset is not used by a service, it does not display a service.

{{< trueimage src="/images/SCALE/22.12/DeleteDatasetChildDataset.png" alt="Delete Dataset Child Dataset" id="8: Delete Dataset Child Dataset" >}}

The window includes field where you type the path for the dataset and a **Confirm** option you must select to activate the **Delete Dataset** button.
{{< /expand >}}

### Dataset Space Management Widget
The **Dataset Space Management** widget displays space allocation (reserved, used, available) for all datasets.  
{{< expand "Click Here for More Information" "v" >}}
The widget displays after unlocking encrypted datasets. 
The widget donut graph provides at-a-glance information and numeric values for the space allocated and used in the selected dataset. 
This includes data written and space allocated to child datasets of this dataset. 
It provides access to quota configuration options for the parent dataset and the child dataset of the parent, and for users and groups with access to the dataset.

{{< trueimage src="/images/SCALE/22.12/DatasetSpaceManagementWidgetRootDataset.png" alt="Dataset Space Management Widget Root Dataset" id="9: Dataset Space Management Widget Root Dataset" >}}

**Edit** opens the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen where you can set quotas for the dataset.

**[Manage User Quotas]({{< relref "ManageQuotas.md" >}})** screen and **Manage Group Quotas** opens the **[Manage Group Quotas]({{< relref "ManageQuotas.md" >}})** screen.
{{< /expand >}}

### Data Protection Widget
The **Data Protection** widget displays for all datasets. 
It displays the number snapshots and other data protection related scheduled tasks (replication, cloud sync, rsync and snapshots) configured on the system. 
{{< expand "Click Here for More Information" "v" >}}
The **Data Protection** widget links to the tasks found on the **Data Protection** screen. 

{{< trueimage src="/images/SCALE/22.12/DataProtectionWidget.png" alt="Data Protection Widget" id="10: Data Protection Widget" >}}

**Create Snapshot** opens the **[Add Snapshot]({{< relref "SnapshotsScreens.md" >}})** screen.

**Manage Snapshots** opens the **[Snapshots]({{< relref "SnapshotsScreens.md" >}})** screen list view where you can manage snapshots.

**Manage Snapshot Tasks** opens the **Data Protection > [Periodic Snapshot Tasks]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled periodic snapshot tasks.

**Manage Replication Tasks** opens the **Data Protection > [Replications Tasks]({{< relref "ReplicationScreensSCALE.md" >}})** screen list view where you can manage scheduled replication tasks.

**Manage Cloud Sync Tasks** opens the **Data Protection > [Cloud Sync Tasks]({{< relref "CloudSyncTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled cloud sync tasks.

**Manage Rsync Tasks** opens the **Data Protection > [Rsync Tasks]({{< relref "RsyncTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled rsync tasks.

{{< /expand >}}

### Permissions Widget
The **Permissions** widget displays for all datasets. 
It indicates the type of ACL as either NFSv4 or Unix Permissions (POSIX) and lists access control items and the owner and group for the dataset.
{{< expand "Click Here for More Information" "v" >}}
Root dataset permissions are not editable. 
Permission screen and widget options vary based on the ACL type. 

{{< trueimage src="/images/SCALE/22.12/PermissionsWidgetRootDataset.png" alt="Permissions Widget Root Dataset" id="11: Permissions Widget Root Dataset" >}}

Parent and child dataset permissions are editable. 

{{< trueimage src="/images/SCALE/22.12/PermissionsWidgetParentDataset.png" alt="Permissions Widget Parent or Child Dataset" id="12: Permissions Widget Parent or Child Dataset" >}}

If the ACL type is NFSv4 (the default ACL type) the widget turns the items listed on the **Permissions** widget into buttons that open a configuration are where you can edit the item from the **Permissions** widget. 
The expanded item configuration area has both **Permissions Advanced** and **Flags Advanced** check-buttons you can select or deselect common NFSv4 permission options for each item type.

{{< trueimage src="/images/SCALE/22.12/PermissionsWidgetOwnerNSFv4Options.png" alt="Permissions Widget Owner NFSv4 Options" id="13: Permissions Widget Owner NFSv4 Options" >}}

A dataset with a POSIX ACL type, such as the ix-applications dataset, is only editable using the **Edit** button. 
**Edit** opens the [permission edit screen]({{< relref "EditACLScreens.md" >}}) for ACL based on the type.
{{< /expand >}}

### Roles Widget
The **Roles** widget displays the dataset role or the service that uses it (i.e., a share, application, virtual machine, or the system dataset). 
A parent dataset displays information on child datasets that a service uses.  
{{< expand "Click Here for More Information" "v" >}}
The **Roles** widget displays information about the service using the dataset and provides a link to manage whatever that service is. 
The widget roles information corresponds to the roles information in the dataset tree table.

{{< trueimage src="/images/SCALE/22.12/RolesWidgetRootDataset.png" alt="Roles Widget Root Dataset" id="14: Roles Widget Root Dataset" >}}

{{< truetable >}}
| Role | Link Included | Description |
|------|---------------|-------------|
| System dataset | [Manage Advanced Settings]({{< relref "AdvancedSettingsScreen.md" >}}) | Select the option to configure the **System Dataset** |
| Apps | [Manage Apps Settings]({{< relref "AppsScreensSCALE.md" >}}) | Displays Kubernetes is using the dataset. Select the option to **Choose Pool** from the **Settings** dropdown list on the **Applications** screen. |
| SMB share | [Manage SMB Shares]({{< relref "SMBSharesScreens.md" >}}) | Displays the name of the SMB share using the dataset. Select it on the **SMB Shares** screen to edit it. |
| Other share | Link to the Share type screen | Displays the name of the share using the dataset. Select it on the share screen (NFS, iSCSI or WebDAV) to edit it. |
| VM | [Manage VM Settings]({{< relref "VirtualizationScreens.md" >}}) | Displays the name of the VM using the dataset(Zvol). Select it on the **Virtual Machines** screen to edit it. |
{{< /truetable >}}

{{< /expand >}}

### ZFS Encryption Widget

The **ZFS Encryption** widget displays for datasets configured with encryption but the options in the widget vary based on the type of dataset (root, non-root parent, or child dataset). 
It includes the current state of the dataset encryption, the encryption root, type and algorithm used.
{{< expand "Click Here for More Information" "v" >}}
The **ZFS Encryption** widget displays the **Lock** or **Unlock** options are not available on the root dataset or a child dataset of a non-root parent it inherits encryption settings from. 
The root dataset **ZFS Encryption** widget includes the **Export All Keys** and the **Export Key** options, and the **Edit** option to change encryption settings.

{{< trueimage src="/images/SCALE/22.12/ZFSEncryptionWidgetRootDataset.png" alt="ZFS Encryption Widget Root Dataset" id="15: ZFS Encryption Widget Root Dataset" >}}

Parent or child dataset **ZFS Encryption** widgets include the options to **Lock** and **Unlock** the dataset and to **Edit** the encryption settings.

{{< trueimage src="/images/SCALE/22.12/ZFSEncryptionWidgetChildDatasetUnlocked.png" alt="ZFS Encryption Widget Child Dataset Unlocked" id="16: ZFS Encryption Widget Child Dataset Unlocked" >}}

Child dataset **ZFS Encryption** widgets include the **Go to Encryption Root** when you select **Inherit** as its **Encryption Options** setting. The non-root parent dataset controls the state of the child dataset.

{{< trueimage src="/images/SCALE/22.12/ZFSEncryptionWidgetWithGoToEncryptionRoot.png" alt="ZFS Encryption Widget with Go To Encryption Root" id="17: ZFS Encryption Widget with Go To Encryption Root" >}}

**Edit** opens the **[Edit Encryption Options]({{< relref "EncryptionUISCALE.md" >}}) for *dataset*** window for the selected dataset.

For more details on encryption windows and functions see [Encryption Settings]({{< relref "EncryptionUISCALE.md" >}}).
{{< /expand >}}

## Add and Edit Dataset Screens

The **Add Dataset** and **Edit Dataset** screens include the same settings but you cannot change the dataset **Name**, **Share Type** or **Case Sensitivity** settings after you click **Save** on the **Add Dataset** screen. 
After adding a dataset, to edit encryption options use the **Edit** button on the **ZFS Encryption** widget.

There are two screen options, **Basic Options** and **Advanced Options**. 
The **Advanced Options** screen include all the settings found on the **Basic Options** screen.

The **Basic Options** include three sections: **[Name and Options](#name-and-options-settings)**, **[Encryption Options](#encryption-options-settings)** and **[Other Options](#other-option-settings---advanced-options)**.

The **Advanced Options** settings include quotas management tools for **This Dataset** and **This Dataset and Child Datasets**, and includes more **Other Options** settings not available on the **Basic Options** screen.

### Name and Options Settings

These settings are common to both the **Basic Options** and **Advanced Options** screens. 
Setting include name, path and other general settings.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/AddDatasetNameAndOptions.png" alt="Add Dataset Name and Options" id="18: Add Dataset Name and Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent path** | Read-only field that displays the dataset path for the dataset. The root dataset path includes the only the name of the root dataset. Child datasets created from a child of root include the root dataset/parent dataset in the path. |
| **Name** | Enter a unique identifier for the dataset. You cannot change the dataset name after clicking **Save**. TrueNAS does not allow dataset names to have trailing spaces. |
| **Comments** | Enter notes about the dataset. |
| **Sync** | Select the sync setting option from the dropdown list. **Standard** uses the sync settings requested by the client software. **Always** waits for data writes to complete, and **Disabled** never waits for writes to complete. |
| **Compression level** | Select the compression algorithm to use from the dropdown list. Options encode information in less space than the original data occupies. We recommend cchoosing a compression algorithm that balances disk performance with the amount of space saved. <br> **LZ4** is generally recommended as it maximizes performance and dynamically identifies the best files to compress.<br> **ZSTD** is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm with several options for balancing speed and compression.<br> **Gzip** options range from **1** for least compression with best performance, through **9** for maximum compression with greatest performance impact.<br> **ZLE** is a fast algorithm that only eliminates runs of zeroes.<br>**LZJB** is a legacy algorithm that is not recommended for use. |
| **Enable Atime**| Select the access time for files option from the dropdown list. Access time can result in significant performance gains. **Inherit** uses the access time setting of the parent or the root dataset. **On** updates the access time for files when they are read. **Off** disables creating log traffic when reading files to maximize performance. |
{{< /truetable >}}
{{< /expand >}}

#### Data Compression Algorithms

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

### Encryption Options Settings

The encryption setting options are the same on the **Basic Options** and **Advanced Options** screens. **Encryption Options** only display on the **Add Dataset** screen. 
To change encryption settings use the **Edit** button on the **ZFS Encryption** widget.
{{< expand "Click Here for More Information" "v" >}}
The default setting is **Inherit** selected. Clearing the checkbox displays the key encryption options. 
Clear the **Inherit(*non-encrypted*)** checkbox to display additional settings.

{{< trueimage src="/images/SCALE/22.12/AddDatasetBasicEncryptionAndOtherOptions.png" alt="Add Dataset Encryption Options Clear Inherit" id="19: Add Dataset Encryption Options Clear Inherit" >}}
 
Selecting other options changes the settings displayed.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Inherit (non-encrypted)** | Select to clear the checkmark to display more encryption settings. |
| **Encryption** | Select to clear the checkmark and remove the encryption settings from the **Add Dataset** screen. If the root dataset is not encrypted, leaving **Inherit (non-encrypted)** selected is the same as clearing the **Encryption** checkbox. |
{{< /truetable >}}

#### Edit Encryption Settings
{{< include file="/_includes/EncryptionSettings.md" type="page" >}}

See the list of Related Encryption Articles at the bottom of this article for more on encryption.
{{< /expand >}}

### Other Options Settings - Basic Options

The **Other Options** help tune the dataset for specific data sharing protocols, but the **Basic Options** settings only includes a small subset of the settings found on the **Advanced Options** screen.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/AddDatasetOtherOptions.png" alt="Add Dataset Basic  Other Options" id="20: Add Dataset Basic  Other Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **ZFS Deduplication** | Select the option from the dropdown list to transparently reuse a single copy of duplicated data to save space. Options are **Inherit** to use the parent or root dataset settings, **On** to use deduplication, **Off** to not use deduplication, or **Verify** to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical.<br> Deduplication can improve storage capacity, but is RAM intensive. Compressing data is recommended before using deduplication.<br> Deduplicating data is a one-way process. You cannot undo deduplicated data! |
| **Case Sensitivity** | Select the option from the dropdown list. **Sensitive** assumes file names are case sensitive. **Insensitive** assumes file names are not case sensitive. You cannot change case sensitivity after the saving the dataset. |
| **Share Type** | Select the option from the dropdown list to define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. Select **SMB** if using with an SMB share and to optimize it for SMB shares. Select **Generic** for all other share types. Select **Apps** if creating a dataset to work an application and to optimize the dataset for use by any application. If you plan to deploy container applications, the system automatically creates the **ix-applications** dataset but this is not used for application data storage. You cannot change this setting after saving the dataset. |
{{< /truetable >}}
{{< /expand >}}

### Quota Management Settings - Advanced Options
The **This Dataset** and **This Dataset and Child Datasets** sections include the same setting options. 
These settings also display on the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen.
{{< expand "Click Here for More Information" "v" >}}
To apply the settings to only the parent dataset you are creating, enter settings in the **This Dataset** fields. 
To apply settings to both the parent dataset and any new child datasets you create from this dataset, enter settings in the **This Dataset and Child Datasets** section. 

{{< trueimage src="/images/SCALE/22.12/AddDatasetQuotasManagement.png" alt="Add Dataset Advanced Quota Options" id="21: Add Dataset Advanced Quota Options" >}}

Setting a quota defines the maximum allowed space for the dataset or the dataset and child datasets.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or include all child datasets.

{{< include file="/_includes/DatasetQuotaSettings.md" type="page" >}}

{{< /expand >}}

### Other Option Settings - Advanced Options
Many of the **Other Options** settings inherit their values from the parent dataset.
{{< expand "Click Here for More Information" "v" >}}
The **Basic Options** screen shares the **ZFS Deduplication**, **Case Sensitivity** and **Share Type** settings. All other settings in this section are unique to the **Advanced Options** screen.

{{< trueimage src="/images/SCALE/22.12/AddDatasetOtherOptionsAdvanced1.png" alt="Add Dataset Advanced Other Options" id="22: Add Dataset Advanced Other Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **ZFS Deduplication** | Select the option from the dropdown list. Options are **Inherit (off)**, **on**, **verify**, and **off**. Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated! |
| **Checksum** | Select the [checksum](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Checksums.html) option from the dropdown list. Select **Inherit** to use the parent setting; **On** to use checksum without specifying the variant; **FLETCHER2** (deprecated) or **FLETCHER4** to use a position-dependent checksum that uses two checksums to determine single-bit errors in messages transmitted over network channels or ZFS streams; **SHA256** (default for dedupted datasets) or **SHA512** to use a sequence of numbers and letters to check the copy of a downloaded update file is identical to the original; **SKEIN** which is not supported for a file system on boot pools; or **EDNOR** which is not supported for file systems on boot pools and Edon-R requires verification when used with dedup so it automatically uses `verify`. |
| **Read-only** | Select the option to allow or prevent dataset modification from the dropdown list. **On** prevents modifying the dataset. **Off** allows users accessing the dataset to modify its contents. |
| **Exec** | Select the option for executing processes from within the dataset from the dropdown list. **On** allows executing processes from within this dataset. **Off** prevents executing processes from with the dataset. We recommend setting it to **On**. |
| **Snapshot directory** | Select the option to controls visibility of the <file>.zfs</file> directory on the dataset from the dropdown list. Select either **Visible** or **Invisible**. |
| **Snapdev** | Select the option that controls whether the volume snapshot devices under /dev/zvol/*poolname* are hidden or visible from the dropdown list. Options are **Inherit (hidden)**, **Visible** and **Hidden** (default value). |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/22.12/AddDatasetOtherOptionsAdvanced2.png" alt="Add Dataset Advanced Other Options 2" id="23: Add Dataset Advanced Other Options 2" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Copies** | Select the number of duplicate of ZFS user data stored on this dataset from the dropdown list. Select between **1**, **2**, or **3** redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| **Record Size** | Select the logical block size in the dataset from the dropdown list of options. Matching the fixed size of data, as in a database, can result in better performance. |
| **ACL Type** | Select the access control list type from the dropdown list of options. **Inherit** preserves ACL type from the parent dataset.<br>**Off** to use neither NFSv4 or POSIX protocols.<br>**NFSv4** is used to cleanly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS Core, FreeBSD, or other non-Linux ZFS implementations. <br>**POSIX** use when an organization data backup target does not support native NFSv4 ACLs. Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs. All datasets within an SMB share path must have identical ACL types.<br>For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "/content/References/ACLPrimer.md" >}}). |
| **ACL Mode** | Select the option that determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs from the dropdown list. See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property.<br> **Passthrough** only updates ACL entries that are related to the file or directory mode.<br> **Restricted** does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Set the ACL Mode to restricted to optimize a dataset for SMB sharing, but it can require further optimizations. For example, configuring an [rsync task]({{< relref "RsyncTasksSCALE.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field. |
| **Case Sensitivity** | Select the option that sets whether filenames are case sensitive. Select **Sensitive** to assume filenames are case sensitive, or **Insensitive** to assume filenames are not case sensitive. Noted: The **Mixed** option no longer exists. |
| **Metadata (Special) Small Block Size** | Enter a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Before setting this property, you must add a [special class VDEV]({{< relref "FusionPoolsScale.md" >}}) to the pool. |
| **Share Type** | Select the option from the dropdown list to define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. Select **SMB** if using with an SMB share and to optimize it for SMB shares. Select **Generic** for all other share types. Select **Apps** if creating a dataset to work an application and to optimize the dataset for use by any application. If you plan to deploy container applications, the system automatically creates the **ix-applications** dataset but this is not used for application data storage. You cannot change this setting after saving the dataset. |
{{< /truetable >}}

{{< /expand >}}

{{< taglist tag="scaledatasets" limit="10" >}}
{{< taglist tag="scaleencryption" limit="10" title="Related Encryption Articles" >}}
{{< taglist tag="scaleacls" limit="10" title="Related Permissions Articles" >}}
{{< taglist tag="scalequotas" limit="10" title="Related Quotas Articles" >}}
