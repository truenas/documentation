---
title: "Replication"
weight: 100
---

{{< toc >}}

Configure SSH in TrueNAS before creating a remote replication task. This ensures that new snapshots are regularly available for replication.

To streamline creating simple replication configurations, the replication wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

## Simple Replications - Process Summary

{{< expand "Process Summary" "v" >}}

* **Data Protection > Replication Tasks**
  * Choose sources for snapshot replication.
    * Remote sources require an SSH connection.
    * TrueNAS shows the number snapshots available to replicate.
 * Define the snapshot destination.
    * A remote destination requires an SSH connection.
    * Choose destination or define manually by typing a path.
      * Adding a new name on the end of the path creates a new dataset.
  * Choose replication security.
    * iXsystems always recommend replication with encryption.
    * Disabling encryption is only meant for absolutely secure and trusted destinations.
  * Schedule the replication.
    * You can schedule standardized presets or a custom defined schedule.
    * Running once runs the replication immediately after creation.
      * Task is still saved and you can rerun or edit it.
  * Choose how long to keep the replicated snapshots.
{{< /expand >}}

This video tutorial presents a simple example of setting up replication:

{{< embed-video name="scaleangelfishreplication" >}}

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

* **Ecryption Key Format** allows the user to choose between a hex (base 16 numeral) or passphrase (alphanumeric) style encryption key. <br>
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

Choosing **no encryption** for the task is less secure but faster. This method uses common port settings but these can be overriden by switching to the advanced options screen or editing the task after creation.

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

## Advanced Replication

Requirements:
* Storage pools with datasets and data to snapshot.
* SSH configured with a connection to the remote system saved in **Credentials > Backup Credentials > SSH Connections**.
* Dataset snapshot task saved in **Data Protection > Periodic Snapshot Tasks**.

### Process Summary

{{< expand "Process Summary" "v" >}}
Go to **Data Protection > Replication Tasks** and click *ADD*, then select *ADVANCED REPLICATION CREATION*.

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

Decide what **Transport** method (SSH, SSH+NETCAT, or LOCAL) to use for the replication before configuring the other sections.

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
* Defining a specific time for the replication task to run is a must do.
* Choose a time frame that both gives the replication task enough time to finish and is during a time of day when network traffic for both source and destination systems is minimal.
* Use the custom scheduler (recommended) when you need to fine-tune an exact time or day for the replication.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Setting **Only Replicate Snapshots Matching Schedule** restricts the replication to only replicate those snapshots created at the same time as the replication schedule.

![SCALEReplicationAdvancedScheduleOptions](/images/SCALE/SCALEAdvSchedule.png "Advanced Replication: Schedule")

{{< /expand >}}

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS SCALE users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/zvol with a unique key.

{{< include file="/_includes/ReplicatedEncryptedUnlock.md" type="page" >}}
