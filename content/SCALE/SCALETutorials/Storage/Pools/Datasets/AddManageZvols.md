---
title: "Adding and Managing Zvols"
description: "This article provides instructions on how to create zvols."
weight: 25
aliases: 
- /scale/scaleuireference/storage/pools/zvolsscale/
- /scale/scaletutorials/storage/pools/addmanagezvols/
tags: 
 - scalezvols
 - scalestorage
---

{{< toc >}}


A ZFS Volume (zvol) is a [dataset]({{< relref "DatasetsSCALE.md" >}}) that represents a block device.
TrueNAS requires a zvol when configuring [iSCSI Shares]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}).

## Adding a Zvol

To create a zvol in a pool, go to **Storage** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; on a pool root dataset or child dataset, then select **Add Zvol**.

![AddZvolBasicSetings](/images/SCALE/22.02/AddZvolBasicSetings.png "Creating a new Zvol")

To create a zvol with default options, enter a name and size for the zvol and click **Save**.

## Managing Zvols

To see zvol options, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the desired zvol listed on the **Storage** screen:

* **Delete Zvol** removes the zvol from TrueNAS. Deleting a zvol also deletes all snapshots of that zvol.
  {{< hint danger >}}
  Deleting zvols can result in unrecoverable data loss!
  Remove critical data from the zvol or verify it is obsolete before deleting a zvol.
  {{< /hint >}}
* **Edit Zvol** opens the **Edit Zvol** screen where you can change the saved settings. **Name** is read-only and you cannot change it.
* **Create Snapshot** opens a dialog where you can take a single, current point-in-time snapshot image of the zvol and saves it to the **Snapshots** screen. 
  TrueNAS suggest a name and provides the option to include any child zvols of the selected zvol by selecting **Recursive**. 

### Cloning a Zvol from a Snapshot

If you clone a zvol from an existing snapshot, the cloned zvol that displays on the **Storage** screen includes the option to **Promote Dataset** on the **Zvol Actions** dropdown list. Click to promote the clone. A confirmation dialog displays.

After promoting a clone, the original volume becomes a clone of the promoted clone. Promoting a clone allows users to delete the volume that created the clone.
Otherwise, you cannot delete a clone while the original volume exists.

When a zvol is the child of an [encrypted]({{< relref "EncryptionSCALE.md" >}}) dataset, TrueNAS offers additional **Encryption Actions**. 

{{< taglist tag="scalezvols" limit="10" >}}
