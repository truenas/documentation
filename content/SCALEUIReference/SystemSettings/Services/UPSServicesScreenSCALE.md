---
title: "UPS Services Screen"
description: "Provides information on the UPS service screen settings."
weight: 70
tags:
 - ups
 - services
---

The **Services > UPS** screen settings specify connection, shutdown and other settings to configure UPS service for servers running TrueNAS SCALE.

{{< include file="/static/includes/NUTsupport.md" >}}

Click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the **Services > UPS** configuration screen.

{{< include file="/static/includes/HAUninterruptiblePowerSupplyNotice.md" >}}

### General Options and Monitor Settings
**General Options** setting specify required UPS mode and connection. These settings change based on the **Master** or **Slave** UPS mode setting.

{{< trueimage src="/images/SCALE/SystemSettings/UPSServiceSettingsGeneralOptions.png" alt="UPS Options" id="UPS Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Identifier** | Required. Type a description for the UPS device. You can use alphanumeric, period (.), comma (,), hyphen (-), and underscore (_) characters. |
| **UPS Mode** | Select the either **Master** or **Slave** mode from the dropdown list. Select **Master** if the UPS is plugged directly into the system serial port, or **Slave** to shut down this system before the master system. **Slave** displays the **Remote Hostname** and **Remote Port** fields, and removes the **Driver** field. The UPS remains the last item to shut down. See the [Network UPS Tools Overview](https://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client). |
| **Remote Host** | Required. Enter a valid IP address for the remote system with the **UPS Mode** set to **Master**. This field displays only when **UPS Mode** is set to **Slave**. |
| **Remote Port** | Required. Enter the open network port number of the UPS master system. The default port is 3493. This field displays only when **UPS Mode** is set to **Slave**. |
| **Driver** | Required. Enter or select the device driver from the dropdown list. See the [Network UPS Tools compatibility list](https://networkupstools.org/stable-hcl.html) for a list of supported UPS devices. This field displays only when **UPS Mode** is set to **Master**. |
| **Port or Hostname** | Required. Enter or select the serial or USB port connected to the UPS from the dropdown list. Options include a list of port on your system and **auto**. Select **auto** to automatically detect and manage the USB port settings.<br> When selecting an SNMP driver, enter the IP address or host name of the SNMP UPS device. |
{{< /truetable >}}

### Monitor Settings
**Monitor** settings specify the primary username and password, other users that have administrative access to the UPS service, and whether the default configuration listens on all interfaces.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Monitor User** | Enter a user to associate with this service. Keeping the default is recommended. |
| **Monitor Password** | Change the default password to improve system security. The new password cannot include a space or #. |
| **Extra Users** | Enter accounts that have administrative access. See [upsd.users(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.users) for examples. |
| **Remote Monitor** | Select to have the default configuration to listen on all interfaces using the known values of user: **upsmon** and password: **fixmepass**. |
{{< /truetable >}}

### Shutdown Settings
**Shutdown** settings specify the UPS shutdown mode, command, and timer for the UPS service.

{{< trueimage src="/images/SCALE/SystemSettings/UPSServicesSettingsShutdown.png" alt="UPS Service Shutdown Settings" id="UPS Service Shutdown Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Shutdown Mode** | Select the battery option to used when the UPS initiates shutdown from the dropdown list. Options are **UPS reaches low battery** or **UPS goes on battery**. |
| **Shutdown Timer** | Enter a value in seconds for the UPS to wait before initiating shutdown. Shutdown does not occur if power is restored while the timer is counting down. This value only applies when **Shutdown Mode** is set to **UPS goes on battery**. |
| **Shutdown Command** | Enter a command to shut down the system when either battery power is low or the shutdown timer ends. |
| **Power off UPS** | Select to power off the UPS after shutting down the system. |
{{< /truetable >}}

### Other Options Settings
**Other Options** settings specify warning and host sync times, a description for the UPS, and any additional parameters you want to apply to the UPS service.

{{< trueimage src="/images/SCALE/SystemSettings/UPSServiceSettingsOtherOptions.png" alt="UPS Service Other Options" id="UPS Service Other Options" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **No Communication Warning Time** | Enter the number of seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until the situation is fixed. |
| **Host Sync** | Upsmon waits up to this many seconds in master mode for the slaves to disconnect during a shutdown situation. |
| **Description** | Enter a description for this service. |
| **Auxiliary Parameters (ups.conf)** | Enter any extra options from [ups.conf](https://networkupstools.org/docs/man/ups.conf.html). |
| **Auxiliary Parameters (upsd.conf)** | Enter any extra options from [upsd.conf](https://networkupstools.org/docs/man/upsd.conf.html). |
{{< /truetable >}}
