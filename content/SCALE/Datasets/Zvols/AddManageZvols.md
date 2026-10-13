---
title: "Adding and Managing Zvols"
description: "Provides instructions on creating, editing, and managing zvols."
weight: 20
aliases:
 - /scale/datasets/addmanagezvols/
 - /scale/storage/storagedashboardscreens/pools/zvolsscale/
 - /scale/storage/storageoverview/datasets/addmanagezvols/
 - /scale/scaletutorials/datasets/addmanagezvols/
 - /scale/scaletutorials/storage/datasets/addmanagezvols/
tags: 
- zvol
- storage
doctype: tutorial
---


A ZFS Volume (zvol) is a [dataset]({{< ref "/SCALE/Datasets/ManagingDatasets" >}}) that represents a block device or virtual disk drive.
TrueNAS requires a zvol when configuring [iSCSI Shares]({{< ref "/SCALE/Shares/iSCSI" >}}).
Adding a virtual machine also creates a zvol to use for storage.

{{< include file="/static/includes/ZvolSpaceWarning.md" >}}

## Adding a Zvol

To create a zvol, go to **Datasets**.
Select the root or non-root parent dataset where you want to add the zvol, and then click **Add Zvol**.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenWithZvolWidgets.png" alt="Dataset Tree Table and Zvol Cards" id="Dataset Tree Table and Zvol Cards" >}}

Enter a name that does not exceed 60 characters, enter a number and letter for the unit of measure in **Size**, and then click **Save**.

## Adding a Zvol for a Fusion Pool

First, add the [pool with a special VDEV]({{< ref "CreatingFusionPools" >}}).

Select the root dataset of the pool (with the special VDEV), then click **Add Zvol**.

Enter a name and size for the zvol, then scroll down to the **Use Metadata (Special) VDEVs** setting.

Select **On** to enable storing data blocks in the special allocation class.
The **Threshold** field appears. Enter a maximum block size (1 byte to 16 MiB) for blocks to store in the special class.
The default threshold is 16 MiB. Blocks smaller than or equal to the threshold are assigned to the special allocation class; larger blocks are assigned to the regular class.

{{< hint type=warning title="Zvol Inherits a Parent's Threshold" >}}
If the parent dataset already has **Use Metadata (Special) VDEVs** enabled with its own threshold value, a new zvol can inherit that value.
If the inherited threshold is larger than the zvol volume block size, all I/O to the zvol unintentionally routes to the special allocation class.
After creating the zvol, check its threshold setting on the **Edit Zvol** screen and adjust it if needed to avoid this behavior.
{{< /hint >}}

Click **Save**.

## Managing Zvols

Options to manage a zvol are on the zvol cards shown on the **Dataset** screen when you select the zvol on the dataset tree table.

**Delete Zvol** removes the zvol from TrueNAS.
Deleting a zvol also deletes all snapshots of that zvol. Click **Delete** on the **Zvol Details** card.

{{< hint type=warning >}}
Deleting zvols can result in unrecoverable data loss!
Remove critical data from the zvol or verify it is obsolete before deleting a zvol.
{{< /hint >}}

**Edit** on the **Zvol Details** card opens the **Edit Zvol** screen where you can change settings. **Name** is read-only, and you cannot change it.

To create a snapshot, click **Take Snapshot** on the **Data Protection** card.

### Cloning a Zvol from a Snapshot

To clone a zvol from an existing snapshot, select the zvol on the datasets tree table, then click **View Snapshots** on the **Data Protection** card to open the **Snapshots** screen.
You can also access the **Snapshots** screen from the **Periodic Snapshot Tasks** screen. Click on the **Periodic Snapshot Task** card header on the **Data Protection** screen to open the **Periodic Snapshot Tasks** screen.
Click **Snapshots** to open the **Snapshots** screen.

Click on the snapshot you want to clone, then click **Clone to New Dataset**.
Enter a name for the new dataset or accept the one provided, then click **Clone**.

The cloned zvol shows on the **Datasets** screen.
