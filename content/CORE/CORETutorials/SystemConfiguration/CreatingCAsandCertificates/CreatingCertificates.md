---
title: "Adding Certificates"
description: "This article provides instructions on adding or importing certificates and certificate signing requests (CSRs) in TrueNAS CORE."
weight: 20
aliases:
  - /core/system/certificates
tags:
- corecertificates
- coreca
- corecsr
---

{{< toc >}}

By default, TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface. 

You can either import or create a new certificate or signing request by navigating to **System > Certificates** and clicking **ADD**. 

## Adding Internal Certificates

To add an internal certificate:

1. Enter the name for the certificate, then select **Internal Certificate** from the **Type** dropdown list.
   
   ![Create Certificate Identifier Type](/images/CORE/12.0/CreateCertificateIdentifierType.png)

2. Select an option from the **Profiles** dropdown list. 
   A profile for the certificate auto-fills options like **Key Type**, **Key Length**, **Digest Algorithm**. Otherwise, you must set options manually.

   To add an HTTPS RSA certificate, the default certificate type, select **HTTPS RSA Certificate**. 
   The configuration form populates with default settings, enables **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, and **Key Usage**, and set the options for each extension.
   
   To add an elliptical curve certificate select **HTTPS ECC Certificate**. 
   The configuration form populates with default settings, enables **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, and **Key Usage**, and set the options for each extension.

   To add an OpenVPN certificate, select the client or server option that fits the certificate type you want to create. 
   The configuration form populates with default settings, enables **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, and **Key Usage**, and set the options for each extension.

3. Enter or select the **Certificate Options** settings if you did not select a **Profile** option.
   
   ![Create Certificate Certificate Options](/images/CORE/12.0/CreateCertificateCertificateOptions.png)

   a. Select a **Signing Certificate Authority** from the dropdown list. 
   b. Select a **Key Type** from the dropdown list. We recommend selecting **RSA**.
   c. Select the **Key Length**. We recommend a minimum of **2048** for security reasons.
   d. Select a **Digest Algorithm**. We recommend **SHA256**.
   e. Enter the **Lifetime** of the certificate CA in days to set how long the CA remains valid. 

4. Enter or select the **Certificate Subject** setting options.
   
   ![Create Certificate Certificate Options](/images/CORE/12.0/CreateCertificateCertificateOptions.png)

   Enter the geographic and other information in **Country**, **Locality**, **Organizational Unit** (optional), **Common Name**, **State**, **Organization**, **Email**, and **Subject Alternate Names**. 

   Enter a [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) that us unique within a certificate chain in **Common Name**.

5. Select enable and select extensions to use if you did not select an option in **Profiles**. If manually selecting and entering extension:
   
   a. Select **Enable**, then enter the extensions for **Basic Constraints**. 
  
   ![Create Certificate Basic Constraints](/images/CORE/12.0/CreateCertificateBasicConstraints.png)

      Enter a value in **Path Length** that determines how many non-self-issued intermediate certificates can follow the certificate in a valid certification path. 
      Entering **0** allows a single additional certificate to follow in the certificate path. Then select the extension(s) to use.

   b. Select **Enable**, then enter the extensions for **Authority Key Identifier**.
  
  ![Create Certificate Authority Key Identifier](/images/CORE/12.0/CreateCertificateAuthorityKeyIdentifier.png)

   c. Select **Enable**, then enter the extensions for **Extended Key Usage**. Select one or more usages for the public key from the **Usages** dropdown list.
      TrueNAS uses Extended Key Usage for end-entity certificates.

  ![Create Certificate Key Usage](/images/CORE/12.0/CreateCertificateKeyUsage.png)
     
     Enable **Critical Extension** if you want to identify this extension as critical for the certificate. 
     Do not enable **Critical Extension** if **Usages** contains **ANY_EXTENDED_KEY_USAGE**.

   {{< hint info >}}
   Using **Extended Key Usage** and **Key Usage** extensions requires that the certificate purpose is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
   {{< /hint >}}

   d. Select **Enable**, then enter the extensions for **Key Usage**. Select any extensions from the **Key Usage Config** dropdown list.

6. Click **Submit**.

## Creating a Certificate Signing Request

To add a certificate singing request (CSR) certificate:

1. Enter the name for the certificate, then select **Certificate Signing Request** from the **Type** dropdown list.
   
   ![Create CSA Identifier Type](/images/CORE/12.0/CreateCSAIdentifierType.png)

2. Select **Certificate Signing Request** from the **Profiles** dropdown list. 
   A profile for the certificate auto-fills options like **Key Type**, **Key Length**, **Digest Algorithm**. Otherwise, you must set options manually.

   To use an HTTPS RSA certificate, the default certificate type, select **HTTPS RSA Certificate**. 
   The configuration form populates with default settings, enables **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, and **Key Usage**, and set the options for each extension.
   
   To use an elliptical curve certificate, select **HTTPS ECC Certificate**. 
   The configuration form populates with default settings, enables **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, and **Key Usage**, and set the options for each extension.

   To use an OpenVPN certificate, select the client or server option that fits the certificate type. 
   The configuration form populates with default settings, enables **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, and **Key Usage**, and set the options for each extension.

3. Enter or select the **Certificate Options** settings if you did not select a **Profile** option.
   
   ![Create CSA Certificate Options](/images/CORE/12.0/CreateCSACertificateOptions.png)

   a. Select a **Key Type** from the dropdown list. We recommend selecting **RSA**.
   b. Select a **Digest Algorithm**. We recommend **SHA256**.

4. Enter or select the **Certificate Subject** setting options.
   
   ![Create CSA Certificate Subject](/images/CORE/12.0/CreateCSACertificateSubject.png)

   Enter the geographic and other information in **Country**, **Locality**, **Organizational Unit** (optional), **Common Name**, **State**, **Organization**, **Email**, and **Subject Alternate Names**. 

   Enter a [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) that us unique within a certificate chain in **Common Name**.

5. Select enable and select extensions to use if you did not select an option in **Profiles**. If manually selecting and entering extension:
   
   a. Select **Enable**, then enter the extensions for **Basic Constraints**. 
  
   ![Create CSA Basic Constraints](/images/CORE/12.0/CreateCSABasicConstraints.png)

      Enter a value in **Path Length** that determines how many non-self-issued intermediate certificates can follow the certificate in a valid certification path. 
      Entering **0** allows a single additional certificate to follow in the certificate path. Then select the extension(s) to use.

   b. Select **Enable**, then enter the extensions for **Authority Key Identifier**.
  
  ![Create CSA Authority Key Identifier](/images/CORE/12.0/CreateCSAAuthorityKeyIdentifier.png)

   c. Select **Enable**, then enter the extensions for **Extended Key Usage**. Select one or more usages for the public key from the **Usages** dropdown list.
      TrueNAS uses Extended Key Usage for end-entity certificates.

  ![Create CSA Key Usage](/images/CORE/12.0/CreateCSAKeyUsage.png)
     
     Enable **Critical Extension** if you want to identify this extension as critical for the certificate. 
     Do not enable **Critical Extension** if **Usages** contains **ANY_EXTENDED_KEY_USAGE**.

   {{< hint info >}}
   Using **Extended Key Usage** and **Key Usage** extensions requires that the certificate purpose is consistent with both extensions. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details.
   {{< /hint >}}

   d. Select **Enable**, then enter the extensions for **Key Usage**. Select any extensions from the **Key Usage Config** dropdown list.

6. Click **Submit**.

## Importing a Certificate

To import a certificate:

1. Select **Import Certificate** as the **Type**. 
   
   ![Import Certificate Identifier Type](/images/CORE/12.0/ImportCertificateIdentifierType.png)

2. Select the **Certificate Options**. 
   To import a previously-added certificate for a CSR, select **CSR exists on this system**, then select one from the **Signing Certificate Authority** dropdown list. 

   ![Import Certificate Certificate Options](/images/CORE/12.0/ImportCertificateCertificateOptions.png)

3. Copy the certificate for the CA you want to import and paste it into the **Certificate** field.
   
   ![Import Certificate Certificate Subject](/images/CORE/12.0/ImportCertificateCertificateSubject.png)

4. Paste the certificate key that is least 1024 bits long into **Private Key** when available. 

5. Enter and confirm the Private Key **Passphrase**.

6. Click **Submit**.

## Importing a Certificate Signing Request

To import a certificate signing request (CSR):

1. Select **Import Certificate Signing Request** as the **Type**. 
   
   ![Import CSA Identifier Type](/images/CORE/12.0/ImportCSAIdentifierType.png)

2. Copy the certificate for the CA you want to import and paste it into the **Certificate** field.
   
   ![Import CSA Certificate Subject](/images/CORE/12.0/ImportCSACertificateSubject.png)

3. Paste the certificate key that is least 1024 bits long into **Private Key** when available. 

4. Enter and confirm the Private Key **Passphrase**.

5. Click **Submit**.

{{< taglist tag="corecertificates" limit="10" >}}
