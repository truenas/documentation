---
title: "Cryptographically verifiying the TrueNAS ISO"
description: "Cryptographically verifiying the TrueNAS ISO"
weight: 
tags: ["security"]
---

### PGP ISO Verification

To verify the `.iso` source, go to https://www.truenas.com/download-tn-core/ and click PGP Signature to download the software signature file. Open the [PGP Public key link](http://keys.gnupg.net/pks/lookup?search=0xC8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946&fingerprint=on&op=index) and note the browser address and Search results string.

Use one of the OpenPGP encryption tools mentioned above to import the public key and verify the PGP signature.

This example shows verifying the TrueNAS® .iso using gpg in a command prompt:

Go to the .iso and .iso.gpg download location and import the public key using the keyserver address and search results string:

```
q5sys@athena /tmp>  gpg --keyserver keys.gnupg.net --recv-keys 0xc8d62def767c1db0dff4e6ec358eaa9112cf7946
gpg: requesting key 12CF7946 from hkp server keys.gnupg.net
gpg: key 12CF7946: "IX SecTeam <security-officer@ixsystems.com>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
q5sys@athena /tmp>
```

Use gpg --verify to compare the .iso and .iso.gpg files:

```
q5sys@athena /tmp>  gpg --verify TrueNAS-12.0-BETA2.1.iso.gpg TrueNAS-12.0-BETA2.iso
gpg: Signature made Thu Aug 27 10:06:02 2020 EDT using RSA key ID 12CF7946
gpg: Good signature from "IX SecTeam <security-officer@ixsystems.com>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C8D6 2DEF 767C 1DB0 DFF4  E6EC 358E AA91 12CF 7946
q5sys@athena /tmp>
```

This response means the signature is correct but still untrusted. Go back to the browser page that has the PGP Public key open and manually confirm that the key was issued for the iX Security Team on October 15, 2019 and has been signed by iXsystems accounts.

### SHA256 Verification

The command to verify the checksum varies by operating system:

+ on a BSD system use the command sha256 isofile
+ on a Linux system use the command sha256sum isofile
+ on a Mac system use the command shasum -a 256 isofile
+ Windows or Mac users can install additional utilities like HashCalc or HashTab.

The value produced by running the command must match the value shown in the sha256.txt file. Different checksum values indicate a corrupted installer file that should not be used.
