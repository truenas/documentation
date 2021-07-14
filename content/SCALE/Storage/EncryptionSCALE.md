---
title: "Encryption"
weight: 50
---

{{< toc >}}

TrueNAS SCALE offers ZFS encryption for your sensitive data in pools and datasets.

{{< hint danger>}}
Users are responsible for backing up and securing encryption key files and passphrases!
Losing the ability to decrypt data is similar to a catastrophic data loss.
{{< /hint >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM)

The local TrueNAS system manages keys for data-at-rest.
Users are responsible for storing and securing their keys.
The [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is included in TrueNAS SCALE

## Encrypting a Storage Pool

Encrypting the root dataset of a new storage pool further increases data security.
[Create a new pool]({{< relref "PoolsSCALE.md" >}}) and check the *Encryption* box in the *Pool Manager*.

![EncryptionWarningSCALE](/images/SCALE/EncryptionWarningSCALE.png "SCALE Encryption Warning")

Read the warning, check *Confirm*, and click *I Understand*.

We recommend using the default encryption cipher, but other ciphers are available.

![CiphersSCALE](/images/SCALE/CiphersSCALE.png "Choosing an encryption cipher")

{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

## Encrypting a New Dataset

Users can encrypt new datasets within an existing storage pool without having to encrypt the entire pool.
To encrypt a single dataset, go to **Storage**, open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to an existing dataset, and click *Add Dataset*.

![AddDatasetFormSCALE](/images/SCALE/AddDatasetFormSCALE.png "New Dataset Options")

Look at the *Encryption Options* and, when the parent dataset is unencrypted, uncheck *Inherit (encrypted)*.

![EncryptionOptionsSCALE](/images/SCALE/EncryptionOptionsSCALE.png "Dataset Encryption Options")

Next, choose which *Encryption Type* of authentication to use: a *Key* or a *Passphrase*.
The remaining options are the same as a new pool.
Encrypted datasets show additional icons in the **Storage** list.

### Locking and Unlocking Datasets

TrueNAS displays a dataset's status with an icon:

* Dataset unlocked icon: <i class="material-icons" aria-hidden="true" title="<unlocked>">lock_open</i>
* Dataset locked icon: <i class="material-icons" aria-hidden="true" title="<locked>">lock</i>

Encrypted datasets can only be locked and unlocked if they are secured with a passphrase instead of a keyfile.
Before locking a dataset, verify that it is not currently in use, then click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Dataset Actions) and *Lock*.

![LockDatasetSCALE](/images/SCALE/LockDatasetSCALE.png "Dataset Locking Options")

Use the *Force unmount* option only if you are certain that no one is currently accessing the dataset.
After locking a dataset, the unlock icon changes to a locked icon.
Locked datasets cannot be used.

To unlock a dataset, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and *Unlock*.

![UnlockDatasetSCALE](/images/SCALE/UnlockDatasetSCALE.png "Dataset Unlock Options")

Enter the passphrase and click **Submit**. If there are child datasets that are locked with the same passphrase you can unlock them all at the same time by setting *Unlock Children*.
Confirm unlocking the datasets and wait for a dialog to confirm the unlock is successful.

![UnlockSuccessSCALE](/images/SCALE/UnlockSuccessSCALE.png "Dataset Unlock Success")

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
