---
title: "Encryption"
description: "Native ZFS Encryption in TrueNAS"
tags: ["zfs","encryption","security"]
---

You can encrypt the root dataset of a new storage pool to further increase data security.
Please note that you will be responsible to remember or otherwise back up passphrases or other access methods to your encrypted data.

## Encrypting a Storage Pool

To begin encrypting data, follow the same process as creating a new pool and set the **Encryption** option at the top of the page.

<img src="/images/TN-12.0-encryption-1.PNG">
<br><br>

The default encryption cipher is recommended, but there are other ciphers available.

<img src="/images/TN-12.0-encryption-2.PNG">
<br><br>

### Encrypting a New Dataset

New datasets within an existing storage pool can also be encrypted without having to encrypt the entire pool.
To encrypt a single dataset, go to **Storage > Pools**, open the <i class="fas fa-ellipsis-v"></i> (Options) for an existing dataset, and click **Add Dataset**.
Look at the *Encryption Options* and, if the parent dataset is unencrypted, unset the **Inherit** option.
You can then set the **Encryption** option for the new dataset and configure the *Type* and other options.

## Keyfiles

Creating a new encrypted dataset generates a keyfile for that dataset.
Always back up the keyfile to a safe and secure location.

<img src="/images/TN-12.0-encryption-3.PNG">
<br><br>

Manually back up a root dataset keyfile by clicking the gear menu and selecting **Export Dataset Keys**. 

<img src="/images/TN-12.0-encryption-8.PNG">
<br><br>

To change the keyfile, click <i class="fas fa-ellipsis-v"></i> (Options) and select **Encryption Options**.  

<img src="/images/TN-12.0-encryption-4.PNG">
<br><br>

Enter your custom key or click **Generate Key**. Remember to back up your keyfiles after creating or updating them.

<img src="/images/TN-12.0-encryption-5.PNG">
<br><br>

## Passphrase

To use a passphrase instead of a keyfile, click <i class="fas fa-ellipsis-v"></i> (Options) and select **Encryption Options**.
Change the *Encryption Type* from `Key` to `Passphrase`.

<img src="/images/TN-12.0-encryption-6.PNG">
<br><br>

<img src="/images/TN-12.0-encryption-7.PNG">
<br><br>

**Encryption Type**: How the dataset is secured. Choose between securing with an encryption Key or a user-defined Passphrase.

**Passphrase**: User-defined string used to decrypt the dataset. Can be used instead of an encryption key.
WARNING: the passphrase is the only means to decrypt the information stored in this dataset. Be sure to create a memorable passphrase or physically secure the passphrase.
Must be longer than 8 characters

**pbkdf2iters**: Number of password-based key derivation function 2 (PBKDF2) iterations to use for reducing vulnerability to brute-force attacks. Entering a number larger than 100000 is required. See PBKDF2 for more details.

## Locking and Unlocking Datasets

Encrypted datasets can only be locked and unlocked if they are secured with a passphrase instead of a keyfile.
Before locking a dataset, verify that it is not currently in use, then click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) and **Lock**.

<img src="/images/TN-12.0-encryption-10.PNG">
<br><br>

Use the **Force unmount** option only if you are certain that no one is currently accessing the dataset.

<img src="/images/TN-12.0-encryption-11.PNG">
<br><br>

A dialog window remains visible while the dataset is locked.

<img src="/images/TN-12.0-encryption-12.PNG">
<br><br>

After locking a dataset, the unlock icon changes to a locked icon.
While the dataset is locked, it is not available for use.

To unlock a dataset, click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) and **Unlock**.

<img src="/images/TN-12.0-encryption-13.PNG">
<br><br>

Enter the passphrase and click **Submit**. If there are child datasets that are locked with the same passphrase you can unlock them all at the same time by setting *Unlock Children*.

<img src="/images/TN-12.0-encryption-14.PNG">
<br><br>

Confirm that you want to unlock the datasets.

<img src="/images/TN-12.0-encryption-15.PNG">
<br><br>

A dialog confirms when datasets are successfully unlocked.

<img src="/images/TN-12.0-encryption-16.PNG">
<br><br>

The dataset listing changes to show the unlocked icon.

## Conversion from GELI

It is not possible to convert an existing FreeNAS/TrueNAS 11.3 or earlier GELI-encrypted pool to use native ZFS encryption.
However, data can be migrated from the GELI-encrypted pool to a new ZFS-encrypted pool. The new ZFS-encrypted pool must be at least the same size as the previous GELI-encrypted pool. Two options exist to migrate data from a GELI-encrypted pool to a new ZFS-encrypted pool. The first method is to use `rsync` to copy the data between the pools. The second method is to use ZFS send/receive commands.

{{% alert title=Warning color=warning %}}
The following is an example walkthrough. It is not an exact step-by-step guide for all situations. Research ZFS [send](https://openzfs.github.io/openzfs-docs/man/8/zfs-send.8.html)/[receive](https://openzfs.github.io/openzfs-docs/man/8/zfs-receive.8.html) before attempting this. There are many edge cases that cannot be covered by a simple example.
{{% /alert %}}

Legend:
```
GELI Pool = pool_a 
Latest Snapshot of GELI Pool = snapshot_name
ZFS Native Encrypted Pool = pool_b
Receieving Dataset = dataset_1
```

1. Create a new encrypted pool in **Storage > Pools**, as described at the [beginning of this article](#encrypting-a-storage-pool).
2. Open the **Shell**. Make a new snapshot of the GELI pool with the data to be migrated: `zfs snapshot -r pool_a@snapshot_name`.
3. Create a passphrase: `echo passphrase > /tmp/pass`.
4. Use ZFS send/receive to transfer the data between pools: `zfs send -Rv pool_a@snapshot_name | zfs recv -o encryption=on -o keyformat=passphrase -o keylocation=file:///tmp/pass pool_b/dataset_1`.
5. When the transfer is complete, go to **Storage > Pools** and lock the new dataset. After locking the dataset, immediately unlock it. TrueNAS prompts for the passphrase. After entering the passphrase and the pool is unlocked, you can delete the `/tmp/pass` file used for the transfer.
6. If desired, you can convert the dataset to use a keyfile instead of a passphrase. To use a passphrase instead of a keyfile, open the dataset <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> (Options) and click **Encryption Options**. Change the *Encryption Type* from **Passphrase** to **Key** and save. Remember to back up your keyfile immediately!
