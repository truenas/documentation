---
title: "Creating Certificates"
description: "This article describes how to create certificates using TrueNAS CORE."
weight: 20
aliases:
  - /core/system/certificates
tags:
- corecertificates
- coreca
---

{{< toc >}}

By default, TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface. You can either import or create a Certificate or Signing Request by navigating to **System > Certificates** and clicking *ADD*. Enter the name for the certificate, then choose the *Type*. The four options are *Internal Certificate*, *Certificate Signing Request* (CSR), *Import Certificate*, and *Import Certificate Signing Request*. The process for each type is slightly different.

## Internal Certificate

### Identifier and Type

Select *Internal Certificate* as the **Type**. 

You can select a profile for the CA to auto-fill options like **Key Type**, **Key Length**, **Digest Algorithm**. Otherwise, you must set options manually.

![Create Certificate Identifier Type](/images/CORE/12.0/CreateCertificateIdentifierType.png)

### Certificate Options

1. Select a **Signing Certificate Authority** from the drop-down.
2. Select a **Key Type** from the drop-down. We recommend the *RSA* key type. 
3. Select the **Key Length**. We recommend a minimum of *2048* for security reasons. 
4. Select a **Digest Algorithm**. We recommend *SHA256*. 
5. Enter the **Lifetime** of the CA in days to set how long the CA will remain valid.

![Create Certificate Certificate Options](/images/CORE/12.0/CreateCertificateCertificateOptions.png)

### Certificate Subject

1. Fill out the geographic information by entering the **Country**, **Locality**, **Organizational Unit** (optional), **Common Name**, **State**, **Organization**, **Email**, and **Subject Alternate Names**. 
2. The **Common Name** is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![Create Certificate Certificate Options](/images/CORE/12.0/CreateCertificateCertificateOptions.png)

### Basic Constraints

1. If you would like to have **Basic Constraints**, set **Enabled** to see more options. 
2. Set a **Path Length** to determine how many non-self-issued intermediate certificates can follow the certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select one or more **Basic Constraints Config**s.

![Create Certificate Basic Constraints](/images/CORE/12.0/CreateCertificateBasicConstraints.png)

### Authority Key Identifier

If you want an **Authority Key Identifier**, set it to **Enabled**, then select one or more **Authority Key Config**s.

![Create Certificate Authority Key Identifier](/images/CORE/12.0/CreateCertificateAuthorityKeyIdentifier.png)

### Key Usage

TrueNAS uses Extended Key Usage for end-entity certificates. 

1. If you want to utilize **Extended Key Usage**, set it to **Enabled**, then select one or more usages for the public key from the **Usages** drop-down.
2. Enable **Critical Extension** if you want to identify this extension as critical for the certificate. Do not enable **Critical Extension** if **Usages** contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint type=note >}}
Using **Extended Key Usage** and **Key Usage** extensions requires that the certificate purpose is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

![Create Certificate Key Usage](/images/CORE/12.0/CreateCertificateKeyUsage.png)

## Certificate Signing Request

### Identifier and Type

1. Select *Certificate Signing Request* as the **Type**. 
2. You can select a profile for the CA to auto-fill options like **Key Type**, **Key Length**, **Digest Algorithm**. Otherwise, you must set options manually.

![Create CSA Identifier Type](/images/CORE/12.0/CreateCSAIdentifierType.png)

### Certificate Options

1. Select a **Key Type** from the drop-down. We recommend the *RSA* key type. 
2. Select a **Digest Algorithm**. We recommend *SHA256*. 

![Create CSA Certificate Options](/images/CORE/12.0/CreateCSACertificateOptions.png)

### Certificate Subject

1. Fill out the geographic information by entering the **Country**, **Locality**, **Organizational Unit** (optional), **Common Name**, **State**, **Organization**, **Email**, and **Subject Alternate Names**. 
2. The **Common Name** is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![Create CSA Certificate Subject](/images/CORE/12.0/CreateCSACertificateSubject.png)

### Basic Constraints

1. If you would like to have **Basic Constraints**, set **Enabled** to see more options. 
2. Set a **Path Length** to determine how many non-self-issued intermediate certificates can follow the certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select one or more **Basic Constraints Config**s.

![Create CSA Basic Constraints](/images/CORE/12.0/CreateCSABasicConstraints.png)

### Authority Key Identifier

If you want an **Authority Key Identifier**, set it to **Enabled**, then select one or more **Authority Key Config**s.

![Create CSA Authority Key Identifier](/images/CORE/12.0/CreateCSAAuthorityKeyIdentifier.png)

### Key Usage

TrueNAS uses Extended Key Usage for end-entity certificates. 

1. If you want to utilize **Extended Key Usage**, set it to **Enabled**, then select one or more usages for the public key from the **Usages** drop-down.
2. Enable **Critical Extension** if you want to identify this extension as critical for the certificate. Do not enable **Critical Extension** if **Usages** contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint type=note >}}
Using **Extended Key Usage** and **Key Usage** extensions requires that the certificate purpose is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

![Create CSA Key Usage](/images/CORE/12.0/CreateCSAKeyUsage.png)

## Import Certificate

### Identifier and Type

Select *Import Certificate* as the **Type**. 

![Import Certificate Identifier Type](/images/CORE/12.0/ImportCertificateIdentifierType.png)

### Certificate Options

If you want to import a certificate for a CSR that was previously added, enable **CSR exists on this system**, then select one from the drop-down. 

![Import Certificate Certificate Options](/images/CORE/12.0/ImportCertificateCertificateOptions.png)

### Certificate Subject

1. Copy the certificate for the CA you want to import and paste it into the **Certificate** field.
2. Paste the certificate **Private Key** when available. Provide a key at least 1024 bits long.
3. Enter and confirm the Private Key **Passphrase**.

![Import Certificate Certificate Subject](/images/CORE/12.0/ImportCertificateCertificateSubject.png)

## Import Certificate Signing Request

### Identifier and Type

Select *Import Certificate* as the **Type**. 

![Import CSA Identifier Type](/images/CORE/12.0/ImportCSAIdentifierType.png)

### Certificate Subject

1. Copy the certificate for the CA you want to import and paste it into the **Certificate** field.
2. Paste the certificate **Private Key** when available. Provide a key at least 1024 bits long.
3. Enter and confirm the Private Key **Passphrase**.

![Import CSA Certificate Subject](/images/CORE/12.0/ImportCSACertificateSubject.png)  

{{< taglist tag="corecertificates" limit="10" >}}
