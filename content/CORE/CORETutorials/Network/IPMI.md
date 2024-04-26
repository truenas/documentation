---
title: "IPMI"
description: "Provides instructions on setting up Intelligent Platform Management Interface (IPMI) on TrueNAS CORE."
weight: 50
aliases: /core/network/ipmi/
tags:
- ipmi
- network
---

{{< hint type=note >}}
IPMI requires compatible hardware! Refer to your hardware documentation. Hardware compatibility determines if the IPMI option displays in the TrueNAS web interface.
{{< /hint >}}

Many [TrueNAS Storage Arrays]({{< relref "/Hardware/_index.md" >}}) provide a built-in out-of-band management port. If the system becomes unavailable through the web interface, you can use this port to provide side-band management. Use IPMI to perform several vital functions. These include checking the log, accessing the BIOS setup, and powering on the system. IPMI does not need physical access to the system.  You can use it to allow another person remote access to the system. This is useful when investigating a configuration or troubleshooting issue.

{{< hint type=note >}}
Some IPMI implementations need updates to work with newer versions of Java. 
See [PSA: Java 8 Update 131 breaks ASRock’s IPMI Virtual console](https://forums.freenas.org/index.php?threads/psa-java-8-update-131-breaks-asrocks-ipmi-virtual-console.53911/) for more information.
{{< /hint >}}

Configure **IPMI** by going to **Network > IPMI**. The IPMI configuration screen provides a shortcut to the most basic IPMI configuration.

![NetworkIPMIScreen](/images/CORE/Network/NetworkIPMIScreen.png "Network IPMI Screen")

## IPMI Configuration

Use the **Network > IPMI** screen to configure IPMI settings. See [IPMI Screen]({{< relref "/CORE/UIReference/Network/IPMIScreen.md" >}}) for more information on IPMI settings.

Click **SAVE** to save the IPMI settings.

## Connecting to the IPMI 

Save the configuration. Access the IPMI interface using a web browser and the IP address specified in **Network > IPMI**. The management interface prompts for login credentials. Refer to your IPMI device documentation to learn the default administrator account credentials.

Log in to the management interface. Here you can change the default administrative user name and create extra IPMI users. The appearance of the IPMI utility and the functions that are available vary by hardware.
