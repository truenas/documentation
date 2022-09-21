---
title: "Certificates Screens"
description: "This article provides information on SCALE Certificates screens and settings."
weight: 50
---

{{< toc >}}

The Certificates section contains all the information for certificates, certificate signing requests, certificate authorities, and DNS-authenticators. TrueNAS comes equipped with an internal, self-signed certificate that enables encrypted access to the web interface, but users can make custom certificates for authentication and validation while sharing data.

![CertificatesSCALE](/images/SCALE/CertificatesSCALE.png "Certificates Screen")

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
