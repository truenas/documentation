---
title: "Encryption Settings"
description: "This article provides information on SCALE storage encryption screens and settings."
weight: 50
aliases: 
tags:
- scaleencryption
- scaledatasets
- scalepools
- scalezovls
- scalestorage
---

{{< toc >}}


Datasets, root, non-root parent, and child, or zvols with encryption include the **[ZFS Encryption]({{< relref "DatasetsScreensSCALE.me" >}})** widget in the set of dataset widgets displayed on the **Datasets** screen.

![DatasetTreeWithLockIcons](/images/SCALE/22.12/DatasetTreeWithLockIcons.png "Dataset Tree Table Encryption Icons")

{{< include file="/_includes/EncryptionIconsSCALE.md" type="page" >}}

## Pool Encryption

The **Encryption** option on the **[Pool Manager]({{< relref "PoolManagerScreens.md" >}})** screen sets encryption for the pool and root dataset. The **Download Encryption Key** warning window displays when you create the pool. It downloads a JSON file to your downloads folder. 

![DownloadPoolEncryptionKey](/images/SCALE/22.12/DownloadPoolEncryptionKey.png "Download Pool Encryption Key")

{{< hint warning >}}
All datasets created in an encrypted pool have encryption. You cannot create an unencrypted dataset in an encrypted pool.

All pool-level encryption is key-based encryption. You cannot use passphrase encryption at the pool/root level.

Keep the key file in a secure location where you can back it up and keep it protected. If you lose the encryption key you cannot unlock the pool and that can result in unrecoverable data.
{{< /hint >}}

## Export Key Options 

The **ZFS Encryption** widget for root datasets with encryption includes the **Export All Keys** and **Export Key** options but does not include the **Lock** option.

If a dataset is encrypted using a key, the **ZFS Encryption** widget for that dataset includes the **Export Key** option.

### Export All Keys Dialog

**Export All Keys** opens a confirmation dialog with the **Download Keys** option that exports a JSON file of all encryption keys to the system download folder. 

![ExportAllKeysDialog](/images/SCALE/22.12/ExportAllKeysDialog.png "Export All Keys")

### Export Key Dialog

**Export Key** opens a dialog with the key for the selected dataset and the **Download Key** option that exports a JSON file with the encryption key to your system download folder.

![ExportKeyDialog](/images/SCALE/22.12/ExportKeyDialog.png "Export Key")

## Edit Encryption Options Window

Encryption type and options are set for a dataset when it is first created. 
Encryption is inherited from the root but you can change whether you inherit settings or change them. 
The **Edit Encryption Options for *datasetname*** displays the current encryption option settings for the selected encrypted dataset. 
It allows you to change the encryption type from or to key or passphrase, and the related settings.
{{< expand "Click Here for More Information" "v" >}}
The **Edit Encryption Options for *datasetname*** window opens with the current dataset encryption settings displayed. 
The encryption setting options are the same as those provided on the **Add Dataset > Encryption Options**.

![EditEncryptionOptionsKeyTypeWindow](/images/SCALE/22.12/EditEncryptionOptionsKeyTypeWindow.png "Encryption Options Key Type Window")

{{< include file="/_includes/EncryptionSettings.md" type="page" >}}
{{< /expand >}}
## Lock Dataset Dialog
**Lock** displays on encrypted non-root parent or child datasets **ZFS Encryption** widgets. 
An encrypted child that inherits encryption from a non-root parent does not see the **Lock** option on its **ZFS Encryption** widget because the lock state is controlled by the parent dataset for that child dataset. 
The locked icon for child datasets that inherit encryption is the locked by ancestor icon.
{{< expand "Click Here for More Information" "v" >}}
**Lock** opens the **Lock Dataset** confirmation dialog with the option to **Force unmount** and **Lock** the dataset. 
**Force unmount** disconnects any client system that is accessing the dataset via sharing protocol. Do not select this option unless you are certain the dataset is not used or accessed by a share, application, or other system services.

![LockDatasetDialog](/images/SCALE/22.12/LockDatasetDialog.png "Lock Dataset Dialog")

After locking a dataset, the **ZFS Encryption** screen displays **Locked** as the **Current State** and adds the **Unlock** option.
{{< /expand >}}

## Unlock Datasets Screen
**Unlock** on the **ZFS Encryption** widget displays for locked datasets that are not child datasets that inherit encryption from the parent dataset. 
**Unlock** opens the **Unlock Datasets** screen that allows you to unlock the selected dataset, and the child datasets at the same time.
{{< expand "Click Here for More Information" "v" >}}
If you select a non-root parent dataset, the unlock screen includes two **Dataset Passphrase** fields for two datasets, the non-root parent and the child of that non-root parent, and the option to **Unlock Child Encrypted Roots** pre-selected.

![UnlockDatasetsScreenNonRootParent](/images/SCALE/22.12/UnlockDatasetsScreenNonRootParent.png "Unlock Non-Root Parent and Child Datasets Screen")

If you select a child dataset of the root dataset or of a non-root parent, the screen includes only the one **Dataset Passphrase** field, and the option to **Unlock Child Encrypted Roots** pre-selected.

![UnlockDatasetsScreen](/images/SCALE/22.12/UnlockDatasetsScreen.png "Unlock Datasets Screen")

| Setting | Description |
|---------|-------------|
| **Unlock Child Encrypted Roots** | Select to inlock any encrypted dataset stored within this dataset. |
| **Dataset Passphrase**<br> **Dataset Key** | Enter the user-defined string (passphrase) or system-generated or user-created alpha-numeric key you entered at the time you created the dataset. |
| **Force** | Select to add a force flag to the operation. In some cases it is possible that the provided key/passphrase is valid but the path where the dataset is supposed to be mounted after being unlocked already exists and is not empty. In this case, unlock operation fails. Adding the force flag can override this and when selected, the system renames the existing dataset mount directory/file path and it unlocks the dataset. |
| **Save** | Starts the unlock process, fetch data, and displays the **Unlock Datasets** dialog with the dataset mount path. Click **Continue** to unlock the dataset. |
{{< /expand >}}

{{< taglist tag="scaleencryption" limit="10"  >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles">}}
