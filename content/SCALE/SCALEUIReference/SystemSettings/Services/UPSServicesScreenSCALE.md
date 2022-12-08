---
title: "UPS Services Screen"
description: "This article provides information on the UPS service screen settings."
weight: 70
alias: 
tags:
 - scaleups
 - scaleservices
---


{{< toc >}}


The **Services > UPS** screen settings specify connection, shutdown and other settings to configure UPS service for servers running TrueNAS SCALE.

Click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > UPS** configuration screen.

### General Options and Monitor Settings
**General Options** setting specify required UPS mode and connection. These settings change based on the **Master** or **Slave** UPS mode setting. 

![UPSServicesMtrOptions](/images/SCALE/22.12/UPSServicesMtrOptions.png "UPS Service General Options")

| Setting | Description |
|---------|-------------|
| **Identifier** | Required. Type a description for the UPS device. You can use alphanumeric, period (.), comma (,), hyphen (-), and underscore (_) characters. |
| **UPS Mode** | Options displayed below if **Master** is the **UPS mode** selected from the dropdown list. Select **Master** if the UPS is plugged directly into the system serial port. Selecting **Master** makes this the last system to shut down before the UPS. The UPS remains the last item to shut down. **Master** displays the **Driver** field, and the **Port or Hostname** field. The **Port or Hostname** field is required when **UPS mode** set to **Master**. See the [Network UPS Tools Overview](http://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client). |
| **Driver** | Required. Enter or select the device driver from the dropdown list. See the [Network UPS Tools compatibility list](http://networkupstools.org/stable-hcl.html) for a list of supported UPS devices. This field displays only when **UPS Mode** is set to **Master**. |
| **Port or Hostname** | Required. Enter or select the serial or USB port connected to the UPS from the dropdown list. Options include a list of ports on your system and **auto**. Select **auto** to automatically detect and manage the USB port settings.<br> When selecting an SNMP driver, enter the IP address or host name of the SNMP UPS device. |

![UPSServicesSlOptions](/images/SCALE/22.12/UPSServicesSlOptions.png "UPS Service Options")

| Setting | Description |
|---------|-------------|
| **Identifier** | Required. Type a description for the UPS device. You can use alphanumeric, period (.), comma (,), hyphen (-), and underscore (_) characters. |
| **UPS Mode** | Options displayed below if **Slave** is the **UPS mode** selected from the dropdown list. Select **Slave** to shut down this system before the master system. The UPS remains the last item to shut down. **Slave** displays the **Remote Hostname** and **Remote Port** fields, and removes the **Driver** field. The **Port or Hostname** field is not required when **UPS mode** set to **Slave**. See the [Network UPS Tools Overview](http://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client). |
| **Remote Hostname** | Required. Enter a valid IP address for the remote system with the **UPS Mode** set to **Master**. This field displays only when **UPS Mode** is set to **Slave**. |
| **Remote Port** | Required. Enter the open network port number of the UPS master system. The default port is 3493. This field displays only when **UPS Mode** is set to **Slave**. |
| **Port or Hostname** | Not required. Enter or select the serial or USB port connected to the UPS from the dropdown list. Options include a list of ports on your system and **auto**. Select **auto** to automatically detect and manage the USB port settings.<br> When selecting an SNMP driver, enter the IP address or host name of the SNMP UPS device. |

### Monitor Settings
**Monitor** settings specify the primary username and password, other users that have administrative access to the UPS service, and whether the default configuration listens on all interfaces.

| Setting | Description |
|---------|-------------|
| **Monitor User** | Enter a user to associate with this service. Keeping the default is recommended. |
| **Monitor Password** | Change the default password to improve system security. The new password cannot include a space or #. |
| **Extra Users** | Enter accounts that have administrative access. See [upsd.users(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.users) for examples. |
| **Remote Monitor** | Select to have the default configuration to listen on all interfaces using the known values of user: **upsmon** and password: **fixmepass**. |

### Shutdown Settings
**Shutdown** settings specify the UPS shutdown mode, command, and timer for the UPS service.

![UPSServicesSettingsShutdown](/images/SCALE/22.02/UPSServicesSettingsShutdown.png "UPS Service Shutdown Settings")

| Setting | Description |
|---------|-------------|
| **Shutdown Mode** | Select the battery option to used when the UPS initiates shutdown from the dropdown list. Options are **UPS reaches low battery** or **UPS goes on battery**. |
| **Shutdown Timer** | Enter a value in seconds for the UPS to wait before initiating shutdown. Shutdown does not occur if power is restored while the timer is counting down. This value only applies when **Shutdown Mode** is set to **UPS goes on battery**. |
| **Shutdown Command** | Enter a command to shut down the system when either battery power is low or the shutdown timer ends. |
| **Power off UPS** | Select to power off the UPS after shutting down the system. |

### Other Options Settings
**Other Options** settings specify warning and host sync times, a description for the UPS, and any additional parameters you want to apply to the UPS service.

![UPSServiceSettingsOtherOptions](/images/SCALE/22.02/UPSServiceSettingsOtherOptions.png "UPS Service Other Options")

| Setting | Description |
|---------|-------------|
| **No Communication Warning Time** | Enter the number of seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until the situation is fixed. |
| **Host Sync** | Upsmon waits up to this many seconds in master mode for the slaves to disconnect during a shutdown situation. |
| **Description** | Enter a description for this service. |
| **Auxiliary Parameters (ups.conf)** | Enter any extra options from [ups.conf](http://networkupstools.org/docs/man/ups.conf.html). |
| **Auxiliary Parameters (upsd.conf)** | Enter any extra options from [upsd.conf](http://networkupstools.org/docs/man/upsd.conf.html). |

{{< taglist tag="scaleups" limit="10" >}}
