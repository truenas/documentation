---
title: "Datastore"
weight: 30
---

{{< toc >}}

The vCenter plugin can create two different kinds of datastores on a TrueNAS host:

* Virtual Machine File System (VMFS) for iSCSI block-level access
* Network File System (NFS) for file-level access

## List

![DatastoreList](/images/vCenterPlugin/DatastoreList.png "Datastores List")

vCenter has a default limit of *eight NFS datastores per ESX host*.
See this [VMware article](https://kb.vmware.com/s/article/1020652) about maximum supported volumes for more details.

The list shows Datastores that already exist on the TrueNAS system.
The list does not display other types of shares created and managed through the TrueNAS web interface.

## Add Datastore

Click *+* (Add) to create a new datastore.

![DatastoreCreate](/images/vCenterPlugin/DatastoreCreate.png "Creation Options")

Choose an ESXi host for the datastore or an ESXi cluster to spread the reserved space across multiple systems.
Click *Next*.

![DatastoreCreateType](/images/vCenterPlugin/DatastoreCreateType.png "Datastore Types")

Choose the datastore type.
*VMFS* datastores provide block-level (iSCSI) storage for virtual machines.
*NFS* datastores provide file-level storage access.
Click **Next** to view specific options for each datastore type (see the **VMFS Datastore Configuration** and **NFS Datastore Configuration** sections).

{{< tabs "Datastore Types" "v" >}}
{{< tab "VMFS Datastore Configuration" >}}
![VMFSDatastoreSettings](/images/vCenterPlugin/VMFSDatastoreSettings.png "VMFS Options")

Enter a name for the new datastore.
Enter a value and choose a unit for the *Datastore Size*.
The size must be smaller than the chosen *Volume*.
The minimum size for a VMFS datastore is *2GB*.

The *Data Path IP* shows the TrueNAS system's IP address.
Users can select other connected TrueNAS systems with the drop-down menu.

Select the datastore *VMFS Version* from the drop-down menu.
Choose between the modern version *6* or the legacy versions *3* and *5*.
See the [VMware VMFS documentation](https://docs.vmware.com/) for detailed comparisons.

Enabling *Sparse Volume* reserves less than the total available size and metadata storage space, but it can cause writing to fail if the volume has little space remaining.
See [zfs(8)](https://www.freebsd.org/cgi/man.cgi?query=zfs) for more details.

Select the TrueNAS pool to hold the datastore.
The *Volume* must be large enough to contain the chosen *Datastore Size*.

If you have a high availability NAS with a Fibre Channel license and a network configured to form a Fibre Channel fabric with the NAS and ESXi, you will also be able to select a *Fibre Channel port* for the datastore.

Selecting a *Fibre Channel port* enables that port with the datastore's target on the NAS and creates a datastore with a corresponding Fibre Channel HBA on the ESXi.
{{< /tab >}}
{{< tab "NFS Datastore Configuration" >}}
![NFSDataStoreSettings](/images/vCenterPlugin/NFSDatastoreSettings.png "NFS Options")

Enter a *Name* for the new datastore.
The *Data Path IP* shows the TrueNAS system's IP address.
Users can select other TrueNAS systems added to vCenter Server with the drop-down menu.
Select the path to the TrueNAS NFS share from the *Mount Share Path* drop-down menu.
Click *Next*.
{{< /tab >}}
{{< /tabs >}}

### Review Datastore Configuration

After configuring the VMFS or NFS datastore, vCenter will show a summary of the new datastore.
To begin creating the datastore, review the settings and click *Finish*.
The interface shows a warning when the datastore contains more than *80%* of the available space.
Click *Refresh* to see the new datastore after creating it.

## Extending a Datastore

Users needing additional space can increase the total size of a VMFS datastore.
Highlight a VMFS datastore from the list and click *Edit* to extend it.

![DatastoreExtend](/images/vCenterPlugin/DatastoreExtend.png "Extension Options")

The new size must be larger than the current size and less than the total available capacity.
For best performance, we recommend using less than *80%* of the total available size.
Using decimal notation will round down the size to the nearest 1024 bytes (or whatever the volume's configured default block size is).
Click *Extend Datastore*.
Datastores reserve some available space for internal use and set the available capacity to slightly less than the chosen amount.

## Cloning Datastores

Cloning an NFS or VMFS datastore duplicates that datastore.
Select a datastore from the list and click *Clone*.
Choose an ESXi host to store the new datastore and click *Next*.
Enter a name for the clone and click *Clone Datastore*.

vCenter starts the cloning process and continues the task in the background.
Click *Refresh* after some time to see the cloned datastore.
