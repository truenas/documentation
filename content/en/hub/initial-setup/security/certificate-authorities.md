---
title: "Setting up Certificate Authorities in TrueNAS CORE"
description: "A how-to for creating and importing certificate authorities (CAs) in TrueNAS CORE."
tags: ["networking","security","certificates","CORE"]
weight: 11
---

## Introduction

TrueNAS CORE can act as a Certificate Authority (CA). When encrypting SSL (Secure Sockets Layer) or TLS (Transport Layer Security) connections to the TrueNAS system, you can either import or create a Certificate or Signing Request. Certificates will appear in the drop-down menus for services that support SSL or TLS. 

To add or import a Certificate or Signing Request, go to **System > Certificates** and click **ADD**. Enter a name for the CA, then choose the *Type*. You may choose to create or import either an *Internal Certificate* type, or a *Certificate Signing Request* type. The creation process for each type is slightly different. Use the links below to jump to the appropriate section based on your desired type.

[Create a Certificate](#Create a Certificate)  
[Import a Certificate](#Import a Certificate)  
[Create a Certificate Signing Request](#Create a Certificate Signing Request)  
[Import Certificate Signing Request](#Import Certificate Signing Request)  

## Create a Certificate<a name="Create a Certificate"></a>

### Identifier and Type

Select *Internal Certificate* as the *Type*. 

If you want, you can select a profile for the CA. Selecting a profile automatically sets certain options such as *Key Type*, *Key Length*, *Digest Algorithm*, and more. If you would like to set each option manually, do not select a profile from the *Profiles* dropdown. 

<img src="/images/CreateCert-IdentTyp.png">
<br><br>

### Certificate Options

1. Select a *Signing Certificate Authority* from the dropdown.
2. Select a *Key Type* from the dropdown. We recommend the *RSA* key type. 
3. Select the *Key Length*. We recommend a minimum of *2048* for security reasons. 
4. Select a *Digest Algorithm*. We recommend *SHA256*. 
5. Enter the *Lifetime* of the CA in days to set how long the CA will remain valid.

<img src="/images/CreateCert-CertOpt.png">
<br><br>

### Certificate Subject

1. Fill out the geographic information of the certificate by entering the *Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*, *Organization*, *Email*, and *Subject Alternate Names*. 
2. The *Common Name* is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

<img src="/images/CreateCert-CertSubj.png">
<br><br>

### Basic Constraints

1. If you would like to have *Basic Constraints*, set them to *Enabled* and more options will appear. 
2. Set a *Path Length* to determine how many non-self-issued intermediate certificates can follow this certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select the *Basic Constraints Config*. You can select more than one from the dropdown.

<img src="/images/CreateCert-BasCon.png">
<br><br>

### Authority Key Identifier

If you want an *Authority Key Identifier*, set it to *Enabled*, then select the *Authority Key Config*. You can select more than one from the dropdown.

<img src="/images/CreateCert-AuthKeyIdent.png">
<br><br>

### Key Usage

Extended Key Usage is typically used for end entity certificates. 

1. If you want to utilize *Extended Key Usage*, set it to *Enabled*, then select the usage for the public key from the *Usages* dropdown. You can select multiple usages in the dropdown. 
2. Enable *Critical Extension* if you want to identify this extension as critical for the certificate. Do not enable *Critical Extension* if *Usages* contains *ANY_EXTENDED_KEY_USAGE*. 

> NOTE: Using both *Extended Key Usage* and *Key Usage* extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.

<img src="/images/CreateCert-KeyUse.png">
<br><br>

## Import a Certificate<a name="Import a Certificate"></a>

### Identifier and Type

Select *Import Certificate* as the *Type*. 

<img src="/images/ImportCert-IdentTyp.png">
<br><br>

### Certificate Options

If you want to import a CSR that is already on the system, enable *CSR exists on this system*, then select the one you want to use from the drop-down. 

<img src="/images/ImportCert-CertOpt.png">
<br><br>

### Certificate Subject

1. Copy the certificate for the CA you want to import and paste it in the *Certificate* field.
2. Paste the *Private Key* associated with the Certificate when available. Provide a key at least 1024 bits long.
3. Enter and confirm the *Passphrase* for the Private Key.

<img src="/images/ImportCert-CertSubj.png">
<br><br>

## Create a Certificate Signing Request<a name="Create a Certificate Signing Request"></a>

### Identifier and Type

1. Select *Certificate Signing Request* as the *Type*. 
2. If you want, you can select a profile for the CA. Selecting a profile automatically sets certain options such as *Key Type*, *Key Length*, and *Digest Algorithm*. If you would like to set options manually, do not select a profile from the *Profiles* dropdown. 

<img src="/images/CreateCSA-IdentTyp.png">
<br><br>

### Certificate Options

1. Select a *Key Type* from the dropdown. We recommend the *RSA* key type. 
2. Select a *Digest Algorithm*. We recommend *SHA256*. 

<img src="/images/CreateCSA-CertOpt.png">
<br><br>

### Certificate Subject

Fill out the geographic information of the certificate by entering the *Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*, *Organization*, *Email*, and *Subject Alternate Names*. The *Common Name* is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and must be unique within a certificate chain.

<img src="/images/CreateCSA-CertSubj.png">
<br><br>

### Basic Constraints

1. If you would like to have *Basic Constraints*, set them to *Enabled* and more options will appear. 
2. Set a *Path Length* to determine how many non-self-issued intermediate certificates can follow this certificate in a valid certification path. Entering *0* allows a single additional certificate to follow in the certificate path. 
3. Select the *Basic Constraints Config*. You can select more than one from the dropdown.

<img src="/images/CreateCSA-BasCon.png">
<br><br>

### Authority Key Identifier

If you want an *Authority Key Identifier*, set it to *Enabled*, then select the *Authority Key Config*. You can select more than one from the dropdown.

<img src="/images/CreateCSA-AuthKeyIdent.png">
<br><br>

### Key Usage

1. Extended Key Usage is typically used for end entity certificates. If you want to utilize *Extended Key Usage*, set it to *Enabled*, then select the usage for the public key from the *Usages* dropdown. You can select multiple usages in the dropdown. 
2. Do not set the *Critical Extension* when the *Usages* contains *ANY_EXTENDED_KEY_USAGE*. 

> NOTE: Using both *Extended Key Usage* and *Key Usage* extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.

<img src="/images/CreateCSA-KeyUse.png">
<br><br>

## Import Certificate Signing Request<a name="Import Certificate Signing Request"></a>

### Identifier and Type

Select *Import Certificate* as the *Type*. 

<img src="/images/ImportCSA-IdentTyp.png">
<br><br>

### Certificate Subject

1. Copy the contents of the Certificate Signing Request you want to import and paste it in the *Signing Request* field.
2. Paste the *Private Key* associated with the Certificate when available. Provide a key at least 1024 bits long.
3. Enter and confirm the *Passphrase* for the Private Key.

<img src="/images/ImportCSA-CertSubj.png">
<br><br>
