---
title: "Local Replication"
description: "Describes how to create local replication tasks on TrueNAS CORE."
weight: 10
aliases:
  - /core/coretutorials/tasks/replicationtasks/localreplication
tags:
- corelocalreplication
- corereplication
---

{{< toc >}}

{{< expand "Process Summary" "v" >}}
## Process Summary

* Requirements: Storage pools and datasets created in **Storage > Pools**.

* Go to **Tasks > Replication Tasks** and click **ADD**
  * Choose Sources.
    * Set the source location to the local system.
    * Use the file browser or type paths to the sources.
  * Define a Destination path.
    * Set the destination location to the local system.
     * Select or manually define a path to the single destination location for the snapshot copies.
  * Set the Replication schedule to run once.
  * Define how long the snapshots is stored in the **Destination**.
  * Clicking **START REPLICATION** immediately snapshots the chosen. Sources and copies those snapshots to the **Destination**.
    * Dialog might ask to delete existing snapshots from the **Destination**. Be sure to protect that all-important data before deleting anything.
* Clicking the task **State** shows the logs for that replication task.
{{< /expand >}}

## Quick Backups with the Replication Wizard

TrueNAS provides a wizard for quickly configuring different simple replication scenarios.

![TasksReplicationTasksAdd](/images/CORE/12.0/TasksReplicationTasksAdd.png "New Replication Task")

While we recommend regularly scheduled replications to a remote location as the optimal backup scenario, the wizard can quickly create and copy ZFS snapshots to another location on the same system.
This is useful when you have no remote backup locations or when a disk is in danger of failure.

All you need to create a local replication are datasets or zvols in a storage pool to use as the replication source and (preferably) a second storage pool to store replicated snapshots.
You can set up the local replication entirely in the Replication Wizard.

To open the Replication Wizard, go to **Tasks > Replication Tasks** and click **ADD**.
Set the source location to the local system and pick which datasets to snapshot.
The wizard takes new snapshots of the sources when it can't find existing source snapshots.  
Enabling **Recursive** replicates all snapshots contained within the selected source dataset snapshots.
Local sources can also use a naming schema to identify and include custom snapshots in the replication.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.

![TasksReplicationTasksAddLocalSource](/images/CORE/12.0/TasksReplicationTasksAddLocalSource.png "Replication with Local Source")

Set the **Destination** to the local system and define the path to the storage location for replicated snapshots.
When manually defining the **Destination**, type the full path to the destination location.

![TasksReplicationTasksAddLocalSourceLocalDest](/images/CORE/12.0/TasksReplicationTasksAddLocalSourceLocalDest.png "Local Source and Destination")

TrueNAS suggests a default name for the task based on the selected source and destination locations, but you can type your name for the replication.
You can load any saved replication task into the wizard to make creating new replication schedules even easier.

You can define a specific schedule for this replication or choose to run it immediately after saving the new task.
Unscheduled tasks are still saved in the replication task list and can be run manually or edited later to add a schedule.

The destination lifetime is how long copied snapshots store in the **Destination** before the system deletes them.
We usually recommend defining a snapshot lifetime to prevent storage issues.
Choosing to keep snapshots indefinitely can require you to manually clean old ones from the system if or when the **Destination** fills to capacity.

![TasksReplicationTasksAddLocalSourceLocalDestCustomLife](/images/CORE/12.0/TasksReplicationTasksAddLocalSourceLocalDestCustomLife.png "Custom Lifetime")

Clicking **START REPLICATION** saves the new task and immediately attempts to replicate snapshots to the **Destination**.
When TrueNAS detects that the **Destination** already has unrelated snapshots, it asks to delete the unrelated ones and do a full copy of the new ones.
**START REPLICATION** can delete data, so be sure you are okay with deleting any existing snapshots. Alternatively, back them up in another location.

The simple replication is added to the replication task list and shows that it is currently running.
Clicking the task state shows the replication log with an option to download it to your local system.

![TasksReplicationTasksLocalLogs](/images/CORE/12.0/TasksReplicationTasksLocalLogs.png "Local Replication Log")

To confirm that snapshots replicated, go to **Storage > Snapshots** and verify the destination dataset has new snapshots with correct timestamps.

![TasksReplicationTasksLocalSnapshots](/images/CORE/12.0/TasksReplicationTasksLocalSnapshots.png "Finding Replicated Snapshots")
 
{{< taglist tag="corereplication" limit="10" >}}
