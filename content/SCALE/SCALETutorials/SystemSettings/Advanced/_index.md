---
title: "Advanced Settings"
description: "Tutorials for configuring advanced system settings in TrueNAS."
geekdocCollapseSection: true
weight: 30
aliases:
 - /scale/scaletutorials/systemsettings/advanced/advancedsettings/
 - /_includes/createdebugcore/
tags:
 - settings
 - replication
 - pools
 - audit
 - resliver
 - system dataset
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

**Advanced Settings** provides configuration options for the console, syslog, kernel, sysctl, replication, cron jobs, init/shutdown scripts, system dataset pool, isolated GPU device(s), self-encrypting drives, system access sessions, allowed IP addresses, audit logging, and global two-factor authentication.

{{< enterprise >}}
Enterprise-licensed system administrators have additional options to configure security-related settings, such as FIPS and STIG compatibility and Self-Encrypting Drive (SED) configuration.
{{< /enterprise >}}

{{< include file="/static/includes/AdvancedSettingsWarningSCALE.md" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen.png" alt="Advanced Settings Screen" id="Advanced Settings Screen" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen2.png" alt="Advanced Settings Screen (cont.'d)" id="Advanced Settings Screen (cont.'d)" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen3.png" alt="Advanced Settings Screen (cont.'d)" id="Advanced Settings Screen (cont.'d)" >}}

{{< enterprise >}}
Enterprise-licensed systems include configuration options for STIG and FIPS security, and failover when the system is a High Availability system.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreenHA3.png" alt="Advanced Settings Screen for HA" id="Advanced Settings Screen for HA" >}}

{{< /enterprise >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Configuring System Auditing

The **Audit** widget displays the current audit storage and retention policy settings.
The public-facing [TrueNAS API]({{< ref "/SCALE/API" >}}) allows querying audit records, exporting audit reports, and configuring audit dataset settings and retention periods.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditWidget.png" alt="Advanced System Setting Audit Widget" id="Advanced System Setting Audit Widget" >}}

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}

Click **Configure** to open the **Audit** configuration screen and [to manage storage and retention policies for audit logs]({{< ref "AuditingSCALE.md#configuring-audit-storage-and-retention-policies" >}}).

## Managing Sysctl Variables

Use **Add** on the **Sysctl** widget to add a tunable that configures a kernel module parameter at runtime.

![AdvancedSysctlWidgetNoSysctl](/images/SCALE/SystemSettings/AdvancedSysctlWidget.png "TrueNAS Advanced Settings Sysctl Widget")

The **Add Sysctl** or **Edit Sysctl** configuration screens display the settings.

![AddSysctlConfigScreens](/images/SCALE/SystemSettings/AddSysctlConfigScreen.png "TrueNAS Add Sysctl Screen")

Enter the sysctl variable name in **Variable**. Sysctl tunables configure kernel module parameters while the system runs and generally take effect immediately.

Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value for the loader in **Value**.

Enter a description and then select **Enabled**. To disable but not delete the variable, clear the **Enabled** checkbox.

Click **Save**.

## Adding NTP Servers

The **NTP Servers** widget allows users to add Network Time Protocol (NTP) servers.
These sync the local system time with an accurate external reference.
By default, new installations use several existing NTP servers. TrueNAS supports adding custom NTP servers.

## Managing the System Dataset

**Storage** widget shows the pool configured as the system dataset pool and allows users to select a different storage pool to hold the system dataset.
The system dataset stores core files for debugging and keys for encrypted pools.
It also stores Samba4 metadata, such as the user and group cache and share-level permissions.
It also includes the reslivering priority setting.

{{< trueimage src="/images/SCALE/SystemSettings/AdvancedSystemStorageWidget.png" alt="Storage Widget" id="Storage Widget" >}}

**Configure** opens the **Storage Settings** configuration screen.

### Storage Settings Configuration Screen

If the system has one pool, TrueNAS configures that pool as the system dataset pool.
If your system has more than one pool, you can set the system dataset pool using the **Select Pool** dropdown.
Users can move the system dataset to an unencrypted or key-encrypted pool.

{{< trueimage src="/images/SCALE/SystemSettings/SystemStorageConfigScreen.png" alt="System Dataset Pool Config Screen" id="System Dataset Pool Config Screen" >}}

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward.
If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

#### Changing Resilvering Priority

To set a different resiliver priority, select **Run Resilvering At Higher Priority At Certain Times**.
Two additional setting options show that allow you to configure the day and time range for resilvering to run.

{{< trueimage src="/images/SCALE/SystemSettings/SystemStorageConfigScreenResilverSettings.png" alt="Resilver Prioirty Settings" id="Resilver Prioirty Settings" >}}

To return to the default resilver prioirty, clear the checkbox and click **Save**.

## Setting the Number of Replication Tasks

The **Replication** widget displays the number of replication tasks that can execute simultaneously on the system. It allows users to adjust the maximum number of replication tasks the system can execute simultaneously.

![SystemAdvancedSettingsReplicationWidget](/images/SCALE/SystemSettings/SystemAdvancedSettingsReplicationWidget.png "TrueNAS Advanced Settings Replication Widget")

Click **Configure** to open the **Replication** configuration screen.

![AdvancedSettingsReplicationConfigScreen](/images/SCALE/SystemSettings/AdvancedSettingsReplicationConfigScreen.png "TrueNAS Advanced Settings Replication Screen")

Enter a number for the maximum number of simultaneous replication tasks you want to allow the system to process and click **Save**.

## Managing Allowed IP Addresses

Use the **System > Advanced Settings** screen **Allowed IP Addresses** configuration screen to restrict access to the TrueNAS web UI and API.

Entering an IP address limits access to the system to only the address(es) entered here. To allow unrestricted access to all IP addresses, leave this list empty.

## Managing Access (WebSocket Sessions)

{{< include file="/static/includes/AccessWidget.md" >}}

{{< include file="/static/includes/ConfigureAccessSettings.md" >}}

## Security Settings
{{< enterprise >}}
Only Enterprise-licensed systems show the **Security** widget and have access to the STIG and FIPS settings.

Administrators considering enabling STIG and FIPS security settings should contact TrueNAS Support before making any changes.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

{{< /enterprise >}}

### STIG and FIPS Considerations

Review these topics and contact TrueNAS Support before enabling STIG and FIPS security settings.

When STIG (and FIPS) are enabled:

* TrueNAS cannot issue API keys, and existing API keys cannot be used for authentication. Only the user credential with a two-factor authentication method is accepted.
* SSH log-ins require a cryptographic algorithm.
* SMB authentication for local TrueNAS accounts is disabled.
* NTLM authentication passthrough to a domain controller is disabled.
* Usage stats are not reported, and the **Usage Collection** option is disabled.
* One-time passwords (OTP) configured for administrative users have a single use and expire after 24 hours.
  After logging in with the OTP, the system prompts the user to immediately change the password and set up two-factor authentication.
* TrueNAS is limited to a maximum of 10 concurrent sessions.
  Accounts lock for 15 minutes after three consecutive failed login attempts.
* Password aging rules are applied to the SMB protocol. After a failed login attempt, users with expired passwords receive a password-expired message.
* TrueNAS prompts users to change their passwords when logging in, and the system flags the account as requiring this change.
  Users cannot reuse a password if it is marked as used within the last five passwords in the history file. Passwords must be 15 characters in length.
* TrueNAS updates can only use a signed update file provided by the TrueNAS team.

{{< expand "What features are not available?" "v" >}}
When enabled, STIG disables these features:
* Virtualization
* Apps
* TrueCommand connectivity
{{< /expand >}}

{{< expand "What events are included in auditing?" "v" >}}
When STIG (and FIPS) are enabled, auditing includes these events:

* Account creation events
* Privilege commands (with full text of the commands run)
* Privilege changes
* Log-ins and other system access events.
  Account log-ins are tracked from two distinct sources (UI and SSH)
* Kernel module load/unload
* Audit log modifications and attempts to modify audit logs
* Security object modifications and attempts to modify security objects
{{< /expand >}}

### Configuring STIG and FIPS

To set up FIPS or STIG compliance on a TrueNAS server, you must first configure two-factor authentication for an admin user with full permissions.

After configuring two-factor authentication, go to **System > Advanced Settings** and locate the **Security** widget.

Click **Settings** to open the **System Security** configuration screen.

![SystemSecurityScreen](/images/SCALE/SystemSettings/SystemSecurityScreen.png "System Security Screen")

Select the toggle to enable FIPS and STIG, then click **Save**.
You must enable FIPS with STIG!
The system prompts you to restart.

![SecurityFIPSSTIGRestartDialog](/images/SCALE/SystemSettings/SecurityFIPSSTIGRestartDialog.png "Restart Require Dialog")

The system restart takes several minutes to complete before showing the login screen.
Highly Available (HA) systems must restart each storage controller before STIG mode is fully enabled.

### TrueNAS Administrator Password Rules

The remaining options are for setting TrueNAS administrator password rules.
Options include defining a password lifetime, types of characters that must be present in the password, how many characters must be present in a valid password, and how many previously used passwords to remember for an account and prevent reuse in a new password.

Adjust these as needed for your security requirements.
Enabling STIG compatibility mode requires specific minimum values for these settings.

Note that TrueNAS begins warning all local account types (administrator, full admin, read-only, and sharing-only) seven days before password expiration. After expiration, the account locks and requires administrative action to unlock.

<div class="noprint">

## Additional Content

{{< children depth="2" description="true" >}}

</div>
