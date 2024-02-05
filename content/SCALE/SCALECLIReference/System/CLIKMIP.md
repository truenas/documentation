---
title: "KMIP"
description: "Provides information about the system kmip namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 70
aliases:
draft: false
tags:
- kmip
---

## Kmip Namespace
The **kmip** namespace has six commands and is based on system KMIP server creation and management functions found in the SCALE API and web UI.
It provides access to KMIP server methods through the **kmip** commands.

## Kmip Commands
The following **kmip** commands allow you to create new and manage existing KMIP server connections.

You can enter commands from the main CLI prompt or from the **kmip** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Clear_Sync_Pending_Keys command
Use the `clear_sync_pending_keys` command to clear any pending sync.

{{< expand "Using the Clear_Sync_Pending_Keys Command" "v" >}}
#### Description
The `clear_sync_pending_keys` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns an empty line. Use the `system kmip kmip_sync_pending` command to verify if the sync is cleared.

#### Usage
From the CLI prompt, enter:

<code>system kmip clear_sync_pending_keys</code>

{{< expand "Command Example" "v" >}}
```
system kmip clear_sync_pending_keys

```
{{< /expand >}}
{{< /expand >}}

### Config command
Use the `config` command to retrieve the KMIP server settings if one is configured.

{{< expand "Using the Config Command" "v" >}}
#### Description
The `config` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a dictionary with the system-assigned ID, server, ssl version, port number, manage SED and ZFS settings, and if the KMIP sever is enabled. It indicates a certificate and CA is configured but not the entire certificate string.

#### Usage
From the CLI prompt, enter:

<code>system kmip config</code>

{{< expand "Command Example" "v" >}}
```
system kmip config
+-----------------------+------------------+
|                    id | 1                |
|                server | <null>           |
|           ssl_version | PROTOCOL_TLSv1_2 |
|                  port | 5696             |
|      manage_sed_disks | false            |
|       manage_zfs_keys | false            |
|               enabled | false            |
|           certificate | <null>           |
| certificate_authority | <null>           |
+-----------------------+------------------+
```
{{< /expand >}}
{{< /expand >}}

### Kmip_Sync_Pending command
Use the `kmip_sync_pending` command to verify if there is a pending sync.

{{< expand "Using the Kmip_Sync_Pending Command" "v" >}}
#### Description
The `kmip_sync_pending` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns `true` if there is a pending sync or `false` if not.

#### Usage
From the CLI prompt, enter:

<code>system kmip kmip_sync_pending</code>

{{< expand "Command Example" "v" >}}
```
system kmip kmip_sync_pending
false
```
{{< /expand >}}
{{< /expand >}}

### Ssl_Version_Choices command
Use the `ssl_version_choices` command to retrieve valid SSL version choices you can use when configuring KMIP service.

{{< expand "Using the Ssl_Version_Choices Command" "v" >}}
#### Description
The `ssl_version_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns an empty line.

#### Usage
From the CLI prompt, enter:

<code>system kmip ssl_version_choices</code>

{{< expand "Command Example" "v" >}}
```
system kmip ssl_version_choices
+------------------+------------------+
|   PROTOCOL_TLSv1 | PROTOCOL_TLSv1   |
| PROTOCOL_TLSv1_1 | PROTOCOL_TLSv1_1 |
| PROTOCOL_TLSv1_2 | PROTOCOL_TLSv1_2 |
+------------------+------------------+
```
{{< /expand >}}
{{< /expand >}}

### Sync_Keys command
Use the `sync_keys` command to sync ZFS/SED keys between the KMIP server and TrueNAS SCALE database.

{{< expand "Using the Sync_keys Command" "v" >}}
#### Description
The `sync_keys` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns an empty line. Use the `system kmip kmip_sync_pending` command to verify there is no longer a sync operation pending.

#### Usage
From the CLI prompt, enter:

<code>system kmip sync_keys</code>

{{< expand "Command Example" "v" >}}
```
system kmip sync_keys

```
{{< /expand >}}
{{< /expand >}}

#### Update Command
Use the `update` command to update the KMIP server settings.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command has 11 property options. See **Update Properties** for details.
Enter the property argument using the `=` delimiter to separate property and value. Double-quote values that include special characters.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line. Enter the [`system kmip config`](#) command to verify settings.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|----------|-------------|
| `enabled` | Set to `true` to activate the KMIP configuration and begin syncing keys with the KMIP server. `enabled`, if true, cannot be set to disabled if there are existing keys pending to be synced. However, users can still perform this action by enabling `force_clear`. | <code>enabled="<i>true/false</i>"</code> |
| `manage_sed_disks` | Set to `true` to enabled and manage syncs keys from local database to remote KMIP server. Enabling this option allows the key server to manage creating or updating the global SED password, creating or updating individual SED passwords, and retrieving SED passwords when SEDs are unlocked. When set to `false`, if there are any keys left to be retrieved from the KMIP server, it syncs them back to local database. Disabling this option leaves SED password management with the local system. | <code>manage_sed_disks="<i>true/false</i>"</code> |
| `manage_zfs_keys` | Set to `true` enabled and syncs keys from local database to remote KMIP server. Use the KMIP server to manage ZFS encrypted dataset keys. The key server stores, applies, and destroys encryption keys whenever an encrypted dataset is created, when an existing key is modified, an encrypted dataset is unlocked, or an encrypted dataset is removed. When set to `false`, if there are any keys left to be retrieved from the KMIP server, it syncs them back to local database. Unsetting this option leaves all encryption key management with the local system. | <code>manage_zfs_keys="<i>true/false</i>"</code> |
| `certificate` | Use the UI to import the certificate for the KMIP server. Next use the `system certificate query` command to locate then enter the system-assigned certificate ID as the value. The system authenticates connection with remote KMIP Server with a TLS handshake. A valid `certificate` and `certificate_authority` are required to verify the key server connection. WARNING: for security reasons, protect the Certificate used for key server authentication. | <code>certificate="<i>true/false</i>"</code> |
| `certificate_authority` | Use the UI to import the certificate authority (CA) for the KMIP server. Next use the `system certificate query` command to locate then enter the system-assigned CA ID as the value. `certificate_authority` determines the certs to use to initiate the TLS handshake with `server`. A valid `certificate` and `certificate_authority` are required to authenticate the connection. WARNING: for security reasons, protect the certificate authority used for key server authentication. | <code>certificate_authority="<i>true/false</i>"</code> |
| `port` | Enter a connection port number on the central key server. Default is `5695`. | <code>port="<i>5695</i>"</code> |
| `server` | Enter the host name or IP address of the central key server. | <code>server="<i>hostname.com</i>"</code> |
| `ssl_version` | Enter the option that matches the ssl configuration used by KMIP server. Options are: `PROTOCOL_TLSv1`, `PROTOCOL_TLSv1_1`, or `PROTOCOL_TLSv1_2`. | <code>ssl_version="<i>PROTOCOL_TLSv1</i>"</code> |
| `force_clear` | Enter `true` to cancel any pending key synchronization. Set `change_server` to `true` to allow users to migrate data between two KMIP servers. The system first migrates keys from old KMIP server to the local database, then migrates the keys from local database to the new KMIP server. If not able to retrieve all the keys from old server, this command fails. | <code>force_clear="<i>true/false</i>"</code> |
| `change_server` | Set `change_server` to `true` to  allow users to migrate data between two KMIP servers. The system first migrates keys from the old KMIP server to the local database, then migrate the keys from local database to a new KMIP server. If not able to retrieve all the keys from the old server, this command fails. You can bypass this by setting `force_clear` to `true`. | <code>change_server="<i>true/false</i>"</code> |
| `validate` | Set to `true` by default. When enabled, the system tests the connection to the `server` and verifies the certificate chain. To use this command, configure the `server` and `port` values, then enter a `certificate` and `certificate_authority`. | <code>validate="<i>true/false</i>"</code> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system kmip update enabled=<i>true</i></code>

Where:
* *true* enables the KMIP server.

{{< expand "Command Example" "v" >}}
```
system kmip update enabled=true

```
{{< /expand >}}
{{< /expand >}}
