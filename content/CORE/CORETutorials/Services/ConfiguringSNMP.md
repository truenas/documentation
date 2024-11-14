---
title: "Configuring SNMP"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/services/configuringsnmp/"
description: "Provides information on how to configure Simple Network Management Protocol (SNMP) on your TrueNAS."
weight: 120
aliases: /core/services/snmp/
tags:
- snmp
---

[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) monitors network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](https://sourceforge.net/projects/net-snmp/) to provide SNMP.
To configure SNMP, go to the **Services** page, find the **SNMP** entry, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSNMPScreen](/images/CORE/Services/ServicesSNMPScreen.png "SNMP Service Options")

See [SNMP screen]({{< relref "/CORE/UIReference/Services/SNMPScreen.md" >}}) for information on settings.

After starting the SNMP service, port **UDP 161** listens for SNMP requests.

## Checking the Management Information Bases (MIBs) Directory

Locate available Management Information Bases (MIBs). Go to <file>/usr/local/share/snmp/mibs</file>. This directory contains many files routinely added or removed from the directory. Check the directory on your system. Open the shell and enter command `ls /usr/local/share/snmp/mibs`.
Here is a sample of the directory contents:

![ServicesSNMPMibSample](/images/CORE/Services/ServicesSNMPMibSample.png "Services SNMP Mib Sample")
