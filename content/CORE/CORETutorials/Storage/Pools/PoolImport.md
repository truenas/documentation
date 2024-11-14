---
title: "Importing Pools"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/storage/pools/poolimport/"
description: "Describes how to import storage pools on TrueNAS CORE."
weight: 15
Aliases: /core/storage/pools/poolimport/
tags:
- pools
- storage
---

{{< hint type=note >}}
This procedure only applies to disks with a ZFS storage pool.
To import disks with different file systems, see [Import Disk]({{< relref "/CORE/CORETutorials/Storage/ImportDisk.md" >}}).
{{< /hint >}}

ZFS pool importing works for pools that were exported or disconnected from the current system, created on another system, and pools to reconnect after reinstalling or upgrading the TrueNAS system.
To import a pool, go to **Storage > Pools > ADD**.

{{< expand "Do I need to do anything different with disks installed on a different system?" "v" >}}
When physically installing ZFS pool disks from another system, use the command `zpool export poolname` in the command line or a web interface equivalent to export the pool on that system.
Shut that system down and move the drives to the TrueNAS system.
Shutting down the original system prevents an *in use by another machine* error during the TrueNAS import.
{{< /expand >}}

There are two kinds of pool imports, standard ZFS pool imports and ZFS pools with [legacy GELI encryption](https://docs.freebsd.org/en_US.ISO8859-1/books/handbook/disks-encrypting.html).

## Pool Import Options
{{< expand "Standard ZFS Pool" >}}
## Standard ZFS Pools

Select **Import Existing Pool** and click **NEXT**.

![StoragePoolsAddImport](/images/CORE/Storage/StoragePoolsAddImport.png "Import Pool Selection")

The wizard asks if the pool has legacy GELI encryption.

![StoragePoolsAddImportNoGELI](/images/CORE/Storage/StoragePoolsAddImportNoGELI.png "No GELI on the pool")

Select **No, continue with import** and click **NEXT**.

TrueNAS detects any pools that are present but unconnected.

![StoragePoolsAddImportZFSPool](/images/CORE/Storage/StoragePoolsAddImportZFSPool.png "Selecting a pool to import")

Choose the ZFS pool to import and click **NEXT**.

Review the Pool Import Summary and click **IMPORT**.

![StoragePoolsAddImportZFSPoolSummary](/images/CORE/Storage/StoragePoolsAddImportZFSPoolSummary.png "Pool Import Summary")

{{< /expand >}}
{{< expand "ZFS Pool with GELI" >}}
## Encrypted GELI Pools

{{< hint type=warning >}}
Importing a GELI-encrypted pool requires using the encryption key file and passphrase to decrypt the pool *before* importing.
When a pool cannot be decrypted, it cannot be re-imported after a failed upgrade or lost configuration, and the data is *irretrievable*!
Always have a copy of the pool GELI key file and passphrase available.
{{< /hint >}}

Select **Import Existing Pool** and click **NEXT**.

![StoragePoolsAddImport](/images/CORE/Storage/StoragePoolsAddImport.png "Import Pool Selection")

The wizard asks if the pool has legacy GELI encryption.
Select **Yes, decrypt the disks** and review the decryption options.

![StoragePoolsAddImportGELIPresentDecrypt](/images/CORE/Storage/StoragePoolsAddImportGELIPresentDecrypt.png "GELI decryption options")

Make sure the **Disks** selection shows the encrypted disks and partitions that are part of the incoming pool.
Apply the GELI encryption key file by clicking **Choose File** and uploading the file from your local system.

![StoragePoolsAddImportGELIPresentDecryptKeyFile](/images/CORE/Storage/StoragePoolsAddImportGELIPresentDecryptKeyFile.png "GELI encryption key file upload")

When a passphrase is also present, enter it in **Passphrase**.
Click **Next** and wait for the disks to decrypt.

When the disks are decrypted, select the GELI pool to import.

![StoragePoolsAddImportGELIPresentDecryptPool](/images/CORE/Storage/StoragePoolsAddImportGELIPresentDecryptPool.png "Select the GELI pool to import")

Review the **Pool Import Summary** and click **IMPORT**.

![StoragePoolsAddImportGELIPresentDecryptPoolSummary](/images/CORE/Storage/StoragePoolsAddImportGELIPresentDecryptPoolSummary.png "Import Summary for GELI pool")

GELI encrypted pools show in **Storage > Pools** as **(Legacy Encryption)**.

![StoragePoolsLegacyGELI](/images/CORE/Storage/StoragePoolsLegacyGELI.png "Pool with GELI encryption")

### Back Up the Pool Key

For security reasons, encrypted pool keys do not save to a configuration backup file.
When TrueNAS is installed to a new device and restored with a saved configuration file, keys for encrypted disks are not present and the system does not request them.

To correct this, export the encrypted pool in **Storage > Pools** with <i class="material-icons" aria-hidden="true" title="Settings">settings</i> > **Export/Disconnect**.
{{< hint type=warning >}}
Do *not* select **Destroy data on this pool?**.
{{< /hint >}}
Now import the pool again.
During the import, add the encryption keys as described previously.
{{< /expand >}}
