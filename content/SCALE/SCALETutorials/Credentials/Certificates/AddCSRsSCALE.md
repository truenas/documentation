---
title: "Managing Certificate Signing Requests"
description: "Provides basic instructions on adding and managing certificate signing requests (CSRs) in TrueNAS."
weight: 30
aliases:
tags:
 - certificates
 - csr
keywords:
- enterprise storage solution
- nas storage 
---

The **Certificate Signing Requests** widget allows users configure the message(s) the system sends to a registration authority of the public key infrastructure to apply for a digital identity certificate. 

## Adding a CSR

To add a new CSR:

First, enter a name and select the CSR type. The **Add CSR** allows a user to either create a certificate signing request(CSR) or import a certificate for a CSR. Users can also select a predefined certificate extension from the **Profiles** dropdown list.

{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Certificate Options RSA Type" id="Add CSR Certificate Options RSA Type" >}}

When adding a CSR, the next step is to select or enter the certificate options for the CSR. Choose options that specify the type of private key to use, the number of bits in the key used by the cryptographic algorithm, and the cryptographic algorithm the CSR uses.

Next, enter the information about the certificate. Enter information about the geographical location, contact email, and other system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and additional domains for multi-domain support.

{{< trueimage src="/images/SCALE/Credentials/AddCSRCertificateSubject.png" alt="Add CSR Certificate Subject Screen" id="Add CSR Certificate Subject Screen" >}}

Lastly, enter any extra constraints you need for your scenario.
The **Extra Constraints** step contains certificate extension options.

* **Basic Constraints** limits the path length for a certificate chain.
* **Authority Key Identifier** provides a means of identifying the public key corresponding to the private key used to sign a certificate.
* **Key Usage** defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** further refines key usage extensions.

Review the certificate options. If you want to change something, click **Back** to reach the screen with the setting option you want to change, then click **Next** to advance to the **Confirm Options** step.

Click **Save** to add the CSR.

## Importing a CSR

When you want to import a certificate into TrueNAS for the CSR, use **Type** setting on the **Add CSR** screen.

Enter a name, select **Import Certificate Signing Request** in **Type**. Click Next.

{{< trueimage src="/images/SCALE/Credentials/AddCSRImportCSR.png" alt="Add CSR Import Certificate" id="Add CSR Import Certificate" >}}

Manually enter or copy/paste the certificate string into **Signing Request**, then manually enter or copy/paste the private key into **Private Key**.
Enter the password for the private key in **Password** and **Confirm Password**. Click **Next**, review the information, then click **Save**.

## Creating an ACME Certificate

You can access the **Create ACME Certificate** from the <span class="material-icons">more_vert</span> dropdown list or the **Edit CSR** screen, to add a certificate by selecting an ACME DNS authenticator configured in TrueNAS.

{{< hint type=info >}}
You must [configure a DNS authenticator]({{< relref "AddACMESCALE.md" >}}) to create an ACME certificate!
{{< /hint >}}

{{< trueimage src="/images/SCALE/Credentials/CreateACMECertificateScreen.png" alt="Create ACME Certificate Screen" id="Create ACME Certificate Screen" >}}

Enter a name in **Identifier**, and then select **Terms of Service**.

Enter a number in **Renew Certificate Days** to specify the number of days to renew the certificate before it expires.

Select the URI of the ACME server directory from the **ACME Server Directory URI** dropdown list.

Select the Domains from the **DNS:United States** dropdown list. This sets the authenticator to validate the domain.

Click **Save**.