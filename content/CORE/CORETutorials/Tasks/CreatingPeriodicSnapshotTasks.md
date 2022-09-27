---
title: "Periodic Snapshot Tasks"
description: "This article describes how to create periodic snapshot tasks on TrueNAS CORE."
weight: 50
tags:
- coreperiodicsnapshottasks
- coresnapshots
- corezfstasks
---

{{< toc >}}

A periodic snapshot task allows scheduling the creation of read-only versions of pools and datasets at a given point in time.

{{< expand "How should I use snapshots?" "v" >}}
Snapshots do not make copies of the data, so creating one is quick. It is common to take frequent snapshots every 15 minutes, even for large and active pools.
A snapshot with no file changes takes no storage space, but as file changes happen, the snapshot size changes to reflect the size of the changes.
In the same way as all pool data, you recover the space after deleting the last reference to the data.

Snapshots keep a history of files, providing a way to recover an older copy or even a deleted file.
For this reason, many administrators take snapshots often, store them for a while, and store them on another system, typically using the **Replication Tasks** function.
Such a strategy allows the administrator to roll the system back to a specific point in time.
If there is a catastrophic loss, an off-site snapshot can restore data to when the last snapshot occured.
{{< /expand >}}

## Creating a Periodic Snapshot Task

Go to **Tasks > Periodic Snapshot Tasks** and click **ADD**.

![TasksPeriodicSnapshotAdd](/images/CORE/12.0/TasksPeriodicSnapshotAdd.png "Creating a new Snapshot Task")

Choose the dataset (or zvol) to schedule as a regular backup with snapshots and determine how long to store them.
Define the task **Schedule** and configure the remaining options for your use case.

### Snapshot Lifetimes

TrueNAS deletes snapshots when they reach the end of their life and preserves snapshots when at least one periodic task requires it.
For example, you have two schedules created where one schedule takes a snapshot every hour and keeps them for a week, and the other takes a snapshot every day and keeps them for three years.
Each has an hourly snapshot taken.
After a week, snapshots created at *01.00* through *23.00* get deleted, but you keep snapshots timed at *00.00* because they are necessary for the second periodic task. 
These snapshots get destroyed at the end of 3 years.

### Naming Schemas

The **Naming Schema** determines how automated snapshot names generate.
A valid schema requires the *%Y* (year), *%m* (month), *%d* (day), *%H* (hour), and *%M* (minute) time strings, but you can add more identifiers to the schema too, using any identifiers from the Python [strptime function](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior).

{{< hint warning >}}

For **Periodic Snapshot Tasks** used to set up a replication task with the **Replication Task** function:

You can use custom naming schemas for full backup replication tasks. If you are using the snapshot for incremental replication tasks, use the default naming schema. Go to [Using a Custom Schema]({{< relref "TroubleshootingTips.md" >}}) for additional information.
{{< /hint >}}

This uses some letters differently from POSIX (Unix) time functions.
For example, including `%z` (time zone) ensures that snapshots do not have naming conflicts when daylight time starts and ends, and *%S* (second) adds finer time granularity.

Examples: 

| Naming Scheme | Snapshot Names Look Like |
|---------------|--------------------------|
| replicationsnaps-1wklife-%Y%m%d_%H:%M | `replicationsnaps-1wklife-20210120_00:00`, `replicationsnaps-1wklife-20210120_06:00` |
| autosnap_%Y.%m.%d-%H.%M.%S-%z | `autosnap_2021.01.20-00.00.00-EST`, `autosnap_2021.01.20-06.00.00-EST` |

{{< hint warning >}}
When referencing snapshots from a Windows computer, avoid using characters like `:` that are invalid in a Windows file path.
Some applications limit filename or path length, and there might be limitations related to spaces and other characters.
Always consider future uses and ensure the name given to a periodic snapshot is acceptable.
{{< /hint >}}

## Managing Periodic Snapshot Tasks

Click **SUBMIT** to save the task in **Tasks > Periodic Snapshot Tasks**.
You can find any snapshots from this task in **Storage > Snapshots**.

To check the log for a saved snapshot schedule, go to **Tasks > Periodic Snapshot Tasks** and click the task **State**.

{{< taglist tag="coresnapshots" limit="10" >}}

{{< taglist tag="corezfstasks" limit="10" title="Related ZFS Tasks Articles">}}
