---
title: "TrueNAS Configuration File Management"
weight: 25
---

TrueCommand automatically backs up the TrueNAS configuration any time there is a database change or a TrueCommand Audit Log entry.
Manual backups can be created as needed.

## Viewing Backups

To viewing the current TrueNAS configuration backups, opening the **Dashboard** and click *Config Backups*.
This opens the **Configuration Backup Window**.

![DashboardSystemConfigManagement](/images/TrueCommand/1.3/DashboardSystemConfigManagement.png "Dashboard: Configuration Backups")

The list of backups is shown along with the time and date of their creation.
To create a new backup, click *Create Backup*.

To reset a TrueNAS system to a previous configuration, click the <i class="fa fa-history" aria-hidden="true" title="history"></i> icon.
Choose the configuration file to use.
The TrueNAS system must reset to apply the configuration changes.
