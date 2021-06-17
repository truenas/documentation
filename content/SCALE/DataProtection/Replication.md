---
title: "Replication"
weight: 100
---

## Remote Replication


{{< toc >}}

Configure SSH in TrueNAS before creating a remote replication task. This ensures that both systems can connect to each other and new snapshots are regularly available for replication.

To streamline creating simple replication configurations, the replication wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

{{< expand "Process Summary" "v" >}}
## Process Summary

* **Tasks > Replication Tasks**
  * Choose sources for snapshot replication.
    * Remote sources require an SSH connection.
    * TrueNAS shows how many snapshots will be replicated.
  * Define the snapshot destination.
    * A remote destination requires an SSH connection.
    * Choose destination or define manually by typing a path.
      * Adding a new name on the end of the path creates a new dataset.
  * Choose replication security.
    * We always recommend Replication with encryption.
    * Disabling encryption is only meant for absolutely secure networks.
  * Schedule the replication.
    * Schedule can be standardized presets or a custom defined schedule.
    * Running once runs the replication immediately after creation.
      * Task is still saved and can be rerun or edited.
  * Choose how long to keep the replicated snapshots.
{{< /expand >}}

## Creating a Remote Replication Task

To create a new replication, go to **Tasks > Replication Tasks** and click *ADD*.

![TasksReplicationTasksAdd](/images/CORE/12.0/TasksReplicationTasksAdd.png "Add new Replication Task")

You can load any saved replication to prepopulate the wizard with that configuration.
Saving changes to the configuration creates a new replication task without altering the task that was loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

{{< tabs "Replication Task Steps" >}}
{{< tab "Sources" >}}
Start by configuring the replication sources.
Sources are the datasets or zvols with snapshots to use for replication.
Choosing a remote source requires selecting an SSH connection to that system.
Expanding the directory browser shows the current datasets or zvols that are available for replication.
You can select multiple sources or manually type the names into the field.

TrueNAS shows how many snapshots are available for replication.
We recommend you manually snapshot the sources or create a periodic snapshot task *before* creating the replication task.
However, when the sources are on the local system and don't have any existing snapshots, TrueNAS can create a basic periodic snapshot task and snapshot the sources immediately before starting the replication. Enabling *Recursive* replicates all snapshots contained within the selected source dataset snapshots.

![TasksReplicationTasksAddRemoteSource](/images/CORE/12.0/TasksReplicationTasksAddRemoteSource.png "Choosing a Remote Source")

Remote sources require entering a *snapshot naming schema* to identify the snapshots to replicate.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.

Local sources can also use a naming schema to identify any custom snapshots to include in the replication.
{{< /tab >}}
{{< tab "Destination" >}}
The destination is where replicated snapshots are stored.
Choosing a remote destination requires an SSH connection to that system.
Expanding the directory browser shows the current datasets that are available for replication.
You can select a destination dataset or manually type a path in the field.
Zvols cannot be used as a remote replication destination.
Adding a name to the end of the path creates a new dataset in that location.

![TasksReplicationTasksAddRemoteDest](/images/CORE/12.0/TasksReplicationTasksAddRemoteDest.png "Replication with Remote Destination")
{{< /tab >}}
{{< tab "Security and Task Name" >}}
{{< hint info >}}
Using encryption for SSH transfer security is always recommended.
{{< /hint >}}

In situations where two systems within an absolutely secure network are used for replication, disabling encryption speeds up the transfer.
However, the data is completely unprotected from malicious sources.

Choosing no encryption for the task is the same as choosing the *SSH+NETCAT* transport method from the advanced options screen.
NETCAT uses common port settings, but these can be overriden by switching to the advanced options screen or editing the task after creation.

TrueNAS suggests a name based off the selected sources and destination, but this can be overwritten with a custom name.
{{< /tab >}}
{{< tab "Schedule and Lifetime" >}}
Adding a schedule automates the task to run according to your chosen times.
You can choose between a number of preset schedules or create a custom schedule for when the replication will run.
Choosing to run the replication once will run the replication immediately after saving the task, but any additional replications must be triggered manually.

Finally, define how long you want to keep snapshots on the destination system.
We generally recommend defining snapshot lifetime to prevent cluttering the system with obsolete snapshots.

![TasksReplicationTasksAddLocalSourceLocalDestCustomLife](/images/CORE/12.0/TasksReplicationTasksAddLocalSourceLocalDestCustomLife.png "Custom Lifetimes")
{{< /tab >}}
{{< tab "Starting the Replication" >}}
*Start Replication* saves the new replication task.
New tasks are enabled by default and activate according to their schedule or immediately when no schedule was chosen.
The first time a replication task runs, it takes longer because the snapshots must be copied entirely fresh to the destination.
Later replications run faster, as only the subsequent changes to snapshots are replicated.
Clicking the task state opens the log for that task.

![TasksReplicationTasksRemoteLogs](/images/CORE/12.0/TasksReplicationTasksRemoteLogs.png "Remote Replication Log")
{{< /tab >}}
{{< /tabs >}}

## Local Replication

{{< expand "Process Summary" "v" >}}
## Process Summary

* Requirements: Storage pools and datasets created in **Storage > Pools**.

* Go to **Tasks > Replication Tasks** and click *ADD*
  * Choose Sources
    * Set the source location to the local system
    * Use the file browser or type paths to the sources
  * Define a Destination path
    * Set the destination location to the local system
  	 * Select or manually define a path to the single destination location for the snapshot copies.
  * Set the Replication schedule to run once
  * Define how long the snapshots will be stored in the Destination
  * Clicking *START REPLICATION* immediately snapshots the chosen Sources and copies those snapshots to the Destination
    * Dialog might ask to delete existing snapshots from the Destination. Be sure that all important important data is protected before deleting anything.
* Clicking the task *State* shows the logs for that replication task.
{{< /expand >}}

## Quick Backups with the Replication Wizard

TrueNAS provides a wizard for quickly configuring different simple replication scenarios.

![TasksReplicationTasksAdd](/images/CORE/12.0/TasksReplicationTasksAdd.png "New Replication Task")

While we recommend regularly scheduled replications to a remote location as the optimal backup scenario, the wizard can very quickly create and copy ZFS snapshots to another location on the same system.
This is useful when no remote backup locations are available, or when a disk is in immediate danger of failure.

The only thing you'll need before creating a quick local replication are datasets or zvols in a storage pool to use as the replication source and (preferably) a second storage pool to use for storing replicated snapshots.
You can set up the local replication entirely in the Replication Wizard.

To open the Replication Wizard, go to **Tasks > Replication Tasks** and click *ADD*.
Set the source location to the local system and pick which datasets to snapshot.
The wizard takes new snapshots of the sources when no existing source snapshots are found.  
Enabling *Recursive* replicates all snapshots contained within the selected source dataset snapshots.
Local sources can also use a naming schema to identify any custom snapshots to include in the replication.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.

![TasksReplicationTasksAddLocalSource](/images/CORE/12.0/TasksReplicationTasksAddLocalSource.png "Replication with Local Source")

Set the destination to the local system and define the path to the storage location for replicated snapshots.
When manually defining the destination, be sure to type the full path to the destination location.

![TasksReplicationTasksAddLocalSourceLocalDest](/images/CORE/12.0/TasksReplicationTasksAddLocalSourceLocalDest.png "Local Source and Destination")

TrueNAS suggests a default name for the task based on the selected source and destination locations, but you can type your own name for the replication.
You can load any saved replication task into the wizard to make creating new replication schedules even easier.

You can define a specific schedule for this replication or choose to run it immediately after saving the new task.
Unscheduled tasks are still saved in the replication task list and can be run manually or edited later to add a schedule.

The destination lifetime is how long copied snapshots are stored in the destination before they are deleted.
We usually recommend defining a snapshot lifetime to prevent storage issues.
Choosing to keep snapshots indefinitely can require you to manually clean old snapshots from the system if or when the destination fills to capacity.

![TasksReplicationTasksAddLocalSourceLocalDestCustomLife](/images/CORE/12.0/TasksReplicationTasksAddLocalSourceLocalDestCustomLife.png "Custom Lifetime")

Clicking *START REPLICATION* saves the new task and immediately attempts to replicate snapshots to the destination.
When TrueNAS detects that the destination already has unrelated snapshots, it will ask to delete the unrelated snapshots and do a full copy of the new snapshots.
This can delete important data, so be sure any existing snapshots can be deleted or are backed up in another location.

The simple replication is added to the Replication task list and will show that it is currently running.
Clicking the task state shows the replication log with an option to download the log to your local system.

![TasksReplicationTasksLocalLogs](/images/CORE/12.0/TasksReplicationTasksLocalLogs.png "Local Replication Log")

To confirm that snapshots have been replicated, go to **Storage > Snapshots** and verify the destination dataset has new snapshots with correct timestamps.

![TasksReplicationTasksLocalSnapshots](/images/CORE/12.0/TasksReplicationTasksLocalSnapshots.png "Finding Replicated Snapshots")
