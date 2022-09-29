---
title: "Setting Up Advanced Replication Tasks"
description: "This article provides instruction on using the advanced replication task creation screen to add a replication task."
weight: 30
aliases:
tags:
 - scalereplication
 - scalebackup
---

{{< toc >}}


## Advanced Replication

Requirements:
* Storage pools with datasets and data to snapshot.
* SSH configured with a connection to the remote system saved in **Credentials > Backup Credentials > SSH Connections**.
* Dataset snapshot task saved in **Data Protection > Periodic Snapshot Tasks**.

### Process Summary

{{< expand "Process Summary" "v" >}}
Go to **Data Protection > Replication Tasks** and click **ADD**, then select **ADVANCED REPLICATION CREATION**.

* General Options:
  * Name the task.
  * Select **Push** or **Pull** for the local system.
  * Select a replication transport method.
    * SSH is recommended.
    * SSH+Netcat is used for secured networks.
    * Local is for in-system replication.
* Configure the replication transport method:
  * Remote options require a preconfigured SSH connection.
  * SSH+Netcat requires defining netcat ports and addresses.
* Sources:
  * Select sources for replication.
  * Choose a preconfigured periodic snapshot task as the source of snapshots to replicate.
  * Remote sources require defining a snapshot naming schema.
* Destination:
  * Remote destination requires an SSH connection.
  * Select a destination or type a path in the field.
  * Define how long to keep snapshots in the destination.
* Scheduling:
  * Run automatically starts the replication after a related periodic snapshot task completes.
  * To automate the task according to its own schedule, set the *schedule* option and define a schedule for the replication task.
{{< /expand >}}

To use the advanced editor to create a replication task, go to **Data Protection > Replication Tasks**, click **ADD** to open the wizard, then click the **ADVANCED REPLICATION CREATION** button.

Options are grouped together by category.
Options can appear, disappear, or be disabled depending on the configuration choices you make.
Start by configuring the **General** options first, then the **Transport** options before configuring replication **Source**,  **Destination**, and **Replication Schedule**.

![SCALEReplicationAdvancedGen](/images/SCALE/SCALEAdvRepGeneral.png "Advance Replication: General")

Type a name for the task in **Name**.
Each task name must be unique, and we recommend you name it in a way that makes it easy to remember what the task is doing.

**Direction** allows you to choose whether the local system is sending (**Push**) or receiving data (**Pull**).

Decide what **Transport** method (**SSH**, **SSH+NETCAT**, or **LOCAL**) to use for the replication before configuring the other sections.

Set the **Number of retries for failed replications** before stopping and marking the task as failed (the default is 5).

Use the **Logging Level** to set the message verbosity level in the replication task log. 

To ensure the replication task is active check the **Enabled** box.

### Transport Options

{{< expand "Transport Options" "v" >}}
The **Transport** selector determines the method to use for the replication:
**SSH** is the standard option for sending or receiving data from a remote system, but **SSH+NETCAT** is available as a faster option for replications that take place within completely secure networks.
**Local** is only used for replicating data to another location on the same system.

With SSH-based replications, configure the transport method by selecting the **SSH Connection** to the remote system that sends or receives snapshots.
Options for compressing data, adding a bandwidth limit, or other data stream customizations are available. **Stream Compression** options are only available when using SSH. Before enabling **Compressed WRITE Records**, verify that the destination system also supports compressed WRITE records. 

![SCALEReplicationAvancedTransportOptions](/images/SCALE/SCALEAdvRepTransport.png "Advanced Replication: Transport")

For SSH+NETCAT replications, you must define the addresses and ports to use for the Netcat connection.

{{< hint warning >}}
**Allow Blocks Larger than 128KB** is a one-way toggle.
Replication tasks using large block replication only continues to work as long as this option remains enabled.
{{< /hint >}}
{{< /expand >}}

### Configure the Source

{{< expand "Source" "v" >}}
The replication **Source** is the datasets or zvols to use for replication.
Select the sources to use for this replication task by opening the file browser or entering dataset names in the field.
Pulling snapshots from a remote source requires a valid **SSH Connection** before the file browser can show any directories.

If the file browser shows a connection error after selecting the correct **SSH Connection**, you might need to log in to the remote system and make sure it is configured to allow SSH connections.

In TrueNAS, do this by going to the **System Settings > Services** screen, checking the **SSH** service configuration, and starting the service.

![SCALEReplicationAdvancedSourceOptions](/images/SCALE/SCALEAdvRepSource.png "Advanced Replication: Source")

By default, the replication task uses snapshots to quickly transfer data to the receiving system.
When **Full Filesystem Replication** is set, the chosen **Source** is completely replicated, including all dataset properties, snapshots, child datasets, and clones. When choosing this option, it is recommended to allocate additional time for the replication task to run.

Leaving **Full Filesystem Replication** unset but setting **Include Dataset Properties** includes just the dataset properties in the snapshots to be replicated.

Checking the **Recursive** check box allows you to recursively replicate child dataset snapshots or exclude specific child datasets or properties from the replication.

Enter new defined properties in the **Properties Override** field to replace existing dataset properties with the newly defined properties in the replicated files.

List any existing dataset properties to remove from the replicated files in the **Properties Exclude** field.

Local sources are replicated by snapshots that were generated from a periodic snapshot task and/or from a defined naming schema that matches manually created snapshots.

Select a previously configured periodic snapshot task for this replication task in **Periodic Snapshot Tasks** drop down list. The replication task selected must have the same vales in **Recursive** and **Exclude Child Datasets** as the chosen periodic snapshot task. Selecting a periodic snapshot schedule removes the **Schedule** field.

To define specific snapshots from the periodic task to use for the replication, set **Replicate Specific Snapshots** and enter a schedule.
The only periodically generated snapshots included in the replication task are those that match your defined schedule.

Remote sources require entering a snapshot naming schema to identify the snapshots to replicate.
A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name.
For example, entering the naming schema `custom-%Y-%m-%d_%H-%M` finds and replicates snapshots like `custom-2020-03-25_09-15`.
Multiple schemas can be entered by pressing <kbd>Enter</kbd> to separate each schema.

Alternately, you can use your **Replication Schedule** to determine which snapshots are replicated by setting **Run Automatically**, **Only Replicate Snapshots Matching Schedule**, and defining when the replication task runs.

When a replication task is having difficulty completing, it is a good idea to set **Save Pending Snapshots**.
This prevents the source TrueNAS from automatically deleting any snapshots that failg to replicate to the destination system.
{{< /expand >}}

### Set up the Destination

{{< expand "Destination" "v" >}}
Use **Destination** to specify where replicated data is stored.
Choosing a remote destination requires an *[SSH Connection]({{< relref "/content/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}) to that system.
Expanding the file browser shows the current datasets that are available on the destination system.
You can click a destination or manually type a path in the field.
Adding a name to the end of the path creates a new dataset in that location.

{{< hint warning >}}
*DO NOT* use zvols for a remote destination
{{< /hint >}}

![SCALEReplicationAddAdvancedDestination](/images/SCALE/SCALEAdvRepDestination.png "Advanced Replication: Destination")

By default, the destination dataset is set to be read-only* after the replication is complete.
You can change the **Destination Dataset Read-only Policy** to only start replication when the destination is read-only (**REQUIRE**) or to disable checking the dataset's read-only state (**IGNORE**).

The **Encryption** checkbox adds another layer of security to replicated data by encrypting the data before transfer and decrypting it on the destination system.
* Setting the checkbox adds more options to choose between using a **HEX** key or defining your own encryption **PASSPHRASE**.
* You can store the encryption key either in the TrueNAS system database or in a custom-defined location.

{{< hint warning >}}
**Synchronizing Destination Snapshots With Source** *destroys* any snapshots in the destination that do not match the source snapshots.
TrueNAS also does a full replication of the source snapshots as if the replication task had never been run before, which can lead to excessive bandwidth consumption.

This can be a very destructive option. Make sure that any snapshots deleted from the destination are obsolete or otherwise backed up in a different location.
{{< /hint >}}

Defining the **Snapshot Retention Policy** is generally recommended to prevent cluttering the system with obsolete snapshots.
Choosing **Same as Source** keeps the snapshots on the destination system for the same amount of time as the defined **Snapshot Lifetime** from the source system periodic snapshot task.

You can use **Custom** to define your own lifetime for snapshots on the destination system.
{{< /expand >}}

### Schedule the Task

{{< expand "Schedule" "v" >}}
By default, setting the task to **Run Automatically** starts the replication immediately after the related periodic snapshot task is complete.

Setting the **Schedule** checkbox allows scheduling the replication to run at a separate time.
* Defining a specific time for the replication task to run is a must-do.
* Choose a time frame that both gives the replication task enough time to finish and is during a time of day when network traffic for both source and destination systems is minimal.
* Use the custom scheduler (recommended) when you need to fine-tune an exact time or day for the replication.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Setting **Only Replicate Snapshots Matching Schedule** restricts the replication to only replicate those snapshots created at the same time as the replication schedule.

![SCALEReplicationAdvancedScheduleOptions](/images/SCALE/SCALEAdvSchedule.png "Advanced Replication: Schedule")

{{< /expand >}}

{{< taglist tag="scalereplication" limit="10" >}}