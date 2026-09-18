---
title: "Datasets Screens"
description: "Provides information on the Datasets screens and settings."
weight: 70
aliases:
 - /scale/storage/storagedashboardscreens/datasets/importdatascreenscale/
 - /scale/storage/storagedashboardscreens/datasets/
 - /scale/storage/storagedashboardscreens/datasets/datasetsscreensscale/
 - /scale/scaleclireference/storage/clidataset/
 - /scale/scaleuireference/storage/datasets/datasetsscreensscale/
 - /scale/scaleuireference/storage/datasets/importdatascreenscale/
tags: 
- datasets
- storage
- zvols
- acl
- encryption
- quotas
doctype: reference
---


The **Datasets** screen and cards show information about datasets and zvols, provide access to data management functions, indicate the dataset roles, list the services using the dataset, show encryption status, and list permissions for datasets.
The screen focuses on managing data storage, including user and group quotas, snapshots, and other data protection measures.

The **Datasets** screen shows **No Datasets** and a **Create Pool** button until you add a pool and the first root dataset.

After creating a dataset, the screen shows the dataset tree table on the left and the **Details for *datasetname*** [dataset cards](#dataset-cards) on the right.
The tree table with multiple datasets lists parent and child datasets (or zvols) on the system. Icons representing the storage type or a service, such as SMB share or the system dataset, show at the right of a row.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreen.png" alt="Datasets Screen" id="Datasets Screen" >}}

{{< hint type=note >}}
Large petabyte systems might report storage numbers inaccurately. Storage configurations with more than 9,007,199,254,740,992 bytes round to the last 4 digits. 
For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}

**Add Zvol** opens the **[Add Zvol]({{< ref "ZvolsScreens" >}})** screen.

**Add Dataset** opens the **[Add Dataset](#add-and-edit-dataset-screens)** screen.

Begin typing the name of a dataset in the **Search** field to filter datasets to a short list of those matching what is typed.

### Dataset Tree Table

The datasets tree table shows an expandable hierarchical structure, starting with the root dataset, then each non-parent or parent and child datasets, with the child datasets nested under each parent dataset.

The top row of the tree table is selected by default when you go to the **Datasets** screen. The cards on the right show information for the selected dataset.

Clicking on any parent dataset expands the tree table to show nested child datasets.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenTreeTableExpanded.png" alt="Dataset Tree Table" id="Dataset Tree Table" >}}

The table of datasets shows used and available storage space for each dataset, encryption status (locked, unlocked, or unencrypted), and dataset usage, such as the services using it (e.g., the system dataset, a share, virtual machine, or application).
Datasets and zvols have different icons.

The <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"/></svg> icon represents zvols.

The <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg> icon represents a dataset.

{{< expand "Tree Table Encryption Icons" "v" >}}
{{< include file="/static/includes/EncryptionIconsSCALE.md" >}}
{{< /expand >}}

{{< expand "Tree Table Usage Icons" "v" >}} 
The dataset tree table shows icons representing the service type. Hover over the icons to view the description or icon label.
Usage in the dataset tree corresponds to the **[Usage card](#usage-card)**.
A dataset with an active task includes an activity spinner when that task is in progress.
{{< truetable >}}
| Usage | Icon | Description |
|------|------|-------------|
| System dataset | ![DatasetRolesSystemDatasetIcon](/images/SCALE/Datasets/DatasetRolesSystemDatasetIcon.png "Roles System Dataset Icon") | Indicates the parent (root) dataset designated as the system dataset. To change the system dataset, go to **System > Advanced Settings** and edit the **System Dataset Pool** on the **Storage** card. |
| Share | ![DatasetRolesShareGenericIcon](/images/SCALE/Datasets/DatasetRolesShareGenericIcon.png "Roles Dataset Share Icon") | Indicates the dataset is used by a share or that child datasets of the parent are used by a share. |
| SMB share | ![DatasetRolesSMBShareIcon](/images/SCALE/Datasets/DatasetRolesSMBShareIcon.png "Roles Dataset SMB Share Icon") | Indicates the dataset is used by an SMB share. |
| NVMe-oF Share | ![DatasetRolesNVMeShareIcon](/images/SCALE/Datasets/DatasetRolesNVMEShareIcon.png "Roles Dataset NVME Share Icon") | Indicates the dataset or zvol is used by an NVMe-oF share. |
| VM | ![DatasetRolesVMIcon](/images/SCALE/Datasets/DatasetRolesVMIcon.png "Roles Dataset VM Icon") | Indicates the dataset is used by a virtual machine (VM). |
| Apps | ![DatasetRolesAppsIcon](/images/SCALE/Datasets/DatasetRolesAppsIcon.png "Roles Apps Dataset Icon") | Indicates this dataset is used by an application and stores configuration and container-related data. |
{{< /truetable >}}
{{< /expand >}}

## Dataset Cards

Each dataset has a set of information cards (cards) in the **Details for *datasetname*** area of the screen. 
These cards group information by functional areas. 
The cards for a root or parent dataset differ from a child dataset, or a dataset used by another service or with encryption.

Dataset cards are:
* **[Details](#details-card)** 
* **[Space Management](#space-management-card)**
* **[Data Protection](#data-protection-card)**
* **[Permissions](#permissions-card)**
* **[Usage](#usage-card)**
* **[Encryption](#encryption-card)**

{{< trueimage src="/images/SCALE/Datasets/DatasetWidgetsSystemDataset.png" alt="Dataset Details Cards System Dataset" id="Dataset Details Cards System Dataset" >}}

### Details Card

The **Details** card shows information about the dataset that allows you to manage an existing dataset.

{{< trueimage src="/images/SCALE/Datasets/DetailsWidgetRootSystemDataset.png" alt="Details Card System Dataset" id="Details Card System Dataset" >}}

Information includes:
* **Sync** - Shows the type of dataset.
  For example, **STANDARD** for non-root datasets or **ROOT DATASET** for the first pool or root dataset, which is usually the system dataset.
* **Compression** - Shows the compression algorithm applied to the dataset. See [Data Compression Algorithms](#data-compression-algorithms) for more information.
* **Enable Atime** - Shows if this is on or off. See [Advanced Options](#add-and-edit-dataset-screens) for more information.
* **ZFS Deduplication** - Shows if ZFS deduplication is on or off. See [Advanced Options](#add-and-edit-dataset-screens) for more information.
* **Case Sensitivity** - Shows if case sensitivity is on or off. See [Advanced Options](#add-and-edit-dataset-screens) for more information.
* **Path** - Shows the mount path to the dataset, and the copy-to-clipboard icon.

A root dataset path shows the pool name alone. If there are multiple pools on the system, the first pool created is the system dataset.
The root dataset for a pool is the top-level container in your pool, sharing the same name as the pool itself.
When managing your TrueNAS system, it is generally best practice to create dedicated datasets under the root dataset for different types of data, rather than storing data directly in the root dataset itself.

**Edit** opens the **[Edit Dataset](#add-and-edit-dataset-screens)** screen for the selected dataset.

**[Delete](#delete-dataset)** shows on the **Details** card for non-root datasets.

Use **Disconnect/Export** on the **[Storage Dashboard]({{< ref "/SCALE/Storage" >}})** screen to delete a root dataset.

**Delete** opens a [**Delete dataset**](#delete-window) window with information about other options or services using the dataset, for example, a parent to other datasets, the services child datasets of a parent dataset uses, shares like SMB and/or NFS, or a multiprotocol share, and the path to the datasets the shares use.

**Promote** shows on the **Details** card for a dataset created by cloning a snapshot on the dataset tree table.
It promotes the cloned child dataset and allows users to delete the parent volume that created the clone.
Otherwise, you cannot delete a clone while the original volume still exists.
See [zfs-promote.8](https://openzfs.github.io/openzfs-docs/man/8/zfs-promote.8.html).

#### Delete Dataset Window

The **Delete** dataset window shows information about the dataset, including the path, services that depend on the dataset, shares using the dataset, and the path to the dataset.

{{< trueimage src="/images/SCALE/Datasets/DeleteDatasetWindow.png" alt="Delete Dataset Dataset" id="Delete Dataset Dataset" >}}

If a service does not use a dataset, the **Delete** window does not show a service.

The window includes a field where you enter the path to the dataset. 
**Confirm** activate the **Delete Dataset** button.
**Delete Dataset** deletes the dataset and all data it contains.

### Space Management Card

The **Space Management** card shows the total space allocation (data written, children of the dataset, available space).
The card shows if an encrypted dataset is unlocked. After locking the dataset, this card disappears until you unlock the dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetsSpaceManagementWidget.png" alt="Space Management Card" id="Space Management Card" >}}

The donut graph on the card provides at-a-glance information and numeric values for the space allocated and used in the selected dataset.
This includes data written and space allocated to child datasets of this dataset. It shows the available space in the dataset.

**Manage User Quota** opens the [**User Quotas**]({{< relref "QuotaScreens.md" >}}) screen.
**Manage Group Quotas** opens the [**Group Quotas**]({{< relref "QuotaScreens.md" >}}) screen.

**Edit** opens the **[Capacity Settings]({{< ref "CapacitySettings" >}})** screen where you can set quotas for the dataset.

### Data Protection Card

The **Data Protection** card shows snapshot and backup task information for the dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetsDataProtectionWidget.png" alt="Data Protection Card" id="Data Protection Card" >}}

**Take Snapshot** opens the **[Add Snapshot]({{< ref "SnapshotsScreens" >}})** screen.

**View Snapshot Tasks** opens the **[Data Protection]({{< ref "PeriodicSnapshotTasksScreens" >}})** screen where you can add or manage scheduled periodic snapshot tasks.

**No Backup Tasks** shows when no data protection backup tasks are created. 
**Go to Backups** opens the **[Data Protection]({{< ref "/SCALE/DataProtection/CloudSyncTasks" >}})** screen, where you can manage scheduled replication, rsync, and other data protection tasks.

### Permissions Card

The **Permissions** card shows the type of ACL permissions applied to the dataset.
ACL types are **NFSv4** or **Unix Permissions** (POSIX), and each lists access control user or group entries, and the owner and group for the dataset.

The card shows the owner and type of access control list (ACL) and ACL Entries (ACEs) for the dataset in the lower portion of the card.
**Owner** shows both the onwer user and group on one line, formatted as *owner:group*. For example, **Owner: *root:root***.

The permission screen and card options vary based on the ACL type.
Root datasets and those created with the generic or apps dataset preset type have POSIX permissions. These entries are not editable on the **Permissions** card. 

{{< trueimage src="/images/SCALE/Datasets/DatasetPermissionsWidgetRoot.png" alt="Permissions Card for Root Dataset" id="Permissions Card for Root Dataset" >}}

Non-root dataset can be POSIX or NFSv4 based on the dataset preset selected when you create the dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetPermissionsWidgetNFSv4.png" alt="Permissions Card NFSv4 ACL" id="PPermissions Card NFSv4 ACL" >}}

NFSv4 ACL type (the default ACL type) shows the user and group entries on the **Permissions** card as buttons that show selectable options to change selectable **Permissions Advanced** and **Flags Advanced** options for that entry on the **Permissions** card.

{{< trueimage src="/images/SCALE/Datasets/DatasetPermissionsNFSv4EditOptions.png" alt="Permissions Card NFSv4 Selectable Options" id="Permissions Card NFSv4 Selectable Options" >}}

**Edit** for a POSIX ACL opens the **Unix Permissions Editor** screen. Root datasets do not show the **Edit** button.

**Edit** for an NFSv4 ACL opens the [**Edit ACL**]({{< ref "EditACLScreens" >}}) screen.

### Usage Card

The **Usage** card shows the dataset role or services that use it (i.e., a share, application, virtual machine, or the system dataset).
It shows an icon for and information about the service using the dataset. A corresponding icon shows on the row for the dataset in the dataset tree table.

**Manage Advanced Settings** shows for the system dataset, and opens the **Advanced Settings** screen. 
If the dataset is associated with a share, a **Manage *SMB* Share** link shows, where *SMB* is the share type and the link opens the corresponding share screen.

{{< trueimage src="/images/SCALE/Datasets/DatasetsUsageWidgetSystemDataset.png" alt="Usage Card System Dataset" id="Usage Card System Dataset" >}}

**Not Shared** shows if the dataset is configured with a share preset like **SMB** but does not have a share created.

The **Usage** card shows two links: **Create SMB Share** that opens the [**Add SMB** screen]({{< relref "SMBSharesScreens.md" >}}) and **Create NFS Share** that opens the [**Add NFS** screen]({{< relref "NFSSharesScreens.md" >}}).

{{< trueimage src="/images/SCALE/Datasets/DatasetUsageWidgetNotShared.png" alt="Usage Card Not Shared" id="Usage Card Not Shared" >}}

The **Usage** card for a parent dataset with child datasets with shares shows the information in the table below, but does not link to other screens.

{{< truetable >}}
| Usage | Link Included | Description |
|------|---------------|-------------|
| System dataset | [Manage Advanced Settings]({{< ref "AdvancedSettingsScreen" >}}) | Select the option to configure the **System Dataset** |
| Apps | [Manage Apps Settings]({{< ref "/SCALE/Apps" >}}) | Shows the app using the dataset. |
| Dataset with no share | [Create SMB Share]({{< ref "SMBSharesScreens" >}})<br>[Create NFS Share]({{< ref "NFSSharesScreens" >}}) | Opens either the **Add SMB** or **Add NFS** share screen to configure the share. |
| SMB share | [Manage SMB Shares]({{< ref "SMBSharesScreens" >}}) | Shows the name of the SMB share using the dataset. Select the snare on the **Sharing SMB** screen to edit it. |
| Other share | Link to the share type screen | Shows the name of the share using the dataset. Select the option on the share screen (NFS or iSCSI) to edit it. |
| Multiprotocol share | [Manage SMB Shares]({{< ref "SMBSharesScreens" >}})<br>[Manage NFS Shares]({{< ref "NFSSharesScreens" >}}) | Shows the name of the SMB and NFS share using the dataset. Each link opens the **Sharing SMB** or **Sharing NFS** screens. Click on the share to edit it. |
{{< /truetable >}}

### Encryption Card

The **Encryption** card only shows for encrypted datasets.
Options shown vary based on the type of dataset (root, non-root parent, or child dataset), and whether the dataset is a encrypted parent or an encrypted child dataset that inherits settings from the parent.
It includes the current state of the dataset encryption, the encryption root, and the type.

{{< columns >}}
{{< trueimage src="/images/SCALE/Datasets/DatasetEncryptionWidget.png" alt="Encryption Card" id="Encryption Card" >}}
<--->
{{< trueimage src="/images/SCALE/Datasets/EncryptionWidgetInherit.png" alt="Encryption Card Inherit from Parent" id="Encryption Card Inherit from Parent" >}}
{{< /columns >}}

The **Encryption** card shows **Lock** when the dataset is unlocked or **Unlock** when the dataset is locked.
These are not available on the card for the root dataset. The dataset table also shows **Locked** or **Unlocked by Parent**.

The **Encryption** card shows **Export Key** when the encryption type is set to key.
**Export Key** downloads the system-generated encryption key to a JSON file. You can find this in your Windows **Downloads** folder.

**Edit** opens the **Edit Encryption Options for *datasetname*** window. A root dataset does not include the **Edit** button.
We do not recommend encrypting the root or system dataset!

For more details on encryption windows and functions, see [Encryption Settings]({{< ref "EncryptionScreen" >}}).

## Add and Edit Dataset Screens

The **Add Dataset** and **Edit Dataset** screens allow admin users with full control access to create and manage datasets.
Both screens include the same **Advanced Options** settings but you cannot change the dataset name, **Dataset Preset** selection, or the **Case Sensitivity** settings on the **Advanced Options** screen after clicking **Save** on the **Add Dataset** screen. 

**Edit** on the **Dataset Details** card opens the **Edit Dataset** screen.

**Edit** on the **Encryption** card opens an encryption edit window. The **Encryption** card only shows if a dataset is encrypted.

**Edit** on the **Permissions** card opens the **Edit ACL** screen to edit dataset NFSv4 permissions.
POSIX ACLs open the **Unix Permissions Editor** screen.

**Add Dataset** and **Edit Dataset** screens include the **Basic Options** and **Advanced Options**.
The**Basic Options** and **Advanced Options** screens shows the [**Name and Options**](#name-and-options-section) section.
Dataset quota settings only show on the **Add Dataset Advanced Options** screen. To edit quota settings use the [**Capacity Settings**]({{< ref "CapacitySettings.md" >}}).

### Basic Options

The **Basic Options** settings also show on the **Advanced Options** screen.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetScreenBasicOptions.png" alt="Add Dataset Basic Options" id="Add Dataset Basic Options" >}}

{{< expand "Basic Option Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Path** | Shows the read-only full dataset path, from the pool root dataset down to the dataset. Automatically populates the name of the dataset after it is entered in **Name**. For example, *tank/shares/smbshare1*, the dataset name and parent path are combined and limited to a 200-byte maximum length. The maximum nested directory level names in a path are limited to 50. You cannot create a dataset at the 51st level in the directory hierarchy after you account for the nested levels in the parent path. |
| **Name** | Dataset name consisting of letters (upper or lowercase), numbers, and underscore. No trailing spaces. When combined with parent path is limited to 200 characters and a maximum of 50 nested directory levels. You cannot create a dataset at the 51st level in the directory hierarchy after accounting for the nested levels in the parent path. Cannot be changed after clicking **Save**. **Name** on the **Edit Dataset** screen shows the path but is not editable. |
| **Dataset Preset** | Sets dataset settings and permissions based on the type of data sharing the dataset uses, for example, SMB/NFS shares, apps, or generic storage. Options optimize the dataset for a sharing protocol or app, and set the ACL type (NFSv4 or POSIX) best suited to the dataset purpose. Options are: <ul><li>**Generic** - Optimizes for use by general storage datasets that are not associated with SMB, NFS, or multi-protocol shares, or apps. Created with a POSIX ACL. </li><li>**SMB** - Optimizes the dataset for SMB shares. Preselects the **Create SMB Share** option and populates the **SMB Name** field with the value entered in **Name**. Created with an NFSv4 ACL. </li><li>**Apps** - Optimizes for use by any application. Created with an NFSv4 ACL. If planning to deploy container applications, the system automatically creates the **ix-apps** dataset for Docker storage for application data. For data storage for individual apps, create separate datasets. </li><li>**Multiprotocol** - Optimized for multi-protocol or mixed-mode NFS and SMB sharing protocols, or to create only an NFS share. Allows clients to use either protocol to access the same data. The **Create NFS Share** and **Create SMB Share** options are pre-selected, and the **SMB Name** field populates with the value entered in **Name**. See [Multiprotcol Shares]({{< ref "MixedModeShares" >}}) for more information. Created with an NFSv4 ACL.</li></ul> <br>This setting cannot be edited after saving the dataset. |
{{< /truetable >}}
{{< /expand >}}

{{< include file="/static/includes/FilesystemNameLengthNote.md" >}}

### Advanced Options 

The **Add Dataset** and **Edit Dataset** screens show the **Advanced Options** / **Basic Options** toggle button.

**Advanced Options** shows:
* [**Dataset Quota Settings**](#dataset-quota-settings), which are not shown on the **Edit Dataset** screen
* [**Encryption Option Settings**](#encryption-options-settings)
* [**Other Options Settings**](#other-options-settings)

### Dataset Quota Settings

Dataset quota settings define the maximum allowed space for the dataset or the dataset and its child datasets.
Use to reserve a defined amount of pool space to prevent automatically-generated data like system logs from consuming all available dataset space.

Quota settings on the **Add Dataset Advanced Options** screen set quotas for the dataset and the child datasets of the selected dataset.

**Edit** on the dataset **Space Management** card opens the  **[Capacity Settings]({{< ref "CapacitySettings" >}})** screen showing curent quotas for the selected dataset.

**Manage User Quotas** and **Manage Group Quotas** links on the  **Space Management** card open the user or group quota screens where you can set up and manage these quotas.

Dataset quota settings options:
* **This Dataset** - Sets quotas for only the selected dataset.
* **This Dataset and Child Datasets** - Sets quotas for the child datasets of the selected dataset.

These settings also display on the screen that sets quotas at the pool level.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetQuotasManagement.png" alt="Add Dataset Quota Options" id="Add Dataset Advanced Quota Options" >}}

{{< expand "Quota Settings" "v" >}}

{{< include file="/static/includes/DatasetQuotaSettings.md" >}}

{{< /expand >}}

### Encryption Options Settings

Encryption settings apply key or passphrase type encryption to the selected dataset, and encrypt any child datasets of an encrypted parent.
Encryption settings show on in the **Advanced Options** screen for the **Add Dataset** screen, but not on the **Edit Dataset** screen.
**Edit** on the [**Encryption** card](#zfs-encryption-card) opens the **Edit Encryption Options for *datasetName*** window, showing the current encryption settings for the selected dataset and allowing you to change the encryption type settings.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetBasicEncryptionAndOtherOptions.png" alt="Add Dataset Encryption Options Key" id="Add Dataset Encryption Options Key" >}}

**Inherit (Non-Encrypted)** shows when you create an unencrypted dataset.
**Inherit (Encryption)** shows when you create an encrypted dataset. All child datasets created under an encrypted dataset are encrypted.

The **Encryption** option (pre-selected), when selected, shows the key type encryption settings by default.
**Passphrase** in **Encryption Type** to show other settings.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetEncryptionKey.png" alt="Add Dataset Encryption Options - Key" id="Add Dataset Encryption Options - Key" >}}

{{< trueimage src="/images/SCALE/Datasets/AddDatasetEncryptionPassphrase.png" alt="Add Dataset Encryption Options - Passphrase" id="Add Dataset Encryption Options - Passphrase" >}}

{{< expand "Encryption Settings" "v" >}} 
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Inherit (*non-encrypted*)** | Inherits encryption from the parent dataset when selected. Default setting. Clearing shows the **Encryption** settings. |
| **Encryption** | Secures data within this dataset. Data is unusable until unlocked with an encryption key or passphrase. If parent dataset has encryption enabled, it is not possible to disable this option. The default encryption type is key. Clearing the **Encryption** checkmark hides the encryption settings. For detailed encryption configuration and management that covers pool-level encryption settings refer to the [ZFS encryption man page](https://zfsonlinux.org/manpages/0.8.3/man8/zfs.8.html), and [ZFS key management](https://openzfs.github.io/openzfs-docs/man/8/zfs-load-key.8.html). |
{{< /truetable >}}
{{< include file="/static/includes/EncryptionSettings.md" >}}
{{< /expand >}}

### Other Options Section

The **Other Options** section tunes the dataset for specific data-sharing protocols, sets compression level, sync type options, ACL type and mode, and other settings.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetOtherOptionsAdvanced1.png" alt="Dataset Advanced Other Options" id="Dataset Advanced Other Options" >}}

{{< expand "Other Options Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Comments** | Specifies optional text to describe storage usage or other information about the dataset. |
| **Sync** | 'Sets the data write synchronization type. Options are: <ul><li>**Standard** - Uses the sync settings requested by the client software.</li><li>**Always** - Waits for data writes to complete.</li><li>**Disabled** - Never waits for writes to complete.</li></ul> |
| **Compression level** | Sets the type of data compression to use for encoding information in less space than the original data occupies. Select the algorithm that balances disk performance with the amount of space saved. See [Data Compression Algorithms](#data-compression-algorithms) for the options. We recommend choosing a compression algorithm that balances disk performance with the amount of saved space. Options include: <ul><li>**LZ4** - Generally recommended as it maximizes performance and dynamically identifies the best files to compress.</li><li>**ZSTD** - Uses the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm. Has several options for balancing speed and compression.</li><li>**Gzip** - Has options that range from **1** for least compression with best performance or **9** for maximum compression with greatest performance impact.</li><li>**ZLE** - Has a fast algorithm that only eliminates runs of zeroes.</li><li>**LZJB** - A legacy algorithm that is not recommended for use.</li></ul> |
| **Enable Atime**| Sets the access time for files. Access time can result in significant performance gains. Options: <br><li>**Inherit** uses the access time setting of the parent or the root dataset. <br><li>**On** updates the access time for files when they are read. <br><li>**Off** disables creating log traffic when reading files to maximize performance.</li> |
| **ZFS Deduplication** | Sets TrueNAS to transparently reuse single copy of duplicated data to save space based on the selected option. Options: <br><li>**Inherit** - Uses the parent or root dataset settings. <br><li>**On** - Uses deduplication. <br><li>**Off** - Does not use deduplication. <br><li>**Verify** - Use to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical.</li> Deduplication can improve storage capacity, but it is RAM-intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated! |
| **Case Sensitivity** | Sets case sensitivity. Assumes file names are case sensitive. **Sensitive** assumes file names are case sensitive. **Insensitive** assumes file names are not case sensitive. Cannot be changed after save. Note! The **Mixed** option no longer exists. |
| **Checksum** | Sets the [checksum](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Checksums.html) to use. Options: <ul><li>**Inherit** - Uses the parent setting.</li><li>**On** - Uses the checksum without specifying the variant.</li><li>**FLETCHER2** (deprecated) or **FLETCHER4** - Uses a position-dependent checksum that uses two checksums to determine single-bit errors in messages transmitted over network channels or ZFS streams.</li><li>**SHA256** (default for deduped datasets) or **SHA512** - Uses a sequence of numbers and letters to check the copy of a downloaded update file is identical to the original.</li><li>**SKEIN** - Not supported for a file system on boot pools.</li><li>**EDNOR** - Not supported for file systems on boot pools, and Edon-R requires verification when used with dedup, so it automatically uses <code>verify</code>.</li></ul> |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Datasets/AddDatasetOtherOptionsAdvanced2.png" alt="Add Dataset Advanced Other Options" id="Add Dataset Advanced Other Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read-only** | Allows or prevents storage volume (zvol, dataset) modification. **Inherit** ues the the parent setting. **On** prevents modifying the dataset. **Off** allows users to access the dataset to modify its contents. |
| **Exec** | Sets the option for executing processes from within the dataset. **On** allows executing processes from within this dataset. **Off** prevents executing processes from within the dataset. We recommend setting it to **On**. |
| **Snapshot directory** | Controls visibility of the <file>.zfs</file> directory on the dataset. **Visible** shows the directory, **Invisible** hides the directory, or **Disabled** disables access to the directory (default setting). |
| **Snapdev** | Controls visibility of the volume snapshot devices in the <file>.zfs</file> directory under <file>/dev/zvol/<i>poolname</i></file> on the dataset. Options are **Visible**, which shows the directory; **Invisible**, which hides the directory; or **Disabled**, which disables access to the directory (default setting). |
| **Copies** | Sets the number of ZFS user data duplicates stored on this dataset. Options are **1** (stores one copy), **2** (stores two copies), or **3** (stores three copies). This improves data protection but does not substitute for pool disk redundancy. |
| **Record Size** | Sets the logical block size for this dataset. Matching the block size to fixed-size data records (such as databases) improves performance. |
| **ACL Type** |'Sets the access control list type for this dataset. **Inherit** preserves the parent dataset ACL. **Off** uses neither ACL type. **NFSv4** provides Windows-style ACLs for cross-platform compatibility. **POSIX** provides Linux-style ACLs for backup targets without NFSv4 support. All datasets in an SMB share path must have identical ACL types. Sets the access control list type. Options: <br><li>**Inherit** - Preserves ACL type from the parent dataset.<br><li>**Off** - Uses neither NFSv4 nor POSIX protocols.<br><li>**NFSv4** - Cleanly migrates Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS, FreeBSD, or other non-Linux ZFS implementations. <br><li>**POSIX** - Use when a data backup target does not support native NFSv4 ACLs. Since the Linux platform has used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs.<br></li> All datasets within an SMB share path must have identical ACL types. For a more in-depth explanation of ACLs and configurations in TrueNAS, see our [ACL Primer](https://www.truenas.com/docs/references/aclprimer/). This advanced setting changes ACL type and mode settings configured by the **Dataset Preset** option. Do not make changes here if you do not understand ACLs. |
| **ACL Mode** | Determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs. See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property for more information. Options: <br><li>**Passthrough** only updates ACL entries that are related to the file or directory mode. <br><li>**Restricted** does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing any access rules. Setting the **ACL Mode** to **Restricted** is typically used to optimize a dataset for SMB sharing, but can require further optimizations. For example, configuring an rsync task with this dataset could require adding --no-perms in the task **Auxiliary Parameters** field.<br></li> **Related Documentation:**- Edit ACL screen for managing dataset permissions. |
| **Use Metadata (Special) VDEVs** | Stores data blocks in a [special allocation class (fusion pool)]({{< ref "CreatingFusionPools" >}}) metadata VDEV. Options: <ul><li>**Inherit** - Uses the parent dataset setting. Displays the inherited value in human-readable form, for example, **Inherit (128 KiB)** or **Inherit (off)**.</li><li>**On** - Enables the special allocation class for this dataset. Shows the **Threshold** field where you enter the maximum block size to store in the special class. Valid values are 1 byte to 16 MiB. The default threshold is 16 MiB. Blocks smaller than or equal to the threshold are assigned to the special allocation class; larger blocks are assigned to the regular class.</li><li>**Off** - Disables storing blocks in the special allocation class.<br></li></ul>Before enabling this setting, you must add a [metadata special class VDEV]({{< ref "CreatingFusionPools" >}}) to the pool. |
{{< /truetable >}}
{{< /expand >}}

#### Data Compression Algorithms

{{< include file="/static/includes/StorageCompressionLevelsScale.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
