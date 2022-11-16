---
title: "CAs"
descripiton: "This article describes the fields that are part of the certificate authority screen on TrueNAS CORE."
weight: 155
tags:
- corecertificates
- coreca
---

{{< toc >}}

![CAInternalIntermediate](/images/CORE/13.0/CAInternalIntermediate.png "CA Internal and Intermediate")

## Identifier and Type

| Name | Description |
|------|-------------|
| Name | Descriptive identifier for this certificate authority. |
| Type | Choose between Internal CA, Intermediate CA, and Import CA. An Internal CA functions like a publicly trusted CA to sign certificates for an internal network. They are not trusted outside the private network. An Intermediate CA lives between the root and end entity certificates and its main purpose is to define and authorize the types of certificates that can be requested from the root CA. Import CA allows an existing CA to be imported onto the system.  For more information see [What are Subordinate CAs and Why Would You Want Your Own?](https://www.globalsign.com/en/blog/what-is-an-intermediate-or-subordinate-certificate-authority)  |
| Profiles | Predefined certificate extensions. Choose a profile that best matches your certificate usage scenario. |

## Internal and Intermediate CAs

{{< include file="static/includes/Reference/CertificateAuthorityIdentifierType.md.part" markdown="true" >}}

## Import CAs

![CAImport](/images/CORE/13.0/CAImport.png "CA Import")

{{< include file="static/includes/Reference/CertificateAuthorityImport.md.part" markdown="true" >}}

{{< taglist tag="corecertificates" limit="10" >}}
