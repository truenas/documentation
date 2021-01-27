---
title: "Advanced Replication"
linkTitle: "Advanced"
description: "How to create an advanced replication task."
weight: 3
tags: ["ZFS", "SSH"]
---

Requirements:
* Storage pools with datasets and data to snapshot.
* SSH configured with a connection to the remote system saved in **System > SSH Connections**.
* Dataset snapshot task saved in **Tasks > Periodic Snapshot Tasks**.

## Process Summary

Go to **Tasks > Replication Tasks > ADD** and select **ADVANCED REPLICATION CREATION**.

* General Options:
  * Name the task.
  * Select Push or Pull for the local system.
  * Select a replication transport method.
    * SSH is recommended.
    * SSH+Netcat is used for secured networks.
    * Local is for in-system replication.
* Configure the replication transport method:
  * Remote options require an SSH connection.
  * SSH+Netcat requires defining netcat ports and addresses.
* Sources:
  * Select sources for replication.
  * Choose a periodic snapshot task as the source of snapshots to replicate.
  * Remote sources require defining a snapshot naming schema.
* Destination:
  * Remote destination requires an SSH connection.
  * Select a destination or type a path in the field.
  * Define how long to keep snapshots in the destination.
* Scheduling:
  * Run automatically starts the replication after a related periodic snapshot task completes.
  * To automate the task according to its own schedule, set that option and define a schedule for the replication task.

## Creating an Advanced Replication Task

To use the advanced editor to create a replication task, go to **Tasks > Replication Tasks**, click **ADD** to open the Wizard, and click **ADVANCED REPLICATION CREATION**.

<img src="/images/ReplicationAdvanced.png">
<br><br>

Options are grouped together by category.
Options can appear, disappear, or be disabled depending on the configuration choices you make.
Start by configuring the *General* options first, then the *Transport* options before configuring replication *Sources* and *Destination*.

Name the task.
Each task name must be different from each other, and it is recommended to name it in a way that makes it easy to remember what the task is doing.

Choose whether the local system is sending (*Push*) or receiving data (*Pull*) and decide what **Transport** method to use for the replication.

### Transport Options

The **Transport** selector determines the method to use for the replication.
*SSH* is the standard option for sending or receiving data from a remote system, but *SSH+NETCAT* is available as a faster option for replications that take place within completely secure networks.
*Local* is only used for replicating data to another location on the same system.

With *SSH*-based replications, configure the transport method by selecting the **SSH Connection** to the remote system that will send or receive snapshots.
Options for compressing data, adding a bandwidth limit, or other data stream customizations are available.

<img src="/images/ReplicationAdvancedTransportOptions.png">
<br><br>

For *SSH+NETCAT* replications, you also need to define the addresses and ports to use for the Netcat connection.

{{% alert title="Warning" color="warning" %}}
**Allow Blocks Larger than 128KB** is a one-way toggle.
Replication tasks using large block replication will only continue to work as long as this option remains enabled.
{{% /alert %}}

### Source

The replication *Source* is the datasets or zvols to use for replication.
Select the sources to use for this replication task by opening the file browser or entering dataset names in the field.
Pulling snapshots from a remote source requires a valid **SSH Connection** before the file browser can show any directories.
If the file browser shows a connection error after selecting the correct **SSH Connection**, you might need to log in to the remote system and make sure it is configured to allow SSH connections.
In TrueNAS, this is done by going to the **Services** screen, checking the **SSH** service configuration, and starting the service.

<img src="/images/ReplicationAdvancedSource.png">
<br><br>

By default, the replication task will use snapshots to quickly transfer data to the receiving system.
When **Full Filesystem Replication** is set, the chosen **Source** is completely replicated, including all dataset properties, snapshots, child datasets, and clones.
When choosing this option, it is recommended to allocate additional time for the replication task to run.
Leaving **Full Filesystem Replication** unset but setting **Include Dataset Properties** will include just the dataset properties in the snapshots to be replicated.
Additional options allow you to recursively replicate child dataset snapshots or exclude specific child datasets or properties from the replication.

Local sources are replicated by snapshots that were generated from a periodic snapshot task and/or from a defined naming schema that matches manually created snapshots.
Remote sources require entering a snapshot naming schema to identify the snapshots to replicate.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.
For example, entering the naming schema `custom-%Y%m%d_%H:%M` finds and replicates snapshots like `custom-20200325_09:15`.
Multiple schemas can be entered by pressing <kbd>Enter</kbd> to separate each schema.

To define specific snapshots from the periodic task to use for the replication, set **Replicate Specific Snapshots** and enter a schedule.
The only periodically generated snapshots that will be included in the replication task are those that match your defined schedule.
Alternately, you can use your *Replication Schedule* to determine which snapshots are replicated by setting **Run Automatically**, **Only Replicate Snapshots Matching Schedule**, and defining when the replication task will run.

When a replication task is having difficulty completing, it is a good idea to set **Save Pending Snapshots**.
This will prevent the source TrueNAS from automatically deleting any snapshots that are failing to replicate to the destination system.

### Destination

The destination is where replicated data is stored.
Choosing a remote destination requires an **SSH Connection** to that system.
Expanding the file browser shows the current datasets or zvols that are available on the destination system.
You can click a destination or manually type a path in the field.
Adding a name to the end of the path creates a new dataset in that location.

<img src="/images/ReplicationAdvancedDestination.png">
<br><br>

By default, the destination dataset is *SET* to be **read-only** after the replication is complete.
You can change the **Destination Dataset Read-only Policy** to only start replication when the destination is read-only (*REQUIRE*) or to disable checking the dataset's read-only state (*IGNORE*).

**Encryption** adds another layer of security to replicated data by encrypting the data before transfer and decrypting it on the destination system.
Setting the checkbox adds more options to choose between using a *HEX* key or defining your own encryption *PASSPHRASE*.
The encryption key can be stored either in the TrueNAS system database or in a custom-defined location.

{{% alert title="Warning" color="warning" %}}
**Synchronizing Destination Snapshots With Source** **destroys** any snapshots in the destination that do not match the source snapshots.
TrueNAS also does a full replication of the source snapshots as if the replication task had never been run before, which can lead to excessive bandwidth consumption.
This can be a very destructive option, so be sure that any snapshots that will be deleted from the destination are obsolete or otherwise backed up in a different location.
{{% /alert %}}

Defining the **Snapshot Retention Policy** is generally recommended to prevent cluttering the system with obsolete snapshots.
Choosing *Same as Source* will keep the snapshots on the destination system for the same amount of time as the defined **Snapshot Lifetime** from the source system periodic snapshot task.
You can also define your own *Custom* lifetime for snapshots on the destination system.

### Schedule

By default, setting the task to **Run Automatically** will start the replication immediately after the related periodic snapshot task is complete.
Setting the **Schedule** checkbox allows scheduling the replication to run at a separate time.
You will need to define a specific time for the replication task to run.
It is recommended to choose a time frame that both gives the replication task enough time to finish and is during a time of day when network traffic for both source and destination systems is minimal.
Using the custom scheduler is recommended when you need to fine-tune an exact time or day for the replication.

Setting **Only Replicate Snapshots Matching Schedule** restricts the replication to only replicate those snapshots created at the same time as the replication schedule.

<img src="/images/ReplicationAdvancedSchedule.png">
<br><br>
