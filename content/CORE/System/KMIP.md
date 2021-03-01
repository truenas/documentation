---
title: "KMIP"
weight: 180
---

{{< hint info >}}
KMIP is only available for TrueNAS Enterprise licensed systems.
Please contact the [iXsystems Sales Team](mailto:sales@ixsystems.com) to inquire about purchasing TrueNAS Enterprise licenses.
{{< /hint >}}

{{< toc >}}

The [Key Management Interoperability Protocol (KMIP)](https://docs.oasis-open.org/kmip/spec/v1.1/os/kmip-spec-v1.1-os.html) is an extensible client/server communication protocol for the storage and maintenance of keys, certificates, and secret objects.
KMIP on TrueNAS Enterprise is used to integrate the system within an existing centralized key management infrastructure and use a single trusted source for creating, using, and destroying SED passwords and ZFS encryption keys.

Keys can be created on a single server and then retrieved by TrueNAS.
Keys wrapped within keys, symmetric, and asymmetric keys are supported.
Alternately, KMIP can be used for clients to ask a server to encrypt or decrypt data without the client ever having direct access to a key.
KMIP also can be used to sign certificates.

{{< expand "Requirements" "v" >}}
You will need to have a KMIP server available with certificate authorities and certificates that can be imported into TrueNAS.
Have the KMIP server configuration open in a separate browser tab or copy the KMIP server certificate string and private key string to later paste into the TrueNAS web interface.
This helps simplify the TrueNAS connection process.
{{< /expand >}}

## Connecting TrueNAS to a KMIP Server

To connect TrueNAS to a KMIP server, import a [Certificate Authority (CA)]() and [Certificate]() from the KMIP server, then configure the KMIP options.

{{< expand "How do I import these?" "v" >}}
Log in to the TrueNAS web interface and go to **System** > **CAs** and click *ADD*.
In the *Type* drop down menu, select *Import CA*.
Enter a memorable *Name* for the CA, then paste the KMIP server *Certificate* and *Private Key* strings into the related fields.
Leave the *Passphrase* empty and click *Submit*.

Next, go to **System** > **Certificates** and click *ADD*.
In the *Type* drop down menu, select *Import Certificate*.
Enter a memorable *Name* for the certificate and paste the KMIP server *Certificate* and *Private Key* strings into the related TrueNAS fields.
Leave the *Passphrase* empty and click *Submit*.
{{< /expand >}}

For security reasons, it is strongly recommended to protect the CA and Certificate values.

### Configuring KMIP in TrueNAS

Go to **System > KMIP** to complete the configuration.

![SystemKMIP](/images/CORE/12.0/SystemKMIP.png "KMIP Options")

Enter the central key server *Server* host name or IP address and the number of an open connection *Port* on the key server.
Select the *Certificate* and *Certificate Authority* that were just imported from the central key server.
To check that the Certificate and CA chain is correct, set *Validate Connection* and click *SAVE*.

When the certificate chain is verified, choose the encryption values, SED passwords, or ZFS data pool encryption keys to move to the central key server.
Set *Enabled* to begin moving the passwords and keys immediately after clicking *SAVE*.

Refreshing the **KMIP** page shows the current **KMIP Key Status**.

![SystemKMIPKeyStatus](/images/CORE/12.0/SystemKMIPKeyStatus.png "Example Key Synced")

To cancel a pending key synchronization, set *Force Clear* and click *SAVE*.
