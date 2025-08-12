---
title: "Certificates Screens"
description: "Provides information on the Certificates screens and settings."
weight: 10
aliases:
 - /scale/scaleclireference/system/clicertificate/
tags:
 - certificates
 - csr
---

The **Certificates** widget on the **Credentials > Certificates** screen shows certificates added to TrueNAS.

{{< trueimage src="/images/SCALE/Credentials/CertificatesWidget.png" alt="Certificates Widget" id="Certificates Widget" >}}

**Import** opens the **[Import Certificate](#import-certificate)** screen.

The <span class="material-icons">more_vert</span> icon for a listed certificate shows a dropdown list of options to download, edit, or delete an existing certificate.
Each TrueNAS has an internal certificate that enables encrypted access to the web interface.

<span class="material-icons">download</span> **Download** downloads the certificate to the system. In Windows, this is the **Downloads** folder.

<span class="material-icons">edit</span> **Edit** opens the [**Edit Certificate**](#edit-certificate-screen) screen.

<span class="material-icons">delete</span> **Delete** opens the [**Delete**](#delete-certificate-dialog) dialog.

### Import Certificate

The **Import Certificate** screen provides the settings options needed to import an existing certificate using the private key.

{{< trueimage src="/images/SCALE/Credentials/ImportCertificateScreen.png" alt="Import Certificate Screen" id="Import Certificates Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | (Required) Descriptive identifier for this certificate. Accepts manual or copy/paste entry of a name. |
| **Add To Trusted Store** | Adds the imported certificate to the trusted store in TrueNAS. |
| **Certificate** | (Required) Field to paste the certificate for the certificate you are importing. |
| **Private Key** | (Required) Paste the private key associated with the certificate you are importing. Provide a key at least 1024 bits long. |
| **Passphrase** | (Required) Text entry field that accepts manual or copy/paste of a password associated with the private key for the certificate you are importing. |
| **Confirm Passphrase** | (Required) Text entry field where you can manually re-enter or copy/paste the passphrase entered in **Passphrase**. |
{{< /truetable >}}

## Edit Certificate Screen

The **Edit Certificate** screen shows the current certificate identifier (name), subject information for the certificate, the view/download certificate and key options, and allows you to add the certificate to the TrueNAS trusted store. 

{{< trueimage src="/images/SCALE/Credentials/EditCertificateScreen.png" alt="Edit Certificate Screen" id="Edit Certificates Screen" >}}

The **Subject** area of the **Edit Certificate** screen shows information about the certificate.

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
| **Key Type** | Shows the certificate key type. The default value for the **truenas_default** certificate is **RSA**.  |
| **Until** | Shows the expiration date for the certificate. |
| **Lifetime** | Shows the number of days the certificate remains valid. The default value for the **truenas_default** certificate is **397** days. |
{{< /truetable >}}

**View/Download Certificate** opens a window with the certificate string.

**View/Download Key** opens a window with the certificate private key.

The <span class="material-icons">assignment</span> clipboard icon copies the certificate or public key to the clipboard.

**Download** downloads a copy of the certificate to your server. Keep the certificate in a secure area where you can back it up and save it.

### Delete Certificate Dialog

The **Delete Certificate** dialog removes the certificate from the TrueNAS system.

{{< trueimage src="/images/SCALE/Credentials/DeleteCertificateDialog.png" alt="Delete Certificate Dialog" id="Delete Certificates Dialog" >}}

**Force** deletes the certificate if it is in use by a feature or function in the UI. For example, an application uses it for authentication.

**Delete** removes the certificate.