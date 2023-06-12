---
title: "Configuring IDP SAML as SSO for TrueCommand SAML Service"
description: "Provides information on setting up and identity provider (IDP) SAML provider as SSO for TrueCommand SAML service."
weight: 40
aliases:
tags:
- tcsaml
---

{{< toc >}}

TrueCommand allows identity provider (IDP) SAML SSO configuration as of release 2.3.3.
With IDP-SAML SSO you can configure a provider such as Okta, AuthO, OneLogin, Google, and others to provide TrueCommand single sign-on (SSO) through the IDP SAML service dashboard instead of using the TrueCommand SAML sign-in option. 

Security Assertion Markup Language (SAML) is an SSO standard for logging users into applications that require authentication credentials (like GitHub, G-Mail, etc.). 
SSO works by transferring a known identity for a user to another location that provides services to the user. 
SAML accomplishes the transfer by exchanging digitally-signed XML documents. 

A SAML configuration requires an Identity Provider (IDP) and Service Provider (SP). When the IDP-SAML service provides the SSO, TrueCommand becomes the service provider. 

IDP-SAML provider configuration settings and attributes can differ. 
This article provides general instructions, settings, and attributes for configuring an IDP-SAML SSO for TrueCommand as a cloud service provider. 

{{< hint type=note >}}
TrueCommand IDP SAML does not support groups at this time.
{{< /hint >}}

## TrueCommand Requirements

TrueCommand requires configuring the [general settings](#general-settings) and a set of [attributes](#mapping-attributes).

### General Settings

Set support to PERSISTENT.

Download the IDP SAML metadata.

Download or copy/paste the single sign-in URL (https://)

Enter attributes as shown in the table below, with the underscore (*attribute_name*) if indicated.

For IDP SAML SSO, we do not require the certificates from the IDP provider.

### Mapping Attributes
Define these attributes in the IDP SAML service provider:

{{< truetable >}}
| Attribute | Value |
|-----------|-------|
| Username | unique_name |
| Full Name | given_name or display_name |
| Email | mail or email |
| Title | title |
| Phone Number | telephone_number |
{{< /truetable >}}

{{< taglist tag="tcsaml" limit="10" title="Related SAML Articles" >}}
