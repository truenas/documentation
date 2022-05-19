---
title: "IPMI"
weight: 50
aliases: /core/network/ipmi/
---

{{< hint info >}}
IPMI requires compatible hardware! Refer to your hardware documentation to determine if this option displays in the TrueNAS web interface.
{{< /hint >}}

Many [TrueNAS Storage Arrays]({{< relref "/Content/Hardware/_index.md" >}}) provide a built-in out-of-band management port you can use to provide side-band management should the system become unavailable through the web interface. This allows for a few vital functions, such as checking the log, accessing the BIOS setup, and powering on the system without requiring physical access to the system. You can also use it to allow another person remote access to the system to assist with a configuration or troubleshooting issue.

{{< hint info >}}
Some IPMI implementations require updates to work with newer versions of Java. 
See [PSA: Java 8 Update 131 breaks ASRock’s IPMI Virtual console](https://forums.freenas.org/index.php?threads/psa-java-8-update-131-breaks-asrocks-ipmi-virtual-console.53911/) for more information.
{{< /hint >}}

IPMI is configured from **Network > IPMI**. The IPMI configuration screen provides a shortcut to the most basic IPMI configuration.

![NetworkIPMIScreen](/images/CORE/13.0/NetworkIPMIScreen.png "Network IPMI Screen")

## IPMI Configuration

Use the **Network > IPMI** screen to configure IPMI settings. See [IPMI Screen]({{< relref "/CORE/UIReference/Network/IPMIScreen.md" >}}) for more information on IPMI settings.

Use **SAVE** to save the IPMI settings.

## Connecting to the IPMI 

After saving the configuration, access the IPMI interface using a web browser and the IP address specified in **Network > IPMI**. The management interface prompts for login credentials. Refer to your IPMI device documentation to learn the default administrator account credentials.

After logging in to the management interface, you can change the default administrative user name and create additional IPMI users. The appearance of the IPMI utility and the functions that are available vary by hardware.
