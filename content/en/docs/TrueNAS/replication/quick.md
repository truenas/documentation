---
title: "Quick Local Replication"
linkTitle: "Quick"
description: "How to use the TrueNAS Wizard to quickly back up new snapshots within the local system"
weight: 1
---

# Process Summary

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
* Clicking the task "State" shows the logs for that replication task.

# Quick Backups with the Replication Wizard

TrueNAS provides a wizard that is useful to quickly configure different simple replication scenarios.

<img src="/images/replication-wizard-blank.png">

While regularly scheduled replications to a remote location are recommended as the optimal backup scenario, the wizard can be used to very quickly create and copy ZFS snapshots to another location on the same system.
This is useful when no remote backup locations are available or when there is an immediate danger of disk failure.

Creating a quick local replication is done in several simple steps.

To open the Replication Wizard, go to **Tasks > Replication Tasks** and click **ADD**.
Set the source location to the local system and pick which datasets to snapshot. The wizard will take fresh snapshots of the sources when no snapshots are found.

{{< figure src="/media/spf13.jpg" title="Steve Francia" >}}

Set the destination to the local system and define the path to the copied snapshot storage location. When manually defining the destination, type the full path to the destination location.

{{< figure src="/media/spf13.jpg" title="Steve Francia" >}}

TrueNAS suggests a default name for the task based on the selected source and destination locations, but you can write in your own name for this task.
Every saved replication task can be reopened in the wizard to make creating new replicaton schedules even easier.

You can define a specific schedule for this replication or choose to run it immediately after saving the new task.
Unscheduled tasks are still saved in the replication task list and can be run manually or edited later to add a schedule.

The destination lifetime is how long copied snapshots will be stored in the destination before they are deleted.
It is usually recommended to define a snapshot lifetime to prevent storage issues. Choosing to keep snapshots indefinitely can require you to manually clean old snapshots from the system if or when the destination fills to capacity.

{{< figure src="/media/spf13.jpg" title="Steve Francia" >}}

Clicking **START REPLICATION** saves the new task and immediately attempts to replicate snapshots to the destination.
When TrueNAS detects that the destination already has unrelated snapshots, it will ask to delete the unrelated snapshots and do a full copy of the new snapshots.
This can delete important data, so be sure any existing snapshots can be deleted or are backed up in another location.

The simple replication is added to the Replication task list and will show that it is currently running.
Clicking the task state shows the replication log with an option to download the log to your local system.

{{< figure src="/media/spf13.jpg" title="Steve Francia" >}}

To confirm that snapshots have been replicated, go to **Storage > Snapshots** and verify the destination Dataset has new Snapshots with correct timestamps.

{{< figure src="/media/spf13.jpg" title="Steve Francia" >}}