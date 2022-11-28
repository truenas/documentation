---
title: "Configuring KMIP"
description: "This article describes how to configure KMIP on TrueNAS CORE Enterprise." 
weight: 170
tags:
- corekmip
- corelicense
---

{{< hint info >}}
KMIP is only available for TrueNAS Enterprise licensed systems.
Contact the [iXsystems Sales Team](mailto:sales@ixsystems.com) to inquire about purchasing TrueNAS Enterprise licenses.
{{< /hint >}}

{{< toc >}}

The [Key Management Interoperability Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is an extensible client/server communication protocol for storing and maintaining keys, certificates, and secret objects.
KMIP on TrueNAS Enterprise integrates the system within an existing centralized key management infrastructure and uses a single trusted source for creating, using, and destroying SED passwords and ZFS encryption keys.

Keys can be created on a single server and then retrieved by TrueNAS.
Keys wrapped within keys, symmetric, and asymmetric keys are supported.
Alternately, KMIP can be used for clients to ask a server to encrypt or decrypt data without the client ever having direct access to a key.
KMIP also can be used to sign certificates.

{{< expand "Requirements" "v" >}}
You need to have a KMIP server available with certificate authorities and certificates you can import into TrueNAS.
Have the KMIP server configuration open in a separate browser tab or copy the KMIP server certificate string and private key string to later paste into the TrueNAS web interface.
This helps simplify the TrueNAS connection process.
{{< /expand >}}

## Connecting TrueNAS to a KMIP Server

To connect TrueNAS to a KMIP server, import a [Certificate Authority (CA)]({{< relref "CAs.md" >}}) and [Certificate]({{< relref "/CORE/UIReference/System/Certificates.md" >}}) from the KMIP server, then configure the KMIP options.

{{< expand "How do I import these?" "v" >}}
Log in to the TrueNAS web interface and go to **System** > **CAs** and click **ADD**.
In the **Type** drop down menu, select **Import CA**.
Enter a memorable **Name** for the CA, then paste the KMIP server **Certificate** and **Private Key** strings into the related fields.
Leave the **Passphrase** empty and click **Submit**.

Next, go to **System** > **Certificates** and click **ADD**.
In the **Type** drop down menu, select **Import Certificate**.
Enter a memorable **Name** for the certificate and paste the KMIP server **Certificate** and **Private Key** strings into the related TrueNAS fields.
Leave the **Passphrase** empty and click **SUBMIT**.
{{< /expand >}}

For security reasons, we strongly recommend protecting the CA and Certificate values.

### Configuring KMIP in TrueNAS

Go to **System > KMIP**.

![SystemKMIP](/images/CORE/12.0/SystemKMIP.png "KMIP Options")

Enter the central key server *Server* host name or IP address and the number of an open connection *Port* on the key server.
Select the *Certificate* and *Certificate Authority* that you imported from the central key server.
To ensure the Certificate and CA chain is correct, set *Validate Connection* and click *SAVE*.

When the certificate chain verifies, choose the encryption values, SED passwords, or ZFS data pool encryption keys to move to the central key server.
Set *Enabled* to begin moving the passwords and keys immediately after clicking *SAVE*.

Refresh the **KMIP** screen to show the current **KMIP Key Status**.

![SystemKMIPKeyStatus](/images/CORE/12.0/SystemKMIPKeyStatus.png "Example Key Synced")

If you want to cancel a pending key synchronization, set *Force Clear* and click *SAVE*.

{{< taglist tag="corekmip" limit="10" >}}
