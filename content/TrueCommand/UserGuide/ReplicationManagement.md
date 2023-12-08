---
title: "Replication Management"
description: "Describes the Replication screen and replication management feature for creating and viewing replication tasks in TrueCommand for TrueNAS systems."
weight: 50
aliases:
tags:
- snapshots
- replication
---

TrueCommand replication management feature allows administrators to create replication tasks for TrueNAS systems managed by TrueCommand. 

## Replication Screen
If the TrueNAS system has a replication task created and scheduled it displays on the TrueCommand **Replication** screen. 
Click **Replication** on the top toolbar to open the screen.

TrueNAS system completed replication tasks show the **Finished** status, while those not yet run show **Pending** status. 
Replication tasks created in TrueCommand also show the **Pending** status.

![ReplicationManagementScreenWithTasks](/images/TrueCommand/Replication/ReplicationManagementScreenWithTasks.png "Replication Management Screen")

To start the task before the scheduled date and time, click the <span class="iconify" data-icon="mdi:play"></span> **Run Now** button.

If a replication task fails, click on the **Failed** status to see the reason the task failed.

The ability to edit an existing task is planned for a later release. 
Delete the failed task and add a new task to repeat the replication after correcting the reason the task failed.

## First Steps
TrueCommand replication management allows administrators and users with access to systems to select one or more datasets as the source to replicate to a target location as long as a snapshot exists for the dataset(s). 
Replication management does not create the initial dataset snapshot. 
Just as with replication tasks created on TrueNAS systems, you must take an intial manual snapshot of the dataset or create a periodic snapshot task before you can run a replication task. 

Verify the dataset has a snapshot or a snapshot task scheduled. 
TrueCommand shows exsiting snapshots and snapshot tasks in the file explorer. 
If the system does not show either, use [**Create Snapshot**]({{< relref "TrueCommandSnapshots.md" >}}) option in the TrueCommand to create a one-time manual snapshot or schedule an automatic snapshot task. You can also create the manual snapshot or automatic snapshot task in the TrueNAS system.
If creating a snapshot task in TrueCommand, that task must run and create the snapshot before you can run a replication task.

TrueCommand replication management uses the default schema **auto-%Y-%m-%d_%H-%M**. 
One-time snapshots use the **manual-%Y-%m-%d_%H-%M** schema. 
If creating a replication task where only a manual snapshot exists, change the schema name to **manual-%Y-%m-%d_%H-%M** when configuring the replication task or the task fails because it does not find the existing snapshot. 

To use a snapshot task in TrueCommand, allow the automatic snapshot task to run before running the replication task.
{{< hint type=information title="Read Only Snapshots" >}}
The existing snapshot should not be read only. Replication manager cannot add a task if you select a dataset with a read only snapshot.
{{< /hint >}} 

Verify the SSH service on the TrueNAS systems is enabled and running. If not, the **Replication** screen does not populate and TrueCommand returns a variaty of error messages.
Either check the SSH service setting on the TrueNAS system or go to the TrueCommand main **Dashboard**, click the <span class="iconify" data-icon="ic:round-more-vert"></span> on the system widget, then click **Services** to open the list of services enabled and running for the selected system. Scroll down to the SSH service to see the status.

## Configuring a Replication Management Task
Click **Replication** on the top toolbar to open the screen. 
Click **ADD REPLICTION TASK** to open the **New Replication Task** wizard.

![NewReplicationTaskSourcesScreen](/images/TrueCommand/Replication/NewReplicationTaskSourcesScreen.png "New Replication Task Sources")

Enter a name for the task, select the system from the dropdown list, and then select the source dataset(s). 
Click on a dataset to select it. Click again to clear the selection.

Select **Recursive** to replicate all child datasets.

Select **Replicate Custom Snapshot**. 
If using a one-time or manual snapshot for the replication task, change **auto-%Y-%m-%d_%H-%M** to **manual-%Y-%m-%d_%H-%M** in **Naming Schema**.

To add a second source, click **ADD SOURCE** to show another set of source fields.

Click **NEXT** or on **Target** to show the target fields, then select the destination system and dataset.

![NewReplicationTaskTargetScreen](/images/TrueCommand/Replication/NewReplicationTaskTargetScreen.png "New Replication Task Target")

Select the system and destination dataset, then click **Next** or on **Scheduler** to enter the data and time for the task to run.

![NewReplicationTaskSchedulerScreen](/images/TrueCommand/Replication/NewReplicationTaskSchedulerScreen.png "New Replication Task Scheduler")

Select the period and day of week from the dropdown lists, then enter the hour an minute. Accept the defaults to run the replication task weekly on Sunday at midnight.
Click **NEXT** or on **Confirmation** to view the task details. 

![NewReplicationTaskConfirmScreen](/images/TrueCommand/Replication/NewReplicationTaskConfirmScreen.png "New Replication Task Confirmation")

Review the replication settings. 
Click **BACK** or on the wizard screen option to return to that screen to make changes, or click **CONFIRM** to create the task and add it to the replication task list.
