---
title: "ISO Verification"
description: "How to cryptographically verify TrueNAS .iso files."
weight: 
tags: ["security"]
---

The iXsystems Security Team cryptographically signs TrueNAS ISO files so that users can verify the integrity of their downloaded file.
This article demonstrates how to verify an ISO file using the [Pretty Good Privacy (PGP)](https://tools.ietf.org/html/rfc4880) and [SHA256](https://tools.ietf.org/html/rfc6234) methods.

## PGP ISO Verification

You will need an OpenPGP encryption application for this method of ISO verification.
There are many different free applications available, but the OpenPGP group provides a list of available software for different operating systems at https://www.openpgp.org/software/.
The examples in this section show verifying the TrueNAS `.iso` using [gnupg2](https://gnupg.org/software/index.html) in a command prompt, but [Gpg4win](https://www.gpg4win.org/) is also a good option for Windows users.

To verify the `.iso` source, go to https://www.truenas.com/download-tn-core/ , expand the **Security** option,  and click **PGP Signature** to download the Gnu Privacy Guard (`.gpg`) signature file. Open the [PGP Public key link](http://keys.gnupg.net/pks/lookup?search=0xC8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946&fingerprint=on&op=index) and note the address in your browser and **Search results for** string .

Use one of the OpenPGP encryption tools mentioned above to import the public key and verify the PGP signature.

Go to the `.iso` and `.iso.gpg` download location and import the public key using the keyserver address and search results string:

```
q5sys@athena /tmp>  gpg --keyserver keys.gnupg.net --recv-keys 0xc8d62def767c1db0dff4e6ec358eaa9112cf7946
gpg: requesting key 12CF7946 from hkp server keys.gnupg.net
gpg: key 12CF7946: "IX SecTeam <security-officer@ixsystems.com>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
q5sys@athena /tmp>
```

Use `gpg --verify` to compare the `.iso` and `.iso.gpg` files:

```
q5sys@athena /tmp>  gpg --verify TrueNAS-12.0-BETA2.1.iso.gpg TrueNAS-12.0-BETA2.iso
gpg: Signature made Thu Aug 27 10:06:02 2020 EDT using RSA key ID 12CF7946
gpg: Good signature from "IX SecTeam <security-officer@ixsystems.com>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C8D6 2DEF 767C 1DB0 DFF4  E6EC 358E AA91 12CF 7946
q5sys@athena /tmp>
```

This response means the signature is correct but still untrusted. Go back to the browser page that has the **PGP Public key** open and manually confirm that the key was issued for `IX SecTeam <security-officer@ixsystems.com>` (iX Security Team) on October 15, 2019 and has been signed by an iXsystems account.

## SHA256 Verification

The command to verify the checksum varies by operating system:

+ BSD: `sha256 isofile`
+ Linux: `sha256sum isofile`
+ Mac: `shasum -a 256 isofile`
+ Windows or Mac users can install additional utilities like [HashCalc](https://hashcalc.soft112.com/) or [HashTab](http://implbits.com/products/hashtab/).

The value produced by running the command must match the value shown in the `sha256.txt` file. Different checksum values indicate a corrupted installer file that should not be used.
