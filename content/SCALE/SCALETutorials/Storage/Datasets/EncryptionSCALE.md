---
title: "Storage Encryption"
description: "Provides information on SCALE storage encryption for pools, root datasets, datasets, and Zvols."
weight: 50
aliases: /scale/storage/encryptionscale/
tags:
- scaleencryption
- scaledatasets
- scalepools
- scalezovls
---

{{< toc >}}

TrueNAS SCALE offers ZFS encryption for your sensitive data in pools and datasets or Zvols.

{{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM)

The local TrueNAS system manages keys for data-at-rest.
Users are responsible for storing and securing their keys.
TrueNAS SCALE includes the [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html).

## Pool and Dataset Encryption

{{< include file="/_includes/EncryptionWarning.md" type="page" >}}

TrueNAS automatically generates a root dataset when you create a pool. 
This root dataset inherits the encryption state of the pool based on the **Encryption** option on the **[Pool Manager]({{< relref "PoolManagerScreens.md" >}})** screen when you create the pool. 
Because encryption is inherited from the parent, the data within that pool is encrypted. 
Selecting the **Encryption** option for the pool (root dataset) forces encryption for all datasets and Zvols created within the root dataset. 

As of SCALE 22.12.3, you can no longer create an unencrypted dataset within an encrypted pool or dataset. 
This change does not affect existing datasets, only new datasets created in release 22.12.3 and later. 

Leaving the **Encryption** option on the **Pool Manager** screen cleared creates an unencrypted pool root dataset. 
You can create both unencrypted and encrypted datasets within this pool (root dataset), but if you create an encrypted dataset within an unencrypted root dataset any dataset or Zvol created within that encrypted dataset are automatically encrypted. 
If you have only one pool on your system, do not select the **Encryption** option for this pool.

{{< expand "Can I change dataset encryption?" "v" >}}
You can change the type of encryption of an encrypted dataset (root or child dataset) from key to passphrase, but you cannot change an encrypted dataset to an unencrypted dataset after you save it.

You can create an encrypted dataset on an unencrypted pool. 
When creating a new dataset, changing the inheritance settings presents the option to change the type of encryption or to change from unencrypted to encrypted.
{{< /expand >}}
{{< expand "Can I unencrypt my data?" "v" >}}
Yes, you can move encrypted data to an unencrypted pool or dataset using either rsync or replication. 
You can also move data from an unencrypted pool or dataset to an encrypted dataset using rsync or replication.
{{< /expand >}}

{{< hint type=important >}}
If your system loses power or you reboot the system, the datasets, Zvols, and all data in an encrypted pool automatically lock to protect the data in that encrypted pool. 
{{< /hint >}}

### Encryption Visual Cues

Dataset encryption can be visually confusing in SCALE. 
SCALE uses different lock-type icons to indicate the encryption state of a root, parent, or child dataset in the tree table on the **[Datasets]({{< relref "DatasetsScreensSCALE.md" >}})** screen.
Each icon displays text labels that explain the state of the dataset when you hover the mouse over the icon.

{{< include file="/_includes/EncryptionIconsSCALE.md" type="page" >}}

If a dataset inherits encryption, the locking icons change to a different type and the mouse hover-over label indicates the encryption is **Locked by ancestor** or **Unlocked by ancestor**. 

Each encrypted dataset includes the **ZFS Encryption** widget on the **Datasets** screen when you select the dataset.

The dataset encryption state is unlocked until you lock it using the **Lock** option on the **ZFS Encryption** widget. After locking the dataset, the icon on the tree table changes to the locked version and the **ZFS Encryption** widget displays the **Unlock** option.

### Inherit Encryption

Datasets inherit encryption, which means they keep the encryption settings of the parent dataset whether the parent is the root dataset or a non-root parent dataset with child datasets nested under it.

You can change inherited settings for a dataset when you add the dataset using the **Edit** option on the **ZFS Encryption** widget.

## Implementing Encryption
Before creating a pool with encryption make sure you want to encrypt all datasets and data stored on the pool. 

{{< hint type=warning >}} 
You cannot change a pool from encrypted to non-encrypted. You can only change the dataset encryption type (key or passphrase) for the encrypted pool.
{{< /hint >}}
If your system does not have enough disks to allow you to create a second storage pool, we recommend that you not use encryption at the pool level. 
You can mix encrypted and unencrypted datasets on an unencrypted pool.
{{< hint type=important >}}
All pool-level encryption is key-based encryption. When prompted, download the encryption key and keep it stored in a safe place where you can back up the file.
You cannot use passphrase encryption at the pool level.
{{< /hint >}}
### Adding Encryption to a New Pool
Go to **Storage** and click **Create Pool** on the **Storage Dashboard** screen. You can also click **Add to Pool** on the **Unassigned Disks** widget and select the **Add to New** radio button to open the **Pool Manager** screen.

Enter a name for the pool, then add the disks to the Data VDEV. Select **Encryption** next to **Name**. 
A warning dialog displays.

Read the warning, select **Confirm**, and then click **I UNDERSTAND**.

A second dialog opens where you click **Download Encryption Key** for the pool encryption key. 

{{< trueimage src="/images/SCALE/22.12/DownloadEncryptionKeyForPool.png" alt="Download Encryption Key on Pool Manager" id="1 Download Encryption Key on Pool Manager" >}}

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
This displays the **Encryption** checkbox already preselected. 

{{< trueimage src="/images/SCALE/22.12/AddDatasetEncryptionOptionsInheritCleared.png" alt="Add Dataset Encryption Options Clear Inherit" id="2 Add Dataset Encryption Options Clear Inherit" >}}

Now decide if you want to use the default encryption type key and if you want to let the system generate the encryption key. 
To use key encryption and your own key, clear the **Generate key** checkbox to display the **Key** field. Enter your key in this field.

{{< trueimage src="/images/SCALE/22.12/AddDatasetEncryptionKeyfromNonEncrypted.png" alt="Add Key Encryption" id="3 Add Key Encryption" >}}

To change to passphrase encryption, click the down arrow and select **Passphrase** from the **Encryption Type** dropdown.

{{< trueimage src="/images/SCALE/22.12/AddDatasetEncryptionOptionsPassphrase.png" alt="Add Passphrase Encryption" id="4 Add Passphrase Encryption" >}}

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

   {{< trueimage src="/images/SCALE/22.12/EditEncryptionOptionsInheritedSettings.png" alt="Edit Encryption Window - Inherited" id="5 Edit Encryption Window - Inherited" >}}

2. Change the encryption settings. Key type options are to change the type from **Key** to **Passphrase** or from a generated to a manually-entered encryption key.
   After clearing the **Inherits encryption properties from parent** the default settings display with **Encryption Type** set to **Key** and **Generate Key** pre-selected.
   To manually enter an encryption key, select **Generate Key** to clear the checkmark and display the **Key** field. Enter the new key in this field.

   {{< trueimage src="/images/SCALE/22.12/EditEncryptionOptionsWindowKeyType.png" alt="Edit Encryption Key Type" id="6 Edit Encryption Key Type" >}}

3. (Optional) Change the **Encryption Type** to **Passphrase** using the dropdown list of options. 
   The **Passphrase**  and **Confirm Passphrase** fields and other passphrase encryption fields display. 
   
   {{< trueimage src="/images/SCALE/22.12/EditEncryptionOptionsWindowPassphrase.png" alt="Edit Encryption Window - Passphrase" id="7 Edit Encryption Window - Passphrase" >}}

   Enter the passphrase twice. Use a complex passphrase that is not easy to guess. Store in a secure location subject to regular backups.

   Leave the other settings at default, then click **Confirm** to activate **Save**.

4. Click **Save**. The window closes, the **ZFS Encryption** widget updates to reflect the changes made.

## Locking and Unlocking Datasets

{{< hint type=important >}}
You can only lock and unlock an encrypted dataset if it is secured with a passphrase instead of a key file.
Before locking a dataset, verify that it is not currently in use.
{{< /hint >}}

### Locking a Dataset

Select the dataset on the tree table, then click **Lock** on the **ZFS Encryption** widget to open the **Lock Dataset** dialog with the dataset full path name.

{{< trueimage src="/images/SCALE/22.12/LockDatasetDialog.png" alt="Lock Dataset" id="8 Lock Dataset" >}}

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset. 
**Force unmount** boots anyone using the dataset (e.g. someone accessing a share) so you can lock it. 
Click **Confirm** to activate **Lock**, then click **Lock**.

{{< hint type=note >}}
You *cannot* use locked datasets.
{{< /hint >}}

### Unlocking a Dataset

To unlock a dataset, go to **Datasets** then select the dataset on the tree table. 
Click **Unlock** on the **ZFS Encryption** widget to open the **Unlock Dataset** screen.

{{< trueimage src="/images/SCALE/22.12/UnlockDatasetsScreen.png" alt="Dataset Unlock Screen" id="9 Dataset Unlock Screen" >}}

Type the passphrase into **Dataset Passphrase** and click **Save**. 

Select **Unlock Child Encrypted Roots** to unlock all locked child datasets if they use the same passphrase.

Select **Force** if the dataset mount path exists but is not empty. When this happens, the unlock operation fails. Using **Force** allows the system to rename the existing directory and file where the dataset should mount. This prevents the mount operation from failing. 
A confirmation dialog displays. 

{{< trueimage src="/images/SCALE/22.12/UnlockDatasetsContinueDialog.png" alt="Continue Dataset Unlock Confirmation" id="10 Continue Dataset Unlock Confirmation" >}}

Click **CONTINUE** to confirm you want to unlock the datasets. Click **CLOSE** to exit and keep the datasets locked. 
A second confirmation dialog opens confirming the datasets unlocked. 
Click **CLOSE**. 
TrueNAS displays the dataset with the unlocked icon.

## Encrypting a Zvol

Encryption is for securing sensitive data. 

{{< hint type=note >}}
You can only encrypting a Zvol if you create the Zvol from a dataset with encryption.
{{< /hint >}}

{{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Zvols inherit encryption settings from the parent dataset. 

To encrypt a Zvol, select a dataset configured with encryption and then [create a new Zvol]({{< relref "AddManageZvols.md" >}}).
Next, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Zvol Actions** options list and then click **Encryption Options**. 

{{< trueimage src="/images/SCALE/22.02/EncryptedZvolActionsOptions.png" alt="Zvol Actions Encryption Options" id="11 Zvol Actions Encryption Options" >}}

If you do not see **Encryption Options** on the **Zvol Action**s option list you created the Zvol from an unencrypted dataset. Delete the Zvol and start over.

Click **Encryption Options**. The **Edit Encryption Options** dialog for the Zvol displays with **Inherit encryption properties from parent** selected. 

{{< trueimage src="/images/SCALE/22.02/EditEncryptionDialogForZvol.png" alt="Edit Zvol Encryption" id="12 Edit Zvol Encryption" >}}

If not making changes, click **Confirm**, and then click **Save**. 
The Zvol is encrypted with settings inherited from its parent.

To change inherited encryption properties, clear the **Inherit encryption properties from parent** checkbox. The current encryption settings display. You can change from key to passphrase or change from a system-generated key to one of your choosing. 

{{< trueimage src="/images/SCALE/22.02/EditEncryptionKeyType.png" alt="Zvol Uncheck Inherit Encryption" id="13 Zvol Uncheck Inherit Encryption" >}}

If **Encryption Type** is set to**Key**, type an encryption key into the **Key** field or select **Generate Key**. 
If using **Passphrase**, it should be at least eight characters long. Use a passphrase complex enough to not easily guess. 
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

{{< trueimage src="/images/SCALE/22.02/DownloadEncryptionKeysWarning.png" alt="Download Encryption Keys" id="14 Download Encryption Keys" >}}

To manually back up a root dataset key file, click the <span class="iconify" data-icon="mdi:database-cog"></span> icon to display the **Pool Actions** list of options, and select **Export Dataset Keys**.
The keys download to your system.

To change the key, click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the dataset, and then click **Encryption Options**. 

{{< trueimage src="/images/SCALE/22.02/EditRootDatasetEncryptionOptions.png" alt="Edit Root Dataset Encryption Keys" id="15 Edit Root Dataset Encryption Keys" >}}

See [Changing Dataset-Level Encryption](#changing-dataset-level-encryption) for more information on changing encryption settings. 


A passphrase is a user-defined string at least eight characters long that is required to decrypt the dataset.   

The **pbkdf2iters** is the number of password-based key derivation function 2 ([PBKDF2](https://tools.ietf.org/html/rfc2898#appendix-A.2)) iterations to use for reducing vulnerability to brute-force attacks. Users must enter a number greater than *100000*.

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS SCALE users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/Zvol with a unique key.

{{< include file="/_includes/ReplicatedEncryptedUnlock.md" type="page" >}}

{{< taglist tag="scaleencryption" limit="10"  >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles">}}
