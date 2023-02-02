---
title: "Storage Configuration"
description: "This article describes how to configure storage on TrueNAS CORE."
weight: 60
tags:
- coregettingstarted
- corestorage
---

{{< toc >}}

Now that we're logged in to the web interface, it's time to set up TrueNAS storage.
These instructions demonstrate a simple *mirrored* pool setup, where one disk is used for storage and the other for data protection.
However, there are a vast number of configuration possibilities for your storage environment!
You can read more about these options in the in-depth [Pool Creation article]({{< relref "PoolCreate.md" >}}).

## Requirements

At minimum, the system needs at least two identically sized disks to create a mirrored storage pool.
While a single-disk pool is technically allowed, it is not recommended.
The disk used for the TrueNAS installation does not count toward this limit.

Data backups can be configured in several ways and have different requirements.
Backing data up in the Cloud requires a 3rd party Cloud Storage provider account.
Backups with Replication requires either additional storage on the TrueNAS system or (ideally) another TrueNAS system in a different location.

## Simple Storage Setup

Go to **Storage > Pools** and click **ADD**.
Set **Create a new pool** and click **CREATE POOL**

![StoragePoolsAddCreateManager](/images/CORE/12.0/StoragePoolsAddCreateManager.png "TrueNAS Pool Manager")

For the **Name**, enter *tank* or any other preferred name.
In the **Available Disks**, set two identical disks and click the <span>&#8594;</span> <!-- right arrow icon --> to move them to the **Data VDevs** area.
  
{{< hint info >}}
If the disks used have non-unique serial numbers, they do not populate the **Available Disks** section until the **Show disk with non-unique serial numbers** checkbox is selected.
{{< /hint >}}

![StoragePoolsAddCreateTank](/images/CORE/12.0/StoragePoolsAddCreateTank.png "Creating the tank pool")

TrueNAS automatically suggests **Mirror** as the ideal layout for maximized data storage and protection.

Review the **Estimated total raw data capacity** and click **CREATE**.
TrueNAS wipes the disks and adds *tank* to the **Storage > Pools** list.

![StoragePoolsListTank](/images/CORE/12.0/StoragePoolsListTank.png "Finding the tank pool")

### Adding Datasets or Zvols

New pools have a root dataset that allows further division into new datasets or zvols.
A *dataset* is a file system that stores data and has specific permissions.
A *zvol* is a virtual block device that has a predefined storage size.
To create either one, go to **Storage > Pools**, click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>, and select **Add Dataset** or **Add Zvol**.

![StoragePoolsAddDataset](/images/CORE/12.0/StoragePoolsAddDataset.png "Adding a new dataset or zvol")

These are often created as part of configuring specific data sharing situations:

* A dataset with a **Share Type** set to **SMB** optimizes that dataset for the Windows sharing protocol.
* Block device sharing (iSCSI) requires a zvol.

Organize the pool with additional datasets or zvols according to your access and data sharing requirements before moving any data into the pool.

When you're finished building and organizing your TrueNAS pools, move on to configuring how the system [shares data]({{< relref "SharingStorage.md" >}})

{{< taglist tag="corestoredata" limit="10" >}}

{{< taglist tag="coregettingstarted" limit="10" title="Getting Started Articles" >}}
