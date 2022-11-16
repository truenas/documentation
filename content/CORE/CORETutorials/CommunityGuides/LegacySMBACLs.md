---
title: "Setting SMB ACLs on Legacy FreeNAS systems"
descriptions: "This article describes how to configure SMB ACLs on legacy FreeNAS or TrueNAS released before 12.0"
weight: 20
tags:
- corecommunityguides
---

{{< hint info >}}
This article only applies to versions of FreeNAS or TrueNAS released before 12.0
{{< /hint >}}

TrueNAS uses [Samba](https://www.samba.org/) to share pools using the Microsoft SMB protocol.
SMB is built into the Windows and macOS operating systems and most Linux and BSD systems pre-install an SMB client to provide support for the SMB protocol.

The SMB protocol supports many different types of configuration scenarios, ranging from simple to complex.
The complexity of the scenario depends on several factors:

* Client operating system types and versions connecting to the share.
* When the network has an active Windows server.
* Active Directory is in use.

Depending on the specific authentication requirements, it can be necessary to create or import user and group accounts into FreeNAS/TrueNAS.

{{< taglist tag="corecommunityguides" limit="10" title="Community Guides Articles" >}}
