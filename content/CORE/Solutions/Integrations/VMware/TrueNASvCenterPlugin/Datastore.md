---
title: "Datastore"
weight: 30
---

{{< toc >}}

The vCenter plugin can create two different kinds of datastores on a TrueNAS host:

* Virtual Machine File System (VMFS) for iSCSI blocklevel access
* Network File System (NFS) for file-level access

## List

![DatastoreList](/images/vCenterPlugin/DatastoreList.png "Datastores List")

vCenter has a default limit of *eight NFS datastores per ESX host*.
See this [VMware article](https://kb.vmware.com/s/article/1020652) about maximum supported volumes for more details.

Datastores that already exist on the TrueNAS system are shown.
Other types of shares created and managed through the TrueNAS web interface are not shown here.

## Add Datastore

Click *+* (Add) to create a new datastore.

![DatastoreCreate](/images/vCenterPlugin/DatastoreCreate.png "Creation Options")

Choose an ESXi host to store the datastore, or an ESXi cluster to spread the reserved space across multiple systems.
Click *Next*.

![DatastoreCreateType](/images/vCenterPlugin/DatastoreCreateType.png "Datastore Types")

Choose the datastore type.
*VMFS* datastores provide block-level (iSCSI) storage for virtual machines.
*NFS* datastores provide file-level storage access.
Click **Next** to view specific options for each type of datastore.
These are shown in **VMFS Datastore Configuration** and **NFS Datastore Configuration**.

{{< tabs "Datastore Types" "v" >}}
{{< tab "VMFS Datastore Configuration" >}}
![VMFSDatastoreSettings](/images/vCenterPlugin/VMFSDatastoreSettings.png "VMFS Options")

Enter a name for the new datastore.
Enter a value and choose a unit for the *Datastore Size*.
The size must be smaller than the chosen *Volume*.
The minimum size for a VMFS datastore is *2GB*.

The *Data Path IP* shows the IP address of the TrueNAS system.
Other connected TrueNAS systems can also be selected with the drop down menu.

Select the datastore *VMFS Version* from the drop down menu.
Choose between the modern version *6* or the legacy versions *3* and *5*.
See the [VMware VMFS documentation](https://docs.vmware.com/en/search/) for detailed comparisons.

Enabling *Sparse Volume* reserves less than the total available size and metadata storage space, but this can cause writes to fail if the volume has little space remaining.
See [zfs(8)](https://www.freebsd.org/cgi/man.cgi?query=zfs) for more details.

Select the TrueNAS pool to hold the datastore.
The *Volume* must be large enough to contain the chosen *Datastore Size*.
{{< /tab >}}
{{< tab "NFS Datastore Configuration" >}}
![NFSDataStoreSettings](/images/vCenterPlugin/NFSDatastoreSettings.png "NFS Options")

Enter a *Name* for the new datastore.
The *Data Path IP* shows the IP address of the TrueNAS system.
Other TrueNAS systems added to vCenter Server can also be selected with the drop down menu.
Select the path to the TrueNAS NFS share from the *Mount Share Path* drop down menu.
Click *Next*.
{{< /tab >}}
{{< /tabs >}}

### Review Datastore Configuration

After configuring the VMFS or NFS datastore, a summary of the new datastore is shown.
To begin creating the datastore, review the settings and click *Finish*.
The interface shows a warning when the datastore contains more than *80%* of the available space.
Click *Refresh* to see the new datastore after it has been created.

## Extending a Datastore

The total size of a VMFS datastore can be increased when additional space is required.
Highlight a VMFS datastore from the list and click *Edit* to extend it.

![DatastoreExtend](/images/vCenterPlugin/DatastoreExtend.png "Extension Options")

The new size must be larger than the current size and less than the total available capacity.
For best performance, it is recommended to use less than *80%* of the total available size.
Using a decimal number when extending will round the size down to the nearest 1024 bytes or whatever the configured default blocksize is for the volume.
Click *Extend Datastore*.
A datastore reserves some of the available space for internal use, leaving the available capacity as slightly less than the chosen amount.

## Cloning Datastores

Cloning an NFS or VMFS datastore creates a duplicate of that datastore.
Select a datastore from the list and click *Clone*.
Choose an ESXi host to store the new datastore and click *Next*.
Enter a name for the clone and click *Clone Datastore*.

vCenter starts the cloning process and continues the task in the background.
Click *Refresh* after some time to see the cloned datastore.
