---
title: "Automated Snapshots"
linkTitle: "Automated Snapshots"
description: "How to set up automated dataset snapshotting"
---

{{% pageinfo version="FreeNAS 11.2" %}}

{{% /pageinfo %}}

A periodic snapshot task allows scheduling the creation of read-only versions of pools and datasets at a given point in time.
Snapshots can be created quickly and, if little data changes, new snapshots take up very little space.
For example, a snapshot where no files have changed takes 0 MB of storage, but as changes are made to files, the snapshot size changes to reflect the size of the changes.

Snapshots keep a history of files, providing a way to recover an older copy or even a deleted file.
For this reason, many administrators take snapshots often, store them for a period of time, and store them on another system, typically using Replication Tasks.
Such a strategy allows the administrator to roll the system back to a specific point in time.
If there is a catastrophic loss, an off-site snapshot can be used to restore data up to the time of the last snapshot.

You must have a storage pool and any datasets or zvols created before creating a snapshot schedule.

## Process Summary

* Tasks > Periodic Snapshot Tasks
  * Select the dataset to snapshot
  * Define snapshot options
    * How long to keep it.
    * How snapshots are named
  * Schedule when the task will run.
    * Presets are for quickly configuring a task
    * Advanced scheduler is typically recommended

## Creating Dataset Snapshot Schedules

Go to **Tasks > Periodic Snapshot Tasks** and click **ADD**

<img src="/images/tasks-periodicsnap-add.png">
<br><br>

Choose the dataset you want to regularly back up with snapshots and how long you want to keep the snapshots on the system.
Defining a snapshot lifetime is recommended to save time manually deleting obsolete snapshots.

The naming schema determines how automated snapshot names are generated.
A valid schema requires the *%Y* (year), *%m* (month), *%d* (day), *%H* (hour), and *%M* (minute) time strings, but you can add more identifiers to the schema too.
For example, using the schema <i>replicationsnaps-1wklife-%Y%m%d_%H:%M</i> will name every snapshot like: <i>replicationsnaps-1wklife-20200320_09:00</i>, <i>replicationsnaps-1wklife-20200320_12:00</i>, <i>replicationsnaps-1wklife-20200321_09:00</i>, etc.

Snapshot schedules are configured by selecting a premade schedule or creating a custom schedule.
Custom schedules are generally recommended, as the advanced scheduler offers a high degree of control over the schedule and a preview that shows you the exact schedule you've created.

<img src="/images/advanced-scheduler.png">
<br><br>

You can check the log for a saved snapshot schedule by clicking the task state.
To verify snapshots are being created by the schedule, go to **Storage > Snapshots**.