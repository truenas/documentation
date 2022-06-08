---
title: Alert Settings Screens
weight: 10
---


{{< toc >}}

The **Alert Settings** screen has options for setting the warning level and frequency for alerts specific to application actions. To access this screen, click the <span class="material-icons">notifications</span> icon, and then click on the <span class="material-icons">settings</span> icon and select **Alert Settings** on the dropdown menu.

![AlertSettingsScreen](/images/SCALE/22.02/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

## Alert Categories

Use the **Category** dropdown list to displays alert settings for each category. Select from:

{{< expand "Application Alert Settings" >}}
The **Applications** settings display by default. These alerts apply to the third-party applications you deploy on your TrueNAS.

![AlertSettingsScreen](/images/SCALE/22.02/AlertSettingsScreen.png "TrueNAS SCALE Alert Settings")

Setting options are **Application Update Available**, **Catalog Not Healthy**, **Unable to Configure Applications**, **Unable to Start Applications** and **Unable to Sync Catalog**.
{{< /expand >}}
{{< expand "Certificates Alert Settings" >}}
The **Certificates** alerts apply to certificates you add through the **Credentials > Certificates** screen.

![AlertSettingsCertificates](/images/SCALE/22.02/AlertSettingsCertificates.png "Certificates Alert Settings")

Setting options are ""Certificate has Expired**, **Certificate is Expiring**, **Certificate is Expriring Soon**, **Certificate Parsing Failed**, **Certificate Revoked** and **Web UI HTTPS Certificate Setup Failed**.
{{< /expand >}}
{{< expand "Directory Services Alert Settings" >}}
The **Directory Services** alerts apply to the Active Directory and LDAP servers configured on your TrueNAS.

![AlertSettingsDirectoryServices](/images/SCALE/22.02/AlertSettingsDirectoryServices.png "Directory Services Alert Settings")

Settings options are **Active Directory Bind is not Healthy**, **Active Directory Domain Validation Failed**, **Domain Offline**, and **LDAP Bind is not Healthy**.
{{< /expand >}}
{{< expand "Hardware Alert Settings" >}}
The **Hardware** alerts apply to the IPMI network connections, S.M.A.R.T. and smartd that monitores the hard drives installed on your TrueNAS system.

![AlertServicesHardware](/images/SCALE/22.02/AlertServicesHardware.png "Hardware Alert Settings")

Setting options are **IPMI system Event**, **IPMI System Event Log Low Space Left**, **S.M.A.R.T. Error** and **smartd is not Running**.
{{< /expand >}}
{{< expand "Key Management Interoperabilty Protocol (KMIP) Alert Settings" >}}
The **Key Management Interoperability Protocol (KMIP)** alerts only apply to KMIP configured on a TrueNAS Enterprise system.

![AlertServicesKMIP](/images/SCALE/22.02/AlertServicesKMIP.png "KMIP Alert Settings")

Setting options are **Failed to Communicate with KMIP Server**, **Failed to Syncv SED Global Password with KMIP Server**, **Failed to Sync Keys with KMIP Server** and **Failed to Synch ZFS with KMIP Server**.
{{< /expand >}}
{{< expand "Plugins Alert Settings" >}}
the **Plugins** alerts apply to plugins installed on your TrueNAS.

![AlertServicesPlugins](/images/SCALE/22.02/AlertServicesPlugins.png "Plugin Alert Settings")

Setting option is **Plugin Update Available**.
{{< /expand >}}
{{< expand "Networks Alert Settings" >}}
The **Network** alerts applies to network interfaces configured on your TrueNAS.

![AlertServicesNetwork](/images/SCALE/22.02/AlertServicesNetworkn.png "Network Alert Settings")

Setting options are **Ports are Not ACTIVE on LAGG Interface** and **There are No ACTIVE Ports on the LAGG Interface**.
{{< /expand >}}
{{< expand "Reporting Alert Settings" >}}
The **Reporting** alerts apply to collectd, reporting database and syslog processes on your TrueNAS.

![AlertServicesReporting](/images/SCALE/22.02/AlertServicesReporting.png "Reporting Alert Settings")

Options are **Collectd Critical Alert**, **Collectd Warning**, **Reporting Database Size Exceeds Threshold** and **syslog-ng iIs Not Running**.
{{< /expand >}}
{{< expand "Sharing Alert Settings" >}}
The **Sharing** alerts apply to iSCSI, NFS or SMB shares and connections configured on your TrueNAS.

![AlertServicesSharing](/images/SCALE/22.02/AlertServicesSharing.png "Sharing Alert Settings")

Setting options are **IP Addresses Bound to an iSCSI Porta Were Not Found**, **NFS Services Cound Not Bind to Specific IP Addresses Using 0.0.0.0**, **NFS share references hosts that could not be resoloved**, **NTLMv1 authentication has been attempted in the last 24hours**, **SMB1 connections to TrueNAS server have been performed in last 24 hous** and **Share is Unavailable Because It Uses A Locked Dataset**.
{{< /expand >}}
{{< expand "Storage Alert Settings" >}}
The **Storage** alerts apply to quotas, pools, snapshots, and scrub processes on your TrueNAS.

![AlertServicesStorage](/images/SCALE/22.02/AlertServicesStorage.png "Storage Alert Settings")

Setting options are **Critical Quota Exceeded on Dataset**, **New Feature Flags are Available for Pool**, **Pool Space Usage is above 80%**, **Pool Space Usage is above 90%**, **Pool Status Is Not Healthy**, **Qutoa Exceeded on Dataset**, **Scrub Is Paused**, **Too Many Snapsots Exist** and **Too Many Snapshots Exist for Dataset**.
{{< /expand >}}
{{< expand "System Alert Settings" >}}
The **System** settings apply to system processes, system dataset, TrueCommand API Key, SSH logins, system reboots, updates and the web interface.

![AlertServicesSystem1](/images/SCALE/22.02/AlertServicesSystem1.png "System Alert Settings")

![AlertServicesSystem2](/images/SCALE/22.02/AlertServicesSystem2.png "System Alert Settings")

Setting options are **Boot Pool Is Not Healthy**, **Core Files Found in System Dataset**, **Device Is Causing Slow I/O on Pool**, **NTP Health Check Failed**, **SSH Login Failures**, **System Not Ready for Kdump**, **The Web Interface Could Not Bind to Configured Address**, **TrueCommand API Key Disabled by iX Portal**, **TrueCommand Service Failed Scheduled Health Check**, **Unscheduled System Reboot**, **Update Available**, **Update Failed** and **Update Not Applied**.
{{< /expand >}}
{{< expand "Tasks Alert Settings" >}}
The **Task** alerts apply to cloud sync, VMWare snapshots, replication, rsync, scrub and snapshot tasks scheduled on your TrueNAS.

![AlertServicesTasks1](/images/SCALE/22.02/AlertServicesTasks1.png "Task Alert Settings")

![AlertServicesTasks2](/images/SCALE/22.02/AlertServicesTasks2.png "Task Alert Settings")

The settings options are **Cloud Sync Task Failed**, **Creating VMWare Snapshot Failed**, **Replication Failed**, **Replication Succeeded**, **Rsync Task Failed**, **Rsync Task Succeeded**, **Scrub Failed to Start**, **Scrub Finished**, **Scrub Started**, **Snapshot Task Failed**, **Task Is Unavailable Because It Uses A Locked Dataset**, **VMWare Login Failed** and **VMWare Snapshot Deletion Failed**.
{{< /expand >}}
{{< expand "UPS Alert Settings" >}}
The **UPS** alerts apply to a UPS connected to your TrueNAS.

![AlertServicesUPS](/images/SCALE/22.02/AlertServicesUPS.png "UPS Alert Settings")

Setting options are **UPS Batter LOW**, **UPS Battery Needs Replacement**, **UPS Communication Established**, **UPS Communication Lost**, **UPS on Battery** and **UPS On Line Power**.
{{< /expand >}}

## Alert Warning Levels

Use the **Set Warning Level** dropdown list to customize alert importance. Each warning level has an icon and color to express the level of urgency.

### Alert Warning Level Settings

Each warning level has a different icon and color to express the level of urgency. To make the system email you when alerts with a specific warning level trigger, set up an email Alert Service with that warning level. 

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