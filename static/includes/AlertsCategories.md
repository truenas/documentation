&NewLine;

Use the **Category** dropdown list to display alert settings for each category.

### Applications

**Applications** alert settings display by default. These alerts apply to the third-party applications you deploy on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertSettingsApplications](/images/SCALE/SystemSettings/AlertSettingsApplications.png "Applications Alert Settings")

You can customize alert settings for when available applications have updates, catalog is not healthy, the system cannot configure or start applications, and the system cannot sync the catalog.
{{< /expand >}}

### Audit

**Audit** alert settings apply to the audit and verification services on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertSettingsAudit](/images/SCALE/SystemSettings/AlertSettingsAudit.png "Audit Alert Settings")

You can customize alert settings for when the audit service backend fails, the audit service has a health failure, and when the TrueNAS verify service detects changes in the root file system.
{{< /expand >}}

### Certificates

**Certificates** alert settings apply to certificates you add through the **Credentials > Certificates** screen.
{{< expand "Click here for more information" >}}

![AlertSettingsCertificates](/images/SCALE/SystemSettings/AlertSettingsCertificates.png "Certificates Alert Settings")

You can customize alert settings for when a certificate has expired, is expiring, or is expiring soon, when a certificate parsing fails, and when the web UI HTTPS certificate setup fails.
{{< /expand >}}

### Directory Service

**Directory Service** alert settings apply to the directory services configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsDirectoryServices](/images/SCALE/SystemSettings/AlertSettingsDirectoryServices.png "Directory Services Alert Settings")

You can customize alert settings for when the directory service bind is not healthy and when a directory service DNS update fails.
{{< /expand >}}

### High Availability Settings

{{< enterprise >}}
This section only applies to TrueNAS Enterprise hardware.

**High Availability** alert settings apply to TrueNAS Enterprise HA systems and only display on the list of alerts for dual-controller High-Availability systems with an Enterprise license applied.
{{< expand "Click here for more information" >}}

![AlertSettingsHA1](/images/SCALE/SystemSettings/AlertSettingsHA1.png "High Availability Alert Settings 1")

![AlertSettingsHA2](/images/SCALE/SystemSettings/AlertSettingsHA2.png "High Availability Alert Settings 2")

You can customize alert settings for when an automatic sync to peer fails, disks are missing on the active and/or standby controller, the system fails to check failover status with the other controller, syncing operations fail, such as encryption keys to peer and KMIP keys to peer, the failover interface is not found, and when a failover action fails.
{{< /expand >}}
{{< /enterprise >}}

### Hardware

**Hardware** alert settings apply to the IPMI network connections and disk health monitoring on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertSettingsHardware](/images/SCALE/SystemSettings/AlertSettingsHardware.png "Hardware Alert Settings")

You can customize alert settings for when disk temperature is too hot, disk(s) format with the data integrity feature, a selftest fails, erase cycle count is high, IPMI has system events, the IPMI system event log space is low, JBOF removal requires reboot, spare block reserve is low, and uncorrected errors are detected.

{{< include file="/static/includes/IPMISELAlert.md" >}}

{{< /expand >}}

### Key Management Interoperability Protocol (KMIP)

**Key Management Interoperability Protocol (KMIP)** alert settings only apply to KMIP configured on a TrueNAS Enterprise system.
{{< expand "Click here for more information" >}}

![AlertSettingsKMIP](/images/SCALE/SystemSettings/AlertSettingsKMIP.png "KMIP Alert Settings")

You can customize alert settings for when the system fails to communicate with the KMIP server, sync the SED global password, sync SED keys, or sync ZFS keys with the KMIP server.
{{< /expand >}}

### Network

**Network** alert settings apply to network interfaces configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsNetwork](/images/SCALE/SystemSettings/AlertSettingsNetwork.png "Network Alert Settings")

You can customize alert settings for when a BOND interface references missing ports, when ports are not active on a BOND interface, and when there are no active ports on a BOND interface.
{{< /expand >}}

### Reporting

**Reporting** alert settings apply to netdata, database size threshold, and syslog processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsReporting](/images/SCALE/SystemSettings/AlertSettingsReporting.png "Reporting Alert Settings")

You can customize alert settings for when Netdata has critical alerts and warnings, the reporting database size exceeds the threshold, and syslog-ng is not running.
{{< /expand >}}

### Sharing

**Sharing** alert settings apply to iSCSI, NFS, or SMB shares and connections configured on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsSharing1](/images/SCALE/SystemSettings/AlertSettingsSharing1.png "Sharing Alert Settings")

![AlertSettingsSharing2](/images/SCALE/SystemSettings/AlertSettingsSharing2.png "Sharing Alert Settings")

You can customize alert settings for when a deprecated service configuration is detected or a deprecated service is running, and when Fibre Channel HBAs are added or replaced.

You can also customize alerts for iSCSI issues: IP addresses bound to an iSCSI portal are not found, iSCSI authorized access has invalid characters or leading/trailing whitespace, and iSCSI discovery authorization is set to global, has multiple mutual CHAP, or is merged.

For NFS, you can customize alerts for when NFS services cannot bind to specific IP addresses using 0.0.0.0, an NFS export entry is blocked, host or network lists are excessively long, share references to hosts cannot be resolved, and NFS start is blocked by entries in /etc/exports.d.

For SMB, you can customize alerts for when NTLMv1 authentication is attempted in the last 24 hours, SMB1 connections to the TrueNAS server are performed in the last 24 hours, an SMB share audit configuration contains invalid groups, an SMB share path has unresolvable issues, SMB shares use an incorrect recordsize value for Veeam Fast Clone, and an SMB user is missing a required password hash.

You can also set alerts for when a share is unavailable because it uses a locked dataset.
{{< /expand >}}

### Storage

**Storage** alert settings apply to quotas, pools, snapshots, and scrub processes on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsStorage](/images/SCALE/SystemSettings/AlertSettingsStorage.png "Storage Alert Settings")

You can customize alert settings for when a dataset exceeds standard or critical quotas, a pool has new available feature flags, pool space usage exceeds 85, 90, or 95 percent, and pool status is not healthy.

You can also change alert settings for when a scrub pauses, too many snapshots exist on the system or on a specific dataset.
{{< /expand >}}

### System

**System** alert settings apply to system processes, the system dataset, TrueCommand API Key, SSH logins, system restarts, updates, and the web interface.
{{< expand "Click here for more information" >}}

![AlertSettingsSystem1](/images/SCALE/SystemSettings/AlertSettingsSystem1.png "System Alert Settings 1")

![AlertSettingsSystem2](/images/SCALE/SystemSettings/AlertSettingsSystem2.png "System Alert Settings 2")

You can customize alert settings for when an API key is revoked, API or SSH login failures occur, the admin user is overridden, administrator account activity is detected, the boot pool is unhealthy, core files are detected, and the running system version does not match the selected update profile.

You can also change alert settings for when a failover event or fencing causes a system reboot, a Gmail OAuth configuration is discarded, NTP health checks fail, a GPU configuration update requires a reboot, the system is not ready for Kdump, and system mocking endpoints are in use.

For TrueCommand, you can customize alerts for when an API key is pending confirmation or disabled by iX Portal, and when the TrueCommand container or service fails a scheduled health check.

You can also set alerts for when unencrypted datasets are detected within encrypted datasets and when an update is available.
{{< /expand >}}

### Tasks

**Tasks** alert settings apply to cloud sync, VMWare snapshots, replication, rsync, scrub, and snapshot tasks scheduled on your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsTasks1](/images/SCALE/SystemSettings/AlertSettingsTasks1.png "Task Alert Settings 1")

![AlertSettingsTasks2](/images/SCALE/SystemSettings/AlertSettingsTasks2.png "Task Alert Settings 2")

You can customize alert settings for when cloud backup or cloud sync tasks fail, a cloud provider is removed, VMWare snapshot creation or deletion fails, VMWare login fails, replication fails or succeeds, rsync tasks fail or succeed, a scrub fails to start or starts, snapshot tasks fail, and when a task is unavailable because it uses a locked dataset.
{{< /expand >}}

### TrueNAS Connect Service

**TrueNAS Connect Service** alert settings apply to the [TrueNAS Connect](https://connect.truenas.com/) service on your TrueNAS system.
{{< expand "Click here for more information" >}}

![AlertSettingsTNConnect](/images/SCALE/SystemSettings/AlertSettingsTNConnect.png "TrueNAS Connect Service Alert Settings")

You can customize alert settings for when TrueNAS Connect is disabled or unconfigured and when the system is unable to connect to the TrueNAS Connect heartbeat service.
{{< /expand >}}

### UPS

**UPS** alert settings apply to a UPS connected to your TrueNAS.
{{< expand "Click here for more information" >}}

![AlertSettingsUPS](/images/SCALE/SystemSettings/AlertSettingsUPS.png "UPS Alert Settings")

You can customize alert settings for when the UPS battery is low or needs replacement, the UPS establishes or loses communication, and the UPS is on battery or line power.
{{< /expand >}}
