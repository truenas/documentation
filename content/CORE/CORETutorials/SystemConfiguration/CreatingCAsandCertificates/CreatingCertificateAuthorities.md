---
title: "Creating Certificate Authorities (CAs)"
description: "This article describes how to create or import certificates using TrueNAS CORE."
weight: 10
aliases:
  - /core/system/cas
tags:
- corecertificates
- coreca
---

{{< toc >}}

TrueNAS can act as a certificate authority (CA). 
When encrypting SSL or TLS connections to the TrueNAS system, you can import an existing CA or create a CA and certificate on the TrueNAS system. 
The certificate appears on the dropdown menus for services that support SSL or TLS. 

Go to **System > CAs** and click **ADD**. Enter a name for the CA, then choose the type from the **Type** dropdown list of three, **Internal CA**, **Intermediate CA**, or **Import CA**. The process to add a CA for each type is slightly different.

## Creating CA

A CA must exist in CORE to add an Intermediate CA. This can be an internal or imported CA.

To create a CA:

1. Enter or select the **Identifier and Type** setting options.
   
   ![Internal CA Identifier Type](/images/CORE/12.0/InternalCAIdentifierType.png)

   a. Enter a name for this CA.
   b. Select **Internal CA** from the **Type** dropdown list to create an internal certificate. 
      Select **Intermediate CA** to create an intermediate certificate. This displays the **Signing Certificate Authority** field in **Certificate Options**.
   c. Select a profile for the CA to auto-fill options in **Key Type**, **Key Length**, **Digest Algorithm**. Otherwise you must manually enter options.
  
2. Select the **Certificate Options**.
   
   ![Internal CA Certificate Options](/images/CORE/12.0/InternalCACertificateOptions.png)

   a. Select a **Key Type** from the dropdown list. We recommend the **RSA** key type. Use **EC** for elliptic curve certificates.
   b. Select the **Key Length**. We recommend a minimum of **2048** for security reasons. 
   c. Select a **Digest Algorithm**. We recommend **SHA256**.
   d. Enter the **Lifetime** of the CA in days to set how long the CA remains valid.

3. Enter or select the **Certificate Subject** settings.
   
   ![SMBShareOpts](/images/CORE/12.0/InternalCACertificateSubject.png)

   a. Enter the geographic information in **Country**, **Locality**, **Organizational Unit** (optional), **Common Name**, **State**, **Organization**, **Email**, and **Subject Alternate Names**. 
   b. (Optional) Enter a [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) that is unique within a certificate chain in **Common Name**. 

4. (Optional) Select **Basic Constraints** settings.
   
   ![Internal CA Basic Constraints](/images/CORE/12.0/InternalCABasicConstraints.png)

   Select **Enabled** if you would like to use basic constraints. This adds the **Path Length** and **Basic Constraints Config** options. 

   Enter a numberic value in **Path Length** to determine how many non-self-issued intermediate certificates can follow the certificate in a valid certification path. 
   Entering **0** allows a single additional certificate to follow in the certificate path.

   Select an option from the **Basic Constraints Config** dropdown list. Select **CA** to use a certificate authority. 
   Selecting **Critical Extension** can result in rejection of the certificate by the system that is using the certificate if that system does not recognize the extension.

5. (Optional) Select **Extended Key Usage** settings.
     
6. (Optional) Select **Authority Key Identifier** settings.
   
   ![Internal CA Authority Key Identifier](/images/CORE/12.0/InternalCAAuthorityKeyIdentifier.png)

   Enabling **Authority Key Config** adds the authority key identifier extension which provides a means of identifying the public key corresponding to the private key used to sign the certificate. Used when an issue has multiple signing keys, possibly due to multiple concurrent key pairs or due to changeover. Options are **Authority Cert Issuer** or **Critical Extension**.

7. (Optional) Select **Key Usage** settings to use extended key usage for end-entity certificates.
   
   ![Internal Certificate Key Usage](/images/CORE/12.0/InternalCertificateKeyUsage.png)

   After selecting **Enable**, select one or more usages for the public key from the **Usages** dropdown list. 
   Select **Critical Extension** if you want to identify this extension as critical for the certificate. 
   Do not enable **Critical Extension** if **Usages** contains **ANY_EXTENDED_KEY_USAGE**. 

   {{< hint info >}}
   Using **Extended Key Usage** and **Key Usage** extensions requires that the certificate purpose is consistent with both extensions. 
   See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
   {{< /hint >}}
 
8. Click **Submit** to create the CA.

## Importing a CA
Use this procedure to import a CA.

1. Enter a name for this certificate. 
   
   ![Import CA Identifier Type](/images/CORE/12.0/ImportCAIdentifierType.png)

2. Select **Import CA** from the **Type** dropdown list. 
  
3. Copy the certificate for the CA you want to import and paste it into the **Certificate** field.  

4. Paste the certificate private key of at least 1024 bits in length into **Private Key** when available. 

5. Enter and confirm the passphrase for the private key into **Passphrase** and **Confirm Passphrase**.
   
   ![Import CA Certificate Subject](/images/CORE/12.0/ImportCACertificateSubject.png)

6. Click **Submit**.

## Deleting a CA

Before deleting a CA, verify it is not used by another service such as S3, FTP, etc. You cannot delete a CA when in use by other services.

Also, before you can delete a CA you need to delete certificates issued by the CA or those relying on the CA before you can delete it. If you receive an error that mentions foreign keys reference, check the certificates your system for any using the CA you want to delete. 


{{< taglist tag="corecertificates" limit="10" >}}
