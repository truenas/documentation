---
title: "Encryption Screen"
description: "Provides information on the settings and functions found on the TrueNAS storage encryption screens."
weight: 50
aliases:
 - /scale/scaleuireference/datasets/encryptionuiscale/
 - /scale/scaleuireference/storage/datasets/encryptionuiscale/
 - /scale/datasets/encryptionui/
tags:
- encryption
- datasets
- pools
- zvol
- storage
doctype: reference
---


Datasets, root, non-root parent, and child, or zvols with encryption include the **[Encryption]({{< ref "/SCALE/Datasets" >}})** widget in the set of dataset widgets shown on the **Datasets** screen.

{{< trueimage src="/images/SCALE/Datasets/DatasetTreeWithLockIcons.png" alt="Dataset Tree Table Encryption Icons" id="Dataset Tree Table Encryption Icons" >}}

{{< include file="/static/includes/EncryptionIconsSCALE.md" >}}

## Pool Encryption Screens

The **Encryption** options on the **[Pool Creation Wizard]({{< ref "PoolCreationWizardScreen" >}}) > General** screen set encryption for the entire pool, and when equipped with SEDs, can set the global SED encryption password.

{{< include file="/static/includes/EncryptionRootLevel.md" >}}

The **Download Encryption Key** warning window opens when you create the pool.
It downloads a JSON file to the downloads folder on your system.

{{< trueimage src="/images/SCALE/Storage/DownloadPoolEncryptionKey.png" alt="Download Pool Encryption Key" id="Download Pool Encryption Key" >}}

The following screens and dialogs are accessed from the **Datasets** screen. 
The **Encryption** card on the **Datasets** screen shows after selecting an encrypted dataset.

**Edit** on the **Encryption** card opens the **[Edit Encryption Options for *dataset namne*](#edit-encryption-options-window)** window.

## Edit Encryption Options Window

The **Edit Encryption Options for *dataset name*** window shows the same encryption settings found on the **Add Dataset > Advanced Options** screen.
It allows changing the type of encryption applied to the dataset, changing the encryption key or passphrase.
The type of encryption and the options are set for a dataset when it is created or are inherited from the root dataset.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionOptionsKeyTypeWindow.png" alt="Encryption Options Key Type Window" id="Encryption Options Key Type Window" >}}

**Generate Key** changes the window by removing the **Key** field.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionOptionsGenerateKey.png" alt="Encryption Options Generate Key" id="Encryption Options Generate Key" >}}

Setting **Encryption Type** to **Passphrase** shows editable settings for passphrase encryption.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionOptionsPassphraseTypeWindow.png" alt="Encryption Options Passphrase Type Window" id="Encryption Options Passphrase Type Window" >}}

{{< expand "Encryption Settings" "v" >}}
{{< include file="/static/includes/EncryptionSettings.md" >}}
{{< /expand >}}

For more information on dataset encryption, see the [**Encryption Options** settings]({{< ref "/SCALE/Datasets/ManagingDatasets#encryption-options-section" >}}) under **Advanced Options** on the **Add Dataset** screen.

## Export Key Options

The **Encryption** card for root datasets (pools) with encryption includes the **Export All Keys** and **Export Key** options, but it does not include the **Lock** option.

If a dataset is encrypted using a key, the **Encryption** card for that dataset includes the **Export Key** option.

### Export All Keys Dialog

**Export All Keys** opens a confirmation dialog with the **Download Keys** option that exports a JSON file of all encryption keys to the system download folder.

{{< trueimage src="/images/SCALE/Datasets/ExportAllKeysDialog.png" alt="Export All Keys" id="Export All Keys" >}}

### Export Key Dialog

**Export Key** opens a dialog showing the key for the selected dataset and the **Download Key** button.
**Download Key** exports the key to a JSON file and saves it in your system download folder.

{{< trueimage src="/images/SCALE/Datasets/ExportKeyDialog.png" alt="Export Key" id="Export Key" >}}

The **Lock** button does not show for key-encrypted datasets.

## Lock Dataset Dialog

**Lock** shows on the **Encryption** card for passphrase-encrypted datasets.
It does not show for an encrypted child that inherits encryption from an encrypted parent when the lock state is controlled by the parent dataset for that child dataset.
The locked icon for child datasets that inherit encryption is the locked-by-ancestor icon.

**Lock** opens the **Lock Dataset** confirmation dialog with the option to **Force unmount** and **Lock** the dataset.

{{< trueimage src="/images/SCALE/Datasets/LockDatasetDialog.png" alt="Lock Dataset Dialog" id="Lock Dataset Dialog" >}}

**Force unmount** disconnects any client system accessing the dataset via the sharing protocol. Do not select this option unless you are certain the dataset is not used or accessed by a share, application, or other system services.

After locking a dataset, the **Encryption** screen shows **Locked** as the **Current State** and adds the **Unlock** option.

## Unlock Datasets Screen

**Unlock** on the **Encryption** card shows for locked datasets that are not child datasets that inherit encryption from the parent dataset.
**Unlock** opens the **Unlock Datasets** screen.

{{< trueimage src="/images/SCALE/Datasets/UnlockDatasetsScreen.png" alt="Unlock Datasets Screen" id="Unlock Datasets Screen" >}}

{{< expand "Unlock Dataset Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Dataset** |Shows the path to the selected encrypted dataset. |
| **Dataset Passphrase** | Specifies the user-defined passphrase string entered when you created and encrypted the dataset. |
| **Force** | Adds a force flag to the  unlock operation. In some cases, the provided passphrase might be valid, but the path where the dataset is supposed to be mounted after being unlocked already exists and is not empty. In this case, the unlock operation fails. Adding the force flag can override this, and when selected, the system renames the existing dataset mount directory/file path and unlocks the dataset. |
{{< /truetable >}}
{{< /expand >}}

Unlocking encrypted datasets shows two additional dialogs: **Unlock Datasets** and **Unlocked Datasets**.

{{< trueimage src="/images/SCALE/Datasets/UnlockDatasetsDialog.png" alt="Unlock Datasets Dialog" id="Unlock Datasets Dialog" >}}

**Continue** on the **Unlock Datasets** dialog starts the unlocking process, fetches data and opens the **Unlock Datasets** dialog.

{{< trueimage src="/images/SCALE/Datasets/UnlockedDatasetsDialog.png" alt="Unlocked Datasets Dialog" id="Unlocked Datasets Dialog" >}}

When the locked dataset has child datasets, both are unlocked at the same time and show on the **Unlocked Datasets** dialog.

The **Unlocked Datasets** dialog opens after clicking **Continue** on the **Unlock Datasets** dialog and shows the status of unlocked datasets and the mount path to the datasets.

