---
title: "Advanced Settings"
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

TrueNAS SCALE Advanced Settings provide configuration options for the Console, Syslog, Sysctl, Kernel, Cron Jobs, Init/Shutdown Scripts, System Dataset Pool, Isolated GPU Device(s), and Self-Encrypting Drives.

{{< hint warning >}} 
Advanced Settings have reasonable defaults in place. Changing advanced settings can be dangerous when done incorrectly. Please use caution before saving. Make sure you are comfortable with ZFS, Linux, and system [configuration backup and restoration]({{< relref "ManageSysConfigSCALE.md" >}}) before making any changes. 
{{< /hint >}}

![AdvancedSettingsSCALE](/images/SCALE/AdvancedSettingsSCALE.png "SCALE Advanced Settings Screen")

## Console

**Console** lets users configure the [Console Setup menu]({{< relref "/SCALE/GettingStarted/Install/ConsoleSetupMenuSCALE.md" >}}).

| Name | Description |
|------|-------------|
| Show Text Console without Password Prompt | Unset to add a login prompt to the system before showing the console menu. |
| Enable Serial Console | Do not set this if the Serial Port is disabled. |
| Serial Port | The serial console port address. |
| Serial Speed | The speed (in bits per second) the serial port uses. |
| MOTD Banner | The message that displays when a user logs in with SSH. |


## Syslog

**Syslog** lets users determine how and when the system sends log messages to the Syslog server.

| Name | Description |
|------|-------------|
| Use FQDN for Logging | Set to include the Fully-Qualified Domain Name (FQDN) in logs to precisely identify systems with similar hostnames. |
| Syslog Level | When Syslog Server is defined, the system only sends logs matching this level. |
| Syslog Server | Remote Syslog server DNS hostname or IP address. You can use nonstandard port numbers by adding a colon and the port number to the hostname, like `mysyslogserver:1928`. Log entries are written to local logs and sent to the remote Syslog server. |
| Syslog Transport | [Transport Protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Choosing Transport Layer Security (TLS) also requires selecting a preconfigured system Certificate. |
| Use System Dataset | Store system logs on the system dataset. Unset to store system logs in /var/ on the operating system device. |


## Sysctl

**Sysctl** lets users set up tunables that configure kernel parameters at runtime.

| Name | Description |
|------|-------------|
| Variable | Enter the loader name, **sysctl**, or **rc.conf** variable to configure. TrueNAS uses loader tunables to specify parameters to pass to the kernel or load additional modules at boot time. **rc.conf** tunables enable system services and daemons and only take effect after a reboot. **sysctl** tunables configure kernel parameters while the system is running and generally take effect immediately. |
| Value | Enter a value to use for the loader, **sysctl**, or **rc.conf** variable. |
| Description | Enter a description of the tunable. |
| Enabled | Enable this tunable. Unset to disable this tunable without deleting it. |


## Kernel

**Kernel** contains options for system optimization and kernel debugging.

| Name | Description |
|------|-------------|
| Enable Autotune | Activates a tuning script that attempts to optimize the system depending on the installed hardware. Warning: Autotuning is a temporary measure and is not a permanent fix for system hardware issues. |
| Enable Debug Kernel | Set to boot a debug kernel after the next system reboot. |


## Cron Jobs

**Cron Jobs** lets users configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://manpages.debian.org/testing/cron/cron.8.en.html "Cron Man Page"). Cron Jobs help users run repetitive tasks.

| Name | Description |
|------|-------------|
| Description | Enter a description of the cron job. |
| Command | Enter the full path to the command or script to be run. |
| Run As User | Select a user account to run the command. The user must have permissions allowing them to run the command or script. |
| Schedule | Select a schedule preset or choose Custom to open the advanced scheduler. Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. |
| Hide Standard Output | Hide standard output (stdout) from the command. When unset, TrueNAS mails any standard output to the user account cron that ran the command. |
| Hide Standard Error | Hide error output (stderr) from the command. When unset, TrueNAS mails any error output to the user account cron that ran the command. |
| Enabled | Enable this cron job. When unset, disable the cron job without deleting it. |


## Init/Shutdown Scripts

**Init/Shutdown Scripts** lets users schedule commands or scripts to run at system startup or shutdown. 

| Name | Description |
|------|-------------|
| Description | Comments about this script. |
| Type | Select Command for an executable or Script for an executable script. |
| Command | Enter the command with any options. |
| Script | Select the script. The script runs using [dash(1)](https://manpages.debian.org/testing/dash/sh.1.en.html "dash(1) Page"). |
| When | Select when the command or script runs:
*Pre Init* is early in the boot process, after mounting filesystems and starting networking.
*Post Init* is at the end of the boot process, before FreeNAS services start.
*Shutdown* is during the system power-off process. |
| Enabled | Enable this cron job. When unset, disable the cron job without deleting it. |
| Timeout | Automatically stop the script or command after the specified seconds. |


## System Dataset Pool

**System Dataset Pool** lets users select which storage pool holds the system dataset. The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata, such as the user and group cache and share level permissions.

Users can move the system dataset to unencrypted pools or encrypted pools without passphrases.

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type aftwerward. If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.


## Isolated GPU Device(s)

**Isolated GPU Device(s)** lets users isolate additional GPU devices for GPU passthrough.

GPU passthrough allows the TrueNAS SCALE kernel to directly present an internal PCI GPU to a virtual machine (VM).

The GPU device acts like the VM is driving it, and the VM detects the GPU as if it is physically connected.

Isolating the GPU will prevent Apps and the System from accessing it.

## Replication

**Replication** lets users limit the maximum number of replication tasks executed simultaneously.


## Self-Encrypting Drive

The **Self-Encrypting Drive** (SED) pane lets users set the ATA Security User and create a SED global password.

| Name | Description |
|------|-------------|
| ATA Security User | User passed to camcontrol security -u to unlock SEDs |
| SED Password | Global password to unlock SEDs |
| Confirm SED Password | Re-enter the global password to unlock SEDs |
