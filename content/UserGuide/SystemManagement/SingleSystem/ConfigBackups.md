---
title: "Config Backups"
description: "Instructions for TrueNAS system configuration backups, backing up, restoring from, and deleting backups."
weight: 20
tags:
 - configbackup
---

The **Config Backups** screen lists configuration backup files for the selected system. 

## Creating a Backup

{{< include file="/static/includes/TCCreateConfigBackup.md" >}}

## Restoring a Database

{{< include file="/static/includes/TCRestoreConfigBackup.md" >}}

## Delete Config Backups

To delete a backup config, from the **Config Backups** screen, select the backup(s), then click **Delete Selected**.

![DeleteConfigBackup](/images/TrueCommand/Dashboard/DeleteConfigBackup.png "Delete Config Backups")

Backups are pruned daily based off the threshold configured on the Administration page. By default backups older than seven (7) days wil be removed. This value can be increased to at most 30 or set to 0 to disable backup retention.
