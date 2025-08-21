---
title: "Zvols"
description: "Provides information on the settings and functions found on the Zvol screens and widgets."
weight: 20
aliases:
 - /scale/scaleuireference/storage/datasets/zvolsscreensscale/
tags:
 - zvol
 - storage
---

The zvol screens and widgets, accessed from the **Datasets** screen, allow you to add or edit a zvol and manage the volume storage.
Zvols are listed on the **Datasets** screen tree table.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenWithZvolWidgets.png" alt="Dataset Tree Table and Zvol Widgets" id="Dataset Tree Table and Zvol Widgets" >}}

The dataset tree table shows storage space used and available for that zvol (or dataset), encryption status (locked, unlocked, or unencrypted), and how that zvol or dataset is used (i.e., the system dataset, a share, virtual machine, or application).

**Add Zvol** shows on the **Datasets** screen when a dataset is selected, but does not show when a zvol is selected. 

## Zvol Widgets

Each zvol has a set of **Details for *zvolname*** information cards (widgets) that provide information grouped by functional areas.
Zvol widgets are:
* **[Zvol Details](#zvol-details-widget)**
* **[Zvol Space Management](#zvol-space-management-widget)**
* **[Data Protection](#data-protection-widget)**
* **[Encryption](#encryption-widget)**

The **Encryption** widget only shows if the zvol is encrypted.

### Zvol Details Widget

The **Zvol Details** widget lists information on sync type, compression level, and ZFS deduplication settings. The **Path** shows the full path from a root (pool) dataset to the zvol location.

{{< trueimage src="/images/SCALE/Datasets/ZvolDetailsWidget.png" alt="Zvol Details Widget" id="Zvol Details Widget" >}}

**Edit** opens the **[Edit Zvol](#add-and-edit-zvol-screens)** screen for the selected zvol.

**[Delete](#delete-dataset)** opens the **Delete zvol** dialog.

#### Delete Zvol

The **Delete Zvol** dialog shows information about other options or services that use the zvol. It also shows the services that child datasets use.
This includes information about snapshots, shares, or, if used, other services such as Kubernetes or VMs that use the dataset.
Parent and child datasets include the **Delete** button.

{{< trueimage src="/images/SCALE/Datasets/DeleteZvolWindow.png" alt="Delete Zvol" id="Delete Zvol" >}}

The window includes a blank field where you type the path for the zvol.
**Confirm** activates the **Delete Zvol** button.

### Zvol Space Management Widget

The **Zvol Space Management** widget shows the space allocation (reserved, used, available) for the zvol.  
When an encrypted zvol is locked, you must unlock it to see this widget.
The donut graph provides at-a-glance information and numeric values for the space allocated and used in the selected zvol.
This includes data written and space allocated to child datasets of this dataset.

{{< trueimage src="/images/SCALE/Datasets/ZvolSpaceManagementWidget.png" alt="Zvol Space Management Widget" id="Zvol Space Management Widget" >}}

### Encryption Widget

The **Encryption** widget only shows when a zvol is configured with encryption.
It shows the current state of the encryption, the encryption root, the type, and the algorithm used.
The **Encryption** widget shows the **Lock** or **Unlock** options if it uses passphrase encryption.
The **Export Key** option shows if the zvol uses key encryption.

{{< trueimage src="/images/SCALE/Datasets/ZvolEncryptionWidget.png" alt="Encryption Widget Zvol" id="Encryption Widget Zvol" >}}

**Edit** opens the **[Edit Encryption Options]({{< ref "EncryptionUISCALE" >}}) for *zvol*** window for the selected zvol.

For more details on encryption windows and functions, see [Encryption Settings]({{< ref "EncryptionUISCALE" >}}).

### Data Protection Widget

The **Data Protection** widget displays for all datasets or zvols.
It shows information for the number of snapshots and other data protection-related scheduled tasks (replication, cloud sync, rsync, and snapshots) configured on the system.
It provides access to the tasks found on the **Data Protection** screen through links.

{{< trueimage src="/images/SCALE/Datasets/ZvolDataProtectionWidget.png" alt="Data Protection Widget" id="Data Protection Widget" >}}

**Take Snapshot** opens the **[Add Snapshot]({{< ref "SnapshotsScreens" >}})** screen.

**View Snapshots** opens the **[Snapshots]({{< ref "SnapshotsScreens" >}})** screen list view where you can manage snapshots.

**View Snapshot Tasks** opens the **Data Protection > [Periodic Snapshot Tasks]({{< ref "PeriodicSnapshotTasksScreensSCALE" >}})** screen list view where you can manage scheduled periodic snapshot tasks.

**Go To Backups** opens the **Data Protection** screen, where you can create a data protection task like Rsync, Replication, or Cloud Sync Backup.

## Add and Edit Zvol Screens

The **Add Zvol** and **Edit Zvol** screens allow admin users with the right permission level to create and modify zvols.
Both screens include the same settings, but you cannot change the zvol name, **Block Size**, or select the **Sparse** option after you click **Save** on the **Add Zvol** screen.
After adding a zvol, click **Edit** on the **Zvol Details** widget to open the **Edit Zvol** screen.

When the zvol is encrypted, **Edit** on the **Encryption** widget opens a configuration screen where you can change the passphrase for a zvol encrypted with the passphrase type, but you cannot change to a key encryption type. If the zvol is not encrypted, you do not see encryption options on the **Edit Zvol** screen.

{{< trueimage src="/images/SCALE/Datasets/AddZvolScreen.png" alt="Add Zvol Screen" id="Add Zvol Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Zvol name** | (Required setting) Enter a short name for the zvol longer than 63 characters to prevent potential problems accessing zvols as devices. For example, you cannot use a zvol with a 70-character file name or path as an iSCSI extent. |
| **Comments** | Enter any notes about the zvol. Descriptions show on the iSCSI screens when the zvol is used in a block share. |
| **Size for this zvol** | Specify numeric size and value. You can include units like **t** as in TiB, and **G**. You can increase the size of the zvol later, but you cannot reduce the size. If the size is greater than 80% of the available capacity, the creation fails with an out-of-space error unless you select **Force size**. |
| **Force size** | Enables the system to create a zvol where the size is over 80% capacity. By default, the system does not create a zvol of this size. While not recommended, enabling this option forces the creation of the zvol. |
| **Sparse** | Enables using [thin provisioning](https://www.truenas.com/docs/references/thinprovisioning/) where disk space for this volume is allocated on-demand as new writes are received. Use caution when enabling, as writes can fail when the pool is low on space. |
| **Sync** | Select a data write synchronization option from the dropdown list. Options: <br><li>**Inherit** gets the sync settings from the parent dataset. <br><li>**Standard** uses the sync settings requested by the client software. <br><li>**Always** waits for data writes to complete. <br><li>**Disabled** never waits for writes to complete.</li> |
| **Compression level** | Select the option from the dropdown list for the type of data compression to use for encoding information in less space than the original data occupies. Select the algorithm that balances disk performance with the amount of space saved. See [below](#data-compression-algorithms) for the options. |
| **ZFS Deduplication** | Do not change this setting unless instructed to by your TrueNAS support engineer. Transparently reuses a single copy of duplicated data to save space. Deduplication can improve storage capacity, but it is RAM-intensive. Compressing data is generally recommended before using deduplication. Deduplicating data is a one-way process. Deduplicated data cannot be undeduplicated!. |
| **Read-only** | Select the option to prevent modifying the zvol. Options are **Inherit (off)**, **On** or **Off**. |
| **Block size** | Select the size option from the dropdown list. The default is **16KiBt**, other options are **4KiB**, **8KiB**, **16KiB**, **32KiB**, **64KiB**, **128KiB**. The zvol default block size is automatically chosen based on the number of disks in the pool for a general use case. |
| **Snapdev** | Select the option that controls whether the volume snapshot devices under /dev/zvol/*poolname* are hidden or visible from the dropdown list. Options are **Inherit (hidden)**, **Visible** and **Hidden** (default value). |
| **Inherit (non-encrypted/encrypted)** | Encryption settings are inherited from the parent dataset. When the parent is encrypted, this option defaults to **Inherit (encrypted)**; otherwise, it shows **(non-encrypted)**. Clearing the checkmark shows the **Encryption** options. If the parent is encrypted with the passphrase type, the zvol can only use passphrase encryption. When the parent is encrypted with a key, the zvol can use either key or passphrase encryption. Refer to the [Encryption Settings]({{< relref "EncryptionUISCALE.md" >}}) article for more details. |
{{< /truetable >}}

{{< expand "Block Size Table" "v" >}}
TrueNAS recommends a space-efficient block size for new zvols.
This table shows the minimum recommended volume block size values by configuration (mirror or RAIDz type).
Use this table to change the **Block size** value.

{{< truetable >}}
| Configuration | Number of Drives | Optimal Block Size |
|---------------|------------------|--------------------|
| Mirror | N/A | 16k |
| Raidz-1 | 3 | 16k |
| Raidz-1 | 4/5 | 32k |
| Raidz-1 | 6/7/8/9 | 64k |
| Raidz-1 | 10+ | 128k |
| Raidz-2 | 4 | 16k |
| Raidz-2 | 5/6 | 32k |
| Raidz-2 | 7/8/9/10 | 64k |
| Raidz-2 | 11+ | 128k |
| Raidz-3 | 5 | 16k |
| Raidz-3 | 6/7 | 32k |
| Raidz-3 | 8/9/10/11 | 64k |
| Raidz-3 | 12+ | 128k |
{{< /truetable >}}
{{< /expand >}}

Depending on their workload, zvols can require additional tuning for optimal performance.
See the OpenZFS handbook [workload tuning chapter](https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html) for more information.

#### Data Compression Algorithms

{{< include file="/static/includes/StorageCompressionLevelsScale.md" >}}
