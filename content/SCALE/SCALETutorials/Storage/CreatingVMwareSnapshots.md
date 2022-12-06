---
title: "Creating VMWare Snapshots"
description: "This article provides instructions for creating ZFS snapshots when using TrueNAS as a VMWare datastore."
weight: 40 
tags:
- scalesnapshots
- scalevmware
- scalesnapshots
---


You must power on virtual machines for TrueNAS to copy snapshots to VMware.
The temporary VMware snapshots deleted on the VMware side still exist in the ZFS snapshot and are available as stable restore points.
These coordinated snapshots go in the **VMware Snapshots** list.

Use this procedure to create ZFS snapshots when using TrueNAS SCALE as a VMWare datastore. VMware Snapshots coordinate ZFS snapshots when using TrueNAS as a VMware datastore.
When creating a ZFS snapshot, TrueNAS SCALE automatically takes a snapshot of any running VMWare virtual machine before taking a scheduled or manual ZFS snapshot of the data or zvol backing that VMWare datastore.

{{< hint info >}}
You must have a paid-edition for VMWare ESXi to use the TrueNAS SCALE VMWare Snapshots feature.
If you try to use them with the free-edition of VMware ESXi, you see this error message: "Error, Can't create snapshot, current license or ESXi version prohibits execution of the requested operation."
ESXi free has a locked (read-only) API that prevents using TrueNAS SCALE VMWare Snapshots.
The cheapest ESXi edition that is compatible with TrueNAS VMware Snapshots is VMWare vSphere Essentials Kit.
{{< /hint >}}

## Creating a VMWare Snapshot

Go to **Data Protection** and click the **VMware Snapshot Integration** button in the **Periodic Snapshot Tasks** widget.

![DataProtectionVMwareSnapshotIntegration](/images/SCALE/22.12/vmwaresnapshottask.png "VMware Snapshot Integration")

Click the **Add** button to configure the VMWare Snapshot Task.

![DataProtectionVMwareSnapshotAdd](/images/SCALE/22.12/vmwareaddsnapshottask.png "Add VMware Snapshot Task")

{{< hint warning >}}
You must follow the exact sequence to add the VMware snapshot or the  **ZFS Filesystem** and  **Datastore** fields do not populate with options available on your system.
If you click in *ZFS Filestore** or **Datastores** before you click **Fetch Datastores** the creation process fails, the two fields do not populate with the information from the VMWare host and you must exit the add form or click **Cancel** and start again.
{{< /hint >}}

1. Enter the IP address or host name for your VMWare system in **Hostname**.
   
   ![AddVMwareSnapshotScreen](/images/SCALE/22.02/AddVMwareSnapshotScreen.png "Add VMware-Snapshot Screen")

2. Enter the user on the VMware host with permission to snapshot virtual machine for VMWare in **Username** and the the password for that account in **Password**.

3. Click **Fetch Datastores**. This connects TrueNAS SCALE to the VMWare host and populates the **ZFS Filesystem** and **Datastore** dropdown fields with the host response.

4. Select the file system from the **ZFS Filesystem** dropdown list of options.

5. Select the datastore from the **Datastore** dropdown list of options. 

6. Click **Save**.

## Copying TrueNAS SCALE Snapshots to VMWare

You must power on virtual machines before you can copy TrueNAS SCALE snapshots to VMWare.

The temporary VMWare snapshots deleted on the VMWare side still exist in the ZFS snapshot and are available as stable restore points.
These coordinated snapshots go on the list found by clicking **VMware Snapshot Integration** in the **Data Protection > Periodic SnapShot Tasks** widget.

{{< taglist tag="scalesnapshots" limit="10" >}}
{{< taglist tag="scalevmware" limit="10" title="Related VMWare Articles" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Datasets Articles" >}}
