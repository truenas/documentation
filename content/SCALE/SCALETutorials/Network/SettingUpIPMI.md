---
title: "Setting Up IPMI"
description: "Guides you through setting up Intelligent Platform Management Interface (IPMI) on TrueNAS."
weight: 50
tags:
- network
- ipmi
---

{{< hint type=note >}}
IPMI requires compatible hardware! Refer to your hardware documentation to determine if the TrueNAS web interface has IPMI options.
{{< /hint >}}

Many [TrueNAS Storage Arrays](https://www.truenas.com/docs/hardware/) have a built-in out-of-band management port that provides side-band management should the system become unavailable through the web interface.

Intelligent Platform Management Interface (IPMI) allows users to check the log, access the BIOS setup, and boot the system without physical access. IPMI also enables users to remotely access the system to assist with configuration or troubleshooting issues.

{{< hint type=note >}}
Some IPMI implementations require updates to work with newer versions of Java. See [here](https://forums.freenas.org/index.php?threads/psa-java-8-update-131-breaks-asrocks-ipmi-virtual-console.53911/) for more information.
{{< /hint >}}

IPMI is configured in **Network > IPMI**. The IPMI configuration screen provides a shortcut to the most basic IPMI configuration.

![NetworkIPMIWidget](/images/SCALE/Network/NetworkIPMIWidget.png "IPMI widget")

## IPMI Options

After saving the configuration, users can access the IPMI interface using a web browser and the IP address specified in **Network > IPMI**. The management interface prompts for login credentials. Refer to your IPMI device documentation to learn the default administrator account credentials.

After logging in to the management interface, users can change the default administrative user name and create additional IPMI users. IPMI utility appearance and available functions vary by hardware.

We recommend setting a strong IPMI password. IPMI passwords must include at least one upper case letter, one lower case letter, one digit, and one special character (punctuation, e.g. ! # $ %, etc.). The IPMI password must also be 8-16 characters long. Document your password in a secure location.

## IPMI Alerts

Use the [Alert Settings Screen]({{< relref "AlertsSettingsServiceScreen.md" >}}) under the **Hardware** category to adjust IPMI alerts.
Configure the minimum warning level and frequency to display IPMI alerts in the TrueNAS UI.

{{< include file="/static/includes/IPMISELAlert.md" >}}
