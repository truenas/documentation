---
title: "KMIP"
description: "Describes the fields in the KMIP Key Status screen on TrueNAS CORE Enterprise."
weight: 175
aliases:
  - /core/system/kmip
tags:
- corekmip
- corelicense
---

{{< enterprise >}}
KMIP is only available for TrueNAS Enterprise licensed systems.
Contact the [iXsystems Sales Team](mailto:sales@ixsystems.com) to inquire about purchasing TrueNAS Enterprise licenses.
{{< /enterprise >}}

KMIP on TrueNAS Enterprise is used to integrate the system within an existing centralized key management infrastructure and use a single trusted source for creating, using, and destroying SED passwords and ZFS encryption keys.

![SystemKMIP](/images/CORE/12.0/SystemKMIP.png "KMIP Options")

## KMIP Server

{{< truetable >}}
| Name | Description |
|------|------|
| **Server** | Host name or IP address of the central key server. |
| **Port** | Connection port number on the central key server. |
| **Certificate** | Certificate to use for key server authentication. A valid certificate is required to verify the key server connection. WARNING: for security reasons, please protect the Certificate used for key server authentication. |
| **Certificate Authority** | Certificate Authority (CA) to use for connecting to the key server. A valid CA public certificate is required to authenticate the connection. WARNING: for security reasons, please protect the Certificate Authority used for key server authentication. |
| **Manage SED Passwords** | Self-Encrypting Drive (SED) passwords can be managed with KMIP. Enabling this option allows the key server to manage creating or updating the global SED password, creating or updating individual SED passwords, and retrieving SED passwords when SEDs are unlocked. Disabling this option leaves SED password management with the local system. |
| **Manage ZFS Keys** | Use the KMIP server to manage ZFS encrypted dataset keys. The key server stores, applies, and destroys encryption keys whenever an encrypted dataset is created, when an existing key is modified, an encrypted dataset is unlocked, or an encrypted dataset is removed. Unsetting this option leaves all encryption key management with the local system. |
| **Enabled** | Activate KMIP configuration and begin syncing keys with the KMIP server. |
| **Change Server** | Move existing keys from the current key server to a new key server. To switch to a different key server, key synchronization must be Enabled, then enable this setting, update the key server connection configuration, and click SAVE. |
| **Validate Connection** | Tests the server connection and verifies the chosen Certificate chain. To test, configure the Server and Port values, select a Certificate and Certificate Authority, enable this setting, and click SAVE. |
| **Force Clear** | Cancel any pending Key synchronization. |
{{< /truetable >}}

{{< taglist tag="corekmip" limit="10" >}}
