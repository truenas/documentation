---
title: "Adding and Managing Zvols"
description: "Provides instructions on creating, editing and managing zvols."
weight: 20
aliases:
 - /scale/scaleuireference/storage/pools/zvolsscale/
 - /scale/scaletutorials/storage/datasets/addmanagezvols/
tags: 
- zvol
- storage
---

A ZFS Volume (zvol) is a [dataset]({{< relref "DatasetsSCALE.md" >}}) that represents a block device or virtual disk drive.
TrueNAS requires a zvol when configuring [iSCSI Shares]({{< relref "/SCALEUIReference/Shares/_index.md" >}}). Adding a virtual machine also creates a zvol to use for storage.

{{< include file="/content/_includes/ZvolSpaceWarning.md" >}}

## Adding a Zvol

To create a zvol in a pool, go to **Datasets**. Select the root, non-root parent, or child dataset where you want to add the zvol, and then click **Add Zvol**.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenWithZvolWidgets.png" alt="Dataset Tree and Zvol Widgets" id="Dataset Tree and Zvol Widgets" >}}

To create a zvol with default options, enter a name and a value in **Size for the zvol** and click **Save**.

## Managing Zvols

Options to manage a zvol are on the zvol widgets found on the **Dataset** screen. Select the zvol to display the zvol widgets.

**Delete Zvol** removes the zvol from TrueNAS. Deleting a zvol also deletes all snapshots of that zvol. Click **Delete** on the **Zvol Details** widget.

{{< hint type=warning >}}
Deleting zvols can result in unrecoverable data loss!
Remove critical data from the zvol or verify it is obsolete before deleting a zvol.
{{< /hint >}}

**Edit** on the **Zvol Details** widget opens the **Edit Zvol** screen where you can change the saved settings. **Name** is read-only and you cannot change it.

To create a snapshot, click **Create Snapshot** on the **Data Protection** widget.

### Cloning a Zvol from a Snapshot

To clone a zvol from an existing snapshot, go to **Data Protection** and click **Snapshots** on the **Periodic Snapshot Tasks** widget.
Click on the snapshot you want to clone and click **Clone to New Dataset**.
Enter a name for the new dataset or accept the one provided and click **Clone**.

The cloned zvol displays on the **Datasets** screen.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenClonedZvol.png" alt="Cloned Zvol" id="Cloned Zvol" >}}