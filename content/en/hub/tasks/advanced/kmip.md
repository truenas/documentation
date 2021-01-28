---
title: "Enabling KMIP"
description: "How to integrate TrueNAS Enterprise key management with a Key Management Interoperability Protocol (KMIP) server." 
tags: ["KMIP", "encryption", "certificates", "TrueNAS Enterprise"]
---

{{% pageinfo %}}
KMIP is only available for TrueNAS Enterprise licensed systems. Please contact the [iXsystems Sales Team](mailto:sales@ixsystems.com) to inquire about activating KMIP functionality.
{{% /pageinfo %}}

The [Key Management Interoperability Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is an extensible client/server communication protocol for the storage and maintenance of keys, certificates, and secret objects.
KMIP on TrueNAS Enterprise is used to integrate the system within an existing centralized key management infrastructure and use a single trusted source for creating, using, and destroying SED passwords and ZFS encryption keys.
Keys can be created on a single server and then retrieved by TrueNAS.
Keys wrapped within keys, symmetric, and asymmetric keys are supported.
Alternately, KMIP can be used for clients to ask a server to encrypt or decrypt data without the client ever having direct access to a key.
KMIP also can be used to sign certificates.

## Requirements

You will need to have a KMIP server available with Certificates that can be imported into TrueNAS.
It's recommended to have the KMIP server configuration open in a separate browser tab or to copy the KMIP server certificate string and private key string to later paste into the TrueNAS web interface.
This helps simplify the TrueNAS connection process.

## Connecting TrueNAS to a KMIP Server

To connect TrueNAS to a KMIP server, import a Certificate Authority (CA) and Certificate from the KMIP server, then configure the KMIP options.
For security reasons, it is strongly recommended to protect the CA and Certificate values.

### Importing Certificates

Log in to the TrueNAS web interface and go to **System** > **CAs** and click **Add**.
In the **Type** drop down menu, select *Import CA*.
Enter a memorable **Name** for the CA, then paste the KMIP server **Certificate** and **Private Key** strings into the related fields.
Leave the **Passphrase** empty and click **Submit**.

Next, go to **System** > **Certificates** and click **ADD**.
In the **Type** drop down menu, select *Import Certificate*.
Enter a memorable **Name** for the Certificate and paste KMIP server **Certificate** and **Private Key** strings into the related TrueNAS fields.
Leave the **Passphrase** empty and click **Submit**.

### Configuring KMIP in TrueNAS

Open  **System** > **KMIP** to complete the configuration.

<img src="/images/TN12.0-KMIP.png">
<br><br>

Enter the central key server **Server** host name or IP address and the number of an open connection port on the key server.
Select the **Certificate** and **Certificate Authority** that were just imported from the central key server.
To check that the Certificate and CA chain is correct, set **Validate Connection** and click **SAVE**.

When the Certificate chain has been verified, set which encryption values will be moved to the central key server, SED passwords and/or ZFS data pool encryption keys.
Set **Enabled** to begin moving the passwords and keys immediately after clicking **SAVE**.
Refreshing the KMIP page shows the current KMIP Key Status.

<img src="/images/TN12.0-KMIPSynced.png">
<br><br>

To cancel a pending key synchronization, set **Force Clear** and click **SAVE**.
