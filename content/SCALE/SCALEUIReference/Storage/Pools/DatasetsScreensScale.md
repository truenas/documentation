---
title: "Datasets Screen"
description: "This article provides information on Datasets screens and widgets settings and functions."
weight: 30
tag: 
- scaledatasets
- scalestorage
- scaleacls
- scaleencryption
- scalequotas
---


{{< toc >}}


The **Datasets** screen and widgets display information about datasets, provide access to data management functions, indicate the dataset roles and what services use the dataset, show the encryption status, and the permissions the dataset has in place. 
The screen focus is on managing data storage including user and group quotas, and snapshots and other data protection measures. 

The **Datasets** screen displays the **No Datasets** screen with a **Create Pool** button in the center of the screen until you add a pool and the first root dataset.

![DatasetsScreenBeforeAddingAPool](/images/SCALE/22.12/DatasetsScreenBeforeAddingAPool.png "Datasets Screen Add Pool") 

After creating a dataset, the left side of the screen displays a tree table where any parent or child datasets (or zvols) are listed. The right side of the sceen displays a set of dataset widgets in the **Details for *datasetnam*** area.

![DatasetsScreenAfterAddingAPool](/images/SCALE/22.12/DatasetsScreenAfterAddingAPool.png "Datasets Screen With a Pool") 

**Import Data** opens the **[Import Data](#import-data-screen)** screen. 

**Add Zvol (New)** opens the **[Add Zvol]({{< relref "ZvolsScreensScale.md" >}})** screen, and  **Add Zvol** opens the **[Add Zvol]({{< relref "ZvolsScreensScale.md" >}})** screen available in the SCALE 22.02 release.

**Add Dataset** opens the **[Add Dataset](#add-or-edit-dataset-screens)** screen.

## Dataset Tree Table

The datasets tree table lists datasets in an expandable tree structure with the root or parent dataset listed first and all the child datasets nested under it. 
{{< expand "Click Here for More Information" "v" >}}
Click anywhere on the dataset to expand the row and reveal each level of nested datasets or zvols.

![DatasetsScreenTreeTableExpanded](/images/SCALE/22.12/DatasetsScreenTreeTableExpanded.png "Dataset Tree Table")

The information included in the table includes storage space used and available for that dataset, the encryption status (locked, unlocked or unencrypted), and the roll of that dataset (system dataset, share, virtual machine, or application using it). 
Roles in the dataset tree are represented by icons.
An activity spinner displays for datasets when a task is executing.

| Role | Icon | Description |
|------|------|-------------|
| System dataset | ![DatasetRolesSystemDatasetIcon](/images/SCALE/22.12/DatasetRolesSystemDatasetIcon.png "Roles System Dataset Icon") | Indicates the parent (root) dataset designated as the system dataset. To change the system dataset go to **System Settings > Advanced Settings** and edit the **System Dataset Pool**. |
| Share | ![DatasetRolesShareGenericIcon](/images/SCALE/22.12/DatasetRolesShareGenericIcon.png "Roles Dataset Share Icon") | Indicates the dataset is used by a share or that child datasets of the parent are used by shares. |
| SMB share | ![DatasetRolesSMBShareIcon](/images/SCALE/22.12/DatasetRolesSMBShareIcon.png "Roles Dataset SMB Share Icon") | Indicates the dataset is used by an SMB share. |
| VM | ![DatasetRolesVMIcon](/images/SCALE/22.12/DatasetRolesVMIcon.png "Roles Dataset VM Icon") | Indicates the dataset is used by a virtual machine (VM). |
| Apps | ![DatasetRolesAppsIcon](/images/SCALE/22.12/DatasetRolesAppsIcon.png "Roles Apps Dataset Icon") | Indicates this dataset is used by applications and stores Kubernetes configuration and container related data. |
{{< /expand >}}

## Dataset Widgets
Each dataset has a set of information cards (widgets) that display in the **Details for *datasetname*** area of the screen and that provide information grouped by functional areas. 
The set of widgets for a root or parent dataset differs from child datasets or datasets used by another service or with encryption.

Dataset widgets are:
* **[Dataset Details](#datasets-details-widget)**
* **[Dataset Space Management](#dataset-space-management-widget)**
* **[Data Protection](#data-protection-widget)**
* **[Permissions](#permissions-widget)**
* **[Roles](#roles-widget)**
* **[ZFS Encryption](#zfs-encryption-widget)**

### Datasets Details Widget
The **Dataset Details** widget lists information on the dataset type, the sync, compression level, case sensitivity, Atime and ZFS deduplication settings, and the path. 
{{< expand "Click Here for More Information" "v" >}}
A root (parent) dataset path displays the pool name alone.

![DatasetDetailsWidgetRootDataset](/images/SCALE/22.12/DatasetDetailsWidgetRootDataset.png "Dataset Details Widget Root Dataset")

A child dataset path displays the pool name and parent dataset.

![DatasetDetailsWidgetChildDataset](/images/SCALE/22.12/DatasetDetailsWidgetChildDataset.png "Dataset Details Widget Child Dataset")

**Edit** opens the **[Edit Dataset](#add-and-edit-dataset-screens)** screen for the selected dataset.

Child dataset versions of the card include the **[Delete](#delete-dataset)** option. 
To delete a root dataset, use the **Disconnect/Export** option for the root dataset that is found on the **[Storage Dashboard]({{< relref "StorageDashboardScreen.md" >}})** screen.
{{< /expand >}}

#### Delete Dataset
The **Delete** window includes information about snapshots, shares or other services such as Kubernetes or VMs that use the dataset, or if it is a parent to other datasets, the services child datasets of this parent dataset use.
Only child datasets include the **Delete** button. 
{{< expand "Click Here for More Information" "v" >}}
The **Delete** window for a parent dataset (non-root) includes information about snapshots, shares or other services such as Kubernetes or VMs that use the dataset, or if it is a parent to other datasets, the services child datasets of this parent dataset use.

![DeleteDatasetParentDataset](/images/SCALE/22.12/DeleteDatasetParentDataset.png "Delete Dataset Parent Dataset")

A child dataset that is used by a service displays the service.

![DeleteDatasetChildUsingAService](/images/SCALE/22.12/DeleteDatasetChildUsingAService.png "Delete Dataset Child Dataset Using a Service")

A child dataset that is not used by a service does not display a service.

![DeleteDatasetChildDataset](/images/SCALE/22.12/DeleteDatasetChildDataset.png "Delete Dataset Child Dataset")

The window includes field where you type the path for the dataset, and a **Confirm** option you must select to activate the **Delete Dataset** button.
{{< /expand >}}

### Dataset Space Management Widget
The **Dataset Space Management** widget displays for all datasets except locked encrypted datasets. Unlock the encrypted dataset to see this widget. The widget includes a donut graph with at-a-glance information and numeric values for the space allocated and used in the selected dataset. This includes data written and space allocated to child datasets of this dataset. 
{{< expand "Click Here for More Information" "v" >}}
It provides access to quota configuration options for the parent dataset and the child dataset of the parent, and for users and groups with access to the dataset.

![DatasetSpaceManagementWidgetRootDataset](/images/SCALE/22.12/DatasetSpaceManagementWidgetRootDataset.png "Dataset Space Management Widget Root Dataset")

To view the **Dataset Space Management** widget for an encrypted locked dataset, unlock the dataset.

**Edit** opens the **[Capacity Settings](#capacity-settings-screen)** screen.

**[Manage User Quotas]({{< relref "ManageQuotas.md" >}})** screen and **Manage Group Quotas** opens the **[Manage Group Quotas]({{< relref "ManageQuotas.md" >}})** screen.
{{< /expand >}}

#### Capacity Settings Screen
The **Capaicity Settings** screen allows user to set quotas for the selected dataset and/or for the selected dataset and any of the child datasets for the selected dataset apart from the dataset creation process.
{{< expand "Click Here for More Information" "v" >}}
The settings on the **Capacity Settings** screen are the same as those in the quota management section on the **[Add Dataset](#quota-management-settings---advanced-options) > Advanced Options** screen.

![CapacitySettingsScreen](/images/SCALE/22.12/CapacitySettingsScreen.png "Capacity Settings Screen")

{{< include file="/_includes/DatasetQuotaSettings.md" type="page" >}}
{{< /expand >}}

### Data Protection Widget
The **Data Protection** widget displays for all datasets. 
This widget provides information on the number snapshots and other related scheduled tasks (replication, cloud sync, rsync and snapshots) configured on the system. 
{{< expand "Click Here for More Information" "v" >}}
It provides access to the tasks found on the **Data Protection** screen through links. 

![DataProtectionWidget](/images/SCALE/22.12/DataProtectionWidget.png "Data Protection Widget")

**Create Snapshot** opens the **[Add Snapshot]({{< relref "SnapshotsScreens.md" >}})** screen.

**Manage Snapshots** opens the **[Snapshots]({{< relref "SnapshotsScreens.md" >}})** screen list view where you can manage scheduled snapshot tasks.

**Manage Snapshot Tasks** opens the **Data Protection > [Periodic Snapshot Tasks]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}})** screen list view where you can manage the scheduled periodic snapshot tasks.

**Manage Replication Tasks** opens the **Data Protection > [Replications Tasks]({{< relref "ReplicationScreensSCALE.md" >}})** screen list view where you can manage the scheduled replication tasks.

**Manage Cloud Sync Tasks** opens the **Data Protection > [Cloud Sync Tasks]({{< relref "CloudSyncTasksScreensSCALE.md" >}})** screen list view where you can manage the scheduled cloud sync tasks.

**Manage Rsync Tasks** opens the **Data Protection > [Rsync Tasks]({{< relref "RsyncTasksScreensSCALE.md" >}})** screen list view where you can manage the scheduled rsync tasks.

{{< /expand >}}

### Permissions Widget
The **Permissions** widget displays for all datasets and displays the dataset owner and group, and Unix permissions for ACL items configured for the dataset.
{{< expand "Click Here for More Information" "v" >}}
Root dataset permissions is not editable and includes the predefined ACL items it requires. 

![PermissionsWidgetRootDataset](/images/SCALE/22.12/PermissionsWidgetRootDataset.png "Permissions Widget Root Dataset")

Parent and child dataset permissions are editable and if set to NFSv6 ACL (the default ACL type) the widget includes links for each item that allow your edit each item in a expanded settings window.

![PermissionsWidgetParentDataset](/images/SCALE/22.12/PermissionsWidgetParentDataset.png "Permissions Widget Parent or Child Dataset")

The ACL items include both **Permissions Advanced** and **Flags Advanced** check-buttons to select or deselect common NFSv4 permission options for each item type.

![PermissionsWidgetOwnerNSFv4Options](/images/SCALE/22.12/PermissionsWidgetOwnerNSFv4Options.png "Permissions Widget Owner NFSv4 Options")

A dataset such as the ix-applications dataset or one with a POSIX ACL type are editable only using the **Edit** button. 
**Edit** opens the **[Edit ACL]({{< relref "EditACLScreens.md" >}})** screens where you can edit or add new ACL items.
{{< /expand >}}

### Roles Widget
The **Roles** widget displays the dataset role and if a parent dataset, displays information on child datasets that have roles. Roles include being assigned as the system dataset or is used by a particular service such as a share, applications, or a virtual machine (VM). 
{{< expand "Click Here for More Information" "v" >}}
The **Roles** widget displays information about the service using the dataset and provides a link to manage whatever that service is.

![RolesWidgetRootDataset](/images/SCALE/22.12/RolesWidgetRootDataset.png "Roles Widget Root Dataset")

| Role | Includes Link | Description |
|------|---------------|-------------|
| System Dataset | [Manage Advanced Settings]() | Select the option to configure the **System Dataset** |
| Apps | [Manage Apps Settings]() | Displays Kubernetes is using the dataset. Select the option to **Choose Pool** from the **Settings** dropdown list on the **Applications** screen. |
| SMB share | [Manage SMB Shares]({{< relref "SMBSharesScreens.md" >}}) | Displays the name of the SMB share using the dataset. Select it on the **SMB Shares** screen to edit it. |
| Other share | Link to the Share type screen | Displays the name of the share using the dataset. Select it on the share screen (NFS, iSCSI or WebDAV) to edit it. |
| VM | [Manage VM Settings]({{< relref "VirtualizationScreens.md" >}}) | Displays the name of the VM using the dataset(zvol). Select it on the **Virtual Machines** screen to edit it. |

{{< /expand >}}

### ZFS Encryption Widget
Displays for root, parent or child datasets configured with encryption. Includes the current state of the dataset encryption, whether the root dataset or pool is encrypted, the key type and algorithm used.
{{< expand "Click Here for More Information" "v" >}}
The root dataset **ZFS Encryption** widget includes the **Export All Keys** and the **Export Key** options, and to **Edit** the encryption settings.

![ZFSEncryptionWidgetRootDataset](/images/SCALE/22.12/ZFSEncryptionWidgetRootDataset.png "ZFS Encryption Widget Root Dataset")

Parent or dataset **ZFS Encryption** widgets include the options to **Lock** and **Unlock** the dataset and to **Edit** the encryption settings.

![ZFSEncryptionWidgetChildDatasetUnlocked](/images/SCALE/22.12/ZFSEncryptionWidgetChildDatasetUnlocked.png "ZFS Encryption Widget Child Dataset Unlocked")

**Edit** opens the **[Edit Encryption Options](#edit-encryption-options-windows) for *dataset*** window for the selected dataset.
{{< /expand >}}

#### Edit Encryption Options Windows
Encryption is set for a dataset when it is added. The **Edit Encryption Options for *datasetname*** displays the current encryption option settings for the selected encrypted dataset. It allows you to change the encryption type, key or passphrase, settings.
{{< expand "Click Here for More Information" "v" >}}
The **Edit Encryption Options for *datasetname*** window opens with the current dataset encryption settings displayed. 
The encryption setting options are the same as those provided on the **Add Dataset > [Encryption Options]](#edit-encryption-options-windows)**.

![EditEncryptionOptionsKeyTypeWindow](/images/SCALE/22.12/EditEncryptionOptionsKeyTypeWindow.png "Encryption Options Key Type Window")

{{< include file="/_includes/EncryptionSettings.md" type="page" >}}
{{< /expand >}}

## Import Data Screen

The **Import Data** screen allows you to import data from a disk into a dataset.
{{< expand "Click Here for More Information" "v" >}}
For more information on importing data see [Importing Disks]({{< relref "ImportingDisks.md" >}}).

![ImportDataScreen](/images/SCALE/22.12/ImportDataScreen.png "Import Data Screen")

| Setting | Description |
|---------|-------------|
| **Disk** | Select the disk from the dropdown list that has the data you want to import into the dataset. |
| **Filesystem Type** | Select the radio button for the filesystem type on the disk. Options are **UFS**, **NTFS**, **MSDOSFS**, or **EXT2FS**. |
| **Destination Path** | Enter or use the <span class="material-icons">arrow_right</span> to the left of the <span class="material-icons">folder</span>**/mnt** to expand each level of the path until you reach the location where you want to import (mount) the data. Click on the dataset to select it and populate the path. |
| **Import** | Starts the data import process. |
{{< /expand >}}

## Add and Edit Dataset Screens

The **Add Dataset** and **Edit Dataset** screens include the same settings but you cannot change the dataset **Name**, **Share Type** or **Case Sensitivity** settings after you click **Save** on the **Add Dataset** screen.
To edit encryption options use the **Edit** button on the **ZFS Encryption** widget.

There are two screen options, **Basic Options** and **Advanced Options**. 
The **Advanced Options** screen include all the settings found on the **Basic Options** screen.

### Dataset Basic Options 

The **Basic Options** include three sections: **[Name and Options](#name-and-options-settings)**, **[Encryption Options](#encryption-options-settings)** and **[Other Options](#other-option-settings---advanced-options)**.

#### Name and Options Settings

These settings are found on both the **Basic Options** and **Advanced Options** screens.
{{< expand "Click Here for More Information" "v" >}}

![AddDatasetNameAndOptions](/images/SCALE/22.12/AddDatasetNameAndOptions.png "Add Dataset Name and Options") 

| Setting | Description |
|---------|-------------|
| **Parent path** | Read-only field that displays the dataset path for the dataset. The root dataset path includes the only the name of the root dataset. Child datasets created from a child of root include the root dataset/parent dataset in the path. |
| **Name** | Enter a unique identifier for the dataset. You cannot change the dataset name after clicking **Save**. |
| **Comments** | Enter notes about the dataset. |
| **Sync** | Select the sync setting option from the dropdown list. **Standard** uses the sync settings requested by the client software. **Always** waits for data writes to complete, and **Disabled** never waits for writes to complete. |
| **Compression level** | Select the compression algorithm to use from the dropdown list. Options encode information in less space than the original data occupies. It is recommended to choose a compression algorithm that balances disk performance with the amount of saved space.<br> **LZ4** is generally recommended as it maximizes performance and dynamically identifies the best files to compress.<br> **ZSTD** is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm with several options for balancing speed and compression.<br> **Gzip** options range from **1** for least compression with best performance, through **9** for maximum compression with greatest performance impact.<br> **ZLE** is a fast algorithm that only eliminates runs of zeroes.<br>**LZJB** is a legacy algorithm that is not recommended for use. |
| **Enable Atime**| Select the access time for files option from the dropdown list. Access time can result in significant performance gains. **Inherit** uses the access time setting of the parent or the root dataset. **On** updates the access time for files when they are read. **Off** disables creating log traffic when reading files to maximize performance. |
{{< /expand >}}

#### Encryption Options Settings

The encryption setting options are the same on the **Basic Options** and **Advanced Options** screens.
{{< expand "Click Here for More Information" "v" >}}
The default setting is **Inherit** selected. Clearing the checkbox displays the key encryption options. 

![AddDatasetEncrytionOptionsInherit](/images/SCALE/22.12/AddDatasetEncrytionOptionsInherit.png "Add Dataset Encryption Options") 
 
Clear the **Inherit(*non-encrypted*)** checkbox to display additional settings.

![AddDatasetEncryptionOptionsInheritCleared](/images/SCALE/22.12/AddDatasetEncryptionOptionsInheritCleared.png "Add Dataset Encryption Options Clear Inherit") 
 
Selecting other options changes the settings displayed.

| Setting | Description |
|---------|-------------|
| **Inherit (non-encrypted)** | Select to clear the checkmark to display more encryption settings. |
| **Encryption** | Select to clear the checkmark and remove the encryption settings from the **Add Dataset** screen. If the root dataset is not encrypted, leaving **Inherit (non-encrypted)** selected is the same as clearing the **Encryption** checkbox. |

{{< include file="/_includes/EncryptionSettings.md" type="page" >}}

{{< /expand >}}

#### Other Options Settings - Basic Options

The **Basic Options** settings in **Other Options** help tune the dataset for specific data sharing protocols but the basic options only includes a small subset of all the settings on the **Advanced Options** screen.
{{< expand "Click Here for More Information" "v" >}}

![AddDatasetOtherOptions](/images/SCALE/22.12/AddDatasetOtherOptions.png "Add Dataset Basic  Other Options")

| Setting | Description |
|---------|-------------|
| **ZFS Deduplication** | Select the option from the dropdown list to transparently reuse a single copy of duplicated data to save space. Options are **Inherit** to use the parent or root dataset settings. **On** to use deduplication. **Off** to not use deduplication, or **Verify** to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical.<br> Deduplication can improve storage capacity, but is RAM intensive. Compressing data is recommended before using deduplication.<br> Deduplicating data is a one-way process. *Deduplicated data cannot be undeduplicated!* |
| **Case Sensitivity** | Select the option from the dropdown list. **Sensitive** assumes file names are case sensitive. **Insensitive** assumes file names are not case sensitive. You cannot change case sensitivity after the saving the dataset. |
| **Share Type** | Select the option from the dropdown list to define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. Select **SMB** if using with an SMB share. Select **Generic** for all other share types. You cannot change this setting after the saving dataset. |
{{< /expand >}}

##### Data Compression Algorithms

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

### Dataset Advanced Options
The **Advanced Options** settings include quotas management tools for **This Dataset** and **This Dataset and Child Datasets**, and expand the **Other Options** settings.

#### Quota Management Settings - Advanced Options
The **This Dataset** and **This Dataset and Child Datasets** sections include the same setting options. These settings also display on the **[Capacity Settings](#capacity-settings-screen)** screen.
{{< expand "Click Here for More Information" "v" >}}
To apply the settings to only the parent dataset you are creating, enter settings in the **This Dataset** fields. 
To apply settings to both the parent dataset and any new child datasets you create from this dataset, enter settings in the **This Dataset and Child Datasets** section. 

![AddDatasetQuotasManagement](/images/SCALE/22.12/AddDatasetQuotasManagement.png "Add Dataset Advanced Quota Options") 

Setting a quota defines the maximum allowed space for the dataset or the dataset and child datasets.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or include all child datasets.

{{< include file="/_includes/DatasetQuotaSettings.md" type="page" >}}

{{< /expand >}}

### Other Option Settings - Advanced Options
Many of the **Other Options** settings inherit their values from the parent dataset.
{{< expand "Click Here for More Information" "v" >}}
The **Basic Options** screen shares the **ZFS Deduplication**, **Case Sensitivity** and **Share Type** settings. All other settings in this section are unique to the **Advanced Options** screen.

![AddDatasetOtherOptionsAdvanced1](/images/SCALE/22.12/AddDatasetOtherOptionsAdvanced1.png "Add Dataset Advanced Other Options") 

| Setting | Description |
|---------|-------------|
| **ZFS Deduplication** | Select the option from the dropdown list. Options are **Inherit (off)**, **on**, **verify**, and **off**. Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated! |
| **Checksum** | Select the [checksum](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Checksums.html) option from the dropdown list. Select **Inherit** to use the parent setting; **On** to use checksum without specifying the variant; **FLETCHER2** (deprecated) or **FLETCHER4** to use a position-dependent checksum that uses two checksums to determine single-bit errors in messages transmitted over network channels or ZFS streams; **SHA256** (default for dedupted datasets) or **SHA512** to use a sequence of numbers and letters to check the copy of a downloaded update file is identical to the original; **SKEIN** which is not supported for a file system on boot pools; or **EDNOR** which is not supported for file systems on boot pools and Edon-R requires verification when used with dedup so it automatically uses `verify`. |
| **Read-only** | Select the option to allow or prevent dataset modification from the dropdown list. **On** prevents modifying the dataset. **Off** allows users accessing the dataset to modify its contents. |
| **Exec** | Select the option for executing processes from within the dataset from the dropdown list. **On** allows executing processes from within this dataset. **Off** prevents executing processes from with the dataset. We recommend setting it to **On**. |
| **Snapshot directory** | Select the option to controls visibility of the <file>.zfs</file> directory on the dataset from the dropdown list. Select either **Visible** or **Invisible**. |
| **Snapdev** | Select the option that controls whether the volume snapshot devices under /dev/zvol/*poolname* are hiddin or visible from the dropdown list. Options are **Inherit (hidden)**, **Visible** and **Hidden** (default value). |

![AddDatasetOtherOptionsAdvanced2](/images/SCALE/22.12/AddDatasetOtherOptionsAdvanced2.png "Add Dataset Advanced Other Options 2") 

| Setting | Description |
|---------|-------------|
| **Copies** | Select the number of duplicate of ZFS user data stored on this dataset from the dropdown list. Select between **1**, **2**, or **3** redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| **Record Size** | Select the logical block size in the dataset from the dropdown list of options. Matching the fixed size of data, as in a database, can result in better performance. |
| **ACL Type** | Select the access control list type from the dropdown list of options. **Inherit** preserves ACL type from the parent dataset.<br>**Off** to use neither NFSv4 or POSIX protocols.<br>**NFSv4** is used to losslessly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS Core, FreeBSD, or other non-Linux ZFS implementations. <br>**POSIX** use when an organization data backup target does not support native NFSv4 ACLs. Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs. All datasets within an SMB share path must have identical ACL types.<br>For a more in-depth explanation of ACLs and configurations in TrueNAS SCALE, see our [ACL Primer]({{< relref "/content/References/ACLPrimer.md" >}}). |
| **ACL Mode** | Select the option that determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs from the dropdown list. See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property.<br> **Passthrough** only updates ACL entries that are related to the file or directory mode.<br> **Restricted** does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Set the ACL Mode to restricted to optimize a dataset for SMB sharing, but it can require further optimizations. For example, configuring an [rsync task]({{< relref "SCALE/SCALETutorials/DataProtection/RsyncTasksSCALE.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field. |
| **Case Sensitivity** | Select the option that sets whether filenames are case sensitive. Select **Sensitive** to assume filenames are case sensitive, or **Insensitive** to assume filenames are not case sensitive. Noted: The **Mixed** option no longer exists. |
| **Metadata (Special) Small Block Size** | Enter a threshold block size for including small file blocks into the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Before setting this property, you must add a [special class vdev]({{< relref "FusionPoolsScale.md" >}}) to the pool. |
| **Share Type** | Select the option from the dropdown list to define the type of data sharing the dataset uses to optimize the dataset for that sharing protocol. Select **SMB** if using with an SMB share. Select **Generic** for all other share types. You cannot change this setting after the saving dataset. |
{{< /expand >}}

{{< taglist tag="scaledatasets" limit="10" >}}
{{< taglist tag="scaleencryption" limit="10" title="Related Encryption Articles" >}}
{{< taglist tag="scaleacss" limit="10" title="Related Permissions Articles" >}}
{{< taglist tag="scalequotas" limit="10" title="Related Quotas Articles" >}}