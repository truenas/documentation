---
title: "Migrating Data to TrueNAS from Third-Party Solutions"
description: "Describes general recommendations for migrating data into TrueNAS from existing storage solutions."
weight: 5
tags:
- gettingstarted
- migrate
---

Every NAS user has a unique storage setup and requirements. The following are general recommendations and options for migrating data into TrueNAS from third party storage solutions.

## SMB Migration Using Syncthing

Users migrating data from an existing third-party NAS solution to TrueNAS 24.04 (Dragonfish) can do so using the [Syncthing Enterprise application]({{< relref "/truenasapps/enterpriseapps/syncthing.md" >}}) to mount the source with a remote SMB share that preserves metadata.

See [Third-Party Data Migration]({{< relref "/SCALE/GettingStarted/DataMigrationSyncthing.md" >}}) for considerations and a full tutorial.

## NFS Migration

Rsync is an open-source file transfer utility that runs on computers with Linux OS (or a Unix-like OS). Locate usage instructions and tutorials for rsync [here](https://rsync.samba.org/).

{{< hint type=note >}}
If you decide to use rsync, be aware that your filesystem must support Access Control Lists (ACLs).
{{< /hint >}}

## SMB Migration

We recommend migrating via SMB sharing if you use computers with Windows OS (or if you prefer SMB).

[Robocopy](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy) is ideal for users with Windows clients. SMB also allows you to drag and drop files to migrate them from your current NAS storage into TrueNAS. Using SMB is slower than using a utility like Robocopy.

## iSCSI Migration

vMotion uses block-level storage protocols to move data. If you prefer to use iSCSI (block-level storage) protocols, vMotion might be an option. vMotion is often used to move virtual machines from one host to another. Research whether vMotion is suitable for your setting and use needs.

## Cloud Migration

Migrating via the cloud is another option. Services like minIO, S3, and Google Drive (among many others) can move your files and data from one NAS to another. Utilities like [rclone](https://rclone.org/) facilitate migration through cloud storage platforms.

Be aware that cloud storage can be expensive when moving large amounts of data.
