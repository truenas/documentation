---
title: "Managing Certificates"
description: "Provides information on adding or managing certificates in TrueNAS."
weight: 10
aliases: 
tags:
 - certificates
 - csr
keywords:
- enterprise storage solution
- nas storage 
---

The **Certificates** screen widgets display information for certificates, certificate signing requests (CSRs), certificate authorities(CAs), and ACME DNS-authenticators configured on the system, and provide the ability to add new ones.
TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can make custom certificates for authentication and validation while sharing data.

{{< hint type=important >}}
Before creating a self-signed certificate in the system, first create a certificate authority. This is a necessary step in the self-signed certificate creation process, as it provides a trust anchor for the certificate in question.
{{< /hint >}}

![CredentialsCertificatesScreen](/images/SCALE/Credentials/CredentialsCertificatesScreen.png "Credentials Certificates Screen")

<!-- commenting out until ready to pubilicize TNC content in the Docs Hub 
## TrueNAS Connect Certificate

The TrueNAS Connect service automatically creates a default *truenas_connect_* certificate after registering your TrueNAS system in the TrueNAS Connect service.
The certificate shows in the **Certificates** widget on the **Credentials > Certificates** screen.

{{< trueimage src="/images/SCALE/Credentials/CertificatesScreenWithTNCCert.png" alt="TrueNAS Connect Certificate" id="TrueNAS Connect Certificate" >}}

This certificate provides secure SSL access between the TrueNAS server and the TrueNAS Connect service.
If not listed on the **Certificates** screen, choose the truenas_default certificate.
For apps where certificates are used, you should see and be able to select the TNC certificate and get a full secure connection for the apps.
-->

## Adding Certificates

By default, TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can import and create more certificates by clicking **Add** in the **Certificates** window.

To add a new certificate:

Click **Add** on the **Certificates** widget to open the **Add Certficates** wizard.

First, enter a name as certificate identifier and select the type.
The **Identifier and Type** step lets users name the certificate and choose whether to use it for internal or local systems, or import an existing certificate.
Users can also select a predefined certificate extension from the **Profiles** dropdown list.

Next, specify the certificate options. Select the **Key Type** as this selection changes the settings displayed.
The **Certificate Options** step provides options for choosing the signing certificate authority (CSR), the type of private key type to use (as well as the number of bits in the key used by the cryptographic algorithm), the cryptographic algorithm the certificate uses, and how many days the certificate authority lasts.

Now enter the certificate location and basic information.
The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

Lastly, select any extension types you want to apply. Selecting **Extended Key** displays settings for **Key Usage** settings as well. Select any extra constraints you need for your scenario.
The **Extra Constraints** step contains certificate extension options.

* **Basic Constraints** when enabled this limits the path length for a certificate chain.
* **Authority Key Identifier** when enabled provides a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage** when enabled defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** when enabled it further refines key usage extensions.

Review the certificate options. If you want to change something Click **Back** to reach the screen with the setting option you want to change, then click **Next** to advance to the **Confirm Options** step.

Click **Save** to add the certificate.

## Importing a Certificate

To import a certificate, first select **Import Certificate** as the **Type** and name the certificate.

Next, if the CSR exists on your TrueNAS system, select **CSR exists on this system** and then select the CSR.

Copy/paste the certificate and private Keys into their fields, and enter and confirm the passphrase for the certificate if one exists.

Review the options, and then click **Save**.
