---
title: "Troubleshooting Tips"
weight: 40
---

{{< toc >}}

This article contains some advice for investigating or solving issues with a Replication task.

## Using a Custom Schema

If a custom schema has been set up for a replication task that doesn't match the TrueNAS schema list do a a full backup replication, an incremental Replication will not work.

One way a custom schema is created is if a ZFS datasets with snapshots has been imported into TrueNAS with a schema that doesn't match the Truenas schema.
Another way that a custom schema field is created is if the *Naming Schema* field in a **Periodic Snapshot Task** was used to make name a schema something other than the deafult.

## Replication Task Log

To view and download the replication task log, go to **Tasks > Replication Tasks**.
Click on the *state* of the replication task.

![TasksReplicationTasksState](/images/CORE/12.0/RepTaskErrorCORE.png "Replication Task State")

![TasksReplicationTasksLog](/images/CORE/12.0/RepTaskLogDownloadCORE.png "Replication Task Log")

Click the *DOWNLOAD LOGS* button to download the log file.

## Editing a Replication Task

To edit the replication task, go to **Tasks > Replication Tasks**.
Click the `>` to expand the replication task information, then click **EDIT**.

![TasksReplicationTasksEdit](/images/CORE/12.0/RepEditTaskCORE.png "Replication Task Edit")

See [**Replication Advanced Options**]({{< relref "/CORE/Tasks/ReplicationTasks/Advanced.md" >}}) for descriptions of the available fields.

## Replication Task Alert Priorities

To customize the importance and frequency of a Replication task alert (success or failure), go to **System > Alert Settings** and scroll down to the *Tasks* area.
Set the *Warning Level* and how often the alert notification is sent.

![TasksSetReplicationAlert](/images/CORE/12.0/AlertTaskReplication.png "Set Replication Alert")

See [**Alert Settings**]({{< relref "core/system/alert.md" >}}) for more information about this UI screen.

## FAQ

**Question**: If the internet connection goes down for a period of time, will the replication restart where it left off - including any intermediate snapshots?
**Answer**: Yes.

**Question**: If a site changes a lot of data at one time and the internet bandwidth is not enough to finish sending the snapshot before the next one begins, will the replication jobs run one after the other and not stomp on each other?
**Answer**: Yes.
