---
title: "Storage Encryption"
weight: 25
---

{{< toc >}}

TrueNAS supports different encryption options for critical data.

{{< hint danger>}}
Users are responsible for backing up and securing encryption keys and passphrases!
Losing the ability to decrypt data is similar to a catastrophic data loss.
{{< /hint >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM in TrueNAS 12.0)

Keys for data-at-rest are managed on the local TrueNAS system.
The user is responsible for storing and securing their keys.
The [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is included in TrueNAS 12.0.

{{< expand "Encryption Drawbacks and Considerations" "v" >}}
Always consider the following drawbacks/considerations when encrypting data:
* Losing encryption keys and passwords means losing your data.
* Unrelated encrypted datasets [do not support deduplication](https://github.com/openzfs/zfs/discussions/9423).
* We do not recommend using GELI or ZFS encryption with deduplication because of the sizable performance impact. 
* Be cautious when using many encryption and deduplication features at once since they will all be competing for the same CPU cycles.
{{< /expand >}}

## Encrypting a Storage Pool

Encrypting the root dataset of a new storage pool further increases data security.
[Create a new pool]({{< relref "PoolCreate.md#creating-a-pool" >}}) and set *Encryption* in the **Pool Manager**.
TrueNAS shows a warning.

![Storage Pools Add Encryption Warning](/images/CORE/12.0/StoragePoolsAddEncryptionWarning.png "Storage Pools Add Encryption Warning")

Read the warning, set *Confirm*, and click *I Understand*.

The default encryption *Cipher* is recommended, but there are other ciphers available.

![StoragePoolsAddCreateEncryptionCipher](/images/CORE/12.0/StoragePoolsAddCreateEncryptionCiphers.png "Choosing an encryption cipher")

{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

## Encrypting a New Dataset

New datasets within an existing storage pool can also be encrypted without having to encrypt the entire pool.
To encrypt a single dataset, go to **Storage > Pools**, open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for an existing dataset, and click *Add Dataset*.

![StoragePoolsDatasetAdd](/images/CORE/12.0/StoragePoolsDatasetAdd.png "New Dataset Options")

Look at the *Encryption Options* and, when the parent dataset is unencrypted, unset *Inherit* and set *Encryption*.

![StoragePoolsCreateDatasetEncryptionOptions](/images/CORE/12.0/StoragePoolsCreateDatasetEncryptionOptions.png "Dataset Encryption Options")

Now choose which *Type* of authentication to use: a *Key* or a *Passphrase*.
The remaining options are the same as a new pool.
Datasets with encryption enabled show additional icons in the **Storage > Pools** list.

### Locking and Unlocking Datasets

The dataset status is determined from an icon:

* Dataset unlocked icon: <i class="material-icons" aria-hidden="true" title="<unlocked>">lock_open</i>
* Dataset locked icon: <i class="material-icons" aria-hidden="true" title="<locked>">lock</i>
* Unecrypted Pool with an encrypted dataset: 

Encrypted datasets can only be locked and unlocked if they are secured with a passphrase instead of a keyfile.
Before locking a dataset, verify that it is not currently in use, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) and *Lock*.

![StoragePoolsDatasetLockOptions](/images/CORE/12.0/StoragePoolsDatasetLockOptions.png "Dataset Locking Options")

Use the **Force unmount** option only if you are certain that no one is currently accessing the dataset.
After locking a dataset, the unlock icon changes to a locked icon.
While the dataset is locked, it is not available for use.

To unlock a dataset, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and *Unlock*.

![StoragePoolsDatasetUnlockOptions](/images/CORE/12.0/StoragePoolsDatasetUnlockOptions.png "Dataset Unlock Options")

Enter the passphrase and click **Submit**. If there are child datasets that are locked with the same passphrase you can unlock them all at the same time by setting *Unlock Children*.
Confirm unlocking the datasets and wait for a dialog to confirm the unlock is successful.

![StoragePoolsDatasetUnlockSuccess](/images/CORE/12.0/StoragePoolsDatasetUnlockSuccess.png "Dataset Unlock Success")

The dataset listing changes to show the unlocked icon.

## Encryption Management

There are two ways to manage the encryption credentials: with Key Files or Passphrases:

{{< tabs "Encryption Credentials" >}}
{{< tab "Key Files" >}}
#### Key Files

Creating a new encrypted pool automatically generates new key file and prompts to download it.
**Always back up the key file to a safe and secure location.**

![EncryptionKeyBackupWarning](/images/CORE/12.0/EncryptionKeyBackupWarning.png "Encryption Backup Warning")

To manually back up a root dataset keyfile by opening the pool <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and selecting *Export Dataset Keys*.

![StoragePoolsEncryptionActionsExportKeys](/images/CORE/12.0/StoragePoolsEncryptionActionsExportKeys.png "Exporting Key Files")

To change the key, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and *Encryption Options*.

![StoragePoolsEncryptedDataset](/images/CORE/12.0/StoragePoolsEncryptedDataset.png "Dataset Options: Encryption Options")

Enter your custom key or click *Generate Key*.

![StoragePoolsEncryptedDatasetOptions](/images/CORE/12.0/StoragePoolsEncryptedDatasetOptions.png "Editing Encryption Options")
{{< /tab >}}
{{< tab "Passphrases" >}}
#### Passphrases

To use a passphrase instead of a keyfile, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and *Encryption Options*.
Change the *Encryption Type* from *Key* to *Passphrase*.

![Storage Pools Dataset Encryption Passphrase](/images/CORE/12.0/StoragePoolsDatasetEncryptionPassphrase.png "Dataset Encryption Passphrase Options")

Set the rest of the options:
* *Passphrase* : User-defined string used to decrypt the dataset.
  Can be used instead of an encryption key.
  Must be longer than 8 characters.
  {{< hint warning >}}
  The passphrase is the only means to decrypt the information stored in this dataset. Be sure to create a memorable passphrase or physically secure the passphrase.
  {{< /hint >}}
* *pbkdf2iters* : Number of password-based key derivation function 2 ([PBKDF2](https://tools.ietf.org/html/rfc2898#appendix-A.2)) iterations to use for reducing vulnerability to brute-force attacks.
  Entering a number larger than *100000* is required.

{{< /tab >}}
{{< /tabs >}}

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS Enterprise users may connect a Key Management Interoperability Protocol ([KMIP]({{< relref "KMIP.md" >}})) server to centralize keys when passphrases are not used to unlock a dataset or zvol. 

Users with TrueNAS CORE or Enterprise installations without [KMIP]({{< relref "KMIP.md" >}}) should either replicate the dataset or zvol without properties to disable encryption at the remote end, or construct a special json manifest to unlock each child dataset/zvol with a unique key.

{{< tabs "Unlocking Methods" >}}
{{< tab "Method 1: Construct JSON Manifest" >}}
1. Replicate every encrypted dataset you want to replicate with properties. 
2. Export key for every child dataset which has a unique key. 
3. For each child dataset construct a proper json with poolname/datasetname of the destination system and key from the source system like this: 
   `{"tank/share01": "57112db4be777d93fa7b76138a68b790d46d6858569bf9d13e32eb9fda72146b"}`
5. Save this file with the extension <file>.json<file>. 
6. On remote system unlock the dataset(s) using properly constructed <file>json<file> files.

{{< /tab >}}
{{< tab "Method 2: Replicate Encrypted Dataset/zvol Without Properties" >}}
Uncheck properties when replicating so that the destination dataset will not be encrypted on the remote side and will not require a key to unlock.
1. Go to **Tasks > Replication Tasks** and click *ADD*.
2. Click *ADVANCED REPLICATION CREATION*.
3. Fill out the form as needed and make sure *Include Dataset Properties* is **NOT** checked.
4. Click *SUBMIT*.

{{< /tab >}}
{{< /tabs >}}

{{< hint info >}}
**NOTE:** This does not affect TrueNAS Enterprise installs with [KMIP]({{< relref "KMIP.md" >}}).
{{< /hint >}}

## Legacy GELI Encryption

GELI encryption is deprecated in TrueNAS and no longer supported.

{{< expand "Can I directly convert a GELI-encrypted pool to native ZFS encryption?" "v" >}}
No.
Data must be migrated out of the GELI pool and into a ZFS encrypted pool.
{{< /expand >}}

### GELI Pool Migrations

Data can be *migrated* from the GELI-encrypted pool to a new ZFS-encrypted pool.
Be sure to unlock the GELI-encrypted pool before attempting any data migrations.
The new ZFS-encrypted pool must be at least the same size as the previous GELI-encrypted pool.
Do not delete the GELI dataset until you have verified the data migration.

There are a few options to migrate data from a GELI-encrypted pool to a new ZFS-encrypted pool:

{{< tabs "GELI Migration Methods" >}}
{{< tab "Advanced Replication" >}}
{{< expand "Instructions coming soon!" "v" >}}
In future TrueNAS versions, a decrypted GELI pool will be able to migrate data to a new ZFS encrypted pool using an advanced Replication Task ([NAS-107463](https://jira.ixsystems.com/browse/NAS-107463)).
Until this time, GELI encrypted pools will continue to be detected and supported in the TrueNAS web interface, so you are not required to immediately migrate data away from GELI pools.
Before using the command line to migrate data, it is recommended to consider the benefits and drawbacks of immediately migrating from GELI to ZFS.
{{< /expand >}}
{{< /tab >}}
{{< tab "File Transfer" >}}
{{< hint warning >}}
This method does not preserve file ACLs.
{{< /hint >}}

The web interface supports using **Tasks > Rsync Tasks** to transfer files out of the GELI pool.
In the **Shell**, `rsync` and other file transfer mechanisms (`scp`, `cp`, `sftp`, `ftp`, `rdiff-backup`) are available for copying data between pools.
{{< /tab >}}
{{< tab "ZFS Send and Receive" >}}
{{< hint warning >}}
These instructions are an example walkthrough.
It is not an exact step-by-step guide for all situations.
Research ZFS [send](https://openzfs.github.io/openzfs-docs/man/8/zfs-send.8.html)/[receive](https://openzfs.github.io/openzfs-docs/man/8/zfs-receive.8.html) before attempting this.
There are many edge cases that cannot be covered by a simple example.
{{< /hint >}}

Legend:
```
GELI Pool = pool_a
Origin Dataset = dataset_1
Latest Snapshot of GELI Pool = snapshot_name
ZFS Native Encrypted Pool = pool_b
Receieving Dataset = dataset_2
```

1. Create a new encrypted pool in **Storage > Pools**.
2. Open the **Shell**.
   Make a new snapshot of the GELI pool and dataset with the data to be migrated: `zfs snapshot -r pool_a/dataset_1@snapshot_name`.
3. Create a passphrase: `echo passphrase > /tmp/pass`.
4. Use ZFS send/receive to transfer the data between pools: `zfs send -Rv pool_a/dataset_1@snapshot_name | zfs recv -o encryption=on -o keyformat=passphrase -o keylocation=file:///tmp/pass pool_b/dataset_2`.
5. When the transfer is complete, go to **Storage > Pools** and lock the new dataset.
   After locking the dataset, immediately unlock it.
   TrueNAS prompts for the passphrase.
   After entering the passphrase and the pool is unlocked, you can delete the `/tmp/pass` file used for the transfer.
6. If desired, you can convert the dataset to use a keyfile instead of a passphrase.
   To use a key file, click the dataset <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) and click *Encryption Options*.
   Change the *Encryption Type* from *Passphrase* to *Key* and save.
   Back up your key file immediately!
7. Repeat this process for every dataset in the pool that needs to be migrated.

{{< /tab >}}
{{< /tabs >}}
