## UPS

**General Options**

| | |
|-|-|
| Identifier | Describe the UPS device. It can contain alphanumeric, period, comma, hyphen, and underscore characters. |
| UPS Mode | Choose Master if the UPS is plugged directly into the system serial port. The UPS will remain the last item to shut down. Choose Slave to have this system shut down before Master. See the [Network UPS Tools Overview](http://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client). |
| Driver | See the [Network UPS Tools compatibility list](http://networkupstools.org/stable-hcl.html)for a list of supported UPS devices. |
| Port or Hostname | Serial or USB port connected to the UPS. To automatically detect and manage the USB port settings, select auto. |
|  | When an SNMP driver is selected, enter the IP address or hostname of the SNMP UPS device. |

**Monitor**

| | |
|-|-|
| Monitor User | Enter a user to associate with this service. Keeping the default is recommended. |
| Monitor Password | Change the default password to improve system security. The new password cannot contain a space or #.Enter accounts that have administrative access. See upsd.users(5) for examples. |
| Extra Users | Enter accounts that have administrative access. See [upsd.users(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.users) for examples. |
| Remote Monitor | Set for the default configuration to listen on all interfaces using the known values of user: upsmon and password: fixmepass. |

**Shutdown**

| | |
|-|-|
| Shutdown Mode | Choose when the UPS initiates shutdown. |
| Shutdown Timer | Enter a value in seconds for the the UPS to wait before initiating shutdown. Shutdown will not occur if power is restored while the timer is counting down. This value only applies when Shutdown mode is set to UPS goes on battery. |
| Shutdown Command | Enter a command to shut down the system when either battery power is low or the shutdown timer ends. |
| Power off UPS | Set for the UPS to power off after shutting down the system. |

**Email**

| | |
|-|-|
| Send Email Status Updates | Set enable sending messages to the address defined in the Email field. |
| Email | Enter any email addresses to receive status updates. Separate entries by pressing Enter. |
| Email Subject | Enter the subject for status emails. |

**Other Options**

| | |
|-|-|
| No Communication Warning Time | Enter a number of seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until the situation is fixed. |
| Host Sync | Upsmon will wait up to this many seconds in master mode for the slaves to disconnect during a shutdown situation. |
| Description | Describe this service. |
| Auxiliary Parameters (ups.conf) | nter any extra options from [UPS.CONF(5)](http://networkupstools.org/docs/man/ups.conf.html). |
| Auxiliary Parameters (upsd.conf) | Enter any extra options from [UPSD.CONF(5)](http://networkupstools.org/docs/man/upsd.conf.html). |