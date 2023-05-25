---
title: "KMIP Screen"
description: "This article describes the fields in the KMIP Key Status screen on TrueNAS SCALE Enterprise."
weight: 75
aliases:
tags:
- scalekmip
- scaleenterprise
---

{{< enterprise >}}
KMIP on TrueNAS SCALE Enterprise is used to integrate the system within an existing centralized key management infrastructure and use a single trusted source for creating, using, and destroying SED passwords and ZFS encryption keys.
{{< /enterprise >}}
The **KMIP** screen has two areas, **KMIP Key Status** that displays keys synced between a KMIP server and TrueNAS database and **KMIP Server** with the KMIP configuration settings.

{{< trueimage src="/images/SCALE/22.12/KMIPScreen.png" alt="KMIP Screen" id="1 KMIP Screen" >}}

### KMIP Key Status
The **KMIP Key Status** area of the **KMIP** screen lists ZFS/SED keys synced between a KMIP server and the TrueNAS database. 
**Sync Keys** syncs keys between the KMIP server and TrueNAS database. Activates when a KMIP key sync is pending. 

**Clear Sync Keys** clears synced keys. Activates when a KMIP key sync is pending.

### KMIP Server Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Server** | Enter the host name or IP address of the central key server. |
| **Port** | Enter the connection port number on the central key server. Default value **5696** is the kmip.truenas.com port number. |
| **Certificate** | Select an existing certificate or enter a new one to use for key server authentication. Requires a valid certificate to verify the key server connection. Warning: for security reasons, protect the certificate used for key server authentication. |
| **Certificate Authority** | Select an certificate authority (CA) or enter a new one to use for connecting to the key server. Requires a valid CA public certificate to authenticate the connection. Warning: for security reasons, protect the certificate authority used for key server authentication. |
| **Manage SED Passwords** | Select to manage self-encrypting drive (SED) passwords with KMIP. Enabling this option allows the key server to manage creating or updating the global SED password, creating or updating individual SED passwords, and retrieving SED passwords when SEDs are unlocked. Disabling this option leaves SED password management with the local system. |
| **Manage ZFS Keys** | Select to use the KMIP server to manage ZFS encrypted dataset keys. The key server stores, applies, and destroys encryption keys whenever an encrypted dataset is created, when an existing key is modified, an encrypted dataset is unlocked, or an encrypted dataset is removed. Disabling this option leaves all encryption key management with the local system. |
| **Enabled** | Select to activate KMIP configuration and begin syncing keys with the KMIP server. |
| **Change Server** | Select to move existing keys from the current key server to a new key server. To switch to a different key server, enable key synchronization, then select this setting, update the key server connection configuration, and click **Save**. |
| **Validate Connection** | Select to test the server connection and verify the chosen certificate chain. To test, configure the **Server** and **Port** values, select a **Certificate** and **Certificate Authority**, select this setting, and click **Save**. |
| **Force Clear** | Select to cancel any pending key synchronization. |
{{< /truetable >}}

{{< taglist tag="scalekmip" limit="10" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
