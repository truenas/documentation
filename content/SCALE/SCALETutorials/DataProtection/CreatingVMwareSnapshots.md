---
title: "Creating VMWare Snapshots"
description: "Provides instructions for creating ZFS snapshots when using TrueNAS as a VMWare datastore."
weight: 55 
aliases:
 - /scale/scaletutorials/storage/creatingvmwaresnapshots/
tags:
- vm
- snapshots
---

Use this procedure to create ZFS snapshots when using TrueNAS SCALE as a VMWare datastore.

{{< hint type=note >}}
You must have a paid edition of VMWare ESXi to use the TrueNAS SCALE VMWare Snapshots feature.
If you try to use them with the free-edition of VMware ESXi, you see this error message: "Error, Can't create snapshot, current license or ESXi version prohibits execution of the requested operation."
ESXi free has a locked (read-only) API that prevents using TrueNAS SCALE VMWare Snapshots.
The cheapest ESXi edition that is compatible with TrueNAS VMware Snapshots is VMWare vSphere Essentials Kit.
{{< /hint >}}

When creating a ZFS snapshot of the connected dataset, VMWare automatically takes a snapshot of any running virtual machine.
VMware snapshots can integrate VMware Tools, making it possible to quiesce VM snapshots, sync filesystems, take shadow copy snapshots, and more.
This allows VMware snapshots to be application-consistent instead of crash-consistent.
See [Manage Snapshots](https://docs.vmware.com/en/VMware-vSphere/8.0/vsphere-vm-administration/GUID-50BD0E64-75A6-4164-B0E3-A2FBCCE15F1A.html) from VMWare for more information.

VM snapshots are included as part of the connected Virtual Machine File System (VMFS) datastore and stored as a point-in-time within the scheduled or manual TrueNAS ZFS snapshot of the data or zvol backing that VMWare datastore.
The temporary VMware snapshots are automatically deleted on the VMWare side, but still exist in the ZFS snapshot and are available as stable restore points.

{{< enterprise >}}
TrueNAS Enterprise customers with TrueNAS CORE 12.0 and newer and TrueNAS SCALE 22.12.4 (Bluefin) and newer deployed can access the iXsystems TrueNAS vCenter Plugin.
This activates management options for TrueNAS hardware attached to vCenter Server and enables limited management of TrueNAS systems from a single interface.

Please contact iXsystems Support to learn more and schedule a time to deploy or upgrade the plugin.
{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

{{< /enterprise >}}

## Before You Begin

Before using TrueNAS SCALE to create VMWare snapshots, configure TrueNAS to act as a VFMS datastore by creating a zvol (or one zvol), connecting the zvol(s) to the ESXi host using an iSCSI or NFS share, and 

## Creating a VMWare Snapshot

Go to **Data Protection** and click the **VMware Snapshot Integration** button in the **Periodic Snapshot Tasks** widget to open the **VMWare Snapshots** screen.

{{< trueimage src="/images/SCALE/DataProtection/vmwaresnapshottask.png" alt="VMware Snapshot Integration" id="VMware Snapshot Integration" >}}

Click the **Add** button to configure the VMWare Snapshot Task.

{{< trueimage src="/images/SCALE/DataProtection/vmwareaddsnapshottask.png" alt="VMWare Snapshots Screen" id="VMWare Snapshots Screen" >}}

{{< hint type=important >}}
You must follow the exact sequence to add the VMware snapshot or the **ZFS Filesystem** and **Datastore** fields do not populate with options available on your system.
If you click in *ZFS Filestore** or **Datastores** before you click **Fetch Datastores** the creation process fails, the two fields do not populate with the information from the VMWare host, and you must exit the add form or click **Cancel** and start again.
{{< /hint >}}

1. Enter the IP address or host name for your VMWare system in **Hostname**.

   {{< trueimage src="/images/SCALE/DataProtection/emptyvmwaresnapshotadd.png" alt="Add VMware Snapshot Screen" id="Add VMware Snapshot Screen" >}}

2. Enter the user on the VMware host with permission to snapshot virtual machine for VMWare in **Username** and the the password for that account in **Password**.

3. Click **Fetch Datastores**. This connects TrueNAS SCALE to the VMWare host and populates the **ZFS Filesystem** and **Datastore** dropdown fields.

4. Select the file system from the **ZFS Filesystem** dropdown list of options. This is the dataset on the TrueNAS SCALE that ZFS and VMWare snapshots are taken and stored on.

5. Select the datastore from the **Datastore** dropdown list of options. This is the VMware Tools VMFS datastore containing the VMs to snapshot.

6. Click **Save**.

Configured snapshots appear on the **VMware Snapshots** screen. <!-- STATUS INDICATOR? -->

{{< trueimage src="/images/SCALE/DataProtection/VMWareSnapshotsScreenConfigured.png" alt="VMWare Snapshot Configured" id="VMWare Snapshot Configured" >}}

## Using ZFS Snapshots from TrueNAS SCALE in VMWare ESXi

<!-- 
You must power on virtual machines before you can copy TrueNAS SCALE snapshots to VMWare.

The temporary VMWare snapshots deleted on the VMWare side still exist in the ZFS snapshot and are available as stable restore points.
These coordinated snapshots go on the list found by clicking **VMware Snapshot Integration** in the **Data Protection > Periodic SnapShot Tasks** widget.
-->

<!-- Create dedicated zvol

Create iscsi or NFS share 

Set up integration, create snapshot

Clone snapshot 

Share snapshot with VMWare as a new LUN

```
[root@esxi01:~] esxcli storage vmfs snapshot
Usage: esxcli storage vmfs snapshot {cmd} [cmd options]

Available Namespaces:
  extent                Manage VMFS snapshot extents.

Available Commands:
  list                  List unresolved snapshots/replicas of VMFS volume.
  mount                 Mount a snapshot/replica of a VMFS volume.
  resignature           Resignature a snapshot/replica of a VMFS volume.
[root@esxi01:~] esxcli storage vmfs snapshot list
65a58a71-c5ac3323-6306-d4ae52c1e78d
   Volume Name: vmfs-01
   VMFS UUID: 65a58a71-c5ac3323-6306-d4ae52c1e78d
   Can mount: false
   Reason for un-mountability: the original volume is still online
   Can resignature: true
   Reason for non-resignaturability:
   Unresolved Extent Count: 1
[root@esxi01:~] esxcli storage vmfs snapshot resignature -u 65a58a71-c5ac3323-6306-d4ae52c1e78d
```

Creates new datastore

Stop old VM and use this datastore to spin up a new VM with the snapshot  -->
