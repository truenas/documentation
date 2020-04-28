---
title: "Local"
linkTitle: "Local"
description: "How to use the TrueNAS Wizard to quickly back up new snapshots within the local system"
weight: 1
---

{{% pageinfo version="FreeNAS 11.3" %}}
{{% /pageinfo %}}

## Process Summary

* Requirements: Storage pools and datasets created in **Storage > Pools**.

* **Tasks > Replication Tasks > ADD**
  * Choose Sources
    * Set the source location to the local system
    * Use the file browser or type paths to the sources
  * Define a Destination path
    * Set the destination location to the local system
  	* Select or manually define a path to the single destination location for the snapshot copies.
  * Set the Replication schedule to run a single time
  * Define how long the snapshots will be stored in the Destination
  * Clicking "START REPLICATION" immediately snapshots the chosen Sources and copies those snapshots to the Destination
    * Dialog might ask to delete existing snapshots from the Destination. Be sure that all important important data is protected before deleting anything.
* Clicking the task *State* shows the logs for that replication task.

## Quick Backups with the Replication Wizard

TrueNAS provides a wizard that is useful to quickly configure different simple replication scenarios.

<img src="/images/replication-wizard-empty.png">
<br><br>

While regularly scheduled replications to a remote location are recommended as the optimal backup scenario, the wizard can be used to very quickly create and copy ZFS snapshots to another location on the same system.
This is useful when no remote backup locations are available or when there is an immediate danger of disk failure.

The only thing you'll need before creating a quick local replication are datasets or zvols in a storage pool to use as the replication source and (preferably) a second storage pool to use for storing replicated snapshots.
Setting up the local replication is done entirely in the Replication Wizard.

To open the Replication Wizard, go to **Tasks > Replication Tasks** and click **ADD**.
Set the source location to the local system and pick which datasets to snapshot.
The wizard takes new snapshots of the sources when no existing source snapshots are found.

<img src="/images/replication-sources.png">
<br><br>

Set the destination to the local system and define the path to the storage location for replicated snapshots.
When manually defining the destination, be sure to type the full path to the destination location.

<img src="/images/replication-destination.png">
<br><br>

TrueNAS suggests a default name for the task based on the selected source and destination locations, but you can type your own name for the replication.
Every saved replication task can be loaded into the wizard to make creating new replication schedules even easier.

You can define a specific schedule for this replication or choose to run it immediately after saving the new task.
Unscheduled tasks are still saved in the replication task list and can be run manually or edited later to add a schedule.

The destination lifetime is how long copied snapshots are stored in the destination before they are deleted.
It is usually recommended to define a snapshot lifetime to prevent storage issues.
Choosing to keep snapshots indefinitely can require you to manually clean old snapshots from the system if or when the destination fills to capacity.

<img src="/images/replication-custom-snaplifetime.png">
<br><br>

Clicking **START REPLICATION** saves the new task and immediately attempts to replicate snapshots to the destination.
When TrueNAS detects that the destination already has unrelated snapshots, it will ask to delete the unrelated snapshots and do a full copy of the new snapshots.
This can delete important data, so be sure any existing snapshots can be deleted or are backed up in another location.

The simple replication is added to the Replication task list and will show that it is currently running.
Clicking the task state shows the replication log with an option to download the log to your local system.

<img src="/images/replication-tasklog.png">
<br><br>

To confirm that snapshots have been replicated, go to **Storage > Snapshots** and verify the destination Dataset has new Snapshots with correct timestamps.

<img src="/images/replication-newsnapshots.png">
