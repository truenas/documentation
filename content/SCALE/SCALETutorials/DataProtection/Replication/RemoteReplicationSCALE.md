---
title: "Setting Up a Remote Replication Task"
description: "This article provides instructions on adding a replication task with a remote system (TrueNAS or other)."
weight: 60
aliases:
tags:
 - scalereplication
 - scalebackup
---

{{< toc >}}


## Creating a Remote Replication Task

To create a new replication, go to **Data Protection > Replication Tasks** and click **ADD**.

![TasksReplicationTasksAddSCALE](/images/SCALE/RepWhatWhereSCALE.png "Add new Replication Task")

You can load any saved replication to prepopulate the wizard with that configuration.
Saving changes to the configuration creates a new replication task without altering the task you loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

### Set up the Sources

{{< expand "Source" "v" >}}
Start by configuring the replication sources.
Sources are the datasets or zvols with snapshots to use for replication.
Choosing a remote source requires selecting an SSH connection to that system.
Expanding the directory browser shows the current datasets or zvols that are available for replication.
You can select multiple sources or manually type the names into the field.

TrueNAS shows how many snapshots are available for replication.
We recommend you manually snapshot the sources or create a periodic snapshot task *before* creating the replication task.
However, when the sources are on the local system and don't have any existing snapshots, TrueNAS can create a basic periodic snapshot task and snapshot the sources immediately before starting the replication. Enabling **Recursive** replicates all snapshots contained within the selected source dataset snapshots.

![TasksReplicationTasksAddSourceSCALE](/images/SCALE/RepAddSourceSCALE.png "Choosing a Local Source")

Local sources can also use a naming schema to identify any custom snapshots to include in the replication.
Remote sources require entering a *snapshot naming schema* to identify the snapshots to replicate.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.
{{< /expand >}}

### Configure the Destination

{{< expand "Destination" "v" >}}
The destination is where replicated snapshots are stored.
Choosing a remote destination requires an SSH connection to that system.
Expanding the directory browser shows the current datasets that are available for replication.
You can select a destination dataset or manually type a path in the field.
You cannot use zvols as a remote replication destination.
Adding a name to the end of the path creates a new dataset in that location.

![TasksReplicationTasksAddRemoteDestSCALE](/images/SCALE/RepAddDestinationSCALE.png "Replication with Remote Destination")

{{< hint info >}}
To use encryption when replicating data click the **Encryption** box. After selecting the box these additional encryption options  become available:

* **Encryption Key Format** allows the user to choose between a hex (base 16 numeral) or passphrase (alphanumeric) style encryption key. <br>
* **Store Encryption key in Sending TrueNAS database** allows the user to either store the encryption key in the sending TrueNAS database (box checked) or choose a temporary location for the encryption key that decrypts replicated data (box unchecked)
{{< /hint >}}

{{< /expand >}}

### Security and Task Name

{{< expand "Security and Task Name" "v" >}}
{{< hint info >}}
Using encryption for SSH transfer security is always recommended.
{{< /hint >}}

In situations where two systems within an absolutely secure network are used for replication, disabling encryption speeds up the transfer.
However, the data is completely unprotected from eavesdropping.

Choosing **no encryption** for the task is less secure but faster. This method uses common port settings but these can be overridden by switching to the advanced options screen or editing the task after creation.

![TasksReplicationTaskSecuritySCALE](/images/SCALE/RepSecurityTaskSCALE.png "Replication Security and Task Name")

TrueNAS suggests a name based off the selected sources and destination, but this can be overwritten with a custom name.
{{< /expand >}}

### Define a Schedule and Snapshot Lifetime

{{< expand "Schedule and Lifetime" "v" >}}

Adding a schedule automates the task to run according to your chosen times.
You can choose between a number of preset schedules or create a custom schedule for when the replication runs.
Choosing to run the replication once runs the replication immediately after saving the task, but you must manually trigger any additional replications.

Finally, define how long you want to keep snapshots on the destination system.
We generally recommend defining snapshot lifetime to prevent cluttering the system with obsolete snapshots.

![TasksReplicationTasksScheduleLifeSCALE](/images/SCALE/RepScheduleSCALE.png "Custom Lifetimes")
{{< /expand >}}

### Starting the Replication

{{< expand "Starting the Replication" "v" >}}
**Start Replication*** saves the new replication task.
New tasks are enabled by default and activate according to their schedule or immediately when no schedule is chosen.
The first time a replication task runs, it takes longer because the snapshots must be copied entirely fresh to the destination.

![TasksReplicationTasksSuccessSCALE](/images/SCALE/RepSuccessSCALE.png "Remote Replication Success")

Later replications run faster, as only the subsequent changes to snapshots are replicated.
Clicking the task state opens the log for that task.

![TasksReplicationTasksLogSCALE](/images/SCALE/RepLogSCALE.png "Replication Log")

{{< /expand >}}

{{< taglist tag="scalereplication" limit="10" >}}