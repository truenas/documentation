---
title: "Advanced Settings Screen"
description: "Provides information on the System Settings > Advanced screen, widgets, and configuration screen settings."
weight: 30
aliases: 
 - /scale/scaleuireference/systemsettings/advancedsettings/
 - /scale/scaleclireference/auth
 - /scale/scaleclireference/system/cliadvanced/
 - /scale/scaleclireference/system/clicore/
 - /scale/scaleclireference/system/clidevice/
 - /scale/scaleclireference/system/cliinitshutdownscript/
 - /scale/scaleclireference/system/clisystemdataset/
 - /scale/scaleclireference/system/clitunable/
 - /scale/scaleclireference/task/clicronjob/
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

{{< include file="/static/includes/AdvancedSettingsWarningSCALE.md" >}}

The **Advanced Settings** screen provides configuration options for the console, syslog, audit, kernel, sysctl, storage (system dataset pool), replication, WebSocket sessions, cron jobs, init/shutdown scripts, NTS servers, allowed IP addresses, isolated GPU device(s), self-encrypting drives, and global two-factor authentication.

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

## Console Widget

The **Console** widget shows the current console settings for TrueNAS, which cover setting a password prompt for the text console, enabling/disabling the serial console, the current serial port number and speed, and any banner text entered in the **MOTD Banner** field.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsConsoleWidget.png" alt="Console Widget" id="Console Widget" >}}

**Configure** opens the **[Console](#console-configuration-screen)** configuration screen.

### Console Configuration Screen

**Console** settings configure how the [Console Setup menu]({{< ref "ConsoleSetupMenuSCALE" >}}) displays, the serial port it uses and the port speed, and the banner users see when accessing it.

{{< trueimage src="/images/SCALE/SystemSettings/ConsoleConfigScreen.png" alt="Console Config Screen" id="Console Config Screen" >}}

{{< expand "Console Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Show Text Console without Password Prompt** | Select to display the console without being prompted to enter a password. Leave cleared to add a login prompt to the system before showing the console menu. Selected by default. |
| **Enable Serial Console** | Select to enable the serial console. Selected by default. Clear this if the serial port is disabled.  |
| **Serial Port** | Shows the default serial port. If using a port other than the default, enter the serial console port address. |
| **Serial Speed** | Shows the default serial port speed. If not using the default speed, select the speed (in bits per second) the serial port uses from the dropdown list. Options are 9600, 19200, 38400, 57600, or 115200. |
| **MOTD Banner** | Enter the message you want to display when a user logs in with SSH. The default banner message is **Welcome to TrueNAS**. |
{{< /truetable >}}
{{< /expand >}}

## Syslog Widget

The **Syslog** widget displays the existing system logging settings that specify how and when the system sends log messages to the syslog server.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsSyslogWidget.png" alt="Syslog Widget" id="Syslog Widget" >}}

**Configure** opens the **[Syslog](#syslog-configuration-screen)** configuration screen.

### Syslog Configuration Screen

The **Syslog** settings specify the logging level the system uses to record system events to the boot device.
Sets whether to use a fully qualified domain name (FQDN) for logging, and if audit logs are included.
There is also an option to configure a remote syslog server for recording system events.

{{< trueimage src="/images/SCALE/SystemSettings/SyslogConfigScreen.png" alt="Syslog Config Screen" id="Syslog Config Screen" >}}

{{< expand "Syslog Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Use FQDN for Logging** | Select to include the fully qualified domain name (FQDN) in logs to identify systems with similar host names. |
| **Syslog Level** | Select the minimum log priority level to send to the remote syslog server. The system only sends logs at or above this level. |
| **Syslog Server** | Enter the remote syslog server DNS hostname or IP address. Add a colon and the port number to the hostname to use non-standard port numbers, like *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. **Add Syslog Server** shows a block of settings to configure a syslog server. Allows adding two servers. |
| **Host** | **Syslog Server** setting. Sets the remote syslog server DNS host name or IP address. Allows using non-standard port numbers by adding a colon and the port number to the host name, like *mysyslogserver:1928*. Log entries are written to local logs and sent to the remote syslog server. | 
| **Transport** | **Syslog Server** setting. Sets the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server connection. Selecting Transport Layer Security (TLS) shows the **TLS Certificate** field. This setting requires pre-configuring the server system certificate if not using the **Truenas_default** certificate. |
| **TLS Certificate** | **Syslog Server** setting that shows after selecting **TLS** in **Transport**. Select the [transport protocol](https://tools.ietf.org/html/rfc8095) for the remote system log server TLS certificate from the dropdown list. Select the default or import a certificate using the **Credentials > Certificates** screen, **Certificates** widget. |
| **Include Audit Logs** | Select to enable audit logging. |
{{< /truetable >}}
{{< /expand >}}

## Audit Widget

The **Audit** widget displays the current audit storage and retention policy settings. The public-facing [TrueNAS API]({{< ref "/SCALE/API" >}}) allows querying audit records, exporting audit reports, and configuring audit dataset settings and retention periods.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditWidget.png" alt="Advanced System Setting Audit Widget" id="Advanced System Setting Audit Widget" >}}

### Configure Auditing

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}

Click **Configure** to open the **Audit** configuration screen and [manage storage and retention policies]({{< ref "AuditingSCALE.md#configuring-audit-storage-and-retention-policies" >}})

## Kernel Widget

The **Kernel** widget shows options for configuring the Linux kernel installed with TrueNAS.

{{< trueimage src="/images/SCALE/SystemSettings/SystemSettingsAdvancedKernel.png" alt="Kernel Widget" id="Kernel Widget" >}}

{{< expand "Kernel Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Enable Debug Kernel** | Set to boot a debug kernel after the next system restart. This is intended for troubleshooting scenarios only and should typically remain disabled. Enabling this option disables any Nvidia drivers present on the system. |
{{< /truetable >}}
{{< /expand >}}

## Cron Jobs Widget

The **Cron Jobs** widget displays **No Cron Jobs configured** until you add a cron job, and then it shows the information on the cron job(s) configured on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsCronJobWidget.png" alt="Cron Job Widget" id="Cron Job Widget" >}}

**Add** opens the **[Add Cron Job](#add-or-edit-cron-job-configuration-screen)** configuration screen.

Click on any job listed in the widget to open the **[Edit Cron Jobs](#add-or-edit-cron-job-configuration-screen)** configuration screen populated with the settings for that cron job.

### Add or Edit Cron Job Configuration Screen

The **Add Cron Job** and **Edit Cron Job** configuration screens display the same settings.

**Cron Jobs** lets users configure jobs that run specific commands or scripts on a regular schedule using [cron(8)](https://manpages.debian.org/testing/cron/cron.8.en.html "Cron Man Page"). Cron jobs help users run repetitive tasks.

{{< trueimage src="/images/SCALE/SystemSettings/AddCronJobScreen.png" alt="Add Cron Job Screen" id="Add Cron Job Screen" >}}

{{< expand "Cron Job Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Description** | Enter a description for the cron job. |
| **Command** | Enter the full path to the command or script to run. For example, to create a command string that generates a list of users on the system and writes that list to a file, enter `cat /etc/passwd > users_$(date +%F).txt` |
| **Run As User** | Select a user account to run the command. The user must have permissions allowing them to run the command or script. |
| **Schedule** | Select a schedule preset or choose **Custom** to open the advanced scheduler. Note that an in-progress cron task postpones any later scheduled instance of the same task until the running task is complete. |
| **Hide Standard Output** | Select to hide standard output (stdout) from the command. If left cleared, TrueNAS mails any standard output to the user account cron that ran the command. |
| **Hide Standard Error** | Select to hide error output (stderr) from the command. If left cleared, TrueNAS mails any error output to the user account cron that ran the command. |
| **Enabled** | Select to enable this cron job. Leave cleared to disable the cron job without deleting it. |
{{< /truetable >}}
{{< /expand >}}

## Init/Shutdown Scripts Widget

The **Init/Shutdown Scripts** widget displays **No Init/Shutdown Scripts configured** until you add either a command or script; then the widget lists the scripts configured on the system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsInitShutdownScriptWidget.png" alt="Init/Shutdown Scripts Widget" id="Init/Shutdown Scripts Widget" >}}

**Add** opens the **[Add Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen.
Any script listed is a link that opens the **[Edit Init/Shutdown Script](#add-or-edit-initshutdown-script-configuration-screens)** configuration screen populated with the settings for that script.

### Add or Edit Init/Shutdown Script Configuration Screens

**Init/Shutdown Scripts** lets users schedule commands or scripts to run at system startup or shutdown.

{{< trueimage src="/images/SCALE/SystemSettings/AddInitShutdownScriptConfigScreen.png" alt="Add Init/Shutdown Scripts" id="Add Init/Shutdown Scripts" >}}

{{< expand "Init/Shutdown Script Settings" "v" >}}
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

The **Add Sysctl** or **Edit Sysctl** configuration screen settings let users set up tunables to configure kernel parameters at runtime.

{{< trueimage src="/images/SCALE/SystemSettings/AddSysctlConfigScreen.png" alt="Sysctl Config Screen" id="Sysctl Config Screen" >}}

{{< expand "Sysctl Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **Variable** | Enter the name of the sysctl variable to configure. Sysctl tunables configure kernel parameters while the system runs and generally take effect immediately. |
| **Value** | Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value to use for the loader, **sysctl** variable. |
| **Description** | Enter a description for the tunable. |
| **Enabled** | Select to enable this tunable. Leave clear to disable this tunable without deleting it. |
{{< /truetable >}}
{{< /expand >}}


## Adding NTP Servers

The **NTP Servers** widget allows users to add Network Time Protocol (NTP) servers.
These sync the local system time with an accurate external reference.
By default, new installations use several existing NTP servers. TrueNAS supports adding custom NTP servers.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsNTPServersWidget.png" alt="NTP Servers Widget" id="NTP Servers Widget" >}}

### Add NTP Server Screen

The **Add NTP Server** screen shows Network Time Protocol (NTP) server settings that sync the local TrueNAS system with an accurate external reference.
By default, new installations use several existing NTP servers. TrueNAS supports adding custom NTP servers.

**Add** on the **NTP Servers** widget opens the **Add NTP Server** screen.

{{< trueimage src="/images/SCALE/SystemSettings/AddNPTServerScreen.png" alt="Add NTP Servers Screen" id="Add NTP Server Screen" >}}

{{< expand "Add NTP Server Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Address** | Sets the host name or IP address of the NTP server. |
| **Burst** | Enables using a non-public NTP server. Recommended when **Max Poll** is greater than **10**. Only use on personal NTP servers or those under direct control. Do not enable it when using public NTP servers. |
| **IBurst** | Enables and speeds up the initial synchronization (seconds instead of minutes). |
| **Prefer** | Enable when using highly accurate NTP servers such as those with time monitoring hardware. Only use these highly accurate NTP servers. |
| **Min Poll** | Sets the minimum polling interval. Enter a numeric value in seconds, as a power of 2. For example, 6 means 2^6, or 64 seconds. The default is **6**, and the minimum value is **4**. |
| **Max Poll** | Sets the maximum polling interval. Enter a number in seconds, as a power of 2. For example, 10 means 2^10, or 1,024 seconds. The default is **10**, and the maximum value is **17**. |
| **Force** | Enable to force the addition of the NTP server, even if it is currently unreachable. |
{{< /truetable >}}
{{< /expand >}}

## Storage Widget

**Storage** widget shows the pool configured as the system dataset pool, and allows users to select the storage pool they want to hold the system dataset.
The system dataset stores core files for debugging and keys for encrypted pools. It also stores Samba4 metadata, such as the user and group cache and share-level permissions.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemStorageWidget.png" alt="Storage Widget" id="Storage Widget" >}}

It also shows the resilivering priority setting.

**Configure** opens the **Storage Settings** configuration screen.

### Storage Settings Configuration Screen

The **Storage Settings** screen shows the current system dataset and resilvering priority.

{{< trueimage src="/images/SCALE/SystemSettings/SystemStorageConfigScreen.png" alt="System Dataset Pool Config Screen" id="System Dataset Pool Config Screen" >}}

**System Dataset Pool** shows all pool root datasets configured in the system.
If the system has one pool, TrueNAS configures that pool as the system dataset pool.
If your system has more than one pool, you can set the system dataset pool using the **Select Pool** dropdown.
Users can move the system dataset to an unencrypted pool or an encrypted pool without passphrases.
Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward.
You cannot move the system dataset to an encrypted pool with a passphrase set.

**Run Reslivering At Higher Priority At Certain Times** is not enabled by default. Selecting this option shows additional fields to set the time and date to resliver the system dataset pool disks. 

**Days of the Week** shows a dropdown list of day options.
**From** and **To** set the time range in which a resliver can run.

**Save** implements setting changes.

## Replication Widget

The **Replication** widget displays the number of replication tasks that can execute simultaneously on the system. It allows users to adjust the maximum number of replication tasks the system can perform simultaneously.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedSettingsReplicationWidget.png" alt="Replication Widget" id="Replication Widget" >}}

Click **Configure** to open the **Replication** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsReplicationConfigScreen.png" alt="Replication Config Screen" id="Replication Config Screen" >}}

Enter a number for the maximum number of simultaneous replication tasks you want to allow the system to process and click **Save**.

## Access Widget

{{< include file="/static/includes/AccessWidget.md" >}}

If the configured session timeout is exceeded, TrueNAS displays a **Logout** dialog with the exceeded ticket lifetime value and the time the session is scheduled to terminate.

{{< expand "Logout Dialog" "v" >}}
{{< trueimage src="/images/SCALE/SystemSettings/TimeoutDialog.png" alt="Logout Dialog" id="Logout Dialog" >}}

**Extend Session** resets the token counter.
If the button is not clicked, TrueNAS terminates the session automatically and returns to the login screen.
{{< /expand >}}

 **Configure** opens the **Access Settings** screen.

### Access Settings Screen
The **Access Settings** screen allows users to configure the **Session Timeout** for the current account.

{{< trueimage src="/images/SCALE/SystemSettings/AccessSettingsScreen.png" alt="Access Settings Screen" id="Access Settings Screen" >}}

Select a value that fits your needs and security requirements.
Enter the value in seconds.

{{< hint type=tip >}}
The default lifetime setting is 300 seconds or five minutes.

The maximum is 2147482 seconds or converting it to hours/minutes/seconds, 596 hours, 31 minutes, and 22 seconds.
If converting it to days/hours/minutes/seconds, 24 days, 20 hours, 31 minutes, and 22 seconds.
{{< /hint >}}

The **Login Banner** field allows specifying a text message that the system shows before the TrueNAS login splash screen displays.
**Continue** on the banner screen closes the screen, then shows the login splash screen.
The maximum length of the banner text is 4096 characters, including spaces. Long text wraps and banner text can use carriage returns to break up long messages to improve readability.
Leave **Login Banner** empty to show just the login screen without interruption by a banner screen.

{{< enterprise >}}
Enterprise-licensed systems include the **Allow Directory Service users to access WebUI** option on the **Access Settings** screen.
After enabling this option, TrueNAS automatically creates a new entry, named as the domain admin group, in the **Privileges** screen table. For example, if the domain is *ad03.mydomain.net*, then you should see a group of that name listed as well as any of the groups AD creates on the system.
{{< /enterprise >}}

## Allowed IP Addresses Widget

The **Allowed IP Addresses** widget displays IP addresses and networks added to the system that are allowed to use the API and UI.
If this list is empty, then all IP addresses are allowed to use the API and UI.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemAllowedIPAddressesWidget.png" alt="Allowed IP Addresses Widget" id="Allowed IP Addresses Widget" >}}

**Configure** opens the **Allowed IP Addresses** configuration screen.

{{< hint type="warning" >}}
Entering an IP address into the allowed IP address list denies access to the UI or API for all other IP addresses not listed.

Only use when limiting system access to a single or a limited number of IP addresses. Leave the list blank to allow all IP addresses.
{{< /hint >}}

**Add**, next to **Allowed IP Addresses**, adds an entry to the allowed IP Addresses list.
Ensure the first address and/or subnet includes your current client system.

Enter a specific IP address, for example, *192.168.1.1*, for individual access, or use an IP address with a subnet mask, like *192.168.1.0/24*, to define a range of addresses.

You can add as many addresses as needed.

**Save** retains setting changes and closes the screen..
A **Restart Web Service** dialog opens.
**Confirm** activates **Continue**. and **Continue** restarts the web UI and applies changes.

## Self-Encrypting Drive Widget

{{< include file="/static/includes/SEDEnterpriseAdmonition.md" >}}

The **Self-Encrypting Drive** (SED) widget shows when the system has self-encrypting drives, and shows the system ATA security user and password.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSEDWidget.png" alt="Self-Encrypting Drive Widget" id="Self-Encrypting Drive Widget" >}}

**Configure** opens the **[Self-Encrypting Drive](#self-encrypting-drive-configuration-screen)** configuration screen.

### Self-Encrypting Drive Configuration Screen

The **Self-Encrypting Drive** configuration screen allows users to set the ATA security user and create a SED global password.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemSelfEncryptingDriveConfigScreen.png" alt="Self-Encrypting Drive Config Screen" id="Self-Encrypting Drive Config Screen" >}}

{{< expand "Self-Encrypting Drive Settings" "v" >}}
{{< truetable >}}
| Settings | Description |
|----------|-------------|
| **ATA Security User** | Select the user to unlock SEDs from the dropdown list. Options are **USER** or **MASTER**. |
| **SED Password** | Enter the global password to unlock SEDs. |
| **Confirm SED Password** | Re-enter the global password to unlock SEDs. |
{{< /truetable >}}
{{< /expand >}}

## Isolated GPU Device(s) Widget

The **Isolated GPU Device(s)** widget displays any isolated graphics processing unit (GPU) device(s) configured on your system.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingIsolatedGPUDeviceWidget.png" alt="Isolated GPU Device Widget" id="Isolated GPU Device Widget" >}}

**Configure** opens the **Isolated GPU PCI Ids** screen, which allows users to isolate additional GPU devices.

### Isolated GPU PCI IDs Configuration Screen

The **Isolate GPU PCI IDs** widget shows GPU devices added in TrueNAS.
**Configure** opens the configuration screen and allows you to isolate GPU devices for a virtual machine (VM).

To isolate a GPU, you must have at least two in your system; one allocated to the host system for system functions and/or applications, and the other available to isolate for use by a VM.

{{< trueimage src="/images/SCALE/SystemSettings/IsolatedGPUPCIIDsConfigScreen.png" alt="Isolated GPU PCI Ids Screen" id="Isolated GPU PCI Ids Screen" >}}

Select the GPU device ID from the dropdown list and click **Save**.

Isolated GPU devices are reserved for use by configured applications or a VM.

To allocate an isolated GPU device, select it while creating or editing the VM configuration.
When allocated to a VM, the isolated GPU connects to the VM as if it were physically installed in that VM, and it becomes unavailable for any other allocations.

## Global Two-Factor Authentication Widget

The **Global Two Factor Authentication** widget shows the status of global two-facator authentication, the tolerance window, and the status of two-factor authentication in SSH sessions. It provides access to the configuration screen that allows you to set up two-factor authentication (2FA) for your system.

{{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationWidget.png" alt="Global Two Factor Authentication Widget" id="Global Two Factor Authentication Settings Widget" >}}

**Configure** opens the **Global Two Factor Authentication Settings** configuration screen.

{{<include file="/static/includes/addcolumnorganizer.md">}}

{{< trueimage src="/images/SCALE/SystemSettings/GlobalTwoFactorAuthenticationSettingsScreen.png" alt="Global Two Factor Authentication Settings Screen" id="Global Two Factor Authentication Settings Screen" >}}

{{< expand "Global Two Factor Authentication Settings" "v" >}}
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Enable Two-Factor Authentication Globally** | Select to enable 2FA for the system. |
| **Window** | Enter the number of valid passwords. Extends password validity beyond the current to the previous password(s) based on the number entered. For example, setting this to **1** means the current and previous passwords are valid. If the previous password is *a* and the current password is *b*, then both passwords are valid. If set to **2**, the current password (*c* ) and the two previous passwords (*a* and *b*) are valid. Setting this to **3** works the same. Extending the window is useful in high-latency situations. |
| **Enable Two-Factor Auth for SSH** | Select to enable 2FA for system SSH access. Leave this disabled until you complete a successful test of 2FA with the UI. |
{{< /truetable >}}
{{< /expand >}}

## System Security Widget

{{< enterprise >}}
The **System Security** widget allows administrators of Enterprise-licensed systems to enable or disable FIPS 140-2 compliant algorithms, general-purpose OS STIG compliance, and other administrator account rules.
Changing FIPS or STIG settings requires a system restart to apply the setting changes.

High Availability (HA) systems restart the standby controller and then show a prompt to failover and restart the primary controller.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedSecurityWidget.png" alt="System Security Widget" id="System Security Widget" >}}

**Settings** opens the **System Security** configuration screen.

{{< trueimage src="/images/SCALE/SystemSettings/SystemSecurityScreen.png" alt="System Security Screen" id="System Security Screen" >}}

The **Enable FIPS** toggle enables or disables enforcement.
The **Enable General Purpose OS STIG compatibility mode** toggle enables or disables the STIG compliance implementation.
Requires two-factor authentication for an admin user with full permissions before enabling STIG compatibility.

**Administrator Password settings**
{{< truetable >}}
| Name | Description |
|------|-------------|
| **Min Password Age** | Minimum number of days a password must be used before it can be changed. |
| **Max Password Age** | Maximum number of days a password can be used before it must be changed. TrueNAS warns users of password expiration seven days prior to the set expiration date. |
| **Password Complexity Ruleset** | Defines the required character types for administrator passwords. Choose between **Upper**, **Lower**, **Number**, and **Special** character type requirements. |
| **Min Password Length** | Define how many characters must be present in an administrator password. The default required minimum is **8** characters. |
| **Password History Length** | Define how many previously used passwords to remember. Prevents administrators from reusing passwords when updating credentials. Requires an integer between **1** and **10**.
{{< /truetable >}}

{{< /enterprise >}}

## Failover Widget

{{< enterprise >}}

The **Failover** widget shows only on Enterprise-licensed HA systems.
It shows the status of failover, the default controller, and the network timeout before TrueNAS initiates failover.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSettingsFailoverWidget.png" alt="System Failover Widget" id="System Failover Widget" >}}

**Configure** opens the **Failover** configuration screen.

### Failover Configuration Screen

The **Failover** screen shows settings used on TrueNAS Enterprise (HA) systems to turn the failover function on or off, sync the primary and standby controllers, and allow administrator users to configure failover. The main menu option and screen only display on Enterprise (HA) systems with the correct license applied.

{{< trueimage src="/images/SCALE/SystemSettings/FailoverScreen.png" alt="Failover Screen" id="Failover Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable Automatic Failover** | Set the system to turn on failover. Leave clear to disable failover. |
| **Default TrueNAS controller** | Sets the current active controller to be the default controller when both TrueNAS controllers are online and HA is enabled. To change the default TrueNAS controller, leave unselected on the default TrueNAS controller and allow the system to fail over. This process briefly interrupts system services. |
| **Network Timeout Before Initiating Failover** | Sets the number in seconds to wait after a network failure before triggering a failover. The default value is **0**, which means failover occurs immediately or after two seconds when the system is using a link aggregate. |
| **Sync To Peer** | Initiates a sync operation that copies over the primary controller configuration to the standby controller. Opens the **[Sync To Peer](#sync-to-or-from-peer)** dialog to confirm the operation. |
| **Sync From Peer** | Initiates a sync operation that copies over the standby controller configuration to the primary controller. |
{{< /truetable >}}

## Sync To or From Peer
**Sync To Peer** and **Sync From Peer** buttons each open a confirmation dialog before TrueNAS performs the operation requested.

![FailoverSyncToPeerDialog](/images/SCALE/SystemSettings/FailoverSyncToPeerDialog.png "Failover Sync To Peer Dialog")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Reboot standby TrueNAS controller** | Select to cause the standby controller to restart after the sync operation completes. |
| **Confirm** | Select to confirm you want to perform the sync-to-peer operation. |
| **Proceed** | Begins the sync operation. |
{{< /truetable >}}
{{< /enterprise >}}
