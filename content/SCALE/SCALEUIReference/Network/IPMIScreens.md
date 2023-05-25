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

{{< trueimage src="/images/SCALE/22.12/NetworkScreenWithIPMI.png" alt="Network with IPMI" id="1 - Network screen with IPMI channels." >}}

The **Manage** <span class="iconify" data-icon="ic:round-launch"></span> button opens the IPMI manager in a new browser tab where users can log into the IPMI web interface.

Click in the IPMI channel to display the **IPMI** configuration screen.

{{< hint type=note >}}
IPMI requires compatible hardware! Refer to your hardware documentation to determine if the TrueNAS web interface has IPMI options.
{{< /hint >}}

## IPMI Configuration Screen

Click on the channel you wish to edit to open the configuration screen.

{{< trueimage src="/images/SCALE/22.12/IPMIConfigurationScreen.png" alt="IPMI Configuration Screen" id="2 - IPMI Configuration Screen." >}}

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

{{< taglist tag="scaleipmi" limit="10" >}}

{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}