---
title: "UPS Configuration"
description: "Configuring a UPS with TrueNAS"
tags: ["UPS"]
---


TrueNAS® uses [NUT](https://networkupstools.org/) (Network UPS Tools) to provide UPS support. If the TrueNAS® system is connected to a UPS device, configure the UPS service in **Services** > **UPS** > **Configure**.

Figure 12.15.1 shows the UPS configuration screen:



<img src="/images/TN-12.0-services-ups.png" width='700px'>
<br><br>

## UPS Configuration Options


| Setting                          | Value          | Description |
|----------------------------------|----------------|------------|
| UPS Mode                         | drop-down menu | Select Master if the UPS is plugged directly into the system serial port. The UPS will remain the last item to shut down. Select Slave to have the system shut down before Master.  |
| Identifier                       | string         | Required. Describe the UPS device. Can contain alphanumeric, period, comma, hyphen, and underscore characters. |
| Driver / Remote Host             | combo-box      | Required. For a list of supported devices, see the Network UPS Tools compatibility list. The field suggests drivers based on the text entered. To search for a specific driver, begin typing the name of the driver. The search is case sensitive. The `Driver` field changes to `Remote Host` when `UPS Mode` is set to *Slave*. Enter the IP address of the system configured as the UPS *Master* system. See this [post](https://forums.freenas.org/index.php?resources/configuring-ups-support-for-single-or-multiple-freenas-servers.30/) for more details about configuring multiple systems with a single UPS. |
| Port or Hostname                 | drop-down menu | Serial or USB port connected to the UPS. To automatically detect and manage the USB port settings, open the drop-down menu and select auto. If the specific USB port must be chosen, see this [note](https://www.ixsystems.com/documentation/truenas/11.3-U4.1/services.html#ups-usb) about identifing the USB port used by the UPS. When an SNMP driver is selected, enter the IP address or hostname of the SNMP UPS device. `Port or Hostname` becomes `Remote Port` when the `UPS Mode` is set to *Slave*. Enter the open network port number of the UPS Master system. The default port is 3493. |
| Auxiliary Parameters (ups.conf)  | string         | Enter any additional options from ]ups.conf(5)](https://www.freebsd.org/cgi/man.cgi?query=ups.conf).  |
| Auxiliary Parameters (upsd.conf) | string         | Enter any additional options from [upsd.conf(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.conf). |
| Description                      | string         | Optional. Describe the UPS service. |
| Shutdown Mode                    | drop-down menu | Choose when the UPS initiates shutdown. Choices are UPS goes on battery and UPS reaches low battery.  |
| Shutdown Timer                   | integer        | Select a value in seconds for the UPS to wait before initiating shutdown. Shutdown will not occur if the power is restored while the timer is counting down. This value only applies when Shutdown Mode is set to UPS goes on battery.  |
| Shutdown Command                 | string         | Enter the command to run to shut down the computer when battery power is low or shutdown timer runs out.   |
| No Communication Warning Time    | string         | Enter a value in seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until the situation is fixed.   |
| Monitor User                     | string         | Required. Enter a user to associate with this service. The recommended default user is upsmon.  |
| Monitor Password                 | string         | Required. Default is the known value fixmepass. Change this to enhance system security. Cannot contain a space or #.    |
| Extra Users                      | string         | Enter accounts that have administrative access. See [upsd.users(5)](https://www.freebsd.org/cgi/man.cgi?query=upsd.users) for examples.  |
| Remote Monitor                   | checkbox       | Set for the default configuration to listen on all interfaces using the known values of user: upsmon and password: fixmepass.   |
| Send Email Status Updates        | checkbox       | Set to enables the TrueNAS® system to send email updates to the configured `Email` field.   |
| Email                            | email address  | Enter any email addresses to receive status updates. Separate multiple addresses with a semicolon (;).   |
| Email Subject                    | string         | Enter a subject line for email status updates.   |
| Power Off UPS                    | checkbox       | Set for the UPS to power off after shutting down the TrueNAS® system.    |
| Host Sync                        | integer        | Enter a time in seconds for [UPSMON(8)](https://www.freebsd.org/cgi/man.cgi?query=upsmon) to wait in master mode for the slaves to disconnect during a shutdown.    |

{{% pageinfo %}}
For USB devices, the easiest way to determine the correct device name is to enable the **Show console messages** option in **System** > **Advanced**. Plug in the USB device and look for a */dev/ugen* or */dev/uhid* device name in the console messages.
{{% /pageinfo %}}

Some UPS models might be unresponsive with the default polling frequency. This can show in TrueNAS® logs as a recurring error like: `libusb_get_interrupt: Unknown error`.

If this error occurs, decrease the polling frequency by adding an entry to `Auxiliary Parameters (ups.conf): pollinterval = 10`. The default polling frequency is two seconds.

[upsc(8)](https://www.freebsd.org/cgi/man.cgi?query=upsc) can be used to get status variables from the UPS daemon such as the current charge and input voltage. It can be run from Shell using this syntax:

`upsc ups@localhost`

The [upsc(8)](https://www.freebsd.org/cgi/man.cgi?query=upsc) man page gives some other usage examples.

[upscmd(8)](https://www.freebsd.org/cgi/man.cgi?query=upscmd) can be used to send commands directly to the UPS, assuming the hardware supports the command being sent. Only users with administrative rights can use this command. These users are created in the Extra users field.

### Multiple Computers with One UPS
A UPS with adequate capacity can power multiple computers. One computer is connected to the UPS data port with a serial or USB cable. This master makes UPS status available on the network for other computers. These slave computers are powered by the UPS, but receive UPS status data from the master computer. See the [NUT User Manual](https://networkupstools.org/docs/user-manual.chunked/index.html) and [NUT User Manual Pages](https://networkupstools.org/docs/man/index.html#User_man).
