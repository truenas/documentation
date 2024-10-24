---
title: "Setting Up Storage"
description: "Provides basic instructions for setting up your first storage pool and dataset or zvol."
weight: 40
tags:
- install
- storage
keywords:
- nas storage solution
- nas enterprise storage
- data storage solution
- persistent storage
---

Now that you are logged in to the web interface, it is time to set up TrueNAS storage.
These instructions describe a simple *mirrored* pool setup, where half the selected disks are used for storage and the other half for data protection.
However, there are many configuration possibilities for your storage environment!

You can read more about these options in [Creating Storage Pools]({{< relref "CreatePoolWizard.md" >}}).
You can also use the [ZFS Capacity Calculator](https://www.truenas.com/docs/references/zfscapacitycalculator/) and [ZFS Capacity Graph](https://www.truenas.com/docs/references/zfscapacitygraph/) to compare configuration options.

## Minimum Storage Requirements

At minimum, the system needs at least two disks of identical size to create a mirrored storage pool.
While a single-disk pool is technically allowed, it is not recommended.
The disk used for the TrueNAS installation does not count toward this minimum.

You can configure data backups in several ways and have different requirements.
Backing data up in the cloud requires a 3rd party cloud storage provider account.
Backing up with replication requires you to have additional storage on the TrueNAS system or (ideally) another TrueNAS system in a different location.
This approach leverages persistent storage for overall data protection.

## Setting Up Storage

Your system must have at least one storage pool configured.

After installing SCALE, enter the IP address assigned by DHCP (displayed in the Console Setup Menu) into a browser window to access the SCALE sign-in splash screen.
Log in to SCALE.

Begin by configuring your first storage pool.

See [Creating Storage Pools]({{< relref "CreatePoolWizard.md" >}}) for more information on how to plan for and create pools in SCALE.
If you want to create additional pools with other disks not assigned to a pool, you can do that now or as you have a need for them.

### Creating a Storage Pool

{{< include file="/static/includes/CreatePool.md" >}}

The root dataset of the first pool you create automatically becomes the system dataset.

After adding your first pool, you can move on to creating datasets for data sharing, applications you plan to deploy, or other use cases.

### Adding Datasets or Zvols

New pools have a root dataset that allows further division into new non-root parent and child datasets or into storage volumes (zvols).
A dataset is a file system that stores data and has specific permissions.

A *zvol* is a virtual block device (like a virtual disk drive) that has a predefined storage size.
Zvols are generally used with the iSCSI sharing protocol and also virtual machines (VMs) for their data storage needs.

To create a dataset or zvol, you can click **Datasets** on the main navigation panel or go to **Storage** and click **Manage Datasets** on the **Usage** widget for a specific pool to open the **Datasets** screen.

{{< include file="/static/includes/CreateDatasetSCALE.md" >}}

Organize the pool with as many datasets or zvols you need according to your access and data sharing requirements before moving data into the pool.

See [Adding or Managing Datasets]({{< relref "DatasetsSCALE.md" >}}) for more information on configuring datasets, or [Adding or Managing Zvols]({{< relref "AddManageZvols.md" >}}) for more information on zvols.

## Taking the Next Step

After you finish creating your initial pool and the datasets or zvols, you can continue building and organizing your TrueNAS pools and datasets or move on to configuring how the system [shares data]({{< relref "SetUpSharing.md" >}}).

If you do not plan to set up data sharing, you can [set up backup solutions]({{< relref "SetUpBackupSCALE.md" >}}) for your system and stored data.
