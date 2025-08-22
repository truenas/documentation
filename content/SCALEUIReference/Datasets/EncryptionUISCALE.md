---
title: "Encryption Settings"
description: "Provides information on the settings and functions found on the TrueNAS storage encryption screens."
weight: 50
tags:
- encryption
- datasets
- pools
- zvol
- storage
---

Datasets, root, non-root parent, and child, or zvols with encryption include the **[Encryption]({{< ref "/SCALEUIReference/Datasets" >}})** widget in the set of dataset widgets shown on the **Datasets** screen.

{{< trueimage src="/images/SCALE/Datasets/DatasetTreeWithLockIcons.png" alt="Dataset Tree Table Encryption Icons" id="Dataset Tree Table Encryption Icons" >}}

{{< include file="/static/includes/EncryptionIconsSCALE.md" >}}

## Dataset Encryption

The **Encryption** option on the **[Pool Manager]({{< ref "PoolCreateWizardScreens" >}})** screen sets encryption for the pool and root dataset.

{{< include file="/static/includes/EncryptionRootLevel.md" >}}

The **Download Encryption Key** warning window opens when you create the pool.
It downloads a JSON file to the downloads folder on your system.

{{< trueimage src="/images/SCALE/Storage/DownloadPoolEncryptionKey.png" alt="Download Pool Encryption Key" id="Download Pool Encryption Key" >}}

The [**Encryption Options** settings]({{< ref "/scaleuireference/datasets/#encryption-options-section" >}}) under **Advanced Options** on the **Add Dataset** screen configure encryption for that dataset.

{{< trueimage src="/images/SCALE/Datasets/AddDatasetBasicEncryptionAndOtherOptions.png" alt="Add Dataset Encryption Options Key" id="Add Dataset Encryption Options Key" >}}

## Export Key Options

The **Encryption** widget for root datasets with encryption includes the **Export All Keys** and **Export Key** options. It does not include the **Lock** option.

If a dataset is encrypted using a key, the **Encryption** widget for that dataset includes the **Export Key** option.

### Export All Keys Dialog

**Export All Keys** opens a confirmation dialog with the **Download Keys** option that exports a JSON file of all encryption keys to the system download folder.

{{< trueimage src="/images/SCALE/Datasets/ExportAllKeysDialog.png" alt="Export All Keys" id="Export All Keys" >}}

### Export Key Dialog

**Export Key** opens a dialog showing the key for the selected dataset, and the **Download Key** button.
**Download Key** exports the key to a JSON file and saves it in your system download folder.

{{< trueimage src="/images/SCALE/Datasets/ExportKeyDialog.png" alt="Export Key" id="Export Key" >}}

## Edit Encryption Options Window

Encryption type and options are set for a dataset when it is first created or are inherited from the root dataset.
The **Edit Encryption Options for *datasetname*** displays the current encryption option settings for the selected encrypted dataset.
Use to change the encryption type from or to key or passphrase, and the related settings.

The **Edit Encryption Options for *datasetname*** window opens with the current dataset encryption settings displayed.
The encryption settings options are the same as those on **Add Dataset > Encryption Options**.

{{< trueimage src="/images/SCALE/Datasets/EditEncryptionOptionsKeyTypeWindow.png" alt="Encryption Options Key Type Window" id="Encryption Options Key Type Window" >}}

{{< expand "Encryption Settings" "v" >}}
{{< include file="/static/includes/EncryptionSettings.md" >}}
{{< /expand >}}

## Lock Dataset Dialog

**Lock** shows on the **Encryption** widgets when you encrypt a dataset (or zvol) with a passphrase.
An encrypted child that inherits encryption from an encrypted parent does not see the **Lock** option on its **Encryption** widget when the lock state is controlled by the parent dataset for that child dataset.
The locked icon for child datasets that inherit encryption is the locked by ancestor icon.

**Lock** opens the **Lock Dataset** confirmation dialog with the option to **Force unmount** and **Lock** the dataset.
**Force unmount** disconnects any client system accessing the dataset via the sharing protocol. Do not select this option unless you are certain the dataset is not used or accessed by a share, application, or other system services.

{{< trueimage src="/images/SCALE/Datasets/LockDatasetDialog.png" alt="Lock Dataset Dialog" id="Lock Dataset Dialog" >}}

After locking a dataset, the **Encryption** screen displays **Locked** as the **Current State** and adds the **Unlock** option.

## Unlock Datasets Screen

**Unlock** on the **Encryption** widget shows for locked datasets that are not child datasets that inherit encryption from the parent dataset.
**Unlock** opens the **Unlock Datasets** screen, which is used when you unlock the selected dataset and child datasets simultaneously.

{{< trueimage src="/images/SCALE/Datasets/UnlockDatasetsScreenNonRootParent.png" alt="Unlock Non-Root Parent and Child Datasets Screen" id="Unlock Non-Root Parent and Child Datasets Screen" >}}

If you select a child dataset of a root (pool-level) dataset or a non-root parent, the screen includes only the one **Dataset Passphrase** field, and the option to **Unlock Child Encrypted Roots** is pre-selected.

{{< trueimage src="/images/SCALE/Datasets/UnlockDatasetsScreen.png" alt="Unlock Datasets Screen" id="Unlock Datasets Screen" >}}

{{< expand "Unlock Dataset Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Unlock Child Encrypted Roots** | Unlocks any encrypted dataset stored within this dataset. |
| **Dataset Passphrase**<br> **Dataset Key** | Text entry field that accepts manual or copy/paste entry of the user-defined string (passphrase) or system-generated or user-created alphanumeric key entered when you created the dataset. |
| **Force** | Adds a force flag to the operation. In some cases, the provided key/passphrase might be valid, but the path where the dataset is supposed to be mounted after being unlocked already exists and is not empty. In this case, the unlock operation fails. Adding the force flag can override this, and when selected, the system renames the existing dataset mount directory/file path and unlocks the dataset. |
| **Save** | Starts the unlock process, fetches data, and displays the **Unlock Datasets** dialog with the dataset mount path. **Continue** unlocks the dataset. |
| **Save** | Starts the unlock process, fetches data, and displays the **Unlock Datasets** dialog with the dataset mount path. **Continue** unlocks the dataset. |
{{< /truetable >}}
{{< /expand >}}
