---
title: "Adding and Managing Zvols"
description: "Provides instructions on creating, editing, and managing zvols."
weight: 20
aliases:
 - /scale/scaleuireference/storage/pools/zvolsscale/
 - /scale/scaletutorials/storage/datasets/addmanagezvols/
tags: 
- zvol
- storage
---

A ZFS Volume (zvol) is a [dataset]({{< ref "DatasetsSCALE" >}}) that represents a block device or virtual disk drive.
TrueNAS requires a zvol when configuring [iSCSI Shares]({{< ref "/SCALE/SCALEUIReference/Shares" >}}).
Adding a virtual machine also creates a zvol to use for storage.

{{< include file="/static/includes/ZvolSpaceWarning.md" >}}

## Adding a Zvol

To create a zvol, go to **Datasets**.
Select the root or non-root parent dataset where you want to add the zvol, and then click **Add Zvol**.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenWithZvolWidgets.png" alt="Dataset Tree Table and Zvol Widgets" id="Dataset Tree Table and Zvol Widgets" >}}

Enter a name that does not exceed 60 characters, enter a number and letter for the unit of measure in **Size**, and then click **Save**.

## Managing Zvols

Options to manage a zvol are on the zvol widgets shown on the **Dataset** screen when you select the zvol on the dataset tree table.

**Delete Zvol** removes the zvol from TrueNAS.
Deleting a zvol also deletes all snapshots of that zvol. Click **Delete** on the **Zvol Details** widget.

{{< hint type=warning >}}
Deleting zvols can result in unrecoverable data loss!
Remove critical data from the zvol or verify it is obsolete before deleting a zvol.
{{< /hint >}}

**Edit** on the **Zvol Details** widget opens the **Edit Zvol** screen where you can change settings. **Name** is read-only and you cannot change it.

To create a snapshot, click **Take Snapshot** on the **Data Protection** widget.

### Cloning a Zvol from a Snapshot

To clone a zvol from an existing snapshot, select the zvol on the datasets tree table, then click **View Snapshots** on the **Data Protection** widget to open the **Snapshots** screen.
You can also access the **Snapshots** screen from the **Periodic Snapshot Tasks** screen. Click on the **Periodic Snapshot Task** widget header on the **Data Protection** screen to open the **Period Snapshot Tasks** screen.
Click **Snapshots** to open the **Snapshots** screen.

Click on the snapshot you want to clone, then click **Clone to New Dataset**.
Enter a name for the new dataset or accept the one provided, then click **Clone**.

The cloned zvol shows on the **Datasets** screen.
