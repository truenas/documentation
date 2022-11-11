---
title: "IPMI Screens"
description: "This article provides information on the **Network** screen **IPMI** widget and configuration screen."
weight: 50
tags:
- scalenetwork
- scaleipmi
---

{{< toc >}}

The **IPMI** widget on the **Network** screen displays the available IPMI channels. 

![NetworkScreenWithIPMI](/images/SCALE/22.02/NetworkScreenWithIPMI.png "Network with IPMI")

The **Identify Light** <span class="iconify" data-icon="material-symbols:highlight-rounded"></span> button displays a dialog where users can select a duration for the system IPMI to flash so they can identify it. 

The **Manage** <span class="iconify" data-icon="ic:round-launch"></span> button opens the IPMI manager in a new browser tab where users can log into the IPMI web interface.

Click in the IPMI channel to display the **IPMI** configuration screen.

{{< hint info >}}
IPMI requires compatible hardware! Refer to your hardware documentation to determine if the TrueNAS web interface has IPMI options.
{{< /hint >}}

## IPMI Configuration Screen

Click on the channel you wish to edit to open the configuration screen.

![IPMIConfigurationScreen](/images/SCALE/22.02/IPMIConfigurationScreen.png "IPMI Configuration")

| Setting | Description |                                                                                                                                   
|---------|-------------|
| **DHCP** | Select to use DHCP to assign IPv4 network values. Clear checkbox to manually configure a static IPv4 connection. |
| **IPv4 Address** | Enter the static IPv4 address of the IPMI web interface. |
| **IPv4 Netmask** | Enter the subnet mask of the IPv4 address. |
| **IPv4 Default Gateway** | Enter the default gateway of the IPv4 connection. |
| **VLAN ID** | Enter the VLAN identifier if the IPMI out-of-band management interface is not on the same VLAN as management networking. |
| **Password** | Enter a password for connecting to the IPMI interface from a web browser. The password must include at least one upper case letter, one lower case letter, one digit, and one special character (punctuation, e.g. ! # $ %, etc.). It must also be 8-16 characters long. |
| **Identify Light** | Like the <span class="iconify" data-icon="material-symbols:highlight-rounded"></span> button on the **IPMI** widget, displays the same dialog and dropdown list of options users can select for the duration to flash the system IPMI light on the compatible connected hardware. |
| **Manage** | Like the <span class="iconify" data-icon="ic:round-launch"></span> button on the **IPMI** widget, this opens the same IPMI manager in a new browser tab where users can communicate with the server without having direct to the hardware. |

{{< taglist tag="scaleipmi" limit="10" >}}

{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}
