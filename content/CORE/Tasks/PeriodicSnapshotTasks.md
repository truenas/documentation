---
title: "Periodic Snapshot Tasks"
weight: 50
---

{{< toc >}}

A periodic snapshot task allows scheduling the creation of read-only versions of pools and datasets at a given point in time.

{{< expand "How should I use snapshots?" "v" >}}
Snapshots are created quickly and, if little data changes, new snapshots take very little space, since snapshots do not make new copies of the data.
It is quite common to take snapshots as frequently as every 15 minutes, even for large and active pools.
A snapshot where no files have changed takes no storage space, but as changes are made to files, the snapshot size changes to reflect the size of the changes.
Space is recovered in the same way as all pool data, when the last reference to the data is destroyed.

Snapshots keep a history of files, providing a way to recover an older copy or even a deleted file.
For this reason, many administrators take snapshots often, store them for a period of time, and store them on another system, typically using Replication Tasks.
Such a strategy allows the administrator to roll the system back to a specific point in time.
If there is a catastrophic loss, an off-site snapshot can be used to restore data up to the time of the last snapshot.
{{< /expand >}}

## Creating a Periodic Snapshot Task

Any required datasets or zvols must exist before creating a snapshot task.

### Process

Go to **Tasks > Periodic Snapshot Tasks** and click **ADD**.

![TasksPeriodicSnapshotAdd](/images/CORE/12.0/TasksPeriodicSnapshotAdd.png "Creating a new Snapshot Task")

Choose the dataset (or zvol) to regularly back up with snapshots and how long to store snapshots.
Define the task **Schedule**.
When a specific *Schedule* is required, choose *Custom* and use the **Advanced Scheduler**.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Configure the remaining options to your use case.
{{< expand "Specific Options" "v" >}}
{{< include file="static/includes/TasksPeriodicSnapshotAddFields.md.part" markdown="true" >}}

### Naming Schemas

The *Naming Schema* determines how automated snapshot names are generated.
A valid schema requires the *%Y* (year), *%m* (month), *%d* (day), *%H* (hour), and *%M* (minute) time strings, but you can add more identifiers to the schema too, using any identifiers from the Python [strptime function](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior).

This uses some letters differently from POSIX (Unix) time functions.
For example, including `%z` (time zone) ensures that snapshots do not have naming conflicts when daylight time starts and ends, and *%S* (second) adds finer time granularity.

Examples: 

| Naming Scheme | Snapshot Names Look Like |
|---------------|--------------------------|
| replicationsnaps-1wklife-%Y%m%d_%H:%M | `replicationsnaps-1wklife-20210120_00:00`, `replicationsnaps-1wklife-20210120_06:00` |
| autosnap_%Y.%m.%d-%H.%M.%S-%z | `autosnap_2021.01.20-00.00.00-EST`, `autosnap_2021.01.20-06.00.00-EST` |

{{< hint warning >}}
When snapshots are to be referenced from a Windows computer, avoid using characters like `:` that are invalid in a Windows file path.
Some applications filename or path length limits, and there may be limitations related to spaces and other characters.
Carefully consider future uses and ensure the names given to periodic snapshots are acceptable.
{{< /hint >}}

### Snapshot Lifetimes

TrueNAS automatically deletes snapshots when they reach the end of their life and preserves snapshots when at least one periodic task requires it.
For example, suppose two schedules are created, one that takes a snapshot every hour and keeps them for a week, and one that takes a snapshot every day and keeps them for 3 years.
A snapshot is taken every hour.
After a week, snapshots created at *01.00* through *23.00* are deleted, but snapshots timed at *00.00* are kept because they are needed for the second periodic task.
These snapshots are destroyed at the end of 3 years.

{{< /expand >}}

Click **SUBMIT** to save this task and add it to the list in **Tasks > Periodic Snapshot Tasks**.
Any snapshots taken using this task are found in **Storage > Snapshots**.

To check the log for a saved snapshot schedule, go to **Tasks > Periodic Snapshot Tasks** and click the task **State**.
