---
title: "Certificates Screens"
description: "Provides information on the Certificates screens and settings."
weight: 10
aliases:
tags:
 - scalecertificates
 - scalecas
 - scalecsrs
---

{{< toc >}}

The **Certificates** widget on the **Credentials > Certificates** screen displays certificates added to SCALE, and allows you to add new certificates, or download, delete, or edit the name of an existing certificate. Each TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface.

![CertificatesWidget](/images/SCALE/23.10/CertificatesWidget.png "Certificates Widget")

The <iconify-icon icon="teenyicons:download-solid"></iconify-icon> download icon downloads the certificate to your server.

<span class="material-icons">delete</span> deletes the certificate from your server.

Each certificate listed on the widget is a link that opens the **[Edit Certificate](#edit-certificate-screen) screen.

**Add** opens the **[Add Certificate](#add-certificate-wizard)** wizard.

## Add Certificate Wizard
The **Add Certificate** wizard screens step users through configuring a new certificate on TrueNAS SCALE. 
The wizard has five different configuration screens, one for each step in the certificate configuration process:

1 **[Identifier and Type](#identifier-and-type-options)**

2 **[Certificate Options](#certificate-options)**

3 **[Certificate Subject](#certificate-subject-options)**

4 **[Extra Constraints](#extra-constraints-options)**

5 **[Confirm Options](#confirm-options)**

{{< hint type=note >}}
Before creating a new certificate, configure a new CA if you do not already have one on your system. Creating a internal certificate requires a CA exist on the system.
{{< /hint >}}
Many of the settings in the **Add Certificate** wizard are the same as those in the **[Add CA]({{< relref "CAScreensSCALE.md" >}})** and **[Add Certificate Signing Request]({{< relref "CSRScreensSCALE.md" >}})** wizards.

### Identifier and Type Options 
The **Identifier and Type** options specify the certificate name and choose whether to use it for internal or local systems, or import an existing certificate.     
Users can also select a predefined certificate extension from the **Profiles** dropdown list.
{{< expand "Click Here for More Information" "v" >}}
The selection in **Type** changes setting options on this screen, the **Certificate Options** and **Extra Constraints** screens, and determines if the **Certificate Subject** screen displays at all.

![AddCertificateIdentifierAndTypeInternalCert](/images/SCALE/23.10/AddCertificateIdentifierAndTypeInternalCert.png "Add Certificate Internal Certificate") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter a descriptive identifier for this certificate. |
| **Type** | Select the certificate type from the dropdown list. **Internal Certificate** uses system-managed CAs for certificate issuance. **Import Certificate** allows you to import an existing certificate onto the system. **Import Certificate** removes the **Profiles** field, changes other screens and fields displayed on other wizard screens. |
| **Profile** | Select a predefined certificate extension. Options are **HTTPS RSA Certificate** or **HTTPS ECC Certificate**. Choose a profile that best matches your certificate usage scenario. |
{{< /truetable >}}
{{< /expand >}}

### Certificate Options
**Certificate Options** settings choose the signing certificate authority (CSR), the type of private key type to use (as well as the number of bits in the key used by the cryptographic algorithm), the cryptographic algorithm the certificate uses, and how many days the certificate authority lasts. 

The **Certificate Options** settings change based on the selection in **Type** on the **Identifier and Type** screen.

#### Certificate Options - Internal Certificate
The **Key Type** selection changes fields displayed. **RSA** is the default setting in **Key Type**.
The **Signing Certificate Authority** field requires you have a CA already configured on your system. 
If you do not have a Certificate Authority (CA) configured on your system, exit the **Add Certificate** wizard and add the required CA.
{{< expand "Click Here for More Information" "v" >}}

![AddCertificateCertificateOptions](/images/SCALE/23.10/AddCertificateCertificateOptions.png "Add Certificate Certificate Options")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Signing Certificate Authority** | Required. Select a previously imported or created CA from the dropdown list. |
| **Key Type** | Required. Select an option (**RSA** or **EC**) from the dropdown list. See [why is elliptic curve cryptography not widely used, compared to RSA?](https://crypto.stackexchange.com/questions/1190/why-is-elliptic-curve-cryptography-not-widely-used-compared-to-rsa) for more information about key types. Selecting **EC** displays the **EC Curve** field and removes the **Key Length** field. |
| **Key Length** | Required. Displays when **Key Type** is set to **RSA**. The number of bits in the key used by the cryptographic algorithm. For security reasons, a minimum key length of **2048** is recommended. |
| **EC Curve** | Displays when **Key Type** is set to **EC**. Select the Brainpool or SECP curve that fits your scenario. Brainpool curves can be more secure than SECP curves but SECP curves can be faster. Options are **BrainpoolP512R1**, **BrainpoolP384R1**, **BrainpoolP256R1**, **SECP256R1**, **SECP384R1**, **SECP521R1**, and **ed25519**. See [Elliptic Curve performance: NIST vs Brainpool](https://tls.mbed.org/kb/cryptography/elliptic-curve-performance-nist-vs-brainpool) for more information. |
| **Digest Algorithm** | Required. Select the cryptographic algorithm to use from the dropdown list. Options are **SHA1**, **SHA224**, **SHA256**, **SHA384** or **SHA512**. Only change the default **SHA256** if the organization requires a different algorithm. |
| **Lifetime** | Required. Enter the number days for the lifetime of the CA. |
{{< /truetable >}}
{{< /expand >}}

#### Certificate Options - Import Certificate
Setting **Type** on the **Identifier and Type** screen to **Import Certificate** changes the options displayed on the **Certificate Options** configuration screen. 
{{< expand "Click Here for More Information" "v" >}}

![AAddCertificateImportCertificateOptions](/images/SCALE/23.10/AddCertificateImportCertificateOptions.png "Add Certificate Import Certificate Options") 

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Certificate** | Required. Paste the certificate for the CA into this field. |
| **CSR exists on this system**| Select if importing a certificate for which a CSR exists on this system. Displays the **Certificate Signing Request** dropdown. |
| **Certificate Signing Request** | Select the existing CSR from the dropdown list. |
| **Private Key** | Required. Paste the private key associated with the certificate when available. Provide a key at least 1024 bits long. |
| **Passphrase** | Enter the passphrase for the private key. |
| **Confirm Passphrase** | Re-enter the passphrase for the private key. |
{{< /truetable >}}
{{< /expand >}}

### Certificate Subject Options
The **Certificate Subject** step lets users define the location, name, and email for the organization using the certificate.    
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support. 

The **Certificate Subject** screen does not display when **Type** on **Internal Certificate** is set to **Import Certificate**.
{{< expand "Click Here for More Information" "v" >}}

![AddCertificateCertifcateSubject](/images/SCALE/23.10/AddCertificateCertifcateSubject.png "Add Certificate Certificate Subject") 

{{< truetable >}}
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
{{< /truetable >}}
{{< /expand >}}

### Extra Constraints Options
The **Extra Constraints** step contains certificate extension options.
* **Basic Constraints** that when enabled limits the path length for a certificate chain.
* **Authority Key Identifier** that when enabled provides a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage** that when enable defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** that when enable to further refines key usage extensions.

The **Extra Constraints** settings change based on the selection in **Type** on the **Identifier and Type** screen. 

#### Extra Constraints - Internal Certificate
After selecting **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, or **Key Usage**, each displays more settings that option needs.
{{< expand "Click Here for More Information" "v" >}}

![AddCertificateExtraConstraintsInternalCert](/images/SCALE/23.10/AddCertificateExtraConstraintsInternalCert.png "Add Certificate Extra Constraints Internal Certificate")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Basic Constraints** | Select to activate this extension to identify whether the certificate subject is a CA and the maximum depth of valid certification paths that include this certificate. Options are **CA** or **Critical Extension**. Selecting **Basic Constraints** displays the **Path Length** and **Basic Constraints Config** fields. |
| **Path Length** | Displays after selecting **Basic Constraints**. Enter a value of **0** or greater to set how many non-self-issued intermediate certificates can follow this certificate in a valid certification path. Entering **0** allows a single additional certificate to follow in the certificate path. Value cannot be less than **0**. |
| **Basic Constraints Config** | Select the option to specify whether to use the certificate for a Certificate Authority and whether this extension is critical. Clients must recognize critical extension to prevent rejection. Web certificates typically require you to disable **CA** and enable **Critical Extension** in **Basic Constraints**. |
| **Authority Key Identifier** | Select to activate this extension. The authority key identifier extension provides a means of identifying the public key corresponding to the private key used to sign a certificate. This extension is used where the issuer has multiple signing keys (either due to multiple concurrent key pairs or due to changeover). The identification might be based on either the key identifier (the subject key identifier in the issuer certificate) or on the issuer name and serial number. See [RFC 3280, section 4.2.1.1](https://www.ietf.org/rfc/rfc3280.txt) for more information. Displays the **Authority Key Config** field. |
| **Authority Key Config** | Displays after selecting **Authority Key Identifier**. Select the option to specify whether the issued certificate should include authority key identifier information, and whether the extension is critical. Critical extension must be recognized by the client or be rejected. Options are **Authority Cert Issuer** and or **Critical Extension**. Multiple selections display separated by a comma (,).|
| **Extended Key Usage** | Select to activate this certificate extension. The Extended Key Usage extension identifies and limits valid uses for this certificate, such as client authentication or server authentication. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for details. Displays the **Usages** field. |
| **Usages** | Displays after selecting **Extended Key Usage**. Select the option to identify the purpose of this public key from the dropdown list. Typically used for the end entity certificates. You can select multiple usages that display separated by a comma (,). Options are **ANY_EXTENDED_KEY_USAGE**, **CERTIFICATE_TRANSPARENCY**, **CLIENT_AUTH**, **CODE_SIGNING**, **EMAIL_PROTECTION**, **IPSEC_IKE**, **KERBEROS_PKINIT_KDC**, **OCSP_SIGNING**, **SERVER_AUTH**, **SMARTCARD_LOGON** or **TIME_STAMPING**. Do not mark this extension critical when set to **ANY_EXTENDED_KEY_USAGE**. The purpose of the certificate must be consistent with both extensions when using both **Extended Key Usage** and **Key Usage** extensions. See [[RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details. |
| **Critical Extension** | Select to identify this extension as critical for the certificate. The certificate-using system must recognize the critical extensions to prevent this certificate being rejected. The certificate-using system can ignore extensions identified as not critical and still approve the certificate. |
| **Key Usage** | Select to activate this certificate extension. The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate. The usage restriction might be employed when a key that can be used for more than one operation is to be restricted. For example, when an RSA key should be used only to verify signatures on objects other than public key certificates and CRLs, the Digital Signature bits are asserted. Likewise, when an RSA key should be used only for key management, the Key Encipherment bit is asserted. See [RFC 3280, section 4.2.1.3](https://www.ietf.org/rfc/rfc3280.txt) for more information. Displays the **Key Usage Config** field. |
| **Key Usage Config** | Displays after selecting **Extended Key Usage** or **Key Usage**. Select the option that specifies valid key usages for this certificate. Options are **Digital Signature**, **Content Commitment**, **Key Encipherment**, **Data Encipherment**, **Key Agreement**, **Key Cert Sign**, **CRL Sign**, **Encipher Only**, **Decipher Only** or **Critical Extension**. Web certificates typically need at least **Digital Signature** and possibly **Key Encipherment** or **Key Agreement**, while other applications might need other usages.  |
{{< /truetable >}}
{{< /expand >}}

#### Import Certificate Options
When **Type** on **Identifier and Type** is set to **Import Certificate** the **Import Certificate** options screen displays.
{{< expand "Click Here for More Information" "v" >}}

![AddCertificateImportOptions](/images/SCALE/23.10/AddCertificateImport.png "Add Certificate Import Certificate Options")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Certificate** | Required. Paste the certificate for the CA into this field. |
| **CSR exists on this system** | Check this box if importing a certificate for which a CSR exists on this system. Displays the **Certificate Signing Request** dropdown. |
| **Certificate Signing Request** | Select an existing CSR from the dropdown list. |
| **Private Key** | Required. Paste the private key associated with the certificate when available. Provide a key at least 1024 bits long. |
| **Passphrase** | Enter the passphrase for the private key. |
| **Confirm Passphrase** | Re-enter the passphrase for the private key. |
{{< /truetable >}}
{{< /expand >}}

### Confirm Options 
The final step screen is the **Confirm Options** that displays the certificate **Type**, **Key Type**, **Key Length**, **Digest Algorithm**, **Lifetime**, **Country**, and any configured **Usages**.

![AddCertificateConfirmOptions](/images/SCALE/23.10/AddCertificateConfirmOptions.png "Add Certificate Confirm Options")

**Save** adds the certificate to SCALE. **Back** returns to previous screens to make changes before you save. **Next** advances to the next screen in the sequence to return to **Confirm Options**.

## Edit Certificate Screen
The certificate listed on the **Certificates** widget is a link that opens the **Edit Certificate** screen. 

![EditCertificateScreen](/images/SCALE/23.10/EditCertificateScreen.png "Edit Certificate") 

The **Edit Certificate** screen displays the fixed **Subject** settings, the type, path, and other details about that certificate that are not editable. 
You can enter an alphanumeric name for the certificate in **Identifier** if you want to rename the certificate. You can use underscore (_) and or dash (-) characters in the name.

**View/Download Certificate** opens a window with the certificate string. Use the <span class="material-icons">assignment</span> clipboard icon to copy the certificate to the clipboard or **Download** to download the certificate to your server. Keep the certificate in a secure area where you can back up and save it.

**View/Download Key** opens a window with the certificate private key. Use the <span class="material-icons">assignment</span> clipboard icon to copy the public key to the clipboard or **Download** to download the key to your server. Keep the private key in a secure area where you can back up and save it.

{{< taglist tag="scalecertificates" limit="10" >}}