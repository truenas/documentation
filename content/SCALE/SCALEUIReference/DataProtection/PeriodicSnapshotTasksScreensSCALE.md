---
title: "Periodic Snapshot Tasks Screens"
description: "This article provides information on the data protection periodic snapshot task settings and screens."
weight: 50
aliases:
tags:
 - scalesnapshots
 - scalereplication
---

{{< toc >}}

The **Data Protection** screen **Periodic Snapshot Task** widget displays periodic snapshot tasks created on the system. 
A periodic snapshot task allows scheduling the creation of read only versions of pools and datasets at a given point in time.

## Periodic Snapshot Task Widget

The **Periodic Snapshot Task** widget displays a list of tasks configured on the system.

![PeriodicSnapshotTaskWidget](/images/SCALE/22.02/PeriodicSnapshotTaskWidget.png "Periodic Snapshot Task Widget") 

If a periodic snapshot task is not yet configured **No Periodic Snapshot Task configured** displays in the widget.

![PeriodicSnapshotTaskWidgetNoTasks](/images/SCALE/22.02/PeriodicSnapshotTaskWidgetNoTasks.png "No Periodic Snapshot Tasks")

**Add** opens the **[Add Periodic Snapshot Task](#add-and-edit-periodic-snapshot-screens)** screen. 

Each task listed is a link that opens the **[Edit Periodic Snapshot Task](#add-and-edit-periodic-snapshot-screens)** screen populated with with the settings for that task. Click on the **Description**, **Frequency**, or **Next Run** column entry to open the edit task screen.

**State** displays the status of the next cloud sync task. While on the widget, click on the state for the task to display a **Logs** window for that task. Click **Download Logs** to save a copy of the current task logs.

![PeriodicSnapshotTaskLog](/images/SCALE/22.02/PeriodicSnapshotTaskLog.png "Periodic Snapshot Task State Log")

The <span class="material-icons">delete</span> **Delete** icon opens a simple delete dialog where you confirm before the system deletes the saved periodic snapshot task.

## Periodic Snapshot Task List Screen
Periodic snapshot tasks display on both the **Data Protection** widget and **Periodic Snapshot Tasks** list screen.
{{< expand "Click Here for More Information" "v" >}}
Click on the **Periodic Snapshot Task** header to open the **Data Protection > Periodic Snapshot Task** list screen.

![DataProtectionPeriodicSnapshotTasksList](/images/SCALE/22.02/DataProtectionPeriodicSnapshotTasksList.png "Periodic Snapshot Task List")

If a task is not added, the list view displays **Add Periodic Snapshot Tasks** which opens the **[Add Periodic Snapshot Task](#add-and-edit-periodic-snapshot-screens)** screen. 

![DataProtectPeriodicSnapshotTasksDetailsNoTasks](/images/SCALE/22.02/DataProtectPeriodicSnapshotTasksDetailsNoTasks.png "Periodic Snapshot Task No Tasks")

**Columns** displays a dropdown list of options to customize the list view. Options are **Select All**, **Recursive**, **Naming Schema**, **When**, **Frequency**, **Next Run**, **Keep snapshot for**, **VMWare Sync**, **Enabled**, **State**, and **Reset to Defaults**.

The **State** on the list view does not link to the log file or anything else. It just displays the current state of the task.

Click the <span class="material-icons">expand_more</span> expand icon at the right of the task to open the details for the selected task.

![DataProtectionPeriodicSnapshotTasksDetails](/images/SCALE/22.02/DataProtectionPeriodicSnapshotTasksDetails.png "Periodic Snapshot Task Details")

**Edit** opens the **[Edit Periodic Snapshot Task](#add-and-edit-periodic-snapshot-screens)** screen.

**Delete** opens the delete dialog that removes the task from the system. 
{{< /expand >}}
## Add and Edit Periodic Snapshot Screens

The **Add Periodic Snapshot Task** and **Edit Periodic Snapshot Task** display some of the same settings.

### Dataset Options
The **Dataset** setting options display on both the add and edit configuration screens.
{{< expand "Click Here for More Information" "v" >}}

![AddPeriodicSnapshotTaskScreen](/images/SCALE/22.02/AddPeriodicSnapshotTaskScreen.png "Add Periodic Snapshot Task")

| Setting | Description |
|---------|-------------|
| **Dataset** | Select a pool, dataset, or zvol. |
| **Exclude** | Exclude specific child datasets from the snapshot. Use with recursive snapshots. List paths to any child datasets to exclude. Example: `pool1/dataset1/child1`. A recursive snapshot of pool1/dataset1 includes all child datasets except child1. Separate entries by pressing <kbd>Enter</kbd>. |
| **Recursive** | Select to take separate snapshots of the dataset and each of its child datasets. Leave checkbox clear to take a single snapshot only of the specified dataset without child datasets. |
{{< /expand >}}
### Schedule Options
These **Schedule** setting options display on both the add and edit configuration screens.
{{< expand "Click Here for More Information" "v" >}}
| Setting | Description |
|---------|-------------|
 **Snapshot Lifetime** | Enter the length of time to retain the snapshot on this system using a numeric value and a single lowercase letter for units. Examples: *3h* is three hours, *1m* is one month, and *1y* is one year. Does not accept minute values. After the time expires, the snapshot is removed. Snapshots replicated to other systems are not affected. |
| **Naming Schema** | Snapshot name format string. The default is `auto-%Y-%m-%d_%H-%M`. Must include the strings `%Y`, `%m`, `%d`, `%H`, and `%M`, which are replaced with the four-digit year, month, day of month, hour, and minute as defined in [strftime(3)](https://www.freebsd.org/cgi/man.cgi?query=strftime). For example, snapshots of *pool1* with a Naming Schema of `customsnap-%Y%m%d.%H%M` have names like *pool1@customsnap-20190315.0527*. |
| **Schedule** | Select a presets from the dropdown list. Select *Custom* to open the advanced scheduler. |
| **Allow Taking Empty Snapshots** | Select to Create dataset snapshots even when there are no changes to the dataset from the last snapshot. Recommended for long-term restore points, multiple snapshot tasks pointed at the same datasets, or compatibility with snapshot schedules or replications created in TrueNAS 11.2 and earlier.  For example, you can set up a monthly snapshot schedule to take monthly snapshots and still have a daily snapshot task taking  snapshots of any changes to the dataset. |
| **Enabled** | Select to activate this periodic snapshot schedule. To disable this task without deleting it, leave the checkbox cleared. |
{{< /expand >}}
### Schedule Options - Edit Periodic Snapshot Task 
These **Schedule** setting options only display on the **Edit Periodic Snapshot Task** screen.
{{< expand "Click Here for More Information" "v" >}}

![EditPeriodicSnapshotTaskScreen](/images/SCALE/22.02/EditPeriodicSnapshotTaskScreen.png "Edit Periodic Snapshot Task")

| Setting | Description |
|---------|-------------|
| **Begin** | Enter the hour and minute when the system can begin taking snapshots. |
| **End** | Enter the hour and minute the system must stop creating snapshots. Snapshots already in progress continue until complete. |
{{< /expand >}}

{{< taglist tag="scalesnapshots" limit="10" >}}