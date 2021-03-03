---
title: "Advanced"
weight: 40
---

## Advanced

**System > Advanced** contains more advanced options for configuring system settings.

![System Advanced](/images/CORE/12.0/SystemAdvanced.png "System Advanced")
<br><br>

| Setting                                   | Value     | Description                                                          |
|-------------------------------------------|-----------|----------------------------------------------------------------------|
| Show Text Console without Password Prompt | checkbox  | Set for the text console to be available without entering a password. |
| Enable Serial Console                     | checkbox  | **Do not** enable this option if the serial port is disabled. Adds the **Serial Port** and **Serial Speed** fields. On UEFI-installed systems, enabling the Serial Console also disables the system video output, including when connecting over the IPMI video console. |
| Serial Port                               | drop down | Select the serial port address in hex. |
| Serial Speed                              | drop down | Select the speed in bps used by the serial port. |
| MOTD Banner                               | string    | Set a message of the day (MOTD) that is shown when a user logs in to the system using SSH. |
| Show Console Messages                     | checkbox  | Display console messages from `/var/log/console.log` in real time at bottom of browser window. Click the console to bring up a scrollable screen. Set the `Stop refresh` option in the scrollable screen to pause updates. Unset to continue watching messages as they occur. When this option is set, a button to show the console log appears on busy spinner dialogs. |
| Show Advanced Fields by Default           | checkbox  | Show all interface configuration advanced fields by default. |
| ATA Security User                         | drop down | User passed to `camcontrol security -u` for unlocking SEDs. Values are *User* or *Master*. |
| SED Password                              | string    | Global password used to unlock Self-Encrypting Drives. |
| Reset SED Password                        | checkbox  | Select to clear the *Password for SED* column of **Storage > Disks**. |
| Swap Size in GiB                          | string    | By default, all data disks are created with the amount of swap specified. Changing the value does not affect the amount of swap on existing disks, only disks added after the change. Does not affect log or cache devices as they are created without swap. Setting to *0* disables swap creation completely. This is STRONGLY DISCOURAGED. |
| LOG (Write Cache) Overprovision Size in GiB | string  | Overprovisioning a ZFS Log SSD can increase its performance and lifespan by distributing writes and erases across more drive flash blocks. Defining a number of GiB here overprovisions ZFS Log disks during pool creation or extension. Examples: 50 GiB, 10g, 5GB. |
| Enable Autotune                           | checkbox  | Enable the Autotune script which attempts to optimize the system based on the installed hardware. Warning: Autotuning is only used as a temporary measure and is not a permanent fix for system hardware issues. |
| Enable Debug Kernel                       | checkbox  | Use a debug version of the kernel on the next boot. |
| Use FQDN for logging                      | checkbox  | Include the Fully-Qualified Domain Name (FQDN) in logs to precisely identify systems with similar hostnames. |
| Syslog Level                              | drop down | When **Syslog Server** is defined, only logs matching this level are sent. |
| Syslog Server                             | string    | Remote syslog server DNS hostname or IP address. Nonstandard port numbers can be used by adding a colon and the port number to the hostname, like `mysyslogserver:1928`. Log entries are written to local logs and sent to the remote syslog server. |
| Syslog Transport                          | drop down | [Transport Protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Choosing Transport Layer Security (*TLS*) also requires selecting a preconfigured system Certificate. |
| Syslog TLS Certificate                    | drop down | The preconfigured system Certificate to use for authenticating the TLS protocol connection to the remote system log server. |

There is also an option to:

**SAVE DEBUG**: generate text files that contain diagnostic information. After the debug data is collected, the system prompts for a location to save the compressed `.tar` file.

### Autotuning

TrueNAS provides an autotune script which optimizes the system depending on the installed hardware.
For example, if a pool exists on a system with limited RAM, the autotune script automatically adjusts some ZFS sysctl values in an attempt to minimize memory starvation issues.
It should only be used as a temporary measure on a system that hangs until the underlying hardware issue is addressed by adding more RAM.
Autotune will always slow such a system, as it caps the ARC.

> Note: Using the autotuning script is not recommended for TrueNAS Enterprise customers as this can override any specific tunings made by iXsystems Support.

Enabling autotuning will run the autotuner script at boot.
To run the script immediately, reboot the system.

If the autotune script adjusts any settings, the changed values appear in **System > Tunables**.
Note that deleting tunables that were created by autotune only affects the current session, as autotune-set tunables are recreated at boot.
This means that any autotune-set value that is manually changed will revert back to the value set by autotune on reboot.
To permanently change a value set by autotune, change the description of the tunable.
For example, changing the description to manual override prevents autotune from reverting that tunable back to the autotune default value.

When attempting to increase the performance of the TrueNAS system, and particularly when the current hardware may be limiting performance, try enabling autotune.
For those who wish to see which checks are performed, the autotune script is located in `/usr/local/bin/autotune`.