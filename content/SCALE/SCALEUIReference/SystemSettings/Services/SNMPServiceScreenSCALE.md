---
title: "SNMP Service Screen"
description: "This article provides information on SNMP service screen settings."
weight: 55
alias: 
tags:
 - scalesnmp
 - scaleservices
---

{{< toc >}}


The **Service > SNMP** screen settings configure [SNMP (Simple Network Management Protocol)](https://tools.ietf.org/html/rfc1157) that monitors network-attached devices for conditions that warrant administrative attention.

Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > SNMP** configuration screen.

### General Options

![SCALESNMPOptions](/images/SCALE/22.12/SCALESNMPOptions.png "SCALE SNMP Service Options")

### SNMP v3 Options

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Location** | Enter the location of the system. |
| **Contact** | Enter the email address to receive SNMP service messages. |
| **Community** | Enter a community other than the default **public** to increase system security. Value can only contain alphanumeric characters, underscores (_), dashes (-), periods (.), and spaces. Not required and can leave this empty for SNMPv3 networks. |
{{< /truetable >}}

### SNMP v3 Support Options

![SNMPServiceSettingsV3Options](/images/SCALE/22.12/SNMPServiceSettingsV3Options.png "SCALE SNMP Service SNMP v3 Options")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **SNMP v3 Support** | Select to to enable support for [SNMP version 3](https://tools.ietf.org/html/rfc3410) and display the SNMP v3 setting fields. See [snmpd.conf(5)](https://net-snmp.sourceforge.io/docs/man/snmpd.conf.html) for configuration details. |
| **Username** | Enter a user name to register with this service. |
| **Authentication Type** | Select an authentication method: **---** for none, **[SHA](https://tools.ietf.org/html/rfc4634)**, or **[MD5](https://tools.ietf.org/html/rfc1321)** from the dropdown list.|
| **Password** | Enter a password of at least eight characters. |
| **Privacy Protocol** | Select a privacy protocol: **---** for none, **[AES](https://tools.ietf.org/doc/tcllib/html/aes.html)**, or **[DES](https://tools.ietf.org/doc/tcllib/html/des.html)** from the dropdown list. |
| **Privacy Passphrase** | Enter a separate privacy passphrase. **Password** is used when this is left empty. |
{{< /truetable >}}

### Other Options

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Auxiliary Parameters** | Enter any additional [snmpd.conf](https://net-snmp.sourceforge.io/docs/man/snmpd.conf.html) options. Add one option for each line. |
| **Expose zilstat via SNMP** | Select to enable. If enabled this option might have performance implications on your pools. |
| **Log Level** | Select how many log entries to create. Dropdown list options are **Emergency**, **Alert**, **Critical**, **Error**, **Warning**, **Notice**, **Info** and **Debug**. |
{{< /truetable >}}

{{< taglist tag="scalesnmp" limit="10" >}}

