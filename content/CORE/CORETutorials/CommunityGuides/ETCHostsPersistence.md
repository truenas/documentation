---
title: "/etc/hosts IP Persistence"
description: "This article describes the process of mapping host or domain names on TrueNAS CORE."
weight: 5
tags:
- corecommunityguides
---

{{< toc >}}

## Description

Domain Name resolution is the process of mapping host or domain names, such as `mytruenas` or `truenas1.mycompany.com`, to their associated IP addresses.
This is done by a variety of methods.
The quickest method is to read entries in the **hosts** file, which is a local text file containing a list of IP addresses mapped to domain/host names.
Every operating system (OS) that communicates through the TCP/IP protocol has a **hosts** file.

The **hosts** file can speed up name resolution when a DNS server is not available on the local network.
A DNS server runs networking software that allows it to join the Domain Name System.
This is the standard service used on the Internet for name resolution.
When adding entries to a TrueNAS system **hosts** file, use the TrueNAS web interface to save the entries directly to the configuration database.
Do *not* edit the **hosts** file directly, as any changes are overwritten by the configuration database during reboot.

## Errors

{{< expand "I’m trying to use NFS, SSH, and FTP, but I keep receiving reverse DNS or timeout errors." "v" >}}
The fastest domain name resolution method is for the operating system to read the **hosts** file, but if there are no matching entries in the **hosts** file, a DNS server is queried instead.
This is a slower process as the OS has to find the DNS server, send it a query, and wait for an answer.
Timeout errors are common for some network protocols, such as SSH, FTP and NFS, as their connection requests can time out before a DNS server replies.
To speed up name resolution, add entries for commonly used hosts to the **hosts** file.

### Fix

To add an entry to the **hosts** file, use a browser to log in to your TrueNAS web interface and follow these steps:

1. Go to **Network > Global Configuration**.
3. Scroll down to the **Host name database** field and add an entry for the TrueNAS system in the format *IP_address space hostname*.
4. Click **Save**.
{{< /expand >}}

{{< taglist tag="corecommunityguides" limit="10" title="Community Guides Articles" >}}
