---
title: "NIS Screen"
description: "Use the NIS screen to configure Network Information System (NIS) and related service options on your TrueNAS"
weight: 30
aliases: /core/directoryservices/nis/
tags:
- coredirectoryservices
- corenis
---

{{< toc >}}

NIS ([Network Information Service](https://www.oreilly.com/library/view/practical-unix-and/0596003234/ch14s01.html)) is a client–server directory service protocol for distributing system configuration data such as user and host names between computers on a computer network.

{{< expand "What exactly does this do?" "v" >}}
A NIS system maintains and distributes a central directory of user and group information, host names, e-mail aliases and other text-based tables of information in a computer network.
In FreeBSD, the list of users is placed in <file>/etc/passwd</file> and authentication hashes in <file>/etc/shadow</file>.
NIS adds another global user list to identify users on any NIS domain client.
{{< /expand >}}

{{< hint warning >}}
NIS is limited in scalability and security.
For modern networks, [LDAP]({{< relref "LDAP.md" >}}) has replaced NIS.
{{< /hint >}}

To configure NIS, go to **Directory Services > NIS**.

![DirectoryServicesNIS](/images/CORE/12.0/DirectoryServicesNIS.png)

Enter the **NIS Domain** name and list any **NIS Servers** (host names or IP addresses).
Press <kbd>Enter</kbd> to separate server entries.
Configure the remaining options as needed:

* **Secure Mode** : Select to have [ypbind(8)](https://www.freebsd.org/cgi/man.cgi?query=ypbind) refuse to bind to any NIS server not running as *root* on a TCP port over **1024**.
* **Manycast** : Select for `ypbind` to bind to the fastest responding server.
* **Enable** : Leave the checkbox clear to disable the configuration without deleting it.

When ready, **SAVE** the configuration.

{{< taglist tag="coredirectoryservices" limit="10" title="Related Articles" >}}
