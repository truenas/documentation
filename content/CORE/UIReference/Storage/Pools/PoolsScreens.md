---
title: "Pool Screens"
description: "This article describes the fields on the Storage Pools screen on TrueNAS CORE."
weight: 10
tags:
- corepools
- corestorage
---

{{< toc >}}

Use the **Storage Pools** screens to add or manage storage pools on your TrueNAS. The **Pools** screen displays a table of all the pools and datasets configured in your TrueNAS.

![StoragePoolsScreen](/images/CORE/13.0/StoragePoolsScreen.png "Storage Pools Screen")  

Use the <span class="iconify" data-icon="ci:settings-filled"></span> to display the [**Pools Actions**](#pools-actions-dropdown-list) dropdown list of pool operations.

Use **ADD** to display the [**Import Pool**](#import-pools-screens) configuration wizard screens. 

Use the <class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for the root dataset to display the **Action Menu** for the root dataset which is differen than the options for nested datasets. 
Use the <class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp;> for nested datasets to display the **Action Menu** for nested datasets.
See [Datasets Screen]({{< relref "/CORE/UIReference/Storage/Pools/DatasetsScreen.md" >}}) for more information on dataset screens.

## Import Pools Screens

The import pool wizard has four configuration screens that allow you to add a new pool or import an existing pool based on the selection made. 

### Create or Import Pool screen

![CreateImportPoolScreen](/images/CORE/13.0/CreateImportPoolScreen.png "Create or Import Pool Screen")  

Select the **Create new Pool** radio button to add a new pool and configure each setting. 

Select the **Import an existing pool** to import an existing pool. See [Importing a Pool]({{< relref "/CORE/CORETutorials/Storage/Pools/PoolImport.md" >}}) for more information.

Use the **CREATE POOL** button to display the **Create Pool** screen which is the [**Pool Manager** screen](#pool-manager-screen).

## Pools Actions Dropdown List

![StoragePoolsActionOptions](/images/CORE/13.0/StoragePoolsActionOptions.png "Storage Pools Action Options")  

### Pools Options 

Displays a dialog with the **Auto TRIM** and **Confirm** checkoboxes. Auto TRIM allows TrueNAS to periodically check the pool disks for storage blocks it can reclaim.

### Export/Disconnect

Displays a dialog with a warning about unavailable data, backing up data before exporting/disconnecting, and lists services that could be disrupted by the process. Select from the three options:

| Setting | Descritpion|
|---------|------------|
| **Destroy data on this pool?** | Select to destroy data on the pool disks. |
| **Delete configuration of shares that used this pool?** | Selected by default to delete share configurations listed. |
| **Confirm Export/Disconnect** | Activates the **Export/Disconnect** button. |
| **Export/Disconnect** | Use to display the confirmation dialog where you must enter the name of the pool and confirm you want to proceed with this operation. |

Use **CANCEL** to exit the process and close the dialog.

### Add Vdev 

Displays the [**Pool Manager**](#pool-manager-screen) screen. 

![AddVdevsScreen](/images/CORE/13.0/AddVdevsScreen.png "Add Vdevs Screen")  

Use **CANCEL** to exit without saving and display the **Pools** screen.

Use **ADD VDEVS** to add vdevs to the exiting pool.

### Scrub Pool

Displays a start-scrub confirmation dialog. Select **Confirm** to activate the **START SCRUB** button. Use **CANCEL** to exit back to the **Pools** screen without starting the scrub.

### Expand Pool

Displays the [**Pool Status**](#pool-status-screen) screen which displays the status of the pool, the datasets and the disks for the selected pool. Select the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; to display the options available to datasets and disks.

## Pool Manager Screen

The **Pool Manager** screen displays after selecting either the **Create new Pool** radio button on the **Create or Import Pool** screen or the **Add Vdev** option for an existing pool.

**Pool Manager** is used to add the initial vdev when you create the pool or want to add to an existing pool. 
At initial creation you have the option to select the type of vdev for this pool. 
When accessing **Pool Manager** for an existing pool from the **Pool Actions** dropdown and selecing **Add Vdev**, the pool vdev type is already specified and limits what you can add as a **Data** type vdev. For example, a pool with a mirror vdev requires you to add a minimum of two disks to the existing mirror. 

![CreatePoolScreen](/images/CORE/13.0/CreatePoolScreen.png "Storage Create Pool Screen")

| Name | Description|
|---------|------------|
| **Name** | Displays the name of the pool for which you are adding the vdev. |
| **RESET LAYOUT** | Click to reset the proposed layout displayed. Click before you save  to remove any vdev types selected and move disks assigned to any vdev back to the **Available Disks** list. |
| **ADD VDEV** | Displays a dropdown list of the types of vdevs on the system. Vdev types are **Data**, **Cache**, **Log**, **Hot Spare**, **Metadata** or **Dedup**. Click to add vdev types to an existing or new pool vdev setup. |
| **Available Disks** | List of available disks on the TrueNAS. Select the checkbox to the left of the disk and then select the blue <span class="iconify" data-icon="bytesize:arrow-right"></span> to the right of the vdev type (if more than one vdev type exists or is added with the **ADD VDEV** button) to move the disks to that vdev. To move it back to the **Available Disks** list select the disk checkbox(es) and the blue <span class="iconify" data-icon="bytesize:arrow-left"></span>. |
| **Data VDevs** | List of disks assigned to the vdev(s). To move disks back to the **Available Disks** list select the disk checkbox(es) and the blue <span class="iconify" data-icon="bytesize:arrow-left"></span> symbol. |
| **vdev type** | Displays under the **Data Vdevs** table(s). For an existing pool, the default vdev type is the vdev type for that existing pool. For initial pool creation, the default type is **Stripe**. After adding disks to the **Data VDevs** a <span class="iconify" data-icon="bxs:down-arrow"></span> expand symbol displays with avaialbe options to change the default type of vdev (for example, if two disks are moved to a Data VDev, the **Mirror** option displays along with **Strip**). |
| **Estimated raw capacity: 0 B** | Displays the raw storage capacity of the disks for the Data VDev type.  |
| **Filter disks by name** | Click on to display the field where you enter the filter or search parameters. |
| **Filter disks by capacity** | Click on to display the field where you enter the filter or search parameters. |

Use **CANCEL** to exit without saving and display the **Pools** screen.

Use **CREATE** to add the pool vdev.

Use **ADD VDEVS** to add vdevs to the exiting pool.

## Pool Status Screen

The **Pool Status** screen which displays the status of the pool, the datasets and the disks for the selected pool.

![PoolStatusScreen](/images/CORE/13.0/PoolStatusScreen.png "Pool Status Screen")

Each Dataset has two options available from the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp;. Select either **Extend** which displays the **Extend Vdev** dialog that allows you to select a new disk from a dropdown list, or **Remove** which displays a confirmation dialog before you remove the dataset from the pool.

Each disk has four options available from the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp;: 

**Edit** displays the [**Edit Pool Disk**](#edit-pool-disk-screen) screen where you can change disk settings. 

**Offline** displays the **Offline Disk** conformation dialog where you confirm you want to offline the disk. Select the **Confirm** checkbox to activate the **OFFLINE** button or click **CANCEL** to exit the dialog and return to the **Pool Status** screen. 

**Replace** displays the **Replacing disk** dialog where you select the member disk from a dropdown list. Use **Force** to override safety checks and add the disk to the pool. Warning, this erases data on the disk! 

**Detach** displays the **Detach Disk** dialog where you must select **Confirm** before the **DETACH** button activates. This detaches the disk from the pool.

## Edit Pool Disk Screen

The **Edit Pool Disk** screen displays disk configutation settings.

![StorageDiskEditPoolDiskScreen](/images/CORE/13.0/StorageDiskEditPoolDiskScreen.png "Edit Pool Disk Screen")

Settings on the **Edit Pool Disk** screen are the same as those on the **Storage > Disks > Edit Disk** screen. See [Disk Screens]({{< relref "CORE/UIReference/Storage/Disks/DisksScreens.md" >}}) for more information on disk settings.

## Pools Edit Permissions Screen

Use the **Edit Permissions** option on the parent dataset **Dataset Actions** menu to display the **Edit Permissions** screen. This option is only availble on the parent dataset. See [Dataset Screens]({{< relref "/CORE/UIReference/Storage/Pools/DatasetsScreen.md" >}}) and [Setting Up Permissions]({{< relref "/CORE/CORETutorials/Storage/Pools/Permissions.md" >}}) for more information on pool and dataset permissions.

{{< taglist tag="coredataset" limit="10" >}}

{{< taglist tag="corestorage" limit="10" title="Related Storage Articles" >}}
