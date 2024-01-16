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
ESXi free has a locked (read-only) API that prevents using TrueNAS SCALE VMWare Snapshots.

This tutorial uses ESXi version 8.
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

Before using TrueNAS SCALE to create VMWare snapshots, configure TrueNAS to act as a VFMS datastore by creating a zvol, presenting the zvol to the ESXi host using an iSCSI or NFS share, and then creating and starting the VM(s) in ESXi.
You must power on virtual machines for TrueNAS to include them in VMWare snapshots.

1. Go to **Datasets** and click **Add Zvol** to Create a dedicated zvol for VMWare following the procedure in [Adding and Managing Zvols]({{< relref "addmanagezvols.md" >}}).
  This tutorial uses *virtual/vmware/zvol-01*.

2. To [create an iSCSI share]({{< relref "addingiscsishares.md" >}}), go to **Shares** and click **Wizard** on the **Block (iSCSI) Shares Targets** widget.

    a. Give the share a name, such as *vmware*.
      Select **Device** for **Extent Type** and select the zvol from the **Device** dropdown.
      Leave **Sharing Platform** set to VMware and **Target** set to **Create New**, then click **Next**.
  
    b. Set **Portal** to **Create New**.
        You can leave **Discovery Authentication Method** set to **NONE**, or select **CHAP** or **Mutual CHAP** and enter a **Discovery Authentication Group** ID.
        Click **Add** next to **IP Address** and select either **0.0.0.0** for IPv4 or **::** for IPv6 to listen on all ports.

    c. Leave **Initiators** blank and click **Save**.

3. In the VMWare ESXi Host Client, go to **Storage**, select **Adapters**, and then click **Software iSCSI** to configure the iSCSI connection.

    {{< trueimage src="/images/VMWareESXi/ConfigureiSCSI.png" alt="Configure iSCSI Screen" id="Configure iSCSI Screen" >}}

    a. Configure CHAP authentication if needed or leave set to **Do not use CHAP**.

    b. Click **Add port binding** and select the VMkernel interface *vmk0*. Click **Select**.

    c. Click **Add dynamic target**, enter the IP address for the TrueNAS SCALE system, and click **Save Configuration** to return to the **Adapters** screen.

      {{< trueimage src="/images/VMWareESXi/StorageAdapters.png" alt="Adapters Screen" id="Adapters Screen" >}}

    d. Click **Rescan** to discover the iSCSI initiator.
      ESXi automatically adds static targets for discovered initiators.
      Click **Software iSCSI** again to confirm.

    e. Go to **Devices** and click **Rescan** to discover the shared storage. ESXi adds the TrueNAS iSCSI disk to the list of devices.

      {{< trueimage src="/images/VMWareESXi/StorageDevices.png" alt="Devices Screen" id="Devices Screen" >}}

4. Go to **Datastores** and click **New Datastore** to create a new VMFS datastore using the TrueNAS device.
   Then go to **Virtual Machines** and create your new virtual machine(s), using the new datastore for storage.

## Creating a VMWare Snapshot

To configure TrueNAS SCALE to create VMWare snapshots, go to **Data Protection** and click the **VMware Snapshot Integration** button in the **Periodic Snapshot Tasks** widget to open the **VMWare Snapshots** screen.

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

The saved snapshot configuration appears on the **VMware Snapshots** screen.

{{< trueimage src="/images/SCALE/DataProtection/VMWareSnapshotsScreenConfigured.png" alt="VMWare Snapshot Configured" id="VMWare Snapshot Configured" >}}

## Using ZFS Snapshots from TrueNAS SCALE in VMWare ESXi

<!-- 

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
