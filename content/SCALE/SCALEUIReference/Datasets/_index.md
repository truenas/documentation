---
title: "Datasets"
description: "Provides information on the Datasets screens and settings."
geekdocCollapseSection: true
weight: 35
aliases:
 - /scale/scaleuireference/storage/datasets/importdatascreenscale/
 - /scale/scaleuireference/storage/datasets/
 - /scale/scaleuireference/storage/datasets/datasetsscreensscale/
 - /scale/scaleclireference/storage/clidataset/
tags: 
- datasets
- storage
- zvols
- acl
- encryption
- quotas
---


The **Datasets** screen and widgets display information about datasets, provide access to data management functions, indicate the dataset roles, list the services using the dataset, and show the encryption status and the permissions the dataset has in place.
The screen focuses on managing data storage including user and group quotas, snapshots, and other data protection measures.

## Datasets Screen
The **Datasets** screen displays **No Datasets** with a **Create Pool** button in the center of the screen until you add a pool and the first root dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenBeforeAddingAPool.png" alt="Datasets Screen Without a Pool" id="Datasets Screen Without a Pool" >}}

The screen has two main sections, the dataset tree table on the left and the **Details for *datasetname*** on the right.
After creating a dataset, the tree table that lists parent and child datasets (or zvols) on the system.
The **Details for *datasetname*** area displays a set of [dataset widgets](#dataset-widgets).

{{< hint type=note >}}
Large petabyte systems might report storage numbers inaccurately. Storage configurations with more than 9,007,199,254,740,992 bytes round the last 4 digits. 
For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenAfterAddingAPool.png" alt="Datasets Screen With a Pool" id="Datasets Screen With a Pool" >}}

**Add Zvol** opens the **[Add Zvol]({{< relref "ZvolsScreensScale.md" >}})** screen.

**Add Dataset** opens the **[Add Dataset](#add-and-edit-dataset-screens)** screen.

Begin typing the name of a dataset in the **Search** field to filter datasets to a short list of those matching what is typed.

### Dataset Tree Table
The datasets tree table lists datasets in an expandable hierarchical structure with the root dataset first, then each child or non-root parent dataset, and the child datasets of each nested under them.

Click on any parent dataset to expand the tree table and show nested child datasets.
Select a dataset to display the dataset widgets for that dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenTreeTableExpanded.png" alt="Dataset Tree Table" id="Dataset Tree Table" >}}

The table includes used and available storage space for that dataset, encryption status (locked, unlocked, or unencrypted), the role of that dataset, and what service uses it (i.e., the system dataset, a share, virtual machine, or application). 

{{< expand "Tree Table Encryption Icons" "v" >}}
{{< include file="/static/includes/EncryptionIconsSCALE.md" >}}
{{< /expand >}}

{{< expand "Tree Table Role Icons" "v" >}} 
Dataset tree table roles are represented by icons. Hover over the icons to view the description or icon label.
Roles in the dataset tree correspond to the **[Roles widget](#roles-widget)**.
A dataset with an active task includes an activity spinner when that task is in progress.
{{< truetable >}}
| Role | Icon | Description |
|------|------|-------------|
| System dataset | ![DatasetRolesSystemDatasetIcon](/images/SCALE/Datasets/DatasetRolesSystemDatasetIcon.png "Roles System Dataset Icon") | Indicates the parent (root) dataset designated as the system dataset. To change the system dataset go to **System > Advanced Settings** and edit the **System Dataset Pool**. |
| Share | ![DatasetRolesShareGenericIcon](/images/SCALE/Datasets/DatasetRolesShareGenericIcon.png "Roles Dataset Share Icon") | Indicates the dataset is used by a share or that child datasets of the parent are used by shares. |
| SMB share | ![DatasetRolesSMBShareIcon](/images/SCALE/Datasets/DatasetRolesSMBShareIcon.png "Roles Dataset SMB Share Icon") | Indicates the dataset is used by an SMB share. |
| VM | ![DatasetRolesVMIcon](/images/SCALE/Datasets/DatasetRolesVMIcon.png "Roles Dataset VM Icon") | Indicates the dataset is used by a virtual machine (VM). |
| Apps | ![DatasetRolesAppsIcon](/images/SCALE/Datasets/DatasetRolesAppsIcon.png "Roles Apps Dataset Icon") | Indicates this dataset is used by applications and stores Kubernetes configuration and container-related data. |
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
The **Dataset Details** widget lists information on dataset type, sync type, compression level, case sensitivity, Atime, and ZFS deduplication settings.
**Path** displays the full path for the selected dataset.

A root dataset path displays the pool name alone.

{{< trueimage src="/images/SCALE/Datasets/DatasetDetailsWidgetRootDataset.png" alt="Dataset Details Widget Root Dataset" id="Dataset Details Widget Root Dataset" >}}

{{< expand "Click Here for More Information" "v" >}}
A child dataset path displays the root dataset (pool) name and parent dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetDetailsWidgetChildDataset.png" alt="Dataset Details Widget Child Dataset" id="Dataset Details Widget Child Dataset" >}}

**Edit** opens the **[Edit Dataset](#add-and-edit-dataset-screens)** screen for the selected dataset.

**Promote** appears on the **Dataset Details** widget when you select a cloned snapshot on the dataset tree table.
This option promotes the cloned child dataset and allows users to delete the parent volume that created the clone.
Otherwise, you cannot delete a clone while the original volume still exists. See [zfs-promote.8](https://openzfs.github.io/openzfs-docs/man/8/zfs-promote.8.html).

Non-root parent and child dataset versions of the card include the **[Delete](#delete-dataset)** button.
To delete a root dataset, use the **Disconnect/Export** option on the **[Storage Dashboard]({{< relref "/SCALE/SCALEUIReference/Storage/_index.md" >}})** screen.

**Delete** opens a window that includes information about other options or services that use the dataset, for example a parent to other datasets and the services the child datasets of a parent dataset uses.
Non-root parent and child datasets include the **Delete** button.
{{< /expand >}}

#### Delete Window
The **Delete** window for a parent dataset (non-root) includes information about snapshots, shares or other services such as Kubernetes or VMs that use the dataset.
If a parent to other datasets, the window includes the services a child dataset uses.

{{< trueimage src="/images/SCALE/Datasets/DeleteDatasetParentDataset.png" alt="Delete Dataset Parent Dataset" id="Delete Dataset Parent Dataset" >}}

{{< expand "Click Here for More Information" "v" >}}
If a child dataset uses services the window displays the services.

{{< trueimage src="/images/SCALE/Datasets/DeleteDatasetChildUsingAService.png" alt="Delete Dataset Child Dataset Using a Service" id="Delete Dataset Child Dataset Using a Service" >}}

If a service does not use a child dataset, the **Delete** window does not display a service.

{{< trueimage src="/images/SCALE/Datasets/DeleteDatasetChildDataset.png" alt="Delete Dataset Child Dataset" id="Delete Dataset Child Dataset" >}}

The window includes a field where you enter the path for the dataset. Select the **Confirm** option to activate the **Delete Dataset** button.
{{< /expand >}}

### Dataset Space Management Widget
The **Dataset Space Management** widget displays space allocation (reserved, used, available) for all datasets.
The widget displays if an encrypted dataset is unlocked. After locking the dataset this widget disappears until you unlock the dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetSpaceManagementWidgetRootDataset.png" alt="Dataset Space Management Widget Root Dataset" id="Dataset Space Management Widget Root Dataset" >}}

{{< expand "Click Here for More Information" "v" >}}
The widget donut graph provides at-a-glance information and numeric values for the space allocated and used in the selected dataset.
This includes data written and space allocated to child datasets of this dataset.
It provides access to quota configuration options for the parent dataset and the child dataset of the parent and for users and groups with access to the dataset.

**Edit** opens the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen where you can set quotas for the dataset.

**[Manage User Quotas]({{< relref "ManageQuotas.md" >}})** screen and **Manage Group Quotas** opens the **[Manage Group Quotas]({{< relref "ManageQuotas.md" >}})** screen.
{{< /expand >}}

### Data Protection Widget
The **Data Protection** widget displays for all datasets.
It shows the number of snapshots and other data protection-related scheduled tasks (replication, cloud sync, rsync, and snapshots) configured on the system.

{{< trueimage src="/images/SCALE/Datasets/DataProtectionWidget.png" alt="Data Protection Widget" id="Data Protection Widget" >}}

{{< expand "Click Here for More Information" "v" >}}
The **Data Protection** widget links to the tasks found on the **Data Protection** screen.

**Create Snapshot** opens the **[Add Snapshot]({{< relref "SnapshotsScreens.md" >}})** screen.

**Manage Snapshots** opens the **[Snapshots]({{< relref "SnapshotsScreens.md" >}})** screen list view where you can manage snapshots.

**Manage Snapshot Tasks** opens the **Data Protection > [Periodic Snapshot Tasks]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled periodic snapshot tasks.

**Manage Replication Tasks** opens the **Data Protection > [Replications Tasks]({{< relref "ReplicationScreensSCALE.md" >}})** screen list view where you can manage scheduled replication tasks.

**Manage Cloud Sync Tasks** opens the **Data Protection > [Cloud Sync Tasks]({{< relref "CloudSyncTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled cloud sync tasks.

**Manage Rsync Tasks** opens the **Data Protection > [Rsync Tasks]({{< relref "RsyncTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled rsync tasks.

The **Snapshot** counter shows the number of snapshots taken.
The **Snapshot Tasks** counter shows the number of scheduled snapshot tasks.
The **Replication Tasks** counter shows the number of scheduled replication tasks.
The **Cloud Sync Tasks** and **Rsync Task** counters show the number of scheduled push tasks.
These tasks protect or back up data, whereas pull sync tasks do not and are not included in the task count.
{{< /expand >}}

### Permissions Widget
The **Permissions** widget displays for all datasets.
It shows the type of ACL as either **NFSv4** or **Unix Permissions** (POSIX), and lists access control user or group entries and the owner and group for the dataset.

{{< trueimage src="/images/SCALE/Datasets/PermissionsWidgetRootDataset.png" alt="Permissions Widget Root Dataset" id="Permissions Widget Root Dataset" >}}

{{< expand "Click Here for More Information" "v" >}}
Root datasets have POSIX permissions and the entries are not editable. 
The permission screen and widget options vary based on the ACL type.

Parent and child dataset permissions (NFSv4 or POSIX) are editable.

{{< trueimage src="/images/SCALE/Datasets/PermissionsWidgetParentDataset.png" alt="Permissions Widget Parent or Child Dataset" id="Permissions Widget Parent or Child Dataset" >}}

NFSv4 ACL type (the default ACL type) shows the user and group entries on the **Permissions** widget as buttons.
Click to show a selectable checklist of **Permissions Advanced** and **Flags Advanced** options for that entry on the **Permissions** widget.

{{< trueimage src="/images/SCALE/Datasets/PermissionsWidgetOwnerNSFv4Options.png" alt="Permissions Widget Owner NFSv4 Options" id="Permissions Widget Owner NFSv4 Options" >}}

A dataset with a POSIX ACL type is only editable using the **Edit** button.

**Edit** opens the [**Edit ACL**]({{< relref "EditACLScreens.md" >}}) for ACL type.
{{< /expand >}}

### Roles Widget
The **Roles** widget displays the dataset role or the service that uses it (i.e., a share, application, virtual machine, or the system dataset). 
A parent dataset displays information on child datasets that a service uses. 
If the dataset is also the system dataset, the widget includes a link to the **System > Advanced Settings** screen where you can manage the system dataset.

{{< trueimage src="/images/SCALE/Datasets/RolesWidgetRootDataset.png" alt="Roles Widget System Dataset" id="Roles Widget System Dataset" >}}

{{< expand "Roles Service Links" "v" >}}
The **Roles** widget shows information about the service using the dataset and provides a link to manage that service.
The information corresponds to the roles icon in the dataset tree table.

The **Roles** widget for a dataset with no share shows two links, one to create an SMB share and the other to create an NFS share.

{{< truetable >}}
| Role | Link Included | Description |
|------|---------------|-------------|
| System dataset | [Manage Advanced Settings]({{< relref "AdvancedSettingsScreen.md" >}}) | Select the option to configure the **System Dataset** |
| Apps | [Manage Apps Settings]({{< relref "/SCALE/SCALEUIReference/Apps/_index.md" >}}) | Displays Kubernetes is using the dataset. Select the option to **Choose Pool** from the **Settings** dropdown list on the **Applications** screen. |
| Dataset with no share | [Create SMB Share]({{< relref "SMBSharesScreens.md" >}})<br>[Create NFS Share]({{< relref "NFSSharesScreens.md" >}}) | Opens either the **Add SMB** or **Add NFS** share screen to configure the share. |
| SMB share | [Manage SMB Shares]({{< relref "SMBSharesScreens.md" >}}) | Displays the name of the SMB share using the dataset. Select the snare on the **Sharing SMB** screen to edit it. |
| Other share | Link to the share type screen | Displays the name of the share using the dataset. Select the on the share screen (NFS or iSCSI) to edit it. |
| Multiprotocol share | [Manage SMB Shares]({{< relref "SMBSharesScreens.md" >}})<br>[Manage NFS Shares]({{< relref "NFSSharesScreens.md" >}}) | Displays the name of the SMB and NFS share using the dataset. Each link opens the **Sharing SMB** or **Sharing NFS** screens. Click on the share to edit it. |
| VM | [Manage VM Settings]({{< relref "VirtualizationScreens.md" >}}) | Displays the name of the VM using the dataset(zvol). Select it on the **Virtual Machines** screen to edit it. |
{{< /truetable >}}
{{< /expand >}}

### ZFS Encryption Widget
The **ZFS Encryption** widget displays for datasets configured with encryption.
The options in the widget vary based on the type of dataset (root, non-root parent, or child dataset).
It includes the current state of the dataset encryption, the encryption root, the type, and the algorithm used.

{{< trueimage src="/images/SCALE/Datasets/ZFSEncryptionWidgetRootDataset.png" alt="ZFS Encryption Widget Root Dataset" id="ZFS Encryption Widget Root Dataset" >}}

{{< expand "Click Here for More Information" "v" >}}
The **ZFS Encryption** widget displays the **Lock** or **Unlock** options that are not available on the root dataset or a child dataset of a non-root parent it inherits encryption settings from.
The root dataset **ZFS Encryption** widget includes the **Export All Keys** and the **Export Key** options, and the **Edit** option to change encryption settings.
Parent or child dataset **ZFS Encryption** widgets include the options to **Lock** and **Unlock** the dataset, and to **Edit** the encryption settings.

{{< trueimage src="/images/SCALE/Datasets/ZFSEncryptionWidgetChildDatasetUnlocked.png" alt="ZFS Encryption Widget Child Dataset Unlocked" id="ZFS Encryption Widget Child Dataset Unlocked" >}}

Child dataset **ZFS Encryption** widgets include the **Go to Encryption Root** when the **Encryption Options** setting is set to **Inherit**.
The non-root parent dataset controls the state of the child dataset.

{{< trueimage src="/images/SCALE/Datasets/ZFSEncryptionWidgetWithGoToEncryptionRoot.png" alt="ZFS Encryption Widget with Go To Encryption Root" id="ZFS Encryption Widget with Go To Encryption Root" >}}

**Edit** opens the **[Edit Encryption Options]({{< relref "EncryptionUISCALE.md" >}}) for *dataset*** window for the selected dataset.

For more details on encryption windows and functions see [Encryption Settings]({{< relref "EncryptionUISCALE.md" >}}).
{{< /expand >}}

## Add and Edit Dataset Screens
The **Add Dataset** and **Edit Dataset** screens allow admin users with the right permission level to create and or modify datasets.
Both screens include the same settings but you cannot change the dataset name, **Dataset Preset** selection, or on the **Advanced Options** screen, change the **Case Sensitivity** settings after you click **Save** on the **Add Dataset** screen. 

After adding a dataset, click **Edit** on the **Dataset Details** widget to open the **Edit Dataset** screen. 
To edit encryption options, click **Edit** on the **ZFS Encryption** widget.
To edit dataset permissions, click **Edit** on the **Permissions** widget.

**Add Dataset** and **Edit Dataset** screens include the **Basic Options** and **Advanced Options**.
The**Basic Options** and **Advanced Options** screens include the [**Name and Options**](#name-and-options-section) section.

**Advanced Options** screen settings include:
* [Quota management](#quota-management-settings) tools 
* **[Encryption Options](#encryption-options-section)**
* **[Other Options](#other-option-section)**

### Name and Options Section
**Basic Options** and **Advanced Options** screens both show the **Name and Options** settings. 
The common settings are **Parent Path**, **Name**, and the **Dataset Preset** (previously known as the share type).

{{< trueimage src="/images/SCALE/Datasets/AddDatasetNameAndOptions.png" alt="Add Dataset Name and Options" id="Add Dataset Name and Options" >}}

{{< expand "Name and Options Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent path** | Read-only field that displays the dataset path. Populated with the parent dataset path, adds the name given to the dataset after entering it in **Name**. For example, *tank/shares/smbshare1*. |
| **Name** | Enter a unique identifier for the dataset. Names allow upper and lower case letters, numbers, and the dash (-) or underscore (_) special characters, but TrueNAS does not allow trailing spaces after the dataset name. You cannot change the dataset name after clicking **Save**. The **Name** field on the **Edit Dataset** screen shows the path. |
| **Dataset Preset** | Select the option from the dropdown list to define the type of data sharing the dataset uses. The options optimize the dataset for a sharing protocol or app and set the ACL type best suited to the dataset purpose. Options are: <br><li>**Generic** - Select for general storage datasets that are not associated with SMB shares, or apps. Sets the ACL to POSIX.<br><li>**SMB** - Select to optimize the dataset for SMB shares. Displays the **Create SMB Share** option pre-selected and **SMB Name** field populated with the value entered in **Name**. Sets the ACL to NFSv4. <br><li> **Apps** - Select to optimize the dataset for use by any application. Sets the ACL to NFSv4. If you plan to deploy container applications, the system automatically creates the **ix-apps** dataset for Docker storage for but separate datasets used for application data storage. <br><li>**Multiprotocol** - Select if configuring a multi-protocol or mixed-mode NFS and SMB sharing protocols. Allows clients to use either protocol to access the same data. Displays the **Create NFS Share** and **Create SMB Share** options pre-selected and the **SMB Name** field populated with the value entered in **Name**. See [Multiprotcol Shares]({{< relref "MixedModeShares.md" >}}) for more information. Sets the ACL to NFSv4.<br></li>Setting cannot be edited after saving the dataset. |
{{< /truetable >}}
{{< /expand >}}

### Quota Management Settings
Shows only on the **Advanced Options** screen.
The **This Dataset** and **This Dataset and Child Datasets** sections include the same setting options.
**This Dataset** applies the quota settings to the for the dataset you are creating or editing.
**This Dataset and Child Datasets** applies to any children of the dataset.
These settings also display on the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetQuotasManagement.png" alt="Add Dataset Advanced Quota Options" id="Add Dataset Advanced Quota Options" >}}

Setting a quota defines the maximum allowed space for the dataset or the dataset and child datasets.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or include all child datasets.
{{< expand "Quota Settings" "v" >}}

{{< include file="/static/includes/DatasetQuotaSettings.md" >}}

{{< /expand >}}

### Encryption Options Section 
Encryption setting options display on the **Advanced Options** of the **Add Dataset** screen but not on the **Edit Dataset** screen.
To edit encryption settings, click **Edit** on the [**ZFS Encryption** widget](#zfs-encryption-widget).
This opens the **Edit Encryption Options for *datasetName*** window where you can change encryption settings for an existing dataset.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetBasicEncryptionAndOtherOptions.png" alt="Add Dataset Encryption Options Clear Inherit" id="Add Dataset Encryption Options Clear Inherit" >}}

If you create an unencrypted dataset, the default setting is **Inherit (Non-Encrypted)**, and you can create encrypted or unencrypted child datasets under it.
If you create an encrypted dataset, the default setting is **Inherit (Encryption)**, and all child datasets created under it are encrypted.
The default **Inherit** option is pre-selected.

Clear the **Encryption** option (pre-selected) checkbox to show the key type encryption settings.
Select **Passphrase** in **Encryption Type** to show other settings.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetEncryptionPassphrase.png" alt="Add Dataset Encryption Passphrase" id="Add Dataset Encryption Passphrase" >}}

{{< expand "Encryption Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Inherit (*non-encrypted*)** | Leave selected to inherit encryption from the parent dataset (encrypted/non-encrypted). Select to clear the checkmark and display the **Encryption** option. |
| **Encryption** | Leave selected to show the other encryption settings and to set the encryption type as pass key or password. Select to clear the checkmark and hide the encryption settings on the **Add Dataset** screen. |
{{< /truetable >}}
{{< include file="/static/includes/EncryptionSettings.md" >}}
{{< /expand >}}

### Other Options Section
The **Other Options** tune the dataset for specific data-sharing protocols by setting compression level and sync type options, ACL type and mode, and other settings.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetOtherOptionsAdvanced1.png" alt="Add Dataset Advanced Other Options" id="Add Dataset Advanced Other Options" >}}

{{< expand "Other Options Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Comment** | Enter optional text to describe or define the dataset usage or any other information to associate with the dataset. |
| **Sync** | Select the sync setting option from the dropdown list. Options are: <br><li>**Standard** uses the sync settings requested by the client software. <br><li>**Always** waits for data writes to complete. <br><li>**Disabled** never waits for writes to complete. </li> |
| **Compression level** | Select the compression algorithm to use from the dropdown list. Options encode information in less space than the original data occupies. We recommend choosing a compression algorithm that balances disk performance with the amount of space saved. Options include: <br><li> **LZ4** is generally recommended as it maximizes performance and dynamically identifies the best files to compress. <br><li>**ZSTD** is the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm with several options for balancing speed and compression. <br><li>**Gzip** options range from **1** for least compression with best performance or **9** for maximum compression with greatest performance impact. <br><li>**ZLE** is a fast algorithm that only eliminates runs of zeroes. <br><li>**LZJB** is a legacy algorithm that is not recommended for use.</li> |
| **Enable Atime**| Select the access time for files option from the dropdown list. Access time can result in significant performance gains. **Inherit** uses the access time setting of the parent or the root dataset. **On** updates the access time for files when they are read. **Off** disables creating log traffic when reading files to maximize performance. |
| **ZFS Deduplication** | Select the option from the dropdown list to transparently reuse a single copy of duplicated data to save space. Options are: <br><li>**Inherit** - Select to use the parent or root dataset settings. <br><li>**On** - Select to use deduplication. <br><li>**Off** - Select to not use deduplication. <br><li>**Verify** - Select to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical.<br></li> Deduplication can improve storage capacity but is RAM intensive. Compressing data is recommended before using deduplication.<br> Deduplicating data is a one-way process. You cannot undo deduplicated data! |
| **Case Sensitivity** | Select the option from the dropdown list. Options are: <br><li>**Sensitive** assumes file names are case sensitive. <br><li>**Insensitive** assumes file names are not case sensitive. <br></li>You cannot change case sensitivity after saving the dataset. Note: The **Mixed** option no longer exists. |
| **Checksum** | Select the [checksum](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Checksums.html) option from the dropdown list. Options: <br><li> **Inherit** - Select to use the parent setting. <br><li>**On** - Select to use checksum without specifying the variant. <br><li>**FLETCHER2** (deprecated) or **FLETCHER4** - Select to use a position-dependent checksum that uses two checksums to determine single-bit errors in messages transmitted over network channels or ZFS streams. <br><li>**SHA256** (default for dedupted datasets) or **SHA512** - Select to use a sequence of numbers and letters to check the copy of a downloaded update file is identical to the original. <br><li>**SKEIN** Not supported for a file system on boot pools. <br><li>**EDNOR** is not supported for file systems on boot pools and Edon-R requires verification when used with dedup so it automatically uses `verify`.</li> |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Datasets/AddDatasetOtherOptionsAdvanced2.png" alt="Add Dataset Advanced Other Options" id="Add Dataset Advanced Other Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read-only** | Select the option to allow or prevent dataset modification from the dropdown list. **On** prevents modifying the dataset. **Off** allows users accessing the dataset to modify its contents. |
| **Exec** | Select the option for executing processes from within the dataset from the dropdown list. **On** allows executing processes from within this dataset. **Off** prevents executing processes from with the dataset. We recommend setting it to **On**. |
| **Snapshot directory** | Select the option to controls visibility of the <file>.zfs</file> directory on the dataset from the dropdown list. Select either **Visible** or **Invisible**. |
| **Snapdev** | Select the option that controls whether the volume snapshot devices under /dev/zvol/*poolname* are hidden or visible from the dropdown list. Options are **Inherit (hidden)**, **Visible** and **Hidden** (default value). |
| **Copies** | Select the number of ZFS user data duplicates stored on this dataset from the dropdown list. Select between **1**, **2**, or **3** redundant data copies. This can improve data protection and retention but is not a substitute for storage pools with disk redundancy. |
| **Record Size** | Select the logical block size in the dataset from the dropdown list of options. Matching the fixed size of data, as in a database, can result in better performance. |
| **ACL Type** | Select the access control list type from the dropdown list of options. Options are: <br><li>**Inherit** - Select to preserve ACL type from the parent dataset.<br><li>**Off** - Select to use neither NFSv4 or POSIX protocols.<br><li>**NFSv4** -Select to cleanly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS Core, FreeBSD, or other non-Linux ZFS implementations. <br><li>**POSIX** - Select when an organization data backup target does not support native NFSv4 ACLs. Since the Linux platform used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs.<br></li> All datasets within an SMB share path must have identical ACL types. For a more in-depth explanation of ACLs and configurations in TrueNAS, see our [ACL Primer](https://www.truenas.com/docs/references/aclprimer/). This advanced setting changes ACL type and mode settings configured by the [**Dataset Preset** option](#add-and-edit-dataset-screens). Do not make changes here if you do not understand ACLs. |
| **ACL Mode** | Select the option that determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs. See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property for more information. Options are: <br><li>**Passthrough** - Only updates ACL entries that are related to the file or directory mode.<br><li> **Restricted** - Does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Set **ACL Mode** to restricted to optimize a dataset for SMB sharing, but it can also require further optimizations. For example, configuring an [rsync task]({{< relref "RsyncTasksSCALE.md" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field.</li> |
| **Metadata (Special) Small Block Size** | Enter a threshold block size for small file blocks you include in the [special allocation class (fusion pools)]({{< relref "FusionPoolsScale.md" >}}). Blocks smaller than or equal to this value are assigned to the special allocation class while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Before setting this property, you must add a [metadata special class VDEV]({{< relref "FusionPoolsScale.md" >}}) to the pool. |
{{< /truetable >}}
{{< /expand >}}

#### Data Compression Algorithms
{{< include file="/static/includes/StorageCompressionLevelsScale.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
