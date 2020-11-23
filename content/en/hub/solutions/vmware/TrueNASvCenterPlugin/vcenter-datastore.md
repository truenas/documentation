---
title: "TrueNAS Datastores"
description: "How to add and modify TrueNAS datastores in vCenter."
tags: ["vCenter Plugin", "TrueNAS Enterprise"]
weight: 40
---

The vCenter plugin can create two different kinds of datastores on a TrueNAS host:

* Virtual Machine File System (VMFS) for iSCSI blocklevel access
* Network File System (NFS) for file-level access

<img src="/images/VCP-DatastoreList.png">
<br><br>

vCenter has a default limit of eight NFS datastores per ESX host.
See this [VMware article](https://kb.vmware.com/s/article/1020652) about maximum supported volumes for more details.

Datastores that already exist on the TrueNAS system are shown.
Other types of shares created and managed through the TrueNAS web interface are not shown here.

## Add Datastore

Click **+** (Add) to create a new datastore.

<img src="/images/VCP-DatastoreCreate.png">
<br><br>

Choose an ESXi host to store the datastore, or an ESXi cluster to spread the reserved space across multiple systems.
Click **Next**.

<img src="/images/VCP-DatastoreCreateType.png">
<br><br>

Choose the datastore type.
*VMFS* datastores provide block-level (iSCSI) storage for virtual machines.
*NFS* datastores provide file-level storage access.
Click **Next** to view specific options for each type of datastore.
These are shown in **VMFS Datastore Configuration** and **NFS Datastore Configuration**.

### VMFS Datastore Configuration

<img src="/images/VCP-VMFSDatastoreSettings.png">
<br><br>

Enter a name for the new datastore.
Enter a value and choose a unit for the *Datastore Size*.
The size must be smaller than the chosen *Volume*.
The minimum size for a VMFS datastore is *2GB*.

The *Data Path IP* shows the IP address of the TrueNAS system.
Other connected TrueNAS systems can also be selected with the drop down menu.

Select the datastore *VMFS Version* from the drop down menu.
Choose between the modern version *6* or the legacy versions *3* and *5*.
See the [VMware VMFS documentation](https://docs.vmware.com/en/VMwarevSphere/6.5/com.vmware.vsphere.storage.doc/GUID-7552DAD4-1809-4687-B46EED9BB42CE277.html?src=af_5acfd7719690b&cid=70134000001YR9C) for detailed comparisons.

Enabling *Sparse Volume* reserves less than the total available size and metadata storage space, but this can cause writes to fail if the volume has little space remaining.
See [zfs(8)](https://www.freebsd.org/cgi/man.cgi?query=zfs) for more details.

Select the TrueNAS pool to hold the datastore.
The *Volume* must be large enough to contain the chosen *Datastore Size*.

### NFS Datastore Configuration

<img src="/images/VCP-NFSDatastoreSettings.png">
<br><br>

Enter a *Name* for the new datastore.
The *Data Path IP* shows the IP address of the TrueNAS system.
Other TrueNAS systems added to vCenter Server can also be selected with the drop down menu.
Select the path to the TrueNAS NFS share from the *Mount Share Path* drop down menu.
Click **Next**.

### Review Datastore Configuration

After configuring the VMFS or NFS datastore, a summary of the new datastore is shown.
To begin creating the datastore, review the settings and click **Finish**.
The interface shows a warning when the datastore contains more than *80%* of the available space.
Click **Refresh** to see the new datastore after it has been created.

## Extending a Datastore

The total size of a VMFS datastore can be increased when additional space is required.
Highlight a VMFS datastore from the list and click **Edit** to extend it.

<img src="/images/VCP-DatastoreExtend.png">
<br><br>

The new size must be larger than the current size and less than the total available capacity.
For best performance, it is recommended to use less than *80%* of the total available size.
Click **Extend Datastore**.
A datastore reserves some of the available space for internal use, leaving the available capacity as slightly less than the chosen amount.

## Cloning Datastores

Cloning an NFS or VMFS datastore creates a duplicate of that datastore.
Select a datastore from the list and click **Clone**.
Choose an ESXi host to store the new datastore and click **Next**.
Enter a name for the clone and click **Clone Datastore**.

vCenter starts the cloning process and continues the task in the background.
Click **Refresh** after some time to see the cloned datastore.
