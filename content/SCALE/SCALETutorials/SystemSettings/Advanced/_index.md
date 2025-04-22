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
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

**Advanced Settings** provides configuration options for the console, syslog, kernel, sysctl, replication, cron jobs, init/shutdown scripts, system dataset pool, isolated GPU device(s), self-encrypting drives, system access sessions, allowed IP addresses, audit logging, and global two-factor authentication.

{{< include file="/static/includes/AdvancedSettingsWarningSCALE.md" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen.png" alt="TrueNAS Advanced Settings Screen" id="TrueNAS Advanced Settings Screen" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen2.png" alt="TrueNAS Advanced Settings Screen" id="TrueNAS Advanced Settings Screen" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

This article provides information on sysctl, system dataset pool, setting the maximum number of simultaneous replication tasks the system can perform, and managing sessions.

## Configuring System Auditing

The **Audit** widget displays the current audit storage and retention policy settings. The public-facing [TrueNAS API]({{< ref "/SCALE/API" >}}) allows querying audit records, exporting audit reports, and configuring audit dataset settings and retention periods.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditWidget.png" alt="Advanced System Setting Audit Widget" id="Advanced System Setting Audit Widget" >}}

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}

Click **Configure** to open the **Audit** configuration screen and [manage storage and retention policies]({{< ref "AuditingSCALE.md#configuring-audit-storage-and-retention-policies" >}})

## Managing Sysctl Variables

Use **Add** on the **Sysctl** widget to add a tunable that configures a kernel module parameter at runtime.

![AdvancedSysctlWidgetNoSysctl](/images/SCALE/SystemSettings/AdvancedSysctlWidget.png "TrueNAS Advanced Settings Sysctl Widget")

The **Add Sysctl** or **Edit Sysctl** configuration screens display the settings.

![AddSysctlConfigScreens](/images/SCALE/SystemSettings/AddSysctlConfigScreen.png "TrueNAS Add Sysctl Screen")

Enter the sysctl variable name in **Variable**. Sysctl tunables configure kernel module parameters while the system runs and generally take effect immediately.

Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value for the loader in **Value**.

Enter a description and then select **Enabled**. To disable but not delete the variable, clear the **Enabled** checkbox.

Click **Save**.

## Managing the System Dataset Pool

**Storage** widget displays the pool configured as the system dataset pool and allows users to select the storage pool they want to hold the system dataset.
The system dataset stores core files for debugging and keys for encrypted pools.
It also stores Samba4 metadata, such as the user and group cache and share-level permissions.

![AdvancedSystemStorageWidget](/images/SCALE/SystemSettings/AdvancedSystemStorageWidget.png "TrueNAS Advanced System Dataset Pool Widget")

**Configure** opens the **Storage Settings** configuration screen.

### Storage Settings Configuration Screen

If the system has one pool, TrueNAS configures that pool as the system dataset pool.
If your system has more than one pool, you can set the system dataset pool using the **Select Pool** dropdown.
Users can move the system dataset to an unencrypted or key-encrypted pool.

![SystemDatasetPoolConfigScreen](/images/SCALE/SystemSettings/SystemStorageConfigScreen.png "TrueNAS Advanced Settings System Dataset Pool Screen")

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward.
If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

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

## Setting Up FIPS and STIG
{{< enterprise >}}
Only Enterprise-licensed systems show the **Security** widget and have access to FIPS and STIG settings.

Administrators considering enabling STIG and FIPS security settings should contact TrueNAS Support before making any changes.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

{{< /enterprise >}}

### STIG and FIPS Considerations

Review these topics and contact TrueNAS Support before enabling STIG and FIPS security settings.

When STIG (and FIPS) are enabled:

* TrueNAS cannot issue API keys and existing API keys cannot be used for authentication. Only the user credential with two-factor authentication method is accepted.
* SSH log-ins require a cryptographic algorithm.
* Usage stats are not reported and the **Usage Collection** option is disabled.
* One-time passwords (OTP) configured for administrative users have a single use and expire after 24 hours.
  After logging in with the OTP, the system prompts the user to immediately change the password and set up two-factor authentication.
* TrueNAS is limited to a maximum of 10 concurrent sessions.
  Accounts lock for 15 minutes after three consecutive failed login attempts.
* Password aging rules are applied to the SMB protocol. After a failed login attempt, users with expired passwords receive a password-expired message.
* TrueNAS prompts users to change their passwords when logging in and the system flagged the account as requiring this change.
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

<div class="noprint">

## Additional Content

{{< children depth="2" description="true" >}}

</div>
