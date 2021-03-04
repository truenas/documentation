---
title: "SNMP service placeholder"
weight: 10
---

## SNMP

[SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) is used to monitor network-attached devices for conditions that warrant administrative attention.
TrueNAS uses [Net-SNMP](http://net-snmp.sourceforge.net/) to provide SNMP.
To configure SNMP, go to the **Services** page, find the **SNMP** row, and click <i class="fas fa-pen" aria-hidden="true" title="Configure"></i> (Configure).

![Services SNMP Options](/images/CORE/12.0/ServicesSNMPOptions.png "Services SNMP Options")
<br><br>

### SNMP Service Options

| Setting                               | Value          | Description                                                                                                                                                                                     |
|---------------------------------------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Location                              | string         | Enter the location of the system.                                                                                                                                                               |
| Contact                               | string         | Enter an email address to receive messages from the SNMP service.                                                                                                                               |
| Community                             | string         | Change from *public* to increase system security. Can only contain alphanumeric characters, underscores, dashes, periods, and spaces. This can be left empty for SNMPv3 networks.                 |
| SNMP v3 Support                       | checkbox       | Set to enable support for [SNMP version 3](https://tools.ietf.org/html/rfc3410). See [snmpd.conf(5)](http://net-snmp.sourceforge.net/docs/man/snmpd.conf.html) for more information about configuring this and the `Authentication Type`, `Password`, `Privacy Protocol`, and `Privacy Passphrase` fields. |
| Username                              | string         | Only applies if `SNMP v3 Support` is set. Enter a username to register with this service.                                                                                                         |
| Authentication Type                   | drop-down menu | Only applies if `SNMP v3 Support` is enabled. Choices are *MD5* or *SHA*.                                                                                                                             |
| Password                              | string         | Only applies if `SNMP v3 Support` is enabled. Enter and confirm a password of at least eight characters.                                                                                          |
| Privacy Protocol                      | drop-down menu | Only applies if `SNMP v3 Support` is enabled. Choices are *AES* or *DES*.                                                                                                                             |
| Privacy Passphrase                    | string         | Enter a separate privacy passphrase. `Password` is used when this is left empty.                                                                                                                  |
| Auxiliary Parameters                  | string         | Enter additional [snmpd.conf(5)](https://www.freebsd.org/cgi/man.cgi?query=snmpd.conf) options. Add one option for each line.                                                                                                                           |
| Expose zilstat via SNMP               | checkbox       | Enabling this option may have pool performance implications.                                                                                                                                    |
| Log Level                             | drop-down menu | Choose how many log entries to create. Choices range from the least log entries (Emergency) to the most (Debug).                                                                                |
| Enable Network Performance Statistics | checkbox       | Include [iftop](https://www.freebsd.org/cgi/man.cgi?query=iftop) network performance statistics in SNMP messages.                                                                                 |

When starting the SNMP service, port `UDP 161` is enabled to listen for SNMP requests.
Available Management Information Bases (MIBs) are located in `/usr/local/share/snmp/mibs`.
Here is a sample of the directory contents:

![Services SNMP Mib Sample](/images/CORE/12.0/ServicesSNMPMibSample.png "Services SNMP Mib Sample")
