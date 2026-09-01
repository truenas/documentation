---
title: "Advanced Settings Screen"
description: "Provides information on the System Settings > Advanced screen, cards, and configuration screen settings."
weight: 110
aliases:
 - /scale/scaleuireference/systemsettings/advancedsettingsscreen/
 - /scale/scaleuireference/systemsettings/advancedsettings/
 - /scale/scaleclireference/auth
 - /scale/scaleclireference/system/cliadvanced/
 - /scale/scaleclireference/system/clicore/
 - /scale/scaleclireference/system/clidevice/
 - /scale/scaleclireference/system/cliinitshutdownscript/
 - /scale/scaleclireference/system/clintpserver/
 - /scale/scaleclireference/system/clisystemdataset/
 - /scale/scaleclireference/system/clitunable/
 - /scale/scaleclireference/task/clicronjob/
 - /scale/scaleuireference/systemsettings/services/smartservicesscreen/
tags:
 - settings
 - pools
 - disks
 - datasets
 - cronjobs
 - console
 - replication
 - initshutdown
 - gpu
 - vm
 - sed
 - 2fa
 - syslog
 - ntp
doctype: reference
---


{{< include file="/static/includes/AdvancedSettingsWarningSCALE.md" >}}

The **Advanced Settings** screen provides configuration options for the console, syslog, audit, kernel, sysctl, storage (system dataset pool), replication, WebSocket sessions, cron jobs, init/shutdown scripts, NTP servers, allowed IP addresses, isolated GPU device(s), self-encrypting drives, and global two-factor authentication.

You can download or upload your system configuration files from this screen.

{{<include file="/static/includes/CustomScriptWarning.md">}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen.png" alt="Advanced Settings Screen" id="Advanced Settings Screen" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen2.png" alt="Advanced Settings Screen (cont.'d)" id="Advanced Settings Screen (cont.'d)" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen3.png" alt="Advanced Settings Screen (cont.'d)" id="Advanced Settings Screen (cont.'d)" >}}

{{< enterprise >}}
Enterprise-licensed systems include configuration options for STIG and FIPS security, and failover when the system is a High Availability system.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreenHA3.png" alt="Advanced Settings Screen for HA" id="Advanced Settings Screen for HA" >}}

{{< /enterprise >}}

## Manage Configuration

The **[Manage Configuration](#manage-configuration)** dropdown shows two options: one to download the system config file and the other to upload a system config file.
The option to reset system settings to the default configuration shows after uploading a configuration file.

### Download File

**Download File** opens the **Save Configuration** dialog, where users can download the current system configuration to their local machine.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigurationWindow.png" alt="Save Configuration" id="Save Configuration" >}}

The **Export Password Secret Seed** option is selected by default.
It stores hashes of the passwords sufficient for authentication in the system, but does not store user passwords.
The secret seed is used to decrypt encrypted fields in the TrueNAS configuration database.
Various fields are encrypted because they might contain sensitive information such as cryptographic certificates, passwords (not user login passwords), or weak hashing algorithms (for example, NT hashes of SMB users).
When a config file is restored without the secret seed, encrypted fields are set to empty values.
This means various services can be broken due to the missing information. Examples are SMB via local accounts and apps.

### Upload File

The **Upload File** option opens the **Upload Config** dialog, which allows users to choose a previously saved TrueNAS configuration to replace the current system configuration. This is useful when restoring system configuration settings after a clean install of a TrueNAS release.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralUploadConfig.png" alt="Upload Config" id="Upload Config" >}}

**Choose File** opens a file browser window to locate the downloaded and saved configuration file.
After selecting the file, the **Upload Config** window opens.
**Upload** starts the upload of the selected configuration file.

{{< hint type=warning >}}
All passwords are reset if the uploaded configuration file was saved without **Export Password Secret Seed** enabled.
{{< /hint >}}

### Reset to Defaults

The **Reset to Defaults** option opens the **Reset Configuration** dialog.
Using **Resetting to Defaults** returns the system configuration to factory settings and restarts the system. Users must set a new login password.

{{< trueimage src="/images/SCALE/SystemSettings/SystemGeneralResetConfiguration.png" alt="Reset Configuration" id="Reset Configuration" >}}

{{< hint type=warning >}}
Save the current system configuration with the _Download File_ option before resetting the configuration to default settings.

Not saving the system configuration before resetting it can result in losing data that is not backed up and losing the ability to revert to the previous configuration.
{{< /hint >}}

## Console Card

The **Console** card shows the current console settings for TrueNAS, which cover setting a password prompt for the text console, enabling/disabling the serial console, the current serial port number and speed, and any banner text entered in the **MOTD Banner** field.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsConsoleWidget.png" alt="Console Card" id="Console Card" >}}

**Configure** opens the **[Console](#console-configuration-screen)** configuration screen.

### Console Configuration Screen

**Console** settings configure how the [Console Setup menu]({{< ref "ConsoleSetupMenuSCALE" >}}) displays, the serial port it uses and the port speed, and the banner users see when accessing it.

{{< trueimage src="/images/SCALE/SystemSettings/ConsoleConfigScreen.png" alt="Console Config Screen" id="Console Config Screen" >}}

{{< expand "Console Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Show Text Console without Password Prompt** | Diplays the console without being prompted to enter a password. Leave disabled to add a login prompt to the system before showing the console menu. Selected by default. |
| **Enable Serial Console** | Enables the serial console. Leave clear if the serial port is disabled. |
| **Serial Port** | Sets the serial console port address. If using a port other than the default, enter the serial console port address. |
| **Serial Speed** | Sets the serial port speed in bits per second. If not using the default speed, select the speed (in bits per second) the serial port uses from the list. Options are 9600, 19200, 38400, 57600, or 115200. |
| **MOTD Banner** | Specifies the message you want to display when a user logs in with SSH. The default banner message is **Welcome to TrueNAS**. |
{{< /truetable >}}
{{< /expand >}}

## Syslog Card

The **Syslog** card displays the existing system logging settings that specify how and when the system sends log messages to system log (syslog) servers.
TrueNAS allows configuring an array of two syslog servers. Each server can have its own host, transport, and TSL certificate setting.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsSyslogWidget.png" alt="Syslog Card" id="Syslog Card" >}}

**Configure** opens the **[Syslog](#syslog-configuration-screen)** configuration screen.

### Syslog Configuration Screen

The **Syslog** settings specify the logging level the system uses to record system events to the boot device.
Sets whether to use a fully qualified domain name (FQDN) for logging and if audit logs are included.
There is also an option to configure a remote syslog server for recording system events.

{{< trueimage src="/images/SCALE/SystemSettings/SyslogConfigScreen.png" alt="Syslog Config Screen" id="Syslog Config Screen" >}}

**Add Syslog Server (0/1)** shows syslog server setting that allow entering the remote syslog server DNS hostname or IP address and setting the transport protocol.

**Remove Server** in the block of syslog server settings removes the configured syslog server.

{{< expand "Syslog Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Use FQDN for Logging** | Includes the fully qualified domain name (FQDN) in logs to identify systems with similar hostnames. |
| **Syslog Level** | Sets the minimum log priority level to send to the remote syslog server. The system only sends logs at or above this level. |
| **Host** | Sets the remote syslog server DNS hostname or IP address. Allows using non-standard port numbers by adding a colon and the port number to the hostname, like *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. Shows after clicking **Add Syslog Server (0/1)**. | 
| **Transport** | Sets the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Selecting Transport Layer Security (TLS) shows the **TLS Certificate** field, which requires importing a pre-configured server system certificate if not using the **Truenas_default** certificate. **Transport** shows after clicking **Add Syslog Server (0/1)** or **Add Syslog Server (1/2)**. |
| **TLS Certificate** | Sets the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server TLS certificate. Only shows when **Transport** is **TLS**. Select default or import via **Credentials > Certificates**. Can add up to 2 servers. |
| **Include Audit Logs** | Enables audit logging. |
{{< /truetable >}}
{{< /expand >}}

## Audit Card

The **Audit** card displays the current audit storage and retention policy settings. The public-facing [TrueNAS API]({{< ref "/SCALE/API" >}}) allows querying audit records, exporting audit reports, and configuring audit dataset settings and retention periods.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditWidget.png" alt="Advanced System Setting Audit Card" id="Advanced System Setting Audit Card" >}}

### Configure Auditing

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}

Click **Configure** to open the **Audit** configuration screen and [manage storage and retention policies]({{< ref "/SCALE/SystemSettings/Audit/Auditing#configuring-audit-storage-and-retention-policies" >}})

## Kernel Card

The **Kernel** card shows options for configuring the Linux kernel installed with TrueNAS.

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsAdvancedKernel.png" alt="Kernel Card" id="Kernel Card" >}}

{{< expand "Kernel Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Enable Debug Kernel** | Boots the debug kernel after the next restart. For troubleshooting only, typically should remain disabled. Disables Nvidia drivers when enabled. |
{{< /truetable >}}
{{< /expand >}}

## Cron Jobs Card

The **Cron Jobs** card displays **No Cron Jobs configured** until you add a cron job, and then it shows the information on the cron job(s) configured on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsCronJobWidget.png" alt="Cron Job Card" id="Cron Job Card" >}}

Clicking on the card header opens the **Cron Jobs** screen with a list view of any configured jobs, the **Columns** dropdown with options to change the columns shown in the table, and the **Add** button.

**Add** opens the **[Add Cron Job](#add-or-edit-cron-job-configuration-screen)** configuration screen.

Click on any job listed in the card to open the **[Edit Cron Jobs](#add-or-edit-cron-job-configuration-screen)** configuration screen populated with the settings for that cron job.

### Add or Edit Cron Job Configuration Screen

The **Add Cron Job** and **Edit Cron Job** configuration screens display the same settings.

**Cron Jobs** let users configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://manpages.debian.org/testing/cron/cron.8.en.html "Cron Man Page"). Cron jobs help users run repetitive tasks.

{{< trueimage src="/images/SCALE/SystemSettings/AddCronJobScreen.png" alt="Add Cron Job Screen" id="Add Cron Job Screen" >}}

{{< expand "Cron Job Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Description** | Specifies optional text about usage, location of, or other distinguishing information. |
| **Command** | Sets the full path to the command or script to run, like `cat /etc/passwd > users_$(date +%F).txt`, which creates a command string that generates a list of users on the system and writes that list to a file. |
| **Run As User** | Sets the user account to run the command. The user must have permissions to run the command or script. |
| **Schedule** | Sets the time when the task or job runs to a preset or custom time. Selecting **Create** opens the **Advanced Scheduler** window with detailed date and time options. |
| **Hide Standard Output** | Hides standard output (stdout) from the command. When cleared, TrueNAS mails stdout to the user account running the command. |
| **Hide Standard Error** | Hides error output (stderr) from the command. When cleared, TrueNAS mails stderr to the user account running the command. |
| **Enabled** | Select to enable this cron job. Leave cleared to disable the cron job without deleting it. |
{{< /truetable >}}
{{< /expand >}}

## Init/Shutdown Scripts Card

The **Init/Shutdown Scripts** card displays **No Init/Shutdown Scripts configured** until you add either a command or script; then the card lists the scripts configured on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsInitShutdownScriptWidget.png" alt="Init/Shutdown Scripts Card" id="Init/Shutdown Scripts Card" >}}


Clicking on the card header opens the **Init/Shutdown Scripts** screen with a list view of any configured scripts, the **Columns** dropdown with options to change the columns shown in the table, and the **Add** button.

Any script listed is a link that opens the **[Edit Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen populated with the settings for that script.

**Add** opens the **[Add Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen.

### Add or Edit Init/Shutdown Script Configuration Screens

**Init/Shutdown Scripts** lets users schedule commands or scripts to run at system startup or shutdown.

{{< trueimage src="/images/SCALE/SystemSettings/AddInitShutdownScriptConfigScreen.png" alt="Add Init/Shutdown Scripts" id="Add Init/Shutdown Scripts" >}}

{{< expand "Init/Shutdown Script Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Description** | Specifies optional text about usage, location of, or other distinguishing information. |
| **Type** | Sets the type as **Command** (executable) or **Script** (executable script). Changes screen to show the **Command** or **Script** configuration fields. |
| **Command** | Sets the command with options. Only shows when **Type** is **Command**. |
| **Script** | Sets the script to run using dash(1). Only shows when **Type** is **Script**. Scripts run using [dash(1)](https://manpages.debian.org/testing/dash/sh.1.en.html "dash(1) Page") by default, or under the interpreter named in the shebang line (for example, `#!/bin/bash`) of the script. |
| **When** |Sets when the command or script runs: **Pre Init** for early boot after mounting filesystems and starting networking, **Post Init** for the end of boot before Linux services start, or **Shutdown** during power-off. Scripts in the same category run sequentially in the order added. |
| **Enabled** | Enables the service, feature, or job. When not enabled, disables without deleting. |
| **Timeout** | Automatically stops the script or command after the specified seconds. |
{{< /truetable >}}
{{< /expand >}}

## Tunable Card

The **Tunable** card shows the existing sysctl settings on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsTunableCard.png" alt="Tunable Card" id="Tunable Card" >}}

Clicking on the card header opens the **Tunables** screen with a list view of any configured scripts, the **Columns** dropdown with options to change the columns shown in the table, and the **Add** button.

**Add** to add a tunable that configures a kernel module parameter at runtime.

### Add Tunable Screen

The **Add Tunable** configuration screen allows setting up tunables to configure Linux kernel parameters at runtime, UDEV rules for detected hardware, or ZFS module parameters for the ZFS kernel module on Linux.

{{< trueimage src="/images/SCALE/SystemSettings/AddTunableScreen.png" alt="Add Tunable Screen" id="Add Tunable Screen" >}}

{{< expand "Tunable Settings" "v" >}} <!-- most of these settings are in in the settings ssot yaml file, noted in the project-memory.md file -->
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Type** | Sets the type of tunable to configure. Options: <ul><li>**SYSCTL** - Use to set Linux kernel parameters (called sysctl variables) that tune low-level kernel behavior across networking, memory management, virtual memory, file descriptors, security hardening and more that affect the entire system. Best used for general system performance, network stack, memory pressure, security hardening (e.g., against SYN floods: `net.ipv4.tcp_syncookies=1`). They are written to <file>/proc/sys/</file> at runtime via `sysctl -w` and are made persistent via files in <file>/etc/sysctl.d/</file> or <file>/etc/sysctl.confM/<file>. Variables persist across system reboots if set in config files.</li><li>**UDEV** - Use to set UDEV rules, which are dynamic device manager configurations that run with when the kernel detects hardware events (e.g, disk plugged in, USB device attached, block device created). Variables are applied per device or per subsystem. They are ideal for hardware-specific tuning, especially disks/SSDs in ZFS pools (e.g., forcing consistent I/O scheduler, readahead, or queue depth) on pool drives to avoid defaults that hurt ZFS performance. They are applied when the rules files ending in `.rules` in <file>/etc/udev/rules.d</file>. The udev daemon (udevd) parses them on device events. They are permanent when the rule file exists, and rules re-apply automatically on device add/remove operations.</li><li>**ZFS** - Use to set OpenZFS module parameters for the ZFS kernel module on Linux. They control ZFS-specific behavior like ARC caching, compression, I/O scheduling, prefetching, recordsize limits and more. Use for fine-tuning ZFS performance, memory usage (ARC/L2ARC), compression, dedup, scrub/resilver behavior, and I/O patterns. They only apply to ZFS filesystem/modules, and are applied when written to <file>/sys/module/zfs/parameters/</file> at runtime (after module load). Runtime changes are lost on reboot or module reloads. Use modprobe config for boot-time persistence.</li></ul> |
| **Variable** | Sets the name of the sysctl variable to configure. Sysctl tunables configure kernel parameters while the system runs and generally take effect immediately. |
| **Value** | Enter a value for the tunable. For a **SYSCTL** tunable, enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value to use for the loader, **sysctl** variable. |
| **Description** | Enter a description for the tunable. |
| **Enabled** | Select to enable this tunable. Leave clear to disable this tunable without deleting it. |
{{< /truetable >}}
{{< /expand >}}

## Adding NTP Servers

The **NTP Servers** card allows users to add Network Time Protocol (NTP) servers.
These sync the local system time with an accurate external reference.
By default, new installations use several existing NTP servers. TrueNAS supports adding custom NTP servers.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsNTPServersWidget.png" alt="NTP Servers Card" id="NTP Servers Card" >}}

### Add NTP Server Screen

The **Add NTP Server** screen shows Network Time Protocol (NTP) server settings that sync the local TrueNAS system with an accurate external reference.
By default, new installations use several existing NTP servers. TrueNAS supports adding custom NTP servers.

**Add**, on the **NTP Servers** card, opens the **Add NTP Server** screen.

{{< trueimage src="/images/SCALE/SystemSettings/AddNPTServerScreen.png" alt="Add NTP Servers Screen" id="Add NTP Server Screen" >}}

{{< expand "Add NTP Server Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Address** | Sets the host name or IP address of the NTP server. |
| **Burst** | Allows using a non-public NTP server. Recommended when **Max Poll** is greater than 10. Only use on personal NTP servers or under direct control. Do not enable for public NTP servers. |
| **IBurst** | Speeds up initial synchronization from minutes to seconds. |
| **Prefer** | Enables preference for highly accurate NTP servers with time monitoring hardware. Only use with highly accurate NTP servers. |
| **Min Poll** | Sets the minimum polling interval in seconds as a power of 2, like 6 means 2^6 = 64 seconds. The minimum value is **6**. |
| **Max Poll** | Sets the maximum polling interval in seconds as a power of 2, like 10 means 2^10 = 1024 seconds. The default is **10**, and the maximum value is **17**. |
| **Force** | Forces addition of the NTP server even if currently unreachable. |
{{< /truetable >}}
{{< /expand >}}

## Storage Card

**Storage** card shows the pool configured as the system dataset pool, and allows users to select the storage pool they want to hold the system dataset.
The system dataset stores core files for debugging and keys for encrypted pools. It also stores Samba4 metadata, such as the user and group cache and share-level permissions.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemStorageWidget.png" alt="Storage Card" id="Storage Card" >}}

It also shows the resilvering priority setting.

**Configure** opens the **Storage Settings** configuration screen.

### Storage Settings Configuration Screen

The **Storage Settings** screen shows the current system dataset and resilvering priority.

{{< trueimage src="/images/SCALE/SystemSettings/SystemStorageConfigScreen.png" alt="System Dataset Pool Config Screen" id="System Dataset Pool Config Screen" >}}

**System Dataset Pool** sets the pool to hold the system dataset, including core files for debugging, encrypted pool keys, and Samba4 metadata. If one pool exists, it is auto-configured or select one from the dropdown list. It can move to an unencrypted pool or an encrypted pool without a passphrase. It can move to a key-encrypted pool but cannot change encryption type after. It cannot move to a passphrase-encrypted pool.

**Run Resilvering At Higher Priority At Certain Times** Enables a resilvering priority schedule. Only shows **Days/From/To** fields when selected. Is not enabled by default. Enabling shows additional fields to set the time and date to resilver the system dataset pool disks.

**Days of the Week** shows a dropdown list of day options.
**From** and **To** set the time range in which a resilver can run.

**Save** implements setting changes.

## Replication Card

The **Replication** card displays the number of replication tasks that can execute simultaneously on the system. It allows users to adjust the maximum number of replication tasks the system can perform simultaneously.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedSettingsReplicationWidget.png" alt="Replication Card" id="Replication Card" >}}

Click **Configure** to open the **Replication** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsReplicationConfigScreen.png" alt="Replication Config Screen" id="Replication Config Screen" >}}

**Replication Tasks Limit** sets the maximum number of replication tasks being executed simultaneously. 

**Save** retains changes and closes the screen.

## Access Card

{{< include file="/static/includes/AccessWidget.md" >}}

If the configured session timeout is exceeded, TrueNAS displays a **Logout** dialog with the exceeded ticket lifetime value and the time the session is scheduled to terminate.

{{< expand "Logout Dialog" "v" >}}
{{< trueimage src="/images/SCALE/SystemSettings/TimeoutDialog.png" alt="Logout Dialog" id="Logout Dialog" >}}

**Extend Session** resets the token counter.
If the button is not clicked, TrueNAS terminates the session automatically and returns to the login screen.
{{< /expand >}}

 **Configure** opens the **Access Settings** screen.

### Access Settings Screen

The **Access Settings** screen allows users to configure a login banner.

**Login Banner** sets the text message shown before the TrueNAS login screen. Maximum 4096 characters, including spaces. Long text wraps and can use carriage returns. Leave empty to show the login screen without a banner.

**Continue** on the banner screen, closes the screen before it shows the login splash screen.

{{< enterprise >}}
**Allow Directory Service users to access WebUI** shows on Enterprise-licensed systems. When enabled, TrueNAS automatically creates a new entry, named as the domain admin group, in the **Privileges** screen table. For example, if the domain is *ad03.mydomain.net*, a group of that name  is listed as well as any of the groups AD creates on the system.
{{< /enterprise >}}

## Allowed IP Addresses Card

The **Allowed IP Addresses** card displays IP addresses and networks added to the system that are allowed to use the API and UI.
If this list is empty, then all IP addresses are allowed to use the API and UI.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemAllowedIPAddressesWidget.png" alt="Allowed IP Addresses Card" id="Allowed IP Addresses Card" >}}

**Configure** opens the **Allowed IP Addresses** configuration screen.

{{< hint type="warning" >}}
Entering an IP address into the allowed IP address list denies access to the UI or API for all other IP addresses not listed.

Only use when limiting system access to a single or a limited number of IP addresses. Leave the list blank to allow all IP addresses.
{{< /hint >}}

**Add**, next to **Allowed IP Addresses**, shows the **IP Address/Subnet** field.
IP Address/Subnet specifies the IP address and subnet of allowed addresses. Make sure the first address and/or subnet includes your current client system.
Enter a specific IP address, for example, *192.168.1.1*, for individual access, or use an IP address with a subnet mask, like *192.168.1.0/24*, to define a range of addresses.
Multiple addresses can be entered. Click **Add** for each entry.

**Save** retains setting changes and closes the screen.
A **Restart Web Service** dialog opens.
**Confirm** activates **Continue**. 
**Continue** restarts the web UI and applies changes.

## Self-Encrypting Drive Card

{{< include file="/static/includes/SEDEnterpriseAdmonition.md" >}}

The **Self-Encrypting Drive** (SED) card shows when the system has self-encrypting drives and is licensed for SED.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsSelfEncryptingDriveCard.png" alt="Self-Encrypting Drive Card" id="Self-Encrypting Drive Card" >}}

**Configure** opens the **[Self-Encrypting Drive](#self-encrypting-drive-configuration-screen)** configuration screen.

### Self-Encrypting Drive Configuration Screen

The **Self-Encrypting Drive** configuration screen allows users to set the ATA security user and create a SED global password.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSelfEncryptingDriveConfigScreen.png" alt="Self-Encrypting Drive Config Screen" id="Self-Encrypting Drive Config Screen" >}}

{{< expand "Self-Encrypting Drive Settings" "v" >}} <!-- tag for ui ref setting automation {id="system_advanced_sed-config"} -->
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **SED Password** | Sets the global password to unlock self-encrypting drives (SEDs). Enterprise-licensed feature available for systems with SED drives. |
| **Confirm SED Password** | Confirms the global password that must exactly match the SED password. |
{{< /truetable >}}
{{< /expand >}}

## Isolated GPU Device(s) Card

The **Isolated GPU Device(s)** card displays any isolated graphics processing unit (GPU) device(s) configured on your system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingIsolatedGPUDeviceWidget.png" alt="Isolated GPU Device Card" id="Isolated GPU Device Card" >}}

**Configure** opens the **Isolated GPU PCI Ids** screen or opens the **NVIDIA Drivers** screen if TrueNAS is equipped with an NVIDIA GPU.

### Isolated GPU PCI IDs Configuration Screen

The **Isolate GPU PCI IDs** card shows GPU devices added in TrueNAS. It allows users to isolate additional GPU devices for use by a configured container or a VM.

**Configure** opens the **Isolated GPU PCI Ids** screen or opens the **NVIDIA Drivers** screen if TrueNAS is equipped with an NVIDIA GPU.

**GPU** shows GPU options you can select and isolate for a virtual machine (VM). TrueNAS must have at least two GPUs to isolate a GPU: one allocated to the host system for system functions and/or applications, and the other available to isolate for use by a VM.

{{< trueimage src="/images/SCALE/SystemSettings/IsolatedGPUPCIIDsConfigScreen.png" alt="Isolated GPU PCI Ids Screen" id="Isolated GPU PCI Ids Screen" >}}

**Save** retains the changes and closes the screen.

To allocate an isolated GPU device, select it while creating or editing the VM configuration.
When allocated to a VM, the isolated GPU connects to the VM as if it were physically installed in that VM, and it becomes unavailable for any other allocations.

## NVIDIA Drivers Card

The **NVDIA Drivers** card shows the status of NVIDIA GPU support in TrueNAS. When TrueNAS is not equipped with an NVIDIA GPU device, the status shows as disabled.

NVIDIA GPU support is required before containers or VMs can use NVIDIA GPUs for graphics acceleration or computation.

{{< trueimage src="/images/SCALE/SystemSettings/NVIDIADriversCard.png" alt="NVIDIA Drivers Card" id="NVIDIA Drivers Card" >}}

**Configure** opens the **NVIDIA Drivers** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/NVIDIADriversConfigScreen.png" alt="NVIDIA Drivers Configuration Screen" id="NVIDIA Drivers Configuration Screen" >}}

**Enable NVIDIA GPU Support** enables NVIDIA support for containers and VMS.

**Save** retains the changes and closes the screen.

## Global Two Factor Authentication Card

The **Global Two Factor Authentication** card shows the status of global two-factor authentication, the tolerance window, and the status of two-factor authentication for SSH sessions. It provides access to the configuration screen that allows you to set up two-factor authentication (2FA) for your system.

The card displays the following read-only setting information:

{{< truetable >}}
| Field | Description |
|-------|-------------|
| **Global 2FA** | Shows whether Global 2FA is enabled or disabled. |
| **Tolerance Window** | Shows the current tolerance window value. |
| **Two Factor Authentication for SSH** | Shows whether 2FA for SSH is enabled or disabled. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationWidget.png" alt="Global Two Factor Authentication Card" id="Global Two Factor Authentication Settings Card" >}}

**Configure** opens the **Global Two Factor Authentication** configuration screen.

{{<include file="/static/includes/addcolumnorganizer.md">}}

{{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationSettingsScreen.png" alt="Global Two Factor Authentication Settings Screen" id="Global Two Factor Authentication Settings Screen" >}}

{{< expand "Global Two Factor Authentication Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Two Factor Authentication Globally** | Sets TrueNAS to prompt users to enter an authentication code (provided by an app such as Authenticator) before being able to log in to the system. When enabled, users without 2FA configured are prompted to set it up on their next login. Users can skip the initial setup if needed. |
| **Window** | Sets the number of valid authentication codes in the tolerance window. Extends code validity beyond the current to previous codes, like 1 means current and previous codes are valid, or 2 means current and two previous codes are valid. Useful in high-latency situations. |
| **Enable Two Factor Authentication for SSH** | Enables two-factor authentication (2FA) for system SSH access. Leave disabled until successful completing a UI 2FA test. |
{{< /truetable >}}
{{< /expand >}}

## System Security Card

{{< enterprise >}}
The **System Security** card allows administrators of Enterprise-licensed systems to enable or disable FIPS 140-2 compliant algorithms, general-purpose OS STIG compliance, and other administrator account rules.

Administrators considering enabling STIG and FIPS security settings should contact TrueNAS Support before making any changes!

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

Changing FIPS or STIG settings requires a system restart to apply the setting changes.
High Availability (HA) systems restart the standby controller and then show a prompt to failover and restart the primary controller.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedSecurityWidget.png" alt="System Security Card" id="System Security Card" >}}

**Settings** opens the **System Security** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemSecurityScreen.png" alt="System Security Screen" id="System Security Screen" >}}

**Enable FIPS** enables or disables FIPS enforcement in TrueNAS.

**Enable General Purpose OS STIG compatibility mode** enables or disables the STIG compliance implementation in TrueNAS. It requires two-factor authentication for an admin user with full permissions before enabling STIG compatibility.

The following are administrator password settings:
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Min Password Age** | Sets the minimum days a password must be used before it can be changed in Enterprise systems. |
| **Max Password Age** | Sets the maximum days a password can be used before it must be changed in Enterprise systems. TrueNAS warns seven days before expiration. |
| **Password Complexity Ruleset** | Sets the required character types for administrator passwords in Enterprise systems. Choose between **Upper**, **Lower**, **Number**, and **Special** character requirements. |
| **Min Password Length** | Specifies the minimum number of characters administrator passwords for Enterprise systems. Must be at least **8** characters. |
| **Password History Length** | Secifies the number of previous passwords to remember to prevent reusing passwords in Enterprise systems. Range is between 1 and 10. |
{{< /truetable >}}
{{< /enterprise >}}

## Failover Card

{{< enterprise >}}
The **Failover** card, which only shows on Enterprise-licensed HA systems, shows the status of failover, the default controller, and the network timeout before TrueNAS initiates failover.
{{< /enterprise >}}

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsFailoverWidget.png" alt="System Failover Card" id="System Failover Card" >}}

**Configure** opens the **Failover** configuration screen.

### Failover Configuration Screen

The **Failover** screen shows settings used on TrueNAS Enterprise (HA) systems to turn the failover function on or off, sync the primary and standby controllers, and allow administrator users to configure failover. The main menu option and screen only display on Enterprise (HA) systems with the correct license applied.

{{< trueimage src="/images/SCALE/SystemSettings/FailoverScreen.png" alt="Failover Screen" id="Failover Screen" >}}

**Sync To Peer** initiates a sync operation that copies over the primary controller configuration to the standby controller. Opens the **[Sync To Peer](#sync-to-or-from-peer)** dialog to confirm the operation. 

**Sync From Peer** initiates a sync operation that copies over the standby controller configuration to the primary controller.

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Automatic Failover** | Enables automatic failover in Enterprise HA systems. Clearing disables. |
| **Default TrueNAS controller** | Sets the current active controller as default when both controllers are online and HA is enabled in Enterprise HA systems. Briefly interrupts services. Leave unselected on the default TrueNAS controller and allow the system to fail over to change the default controller. This process also briefly interrupts system services. |
| **Network Timeout Before Initiating Failover** | ets the number in seconds to wait after a network failure before triggering a failover in Enterprise HA systems. The default value is 0, which means failover occurs immediately or after two seconds when the system is using a link aggregate. |
{{< /truetable >}}

## Sync To or From Peer Dialogs
**Sync To Peer** and **Sync From Peer** buttons each open a confirmation dialog before TrueNAS performs the operation requested.

![FailoverSyncToPeerDialog](/images/SCALE/SystemSettings/FailoverSyncToPeerDialog.png "Failover Sync To Peer Dialog")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Reboot standby TrueNAS controller** | Select to cause the standby controller to restart after the sync operation completes. |
| **Are you sure you want to sync to peer?** | Confirms the action along with the **Confirm** checkbox. |
| **Confirm** | Select to confirm you want to perform the sync-to-peer operation. |
| **Proceed** | Begins the sync operation. |
{{< /truetable >}}
