---
title: "TrueNAS Snapshots"
description: "How to schedule and manage data snapshots in vCenter."
tags: ["VMware", "TrueNAS Enterprise"]
weight: 40
---

A snapshot is a read-only copy of a file system or volume.
Snapshots require little disk space and can be used to restore a datastore to an earlier point in time.
See [Overview of ZFS Snapshots](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbciq.html) for more details.

To create a snapshot, select a datastore from the list and click **Create Snapshot**.
Enter a name for the snapshot.
Click **Create**.
View created snapshots in the *Snapshot* menu.

## Snapshot Menu

This list shows all manually or automatically created snapshots.
Create snapshots in the *Datastore* and *Scheduling* menus.

<img src="/images/VCP-Snapshots.png">
<br><br>

*Revert* resets a datastore to the state saved by the selected snapshot.
Any changes to the datastore made after the snapshot was created are lost.
To revert a datastore, highlight a snapshot and click *Revert*.
Confirm the action by clicking **Yes** in the popup dialog.
vCenter reverts the datastore to the state saved in that snapshot.

A snapshot can be deleted by clicking **Delete** and confirming the action.

## Scheduling Periodic Snapshots

The *Scheduling* tab is used to create, edit, and delete periodic snapshot schedules.
Schedules are synchronized between vCenter and the individual TrueNAS web interface.
Click **+** to begin creating a new snapshot schedule.

<img src="/images/VCP-PeriodicSnapshots.png">
<br><br>

| Setting   | Value                     | Description                                                                                                                                                         |
|-----------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Datastore | dropdown menu             | The datastore to snapshot. Choose a created datastore from the drop-down list.                                                                                      |
| Recursive | checkbox                  | Set to include child datasets in the snapshot.                                                                                                                      |
| Lifetime  | integer and dropdown menu | The amount of time to keep snapshots created by this schedule. Enter a number and choose a unit of time from the drop-down.                                         |
| Begin     | dropdown menu             | When the schedule can begin snapshotting the datastore. Choose a time from the dropdown.                                                                            |
| End       | dropdown menu             | When the schedule can no longer start snapshotting the datastore. Choose a time from the drop-down. A schedule that is already running can continue past this time. |
| Interval  | dropdown menu             | How often a new snapshot is created between the Begin and End times. Choose a preconfigured interval from the drop-down.                                            |
| Weekdays  | checkboxes                | Days of the week this task is allowed to run.                                                                                                                       |
| Enable    | checkbox                  | Activate this periodic snapshot schedule.                                                                                                                           |

Click **OK** to save the configured schedule and add it to the **Configure > Scheduling** list.
If the new schedule is not immediately visible, click **Refresh** to update the screen.
Selecting a schedule and clicking **Edit** opens a configuration window for that schedule.
Make any needed adjustments, then click **Save** to save the updated schedule.