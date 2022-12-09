---
title: "Certificates Authorities Screens"
description: "This article provides information on SCALE certificate authroities screens and settings."
weight: 20
aliases:
tags:
 - scalecas
 - scalecsrs
 - scalecertificates
---

{{< toc >}}

The **Certificate Authorities** widget on the **Credentials > Certificates** screen displays certificate authorities(CAs) added to SCALE, and allows you to add new CAs, or download, delete, or edit the name of an existing CA. 

![CertificateAuthoritiesWidgetNoCAs](/images/SCALE/22.02/CertificateAuthoritiesWidgetNoCAs.png "Certificate Authorities Widget No CAs")

The <span class="iconify" data-icon="mdi:tray-arrow-down"></span> download icon downloads the CA to your server.

<span class="material-icons">delete</span> deletes the CA from your server.

Each CA listed on the widget is a link that opens the **Edit CA** screen.

**Add** opens the **[Add CA](#add-ca-wizard-screens)** wizard that steps you through setting up a certificate authority (CA) that certifies the ownership of a public key by the named subject of the certificate. 

## Add CA Wizard Screens
The **Add CA** wizard screens step users through configuring a new certificate authority on TrueNAS SCALE. 
The wizard has five different configuration screens, one for each step in the CA configuration process:

1 **[Identifier and Type](#identifier-and-type-options)**

2 **[Certificate Options](#certificate-options)**

3 **[Certificate Subject](#certificate-subject-options)**

4 **[Extra Constraints](#extra-constraints-options)**

5 **[Confirm Options](#confirm-options)**

### Identifier and Type Options
The **Identifier and Type** options specify the CA name and choose whether to create a new CA or import an existing CA.     
Users can also select a predefined certificate extension from the **Profiles** dropdown list.
{{< expand "Click Here for More Information" "v" >}}
The selection in **Type** changes setting options on this screen, the **Certificate Options** and **Extra Constraints** screens, and determines if the **Certificate Subject** screen displays at all.

![AddCAIdentifierAndType](/images/SCALE/22.02/AddCAIdentifierAndType.png "Add CA Identifier and Type") 

| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter a descriptive identifier for this certificate authority(CA). |
| **Type** | Select the type of CA from the dropdown list. Options are **Internal CA**, **Intermediate CA**, and **Import CA**. **Internal CA** functions like a publicly trusted CA to sign certificates for an internal network. They are not trusted outside the private network. **Intermediate CA** lives between the root and end entity certificates and its main purpose is to define and authorize the types of certificates you can request from the root CA. **Import CA** allows you to import an existing CA onto the system. For more information see [What are Subordinate CAs and Why Would You Want Your Own?](https://www.globalsign.com/en/blog/what-is-an-intermediate-or-subordinate-certificate-authority). |
| **Profiles** | Displays if **Internal CA** or **Intermediate CA** are set in **Type**. Select a predefined certificate extension from the dropdown list. Choose a profile that best matches your certificate usage scenario. Options are **Openvpn Root CA** and **CA**. |
{{< /expand >}}

### Certificate Options
The **Certificate Options** settings specify the type of private key to use (as well as the number of bits in the key used by the cryptographic algorithm), the cryptographic algorithm the CA uses, and how many days the CA lasts.

The **Certificate Options** settings do not display if **Type** on the **Identifier and Type** screen is set to **Import CA**.

The **Key Type** selection changes fields displayed. **RSA** is the default setting in **Key Type**.
{{< expand "Click Here for More Information" "v" >}}

![AddCACertificateOptionsRSAType](/images/SCALE/22.02/AddCACertificateOptionsRSAType.png "Add CA Certificate Options RSA Type")

| Setting | Description |
|---------|-------------|
| **Key Type** | Select the key type from the dropdown list. Options are **RSA** or **EC**. **RSA** displays the **Key Length** field. **EC** displays the **EC Curve** field. See [Why is elliptic curve cryptography not widely used, compared to RSA?](https://crypto.stackexchange.com/questions/1190/why-is-elliptic-curve-cryptography-not-widely-used-compared-to-rsa) for more information about key types. |
| **EC Curve** | Displays when **EC** is selected in **Key Type**. Select the curve type from the dropdown list. Options are **BrainpoolP512R1**, **BrainpoolP384R1**, **BrainpoolP256R1**, **SECP256K1**, **SECP384R1**, **SECP521R1**, and **ed25519**. Brainpool curves can be more secure while SECP curves can be faster. See [Elliptic Curve performance: NIST vs Brainpool](https://tls.mbed.org/kb/cryptography/elliptic-curve-performance-nist-vs-brainpool) for more information. |
| **Key Length** | Required. Displays when **RSA** is selected in **Key Type**. Select the number of bits in the key used by the cryptographic algorithm from the dropdown list. Options are **1024**, **2048** or **4096**. For security reasons, a minimum key length of 2048 is recommended. |
| **Digest Algorithm** | Select the cryptographic algorithm to use from the dropdown list.Options are **SHA1**, **SHA224**, **SHA256**, **SHA384** and **SHA512**. Only change the default **SHA256** if the organization requires a different algorithm. |
| **Lifetime** | Enter the number of days for the lifetime of the CA. |
{{< /expand >}}

### Certificate Subject Options
The **Certificate Subject** settings define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

The **Certificate Subject** settings do not display if **Type** on the **Identifier and Type** screen is set to **Import CA**.
{{< expand "Click Here for More Information" "v" >}}

![AddCACertificateSubject](/images/SCALE/22.02/AddCACertificateSubject.png "Add CA Certificate Subject") 

| Setting | Description |
|---------|-------------|
| **Country** | Required. Select the country of the organization from the dropdown list. |
| **State** | Required. Enter the state or province of the organization. |
| **Locality** | Required. Enter the location of the organization. For example, the city. |
| **Organization** | Required. Enter the name of the company or organization. |
| **Organizational Unit** | Enter the organizational unit of the entity. |
| **Email** | Required. Enter the email address of the person responsible for the CA. |
| **Common Name** | Enter the [fully qualified host name (FQHN)](https://kb.iu.edu/d/aiuv) of the system. This name must be unique within a certificate chain. |
| **Subject Alternate Names** | Required. Enter additional domains to secure for multi-domain support. Separate each domain by pressing <kbd>Enter</kbd>. For example, if the primary domain is *example.com*, entering *www.example.com* secures both addresses. |
{{< /expand >}}

### Extra Constraints Options
The **Extra Constraints** options contain certificate extension options.

| Setting | Description |
|---------|-------------|
| **Add To Trusted Store** | Automatically adds the CA to the system trusted store. |
| **Basic Constraints** | Limits the path length for a certificate chain.|
| **Authority Key Identifier** | Provides a means of identifying the public key corresponding to the private key used to sign a certificate.|
| **Key Usage** | Defines the purpose of the public key contained in a certificate.|
| **Extended Key Usage** | Further refines key usage extensions. |

The **Extra Constraints** settings change based on the selection in **Type** on the **Identifier and Type** screen. 

#### Extra Constraints - Internal or Intermediate CA
After selecting **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, or **Key Usage**, each displays more settings that option needs.
{{< expand "Click Here for More Information" "v" >}}

![AddCAExtraConstraintsAllExpanded](/images/SCALE/22.02/AddCAExtraConstraintsAllExpanded.png "Add CA Internal Certificate") 

| Setting | Description |
|---------|-------------|
| **Basic Constraints** | Select to activate this extension. |
| **Path Length** | Displays after selecting **Basic Constraints**. Enter the number of non-self-issued intermediate certificates that can follow this certificate in a valid certification path. Entering **0** allows a single additional certificate to follow in the certificate path. Value cannot be less than **0**. |
| **Basic Constraints Config** | Select the option to specify the extension type from the dropdown list. Options are **CA** and **Critical Extension**. The basic constraints extension identifies whether the subject of the certificate is a CA and the maximum depth of valid certification paths that include this certificate. See [RFC 3280, section 4.2.10](https://www.ietf.org/rfc/rfc3280.txt) for more information. |  
| **Authority Key Identifier** | Select to activate this extension. Displays the **Authority Key Config** field. |
| **Authority Key Config** | Displays after selecting **Authority Key Identifier**. Select the option to specify whether the authority key identifier extension provides a means of identifying the public key corresponding to the private key used to sign a certificate. Options are **Authority Cert Issuer** and or **Critical Extension**. This extension is used where an issuer has multiple signing keys (either due to multiple concurrent key pairs or due to changeover). The identification might be based on either the key identifier (the subject key identifier in the issuer certificate) or on the issuer name and serial number. See [RFC 3280, section 4.2.1.1](https://www.ietf.org/rfc/rfc3280.txt) for more information. |
| **Extended Key Usage** | Select to activate this certificate extension. Displays the **Usages** field. |
| **Usages** | Displays after selecting **Extended Key Usage**. Select the option to identify the purpose of this public key from the dropdown list. Typically used for the end entity certificates. You can select multiple usages that display separated by a comma (,). Options are **ANY_EXTENDED_KEY_USAGE**, **CLIENT_AUTH**, **CODE_SIGNING**, **EMAIL_PROTECTION**, **OCSP_SIGNING**, **SERVER_AUTH**, or **TIME_STAMPING**. Do not mark this extension critical when set to **ANY_EXTENDED_KEY_USAGE**. Using both **Extended Key Usage** and **Key Usage** extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.13](https://www.ietf.org/rfc/rfc3280.txt) for more details. |
| **Critical Extension** | Displays after selecting **Extended Key Usage**. Select to identify this extension as critical for the certificate. The certificate-using system must recognize critical extensions or this certificate is rejected. T he certificate-using system can ignore the extensions identified as not critical and still approve the certificate. |
| **Key Usage** | Select to activate this certificate extension. Displays the **Key Usage Config** field. |
| **Key Usage Config** | Displays after selecting **Extended Key Usage** or **Key Usage**. Select the key usage extension from the dropdown list. Options are **Digital Signature**, **Content Commitment**, **Key Encipherment**, **Data Encipherment**, **Key Agreement**, **Key Cert Sign**, **CRL Sign**, **Encipher Only**, **Decipher Only** or **Critical Extension**. The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate. The usage restriction might be employed when a key that could be used for more than one operation is to be restricted. For example, when an RSA key should be used only to verify signatures on objects other than public key certificates and CRLs, the **Digital Signature** bits would be asserted. Likewise, when an RSA key should be used only for key management, the **Key Encipherment** bit would be asserted. | 
See [RFC 3280, section 4.2.1.3](https://www.ietf.org/rfc/rfc3280.txt) for more information.
{{< /expand >}}

#### Extra Constraints - Import CA
When **Type** on **Identifier and Type** is set to **Import CA** the **Extra Constraints** screen does not include the options to set extension types.
{{< expand "Click Here for More Information" "v" >}}

![AddCAExtraConstraintsImportCA](/images/SCALE/22.02/AddCAExtraConstraintsImportCA.png "Add CA Extra Constraints Import CA") 

| Setting | Description |
|---------|-------------|
| **Certificate** | Required. Paste the certificate for the CA into this field. |
| **Private Key** | Required. Paste the private key associated with the certificate when available. Provide a key at least 1024 bits long. |
| **Passphrase** | Enter the passphrase for the private key. |
| **Confirm Passphrase** | Re-enter the passphrase for the private key. |
{{< /expand >}}

### Confirm Options
The final step screen is the **Confirm Options** that displays the CA **Type**, **Key Type**, **Key Length**, **Digest Algorithm**, **Lifetime**, **Country**, and any configured **Usages**.
For **Import CA** type, the screen displays **Type** and **Certificate**.

![AddCAConfirmOptions](/images/SCALE/22.02/AddCAConfirmOptions.png "Add CA Confirm Options")

**Save** adds the certificate to SCALE. **Back** returns to previous screens to make changes before you save. **Next** advances to the next screen in the sequence to return to **Confirm Options**.

{{< taglist tag="scalecas" limit="10" >}}
