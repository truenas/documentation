---
title: "SNMP"
description: "Provides information on configuring SNMP service in TrueNAS."
weight: 55
aliases: 
tags:
 - snmp
 - alerts
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) monitors network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](https://sourceforge.net/projects/net-snmp/) to provide SNMP.
To configure SNMP, go to **System > Services** page, find **SNMP**, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSNMPSCALE](/images/SCALE/SystemSettings/SCALESNMPOptions.png "TrueNAS SNMP Service Options")

See [SNMP Service Screen]({{< relref "SNMPServiceScreenSCALE.md" >}}) for setting information.

Port **UDP 161** listens for SNMP requests when starting the SNMP service.

## Management Information Bases (MIBs)

Click to view or download a static copy of the <a href="https://www.truenas.com/docs/files/truenas-mib-electriceel.txt">TrueNAS 24.10 (Electric Eel) MIB</a> file.

To download an MIB from your TrueNAS system, you can [enable SSH]({{< relref "SSHServiceSCALE.md" >}}) and use a file transfer command like `scp`.
When using SSH, make sure to validate the user logging in has SSH login permissions enabled and the SSH service is active and using a known port (**22** is default).
Management Information Base (MIB) files are located in <file>/usr/local/share/snmp/mibs/</file>.

Example (replace *mytruenas.example.com* with your system IP address or hostname):
```
PS C:\Users\ixuser> scp admin@mytruenas.example.com:/usr/local/share/snmp/mibs/* .\Downloads\
admin@mytruenas.example.com's password:
TRUENAS-MIB.txt                                                 100%   11KB 112.0KB/s   00:00
PS C:\Users\ixuser>
```
