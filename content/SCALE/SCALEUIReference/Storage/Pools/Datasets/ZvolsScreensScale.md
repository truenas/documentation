---
title: "Zvol Screens"
description: "This article provides information on Zvol screen settings and functions."
weight: 25
aliases: 
- /scale/scaleuireference/storage/pools/zvolsscreensscale/
tags:
 - scalezvols
 - scalestorage
---

{{< toc >}}

To access the Zvol screens, from the **Storage** screen click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a pool or dataset, then click **Add Zvol** to display the **Add Zvol** screen. To edit a zvol, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a zvol, then click **Edit Zvol** to display the **Edit Zvol** screen.

## Add Zvol Screen
The **Add Zvol** has two screens, basic options and advanced options. The basic options display by default. Click **Advanced Options** to expand the settings that includes block size.

## Basic Options Settings

![ZvolsCreateSCALE](/images/SCALE/ZvolsCreateSCALE.png "Creating a new Zvol")

| Setting | Description |
|---------|-------------|
| **Zvol name** | Required setting. Enter a short name for the zvol. Using a zvol name longer than 63-characters can prevent accessing zvols as devices. For example, you cannot use a zvol with a 70-character file name or path as an iSCSI extent. |
| **Comments** | Enter any notes about this zvol. |
| **Size for this zvol** | Specify size and value. You can include units like **t** as in TiB, and **G**. You can increase the size of the zvol later, but you cannot reduce size. If the size is more than 80% of the available capacity, the creation fails with an out-of-space error unless you select **Force size**. |
| **Force size** | Select to enable the system to create a zvol where the size is over 80% capacity. By default, the system does not create a zvol of this size. While not recommended, enabling this option forces the creation of the zvol. |
| **Sync** | Select the data write synchronization option from the dropdown list. **Inherit** gets the sync settings from the parent dataset. **Standard** uses the sync settings requested by the client software. **Always** waits for data writes to complete. **Disabled** never waits for writes to complete. |
| **Compression level** | Select the option from the dropdown list for the type of data compression to use or encoding information in less space than the original data occupies. Select the algorithm that balances disk performance with the amount space saved. See [below](#data-compression-algorithms) for the options. |
| **ZFS Deduplication** | Do not change this setting unless instructed to do so by your iXsystems support engineer. Select to transparently reuse a single copy of duplicated data to save space. Deduplication can improve storage capacity, but it is RAM intensive. Compressing data is recommended before using deduplication. Deduplicating data is a one-way process. You cannot un-deduplicate deduplicated data! |
| **Sparse** | Used to provide [thin provisioning](https://searchstorage.techtarget.com/definition/thin-provisioning). Use with caution as writes fail when space is low on a pool. |
| **Read-only** | Select the option to use to prevent modifying the zvol. Options are **Inherit (off)**, **On** or **Off**. |

Encryption options do not display unless you create the zvol from dataset [using encryption]({{< relref "EncryptionScale.md" >}}).

### Advanced Options Settings

![ZvolsCreateSCALE](/images/SCALE/ZvolsCreateSCALE.png "Creating a new Zvol")

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

### Data Compression Algorithms

{{< include file="/_includes/StorageCompressionLevelsScale.md" type="page" >}}

## Zvol Actions List

Click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for a dataset to display the **Zvol Actions** dropdown list. The options for the selected zvol are **Delete Zvol**, **Edit Zvol** and **Create Snapshot**.

### Delete Zvol Dialog
**Delete Zvol** displays a confirmation dialog where you enter the name of the zvol and select **Confirm** to activate the **Delete Zvol** button.

![DeleteZvolDialog](/images/SCALE/22.02/DeleteZvolDialog.png "Delete Zvol")

### Edit Zvol Option
**Edit Zvol** displays the **[Edit Zvol](#basic-options-settings)** screen where you can modify current settings.

### Create Snapshot Dialog

**Create Snapshot** displays a **One time snapshot *zvol*** dialog where you can create a manual snapshot of the selected zvol.

{{< taglist tag="scalezvols" limit="10" >}}