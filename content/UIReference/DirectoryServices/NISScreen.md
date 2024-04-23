---
title: "NIS Screen"
description: "Use the NIS screen to configure Network Information System (NIS) on TrueNAS CORE."
weight: 30
tags:
- nis
---

NIS is a client–server directory service protocol. Usage scenarios include the distribution of user and host names between networked computers. 
Use the **Directory Services > NIS** screen to configure [Network Information Service](https://www.oreilly.com/library/view/practical-unix-and/0596003234/ch14s01.html) on your TrueNAS.  

{{< hint type=important >}}
NIS is limited in scalability and security.
For modern networks, [LDAP]({{< relref "/CORE/UIReference/DirectoryServices/LDAPScreen.md" >}}) has replaced NIS.
{{< /hint >}}

![DirectoryServicesNIS](/images/CORE/DirectoryServices/DirectoryServicesNIS.png)

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **NIS Domain** | Enter a name and list any NIS domain host names or IP addresses. Press <kbd>Enter</kbd> to separate server entries. |
| **NIS Servers** |Enter a name and list any NIS server host names or IP addresses. Press <kbd>Enter</kbd> to separate server entries. |
| **Secure Mode** | Select to have [ypbind(8)](https://www.freebsd.org/cgi/man.cgi?query=ypbind) refuse to bind to any NIS server not running as *root* on a TCP port over **1024**. |
| **Manycast** | Select for `ypbind` to bind to the fastest responding server. |
| **Enable** | Select to enable the configuration. Leave checkbox clear to disable the configuration without deleting it. |
{{< /truetable >}}

Click **SAVE** to save configuration settings.

Click **REBUILD DIRECTORY SERVICE CACHE** to resync the cache if it becomes out of sync. Or if fewer users than expected are available in the permissions editors. 
