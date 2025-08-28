---
title: "KMIP Screen"
description: "Describes the fields in the KMIP Key Status screen on TrueNAS Enterprise."
weight: 75
tags:
- kmip
- enterprise
---

{{< enterprise >}}
KMIP on TrueNAS Enterprise is used to integrate the system within an existing centralized key management infrastructure and use a single trusted source for creating, using, and destroying SED passwords and ZFS encryption keys.
{{< /enterprise >}}
The **KMIP** screen has two areas, **KMIP Key Status** that displays keys synced between a KMIP server and TrueNAS database and **KMIP Server** with the KMIP configuration settings.

{{< trueimage src="/images/SCALE/Credentials/KMIPScreen.png" alt="KMIP Screen" id="KMIP Screen" >}}

### KMIP Key Status

The **KMIP Key Status** area of the **KMIP** screen lists ZFS/SED keys synced between a KMIP server and the TrueNAS database. 

**Sync Keys** synchronizes keys issued by the KMIP server with the TrueNAS database. This button activates when a KMIP key sync is pending.

**Clear Sync Keys** cancels a pending synchronization. This button is active when a KMIP key sync is pending or in progress but not completed.

### KMIP Server Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Server** | Text entry field that accepts manual or copy/paste entry of the host name or IP address of the central key server. |
| **Port** | Text entry field that accepts manual or copy/paste entry of a connection port number on the central key server. Default value **5696** is the kmip.truenas.com port number. |
| **Certificate** | Sets an existing certificate to one selected on the dropdown list, or enter a new one to use for key server authentication. Requires a valid certificate to verify the key server connection. Warning: for security reasons, protect the certificate used for key server authentication. |
| **Manage SED Passwords** | Manages the global self-encrypting drive (SED) password with KMIP when enabled. This option allows the key server to manage creating or updating the global SED password, and retrieving SED passwords when SEDs are unlocked. Disabling this option leaves SED password management with the local system. |
| **Manage ZFS Keys** | Uses the KMIP server to manage ZFS encrypted dataset keys when enabled. The key server stores, applies, and destroys encryption keys whenever an encrypted dataset is created, when an existing key is modified, an encrypted dataset is unlocked, or an encrypted dataset is removed. When not enabled, this option leaves all encryption key management with the local system. | 
| **Enabled** | Activates KMIP configuration and begins syncing keys with the KMIP server when enabled. |
| **Change Server** | Moves existing keys from the current key server to a new key server when enabled. When switching to a different key server, enable key synchronization, then select this setting, update the key server connection configuration, and click **Save**. |
| **Validate Connection** | Tests the server connection and verify the chosen certificate chain when enabled. To test, configure the **Server** and **Port** settings, select a certificate, then select this setting, and click **Save**. |
| **Force Clear** | Cancels any pending key synchronization when selected. |
{{< /truetable >}}