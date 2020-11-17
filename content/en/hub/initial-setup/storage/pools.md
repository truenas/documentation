---
title: "ZFS Pools"
description: "How to create a ZFS data storage pool."
weight: 1
tags: ["ZFS", "zpool"]
---

TrueNAS uses ZFS data storage pools to efficiently store and protect your information.
Storage pools are a collection of attached drives that are organized into virtual devices (vdevs).
Data in a storage pool is periodically reviewed and "healed" whenever a bad block is discovered.
Drives can be arranged inside vdevs to provide varying amounts of redundancy to prevent catastrophic data loss in the event a drive fails.
Pools also support additional features to help maximize the read and write performance of data.

Before creating a storage pool, it is recommended to review the available system resources and plan out your specific use case.
Is the information being stored critical and thus more drives are needed to provide redundancy?
Does the total available storage need to be maximized at the expense of redundancy or performance?
Are there additional SSD drives available for maximizing pool performance?
Determining your specific storage requirements is a critical step before creating a pool.

## Creating a new Pool

To create a new pool, log in to the web interface, go to **Storage > Pools**, and click **ADD**.

<img src="/images/CreatePool.png">
<br><br>

Set *Create new pool* and click **CREATE POOL** to open the **Pool Manager**.

<img src="/images/PoolManager.png">
<br><br>

First, enter a name for the pool.
If you want to encrypt the data for additional security, set *Encryption*.
Be aware that this also complicates how data is retrieved and has some risks.
Refer to the [Encryption article]({{< ref "encryption.md" >}}) for more details.

Now configure the virtual devices (vdevs) that make up the pool.
Click **SUGGEST LAYOUT** to add all same-sized disks in an ideal configuration for balanced data redundancy and performance.
To manually add disks in a vdev, select the disks to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.
To see more details about a disk, click the `>` in a disk's row.

The pool manager suggests a vdev layout based on the number of disks added to the vdev.
For example, if two disks are added, TrueNAS automatically configures the vdev as a *mirror*, where the total available storage is the size of one added disk and the other disk provides redundancy.
To change the vdev layout, open the *Data VDevs* list and select the desired layout:

* *Stripe*: each disk is used to store data. Requires at least one disk and has no data redundancy.
* *Mirror*: data is identical in each disk. Requires at least two disks and has the most redundancy.
* *RAIDZ1*: one disk is used to maintain data and all other disks are used to store data. Requires at least three disks.
* *RAIDZ2*: two disks are used to maintain data and all other disks are used to store data. Requires at least four disks. 
* *RAIDZ3*: three disks are used to maintain data and all other disks are used to store data. Requires at least five disks.

**A stripe is never recommended for storing critical data as a single disk failure can result in losing all data in that vdev.**

A vdev layout can be duplicated by clicking *REPEAT*.
If more disks are available and equal in size, the *REPEAT* button creates another vdev with an identical configuration called a "mirror" of vdevs.
Otherwise, another vdev can be added by clicking *ADD DATA* and adding disks manually.

{{% alert title="Warning" color=warning %}}
It is not recommended to have multiple data vdevs with different numbers of disks.
Adding multiple vdevs with different layouts to a pool is not supported.
Create a new pool for the different layout.
For example, *Pool1* has a data vdev in a *mirror* layout, so create *pool2* for any **raid-z** vdevs.

<img src="/images/MirrorPoolExample.png" size="50%">
<br>
{{% /alert %}}

### Additional Vdev Types

There are additional kinds of vdevs that can be used to add features to the pool:

* *Cache*: ZFS L2ARC read-cache that can be used with fast devices to accelerate read operations. Optional vdev that is removable after pool creation.
* *Log*: ZFS LOG device that can improve speeds of synchronous writes. Optional write-cache that is removable after pool creation.
* *Hot Spare*: Drive reserved for inserting into DATA pool vdevs when an active drive has failed.
* *Metadata*: Special Allocation class used to create [Fusion pools](/hub/initial-setup/storage/fusion-pool/). Optional vdev type used to speed up metadata and small block I/O.
* *Dedup*: Stores de-duplication tables. These vdevs must be sized to X GiB for X TiB of general storage.

An SSD cache or log device can be added during or after pool creation to improve performance of the pool under specific use cases.
Before adding a cache or log device, refer to the [ZFS Primer](/hub/additional-topics/reference/zfs-references/) to determine if the system will benefit or suffer from the addition of the device.

To add a different kind of vdev during pool creation, click **ADD VDEV** and select the type from the drop down.
Select disks from `Available Disks` and use the <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i> (right arrow) next to the new **VDev** to add it to that section.

## Importing a Pool

A pool that has been exported and disconnected from the system can be reconnected with **Storage** > **Pools** > **Add**, then selecting **Import an existing pool**. This works for pools that were exported/disconnected from the current system, created on another system, or to reconnect a pool after reinstalling the TrueNAS system.

When physically installing ZFS pool disks from another system, use the `zpool export poolname` command at the command line or a web interface equivalent to export the pool on that system. Then shut it down and connect the drives to the TrueNAS system. This prevents an *“in use by another machine”* error during the import to TrueNAS.

Existing ZFS pools can be imported by clicking **Storage** > **Pools** and **ADD**. Select **Import an existing pool**, then click **NEXT**

<img src="/images/storage-pools-import.png" width='700px'>
<br><br>

If the Pool is not encrypted with GELI encryption, click **No, continue with import** then **NEXT**.
If the Pool is encrypted, see the instructions below for decrypting the disk.

<img src="/images/storage-pools-import-no-encryption.png" width='700px'>
<br><br>

Select the pool from the `Pool *` drop-down menu and click **NEXT** to confirm the options and `IMPORT` it.

Before importing an encrypted pool, disks must first be decrypted. Click **Yes, decrypt the disks**. 

### Decrypting Disks Before Importing a Pool

Use the `Disks` dropdown menu to select the disks to decrypt. Click **Browse** to select the encryption key file stored on the client system. Enter the `Passphrase` associated with the encryption key, then click **NEXT** to continue importing the pool.

<img src="/images/storage-pools-add-decrypt.png" width='700px'>
<br><br>

{{% alert title=Warning color=warning %}}
The encryption key file and passphrase are required to decrypt the pool. If the pool cannot be decrypted, it cannot be re-imported after a failed upgrade or lost configuration. This means it is very important to save a copy of the key and to remember the passphrase that was configured for the key. Refer to the [Encryption article](/hub/initial-setup/storage/encryption/) for instructions on managing keys.
{{% /alert %}}

Select the pool to import and confirm the settings. Click **IMPORT** to finish the process.

{{% pageinfo %}}
For security reasons, encrypted pool keys are not saved in a configuration backup file. When TrueNAS has been installed to a new device and a saved configuration file restored to it, the keys for encrypted disks will not be present, and the system will not request them. To correct this, export the encrypted pool with <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>&nbsp; (Configure) > **Export/Disconnect**, making sure that **Destroy data on this pool?** is not set. Then import the pool again. During the import, the encryption keys can be entered as described above.
{{% /pageinfo %}}

