---
title: "ZFS Pools"
description: "How to create a ZFS data storage pool."
weight: 1
tags: ["ZFS", "zpool"]
---

Perhaps the most important part about TrueNAS is the ability to efficiently store and share large amounts of data.
The way this is accomplished is through setting up [ZFS Pools](https://en.wikipedia.org/wiki/ZFS#Data_structures:_Pools,_datasets_and_volumes "ZFS Pools Wikipedia").

### Creating a new Pool

To set up a pool in TrueNAS, go to **Storage > Pools** and click *ADD*.

<img src="/images/pools-list.png">
<br><br>

Set *Create a new pool* and click *CREATE POOL*.

First, enter a name for the pool.
If you want to encrypt the data for additional security, set the *Encryption* option.
Be aware that this can also complicate how data is retrieved and has some risks.
Refer to the [Encryption article]({{< ref "encryption.md" >}}) for more details.

Now configure the virtual devices (vdevs) that make up the pool.
The TrueNAS web interface can simplify this by recommending a vdev layout based on the number of available disks.
Click *SUGGEST LAYOUT* to add all same-sized disks in an ideal configuration for data redundancy and performance.

To manually add disks in a vdev, select the disks to add and click <i class="fas fa-arrow-right" aria-hidden="true" title="Right Arrow"></i>.

TrueNAS helpfully suggests a vdev layout based on the number of disks added to the vdev.
For example, if two disks are added, TrueNAS automatically configures the VDEV as a mirror (one redundant disk).
To change the vdev layout, open the *Data VDevs* list and select the desired layout.
Note that a stripe is never recommended for storing critical data, as a single disk failure can result in losing all data in that vdev.

A vdev layout can be duplicated by clicking *REPEAT*.
If more disks are available and equal in size, the *REPEAT* button creates another vdev with an identical configuration.
Thus, it creates a mirror of vdevs.
Otherwise, another vdev can be added by clicking *ADD DATA* and adding disks as was done in the first vdev.

{{% alert title="Warning" color=warning %}}
It is not recommended to have multiple data vdevs with different numbers of disks.
Adding multiple vdevs with different layouts to a pool is not supported.
Create a new pool for the different layout.
For example, "pool1" has a data vdev in a *mirror* layout, so create "pool2" for any *raid-z* vdevs.
{{% /alert %}}

If desired, a cache, log, and spare vdev can be added by clicking *ADD CACHE*, *ADD LOG*, and *ADD SPARE*, respectively.
When ready to proceed with the desired vdevs, click *CREATE*.

<img src="/images/pools-vdevs.png">
<br><br>

### Importing a Pool
A pool that has been exported and disconnected from the system can be reconnected with **Storage** > **Pools** > **Add**, then selecting **Import an existing pool**. This works for pools that were exported/disconnected from the current system, created on another system, or to reconnect a pool after reinstalling the TrueNAS® system.

When physically installing ZFS pool disks from another system, use the `zpool export poolname` command at the command line or a web interface equivalent to export the pool on that system. Then shut it down and connect the drives to the TrueNAS® system. This prevents an *“in use by another machine”* error during the import to TrueNAS®.

Existing ZFS pools can be imported by clicking **Storage** > **Pools** and **ADD**. Select **Import an existing pool**, then click **NEXT**

<img src="/images/storage-pools-import.png" width='700px'>
<br><br>

If the Pool is not encrypted with GELI encryption, click **No, continue with import** then **NEXT**.
If the Pool is encrypted see below for those instructions.

<img src="/images/storage-pools-import-no-encryption.png" width='700px'>
<br><br>

Select the pool from the `Pool *` drop-down menu and click **NEXT** to confirm the options and `IMPORT` it.

Before importing an encrypted pool, disks must first be decrypted. Click **Yes, decrypt the disks**. 

### Decrypting Disks Before Importing a Pool

Use the `Disks` dropdown menu to select the disks to decrypt. Click **Browse** to select the encryption key file stored on the client system. Enter the `Passphrase` associated with the encryption key, then click **NEXT** to continue importing the pool.

<img src="/images/storage-pools-add-decrypt.png" width='700px'>
<br><br>

Danger
{{% alert title=Warning color=warning %}}
The encryption key file and passphrase are required to decrypt the pool. If the pool cannot be decrypted, it cannot be re-imported after a failed upgrade or lost configuration. This means it is very important to save a copy of the key and to remember the passphrase that was configured for the key. Refer to Managing Encrypted Pools for instructions on managing keys.
{{% /alert %}}

Select the pool to import and confirm the settings. Click **IMPORT** to finish the process.

{{% pageinfo %}}
For security reasons, encrypted pool keys are not saved in a configuration backup file. When TrueNAS® has been installed to a new device and a saved configuration file restored to it, the keys for encrypted disks will not be present, and the system will not request them. To correct this, export the encrypted pool with <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>&nbsp; (Configure) > **Export/Disconnect**, making sure that Destroy data on this pool? is not set. Then import the pool again. During the import, the encryption keys can be entered as described above.
{{% /pageinfo %}}

