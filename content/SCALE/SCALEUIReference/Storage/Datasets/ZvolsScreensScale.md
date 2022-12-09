---
title: "Zvol Screens"
description: "This article provides information on Zvol screen settings and functions."
weight: 20
tags:
 - scalezvols
 - scalestorage
---

{{< toc >}}

The zvol screens and widgets, accessed from the **Datasets** screen, allow you to add or edit a zvol and manage the volume storage. 
Like datasets, zvols are listed on the **Datasets** screen tree table.

![DatasetsScreenWithZvolWidgets](/images/SCALE/22.12/DatasetsScreenWithZvolWidgets.png "Dataset Tree Table and Zvol Widgets")

The tree table includes storage space used and available for that zvol (or dataset), encryption status (locked, unlocked, or unencrypted), and the role of that zvol or dataset or what service uses it (i.e., the system dataset, a share, virtual machine, or application). 

**Add Zvol** displays after you select a root, non-root parent, or child dataset. It does not display if you select an existing zvol.  
Click on any root or non-root parent dataset to expand the tree table.
Click on any zvol to select it and display the widgets for that zvol.

## Zvol Widgets

Each zvol has a set of information cards (widgets) that display in the **Details for *zvolname*** area of the screen and provide information grouped by functional areas. 
**Add Zvol** opens the **Add Zvol** screen. 
Dataset widgets are:
* **[Zvol Details](#zvol-details-widget)** 
* **[Zvol Space Management](#zvol-space-management-widget)**
* **[Data Protection](#data-protection-widget)**
* **[ZFS Encryption](#zfs-encryption-widget)**

### Zvol Details Widget
The **Zvol Details** widget lists information on volume type, and the sync, compression level, case sensitivity, Atime, and ZFS deduplication settings. **Path** displays the full path for the selected zvol. 
{{< expand "Click Here for More Information" "v" >}}

![ZvolDetailsWidget](/images/SCALE/22.12/ZvolDetailsWidget.png "Zvol Details Widget")

**Edit** opens the **[Edit Zvol](#add-and-edit-zvol-screens)** screen for the selected zvol.

**[Delete](#delete-dataset)** opens the **Delete zvol** dialog. 
{{< /expand >}}

#### Delete Zvol
The **Delete** button on the **Zvol Details** widget opens a window that includes information about other options or services that use the zvol. For example, a parent to other datasets and the services the child datasets of a parent dataset uses. 
Non-root parent and child datasets include the **Delete** button. 
{{< expand "Click Here for More Information" "v" >}}
The **Delete** window for a parent dataset (non-root) includes information about snapshots, shares, or other services such as Kubernetes or VMs that use the dataset.
If it is a parent to other datasets, the window includes the services a child dataset of this parent dataset uses.

If a zvol uses services, the window displays them.

![DeleteZvolWindow](/images/SCALE/22.12/DeleteZvolWindow.png "Delete Zvol")

If a zvol is not used by a service, it does not display a service.

The window includes a field where you type the path for the zvol, and a **Confirm** option you must select to activate the **Delete Dataset** button.
{{< /expand >}}

### Zvol Space Management Widget
The **Zvol Space Management** widget displays space allocation (reserved, used, available) for the zvol.  
{{< expand "Click Here for More Information" "v" >}}
The widget displays after unlocking encrypted zvols. 
The widget donut graph provides at-a-glance information and numeric values for the space allocated and used in the selected zvol. 
This includes data written and space allocated to child datasets of this dataset. 
It provides access to quota configuration options for the parent dataset and the child dataset of the parent, and for users and groups with access to the dataset.

![ZvolSpaceManagementWidgett](/images/SCALE/22.12/ZvolSpaceManagementWidget.png "Zvol Space Management Widget")

**Edit** opens the **[Capacity Settings]({{< relref "CapacitySettingsSCALE.md" >}})** screen where you can set quotas for the zvol.

The widget displays quotas set for users or groups.
{{< /expand >}}

### ZFS Encryption Widget

The **ZFS Encryption** widget displays for zvols configured with encryption.
It includes the current state of the encryption, the encryption root, type, and algorithm used.
{{< expand "Click Here for More Information" "v" >}}
The **ZFS Encryption** widget displays the **Lock** or **Unlock** options. If it uses key encryption instead passphrase
The **Export Key** option displays if the zvol uses key encryption.

![ZFSEncryptionWidgetChildDatasetUnlocked](/images/SCALE/22.12/ZFSEncryptionWidgetChildDatasetUnlocked.png "ZFS Encryption Widget Zvol")

**Edit** opens the **[Edit Encryption Options]({{< relref "EncryptionUISCALE.md" >}}) for *dataset*** window for the selected zvol.

For more details on encryption windows and functions see [Encryption Settings]({{< relref "EncryptionUISCALE.md" >}}).
{{< /expand >}}

### Data Protection Widget
The **Data Protection** widget displays for all datasets or zvols. 
This widget provides information on the number of snapshots and other data protection-related scheduled tasks (replication, cloud sync, rsync, and snapshots) configured on the system. 
{{< expand "Click Here for More Information" "v" >}}
It provides access to the tasks found on the **Data Protection** screen through links. 

![DataProtectionWidget](/images/SCALE/22.12/DataProtectionWidget.png "Data Protection Widget")

**Create Snapshot** opens the **[Add Snapshot]({{< relref "SnapshotsScreens.md" >}})** screen.

**Manage Snapshots** opens the **[Snapshots]({{< relref "SnapshotsScreens.md" >}})** screen list view where you can manage snapshots.

**Manage Snapshot Tasks** opens the **Data Protection > [Periodic Snapshot Tasks]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled periodic snapshot tasks.

**Manage Replication Tasks** opens the **Data Protection > [Replications Tasks]({{< relref "ReplicationScreensSCALE.md" >}})** screen list view where you can manage scheduled replication tasks.

**Manage Cloud Sync Tasks** opens the **Data Protection > [Cloud Sync Tasks]({{< relref "CloudSyncTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled cloud sync tasks.

**Manage Rsync Tasks** opens the **Data Protection > [Rsync Tasks]({{< relref "RsyncTasksScreensSCALE.md" >}})** screen list view where you can manage scheduled rsync tasks.

{{< /expand >}}

## Add Zvol Screen

The **Add Zvol** screen has two screen options, **Basic Options** and **Advanced Options**. 
The **Advanced Options** screen include all the settings found on the **Basic Options** screen.
The basic options display by default. Click **Advanced Options** to expand the settings that includes block size.

### Basic Options Settings
The **Basic Options** settings on the **Add Zvol** screen are the same as those on the **Advanced Options** screen and the **Edit Zvol** screen. 
{{< expand "Click Here for More Information" "v" >}}
To open the **Edit Zvol** screen, click **Edit** on the **[Zvol Details](#zvol-details-widget)** widget. 
The **Name** setting cannot be changed after saving the zvol.

![AddZvolBasicOptions1](/images/SCALE/22.12/AddZvolBasicOptions1.png "Add Zvol Name and Size Settings")

| Setting | Description |
|---------|-------------|
| **Zvol name** | Required setting. Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, you cannot use a zvol with a 70-character file name or path as an iSCSI extent. |
| **Comments** | Enter any notes about this zvol. |
| **Size for this zvol** | Specify size and value. You can include units like **t** as in TiB, and **G**. You can increase the size of the zvol later, but you cannot reduce size. If the size is more than 80% of the available capacity, the creation fails with an out-of-space error unless you select **Force size**. |
| **Force size** | Select to enable the system to create a zvol where the size is over 80% capacity. By default, the system does not create a zvol of this size. While not recommended, enabling this option forces the creation of the zvol. |

![AddZvolBasicOptions2](/images/SCALE/22.12/AddZvolBasicOptions2.png "Add Zvol Other Settings")

| Setting | Description |
|---------|-------------|
| **Sync** | Select the data write synchronization option from the dropdown list. **Inherit** gets the sync settings from the parent dataset. **Standard** uses the sync settings requested by the client software. **Always** waits for data writes to complete. **Disabled** never waits for writes to complete. |
| **Compression level** | Select the option from the dropdown list for the type of data compression to use or encoding information in less space than the original data occupies. Select the algorithm that balances disk performance with the amount space saved. See [below](#data-compression-algorithms) for the options. |
| **ZFS Deduplication** | Do not change this setting unless instructed to do so by your iXsystems support engineer. Select to transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but it is RAM intensive. Compressing data is recommended before using deduplication. Deduplicating data is a one-way process. You cannot un-deduplicate deduplicated data! |
| **Sparse** | Used to provide [thin provisioning](https://searchstorage.techtarget.com/definition/thin-provisioning). Use with caution as writes fail when space is low on a pool. |
| **Read-only** | Select the option to use to prevent modifying the zvol. Options are **Inherit (off)**, **On** or **Off**. |
| **Snapdev** | Select the option that controls whether the volume snapshot devices under /dev/zvol/*poolname* are hidden or visible from the dropdown list. Options are **Inherit (hidden)**, **Visible** and **Hidden** (default value). |
{{< /expand >}}

### Advanced Options Settings
The **Advanced Options** adds the **Block Size** setting to the **Add Zvol** screen.
{{< expand "Click Here for More Information" "v" >}}

![AddZvolAdvancedOptionsBlockSize](/images/SCALE/22.12/AddZvolAdvancedOptionsBlockSize.png "Add Zvol Advanced Options Block Size")

| Setting | Description |
|---------|-------------|
| **Block size** | Select the size option from the dropdown list. The default is **Inherit**, other options include, **4KiB**, **8KiB**, **16KiB**, **32KiB**, **64KiB**, **128KiB**. |

TrueNAS recommends a space-efficient block size for new zvols.
This table shows the minimum recommended volume block size values by configuration (mirror or RAIDz type).
Use this table to change the **Block size** value.

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

Depending on their workload, zvols can require additional tuning for optimal performance.
See the OpenZFS handbook [workload tuning chapter](https://openzfs.github.io/openzfs-docs/Performance%20and%20Tuning/Workload%20Tuning.html) for more information.
{{< /expand >}}
#### Data Compression Algorithms

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

### Encryption Options

Encryption options are the same on both the **Basic Options** and **Advanced Options** screens.

**Encryption Options** only display on the **Add Zvol** screen. 
To change encryption settings, use the **Edit** button on the **ZFS Encryption** widget.
{{< expand "Click Here for More Information" "v" >}}
The default setting is **Inherit**. Clearing the checkbox displays the key encryption options. 
Clear the **Inherit(*non-encrypted*)** checkbox to display additional settings.

![AddZvolEncryptionOptionsKey](/images/SCALE/22.12/AddZvolEncryptionOptionsKey.png "Add Zvol Encryption Options Clear Inherit") 
 
Selecting other options changes the settings displayed.

| Setting | Description |
|---------|-------------|
| **Inherit (non-encrypted)** | Select to clear the checkmark to display more encryption settings. |
| **Encryption** | Select to clear the checkmark and remove the encryption settings from the **Add Zvol** screen. If the root dataset is not encrypted, leaving **Inherit (non-encrypted)** selected is the same as clearing the **Encryption** checkbox. |
{< /expand >}}

#### Edit Encryption Settings
{{< include file="/_includes/EncryptionSettings.md" type="page" >}}

See the list of Related Encryption Articles at the bottom of this article for more on encryption.
{{< /expand >}}

{{< taglist tag="scalezvols" limit="10" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}
{{< taglist tag="scaleencryption" limit="10" title="Related Encryption Articles" >}}