---
title: "CAs"
description: "This article describes the Certificate Authorities screen settings and functions."
weight: 155
tags:
- corecertificates
- coreca
---

{{< toc >}}

![CAInternalIntermediate](/images/CORE/13.0/CAInternalIntermediate.png "CA Internal and Intermediate")

## Identifier and Type

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Descriptive identifier for this certificate authority. |
| **Type** | Select the CA type from the dropdown list of options. Select **Internal CA** for a certificate authority that functions like a publicly-trusted CA used to sign certificates for an internal network. This CA is not trusted outside the private network. Select **Intermediate CA** for a CA that lives between the root and end-entity certificates. Its main purpose is to define and authorize the types of certificates requested from the root CA. Select **Import CA** for a CA that allows importing an existing CA onto the system. For more information, see [What are Subordinate CAs and Why Would You Want Your Own?](https://www.globalsign.com/en/blog/what-is-an-intermediate-or-subordinate-certificate-authority). |
| **Profiles** | Select predefined certificate extensions from the dropdown list. Options are **Opentvpn Root CA** and **CA**. Choose a profile that best matches your certificate usage scenario. |
{{< /truetable >}}

## Internal and Intermediate CAs

{{< include file="content/_includes/CertificateAuthorityIdentifierType.md" type="page" >}}

## Import CAs

![CAImport](/images/CORE/13.0/CAImport.png "CA Import")

{{< include file="content/_includes/CertificateAuthorityImport.md" type="page" >}}

{{< taglist tag="corecertificates" limit="10" >}}
