---
title: "Do not use SMB1"
description: "SMB1 Security Advisory"
tags: ["networking","samba","errata","security"]
---

## Do not use SBM1

SMB1, also known as SMBv1, is an early version of the Windows SMB file-sharing protocol. [Microsoft has deprecated the SMB1 protocol for security reasons and strongly recommends removing SMB1](https://support.microsoft.com/en-us/help/4034314/smbv1-is-not-installed-by-default-in-windows). SMB1 is disabled by default in FreeNAS and TrueNAS. Current SMB networking clients use later versions of the SMB protocol.

Microsoft maintains a list of [older products that still require SMB1](https://blogs.technet.microsoft.com/filecab/2017/06/01/smb1-product-clearinghouse/).

**Do not enable SMB1 on FreeNAS or TrueNAS without understanding the security implications and taking measures to protect the network from those risks.** Contact the vendor of older products for upgrades to support newer, more secure versions of SMB, or replace older products with ones that do not require the security risks of SMB1.

**Do not enable SMB1** unless it is absolutely required for essential equipment that cannot be upgraded or replaced, the security implications are understood, and steps have been taken to protect the network from those security risks.
