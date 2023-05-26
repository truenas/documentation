---
title: "Setting Up Advanced Replication Tasks"
description: "Provides instruction on using the advanced replication task creation screen to add a replication task."
weight: 10
aliases:
 - /scale/scaletutorials/dataprotection/replication/useadvancedreplicationscale/
tags:
 - scalereplication
 - scalebackup
---

{{< toc >}}


## Using Advanced Replication

TrueNAS SCALE advanced replication allows users to create one-time or regularly scheduled snapshots of data stored in pools, datasets or zvols on their SCALE system as a way to back up stored data. 
When properly configured and scheduled, local or remote replication using the **Advanced Replication Creation** option takes take regular snapshots of storage pools or datasets and saves them in the destination location on the same or another system. 

The **Advanced Replication Creation** option opens the **Add Replication Task** screen. 
This screen provides access to the same settings found in the repliation wizard but has more options to specify:

* Full file system replication
* Stream compression
* Replication speed
* Attempts to replicate data before the task fails
* Block size for data sent
* Log level verbosity

You can also:

* Change encrypted replication to allow an unencrypted dataset as the destination
* Create replication from scratch
* Include or exclude replication properties
* Replicate specific snapshots that match a defined creation time.
* Prevent the snapshot retention policy from removing source system snapshots that failed

With the implementation of rootless login and the admin user, setting up replication tasks as an admin user has a few differences than with setting up replication tasks when logged in as root. 
Setting up remote replication while logged in as the admin user requires selecting **Use Sudo For ZFS Commands**. 

{{< include file="/content/_includes/ReplicationIntroSCALE.md" type="page" >}}

Remote replication requires setting up an SSH connection in TrueNAS before creating a remote replication task. 

## Setting Up a Simple Replication Task Overview 
This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote. 
It also covers the related steps you should take prior to configuring a replication task. 

{{< include file="/content/_includes/BasicReplicationProcess.md" type="page" >}}

Configure your SSH connection before you begin configuring the replication task through the **Add Replication Task** screen. 
If you have an existing SSH connection with the remote system the option displays on the **SSH Connection** dropdown list.

Turn on SSH service. Go to **System Settings > Services** screen, verify the **SSH** service configuration, then enable it.

## Creating a Basic Advanced Replication Task

To access advanced replication settings, click **Advanced Replication Creation** at the bottom of the first screen of the **Replication Task Wizard**. 
The **Add Replication Task** configuration screen opens. 

{{< include file="/content/_includes/ReplicationCreateDatasetAndAdminHomeDirSteps.md" type="page" >}}

3. Give the task a name and set the direction of the task. 
   Unlike the wizard, the **Name** does not automatically populate with the *source*/*destination* task name after you set the source and destination for the task. 
   Each task name must be unique, and we recommend you name it in a way that makes it easy to remember what the task is doing.
   
4. Select the direction of the task. **Pull** replicates data from a remote system to the local system. **Push** sends data from the local system to the remote.

5. Select the method of tranfer for this replication from the **Transport** dropdown list. 
   Select **LOCAL** to replicate data to another location on the same system. 
   Select **SSH** is the standard option for sending or receiving data from a remote system. Select the existing **SSH Connection** from the dropdown list. 
   Select **SSH+Netcat** is available as a faster option for replications that take place within completely secure networks. 
   **SSH+Netcat** requires defining netcat ports and addresses to use for the Netcat connection.

   With SSH-based replications, select the **SSH Connection** to the remote system that sends or receives snapshots.
   To create a new connection to use for replication from a destination to this local system, select **newpullssh**.

   Select **Use Sudo for Zfs Commands** to controls whether the user used for SSH/SSH+NETCAT replication has passwordless sudo enabled to execute zfs commands on the remote host. 
   If not selected, you must enter `zfs allow` on the remote system to to grant non-user permissions to perform ZFS tasks. 

6. Specify the source and destination paths. Adding /*name* to the end of the path creates a new dataset in that location.
   Click the arrow to the left of each folder or dataset name to expand the options and browse to the dataset, then click on the dataset to populate the **Source**.
   Choose a preconfigured periodic snapshot task as the sorce of snapshots to replicate.
   Pulling snapshots from a remote source requires a valid **SSH Connection** before the file browser can show any directories.

   A remote destination requires you to specify an SSH connection before you can enter or select the path.
   If the file browser shows a connection error after selecting the correct **SSH Connection**, you might need to log in to the remote system and [configure it to allow SSH connections]({{< relref "/content/SCALE/SCALEUIReference/Credentials/BackupCredentials/_index.md" >}}).
   Define how long to keep snapshots in the destination.

   Remote sources require defining a snapshot naming schema to identify the snapshots to replicate. 
   Local sources are replicated by snapshots that were generated from a periodic snapshot task and/or from a defined naming schema that matches manually created snapshots.

   {{< hint type=important >}}
   *DO NOT* use zvols as remote destinations.
   {{< /hint >}}

7. Select a previously configured periodic snapshot task for this replication task in **Periodic Snapshot Tasks**. 
   The replication task selected must have the same values in **Recursive** and **Exclude Child Datasets** as the chosen periodic snapshot task. 
   Selecting a periodic snapshot schedule removes the **Schedule** field.

   If a periodic snapshot task does not exist, select **Replicate Specfic Snapshots** tp define specific snapshots from the periodic task to use for the replication. 
   This displays the schedule options for the snapshot task. Enter the schedule. 
   The only periodically generated snapshots included in the replication task are those that match your defined schedule.
   
   Select the naming schema or regular exression option to use for this snapshot.
   A naming schema is a collection of [strftime](https://www.freebsd.org/cgi/man.cgi?query=strftime) time and date strings and any identifiers that a user might have added to the snapshot name. 
   For example, entering the naming schema `custom-%Y-%m-%d_%H-%M` finds and replicates snapshots like `custom-2020-03-25_09-15`.
   Enter multiple schemas by pressing <kbd>Enter</kbd> to separate each schema. 

8. Set the replication schedule to use and define when the replication task runs. 
   Leave **Run Automatically** selected to use the snapshot task specified and start the replication immediately after the related periodic snapshot task completes.
   Select **Schedule** to display scheduling options for this replication task and To automate the task according to its own schedule.

   Selecting **Schedule** allows scheduling the replication to run at a separate time.
   Choose a time frame that gives the replication task enough time to finish and is during a time of day when network traffic for both source and destination systems is minimal.
   Use the custom scheduler (recommended) when you need to fine-tune an exact time or day for the replication.
   
   {{< expand "Advanced Scheduler" "v" >}}
   {{< include file="content/_includes/SCALEAdvancedScheduler.md" type="page" >}}
   {{< /expand >}}

9. Click **Save**.

### Setting a Replication Compression Level

Options for compressing data, adding a bandwidth limit, or other data stream customizations are available. 
**Stream Compression** options are only available when using SSH. 
Before enabling **Compressed WRITE Records**, verify that the destination system also supports compressed write records. 

### Setting Block Size
{{< hint type=important >}}
**Allow Blocks Larger than 128KB** is a one-way toggle.
Replication tasks using large block replication only continue to work as long as this option remains enabled.
{{< /hint >}}

### Setting Full File System Replication

By default, the replication task uses snapshots to quickly transfer data to the receiving system.
Selecting **Full Filesystem Replication** means the task completely replicates the chosen **Source**, including all dataset properties, snapshots, child datasets, and clones. 
When using this option, we recommended allocating additional time for the replication task to run.

### Replicating Dataset Properties

Leave **Full Filesystem Replication** unselected and select **Include Dataset Properties** to include just the dataset properties in the snapshots to replicate. 
Leave this option unselected on an encrypted dataset to replicate the data to another unencrypted dataset. 

### Replicating Child Datasets

Select **Recursive** to recursively replicate child dataset snapshots or exclude specific child datasets or properties from the replication.

### Defining Replication Properties
Enter newly defined properties in **Properties Override**  to replace existing dataset properties with the newly defined properties in the replicated files.

List any existing dataset properties to remove from the replicated files in **Properties Exclude**.

### Saving Pending Snapshots
When a replication task is having difficulty completing, it is a good idea to select **Save Pending Snapshots**.
This prevents the source TrueNAS from automatically deleting any snapshots that failed to replicate to the destination system.

### Changing Destination Dataset from Read-Only

By default, the destination dataset is set to be read-only after the replication completes.
You can change the **Destination Dataset Read-only Policy** to only start replication when the destination is read-only (set to **REQUIRE**) or to disable it by setting it to **IGNORE**.

### Adding Transfer Encryption
The **Encryption** option adds another layer of security to replicated data by encrypting the data before transfer and decrypting it on the destination system.
Selecting **Encryption** adds the addtional setting options **HEX** key or **PASSPHRASE**. 
You can store the encryption key either in the TrueNAS system database or in a custom-defined location.

### Synchronizing Destination and Source Snapshots
{{< hint type=important >}}
**Synchronizing Destination Snapshots With Source** destroys any snapshots in the destination that do not match the source snapshots.
TrueNAS also does a full replication of the source snapshots as if the replication task never run, which can lead to excessive bandwidth consumption.

This can be a very destructive option. 
Make sure that any snapshots deleted from the destination are obsolete or otherwise backed up in a different location.
{{< /hint >}}
### Defining Snapshot Retention
Defining the **Snapshot Retention Policy** is generally recommended to prevent cluttering the system with obsolete snapshots.
Choosing **Same as Source** keeps the snapshots on the destination system for the same amount of time as the defined **Snapshot Lifetime** from the source system periodic snapshot task.

You can use **Custom** to define your own lifetime for snapshots on the destination system.

### Replicating Snapshots Matching a Schedule
Selecting **Only Replicate Snapshots Matching Schedule** restricts the replication to only replicate those snapshots created at the same time as the replication schedule.

{{< taglist tag="scalereplication" limit="10" >}}