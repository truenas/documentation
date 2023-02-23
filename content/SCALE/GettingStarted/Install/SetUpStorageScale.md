---
title: "Setting Up Storage"
description: "This article provides basic instructions for setting up your first storage pool and dataset or zvol."
weight: 40
tag:
- scaleinstall
- scalestorage
---

{{< toc >}}

Now that you are logged in to the web interface, it is time to set up TrueNAS storage.
These instructions describe a simple *mirrored* pool setup, where one disk is for storage and the other for data protection.
However, there are a vast number of configuration possibilities for your storage environment!
You can read more about these options in the in-depth [Creating Storage Pools]({{< relref "CreatePoolScale.md" >}}).

## Minimum Storage Requirements

At minimum, the system needs at least two disks of identical size to create a mirrored storage pool.
While a single-disk pool is technically allowed, it is not recommended.
The disk used for the TrueNAS installation does not count toward this limit.

You can configure data backups in several ways and have different requirements.
Backing data up in the cloud requires a 3rd party cloud storage provider account.
Backing up with replication requires you to have additional storage on the TrueNAS system or (ideally) another TrueNAS system in a different location.

## Setting Up Storage

Click on **Storage** to access the **[Storage]({{< relref "/SCALE/SCALEUIReference/Storage/StorageDashboardScreen.md" >}})** screen and widgets where you create pools and manage your storage pools, disks, and devices.

Click [here]({{< relref "CreatePoolSCALE.md" >}}) for instructions on how to plan for and create pools on SCALE. 
If you want to create additional pools with other disks not assigned to a pool, you can do that now or as you have a need for them.

### Adding Datasets or Zvols

New pools have a root dataset that allows further division into new non-root parent and child datasets, or into storage volumes (zvols).
A *dataset* is a file system that stores data and has specific permissions.
A *zvol* is a virtual block device that has a predefined storage size. Zvols are used by virtual machines (VMs) for their data storage needs.

To create a dataset click **Datasets** on the main navigation panel or **Manage Datasets** on the **Storage Dashboard > Usage** widget to open the **Datasets** screen. Click **[Add Dataset]({{< relref "DatasetsSCALE.md" >}})** or **[Add Zvol]({{< relref "AddManageZvols.md" >}})**.
{{< hint info >}}
The two **Add Dataset** fields that you cannot change after you click **Save** are the dataset **Name** and **Share Type**. 
**Name** is a required field but setting **Share Type** is optional. 
The default setting for **Share Type** is **Generic** which works for any share type you create, or if you know you want to set up sharing for Windows, select **SMB** for an SMB share. 
A dataset with a **Share Type** set to **SMB** optimizes that dataset for the Windows sharing protocol.
{{< /hint >}}
Organize the pool with as many datasets or zvols you need according to your access and data sharing requirements before moving data into the pool.

If you plan to deploy container applications, the system automatically creates the **ix-applications** dataset but this is not used for application data storage. If you want to store data by application, create the dataset first and then deploy your application.

## Taking the Next Step

When you finish building and organizing your TrueNAS pools and datasets, move on to configuring how the system [shares data]({{< relref "SetUpSharing.md" >}})

If you don't plan to set up data sharing, you can [set up backup solutions]({{< relref "SetUpBackupSCALE.md" >}}) for your system and stored data.

{{< taglist tag="scaleinstall" limit="10" >}}

{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}
