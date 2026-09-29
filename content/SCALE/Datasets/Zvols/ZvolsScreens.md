---
title: "Zvols Screen"
description: "Provides information on the settings and functions found on the Zvol screens and widgets."
weight: 50
aliases:
 - /scale/scaleuireference/datasets/zvolsscreensscale/
 - /scale/scaleuireference/storage/datasets/zvolsscreensscale/
 - /scale/datasets/zvolsscreens/
tags:
 - zvol
 - storage
doctype: reference
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

**Edit** opens the **[Edit Encryption Options]({{< ref "EncryptionScreen" >}}) for *zvol*** window for the selected zvol.

For more details on encryption windows and functions, see [Encryption Settings]({{< ref "EncryptionScreen" >}}).

### Data Protection Widget

The **Data Protection** widget displays for all datasets or zvols.
It shows information for the number of snapshots and other data protection-related scheduled tasks (replication, cloud sync, rsync, and snapshots) configured on the system.
It provides access to the tasks found on the **Data Protection** screen through links.

{{< trueimage src="/images/SCALE/Datasets/ZvolDataProtectionWidget.png" alt="Data Protection Widget" id="Data Protection Widget" >}}

**Take Snapshot** opens the **[Add Snapshot]({{< ref "SnapshotsScreens" >}})** screen.

**View Snapshots** opens the **[Snapshots]({{< ref "SnapshotsScreens" >}})** screen list view where you can manage snapshots.

**View Snapshot Tasks** opens the **Data Protection > [Periodic Snapshot Tasks]({{< ref "PeriodicSnapshotTasksScreens" >}})** screen list view where you can manage scheduled periodic snapshot tasks.

**Go To Backups** opens the **Data Protection** screen, where you can create a data protection task like Rsync, Replication, or Cloud Sync Backup.

## Add and Edit Zvol Screens

The **Add Zvol** and **Edit Zvol** screens allow admin users with the right permission level to create and modify zvols.
Both screens include the same settings, but you cannot change the zvol name, **Block Size**, or select the **Sparse** option after you click **Save** on the **Add Zvol** screen.
After adding a zvol, click **Edit** on the **Zvol Details** widget to open the **Edit Zvol** screen.

{{< include file="/static/includes/AddZvolSettings.md" >}}

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
