---
title: "Setting Up a Encrypted Replication Task"
description: "Provides instructions on adding a replication task to a remote system and using encryption."
weight: 40
aliases:
tags:
- scalereplication
- scalebackup
- scaleencryption
---

{{< toc >}}


## Using Encryption in Replication Tasks

TrueNAS SCALE replication allows users to create replicated snapshots of data stored in encrypted pools, datasets or zvols that on their SCALE system as a way to back up stored data to a remote system. You can use encrypted datasets in a local replication.

{{< hint type=important >}}
You can set up a replication task for a dataset encrypted with a passphrase or a hex encryption key, but you must unlock the dataset before the task runs or the task fails.
{{< /hint>}}

With the implementation of rootless login and the admin user, when setting up remote replication tasks when logged in as an admin user requires selecting **Use Sudo For ZFS Commands**. 

{{< include file="/content/_includes/ReplicationIntroSCALE.md" type="page" >}}

Remote replication with datasets also require an SSH connection in TrueNAS. You can use an existing SSH connection if it has the same user credentials you want to use for the new replication task. 

## Setting Up a Simple Replication Task Overview 

This section provides a simple overview of setting up a remote replication task for an encrypted dataset. 
It also covers the related steps you should take prior to configuring the replication task. 

{{< expand "Replication Task General Overview" "v" >}}

1. Set up the data storage for where you want to save replicated snapshots. 
   
2. Make sure the admin user has a home directory assigned. 
   In the SCALE Bluefin early release, when creating the admin user at installation the home directory default is set to **/nonexistent**. To create an SSH connection to use in a remote replication you must assign a home directory path.

   Later releases of SCALE Bluefin set the admin user home directory to one created by SCALE during the installation process, but you need to select the option to create the admin user home directory.

3. Create an SSH connection between the local SCALE system and the remote system. 
   You can do this from either **Credentials > Backup Credentials > SSH Connection** and clicking **Add** or from the **Replication Task Wizard** using the **Generate New** option in the settings for the remote system.

4. Unlock the encrypted dataset(s) and export the encryption key to a text editor like Notepad.

5. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard**. 
   You then specify the from and to sources, task name, and set the schedule.
  
   Setting options change based on the source selections. Replicating to or from a local source does not requires an SSH connection.
   
This completes the general process for all replication tasks.
{{< /expand >}}

## Creating a Remote Replication Task for an Encrypted Dataset

To streamline creating simple replication tasks use the **Replication Task Wizard** to create and copy ZFS snapshots to another system. 
The wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list to load the configuration settings for that task into the wizard, and then make change such as assigning it a different destination, select encryption options, schedule, or retention lifetime, etc. 
Saving changes to the configuration creates a new replication task without altering the task you loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

{{< include file="/content/_includes/ReplicationCreateDatasetAndAdminHomeDirSteps.md" type="page" >}}

3. Unlock the source dataset and export the encryption key to a text editor such as Notepad.
   Go to **Datasets** select the source dataset, locate the **ZFS Encryption** widget and unlock the dataset if locked. 
   Export the key and paste it in any text editor such as Notepad. If you set up encryption to use a passphrase, you do not need to export a key.

4. Go to **Data Protection** and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard**. Configure the following settings:
   
   {{< trueimage src="/images/SCALE/22.12/CreateRemoteReplicationTask.png" alt="New Remote Replication Task" id="2 New Remote Replication Task" >}}
   
   a. Select **On this System** on the **Source Location** dropdown list. 
      If your source is the local TrueNAS SCALE system, you must select **On a Different System** from the **Destination Location** dropdown list to do remote replication. 

      If your source is a remote system, create the replication task as the root user and select **On a Different System**. The **Destination Location** automatically changes to **On this System**. 
      
      TrueNAS shows the number of snapshots available for replication.
    
   b. Select an existing SSH connection to the remote system or create a new connection.
      Select **Create New** to open the **[New SSH Connection](#configure-a-new-ssh-connection)** configuration screen.
    
   c. Browse to the source pool/dataset(s), then click on the dataset(s) to populate the **Source** with the path. 
      You can select multiple sources or manually type the names into the **Source** field. Separate multiple entries with commas.
      Selecting **Recursive** replicates all snapshots contained within the selected source dataset snapshots.

   d. Repeat to populate the **Destination** field. 
      You cannot use zvols as a remote replication destination. 
      Add a **/*datasetname*** to the end of the destination path to create a new dataset in that location.
    
   e. (Optional) Select **Encryption** to add a [second layer of encryption](#adding-additional-encryption) over the already encrypted dataset.
         
   f. Select **Use Sudo for ZFS Commands**. Only displays when logged in as the admin user (or the name of the admin user). 
      This removes the need to issue the cli `zfs allow` command in Shell on the remote system. 
      When the dialog displays, click **Use Sudo for ZFS Comands**. If you close this dialog, select the option on the **Add Replication Task** wizard screen.
    
   {{< trueimage src="/images/SCALE/22.12/UseSudoForZFSCommandsDialog.png" alt="Select Use Sudo for ZFS Commands" id="3 Select Use Sudo for ZFS Commands" >}}
    
      This option only displays when logged in as the admin user.
      If not selected you need to issue the cli `zfs allow` command in Shell on the remote system. 

   g. Select **Replicate Custom Snapshots**, then accept the default value in **Naming Schema**. 
      Remote sources require entering a snapshot naming schema to identify the snapshots to replicate. 
      A naming schema is a pattern of naming custom snapshots you want to replicate. 
      If you want to change the default schema, enter the name and [strftime(3)](https://man7.org/linux/man-pages/man3/strftime.3.html) %Y, %m, %d, %H, and %M strings that match the snapshots to include in the replication. 
      Separate entries by pressing <kbd>Enter</kbd>. The number of snapshots matching the patterns display.
   
   h. (Optional) Enter a name for the snapshot in **Task Name**. 
      SCALE populates this field with the default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in destination dataset a challenge. 
      To make it easier to find the snapshot, give it a name that is easy for you to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily. 
    
{{< include file="/content/_includes/ReplicationScheduleAndRetentionSteps.md" type="page" >}}

### Configure a New SSH Connection

{{< include file="/content/_includes/ReplicationConfigNewSSHConnection.md" type="page" >}}

### Using SSH Transfer Security 

{{< include file="/content/_includes/ReplicationSSHTransferSecurity.md" type="page" >}}

### Unlocking the Destination Dataset

After the replication task runs and creates the snapshot on the destination, you must unlock it to access the data. Use the encryption key exported from the dataset or pool, or if you use a passphrase to lock the dataset, enter the passphrase to unlock the dataset on the remote destination system.

### Replication to an Unencrypted Destiation Dataset

To replication an encrypted dataset to an unencrypted dataset on the remote destintation system, follow the instructions above to configure the task, then:

1. Select the task on the **Replication Task** widget. The **Edit Replication Task** screen opens.

2. Scroll down to **Include Dataset Properties** and select it to clear the checkbox.

  {{< trueimage src="/images/SCALE/22.12/EditReplicationTaskIncludeDatasetProperties.png" alt="Edit Replication Task Include Dataset Properties" id="11 Edit Replication Task Include Dataset Properties" >}}

3. Click **Save**.  

This replicates the unlocked encrypted source dataset to an unencrypted destination dataset.

### Adding Additional Encryption
When you replicate an encrypted pool or dataset you have one level of encryption applied at the data storage level. Use the passphrase or key created or exported from the dataset or pool to unlock the dataset on the destination server.

To add a second layer of encryption at the replication task level, select **Encryption**, then select the type of encryption you want to apply.

{{< trueimage src="/images/SCALE/22.12/ReplicationTaskEncryptionOptions.png" alt="Replication Task Encryption Options" id="12 Replication Task Encryption Options" >}}

Select either **Hex** (base-16 numeral format) or **Passphrase** (alphanumeric format) from the **Encryption Key Format** dropdown list to open settings for that type of encryption.

Selecting **Hex** displays **Generate Encryption Key** preselected. Select the checkbox to clear it and display the **Encryption Key** field where you can import a custom hex key.

Selecting **Passphrase** displays the **Passphrase** field where you enter your alphanumeric passphrase.

Select **Store Encryption key in Sending TrueNAS database** to store the encryption key in the sending TrueNAS database or leave unselected to choose a temporary location for the encryption key that decrypts replicated data.


{{< taglist tag="scalereplication" limit="10" >}}
{{< taglist tag="scaleencryption" limit="10" title="Related Encryption Articles" >}}