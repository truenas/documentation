---
title: "Creating VMware-Snapshots"
description: "This article describes how to create a VMWare snapshot on TrueNAS CORE."
weight: 30
aliases:
 - /core/storage/vmware-snapshots/
 - /core/uireference/storage/vmware-snapshots/
tags:
- coresnapshots
---
 
**Storage** > **VMware-Snapshots** coordinates ZFS snapshots when using TrueNAS as a VMware datastore.
When a ZFS snapshot is created, TrueNAS automatically snapshots any running VMware virtual machines before taking a scheduled or manual ZFS snapshot of the dataset or zvol backing that VMware datastore.

To copy TrueNAS snapshots to VMWare, virtual machines must be powered-on.
The temporary VMware snapshots are then deleted on the VMware side but still exist in the ZFS snapshot and are available as stable restore points.
These coordinated snapshots go on the **Storage > Snapshots** list.

{{< hint info >}}
You need a paid-edition for VMware ESXi to use VMware-Snapshots. 
If you try to use them with ESXi free edition you see the following error message: **Error: Can't create snapshot, current license or ESXi version prohibits execution of the requested operation.** 
ESXi free has a locked (read-only) API that prevents using TrueNAS VMware-Snapshots. 
The cheapest ESXi edition that is compatible with TrueNAS VMware-Snapshots is **VMware vSphere Essentials Kit**.
{{< /hint >}}

## Create a VMware Snapshot

Go to **Storage > VMware Snapshots** and click **ADD**.

![StorageVMwareSnapshotsAdd](/images/CORE/12.0/StorageVMwareSnapshotsAdd.png "Creating a VMware Snapshot")

After entering the **Hostname**, **Username**, and **Password**, click **FETCH DATASTORES** to populate the menu and then select the datastore to synchronize. 

TrueNAS connects to the VMware host after clicking *FETCH DATASTORES*.
The **ZFS Filesystem** and **Datastore** drop-down menus populate from the VMware host response.
Choosing a datastore also selects any previously mapped dataset.

{{< taglist tag="coresnapshots" limit="10" >}}
