---
title: "Storage Encryption"
description: "Provides information on SCALE storage encryption for pools, root datasets, datasets, and zvols."
weight: 50
aliases:
 - /scale/storage/encryptionscale/
 - /scale/scaletutorials/storage/datasets/encryptionscale/
tags:
- encryption
- datasets
- pools
- zvol
---

TrueNAS SCALE offers ZFS encryption for your sensitive data in pools and datasets or Zvols.

{{< include file="/static/includes/EncryptionBackupKeys.md" >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM)

The local TrueNAS system manages keys for data-at-rest.
Users are responsible for storing and securing their keys.
TrueNAS SCALE includes the [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html).

## Pool and Dataset Encryption

{{< include file="/static/includes/EncryptionWarning.md" >}}

TrueNAS automatically generates a root dataset when you create a pool.
This root dataset inherits the encryption state of the pool through the **Encryption** option on the **[Pool Creation Wizard]({{< relref "PoolCreateWizardScreens.md" >}})** screen when you create the pool.
Because encryption is inherited from the parent, all data within that pool is encrypted.
Selecting the **Encryption** option for the pool (root dataset) forces encryption for all datasets and zvols created within the root dataset.

You cannot create an unencrypted dataset within an encrypted pool or dataset.
This change does not affect existing datasets created in earlier releases of SCALE, but does affect new datasets created in 22.12.3 and later releases.

Leave the **Encryption** option on the **Pool Creation Wizard** screen cleared to create an unencrypted pool.
You can create both unencrypted and encrypted datasets within an unencrypted pool (root dataset).
If you create an encrypted dataset within an unencrypted dataset, all dataset or zvol created within that encrypted dataset are automatically encrypted.


If you have only one pool on your system, do not select the **Encryption** option for this pool.

{{< expand "Can I change dataset encryption?" "v" >}}
Before you save a new dataset, you can change the type of encryption of an encrypted dataset to key to passphrase.
After you save a dataset with encryption applied you cannot change the dataset to unencrypted.

After saving a dataset with encryption, if the encryption type is set to passphrase you can change it to key type, but you cannot change from key tpye to passphrase.
{{< /expand >}}
{{< expand "Can I unencrypt my data?" "v" >}}
Yes, you can move encrypted data to an unencrypted pool or dataset using either rsync or replication.
You can also move data from an unencrypted pool or dataset to an encrypted dataset using rsync or replication.
{{< /expand >}}

{{< hint type=important >}}
If your system loses power or you reboot the system, the datasets, zvols, and all data in an encrypted pool automatically lock to protect the data in that encrypted pool.
{{< /hint >}}

### Encryption Visual Cues
SCALE uses lock icons to indicate the encryption state of a root, parent, or child dataset in the tree table on the **[Datasets]({{< relref "/SCALEUIReference/Datasets/_index.md" >}})** screen.
Each icon shows a text label with the state of the dataset when you hover the mouse over the icon.

{{< include file="/static/includes/EncryptionIconsSCALE.md" >}}

A dataset that inherits encryption shows the mouse hover-over label **Locked by ancestor** or **Unlocked by ancestor**.

Select an encrypted dataset to see the **ZFS Encryption** widget on the **Datasets** screen.

The dataset encryption state is unlocked until you lock it using the **Lock** button on the **ZFS Encryption** widget.
After locking the dataset, the icon on the tree table changes to locked and the **Unlock** button shows onthe **ZFS Encryption** widget.

## Implementing Encryption
Before creating a pool with encryption decide if you want to encrypt all datasets, zvols, and data stored on the pool.

{{< hint type=warning >}}
You cannot change a pool from encrypted to non-encrypted. You can only change the dataset encryption type (key or passphrase) for the encrypted pool.
{{< /hint >}}
If your system does not have enough disks to allow you to create a second storage pool, we recommend that you not use encryption at the pool level. Instead, apply encryption at the dataset level to non-root parent or child datasets.
{{< hint type=important >}}
All pool-level encryption is key-based encryption. When prompted, download the encryption key and keep it stored in a safe place where you can back up the file.
You cannot use passphrase encryption at the pool level.
{{< /hint >}}
### Adding Encryption to a New Pool
Go to **Storage** and click **Create Pool** on the **Storage Dashboard** screen.
You can also click **Add to Pool** on the **Unassigned Disks** widget and select the **Add to New** to open the **Pool Creation Wizard**.

Enter a name for the pool, select **Encryption** next to **Name**, then select the layout for the data VDEV and add the disks.
A warning dialog displays after selecting **Encryption**.

Read the warning, select **Confirm**, and then click **I UNDERSTAND**.

A second dialog opens where you click **Download Encryption Key** for the pool encryption key.

{{< trueimage src="/images/SCALE/Storage/DownloadEncryptionKeyForPool.png" alt="Download Encryption Key on Pool Manager" id="Download Encryption Key on Pool Manager" >}}

Click **Done** to close the window.
Move the encryption key to safe location where you can back up the file.

Add any other VDEVS to the pool you want to include, then click **Save** to create the pool with encryption.

### Adding Encryption to a New Dataset
To add an encrypted dataset, go to **Datasets**.

Select dataset on the tree table where you want to add a new dataset.
The default dataset selected when you open the **Datasets** screen is the root dataset of the first pool on the tree table list.
If you have more than one pool and want to create a dataset in a pool other than the default, select the root dataset for that pool or any dataset under the root where you want to add the new dataset.

Click **Add Dataset** to open the **Add Dataset** screen, then click **Advanced Options**.

Enter a value in **Name**.

Select the **Dataset Preset** option you want to use. Options are:
{{< include file="/static/includes/DatasetPresetOptions.md" >}}

To add encryption to a dataset, scroll down to **Encryption Options** and select the inherit checkbox to clear the checkmark.
If the parent dataset is unencrypted and you want to encrypt the dataset, clearing the checkmark to shows the **Encryption** option.
If the parent dataset is encrypted and you want to change the type, clearing the checkmark shows the other encryption options.
To keep the dataset encryption settings from the parent, leave inherited check-marked.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetEncryptionOptionsInheritCleared.png" alt="Add Dataset Encryption Options Clear Inherit" id="Add Dataset Encryption Options Clear Inherit" >}}

Decide if you want to use the default key type encryption and if you want to let the system generate the encryption key.
To use key encryption and your own key, clear the **Generate key** checkbox to display the **Key** field. Enter your key in this field.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetEncryptionKeyfromNonEncrypted.png" alt="Add Key Encryption" id="Add Key Encryption" >}}

To change to passphrase encryption, click the down arrow and select **Passphrase** from the **Encryption Type** dropdown.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetEncryptionOptionsPassphrase.png" alt="Add Passphrase Encryption" id="Add Passphrase Encryption" >}}

You can select the encryption algorithm to use from the **Encryption Standard** dropdown list of options or use the recommended default.
Leave the default selection if you do not have a particular encryption standard you want use.  
{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

{{< hint type=note >}}
The passphrase must be longer than 8 and less than 512 characters.
{{< /hint >}}

{{< hint type=warning >}}
Keep encryption keys and/or passphrases safeguarded in a secure and protected place.
Losing encryption keys or passphrases can result in permanent data loss!
{{< /hint >}}

### Changing Dataset (or Zvol) Encryption
You cannot add encryption to an existing dataset.
You can change the encryption type for an already encrypted dataset using the **Edit** option on the **ZFS Encryption** widget for the dataset.

{{< hint type=warning >}}
Save any change to the encryption key or passphrase, and update your saved passcodes and keys file, and then back up that file.
{{< /hint >}}

To change the encryption type, go to **Datasets**:

Select the encrypted dataset on the tree table, then click **Edit** on the **ZFS Encryption** widget.
The **Edit Encryption Options** dialog for the selected dataset displays.

You must unlock a locked encrypted dataset before you can make changes.

If the dataset inherits encryption settings from a parent dataset, to change this, clear the **Inherit encryption properties from parent** checkbox to display the key type encryption setting options.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionOptionsInheritedSettings.png" alt="Edit Encryption Window - Inherited" id="Edit Encryption Window - Inherited" >}}

If the encryption type is set to passphrase, you can change the passphrase, or change **Encryption Type** to key.
You cannot change a dataset created with key as the encryption type to passphrase.

Key type options are **Generate Key** (pre-selected) or clear to display the **Key** field. Enter your new key in this field.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionOptionsWindowKeyType.png" alt="Edit Encryption Key Type" id="Edit Encryption Key Type" >}}

To change the passphrase for passphrase-encryption, enter a new passphrase in **Passphrase** and **Confirm Passphrase**.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionOptionsWindowPassphrase.png" alt="Edit Encryption - Passphrase" id="Edit Encryption - Passphrase" >}}

Use a complex passphrase that is not easy to guess. Store in a secure location subject to regular backups.

Leave the other settings at default, then click **Confirm** to activate **Save**.

Click **Save** to close the window and update the **ZFS Encryption** widget to reflect the changes made.

## Locking and Unlocking Datasets
{{< hint type=important >}}
You can only lock and unlock an encrypted dataset if it is secured with a passphrase instead of a key file.
Before locking a dataset, verify that it is not currently in use.
{{< /hint >}}

### Locking a Dataset
Select the encrypted dataset on the tree table, then click **Lock** on the **ZFS Encryption** widget to open the **Lock Dataset** dialog with the dataset full path name.

{{< trueimage src="/images/SCALE/Datasets/LockDatasetDialog.png" alt="Lock Dataset" id="Lock Dataset" >}}

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset.
**Force unmount** boots anyone using the dataset (e.g. someone accessing a share) so you can lock it.
Click **Confirm** to activate **Lock**, then click **Lock**.

{{< hint type=note >}}
You *cannot* use locked datasets.
{{< /hint >}}

### Unlocking a Dataset
To unlock a dataset, go to **Datasets** then select the locked dataset on the tree table.
Click **Unlock** on the **ZFS Encryption** widget to open the **Unlock Dataset** screen.

{{< trueimage src="/images/SCALE/Datasets/UnlockDatasetsScreen.png" alt="Dataset Unlock Screen" id="Dataset Unlock Screen" >}}

Enter the key if key-encrypted, or the passphrase into **Dataset Passphrase** and click **Save**.

Select **Unlock Child Encrypted Roots** to unlock all locked child datasets if they use the same passphrase.

Select **Force** if the dataset mount path exists but is not empty. When this happens, the unlock operation fails.
Using **Force** allows the system to rename the existing directory and file where the dataset should mount. This prevents the mount operation from failing.
A confirmation dialog displays.

{{< trueimage src="/images/SCALE/Datasets/UnlockDatasetsContinueDialog.png" alt="Continue Dataset Unlock Confirmation" id="Continue Dataset Unlock Confirmation" >}}

Click **CONTINUE** to confirm you want to unlock the datasets. Click **CLOSE** to exit and keep the datasets locked.
A second confirmation dialog opens confirming the datasets unlocked.
Click **CLOSE**.
TrueNAS displays the dataset with the unlocked icon.

## Encrypting a Zvol
Encryption is for securing sensitive data.

{{< hint type=note >}}
You can only encrypt a Zvol if you create the Zvol from a dataset with encryption.
{{< /hint >}}

{{< include file="/static/includes/EncryptionBackupKeys.md" >}}

Zvols inherit encryption settings from the parent dataset.

To encrypt a Zvol, select a dataset configured with encryption and then [create a new Zvol]({{< relref "AddManageZvols.md" >}}).
Next, go to **Datasets** and click on the Zvol.

{{< trueimage src="/images/SCALE/Datasets/ZFSEncryptionWidgetRootDataset.png" alt="ZFS Encryption Widget Root Dataset" id="ZFS Encryption Widget" >}}

If you do not see the **ZFS Encryption** widget, you created the Zvol from an unencrypted dataset. Delete the Zvol and start over.

The Zvol is encrypted with settings inherited from the parent dataset.

To change inherited encryption properties from passphrase to key, or enter new key or passphrase, select the zvol, then click **Edit** on the **ZFS Encryption** widget.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionDialogForZvol.png" alt="Edit Zvol Encryption" id="Edit Zvol Encryption" >}}

If **Encryption Type** is set to**Key**, type an encryption key into the **Key** field or select **Generate Key**.
If using **Passphrase**, enter a passphrase of eight to 512 characters. Use a passphrase complex enough to not easily guess.
After making any changes, select **Confirm**, and then click **Save**.

{{< hint type=warning >}}
Save any change to the encryption key or passphrase, update your saved passcodes and keys file, and back up the file.
{{< /hint >}}

## Managing Encryption Credentials
There are two ways to manage the encryption credentials, with a key file or passphrase.
Creating a new encrypted pool automatically generates a new key file and prompts users to download it.

{{< hint type=warning >}}
Always back up the key file to a safe and secure location.
{{< /hint >}}
To manually back up a root dataset key file, click **Export Key** on the **ZFS Encryption** widget.

{{< trueimage src="/images/SCALE/Datasets/EditRootDatasetEncryptionOptions.png" alt="Edit Root Dataset Encryption Keys" id="Edit Root Dataset Encryption Keys" >}}

See [Changing Dataset-Level Encryption](#changing-dataset-level-encryption) for more information on changing encryption settings.

A passphrase is a user-defined string at least eight characters long that is required to decrypt the dataset.A passphrase is a user-defined string of eight to 512 characters that is required to decrypt the dataset.
The **pbkdf2iters** is the number of password-based key derivation function 2 ([PBKDF2](https://tools.ietf.org/html/rfc2898#appendix-A.2)) iterations to use for reducing vulnerability to brute-force attacks. Users must enter a number greater than *100000*.

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase
TrueNAS SCALE users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special JSON manifest to unlock each child dataset/zvol with a unique key.

{{< include file="/static/includes/ReplicatedEncryptedUnlock.md" >}}