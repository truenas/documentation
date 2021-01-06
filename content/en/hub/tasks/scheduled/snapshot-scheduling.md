---
title: "Snapshots"
description: "How to set up automated dataset snapshotting."
tags: ["ZFS"]
weight: 40
---

A periodic snapshot task allows scheduling the creation of read-only versions of pools and datasets at a given point in time.
Snapshots can be created quickly and, if little data changes, new snapshots take up very little space, since snapshots do not make new copies of the data.  It is quite common to take snapshots as frequently as every 15 minutes, even for large and active pools. A snapshot where no files have changed takes no storage space, but as changes are made to files, the snapshot size changes to reflect the size of the changes. Space is recovered in the same way as all pool data, when the last reference to the data is destroyed.

Snapshots keep a history of files, providing a way to recover an older copy or even a deleted file.  For this reason, many administrators take snapshots often, store them for a period of time, and store them on another system, typically using Replication Tasks. Such a strategy allows the administrator to roll the system back to a specific point in time. If there is a catastrophic loss, an off-site snapshot can be used to restore data up to the time of the last snapshot.

Any datasets or zvols to be snapshotted must exist, before creating a snapshot schedule for them.

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

The naming schema determines how automated snapshot names are generated. A valid schema requires the *%Y* (year), *%m* (month), *%d* (day), *%H* (hour), and *%M* (minute) time strings, but you can add more identifiers to the schema too, using any identifiers from the Python [strptime function](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior). Note this uses some letters differently from POSIX (Unix) time functions. For example, including *%z* (time zone) ensures that snapshots do not have naming conflicts when daylight time starts and ends.

For example, using the schema <i>replicationsnaps-1wklife-%Y%m%d_%H:%M</i> will name every snapshot like: <i>replicationsnaps-1wklife-20200320_09:00</i>, <i>replicationsnaps-1wklife-20200320_12:00</i>, <i>replicationsnaps-1wklife-20200321_09:00</i>, etc. 

Snapshot schedules are configured by selecting a premade schedule or creating a custom schedule. Custom schedules are generally recommended, as the advanced scheduler offers a high degree of control over the schedule and a preview that shows you the exact schedule you've created. Selecting recursive snapshots will also cause snapshots to be taken of all descendant datasets and volumes within the stated dataset or pool.

Periodic snapshots are named by default according to their creation schedule (1 day, 2 days, etc). If preferred, they can be given arbitrary or identical naming schemes, which may aid features such as Apple Time Machine, Windows File History and other automated snapshot searches.

TrueNAS will automatically delete periodic snapshots when they reach the end of their life, and will preserve snapshots so long as at least one periodic task requires their preservation. For example, suppose two schedules are created, one that takes a snapshot every hour, keeping them for a week, and one that takes a snapshot every day, keeping them for 3 years. A snapshot will be taken every hour. After a week, snapshots created at 01.00 through 23.00 will be destroyed, but snapshots timed at 00.00 will be kept because they are needed for the second periodic task, and will be destroyed at 3 years.

<img src="/images/advanced-scheduler.png">
<br><br>

You can check the log for a saved snapshot schedule by clicking the task state.
To verify snapshots are being created by the schedule, go to **Storage > Snapshots**.
