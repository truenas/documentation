---
title: "Advanced Replication"
linkTitle: "Advanced"
description: "How to create a replication task using the advanced options."
weight: 3
tags: ["ZFS", "SSH"]
---

Requirements:
* Storage pools with datasets and data to snapshot.
* SSH configured with a connection to the remote system saved in **System > SSH Connections**.
* Dataset snapshot task saved in **Tasks > Periodic Snapshot Tasks**.


## Process Summary

Go to **Tasks > Replication Tasks**, open the wizard, and select advanced replication

* General Options
  * Name the task
  * Select Push or Pull for the local system
  * Select a replication transport method
    * SSH is recommended
    * SSH+Netcat is used for secured networks
    * Local is for in-system replication
* Configure the replication transport method
  * Remote options require an SSH connection
  * SSH+Netcat requires defining netcat ports and addresses
* Sources
  * Select sources for replication
  * Choose a periodic snapshot task as the source of snapshots to replicate
  * Remote sources require defining a snapshot naming schema
* Destination
  * Remote destination requires an SSH connection
  * Select a destination or type a path in the field
  * Define how long to keep snapshots in the destination
* Scheduling
  * Run automatically starts the replication after a related periodic snapshot task completes
  * To automate the task according to its own schedule, set that option and define a schedule for the replication task

## Advanced Replication

To use the advanced editor to create a replication task, go to **Tasks > Replication Tasks**, then open the Wizard and select the advanced replication option.

<img src="/images/replication-advanced.png">
<br><br>

Options are grouped together by category.
Options can appear, disappear, or be disabled depending on the configuration choices you make.
It's best to start by configuring the general options first, then the transport options before configuring replication sources and destination.

Name the task. Choose whether the local system is sending or receiving snapshots, and decide what method to use for the replication.
Each replication task name needs to be unique.

### Transport Options

The transport selector determines the method to use for the replication.
*SSH* is the standard option for sending or receiving snapshots from a remote system, but *SSH+NETCAT* is available for replications that take place within completely secure networks.
*Local* is only used for replicating snapshots within the same system.

With remote replications, configure the transport method by selecting the SSH connection to the remote system that will send or receive snapshots.
Options for compressing data, adding a bandwidth limit, or other data stream customizations are available.

<img src="/images/replication-advanced-ssh.png">
<br><br>

For the *SSH+NETCAT* method, you also need to define the addresses and ports to use for the Netcat connection.

### Sources

Sources are the datasets or zvols with snapshots to use for replication.
Select the sources to use for this replication task by opening the file browser or entering dataset names in the field.
Pulling snapshots from a remote source requires a valid SSH connection before the source file browser can be opened.

By default, dataset properties are included in the snapshots that will be replicated.
Additional options allow you to recursively replicate child dataset snapshots, or do a full replication of the source filesystem.

Local sources are replicated by snapshots that were generated from a periodic snapshot task and/or from a defined naming schema that matches manually created snapshots.
Remote sources require entering a snapshot naming schema to identify the snapshots to replicate.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.
For example, entering the naming schema *custom-%Y%m%d_%H:%M* finds and replicates snapshots like *custom-20200325_09:15*.

To define which periodic snapshots to replicate, set the checkbox and enter a schedule. The only periodically generated snapshots that will be included in the replication task are those that match the schedule.
Alternately, you can use your replication task schedule to determine which snapshots are replicated by setting the option in replication scheduling to only replicate snapshots matching the schedule.

<img src="/images/replication-advanced-sources.png">
<br><br>

### Destination

The destination is where replicated snapshots are stored.
Choosing a remote destination requires an SSH connection to that system.
Expanding the directory browser shows the current datasets or zvols that are available for replication.
You can select a destination or manually type a path in the field.
Adding a name to the end of the path creates a new dataset in that location.

By default, the destination dataset is reset to be **read-only** after the replication is complete.
You can change the read-only policy to only start replication when the destination is read-only or to disable checking the dataset's read-only state.

{{% alert title="Warning" color="warning" %}}
Synchronizing the destination snapshots with the sources **destroys** any snapshots in the destination that do not match the source snapshots.
TrueNAS also does a full replication of the source snapshots, as if the replication task had never been run before.
This can be a very destructive option, so be sure that any snapshots that will be deleted from the destination are obsolete or otherwise backed up in a different location.
{{% /alert %}}


Defining a snapshot lifetime is generally recommended to prevent cluttering the system with obsolete snapshots.

<img src="/images/replication-advanced-destination.png">
<br><br>

### Schedule

Setting the task to run automatically starts the replication immediately after the related periodic snapshot task is complete.
Alternately, you can schedule the replication to run at a separate time by setting that option and defining a schedule with begin and end times for the task.
Using the custom scheduler is recommended when you need to fine-tune an exact time or day for the replication.

There is also an option to use this schedule instead of also defining a schedule of periodic snapshots to replicate.

<img src="/images/replication-advanced-schedule.png">
<br><br>

## Advanced Option Notes

The **Allow Blocks Larger than 128KB** option is a one-way toggle. Replication tasks using large block replication will only continue to work as long as this option remains enabled.


