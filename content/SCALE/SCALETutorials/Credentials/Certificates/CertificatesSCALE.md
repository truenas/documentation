---
title: "Managing Certificates"
description: "This article provides information on adding or managing SCALE certificates."
weight: 10
aliases: 
tags:
 - scalecertificates
 - scalecas
 - scalecsrs
---

{{< toc >}}

The **Certificates** screen widgets display information for certificates, certificate signing requests (CSRs), certificate authorities(CAs), and ACME DNS-authenticators on the system. Users can also add new ones. 

TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can make custom certificates for authentication and validation while sharing data.

![CredentialsCertificatesScreen](/images/SCALE/22.02/CredentialsCertificatesScreen.png "Credentials Certificates Screen")

## Adding Certificates

By default, TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface. However, users can import and create more certificates by clicking **Add** in the **Certificates** window.

To add a new certificate:

Click **Add** on the **Certificates** widget to open the **Add Certficates** wizard.

First, enter a name as certificate identifier and select the type. 
The **Identifier and Type** step lets users name the certificate and choose whether to use it for internal or local systems, or import an existing certificate.     
Users can select a predefined certificate extension from the **Profiles** dropdown list.

Next, specify the certificate options. Select the **Key Type** as this selection changes the settings displayed.

The **Certificate Options** step provides options for choosing:
* The signing certificate authority (CSR) 
* The private key type to use (as well as the number of bits in the key the cryptographic algorithm uses)
* The cryptographic algorithm the certificate uses 
* How many days the certificate authority lasts.

Now enter the certificate location and basic information. 
The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

Lastly, select any extension types you want to apply. Selecting **Extended Key** displays settings for **Key Usage**. Select any extra constraints you need for your scenario. 
The **Extra Constraints** step contains certificate extension options.

| Setting | Description |
|---------|-------------|
| **Basic Constraints** | Limits the path length for a certificate chain.|
| **Authority Key Identifier** | Provides a means of identifying the public key corresponding to the private key used to sign a certificate.|
| **Key Usage** | Defines the purpose of the public key contained in a certificate.|
| **Extended Key Usage** | Further refines key usage extensions. |

Review the certificate options. If you want to change something, click **Back** to reach the screen with the setting option you want to change, then click **Next** to advance to the **Confirm Options** step.

Click **Save** to add the certificate.

## Importing a Certificate

To import a certificate, select **Import Certificate** as the **Type** and name the certificate.

Next, if the CSR exists on your SCALE system, select **CSR exists on this system** and then select the CSR.

Copy/paste the certificate and private Keys into their fields, and enter and confirm the passphrase for the certificate if one exists.

Review the options, and then click **Save**.


{{< taglist tag="scalecertificates" limit="10" >}}