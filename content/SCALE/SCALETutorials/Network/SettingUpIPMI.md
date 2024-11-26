---
title: "Setting Up IPMI"
description: "Guides you through setting up Intelligent Platform Management Interface (IPMI) on TrueNAS."
weight: 50
tags:
- network
- ipmi
---

{{< include file="/static/includes/IPMICompatibility.md" >}}

Many [TrueNAS systems](https://www.truenas.com/docs/hardware/) include a built-in out-of-band management port, enabling system access even when the web interface is unavailable.

Intelligent Platform Management Interface (IPMI) allows users to check the log, access the BIOS setup, and boot the system without physical access.
IPMI also enables users to remotely access the system to assist with configuration or troubleshooting issues.

The **IPMI** widget on the **Network** screen shows the available IPMI channels and gives access to IPMI configuration and event logs.

{{< trueimage src="/images/SCALE/Network/NetworkIPMIWidget.png" alt="IPMI Widget" id="IPMI Widget" >}}

## Configuring IPMI

Click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> on the channel you wish to edit to open the **IPMI** configuration screen.

{{< trueimage src="/images/SCALE/Network/IPMIConfigurationScreen.png" alt="IPMI Configuration Screen" id="IPMI Configuration Screen." >}}

To configure a static IPv4 connection for IPMI, do not select **DHCP**.

Enter the IPv4 address for the IPMI web interface.
Enter the IPv4 address subnet mask in **IPv4 Netmask**, such as *255.255.240.0*.
Enter the IPv4 connection default gateway.

If needed, enter the VLAN identifier of the IPMI interface in **VLAN ID**.
We recommend configuring IPMI on a separate VLAN that is isolated from the main TrueNAS network.
This allows for IPMI access even if the main network is down.

Click **Save** to update IPMI configuration.

After saving the configuration, access the IPMI interface using a web browser and the IP address specified in **Network > IPMI** or click <span class="iconify" data-icon="ic:round-launch" title="Open"></span> to open the IPMI manager in a new browser tab.
The management interface prompts for login credentials.
IPMI utility appearance and available functions vary by hardware.
Refer to your IPMI device documentation to learn the default administrator account credentials.

After logging in to the management interface, change the default administrative user name.
We recommend setting a strong IPMI password.
Refer to your IPMI device documentation for password requirements.
Document your password in a secure location.

Alternately, enter a new password in **IPMI Password Reset** on the **IPMI** configuration screen.

## IPMI Alerts

Click **Show Events** on the **IPMI** widget to show the **IPMI Events** log.

{{< trueimage src="/images/SCALE/Network/IPMIEvents.png" alt="IPMI Events" id="IPMI Events" >}}

Use the [Alert Settings Screen]({{< relref "AlertsSettingsServiceScreen.md" >}}) under the **Hardware** category to adjust IPMI alerts.
Configure the minimum warning level and frequency to display IPMI alerts in the TrueNAS UI.

{{< include file="/static/includes/IPMISELAlert.md" >}}
