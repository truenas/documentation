---
title: "Certificates Screens"
description: "This article provides information on SCALE Certificates screens and settings."
weight: 50
---

{{< toc >}}

The Certificates section contains all the information for certificates, certificate signing requests, certificate authorities, and DNS-authenticators. TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can make custom certificates for authentication and validation while sharing data.

![CertificatesSCALE](/images/SCALE/CertificatesSCALE.png "Certificates Screen")

### Identifier and Type Options

| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter a descriptive identifier for this certificate. |
| **Type** | Select the certificate type from the dropdown list. **Internal Certificate** uses system-managed CAs for certificate issuance. **Import Certificate** allows you to import an existing Certificate onto the system. **Import Certificate** removes thes **Profiles** field. |
| **Profiles** | Select a predefined certifcate extension. Options are ** Openvpn Server Certificate** or **Openvpn Client Certificate**. Choose a profile that best matches your certificate usage scenario. |

### Certificate Options

| Setting | Description |
|---------|-------------|
| **Signing Certificate Authority** | Required. Select a previously imported or created CA from the dropdown list. |
| **Key Type** | Required. Select an option (**RSA** or **EC**) from the dropdown list. See [why is elliptic curve cryptography not widely used, compared to RSA?](https://crypto.stackexchange.com/questions/1190/why-is-elliptic-curve-cryptography-not-widely-used-compared-to-rsa)for more information about key types.|
| **Key Length** | Required. The number of bits in the key used by the crytographic algorithm. For security reasons, a minimum key length of **2048** is recommended. |
| **Digest Algorithm** | Required. Select the cryptographic algorithm to used. Only change the default **SHA256** if the organization requires a different algorithm. |
| **Lifetime** | Required. Enter the number days for the lifetime of the CA. |

### Certificate Subject Options

| Setting | Description |
|---------|-------------|
| **Country** | Required. Select the country of the organization from the dropdown list. |
| **State** | Required. Enter the state or province of the organization. |
| **Locality** | Required. Enter the location of the organization. For example, the city. |
| **Organization** | Required. Enter the name of the company or organization. |
| **Organizational Unit** | Enter the organizational unit of the entity. |
| **Email** | Required. Enter the email address of the person responsible for the CA. |
| **Common Name** | Enter the [fully qualified host name (FQHN)](https://kb.iu.edu/d/aiuv) of the system. This mname must be unique within a certificate chain. |
| **Subject Alternate Names** | Required. Enter additional domains to secure for multi-domain support. Separate each domain by pressing <kbd>Enter</kbd>. For example, if the primary domain is *example.com*, entering *www.example.com** secures both addresses. |


### Extra Constratins Options

| Setting | Description |
|---------|-------------|
| **Basic Constraints** | Select to activate this extension to idetify whether the certificate subject is a **CA** and the maximum depth of valid certification paths that include this certificate. Options are **CA** or **Critical Extension**. Selecting **Basic Constraints** displays **Path Length** and **Basic Constraints Config**. |
| **Path Length** | Displays after selecting **Basic Constraints**. Enter how many non-self-issued intermediate certificates that can follow this certificate in a valid certification path. Entering **0** allows a single additional certificate to follow in the certificate path. Value cannot be less than **0**. |
| **Basic Constraints Config** | Select the option to specify whether to uses the certificate for a Certificate Authority and whether this extension is critical. Clients mus recognized critical extension to prevent rejection. Web certificates typically require you to disable CA and enable Critical Extension in **Basic Constraints**. |
| **Authority Key Identifier** | Select to activate this extension. The authority key identifier extension provides a means of identifying the public key corresponding to the private key used to sign a certificate. This extension is used where the issuer has multiple signing keys (either due to multiple concurrent key pairs or due to changeover). The identification might be based on either the key identifier (the subject key identifier in the issuer certificate) or on the issuer name and serial number. See [RFC 3280, section 4.2.11](https://www.ietf.org/rfc/rfc3280.txt) for more information. Displays the **Authority Key Config** field. |
| **Authority Key Config** | Displays after selecting **Authority Key Identifier**. Select the option to specify whether the issued certificate should include Authority Key Identifier information, and whether the extension is critical. Critical extension must be recognized by the client or be rejected. Options are **Authority Cert Issuer** and or **Critical Extension**. Multiple selections display separated by a comma (,).|
| **Extended Key Usage** | Select to activate this certificate extension. The Extended Key Usage extension identifies and limits valide uses ofr this certificate, such as client authentication or servier authentication. See [RFC 3280, section 4.2.11](https://www.ietf.org/rfc/rfc3280.txt) for details. Displays the **Usages** field. |
| **Usages** | Displays after selecting **Extended Key Usage**. Select the option to identify the purpose of this public key from the dropdown list. Typically used for the end entiy certificates. You can select multiple usages that display separated by a comma (,). Options are **ANY_EXTENDED_KEY_USAGE**, **CLIENT_AUTH**, **CODE_SIGNING**, **EMAIL_PROTECTION**, **OCSP_SIGNING**, **SERVER_AUTH**, or **TIME_STAMPING**. Do not mark this extension crtical when set to **ANY_EXTENDED_KEY_USAGE**. Using both **Extended Key Usage** and **Key Usage** extensions requires that the purpose of the certificate is consistent with both extenstions. See [RFC 3280, section 4.2.11](https://www.ietf.org/rfc/rfc3280.txt) for more details. |
| **Key Usage** | Select to activate this certificate extension. The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate. The usage restriction might be employed when a key that can be used for more than one operation is to be restricted. For example, when an RSA key should be used only to verify signatures on objects other than public key certificates and CRLs, the Digital Signature bits are asserted. Likewise, when an RSA key should be used only for key management, the Key Encipherment bit is asserted. See [RFC 3280, section 4.2.11](https://www.ietf.org/rfc/rfc3280.txt) for more information. Displays the **Key Usage Confi** field. |
| **Key Usage Config** | Displays after selecting **Extended Key Usage** or **Key Usage**. Select the option that specifies valid key usages for this certificate. Options are **Digital Signature**, **Content Commitment**, **Key Encipherment**, **Data Encipherment**, **Key Agreement**, **Key Cert Sign**, **CRL Sign**, **Encipher Only**, **Decipher Only** or **Critical Extension**. Web certificates typically need at least **Digital Signature** and possibly **Key Encipherment** or **Key Agreement**, while other applications might need other usages.  |




|  |  |
|  |  |
|  |  |


## Certificates

By default, TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can import and create more certificates by clicking **Add** in the **Certificates** window.

{{< tabs "Add Certificate" >}}
{{< tab "Identifier and Type" >}}

The **Identifier and Type** step lets users name the certificate and choose whether to use it for internal or local systems, or import an existing certificate.     
Users can also select a predefined certificate extension from the **Profiles** drop-down list.
{{< /tab >}}

{{< tab "Certificate Options" >}}

The **Certificate Options** step provides options for choosing the Signing Certificate Authority (CSR), what type of private key type to use (as well as the number of bits in the key used by the cryptographic algorithm), the cryptographic algorithm the certificate uses, and how many days the certificate authority lasts.

{{< /tab >}}

{{< tab "Certificate Subject" >}}

The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.
{{< /tab >}}

{{< tab "Extra Constraints" >}}

The **Extra Constraints** step contains certificate extension options.
* **Basic Constraints**: Enable to limit the path length for a certificate chain.
* **Authority Key Identifier**: Enable to provide a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage**: Enable to define the purpose of the public key contained in a certificate.
* **Extended Key Usage**: Enable to further refine key usage extensions.
{{< /tab >}}
{{< /tabs >}}

## Certificate Signing Requests

The **Certificate Signing Requests** section allows users configure the message(s) the system sends to a registration authority of the public key infrastructure to apply for a digital identity certificate. 

{{< tabs "Add Certificate Singing Requests" >}}
{{< tab "Identifier and Type" >}}

The **Identifier and Type** step lets users name the certificate signing request (CSR) and choose whether to create a new CSR or import an existing CSR.     
Users can also select a predefined certificate extension from the **Profiles** drop-down list.

{{< /tab >}}

{{< tab "Certificate Options" >}}

The **Certificate Options** step provides options for choosing what type of private key type to use, the number of bits in the key used by the cryptographic algorithm, and the cryptographic algorithm the CSR uses.

{{< /tab >}}

{{< tabs "Certificate Subject" >}}

The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

{{< /tab >}}

{{< tab "Extra Constraints" >}}

The **Extra Constraints** step contains certificate extension options.
* **Basic Constraints**: Enable to limit the path length for a certificate chain.
* **Authority Key Identifier**: Enable to provide a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage**: Enable to define the purpose of the public key contained in a certificate.
* **Extended Key Usage**: Enable to further refine key usage extensions.

{{< /tab >}}
{{< /tabs >}}

## Certificate Authorities

The Certificate Authorities section lets users set up a certificate authority (CA) that certifies the ownership of a public key by the named subject of the certificate.

{{< tabs "Add Certificate Authorities" >}}
{{< tab "Identifier and Type" >}}

The **Identifier and Type** step lets users name the CA and choose whether to create a new CA or import an existing CA.     
Users can also select a predefined certificate extension from the **Profiles** drop-down list.

{{< /tab >}}

{{< tab "Certificate Options" >}}

The **Certificate Options** step provides options for choosing what type of private key to use (as well as the number of bits in the key used by the cryptographic algorithm), the cryptographic algorithm the CA uses, and how many days the CA lasts.

{{< /tab >}}

{{< tab "Certificate Subject" >}}

The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

{{< /tab >}}

{{< tab "Extra Constraints" >}}

The **Extra Constraints** step contains certificate extension options.
* **Basic Constraints**: Enable to limit the path length for a certificate chain.
* **Authority Key Identifier**: Enable to provide a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage**: Enable to define the purpose of the public key contained in a certificate.
* **Extended Key Usage**: Enable to further refine key usage extensions.

{{< /tab >}}
{{< /tabs >}}

## ACME DNS-Authenticators

The Automatic Certificate Management Environment (ACME) DNS-Authenticators screen allows users to automate certificate issuing and renewal. The user must verify ownership of the domain before certificate automation is allowed.

The system requires an ACME DNS Authenticator and CSR to configure ACME certificate automation.

Users must name the authenticator and choose a DNS provider and configure any required authenticator attributes.

If you select [Cloudflare](https://www.cloudflare.com) as the authenticator, you must enter your Cloudflare account email address, API Key, and API Token. 

If you select [Route53](https://aws.amazon.com/route53/) as the authenticator, you must enter you Route53 Access Key ID and Secret Access Key.
