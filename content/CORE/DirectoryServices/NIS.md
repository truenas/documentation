---
title: "NIS"
description: "NIS (Network Information Service)"
tags: ["NIS", "networking"]

---

NIS (Network Information Service) is a client–server directory service protocol for distributing system configuration data such as user and host names between computers on a computer network.

A NIS system maintains and distributes a central directory of user and group information, hostnames, e-mail aliases and other text-based tables of information in a computer network. In FreeBSD, the list of users is placed in /etc/passwd and authentication hashes in /etc/shadow.  NIS adds another "global" user list which is used for identifying users on any client of the NIS domain.

{{% pageinfo %}}
NIS has some inherent limitations due to its design that limit its degree of scalability and security, as a result it has been largely superseeded by LDAP. 
{{% /pageinfo %}}

To configure NIS open **Directory Services > NIS***.

<img src="/images/NISConfiguration.png">
<br><br>

Enter the name of the Domain and list the hostnames or IP addresses of the NIS servers you wish to point to.  Separate entries can be added by pressing Enter between each one.

#### Options

+ Secure Mode : Set to have [ypbind(8)](https://www.freebsd.org/cgi/man.cgi?query=ypbind) refuse to bind to any NIS server not running as root on a TCP port over 1024.
+ Manycast : Set for ypbind to bind to the server that responds the fastest.
+ Enable : Unset to disable the configuration without deleting it.
