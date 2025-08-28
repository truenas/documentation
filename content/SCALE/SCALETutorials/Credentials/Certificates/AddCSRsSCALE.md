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
- ACME DNS authenticator
- ACME certificate
---

The **Certificate Signing Requests** widget allows users to configure a message the system sends to a registration authority of the public key infrastructure to apply for a digital identity certificate. 

## Adding a CSR

{{< hint type=info >}}
An ACME certificate is created based on the settings in the selected CSR.

If you plan to create an ACME certificate, before adding a CSR, make sure the certificate authority provider account (i.e., Cloudflare, DigitalOcean, etc.) is correctly configured with all domains entered in this CSR.

For example, if using a Cloudflare DNS authenticator, in the Cloudflare account, register the domain(s) entered in the **Subject Alternative Name** field on the **Certificate Subject** screen in the **Add CSR** wizard

If the CSR and provider accounts are not properly configured, TrueNAS shows an error indicating the problem with the configuration.
For information on how to add a DNS authenticator in TrueNAS, [click here]({{< relref "AddACMESCALE.md" >}}).
{{< /hint >}}

You can only edit the name of the CSR after you click **Save**.

To add a CSR:

First, enter a name and select the CSR type. The **Add CSR** allows a user to create a certificate signing request(CSR) or import a certificate for a CSR. Users can select a predefined certificate extension from the **Profiles** dropdown list.

{{< trueimage src="/images/SCALE/Credentials/AddCSRIdentifierAndType.png" alt="Add CSR Certificate Options RSA Type" id="Add CSR Certificate Options RSA Type" >}}

Next, select or enter the certificate options for the CSR.
Choose options that specify the type of private key to use, the number of bits in the key used by the cryptographic algorithm, and the cryptographic algorithm the CSR uses.

When entering values for the **Certificate Subject** settings, enter short values for the geographic information, where possible.
For example, enter TN instead of Tennessee for the State. Enter all required values (indicated by the asterisk).
The **Common Name** can be the full domain assigned to the TrueNAS system, or just the example.net portion of the domain name. Include this in the **Subject Alternative Name** field. You can enter any other system [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and domains for multi-domain support.

{{< trueimage src="/images/SCALE/Credentials/AddCSRCertificateSubject.png" alt="Add CSR Certificate Subject Screen" id="Add CSR Certificate Subject Screen" >}}

(Optional) Enter any extra constraints you need for your scenario. The **Extra Constraints** step contains certificate extension options.

* **Basic Constraints** limits the path length for a certificate chain.
* **Authority Key Identifier** identifies the public key corresponding to the private key used to sign a certificate.
* **Key Usage** defines the purpose of the public key contained in a certificate.
* **Extended Key Usage** further refines key usage extensions.

Review the certificate options. If you want to change something, click **Back** to reach the screen with the setting option you want to change, then click **Next** to advance to the **Confirm Options** step.

Click **Save** to add the CSR.

## Importing a CSR

When importing a certificate into TrueNAS for the CSR, enter a name, then select **Import Certificate Signing Request** in **Type**. Click **Next**.

{{< trueimage src="/images/SCALE/Credentials/AddCSRImportCSR.png" alt="Add CSR Import Certificate" id="Add CSR Import Certificate" >}}

Enter or copy/paste the certificate string into **Signing Request**, then enter or copy/paste the private key into **Private Key**.
Enter the password for the private key in **Password** and **Confirm Password**. Click **Next**, review the information, and then click **Save**.

## Creating an ACME Certificate

You can access the **Create ACME Certificate** from the <span class="material-icons">more_vert</span> dropdown list or the **Edit CSR** screen, to add a certificate by selecting an ACME DNS authenticator configured in TrueNAS.

{{< hint type=info >}}
You must [configure a DNS authenticator]({{< relref "AddACMESCALE.md" >}}) to create an ACME certificate!
The ACME certificate is created based on the settings in the selected CSR.

You must have the domains added to the account providing the DNS authenticator.
For example, if using Cloudflare to create the DNS authenticator, the Cloudflare account must have the domain(s) entered in the **Subject Alternative Name** field in the **Add CSR** wizard on the **Certificate Subject** screen.
If not properly configured, TrueNAS shows an error with the configuration problem.
{{< /hint >}}

{{< trueimage src="/images/SCALE/Credentials/CreateACMECertificateScreen.png" alt="Create ACME Certificate Screen" id="Create ACME Certificate Screen" >}}

Enter a name in **Identifier**, then select **Terms of Service**.

Enter a number that specifies the time (in days) before the certificate expires  in **Renew Certificate Days**.

Select the URI of the ACME server directory from the **ACME Server Directory URI** dropdown list.

The **Domains** area shows a domain for each entry made in the **Subject Alternative Name** field on the **Certificate Subject** screen of the **Add CSR** wizard.
Select the option from the dropdown list for each domain shown. This sets the authenticator to validate the domain.


Click **Save**.
