---
title: "UPS Screen"
description: "This article describes the UPS screen in TrueNAS CORE."
weight: 150
tags:
- coreups
---

An uninterruptible power supply is a hardware device that provides a backup source of power in the event of a power outage. Use the **UPS** services screen to configure a UPS for your TrueNAS.

{{< include file="/_includes/HAUninterruptiblePowerSupplyNotice.md" type="page" >}}

**SAVE** activates after all required fields are populated.

**CANCEL** exits without saving and returns you to the **Services** screen.

{{< trueimage src="/images/CORE/13.0/ServicesUPSScreenTop.png" alt="UPS Options" id="1 - UPS Options (Top)" >}}

**General Options**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Identifier** | Type a description for the UPS device. You can use alphanumeric, period (.), comma (,), hyphen (-), and underscore (_) characters. This is a required field. |
| **UPS Mode** | Select mode from the dropdown list. **Master** is an option if the UPS plugs directly into the system serial port. Select **Slave** to have this system shut down before the master system. The UPS remains the last item to shut down. See the [Network UPS Tools Overview](http://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client). |
| **Driver** | Select the device driver from the dropdown list. See the [Network UPS Tools compatibility list](http://networkupstools.org/stable-hcl.html) for a list of supported UPS devices. This is a required field. |
| **Port or Hostname** | Select the serial or USB port connected to the UPS from the dropdown list. Options include a list of ports on your system and **auto**. Select **auto** to automatically detect and manage the USB port settings. Enter the IP address or host name of the SNMP UPS device when selecting an SNMP driver. If the **UPS Mode** field is set as **Master**, this is a required field. If set to **Slave** this field is not required. |
{{< /truetable >}}

**Monitor**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Monitor User** | Enter a user to associate with this service. Keeping the default is recommended. |
| **Monitor Password** | Change the default password to improve system security. The new password cannot include a space or #. |
| **Extra Users** | Enter accounts that have administrative access. See [upsd.users(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.users) for examples. |
| **Remote Monitor** | Select to have the default configuration listen on all interfaces using the known values of user: **upsmon** and password: **fixmepass**. |
{{< /truetable >}}

{{< trueimage src="/images/CORE/13.0/ServicesUPSScreenBottom.png" alt="UPS Options" id="2 - UPS Options (Bottom)" >}}

**Shutdown**
 
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Shutdown Mode** | Select the battery option to use when the UPS initiates shutdown. Dropdown list options are **UPS reaches low battery** or **UPS goes on battery**. |
| **Shutdown Timer** | Enter a value in seconds for the UPS to wait before initiating shutdown. Shutdown does not occur if power is restored while the timer is counting down. This value only applies when **Shutdown Mode** is set to **UPS goes on battery**. |
| **Shutdown Command** | Enter a command to shut down the system when either battery power is low or the shutdown timer ends. |
| **Power off UPS** | Select for the UPS to power off after shutting down the system. |
{{< /truetable >}}

**Email**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Send Email Status Updates** | Select to enable sending messages to the address defined in the **Email** field. |
| **Email** | Enter any email addresses to receive status updates. Separate entries by pressing <kbd>Enter</kbd>. |
| **Email Subject** | Enter the subject for status emails. |
{{< /truetable >}}

**Other Options**

{{< truetable >}}
| Name | Description |
|------|-------------|
| **No Communication Warning Time** | Enter the number of seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until situation resolved. |
| **Host Sync** | Length of time in seconds for upsmon to wait while in master mode for the slaves to disconnect. This applies during a shutdown situation. |
| **Description** | Enter a description for this service. |
| **Auxiliary Parameters (ups.conf)** | Enter any extra options from [ups.conf](http://networkupstools.org/docs/man/ups.conf.html). |
| **Auxiliary Parameters (upsd.conf)** | Enter any extra options from [upsd.conf](http://networkupstools.org/docs/man/upsd.conf.html). |
{{< /truetable >}}

{{< taglist tag="coreups" limit="10" >}}
