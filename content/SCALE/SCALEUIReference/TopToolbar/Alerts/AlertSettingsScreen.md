---
title: "Alert Settings Screens"
description: "The Alert Settings screen allows users to set the warning levels and frequencies of alerts."
weight: 10
tags:
- scalealerts
- scaleclustering
---


{{< toc >}}

The **Alert Settings** screen displays options to set warning levels and frequencies. 

![AlertSettingsScreen](/images/SCALE/22.12/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

To access this screen, click the <span class="material-icons">notifications</span> icon, then click the <span class="material-icons">settings</span> icon and select **Alert Settings** on the dropdown list.

## Alert Categories

Use the **Category** dropdown list to display alert settings for each category. Select from:

### Application Alert Settings
**Applications** alert settings display by default. These alerts apply to the third-party applications you deploy on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertSettingsScreen](/images/SCALE/22.12/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

You can customize alert settings for when available applications have updates, catalog is not healthy, the system cannot configure or start applications, and the system cannot sync the catalog.
{{< /expand >}}

### Certificate Alert Settings
**Certificates** alert settings apply to certificates you add through the **Credentials > Certificates** screen.
{{< expand "Click here for more information" >}}

![AlertSettingsCertificates](/images/SCALE/22.12/AlertSettingsCertificates.png "Certificates Alert Settings")

You can customize alert settings for when a certificate expires, a certificate parsing fails, a certificate revokes, and the web UI HTTPS certificate setup fails. 
{{< /expand >}}

### Clustering Alert Settings
**Clustering** alert settings apply to TrueNAS SCALE [clusters]({{< relref "SMBClustering.md">}}) you create in TrueCommand.
{{< expand "Click here for more information" >}}

![AlertSettingsClustering](/images/SCALE/22.12/AlertSettingsClustering.png "Clustering Alert Settings")

You can customize alert settings for when the CTDB (clustered trivial database) and clustered services fail to initialize, clustered time consistency check fails, the universally unique identifier of a clustered system (glustered UUID) changes, and glustered peer (a server in the cluster) information becomes unavailable.
{{< /expand >}}

### Directory Service Alert Settings
**Directory Service** alert settings apply to the Active Directory and LDAP servers configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsDirectoryServices](/images/SCALE/22.12/AlertSettingsDirectoryServices.png "Directory Services Alert Settings")

You can customize alert settings for when the Active Directory bind is unhealthy, Active Directory domain validation fails, the domain is offline, and the LDAP bind bind is unhealthy.
{{< /expand >}}
### High Availability Settings 
{{< enterprise >}}
This section only applies to TrueNAS Enterprise only.

**High Availability** alert settings apply to TrueNAS Enterprise HA systems and is only displays on the list of alerts for systems with the HA license applied.
{{< expand "Click here for more information" >}}

![AlertSettingsHA1](/images/SCALE/22.12/AlertSettingsHA1.png "High Availability Alert Settings 1")

![AlertSettingsHA2](/images/SCALE/22.12/AlertSettingsHA2.png "High Availability Alert Settings 2")

You can customize alert settings for when an automatic sync to peer fails, disks are missing on the active and/or standby controller, the system fails to check failover status with the other controller, syncing operations fail such as encryption keys to peer and KMIP keys to peer, the failover interface is not found, and when failover fails.
{{< /expand >}}
{{< /enterprise >}}
### Hardware Alert Settings
**Hardware** alert settings apply to the IPMI network connections, and S.M.A.R.T. and smartd that monitors the hard drives installed on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertSettingsHardware](/images/SCALE/22.12/AlertSettingsHardware.png "Hardware Alert Settings")

You can customize alert settings for when disk(s) format with the data integrity frature, IPMI has system events, the IPMI system event log space is low, S.M.A.R.T. has an error, and smartd is not running.
{{< /expand >}}

### Key Management Interoperability Protocol (KMIP) Alert Settings
**Key Management Interoperability Protocol (KMIP)** alert settings only apply to KMIP configured on a TrueNAS Enterprise system.
{{< expand "Click here for more information" >}}

![AlertSettingsKMIP](/images/SCALE/22.12/AlertSettingsKMIP.png "KMIP Alert Settings")

You can customize alert settings for when the system fails to communicate, sync the SED global password, and sync keys with the KMIP server.
{{< /expand >}}

### Plugins Alert Settings
**Plugins** alert settings apply to plugins installed on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsPlugins](/images/SCALE/22.12/AlertSettingsPlugins.png "Plugin Alert Settings")

You can customize the alert setting for when plugin updates are available.
{{< /expand >}}

### Network Alert Settings
**Network** alert settings apply to network interfaces configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsNetwork](/images/SCALE/22.12/AlertSettingsNetwork.png "Network Alert Settings")

You can customize alert settings for when ports are not active on the LAGG interface and when the LAGG interface has no active ports.
{{< /expand >}}

### Reporting Alert Settings
**Reporting** alert settings apply to collectd, database size threshold, and syslog processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsReporting](/images/SCALE/22.12/AlertSettingsReporting.png "Reporting Alert Settings")

You can customize alert settings for when collectd has critical alerts and warnings, the reporting database size exceeds the threshold, and syslog-ng is not running.
{{< /expand >}}

### Sharing Alert Settings
**Sharing** alert settings apply to iSCSI, NFS, or SMB shares and connections configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsSharing](/images/SCALE/22.12/AlertSettingsSharing.png "Sharing Alert Settings")

You can customize alert settings for when a deprecated service is running, IP addresses bound to an iSCSI portal are not found, NFS services cannot bind to specific IP addresses using 0.0.0.0, and the system cannot resolve NFS share references hosts.

You can also customize alerts for when NTLMv1 attempts authentication in the last 24 hours, SMB1 connections to TrueNAS server are performed in the last 24 hours, and a share is unavailable because it uses a locked dataset.
{{< /expand >}}

### Storage Alert Settings
**Storage** alert settings apply to quotas, pools, snapshots, and scrub processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsStorage1](/images/SCALE/22.12/AlertSettingsStorage1.png "Storage Alert Settings 1")

![AlertSettingsStorage2](/images/SCALE/22.12/AlertSettingsStorage2.png "Storage Alert Settings 2")

You can customize alert settings for when a dataset exceeds standard and critical quotas, a pool has new available feature flags, pool space usage exceeds 70, 80, or 90 percent, and pool status is not healthy. 

You can change alert settings for when a pool consumes USB disks, a scrub pauses, and too many snapshots exist.
{{< /expand >}}

### System Alert Settings
**System** alert settings apply to system processes, the system dataset, TrueCommand API Key, SSH logins, system reboots, updates, and the web interface.
{{< expand "Click here for more information" >}}

![AlertSettingsSystem1](/images/SCALE/22.12/AlertSettingsSystem1.png "System Alert Settings 1")

![AlertSettingsSystem2](/images/SCALE/22.12/AlertSettingsSystem2.png "System Alert Settings 2")

You can customize alert settings for when the admin user is overriden, the boot pool is unhealthy, the system dataset has core files, a device slows down pool I/O, NTP health checks fail, and TrueCommand API keys are disabled or need confirmation.

You can also change alert settings for when SSH logins fail, the system is not ready for Kdump, the web UI cannot bind to a configured address, TrueCommand fails health checks, the system reboots off schedule, and update are available, failed, or not applied.
{{< /expand >}}

### Task Alert Settings
**Task** alert settings apply to cloud sync, VMWare snapshots, replication, rsync, scrub and snapshot tasks scheduled on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsTasks1](/images/SCALE/22.12/AlertSettingsTasks1.png "Task Alert Settings 1")

![AlertSettingsTasks2](/images/SCALE/22.12/AlertSettingsTasks2.png "Task Alert Settings 2")

You can customize alert settings for when cloud sync tasks, VMWare snapshot creation, login, and deletion, replication, rsync tasks, scrubs, and snapshot tasks fail in general or due to locked datasets.

You can also change alert settings for when replication, rsync tasks, and scrubs succeed.
{{< /expand >}}

### UPS Alert Settings
**UPS** alert settings apply to a UPS connected to your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsUPS](/images/SCALE/22.12/AlertSettingsUPS.png "UPS Alert Settings")

You can customize alert settings for when the UPS battery is low or needs replacement, the UPS establishes or loses communication, and the UPS is on battery or line power.
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

Alert frequency options are **Immediately (Default)**, **Hourly**, **Daily** or **Never**. Setting the **Frequency** to **Never** prevents that alert from displaying in the **Alerts Notification** dialog, but it still pops up in the web UI if triggered.

{{< taglist tag="scalealerts" limit="10" >}}
{{< taglist tag="scaleclustering" limit="10" title="Related Clustering Articles" >}}
