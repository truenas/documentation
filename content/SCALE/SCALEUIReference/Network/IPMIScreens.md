---
title: "IPMI Screens"
description: "Provides information on the Network screen IPMI widget and configuration screen."
weight: 50
aliases: 
 - /scale/scaleclireference/service/cliipmi/
tags:
- network
- ipmi
---

The **IPMI** widget on the **Network** screen shows the available IPMI channels. 

{{< trueimage src="/images/SCALE/Network/Network.png" alt="Network with IPMI" id="Network screen with IPMI channels." >}}

Click <span class="iconify" data-icon="ic:round-launch" title="Open"></span> to open the IPMI manager in a new browser tab where users can log into the IPMI web interface.

Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> to go to the **IPMI** configuration screen.

Click **Show Events** to show the **IPMI Events** log.

{{< trueimage src="/images/SCALE/Network/IPMIEvents.png" alt="IPMI Events" id="IPMI Events" >}}

{{< hint type=note >}}
IPMI requires compatible hardware! Refer to your hardware documentation to determine if the TrueNAS web interface has IPMI options.
{{< /hint >}}

## IPMI Configuration Screen

Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> on the channel you wish to edit to open the configuration screen.

{{< trueimage src="/images/SCALE/Network/IPMIConfigurationScreen.png" alt="IPMI Configuration Screen" id="IPMI Configuration Screen." >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **DHCP** | Select to use DHCP to assign IPv4 network values. Clear the checkbox to manually configure a static IPv4 connection. |
| **IPv4 Address** | Enter the IPMI web interface static IPv4 address. |
| **IPv4 Netmask** | Enter the IPv4 address subnet mask. |
| **IPv4 Default Gateway** | Enter the IPv4 connection default gateway. |
| **VLAN ID** | Enter the VLAN identifier if the IPMI out-of-band management interface is not on the same VLAN as management networking. |
| **Password** | Enter an 8-16 character password for connecting to the IPMI interface from a web browser. The password must include at least one upper case letter, one lower case letter, one digit, and one special character (punctuation, e.g. ! # $ %, etc.). |
| **Save** | Save the configuration. |
| **Manage** | Opens the IPMI manager in a new browser tab where users can communicate with the server without having direct access to the hardware. |
| <span class="iconify" data-icon="material-symbols:highlight-rounded"></span> **Flash Identify Light** | Flashes the system IPMI light on the compatible connected hardware. |
| <span class="iconify" data-icon="material-symbols:highlight-rounded"></span> **Stop Flashing** | Stops flashing the system IPMI light on the compatible connected hardware. |
{{< /truetable >}}
