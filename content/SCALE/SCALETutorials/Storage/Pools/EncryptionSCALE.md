---
title: "Storage Encryption"
description: "This article provides information on SCALE storage encryption for pools, datasets and zvols."
weight: 70
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

Encrypting the root dataset of a new storage pool further increases data security. [Create a new pool]({{< relref "CreatePoolScale.md" >}}) and check the **Encryption** box on the **Pool Manager** screen. 
The SCALE encryption warning dialog box displays.

![PoolEncryptionWarningSCALE](/images/SCALE/PoolEncryptionWarningSCALE.png "SCALE Pool Encryption Warning")

Read the warning, select **Confirm**, and then click **I UNDERSTAND**.

You can select any of the encryption ciphers listed but we recommend using the default encryption cipher.

![CiphersSCALE](/images/SCALE/CiphersSCALE.png "Choosing an encryption cipher")

{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

## Encrypting a New Dataset

You can create new datasets within an existing storage pool as either encrypted or non-encrypted. 
A mix of encrypted and non-encrypted datasets can exist in a single storage pool.
 
To encrypt a dataset, [create a new dataset]({{< relref "DatasetsSCALE.md" >}}) and after typing a name scroll down to **Encryption Options**.
The **Add Dataset** configuration screen encryption fields change based on the **Encryption Type** selected.

{{< tabs "Dataset Encryption Options" >}}
{{< tab "Inherit Checkbox" >}}

Because child datasets inherit settings from the parent dataset, the **Add Dataset** configuration screen displays with the inherit checkbox already check-marked. 
This means the inherit checkbox text for the child configuration screen changes based on the parent encryption setting.

**Inherit (encrypted)** displays for an encrypted parent dataset.

![AddDatasetInheritNonEncrypted](/images/SCALE/AddDatasetInheritNonEncrypted.png "Dataset Inherit Non-Encryption")

**Inherit (non-encrypted)** displays for a parent dataset not encrypted.

![AddDatasetInheritEncrypted](/images/SCALE/AddDatasetInheritEncrypted.png "Dataset Inherit Encryption")

You can change the inherited encrypted/non-encrypted state by unchecking the inherit box. This displays the **Encryption** checkbox already check-marked.

{{< /tab >}}
{{< tab "Encryption Checkbox" >}}

Click the **Inherit (encrypted)** or **Inherited (non-encrypted)** checkbox with the checkmark to turn off inherited encryption settings. 
The **Encryption** checkbox displays already check-marked. 
You can now change this dataset's encryption settings.

{{< hint info >}}
If you uncheck the **Encryption** checkbox on the **Add Dataset** configuration screen, the encryption fields no longer display and the new child dataset is not encrypted. 
{{< /hint >}}

**Encryption Options** fields change based on the **Encryption Type** selected. 
There are two options, **Key** or **Passphrase**. The default setting is **Key**.

![AddDatasetEncryptionSelectedkeyType](/images/SCALE/AddDatasetEncryptionSelectedkeyType.png "Dataset Encryption Type Key")

The **Generate Key** checkbox defaults to check-marked. 
If you uncheck it, the **Key*** text field displays below it. 
Type the encryption key you want to use into this field.

![AddDatasetEncryptionGenerateKeyDeselected](/images/SCALE/AddDatasetEncryptionGenerateKeyDeselected.png "Dataset Encryption Generate Key Checkbox") 

If you change the **Encryption Type** to **Passphrase** new passphrase fields display.

![AddDatasetEncryptionSelectedPassphraseType](/images/SCALE/AddDatasetEncryptionSelectedPassphraseType.png "Dataset Encryption Type Passphrase")

If using the passphrase option choose a complex phrase not easy to guess.

{{< hint danger>}}
Keep both encryption keys and/or passphrases safeguarded in a secure and protected place. 
Losing encryption keys or passphrases can result in permanent data loss!
{{< /hint >}}

{{< /tab >}}
{{< /tabs >}}

After configuring the new dataset encryption settings and any other settings, click **Save**. 
The new dataset displays on the **Storage** screen below its parent dataset. 
If you encrypt a dataset, an unlocked icon displays to the right of its name and a locked icon displays to the right of the root dataset name.
A child dataset remain unlocked until you lock it.

![StorageDatasetList](/images/SCALE/StorageDatasetList.png "Storage Screen Dataset List")

### Changing Dataset Encryption

Click on **Encryption Options** on the **Dataset Action** menu to change dataset encryption settings.
This option only displays on the menu for datasets with encryption configured. 
The **Edit Encryption Options** configuration window displays and window name includes the dataset full path name. 
In the example used it includes the root dataset *tank*, the child dataset without encryption *tank-child*, and finally the selected child-of-the-child dataset with encryption *tank-child-encrypt* (i.e., *tank/tank-child/tank-child-encrypt*).

![EditEncryptionOptionsWindow](/images/SCALE/EditEncryptionOptionsWindow.png "Edit Encryption Options")

Click the **Confirm** checkbox to check-mark it and then click **Save** after making any changes. 

{{< hint danger >}}
Save any change to the encryption key or passphrase, and update your saved passcodes and keys file, and then back up that file. 
{{< /hint >}} 

### Locking and Unlocking Datasets

TrueNAS displays a dataset status with icons:

* Dataset unlocked icon: <span class="iconify" data-icon="mdi:lock-open-variant"></span>
* Dataset locked icon: <i class="material-icons" aria-hidden="true" title="<locked>">lock</i>

{{< hint info>}}
The locked icon displayed beside the root dataset after adding a dataset with encryption and also beside a dataset where the pool encryption properties don't match the root dataset is: ![UnecryptedPoolEncryptionDatasetIcon](/images/CORE/12.0/unecrypted_pool_encrypted_dataset.png "Unencrypted Storage Pool with an Unencrypted Dataset")
{{< /hint >}}

{{< hint warning >}}
You can only lock and unlock an encrypted dataset when it is secured with a passphrase instead of a key file.
Before locking a dataset, verify that it is not currently in use.
{{< /hint >}}

#### Locking a Dataset

Click the  dataset's <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Lock**. The **Lock Dataset** dialog box displays and includes the dataset full path name.

![LockDatasetSCALE](/images/SCALE/LockDatasetSCALE.png "Dataset Locking Options")

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset.
Click the **Confirm** checkbox to check-mark it and activate the **LOCK** button, and then click **LOCK**.
A confirmation window diplays indicating the dataset is locked and the unlock icon changes to a locked icon.

{{< hint info >}}
You *cannot* use locked datasets.
{{< /hint >}}

#### Unlocking a Dataset

To unlock a dataset, click on the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Unlock**.

![UnlockDatasetSCALE](/images/SCALE/UnlockDatasetSCALE.png "Dataset Unlock Options")

Type the passphrase into the **Dataset Passphrase** field and click **Save**. 
You can unlock all locked child datasets using the same passphrase at the same time by check-marking the **Unlock Children** checkbox.
A confirmation window displays. 

![UnlockSuccessSCALE](/images/SCALE/UnlockSuccessSCALE.png "Dataset Unlock Success")

Click **CONTINUE** to confirm you want to unlock the datasets or **CANCEL** to exit and keep the datasets locked. 
A second confirmation window displays confirming the datasets are unlocked. 
Click **CLOSE**. 
TrueNAS displays the dataset with the unlocked icon.

## Encrypting a Zvol

Encryption is for securing sensitive data. 

{{< hint info >}}
You can only encrypting a zvol if you create the zvol from a dataset with encryption.
{{< /hint >}}

{{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Zvols, like datasets, inherit encryption settings from the parent dataset. 
To encrypt a zvol, select a dataset configured with encryption and then [create a new zvol]({{< relref "AddManageZvols.md" >}}).
Next, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Zvol Actions** menu.  
 
![AddZvolActionsMenuWithEncryptionOptions](/images/SCALE/AddZvolActionsMenuWithEncryptionOptions.png "Zvol Actions with Encryption Options")

If you do not see encryption options on the menu you created the zvol from a dataset not configured with encryption. You can deleted the zvol and start over.

Click **Encryption Options**. The **Edit Encryption Options** configuration window displays with the **Inherit encryption properties from parent** checkbox already check-marked. 

![EditZvolInheritEncryptionProperties](/images/SCALE/EditZvolInheritEncryptionProperties.png "Zvol Inherit Encryption")

Like datasets, the window name includes the full path for the zvol. 
In this example. the root dataset *tank*, the encrypted child dataset *tank-child-encrypt*, and finally the zvol name *zvol-tank-child-encrypt* (i.e., *tank/tank-child-encrypt/zvol-tank-child-encrypt*).

If not making changes, click the **Confirm** checkbox to activate the **Save** button, and then click **Save**. 
The zvol is encrypted with settings inherited from its parent.

To change inherited encryption properties, click on the inherit checkbox to uncheck it. 
Additional configuration option fields display.

![EditZvolUncheckInheritEncryption](/images/SCALE/EditZvolUncheckInheritEncryption.png "Zvol Uncheck Inherit Encryption")

If **Encryption Type** is set to**Key**, type an encryption key into the **Key** field or check-mark the **Generate Key** checkbox. 
If set to **Passphrase**, type a passphrase at least eight characters long into both the **Passphrase** and **Confirm Passphrase** fields. 
After making any changes, click the **Confirm** checkbox to check-mark it and activate the **Save** button, and then click **Save**. 
The zvol is now encrypted with settings not inherited from its parent.

{{< hint danger >}}
Save any change to the encryption key or passphrase, update your saved passcodes and keys file, and back up the file. 
{{< /hint >}}

## Managing Encryption Credentials

There are two ways to manage the encryption credentials, with a key file or passphrase.

{{< tabs "Encryption Credentials" >}}
{{< tab "Key Files" >}}

Creating a new encrypted pool automatically generates a new key file and prompts users to download it.

{{< hint danger>}}
*Always back up the key file to a safe and secure location.*
{{< /hint >}}

![DownloadEncryptionKeySCALE](/images/SCALE/DownloadEncryptionKeySCALE.png "Encryption Backup Warning")

To manually back up a root dataset key file, open the pool <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and select **Export Key**.

![ExportKeySCALE](/images/SCALE/ExportKeySCALE.png "Export a Key")

To change the key, click the dataset's <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon and then click on **Encryption Options**.

![EncryptionOptionsButtonSCALE](/images/SCALE/EncryptionOptionsButtonSCALE.png "Encryption Options")

To enter your custom key click the **Generate Key** checkbox to uncheck it and display the **Key** text entry field. Leave the **Generate Key** check-marked to generate a random encryption key that displays in the **Key** field. 
Click **Save** to complete the process and close the window.

![EncryptionOptionsSCALE](/images/SCALE/EncryptionOptionsSCALE.png "Encryption Options Menu")
{{< /tab >}}
{{< tab "Passphrases" >}}

To use a passphrase instead of a key file, click the dataset's <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Encryption Options**.
Change the **Encryption Type** from **Key** to **Passphrase**.

![EncryptionPassphraseSCALE](/images/SCALE/EncryptionPassphraseSCALE.png "Encryption Passphrase Options")

Set the rest of the options:
* **Passphrase**: A user-defined string at least eight characters long that is required to decrypt the dataset. Type it into the **Passphrase** and  **Confirm Passphrase** fields.  
  {{< hint warning >}}
  The passphrase is the only means to decrypt the information stored in this dataset.
  Be sure to create a memorable passphrase or physically secure the passphrase.
  {{< /hint >}}
* **pbkdf2iters**: The number of password-based key derivation function 2 ([PBKDF2](https://tools.ietf.org/html/rfc2898#appendix-A.2)) iterations to use for reducing vulnerability to brute-force attacks. Users must enter a number greater than *100000*.

{{< /tab >}}
{{< /tabs >}}

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS SCALE users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/zvol with a unique key.

{{< include file="/_includes/ReplicatedEncryptedUnlock.md" type="page" >}}
