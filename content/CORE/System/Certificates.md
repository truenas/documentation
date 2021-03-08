---
title: "Certificates"
weight: 160
---

{{< toc >}}

By default, TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface. You can either import or create a Certificate or Signing Request by navigating to **System > Certificates** and clicking *ADD*. Enter the name for the certificate, then choose the *Type*. The four options are *Internal Certificate*, *Certificate Signing Request* (CSR), *Import Certificate*, and *Import Certificate Signing Request*. The process for each type is slightly different. Use the tabs below to jump to the appropriate section based on your desired type.

{{< tabs "Certificate Types" >}}
{{< tab "Internal" >}}
### Identifier and Type

Select *Internal Certificate* as the *Type*. 

If you want, you can select a profile for the CA. Selecting a profile automatically sets certain options such as *Key Type*, *Key Length*, *Digest Algorithm*, and more. If you would like to set each option manually, do not select a profile from the *Profiles* dropdown. 

![Create Certificate Identifier Type](/images/CORE/12.0/CreateCertificateIdentifierType.png)

### Certificate Options

1. Select a *Signing Certificate Authority* from the dropdown.
2. Select a *Key Type* from the dropdown. We recommend the *RSA* key type. 
3. Select the *Key Length*. We recommend a minimum of *2048* for security reasons. 
4. Select a *Digest Algorithm*. We recommend *SHA256*. 
5. Enter the *Lifetime* of the CA in days to set how long the CA will remain valid.

![Create Certificate Certificate Options](/images/CORE/12.0/CreateCertificateCertificateOptions.png)

### Certificate Subject

1. Fill out the geographic information of the certificate by entering the *Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*, *Organization*, *Email*, and *Subject Alternate Names*. 
2. The *Common Name* is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![Create Certificate Certificate Options](/images/CORE/12.0/CreateCertificateCertificateOptions.png)

### Basic Constraints

1. If you would like to have *Basic Constraints*, set them to *Enabled* and more options will appear. 
2. Set a *Path Length* to determine how many non-self-issued intermediate certificates can follow this certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select the *Basic Constraints Config*. You can select more than one from the dropdown.

![Create Certificate Basic Constraints](/images/CORE/12.0/CreateCertificateBasicConstraints.png)

### Authority Key Identifier

If you want an *Authority Key Identifier*, set it to *Enabled*, then select the *Authority Key Config*. You can select more than one from the dropdown.

![Create Certificate Authority Key Identifier](/images/CORE/12.0/CreateCertificateAuthorityKeyIdentifier.png)

### Key Usage

Extended Key Usage is typically used for end entity certificates. 

1. If you want to utilize *Extended Key Usage*, set it to *Enabled*, then select the usage for the public key from the *Usages* dropdown. You can select multiple usages in the dropdown. 
2. Enable *Critical Extension* if you want to identify this extension as critical for the certificate. Do not enable *Critical Extension* if *Usages* contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint info >}}
Using both *Extended Key Usage* and *Key Usage* extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

![Create Certificate Key Usage](/images/CORE/12.0/CreateCertificateKeyUsage.png)
{{< /tab >}}
{{< tab "Certificate Signing Request" >}}
### Identifier and Type

1. Select *Certificate Signing Request* as the *Type*. 
2. If you want, you can select a profile for the CA. Selecting a profile automatically sets certain options such as *Key Type*, *Key Length*, and *Digest Algorithm*. If you would like to set options manually, do not select a profile from the *Profiles* dropdown. 

![Create CSA Identifier Type](/images/CORE/12.0/CreateCSAIdentifierType.png)

### Certificate Options

1. Select a *Key Type* from the dropdown. We recommend the *RSA* key type. 
2. Select a *Digest Algorithm*. We recommend *SHA256*. 

![Create CSA Certificate Options](/images/CORE/12.0/CreateCSACertificateOptions.png)

### Certificate Subject

Fill out the geographic information of the certificate by entering the *Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*, *Organization*, *Email*, and *Subject Alternate Names*. The *Common Name* is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

![Create CSA Certificate Subject](/images/CORE/12.0/CreateCSACertificateSubject.png)

### Basic Constraints

1. If you would like to have *Basic Constraints*, set them to *Enabled* and more options will appear. 
2. Set a *Path Length* to determine how many non-self-issued intermediate certificates can follow this certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select the *Basic Constraints Config*. You can select more than one from the dropdown.

![Create CSA Basic Constraints](/images/CORE/12.0/CreateCSABasicConstraints.png)

### Authority Key Identifier

If you want an *Authority Key Identifier*, set it to *Enabled*, then select the *Authority Key Config*. You can select more than one from the dropdown.

![Create CSA Authority Key Identifier](/images/CORE/12.0/CreateCSAAuthorityKeyIdentifier.png)

### Key Usage

1. Extended Key Usage is typically used for end entity certificates. If you want to utilize *Extended Key Usage*, set it to *Enabled*, then select the usage for the public key from the *Usages* dropdown. You can select multiple usages in the dropdown. 
2. Do not set the *Critical Extension* when the *Usages* contains *ANY_EXTENDED_KEY_USAGE*. 

{{< hint info >}}
Using both *Extended Key Usage* and *Key Usage* extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
{{< /hint >}}

![Create CSA Key Usage](/images/CORE/12.0/CreateCSAKeyUsage.png)
{{< /tab >}}
{{< tab "Import Certificate" >}}
### Identifier and Type

Select *Import Certificate* as the *Type*. 

![Import Certificate Identifier Type](/images/CORE/12.0/ImportCertificateIdentifierType.png)

### Certificate Options

If you want to import a CSR that is already on the system, enable *CSR exists on this system*, then select the one you want to use from the drop-down. 

![Import Certificate Certificate Options](/images/CORE/12.0/ImportCertificateCertificateOptions.png)

### Certificate Subject

1. Copy the certificate for the CA you want to import and paste it in the *Certificate* field.
2. Paste the *Private Key* associated with the Certificate when available. Provide a key at least 1024 bits long.
3. Enter and confirm the *Passphrase* for the Private Key.

![Import Certificate Certificate Subject](/images/CORE/12.0/ImportCertificateCertificateSubject.png)
{{< /tab >}}
{{< tab "Import Certificate Signing Request" >}}
## Import Certificate Signing Request

### Identifier and Type

Select *Import Certificate* as the *Type*. 

![Import CSA Identifier Type](/images/CORE/12.0/ImportCSAIdentifierType.png)

### Certificate Subject

1. Copy the contents of the Certificate Signing Request you want to import and paste it in the *Signing Request* field.
2. Paste the *Private Key* associated with the Certificate when available. Provide a key at least 1024 bits long.
3. Enter and confirm the *Passphrase* for the Private Key.

![Import CSA Certificate Subject](/images/CORE/12.0/ImportCSACertificateSubject.png)
{{< /tab >}}
{{< /tabs >}}
