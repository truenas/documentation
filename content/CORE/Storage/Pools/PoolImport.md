---
title: "Pool Import"
weight: 15
---

## Importing a Pool

A pool that has been exported/disconnected from the system can be reconnected by clicking **Storage** > **Pools** > **Add**, then selecting **Import an existing pool**. Importing works for pools that were exported/disconnected from the current system, created on another system, and pools that need to be reconnected after reinstalling or upgrading to the TrueNAS system.

When physically installing ZFS pool disks from another system, use the `zpool export poolname` command in the command line or a web interface equivalent to export the pool on that system. Then, shut it down and connect the drives to the TrueNAS system. Shutting down the other system prevents an *“in use by another machine”* error during the import to TrueNAS.

### Encrypted ZFS Pools

You can import existing ZFS pools by clicking **Storage** > **Pools** > **ADD**. Select **Import an existing pool**, then click **NEXT**.

![Storage Pools Add Import](/images/CORE/12.0/StoragePoolsAddImport.png "Storage Pools Add Import")

Select **No, continue with import**, then click **NEXT**.

<img src="/images/ZFS-NoContinueWithImport.png">

Click the drop down menu and choose the ZFS pool that you want to decrypt, then click **NEXT**.

![StoragePoolsAddImportGELIPresentDecryptPool](/images/CORE/12.0/StoragePoolsAddImportGELIPresentDecryptPool.png "StoragePoolsAddImportGELIPresentDecryptPool")


Review the Pool Import Summary and click **IMPORT**, then click **CONTINUE** to unlock the pool’s encrypted datasets.

![StoragePoolsAddImportGELIPresentDecryptPoolSummary](/images/CORE/12.0/StoragePoolsAddImportGELIPresentDecryptPoolSummary.png "StoragePoolsAddImportGELIPresentDecryptPoolSummary")


Click **Choose File** and open the encryption key file, then enter the **Passphrase** (if applicable) for the encrypted disks and click **SUBMIT**. Click **CONTINUE** to unlock the datasets.

<img src="/images/ZFS-OpenTheEencryptionKeyFile.png">


### Encrypted GELI Pools

You can import existing GELI pools from FreeNAS/TrueNAS 11.3 or earlier by clicking **Storage** > **Pools** > **ADD**. Select **Import an existing pool**, then click **NEXT**.

Select **Yes, decrypt the disks** and choose which disks you want to decrypt from the dropdown list.

![StoragePoolsAddImportNoGELI](/images/CORE/12.0/StoragePoolsAddImportNoGELI.png "StoragePoolsAddImportNoGELI")


Click **Choose File** and open the encryption key file, then enter the **Passphrase** (if applicable) for the encrypted disks and click **NEXT**.
Select the GELI pool from the Pool dropdown list and click **NEXT**.

![StoragePoolsAddImportGELIPresentDecryptPoolSummary](/images/CORE/12.0/StoragePoolsAddImportGELIPresentDecryptPoolSummary.png "StoragePoolsAddImportGELIPresentDecryptPoolSummary")


Review the Pool Import Summary and click **IMPORT**.

![StoragePoolsAddImportZFSPoolSummary](/images/CORE/12.0/StoragePoolsAddImportZFSPoolSummary.png "StoragePoolsAddImportZFSPoolSummary")


### Encryption Keys and Passphrases

{{< hint warning >}}
The encryption key file and passphrase are required to decrypt the pool. If the pool cannot be decrypted, it cannot be re-imported after a failed upgrade or lost configuration. This means it is very important to save a copy of the key and to remember the passphrase that was configured for the key. Refer to the [Encryption article](/CORE/Storage/DataPools/encryption/) for instructions on managing keys.
{{< /hint >}}

{{< hint >}}
For security reasons, encrypted pool keys are not saved in a configuration backup file. When TrueNAS has been installed to a new device and a saved configuration file restored to it, the keys for encrypted disks will not be present, and the system will not request them. To correct this, export the encrypted pool with <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>&nbsp; (Configure) > **Export/Disconnect**, making sure that **Destroy data on this pool?** is not set. Then import the pool again. During the import, the encryption keys can be entered as described above.
{{< /hint >}}
