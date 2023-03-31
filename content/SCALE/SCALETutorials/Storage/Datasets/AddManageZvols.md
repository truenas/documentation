---
title: "Adding and Managing Zvols"
description: "This article provides instructions on creating, editing and managing zvols."
weight: 20
aliases: /scale/scaleuireference/storage/pools/zvolsscale/
tags: 
- scalezvols
- scalestorage
---

{{< toc >}}

A ZFS Volume (zvol) is a [dataset]({{< relref "DatasetsSCALE.md" >}}) that represents a block device or virtual disk drive.
TrueNAS requires a zvol when configuring [iSCSI Shares]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}). Adding a virtual machine also creates a zvol to use for storage.
{{< hint warning >}}
Storage space you allocate to a zvol is only used by that volume, it does not get reallocated back to the total storage capacity of the pool or dataset where you create the zvol if it goes unused. 
Plan your anticipated storage need before you create the zvol to avoid creating a zvol that exceeds your storage needs for this volume. 
Do not assign capacity that exceeds what is required for SCALE to operate properly. For more information, see [SCALE Hardware Guide]({{< relref "SCALEHardwareGuide.md" >}}) for CPU, memory and storage capacity information.
{{< /hint >}}

## Adding a Zvol

To create a zvol in a pool, go to **Datasets**. Select the root, non-root parent, or child dataset where you want to add the zvol, and then click **Add Zvol**.

![DatasetsScreenWithZvolWidgets](/images/SCALE/22.12/DatasetsScreenWithZvolWidgets.png "Dataset Tree Table and Zvol Widgets")

To create a zvol with default options, enter a name and a value in **Size for the zvol** and click **Save**.

## Managing Zvols

Options to manage a zvol are on the zvol widgets found on the **Dataset** screen. Select the zvol to display the zvol widgets.

**Delete Zvol** removes the zvol from TrueNAS. Deleting a zvol also deletes all snapshots of that zvol. Click **Delete** on the **Zvol Details** widget.
{{< hint danger >}}
Deleting zvols can result in unrecoverable data loss!
Remove critical data from the zvol or verify it is obsolete before deleting a zvol.
{{< /hint >}}

**Edit** on the **Zvol Details** widget opens the **Edit Zvol** screen where you can change the saved settings. **Name** is read-only and you cannot change it.

To create a snapshot, click **Create Snapshot** on the **Data Protection** widget.

### Cloning a Zvol from a Snapshot

If you clone a zvol from an existing snapshot, the cloned zvol displays on the **Datasets** screen.

{{< taglist tag="scalezvols" limit="10" >}}