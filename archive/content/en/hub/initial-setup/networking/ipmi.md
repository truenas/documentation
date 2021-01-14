---
title: "IPMI"
description: "Out of Band Management"
tags: ["IPMI","networking"]
---


## IPMI

Many TrueNAS Storage Arrays provide a built-in out-of-band management port which can be used to provide side-band management should the system become unavailable through the web interface. This allows for a few vital functions, such as checking the log, accessing the BIOS setup, and powering on the system without requiring physical access to the system. It can also be used to allow another person remote access to the system to assist with a configuration or troubleshooting issue.

{{% pageinfo %}}
Some IPMI implementations require updates to work with newer versions of Java. See [PSA: Java 8 Update 131 breaks ASRock’s IPMI Virtual console](https://forums.freenas.org/index.php?threads/psa-java-8-update-131-breaks-asrocks-ipmi-virtual-console.53911/) for more information.
{{% /pageinfo %}}

<img src="/images/TN-network-ipmi.png">
<br><br>

IPMI is configured from **Network > IPMI**. The IPMI configuration screen  provides a shortcut to the most basic IPMI configuration. Those already familiar with IPMI management tools can use them instead.

## IPMI Configuration

Here are options available when configuring IPMI with the TrueNAS® web interface.

| Setting              | Value          | Description                                                                                                                                                                                  |
|----------------------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| TrueNAS Controller   | drop-down menu | Select a TrueNAS controller. All IPMI changes are applied to that TrueNAS controller.                                                                                                        |
| Channel              | drop-down menu | Select the communications channel to use. Available channel numbers vary by hardware.                                                                                                        |
| Password             | string         | Enter the password used to connect to the IPMI interface from a web browser. The maximum length accepted in the UI is 20 characters, but different hardware might require shorter passwords. |
| DHCP                 | checkbox       | If left unset, IPv4 Address, IPv4 Netmask, and Ipv4 Default Gateway must be set.                                                                                                             |
| IPv4 Address         | string         | IP address used to connect to the IPMI web interface.                                                                                                                                        |
| IPv4 Netmask         | drop-down menu | Subnet mask associated with the IP address.                                                                                                                                                  |
| IPv4 Default Gateway | string         | Default gateway associated with the IP address.                                                                                                                                              |
| VLAN ID              | string         | Enter the VLAN identifier if the IPMI out-of-band management interface is not on the same VLAN as management networking.                                                                     |
| IDENTIFY LIGHT       | button         | Show a dialog to activate an IPMI identify light on the compatible connected hardware.                                                                                                       |

## IPMI Options

After configuration, the IPMI interface is accessed using a web browser and the IP address specified in the configuration. The management interface prompts for a username and the configured password. Refer to the IPMI device documentation to determine the default administrative username.

After logging in to the management interface, the default administrative username can be changed, and additional users created. The appearance of the IPMI utility and the functions that are available vary depending on the hardware.
