---
title: "Replication Task Screens"
description: "Provides information on the Replication screens, wizard, and settings used to add or edit replication tasks."
weight: 100
aliases:
 - /scale/scaleuireference/dataprotection/replicationscreensscale/
 - /scale/scaleclireference/task/clireplication/
tags:
 - replication
 - backup
 - replication
---

The **Replication Task** widget on the **Data Protection** screen lists replication tasks configured on the TrueNAS system.
Replication tasks work with periodic snapshot tasks to complete the replication.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTasksWidget.png" alt="Replication Task Widget" id="Replication Task Widget" >}}

The **Replication Tasks** widget displays **No Replication Tasks configured** before you add a task.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTasksWidgetNoTasks.png" alt="Replication Task Widget No Tasks" id="Replication Task Widget No Tasks" >}}

Click **Replication Task** on the widget heading to open the **[Replications Tasks](#replication-tasks-screen)** screen that lists all tasks configured on the system.

**Add** on the **Replication Task** widget opens the **[Replication Task Wizard](#replication-task-wizard)**.

The <span class="material-icons">edit</span> **Edit** icon opens the **[Edit Replication Task](#edit-replication-task-screen)** screen.

The **[<span class="material-icons">play_arrow</span> Run Now](#run-now-option)** icon opens a dialog.

The **[<span class="material-icons">restore</span> Restore](#restore-option)** icon to opens the **Restore Replication Task** window.

The **[<span class="iconify" data-icon="mdi:download"></span> Download encryption keys](#download-encryption-keys-option)** icon downloads any encryption keys associated with the task.

The **[<span class="material-icons">delete</span> Delete](#delete-option)** icon  opens a delete confirmation dialog.

**State** displays the status of the replication task as **SUCCESS** for completed tasks, **FAILED** if the task fails to complete the sync, and **PENDING** for tasks that have not run yet.
Click on the state oval to open the **Logs** dialog for that task. **Download Logs** saves a copy of the current task logs.

[Configure SSH]({{< relref "AddSSHConnectionKeyPair.md" >}}) in TrueNAS before creating a remote replication task. This ensures that new snapshots are regularly available for replication.

## Replication Tasks Screen
The **Replications Tasks** screen lists the replication tasks configured on the system.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTasksListScreen.png" alt="Replication Task List" id="Replication Task List" >}}

**Columns** displays a list of option to customize the list view to add or remove information to the table. Options are **Select All**, **Direction**, **Transport**, **SSH Connection**, **Source Dataset**, **Target Dataset**, **Recursive**, **Auto**, **Enabled**, **State**, **Last Snapshot**, and **Reset to Defaults**.

Before adding replication tasks this screen displays **No Replication Tasks** and the **Add Replication Tasks** option that opens the **Replication Task Wizard**.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTasksListNoTasks.png" alt="Replication Task No Tasks" id="Replication Task No Tasks" >}}

Click anywhere on a task row to expand it and show details about that task and the options to run, restore, edit or delete that task.

### Replication Task Details
The details view of each replication task shows the **Transport**, **SSH Connection**, **Source Dataset**, **Target Dataset**, **Recursive**, and **Auto** settings.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTaskDetails.png" alt="Replication Task Details" id="Replication Task Details" >}}

The <span class="material-icons">edit</span> **Edit** button opens the **[Edit Replication Task](#edit-replication-task-screen)** screen.

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Run Now Option
The <span class="material-icons">play_arrow</span> **Run Now** button opens a **Run Now** dialog.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTaskRunNowDialog.png" alt="Replication Task Run Now" id="Replication Task Run Now" >}}

Click **CONTINUE** to start the replication task.

### Restore Option
The <span class="material-icons">restore</span> **Restore** button opens the **Restore Replication Task** window.

{{< trueimage src="/images/SCALE/DataProtection/RestoreReplicationTaskWindow.png" alt="Restore Replication Task" id="Restore Replication Task" >}}

Enter a new name for the task and select the location to store the data, then click **Restore**.
The system creates the new file and displays the task on both the widget and list screen with the **PENDING** status.

### Download encryption keys Option
When a replication task involves a key-encrypted source or destination, the <span class="iconify" data-icon="mdi:download"></span> icon shows in the task options.
This downloads any encryption keys to your local system.

### Delete Option
The <span class="material-icons">delete</span> **Delete** icon opens a delete confirmation dialog.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTaskDeleteDialog.png" alt="Replication Task Delete" id="Replication Task Delete" >}}

Click **Confirm** to activate **Delete**.

## Add Replication Task Options
There are two ways to add a replication task, the wizard and the advanced creation screen.
These two methods share many settings that are described below.
Shared settings are documented these sections:
* **[Encryption](#encryption-options)**
* **[Also include snapshots with the name](#what-and-where-wizard-screen)**
* **[Schedule](#when-wizard-screen)**

**Add**, or if no replication task exist, **Add Replication Tasks** opens the wizard.

## Replication Task Wizard
The wizard has two screens:

* **What and Where** settings specify the task name, data source and destinations, the type of replication (local or remote), transport options (SSH connection).
* **When** settings specify when to run the task and how long to retain the replicated snapshots.

**Advanced Replication Creation** opens the **Add Replication Task** screen with the same settings found in the wizard and more advanced settings.

### What and Where Wizard Screen
The **What and Where** screen allows loading source and destination information from a previous task, setting the source and destination direction for the transfer and the datasets and directories to use, allows adding encryption and an SSH connection for remote replications, specifying the naming schema to use, and giving a name to the task.

The **[Encryption](#encryption-setting-options)** and **[SSH Connection](#ssh-settings)** options show when the source or destination is set to **On a Different System**.

Settings change based on the **[Source Location](#source-and-destination-options)** and **[Destination Location](#destination-location-setting-options)** option selected. Options are, **On this System** (local replication) and **On a Different System** (remote replication).

{{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

**[Also include snapshots with the name](#snapshot-naming-options)** options show different snapshots settings based on the naming option selected.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationWizardWhatAndWhere.png" alt="Replication Task Wizard What and When" id="Replication Task Wizard What and When" >}}

Setting **Source Location** to **On This System** and **Destination Location** to **On a Different System** and making naming schema choices changes the the wizard screen to show all available settings.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTaskWizardWhatAndWhereAllSettings.png" alt="Replication Task Wizard What and When All Settings" id="Replication Task Wizard What and When All Settings" >}}

{{< expand "What and Where Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Load Previous Replication Task** | Loads settings from a saved replication. Select an existing snapshot to populate the **Source Location**, **Destination Locations**, **Source**, and **Destination** fields. Also populates **Task Name** with a name that is a combination of the source-destination for the selected task. |
| **Source Location** | Select the storage location of the original replicated snapshots. Options are:<br><li>**On this System** (local replication) - Allows setting **On a Different System** to a local or remote destination. <br><li>**On a Different System** (remote replication) - When set to **On a Different System**, the **Destination Location** automatically changes to **On this System** and the **Destination** field displays the path to the snapshot location. For more information on these setting options see [Source Location Setting Options](#source-location-setting-options).</li> |
| **Source** | (Required) Enter or use <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and at each dataset to expand the dataset tree and browse to the dataset location with the snapshots to replicate. Click on the dataset or directory name, folder icon, or checkbox to select the dataset or directory. To enter multiple datasets, enter a comma (,) after each path in the **Source** field and then select another dataset or directory. Click the <span class="material-icons"><span class="material-icons">arrow_drop_down</span></span> at the **/mnt** folder to collapse the dataset tree. |
| **Destination Location** | Select the storage location for the replicated snapshots. Options are **On this System** or **On a Different System** but if **Source** is set to **On a Different System**, the **Destination Location** automatically changes to **On this System** and the **Destination** field displays. |
| **Destination** | (Required) Enter or use <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and at each dataset to expand the dataset tree and browse to the dataset location with the snapshots to replicate. Click on the dataset or directory name, folder icon, or checkbox to select the dataset or directory. To enter multiple datasets, enter a comma (,) after each path in the **Destination** field and then select another dataset or directory. Click the <span class="material-icons"><span class="material-icons">arrow_drop_down</span></span> at the **/mnt** folder to collapse the dataset tree. |
| **SSH Connection** | Select an existing SSH connection to a remote system or select **Create New** to open the **New SSH Connection** window to configure the new SSH connection settings. Shows the **Use Sudo for ZFS Commands** dialog to enable sudo for SSH sessions. |
| **Use Sudo For Zfs Commands** | Select if setting up remote replication tasks when logged in as an admin user. |
| **SSH Transfer Security** | Shows after selecting **Replicate Custom Snapshots**. Applies data transfer security. Shows two options: **Encryption (more secure, but slower)** and **No Encryption (less secure, but faster)**. The connection is authenticated with SSH. Encryption is recommended, but can be disabled for increased speed on secure networks. |
| **Recursive** | Select to also replicate all snapshots contained within the selected source dataset snapshots. Leave clear to only replicate the selected dataset snapshots. |
| **Replicate Custom Snapshots** | Shows after setting **Source Location** to **On this System**. Select to replicate snapshots that are not created by an automated snapshot task. After selecting, shows the **Also include snapshots with the name** setting options. This setting requires setting a naming schema for the custom snapshots through one of the two methods. |
| **Also include snapshots with the name** | Select the option to set the snapshot naming pattern to naming schema or regular expression. Options are:<br><li> **Naming Schema** - Select to use naming schema and display the **Naming Schema** field <br><li> **Snapshot Name Regular Expression** - Select to use regular expression and display the **Snapshot Name Regular Expression** field. |
| **Naming Schema** | Shows after selecting **Naming Schema** under **Also include snapshots with the name**. Enter the pattern of naming custom snapshots to replicate. Enter the name and [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.html) %Y, %m, %d, %H, and %M strings that match the snapshots to include in the replication. Separate entries by pressing <kbd>Enter</kbd>. The number of snapshots matching the patterns display on the screen. |
| **Snapshot Name Regular Expression** | Shows after selecting **Snapshot Name Regular Expression** under **Also include snapshots with the name**. Enter the regular expression the replicated snapshot(s) should match. This option replicates all snapshots with names matching the specified regular expression. This option slows regular performance on the systems with large number of snapshots as the process reads snapshots metadata in order to determine snapshots creation order. |
| **Encryption** | Select to apply an extra layer of encryption when replicating data. For more information on all options see [Encryption](#encryption-setting-options). |
| **Task Name** | Use the name the system adds when the sourse and destination options are set or enter a name for this replication configuration and to overwrite the automatically populated task name. By default, the system populates **Task Name** with the source-destination names selected or loaded by selecing a task in **Load Previous Replication Tasks**. |
{{< /truetable >}}
{{< /expand >}}

#### Encryption Options
The **Encryption** option shows additional settings on the **Add Replication Task** screen and the **What and Where**  wizard screen below the **Destination** settings.

{{< trueimage src="/images/SCALE/DataProtection/AddReplicationTaskEncyptionHexOption.png" alt="Add Replication Task Wizard Hex Encryption" id="Add Replication Task Wizard Hex Encryption" >}}

{{< expand "Encryption Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Encryption** | Select to apply an extra layer of encryption when replicating data to a remote server. Shows additional encryption settings. the **Encryption Key Format** and **Store Encryption key in Sending TrueNAS database** options. |
| **Inherit Encryption** | Select for the target dataset to inherit encryption from its parent dataset. |
| **Encryption Key Format** | Select the encryption option from the dropdown list. **Hex** (base 16 numeral) or **Passphrase** (alphanumeric) style encryption key. Selecting **Hex** displays the **Generate Encryption Key** option. Selecting **Passphrase** displays the **Passphrase** option. |
| **Generate Encryption Key** | Displays after selecting **Hex** in **Encryption Key Format**. Displays selected by default. Clearing the checkbox displays the **Encryption Key** field. |
| **Encryption Key** | Displays after clearing the **Generate Encryption key** checkbox. Use to import a custom hex key. |
| **Passphrase** | Displays when **Encryption Key Format** is set to **Passphrase**. Enter the alphanumeric passphrase to use as an encryption key. |
| **Store Encryption key in Sending TrueNAS database** | Displays after selecting **Encryption**. Displays selected by default. Select to store the encryption key in the TrueNAS database. Clearing the checkbox displays the **Encryption Key Location in Target System** field.|
| **Encryption Key Location in Target System** | Displays after clearing the **Store Encryption key in sending TrueNAS database** checkbox. Enter a temporary location for the encryption key that decrypts replicated data. |
{{< /truetable >}}
{{< /expand >}}

#### New SSH Connection
The **New SSH Connection** window opens after selecting **Create New** in the **SSH Connection** field.
It allows you to set up a new SSH connection for the remote system.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTaskNewSSHConnection.png" alt="New SSH Connection" id="New SSH Connection" >}}

{{< expand "New SSH Connection Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter a unique name for this SSH connection. |
| **Setup Method** | Select how to configure the connection from the dropdown list. Options are: <br><li>**Manual** - Select to configure authentication on the remote system. This option can include copying SSH keys and modifying the root user account on that system.<br><li>**Semi-Automatic** - Select when configuring an SSH connection with a remote TrueNAS system. This method uses the URL and login credentials of the remote system to connect with and exchange SSH keys. This option only works when the other system is a TrueNAS system.</li> |
| **TrueNAS URL** | Ener the host name or IP address of the remote system. A valid URL scheme is required. For example, *https://10.235.12.20*. |
| **Admin Username** | Enter the user name for logging into the remote system via the UI. |
| **Admin Password** | Enter the password for logging into the remote system. |
| **One-Time Password (if necessary)** | Enter the one-time password if two factor authentication is enabled. |
| **Username** | Enter the user name for logging into the remote system via the SSH.
| **Private Key** | Select a saved SSH keypair or select **Generate New** to create a new keypair and use it for this connection. |
| **Connect Timeout** | Enter the time (in seconds) before the system stops attempting to establish a connection with the remote system. |
{{< /truetable >}}
{{< /expand >}}

### When Wizard Screen
The **When** wizard screen sets the schedule for running the task and the retention period for keeping the replicated snapshots.
**Replication Schedule** and **Destination Snapshot Lifetime** options change the setting displayed on the screen.

#### Replication Schedule Options
The **Replication Schedule** options set when to run the task based on the schedule defined in **Schedule** or to run it one time.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationWizardWhen.png" alt="Add Replication Task When Run on Schedule" id="Add Replication Task When Run on Schedule" >}}

{{< expand "Replication Schedule Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Run On a Schedule** | Displays the **Schedule** option where you select a preset time or can select **Custom** to use the advanced scheduler. |
| **Run Once** | Runs the replication task after you click **Start Replication**. Displays the **Make Destination Dataset Read-only?** option. Removes the **Schedule** option. |
| **Schedule** | Displays after selecting the **Run On a Schedule** radio button. Select a preset time or can select **Custom** to use the advanced scheduler. |
| **Make Destination Dataset Read-only?** | Displays after selecting the **Run Once** radio button. Select to change the destination dataset to be read-only. To continue using the default or existing dataset read permissions, leave this checkbox cleared. |
{{< /truetable >}}
{{< /expand >}}

#### Destination Snapshot Lifetime Options
The **Destination Snapshot Lifetime** setting determines how long the replicated snapshot is retained on the destination server. 

{{< trueimage src="/images/SCALE/DataProtection/AddReplicationTaskWhenRunOnceCustomLifetime.png" alt="Add Replication Task When Custom Lifetime" id="Add Replication Task When Custom Lifetime" >}}

{{< expand "Destination Snapshot Lifetime Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Same as Source** | Select to use the configured snapshot Lifetime value from the source dataset periodic snapshot task. |
| **Never Delete** | Select to never delete snapshots from the destination system. |
| **Custom** | Select to define how long the snapshot remains on the destination system. Displays the number of and measure of time fields to set the schedule. |
| Number of | Enter a numeric value to work with the measure of time selection to set the custom lifetime of the snapshot. |
| Measure of time | Select the option for **Hours**, **Days**, **Weeks**, **Months**, or **Years** to work with the number of field to set the custom lifetime of the snapshot. |
{{< /truetable >}}
{{< /expand >}}

## Add Replication Task Screen
**Advanced Replication Creation** opens the **Add Replication Task** screen. Click before or after adding values to any setting on the wizard screens.

### General and Transport Options Settings
The settings in **General** and **Transport Options** specify the name of the task, the direction of the data transfer, the transport connection type and method settings for each type.
The **Transport** setting changes options displayed in the **Transport Options** area (**SSH** is the default setting).
All three **Transport** field options share the two settings displayed for **Local**, and the **SSH Connection** field displays for both the **SSH** and **SSH+NETCAT** transport selections.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddReplicationTaskGeneralTransportSSH.png" alt="Advanced Add Replication Task SSH Transport" id="Advanced Add Replication Task SSH Transport" >}}

{{< expand "General Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | (Required) Enter a descriptive name for the replication. |
| **Direction** | Select the direction for the replication from the dropdown list. **Push** sends snapshots to a destination system. **Pull** connect to a remote system and retrieves snapshots matching the value specified in **Naming Schema**. |
| **Transport** | Select the method of connecting to a remote system for exchanging data from the dropdown list.<br><li> **SSH** is the supported by most systems. It requires a previously created SSH connection on the system. <br><li>**SSH+NETCAT** uses SSH to establish a connection to the destination system, then uses [py-libzfs](https://github.com/truenas/py-libzfs) to send an unencrypted data stream for higher transfer speeds. This only works when replicating to a FreeNSAS, TrueNAS, or other system with py-libzfs installed. <br><li>**LOCAL** efficiently replicates snapshots to another dataset on the same system without using the network. **Legacy** uses the legacy replication engine from FreeNAS 11.2 and earlier.</li> |
| **Use Sudo For Zfs Commands** | Select if setting up remote replication tasks when logged in as an admin user. |
| **Number of retries for failed replications** | Enter the number of times the replication is attempted before stopping and marking the task as failed. |
| **Logging Level** | Select the level of message verbosity in the replication task log from the dropdown list. Options are **Default**, **Debug**, **Info**, **Warning**, and **Error**. |
| **Enabled** | Select to enable the replication schedule. |
{{< /truetable >}}
{{< /expand >}}

#### Transport Options Settings - Local Transport Option
These setting display for all three **Transport** options.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddReplicationTaskGeneralTransportLocal.png" alt="Advanced Add Replication Task Local Transport" id="Advanced Add Replication Task Local Transport" >}}

{{< expand "Local Transport Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Allow Blocks Larger than 128KB** | Select to allow this replication to send large data blocks. The destination system must also support large blocks. This setting cannot be changed after it is enabled and the replication task is created. For more details, see [zfs(8)](https://linux.die.net/man/8/zfs). |
| **Allow Compressed WRITE Records** | Use compressed WRITE records to make the stream more efficient. The destination system must also support compressed WRITE records. See [zfs(8)](https://linux.die.net/man/8/zfs). |
{{< /truetable >}}
{{< /expand >}}

#### Transport Options Settings - SSH Transport Option
These setting options display in addition to the two options displayed when **Transport** is set to **SSH**.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddReplicationTaskGeneralTransportSSH.png" alt="Advanced Add Replication Task SSH Transport" id="Advanced Add Replication Task SSH Transport" >}}

{{< expand "SSH Transport Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SSH Connection** | Select a connection created and saved in **Credentials > Backup Credentials > SSH Connections**. If a connection does not display on the the dropdown list, exit the task creation screen. Open **Credentials > Backup Credentials** and [add an SSH connection]({{< relref "AddSSHConnectionKeyPair.md" >}}). |
| **Stream Compression** | Select a compression algorithm from the dropdown list to reduce the size of the data being replicated. Only appears when SSH is chosen for **Transport** type. |
| **Limit (Examples: 500 KiB, 500M, 2 TB)**| Enter the number of bytes per second to limit replication speed to this number of bytes per second. |
{{< /truetable >}}
{{< /expand >}}

#### Transport Options Settings - SSH+NETCAT Transport Option
These setting options display in addition to the two options displayed when **Transport** is set to **SSH+NETCAT**.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddReplicationTaskGeneralTransportSSH+NETCAT.png" alt="Advanced Add Replication Task SSH+NETCAT Transport" id="Advanced Add Replication Task SSH+NETCAT Transport" >}}

{{< expand "SSH+NETCAT Transport Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SSH Connection** | Select a connection created and saved in **Credentials > Backup Credentials > SSH Connections**. If a connection does not display on the the dropdown list, exit the task creation screen. Open **Credentials > Backup Credentials** and [add an SSH connection]({{< relref "AddSSHConnectionKeyPair.md" >}}). |
| **Netcat Active Side** | Select the option for the system that opens ports from the dropdown list. Options are **Local** or **Remote**. Establishing a connection requires that one of the connection systems has open TCP ports. Consult your IT department to determine which systems are allowed to open ports. |
| **Netcat Active Side Listen Address** | Enter the IP address on which the connection Active Side listens. Defaults to 0.0.0.0. |
| **Netcat Active Side Min Port** | Enter the lowest port number of the active side listen address that is open to connections. |
| **Netcat Active Side Max Port** | Enter the highest port number of the active side listen address that is open to connections. The first available port between the minimum and maximum is used. |
| **Netcat Active Side Connect Address** | Enter the host name or IP address used to connect to the active side system. When the active side is **Local**, this defaults to the **SSL_CLIENT** environment variable. When the active side is **Remote**, this defaults to the SSH connection host name.|
{{< /truetable >}}
{{< /expand >}}

### Advanced Source Options
The settings in **Source** specify the location of files you push or pull in the replication task, and the properties applied to the replicated data.
The Source setting options change based on selections made in **Recursive** and **Replicate Specific Snapshots** and each display additional setting options.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddRepTaskSourceAndDestination.png" alt="Advanced Add Replication Task Source and Destination" id="Advanced Add Replication Task Source and Destination" >}}

{{< expand "Advanced Source Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Source** | (Required) Enter or use <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and at each dataset to expand the dataset tree to browse to the dataset location that has snapshots to replicate. Click on the dataset or directory name, folder icon, or checkbox to select the dataset or directory. To enter multiple datasets, enter a comma (,) after each path in the **Source** field and then select another dataset. Click the <span class="material-icons"><span class="material-icons">arrow_drop_down</span></span> at the <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21L3 9h18l-2 12zm5-6h4q.425 0 .713-.288T15 14t-.288-.712T14 13h-4q-.425 0-.712.288T9 14t.288.713T10 15M6 8q-.425 0-.712-.288T5 7t.288-.712T6 6h12q.425 0 .713.288T19 7t-.288.713T18 8zm2-3q-.425 0-.712-.288T7 4t.288-.712T8 3h8q.425 0 .713.288T17 4t-.288.713T16 5z"/></svg>**/mnt** to collapse the dataset tree. |
| **Recursive** | Select to replicate all child dataset snapshots. When selected, **Exclude Child Datasets** displays. |
| **Exclude Child Datasets** | Displays after selecting **Recursive**. Enter the specific child dataset snapshots from the replication. Separate each entry by pressing <kbd>Enter</kbd>.  |
| **Include Dataset Properties** | Select to include ZFS dataset properties with the replicated snapshots. For more information on ZFS dataset properties see [ZFS manpages](https://linux.die.net/man/8/zfs). |
| **Full Filesystem Replication** | Select to completely replicate the selected dataset. The target dataset gets all the properties of the source dataset, child datasets, clones and snapshots that match the specified naming schema. Hides the **Recursive** and **Include Dataset Properties** options. |
| **Properties Override** | Enter properties to replace existing dataset properties with in the replicated files. |
| **Properties Exclude** | Enter any existing dataset properties to remove from the replicated files. |
{{< /truetable >}}
{{< /expand >}}

### Advanced Destination Options
The settings in **Destination** specify the location of files you push or pull in the replication task, and the properties applied to the replicated data.
The destination setting options change based on selections made in **Encryption** and **Snapshot Retention Policy** which display additional setting options.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddReplicationTaskDestinationOptions.png" alt="Advanced Add Replication Task Destination Options" id="Advanced Add Replication Task Destination Options" >}}

{{< expand "Advanced Destination Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Destination** | (Required) Enter or use <span class="material-icons">arrow_right</span> to the left of the **/mnt** folder and at each dataset to expand the dataset tree to browse to the dataset location that has snapshots to replicate. Click on the dataset or directory name, folder icon, or checkbox to select the dataset or directory. Selecting a location defines the full path to that location as the destination. Appending a name to the path creates a new zvol at that location. For example, selecting *pol1/dataset1* stores snapshots in *dataset 1*, but adding */zvol1* after *dataset*1 creates *zvol1* for snapshot storage. Click the <span class="material-icons"><span class="material-icons">arrow_drop_down</span></span> at the **/mnt** folder to collapse the dataset tree. |
| **Destination Dataset Read-Only Policy** | Select the policy from the dropdown list. Options are:<br><li>**Set** that changes all destination datasets to `readonly=on` after finishing the replication.<br><li> **Require** stops replication unless all existing destination datasets have the property `readonly=on`.<br><li> **Ignore** disables checking the `readonly` property during replication.</li> |
| **Encryption** | Select to use encryption when replicating data. For more information on all options see [Encryption](#encryption-setting-options). |
| **Replication from scratch** | Select if the destination system has snapshots but they do not have any data in common with the source snapshot, destroy all data destination snapshots and do a full replication. WARNING! Enabling this option can cause data loss or excessive data transfer if the replication is misconfigured. |
| **Snapshot Retention Policy** | Select the policy from the dropdown list to apply when replicated snapshots are deleted from the destination system. Options are **Same as Source**, **Custom** and **None**. When selecting **Same as Source** use the **Snapshot Lifetime** from the source periodic snapshot task.  When selecting **Custom** define a **Snapshot Lifetime** for the destination system. Also displays the **Snapshot Lifetime** and **Unit** options. When selecting **None** never delete snapshots from the destination system. |
| **Snapshot Lifetime** | Use to enter a numeric value to work with the measure of time field below to specify how long a snapshot remains on the destination system. |
| **Unit** | Select the measure of time from the dropdown list to work with the numeric value in **Snapshot Lifetime**. Options are **Hour(s)**, **Day(s)**, **Week(s)**, **Month(s)**, and **Year(s)**. |
{{< /truetable >}}
{{< /expand >}}

### Various Snapshot Options
The snapshot settings below change options displayed based on selections made.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddReplicationTaskSnapshotOptions.png" alt="Add Replication Task Snapshot" id="Add Replication Task Snapshot" >}}

{{< expand "Snapshot Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Periodic Snapshot Tasks** | Select the snapshot schedule for this replication task from the dropdown list. Select from previously configured periodic snapshot tasks. This replication task must have the same **Recursive** and **Exclude Child Dataset** values as the selected periodic snapshot task. Selecting a periodic snapshot schedule removes the **Schedule** field. |
| **Replicate Specific Snapshots** | Select to only replicate snapshots that match a defined creation time. Selecting this option displays the **By snapshot creation time** field. Select the preset schedule or **Custom** to use the advanced scheduler. |
| **Begin** | Displays after selecting *Hourly* in **By snapshot creation time**. Select a time range for the specific periodic snapshots to replicate, in 15 minute increments. Periodic Snapshots created before this selected time are not included in the replication. |
| **End** | Displays after selecting *Hourly* in **By snapshot creation time**. Select a time range for the specific periodic snapshots to replicate, in 15 minute increments. Periodic Snapshots created after this selected time are not included in the replication. |
| **Also include snapshots with the name** | These radio buttons change the naming schema setting option below it. See [Snapshot Naming](#snapshot-naming-options) in the wizard section for details on this option and the radio buttons. |
| **Matching naming schema** | Displays the **Also Include Naming Schema** setting. |
| **Matching regular expression** | Displays the **Matching regular expression** setting. |
| **Also Include Naming Schema** | Displays after selecting the **Matching naming schema** radio button. Enter the pattern of naming custom snapshots to include in the replication with the periodic snapshot schedule. Enter the [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.html) strings that match the snapshots to include in the replication. When a periodic snapshot is not linked to the replication, enter the naming schema for manually created snapshots. Has the same %Y, %m, %d, %H, and %M string requirements as the **Naming Schema** in a **Add Periodic Snapshot Task**. Separate entries by pressing <kbd>Enter</kbd>. |
| **Matching regular expression** | Displays after selecting the **Matching regular expression** radio button. Enter the regular expressions snapshot should match. Using this option replicates all snapshots with names matching the specified regular expression. This process reads snapshot metadata to determine snapshot creation order. This slows regular performance on the systems with large number of snapshots. |
| **Save Pending Snapshots** | Select to prevent source system snapshots that have failed replication from being automatically removed by the **Snapshot Retention Policy**. |
{{< /truetable >}}
{{< /expand >}}

### Replication Schedule Advanced Options
These schedule setting options are common to both the **Replication Task Wizard** and **Add Replication Task** screens.

{{< trueimage src="/images/SCALE/DataProtection/AdvancedAddReplicationTaskScheduleOptions.png" alt="Advanced Add Replication Task Schedule" id="Advanced Add Replication Task Schedule" >}}

{{< expand "Advanced Schedule Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Run Automatically** | Select to either start this replication task immediately after the linked periodic snapshot task completes.  |
| **Schedule** | Select to create a replication schedule if not selecting **Run Automatically**. Displays the **Frequency** and **Only Replicate Snapshots Matching Schedule** options. |
| **Frequency** | Displays after selecting **Schedule**. Select a preset schedule or choose **Custom** to use the advanced scheduler. |
| **Begin** | Displays after selecting *Hourly* in **Frequency**. Select the start time for the replication task. |
| **End** | Displays after selecting *Hourly* in **Frequency**. Select the end time for the replication task. A replication that is already in progress can continue to run past this time. |
| **Only Replicate Snapshots Matching Schedule** | Displays after selecting **Schedule**. Select to use the **Schedule** in place of the **Replicate Specific Snapshots** time frame. The **Schedule** values are read over the **Replicate Specific Snapshots** time frame. |
{{< /truetable >}}
{{< /expand >}}

## Edit Replication Task Screen
The **Edit Replication Task** screen displays most of the settings found on the advanced **[Add Replication Task](#advanced-replication-creation-screen)** screen with a few exceptions.

* **[General](#general-and-transport-options-settings)** settings do not include the **Direction** option.
  The **Transport** settings on the edit screen are the same settings as the [advanced creation](#general-and-transport-options-settings) settings.
* **[Source](#advanced-source-options)** and **[Destination](#advanced-destination-options)** setting options are the same as the advanced creation settings.
* **[Replication Schedule](#replication-schedule-advanced-options)** setting options are the same as the advanced creation settings.

See the section linked above for information on the **Edit Replication Task** screen settings.
