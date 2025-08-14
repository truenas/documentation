---
title: "Certificate Signing Requests Screens"
description: "Provides information on the Certificates Signing Requests screens and settings."
weight: 30
aliases:
tags:
 - csr
 - certificates
---

The **Certificate Signing Requests** widget, on the **Certificates** screen, shows a list of certificate signing requests (CSRs) configured on the system.
CSR.

{{< trueimage src="/images/SCALE/Credentials/CertificateSigningRequestWidgetNoCSR.png" alt="Certificate Signing Request Widget No CSRs" id="Certificate Signing Request Widget No CSRs" >}}

{{< trueimage src="/images/SCALE/Credentials/CertificatesSigningRequestWidgetWithCSR.png" alt="Certificate Signing Request Widget with CSR" id="Certificate Signing Request Widget with CSR" >}}


The <span class="material-icons">more_vert</span> icon for a listed CSR shows a dropdown list of options to create an ACME certificate, download, edit, or delete an existing CSR.

**Create ACME Certificate** opens the [**Create ACME Certificate**](#create-acme-certificate-screen) screen.

**Edit** opens the [**Edit CA**](#edit-csr-screen) screen for the selected CSR.

<span class="iconify" data-icon="mdi:tray-arrow-down"></span> **Download** puts a copy of the CSR on your server.

<span class="material-icons">delete</span> **Delete** opens the **Delete Certificate** dialog.

**Add** opens the **[Add CSR](#add-csr-wizard-screens)** wizard. 

### Create ACME Certificate Screen

The **Create ACME Certificate** screen shows settings to create an ACME Certificate by selecting an ACME Server Directory URI.

{{< trueimage src="/images/SCALE/Credentials/CreateACMECertificateScreen.png" alt="Create ACME Certificate Screen" id="Create ACME Certificate Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Identifier** | A text entry field that accepts manual or copy/paste entry of a name for the certificate. A name consists of alphanumeric characters, and can use the underscore (_), and/or dash (-) special characters. |
| **Terms of Service** | Accepts the terms of service for the given ACME server. |
| **Renew Certificate Days** | Specified the number of days to renew the certificate before it expires. |
| **Custom ACME Server Directory URI** | Enables using a custom ACME server directory URI. <br>If the **ACME Server Directory URI** is set to **Lets Encrypt Staging Directory**, enabling this option changes the **ACME Server Directory URI** value to show **https://acme-staging-v02.api.letsencrypt.org/directory**. <br>If the **ACME Server Directory URI** is set to **Let's Encrypt Production Directory**, enabling this option changes the **ACME Server Directory URI** value changes to show **https://acme-v02.api.letsencrypt.org/directory**. |
| **ACME Server Directory URI** | Sets the URI of the ACME server director. Shows two preconfigured URI options on a dropdown list: **Lets Encrypt Staging Directory** and **Let's Encrypt Production Directory**. <br><li>**Lets Encrypt Staging Directory**  <br><li>**Let's Encrypt Production Directory**  </li> |
| **DNS:UnitedStates** | Sets the authenticator to validate the domain. Shows a dropdown list of previously configured ACME DNS authenticators. |
{{< /truetable >}}

### Edit CSR Screen

The **Edit CSR** screen shows the current CSR settings. It allows changing the CSR name (identifier), downloading or viewing the CSR, and provides access to the **Create ACME Certificate** screen.

{{< trueimage src="/images/SCALE/Credentials/EditCSRScreen.png" alt="Edit CSR Screen" id="Edit CSR Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Common** | Shows the common name for the certificate. A name can include the underscore (_) or dash (-) special characters. The default value for the **truenas_default** certificate is **localhost**. |
| **SAN** | Shows the subject alternative name (SAN) of the certificate. The default value for the **truenas_default** certificate is **DNS:localhost**. |
| **Distinguished Name** | Shows the full directory service distinguished name for the certificate. This includes the country, organization, common name, email address, state, locality, and SAN properties. |
| **Country** | Shows the country where the certificate is issued. The default value for the **truenas_default** certificate is **US**. |
| **State** | Shows the organization for the certificate. The default value for the **truenas_default** certificate is **iXsystems**. |
| **City** | Shows the city where the certificate organization is located. The default value for the **truenas_default** certificate is **Maryville** |
| **Organization** | Shows the country where the certificate is issued. The default value for the **truenas_default** certificate is **US** |
| **Organizational Unit** | Shows the department in the organization for the certificate. No default value for the **truenas_default** certificate is specified. |
| **Email** | Shows the email address associated with the certificate. The default value for the **truenas_default** certificate is **info@ixsystems.com.** |
| **Type** | Shows the type of certificate. The default value for the **truenas_default** certificate is **Certificate**. |
| **Path** | Shows the path to where the certificate is stored. The default value for the **truenas_default** certificate is <code>/etc/certificates</code>. |
| **Digest Algorithm** | Shows the authentication protocol for the certificates. The default value for the **truenas_default** certificate is **SHA256S**. |
| **Key Length** | Shows the number of characters in the key for the certificate. The default value for the **truenas_default** certificate is **2048**. |
{{< /truetable >}}

**View/Download Certificate** opens a window with the certificate string.

**View/Download Key** opens a window with the certificate private key.

The <span class="material-icons">assignment</span> clipboard icon copies the certificate or public key to the clipboard.

{{< include file="/static/includes/DeleteCertificateDialog.md" >}}

## Add CSR Wizard Screens

Certificate signing requests (CSR) allow configuring a message the TrueNAS system sends to a registration authority of the public key infrastructure to apply for a digital identity certificate.

The **Add CSR** wizard has five screens to configure a new certificate signing request (CSR) on TrueNAS.
The wizard screens are:

1 **[Identifier and Type](#identifier-and-type-options)**

2 **[Certificate Options](#certificate-options)**

3 **[Certificate Subject](#certificate-subject-options)**

4 **[Extra Constraints](#extra-constraints-options)**

5 **[Confirm Options](#confirm-options)**

### Identifier and Type Options

The **Add CSR** wizard **Identifier and Type** settings specify the name, type, and profile to use when creating a new CSR.
Changing the **Type** setting to import a CSR changes the setting options and wizard screens shown.

{{< columns >}}
{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Identifier and Type RSA" id="Identifier and Type RSA" >}}
<--->
{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndTypeImport.png" alt="Identifier and Type Import CSR" id="Identifier and Type Import CSR" >}}
{{< /columns >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Text entry field that accepts manual or copy/paste entry of a descriptive identifier for this CSR. |
| **Type** | Set the type of CSR and change the settings shown in the **Add CSR** wizard. Options are: <br><li>**Certificate Signing Request** - Controls when an external CA issues (signs) the certificate. Typically used with ACME or other CAs that most popular browsers trust by default. <br><li>**Import Certificate Signing Request** - Imports an existing CSR onto the system. Typically used with ACME CAs. Selecting **Import Certificate Signing Request** removes the **Profile** field, and the **Certificate Subject** and **Extra Constraints** wizard screens.</li>  |
| **Profile** | Sets the predefined certificate extention to either **HTTPS RSA Certificate** or **HTTPS ECC Certificate**. |
{{< /truetable >}}

### Certificate Options Screen

**Certificate Options** show when **Type** is set to **Certificate Signing Request** on the **Identifier and Type** wizard screen. The settings specify the private key type, number of bits in the key used by the cryptographic algorithm, and the cryptographic algorithm the CSR uses.

When **Type** is set to **Import Certificate Signing Request**, the settings shown add the signing request and private key of the imported certificate and the authentication credentials for the private key.

{{< columns >}}
{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Certificate Options RSA Type" id="Add CSR Certificate Options RSA Type" >}}
<--->
{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Certificate Options EC Type" id="Add CSR Certificate Options EC Type" >}}
{{< /columns >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Key Type** | Sets the type of certificate to **RSA** or **EC**, and changes settings shown on the screen. <br>**RSA** shows the **Key Length** field. <br>**EC** shows the **EC Curve** field. See [Why is elliptic curve cryptography not widely used, compared to RSA?](https://crypto.stackexchange.com/questions/1190/why-is-elliptic-curve-cryptography-not-widely-used-compared-to-rsa) for more information about key types. |
| **EC Curve** | Shows when **Key Type** is set to **EC**. Shows EC type curve options: **BrainpoolP512R1**, **BrainpoolP384R1**, **BrainpoolP256R1**, **SECP256K1**, **SECP384R1**, **SECP521R1**, and **ed25519**. Brainpool curves can be more secure, while SECP curves can be faster. See [Elliptic Curve performance: NIST vs Brainpool](https://tls.mbed.org/kb/cryptography/elliptic-curve-performance-nist-vs-brainpool) for more information. |
| **Key Length** | Shows when **Key Type** is set to **RSA**. Sets the number of bits in the key used by the cryptographic algorithm. Options are: **1024**, **2048** or **4096**. A minimum key length of 2048 is recommended for security reasons. |
| **Digest Algorithm** | Sets the cryptographic algorithm used. The options are: **SHA1**, **SHA224**, **SHA256**, **SHA384** and **SHA512**. Only change the default **SHA256** if the organization requires a different algorithm. |
{{< /truetable >}}

#### Import Certificate Screen

The **Import Certificate** screen shows when **Type** on the **Identifier and Type** screen is set to **Import Certificate Signing Request**.

{{< trueimage src="/images/SCALE/Credentials/AddCSRImportCSR.png" alt="Add CSR Import Certificate" id="Add CSR Import Certificate" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Signing Request** | Text entry field that accepts manual or copy/paste entry of the certificate for the signing request. |
| **Private Key** | Text entry field that accepts manual or copy/paste entry of the 1024-bit private key associated with the certificate when available. |
| **Passphrase** | Text entry field that accepts manual or copy/paste entry of the passphrase for the private key. |
| **Confirm Passphrase** | Text entry field that accepts manual or copy/paste re-entry of the passphrase for the private key. |
{{< /truetable >}}

### Certificate Subject Settings

The **Certificate Subject** settings define the geographical location, name, and email for the organization using the certificate.
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

{{< trueimage src="/images/SCALE/Credentials/AddCSRCertificateSubject.png" alt="Add CSR Certificate Subject Screen" id="Add CSR Certificate Subject Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Country** | Sets the country where the organization is located. Accepts keyboard entry to filter the dropdown list. |
| **State** | Text entry field that sets the state or province where the organization is located. |
| **Locality** | Text entry field that sets the city where the organization is located. For example, *New York*. |
| **Organization** | Text entry field that accepts manual or copy/paste entry of the name of the company or organization. |
| **Organizational Unit** | Text entry field that accepts manual of copy/paste entry of the organizational unit (department) name. |
| **Email** | Text entry field that accepts manual or copy/paste entry of the email address of the person responsible for the certificate. |
| **Common Name** | Text entry field that accepts manual or copy/paste entry of the [fully qualified host name (FQHN)](https://kb.iu.edu/d/aiuv) of the system. This name must be unique within a certificate chain. |
| **Subject Alternate Names** | Sets multi-domain support of additional domains to secure. Text entry field that accepts manual or copy/paste entry of additional domains to secure for multi-domain support. Separate each domain by pressing <kbd>Enter</kbd>. For example, if the primary domain is *example.com*, entering *www.example.com* secures both addresses. | 
{{< /truetable >}}

#### Extra Constraints Settings

The **Extra Constraints** screen shows when adding a CSR. Settings on this screen are optional.

The **Extra Constraints** settings contain certificate extension options:
* **Basic Constraints** limits the path length for a certificate chain.
* **Authority Key Identifier** identifies the public key corresponding to the private key used to sign a certificate.
* **Key Usage** defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** further refines key usage extensions.

The **Extra Constraints** settings change based on the selection in **Type** on the **Identifier and Type** screen.

After selecting **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, or **Key Usage**, more settings show for that option.

{{< trueimage src="/images/SCALE/Credentials/AddCSRExtraConstraints.png" alt="Add CSR Extra Constraints Screen" id="Add CSR Extra Constraints Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Basic Constraints** | Activates this extension. Identifies whether the subject of this certificate subject is a CA, and the maximum depth of valid certification paths that include this certificate. | 
| **Path Length** | Shows when **Basic Constraints** is enabled. Text entry field that accepts manual or copy/paste entry of a number that sets the number of non-self-issued intermediate certificates that can follow this certificate in a valid certification path. Entering **0** allows a single additional certificate to follow in the certificate path. Value cannot be less than **0**. |
| **Basic Constraints Config** | Specifies the extension type. The dropdown list options are: <br><li>**CA** - Select when the certificate is a certificate authority (CA) <br><li>**Critical Extension** - Select when the certificate is a critical extension. Clients must recognize critical extensions to prevent rejection. </li> Web certificates typically require you to disable **CA** and enable **Critical Extension**. |
| **Extended Key Usage** | Activates this certificate extension, and shows the **Usages** setting. The extended key usage extension identifies and limits valid uses for this certificate, such as client or server authentication. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details. | 
| **Usages** | Shows after selecting **Extended Key Usage**, and sets the options to identify the purpose of this public key. Typically used for the end entity certificates. You can select multiple usages. These show in the field separated by a comma (,). Options are **ANY_EXTENDED_KEY_USAGE**, **CERTIFICATE_TRANSPARENCY**, **CLIENT_AUTH**, **CODE_SIGNING**, **EMAIL_PROTECTION**, **IPSEC_IKE**, **KERBEROS_PKINIT_KDC**, **OCSP_SIGNING**, **SERVER_AUTH**, **SMARTCARD_LOGON**, or **TIME_STAMPING**. Do not mark this extension critical when set to **ANY_EXTENDED_KEY_USAGE**. Using the **Extended Key Usage** and **Key Usage** extensions requires the purpose of the certificate to be consistent with both extensions. See [RFC 3280, section 4.2.13](https://www.ietf.org/rfc/rfc3280.txt) for more details. |
| **Critical Extension** | Shows after selecting **Extended Key Usage**. Sets the extension to critical or non-critical for the certificate. Critical extensions must be recognized by the system using the certificate, or this certificate is rejected. Extensions identified as non-critical can be ignored by the system using the certificate, and the certificate is still approved. |
| **Key Usage** | Activate this certificate extension, and shows the **Key Usage Config** field. The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate. The usage restriction might be employed when a key that can be used for a few operations should be restricted. For example, when an RSA key should only be used to verify signatures on objects other than public key certificates and CRLs, and the digital signature bits are asserted. Likewise, when an RSA key should only be used for key management, the key encipherment bit should be asserted. See [RFC 3280, section 4.2.1.3](https://www.ietf.org/rfc/rfc3280.txt) for more information. |
| **Key Usage Config** |Shows after selecting **Extended Key Usage** or **Key Usage**. Sets the key usage extension to valid option(s) on the dropdown list. Options are: **Digital Signature**, **Content Commitment**, **Key Encipherment**, **Data Encipherment**, **Key Agreement**, **Key Cert Sign**, **CRL Sign**, **Encipher Only**, **Decipher Only** or **Critical Extension**. Web certificates typically need at least a digital signature and possibly key ecncipherment or key agreement, while other applications might need other usages. |
{{< /truetable >}}

### Confirm Options 
The **Confirm Options** screen shows a summary of settings for the CSR when adding a new certificate. It shows the **Type**, **Key Type**, **Key Length**, **Digest Algorithm**, **Lifetime**, **Country**, and **Basic Constraints Config** setting values.
When importing a certificate, the screen shows the **Type**, **Signing Request**, and **Private Key** setting values.

{{< trueimage src="/images/SCALE/Credentials/AddCSRConfirmOptions.png" alt="Add CSR Confirm Options" id="Add CSR Confirm Options" >}}

**Save** adds the certificate to TrueNAS.
**Back** returns to previous screens to make changes before you save.
**Next** advances to the next screen in the sequence to return to **Confirm Options**.
