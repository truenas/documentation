---
title: "UPS"
description: "Provides information about the service ups namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 110
draft: false
aliases:
---

## UPS Namespace

The **ups** namespace has three commands and is based on UPS service functions found in the SCALE API and web UI.
It provides access to UPS management methods through the **ups** commands.

## UPS Commands

The following **ups** commands allow you to view and edit UPS properties.

You can enter commands from the main CLI prompt or from the UPS namespace prompt.

{{< include file="/_includes/CLIGuideWIP.md" >}}

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Config Command

The `config` command returns a table with current UPS settings. 

{{< expand "Using the Config Command">}}
#### Description
The `config` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of current UPS settings when successful.

#### Usage
From the CLI prompt, enter:

`service ups config`

{{< expand "Command Example" "v" >}}
````
service ups config
+---------------------+--------------------+
|                  id | 1                  |
|                mode | MASTER             |
|          identifier | ups                |
|          remotehost |                    |
|          remoteport | 3493               |
|              driver |                    |
|                port |                    |
|             options |                    |
|         optionsupsd |                    |
|         description |                    |
|            shutdown | BATT               |
|       shutdowntimer | 30                 |
|             monuser | upsmon             |
|              monpwd |                    |
|          extrausers |                    |
|            rmonitor | false              |
|           powerdown | false              |
|      nocommwarntime | <null>             |
|            hostsync | 15                 |
|         shutdowncmd | <null>             |
| complete_identifier | ups@localhost:3493 |
+---------------------+--------------------+
````
{{< /expand >}}
{{< /expand >}}

### Driver_Choices Command

The `driver_choices` command returns choices of UPS drivers supported by the system.

{{< expand "Using the Driver_Choices Command">}}
#### Description
The `driver_choices` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table of UPS drivers your system supports when successful.

#### Usage
From the CLI prompt, enter:

`service ups driver_choices`

{{< expand "Command Example" "v" >}}
````
service ups driver_choices
+-----------------------------------+------------------------------------------------------------------+
| blazer_usb$625L | Ablerex ups 2 625L USB (blazer_usb)                                                |
| snmp-ups$various RPC | Baytech pdu 3 various RPC (snmp-ups)                                          |
| genericups upstype=7$550SL | Cyber Power Systems ups 1 550SL (genericups)                            |
| mge-shut$Tower 500W LV / HV | Dell ups 5 Tower 500W LV / HV Serial port (mge-shut)                   |
| usbhid-ups$3S | Eaton ups 5 3S (usbhid-ups)                                                          |
| blazer_ser$PowerPal | Fenton Technologies ups 5 PowerPal L-series (blazer_ser)                       |
| gamatronic$µPS3/1 | Gamatronic ups 5 µPS3/1 (gamatronic)                                             |
| apcsmart$PowerTrust 2997A | HP ups 1 PowerTrust 2997A HP 5061-2575 cable (apcsmart)                  |
| usbhid-ups$Various | IBM ups 5 Various USB port (usbhid-ups)                                         |
| genericups upstype=4$Jasuny USPS | Jageson Technology ups 1 Jasuny USPS (genericups)                 |
| nutdrv_atcl_usb$800 VA | Kanji ups 1 800 VA USB (nutdrv_atcl_usb) / Plexus ups 1 800 V...            |
| metasys$WHAD 2500 | Legrand ups 4 WHAD 2500 Serial (metasys)                                         |
| masterguard$(various) | Masterguard ups 1 (various) (masterguard)                                    |
| gamatronic$Expert C Online 6000 | NHS Sistemas de Energia ups 5 Expert C Online 6000 (gamatronic)    |
| oneac$ON400 | Oneac ups 1 ON400 advanced interface (oneac)                                           |
| usbhid-ups$Black Knight PRO | Powercom ups 5 Black Knight PRO USB (2009 models, product id:...       |
| snmp-ups$Metered PDU - Raritan PM | Raritan pdu 3 Metered PDU - Raritan PM no report, but should ... |
| blazer_ser$Castle C*K | Santak ups 2 Castle C*K Serial (blazer_ser)                                  |
| usbhid-ups$AVRX750UD | Tripp Lite ups 3 AVRX750UD USB (protocol 2010) (usbhid-ups)                   |
| blazer_ser$Alpha 1000is | UNITEK ups 2 Alpha 1000is (blazer_ser)                                     |
| nutdrv_qx$Vesta LED 850VA | Voltronic Power ups 2 Vesta LED 850VA USB (nutdrv_qx)                    |
| blazer_ser$CPM-800 | WinPower ups 2 CPM-800 (blazer_ser)                                             |
+-----------------------------------+------------------------------------------------------------------+
````
{{< /expand >}}
{{< /expand >}}

### Port_Choices Command

The `port_choices` command returns choices of UPS ports available on the system.

{{< expand "Using the Port_Choices Command">}}
#### Description
The `port_choices` command has no required properties.
Enter the command then press <kbd>Enter</kbd>.
The command returns a list of UPS port choices when successful.

#### Usage
From the CLI prompt, enter:

`service ups port_choices`

{{< expand "Command Example" "v" >}}
````
service ups port_choices
/dev/ttyS1
/dev/ttyS0
/dev/uhid
auto
````
{{< /expand >}}
{{< /expand >}}

### Update Command

The `update` command allows you to update UPS service settings.

{{< expand "Using the Update Command" "v" >}}
#### Description
The `update` command requires entering a `port` and a `driver`. It also has 17 additional properties you can configure.
See the **Update Command Properties** table below for details.
After specifying the `port` and a `driver`, you can include any other properties you want to update.
Enter the command string, then press <kbd>Enter</kbd>.
The command returns nothing when successful.

{{< expand "Update Command Properties">}}
{{< truetable >}}
| Property         | Required | Description | Syntax Example |
|------------------|----------|-------------|----------------|
| `powerdown`      | No       | When enabled, the UPS powers off after the system shuts down. | <code>powerdown="<i>true/false</i>"</code> |
| `rmonitor`       | No       | Sets the default configuration to listen on all interfaces using the known values of user: upsmon and password: fixmepass. | <code>rmonitor="<i>true/false</i>"</code> |
| `nocommwarntime` | No       | Number in seconds to wait before alerting that the service cannot reach any UPS. Warnings continue until the situation is fixed. | <code>nocommwarntime=<i>number</i></code> |
| `remoteport`     | No       | Only enabled when the UPS Mode is set to `SLAVE`. Enter the open network port number of the UPS Master system. The default port is `3493`. | <code>remoteport=<i>number</i></code> |
| `shutdowntimer`  | No       | Value in seconds the service waits for the UPS before initiating a shutdown. This only applies when `shutdown` is set to `BATT`. | <code>shutdowntimer=<i>number</i></code> |
| `hostsync`       | No       | Value in seconds Upsmon waits in master mode for the slaves to disconnect during a shutdown situation. | <code>hostsync=<i>number</i></code> |
| `description`    | No       | User-defined description for the service. | <code>description=<i>"description"</i></code> |
| `driver`         | Yes      | Network UPS Tools compatible driver. | <code>driver="<i>driver</i>"</code> |
| `extrausers`     | No       | User ID you want to have administrative access. | <code>extrausers=<i>UID</i></code> |
| `identifier`     | No       | User-defined identifier. It can contain alphanumeric, period, comma, hyphen, and underscore characters. | <code>identifier=<i>identifier</i></code> |
| `mode`           | No       | Choose `MASTER` if the UPS is plugged into the serial port. The UPS shuts down last. Choose `SLAVE` to have this system shut down before master. | <code>mode=<i>MODE</i></code> |
| `monpwd`         | No       | Changes the default password to improve system security. The new password cannot contain a space or \#. | <code>monpwd=<i>password</i></code> |
| `monuser`        | No       | Enter a user ID to associate with this service. We recommend the default. | <code>monuser=<i>UID</i> |
| `options`        | No       | Extra options from [UPS.CONF(5)](http://networkupstools.org/docs/man/ups.conf.html). | <code>options=<i>ups.conf</i> |
| `optionssupsd`   | No       | Extra options from [UPSD.CONF(5)](http://networkupstools.org/docs/man/upsd.conf.html). | <code>optionssupsd=<i>upsd.conf</i></code> |
| `port`           | Yes      | Serial or USB port connected to the UPS. To automatically detect and manage the USB port settings, enter `auto`. | <code>port=<i>port</i> |
| `remotehost`     | No       | IP address of the remote system with UPS Mode set as `MASTER`. | <code>remotehost=<i>0.0.0.0</i> |
| `shutdown`       | No       | Choose when the UPS initiates shutdown. Options are `BATT` and `LOWBATT`. | <code>shutdown=<i>MODE</i> |
| `shutdowncmd`    | No       | The custom command to overrule the default shutdown command when battery power is low or the shutdown timer ends. | <code>shutdowncmd=<i>command</i> |
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>service ups update port=<i>port</i> driver="<i>driver</i>"</code>

Where:
* *port* is the serial or USB port connected to the UPS.
* *driver* is the network UPS tools compatible UPS driver.

{{< expand "Command Example" "v" >}}
```
service ups update port=auto driver="blazer_usb$625L"
```
{{< /expand >}}
{{< /expand >}}
