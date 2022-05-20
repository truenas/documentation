---
title: "UPS Screen"
weight: 150
---

Use the **UPS** services screen to configure a UPS for your TrueNAS.

**SAVE** activates after all required fields are populated.

**CANCEL** exits without saving and returns you to the **Services** screen.

![ServicesUPSScreenTop](/images/CORE/13.0/ServicesUPSScreenTop.png "UPS Options")

**General Options**

| Name | Description |
|------|-------------|
| **Identifier** | Type a description for the UPS device. You can use alphanumeric, period (.), comma (,), hyphen (-), and underscore (_) characters. This is a required field. |
| **UPS Mode** | Select the mode from the dropdown list. Options are **Master** if the UPS is plugged directly into the system serial port, or **Slave** to have this system shut down before the master system. The UPS remains the last item to shut down. See the [Network UPS Tools Overview](http://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client). |
| **Driver** | Select the device driver from the dropdown list. See the [Network UPS Tools compatibility list](http://networkupstools.org/stable-hcl.html)for a list of supported UPS devices. This is a required field. |
| **Port or Hostname** | Select the serial or USB port connected to the UPS from the dropdown list. Options include a list of port on your system and **auto**. Select **auto** to automatically detect and manage the USB port settings.<br> When an SNMP driver is selected, enter the IP address or host name of the SNMP UPS device. This is a required field.|

**Monitor**

| Name | Description |
|------|-------------|
| **Monitor User** | Enter a user to associate with this service. Keeping the default is recommended. |
| **Monitor Password** | Change the default password to improve system security. The new password cannot include a space or #. |
| **Extra Users** | Enter accounts that have administrative access. See [upsd.users(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.users) for examples. |
| **Remote Monitor** | Select to have the default configuration to listen on all interfaces using the known values of user: **upsmon** and password: **fixmepass**. |

![ServicesUPSScreenBottom](/images/CORE/13.0/ServicesUPSScreenBottom.png "UPS Options")

**Shutdown**

| Name | Description |
|------|-------------|
| **Shutdown Mode** | Select the battery option to used when the UPS initiates shutdown. Dropdown list options are **UPS reaches low battery** or **UPS goes on battery**. |
| **Shutdown Timer** | Enter a value in seconds for the UPS to wait before initiating shutdown. Shutdown does not occur if power is restored while the timer is counting down. This value only applies when **Shutdown Mode** is set to **UPS goes on battery**. |
| **Shutdown Comman** | Enter a command to shut down the system when either battery power is low or the shutdown timer ends. |
| **Power off UPS** | Select for the UPS to power off after shutting down the system. |

**Email**

| Name | Description |
|------|-------------|
| **Send Email Status Updates** | Select to enable sending messages to the address defined in the **Email** field. |
| **Email** | Enter any email addresses to receive status updates. Separate entries by pressing <kbd>Enter</kbd>. |
| **Email Subject** | Enter the subject for status emails. |

**Other Options**

| Name | Description |
|------|-------------|
| **No Communication Warning Time** | Enter the number of seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until the situation is fixed. |
| **Host Sync** | Upsmon waits up to this many seconds in master mode for the slaves to disconnect during a shutdown situation. |
| **Description** | Enter a description for this service. |
| **Auxiliary Parameters (ups.conf)** | Enter any extra options from [ups.conf](http://networkupstools.org/docs/man/ups.conf.html). |
| **Auxiliary Parameters (upsd.conf)** | Enter any extra options from [upsd.conf](http://networkupstools.org/docs/man/upsd.conf.html). |

See [Configuring a UPS]({{< relref "/CORE/CORETutorials/Services/ConfigureUPS.md" >}}) for more information on setting up a UPS.
