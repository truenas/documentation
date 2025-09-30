---
title: "Setting Up an Encrypted Replication Task"
description: "Provides instructions on adding a replication task to a remote system and using encryption."
weight: 20
aliases:
 - /scale/scaletutorials/dataprotection/replication/replicationwithencryptionscale/
tags:
- replication
- backup
- encryption
---

## Using Encryption in Replication Tasks

TrueNAS replication allows users to create replicated snapshots of data stored in encrypted pools, datasets or zvols as a way to back up stored data to a remote system.
You can use encrypted datasets in a local replication.

{{< hint type=important >}}
You can set up a replication task for a dataset encrypted with a passphrase or a hex encryption key, but you must unlock the dataset before the task runs or the task fails.
{{< /hint>}}

With the implementation of the **Local Administrator** user and role-based permissions, when setting up remote replication tasks when logged in as an admin user, requires selecting **Use Sudo For ZFS Commands**.

{{< include file="/static/includes/ReplicationIntroSCALE.md" >}}

Remote replication with datasets also require an SSH connection in TrueNAS. You can use an existing SSH connection if it has the same user credentials you want to use for the new replication task.

{{< include file="/static/contents/BasicReplicationProcess.md" >}}

## Creating a Remote Replication Task for an Encrypted Dataset

To streamline creating simple replication tasks, use the **Replication Task Wizard** to create and copy ZFS snapshots to another system.
The wizard assists with creating a new SSH connection and automatically creates a periodic snapshot task for sources that have no existing snapshots.

If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list to load the configuration settings for that task into the wizard, and then make changes such as assigning it a different destination, selecting other options like encryption, schedule, or retention lifetime, etc.
Saving changes to the configuration creates a new replication task without altering the task you loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

Unlock the source dataset and export the encryption key to a text editor such as Notepad.
Go to **Datasets** select the source dataset, locate the **ZFS Encryption** widget and unlock the dataset if locked.
Export the key and paste it in any text editor such as Notepad. If you set up encryption to use a passphrase, you do not need to export a key.

Configure the remote replication as described in the [Creating a Remote Replication Task]({{< ref "RemoteReplicationSCALE.md" >}}).

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Unlocking the Destination Dataset

After the replication task runs and creates the snapshot on the destination, you must unlock the dataset to access the data.
Click the <span class="iconify" data-icon="mdi:download"></span> from the replication task options to download a key file that unlocks the destination dataset.

### Replicating to an Unencrypted Destination Dataset

{{< hint type=important >}}
TrueNAS does not support preserving encrypted dataset properties when trying to re-encrypt an already encrypted source dataset.
{{< /hint >}}

To replicate an encrypted dataset to an unencrypted dataset on the remote destination system, follow the [instructions above](#setting-up-a-simple-replication-task-overview) to configure the task, then to clear the dataset properties for the replication task:

1. Select the task on the **Replication Task** widget. The **Edit Replication Task** screen opens.

2. Scroll down to and select **Include Dataset Properties** to clear the checkbox.

  {{< trueimage src="/images/SCALE/DataProtection/EditReplicationTaskIncludeDatasetProperties.png" alt="Edit Replication Task Include Dataset Properties" id="Edit Replication Task Include Dataset Properties" >}}

3. Click **Save**.  

This replicates the unlocked encrypted source dataset to an unencrypted destination dataset.

### Using Additional Encryption Options

When you replicate an encrypted pool or dataset, you have one level of encryption applied at the data storage level.
Use the passphrase or key created or exported from the dataset or pool to unlock the dataset on the destination server.

To add a second layer of encryption at the replication task level, select **Encryption** on the **Replication Task Wizard** or on the **Add Replication Task** screen, then select the type of encryption you want to apply.

{{< trueimage src="/images/SCALE/DataProtection/ReplicationTaskEncryptionOptions.png" alt="Replication Task Encryption Options" id="Replication Task Encryption Options" >}}

Select either **Hex** (base-16 numeral format) or **Passphrase** (alphanumeric format) from the **Encryption Key Format** dropdown list to open settings for that type of encryption.

Selecting **Hex** displays **Generate Encryption Key** preselected. Select the checkbox to clear it and display the **Encryption Key** field where you can import a custom hex key.

Selecting **Passphrase** displays the **Passphrase** field where you enter your alphanumeric passphrase.

Select **Store Encryption key in Sending TrueNAS database** to store the encryption key in the sending TrueNAS database or leave unselected to choose a temporary location for the encryption key that decrypts replicated data.
