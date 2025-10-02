---
title: "Setting Up a Local Replication Task"
description: "Provides instructions on adding a replication task using different pools or datasets on the same TrueNAS system."
weight: 20
aliases:
tags:
- replication
- backup
- snapshots
keywords:
- enterprise data storage solution
- nas data storage solution
- data protection
- data backup and recovery
---


A local replication creates a ZFS snapshot and saves it to another location on the same TrueNAS system using different pools, datasets, or zvols.
This allows users with only one system to take quick data backups or snapshots of their data when they have only one system.

If you have only one pool, create a dataset in that pool to store the replication snapshots. You can use a zvol for this purpose.
If configuring local replication on a system with more than one pool, create a dataset for the replicated snapshots on one of those pools.

While we recommend regularly scheduled replications to a remote location as the optimal backup scenario, local replication is useful when a remote backup location is available or when a disk is in immediate danger of failure.

{{< include file="/static/includes/ZvolSpaceWarning.md" >}}

Setting up replication tasks as an admin user has a few differences from setting up replication tasks when logged in as root.

{{< include file="/static/includes/ReplicationIntroSCALE.md" >}}

{{< include file="/static/includes/ReplicationIntroSCALE.md" >}}

{{< include file="/static/includes/ReplicationLocalBeforeYouBegin.md" >}}

To configure the local replication task, follow the instructions in the section below.

## Configuring a Local Replication Task

Use the **Replication Task Wizard** to create and copy ZFS snapshots to another system, which streamlines creating simple replication tasks.
After creating the replication task, TrueNAS automatically creates a periodic snapshot task for sources that have no existing snapshots.

If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list.
This loads the configuration settings for that task into the wizard, where you can make changes such as assigning it a different destination, setting a new schedule, or retention lifetime, etc.
Saving changes to the configuration creates a new replication task without altering the task originally loaded into the wizard.
This saves some time when creating multiple replication tasks between the same two systems.

{{< include file="/static/includes/ReplicationWizardSteps1and2.md" >}}

3. Configure the settings for local replication after selecting **On This System** in either **Source Location** or **Destination Location**.

   {{< trueimage src="/images/SCALE/DataProtection/CreateLocalReplicationTask.png" alt="New Local Replication Task" id="New Local Replication Task" >}}

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

   a. Use the file browser for **Source Location** to browse to the location of the dataset with the data to replicate.
      Clicking on the dataset(s) populates the **Source** path.
      
      When setting up the **Source**, you can select multiple sources or manually type the names into the **Source** field.

   b. Use the file browser for **Destination Location** to browse to the location of the pool or dataset to receive the replicated snapshots.
      Clicking on the dataset populates **Destination** path.

      When setting up the **Destination**, the **Destination** path allows adding a directory/dataset by entering <b>/<i>name</i></b>, where *rname* is the name of a directory or dataset. The source path does not allow adding a new dataset/directory.
      You can use zvols as a local replication destination. Add a name to the end of the path to create a new dataset in that location.

   c. (Optional) Enter a name for the snapshot in **Task Name**.
      TrueNAS populates this field with the default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in the destination dataset a challenge.
      To make it easier to find the snapshot, give it a name that is easy for you to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily.

{{< include file="/static/includes/ReplicationWizardSteps5And6.md" >}}

{{< include file="/static/includes/ReplicationScheduleAndRetentionSteps.md" >}}

For information on replicating encrypted pools or datasets, see [Setting Up an Encrypted Replication Task]({{< ref "ReplicationWithEncryptionSCALE" >}}).

{{<include file="/static/includes/addcolumnorganizer.md">}}
