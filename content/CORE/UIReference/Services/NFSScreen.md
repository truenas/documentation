---
title: "NFS Screen"
description: "Describes the NFS screen in TrueNAS CORE."
weight: 60
tags:
- corenfs
---

{{< toc >}}

Network File System (NFS) is an open IETF standard remote file access protocol. Use the **Services NFS** screen to enable NFS services on your TrueNAS.

![NFSServicesScreen](/images/CORE/13.0/NFSServicesScreen.png "Services NFS Add")

Click **SAVE** to save settings and return to the **Services** screen.

Click **CANCEL** to exit without saving and return to the **Services** screen.

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Number of servers** | Enter a number to specify how many servers to create. Increase if NFS client responses are slow. Keep this less than or equal to the number of CPUs reported by `sysctl -n kern.smp.cpus` to limit CPU context switching. |
| **Bind IP Addresses** | Select IP addresses from dropdown list to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |
| **Enable NFSv4** | Select checkbox to switch from NFSv3 to NFSv4. |
| **NFSv3 ownership model for NFSv4** |  Select checkbox to provide specific NFSv4 ACL support. This does not require the client and the server to sync users and groups. |
| **Require Kerberos for NFSv4** | Select checkbox to force NFS shares to fail if the Kerberos ticket is unavailable. |
| **Serve UDP NFS clients** | Select checkbox if NFS clients need to use the User Datagram Protocol (UDP). |
| **Allow non-root mount** | Select checkbox only if required by the NFS client. Select to allow serving non-root mount requests. |
| **Support >16 groups**  | Select checkbox when a user is a member of more than 16 groups. Requires correct configuration of group membership on the NFS server. |
| **Log mountd(8) requests** | Select checkbox to log [mountd](https://www.freebsd.org/cgi/man.cgi?query=mountd) syslog requests. |
| **Log rpc.statd(8) and rpc.lockd(8)** | Select checkbox to log [rpc.statd](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) and [rpc.lockd](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) syslog requests. |
| **mountd(8) bind port** | Enter a number to bind [mountd](https://www.freebsd.org/cgi/man.cgi?query=mountd) only to that port. |
| **rpc.statd(8) bind port** | Enter a number to bind [rpc.statd](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) only to that port. |
| **rpc.lockd(8) bind port** | Enter a number to bind [rpc.lockd](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) only to that port. |
{{< /truetable >}}

The recommendation is to use the default settings for the NFS service. Make changes if there is a need for a specific setting.

{{< taglist tag="corenfs" limit="10" >}}