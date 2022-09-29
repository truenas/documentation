---
title: "Adding Periodic Snapshot Tasks"
weight: 50
---

{{< toc >}}

A periodic snapshot task allows scheduling the creation of read only versions of pools and datasets at a given point in time.

{{< expand "How should I use snapshots?" "v" >}}
Snapshots do not make not copies of the data so creating one is quick and if little data changed, they take very little space.
It is common to take frequent snapshots as soon as every 15 minutes, even for large and active pools.
A snapshot where no files changed takes no storage space, but as files changes happen, the snapshot size changes to reflect the size of the changes.
In the same way as all pool data, after deleting the last reference to the data you recover the space.

Snapshots keep a history of files, providing a way to recover an older copy or even a deleted file.
For this reason, many administrators take snapshots often, store them for a period of time, and store them on another system, typically using the **Replication Tasks** function.
Such a strategy allows the administrator to roll the system back to a specific point in time.
If there is a catastrophic loss, an off-site snapshot can restore data up to the time of the last snapshot.
{{< /expand >}}

## Creating a Periodic Snapshot Task

Create the required datasets or zvols before creating a snapshot task.

{{< expand "Video Tutorial" "v" >}}
This short video demonstrates adding a periodic snapshot task {{< embed-video name="scaleangelfishperiodicsnapshottasks" >}}
{{< /expand >}} 

Go to **Data Protection > Periodic Snapshot Tasks** and click **Add**.

![AddPeriodicSnapshotTaskScreen](/images/SCALE/22.02/AddPeriodicSnapshotTaskScreen.png "Add Periodic Snapshot Task")

First, choose the dataset (or zvol) to schedule as a regular backup with snapshots, and how long to store the snapshots.

Next, define the task **Schedule**.
If you need a specific schedule, choose **Custom** and use the [Advanced Scheduler](#using-the-advanced-scheduler) section below.

Configure the remaining options for your use case. 
For help with [naming schema](#using-naming-schemas) and [lifetime](#setting-snapshot-lifetimes) settings refer to the sections below.

Click **Save** to save this task and add it to the list in **Data Protection > Periodic Snapshot Tasks**.

You can find any snapshots taken using this task in **Storage > Snapshots**.

To check the log for a saved snapshot schedule, go to **Data Protection > Periodic Snapshot Tasks** and click on the task. The **Edit Periodic Snapshot Tasks** screen displays where you can modify any settings for the task.

### Using the Advanced Scheduler
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

### Using Naming Schemas

The **Naming Schema** determines how automated snapshot names generate.
A valid schema requires the *%Y* (year), *%m* (month), *%d* (day), *%H* (hour), and *%M* (minute) time strings, but you can add more identifiers to the schema too, using any identifiers from the Python [strptime function](https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior).

{{< hint warning >}}
For **Periodic Snapshot Tasks** used to set up a replication task with the **Replication Task** function:

You can use custom naming schema for full backup replication tasks. If you are going to use the snapshot for an incremental replication task, use the default naming schema. Go to [Using a Custom Schema]({{< relref "TroubleshootingTips.md" >}}) for additional information.
{{< /hint >}}

This uses some letters differently from POSIX (Unix) time functions.
For example, including `%z` (time zone) ensures that snapshots do not have naming conflicts when daylight time starts and ends, and *%S* (second) adds finer time granularity.

Examples: 

| Naming Scheme | Snapshot Names Look Like |
|---------------|--------------------------|
| replicationsnaps-1wklife-%Y%m%d_%H:%M | `replicationsnaps-1wklife-20210120_00:00`, `replicationsnaps-1wklife-20210120_06:00` |
| autosnap_%Y.%m.%d-%H.%M.%S-%z | `autosnap_2021.01.20-00.00.00-EST`, `autosnap_2021.01.20-06.00.00-EST` |

{{< hint warning >}}
When referencing snapshots from a Windows computer, avoid using characters like  colon (:) that are invalid in a Windows file path.
Some applications limit filename or path length, and there might be limitations related to spaces and other characters.
Always consider future uses and ensure the name given to a periodic snapshot is acceptable.
{{< /hint >}}

### Setting Snapshot Lifetimes

TrueNAS deletes snapshots when they reach the end of their life and preserves snapshots when at least one periodic task requires it.
For example, you have two schedules created where one schedule takes a snapshot every hour and keeps them for a week, and the other takes a snapshot every day and keeps them for 3 years.
Each has an hourly snapshot taken.
After a week, snapshots created at *01.00* through *23.00* get deleted, but you keep snapshots timed at *00.00* because they are necessary for the second periodic task. 
These snapshots get destroyed at the end of 3 years.

{{< taglist tag="scalesnapshots" limit="10" >}}
