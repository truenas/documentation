---
title: "Setting Up Storage"
description: "Provides basic instructions for setting up your first storage pool and dataset or zvol."
weight: 40
aliases:
 - /scale/gettingstarted/install/setupstoragescale/
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

You can read more about these options in [Creating Storage Pools]({{< ref "CreatePoolWizard" >}}).
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

After installing TrueNAS, enter the IP address assigned by DHCP (displayed in the Console Setup Menu) into a browser window to access the TrueNAS sign-in splash screen.
Log in to TrueNAS.

Begin by configuring your first storage pool.

See [Creating Storage Pools]({{< ref "CreatePoolWizard" >}}) for more information on how to plan for and create pools in TrueNAS.
If you want to create additional pools with other disks not assigned to a pool, you can do that now or as you have a need for them.

### Creating a Storage Pool
{{< include file="/static/includes/CreatePool.md" >}}

The root dataset of the first pool you create automatically becomes the system dataset.

After adding your first pool, you can move on to creating datasets for data sharing, applications you plan to deploy, or other use cases.

### Adding Datasets or Zvols
New pools have a root dataset that allows further division into new non-root parent and child datasets or into storage volumes (zvols).
A *dataset* is a file system that stores data and has specific permissions.

A *zvol* is a virtual block device (like a virtual disk drive) that has a predefined storage size.
Zvols are generally used with the iSCSI sharing protocol and also virtual machines (VMs) for their data storage needs.

To create a dataset or zvol, you can click **Datasets** on the main navigation panel or go to **Storage** and click **Manage Datasets** on the **Usage** widget for a specific pool to open the **Datasets** screen.

{{< include file="/static/includes/CreateDatasetSCALE.md" >}}

Organize the pool with as many datasets or zvols you need according to your access and data sharing requirements before moving data into the pool.

See [Adding or Managing Datasets]({{< ref "DatasetsSCALE" >}}) for more information on configuring datasets, or [Adding or Managing Zvols]({{< ref "AddManageZvols" >}}) for more information on zvols.

#### Adding a Dataset and Share
TrueNAS provides the option to create the dataset and share at the same time.
The **Add Dataset** screen allows you to create the new dataset and use a preset to configure an SMB, NFS, or multi-mode share.
The **Shares** screen also provides options to add an SMB or NFS share and create the dataset at the same time.

{{< hint type="warning" title="Sharing the Root Dataset" >}}
Do not set up sharing on the root dataset!
Creating a share that uses the root dataset causes all types of problems with permissions, and is not a best practice.
Rather, create or select a dataset that is a child of the root dataset and that is specifically created to share.
{{< /hint >}}

To create a dataset and share from the **Add Dataset** screen:

1. First click on the parent dataset row, then click **Add Dataset**.

2. Enter the name for the dataset.

3. Select the **Dataset Preset** option to use.
   Based on the option selected, for example, selecting **SMB**, the screen populates the **Share Name** field with the name give to the dataset.

4. Click **Save**. TrueNAS creates the dataset and the share.

5. Configure permissions for the share. If you have created the share user, set up the share ACL permissions when prompted.
   If you are not ready to configure the share permissions, exit to the main **Datasets** screen.
   You can modify share dataset permissions later after adding the share user(s) by either selecting the dataset row, then clicking **Edit** on the **Permissions** widget. See [Editing Permissions]({{< ref "PermissionsSCALE" >}}) for more information.
   
   You can also set permissions for the share from the **Shares** screen by selecting the share, then selecting the option to **Edit Filesystem ACL** for SMB, or set up NFS share permissions from the **Add NFS** share screen.

To create a dataset while adding the share, see [Setting Up Sharing]({{< ref "SetupSharing" >}}) which covers the process of setting up the share and creating the dataset at the same time from the **Shares** screen.
See [Manage SMB Shares]({{< ref "ManageSMBShares" >}}) or [Manage NFS Shares]({{< ref "AddingNFSShares" >}}) for more information on adding and managing SMB or NFS shares.

## Taking the Next Step
After you finish creating your initial pool and the datasets or zvols, you can continue building and organizing your TrueNAS pools and datasets or move on to configuring how the system [shares data]({{< ref "SetUpSharing" >}}).

If you do not plan to set up data sharing, you can [set up backup solutions]({{< ref "SetUpBackupSCALE" >}}) for your system and stored data.
