---
title: Alert Settings Screens
weight: 10
tags:
- scalealerts
---


{{< toc >}}

The **Alert Settings** screen displays options to set the warning level and frequency. 

![AlertSettingsScreen](/images/SCALE/22.02/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

To access this screen, click the <span class="material-icons">notifications</span> icon, and then click the <span class="material-icons">settings</span> icon and select **Alert Settings** on the dropdown list.

## Alert Categories

Use the **Category** dropdown list to displays alert settings for each category. Select from:

### Application Alert Settings
**Applications** alert settings display by default. These alerts apply to the third-party applications you deploy on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsScreen](/images/SCALE/22.02/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

Options cover available updates, health of the catalog, ability to configure or start applications, and ability to sync the catalog.
{{< /expand >}}
### Certificate Alert Settings
**Certificates** alert settings apply to certificates you add through the **Credentials > Certificates** screen.
{{< expand "Click here for more information" >}}

![AlertSettingsCertificates](/images/SCALE/22.02/AlertSettingsCertificates.png "Certificates Alert Settings")

Options cover certificate expiration, parsing, and revoke status> Status cover expired, expiring or expiring soon, revoked, parsing failed and web UI HTTPS certificate setup failed. 
{{< /expand >}}
### Directory Services Alert Settings
**Directory Services** alert settings apply to the Active Directory and LDAP servers configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsDirectoryServices](/images/SCALE/22.02/AlertSettingsDirectoryServices.png "Directory Services Alert Settings")

Options cover the health of Active Directory bind, if Active Directory domain validation failed, or the domain is offline, and the health of LDAP bind.
{{< /expand >}}
### Hardware Alert Settings
**Hardware** alert settings apply to the IPMI network connections, and S.M.A.R.T. and smartd that monitors the hard drives installed on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertSettingsHardware](/images/SCALE/22.02/AlertSettingsHardware.png "Hardware Alert Settings")

Setting cover IPMI system events, system event log space, S.M.A.R.T. error and smartd running status.
{{< /expand >}}
### Key Management Interoperability Protocol (KMIP) Alert Settings
**Key Management Interoperability Protocol (KMIP)** alert settings only apply to KMIP configured on a TrueNAS Enterprise system.
{{< expand "Click here for more information" >}}

![AlertSettingsKMIP](/images/SCALE/22.02/AlertSettingsKMIP.png "KMIP Alert Settings")

Options cover communication failures with KMIP server, failure to sync SED Global Password, keys, and ZFS with the KMIP server.
{{< /expand >}}
### Plugins Alert Settings
**Plugins** alert settings apply to plugins installed on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsPlugins](/images/SCALE/22.02/AlertSettingsPlugins.png "Plugin Alert Settings")

Option is **Plugin Update Available**.
{{< /expand >}}
### Network Alert Settings
**Network** alert settings applies to network interfaces configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsNetwork](/images/SCALE/22.02/AlertSettingsNetwork.png "Network Alert Settings")

Options cover LAGG interface ports status.
{{< /expand >}}
### Reporting Alert Settings
**Reporting** alert settings apply to collectd, reporting database and syslog processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsReporting](/images/SCALE/22.02/AlertSettingsReporting.png "Reporting Alert Settings")

Options cover collectd critical alerts and warnings, reporting database size threshold exceeded and syslog-ng is not running.
{{< /expand >}}
### Sharing Alert Settings
**Sharing** alert settings apply to iSCSI, NFS or SMB shares and connections configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsSharing](/images/SCALE/22.02/AlertSettingsSharing.png "Sharing Alert Settings")

Options cover IP addresses bound to an iSCSI ports not found, NFS services not bound to specific IP addresses using 0.0.0.0, NFS share references hosts that cannot b resolved, NTLMv1 authentication attempted in the last 24hours, SMB1 connections to TrueNAS server performed in last 24 hous and share unavailable because it uses a locked dataset.
{{< /expand >}}
### Storage Alert Settings
**Storage** alert settings apply to quotas, pools, snapshots, and scrub processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsStorage](/images/SCALE/22.02/AlertSettingsStorage.png "Storage Alert Settings")

Options cover critical quota exceeded on dataset, new feature flags available for pools, pool space usage above 80% or 90%, pool status not healthy, quota exceeded on dataset, paused scrub, too many snapshots exist and too many snapshots exist for dataset.
{{< /expand >}}
### System Alert Settings
**System** alert settings apply to system processes, system dataset, TrueCommand API Key, SSH logins, system reboots, updates and the web interface.
{{< expand "Click here for more information" >}}

![AlertSettingsSystem1](/images/SCALE/22.02/AlertSettingsSystem1.png "System Alert Settings")

![AlertSettingsSystem2](/images/SCALE/22.02/AlertSettingsSystem2.png "System Alert Settings")

Options cover boot pool health, core files found in system dataset, device causing slow I/O on pool, failed NTP health checks, SSH login failures, system not ready for Kdump, web interface bind to configured address, TrueCommand API key disabled by iX portal, TrueCommand service failed scheduled health check, unscheduled system reboot, update available and failed and update not applied.
{{< /expand >}}
### Task Alert Settings
**Task** alert settings apply to cloud sync, VMWare snapshots, replication, rsync, scrub and snapshot tasks scheduled on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsTasks1](/images/SCALE/22.02/AlertSettingsTasks1.png "Task Alert Settings")

![AlertSettingsTasks2](/images/SCALE/22.02/AlertSettingsTasks2.png "Task Alert Settings")

Options cover failed cloud sync, creating VMWare snapshot, replication, rsync, scrub and snapshot tasks, replication, rsync tasks succeeded, scrub task failed to start, it started or finished, a task is unavailable because it uses a locked dataset, VMWare login failed and VMWare snapshot deletion failed.
{{< /expand >}}
### UPS Alert Settings
**UPS** alert settings apply to a UPS connected to your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsUPS](/images/SCALE/22.02/AlertSettingsUPS.png "UPS Alert Settings")

Options cover UPS battery low, needs replacement, or that it is on batter power or line power, and lost or established UPS communication status.
{{< /expand >}}

## Alert Warning Levels

Use the **Set Warning Level** dropdown list to customize alert importance. Each warning level has an icon and color to express the level of urgency.

To make the system email you when alerts with a specific warning level trigger, set up an email alert service with that warning level. 

| Level | Icon | Alert Notification? |
|-------|------|---------------------|
| **INFO** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | No |
| **NOTICE** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |
| **WARNING** | ![AlertLevelWarning](/images/SCALE/AlertLevelWarning.png "Alert Levels") | Yes |
| **ERROR** | ![AlertLevelErrorCritical](/images/SCALE/AlertLevelErrorCritical.png "Alert Levels") | Yes |
| **CRITICAL** | ![AlertLevelErrorCritical](/images/SCALE/AlertLevelErrorCritical.png "Alert Levels") | Yes |
| **ALERT** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |
| **EMERGENCY** | ![AlertLevelInfoNoticeAlertEmergency](/images/SCALE/AlertLevelInfoNoticeAlertEmergency.png "Alert Levels") | Yes |

## Alert Frequency

Use the **Set Frequency** dropdown list to adjust how often the system sends or displays alert notifications. 

Alert frequencies options are **Immediately (Default)**, **Hourly**, **Daily** or **Never**. Setting the **Frequency** to **Never** prevents that alert from displaying in the **Alerts Notification** dialog, but it still pops up in the UI if triggered.

{{< taglist tag="scalealerts" limit="10" >}}