---
title: "Datasets Screens"
description: "This article provides information on Datasets screens, settings and functions."
weight: 30
tag: 
- scaledatasets
- scalestorage
- scaleacls
- scaleencryption
- scalequotas
---


{{< toc >}}


The **Datasets** screen and widgets displays information about datasets, data management, and dataset roles, encryption, and permissions. The screen focuses on managing data including user and group quotas, snapshots and other data protection measures, and it provides access to manage both datasets and zvols. 

The **Datasets** screen displays the **No Datasets** screen with a **Create Pool** button in the center of the screen until you add a pool and the first root or parent dataset.

![DatasetsScreenBeforeAddingAPool](/images/SCALE/22.12/DatasetsScreenBeforeAddingAPool.png "Datasets Screen Add Pool") 

After creating a dataset, the screen displays a tree table with parent and child datasets (or zvols) on the left side of the screen and a set of dataset widgets in the **Details for *datasetnam*** area on the right side of the screen.

![DatasetsScreenAfterAddingAPool](/images/SCALE/22.12/DatasetsScreenAfterAddingAPool.png "Datasets Screen With aPool") 

**Import Data** opens the **[Import Data](#import-data-screen) screen. 

**Add Zvol (New)** opens the **[Add Zvol]({{< relref "ZvolScreensScale.md" >}})** screen, and  **Add Zvol** opens the **[Add Zvol]({{< relref "ZvolScreensScale.md" >}})** screen available in the SCALE 22.02 release.

**Add Dataset** opens the **[Add Dataset](#add-or-edit-dataset-screens)** screen.

## Dataset Tree Table

The datasets tree table lists datasets in an expandible tree structure with the root or parent dataset listed first and all the child datasets nested under it. 
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
* **[Dasaset Space Management](#dataset-space-management-widget)**
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

Child dataset versions of the card include the **[Delete](#delete-dataset)** option. To delete a root dataset, use the **Disconnect/Export** option for the root dataset that is found on the **[Storage Dashboard]({{< relref "StorageDashboardScreen.md" >}})** screen.
{{< /expand >}}

#### Delete Dataset
The **Delete** window includes information about snapshots, shares or other services such as Kubernetes or VMs that use the dataset, or if it is a parent to other datasets, the services child datasets of this parent dataset use.
Only child datasets include the **Delete** button. 
{{< expand "Click Here for More Information" "v" >}}
The **Delete** window for a parent dataset (non-root) includes information about snapshots, shares or other services such as Kubernetes or VMs that use the dataset, or if it is a parent to other datasets, the services child datasets of this parent dataset use.

![DeleteDatasetParentDataset](/images/SCALE/22.12/DeleteDatasetParentDataset.png "Delete Dataset Parent Dataset")

A child dataset that is used by a service displays the service.

![DeleteDatasetChildUsingAService](/images/SCALE/22.12DeleteDatasetChildUsingAService.png "Delete Dataset Child Dataset Using a Service")

A child dataset that is not used by a service does not display a service.

![DeleteDatasetChildDataset](/images/SCALE/22.12/DeleteDatasetChildDataset.png "Delete Dataset Child Dataset")

The window includes field where you type the path for the dataset, and a **Confirm** option you must select to activate the **Delete Dataset** button.
{{< /expand >}}

### Dataset Space Management Widget
The **Dataset Space Management** widget displays for all datasets except encryptped locked datasets. It displays both a donut graph with at-a-glance information and numeric values for the space allocated and used in the selected dataset. This includes data written and space allocated to child datasets of this dataset. 
{{< expand "Click Here for More Information" "v" >}}
It provides access to quota configuration options for the parent dataset and the child dataset of the parent, and for users and groups with access to the dataset.

![DatasetSpaceManagementWidgetRootDataset](/images/SCALE/22.12/DatasetSpaceManagementWidgetRootDataset.png "Dataset Space Management Widget Root Dataset")

To view the **Dataset Space Managment** widget for an encrypted locked dataset, unlock the dataset.

**Edit** opens the **[Capacity Settings](#capacity-settings-screen)** screen.

**[Manage User Quotas]({{< relref "ManageQuotas.md" >}})** screen and **Manage Group Quotas** opens the **[Manage Group Quotas]({{< relref "ManageQuotas.md" >}})** screen.
{{< /expand >}}

#### Capacity Settings Screen

{{< expand "Click Here for More Information" "v" >}}


{{< /expand >}}

### Data Protection Widget
The **Data Protection** widget displays for all datasets. 
This widget provides information on the number snapshots and other related scheduled tasks (replication, cloud sync, rsync and snapshots) configured on the system. 
{{< expand "Click Here for More Information" "v" >}}
It provides access to the tasks found on the **Data Protection** screen through links. 

![DataProtectionWidget](/images/SCALE/22.12/DataProtectionWidget.png "Data Protection Widget")

**Create Snapshot** opens the **[Add Snapshot]({{< relref "SnapshotsScreens.md" >}})** screen.

**Manage Snapshots** opens the **[Snapshots]({{< relref "PeriodicSnapshotTasksScreens.md" >}})** screen list view where you can manage scheduled snapshot tasks.

**Manage Snapshot Tasks** opens the **Data Protection > [Periodic Snapshot Tasks]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}})** screen list view where you can manage the scheduled periodic snapshot tasks.

**Manage Replication Tasks** opens the **Data Protection > [Replications Tasks]({{< relref "ReplicationScreensSCALE.md" >}})** screen list view where you can manage the scheduled replication tasks.

**Manage Cloud Sync Tasks** opens the **Data Protection > [Cloud Sync Tasks]({{< relref "CloudSyncTasksScreensSCALE.md" >}})** screen list view where you can manage tthe scheduled cloud sync tasks.

**Manage Rsync Tasks** opens the **Data Protection > [Rsync Tasks]({{< relref "RsyncTasksScreensSCALE.md" >}})** screen list view where you can manage the scheduled rsync tasks.

{{< /expand >}}

### Permissions Widget
The **Permissions** widget displays for all datasets and displays the dataset owner and group, and Unix permssions for ACL items configured for the dataset.
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
| System Dataset | [Manage Advanced Settings]({{< relref "AdvancedSettingsScreen.md" >}}) | Select the option to configure the **System Dataset** |
| Apps | [Manage Apps Settings({{< relref "ApplicationsScreens.md" >}}) | Displays Kubernetes is using the dataset. Select the option to **Choose Pool** from the **Settings** dropdown list on the **Applications** screen. |
| SMB share | [Manage SMB Shares]({{< relref "SMBSharesScreens.md" >}}) | Displays the name of the SMB share using the dataset. Select it on the **SMB Shares** screen to edit it. |
| Other share | Link to the Share type screen | Displays the name of the share using the dataset. Select it on the share screen (NFS, iSCSI or WebDAV) to edit it. |
| VM | [Manage VM Settings]({{< relref "VirtualizationScreens.md" >}}) | Displays the name of the VM using the dataset(zvol). Select it on the **Virtual Machines** screen to edit it. |

{{< /expand >}}

### ZFS Encryption Widget
Displays for root, parent or child datasets configured with encryption. Includes the current state of the dataset encryption, whether the root dataset or pool is encrypted, the key type and algorithm used.
{{< expand "Click Here for More Information" "v" >}}
The root dataset **ZFS Encryption** widget includes the **Export All Keys** and the **Export Key** options, and to **Edit** the encryption settings.

![RolesWidgetRootDataset](/images/SCALE/22.12/RolesWidgetRootDataset.png "Roles Widget Root Dataset")

Parent or dataset **ZFS Encryption** widgets include the options to **Lock** and **Unlock** the dataset and to **Edit** the encryption settings.

![RolesWidgetRootDataset](/images/SCALE/22.12/RolesWidgetRootDataset.png "Roles Widget Root Dataset")

**Edit** opens a window with encryption options for the selected dataset.
--- add the screens here or new article? ----

{{< /expand >}}

## Import Data Screen

{{< expand "Click Here for More Information" "v" >}}


{{< /expand >}}
## Add and Edit Dataset Screens
The **Add Dataset** and **Edit Dataset** screens include the same settings but you cannot change the dataset **Name**, **Share Type** or **Case Sensitivity** settings after you click **Save** on the **Add Dataset** screen.
To edit encryption options use the **Edit** button on the **ZFS Encryption** widget.

There are two screen options, **Basic Options** and **Advanced Options**. 
The **Advanced Options** screen include all the settings found on the **Basic Options** screen.

### Dataset Basic Options 
The **Basic Options** include three sections: **[Name and Options]()**, **[Encryption Options}()** and **[Other Options]()**.

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
The encryption setting options are the same on the **Basic Options** and A**dvanced Options** screens.
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
| **Encryption Type** | Select the option for the type of encryption to secure the dataset from the dropdown list. <br>Select **Key** to use key-based encryption and display the **Generate Key** option. <br>Select **Passphrase** to enter a user-defined passphrase to secure the dataset. This displays two additional **Passphrase** fields to enter and confirm the passphrase and the **pbkdf2iters** field. |
| **Generate key** | Selected by default to have the system randomly generate an encryption key for securing this dataset. Clearing the checkbox displays the **Key** field and requires you to enter an encryption key you define. <br>Warning! The encryption key is the only means to decrypt the information stored in this dataset. Store encryption keys in a secure location!  Creating a new key file invalidates any previously downloaded key file for this dataset. Delete any previous key file backups and back up the new key file. |
| **Key** | Enter or paste a string to use as the encryption key for this dataset. |
| **Algorithm** | Displays for both key and passphrase encryption types. Select the mathematical instruction set that determines how plaintext converts into ciphertext from the dropdown list of options. See [Advanced Encryption Standard (AES)](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) for more details. |
| **Passphrase** <br>**Confirm Passphrase** | Enter the alpha-numeric string or phrase you want to use to secure the dataset. |
| **pbkdf2iters** | Enter the number of password-based key deviation function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) for more details. |

See [Storage Encryption]({{< relref "EncryptionScale.md" >}}) for more information on encryption.
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

##### Data Compression Algorithms

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

{{< /expand >}}

### Dataset Advanced Options
The **Advanced Options** settings include quotas management tools for **This Dataset** and **This Dataset and Child Datasets**, and expand the **Other Options** settings.

#### Quota Management Settings - Advanced Options
The **This Dataset** and **This Dataset and Child Datasets** sections include the same setting options. These settings also display on the **[Capacity Settings](#capacity-settings-screen)** screen.
{{< expand "Click Here for More Information" "v" >}}
To apply the settings to only the parent dataset you are creating, enter settings in the **This Dataset** fields. 
To apply settings to both the parent dataset and any new child datsets you create from this dataset, enter settings in the **This Dataset and Child Datsets** section. 

![AddDatasetQuotasManagement](/images/SCALE/22.12/AddDatasetQuotasManagement.png "Add Dataset Advanced Quota Options") 

Setting a quota defines the maximum allowed space for the dataset or the dataset and child datasets.
You can also reserve a defined amount of pool space to prevent automatically generated data like system logs from consuming all of the dataset space.
You can configure quotas for only the new dataset or include all child datasets.

| Setting | Description |
|---------|-------------|
| **Quota for this dataset**<br> **Quota for this dataset and all children** | Enter a value to define the maximum allowed space for the dataset. **0** disables quotas. |
| **Quota warning alert at, %** | Enter a percentage value to generate a warning level [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Quota critical alert at, %** | Enter a percentage value to generate a critical level [alert]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) when consumed space reaches the defined level. By default, the dataset inherits this value from the parent dataset. Clear the **Inherit** checkbox to change the value. |
| **Reserved space for this dataset**<br> **Reserved space for this dataset and all children** | Enter a value to reserve additional space for datasets that contain logs which could eventually take up all the available free space. **0** is unlimited. |
{{< /expand >}}

### Other Option Settings - Advanced Options
Many of the **Other Options** settings inherit their values from the parent dataset.
{{< expand "Click Here for More Information" "v" >}}
The **Basic Options** screen shares the **ZFS Deduplication**, **Case Sensitivity** and **Share Type** settings. All other settings in this section are unique to the **Advanced Options** screen.

![AddDatasetOtherOptionsAdvanced1](/images/SCALE/22.12/AddDatasetOtherOptionsAdvanced1.png "Add Dataset Advanced Other Options") 

| Setting | Description |
|---------|-------------|
| **ZFS Deduplication** | Select the option from the dropdown list. Options are **Inherit (off)**, **on**, **verify**, and **off**. Transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but is RAM intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated!. |
| **Checksum** | Select the [checksum](https://openzfs.github.io/openzfs-docs/Basic%20Concepts/Checksums.html) option from the dropdown list. Select **Inherit** to use the parent setting; **On** to use checksum without specifying the variant; **FLETCHER2** (deprecated) or **FLETCHER4** to use a position-dependent checksum that uses two checksums to determine single-bit errors in messages transmitted over network channels or ZFS streams; **SHA256** (default for dedupted datasets) or **SHA512** to use a sequence of numbers and letters to check the copy of a downloaded update file is identical to the original; **SKEIN** which is not supported for a file system on boot pools; or **EDNOR** which is not supported for file systems on boot pools and Edon-R requires verification when used with dedup so it automatically uses `verify`. |
| **Read-only** | Select the option to allow or prevent dataset modification from the dropdown list. **On** prevents modifying the dataset. **Off** allows users accessing the dataset to modify its contents. |
| **Exec** | Select the option for executing processes from within the dataset from the dropdown list. **On** allows executing processes from within this dataset. **Off** prevents executing processes from with the dataset. We recommend setting it to **On**. |
| **Snapshot directory** | Select the option to controls visibility of the <file>.zfs</file> directory on the dataset from the dropdown list. Select either **Visible** or **Invisible**. |
| **Snapdev** | Select the option that controls whether the volume snapshot devices under /dev/zvol/*poolname* are hiddin or visible from the dropdown list. Options are **Inherit (hidden)**, **Visiible** and **Hidden** (default value). |

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



### Add Zvol
**Add Zvol** displays the **[Add Zvol]({{< relref "/ZvolsScreensScale.md" >}})** where you can create zvols for a root or child dataset.

### Edit Options
**Edit Options** displays the **[Edit Dataset](#edit-dataset-screens)** screen where you can edit the settings for the selected dataset.

### View Permissions
**View Permissions** displays the **Dataset Permissions** widget to the right of the root dataset on the **Storage**screen.
The **Dataset Permissions** widget is read-only.

![ViewDatasetPermissionsWidget](/images/SCALE/22.02/ViewDatasetPermissionsWidget.png "View Dataset Permissions")

| Settings | Description |
|----------|-------------|
| **Owner** | Displays the name of the owner, which is **root** for both the root dataset and the child datasets of root. |
| **Group** | Displays the name of the group, which is **root** for both the root dataset and the child datasets of root.. |
| **Path** | Displays the path for the selected dataset. |
| **Unix Permissions** | Displays three levels of permissions, **Read|Write|Execute** for the root parent, **Read|Execute** for the child of the root parent, and **Read|Execute** for any other storage volume child under the parent root dataset. |

### User Quotas
**User Quotas** displays the **[Set User Qutoas]({{< relref "QuotaScreens.md" >}})** screen. 

### Group Quotas
**Group Quotas** displays the **[Set Group Qutoas]({{< relref "QuotaScreens.md" >}})** screen.

### Create Snapshot
**Create Snapshot** displays the **One time snapshot of *datasetname*** dialog where you can create a manual snapshot of the selected dataset.
The dialog *datasetname* changes based on the name of the selected dataset (or zvol).

![OneTimeSnapshotDialog](/images/SCALE/22.02/OneTimeSnapshotDialog.png "Create One Time Snapshot")

**Name** displays the system-created name for the snapshot.

Select **Recursive** to include child datasets or zvols in the snapshot of the parent or root dataset.

Click **Create Snapshot** to create the manual snapshot.

{{< taglist tag="scaledatasets" limit="10" title="Related Datasets Articles" >}}
