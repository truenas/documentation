---
title: "Encryption"
weight: 60
---

{{< toc >}}

TrueNAS SCALE offers ZFS encryption for your sensitive data in pools and datasets or zvols.

{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM)

The local TrueNAS system manages keys for data-at-rest.
Users are responsible for storing and securing their keys.
TrueNAS SCALE includes the [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html).

## Pool Manager Encryption

{{< include file="/_includes/EncryptionWarning.md" type="page" >}}

Encrypting the root dataset of a new storage pool further increases data security. [Create a new pool]({{< relref "/SCALE/Storage/Pools/_index.md" >}}) and check the **Encryption** box on the **Pool Manager** screen. 
The SCALE encryption warning dialog box displays.

![EncryptionWarningSCALE](/images/SCALE/EncryptionWarningSCALE.png "SCALE Encryption Warning")

Read the warning, select the **Confirm** checkbox, and click **I UNDERSTAND**.

You can select any of the encryption ciphers listed but we recommend using the default encryption cipher.

![CiphersSCALE](/images/SCALE/CiphersSCALE.png "Choosing an encryption cipher")

{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

## Encrypting a New Dataset

You can create new datasets within an existing storage pool as either encrypted or non-encrpted. 
A mix of encrypted and non-encrypted datasets can exist in a single storage pool.
 
To encrypt a dataset, [create a new dataset]({{< relref "/SCALE/Storage/Pools/datasetsscale.md" >}}) and after typing a name scroll down to the **Encryption Options** section.
Encryption options on the **Add Dataset** configuration page change with the selections made.

{{< tabs "Dataset Encryption Options" >}}
{{< tab "Inherit Checkbox" >}}

Child datasets inherit settings from the parent dataset.
The **Add Dataset** configuration screen displays with the inherit checkbox already check-marked. 
The child dataset encryption settings match the parent encryption settings.

**Inherit (encrypted)** displays if the parent dataset is created with **Encryption** check-marked.

![AddDatasetInheritNonEncrypted](/images/SCALE/AddDatasetInheritNonEncrypted.png "Dataset Inherit Non-Encryption")

**Inherit (non-encrypted)** displays if the parent dataset is created with **Encryption** unchecked.

![AddDatasetInheritEncrypted](/images/SCALE/AddDatasetInheritEncrypted.png "Dataset Inherit Encryption")

You can change inherited encrypted/non-encrypted by unchecking the inherit box. 

{{< /tab >}}
{{< tab "Encryption Checkbox" >}}

Click on the **Inherit (*encryption-state*)** checkbox with the checkmark to turn off the inherited encryption state. 
This displays the **Encryption** checkbox already check-marked. 
You can now change this dataset's encryption settings.

{{< hint info >}}
If you uncheck the **Encryption** checkbox on the **Add Dataset** configuration screen, the **Encryption Options** fields no longer display and the new child dataset is not encrypted. 
{{< /hint >}}

**Encryption Options** fields change based on the **Encryption Type** selected. 
There are two options, **Key** or **Passphrase**. The default setting is **Key**.

![AddDatasetEncryptionSelectedkeyType](/images/SCALE/AddDatasetEncryptionSelectedkeyType.png "Dataset Encryption Type Key")

The **Generate Key** checkbox defaults to check-marked. 
If you uncheck it, the **Key*** text field displays below it. 
Type the encryption key you want to use into this field.

![AddDatasetEncryptionGenerateKeyDeselected](/images/SCALE/AddDatasetEncryptionGenerateKeyDeselected.png "Dataset Encryption Generate Key Checkbox") 

If you change the **Encryption Type**  to  **Passphrase** new **Encryption Options** fields display.

![AddDatasetEncryptionSelectedPassphraseType](/images/SCALE/AddDatasetEncryptionSelectedPassphraseType.png "Dataset Encryption Type Passphrase")

Using the passphrase option might be easier to manage but choose a complex phrase not easy to guess.

{{< hint danger>}}
Keep both encryption keys and/or passphrases safeguarded in a secure and protected place. 
Losing encryption keys or passphrases can result in permanent data loss!
{{< /hint >}}

{{< /tab >}}
{{< /tabs >}}

After configuring the new dataset encryption settings, you can change any or leave the remaining settings the same as the parent dataset.
Click **Save**. 
The new dataset displays on the **Storage** screen below its parent dataset. 
If you encrypt a dataset, an unlocked icon displays to the right of its name and a locked icon displays to the right of the root dataset name.
It remains unlocked until you lock it.

![StorageDatasetList](/images/SCALE/StorageDatasetList.png "Storage Screen Dataset List")

### Changing Dataset Encryption

You can change dataset encryption settings using **Encryption Options** on the **Dataset Action** menu. 
The encryption options only display for datasets with encryption configured. 
The **Edit Encryption Options *datasetfullpath*** configuration window displays. 
The window name includes the selected dataset's full path name. 
In this example it has the root or parent dataset, the child dataset without encryption, and the selected child-of-the-child dataset with encryption configured (i.e., *tank/tank-child/tank-child-encrypt*).

![EditEncryptionOptionsWindow](/images/SCALE/EditEncryptionOptionsWindow.png "Edit Encryption Options")

After making any changes, click the **Confirm** checkbox to check-mark it and then click **Save**. 

{{< hint danger >}}
Save any change to the encryption key or passphrase, update your saved passcodes and keys file, and back it up. 
{{< /hint >}} 

### Locking and Unlocking Datasets

TrueNAS displays a dataset's status with an icon:

* Dataset unlocked icon: <span class="iconify" data-icon="mdi:lock-open-variant"></span>
* Dataset locked icon: <i class="material-icons" aria-hidden="true" title="<locked>">lock</i>

You use a passphrase instead of a key to lock or unlock encrypted datasets.
Before locking a dataset, verify that it is not currently in use. Click the  dataset's <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Lock**. The **Lock Dataset *datasetname*** dialog box displays.

![LockDatasetSCALE](/images/SCALE/LockDatasetSCALE.png "Dataset Locking Options")

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset.
Click the **Confirm** checkbox to check-mark it and click **LOCK**.
After locking a dataset, the unlock icon changes to a locked icon.

{{< hint info >}}
You *cannot* use locked datasets.
{{< /hint >}}

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
Encrypting a zvol is an option only if you create the zvol from a dataset with encryption.
{{< /hint >}}

{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Zvols, like datasets, inherit encryption settings from its parent dataset. 
To encrypt a zvol, [create a new zvol]({{< relref "/SCALE/Storage/Pools/zvolsscale.md" >}}) from a dataset with encrytion configured.
To configure zvol encryption, select the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Zvol Actions** menu. 
If the zvol's parent dataset has encryption, the menu includes the **Encryption Actions** option.
 
![AddZvolActionsMenuWithEncryptionOptions](/images/SCALE/AddZvolActionsMenuWithEncryptionOptions.png "Zvol Actions with Encryption Options")

If created from a dataset without encryption these options do not display.

![AddZvolActionsMenuNoEncryptionOptions](/images/SCALE/AddZvolActionsMenuNoEncryptionOptions.png "Zvol Actions without Encryption Options")
 
Click **Encryption Options** on the **Zvol Actions** menu. 
The **Edit Encryption Options *fullpath name*** configuration window displays with the **Inherit encryption properties from parent** checkbox check-marked. 
The window name includes the full path of the selected encrypted dataset. 
In the example used the full path has the root or parent dataset, the encrypted child dataset, and finally the zvol name (i.e., *tank/tank-child-encrypt/zvol-tank-child-encrypt*).

![EditZvolInheritEncryptionProperties](/images/SCALE/EditZvolInheritEncryptionProperties.png "Zvol Inherit Encryption")

If making no changes, click the **Confirm** checkbox to activate the **Save** button, and then click **Save**.

To change inherited encryption properties, click the inherit checkbox to uncheck it. 

![EditZvolUncheckInheritEncryption](/images/SCALE/EditZvolUncheckInheritEncryption.png "Zvol Uncheck Inherit Encryption")

The **Edit Encryption Options** window displays fields matching the encryption settings of the parent dataset (**Key** or **Passphrase**). If **Encryption Type** is set to **Passphrase**, type a passphrase into both the **Passphrase** and **Confirm Passphrase** fields. 
After making any changes, click the **Confirm** checkbox to check-mark it and activate the **Save** button, and then click **Save**. 

{{< hint danger >}}
Save any change to the encryption key or passphrase, update your saved passcodes and keys file, and back it up. 
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

To manually back up a root dataset key file, open the pool <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and select **Export Key**. Next type the root user password to authorize the export.

![ExportKeySCALE](/images/SCALE/ExportKeySCALE.png "Export a Key")

To change the key, click the dataset's <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon and then click on **Encryption Options**.

![EncryptionOptionsButtonSCALE](/images/SCALE/EncryptionOptionsButtonSCALE.png "Encryption Options")

To enter your custom key click the **Generate Key** checkbox to uncheck it and display the **Key** text entry field. Leave the **Generate Key** checkmarked to generate a random encryption key that displays in the **Key** field. 
Click **Save** to complete the process and close the window.

![EncryptionOptionsSCALE](/images/SCALE/EncryptionOptionsSCALE.png "Encryption Options Menu")
{{< /tab >}}
{{< tab "Passphrases" >}}

To use a passphrase instead of a key file, click the dataset's <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Encryption Options**.
Change the **Encryption Type** from **Key** to **Passphrase**.

![EncryptionPassphraseSCALE](/images/SCALE/EncryptionPassphraseSCALE.png "Encryption Passphrase Options")

Set the rest of the options:
* **Passphrase**: A user-defined string that is at least eight characters in length is required to decrypt the dataset. Type it into the **Passphrase** and  **Confirm Passphrase** fields.  
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
