---
title: "Advanced Settings"
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

The TrueNAS SCALE Advanced Settings section provides configuration options for the Console, Syslog, Sysctl, Kernel, Cron Jobs, Init/Shutdown Scripts, System Dataset Pool, and Isolated GPU Device(s).

{{< hint warning >}} 
Advanced Settings have reasonable defaults in place. Changing advanced settings can be dangerous when done incorrectly. Please use caution before saving. Make sure you are comfortable with ZFS, FreeBSD, and system [configuration backup and restoration]({{< relref "GeneralSettings.md" >}}) before making any changes. 
{{< /hint >}}

![AdvancedSettingsSCALE](/images/SCALE/AdvancedSettingsSCALE.png "SCALE Advanced Settings Screen")

## Console

The *Console* window allows users to configure the [Console Setup menu]({{< relref "Post-installConfiguration.md" >}}).

| Name | Description |
|------|-------------|
| Show Text Console without Password Prompt | Unset to add a login prompt to the system before the console menu is shown. |
| Enable Serial Console | Do not set this if the Serial Port is disabled. |
| Serial Port | The serial console port address. |
| Serial Speed | The speed (in bits per second) the serial port uses. |
| MOTD Banner | The message that displays when a user logs in with SSH. |

## Syslog 

The *Syslog* window lets users configure how and when the system sends log messages to the Syslog server.

| Name | Description |
|------|-------------|
| Use FQDN for Logging | Set to include the Fully-Qualified Domain Name (FQDN) in logs to precisely identify systems with similar hostnames. |
| Syslog Level | When Syslog Server is defined, only logs matching this level are sent. |
| Syslog Server | Remote syslog server DNS hostname or IP address. Nonstandard port numbers can be used by adding a colon and the port number to the hostname, like `mysyslogserver:1928`. Log entries are written to local logs and sent to the remote syslog server. |
| Syslog Transport | [Transport Protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Choosing Transport Layer Security (TLS) also requires selecting a preconfigured system Certificate. |
| Use System Dataset | Store system logs on the system dataset. Unset to store system logs in /var/ on the operating system device. |

## Sysctl

The *Sysctl* window lets users set up tunables that configure kernel parameters at runtime.

| Name | Description |
|------|-------------|
| Variable | Enter the name of the loader, sysctl, or rc.conf variable to configure. loader tunables are used to specify parameters to pass to the kernel or load additional modules at boot time. rc.conf tunables are for enabling system services and daemons and only take effect after a reboot. sysctl tunables are used to configure kernel parameters while the system is running and generally take effect immediately. |
| Value | Enter a value to use for the loader, sysctl, or rc.conf variable. |
| Description | Enter a description of the tunable. |
| Enabled | Enable this tunable. Unset to disable this tunable without deleting it. |

## Kernel

The *Kernel* window contains options for system optimization and kernel debugging.

| Name | Description |
|------|-------------|
| Enable Autotune | Activates a tuning script that attempts to optimize the system depending on the installed hardware. Warning: Autotuning is only used as a temporary measure and is not a permanent fix for system hardware issues. |
| Enable Debug Kernel | Set to boot a debug kernel after the next system reboot. |

## Cron Jobs

The *Cron Jobs* window allows users to configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://man.openbsd.org/cron.8 "Cron Man Page"). Cron Jobs help run repetitive tasks.

| Name | Description |
|------|-------------|
| Description | Enter a description of the cron job. |
| Command | Enter the full path to the command or script to be run. |
| Run As User | Select a user account to run the command. The user must have permissions allowing them to run the command or script. |
| Schedule | Select a schedule preset or choose Custom to open the advanced scheduler. Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. |
| Hide Standard Output | Hide standard output (stdout) from the command. When unset, any standard output is mailed to the user account cron used to run the command. |
| Hide Standard Error | Hide error output (stderr) from the command. When unset, any error output is mailed to the user account cron used to run the command. |
| Enabled | Enable this cron job. When unset, disable the cron job without deleting it. |

## Init/Shutdown Scripts

The *Init/Shutdown Scripts* window allows users to schedule commands or scripts to run at system startup or shutdown. 

| Name | Description |
|------|-------------|
| Description | Comments about this script. |
| Type | Select Command for an executable or Script for an executable script. |
| Command | Enter the command with any options. |
| Script | Select the script. The script will be run using [sh(1)](https://www.freebsd.org/cgi/man.cgi?query=sh "SH(1) Page"). |
| When | Select when the command or script runs:
*Pre Init* is early in the boot process, after mounting filesystems and starting networking.
*Post Init* is at the end of the boot process, before FreeNAS services start.
*Shutdown* is during the system power-off process. |
| Enabled | Enable this cron job. When unset, disable the cron job without deleting it. |
| Timeout | Automatically stop the script or command after the specified seconds. |

## System Dataset Pool

The *System Dataset Pool* window allows users to select the storage pool to keep the system dataset in. The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata such as the user and group cache and share level permissions.

Users can move the system dataset to unencrypted pools or encrypted pools that do not have passphrases.

If you move the system dataset to an encrypted pool, that pool is no longer allowed to have a passphrase. If the encrypted pool already has a passphrase set, you cannot move the system dataset to the pool.

## Isolated GPU Device(s)

The *Isolated GPU Device(s)* window gives users the option to isolate extra GPU devices for GPU passthrough.

GPU passthrough allows the TrueNAS SCALE kernel to directly present an internal PCI GPU to a virtual machine (VM).

The selected GPU device will act like it's driven by the VM, and the VM detects the GPU as if it were physically connected.
