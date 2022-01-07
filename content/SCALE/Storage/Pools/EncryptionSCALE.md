---
title: "Encryption"
weight: 60
---

{{< toc >}}

TrueNAS SCALE offers ZFS encryption for your sensitive data in pools and datasets.

{{< hint danger>}}
Users are responsible for backing up and securing encryption keys and passphrases!
Losing the ability to decrypt data is similar to a catastrophic data loss.
{{< /hint >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM)

The local TrueNAS system manages keys for data-at-rest.
Users are responsible for storing and securing their keys.
The [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is included in TrueNAS SCALE

## Pool Manager Encryption

{{< include file="/_includes/EncryptionWarning.md" type="page" >}}

Encrypting the root dataset of a new storage pool further increases data security.
[Create a new pool]({{< relref "/SCALE/Storage/Pools/_index.md" >}}) and check the **Encryption** box in the **Pool Manager**. 
The SCALE encryption warning dialog box displays.

![EncryptionWarningSCALE](/images/SCALE/EncryptionWarningSCALE.png "SCALE Encryption Warning")

Read the warning, select the **Confirm** checkbox, and click **I UNDERSTAND**.

You can select any of the other encryption ciphers listted but we recommend using the default encryption cipher.

![CiphersSCALE](/images/SCALE/CiphersSCALE.png "Choosing an encryption cipher")

{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

## Encrypting a New Dataset

You can create new datasets within an existing storage pool as either encrypted or non-encryted. 
A mix of encrypted and non-encrypted datasets can exist in a single storage pool.

To encrypt a single dataset, [create a new datasetl]({{< relref "/SCALE/Storage/Pools/datasetsscale.md" >}} and after naming the dataset scroll down to the **Encryption Options** secton of the page.
Encryption options displayed on the **Add Dataset** configuration page change with the selections made.

{{< tabs "Dataset Encryption Options" >}}
{{< tab Inherit Checkbox>}}

Because child datasets inherit settings from the parent dataset, the **Add Dataset** configuration page displays with the inherit checkbox already check-marked and matching the encryption state of the parent dataset.  

**Inherit (encrypted)** displays if the parent dataset is created with **Encryption** check-marked.

![AddDatasetInheritNonEncrypted](/images/SCALE/AddDatasetInheritNonEncrypted.png "Dataset Inherit Non-Encryption")

**Inherit (non-encrypted)** displays if the parent dataset is created with **Encryption** unchecked.

![AddDatasetInheritEncrypted](/images/SCALE/AddDatasetInheritEncrypted.png "Dataset Inherit Encryption")

You can change inherited encrypted/non-encrypted by unchecking the inhert box. 

{{< /tab >}}
{{< tab Encryption Checkbox>}}

Click on the **Inherit (*encryption-state*)** checkbox with the checkmark to turn off the inherited encryption state. 
This displays the **Encryption** checkbox already check-marked. 
You can now change this dataset's encryption settings.

{{< hint info >}}
If you uncheck the **Encryption** checkbox on the **Add Dataset** configuration screen, the **Encryption Options** fields no longer display and the new child dataset is not encrypted. 
{{< /hint >}}

**Encryption Options** fields change based on the **Encryption Type** selected. 
There are two options, **Key** or **Passphrase**. The default setting is **Key**.

![AddDatasetEncryptionSelectedkeyType](/images/SCALE/AddDatasetEncryptionSelectedkeyType.png "Dataset Encryption Checkbox")

The **Generate Key** checkbox defaults to check-marked. 
If you uncheck it, the **Key*** text field displays below it. 
Type the encryption key you want to use into this field.

![AddDatasetEncryptionGenerateKeyDeselected](/images/SCALE/AddDatasetEncryptionGenerateKeyDeselected.png "Dataset Encryption Generate Key Checkbox") 

You can change the **Encryption Type** to **Passphrase** and this displays new **Encryption Options** fields.

![AddDatasetEncryptionSelectedPassphraseType](/images/SCALE/AddDatasetEncryptionSelectedPassphraseType.png "Dataset Encryption Checkbox")

Using the passphrase option might be easier to manage, but Make the phrase complex enough to not easily guess.

{{< hint danger>}}
Keep both encryption keys and/or passphrases safeguarded and stored in such a way they won't get lost. 
Losing encryption keys or passphrases can result in permanent data loss!
{{< /hint >}}

{{< /tab >}}
{{< /tabs >}}

After configuring the encryption options for the new dataset, you can change or leave the remaining options the same as the parent dataset.
Click **Save**. 
The new dataset displays on the **Storage** screen below its parent dataset. 
If you encrtyped a dataset, an unlocked icon displays to the right of that dataset and a locked icon displays to the right of the root dataset name.
It remains unlocked until you lock it.

![StorageDatasetList](/images/SCALE/StorageDatasetList.png "Storage Screen Dataset List")

### Changing Dataset Encryption

You can change dataset encryption settings using **Encryption Options** on the **Dataset Action** drop-down menu. 
This menu option only displays for datasets with encryption configured. 
The **Edit Encryption Options *datasetfullpath*** configuration window displays. 
The window name includes the full path of the encrypted dataset you selected; the root or parent dataset, the child dataset 
which in this exmple does not have encrytpion configured, and then finally the selected child-of-the-child dataset with encryption configured (i.e., *tank/tank-child/tank-child-encrypt*).

![EditEncryptionOptionsWindow](/images/SCALE/EditEncryptionOptionsWindow.png "Edit Encryption Options")

You can change the **Encryption Type** from **Key** to **Passphrase**, change the passphrase used to lock/unlock the dataset, or change the **pbkdf2iters**. 
After making any changes, click the **Confirm** checkbox and then click **Save** to make the changes. 
Remember to save any change to the encryption key or passphrase, update your saved passcodes file and back it up. 

### Locking and Unlocking Datasets

TrueNAS displays a dataset's status with an icon:

* Dataset unlocked icon: <span class="iconify" data-icon="mdi:lock-open-variant"></span>
* Dataset locked icon: <mat-icon _ngcontent-dog-c483="" role="img" svgicon="anti-lock" class="mat-icon notranslate mat-tooltip-trigger mat-icon-no-color ng-star-inserted" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="anti-lock">

You use a passphrase instead of a key to lock or unlock encrypted datasets.
Before locking a dataset, verify that it is not currently in use, then click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for the dataset to display the **Dataset Actions** menu and click on **Lock**. The **Lock Dataset *datasetname*** dialog box displays.

![LockDatasetSCALE](/images/SCALE/LockDatasetSCALE.png "Dataset Locking Options")

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset. 
Click on the **Confirm** checkbox to check-mark it and click **LOCK**.
After locking a dataset, the unlock icon changes to a locked icon.

{{< hint info >}}

You *cannot* use locked datasets.

{{< /hint >}}

To unlock a dataset, click on the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon and display the **Dataset Actions** menu and then click on **Unlock**.

![UnlockDatasetSCALE](/images/SCALE/UnlockDatasetSCALE.png "Dataset Unlock Options")

Type the passphrase into the **Dataset Passphrase** field and click **Save**. 
If there are locked child datasets that use the same passphrase, you can unlock them all at the same time by selecting the **Unlock Children** checkbox.
A confirmation window displays. 

![UnlockSuccessSCALE](/images/SCALE/UnlockSuccessSCALE.png "Dataset Unlock Success")

Click **CONTINUE** to confirm you want to unlock the datasets or **CANCEL** to exit and keep the datasets locked. 
A second confirmation window displays confirming the datasets are unlocked. 
Click **CLOSE**. 
TrueNAS displays the dataset with the unlocked icon.

## Encryption Management

There are two ways to manage the encryption credentials, with a key file or passphrase.

{{< tabs "Encryption Credentials" >}}
{{< tab "Key Files" >}}
#### Key Files

Creating a new encrypted pool automatically generates a new key file and prompts users to download it.

{{< hint danger>}}
*Always back up the key file to a safe and secure location.*
{{< /hint >}}

![DownloadEncryptionKeySCALE](/images/SCALE/DownloadEncryptionKeySCALE.png "Encryption Backup Warning")

To manually back up a root dataset key file, open the pool <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and select **Export Key**. Next type the root user password to authorize the export.

![ExportKeySCALE](/images/SCALE/ExportKeySCALE.png "Export a Key")

To change the key, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and **Encryption Options**.

![EncryptionOptionsButtonSCALE](/images/SCALE/EncryptionOptionsButtonSCALE.png "Encryption Options")

TTo type your custom key click the **Generate Key** checkbox to uncheck it and display the **Key** text entry field, or to generate a random encryption key that displays in the **Key** field leave the **Generate Key** checkmarked. 
Click **Save** to complete the process and close the window.

![EncryptionOptionsSCALE](/images/SCALE/EncryptionOptionsSCALE.png "Encryption Options Menu")
{{< /tab >}}
{{< tab "Passphrases" >}}
#### Passphrases

To use a passphrase instead of a key file, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Encryption Options**.
Change the **Encryption Type** from **Key** to **Passphrase**.

![EncryptionPassphraseSCALE](/images/SCALE/EncryptionPassphraseSCALE.png "Encryption Passphrase Options")

Set the rest of the options:
* **Passphrase**: Type a user-defined string of at least eight characthers in length into the **Passphrase** and  **Confirm Passphrase** fields. This passphrase decrypts the dataset. Passphrases must be longer than eight characters.
  {{< hint warning >}}
  The passphrase is the only means to decrypt the information stored in this dataset. 
  Be sure to create a memorable passphrase or physically secure the passphrase.
  {{< /hint >}}
* **pbkdf2iters**: Number of password-based key derivation function 2 ([PBKDF2](https://tools.ietf.org/html/rfc2898#appendix-A.2)) iterations to use for reducing vulnerability to brute-force attacks. Users must enter a number greater than *100000*.

{{< /tab >}}
{{< /tabs >}}

## Unlocking a Replicated Encrypted Dataset or Zvol Without a Passphrase

TrueNAS SCALE users should either replicate the dataset/Zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/zvol with a unique key.

{{< include file="/_includes/ReplicatedEncryptedUnlock.md" type="page" >}}
