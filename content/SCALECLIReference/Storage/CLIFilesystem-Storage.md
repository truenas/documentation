---
title: "Filesystem (Storage)"
description: "Provides information about the storage filesystem namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 25
aliases:
draft: false
tags:
- scaleclistorage
- scaleacls
---

{{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" >}}

<!-- Note for whoever works on this namespace: Working syntax and a command example for the `listdir` command is available at [Managing Snapshots]({{< relref "managesnapshotsscale.md #browsing-a-snapshot-collection" >}}). The snippet is `BrowsingSnapshotCollections1.md`:

* Using the TrueNAS SCALE CLI, enter <code>storage filesystem listdir path="/<em>PATH</em>/<em>TO</em>/<em>DATASET</em>/.zfs/<em>PATH</em>/<em>TO</em>/<em>SNAPSHOT</em>"</code> to view snapshot contents.
    See also [`storage filesystem`]({{< relref "clifilesystem-storage.md #listdir-command" >}}).

    {{< expand "Command Example" "v" >}}
```
storage filesystem listdir path="/mnt/tank/test/.zfs/snapshot/SNAPSHOT1"
+--------------+-----------------------------------------------------+-----------------------------------------------------+-----------+--------+-------+-------+------+------+---------------+-----------+
| name         | path                                                | realpath                                            | type      | size   | mode  | acl   | uid  | gid  | is_mountpoint | is_ctldir |
+--------------+-----------------------------------------------------+-----------------------------------------------------+-----------+--------+-------+-------+------+------+---------------+-----------+
| tuser        | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/tuser        | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/tuser        | DIRECTORY | 6      | 16832 | false | 3000 | 3000 | false         | true      |
| FILENAME.tar | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILENAME.tar | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILENAME.tar | FILE      | 0      | 33200 | true  | 950  | 950  | false         | true      |
| FILE.tar     | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILE.tar     | /mnt/tank/test/.zfs/snapshot/SNAPSHOT1/FILE.tar     | FILE      | 778240 | 33200 | true  | 950  | 950  | false         | true      |
+--------------+-----------------------------------------------------+-----------------------------------------------------+-----------+--------+-------+-------+------+------+---------------+-----------+
```
    {{< /expand >}}

There is also a working example of a `mkdir` command in the MinioDatasetRequirements.md snippet:

In the TrueNAS SCALE CLI, use [`storage filesystem mkdir path=PATH/TO/minio/data`]({{< relref "CLIFilesystem-Storage.md #mkdir-command" >}}) to create the **/data** directory in the MinIO dataset.

    {{< expand "Command Example" "v" >}}
```
storage filesystem mkdir path="/mnt/tank/apps/minio/data"
+----------+---------------------------+
|     name | data                      |
|     path | /mnt/tank/apps/minio/data |
| realpath | /mnt/tank/apps/minio/data |
|     type | DIRECTORY                 |
|     size | 2                         |
|     mode | 16877                     |
|      acl | false                     |
|      uid | 0                         |
|      gid | 0                         |
+----------+---------------------------+
```
    {{< /expand >}}
-->

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaleacls" limit="10" title="Related ACL Articles" >}}
