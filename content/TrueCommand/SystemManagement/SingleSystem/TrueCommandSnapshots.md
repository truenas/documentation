---
title: "TrueCommand Snapshots"
description: "This article provides instructions on setting up and running snapshots in TrueCommand."
weight: 40
aliases:
tags:
- tcsnapshots
- scalesnapshots
- coresnapshots
---

{{< toc >}}


## Viewing Snapshots

To view a list of snapshots for a system, click **EXPLORE** on the system widget (information card), then select the pool.

![ExploreSystemSelectPool](/images/TrueCommand/2.3.2/ExploreSystemSelectPool.png "Select a Pool") 

Click **Snapshots** to see a list of snapshots for the root or pool level dataset. 
To see a list of snapshots for any other dataset, click on the dataset, then on **Snapshots**.

![ExploreSystemDatasetSnapshotList](/images/TrueCommand/2.3.2/ExploreSystemDatasetSnapshotList.png "Dataset Snapshot list")

The header displays the breadcrumb for the system, pool, and dataset. To return to the pool, click the down arrow beside the system name, then select the pool on the dropdown list.

## Taking Snapshots
If the dataset does not have existing snapshots, a blue **CREATE SNAPSHOTS** button displays instead of a list of snapshots. 

![CreateSnapshotButtons](/images/TrueCommand/2.3.2/CreateSnapshotButtons.png "Create Snapshot Buttons")

You can use this or the white **CREATE SNAPSHOTS** button under the *pool/dataset* path on the left-side panel. 
**CREATE SNAPSHOTS** displays two options: 

* **Create One-time Snapshot** to take a single snapshot
* **Create Snapshot Task** to create a snapshot task to run on a schedule

### Creating a Single Snapshot

To create single snapshots:

Click **EXPLORE** on the system card found on the dashboard, then select a pool on that system.

Next click on a dataset you want to snapshot, then click **CREATE SNAPSHOTS**.

![CreateSnapshotsOptions](/images/TrueCommand/2.3.2/CreateSnapshotsOptions.png "Create One-time Snapshot")

Select **Create One-Time Snapshot** to open the snapshot dialog. 

![CreateSnapshotDialog](/images/TrueCommand/2.3.2/CreateSnapshotDialog.png "Create Snapshot Dialog")

Enter a name for the snapshot. 
Select **Recursive** if the dataset selected has other datasets nested under it and you want to include those in the snapshot.

Click **OK**. 

## Creating a Snapshot Task

To create snapshot tasks that occurs on a schedule:

Click **EXPLORE** on the system card found on the dashboard, then select a pool on that system.

Next click on a dataset you want to snapshot, then click **CREATE SNAPSHOTS**.

![CreateSnapshotsOptions](/images/TrueCommand/2.3.2/CreateSnapshotsOptions.png "Create Snapshot Task")

Select **Create Snapshot Task** to open the **Create Snapshot Task** configuration screen.
If you did not select a dataset in the pool, you can select it from the dropdown list in the **Dataset** section, otherwise this area is not editable.

![CreateSnapshotTaskDataset](/images/TrueCommand/2.3.2/CreateSnapshotTaskDataset.png "Create Snapshot Task Dataset Path")

Set the schedule for the task. Select the frequency from the **Period** dropdown, the day of the week, hour and minute you want to run the task.

![CreateSnapshotTaskScheduleAndLifetime](/images/TrueCommand/2.3.2/CreateSnapshotTaskScheduleAndLifetime.png "Add Snapshot Task Schedule and Lifetime")

Setelect the task lifetime. Enter a number in **Lifetime Value**, then select the unit from the **Lifetime Unit** dropdown list. Options are **Hour**, **Day**, **Week**, **Month**, and **Year**.

Click **OK** to save the task. 

## Timezones

When you create snapshot tasks, TrueCommand uses the system the dataset is mounted in to determine what timezone it uses. 

For example, if you are in New York and the dataset is mounted to a system with a Los Angeles timezone, a snapshot task set to occur at 12:00 P.M. actually occurs at 3:00 P.M. your time.

To see what timezone a system is in, go to that TrueNAS system UI and navigate to **System > General** for CORE or **System Settings > General** in SCALE, and find the **Localization** widget or section. 

{{< taglist tag="tcsnapshots" limit="10" >}}

