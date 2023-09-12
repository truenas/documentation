---
title: "User_Prop"
description: "Provides information about the storage dataset user_prop namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- scaleclistorage
- scaledatasets
- scaleusers
---

{{< toc >}}


{{< include file="/_includes/CLIGuideWIP.md" >}}

## Snapshot Namespace
The **user_prop** namespace has one namespace and five commands, and is based on dataset user property and management functions found in the SCALE API and web UI.
It provides access to storage pool methods through the **user_prop** commands.

## Snapshot Commands 
The following **user_prop** commands allow you to create new pools and manage existing pools.

You can enter commands from the main CLI prompt or from the snapshot namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Create Command
Use the `create` command to 

{{< expand "Using the Create Command" "v" >}}
#### Description
The `create` command has one required property, `id`.
`id` is the GUID number for the pool found in the output of the `storage pool query` command and either of the `storage pool get_instance` commands.
Enter the property argument using the `=` delimiter to separate property and value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns a table with type, service, and attachments for the specified pool ID.

#### Usage
From the CLI prompt, enter:

`storage dataset user_prop query`

{{< expand "Command Example" "v" >}}
```
```
storage dataset user_prop query

```
```
{{< /expand >}}
{{< /expand >}}

### Query Command
Use the `query` command to 

{{< expand "Using the Query Command" "v" >}}
#### Description
The `query` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the ID and a dictionary of properties.

#### Usage
From the CLI prompt, enter:

`storage dataset user_prop query`

{{< expand "Command Example" "v" >}}
```
storage dataset user_prop query
+------------------------------------------------------------------+------------+
| id                                                               | properties |
+------------------------------------------------------------------+------------+
| boot-pool                                                        | <dict>     |
| boot-pool/ROOT                                                   | <dict>     |
| boot-pool/ROOT/23.10-BETA.1-INTERNAL.8-1                         | <dict>     |
| boot-pool/ROOT/23.10-BETA.1-INTERNAL.8-2                         | <dict>     |
| boot-pool/ROOT/23.10-BETA.1-INTERNAL.9                           | <dict>     |
| boot-pool/ROOT/23.10-BETA.1                                      | <dict>     |
| boot-pool/ROOT/23.10-BETA.1-INTERNAL.10                          | <dict>     |
| boot-pool/grub                                                   | <dict>     |
| tank                                                             | <dict>     |
| tank/reptest1                                                    | <dict>     |
| tank/tank-e2                                                     | <dict>     |
| tank/zvols                                                       | <dict>     |
| tank/zvols/zvol1                                                 | <dict>     |
| tank/zvols/zvol2                                                 | <dict>     |
| tank/minio                                                       | <dict>     |
| tank/minio/data                                                  | <dict>     |
| tank/.system                                                     | <dict>     |
| tank/.system/glusterd                                            | <dict>     |
| tank/.system/configs-d45c185174d94a2f85be3653127da002            | <dict>     |
| tank/.system/services                                            | <dict>     |
| tank/.system/cores                                               | <dict>     |
| tank/.system/webui                                               | <dict>     |
| tank/.system/samba4                                              | <dict>     |
| tank/.system/rrd-d45c185174d94a2f85be3653127da002                | <dict>     |
| tank/.system/netdata-d45c185174d94a2f85be3653127da002            | <dict>     |
| tank/.system/ctdb_shared_vol                                     | <dict>     |
| tank/tank-e                                                      | <dict>     |
| tank/shares                                                      | <dict>     |
| tank/shares/nfs5                                                 | <dict>     |
| tank/shares/nfs2                                                 | <dict>     |
| tank/shares/nfs                                                  | <dict>     |
| tank/shares/smbshare                                             | <dict>     |
| tank/shares/nfs3                                                 | <dict>     |
| tank/shares/nfs4                                                 | <dict>     |
| tank/ix-applications                                             | <dict>     |
| tank/ix-applications/k3s                                         | <dict>     |
| tank/ix-applications/k3s/kubelet                                 | <dict>     |
| tank/ix-applications/default_volumes                             | <dict>     |
| tank/ix-applications/catalogs                                    | <dict>     |
| tank/ix-applications/releases                                    | <dict>     |
| tank/ix-applications/releases/plex                               | <dict>     |
| tank/ix-applications/releases/plex/charts                        | <dict>     |
| tank/ix-applications/releases/plex/volumes                       | <dict>     |
| tank/ix-applications/releases/plex/volumes/ix_volumes            | <dict>     |
| tank/ix-applications/releases/plex/volumes/ix_volumes/ix-plex... | <dict>     |
| tank/ix-applications/releases/plex/volumes/ix_volumes/ix-plex... | <dict>     |
| tank/ix-applications/releases/plex/volumes/ix_volumes/ix-plex... | <dict>     |
| tank/ix-applications/releases/wg-easy                            | <dict>     |
| tank/ix-applications/releases/wg-easy/charts                     | <dict>     |
| tank/ix-applications/releases/wg-easy/volumes                    | <dict>     |
| tank/ix-applications/releases/wg-easy/volumes/ix_volumes         | <dict>     |
| tank/ix-applications/releases/wg-easy/volumes/ix_volumes/ix-w... | <dict>     |
| tank/ix-applications/releases/tftpd-hpa                          | <dict>     |
| tank/ix-applications/releases/tftpd-hpa/volumes                  | <dict>     |
| tank/ix-applications/releases/tftpd-hpa/volumes/ix_volumes       | <dict>     |
| tank/ix-applications/releases/tftpd-hpa/volumes/ix_volumes/tf... | <dict>     |
| tank/ix-applications/releases/tftpd-hpa/charts                   | <dict>     |
| tank/ix-applications/releases/minio                              | <dict>     |
| tank/ix-applications/releases/minio/volumes                      | <dict>     |
| tank/ix-applications/releases/minio/volumes/ix_volumes           | <dict>     |
| tank/ix-applications/releases/minio/volumes/ix_volumes/ix-pos... | <dict>     |
| tank/ix-applications/releases/minio/volumes/ix_volumes/ix-pos... | <dict>     |
| tank/ix-applications/releases/minio/volumes/ix_volumes/ix-minio  | <dict>     |
| tank/ix-applications/releases/minio/charts                       | <dict>     |
| tank/ix-applications/releases/webdav                             | <dict>     |
| tank/ix-applications/releases/webdav/volumes                     | <dict>     |
| tank/ix-applications/releases/webdav/volumes/ix_volumes          | <dict>     |
| tank/ix-applications/releases/webdav/charts                      | <dict>     |
| tank/ix-applications/releases/pihole                             | <dict>     |
| tank/ix-applications/releases/pihole/volumes                     | <dict>     |
| tank/ix-applications/releases/pihole/volumes/ix_volumes          | <dict>     |
| tank/ix-applications/releases/pihole/volumes/ix_volumes/ix-pi... | <dict>     |
| tank/ix-applications/releases/pihole/volumes/ix_volumes/ix-pi... | <dict>     |
| tank/ix-applications/releases/pihole/charts                      | <dict>     |
| tank/nfs4                                                        | <dict>     |
| tank/snapshots                                                   | <dict>     |
| tank/snapshots/snaptask1                                         | <dict>     |
| tank/snapshots/snap1                                             | <dict>     |
| tank/snapshots/snap2                                             | <dict>     |
| tank2                                                            | <dict>     |
+------------------------------------------------------------------+------------+

```
{{< /expand >}}
{{< /expand >}}

{{< taglist tag="scaleclistorage" limit="10" title="Related CLI Storage Articles" >}}
{{< taglist tag="scaledatasets" limit="10" title="Related Dataset Articles" >}}
{{< taglist tag="scaleusers" limit="10" title="Related User Articles" >}}