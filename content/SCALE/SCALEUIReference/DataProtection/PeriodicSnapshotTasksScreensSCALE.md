---
title: "Periodic Snapshot Tasks Screens"
description: "Provides information on the Data Protection and Periodic Snapshot Task screens and settings."
weight: 50
aliases:
 - /scale/scaleclireference/task/clisnapshottask/
tags:
- snapshots
- replication
- snapshot technology
---

The **Data Protection** screen **Periodic Snapshot Task** widget displays periodic snapshot tasks created on the system. 
A periodic snapshot task allows scheduling the creation of read only versions of pools and datasets at a given point in time.

Periodic snapshot tasks display the machine time, browser time, or both depending on individual user timezone settings. Users can update timezone settings by utilizing the [**General Settings**]({{< ref "GeneralSettingsScreens" >}}) screen.

## Periodic Snapshot Task Widget

The **Periodic Snapshot Task** widget displays a list of tasks configured on the system.

![PeriodicSnapshotTasksWidget](/images/SCALE/DataProtection/PeriodicSnapshotTasksWidget.png "Periodic Snapshot Task Widget") 

If a periodic snapshot task is not yet configured **No Periodic Snapshot Task configured** displays in the widget.

![PeriodicSnapshotTaskWidgetNoTasks](/images/SCALE/DataProtection/PeriodicSnapshotTaskWidgetNoTasks.png "No Periodic Snapshot Tasks")

The **Periodic Snapshot Task** header opens the [**Periodic Snapshot Task**](#periodic-snapshot-task-screen) screen.

**Add** opens the **[Add Periodic Snapshot Task](#add-and-edit-periodic-snapshot-screens)** screen. 

**VMware Snapshot Integration** opens the **[VMware Snapshots]({{< ref "VMwareSnapshotsScreen" >}})** screen. 

**Snapshots** opens the **[Snapshots]({{< ref "SnapshotsScreens" >}})** screen.

The vertical ellipses <span class="material-icons">more_vert</span> icon at the ritht of the task on the **Periodic Task Widget** opens a dropdown menu with thow task options: **Edit** and **Delete**.

The <span class="material-icons">delete</span> **Delete** opens a delete dialog. **Confirm** activates the **Delete**. **Delete** deletes the saved periodic snapshot task.

**Edit** opens the **Edit Periodic Snapshot Task** screen.

**State** show the status of the next cloud sync task, and when clicked, opens a **Logs** window for that task.

### Logs Window

![PeriodicSnapshotTaskLog](/images/SCALE/DataProtection/PeriodicSnapshotTaskLog.png "Periodic Snapshot Task State Log")

**Download Logs** saves a copy of the current task logs.

## Periodic Snapshot Task Screen

Periodic snapshot tasks show on both the **Periodic Snapshot Task** widget on the **Data Protection** screen and the **Periodic Snapshot Tasks** screen.

![DataProtectionPeriodicSnapshotTasksList](/images/SCALE/DataProtection/DataProtectionPeriodicSnapshotTasksList.png "Periodic Snapshot Task List")

**Add** opens the **[Add Periodic Snapshot Task](#add-and-edit-periodic-snapshot-screens)** screen. 

![DataProtectPeriodicSnapshotTasksDetailsNoTasks](/images/SCALE/DataProtection/DataProtectPeriodicSnapshotTasksDetailsNoTasks.png "Periodic Snapshot Task No Tasks")

The **Columns** dropdown list shows options to customize the list view.
Options are **Select All**, **Recursive**, **Naming Schema**, **When**, **Frequency**, **Next Run**, **Keep snapshot for**, **VMWare Sync**, **Enabled**, **State**, and **Reset to Defaults**.

**State** shows the current state of the task.

The <span class="material-icons">expand_more</span> expand icon at the right of the task opens the details for the selected task.

![DataProtectionPeriodicSnapshotTasksDetails](/images/SCALE/DataProtection/DataProtectionPeriodicSnapshotTasksDetails.png "Periodic Snapshot Task Details")

**Edit** opens the **[Edit Periodic Snapshot Task](#add-and-edit-periodic-snapshot-screens)** screen.

**Delete** opens the delete dialog that removes the task from the system. 

## Add and Edit Periodic Snapshot Screens

The **Add Periodic Snapshot Task** and **Edit Periodic Snapshot Task** show the same settings.

### Dataset Options
**Dataset** settings show on both the add and edit configuration screens.

![AddPeriodicSnapshotTaskScreen](/images/SCALE/DataProtection/AddPeriodicSnapshotTaskScreen.png "Add Periodic Snapshot Task")

{{< expand "Dataset Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Dataset** | Sets the pool, dataset, or zvol you want to take a snapshot of. |
| **Exclude** | Excludes specific child datasets from the snapshot. Use with recursive snapshots. List paths to any child datasets to exclude. Example: `pool1/dataset1/child1`. A recursive snapshot of pool1/dataset1 includes all child datasets except child1. Separate entries by pressing <kbd>Enter</kbd>. |
| **Recursive** | Sets the task to take separate snapshots of the dataset and each of its child datasets. Leave checkbox clear to take a single snapshot only of the specified dataset without child datasets. |
{{< /truetable >}}
{{< /expand >}}{
{< expand "Schedule Settings" "v" >}}
**Schedule** settingsshow on both the add and edit configuration screens.
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Snapshot Lifetime** | Sets the length of time to retain a snapshot on this system. Enter a numeric value and a single lowercase letter for units. Examples: *3h* is three hours, *1m* is one month, and *1y* is one year. Does not accept minute values. After the time expires, the snapshot is removed during the next snapshot scheduled execution finds the snapshot lifetime is expired. Snapshots replicated to other systems are not affected. |
| **Naming Schema** | Snapshot name format string. The default is `auto-%Y-%m-%d_%H-%M`. Must include the strings `%Y`, `%m`, `%d`, `%H`, and `%M`, which are replaced with the four-digit year, month, day of month, hour, and minute as defined in [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.htmle). For example, snapshots of *pool1* with a Naming Schema of `customsnap-%Y%m%d.%H%M` have names like *pool1@customsnap-20190315.0527*. |
| **Schedule** | Sets the schedule to a preset selected from the dropdown list. Select *Custom* to open the advanced scheduler. |
| **Begin** | Sets the start time for a snapshot. shows when **Schedule** is set to *Hourly*. Enter the hour and minute when the system can begin taking snapshots. |
| **End** | Sets the end time for a snapshot. Shows when **Schedule** is set to *Hourly*. Enter the hour and minute the system must stop creating snapshots. Snapshots already in progress continue until complete. |
| **Allow Taking Empty Snapshots** | Sets the task to allow taking a snapshot and creating a dataset even when there are no changes to the dataset from the last snapshot. Recommended for long-term restore points, multiple snapshot tasks pointed at the same datasets, or compatibility with snapshot schedules or replications created in TrueNAS 11.2 and earlier.  For example, you can set up a monthly snapshot schedule to take monthly snapshots and still have a daily snapshot task taking  snapshots of any changes to the dataset. |
| **Enabled** | Activates this periodic snapshot schedule. To disable this task without deleting it, leave the checkbox cleared. |
{{< /truetable >}}
{{< /expand >}}
