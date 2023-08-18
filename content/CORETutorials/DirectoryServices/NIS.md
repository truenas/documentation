---
title: "Setting up NIS"
description: "Use the NIS screen to configure Network Information System (NIS) on your TrueNAS."
weight: 30
aliases: /core/directoryservices/nis/
tags:
- corenis
- coreldap
---

{{< toc >}}

NIS ([Network Information Service](https://www.oreilly.com/library/view/practical-unix-and/0596003234/ch14s01.html)) is a client–server directory service protocol. It assists in distributing system configuration data between computers on a network. This data can include user and host names.

{{< expand "What exactly does this do?" "v" >}}
A NIS system maintains and distributes a central directory. This central directory contains user and group information. It also contains other text-based tables of information. These tables can include host names and e-mail aliases. 
In FreeBSD, the file <file>/etc/passwd</file> contains the list of users. The file <file>/etc/shadow</file> contains the authentication hashes. NIS adds another global user list to identify users on any NIS domain client.
{{< /expand >}}

{{< hint type=important >}}
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

Click **SAVE** to save configuration settings.

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync. Or if fewer users than expected are available in the permissions editors.  

{{< taglist tag="corenis" limit="10" >}}  
