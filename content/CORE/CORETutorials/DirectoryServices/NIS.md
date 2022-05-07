---
title: "NIS"
weight: 30
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
Configure the remaining options as needed. See [NIS Screen]({{< relref "/CORE/UIReference/DirectoryServices/NISScreen.md" >}}) for more information on configuration settings.

When ready, **SAVE** the configuration.
