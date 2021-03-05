---
title: "Remote"
weight: 20
---

{{< toc >}}

Configure [SSH](/CORE/System/SSH/) and [automatic dataset snapshots](/CORE/Tasks/PeriodicSnapshotTasks/) in TrueNAS before creating a remote replication task.
This ensures that both systems can connect to each other and new snapshots are regularly available for replication.

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
    * Replication with encryption is always recommended.
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
It is recommended to manually snapshot the sources or create a periodic snapshot task *before* creating the replication task.
However, when the sources are on the local system and don't have any existing snapshots, TrueNAS can create a basic periodic snapshot task and snapshot the sources immediately before starting the replication. Enabling *Recusrive* replicates all snapshots contained within the selected source dataset snapshots.

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
Defining a snapshot lifetime is generally recommended to prevent cluttering the system with obsolete snapshots.

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
