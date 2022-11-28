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

TrueNAS can act as a Certificate Authority (CA). When encrypting SSL or TLS connections to the TrueNAS system, you can import an existing CA or create a CA and certificate on the TrueNAS system. The certificate will appear in the drop-down menus for services that support SSL or TLS. 

Go to **System > CAs** and click **ADD**. Name the CA, then choose the **Type**. The three type options are *Internal CA*, *Intermediate CA*, and *Import CA*. The process for each type is slightly different.

## Internal CA

### Identifier and Type

Set *Internal CA* as the **Type**. 

You can select a profile for the CA to auto-fill options like **Key Type**, **Key Length**, **Digest Algorithm**. Otherwise, you must set options manually.

![Internal CA Identifier Type](/images/CORE/12.0/InternalCAIdentifierType.png)

### Certificate Options

1. Select a **Key Type** from the drop-down. We recommend the *RSA* key type. 
2. Select the **Key Length**. We recommend a minimum of *2048* for security reasons. 
3. Select a **Digest Algorithm**. We recommend *SHA256*. 
4. Enter the **Lifetime** of the CA in days to set how long the CA will remain valid.

![Internal CA Certificate Options](/images/CORE/12.0/InternalCACertificateOptions.png)

### Certificate Subject

1. Fill out the geographic information by entering the **Country**, **Locality**, **Organizational Unit** (optional), **Common Name**, **State**, **Organization**, **Email**, and **Subject Alternate Names**. 
2. The **Common Name** is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![SMBShareOpts](/images/CORE/12.0/InternalCACertificateSubject.png)

### Basic Constraints

1. If you would like to have **Basic Constraints**, set **Enabled** to see more options. 
2. Set a **Path Length** to determine how many non-self-issued intermediate certificates can follow the certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select one or more **Basic Constraints Config**s.

![Internal CA Basic Constraints](/images/CORE/12.0/InternalCABasicConstraints.png)

### Authority Key Identifier

If you want an **Authority Key Identifier**, set it to **Enabled**, then select one or more **Authority Key Config**s.

![Internal CA Authority Key Identifier](/images/CORE/12.0/InternalCAAuthorityKeyIdentifier.png)

### Key Usage

TrueNAS uses Extended Key Usage for end-entity certificates. 

1. If you want to utilize **Extended Key Usage**, set it to **Enabled**, then select one or more usages for the public key from the **Usages** drop-down.
2. Enable **Critical Extension** if you want to identify this extension as critical for the certificate. Do not enable **Critical Extension** if **Usages** contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint info >}}
Using **Extended Key Usage** and **Key Usage** extensions requires that the certificate purpose is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

![Internal Certificate Key Usage](/images/CORE/12.0/InternalCertificateKeyUsage.png)

## Intermediate CA

### Identifier and Type

Select *Intermediate CA* as the *Type*. 

You can select a profile for the CA to auto-fill options like *Key Type*, *Key Length*, *Digest Algorithm*. Otherwise, you must set options manually.

![Intermediate CA Identifier Type](/images/CORE/12.0/IntermediateCAIdentifierType.png)

### Certificate Options

1. Select a **Signing Certificate Authority** from the drop-down.
2. Select a **Key Type** from the drop-down. We recommend the *RSA* key type. 
3. Select the **Key Length**. We recommend a minimum of *2048* for security reasons. 
4. Select a **Digest Algorithm**. We recommend *SHA256*. 
5. Enter the **Lifetime** of the CA in days to set how long the CA will remain valid.

![Intermediate CA Certificate Options](/images/CORE/12.0/IntermediateCACertificateOptions.png)

### Certificate Subject

1. Fill out the geographic information by entering the **Country**, **Locality**, **Organizational Unit** (optional), **Common Name**, **State**, **Organization**, **Email**, and **Subject Alternate Names**. 
2. The **Common Name** is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![Intermediate CA Certificate Subject](/images/CORE/12.0/IntermediateCACertificateSubject.png)

### Basic Constraints

1. If you would like to have **Basic Constraints**, set **Enabled** to see more options. 
2. Set a **Path Length** to determine how many non-self-issued intermediate certificates can follow the certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select one or more **Basic Constraints Config**s.

![Internal CA Basic Constraints](/images/CORE/12.0/InternalCABasicConstraints.png)

### Authority Key Identifier

If you want an **Authority Key Identifier**, set it to **Enabled**, then select one or more **Authority Key Config**s.

![Internal CA Authority Key Identifier](/images/CORE/12.0/InternalCAAuthorityKeyIdentifier.png)

### Key Usage

TrueNAS uses Extended Key Usage for end-entity certificates. 

1. If you want to utilize **Extended Key Usage**, set it to **Enabled**, then select one or more usages for the public key from the **Usages** drop-down.
2. Enable **Critical Extension** if you want to identify this extension as critical for the certificate. Do not enable **Critical Extension** if **Usages** contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint info >}}
Using **Extended Key Usage** and **Key Usage** extensions requires that the certificate purpose is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

## Import CA

### Identifier and Type

Select **Import a CA** as the **Type**. 

![Import CA Identifier Type](/images/CORE/12.0/ImportCAIdentifierType.png)

### Certificate Subject

1. Copy the certificate for the CA you want to import and paste it into the **Certificate** field.
2. Paste the certificate **Private Key** when available. Provide a key at least 1024 bits long.
3. Enter and confirm the Private Key **Passphrase**.

![Import CA Certificate Subject](/images/CORE/12.0/ImportCACertificateSubject.png)

{{< taglist tag="corecertificates" limit="10" >}}
