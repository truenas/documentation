---
title: Alert Settings Screens
weight: 10
---


{{< toc >}}

The **Alert Settings** screen displays options to set the warning level and frequency for alerts specific to application actions. 

![AlertSettingsScreen](/images/SCALE/22.02/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

To access this screen, click the <span class="material-icons">notifications</span> icon, and then click the <span class="material-icons">settings</span> icon and select **Alert Settings** on the dropdown menu.

## Alert Categories

Use the **Category** dropdown list to displays alert settings for each category. Select from:

### Application Alert Settings
**Applications** alert settings display by default. These alerts apply to the third-party applications you deploy on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsScreen](/images/SCALE/22.02/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

Setting options are **Application Update Available**, **Catalog Not Healthy**, **Unable to Configure Applications**, **Unable to Start Applications** and **Unable to Sync Catalog**.
{{< /expand >}}
### Certificate Alert Settings
**Certificates** alert ssettings apply to certificates you add through the **Credentials > Certificates** screen.
{{< expand "Click here for more information" >}}

![AlertSettingsCertificates](/images/SCALE/22.02/AlertSettingsCertificates.png "Certificates Alert Settings")

Setting options are **Certificate has Expired**, **Certificate is Expiring**, **Certificate is Expriring Soon**, **Certificate Parsing Failed**, **Certificate Revoked** and **Web UI HTTPS Certificate Setup Failed**.
{{< /expand >}}
### Directory Services Alert Settings
**Directory Services** alert settings apply to the Active Directory and LDAP servers configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsDirectoryServices](/images/SCALE/22.02/AlertSettingsDirectoryServices.png "Directory Services Alert Settings")

Settings options are **Active Directory Bind is not Healthy**, **Active Directory Domain Validation Failed**, **Domain Offline**, and **LDAP Bind is not Healthy**.
{{< /expand >}}
### Hardware Alert Settings
**Hardware** alert settings apply to the IPMI network connections, and S.M.A.R.T. and smartd that monitores the hard drives installed on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertServicesHardware](/images/SCALE/22.02/AlertServicesHardware.png "Hardware Alert Settings")

Setting options are **IPMI system Event**, **IPMI System Event Log Low Space Left**, **S.M.A.R.T. Error** and **smartd is not Running**.
{{< /expand >}}
### Key Management Interoperability Protocol (KMIP) Alert Settings
**Key Management Interoperability Protocol (KMIP)** alert settings only apply to KMIP configured on a TrueNAS Enterprise system.
{{< expand "Click here for more information" >}}

![AlertServicesKMIP](/images/SCALE/22.02/AlertServicesKMIP.png "KMIP Alert Settings")

Setting options are **Failed to Communicate with KMIP Server**, **Failed to Syncv SED Global Password with KMIP Server**, **Failed to Sync Keys with KMIP Server** and **Failed to Synch ZFS with KMIP Server**.
{{< /expand >}}
### Plugins Alert Settings
**Plugins** alert settings apply to plugins installed on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertServicesPlugins](/images/SCALE/22.02/AlertServicesPlugins.png "Plugin Alert Settings")

Setting option is **Plugin Update Available**.
{{< /expand >}}
### Network Alert Settings
**Network** alert settings applies to network interfaces configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertServicesNetwork](/images/SCALE/22.02/AlertServicesNetwork.png "Network Alert Settings")

Setting options are **Ports are Not ACTIVE on LAGG Interface** and **There are No ACTIVE Ports on the LAGG Interface**.
{{< /expand >}}
### Reporting Alert Settings
**Reporting** alert settings apply to collectd, reporting database and syslog processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertServicesReporting](/images/SCALE/22.02/AlertServicesReporting.png "Reporting Alert Settings")

Options are **Collectd Critical Alert**, **Collectd Warning**, **Reporting Database Size Exceeds Threshold** and **syslog-ng iIs Not Running**.
{{< /expand >}}
### Sharing Alert Settings
**Sharing** alert settings apply to iSCSI, NFS or SMB shares and connections configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertServicesSharing](/images/SCALE/22.02/AlertServicesSharing.png "Sharing Alert Settings")

Setting options are **IP Addresses Bound to an iSCSI Porta Were Not Found**, **NFS Services Cound Not Bind to Specific IP Addresses Using 0.0.0.0**, **NFS share references hosts that could not be resoloved**, **NTLMv1 authentication has been attempted in the last 24hours**, **SMB1 connections to TrueNAS server have been performed in last 24 hous** and **Share is Unavailable Because It Uses A Locked Dataset**.
{{< /expand >}}
### Storage Alert Settings
**Storage** alert settings apply to quotas, pools, snapshots, and scrub processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertServicesStorage](/images/SCALE/22.02/AlertServicesStorage.png "Storage Alert Settings")

Setting options are **Critical Quota Exceeded on Dataset**, **New Feature Flags are Available for Pool**, **Pool Space Usage is above 80%**, **Pool Space Usage is above 90%**, **Pool Status Is Not Healthy**, **Qutoa Exceeded on Dataset**, **Scrub Is Paused**, **Too Many Snapsots Exist** and **Too Many Snapshots Exist for Dataset**.
{{< /expand >}}
### System Alert Settings
**System** alert settings apply to system processes, system dataset, TrueCommand API Key, SSH logins, system reboots, updates and the web interface.
{{< expand "Click here for more information" >}}

![AlertServicesSystem1](/images/SCALE/22.02/AlertServicesSystem1.png "System Alert Settings")

![AlertServicesSystem2](/images/SCALE/22.02/AlertServicesSystem2.png "System Alert Settings")

Setting options are **Boot Pool Is Not Healthy**, **Core Files Found in System Dataset**, **Device Is Causing Slow I/O on Pool**, **NTP Health Check Failed**, **SSH Login Failures**, **System Not Ready for Kdump**, **The Web Interface Could Not Bind to Configured Address**, **TrueCommand API Key Disabled by iX Portal**, **TrueCommand Service Failed Scheduled Health Check**, **Unscheduled System Reboot**, **Update Available**, **Update Failed** and **Update Not Applied**.
{{< /expand >}}
### Task Alert Settings
**Task** alert settings apply to cloud sync, VMWare snapshots, replication, rsync, scrub and snapshot tasks scheduled on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertServicesTasks1](/images/SCALE/22.02/AlertServicesTasks1.png "Task Alert Settings")

![AlertServicesTasks2](/images/SCALE/22.02/AlertServicesTasks2.png "Task Alert Settings")

The settings options are **Cloud Sync Task Failed**, **Creating VMWare Snapshot Failed**, **Replication Failed**, **Replication Succeeded**, **Rsync Task Failed**, **Rsync Task Succeeded**, **Scrub Failed to Start**, **Scrub Finished**, **Scrub Started**, **Snapshot Task Failed**, **Task Is Unavailable Because It Uses A Locked Dataset**, **VMWare Login Failed** and **VMWare Snapshot Deletion Failed**.
{{< /expand >}}
### UPS Alert Settings
**UPS** alert settings apply to a UPS connected to your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertServicesUPS](/images/SCALE/22.02/AlertServicesUPS.png "UPS Alert Settings")

Setting options are **UPS Batter LOW**, **UPS Battery Needs Replacement**, **UPS Communication Established**, **UPS Communication Lost**, **UPS on Battery** and **UPS On Line Power**.
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

Alert frequences options are **Immediately (Default)**, **Hourly**, **Daily** or **Never**. Setting the **Frequency** to **Never** prevents that alert from displaying in the **Alerts Notification** dialog, but it still pops up in the UI if triggered.