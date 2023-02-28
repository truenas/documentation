---
title: "Snapshots Screens"
description: "This article provides information on the Snapshots screen settings and functions."
weight: 40
tags:
- scalesnapshots
- scalestorage
---

{{< toc >}}

Use the **Snapshots** screen to manage existing snapshots or to add new snapshots. To access the **Snapshots** screen, go to **Data Protection** > **Periodic Snapshot Tasks** and click the **Snapshots** button in the lower right corner of the widget.

![DataProtectSnapshotTasksSCALE](/images/SCALE/22.12/DataProtectSnapshotTasksSCALE.png "Create a New Snapshot")

Existing snapshots display as a list.

![SnapshotsListingSCALE1](/images/SCALE/22.12/SnapshotsListingSCALE1.png "Snapshot Screen")

Clicking the toggle button next to **Show extra columns** displays a dialog box. 

![SnapshotsShowColumnsCaution](/images/SCALE/22.12/SnapshotsShowColumnsCaution.png "Show Extra Columns")

Click **Show** to add the **Used**, **Data Created** and **Referenced** columns. These columns provide information about the amount of space used (**Used**), the snapshot creation date, and the amount of data the dataset can access (**Referenced**).

Clicking the toggle button next to **Show extra columns** again displays the **Hide Extra Columns** dialog box. Click **Hide** to return to the default view, with only the **Dataset** and **Snapshot** columns displayed.

## Snapshot Details Screen

 To view the options for a listed snapshot, click the <span class="material-icons">expand_more</span> icon to display more details.

![SnapshotsListingExpandedSCALE1](/images/SCALE/22.12/SnapshotsListingExpandedSCALE1.png "Snapshot Options")

| Setting | Description |
|---------|-------------|
| **Hold** | Select checkbox to retain this ZFS snapshot. See [zfs-hold.8](https://openzfs.github.io/openzfs-docs/man/8/zfs-hold.8.html). |
| **Delete** | Displays a delete confirmation dialog. Select **Confirm** to activate the **DELETE** button. |
| **Clone to New Dataset** |  Displays the **Clone to New Dataset** screen. The cloned snapshot appears in the **Datasets** listing. Selecting the clone in the **Datasets** listing provides the option to promote the dataset using the **Promote** button on the **Dataset Details** widget. |
| **Rollback** | Displays the **Dataset Rollback From Snapshot** dialog. | 

{{< include file="/_includes/CloneAndPromoteSnapshotDataset.md" type="page" >}}

### Dataset Rollback from Snapshot Dialog
{{< hint "danger" >}}
WARNING: Rolling the dataset back destroys data on the dataset and can destroy additional snapshots that are related to the dataset. 
This can result in permanent data loss!
Do not roll back until all desired data and snapshots are backed up.
{{< /hint >}}

![DatasetRollbackSnapshotWarnSCALE](/images/SCALE/22.12/DatasetRollbackSnapshotWarnSCALE.png "Dataset Rollback from Snapshot Options")

**Stop Rollback if Snapshots Exist:** The rollback is cancelled when the safety check finds additional snapshots that are directly related to the dataset being rolled back. Select the appropriate radio button for the rollback action safety level:

| Setting | Description |
|---------|-------------|
| **Newer Intermediate, Child, and Clone** | Select to stop rollback when the safety check finds any related intermediate, child dataset, or clone snapshots that are newer than the rollback snapshot. |
| **Newer Clone** | Select to stop rollback when the safety check finds any related clone snapshots that are newer than the rollback snapshot. |
| **No Safety Check (CAUTION)** | The rollback destroys any related intermediate, child dataset, and cloned snapshots that are newer than the rollback snapshot. |
| **Confirm** | Select to confirm the selection and activate the **ROLLBACK** button. |

## Add Snapshot Screen

Click **ADD** at the top right of the **Snapshots** screen to display the **Add Snapshot** screen.

![AddSnapshotScreenSCALE](/images/SCALE/22.12/AddSnapshotScreenSCALE.png "Add a New Snapshot")

| Setting | Description |
|---------|-------------|
| **Dataset** | Select the dataset or zvol from the dropdown list. The snapshot created is from this dataset or zvol. |
| **Name** | TrueNAS populates this with a name but you can override the name with any string of your choice. Must be unique and cannot be used with **Naming Schema**. |
| **Naming Schema** | You can generate a name for the snapshot using the naming schema from a previously created **Periodic Snapshot Task**. This allows the snapshot to be replicated. To use **Naming Schema**, select an option from the dropdown list. Leave this blank if you have entered a value in **Name**. You cannot use both **Naming Schema** and **Name**. |
| **Recursive** | Select to include child datasets or zvols in the snapshot. |

Use **Save** to retain the settings and return to the **Snapshots** screen.

{{< taglist tag="scalesnapshots" limit="10" >}} 
