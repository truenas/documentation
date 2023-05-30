---
title: "Storage Encryption"
description: "This article describes how to encrypt a storage pool or dataset in TrueNAS CORE, lock and unlock encrypted datasets, manage encryption, and migrate from GELI encryption to ZFS encryption."
weight: 25
aliases: /core/storage/pools/storageencryption/
tags:
- coreencryption
- corepool
- coredataset
- coresed
---

{{< toc >}}

TrueNAS supports different encryption options for critical data.

{{< hint type=warning >}}
Users are responsible for backing up and securing encryption keys and passphrases!
Losing the ability to decrypt data is similar to a catastrophic data loss.
{{< /hint >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM in TrueNAS 12.0)

The local TrueNAS system manages keys for data-at-rest.
The user is responsible for storing and securing their keys.
The [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is included in TrueNAS 12.0.

{{< expand "Encryption Drawbacks and Considerations" "v" >}}
Always consider the following drawbacks/considerations when encrypting data:
* All datasets contained within an encrypted pool inherit encryption.
* If there is only one pool and it is encrypted, all datasets are also encrypted.
* If the encryption keys and passwords are lost, encrypted data is unrecoverable.

Unrelated encrypted datasets [do not support deduplication](https://github.com/openzfs/zfs/discussions/9423).

We do not recommend using GELI or ZFS encryption with deduplication because of the sizable performance impact. 

Be cautious when using many encryption and deduplication features at once since they all compete for the same CPU cycles.
{{< /expand >}}

## Encrypting a Storage Pool

Encrypting the root dataset of a new storage pool further increases data security. 
All datasets added to a pool with encryption applied inherit encryption. This means all datasets added to a pool with encryption are also encrypted.

[Create a new pool]({{< relref "PoolCreate.md#creating-a-pool" >}}) and set **Encryption** in the **Pool Manager**.
TrueNAS shows a warning.

{{< trueimage src="/images/CORE/12.0/StoragePoolsAddEncryptionWarning.png" alt="Storage Pools Add Encryption Warning" id="1 Storage Pools Add Encryption Warning" >}}

Read the warning, select **Confirm**, and click **I Understand**.

We recommend using the default encryption in **Cipher**, but other ciphers are available.

{{< trueimage src="/images/CORE/12.0/StoragePoolsAddCreateEncryptionCiphers.png" alt="Choosing an encryption cipher" id="2 Choosing an encryption cipher" >}}

{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

## Encrypting a New Dataset

TrueNAS can encrypt new datasets within an existing unencrypted storage pool without having to encrypt the entire pool.
To encrypt a single dataset, go to **Storage > Pools**, open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for an existing dataset, and click **Add Dataset**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetAdd.png" alt="New Dataset Options" id="3 New Dataset Options" >}}

In the **Encryption Options** area, clear the **Inherit** checkbox, then select **Encryption**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsCreateDatasetEncryptionOptions.png" alt="Dataset Encryption Options" id="4 Dataset Encryption Options" >}}

Now select the authentication to use from the two options in **Type**: either a **Key** or **Passphrase**.
The remaining options are the same as a new pool.
Datasets with encryption enabled show additional icons on the **Storage > Pools** list.

### Locking and Unlocking Datasets

The dataset locked/unlocked status is determined from an icon:

* The dataset unlocked icon: <i class="material-icons" aria-hidden="true" title="<unlocked>">lock_open</i>.
* The dataset locked icon: <i class="material-icons" aria-hidden="true" title="<locked>">lock</i>.
* A Dataset on an encrypted pool with encryption properties that don't match the root dataset shows this icon: ![UnecryptedPoolEncryptionDatasetIcon](/images/CORE/12.0/unecrypted_pool_encrypted_dataset.png "Unencrypted Storage Pool with an Unencrypted Dataset")

{{< hint type=note >}}
NOTE: An unencrypted pool with an encrypted dataset also shows this icon: ![UnecryptedPoolEncryptionDatasetIcon](/images/CORE/12.0/unecrypted_pool_encrypted_dataset.png "Unencrypted Storage Pool with an Unencrypted Dataset")
{{< /hint >}}
 
You can only lock or unlock encrypted datasets when they are secured with a passphrase instead of a key file.
Before locking a dataset, verify that it is not currently in use, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) and **Lock**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetLockOptions.png" alt="Dataset Locking Options" id="5 Dataset Locking Options" >}}

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset.
After locking a dataset, the unlock icon changes to a locked icon.
While the dataset is locked, it is not available for use.

To unlock a dataset, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and **Unlock**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetUnlockOptions.png" alt="Dataset Unlock Options" id="6 Dataset Unlock Options" >}}

Enter the passphrase and click **Submit**. 
To unlock child datasets, select **Unlock Children**. 
Child datasets that inherited encryption settings from the parent dataset unlock when the parent unlocks. 
Users can simultaneously unlock child datasets with different passphrases from the parent by entering their passphrases.

Confirm unlocking the datasets and wait for a dialog to show the unlock is successful.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetUnlockSuccess.png" alt="Dataset Unlock Success" id="7 Dataset Unlock Success" >}}

{{< expand "Example" >}}

{{< trueimage src="/images/CORE/12.0/EncrytionExample1.png" alt="Encrypted locked Datasets" id="8 Encrypted locked Datasets" >}}

The parent dataset is *media*. It has three child datasets. 
The *documents* child dataset inherits the parent encryption settings and password. 
The other two child datasets (*audio* and *video*) have their own passphrases. When you lock the parent dataset all child datasets are also locked.

{{< trueimage src="/images/CORE/12.0/EncrytionExample2.png" alt="Password for locked Datasets" id="9 Password for locked Datasets" >}}

Open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the parent dataset and select **unlock**. 
To unlock all the datasets, select **Unlock Children** and enter the passphrase for each dataset to unlock.

{{< trueimage src="/images/CORE/12.0/EncrytionExample3.png" alt="Successfully unlocked Datasets" id="10 Successfully unlocked Datasets" >}}

Click the **Continue** button in the dialog window that confirms that the unlocking was successful. 
The dataset listing changes to show the unlocked icon.
{{< /expand >}}
## Encryption Management

There are two ways to manage the encryption credentials, with either key files or passphrases.
{{< hint type=warning >}}
Always back up the key file to a safe and secure location!
{{< /hint >}}
### Key Files
Creating a new encrypted pool automatically generates a new key file and prompts you to download it.

{{< trueimage src="/images/CORE/12.0/EncryptionKeyBackupWarning.png" alt="Encryption Backup Warning" id="11 Encryption Backup Warning" >}}
#### Pool Key File

Manually download a copy of the inherited and non-inherited encrypted dataset key files for the pool by opening the pool <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and selecting **Export Dataset Keys**. Enter the root password and click **CONTINUE**.

{{< trueimage src="/images/CORE/13.0/storagepoolexportdatasetkeys.png" alt="Exporting Key Files" id="12 Exporting Key Files" >}}

#### Dataset Key File
To manually download a back up of a single key file for the dataset, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and select **Export Key**. 
Enter the root password and click **CONTINUE**. Click **DOWNLOAD KEY**.

To change the key, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and **Encryption Options**.

{{< trueimage src="/images/CORE/13.0/storagepoolencryptionoptions.png" alt="Dataset Options: Encryption Options" id="13 Dataset Options: Encryption Options" >}}

Enter your custom key or click **Generate Key**.

{{< trueimage src="/images/CORE/13.0/storagepoolgeneratekey.png" alt="Editing Encryption Options" id="14 Editing Encryption Options" >}}

### Passphrases
{{< hint type=important >}}
The passphrase is the only means to decrypt the information stored in a dataset using passphrase encryption keys. Be sure to create a memorable passphrase or physically secure the passphrase.
{{< /hint >}}
To use a passphrase instead of a key file, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and **Encryption Options**.
Change the **Encryption Type** from **Key** to **Passphrase**.

{{< trueimage src="/images/CORE/12.0/StoragePoolsDatasetEncryptionPassphrase.png" alt="Dataset Encryption Passphrase Options" id="15 Dataset Encryption Passphrase Options" >}}

Set the rest of the options:
* **Passphrase** is a user-defined string of eight to 512 characters in length, to use instead of an encryption key to decrypt the dataset.

* **pbkdf2iters** is the number of password-based key derivation function 2 ([PBKDF2](https://tools.ietf.org/html/rfc2898#appendix-A.2)) iterations to use for reducing vulnerability to brute-force attacks. 
  Entering a number greater than **100000** is required.

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS Enterprise users may connect a Key Management Interoperability Protocol ([KMIP]({{< relref "/CORE/UIReference/System/KMIP.md" >}})) server to centralize keys when they are not using passphrases to unlock a dataset or zvol. 

Users with TrueNAS CORE or Enterprise installations without [KMIP]({{< relref "/CORE/UIReference/System/KMIP.md" >}}) should either replicate the dataset or zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/zvol with a unique key.

### Unlocking Methods
{{< expand "Method 1: Construct JSON Manifest" >}}
1. Replicate every encrypted dataset you want to replicate with properties. 
2. Export key for every child dataset which has a unique key. 
3. Construct a proper json for each child dataset with *poolname*/*datasetname* of the destination system and key from the source system. For example: 
   `{"tank/share01": "57112db4be777d93fa7b76138a68b790d46d6858569bf9d13e32eb9fda72146b"}`
5. Save this file with the extension <file>.json<file>. 
6. Unlock the dataset(s) on the remote system using properly constructed <file>json<file> files.

{{< /expand >}}
{{< expand "Method 2: Replicate Encrypted Dataset/zvol Without Properties" >}}
To not encrypt the dataset on the remote side so it does not require a key to unlock, clear properties when replicating.
1. Go to **Tasks > Replication Tasks** and click **ADD**.
2. Click **ADVANCED REPLICATION CREATION**.
3. Fill out the form as needed and do not select **Include Dataset Properties**.
4. Click **SUBMIT**.
{{< /expand >}}


{{< hint type=note >}}
This does not affect TrueNAS Enterprise installs with [KMIP]({{< relref "/CORE/UIReference/System/KMIP.md" >}}).
{{< /hint >}}

## Legacy GELI Encryption

TrueNAS no longer supports GELI encryption (deprecated).

{{< expand "Can I directly convert a GELI-encrypted pool to native ZFS encryption?" "v" >}}
No.
You must migrate data out of the GELI pool and into a ZFS encrypted pool.
{{< /expand >}}

### GELI Pool Migrations

Data can be migrated from the GELI-encrypted pool to a new ZFS-encrypted pool. 
Unlock the GELI-encrypted pool before attempting any data migrations. 
The new ZFS-encrypted pool must be at least the same size as the previous GELI-encrypted pool. 
Do not delete the GELI dataset until you verify the data migration.

There are a few options to migrate data from a GELI-encrypted pool to a new ZFS-encrypted pool: 
* Using the [Replication Wizard](#using-the-replication-wizard)
* Using [file transfer](#file-transfer-method)
* Using [ZFS send and receive](#zfs-send-and-receive)

#### Using the Replication Wizard
GELI encrypted pools continue to be detected and supported in the TrueNAS web interface as **Legacy Encrypted** pools. 
As of TrueNAS version 12.0-U1, a decrypted GELI pool can migrate data to a new ZFS encrypted pool using the Replication Wizard.
{{< expand "Replication Wizard Method" "v" >}}
Start the Replication Wizard, go to **Tasks** > **Replication Task** and click **ADD**.

1. In **Source Location**, select **On this System**, then set the dataset to transfer.
2. In **Destination Location**, select **On a Different System**, then:

   a. Create or select an existing **SSH Connection**. 
      Either click **Create New** or select the destination system SSH connection from the list of available connections.

   b.  In **Destination**, select the dataset to replicate files to.

   c. (Optional) Select **Encryption** to apply encryption to the SSH transfer. 
      Select either **PASSPHRASE** or **HEX** as the **Encryption Key Format**. 
      If you selected **PASSPHRASE**, enter the passphrase. If you selected **HEX**, set **Generate Encryption Key**. 
      Select **Store Encryption key in Sending TrueNAS database**. 
      Click **Next**
 
3. Select **Run Once** as the replication schedule.
4. Clear the **Make Destination Dataset Read-Only** checkbox.
5. Click **START REPLICATION**
{{< /expand >}}
#### File Transfer Method
{{< hint type=important >}}
This method does not preserve file ACLs.
{{< /hint >}}
The web interface supports using **Tasks > Rsync Tasks** to transfer files out of the GELI pool.
{{< expand "File Transfer Method" "v" >}}
In the **Shell**, `rsync` and other file transfer mechanisms (`scp`, `cp`, `sftp`, `ftp`, `rdiff-backup`) are available for copying data between pools.
{{< /expand >}}
#### ZFS Send and Receive
{{< hint type=important >}}
These instructions are an example walk-through, and not an exact step-by-step guide for all situations.
Research ZFS [send](https://openzfs.github.io/openzfs-docs/man/8/zfs-send.8.html)/[receive](https://openzfs.github.io/openzfs-docs/man/8/zfs-receive.8.html) before attempting this.
A simple example cannot cover every edge case.
{{< /hint >}}
{{< expand "ZFS Send and Receive Method" "v" >}}
Legend:

* GELI pool = pool_a
* Origin dataset = dataset_1
* Latest snapshot of GELI pool = snapshot_name
* ZFS native-encrypted pool = pool_b
* Receiving dataset = dataset_2

1. Create a new encrypted pool in **Storage > Pools**.
2. Open the **Shell**.
   Make a new snapshot of the GELI pool and dataset with the data to migrate. Enter command: 
   `zfs snapshot -r pool_a/dataset_1@snapshot_name`.
3. Create a passphrase: `echo passphrase > /tmp/pass`.
4. Use ZFS send/receive to transfer the data between pools. Enter command:
   `zfs send -Rv pool_a/dataset_1@snapshot_name | zfs recv -o encryption=on -o keyformat=passphrase -o keylocation=file:///tmp/pass pool_b/dataset_2`.
5. After the transfer completes, go to **Storage > Pools** and lock the new dataset.
   After locking the dataset, immediately unlock it.
   TrueNAS prompts for the passphrase.
   After entering the passphrase and unlocking the pool, you can delete the `/tmp/pass` file used for the transfer.
6. If desired, you can convert the dataset to use a key file instead of a passphrase.
   To use a key file, click the dataset <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) and click **Encryption Options**.
   Change the **Encryption Type** from **Passphrase** to **Key** and save.
   Back up your key file immediately!
7. Repeat this process for every dataset in the pool that you need to migrate.
{{< /expand >}}

{{< taglist tag="coredataset" limit="10" title="Related Dataset Articles" >}}
{{< taglist tag="corepool" limit="10" title="Related Pool Articles" >}}
