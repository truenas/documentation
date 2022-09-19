---
title: "SNMP Service Screen"
description: ""
weight: 55
alias: 
tags:
 - scalesnmp
 - scaleservices
---


{{< toc >}}


[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) monitors network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](https://sourceforge.net/projects/net-snmp/) to provide SNMP.
To configure SNMP, go to **System Settings > Services** page, find **SNMP**, and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSNMPSCALE](/images/SCALE/22.02/SCALESNMPOptions.png "SCALE SNMP Service Options")

{{< expand "Field Descriptions" "v" >}}
{{< include file="static/includes/Reference/SCALEServicesSNMPFields.md.part" markdown="true" >}}
{{< /expand >}}

Port **UDP 161** listens for SNMP requests when starting the SNMP service.

## Management Information Bases (MIBs)

Available Management Information Bases (MIBs) are located in <file>/usr/local/share/snmp/mibs</file>.
This directory contains many files routinely added or removed from the directory.
Check the directory on your system by going to  **System Settings > Shell** and entering `ls /usr/local/share/snmp/mibs`.
Here is a sample of the directory contents:

![ServicesSNMPsampleSCALE](/images/SCALE/ServicesSNMPsampleSCALE.png "Services SNMP Mib Sample")

{{< taglist tag="scale" limit="10" >}}