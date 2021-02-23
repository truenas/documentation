---
title: "ZFS Pools"
description: "How to create a ZFS data storage pool."
weight: 10
tags: ["ZFS", "zpool"]
---

TrueNAS uses ZFS data storage pools to efficiently store and protect your information. 
Storage pools are collections of attached drives that are organized into virtual devices (vdevs). 
Data in a storage pool is periodically reviewed and “healed” whenever a bad block is discovered. 
Drives can be arranged inside vdevs to provide varying amounts of redundancy, which prevents catastrophic data loss in the event a drive fails. 
Pools also support additional features to help maximize the read and write performance of data.

Before creating a storage pool, we recommended you review the available system resources and plan out your specific use case. 
If you’re storing critical information, more drives may be needed to provide redundancy. 
If you need to maximize the total available storage at the expense of redundancy or performance, you can use additional SSD drives to maximize pool performance. 
Determining your specific storage requirements is a critical step before creating a pool.

## Creating a new Pool

To create a new pool, log in to the web interface, go to **Storage > Pools**, and click **ADD**.
Select *Create new pool* and click **CREATE POOL** to open the **Pool Manager**.

<img src="/images/PoolManager.png">
<br><br>

First, enter a name for the pool.
If you want to encrypt the data for additional security, select *Encryption*.
Be aware that encrypting also complicates how data is retrieved and has some risks. Refer to the [Encryption article](/CORE/Storage/DataPools/encryption/) for more details.

Now you will configure the virtual devices (vdevs) that make up the pool.
Click **SUGGEST LAYOUT** to add all same-sized disks in an ideal configuration for balanced data redundancy and performance.
To manually add disks in a vdev, select the disks to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
To see more details about a disk, click the `>` in a disk's row.

The pool manager suggests a vdev layout based on the number of disks added to the vdev.
For example, if two disks are added, TrueNAS automatically configures the vdev as a *mirror*, where the total available storage is the size of one added disk while the other disk provides redundancy.
To change the vdev layout, open the *Data VDevs* list and select the desired layout:

* *Stripe*: each disk is used to store data. Requires at least one disk and has no data redundancy.
* *Mirror*: data is identical in each disk. Requires at least two disks and has the most redundancy.
* *RAIDZ1*: one disk is used to maintain data and all other disks are used to store data. Requires at least three disks.
* *RAIDZ2*: two disks are used to maintain data and all other disks are used to store data. Requires at least four disks. 
* *RAIDZ3*: three disks are used to maintain data and all other disks are used to store data. Requires at least five disks.

**We never recommend using a Stripe to store critical data, since a single disk failure could result in losing all data in that vdev.**

A vdev layout can be duplicated by clicking *REPEAT*.
If more disks are available and equal in size, the *REPEAT* button creates another vdev with an identical configuration called a "mirror" of vdevs.
Otherwise, another vdev can be added by clicking *ADD DATA* and adding disks manually.

{{< hint warning >}}
We don't recommend having multiple data vdevs with different numbers of disks.
Adding multiple vdevs with different layouts to a pool is not supported, so you'll have to create a new pool for a different layout.
For example, *Pool1* has a data vdev in a *mirror* layout, so create *pool2* for any *raid-z* vdevs.

![Storage Pools Add Create Mirror](/images/CORE/12.0/StoragePoolsAddCreateMirror.png "Storage Pools Add Create Mirror")
<br>
{{< /hint >}}

### Additional Vdev Types

There are several vdev types that you can use to add features to the pool:

* *Cache*: ZFS L2ARC read-cache that can be used with fast devices to accelerate read operations. Optional vdev that is removable after pool creation.
* *Log*: ZFS LOG device that can improve speeds of synchronous writes. Optional write-cache that is removable after pool creation.
* *Hot Spare*: Drive reserved for inserting into DATA pool vdevs when an active drive has failed.
  The hot spare is temporarily used as a replacement for the failed drive to prevent a larger pool and data loss scenario.
  If the failed drive in the pool is replaced with a new drive, the hot spare reverts to an inactive state and is available again as a hot spare.
  If the failed drive is detached from the pool, the temporary spare is promoted to a full member of the pool and will no longer be available as a hot spare.
* *Metadata*: Special Allocation class used to create [Fusion pools](/CORE/Storage/DataPools/fusion-pool/). Optional vdev type used to speed up metadata and small block I/O.
* *Dedup*: Stores de-duplication tables. These vdevs must be sized to X GiB for X TiB of general storage.

You can add an SSD cache or log device during or after pool creation to improve pool performance under specific use cases.
Before adding a cache or log device, refer to the [ZFS Primer](/Reference/ZFS-references/) to determine if the system will benefit or suffer from adding the device.

To add a different vdev type during pool creation, click **ADD VDEV** and select the type from the drop down.
Select disks from `Available Disks` and use the <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> (right arrow) next to the new **VDev** to add it to that section.

## Importing a Pool

A pool that has been exported/disconnected from the system can be reconnected by clicking **Storage** > **Pools** > **Add**, then selecting **Import an existing pool**. Importing works for pools that were exported/disconnected from the current system, created on another system, and pools that need to be reconnected after reinstalling or upgrading to the TrueNAS system.

When physically installing ZFS pool disks from another system, use the `zpool export poolname` command in the command line or a web interface equivalent to export the pool on that system. Then, shut it down and connect the drives to the TrueNAS system. Shutting down the other system prevents an *“in use by another machine”* error during the import to TrueNAS.

### Importing Encrypted ZFS Pools

You can import existing ZFS pools by clicking **Storage** > **Pools** > **ADD**. Select **Import an existing pool**, then click **NEXT**.

![Storage Pools Add Import](/images/CORE/12.0/StoragePoolsAddImport.png "Storage Pools Add Import")
<br><br>

Select **No, continue with import**, then click **NEXT**.

<img src="/images/ZFS-NoContinueWithImport.png">
<br><br>

Click the drop down menu and choose the ZFS pool that you want to decrypt, then click **NEXT**.

![StoragePoolsAddImportGELIPresentDecryptPool](/images/CORE/12.0/StoragePoolsAddImportGELIPresentDecryptPool.png "StoragePoolsAddImportGELIPresentDecryptPool")
<br><br>

Review the Pool Import Summary and click **IMPORT**, then click **CONTINUE** to unlock the pool’s encrypted datasets.

![StoragePoolsAddImportGELIPresentDecryptPoolSummary](/images/CORE/12.0/StoragePoolsAddImportGELIPresentDecryptPoolSummary.png "StoragePoolsAddImportGELIPresentDecryptPoolSummary")
<br><br>

Click **Choose File** and open the encryption key file, then enter the **Passphrase** (if applicable) for the encrypted disks and click **SUBMIT**. Click **CONTINUE** to unlock the datasets.

<img src="/images/ZFS-OpenTheEencryptionKeyFile.png">
<br><br>

### Importing Encrypted GELI Pools

You can import existing GELI pools from FreeNAS/TrueNAS 11.3 or earlier by clicking **Storage** > **Pools** > **ADD**. Select **Import an existing pool**, then click **NEXT**.

Select **Yes, decrypt the disks** and choose which disks you want to decrypt from the dropdown list.

![StoragePoolsAddImportNoGELI](/images/CORE/12.0/StoragePoolsAddImportNoGELI.png "StoragePoolsAddImportNoGELI")
<br><br>

Click **Choose File** and open the encryption key file, then enter the **Passphrase** (if applicable) for the encrypted disks and click **NEXT**.
Select the GELI pool from the Pool dropdown list and click **NEXT**.

![StoragePoolsAddImportGELIPresentDecryptPoolSummary](/images/CORE/12.0/StoragePoolsAddImportGELIPresentDecryptPoolSummary.png "StoragePoolsAddImportGELIPresentDecryptPoolSummary")
<br><br>

Review the Pool Import Summary and click **IMPORT**.

![StoragePoolsAddImportZFSPoolSummary](/images/CORE/12.0/StoragePoolsAddImportZFSPoolSummary.png "StoragePoolsAddImportZFSPoolSummary")
<br><br>

## Encryption Keys and Passphrases

{{< hint warning >}}
The encryption key file and passphrase are required to decrypt the pool. If the pool cannot be decrypted, it cannot be re-imported after a failed upgrade or lost configuration. This means it is very important to save a copy of the key and to remember the passphrase that was configured for the key. Refer to the [Encryption article](/CORE/Storage/DataPools/encryption/) for instructions on managing keys.
{{< /hint >}}

{{< hint >}}
For security reasons, encrypted pool keys are not saved in a configuration backup file. When TrueNAS has been installed to a new device and a saved configuration file restored to it, the keys for encrypted disks will not be present, and the system will not request them. To correct this, export the encrypted pool with <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>&nbsp; (Configure) > **Export/Disconnect**, making sure that **Destroy data on this pool?** is not set. Then import the pool again. During the import, the encryption keys can be entered as described above.
{{< /hint >}}
