---
title: "Setting Up a Local Replication Task"
description: "This article provides instructions on adding a replication task on the same TrueNAS system."
weight: 20
aliases:
tags:
 - scalereplication
 - scalebackup
---

{{< toc >}}


## Local Replication

### Process Summary

{{< expand "Process Summary" "v" >}}

* Requirements: Storage pools and datasets created in **Storage > Pools**.

* Go to **Data Protection > Replication Tasks** and click **ADD**
  * Choose **Sources**
    * Set the source location to the local system
    * Use the file browser or type paths to the sources
  * Define a **Destination** path
    * Set the destination location to the local system
  	 * Select or manually define a path to the single destination location for the snapshot copies.
  * Set the **Replication schedule** to run once
  * Define how long the snapshots are stored in the **Destination**
  * Clicking **START REPLICATION** immediately snapshots the chosen sources and copies those snapshots to the destination
    * Dialog might ask to delete existing snapshots from the destination. Be sure that all important important data is protected before deleting anything.
* Clicking the task **State** shows the logs for that replication task.
{{< /expand >}}

### Quick Local Backups with the Replication Wizard

TrueNAS provides a wizard for quickly configuring different simple replication scenarios.

![TasksReplicationTasksAdd](/images/CORE/12.0/TasksReplicationTasksAdd.png "New Replication Task")

While we recommend regularly scheduled replications to a remote location as the optimal backup scenario, the wizard can very quickly create and copy ZFS snapshots to another location on the same system.
This is useful when no remote backup locations are available, or when a disk is in immediate danger of failure.

The only thing you need before creating a quick local replication are datasets or zvols in a storage pool to use as the replication source and (preferably) a second storage pool to use for storing replicated snapshots.
You can set up the local replication entirely in the **Replication Wizard**.

To open the **Replication Wizard**, go to **Data Protection > Replication Tasks** and click **ADD**.
Set the source location to the local system and pick which datasets to snapshot.
The wizard takes new snapshots of the sources when no existing source snapshots are found.  
Enabling **Recursive** replicates all snapshots contained within the selected source dataset snapshots.
Local sources can also use a naming schema to identify any custom snapshots to include in the replication.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.

![TasksReplicationTasksAddLocalSourceSCALE](/images/SCALE/RepWizardLocalSourceSCALE.png "Replication with Local Source")

Set the destination to the local system and define the path to the storage location for replicated snapshots.
When manually defining the destination, be sure to type the full path to the destination location.

![TasksReplicationTasksAddLocalDestSCALE](/images/SCALE/RepWizardLocalDestSCALE.png "Local Destination")

TrueNAS suggests a default name for the task based on the selected source and destination locations, but you can type your own name for the replication.
You can load any saved replication task into the wizard to make creating new replication schedules even easier.

You can define a specific schedule for this replication or choose to run it immediately after saving the new task.
Unscheduled tasks are saved in the replication task list and you can run saved tasks manually or edit later to add a schedule.

The destination lifetime is how long copied snapshots are stored in the destination before they are deleted.
We usually recommend defining a snapshot lifetime to prevent storage issues.
Choosing to keep snapshots indefinitely can require you to manually clean old snapshots from the system if or when the destination fills to capacity.

![TasksReplicationTasksAddLocalSourceLocalDestCustomLife](/images/CORE/12.0/TasksReplicationTasksAddLocalSourceLocalDestCustomLife.png "Custom Lifetime")

Clicking **START REPLICATION** saves the new task and immediately attempts to replicate snapshots to the destination.
When TrueNAS detects that the destination already has unrelated snapshots, it asks to delete the unrelated snapshots and do a full copy of the new snapshots.
This can delete important data, so be sure any existing snapshots can be deleted or are backed up in another location.

The simple replication is added to the replication task list and shows that it is currently running.
Clicking the task state shows the replication log with an option to download the log to your local system.

![TasksReplicationTasksLogSCALE](/images/SCALE/RepLogSCALE.png "Replication Log")

To confirm that snapshots are replicated, go to **Storage > Snapshots >Snapshots** and verify the destination dataset has new snapshots with correct timestamps.

![TasksReplicationTasksLocalSnapshotsSCALE](/images/SCALE/RepLocalSnaphots.png "Local Replicated Snapshots")

{{< taglist tag="scalereplication" limit="10" >}}