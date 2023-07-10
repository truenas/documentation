---
title: "Advanced Settings"
description: "Tutorials for configuring advanced system settings in TrueNAS SCALE."
geekdocCollapseSection: true
weight: 30
aliases:
 - /scale/scaletutorials/systemsettings/advanced/advancedsettings/
tags:
 - scalesettings
 - scalereplication
 - scalepools
---

{{< toc >}}

Advanced Settings provides configuration options for the console, syslog, sysctl, replication, cron jobs, init/shutdown scripts, system dataset pool, isolated GPU device(s), and self-encrypting drives.

{{< include file="/_includes/AdvancedSettingsWarningSCALE.md" type="page" >}}

![SystemAdvancedScreen](/images/SCALE/23.10/SystemAdvancedScreen.png "SCALE Advanced Settings Screen") 

This article provides information on sysctl, system dataset pool, and setting the maximum number of simultaneous replication tasks the system can perform. 

## Managing Sysctl Variables

Use **Add** on the **Sysctl** widget to add a tunable that configures a kernel module parameter at runtime. 

![AdvancedSysctlWidgetNoSysctl](/images/SCALE/22.02/AdvancedSysctlWidgetNoSysctl.png "SCALE Advanced Settings Sysctl Widget") 

The **Add Sysctl** or **Edit Sysctl** configuration screens display the settings.

![AddSysctlConfigScreens](/images/SCALE/22.12/AddSysctlConfigScreen.png "SCALE Add Sysctl Screen") 

Enter the sysctl variable name in **Variable**. Sysctl tunables configure kernel module parameters while the system runs and generally take effect immediately.

Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value for the loader in **Value**. 

Enter a description and then select **Enabled**. To disable but not delete the variable, clear the **Enabled** checkbox.

Click **Save**.

## Managing the System Dataset Pool

**Storage** widget displays the pool configured as the system dataset pool and allows users to select the storage pool they want to hold the system dataset. 
The system dataset stores core files for debugging and keys for encrypted pools. It also stores Samba4 metadata, such as the user and group cache and share-level permissions.

![AdvancedSystemStorageWidget](/images/SCALE/22.12/AdvancedSystemStorageWidget.png "SCALE Advanced System Dataset Pool Widget") 

**Configure** opens the **Storage Settings** configuration screen.

### Storage Settings Configuration Screen

If the system has one pool, TrueNAS configures that pool as the system dataset pool. If your system has more than one pool, you can set the system dataset pool using the **Select Pool** dropdown. Users can move the system dataset to an unencrypted pool, or an encrypted pool without passphrases.

![SystemDatasetPoolConfigScreen](/images/SCALE/22.12/SystemStorageConfigScreen.png "SCALE Advanced Settings System Dataset Pool Screen") 

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward. If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

**Swap Size** lets users enter an amount (in GiB) of hard disk space to use as a substitute for RAM when the system fully utilizes the actual RAM.

By default, the system creates all data disks with the specified swap amount. Changing the value does not affect the amount of swap on existing disks, only disks added after the change. Swap size does not affect log or cache devices.

## Setting the Number of Replication Tasks

The **Replication** widget displays the number of replication tasks that can execute simultaneously configured on the system. It allows users to adjust the maximum number of replication tasks the system can execute simultaneously.

![SystemAdvancedSettingsReplicationWidget](/images/SCALE/22.02/SystemAdvancedSettingsReplicationWidget.png "SCALE Advanced Settings Replication Widget") 

Click **Configure** to open the **Replication** configuration screen. 

![AdvancedSettingsReplicationConfigScreen](/images/SCALE/22.02/AdvancedSettingsReplicationConfigScreen.png "SCALE Advanced Settings Replication Screen") 

Enter a number for the maximum number of simultaneous replication tasks you want to allow the system to process and click **Save**.

{{< taglist tag="scalereplication" limit="10" title="Related Replication Articles" >}}

## Section Contents

{{< children depth="2" description="true" >}}
