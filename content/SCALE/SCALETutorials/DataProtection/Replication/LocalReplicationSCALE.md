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

## Using Local Replication

A local replication creates a zfs snapshot and saves it to another location on the same TrueNAS system either using a different pool, or dataset or zvol.
This allows users with only one system to take quick data backups or snapshots of their data when they have only one system.
In this scenario, create a dataset on the same pool to store the replication snapshots. You can create and use a zvol for this purpose.
If configuring local replication on a system with more than one pool, create a dataset to use for the replicated snapshots on one of those pools.

While we recommend regularly scheduled replications to a remote location as the optimal backup scenario, this is useful when no remote backup locations are available, or when a disk is in immediate danger of failure.

{{< include file="/static/includes/ZvolSpaceWarning.md" >}}

With the implementation of the **Local Administrator** user and role-based permissions, setting up replication tasks as an admin user has a few differences over setting up replication tasks when logged in as root.

{{< include file="/static/includes/ReplicationIntroSCALE.md" >}}

## Setting Up a Simple Replication Task Overview
This section provides a simple overview of setting up a replication task regardless of the type of replication, local or remote.
It also covers the related steps you should take prior to configuring a replication task.

{{< include file="/static/includes/BasicReplicationProcess.md" >}}

## Configuring a Local Replication Task

The replication wizard allows users to create and copy ZFS snapshots to another location on the same system.

If you have an existing replication task, you can select it on the **Load Previous Replication Task** dropdown list to load the configuration settings for that task into the wizard, and then make change such as assigning it a different destination, schedule, or retention lifetime, etc.
Saving changes to the configuration creates a new replication task without altering the task you loaded into the wizard.

{{< include file="/static/includes/ReplicationCreateDatasetAndAdminHomeDirSteps.md" >}}

3. Go to **Data Protection** and click **Add** on the **Replication Tasks** widget to open the **Replication Task Wizard**. Configure the following settings:

   {{< trueimage src="/images/SCALE/DataProtection/CreateLocalReplicationTask.png" alt="New Local Replication Task" id="New Local Replication Task" >}}

   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

   a. Select **On this System** on the **Source Location** dropdown list.
      Browse to the location of the pool or dataset you want to replicate and select it so it populates **Source** with the path.
      Selecting **Recursive** replicates all snapshots contained within the selected source dataset snapshots.

   b. Select **On this System** on the **Destination Location** dropdown list.
      Browse to the location of the pool or dataset you want to use to store replicated snapshots and select to populate **Destination** with the path.

   c. (Optional) Enter a name for the snapshot in **Task Name**.
      TrueNAS populates this field with the default name using the source and destination paths separated by a hyphen, but this default can make locating the snapshot in destination dataset a challenge.
      To make it easier to find the snapshot, give it name easy for you to identify. For example, a replicated task named *dailyfull* for a full file system snapshot taken daily.

{{< include file="/static/includes/ReplicationScheduleAndRetentionSteps.md" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}
