---
title: "Storage Encryption"
description: "This article provides information on SCALE storage encryption for pools, datasets and zvols."
weight: 50
aliases: /scale/storage/encryptionscale/
tags:
 - scaleencryption
 - scaledatasets
 - scalepools
 - scalezovls
 - scalestorage
---

{{< toc >}}

TrueNAS SCALE offers ZFS encryption for your sensitive data in pools and datasets or zvols.

{{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM)

The local TrueNAS system manages keys for data-at-rest.
Users are responsible for storing and securing their keys.
TrueNAS SCALE includes the [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html).

## Pool Manager Encryption

{{< include file="/_includes/EncryptionWarning.md" type="page" >}}

Every pool has a root dataset automatically created when you create the pool. This root dataset indicates the encryption status for the pool. 
If you select the **Encryption** option on the it forces encryption for all datasets, zvols, and all data contained in that pool because encryption is inherited from the parent. 
You cannot add unencrypted datasets to an encrypted pool or root dataset for an encrypted pool.

If you leave the **Encryption** option clear on the **Pool Create > Pool Manager** screen that pool and the root dataset are not encrypted. You have the option to add an encrypted dataset under an unencrypted root dataset if you need to protect data with encryption. If you choose to add an encrypted dataset under an unencrypted root dataset, that new encrypted dataset becomes a "parent" for encryption for any dataset created from it. All child datasets, zvols, and all data in that storage branch inherits the encryption from that parent. The other datasets created from the unencrypted root dataset remain unencrypted unless you choose to add it again.

{{< hint warning >}}
You can only mix an encrypted dataset with an unencrypted dataset in a pool created without encryption at the pool level.
{{< /hint >}}

### Encryption Visual Cues

Pool and dataset encryption can be visually confusing in SCALE. 
SCALE uses three different lock-type icons that indicate the encryption state of a root or parent dataset and the pool. 
Each of these icons display text dialogs that explain the state of the dataset when you hover the mouse over it.

| Lock Icon | Description |
|-----------|-------------|
| <span class="iconify" data-icon="mdi:lock-open-variant"></span> | Unlocked icon |
| <i class="material-icons" aria-hidden="true" title="<locked>">lock</i> | Locked icon |
| ![UnecryptedPoolEncryptionDatasetIcon](/images/CORE/12.0/unecrypted_pool_encrypted_dataset.png "Unencrypted Storage Pool with an Unencrypted Dataset") | No lock icon |

Because the root dataset inherits encryption from its parent, in this case the pool, the root dataset displays the lock icon that applies.
Child datasets of the parent do not display a lock icon, so on the **Storage** screen you must look to the parent or root dataset to determine if the child is encrypted.

![UnlockedEncryptedRootState](/images/SCALE/22.02/UnlockedEncryptedRootState.png "Unlocked Encrypted Root Dataset")

If the pool and root dataset are not encrypted they do not display a lock icon unless you create a new child dataset you encrypt. 
In this case, the root dataset displays the no-lock icon, the new encrypted child dataset displays the unlock icon. 

![UnencryptedRootDatasetState](/images/SCALE/22.02/UnencryptedRootDatasetState.png "Unencrypted Root Dataset With Encrypted Child")

This encrypted child dataset becomes a parent for all datasets created from it and those child datasets inherit the encryption the encrypted parent.

![EncryptedChildDatasetUnencryptedRoot](/images/SCALE/22.02/EncryptedChildDatasetUnencryptedRoot.png "Encrypted Child Dataset of UneEncrypted Root")

The encryption icon only displays on the root or for a child dataset that becomes parent-root dataset for encryption. 

The dataset encryption state is unlocked until you lock it using the **Data Actions > Lock** option, and then the icon changes to the locked version.

## Implementing Encryption
Before creating a pool with encryption make sure you want to encrypt all datasets and data stored on the pool. 

{{< hint warning>}}
You cannot change a pool from an encrypted to a non-encrypted, you can only change the encryption type for the datasets in the encrypted pool.
{{< /hint >}}

If your system does not have enough disks to allow you to create a second storage pool, it is recommend you not use encryption at the pool level. If you want to mix encrypted and unencrypted datasets, do no implement encryption at the pool level.
{{< hint warning >}}
All datasets created in an encrypted pool have encryption. You cannot create an unencrypted dataset in an encrypted pool.

All pool-level encryption is key-based encryption. You cannot use passphrase encryption at the pool/root level.
{{< /hint >}}

Select **Encryption** on the **Create Pool > Pool Manager** screen.

A warning dialog displays.

![PoolEncryptionWarning](/images/SCALE/22.02/PoolEncryptionWarning.png "SCALE Pool Encryption Warning")

Read the warning, select **Confirm**, and then click **I UNDERSTAND**.

Select the encryption algorithm to use from the **Encryption Standard** dropdown list of options. 
Leave the default selection if you do not have a particular encryption standard you want use.  
{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

![CreatePoolWithEncryption](/images/SCALE/22.02/CreatePoolWithEncryption.png "Select Pool Encryption Standard")

After clicking **Create**. The download encryption keys warning dialog displays. 
Click **Download Encryption Key** and then click **Done**. The root dataset on the **Storage** screen displays the unlocked encryption icon. 

![DownloadEncryptionKeysWarning](/images/SCALE/22.02/DownloadEncryptionKeysWarning.png "Download Encryption Keys Warning")

Move the downloaded key to safe location where you perform regular backups.
{{< hint danger>}}
Keep encryption keys and/or passphrases safeguarded in a secure and protected place. 
Losing encryption keys or passphrases can result in permanent data loss!
{{< /hint >}}

### Adding an Encrypted Dataset to an Encrypted Pool
You can add a dataset to an encrypted root dataset on and encrypted pool  using either key or passphrase-type encryption. The default is key-type encryption.

To create a child dataset with passphrase encryption:

1. Select the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for where you want to create the new dataset. Click **Add Dataset**.

2. Enter a name for the dataset, scroll down to **Encryption Options** and clear the **Inherit (encryption)** checkmark. 
   The **Encryption Options** displays the **Encryption Type** with **Key** as the option, the **Generate Key** selected and the **Algorithm** selected when you created the pool. 

   ![AddDatasetEncryptionOptionsKeyType](/images/SCALE/22.02/AddDatasetEncryptionOptionsKeyType.png "Dataset Encryption Options Key Type")

3. Select **Passphrase** from the **Encryption Type** dropdown list of options. The fields change to passphrase type encryption fields.
   
   ![AddDatasetEncryptionOptionsPassphrase](/images/SCALE/22.02/AddDatasetEncryptionOptionsPassphrase.png "Dataset Encryption Options Passphrase Type")

   Enter the passphrase twice. Use a complex passphrase that is not easy to guess. Store in a secure location subject to regular backups.

{{< hint info >}}
If you only want to change the encryption key and not change to a passphrase, clear the **Generate key** checkbox, and then enter the new key into the **Key** field.  
{{< /hint >}}

### Adding an Encrypted Dataset to an Unencrypted Pool
You can mix encrypted datasets with unencrypted datasets if the pool is not encrypted. You can add an encrypted dataset from the root dataset, or you can add an encrypted dataset from dataset that is a child of the root dataset.

To add an encrypted dataset from an unencrypted dataset:

1. Select the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for where you want to create the new dataset. Click **Add Dataset**.

2. Enter a name for the dataset, configure the settings you need, and scroll down to **Encryption Options**. 

3. Clear the **Inherit (non-encryption)** checkbox.
   
   The **Encryption Type** fields for **Key** display with **Generate Key** selected and the **Algorithm** populated with the default.

   ![AddDatasetEncryptionfromNonEncrypted](/images/SCALE/22.02/AddDatasetEncryptionfromNonEncrypted.png "Add Dataset Encryption Generate Key")

   (Optional) Clear the **Generate Key** checkbox to enter the encryption key of your choice in the **Key** field.
   
   ![AddDatasetEncryptionKeyfromNonEncrypted](/images/SCALE/22.02/AddDatasetEncryptionKeyfromNonEncrypted.png "Add Dataset Encryption Key")

   (Optional) Select **Passphrase** in **Encryption Type** to use a passphrase instead of a key. Choose a complex passphrase not easily guessed and enter it twice.
   
   ![AddDatasetEncryptionKeyfromNonEncrypted](/images/SCALE/22.02/AddDatasetEncryptionKeyfromNonEncrypted.png "Add Dataset Encryption Key")

4. (Optional) Select a new encryption standard from the **Algorithm** dropdown list or use the default iXsystems value provided.

5. Configure the other settings you want or need for your dataset and then click **Save**

The **Storage** screen displays the dataset with the unlocked encryption icon and adds the no encryption icon to the root dataset. This indicates the pool and root dataset do not have encryption.
See the image for adding an encrypted dataset to an unencrypted pool in [Encryption Visual Cues](#encryption-visual-cues) above.

### Changing Dataset-Level Encryption
A dataset created from an encrypted root dataset on and encrypted pool has key-type encryption by default. The root dataset for the pool is created with key-type encryption. Use this procedure to change from key-type encryption to passphrase-type, or from a system-generated key to one you enter .
If you add a dataset to a non-encrypted pool and want to change the encryption type, you can also use this procedure to change the encryption type.

{{< hint danger >}}
Save any change to the encryption key or passphrase, and update your saved passcodes and keys file, and then back up that file. 
{{< /hint >}} 

To change the encryption type:

1. Select the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon for where you want to create the new dataset. Click **Edit Options**.
   The **Edit Encryption Options** dialog for the selected dataset (with encryption) displays.
   
   ![EditEncryptionDialog](/images/SCALE/22.02/EditEncryptionDialog.png "Edit Encryption Inherit Selected")

2. Clear the **Inherit encryption properties from parent** checkmark. 
   The dialog displays **Key** as the **Encryption Type** with the **Generate Key** and the **Algorithm** options used when you created the pool. 

   ![EditEncryptionGenerateKey](/images/SCALE/22.02/EditEncryptionGenerateKey.png "Edit Encryption Key Type") 

3. Select **Passphrase** from the **Encryption Type** dropdown list of options. The fields change to passphrase type encryption fields.
   
   ![EditEncryptionPassphrase](/images/SCALE/22.02/EditEncryptionPassphrase.png "Edit Encryption to Passphrase Type")

   Enter the passphrase twice. Use a complex passphrase that is not easy to guess. Store in a secure location subject to regular backups.

{{< hint info >}}
If you only want to change the encryption key to one of your choosing, clear the **Generate key** checkbox and then either the new key into the **Key** field. 
{{< /hint >}}

## Locking and Unlocking Datasets

{{< hint warning >}}
You can only lock and unlock an encrypted dataset if it is secured with a passphrase instead of a key file.
Before locking a dataset, verify that it is not currently in use.
{{< /hint >}}

### Locking a Dataset

Click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** option list and then click **Lock**. The **Lock Dataset** dialog displays with the dataset full path name.

![LockDatasetDialog](/images/SCALE/22.02/LockDatasetDialog.png "Dataset Locking Options")

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset.
Click **Confirm**to activate **LOCK**, and then click **LOCK**.

{{< hint info >}}
You *cannot* use locked datasets.
{{< /hint >}}

### Unlocking a Dataset

To unlock a dataset, click on the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** option list and then click **Unlock**.

![UnlockDatasetScreen](/images/SCALE/22.02/UnlockDatasetScreen.png "Dataset Unlock Options")

Type the passphrase into **Dataset Passphrase** and click **Save**. 
Select **Unlock Child Encrypted Roots** to unlock all locked child datasets if they use the same passphrase.
Select **Force** if the path where the dataset mounts exists but is not empty. When this happens the unlock operation fails. The **Force** option allows the system to rename the existing directory and file where the dataset should mount. This prevents the mount operation from failing.
A confirmation dialog displays. 

![UnlockDatasetConfirmDialog](/images/SCALE/22.02/UnlockDatasetConfirmDialog.png "Dataset Unlock Confirmation")

Click **CONTINUE** to confirm you want to unlock the datasets or **CLOSE** to exit and keep the datasets locked. 
A second confirmation window displays confirming the datasets unlocked. 
Click **CLOSE**. 
TrueNAS displays the dataset with the unlocked icon.

## Encrypting a Zvol

Encryption is for securing sensitive data. 

{{< hint info >}}
You can only encrypting a zvol if you create the zvol from a dataset with encryption.
{{< /hint >}}

{{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Zvols inherit encryption settings from the parent dataset. 

To encrypt a zvol, select a dataset configured with encryption and then [create a new zvol]({{< relref "AddManageZvols.md" >}}).
Next, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Zvol Actions** options list and then click **Encryption Options**. 

![EncryptedZvolActionsOptionss](/images/SCALE/22.02/EncryptedZvolActionsOptions.png "Zvol Actions Encryption Options")

If you do not see **Encryption Options** on the **Zvol Action**s option list you created the zvol from an unencrypted dataset. Delete the zvol and start over.

Click **Encryption Options**. The **Edit Encryption Options** dialog for the Zvol displays with **Inherit encryption properties from parent** selected. 

![EditEncryptionDialogForZvol](/images/SCALE/22.02/EditEncryptionDialogForZvol.png "Edit Zvol Encryption")

If not making changes, click **Confirm**, and then click **Save**. 
The zvol is encrypted with settings inherited from its parent.

To change inherited encryption properties, clear the **Inherit encryption properties from parent** checkbox. The current encryption settings display. You can change from key to passphrase or change from a system-generated key to one of your choosing. 

![EditEncryptionKeyType](/images/SCALE/22.02/EditEncryptionKeyType.png "Zvol Uncheck Inherit Encryption")

If **Encryption Type** is set to**Key**, type an encryption key into the **Key** field or select **Generate Key**. 
If using **Passphrase**, it should be at least eight characters long. Use a passphrase complex enough to not easily guess. 
After making any changes, select **Confirm**, and then click **Save**. 

{{< hint danger >}}
Save any change to the encryption key or passphrase, update your saved passcodes and keys file, and back up the file. 
{{< /hint >}}

## Managing Encryption Credentials

There are two ways to manage the encryption credentials, with a key file or passphrase.

Creating a new encrypted pool automatically generates a new key file and prompts users to download it.

{{< hint danger>}}
Always back up the key file to a safe and secure location.
{{< /hint >}}

![DownloadEncryptionKeysWarning](/images/SCALE/22.02/DownloadEncryptionKeysWarning.png "Download Encryption Keys")

To manually back up a root dataset key file, click the <span class="iconify" data-icon="mdi:database-cog"></span> icon to display the **Pool Actions** list of options, and select **Export Dataset Keys**.
The keys download to your system.

To change the key, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the dataset, and then click **Encryption Options**. 

![EditRootDatasetEncryptionOptions](/images/SCALE/22.02/EditRootDatasetEncryptionOptions.png "Edit Root Dataset Encryption Keys")

See [Changing Dataset-Level Encryption](#changing-dataset-level-encryption) for more information on changing encryption settings. 


A passphrase is a user-defined string at least eight characters long that is required to decrypt the dataset.   

The **pbkdf2iters** is the number of password-based key derivation function 2 ([PBKDF2](https://tools.ietf.org/html/rfc2898#appendix-A.2)) iterations to use for reducing vulnerability to brute-force attacks. Users must enter a number greater than *100000*.

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS SCALE users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/zvol with a unique key.

{{< include file="/_includes/ReplicatedEncryptedUnlock.md" type="page" >}}
