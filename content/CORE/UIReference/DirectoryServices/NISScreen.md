---
title: "NIS Screen"
description: "Use the NIS screen to configure Network Information System (NIS) on your TrueNAS"
weight: 30
tags:
- corenis
---

NIS is a client–server directory service protocol for distributing system configuration data such as user and host names between computers on a computer network. 
Use the **Directory Services > NIS** screen to configure [Network Information Service](https://www.oreilly.com/library/view/practical-unix-and/0596003234/ch14s01.html) on your TrueNAS.  

{{< hint warning >}}
NIS is limited in scalability and security.
For modern networks, [LDAP]({{< relref "LDAP.md" >}}) has replaced NIS.
{{< /hint >}}

![DirectoryServicesNIS](/images/CORE/12.0/DirectoryServicesNIS.png)

| Name | Description |
|---------|-------------|
| **NIS Domain** | Enter a name and list any NIS domain host names or IP addresses. Press <kbd>Enter</kbd> to separate server entries. |
| **NIS Servers** |Enter a name and list any NIS server host names or IP addresses. Press <kbd>Enter</kbd> to separate server entries. |
| **Secure Mode** | Select to have [ypbind(8)](https://www.freebsd.org/cgi/man.cgi?query=ypbind) refuse to bind to any NIS server not running as *root* on a TCP port over **1024**. |
| **Manycast** | Select for `ypbind` to bind to the fastest responding server. |
| **Enable** | Select to enable the configuration. Leave checkbox clear to disable the configuration without deleting it. |

Click **SAVE** to save configuration settings.

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync or fewer users than expected are available in the permissions editors. 

{{< taglist tag="corenis" limit="10" >}}
