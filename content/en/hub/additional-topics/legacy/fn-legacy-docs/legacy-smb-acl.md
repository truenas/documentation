---
Title: "Setting ACLs for SMB on Legacy FreeNAS systems"
linkTitle: "Setting ACLs for SMB on Legacy FreeNAS systems"
weight: 1
tags: ["Samba"]
---


TrueNAS uses [Samba](https://www.samba.org/) to share pools using
Microsoft's SMB protocol. SMB is built into the Windows and macOS
operating systems and most Linux and BSD systems pre-install an SMB
client in order to provide support for the SMB protocol.

The SMB protocol supports many different types of configuration
scenarios, ranging from the simple to complex. The complexity of the
scenario depends upon the types and versions of the client operating
systems that will connect to the share, whether the network has a
Windows server, and whether Active Directory is being used. Depending on
the authentication requirements, it might be necessary to create or
import users and groups.

These videos help clarify setting up permissions on SMB shares on legacy versions of FreeNAS:

{{< youtube RxggaE935PM >}}
<br>
{{< youtube QhwOyLtArw0>}}
