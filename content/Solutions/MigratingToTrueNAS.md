---
title: "Migrating to TrueNAS"
description: "This article describes general recomendations for migrating data into TrueNAS."
weight: 10
tags:
- coregettingstarted
---

{{< toc >}}

Every NAS user has a unique storage setup, but we can still give general recommendations for migrating your data into TrueNAS using share protocols and cloud storage.

### NFS Migration

If you are using computers with Linux OS (or a Unix-like OS), we recommend using [rsync](https://rsync.samba.org/) to transfer files from your current NAS storage into TrueNAS. Rsync is an open-source file transfer utility. You can find usage instructions and tutorials on the rsync website.

{{< hint info >}}
If you decide to use rsync, be aware that your filesystem must support Access Control Lists (ACLs).
{{< /hint >}}

### SMB Migration

We recommend migrating via SMB sharing if you use computers with Windows OS (or if you prefer SMB). 

[Robocopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy) is ideal for users with Windows clients. SMB also allows you to drag & drop files to migrate them from your current NAS storage into TrueNAS, but it will be slower than using a utility like Robocopy.

### iSCSI Migration

If you prefer to use iSCSI (block-level storage) protocols to transfer your files, vMotion may be a potential option to move your data. However, vMotion typically moves virtual machines from one host to another, so we don't know to what extent it can migrate your data.

### Cloud Migration

Migrating via the cloud is another option. Services like minIO, S3, and Google Drive (among many others) can move your files and data from one NAS to another. You can also use utilities like [rclone](https://rclone.org/) to facilitate migration through cloud storage platforms.

Be aware that cloud storage can be expensive when moving large amounts of data, so it is not our first recommendation for migrating your files to TrueNAS.