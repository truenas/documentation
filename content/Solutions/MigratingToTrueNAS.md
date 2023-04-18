---
title: "Migrating to TrueNAS"
description: "This article describes general recommendations for migrating data into TrueNAS."
weight: 10
tags:
- coregettingstarted
- scalemigrate
---

{{< toc >}}

Every NAS user has a unique storage setup, but we can still give general recommendations for migrating your data into TrueNAS using share protocols and cloud storage.

### NFS Migration

Rsync is an open-source file transfer utility that runs on computers with Linux OS (or a Unix-like OS). Locate usage instructions and tutorials for rsync [here](https://rsync.samba.org/).

{{< hint type=note >}}
If you decide to use rsync, be aware that your filesystem must support Access Control Lists (ACLs).
{{< /hint >}}

### SMB Migration

We recommend migrating via SMB sharing if you use computers with Windows OS (or if you prefer SMB). 

[Robocopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy) is ideal for users with Windows clients. SMB also allows you to drag & drop files to migrate them from your current NAS storage into TrueNAS. Using SMB will be slower than using a utility like Robocopy.

### iSCSI Migration

vMotion uses block-level storage protocols to move data. If you prefer to use iSCSI (block-level storage) protocols, vMotion might be an option. vMotion is often used to move virtual machines from one host to another. Research whether vMotion is suitable for your setting and use needs.

### Cloud Migration

Migrating via the cloud is another option. Services like minIO, S3, and Google Drive (among many others) can move your files and data from one NAS to another. Utilities like [rclone](https://rclone.org/) facilitate migration through cloud storage platforms.

Be aware that cloud storage can be expensive when moving large amounts of data.
