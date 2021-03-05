---
title: "SNMP"
weight: 60
---

[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) monitors network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](http://net-snmp.sourceforge.net/) to provide SNMP.
To configure SNMP, go to the **Services** page, find the **SNMP** entry, and click the <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![ServicesSNMPOptions](/images/CORE/12.0/ServicesSNMPOptions.png "SNMP Service Options")

{{< expand "Field Descriptions" "v" >}}
{{< include file="static/includes/ServicesSNMPFields.md.part" markdown="true" >}}
{{< /expand >}}

When starting the SNMP service, port *UDP 161* listens for SNMP requests.

## Management Information Bases (MIBs)

Available Management Information Bases (MIBs) are located in <file>/usr/local/share/snmp/mibs</file>.
This directory contains many files being routinely added or removed from the directory.
Check the directory on your system by clicking **Shell** and entering `ls /usr/local/share/snmp/mibs`.
Here is a sample of the directory contents:

![ServicesSNMPMibSample](/images/CORE/12.0/ServicesSNMPMibSample.png "Services SNMP Mib Sample")
