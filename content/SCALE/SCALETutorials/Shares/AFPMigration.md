---
title: "AFP Migration"
description: "Provides information on migrating AFP shares from FreeBSD- to Linux-based TrueNAS versions."
weight: 10
aliases:
- /scale/scaleuireference/shares/afpmigration/
- /scale/scaletutorials/shares/afp/afpmigration/
- /scale/scaletutorials/shares/afp/
tags:
 - shares
 - afp
 - migrate
---

{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

Since the Apple Filing Protocol (AFP) for shares is deprecated and no longer receives updates, it is not present in TrueNAS.

However, users can sidegrade AFP configurations into TrueNAS 24.04 to migrate previously-saved AFP configurations into SMB configurations.

## Migrating AFP Shares

To prevent data corruption that could result from the sidegrade operation, in TrueNAS, go to **Windows (SMB) Shares**, select the <span class="material-icons">more_vert</span> for the share, then select **Edit** to open the **Edit SMB** screen.
Click **Advanced Options** and scroll down to the **Other Options** section.
Select **Legacy AFP Compatibility** to enable compatibility for AFP shares migrated to SMB shares.
Do not select this option if you want a pure SMB share with no AFP relation.

![AFPCompatibilityCheckbox](/images/SCALE/Shares/AFPCompatibilityCheckbox.png "AFP Compatibility Checkbox")

{{< hint type=important >}}
Netatalk service is not present in TrueNAS 21.06 or later.
AFP shares automatically migrate to SMB shares with the **Legacy AFP Compatibility** option enabled.
Do not clear the **Legacy AFP Compatibility** checkbox, as it impacts how data is written to and read from shares.
Any other shares created to access these paths after the migration must also have **Legacy AFP Compatibility** selected.
{{< /hint >}}

Once you have [migrated to TrueNAS 24.04]({{< ref "MigratingFromCore" >}}), you can find your migrated AFP configuration in **Shares >** **Windows Shares (SMB)** with the prefix **AFP_**.
To make the migrated AFP share accessible, start the SMB service.

![MigratedAFPShareSCALE](/images/SCALE/Shares/MigratedAFPShareSCALE.png "Migrated AFP Share")

{{<include file="/static/includes/addcolumnorganizer.md">}}

## Connecting Migrated Shares

Since AFP shares migrate to SMB, you must use SMB syntax to mount them.

On your Apple system, press <kbd><span class="iconify" data-icon="material-symbols:keyboard-command-key"></span>+K</kbd> or go to **Go > Connect to Server...**.

Enter smb://*ipaddress*/mnt/*pool*/*dataset*, where:

* ipaddress* is your TrueNAS IP address
* *pool* is the name of the pool
* *dataset* is the name of the shared dataset
