---
title: "Managing Certificates"
description: "Provides information on adding or managing certificates in TrueNAS."
weight: 10
aliases: 
tags:
 - certificates
 - csr
keywords:
- enterprise storage solution
- nas storage 
---

The **Certificates** screen shows information for certificates, certificate signing requests (CSRs), and ACME DNS-authenticators configured on the system, and provides the ability to import or edit them.
TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can make custom certificates for authentication and validation while sharing data.

{{< trueimage src="/images/SCALE/Credentials/CredentialsCertificatesScreen.png" alt="Credentials Certificates Screen" id="Credentials Certificates Screen" >}}

## Importing Certificates

By default, TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can import and edit existing certificates.

To add a certificate to TrueNAS, click **Import** on the **Certificates** widget to open the **Import Certificates** screen.

First, enter a name as a certificate identifier. A name can include the dash (-) or underscore (_) special characters.

Select **Add To Trusted Store** if you want to add the imported certificate to the trusted store in TrueNAS.

Copy/paste the certificate into the **Certificate** field, and the private key part of the certificate into the **Private Key** field.

Enter or copy/paste the password associated with the private key into the **Password** and **Confirm Password** fields.

Click **Import** to add the certificate to TrueNAS.

## Editing a Certificate

TrueNAS allows you to rename a certificate or to add it to the TrueNAS trusted store.

Click on the <span class="material-icons">more_vert</span> icon, then select **Edit** on the dropdown list. The **Edit Certificate** screen for that certificate opens.

Enter a new name for the certificate.

Select **Add To Trusted Store** to add the certificate to the TrueNAS trusted store.

Click **Save**.

## Downloading the Certificate or Public Key

Click on the <span class="material-icons">more_vert</span> icon, then select **Edit** or **Download** on the dropdown list.
On the **Edit Certificate** screen for the selected certificate, click **View/Download Certificate**
to open a window with the certificate string.
Click **View/Download Key** to open a window with the certificate private key.

To copy the certificate or private key to the clipboard, click on the <span class="material-icons">assignment</span> clipboard icon.
Click **Download** to put a copy of the certificate or private key on your server.

Keep the certificates and private keys in a secure area where you can back them up.