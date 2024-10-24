---
title: "Snapshots"
description: "Provides information on the settings and functions found on the Snapshots screen."
weight: 35
tags:
- snapshots
- datasets
- zvol
- storage
---

The **Snapshots** screen lists dataset snapshots on the system.
It allows you to add new or manage existing snapshots.

Access to the **Snapshots** screen is available using the **Manage Snapshots** link on the **Data Protection** widget on the **Datasets** screen and by clicking **Snapshots** on the **[Periodic Snapshot Tasks]({{< relref "PeriodicSnapshotTasksScreensSCALE.md" >}})** widget on the **Data Protection** screen.

If the selected dataset does not have snapshots, the screen displays **No Snapshots are Available**.
{{< trueimage src="/images/SCALE/Datasets/SnapshotsScreenNoSnapshotsAvailable.png" alt="No Snapshots Available" id="No Snapshots Available" >}}

Enter a dataset path in the search field at the top of the screen to check for snapshots for other datasets.

{{< trueimage src="/images/SCALE/Datasets/SnapshotsScreenWithAllSnapshots.png" alt="All Snapshots" id="All Snapshots" >}}

{{< expand "My Snapshot screen is blank" "v" >}}
If the **Snapshots** screen does not display a list of snapshots and you know you added snapshots, clear the dataset path in the search field to show all dataset and zvol snapshots on the system.
{{< /expand >}}

**Add** opens the **[Add Snapshot](#add-snapshot-screen)** screen.

Select the checkbox to the left of each snapshot to select multiple snapshots and display the **Batch Operations** option to **Delete** the selected snapshots.

{{< expand "Show Extra Snapshot List Columns" "v" >}}
Click the **Show Extra Columns** toggle to add extra information columns to the list of snapshots to open the **Show Extra Columns** dialog.

{{< trueimage src="/images/SCALE/Datasets/SnapshotsScreenShowingExtraColumns.png" alt="Show Extra Columns" id="Show Extra Columns" >}}

**Show** adds the extra columns to the list of snapshots. These columns add the space used (**Used**), the snapshot creation date, and the amount of data the dataset can access (**Referenced**).

Click the toggle again to open the **Hide Extra Columns** dialog. **Hide** to return to the default view with only the **Dataset** and **Snapshot** columns.
{{< /expand >}}

## Snapshot Details Screen
Click anywhere on a snapshot to expand it and view more information about the snapshot and the options for that snapshot.

{{< trueimage src="/images/SCALE/Datasets/SnapshotsScreenExpandedSnapshot.png" alt="Expanded Snapshot" id="Expanded Snapshot" >}}

Select the checkbox to the left of each snapshot to select multiple snapshots and display the **Batch Operations** option to **Delete** the selected snapshots.

{{< truetable >}}
| Option | Description |
|---------|-------------|
| **Delete** | Opens a **[Delete](#delete-snapshot)** confirmation dialog for the selected snapshot(s). Select **Confirm** to activate the **Delete** button. |
| **Clone to New Dataset** | Opens the **[Clone to New Dataset](#clone-snapshot))** window where you enter a new name or clone with the default value in the **Dataset Name** field. |
| **Rollback** | Opens the **[Dataset Rollback From Snapshot](#dataset-rollback-from-snapshot-dialog)** window with three radio button options. **Confirm** activates the **Rollback** button. |
| **Hold** | Select to prevent the snapshot from being deleted. If selected and you batch-operation delete datasets, this opens an error display with the name of the dataset and prevents the delete operation from continuing. |
{{< /truetable >}}

### Rollback from Snapshot Window
The snapshot **Rollback** option replaces the data in the selected dataset with the information saved in the snapshot.
{{< hint type=warning >}}
WARNING: Rolling the dataset back destroys data on the dataset and can destroy additional snapshots that are related to the dataset.
This can result in permanent data loss!
Do not roll back until all desired data and snapshots are backed up.
{{< /hint >}}
There are three **Stop Rollback if Snapshot Exists** radio button options that impose safety levels on the rollback operation.
When the safety check finds additional snapshots directly related to the dataset you are rolling back it cancels the rollback.

{{< trueimage src="/images/SCALE/Datasets/DatasetRollbackFromSnapshotWindow.png" alt="Rollback from Snapshot" id="Rollback from Snapshot" >}}

{{< expand "Rollback Options" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Newer Intermediate, Child, and Clone** | Select to stop rollback when the safety check finds any related intermediate, child dataset, or clone snapshots that are newer than the rollback snapshots. |
| **Newer Clone** | Select to stop rollback when the safety check finds any related clone snapshots newer than the rollback snapshot. |
| **No Safety Check (CAUTION)** | Select to stop rollback if snapshot exists. The rollback destroys any related intermediate, child dataset, and cloned snapshots newer than the rollback snapshot.  |
| **Confirm** | Select to confirm the selection and activate the **Rollback** button. |
{{< /truetable >}}
{{< /expand >}}

### Clone Snapshot and Promote Dataset

{{< trueimage src="/images/SCALE/Datasets/SnapshotsListingExpandedSCALE1.png" alt="Snapshot Listing" id="Snapshot Listing" >}}

{{< include file="/static/includes/CloneAndPromoteSnapshotDataset.md" >}}

### Delete Snapshot
The snapshot **Delete** option opens a window that lists the snapshot(s) you select.

{{< trueimage src="/images/SCALE/Datasets/DeleteSnapshotDialog.png" alt="Delete Snapshot" id="Delete Snapshot" >}}

**Confirm** activates the **Delete** button.

#### Batch Operations - Delete
To delete more than one snapshot in one operation, select the checkbox beside the datasets you want to delete to display the **Batch Operations Delete** option.

{{< trueimage src="/images/SCALE/Datasets/SnapshotsScreenBatachOperations.png" alt="Batch Operations Delete Snapshot" id="Batch Operations Delete Snapshot" >}}

**Batch Operations Delete** opens a window listing all selected snapshots.

{{< trueimage src="/images/SCALE/Datasets/DeleteMultipleSnapshotsWindow.png" alt="Batch Operations Delete" id="Batch Operations Delete Window" >}}

**Confirm** activates the **Delete** button. If a snapshot has the **[Hold](#snapshot-details-screen)** option selected, an error displays to prevent you from deleting that snapshot.

## Add Snapshot Screen
The **Add Snapshots** screen allows you to create a snapshot while on the **Snapshots** screen.
It also opens when you click **Create Snapshot** on the **Dataset Protection** widget on the **Datasets** screen.

{{< trueimage src="/images/SCALE/Datasets/AddSnapshotScreen.png" alt="Add Snapshot" id="Add Snapshot" >}}

**Save** retains the settings and returns to the **Snapshots** screen.
{{< expand "Add Snapshot Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Dataset** | Select the dataset or zvol from the dropdown list. The snapshot created is from this dataset or zvol. |
| **Name** | TrueNAS populates this with a name but you can override the name with any string of your choice. You cannot use **Name** and **Naming Schema** for the same snapshot. |
| **Naming Schema** | Select an option from the dropdown list or leave this blank to use the system-populated name in the **Name** field. This generates a name for the snapshot using the naming schema from a previously-entered periodic snapshot. This allows replication of the snapshot. You cannot use **Naming Schema** with **Name**. Selecting a schema option overwrites the value in **Name**. |
| **Recursive** | Select to include child datasets or zvols in the snapshot. |
{{< /truetable >}}
{{< /expand >}}
