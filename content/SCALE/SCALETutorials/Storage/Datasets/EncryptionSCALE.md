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

## Pool Encryption

{{< include file="/_includes/EncryptionWarning.md" type="page" >}}

Every pool has a *root* dataset that TrueNAS automatically generates when you create the pool. 
This root dataset indicates the encryption status for the pool based on whether you select the **Encryption** option on the **[Pool Manager]({{< relref "PoolManagerScreens.md" >}})** screen when you create the pool. 
If you select the **Encryption** option for the pool, it forces encryption for all datasets, zvols, and data contained in that pool, since they inherit encryption from the parent. 

{{< hint warning >}}
If your system loses power or you reboot the system, the datasets, zvols, and all data in an encrypted pool automatically lock to protect the data in that encrypted pool. 
{{< /hint >}}

The pool and root dataset are unencrypted if you do not select the **Encryption** option on the **Pool Manager** screen. 

You can create an unencrypted dataset on an encrypted pool. You can also create an encrypted dataset on an unencrypted pool if you need to protect data with encryption. 

If you add an encrypted dataset under an unencrypted root dataset and then add child datasets under that encrypted dataset, it becomes an encrypted non-root parent to any dataset created under it. 
You can let a nested child dataset inherit the encryption settings from the parent or change the settings for the child dataset.

The other datasets created from the unencrypted root dataset can remain unencrypted unless you choose encryption when you create them.

### Encryption Visual Cues

Dataset encryption can be visually confusing in SCALE. 
SCALE uses different lock-type icons to indicate the encryption state of a root, parent, or child dataset in the tree table on the **[Datasets]({{< relref "DatasetsScreensSCALE.md" >}})** screen.
Each icon displays text labels that explain the state of the dataset when you hover the mouse over the icon.

{{< include file="/_includes/EncryptionIconsSCALE.md" type="page" >}}

If a dataset inherits encryption from either the root or a non-root parent dataset, the locking icons change to a different type, and the mouse hover-over label indicates the encryption is **Locked by ancestor** or **Unlocked by ancestor**. 

Each encrypted dataset includes the **ZFS Encryption** widget on the **Datasets** screen when you select the dataset.

The dataset encryption state is unlocked until you lock it using the **Lock** option on the **ZFS Encryption** widget. After locking the dataset, the icon on the tree table changes to the locked version and the **ZFS Encryption** widget displays the **Unlock** option.

### Inherit Encryption

Datasets *inherit* encryption, which means they use the encryption settings of the parent, whether the parent is the root dataset or a non-root parent dataset with child datasets nested under it.

You can change inherited settings for a dataset when you add the dataset, or you can change inherited encryption settings for an existing dataset using the **Edit** option on the **ZFS Encryption** widget.

## Implementing Encryption
Before creating a pool with encryption make sure you want to encrypt all datasets and data stored on the pool. 

{{< hint warning>}}
You cannot change a pool from encrypted to non-encrypted. You can only change the dataset encryption type in the encrypted pool.
{{< /hint >}}
If your system does not have enough disks to allow you to create a second storage pool, we recommend that you not use encryption at the pool level. 
You can mix encrypted and unencrypted datasets on an unencrypted pool.
{{< hint warning >}}
All pool-level encryption is key-based encryption. When prompted, download the encryption key and keep it stored in a safe place where you can back up the file.
You cannot use passphrase encryption at the pool level.
{{< /hint >}}
### Adding Encryption to a New Pool
Go to **Storage** and click **Create Pool** on the **Storage Dashboard** screen. You can also click **Add to Pool** on the **Unassigned Disks** widget and select the **Add to New** radio button to open the **Pool Manager** screen.

Enter a name for the pool, then add the disks to the Data VDEV. Select **Encryption** next to **Name**. 
A warning dialog displays.

Read the warning, select **Confirm**, and then click **I UNDERSTAND**.

A second dialog opens where you click **Download Encryption Key** for the pool encryption key. 

![DownloadEncryptionKeyForPool](/images/SCALE/22.12/DownloadEncryptionKeyForPool.png "Download Encryption Key on Pool Manager") 

Click **Done** to close the window. 
Move the encryption key to safe location where you can back up the file.

Click **Save** to create the pool with encryption.

### Adding Encryption to a New Dataset 

To add encryption to a new dataset, go to **Datasets**.

First, select the root or other dataset on the tree table where you want to add a dataset. 
The default dataset selected when you open the **Datasets** screen is the root dataset of the first pool on the tree table list. 
If you have more than one pool and want to create a dataset in a pool other than the default, select the root dataset for that pool or any dataset under the root where you want to add the new dataset. 

Click  **Add Dataset** to open the **Add Dataset** screen. 

To add a dataset, enter a value in **Name**. 

Next, select the type of **Case Sensitivity** and **Share Type** for the dataset.

To add encyrption to a dataset, select **Inherit** under **Encryption Options** to clear the checkbox. 
This displays the **Encryption** checkbox preselected. 

![AddDatasetEncryptionOptionsInheritCleared](/images/SCALE/22.12/AddDatasetEncryptionOptionsInheritCleared.png "Add Dataset Encryption Options Clear Inherit") 

Now decide if you want to use the default encryption type key and if you want to let the system generate the encryption key. 
To use key encryption and your own key, clear the **Generate key** checkbox to display the **Key** field. Enter your key in this field.

![AddDatasetEncryptionKeyfromNonEncrypted](/images/SCALE/22.12/AddDatasetEncryptionKeyfromNonEncrypted.png "Add Key Encryption") 

To change to passphrase encryption, click the down arrow and select **Passphrase** from the **Encryption Type** dropdown.

![AddDatasetEncryptionOptionsPassphrase](/images/SCALE/22.12/AddDatasetEncryptionOptionsPassphrase.png "Add Passphrase Encryption") 

You can select the encryption algorithm to use from the **Encryption Standard** dropdown list of options or use the recommended default. 
Leave the default selection if you do not have a particular encryption standard you want use.  
{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

{{< hint info>}}
The passhrase must be longer than 8 and less than 512 characters.
{{< /hint >}}

{{< hint danger>}}
Keep encryption keys and/or passphrases safeguarded in a secure and protected place. 
Losing encryption keys or passphrases can result in permanent data loss!
{{< /hint >}}

### Changing Dataset Encryption
You cannot add encryption to an existing dataset. 
You can change the encryption type for an already encrypted dataset using the **Edit** option on the **ZFS Encryption** widget for the dataset.

{{< hint type=warning >}}
Save any change to the encryption key or passphrase, and update your saved passcodes and keys file, and then back up that file. 
{{< /hint >}} 

To change the encryption type, go to **Datasets**:

1. Select the unlocked, encrypted dataset on the tree table, then click **Edit** on the **ZFS Encryption** widget.
   The **Edit Encryption Options** dialog for the selected dataset displays.

   You must unlock a locked encrypted dataset before you can make changes.
   
   If the dataset inherits encryption settings from a parent dataset, to change this, clear the **Inherit encryption properties from parent** checkbox to display the key type encryption setting options.

   ![EditEncryptionOptionsInheritedSettings](/images/SCALE/22.12/EditEncryptionOptionsInheritedSettings.png "Edit Encryption Window - Inherited")

2. Change the encryption settings. Key type options are to change the type from **Key** to **Passphrase** or from a generated to a manually-entered encryption key.
   After clearing the **Inherits encryption properties from parent** the default settings display with **Encryption Type** set to **Key** and **Generate Key** pre-selected.
   To manually enter an encryption key, select **Generate Key** to clear the checkmark and display the **Key** field. Enter the new key in this field.

   ![EditEncryptionOptionsWindowKeyType](/images/SCALE/22.12/EditEncryptionOptionsWindowKeyType.png "Edit Encryption Key Type") 

3. (Optional) Change the **Encryption Type** to **Passphrase** using the dropdown list of options. 
   The **Passphrase**  and **Confirm Passphrase** fields and other passphrase encryption fields display. 
   
   ![EditEncryptionOptionsWindowPassphrase](/images/SCALE/22.12/EditEncryptionOptionsWindowPassphrase.png "Edit Encryption Window - Passphrase")

   Enter the passphrase twice. Use a complex passphrase that is not easy to guess. Store in a secure location subject to regular backups.

   Leave the other settings at default, then click **Confirm** to activate **Save**.

4. Click **Save**. The window closes, the **ZFS Encryption** widget updates to reflect the changes made.

## Locking and Unlocking Datasets

{{< hint warning >}}
You can only lock and unlock an encrypted dataset if it is secured with a passphrase instead of a key file.
Before locking a dataset, verify that it is not currently in use.
{{< /hint >}}

### Locking a Dataset

Select the dataset on the tree table, then click **Lock** on the **ZFS Encryption** widget to open the **Lock Dataset** dialog with the dataset full path name.

![LockDatasetDialog](/images/SCALE/22.12/LockDatasetDialog.png "Lock Dataset")

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset. 
**Force unmount** boots anyone using the dataset (e.g. someone accessing a share) so you can lock it. 
Click **Confirm** to activate **Lock**, then click **Lock**.

{{< hint info >}}
You *cannot* use locked datasets.
{{< /hint >}}

### Unlocking a Dataset

To unlock a dataset, go to **Datasets** then select the dataset on the tree table. 
Click **Unlock** on the **ZFS Encryption** widget to open the **Unlock Dataset** screen.

![UnlockDatasetsScreen](/images/SCALE/22.12/UnlockDatasetsScreen.png "Dataset Unlock Screen")

Type the passphrase into **Dataset Passphrase** and click **Save**. 

Select **Unlock Child Encrypted Roots** to unlock all locked child datasets if they use the same passphrase.

Select **Force** if the dataset mount path exists but is not empty. When this happens, the unlock operation fails. Using **Force** allows the system to rename the existing directory and file where the dataset should mount. This prevents the mount operation from failing. 
A confirmation dialog displays. 

![UnlockDatasetsContinueDialog](/images/SCALE/22.12/UnlockDatasetsContinueDialog.png "Continue Dataset Unlock Confirmation")

Click **CONTINUE** to confirm you want to unlock the datasets. Click **CLOSE** to exit and keep the datasets locked. 
A second confirmation dialog opens confirming the datasets unlocked. 
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

{{< hint type=warning >}}
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
