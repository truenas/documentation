---
title: "NFS Screen"
description: "Use the NFS screen to configure Network File System (NFS) on your TrueNAS"
weight: 60
tags:
- corenfs
---

{{< toc >}}

Network File System (NFS) is an open IETF standard remote file access protocol. Use the **Services NFS** screen to enable NFS services on your TrueNAS.

![NFSServicesScreen](/images/CORE/13.0/NFSServicesScreen.png "Services NFS Add")

Use **SAVE** to save settings and return to the **Services** screen.

Use **CANCEL** to exit without saving and return to the **Services** screen.

| Setting | Value | Description |
|---------|-------|-------------|
| **Number of servers** | integer | Specify how many servers to create. Increase if NFS client responses are slow. Keep this less than or equal to the number of CPUs reported by `sysctl -n kern.smp.cpus` to limit CPU context switching. |
| **Bind IP Addresses** | drop down | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |
| **Enable NFSv4** | checkbox  | Set to switch from NFSv3 to NFSv4.  |
| **NFSv3 ownership model for NFSv4** | checkbox  | Set when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| **Require Kerberos for NFSv4** | checkbox  | Set to force NFS shares to fail if the Kerberos ticket is unavailable. |
| **Serve UDP NFS clients** | checkbox  | Set if NFS clients need to use the User Datagram Protocol (UDP). |
| **Allow non-root mount** | checkbox  | Set only if required by the NFS client. Set to allow serving non-root mount requests. |
| **Support >16 groups**  | checkbox  | Set when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. |
| **Log mountd(8) requests** | checkbox  | Set to log [mountd](https://www.freebsd.org/cgi/man.cgi?query=mountd) syslog requests. |
| **Log rpc.statd(8) and rpc.lockd(8)** | checkbox  | Set to log [rpc.statd](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) and [rpc.lockd](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) syslog requests. |
| **mountd(8) bind port** | integer   | Enter a number to bind [mountd](https://www.freebsd.org/cgi/man.cgi?query=mountd) only to that port. |
| **rpc.statd(8) bind port**   integer   | Enter a number to bind [rpc.statd](https://www.freebsd.org/cgi/man.cgi?query=rpc.statd) only to that port. |
| **rpc.lockd(8) bind port** | integer   | Enter a number to bind [rpc.lockd](https://www.freebsd.org/cgi/man.cgi?query=rpc.lockd) only to that port. |

Unless a specific setting is needed, it is recommended to use the default settings for the NFS service.

{{< taglist tag="corenfs" limit="10" >}}