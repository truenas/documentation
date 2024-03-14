---
title: "Advanced"
description: "Provides information about the system advanced namespace in the TrueNAS CLI. Includes command syntax and common commands."
weight: 10
aliases:
draft: false
tags:
- settings
---

## Advanced Namespace
The **advanced** namespace has six commands and is based on adding and managing system settings found in the SCALE API and web UI.
It provides access to advanced system settings and functions through the **advanced** commands.

## Advanced Commands 
The following **advanced** commands allow you to add new and manage advanced system settings.

You can enter commands from the main CLI prompt or from the **advanced** namespace prompt.

### Interactive Argument Editor (TUI)

{{< include file="/_includes/CLI/HintInteractiveArgsEditor.md" >}}

### Config Command 
The `config` command lists current advanced settings for the system.

{{< expand "Using the Config Command" "v" >}}
#### Description
The `config` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with advanced system settings (see list of **[Update Properties](#update-command)** for details).

#### Usage
From the CLI prompt, enter:

`system advanced config`

{{< expand "Command Example" "v" >}}
```
system advanced config
+----------------------------------+--------------------+
|                               id | 1                  |
|                      consolemenu | true               |
|                    serialconsole | false              |
|                       serialport | ttyS0              |
|                      serialspeed | 9600               |
|                      powerdaemon | false              |
|                      swapondrive | 2                  |
|                    overprovision | <null>             |
|                        traceback | true               |
|                     advancedmode | false              |
|                         autotune | false              |
|                      debugkernel | false              |
|                      uploadcrash | true               |
|                        anonstats | true               |
|                  anonstats_token |                    |
|                             motd | Welcome to TrueNAS |
|                       boot_scrub | 7                  |
|                      fqdn_syslog | false              |
|                         sed_user | USER               |
|                      sysloglevel | F_INFO             |
|                     syslogserver |                    |
|                 syslog_transport | UDP                |
|                    kdump_enabled | false              |
|             isolated_gpu_pci_ids | <empty list>       |
|             kernel_extra_options |                    |
|           syslog_tls_certificate | <null>             |
| syslog_tls_certificate_authority | <null>             |
|                       consolemsg | false              |
+----------------------------------+--------------------+
```
{{< /expand >}}
{{< /expand >}}

### Sed_Global_Password Command 
The `sed_global_password` command provides the global password that applies for SED drives on the system.

{{< expand "Using the Sed_Global_Password Command" "v" >}}
#### Description
The `sed_global_password` does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns the global SED password if set or an empty line if a password is not set.

#### Usage
From the CLI prompt, enter:

<code>system advanced sed_global_password</code>

{{< expand "Command Example" "v" >}}
```
system advanced sed_global_password

```
{{< /expand >}}
{{< /expand >}}

### Serial_Port_Choices Command 
The `serial_port_choices` command lists current advanced settings for the system.

{{< expand "Using the Serial_Port_Choices Command" "v" >}}
#### Description
The `serial_port_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the serial port options.

#### Usage
From the CLI prompt, enter:

`system advanced serial_port_choices`

{{< expand "Command Example" "v" >}}
```
system advanced serial_port_choices
+-------+-------+
| ttyS0 | ttyS0 |
+-------+-------+
```
{{< /expand >}}
{{< /expand >}}

### Syslog_Certificate_Authority_Choices Command 
The `syslog_certificate_authority_choices` command lists current certificate authority choices on the system.

{{< expand "Using the Syslog_Certificate_Authority_Choices Command" "v" >}}
#### Description
The `syslog_certificate_authority_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the certificate authority options.

#### Usage
From the CLI prompt, enter:

`system advanced syslog_certificate_authority_choices`

{{< expand "Command Example" "v" >}}
```
system advanced syslog_certificate_authority_choices
+---+-------+
| 1 | minio |
+---+-------+
```
{{< /expand >}}
{{< /expand >}}

### Syslog_Certificate_Choices Command 
The `syslog_certificate_choices` command lists current certificate choices on the system.

{{< expand "Using the Syslog_Certificate_Choices Command" "v" >}}
#### Description
The `syslog_certificate_choices` command does not require entering a property argument.
Enter the command then press <kbd>Enter</kbd>.
The command returns a table with the certificate options.

#### Usage
From the CLI prompt, enter:

`system advanced syslog_certificate_choices`

{{< expand "Command Example" "v" >}}
```
system advanced syslog_certificate_choices
+---+-----------------+
| 1 | truenas_default |
| 2 | minio           |
+---+-----------------+
```
{{< /expand >}}
{{< /expand >}}

### Update Command 
Use the `update` command to update advanced system settings.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}
{{< expand "Using the Update Command" "v" >}}
#### Description
The `Update` command has 16 optional properties to use to add or change advanced system settings.
Enter the property argument using the `=` delimiter to separate property and value. Double-quote property argument values using special characters.

Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line.

{{< expand "Update Properties" "v" >}}
{{< truetable >}}
| Property | Description | Syntax Example |
|----------|-------------|----------------|
| `boot_scrub` | Represents the number of days between boot pool scrubs. Enter a numeric value. | <code>boot_scrub=<i>8</i></code> |
| `consolemenu` | Set `consolemenu` to false to default to standard login or to `true` to show the console menu. | <code>consolemenu=<i>true</i></code> |
| `consolemsg` | Deprecated. Removal of `consolemsg` is planned in a future release. Use `system general update ui_consolemsg` property to display console messages in real time at the bottom of the UI browser. | N/A |
| `debugkernel` | Set to `true` to include the kernel debug when generating a debug file. After the next system reboot, the debug file includes kernel debug information. | <code>debugkernel=<i>true</i></code> |
| `fqdn_syslog` | Set to `true` to include the Fully-Qualified Domain Name (FQDN) in logs to precisely identify systems with similar hostnames. | <code>fqdn_syslog=<i>true</i></code> |
| `motd` | Enter the message to display when a user logs in with SSH.  | <code>motd="<i>Display this text</i>"</code> |
| `serialconsole` | Set to `true` to enable the serial console but do not enable if the serial port is disabled. | <code>serialconsole=<i>true</i></code> |
| `serialport` | Enter the serial port address.  | <code>serialport="<i>serialPort</i>"</code> |
| `serialspeed` | Enter the serial port speed as one of these options: `9600`, `19200`, `138400`, `57600`, or `115200`. | <code>serialspeed=<i>9600</i></code> |
| `sed_user` | Enter the user passed to camcontrol security -u to unlock SEDs. User options are `USER` or `MASTER`.  | <code>sed_user="<i>USER</i>"</code> |
| `sysloglevel` | Enter the log level to send when `syslogserver` is defined. Only logs at or above this level are sent. Options are: `F_EMERG`, `F_ALERT`, `F_CRIT`, `F_ERR`, `F_WARNING`, `F_NOTICE`, `F_INFO`, `F_DEBUG`.  | <code>sysloglevel="<i>F_DEBUG</i>"</code> |
| `syslogserver` | When defined, logs of `sysloglevel` or above are sent. Enter the remote syslog server DNS hostname or IP address. Use nonstandard port numbers by adding a colon and the port number to the hostname, like *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. | <code>syslogserver=&#8203;"<i>remoteIP:portNumber</i>"</code> |
| `syslog_transport` | Transport protocol for the remote system log server connection. Choosing Transport Layer Security (TLS) also requires setting a preconfigured system certificate. Options are: `UDP`, `TCP`, `TLS`. | <code>syslog_transport=<i>TCP</i></code> |
| `syslog_tls_certificate` | Enter the TLS certificate key hex string.  | <code>syslog_tls_certificate=&#8203;<i>tlsCertficate</i></code> |
| `systlog_tls_`&#8203;`certificate_authority` | Enter the TLS certificate authority for the certificate. | <code>syslog_tls_certificate_authority=&#8203;<i>tls_CA</i></code> |
| `sed_password` | Enter the global password to use to unlock SEDs. | <code>sed_password="<i>sedPassword</i>"</code> |
<!-- comment out until Eng says to document or hide, and until we can validate the property arguments.
| `advancedmode` |  |  |
| `autotune` | When set to `true` the system executes an autotune script that attempts to optimize the system based on the installed hardware. |  |
| `kdump_enabled` |  |  |
| `powerdaemon` |  |  |
| `swapondrive` |  |  |
| `overprovision` |  |  |
| `traceback` |  |  |
| `uploadcrash` |  |  |
| `anonstat` |  |  |
| `kernel_extra_options` |  |  |
-->
{{< /truetable >}}
{{< /expand >}}

#### Usage
From the CLI prompt, enter:

<code>system advanced update debugkernel=<i>true</i></code>

Where *true* turns on the kernel debug option.

{{< expand "Command Example" "v" >}}
```
system advanced update debugkernel=true

```
{{< /expand >}}
{{< /expand >}}

### Isolated_Gpu_Pci_Ids command
Use `isolated_gpu_pci_ids` command to add the ID for a GPU PCI device.

Use the UI **System > Advanced > Isolated GPU** configuration screen to find and add the PCI ID detected by the system.

{{< include file="/_includes/CLI/CLICommandWIP.md" >}}

<!-- Commenting this out as we can't verify this command without having a GPU on a test system. It is easier to use the UI.
{{< expand "Using the Isolated_Gpu_Pci_Ids Command" "v" >}}
#### Description
The `isolated_gpu_pci_ids` command has one required property, `pci_id`.
`pci_id` is the device ID found in UI on the **System > Advanced > Isolated GPU** screen in the **GPUs** dropdown. 
The system detect GPU devices and displays the ID for that device.
Enter the property argument using the `=` delimiter to separate property and double-quoted value.
Enter the command string then press <kbd>Enter</kbd>.
The command returns an empty line..

#### Usage
From the CLI prompt, enter:

<code>system advanced update_gpu_pci_ids pci_id=[<i>deviceID</i>]</code>

Where *true* turns on the kernel debug option.

{{< expand "Command Example" "v" >}}
```
system advanced update debugkernel=true

```
{{< /expand >}}
{{< /expand >}} -->
