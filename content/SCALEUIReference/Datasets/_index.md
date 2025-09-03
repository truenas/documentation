---
title: "Datasets"
description: "Provides information on the Datasets screens and settings."
geekdocCollapseSection: true
weight: 35
tags: 
- datasets
- storage
- zvols
- acl
- encryption
- quotas
---


The **Datasets** screen and widgets show information about datasets and zvols, provide access to data management functions, indicate the dataset roles, list the services using the dataset, show encryption status, and list permissions for datasets.
The screen focuses on managing data storage, including user and group quotas, snapshots, and other data protection measures.

## Datasets Screen

The **Datasets** screen shows **No Datasets** and a **Create Pool** button until you add a pool and the first root dataset.

After creating a dataset, the screen shows the dataset tree table on the left and the **Details for *datasetname*** [dataset widgets](#dataset-widgets) on the right.
The tree table with multiple datasets lists parent and child datasets (or zvols) on the system. Icons representing the storage type or a service, such as SMB share or the system dataset, show at the right of a row.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreen.png" alt="Datasets Screen" id="Datasets Screen" >}}

{{< hint type=note >}}
Large petabyte systems might report storage numbers inaccurately. Storage configurations with more than 9,007,199,254,740,992 bytes round to the last 4 digits. 
For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}

**Add Zvol** opens the **[Add Zvol]({{< ref "ZvolsScreensScale" >}})** screen.

**Add Dataset** opens the **[Add Dataset](#add-and-edit-dataset-screens)** screen.

Begin typing the name of a dataset in the **Search** field to filter datasets to a short list of those matching what is typed.

### Dataset Tree Table

The datasets tree table shows an expandable hierarchical structure, starting with the root dataset, then each non-parent or parent and child datasets, with the child datasets nested under each parent dataset.

The top row of the tree table is selected by default when you go to the **Datasets** screen. The widgets on the right show information for the selected dataset.

Click on any parent dataset to expand the tree table to show nested child datasets.

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
Usage in the dataset tree corresponds to the **[Usage widget](#usage-widget)**.
A dataset with an active task includes an activity spinner when that task is in progress.
{{< truetable >}}
| Usage | Icon | Description |
|------|------|-------------|
| System dataset | ![DatasetRolesSystemDatasetIcon](/images/SCALE/Datasets/DatasetRolesSystemDatasetIcon.png "Roles System Dataset Icon") | Indicates the parent (root) dataset designated as the system dataset. To change the system dataset, go to **System > Advanced Settings** and edit the **System Dataset Pool** on the **Storage** widget. |
| Share | ![DatasetRolesShareGenericIcon](/images/SCALE/Datasets/DatasetRolesShareGenericIcon.png "Roles Dataset Share Icon") | Indicates the dataset is used by a share or that child datasets of the parent are used by a share. |
| SMB share | ![DatasetRolesSMBShareIcon](/images/SCALE/Datasets/DatasetRolesSMBShareIcon.png "Roles Dataset SMB Share Icon") | Indicates the dataset is used by an SMB share. |
| VM | ![DatasetRolesVMIcon](/images/SCALE/Datasets/DatasetRolesVMIcon.png "Roles Dataset VM Icon") | Indicates the dataset is used by a virtual machine (VM). |
| Apps | ![DatasetRolesAppsIcon](/images/SCALE/Datasets/DatasetRolesAppsIcon.png "Roles Apps Dataset Icon") | Indicates this dataset is used by an application and stores configuration and container-related data. |
{{< /truetable >}}
{{< /expand >}}

## Dataset Details Widgets

Each dataset has a set of information cards (widgets) in the **Details for *datasetname*** area of the screen. 
These widgets and information is grouped by functional areas. 
The widgets for a root or parent dataset differ from a child dataset, or a dataset used by another service or with encryption.

Dataset widgets are:
* **[Details](#details-widget)** 
* **[Dataset Space Management](#dataset-space-management-widget)**
* **[Data Protection](#data-protection-widget)**
* **[Permissions](#permissions-widget)**
* **[Usage](#usage-widget)**
* **[ZFS Encryption](#zfs-encryption-widget)**

{{< trueimage src="/images/SCALE/Datasets/DatasetWidgetsSystemDataset.png" alt="Dataset Details Widgets System Dataset" id="Dataset Details Widgets System Dataset" >}}

### Details Widget

The **Details** widget shows information about the dataset that allows you to manage an existing dataset.

{{< trueimage src="/images/SCALE/Datasets/DetailsWidgetRootSystemDataset.png" alt="Details Widget System Dataset" id="Details Widget System Dataset" >}}

Information includes:
* **Sync** - Shows the type of dataset.
  For example, **STANDARD** for non-root datasets or **ROOT DATASET** for the first pool or root dataset, which is usually the system dataset.
* **Compression** - Shows the compression algorithm applied to the dataset. See [Data Compression Algorithms](#data-compression-algorithms) for more information.
* **Enable Atime** - Shows if this is on or off. See [Advanced Options](#add-and-edit-dataset-screens) for more information.
* **ZFS Deduplication** - Shows if ZFS deduplication is on or off. See [Advanced Options](#add-and-edit-dataset-screens) for more information.
* **Case Sensitivity** - Shows if case sensitivity is on or off. See [Advanced Options](#add-and-edit-dataset-screens) for more information.
* **Path** - Shows the mount path to the dataset.

A root dataset path shows the pool name alone. If there are multiple pools on the system, the first pool created is the system dataset.
The root dataset for a pool is the top-level container in your pool, sharing the same name as the pool itself.
When managing your TrueNAS system, it is generally best practice to create dedicated datasets under the root dataset for different types of data, rather than storing data directly in the root dataset itself.

**Edit** opens the **[Edit Dataset](#add-and-edit-dataset-screens)** screen for the selected dataset.

**[Delete](#delete-dataset)** shows on the **Details** widget for non-root datasets.
Use the **Disconnect/Export** option on the **[Storage Dashboard]({{< ref "/SCALEUIReference/Storage" >}})** screen to deleate a root dataset.

**Delete** opens a [**Delete dataset**](#delete-window) window with information about other options or services using the dataset, for example, a parent to other datasets, the services child datasets of a parent dataset uses, shares like SMB and/or NFS, or a multiprotocol share, and the path to the datasets the shares use.

**Promote** shows on the **Details** widget for a dataset created by cloning a snapshot on the dataset tree table.
It promotes the cloned child dataset and allows users to delete the parent volume that created the clone.
Otherwise, you cannot delete a clone while the original volume still exists.
See [zfs-promote.8](https://openzfs.github.io/openzfs-docs/man/8/zfs-promote.8.html).

#### Delete Window

The **Delete** window shows information about the dataset, including the path, services that depend on the dataset, and shares using the dataset and the path to the dataset.

{{< trueimage src="/images/SCALE/Datasets/DeleteDatasetWindow.png" alt="Delete Dataset Dataset" id="Delete Dataset Dataset" >}}

If a service does not use a dataset, the **Delete** window does not show a service.

The window includes a field where you enter the path to the dataset. 
**Confirm** activate the **Delete Dataset** button.
**Delete Dataset** deletes the dataset and all data it contains.

### Space Management Widget

The **Space Management** widget shows the total space allocation (data written, children of the dataset, available space).
The widget shows if an encrypted dataset is unlocked. After locking the dataset, this widget disappears until you unlock the dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetsSpaceManagementWidget.png" alt="Space Management Widget" id="Space Management Widget" >}}

The donut graph on the widget provides at-a-glance information and numeric values for the space allocated and used in the selected dataset.
This includes data written and space allocated to child datasets of this dataset. It shows the available space in the dataset.

**Manage User Quota** opens the [**User Quotas**]({{< relref "QuotaScreens.md" >}}) screen.
**Manage Group Quotas** opens the [**Group Quotas**]({{< relref "QuotaScreens.md" >}}) screen.

**Edit** opens the **[Capacity Settings]({{< ref "CapacitySettingsSCALE" >}})** screen where you can set quotas for the dataset.

### Data Protection Widget

The **Data Protection** widget shows snapshot and backup task information for the dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetsDataProtectionWidget.png" alt="Data Protection Widget" id="Data Protection Widget" >}}

**Take Snapshot** opens the **[Add Snapshot]({{< ref "SnapshotsScreens" >}})** screen.

**View Snapshot Tasks** opens the **[Data Protection]({{< ref "PeriodicSnapshotTasksScreensSCALE" >}})** screen where you can add or manage scheduled periodic snapshot tasks.

**No Backup Tasks** shows when no data protection backup tasks are created. 
**Go to Backups** opens the **[Data Protection]({{< ref "/SCALE/SCALEUIReference/DataProtection" >}})** screen, where you can manage scheduled replication, rsync, and other data protection tasks.

### Permissions Widget

The **Permissions** widget shows the type of ACL permissions applied to the dataset.
ACL types can be **NFSv4** or **Unix Permissions** (POSIX), and each lists access control user or group entries, and the owner and group for the dataset.

The widget shows the owner and type of access control list (ACL) and ACL Entries (ACEs) for the dataset in the lower portion of the widget.
**Owner** shows both the onwer user and group on one line, formatted as *owner:group*. For example, **Owner: *root:root***.

The permission screen and widget options vary based on the ACL type.
Root datasets have POSIX permissions, and the entries are not editable. 

{{< trueimage src="/images/SCALE/Datasets/DatasetPermissionsWidgetRoot.png" alt="Permissions Widget for Root Dataset" id="Permissions Widget for Root Dataset" >}}

Non-root dataset can be POSIX or NFSv4 based on the Dataset Preset selected when you create the dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetPermissionsWidgetNFSv4.png" alt="Permissions Widget NFSv4 ACL" id="PPermissions Widget NFSv4 ACL" >}}

NFSv4 ACL type (the default ACL type) shows the user and group entries on the **Permissions** widget as buttons that show selectable options to change selectable **Permissions Advanced** and **Flags Advanced** options for that entry on the **Permissions** widget.

{{< trueimage src="/images/SCALE/Datasets/DatasetPermissionsNFSv4EditOptions.png" alt="Permissions Widget NFSv4 Selectable Options" id="Permissions Widget NFSv4 Selectable Options" >}}

**Edit** for a POSIX ACL opens the **Unix Permissions Editor** screen. Root datasets do not show the **Edit** button.

**Edit** for an NFSv4 ACL opens the [**Edit ACL**]({{< ref "EditACLScreens" >}}) screen.

### Usage Widget

The **Usage** widget shows the dataset role or services that use it (i.e., a share, application, virtual machine, or the system dataset).
It shows an icon for and information about the service using the dataset. A corresponding icon shows on the row for the dataset in the dataset tree table.

The **Manage Advanced Settings** shows for the system dataset, and opens the **Advanced Settings** screen. 
If the dataset is associated with a share, a **Manage *SMB* Share** link shows. where *SMB* is the share type and opens the corresponding share screen.

{{< trueimage src="/images/SCALE/Datasets/DatasetsUsageWidgetSystemDataset.png" alt="Usage Widget System Dataset" id="Usage Widget System Dataset" >}}

It shows **Not Shared** if the dataset is configured with a share preset like **SMB** but does not have a share created.
The **Usage** widget shows two links: **Create SMB Share** that opens the [**Add SMB** screen]({{< relref "SMBSharesScreens.md" >}}) and **Create NFS Share** that opens the [**Add NFS** screen]({{< relref "NFSSharesScreens.md" >}}).

{{< trueimage src="/images/SCALE/Datasets/DatasetUsageWidgetNotShared.png" alt="Usage Widget Not Shared" id="Usage Widget Not Shared" >}}

The **Usage** widget for a parent dataset with child datasets with shares shows this, but does not link to other screens.

{{< truetable >}}
| Usage | Link Included | Description |
|------|---------------|-------------|
| System dataset | [Manage Advanced Settings]({{< ref "AdvancedSettingsScreen" >}}) | Select the option to configure the **System Dataset** |
| Apps | [Manage Apps Settings]({{< ref "/SCALEUIReference/Apps" >}}) | Shows the app using the dataset. |
| Dataset with no share | [Create SMB Share]({{< ref "SMBSharesScreens" >}})<br>[Create NFS Share]({{< ref "NFSSharesScreens" >}}) | Opens either the **Add SMB** or **Add NFS** share screen to configure the share. |
| SMB share | [Manage SMB Shares]({{< ref "SMBSharesScreens" >}}) | Shows the name of the SMB share using the dataset. Select the snare on the **Sharing SMB** screen to edit it. |
| Other share | Link to the share type screen | Shows the name of the share using the dataset. Select the option on the share screen (NFS or iSCSI) to edit it. |
| Multiprotocol share | [Manage SMB Shares]({{< ref "SMBSharesScreens" >}})<br>[Manage NFS Shares]({{< ref "NFSSharesScreens" >}}) | Shows the name of the SMB and NFS share using the dataset. Each link opens the **Sharing SMB** or **Sharing NFS** screens. Click on the share to edit it. |
{{< /truetable >}}

### Encryption Widget

The **Encryption** widget only shows for encrypted datasets.
Options shown in the widget vary based on the type of dataset (root, non-root parent, or child dataset), and whether the dataset is a encrypted parent or an encrypted child dataset that inherits settings from the parent.
It includes the current state of the dataset encryption, the encryption root, and the type.

{{< columns >}}
{{< trueimage src="/images/SCALE/Datasets/DatasetEncryptionWidget.png" alt="Encryption Widget" id="Encryption Widget" >}}
<--->
{{< trueimage src="/images/SCALE/Datasets/EncryptionWidgetInherit.png" alt="Encryption Widget Inherit from Parent" id="Encryption Widget Inherit from Parent" >}}
{{< /columns >}}

The **Encryption** widget shows **Lock** when the dataset is unlocked or **Unlock** when the dataset is locked.
These are not available on the widget for the root dataset. The dataset table also shows **Locked** or **Unlocked by Parent**.

The **Encryption** widget shows **Export Key** when the encryption type is set to key.
**Export Key** downloads the system-generated encryption key to a JSON file. You can find this in your Windows **Downloads** folder.

**Edit** opens the **Edit Encryption Options for *datasetname*** window. A root dataset does not include the **Edit** button.
We do not recommend encrypting the root or system dataset!

For more details on encryption windows and functions, see [Encryption Settings]({{< ref "EncryptionUISCALE" >}}).

## Add and Edit Dataset Screens
The **Add Dataset** and **Edit Dataset** screens allow admin users with full control access to create and manage datasets.
Both screens include the same **Advanced Options** settings but you cannot change the dataset name, **Dataset Preset** selection, or the **Case Sensitivity** settings on the **Advanced Options** screen after clicking **Save** on the **Add Dataset** screen. 

**Edit** on the **Dataset Details** widget opens the **Edit Dataset** screen.

**Edit** on the **Encryption** widget opens an encryption edit window. The **Encryption** widget only shows if a dataset is encrypted.
**Edit** on the **Permissions** widget opens the **Edit ACL** screen to edit dataset NFSv4 permissions.
POSIX ACLs open the **Unix Permissions Editor** screen.

**Add Dataset** and **Edit Dataset** screens include the **Basic Options** and **Advanced Options**.
The**Basic Options** and **Advanced Options** screens shows the [**Name and Options**](#name-and-options-section) section.

The **Advanced Options** screen shows:
* [Quota management](#quota-management-settings) tools and settings
* [**Encryption Options**](#encryption-options-section) settings
* [**Other Options**](#other-option-section) settings

### Basic Options

The **Basic Options** show on the **Advanced Options** screen.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetScreenBasicOptions.png" alt="Add Dataset Basic Options" id="Add Dataset Basic Options" >}}

{{< expand "Basic Option Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Parent Path** | A read-only field populated with the full dataset path, from the pool root dataset down to the dataset. Adds the name of the dataset after it is entered in **Name**. For example, *tank/shares/smbshare1*. The dataset name and parent path name are combined and limited to a 200-character maximum length. The maximum nested directory level names in a path are limited to 50. You cannot create a dataset at the 51st level in the directory hierarchy after you account for the nested levels in the parent path. |
| **Name** | Text entry field that accepts manual or copy/paste entry of a unique identifier for the dataset. Names can consist of upper and lower case letters, numbers, and the dash (-) or underscore (_) special characters. Names cannot have trailing spaces after the dataset name. The dataset name and parent path name are combined and limited to a 200 character maximum length. The maximum nested directory level names in a path are limited to 50. You cannot create a dataset at the 51st level in the directory  hierarchy after you account for the nested levels in the parent path. You cannot change the dataset name after clicking **Save**. The **Name** field on the **Edit Dataset** screen shows the path but is not editable. |
| **Dataset Preset** | Presets configure dataset settings and permissions based on the type of data sharing the dataset uses, for example, SMB/NFS shares, apps, or generic storage. The options optimize the dataset for a sharing protocol or app, and set the ACL type (NFSv4 or POSIX) best suited to the dataset purpose. Options are: <br><li>**Generic** - Use for general storage datasets that are not associated with SMB, NFS, or multi-protocol shares, or apps. Created with a POSIX ACL.<br><li>**SMB** - Optimizes the dataset for SMB shares. Preselects the **Create SMB Share** option and populates the **SMB Name** field with the value entered in **Name**. Created with an NFSv4 ACL. <br><li> **Apps** - Optimize for use by any application. Created with an NFSv4 ACL. If planning to deploy container applications, the system automatically creates the **ix-apps** dataset for Docker storage for application data. For data storage for individual apps, create separate datasets. <br><li>**Multiprotocol** - Optimized for multi-protocol or mixed-mode NFS and SMB sharing protocols, or to create only an NFS share. Allows clients to use either protocol to access the same data. The **Create NFS Share** and **Create SMB Share** options are pre-selected, and the **SMB Name** field populates with the value entered in **Name**. See [Multiprotcol Shares]({{< ref "MixedModeShares" >}}) for more information. Created with an NFSv4 ACL.<br></li>This setting cannot be edited after saving the dataset. |
{{< /truetable >}}
{{< /expand >}}

### Advanced Options

The **Add Dataset** and **Edit Dataset** screens show the **Advanced Options** button.
**Advanced Options** show:
* [**Quota Management**](#quota-management-settings) settings
* [**Encryption](#encryption-options-section) settings
* [**Other Options**](#other-options-section) settings

### Quota Management Settings

Setting a quota defines the maximum allowed space for the dataset or the dataset and its child datasets.
You can reserve a defined amount of pool space to prevent automatically-generated data like system logs from consuming all available dataset space.
You can configure quotas for only the new dataset or include all child datasets in the quota.

Quota management settings on the **Advanced Options** screen set quotas for the selected dataset, and can set the quota for the child datasets of the selected dataset.
The **Edit** button on the dataset **Space Management** widget opens the **Capacity Setting** 
Options for user or group levels can be accessed from the **Storage Dashboard** screen.

The quota management settings options:
* **This Dataset** - Sets quotas for only the selected dataset.
* **This Dataset and Child Datasets** - Sets quotas for the child datasets of the selected dataset.

These settings also display on the **[Capacity Settings]({{< ref "CapacitySettingsSCALE" >}})** screen that sets quotas at the pool level.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetQuotasManagement.png" alt="Add Dataset Quota Options" id="Add Dataset Advanced Quota Options" >}}

{{< expand "Quota Settings" "v" >}}

{{< include file="/static/includes/DatasetQuotaSettings.md" >}}

{{< /expand >}}

### Encryption Options Section

Encryption settings apply key or passphrase type encryption to the selected dataset, and encrypt any child datasets of an encrypted parent.
Encryption settings show on in the **Advanced Options** screen for the **Add Dataset** screen, but not on the **Edit Dataset** screen.
**Edit** on the [**Encryption** widget](#zfs-encryption-widget) opens the **Edit Encryption Options for *datasetName*** window, showing the current encryption settings for the selected dataset and allowing you to change the encryption type settings.

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
| **Inherit (*non-encrypted*)** | Selected by default. When selected, it inherits the encryption setting of the parent dataset (encrypted/non-encrypted). Clearing the checkmark shows the **Encryption** option. |
| **Encryption** | When selected, shows other encryption settings. The default encryption type is key. Clearing the **Encryption** checkmark hides the encryption settings. |
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
| **Comment** | Text entry field for optional text to describe or define the dataset usage or any other information to associate with the dataset. |
| **Sync** | Sets the sync type to the option selected on the dropdown list. Options are: <br><li>**Standard** - Uses the sync settings requested by the client software. <br><li>**Always** - Waits for data writes to complete. <br><li>**Disabled** - Never waits for writes to complete. </li> |
| **Compression level** | Applies the compression algorithm to the option selected on the dropdown list. Options encode information in less space than the original data occupies. We recommend choosing a compression algorithm that balances disk performance against the amount of space saved. Options include: <br><li> **LZ4** - Generally recommended as it maximizes performance and dynamically identifies the best files to compress. <br><li>**ZSTD** - Uses the [Zstandard](https://tools.ietf.org/html/rfc8478) compression algorithm. Has several options for balancing speed and compression. <br><li>**Gzip** - Has options that range from **1** for least compression with best performance or **9** for maximum compression with greatest performance impact. <br><li>**ZLE** - Has a fast algorithm that only eliminates runs of zeroes. <br><li>**LZJB** - A legacy algorithm that is not recommended for use.</li> |
| **Enable Atime**| Sets the access time for files to the selected option on the dropdown list. Access time can result in significant performance gains. **Inherit** uses the access time setting of the parent or the root dataset. **On** updates the access time for files when they are read. **Off** disables creating log traffic when reading files to maximize performance. |
| **ZFS Deduplication** | Sets the option to transparently reuse a single copy of duplicated data to save space to the option selected on the dropdown list. Options: <br><li>**Inherit** - Uses the parent or root dataset settings. <br><li>**On** - Uses deduplication. <br><li>**Off** - Does not use deduplication. <br><li>**Verify** - Use to do a byte-to-byte comparison when two blocks have the same signature to verify the block contents are identical.<br></li> Deduplication can improve storage capacity but is RAM-intensive. Compressing data is recommended before using deduplication.<br> Deduplicating data is a one-way process. You cannot undo deduplicated data! |
| **Case Sensitivity** | Sets case sensitivity to the option selected on the dropdown list. Options are: <br><li>**Sensitive** - Assumes file names are case sensitive. <br><li>**Insensitive** - Assumes file names are not case sensitive. <br></li>You cannot change case sensitivity after saving the dataset. Note: The **Mixed** option no longer exists. |
| **Checksum** | Sets the [checksum](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Checksums.html) to the option selected on the dropdown list. Options: <br><li> **Inherit** - Uses the parent setting. <br><li>**On** - Uses the checksum without specifying the variant. <br><li>**FLETCHER2** (deprecated) or **FLETCHER4** - Uses a position-dependent checksum that uses two checksums to determine single-bit errors in messages transmitted over network channels or ZFS streams. <br><li>**SHA256** (default for deduped datasets) or **SHA512** - Uses a sequence of numbers and letters to check the copy of a downloaded update file is identical to the original. <br><li>**SKEIN** - Not supported for a file system on boot pools. <br><li>**EDNOR** - Not supported for file systems on boot pools, and Edon-R requires verification when used with dedup, so it automatically uses `verify`.</li> |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/Datasets/AddDatasetOtherOptionsAdvanced2.png" alt="Add Dataset Advanced Other Options" id="Add Dataset Advanced Other Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Read-only** | Sets the option that allows or prevents dataset modification to the option selected on the dropdown list. **On** prevents modifying the dataset. **Off** allows users to access the dataset to modify its contents. |
| **Exec** | Sets the option for executing processes from within the dataset to the option selected on the dropdown list. **On** allows executing processes from within this dataset. **Off** prevents executing processes from within the dataset. We recommend setting it to **On**. |
| **Snapshot directory** | Sets the option that controls visibility of the <file>.zfs</file> directory on the dataset from the option selected in the dropdown list. Select **Visible**, **Invisible**, or **Disabled**. |
| **Snapdev** | Sets the option that controls whether the volume snapshot devices under /dev/zvol/*poolname* are hidden or visible to the options selected on the dropdown list. Options are **Inherit (hidden)**, **Visible** and **Hidden** (default value). |
| **Copies** | Sets the number of ZFS user data duplicates stored on this dataset to the option selected on the dropdown list. Select between **1**, **2**, or **3** redundant data copies. This can improve data protection and retention, but is not a substitute for storage pools with disk redundancy. |
| **Record Size** | Sets the logical block size in the dataset to the option selected on the dropdown list. Matching the fixed size of data, as in a database, can result in better performance. |
| **ACL Type** | Sets the access control list type to the option selected on the dropdown list. Options: <br><li>**Inherit** - Preserves ACL type from the parent dataset.<br><li>**Off** - Uses neither NFSv4 nor POSIX protocols.<br><li>**NFSv4** - Cleanly migrate Windows-style ACLs across Active Directory domains (or stand-alone servers) that use ACL models richer than POSIX. Since POSIX ACLs are a Linux-specific ZFS feature, administrators should use NFSv4 to maintain compatibility with TrueNAS, FreeBSD, or other non-Linux ZFS implementations. <br><li>**POSIX** - Use when a data backup target does not support native NFSv4 ACLs. Since the Linux platform has used POSIX for a long time, many backup products that access the server outside the SMB protocol cannot understand or preserve native NFSv4 ACLs.<br></li> All datasets within an SMB share path must have identical ACL types. For a more in-depth explanation of ACLs and configurations in TrueNAS, see our [ACL Primer](https://www.truenas.com/docs/references/aclprimer/). This advanced setting changes ACL type and mode settings configured by the [**Dataset Preset** option](#add-and-edit-dataset-screens). Do not make changes here if you do not understand ACLs. |
| **ACL Mode** | Determines how [chmod](https://linux.die.net/man/1/chmod) behaves when adjusting file ACLs to the option selected on the dropdown list. See the [zfs(8)](https://linux.die.net/man/8/zfs) `aclmode` property for more information. Options: <br><li>**Passthrough** - Only updates ACL entries related to the file or directory mode.<br><li> **Restricted** - Does not allow chmod to make changes to files or directories with a non-trivial ACL. An ACL is trivial if it can be fully expressed as a file mode without losing access rules. Set **ACL Mode** to restricted to optimize a dataset for SMB sharing, but it can also require further optimizations. For example, configuring an [rsync task]({{< ref "RsyncTasksSCALE" >}}) with this dataset could require adding `--no-perms` in the task **Auxiliary Parameters** field.</li> |
| **Metadata (Special) Small Block Size** | Sets a threshold block size for small file blocks you include in the [special allocation class (fusion pools)]({{< ref "FusionPoolsScale" >}}) to the entered value. Blocks smaller than or equal to this value are assigned to the special allocation class, while greater blocks are assigned to the regular class. Valid values are zero or a power of two from 512B up to 1M. The default size **0** means no small file blocks are allocated in the special class. Before setting this property, you must add a [metadata special class VDEV]({{< ref "FusionPoolsScale" >}}) to the pool. |
{{< /truetable >}}
{{< /expand >}}

#### Data Compression Algorithms

{{< include file="/static/includes/StorageCompressionLevelsScale.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
