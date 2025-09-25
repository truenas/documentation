---
title: "Adding Periodic Snapshot Tasks"
description: "Provides instructions on creating periodic snapshot tasks in TrueNAS."
weight: 50
draft: true
aliases:
tags:
- snapshots
- replication
keywords:
- enterprise data storage 
- nas data storage
- data protection
- data backup and recovery
---

# Creating Automated Snapshots

Periodic snapshot tasks allow you to schedule creating read-only versions of pools and datasets at a given point in time. You can also access VMware snapshot integration and TrueNAS storage snapshots from the Periodic Snapshot Tasks widget.

{{< expand "How should I use snapshots?" "v" >}}
Snapshots do not make copies of the data so creating one is quick and if little data changed, they take very little space.
It's common to take frequent snapshots as soon as every 15 minutes, even for large and active pools.
A snapshot where no files changed takes no storage space, but as files changes happen, the snapshot size changes to reflect the size of the changes.
In the same way as all pool data, once you delete the last reference to the data you will recover the space.

Snapshots keep a history of files, providing a way to recover an older copy or even a deleted file.
For this reason, many administrators take snapshots often, store them for a period of time, and store them on another system, typically using the Replication Tasks function.
Such a strategy allows the administrator to roll the systm back to a specific point in time.
If there is a catastrophic loss, an off-site snapshot can restore data up to the time of the last snapshot.
{{< /expand >}}

## creating a Periodic Snapshot Task

Create the required datasets or zvols before creating a snapshot task.

Go to Data Protection > Periodic Snapshot Tasks and click Add.

{{< trueimage src="/images/SCALE/DataProtection/AddPeriodicSnapshotTaskScreen.png" alt="Add Periodic Snapshot Task configuration screen showing dataset selection and schedule options" id="Add Periodic Snapshot Task Screen" >}}

First, you should choose the dataset (or zvol) to schedule as a regular backup with snapshots, and how long you want to store the snapshots.

Next, you will need to define the task Schedule.
If you need a specific schedule, you can choose Custom and use the Advanced Scheduler section below.

You should configure the remaining options for your use case. 
For help with naming schema and lifetime settings you can refer to the sections below.

You will need to click Save to save this task and add it to the list in Data Protection > Periodic Snapshot Tasks.

You can find any snapshots taken using this task in Storage > Snapshots.

To check the log for a saved snapshot schedule, you will go to Data Protection > Periodic Snapshot Tasks and click on the task. The Edit Periodic Snapshot Tasks screen will display where you can modify any settings for the task.

### Using the Advanced Scheduler
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="/static/includes/SCALEAdvancedScheduler.md" >}}
{{< /expand >}}

### using Naming Schemas

The Naming Schema determines how automated snapshot names generate.
A valid schema will require the %Y (year), %m (month), %d (day), %H (hour), and %M (minute) time strings, but you may add more identifiers to the schema too, using any identifiers from the Python strptime function (https://docs.python.org/3/library/datetime.html#strftime-and-strptime-behavior).

{{< hint type=important >}}
For Periodic Snapshot Tasks used to set up a replication task with the Replication Task function:

You can use custom naming schema for full backup replication tasks. If you are going to use the snapshot for an incremental replication task, you should use the default naming schema.
{{< /hint >}}

This uses some letters differently from POSIX (Unix) time functions.
For example, including %z (time zone) will ensure that snapshots do not have naming conflicts when daylight time starts and ends, and %S (second) will add finer time granularity.

Examples: 

| Naming Scheme | Snapshot Names Look Like |
|---------------|--------------------------|
| replicationsnaps-1wklife-%Y%m%d_%H:%M | replicationsnaps-1wklife-20210120_00:00, replicationsnaps-1wklife-20210120_06:00 |
| autosnap_%Y.%m.%d-%H.%M.%S-%z | autosnap_2021.01.20-00.00.00-EST, autosnap_2021.01.20-06.00.00-EST |

{{< hint type=important >}}
When referencing snapshots from a Windows computer, you should avoid using characters like colon (:) that are invalid in a Windows file path.
Some applications may limit filename/path length, and there might be limitations related to spaces and other characters.
Always consider future uses and ensure the "name" given to a periodic snapshot is acceptable.
{{< /hint >}}

### Setting Snapshot Lifetimes

A snapshot lifetime value will define how long the snapshot schedule ignores that snapshot when it looks for obsolete snapshots to remove.
For example, defining a lifetime of two weeks on a snapshot created after a weekly snapshot schedule runs may result in that snapshot actually being deleted three weeks later.
This is because the snapshot has a timestamp and defined lifetime that will preserve the snapshot until the next time the scheduled snapshot task runs.

TrueNAS will also preserve snapshots when at least one periodic task requires it.
For example, you have two schedules created where one schedule will take a snapshot every hour and keeps them for a week, and the other will take a snapshot every day and keeps them for 3 years.
Each has an hourly snapshot taken.
After a week, snapshots created at 01.00 through 23.00 get deleted, but you keep snapshots timed at 00.00 because they are necessary for the second periodic task. 
These snapshots get destroyed at the end of 3 years.

## Additional Configuration Options

### Enabling VMware Snapshot Coordination

By enabling this feature, you can coordinate TrueNAS snapshots with VMware operations. This feature improves virtualized environments because it allows you to create crash-consistent snapshots of your VMs.

To enable this functionality:

1. Install VMware tools on your virtual machines
2. Enable the VMware snapshot coordination option in your periodic snapshot task
3. Configure the appropriate credentials for VMware integration

{{< hint type=warning >}}
WARNING: This feature may cause performance degradation during snapshot operations!
{{< /hint >}}

After you enable VMware coordination, the system automatically quiesces the VMs before taking snapshots, ensuring data consistency.

### Advanced Retention Policies

You can configure sophisticated retention policies that help you manage storage space efficiently. These policies can include:

- **Hourly snapshots**: Keep 24 hourly snapshots (1 day)
- **Daily snapshots**: Keep 7 daily snapshots (1 week) 
- **Weekly snapshots**: Keep 4 weekly snapshots (1 month)
- **Monthly snapshots**: Keep 12 monthly snapshots (1 year)

This tiered approach ensures you have frequent recovery points for recent changes while maintaining long-term backup coverage without consuming excessive storage space.

## Troubleshooting Common Issues

### Snapshot Creation Failures

If your snapshot tasks are failing, you should check the following:

1. **Insufficient Space**: Make sure your pool has adequate free space
2. **Dataset Busy**: Verify that no processes are heavily writing to the dataset  
3. **Permissions**: Ensure the snapshot task has the proper permissions
4. **VMware Issues**: If using VMware coordination, verify the VMware tools are properly installed

### Performance Impact

Taking snapshots may cause temporary performance degradation, especially on systems with heavy I/O workloads. You should consider:

- Scheduling snapshots during low-usage periods
- Limiting the frequency of snapshots on busy datasets
- Using multiple smaller datasets instead of one large dataset

### Storage Consumption

Snapshots consume storage space as data changes. Monitor:

- Total snapshot space usage
- Individual snapshot sizes  
- Growth trends over time

{{< hint type=note >}}
Remember: Deleting snapshots does not immediately free up space if they contain unique data!
{{< /hint >}}