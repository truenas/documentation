---
title: "Advanced Settings Screen"
description: "Provides information on the System Settings > Advanced screen, widgets, and configuration screen settings."
weight: 30
aliases: 
 - /scale/scaleuireference/systemsettings/advancedsettings/
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
---

{{< include file="/_includes/AdvancedSettingsWarningSCALE.md" >}}

The **Advanced** settings screen provides configuration options for the console, syslog, audit, kernel, sysctl, storage (system dataset pool), replication, websocket sessions, cron jobs, init/shutdown scripts, allowed IP addresses, isolated GPU device(s), self-encrypting drives, and global two-factor authentication.

**Save Debug** saves a system debug file to the local machine.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen.png" alt="SCALE Advanced Settings Screen" id="SCALE Advanced Settings Screen" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen2.png" alt="SCALE Advanced Settings Screen" id="SCALE Advanced Settings Screen" >}}

## Console Widget

The **Console** widget displays current console settings for TrueNAS.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsConsoleWidget.png" alt="Console Widget" id="Console Widget" >}}

**Configure** opens the **[Console](#console-configuration-screen)** configuration screen.

### Console Configuration Screen

**Console** settings configure how the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) displays, the serial port it uses and the port speed, and the banner users see when accessing it.

{{< trueimage src="/images/SCALE/SystemSettings/ConsoleConfigScreen.png" alt="Console Config Screen" id="Console Config Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Show Text Console without Password Prompt** | Select to display the console without being prompted to enter a password. Leave empty to add a login prompt to the system before showing the console menu. Selected by default. |
| **Enable Serial Console** | Select to enable the serial console. Selected by default. Clear this if the serial port is disabled.  |
| **Serial Port** | Shows the default serial port. If using a port other than the default, enter the serial console port address. |
| **Serial Speed** | Shows the default serial port speed. If not using the default speed, select the speed (in bits per second) the serial port uses from the dropdown list. Options are 9600, 19200, 38400, 57600, or 115200. |
| **MOTD Banner** | Enter the message you want to display when a user logs in with SSH. Default banner message is **Welcome to TrueNAS**. |
{{< /truetable >}}
{{< /expand >}}

## Syslog Widget

The **Syslog** widget displays the existing system logging settings that specify how and when the system sends log messages to the syslog server.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsSyslogWidget.png" alt="Syslog Widget" id="Syslog Widget" >}}

**Configure** opens the **[Syslog](#syslog-configuration-screen)** configuration screen.

### Syslog Configuration Screen

The **Syslog** settings specify the logging level the system uses to record system events to the boot device.
There are also options to configure a remote syslog server for recording system events.

{{< trueimage src="/images/SCALE/SystemSettings/SyslogConfigScreen.png" alt="Syslog Config Screen" id="Syslog Config Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Use FQDN for Logging** | Select to include the fully-qualified domain name (FQDN) in logs to identify systems with similar host names. |
| **Syslog Level** | Select the minimum log priority level to send to the remote syslog server. The system only sends logs at or above this level. |
| **Syslog Server** | Enter the remote syslog server DNS hostname or IP address. Add a colon and the port number to the hostname to use non-standard port numbers, like *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. |
| **Syslog Transport** | Enter the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Selecting Transport Layer Security (TLS) displays the **Syslog TLS Certificate** and **Syslog TSL Certificate Authority** fields. This setting requires preconfiguring both the server system certificate and the certificate authority (CA). |
| **Syslog TLS Certificate** | Displays after selecting **TLS** in **Syslog Transport**. Select the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server TLS certificate from the dropdown list. Select the default or add the certificate and CA for the server using the **Credentials > Certificates** screen **Certificates** widget. |
| **Syslog TLS Certificate Authority** | Displays after selecting **TLS** in **Syslog Transport**. Select the TLS CA for the TLS server from the dropdown list. If not using the default, create the CA for the systlog server TLS certificate on the **Credentials > Certificates > Certificate Authorities** screen. |
| **Include Audit Logs** | Select to enable audit logging.  |
{{< /truetable >}}
{{< /expand >}}

## Audit Widget

The **Audit** widget displays the current audit settings configured on the system. The public-facing API allows querying
audit records, exporting audit reports, and configuring audit dataset settings and retention period.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditWidget.png" alt="Advanced System Setting Audit Widget" id="Advanced System Setting Audit Widget" >}}

Click **Configure** to open the **Audit** configuration screen.

### Configure Auditing

{{< include file="/_includes/ConfigureSystemAuditSCALE.md" >}}

## Kernel Widget

The **Kernel** widget shows options for configuring the Linux kernel installed with TrueNAS SCALE.

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsAdvancedKernel.png" alt="Kernel Widget" id="Kernel Widget" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Enable Debug Kernel** | Set to boot a debug kernel after the next system reboot. |
{{< /truetable >}}
{{< /expand >}}

## Cron Jobs Widget

The **Cron Jobs** widget displays **No Cron Jobs configured** until you add a cron job, then it shows the information on cron job(s) configured on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsCronJobWidget.png" alt="Cron Job Widget" id="Cron Job Widget" >}}

**Add** opens the **[Add Cron Job](#add-or-edit-cron-job-configuration-screen)** configuration screen.
Click on any job listed in the widget to open the **[Edit Cron Jobs](#add-or-edit-cron-job-configuration-screen)** configuration screen populated with the settings for that cron job.

### Add or Edit Cron Job Configuration Screen

The **Add Cron Job** and **Edit Cron Job** configuration screens display the same settings.
**Cron Jobs** lets users configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://manpages.debian.org/testing/cron/cron.8.en.html "Cron Man Page"). Cron jobs help users run repetitive tasks.

{{< trueimage src="/images/SCALE/SystemSettings/AddCronJobScreen.png" alt="Add Cron Job Screen" id="Add Cron Job Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Description** | Enter a description for the cron job. |
| **Command** | Enter the full path to the command or script to run. For example, to create a command string that generates a list of users on the system and write that list to a file, enter `cat /etc/passwd > users_$(date +%F).txt`  |
| **Run As User** | Select a user account to run the command. The user must have permissions allowing them to run the command or script. |
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. |
| **Hide Standard Output** | Select to hide standard output (stdout) from the command. If left cleared, TrueNAS mails any standard output to the user account cron that ran the command. |
| **Hide Standard Error** | Select to hide error output (stderr) from the command. If left cleared, TrueNAS mails any error output to the user account cron that ran the command. |
| **Enabled** | Select to enable this cron job. Leave cleared to disable the cron job without deleting it. |
{{< /truetable >}}
{{< /expand >}}

## Init/Shutdown Scripts Widget

The **Init/Shutdown Scripts** widget displays **No Init/Shutdown Scripts configured** until you add either a command or script, then the widget lists the scrips configured on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemInitShutdownScriptWidget.png" alt="Init/Shutdown Scripts Widget" id="Init/Shutdown Scripts Widget" >}}

**Add** opens the **[Add Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen.
Any script listed is a link that opens the **[Edit Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen populated with the settings for that script.

### Add or Edit Init/Shutdown Script Configuration Screens

**Init/Shutdown Scripts** lets users schedule commands or scripts to run at system startup or shutdown.

{{< trueimage src="/images/SCALE/SystemSettings/AddInitShutdownScriptConfigScreen.png" alt="Add Init/Shutdown Scripts" id="Add Init/Shutdown Scripts" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Description** | Comments about this script. |
| **Type** | Select *Command* for an executable or *Script* for an executable script. |
| **Command** | Enter the command with any options. |
| **Script** | Select the script. The script runs using [dash(1)](https://manpages.debian.org/testing/dash/sh.1.en.html "dash(1) Page"). |
| **When** | Select when the command or script runs from the dropdown list. Options are **Pre Init** for early in the boot process, after mounting file systems and starting networking. **Post Init** runs at the end of the boot process before Linux services start. **Shutdown** runs during the system power-off process. |
| **Enabled** | Select to enable this script. When left cleared, it disables the script without deleting it. |
| **Timeout** | Automatically stop the script or command after the specified number of seconds. |
{{< /truetable >}}
{{< /expand >}}

## Sysctl Widget

The **Sysctl** widget displays either **No Sysctl configured** or the existing sysctl settings on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSysctlWidget.png" alt="Sysctl Widget" id="Sysctl Widget" >}}

**Add** to add a tunable that configures a kernel module parameter at runtime.

### Add or Edit Sysctl Configuration Screen

The **Add Sysctl** or **Edit Sysctl** configuration screen settings let users set up tunables that configure kernel parameters at runtime.

{{< trueimage src="/images/SCALE/SystemSettings/AddSysctlConfigScreen.png" alt="Sysctl Config Screen" id="Sysctl Config Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Variable** | Enter the name of the sysctl variable to configure. Sysctl tunables configure kernel parameters while the system runs and generally take effect immediately. |
| **Value** | Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value to use for the loader, **sysctl** variable. |
| **Description** | Enter a description for the tunable. |
| **Enabled** | Select to enable this tunable. Leave clear to disable this tunable without deleting it. |
{{< /truetable >}}
{{< /expand >}}

## Storage Widget

**Storage** widget displays the pool configured as the system dataset pool and allows users to select the storage pool they want to hold the system dataset.
The system dataset stores core files for debugging and keys for encrypted pools. It also stores Samba4 metadata, such as the user and group cache and share-level permissions.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemStorageWidget.png" alt="Storage Widget" id="Storage Widget" >}}

**Configure** opens the **Storage Settings** configuration screen.

### Storage Settings Configuration Screen

If the system has one pool, TrueNAS configures that pool as the system dataset pool.
If your system has more than one pool, you can set the system dataset pool using the **Select Pool** dropdown.
Users can move the system dataset to an unencrypted pool, or an encrypted pool without passphrases.

{{< trueimage src="/images/SCALE/SystemSettings/SystemStorageConfigScreen.png" alt="System Dataset Pool Config Screen" id="System Dataset Pool Config Screen" >}}

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward. If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

**Swap Size** lets users enter an amount (in GiB) of hard disk space to use as a substitute for RAM when the system fully utilizes the actual RAM.

By default, the system creates all data disks with the specified swap amount. Changing the value does not affect the amount of swap on existing disks, only disks added after the change. Swap size does not affect log or cache devices.

## Replication Widget

The **Replication** widget displays the number of replication tasks that can execute simultaneously configured on the system. It allows users to adjust the maximum number of replication tasks the system can perform simultaneously.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedSettingsReplicationWidget.png" alt="Replication Widget" id="Replication Widget" >}}

Click **Configure** to open the **Replication** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsReplicationConfigScreen.png" alt="Replication Config Screen" id="Replication Config Screen" >}}

Enter a number for the maximum number of simultaneous replication tasks you want to allow the system to process and click **Save**.

## Access Widget

The **Access** widget displays a list of all active sessions, including the user who initiated the session and what time it started.
It also displays the **Token Lifetime** setting for your current session.
It allows administrators to manage other active sessions and to configure the token lifetime for their account.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSettingsAccessWidget.png" alt="Access Widget" id="Access Widget" >}}

**Terminate Other Sessions** ends all sessions except for the one you are currently using.
You can also end individual sessions by clicking the logout <span class="iconify" data-icon="PH:arrow-square-right"></span> icon next to that session if it is not the admin user session.
You must check a confirmation box before the system allows you to end sessions.

The logout button is inactive for your current session and active for all other current sessions.
It cannot be used to terminate your current session.

**Token Lifetime** displays the configured token duration for your current session (default five minutes).
TrueNAS SCALE logs out user sessions that are inactive for longer than that configured token setting.
New activity resets the token counter.

If the configured token lifetime is exceeded, TrueNAS SCALE displays a **Logout** dialog with the exceeded ticket lifetime value and the time that the session is scheduled to terminate.

{{< expand "Logout Dialog" "v" >}}
{{< trueimage src="/images/SCALE/SystemSettings/TimeoutDialog.png" alt="Logout Dialog" id="Logout Dialog" >}}

**Extend Session** resets the token counter.
If the button is not clicked, the TrueNAS SCALE terminates the session automatically and returns to the log in screen.
{{< /expand >}}

 **Configure** opens the **Token Settings** screen.

### Token Settings Screen

The **Token Settings** screen allows users to configure the **Token Lifetime** for the current account.

{{< expand "" "v" >}}
{{< trueimage src="/images/SCALE/SystemSettings/TokenSettingsScreen.png" alt="Token Settings Screen" id="Token Settings Screen" >}}

Select a value that fits your needs and security requirements.
Enter the value in seconds.

{{< hint type=tip >}}
The default lifetime setting is 300 seconds, or five minutes.

The maximum is 2147482 seconds, or 24 days, 20 hours, 31 minutes, and 22 seconds.
{{< /hint >}}
{{< /expand >}}

## Allowed IP Addresses Widget

The **Allowed IP Addresses** widget displays IP addresses and networks added to the system that are allowed to use the API and UI. If this list is empty, then all IP addresses are allowed to use API and UI.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemAllowedIPAddressesWidget.png" alt="Allowed IP Addresses Widget" id="Allowed IP Addresses Widget" >}}

**Configure** opens the **Allowed IP Addresses** configuration screen.
{{< hint type="warning" >}}
Entering an IP address to the allowed IP address list denies access to the UI or API for all other IP addresses not listed.

Use only if you want to limit system access to a single or limited number of IP addresses. Leave the list blank to allow all IP addresses.
{{< /hint >}}

## Self-Encrypting Drive Widget

The **Self-Encrypting Drive** (SED) widget displays the system ATA security user and password.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSEDWidget.png" alt="Self-Encrypting Drive Widget" id="Self-Encrypting Drive Widget" >}}

**Configure** opens the **[Self-Encrypting Drive](#self-encrypting-drive-configuration-screen)** configuration screen.

### Self-Encrypting Drive Configuration Screen

The **Self-Encrypting Drive** configuration screen allows users to set the ATA security user and create a SED global password.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSelfEncryptingDriveConfigScreen.png" alt="Self-Encrypting Drive Config Screen" id="Self-Encrypting Drive Config Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **ATA Security User** | Select the user passed to `camcontrol security -u` to unlock SEDs from the dropdown list. Options are **USER** or **MASTER**. |
| **SED Password** | Enter the global password to unlock SEDs. |
| **Confirm SED Password** | Re-enter the global password to unlock SEDs. |
{{< /truetable >}}
{{< /expand >}}

## Isolated GPU Device(s) Widget

The **Isolated GPU Device(s)** widget displays any isolated graphics processing unit (GPU) device(s) configured on your system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingIsolatedGPUDeviceWidget.png" alt="Isolated GPU Device Widget" id="Isolated GPU Device Widget" >}}

**Configure** opens the **Isolated GPU PCI Ids** screen, which allows users to isolate additional GPU devices.

### Isolated GPU PCI Ids Configuration Screen

The **Isolate GPU PCI IDs** configuration screen allows you to isolate GPU devices for a virtual machine (VM).

{{< expand "Click Here for More Information" "v" >}}
To isolate a GPU, you must have at least two in your system; one allocated to the host system for system functions and/or applications and the other available to isolate for use by a VM.

{{< trueimage src="/images/SCALE/SystemSettings/IsolatedGPUPCIIDsConfigScreen.png" alt="Isolated GPU PCI Ids Screen" id="Isolated GPU PCI Ids Screen" >}}

Select the GPU device ID from the dropdown list and click **Save**.

Isolated GPU devices are reserved for use by configured applications or a VM.

To allocate an isolated GPU device, select it while creating or editing VM configuration.
When allocated to a VM, the isolated GPU connects to the VM as if it were physically installed in that VM and becomes unavailable for any other allocations.
{{< /expand >}}

## Global Two Factor Authentication Widget

The **Global Two Factor Authentication** widget allows you to set up two factor authentication (2FA) for your system.

{{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationWidget.png" alt="Global Two Factor Authentication Widget" id="Global Two Factor Authentication Settings Widget" >}}

**Configure** opens the **Global Two Factor Authentication Settings** configuration screen.

{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationSettingsScreen.png" alt="Global Two Factor Authentication Settings Screen" id="Global Two Factor Authentication Settings Screen" >}}

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Enable Two-Factor Authentication Globally** | Select to enable 2FA for the system. |
| **Window** | Enter the number of valid passwords. Extends password validity beyond the **Interval** setting. For example, *1* means that one password before and after the current password is valid, leaving three valid passwords. Extending the window is useful in high-latency situations. |
| **Enable Two-Factor Auth for SSH** | Select to enable 2FA for system SSH access. Leave this disabled until you complete a successful test of 2FA with the UI. |
{{< /truetable >}}
{{< /expand >}}

## System Security Widget

{{< enterprise >}}
The **System Security** widget allows administrators of Enterprise licensed systems to enable or disable FIPS 140-2 compliant algorithms.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSecurityWidget.png" alt="System Security Widget" id="System Security Widget" >}}

**Settings** opens the **System Security** configuration screen.

Click the **Enable FIPS** toggle to enable or disable enforcement, then click **Save**.
A system reboot is recommended after changing this setting.

{{< /enterprise >}}
