---
title: "Storage Encryption"
weight: 25
---

{{< toc >}}

TrueNAS supports different encryption options for critical data.

{{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Data-at-rest encryption is available with:

+ [Self Encrypting Drives (SEDs)](https://www.snia.org/sites/default/education/tutorials/2009/fall/security/MichaelWillett-Self_Encrypting_Drives-FINAL.pdf) using OPAL or FIPS 140.2 (Both [AES 256](https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines/archived-crypto-projects/aes-development))
+ Encryption of specific datasets (AES-256-GCM in TrueNAS 12.0)

The local TrueNAS system manages keys for data-at-rest.
The user is responsible for storing and securing their keys.
TrueNAS 12.0 and newer includes the [Key Management Interface Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html).

{{< expand "Encryption Drawbacks and Considerations" "v" >}}
Always consider the following drawbacks/considerations when encrypting data:
* Losing encryption keys and passwords means losing your data.
* Unrelated encrypted datasets [do not support deduplication](https://github.com/openzfs/zfs/discussions/9423).
* Using GELI or ZFS encryption with deduplication is not recommended because of the sizable performance impact. 
* Using many encryption and deduplication features at once requires caution since all compete for the same CPU cycles.
{{< /expand >}}

## Encrypting a Storage Pool

{{< include file="/_includes/EncryptionWarning.md" type="page" >}}

Encrypting the root dataset of a new storage pool further increases data security.
[Create a new pool]({{< relref "PoolCreate.md#creating-a-pool" >}}) and check the **Encryption** checkbox on the **Pool Manager** screen.
TrueNAS encryption warning dialog box displays.

![StoragePoolsAddEncryptionWarning](/images/CORE/12.0-U8/StoragePoolsAddEncryptionWarning.png "Storage Pools Add Encryption Warning")

Read the warning, click the **Confirm** checkbox, and click **I UNDERSTAND**.

We recommend using the default encryption cipher, but other ciphers are available.

![StoragePoolsAddCreateEncryptionCipher](/images/CORE/12.0/StoragePoolsAddCreateEncryptionCiphers.png "Choosing an encryption cipher")

{{< expand "What are these options?" "v" >}}
TrueNAS supports AES [Galois Counter Mode (GCM)](https://csrc.nist.gov/publications/detail/sp/800-38d/final) and [Counter with CBC-MAC (CCM)](https://tools.ietf.org/html/rfc3610) algorithms for encryption.
These algorithms provide authenticated encryption with block ciphers.
{{< /expand >}}

## Encrypting a New Dataset

You can create new datasets within an existing storage pool as either encrypted or non-encrpted. 
A mix of encrypted and non-encrypted datasets can exist in a single storage pool.

To encrypt a dataset, [create a new dataset]({{< relref "/CORE/Storage/Pools/Datasets.md" >}}) and after typing a name scroll down to the **Encryption Options** section.
The **Add Dataset** configuration screen encryption fields change based on the **Encryption Type**.

{{< tabs "Dataset Encryption Options" >}}
{{< tab "Inherit Checkbox" >}}

Because child datasets inherit settings from the parent dataset, the **Add Dataset** configuration screen displays with the inherit checkbox already check-marked. 
This means the inherit checkbox text for the child configuration screen changes based on the parent encryption setting.

**Inherit (encrypted)** displays for an encrypted parent dataset.

![AddDatasetInheritNonEncrypted](/images/CORE/12.0/AddDatasetInheritNonEncrypted.png "Dataset Inherit Non-Encryption")

**Inherit (non-encrypted)** displays for a parent dataset not encrypted.

You can change the inherited encrypted/non-encrypted state by unchecking the inherit box. 
This displays the **Encryption** checkbox already check-marked.

{{< /tab >}}
{{< tab "Encryption Checkbox" >}}

Click the **Inherit (encrypted)** or **Inherited (non-encrypted)** checkbox with the checkmark to turn off inherited encryption settings. 
The **Encryption** checkbox displays already check-marked. 
You can now change this dataset's encryption settings.

![StoragePoolsCreateDatasetEncryptionOptions](/images/CORE/12.0/StoragePoolsCreateDatasetEncryptionOptions.png "Dataset Encryption Options")

{{< hint info >}}
If you uncheck the **Encryption** checkbox on the **Add Dataset** configuration screen, the encryption fields no longer display and the new child dataset is not encrypted. 
{{< /hint >}}

**Encryption Options** fields change based on the **Encryption Type** selected. 
There are two options, **Key** or **Passphrase**. The default setting is **Key**.

![AddDatasetEncryptionSelectedkeyType](/images/CORE/12.0/AddDatasetEncryptionSelectedkeyType.png "Dataset Encryption Type Key")

The **Generate Key** checkbox defaults to check-marked. 
If you uncheck it, the **Key*** text field displays below it. 
Type the encryption key you want to use into this field.

![AddDatasetEncryptionGenerateKeyDeselected](/images/CORE/12.0/AddDatasetEncryptionGenerateKeyDeselected.png "Dataset Encryption Generate Key Checkbox") 

If you change the **Encryption Type**  to  **Passphrase** new **Encryption Options** fields display.

![AddDatasetEncryptionSelectedPassphraseType](/images/CORE/12.0/AddDatasetEncryptionSelectedPassphraseType.png "Dataset Encryption Type Passphrase")

If using the passphrase option choose a complex phrase not easy to guess.

{{< hint danger>}}
Keep both encryption keys and/or passphrases safeguarded in a secure and protected place. 
Losing encryption keys or passphrases can result in permanent data loss!
{{< /hint >}}

{{< /tab >}}
{{< /tabs >}}

After configuring the new dataset encryption settings and any other settings, click **SAVE**. 
The new dataset displays on the **Storage > Pools** screen below its parent dataset. 
If you encrypt a dataset, an unlocked icon displays to the right of its name and a locked icon displays to the right of the root dataset name.
It remains unlocked until you lock it.

![StorageDatasetList](/images/CORE/12.0/StorageDatasetList.png "Storage Screen Dataset List")

### Changing Dataset Encryption

Click on **Encryption Options** on the **Dataset Action** menu to change dataset encryption settings. 
This option only displays on the menu for datasets with encryption configured. 
The **Edit Encryption Options** configuration window displays and window name includes the dataset full path name. 
In the example used it includes the root dataset *tank*, the child dataset without encryption *child1*, and finally the selected child-of-the-child dataset with encryption *child2-encrypt* (i.e., *tank/child1/child2-encrypt*).

![EditEncryptionOptionsWindow](/images/CORE/12.0/EditEncryptionOptionsWindow.png "Edit Encryption Options")

Click the **Confirm** checkbox to check-mark it and then click **SAVE** after making any changes. 

{{< hint danger >}}
Save any change to the encryption key or passphrase, update your saved passcodes and keys file, and back it up. 
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

Click the  dataset's <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Lock**. 
The **Lock Dataset** dialog box displays and includes the dataset full path name.

![EncryptedDatasetLockOptions](/images/CORE/12.0/EncryptedDatasetLockOptions.png "Encrytped Dataset Locking Options")

Use the **Force unmount** option only if you are certain no one is currently accessing the dataset.
Click the **Confirm** checkbox to check-mark it and click **LOCK**, and then click **LOCK**.
A confirmation window diplays indicating the dataset is locked and the unlock icon changes to a locked icon.

{{< hint info >}}
You *cannot* use locked datasets.
{{< /hint >}}

#### Unlocking a Dataset

To unlock a dataset, click on the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Dataset Actions** menu and then click on **Unlock**.

![StoragePoolsDatasetUnlockOptions](/images/CORE/12.0/StoragePoolsDatasetUnlockOptions.png "Dataset Unlock Options")

Type the passphrase and click **SUBMIT**. 
To unlock child datasets, set the **Unlock Children** checkbox. 
Child datasets that inherited the parent dataset's encryption settings unlock when the parent unlocks. 
Users can unlock child datasets with different passphrases as the parent simultaneously by entering their passphrases.

Two confirmation windows display. 
Click **CONTINUE** to confirm you want to unlock the datasets or **CANCEL** to exit and keep the datasets locked. 
A second confirmation window displays confirming the datasets are unlocked. 
Click **CONTINUE** to close the second confirmation window. 

![StoragePoolsDatasetUnlockSuccess](/images/CORE/12.0/StoragePoolsDatasetUnlockSuccess.png "Dataset Unlock Success")

TrueNAS displays the dataset with the unlocked icon.

**Unlocking Mutliple Datasets Example:**

![StoragePoolsDatasetUnlockexample1](/images/CORE/12.0/EncrytionExample1.png "Encrypted locked Datasets")

The parent dataset is **media**.
It has three child datasets.
The **documents** child dataset inherits the parent encryption settings and its password.
The other two child datasets (**audio** and **video**) have their own passphrases.
After locking the parent dataset all child datasets lock too.

![StoragePoolsDatasetUnlockexample2](/images/CORE/12.0/EncrytionExample2.png "Password for locked Datasets")

Open the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the parent dataset and click **Unlock**. 
To unlock all the datasets, click on the **Unlock Children** checkbox to check-mark it and type the passphrase for each dataset to unlock them.

![StoragePoolsDatasetUnlockexample3](/images/CORE/12.0/EncrytionExample3.png "Successfully unlocked Datasets")

Click the **CONTINUE** button on both confirmation windows to successfully unlock the datasets. 
The datasets display the unlocked icon.
## Encrypting a Zvol

Encryption is for securing sensitive data. 

{{< hint info >}}
You can only encrypting a zvol if you create the zvol from a dataset with encryption.
{{< /hint >}}

{{< include file="/_includes/EncryptionBackupKeys.md" type="page" >}}

Zvols, like datasets, inherit encryption settings from the parent dataset. 
To encrypt a zvol, select a dataset configured with encryption and then [create a new zvol]({{< relref "/CORE/Storage/Pools/zvols.md" >}}).
Next, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to display the **Zvol Actions** menu. 

![AddZvolActionsMenuWithEncryptionOptions](/images/CORE/12.0/AddZvolActionsMenuWithEncryptionOptions.png "Zvol Actions with Encryption Options")

If you do not see encryption options on the menu you created the zvol from a dataset not configured with encryption. You can delete the zvol and start over.

Click **Encryption Options**. 
The **Edit Encryption Options** configuration window displays with the **Inherit encryption properties from parent** checkbox check-marked. 

![EditZvolInheritEncryptionProperties](/images/CORE/12.0/EditZvolInheritEncryptionProperties.png "Zvol Inherit Encryption")

Like datasets, the window name includes the full path for the zvol. 
In this example, the root dataset *Encrypted_Pool*, the encrypted child dataset *Dataset2* (i.e., *Encrypted_Pool/Dataset2*).

If not making changes, click the **Confirm** checkbox to activate the **SAVE** button, and then click **SAVE**. 
The zvol is encrypted with settings inherited from its parent.

To change inherited encryption properties, click on the inherit checkbox to uncheck it. 
Additional configuration option fields display.

![EditZvolUncheckInheritEncryption](/images/CORE/12.0/EditZvolUncheckInheritEncryption.png "Zvol Uncheck Inherit Encryption")

If **Encryption Type** is set to**Key**, type an encryption key into the **Key** field or check-mark the **Generate Key** checkbox. 
If set to **Passphrase**, type a passphrase at least eight characters long into both the **Passphrase** and **Confirm Passphrase** fields. 
After making any changes, click the **Confirm** checkbox to check-mark it and activate the **SAVE** button, and then click **SAVE**. 
The zvol is now encrypted with settings not inherited from its parent.

{{< hint danger >}}
Save any change to the encryption key or passphrase, update your saved passcodes and keys file, and back up the file. 
{{< /hint >}}

## Managing Encryption Credentials

There are two ways to manage the encryption credentials: with key files or passphrases.

{{< tabs "Encryption Credentials" >}}
{{< tab "Key Files" >}}

Creating a new encrypted pool automatically generates a new key file and prompts you to download it.

{{< hint danger>}}
*Always back up the key file to a safe and secure location.*
{{< /hint >}}

![EncryptionKeyBackupWarning](/images/CORE/12.0/EncryptionKeyBackupWarning.png "Encryption Backup Warning")

To manually download a copy of the pool's inherited and non-inherited encrypted dataset key files, open the pool <i class="material-icons" aria-hidden="true" title="Settings">settings</i> menu and click on **Export Dataset Keys**. Enter the root password and click the **CONTINUE** button.

![StoragePoolsEncryptionActionsExportKeys](/images/CORE/12.0/StoragePoolsEncryptionActionsExportKeys.png "Exporting Key Files")

{{< hint info >}}
To manually download a backup a single dataset's key file, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and click on **Export Key**. 
Next type the root password and click the **CONTINUE** button. Click the **DOWNLOAD KEY** button.
{{< /hint >}}

To change the key, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> and **Encryption Options**.

![StoragePoolsEncryptedDataset](/images/CORE/12.0/StoragePoolsEncryptedDataset.png "Dataset Options: Encryption Options")

Type your custom key or click **Generate Key**.

![StoragePoolsEncryptedDatasetOptions](/images/CORE/12.0/StoragePoolsEncryptedDatasetOptions.png "Editing Encryption Options")

{{< /tab >}}
{{< tab "Passphrases" >}}

To use a passphrase instead of a keyfile, click the dataset <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> icon to dispaly the **Dataset Actions** menu and then click **Encryption Options**.
Change the **Encryption Type** from **Key** to **Passphrase**.

![Storage Pools Dataset Encryption Passphrase](/images/CORE/12.0/StoragePoolsDatasetEncryptionPassphrase.png "Dataset Encryption Passphrase Options")

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

TrueNAS Enterprise users can connect a Key Management Interoperability Protocol ([KMIP]({{< relref "KMIP.md" >}})) server to centralize keys when they are not using passphrases to unlock a dataset or zvol. 

Users with TrueNAS CORE or Enterprise installations without [KMIP]({{< relref "KMIP.md" >}}) should either replicate the dataset or zvol without properties to disable encryption at the remote end or construct a special json manifest to unlock each child dataset/zvol with a unique key.

{{< tabs "Unlocking Methods" >}}
{{< tab "Method 1: Construct JSON Manifest" >}}
1. Replicate every encrypted dataset you want to replicate with properties. 
2. Export key for every child dataset that has a unique key. 
3. For each child dataset construct a proper json with poolname/datasetname of the destination system and key from the source system like this: 
   `{"tank/share01": "57112db4be777d93fa7b76138a68b790d46d6858569bf9d13e32eb9fda72146b"}`
5. Save this file with the extension <file>.json<file>. 
6. Unlock the dataset(s) on the remote system using properly constructed <file>json<file> files.

{{< /tab >}}
{{< tab "Method 2: Replicate Encrypted Dataset/Zvol without Properties" >}}
Uncheck properties when replicating so that the destination dataset isn't encrypted on the remote side and doesn't require a key to unlock.
1. Go to **Tasks > Replication Tasks** and click **ADD**.
2. Click **ADVANCED REPLICATION CREATION**.
3. Fill out the form as needed and make sure **Include Dataset Properties** is *NOT* checked.
4. Click **SUBMIT**.

{{< /tab >}}
{{< /tabs >}}

{{< hint info >}}
**NOTE:** This does not affect TrueNAS Enterprise installs with [KMIP]({{< relref "KMIP.md" >}}).
{{< /hint >}}

## Legacy GELI Encryption

TrueNAS no longer supports GELI encryption (deprecated).

{{< expand "Can I directly convert a GELI-encrypted pool to native ZFS encryption?" "v" >}}
No.
You must migrate data out of the GELI pool and into a ZFS encrypted pool.
{{< /expand >}}

### GELI Pool Migrations

You can *migrate* data  from the GELI-encrypted pool to a new ZFS-encrypted pool.

{{< hint warning >}}
Be sure to unlock the GELI-encrypted pool before attempting any data migrations.
The new ZFS-encrypted pool must be at least the same size as the previous GELI-encrypted pool.
Do not delete the GELI dataset until you have verified the data migration.
{{< /hint >}}

There are a few options to migrate data from a GELI-encrypted pool to a new ZFS-encrypted pool:

{{< tabs "GELI Migration Methods" >}}
{{< tab "Replication Wizard" >}}
{{< expand "Using the Replication Wizard" "v" >}}
TrueNAS web interface continues to detect and suppot GELI encrypted pools as *Legacy Encrypted* pools. As of TrueNAS version 12.0-U1, a decrypted GELI pool can migrate data to a new ZFS encrypted pool using the Replication Wizard.
 
Start the Replication Wizard by selecting **Tasks** -> **Replication Task** -> **ADD**

**Source Location**:
 * Select **On this System**.
 * Set the dataset to transfer.
 
**Destination Location**:
 * Select **On a Different System**.
 
**SSH Connection**:
 * Either create the ssh connection by clicking **Create New** or select the destination system's ssh connection.
 * In **Destination**, select the dataset to replicate the files to.
 * Set **Encryption**.
 * Choose either **PASSPHRASE** or **HEX** for the **Encryption Key Format**.
 * If you selected PASSPHRASE, type the passphrase. If you selected HEX, set *G*enerate Encryption Key**.
 * Set **Store Encryption key in Sending TrueNAS database**.
 * Click **Next**
 
 **Replication Schedule**:
 * Set **Run Once** in Replication Schedule.
 * Unset **Make Destination Dataset Read-Only**.
 
 * Click **START REPLICATION**
{{< /expand >}}
{{< /tab >}}
{{< tab "File Transfer" >}}
{{< hint warning >}}
This method does not preserve file ACLs.
{{< /hint >}}

The web interface supports using **Tasks > Rsync Tasks** to transfer files out of the GELI pool.
In the **Shell**, `rsync` and other file transfer mechanisms (`scp`, `cp`, `sftp`, `ftp`, `rdiff-backup`) are available for copying data between pools.
{{< /tab >}}
{{< tab "ZFS Send and Receive" >}}
{{< hint warning >}}
These instructions are an example walkthrough.
It is not an exact step-by-step guide for all situations.
Research ZFS [send](https://openzfs.github.io/openzfs-docs/man/8/zfs-send.8.html)/[receive](https://openzfs.github.io/openzfs-docs/man/8/zfs-receive.8.html) before attempting this.
A simple example cannot cover every edge case.
{{< /hint >}}

Legend:
```
GELI Pool = pool_a
Origin Dataset = dataset_1
Latest Snapshot of GELI Pool = snapshot_name
ZFS Native Encrypted Pool = pool_b
Receieving Dataset = dataset_2
```

1. Create a new encrypted pool in **Storage > Pools**.
2. Open the **Shell**.
   Make a new snapshot of the GELI pool and dataset with the data to be migrated: `zfs snapshot -r pool_a/dataset_1@snapshot_name`.
3. Create a passphrase: `echo passphrase > /tmp/pass`.
4. Use ZFS send/receive to transfer the data between pools: `zfs send -Rv pool_a/dataset_1@snapshot_name | zfs recv -o encryption=on -o keyformat=passphrase -o keylocation=file:///tmp/pass pool_b/dataset_2`.
5. When the transfer is complete, go to **Storage > Pools** and lock the new dataset.
   After locking the dataset, immediately unlock it.
   TrueNAS prompts for the passphrase.
   After entering the passphrase and unlocking the pool, you can delete the `/tmp/pass` file used for the transfer.
6. If desired, you can convert the dataset to use a key file instead of a passphrase.
   To use a key file, click the dataset <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; (Options) and click **Encryption Options**.
   Change the **Encryption Type** from **Passphrase** to **Key** and save.
7. Repeat this process for every dataset in the pool that you need to migrate.

{{< hint danger >}}
Back up your key file immediately!
{{< /hint >}}
{{< /tab >}}
{{< /tabs >}}
