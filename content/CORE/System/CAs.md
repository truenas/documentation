---
title: "CAs"
weight: 155
---

## Introduction

TrueNAS can act as a Certificate Authority (CA). When encrypting SSL or TLS
connections to the TrueNAS system, either import an existing CA, or
create a CA and certificate on the TrueNAS system. This certificate will appear
in the drop-down menus for services that support SSL or TLS. If desired, a new
CA can be created or an existing CA can be imported. To
add or import a CA, go to **System > Certificate Authorities** and click *ADD*. First,
enter the name for the CA. Next, choose the *Type*. The three options are
*Internal CA*, *Intermediate CA*, and *Import CA*. The process for
each type is slightly different. Follow the appropriate section below
based on your desired type.

## Internal CA

To create an internal CA, select *Internal CA* as the *Type*. If desired, a
profile can be selected for the CA. Selecting a profile
automatically sets certain options such as *Key Type*, *Key Length*, *Digest
Algorithm*, and more. If you would like to set each option manually, do not
select a profile from the *Profiles* dropdown. Select a *Key Type* from the
dropdown. The recommended key type is *RSA*. Next, select the *Key Length*. A
minimum of *2048* is recommended for security reasons. Select a *Digest
Algorithm*. The recommended is *SHA256*. Enter the *Lifetime* of the CA
in days, this is how long the CA will remain valid.

Next, fill out the geographic information of the certificate. This includes 
*Country*, *Locality*, *Organizational Unit* (optional), *Common Name*, *State*,
*Organization*, *Email*, and *Subject Alternate Names*. The *Common
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

## Intermediate CA

To create an Intermediate CA, select *Intermediate CA* as the *Type*. All the
settings are the same as [Internal CA](#internal-ca) except an existing
*Signing Certificate Authority* is needed.

## Import CA

To import an existing CA, select *Import CA* as the *Type*. Paste the
certificate of the CA in the *Certificate* field. Paste the CA
private key in the *Private Key* field. If the private key is protected by a
passphrase, enter the *Passphrase*.
