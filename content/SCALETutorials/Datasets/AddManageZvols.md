---
title: "Adding and Managing Zvols"
description: "Provides instructions on creating, editing, and managing zvols."
weight: 20
tags: 
- zvol
- storage
---

A ZFS Volume (zvol) is a [dataset]({{< ref "DatasetsSCALE" >}}) that represents a block device or virtual disk drive.
TrueNAS requires a zvol when configuring [iSCSI Shares]({{< ref "/SCALEUIReference/Shares/" >}}).
Adding a virtual machine also creates a zvol to use for storage.

{{< include file="/static/includes/ZvolSpaceWarning.md" >}}

## Adding a Zvol
To create a zvol, go to **Datasets**.
Select the root or non-root parent dataset where you want to add the zvol, and then click **Add Zvol**.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenWithZvolWidgets.png" alt="Dataset Tree and Zvol Widgets" id="Dataset Tree and Zvol Widgets" >}}

To create a basic zvol with default options, enter a name and a value in **Size for the zvol**, then click **Save**.

## Managing Zvols
Options to manage a zvol are on the zvol widgets shown on the **Dataset** screen when you select the zvol on the dataset tree table.

**Delete Zvol** removes the zvol from TrueNAS.
Deleting a zvol also deletes all snapshots of that zvol. Click **Delete** on the **Zvol Details** widget.

{{< hint type=warning >}}
Deleting zvols can result in unrecoverable data loss!
Remove critical data from the zvol or verify it is obsolete before deleting a zvol.
{{< /hint >}}

**Edit** on the **Zvol Details** widget opens the **Edit Zvol** screen where you can change settings. **Name** is read-only and you cannot change it.

To create a snapshot, click **Create Snapshot** on the **Data Protection** widget.

### Cloning a Zvol from a Snapshot
To clone a zvol from an existing snapshot, select the zvol on the **Datasets** tree table, then click **Manage Snapshots** on the **Data Protection** widget to open the **Snapshots** screen.
You can also access the **Snapshots** screen from the **Periodic Snapshot Tasks** widget on the **Data Protection** screen.
Click **Snapshots** to open the **Snapshots** screen.

Click on the snapshot you want to clone, then click **Clone to New Dataset**.
Enter a name for the new dataset or accept the one provided, then click **Clone**.

The cloned zvol displays on the **Datasets** screen.

{{< trueimage src="/images/SCALE/Datasets/DatasetsScreenClonedZvol.png" alt="Cloned Zvol" id="Cloned Zvol" >}}
