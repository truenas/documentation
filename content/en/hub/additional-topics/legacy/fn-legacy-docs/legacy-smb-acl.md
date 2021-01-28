---
Title: "Setting SMB ACLs on Legacy FreeNAS systems"
weight: 1
tags: ["Samba"]
---


TrueNAS uses [Samba](https://www.samba.org/) to share pools using Microsoft's SMB protocol.
SMB is built into the Windows and macOS operating systems and most Linux and BSD systems pre-install an SMB client to provide support for the SMB protocol.

The SMB protocol supports many different types of configuration scenarios, ranging from simple to complex.
The complexity of the scenario depends upon the types and versions of the client operating system that connects to the share, and whether the network has a Windows server and/or  Active Directory is being used.
Depending on the specific authentication requirements, it might be necessary to create or import users and groups.

These videos clarify setting up permissions on SMB shares on legacy (pre TrueNAS 12.0) versions of FreeNAS:

{{< youtube RxggaE935PM >}}
<br>
{{< youtube QhwOyLtArw0>}}
