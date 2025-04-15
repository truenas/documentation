---
title: "Advanced Settings"
description: "Tutorials for configuring advanced system settings in TrueNAS SCALE."
geekdocCollapseSection: true
weight: 30
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

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen.png" alt="SCALE Advanced Settings Screen" id="SCALE Advanced Settings Screen" >}}

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedScreen2.png" alt="SCALE Advanced Settings Screen" id="SCALE Advanced Settings Screen" >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

This article provides information on sysctl, system dataset pool, setting the maximum number of simultaneous replication tasks the system can perform, and managing sessions.

## Configuring System Auditing

The **Audit** widget displays the current audit storage and retention policy settings. The public-facing API allows querying
audit records, exporting audit reports, and configuring audit dataset settings and retention periods.

{{< trueimage src="/images/SCALE/SystemSettings/SystemAdvancedAuditWidget.png" alt="Advanced System Setting Audit Widget" id="Advanced System Setting Audit Widget" >}}

{{< include file="/static/includes/ConfigureSystemAuditSCALE.md" >}}

Click **Configure** to open the **Audit** configuration screen and [manage storage and retention policies]({{< ref "AuditingSCALE.md#configuring-audit-storage-and-retention-policies" >}})

## Managing Sysctl Variables

Use **Add** on the **Sysctl** widget to add a tunable that configures a kernel module parameter at runtime.

![AdvancedSysctlWidgetNoSysctl](/images/SCALE/SystemSettings/AdvancedSysctlWidget.png "SCALE Advanced Settings Sysctl Widget")

The **Add Sysctl** or **Edit Sysctl** configuration screens display the settings.

![AddSysctlConfigScreens](/images/SCALE/SystemSettings/AddSysctlConfigScreen.png "SCALE Add Sysctl Screen")

Enter the sysctl variable name in **Variable**. Sysctl tunables configure kernel module parameters while the system runs and generally take effect immediately.

Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value for the loader in **Value**.

Enter a description and then select **Enabled**. To disable but not delete the variable, clear the **Enabled** checkbox.

Click **Save**.

## Managing the System Dataset Pool

**Storage** widget displays the pool configured as the system dataset pool and allows users to select the storage pool they want to hold the system dataset.
The system dataset stores core files for debugging and keys for encrypted pools.
It also stores Samba4 metadata, such as the user and group cache and share-level permissions.

![AdvancedSystemStorageWidget](/images/SCALE/SystemSettings/AdvancedSystemStorageWidget.png "SCALE Advanced System Dataset Pool Widget")

**Configure** opens the **Storage Settings** configuration screen.

### Storage Settings Configuration Screen

If the system has one pool, TrueNAS configures that pool as the system dataset pool.
If your system has more than one pool, you can set the system dataset pool using the **Select Pool** dropdown.
Users can move the system dataset to an unencrypted pool or a key-encrypted pool.

![SystemDatasetPoolConfigScreen](/images/SCALE/SystemSettings/SystemStorageConfigScreen.png "SCALE Advanced Settings System Dataset Pool Screen")

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward.
If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

## Setting the Number of Replication Tasks

The **Replication** widget displays the number of replication tasks that can execute simultaneously on the system. It allows users to adjust the maximum number of replication tasks the system can execute simultaneously.

![SystemAdvancedSettingsReplicationWidget](/images/SCALE/SystemSettings/SystemAdvancedSettingsReplicationWidget.png "SCALE Advanced Settings Replication Widget")

Click **Configure** to open the **Replication** configuration screen.

![AdvancedSettingsReplicationConfigScreen](/images/SCALE/SystemSettings/AdvancedSettingsReplicationConfigScreen.png "SCALE Advanced Settings Replication Screen")

Enter a number for the maximum number of simultaneous replication tasks you want to allow the system to process and click **Save**.

## Managing Allowed IP Addresses

Use the **System > Advanced Settings** screen **Allowed IP Addresses** configuration screen to restrict access to the TrueNAS SCALE web UI and API.

Entering an IP address limits access to the system to only the address(es) entered here. To allow unrestricted access to all IP addresses, leave this list empty.

## Managing Access (WebSocket Sessions)

{{< include file="/static/includes/AccessSettingsWidget.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
