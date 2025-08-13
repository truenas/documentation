---
title: "Certificate Signing Requests Screens"
description: "Provides information on the Certificates Signing Requests screens and settings."
weight: 30
aliases:
tags:
 - csr
 - certificates
---

The **Certificate Signing Requests** widget, on the **Certificates** screen, shows a list of certificate signing requires (CSRs) configured on the system.
CSR.

{{< trueimage src="/images/SCALE/Credentials/CertificateSigningRequestWidgetNoCSR.png" alt="Certificate Signing Request Widget No CSRs" id="Certificate Signing Request Widget No CSRs" >}}

The <span class="material-icons">more_vert</span> icon for a listed CSR shows a dropdown list of options to create an ACME certificate, download, edit, or delete an existing CSR.

**Create ACME Certificate** opens the [**Create ACME Certificate**](#create-acme-certificate-screen) screen.

**Edit** opens the [**Edit CA**](#edit-csr-screen) screen for the selected CSR.

<span class="iconify" data-icon="mdi:tray-arrow-down"></span> **Download** puts a copy of the CSR on your server.

<span class="material-icons">delete</span> **Delete** opens the **Delete Certificate** dialog.

**Add** opens the **[Add CSR](#add-csr-wizard-screens)** wizard. 

### Create ACME Certificate Screen

The **Create ACME Certificate** screen shows setttings to create an ACME Certificate by selecting an ACME Server Directory URI.

{{< trueimage src="/images/SCALE/Credentials/CreateACMECertificateScreen.png" alt="Create ACME Certificate Screen" id="Create ACME Certificate Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Identifier** | A text entry field that accepts manual or copy/paste entry of a name for the certificate. A name consits of alphanumeric characters, and can use the underscore (_), and/or dash (-) special characters. |
| **Terms of Service** | Accepts the termis of service for the given ACME server. |
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
| **SAN** | Shows the subject alternative name (SAN) name for the certificate. The default value for the **truenas_default** certificate is **DNS:localhost**. |
| **Distinguished Name** | Shows the full directory service distinguished name for the certificate. This includes the country, organization, common name, email address, state, locality, and SAN properties. |
| **Country** | Shows the country where the certificate is issued. The default value for the **truenas_default** certificate is **US**. |
| **State** | Shows the organization for the certificate. The default value for the **truenas_default** certificate is **iXsystems**. |
| **City** | Shows the city where the certificate organization is located. The default value for the **truenas_default** certificate is **Maryville** |
| **Organization** | Shows the country where the certificate is issued. The default value for the **truenas_default** certificate is **US** |
| **Organizational Unit** | Shows the department in the organization for the certificate. No default value for the **truenas_default** certificate is specified. |
| **Email** | Shows the email address associated with the certificate. The default value for the **truenas_default** certificate is **info@ixsystems.com.** |
| **Type** | Shows the type of certificate. The default value for the **truenas_default** certificate is **Certificate**. |
| **Path** | Shows the path to where the certificate is stored. The default value for the **truenas_default** certificate is <code>/etc/certificates</code>. |
| **Digest Algorithmm** | Shows the authentication protocol for the certificates. The default value for the **truenas_default** certificate is **SHA256S**. |
| **Key Length** | Shows the number of characters in the key for the certificate. The default value for the **truenas_default** certificate is **2048**. |
{{< /truetable >}}

**View/Download Certificate** opens a window with the certificate string.

**View/Download Key** opens a window with the certificate private key.

The <span class="material-icons">assignment</span> clipboard icon copies the certificate or public key to the clipboard.

{{< include file="/static/includes/DeleteCertificateDialog.md" >}}

## Add CSR Wizard Screens

Certificate signing requests (CSR) allows users to configure a message the TrueNAS system sends to a registration authority of the public key infrastructure to apply for a digital identity certificate.

The **Add CSR** wizard has five screens that step through configuring a new certificate signing request (CSR) on TrueNAS.
The wizard screens are:

1 **[Identifier and Type](#identifier-and-type-options)**

2 **[Certificate Options](#certificate-options)**

3 **[Certificate Subject](#certificate-subject-options)**

4 **[Extra Constraints](#extra-constraints-options)**

5 **[Confirm Options](#confirm-options)**

### Identifier and Type Options

The **Identifier and Type** settings specify the certificate signing request (CSR) name and whether to create a new CSR or import an existing CSR.     
Users can also select a predefined certificate extension from the **Profile** dropdown list.
{{< expand "Click Here for More Information" "v" >}}
The selection in **Type** changes setting options on this screen, the **Certificate Options** and **Extra Constraints** screens, and determines if the **Certificate Subject** screen displays at all.

{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Identifier and Type" id="Add CSR Identifier and Type" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Required. Enter a descriptive identifier for this certificate. |
| **Type** | Select the type of CSR from the dropdown list. Options are **Certificate Signing Request** and **Import Certificate Signing Request**. **Certificate Signing Requests** control when an external CA issues (signs) the certificate. Typically used with ACME or other CAs that most popular browsers trust by default. **Import Certificate Signing Request** lets you import an existing CSR onto the system. Typically used with ACME or internal CAs. Selecting **Import Certificate Signing Request** removes the **Profile** field. |
| **Profile** | Displays if **Certificate Signing Request** is set in **Type**. Select a predefined certificate extension from the dropdown list. Choose a profile that best matches your certificate usage scenario. Options are **HTTPS RSA Certificate** and **HTTPS ECC Certificate**. |
{{< /truetable >}}
{{< /expand >}}

### Certificate Options
The **Certificate Options** settings specify the type of private key type to use, the number of bits in the key used by the cryptographic algorithm, and the cryptographic algorithm the CSR uses.

There are no **Certificate Options** settings if **Type** on the **Identifier and Type** screen is set to **Import Certificate Signing Request**.

The **Key Type** selection changes fields displayed. **RSA** is the default setting in **Key Type**.

{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Identifier and Type" id="Add CSR Identifier and Type" >}}
![AddCSRCertificateOptionsRSAType](/images/SCALE/Credentials/AddCSRCertificateOptionsRSAType.png "Add CSR Certificate Options RSA Type")

{{< expand "Certificate Options Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Key Type** | Select the key type from the dropdown list. Options are **RSA** or **EC**. **EC** displays the **EC Curve** field. See [Why is elliptic curve cryptography not widely used, compared to RSA?](https://crypto.stackexchange.com/questions/1190/why-is-elliptic-curve-cryptography-not-widely-used-compared-to-rsa) for more information about key types. |
| **EC Curve** | Displays when **EC** is selected in **Key Type**. Select the curve type from the dropdown list. Options are **BrainpoolP512R1**, **BrainpoolP384R1**, **BrainpoolP256R1**, **SECP256K1**, **SECP384R1**, **SECP521R1**, and **ed25519**. Brainpool curves can be more secure while SECP curves can be faster. See [Elliptic Curve performance: NIST vs Brainpool](https://tls.mbed.org/kb/cryptography/elliptic-curve-performance-nist-vs-brainpool) for more information. |
| **Key Length** | Required. Displays when **RSA** is selected in **Key Type**. Select the number of bits in the key used by the cryptographic algorithm from the dropdown list. Options are **1024**, **2048** or **4096**. For security reasons, a minimum key length of 2048 is recommended. |
| **Digest Algorithm** | Select the cryptographic algorithm to use from the dropdown list. Options are **SHA1**, **SHA224**, **SHA256**, **SHA384** and **SHA512**. Only change the default **SHA256** if the organization requires a different algorithm. |
| **Lifetime** | Enter the number of days for the lifetime of the CA. |
{{< /truetable >}}
{{< /expand >}}

### Certificate Subject Settings
The **Certificate Subject** settings lets users define the location, name, and email for the organization using the certificate.
Users can also enter the system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and any additional domains for multi-domain support.

The **Certificate Subject** settings do not display if **Type** on the **Identifier and Type** screen is set to **Import Certificate Signing Request**.

{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Identifier and Type" id="Add CSR Identifier and Type" >}}
![AddCSRCertificateSubject](/images/SCALE/Credentials/AddCSRCertificateSubject.png "Add CSR Certificate Subject CSR Type") 

{{< expand "Certificate Subject Settings" "v" >}}
{{< truetable >}}
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
{{< /truetable >}}
{{< /expand >}}

### Extra Constraints Settings

{{< trueimage src="/images/SCALE/Credentials/AddCSRExtraConstraints.png" alt="Add CSR Extra Constraints" id="Add CSR Extra Constraints" >}}

The **Extra Constraints** settings contains certificate extension options:
* **Basic Constraints** that when enabled limits the path length for a certificate chain.
* **Authority Key Identifier** that when enabled provides a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage** that when enabled defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** that when enabled further refines key usage extensions.

The **Extra Constraints** settings change based on the selection in **Type** on the **Identifier and Type** screen.

#### Extra Constraints - Certificate Signing Request Type
After selecting **Basic Constraints**, **Authority Key Identifier**, **Extended Key Usage**, or **Key Usage**, each displays more settings that option needs.

{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Identifier and Type" id="Add CSR Identifier and Type" >}}
![AddCSRExtraConstraintsAllExpanded](/images/SCALE/Credentials/AddCSRExtraConstraintsAllExpanded.png "Add CSR Extra Constraints")

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Basic Constraints** | Select to activate this extension. Basic Constraints extension identifies whether this certificate subject is a CA and the maximum depth of valid certification paths that include this certificate. |
| **Path Length** | Displays after selecting **Basic Constraints**. Enter how many non-self-issued intermediate certificates that can follow this certificate in a valid certification path. Entering **0** allows a single additional certificate to follow in the certificate path. Value cannot be less than **0**. |
| **Basic Constraints Config** | Select the option to specify the extension type from the dropdown list. Options are **CA** and **Critical Extension**. Specify whether to use the certificate for a Certificate Authority and whether this extension is critical. Clients must recognize critical extensions to prevent rejection. Web certificates typically require you to disable **CA** and enable **Critical Extension**. |  
| **Extended Key Usage** | Select to activate this certificate extension. The Extended Key Usage extension identifies and limits valid uses for this certificate, such as client authentication or server authentication. See [RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more details. Displays the **Usages** field. |
| **Usages** | Displays after selecting **Extended Key Usage**. Select the option to identify the purpose of this public key from the dropdown list. Typically used for the end entity certificates. You can select multiple usages that display separated by a comma (,). Options are **ANY_EXTENDED_KEY_USAGE**, **CERTIFICATE_TRANSPARENCY**, **CLIENT_AUTH**, **CODE_SIGNING**, **EMAIL_PROTECTION**, **IPSEC_IKE**, **KERBEROS_PKINIT_KDC**, **OCSP_SIGNING**, **SERVER_AUTH**, **SMARTCARD_LOGON**, or **TIME_STAMPING**. Do not mark this extension critical when set to **ANY_EXTENDED_KEY_USAGE**. Using both **Extended Key Usage** and **Key Usage** extensions requires that the purpose of the certificate is consistent with both extensions. See [RFC 3280, section 4.2.13](https://www.ietf.org/rfc/rfc3280.txt) for more details. |
| **Critical Extension** | Displays after selecting **Extended Key Usage**. Select to identify this extension as critical for the certificate. Critical extensions must be recognized by the certificate-using system or this certificate is rejected. Extensions identified as not critical can be ignored by the certificate-using system and the certificate still approved. |
| **Key Usage** | Select to activate this certificate extension. Displays the **Key Usage Config** field. The key usage extension defines the purpose (e.g., encipherment, signature, certificate signing) of the key contained in the certificate. The usage restriction might be employed when a key that could be used for more than one operation is to be restricted. For example, when an RSA key should be used only to verify signatures on objects other than public key certificates and CRLs, the **Digital Signature** bits are asserted. Likewise, when an RSA key should be used only for key management, the **Key Encipherment** bit is asserted. See [RFC 3280, section 4.2.13](https://www.ietf.org/rfc/rfc3280.txt) for more information. |
| **Key Usage Config** | Displays after selecting **Extended Key Usage** or **Key Usage**. Select the key usage extension from the dropdown list. Options are **Digital Signature**, **Content Commitment**, **Key Encipherment**, **Data Encipherment**, **Key Agreement**, **Key Cert Sign**, **CRL Sign**, **Encipher Only**, **Decipher Only** or **Critical Extension**. Web certificates typically need at least Digital Signature and possibly Key Encipherment or Key Agreement, while other applications may need other usages. |
{{< /truetable >}}
{{< /expand >}}

#### Import Certificate Signing Request Type Options
When **Type** on **Identifier and Type** is set to **Import Certificate Signing Request** the **Import Certificate** screen displays.

{{< trueimage src="/images/SCALE/Credentials/AddCSRExtraConstraints.png" alt="Add CSR Extra Constraints" id="Add CSR Extra Constraints" >}}
![AddCSRImportCSR](/images/SCALE/Credentials/AddCSRImportCSR.png "Add CSR Import Certificate")

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Signing Request** | Required. Paste the certificate for the certificate signing request into this field. |
| **Private Key** | Required. Paste the private key associated with the certificate when available. Provide a key at least 1024 bits long. |
| **Passphrase** | Enter the passphrase for the private key. |
| **Confirm Passphrase** | Re-enter the passphrase for the private key. |
{{< /truetable >}}

{{< /expand >}}

### Confirm Options 
The final step screen is the **Confirm Options** that displays the CA **Type**, **Key Type**, **Key Length**, **Digest Algorithm**, **Lifetime**, **Country**, and **Basich Constraints Config**.
For **Import Certificate Signing Request** type, the screen displays **Type**, **Signing Request** and **Private Key**.

{{< trueimage src="/images/SCALE/Credentials/AddCSRExtraConstraints.png" alt="Add CSR Extra Constraints" id="Add CSR Extra Constraints" >}}
![AddCSRConfirmOptions](/images/SCALE/Credentials/AddCSRConfirmOptions.png "Add CSR Confirm Options")

**Save** adds the certificate to TrueNAS. **Back** returns to previous screens to make changes before you save. **Next** advances to the next screen in the sequence to return to **Confirm Options**.
