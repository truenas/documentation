---
title: "Snapshots Screens"
weight: 20
---

{{< toc >}}

Use the **Storage > Snapshots** screens to create and manage snapshots on your TrueNAS.

![StorageSnapshotsScreen](/images/CORE/13.0/StorageSnapshotsScreen.png "Stprage Snapshots Screen")

Use the <span class="iconify" data-icon="ci:settings-filled"></span> to display the **Show Extra Columns** dialog, and after clickng **SHOW**, the **Snapshot** screen changes to dipslay the blue **COLUMNS** button with options to modify the table information. 
It also changes the individual snapshots listed to show the individual snapshot action options from the <span class="material-icons">more_vert</span> rather than the <span class="material-icons">navigate_next</span> expand symbol that, after clicking on it, expands the selected snapshot to show details with the action options on the bottom of the expanded view of the snapshot. 
To return to the previous display click the <span class="iconify" data-icon="ci:settings-filled"></span> to display the **Hide Extra Columns** dialog, and after clickng **HIDE**, the blue **COLUMNS** button no longer displays and the list of snapshots displays the <span class="material-icons">navigate_next</span> expand symbol. 

Use **ADD** to display the **Snapshot > Add** screen.

## Snapshot Add Screen


![AddSnapShotScreen](/images/CORE/13.0/AddSnapShotScreen.png "Add Snapshot Screen")

| Setting | Description |
|---------|-------------|
| **Dataset** | Select a dataset or zvol from the dropdown list to use as the storage location for snapshots.  |
| **Name** | Enter a unique name. This cannot be used with the value in **Naming Schema** |
| **Naming Schema** |  | Used to generate a name for the snapshot from a previously created periodic snapshot task. This allows replication of the snapshot. Value cannot be used with a value specified in **Name**. 
| **Recursive** | Select to include child datasets of the selected dataset. |

Use **SUBMIT** to save settings.
Use **CANCEL** to exit without saving and display the **Snapshots** screen.

## Snapshot Details Screen
The expanded snapshot view includes date created, space used, and the amount of data accessible by this dataset.

![StorageSnapshoExpandedtInfoScreen](/images/CORE/13.0/StorageSnapshoExpandedtInfoScreen.png "Snapshot Expanded Screen")

| Setting | Icon | Description |
|---------|------|-------------|
| **Delete** | <span class="material-icons">delete</span> | Displays a delete confirmation dialog. Select **Confirm** to activate the *DELETE** button. |
| **Clone to New Dataset** | <span class="iconify" data-icon="fa-regular:clone"></span> | Displays the **Clone to New Dataset** screen. |
| **Rollback** | <span class="material-icons">restore</span> | Displays the **Dataset Rollback From Snapshot** dialog. |

### Dataset Rollback from Snapshot Dialog
{{< hint "danger" >}}
WARNING: Rolling the dataset back destroys data on the dataset and can destroy additional snapshots that are related to the dataset. 
This can result in permanent data loss!
Do not roll back until all desired data and snapshots are backed up.
{{< /hint >}}

![DatasetRollbackFromSnapshot](/images/CORE/13.0/DatasetRollbackFromSnapshot.png "Dataset Rollback from Snapshot")

| Setting | Description |
|---------|-------------|
| **Stop Roolback if Snapshot Exists** | Select the safety level for the rollback action. Select the radio button that best fits. Rollback is cancelled when the safety check finds additional snapshots that are directly related to the dataset being rolled back. |
| **Newer intermeidate, Child, and clone** | Select to stop rollback when the safety check finds any related intermediate, child dataset, or clone snapshots that are newer than the rollback snapshots. |
| **Newer Clone** | Select to stop rollbck when the safety check finds any related clone snapshots that are newer than the rollback snapshot. |
| **No Safety Check (CAUTION)** | Select to stop rollback if snapshot exists. The rollback destroys any related intermediate, child dataset, and cloned snapshots that are newer than the rollback snapshot.  |
| **Confirm** | Select to confirm the selection and activate the **ROLLBACK** button. |

See [Creating Snapshots]({{< relref "/CORE/CORETutorials/Storage/Snapshots.md" >}}) for more information on creating and managing snapshots.