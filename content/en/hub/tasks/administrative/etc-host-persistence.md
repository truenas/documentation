---
title: "Persistence of /etc/hosts"
description: "How to Make Adding an IP to /etc/hosts Persist Across Reboots"
---

**Description**

Domain Name resolution, the process of mapping host or domain names, such as mytruenas or truenas1.mycompany.com, to their associated IP addresses can be achieved through a variety of methods. 
The quickest method is to read entries in the hosts file, which is a local text file containing a list of IP addresses mapped to domain/host names. Every operating system (OS) that communicates through the TCP/IP protocol will have a hosts file.
The hosts file can be used to speed up name resolution if a DNS server is not available on the local network. A DNS server runs networking software that allows it to join the Domain Name System, which is the standard service used on the Internet for name resolution.
When adding entries to the hosts file of a TrueNAS system, use the TrueNAS GUI to save the entries directly to the configuration database. Do not edit the hosts file directly as it will be overwritten by the configuration database during reboot.


**Errors**

“I’m trying to use NFS, SSH, and FTP, but I keep receiving “reverse DNS” or timeout errors.”
The fastest domain name resolution method is for the operating system to read the hosts file, but if there are no matching entries in the hosts file, a DNS server is queried instead. This is a slower process as the OS has to find the DNS server, send it a query, and wait for an answer.
Timeout errors are common for some network protocols, such as SSH, FTP and NFS, as their connection requests can timeout before a DNS server replies.
To speed up name resolution, add entries for commonly used hosts to the hosts file.


**Fix**

To add an entry to the hosts file, open the GUI in a browser, and follow these steps:

1. Navigate to the Network tab.
2. Click the Global Configuration tab.
3. Scroll down to the Host name database field and add an entry for the TrueNAS system in the format IP_address space hostname.
4. Click Save.
