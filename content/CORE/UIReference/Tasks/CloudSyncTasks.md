---
title: "Cloud Sync Tasks"
description: "This article describes how to send, receive and synchronize data with a Cloud Storage provider on TrueNAS CORE."
weight: 90
tags:
- corecloudsynctasks
---

{{< toc >}}

TrueNAS can send, receive, or synchronize data with a Cloud Storage provider.

![TasksCloudSyncAdd](/images/CORE/12.0/TasksCloudSyncAdd.png "Creating a Cloud Sync Task")

## Transfer

{{< truetable >}}
| Name | Description |
|------|------|
| **Description** | Enter a description of the Cloud Sync Task. |
| **Direction** | **PUSH** sends data to cloud storage. **PULL** receives data from cloud storage. Changing the direction resets the **Transfer Mode** to **COPY**. |
| **Transfer Mode** | **SYNC**: Files on the destination are changed to match those on the source. If a file does not exist on the source, it is also deleted from the destination. **COPY**: Files from the source are copied to the destination. If files with the same names are present on the destination, they are overwritten. **MOVE**: After files are copied from the source to the destination, they are deleted from the source. Files with the same names on the destination are overwritten. |
| **Directory/Files** | Select the directories or files to be sent to the cloud for **Push** syncs, or the destination to be written for **Pull** syncs. Be cautious about the destination of **Pull** jobs to avoid overwriting existing files. |
{{< /truetable >}}

## Remote

{{< truetable >}}
| Name | Description |
|------|------|
| **Credential** | Select the cloud storage provider credentials from the list of available Cloud Credentials. |
| **Folder** | Enter or select the cloud storage location to use for this task. |
{{< /truetable >}}

## Control

{{< truetable >}}
| Name | Description |
|------|------|
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. |
| **Enable** | Enable this Cloud Sync Task. Clear to disable this Cloud Sync Task without deleting it. |
{{< /truetable >}}

## Advanced Options

{{< truetable >}}
| Name | Description |
|------|------|
| **Follow Symlinks** | Follow symlinks and copy the items to which they link. |
| **Pre-script** | Script to execute before running sync. |
| **Post-script** | Script to execute after running sync. |
| **Exclude** | List of files and directories to exclude from sync. Separate entries by pressing <kbd>Enter</kbd>. See [rclone](https://rclone.org/filtering/) filtering for more details about the `--exclude` option. |
| **Upload Chunk Size** | Files are split into chunks of this size before upload. The number of chunks that can be simultaneously transferred is set by the **Transfers** number. The single largest file being transferred must fit into no more than 10,000 chunks. |
| **Remote Encryption** | Use [rclone crypt](https://rclone.org/crypt/) to manage data encryption during PUSH or PULL transfers:  PUSH: Encrypt files before transfer and store the encrypted files on the remote system. Files are encrypted using the *Encryption Password* and *Encryption Salt* values.  PULL: Decrypt files that are being stored on the remote system before the transfer. Transferring the encrypted files requires entering the same Encryption Password and Encryption Salt that was used to encrypt the files.  Additional details about the encryption algorithm and key derivation are available in the [rclone crypt File formats documentation](https://rclone.org/crypt/#file-formats). |
| **Transfers** | Number of simultaneous file transfers. Enter a number based on the available bandwidth and destination system performance. See [rclone --transfers](https://rclone.org/docs/#transfers-n). |
| **Bandwidth Limit** | A single bandwidth limit or bandwidth limit schedule in rclone format. Separate entries by pressing <kbd>Enter</kbd>. Example: *08:00,512 12:00,10MB 13:00,512 18:00,30MB 23:00,off*. Units can be specified with the beginning letter: *b, k (default), M, or G*. See [rclone --bwlimit](https://rclone.org/docs/#bwlimit-bandwidth-spec). |
{{< /truetable >}}

## Dry Run

TrueNAS connects to the Cloud Storage Provider and simulates a file transfer without sending or receiving data.

{{< taglist tag="corecloudsynctasks" limit="10" >}}
