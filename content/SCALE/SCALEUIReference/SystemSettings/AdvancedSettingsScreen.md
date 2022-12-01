---
title: "Advanced Settings Screen"
description: "This article provides information on the **System > Advanced** screen widgets and configuration screen settings."
weight: 30
aliases: /scale/scaleuireference/systemsettings/advancedsettings/
tags:
 - scalesettings
 - scalepools
 - scaledisks
 - scaledatasets
 - scalecronjob
 - scaleconsole
 - scalereplication
 - scaleinitshutdown
 - scalegpu
 - scalevms
 - scalesed
---

{{< toc >}}

TrueNAS SCALE advanced settings screen provides configuration options for the console, syslog, sysctl, replication, cron jobs, init/shutdown scripts, system dataset pool, isolated GPU device(s), and self-encrypting drives.

![SystemAdvancedScreen](/images/SCALE/22.02/SystemAdvancedScreen.png "SCALE Advanced Settings Screen") 

{{< include file="/_includes/AdvancedSettingsWarningSCALE.md" type="page" >}}

**Save Debug** saves a system debug file as a downloaded file on your system. 

## Console Widget
The **Console** widget on the **System Setting > Advanced** screen displays current console settings for TrueNAS.

![AdvancedSystemSettingsConsoleWidget](/images/SCALE/22.02/AdvancedSystemSettingsConsoleWidget.png "SCALE Advanced Settings Console Widget") 

**Configure** opens the **[Console](#console-configuration-screen)** configuration screen.

### Console Configuration Screen
**Console** settings configure how the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) displays, the serial port it uses and the speed of the port, and the banner users see when it is accessed.
{{< expand "Click Here for More Information" "v" >}}

![ConsoleConfigScreen](/images/SCALE/22.02/ConsoleConfigScreen.png "SCALE Console Settings Screen") 

| Settings | Description |
|----------|-------------|
| **Show Text Console without Password Prompt** | Select to display the console without being prompted to enter a password. Leave clear to add a login prompt to the system before showing the console menu. |
| **Enable Serial Console** | Select to enable the serial console. Do not select this if the serial port is disabled. |
| **Serial Port** | Enter the serial console port address. |
| **Serial Speed** | Select the speed (in bits per second) the serial port uses from the dropdown list. Options are 9600, 19200, 38400, 57600 or 115200. |
| **MOTD Banner** | Enter the message you want to display when a user logs in with SSH. |
{{< /expand >}}

## Syslog Widget
The **Syslog** widget displays the existing system logging settings that specify how and when the system sends log messages to the syslog server.

![AdvancedSystemSettingsSyslogWidget](/images/SCALE/22.02/AdvancedSystemSettingsSyslogWidget.png "SCALE Advanced Settings Syslog Widget") 

**Configure** opens the **[Syslog](#syslog-configuration-screen)** configuration screen.

### SysLog Configuration Screen
The **Syslog** configuration screen settings specify the logging level the system uses to record system events, the syslog server DNS host name or IP, the transport protocol it uses, and if using TLS, the certificate and certificate authority (CA) for that server, and finally if it uses the system dataset to store the logs.
{{< expand "Click Here for More Information" "v" >}}

![SyslogConfigScreen](/images/SCALE/22.02/SyslogConfigScreen.png "SCALE Syslog Settings Screen") 

| Settings | Description |
|----------|-------------|
| **Use FQDN for Logging** | Select to include the fully-qualified domain name (FQDN) in logs to precisely identify systems with similar host names. |
| **Syslog Level** | Select the logging level the syslog server uses when creating system logs; the system only sends logs matching this level. |
| **Syslog Server** | Enter the remote syslog server DNS host name or IP address. add a colon and the port number to the host name to use non-standard port numbers, like *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. |
| **Syslog Transport** | Enter the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Selecting Transport Layer Security (TLS) displays the **Syslog TLS Certificate** and **Syslog TSL Certificate Authority** fields. This requires preconfiguring both the system certificate and the certificate authority (CA) for the server. |
| **Syslog TLS Certificate** | Displays after selecting **TLS** in **Syslog Transport**. Select the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server TLS certificate from the dropdown list. Select either the default, or add the certificate and CA for the server using the **Credentials > Certificates** screen **Certificates** widget. |
| **Syslog TLS Certificate Authority** | Displays after selecting **TLS** in **Syslog Transport**. Select the TLS CA for the TLS server from the dropdown list. If not using the default, create the CA for the systlog server TLS certificate on the **Credentials > Certificates > Certificate Authorities** screen. |
| **Use System Dataset** | Select to store system logs on the system dataset. Leave clear to store system logs in `/var/` on the operating system device. |
{{< /expand >}}

## Cron Jobs Widget
The **Cron Jobs** widget displays **No Cron Jobs configured** until you add a cron job, then it displays information on cron job(s) configured on the system.

![AdvancedSettingsCronJobWidget](/images/SCALE/22.02/AdvancedSettingsCronJobWidget.png "SCALE Advanced Settings Cron Job Widget") 

**Add** opens the **[Add Cron Job](#add-or-edit-cron-job-configuration-screen) configuration screen.
Click on any job listed in the widget to open the **[Edit Cron Jobs](#add-or-edit-cron-job-configuration-screen) configuration screen populated with the settings for that cron job.

### Add or Edit Cron Job Configuration Screen
The **Add Cron Job** and **Edit Cron Job** configuration screens display the same settings. **Cron Jobs** lets users configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://manpages.debian.org/testing/cron/cron.8.en.html "Cron Man Page"). Cron Jobs help users run repetitive tasks.
{{< expand "Click Here for More Information" "v" >}}

![AddCronJobScreen](/images/SCALE/22.02/AddCronJobScreen.png "SCALE Add Cron Job Screen") 

| Settings | Description |
|----------|-------------|
| **Description** | Enter a description for the cron job. |
| **Command** | Enter the full path to the command or script to run. For example, a command string to create a list of users on the system and write that list to a file enter `cat /etc/passwd > users_$(date +%F).txt`.  |
| **Run As User** | Select a user account to run the command. The user must have permissions allowing them to run the command or script. |
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. |
| **Hide Standard Output** | Select to hide standard output (stdout) from the command. If left cleared, TrueNAS mails any standard output to the user account cron that ran the command. |
| **Hide Standard Error** | Select to hide error output (stderr) from the command. If left cleared, TrueNAS mails any error output to the user account cron that ran the command. |
| **Enabled** | Select to enable this cron job. Leave cleared to disable the cron job without deleting it. |
{{< /expand >}}

## Init/Shutdown Scripts Widget
The **Init/Shutdown Scripts** widget displays **No Init/Shutdown Scripts configured** until you add either a command or script, then the widget lists the scrips configured on the system.

![AdvancedSystemInitShutdownScriptWidget](/images/SCALE/22.02/AdvancedSystemInitShutdownScriptWidget.png "SCALE Advanced Settings Init/Shutdown Script Widget") 

**Add** opens the **[Add Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen.
Any script listed is a link that opens the **[Edit Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen populated with the settings for that script.

### Add or Edit Init/Shutdown Script Configuration Screens
**Init/Shutdown Scripts** lets users schedule commands or scripts to run at system startup or shutdown. 
{{< expand "Click Here for More Information" "v" >}}

![AddInitShutdownScriptConfigScreen](/images/SCALE/22.02/AddInitShutdownScriptConfigScreen.png "SCALE Init/Shutdown Script Settings Screen") 

| Settings | Description |
|----------|-------------|
| **Description** | Comments about this script. |
| **Type** | Select Command for an executable or Script for an executable script. |
| **Command** | Enter the command with any options. |
| **Script** | Select the script. The script runs using [dash(1)](https://manpages.debian.org/testing/dash/sh.1.en.html "dash(1) Page"). |
| **When** | Select when the command or script runs from the dropdown list. Options are **Pre Init** for early in the boot process, after mounting file systems and starting networking. **Post Init** runs at the end of the boot process, before Linux services start. **Shutdown** runs during the system power-off process. |
| **Enabled** | Select to enable this script. When left cleared, it disables the script without deleting it. |
| **Timeout** | Automatically stop the script or command after the specified number of seconds. |
{{< /expand >}}

## Sysctl Widget
The **Sysctl** widget displays either **No Sysctl configured** or the existing sysctl settings on the system. 

![AdvancedSysctlWidgetNoSysctl](/images/SCALE/22.02/AdvancedSysctlWidgetNoSysctl.png "SCALE Advanced Settings Sysctl Widget") 

**Add** to add a tunable that configures a kernel module parameter at runtime.

### Add or Edit Sysctl Configuration Screen
The **Add Sysctl** or **Edit Sysctl** configuration screen settings lets users set up tunables that configure kernel parameters at runtime.
{{< expand "Click Here for More Information" "v" >}}

![AddSysctlConfigScreens](/images/SCALE/22.02/AddSysctlConfigScreen.png "SCALE Add Sysctl Screen") 

| Settings | Description |
|----------|-------------|
| **Variable** | Enter the name of the sysctl variable to configure. sysctl tunables are used to configure kernel parameters while the system is running and generally take effect immediately. |
| **Value** | Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value to use for the loader, **sysctl** variable. |
| **Description** | Enter a description for the tunable. |
| **Enabled** | Select to enable this tunable. Leave clear to disable this tunable without deleting it. |
{{< /expand >}}

## System Dataset Pool Widget
**System Dataset Pool** widget displays the pool configured as the system dataset pool. The widget allows users to select the storage pool they want to hold the system dataset. 
The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata, such as the user and group cache and share level permissions.

![AdvancedSystemDatasetPoolWidget](/images/SCALE/22.02/AdvancedSystemDatasetPoolWidget.png "SCALE Advanced System Dataset Pool Widget") 

**Configure** opens the **System Dataset Pool** configuration screen.

### System Dataset Pool Configuration Screen
If the system has one pool, TrueNAS configures that pool as the system dataset pool. If your system has more than one pool, you can select the system dataset pool from the dropdown list of available pools. Users can move the system dataset to unencrypted pools or encrypted pools without passphrases.

![SystemDatasetPoolConfigScreen](/images/SCALE/22.02/SystemDatasetPoolConfigScreen.png "SCALE Advanced Settings System Dataset Pool Screen") 

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward. If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

## Replication
The **Replication** widget displays the number of replication tasks that can execute simultaneously configured on the system. It allows users to adjust the maximum number of replication tasks the system can execute simultaneously.

![SystemAdvancedSettingsReplicationWidget](/images/SCALE/22.02/SystemAdvancedSettingsReplicationWidget.png "SCALE Advanced Settings Replication Widget") 

Click **Configure** to open the **Replication** configuration screen. 

![AdvancedSettingsReplicationConfigScreen](/images/SCALE/22.02/AdvancedSettingsReplicationConfigScreen.png "SCALE Advanced Settings Replication Screen") 

Enter a number for the maximum number of simultaneous replication tasks you want to allow the system to process and click **Save**.

## Self-Encrypting Drive
The **Self-Encrypting Drive** (SED) widget displays the ATA security user and password configured on the system. 

![AdvancedSystemSEDWidget](/images/SCALE/22.02/AdvancedSystemSEDWidget.png "SCALE Advanced Settings Self-Encrypting Drive Widget") 

**Configure** opens the **[Self-Encrypting Drive](#self-encrypting-drive-configuration-screen)** configuration screen.

### Self-Encrypting Drive Configuration Screen
The **Self-Encrypting Drive** configuration screen allows users set the ATA security user and create a SED global password.
{{< expand "Click Here for More Information" "v" >}}

![AdvancedSystemSelfEncryptingDriveConfigScreen](/images/SCALE/22.02/AdvancedSystemSelfEncryptingDriveConfigScreen.png "SCALE Advanced Settings Self-Encrypting Drive screen") 

| Settings | Description |
|----------|-------------|
| **ATA Security User** | Select the user passed to camcontrol security -u to unlock SEDs from the dropdown list. Options are **USER** or **MASTER**. |
| **SED Password** | Enter the global password to unlock SEDs. |
| **Confirm SED Password** | Re-enter the global password to unlock SEDs. |
{{< /expand >}}

## Isolated GPU Device(s)
The **Isolated GPU Device(s)** widget displays an graphics processing unit (GPU) device(s) configured on your system. 

![AdvancedSettingIsolatedGPUDeviceWidget](/images/SCALE/22.02/AdvancedSettingIsolatedGPUDeviceWidget.png "SCALE Advanced Settings Isolated GPU Device Widget") 

**Configure** opens the **Isolate GPU PCI's ID** screen that allows users to isolate additional GPU devices for GPU passthrough.

### Isolate GPU PCI's ID Configuration Screen
The **Isolate GPU PCI's ID** configuration screen allows you to add GPU devices to your system. 
{{< expand "Click Here for More Information" "v" >}}
GPU passthrough allows the TrueNAS SCALE kernel to directly present an internal PCI GPU to a virtual machine (VM).

![IsolatedGPUPCIIDsConfigScreen](/images/SCALE/22.02/IsolatedGPUPCIIDsConfigScreen.png "SCALE Advanced Settings Isolated GPU PCI ID Screen") 

The GPU device acts like the VM is driving it, and the VM detects the GPU as if it is physically connected. Select the GPU device ID from the dropdown list. 
To isolate a GPU you must have at least two in your system; one allocated to the host system for system functions and the other available to isolate for use by a VM or application. 
Isolating the GPU prevents apps and the system from accessing it.
{{< /expand >}}

{{< taglist tag="scalesettings" limit="10" >}} 
