---
title: "Configuring KMIP"
description: "Provides information on Key Management Interoperability Protocol (KMIP) in SCALE. Describes how to configure KMIP on TrueNAS SCALE Enterprise." 
weight: 70
tags:
- kmip
- enterprise
keywords:
- enterprise storage solution
- nas storage 
---

{{< enterprise >}}
KMIP is only available for TrueNAS SCALE Enterprise licensed systems.
Contact the [iXsystems Sales Team](mailto:sales@ixsystems.com) to inquire about purchasing TrueNAS Enterprise licenses.
{{< /enterprise >}}



The [Key Management Interoperability Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is an extensible client/server communication protocol for storing and maintaining keys, certificates, and secret objects.
KMIP on TrueNAS SCALE Enterprise integrates the system within an existing centralized key management infrastructure and uses a single trusted source for creating, using, and destroying SED passwords and ZFS encryption keys.

With KMIP, keys created on a single server are then retrieved by TrueNAS. 
KMIP supports keys wrapped within keys, symmetric, and asymmetric keys.
KMIP enables clients to ask a server to encrypt or decrypt data without the client ever having direct access to a key.
You can also use KMIP to sign certificates.

{{< expand "Requirements" "v" >}}
To simplify the TrueNAS connection process:

* Have a KMIP server available with certificate authorities and certificates you can import into TrueNAS. 
* Have the KMIP server configuration open in a separate browser tab or copy the KMIP server certificate string and private key string to later paste into the TrueNAS web interface.
{{< /expand >}}

## Connecting TrueNAS to a KMIP Server

To connect TrueNAS to a KMIP server, import a [certificate authority (CA)]({{< relref "AddCAsSCALE.md" >}}) and [Certificate]({{< relref "CertificatesSCALE.md" >}}) from the KMIP server, then configure the KMIP options.

{{< expand "How do I import these?" "v" >}}
Log into the TrueNAS web interface and go to **Credentials > Certificate**. 
Click **Add** on the **Certificate Authorities** widget. 
Select **Import CA** from the **Type** dropdown list. 
Enter a memorable name for the CA, then paste the KMIP server certificate in **Certificate** and the private key in **Private Key**. 
Leave **Passphrase** empty. 
Click **Save**.

Next, click **Add** on the **Certificates** widget. 
Select **Import Certificate** from the **Type** dropdown list. 
Enter a memorable name for the certificate, then paste the KMIP server certificate and private key strings into the related TrueNAS fields. 
Leave **Passphrase** empty. 
Click **Save**.
{{< /expand >}}

For security reasons, we strongly recommend protecting the CA and certificate values.

### Configuring KMIP in TrueNAS

Go to **Credentials > KMIP**.

{{< trueimage src="/images/SCALE/Credentials/KMIPScreen.png" alt="KMIP Screen" id="KMIP Screen" >}}

Enter the central key server host name or IP address in **Server** and the number of an open connection on the key server in **Port**.
Select the certificate and certificate authority that you imported from the central key server.
To ensure the certificate and CA chain is correct, click on **Validate Connection**. Click **Save**.

When the certificate chain verifies, choose the encryption values, SED passwords, or ZFS data pool encryption keys to move to the central key server.
Select **Enabled** to begin moving the passwords and keys immediately after clicking **Save**.

Refresh the KMIP screen to show the current **KMIP Key Status**.

If you want to cancel a pending key synchronization, select **Force Clear** and click **Save**.
