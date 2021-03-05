---
title: "CAs"
weight: 155
---

{{< toc >}}

TrueNAS can act as a Certificate Authority (CA). When encrypting SSL or TLS connections to the TrueNAS system, you can either import an existing CA, or create a CA and certificate on the TrueNAS system. This certificate will appear in the drop-down menus for services that support SSL or TLS. To add or import a CA, go to **System > CAs** and click *ADD*. Enter the name for the CA, then choose the *Type*. The three type options are *Internal CA*, *Intermediate CA*, and *Import CA*. The process for each type is slightly different. Use the tabs below to jump to the appropriate section based on your desired type.

{{< tabs "Certificate Authority Types" >}}
{{< tab "Internal CA" >}}
### Identifier and Type

Select *Internal CA* as the *Type*. 

If you want, you can select a profile for the CA. Selecting a profile automatically sets certain options such as *Key Type*, *Key Length*, *Digest Algorithm*, and more. If you would like to set each option manually, do not select a profile from the *Profiles* dropdown. 

![Internal CA Identifier Type](/images/CORE/12.0/InternalCAIdentifierType.png)

### Certificate Options

1. Select a *Key Type* from the dropdown. We recommend the *RSA* key type. 
2. Select the *Key Length*. We recommend a minimum of *2048* for security reasons. 
3. Select a *Digest Algorithm*. We recommend *SHA256*. 
4. Enter the *Lifetime* of the CA in days to set how long the CA will remain valid.

![Internal CA Certificate Options](/images/CORE/12.0/InternalCACertificateOptions.png)

### Certificate Subject

1. Fill out the geographic information of the certificate by entering the *Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*, *Organization*, *Email*, and *Subject Alternate Names*. 
2. The *Common Name* is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![SMBShareOpts](/images/CORE/12.0/InternalCACertificateSubject.png)

### Basic Constraints

1. If you would like to have *Basic Constraints*, set them to *Enabled* and more options will appear. 
2. Set a *Path Length* to determine how many non-self-issued intermediate certificates can follow this certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select the *Basic Constraints Config*. You can select more than one from the dropdown.

![Internal CA Basic Constraints](/images/CORE/12.0/InternalCABasicConstraints.png)

### Authority Key Identifier

If you want an *Authority Key Identifier*, set it to *Enabled*, then select the *Authority Key Config*. You can select more than one from the dropdown.

![Internal CA Authority Key Identifier](/images/CORE/12.0/InternalCAAuthorityKeyIdentifier.png)

### Key Usage

Extended Key Usage is typically used for end entity certificates. 

1. If you want to utilize *Extended Key Usage*, set it to *Enabled*, then select the usage for the public key from the *Usages* dropdown. You can select multiple usages in the dropdown. 
2. Enable *Critical Extension* if you want to identify this extension as critical for the certificate. Do not enable *Critical Extension* if *Usages* contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint info >}}
Using both *Extended Key Usage* and *Key Usage* extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

![Internal Certificate Key Usage](/images/CORE/12.0/InternalCertificateKeyUsage.png)
{{< /tab >}}
{{< tab "Intermediate CA" >}}
### Identifier and Type

Select *Intermediate CA* as the *Type*. 

If you want, you can select a profile for the CA. Selecting a profile automatically sets certain options such as *Key Type*, *Key Length*, *Digest Algorithm*, and more. If you would like to set each option manually, do not select a profile from the *Profiles* dropdown. 

![Intermediate CA Identifier Type](/images/CORE/12.0/IntermediateCAIdentifierType.png)

### Certificate Options

1. Select a *Signing Certificate Authority* from the dropdown.
2. Select a *Key Type* from the dropdown. We recommend the *RSA* key type. 
3. Select the *Key Length*. We recommend a minimum of *2048* for security reasons. 
4. Select a *Digest Algorithm*. We recommend *SHA256*. 
5. Enter the *Lifetime* of the CA in days to set how long the CA will remain valid.

![Intermediate CA Certificate Options](/images/CORE/12.0/IntermediateCACertificateOptions.png)

### Certificate Subject

1. Fill out the geographic information of the certificate by entering the *Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*, *Organization*, *Email*, and *Subject Alternate Names*. 
2. The *Common Name* is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![Intermediate CA Certificate Subject](/images/CORE/12.0/IntermediateCACertificateSubject.png)

### Basic Constraints

1. If you would like to have *Basic Constraints*, set them to *Enabled* and more options will appear. 
2. Set a *Path Length* to determine how many non-self-issued intermediate certificates can follow this certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select the *Basic Constraints Config*. You can select more than one from the dropdown.

![Internal CA Basic Constraints](/images/CORE/12.0/InternalCABasicConstraints.png)

### Authority Key Identifier

If you want an *Authority Key Identifier*, set it to *Enabled*, then select the *Authority Key Config*. You can select more than one from the dropdown.

![Internal CA Authority Key Identifier](/images/CORE/12.0/InternalCAAuthorityKeyIdentifier.png)

### Key Usage

Extended Key Usage is typically used for end entity certificates. 

1. If you want to utilize *Extended Key Usage*, set it to *Enabled*, then select the usage for the public key from the *Usages* dropdown. You can select multiple usages in the dropdown. 
2. Enable *Critical Extension* if you want to identify this extension as critical for the certificate. Do not enable *Critical Extension* if *Usages* contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint info >}}
Using both *Extended Key Usage* and *Key Usage* extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

![Internal Certificate Key Usage](/images/CORE/12.0/InternalCertificateKeyUsage.png)
{{< /tab >}}
{{< tab "Import CA" >}}
### Identifier and Type

Select *Import a CA* as the *Type*. 

![Import CA Identifier Type](/images/CORE/12.0/ImportCAIdentifierType.png)

### Certificate Subject

1. Copy the certificate for the CA you want to import and paste it in the *Certificate* field.
2. Paste the *Private Key* associated with the Certificate when available. Provide a key at least 1024 bits long.
3. Enter and confirm the *Passphrase* for the Private Key.

![Import CA Certificate Subject](/images/CORE/12.0/ImportCACertificateSubject.png)
{{< /tab >}}
{{< /tabs >}}
