---
title: "Setting up Certificates"
description: "A how-to for creating and importing certificates in TrueNAS."
tags: ["networking","security","certificates"]
---

## Introduction

By default TrueNAS comes equipped with an internal, self-signed certificate.
This enables encrypted access to the web interface. If desired, a new
certificate can be created or an existing certificate can be imported. To
add or import a certificate, go to **System > Certificates** and click *ADD*.
First, enter the name for the certificate. Next, choose the *Type*. The four
options are *Internal Certificate*, *Certificate Signing Request* (CSR),
*Import Certificate*, and *Import Certificate Signing Request*. The process for
each type is slightly different. Follow the appropriate section below
based on your desired type.

## Internal Certificate

Select the *Internal Certificate* type when creating a new internal certificate.
Before setting any options, ensure a <a href="/hub/tasks/administrative/certificate-authorities/">Certificate
Authority (CA)</a> has been created. A CA is used to sign the new certificate.

If desired, a profile can be selected for the certificate. Selecting a profile
automatically sets certain options such as *Key Type*, *Key Length*, *Digest
Algorithm*, and more. If you would like to set each option manually, do not
select a profile from the *Profiles* dropdown. Select a CA from the *Signing
Certificate Authority* dropdown. Select a *Key Type* from the dropdown. 
The recommended key type is *RSA*. Next, select the *Key Length*. A minimum of
*2048* is recommended for security reasons. Select a *Digest Algorithm*. The
recommended is *SHA256*. Enter the *Lifetime* of the certificate in days. This
is how long the certificate will remain valid.

Next, fill out the geographic information of the certificate. This includes 
*Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*,
*Organization*, *Email*, and *Subject Alternate Names* (optional). The *Common
Name* is the [fully-qualified hostname (FQDN)](https://kb.iu.edu/d/aiuv) and
must be unique within a certificate chain.

If *Basic Constraints* are desired, set *Enabled* and more options will appear.
Set a *Path Length*. This is how many non-self-issued intermediate certificates
that can follow this certificate in a valid certification path. Entering *0*
allows a single additional certificate to follow in the certificate path.
Cannot be less than *0*. Next, select the *Basic Constraints Config*. More than
one can be selected from the dropdown.

If an *Authority Key Identifier* is desired, set *Enabled*. Next, select the
*Authority Key Config*. More than one can be selected from the dropdown.

If *Extended Key Usage* is desired, set *Enabled*. Next, select the usage for
this public key from the *Usages* dropdown. This is typically used for end
entity certificates. Multiple usages can be selected. Do not set this
*Critical Extension* when the *Usages* contains *ANY_EXTENDED_KEY_USAGE*.
Using both *Extended Key Usage* and *Key Usage* extensions requires that the
purpose of the certificate is consistent with both extensions. See
[RFC 3280, section 4.2.1.13](https://www.ietf.org/rfc/rfc3280.txt) for more
details.


## Certificate Signing Request

To create a Certificate Signing Request (CSR), select the *Certificate Signing
Request* as the *Type*. All the settings are the same as
[Internal Certificate](#internal-certificate) except a CA is not needed during
creation of the CSR.

## Import Certificate

To import an existing certificate, select *Import Certificate* as the *Type*.
If a certificate signing request exists on the system, set *CSR exists on this
system* and select it from the dropdown. Otherwise, paste the certificate in the
*Certificate* field. Paste the certificate private key in the *Private Key*
field. If the private key is protected by a passphrase, enter the *Passphrase*.

## Import Certificate Signing Request

To import an existing certificate signing request, select *Import Certificate
Signing Request* as the *Type*. Paste the contents of the CSR in the *Signing
Request* field. Paste the CSR private key in the *Private Key* field. If the
private key is protected by a passphrase, enter the *Passphrase*.
