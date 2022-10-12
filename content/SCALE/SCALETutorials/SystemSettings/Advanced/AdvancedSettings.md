---
title: "Managing Advanced Settings"
description: "This article provides information on adding sysctl variables, setting the system dataset pool, and setting the number of simultaneous replication tasks the system can run."
weight: 10
aliases:
tags:
 - scalesettings
 - scalereplication
 - scalepools
---

{{< toc >}}

TrueNAS SCALE advanced settings screen provides configuration options for the console, syslog, sysctl, replication, cron jobs, init/shutdown scripts, system dataset pool, isolated GPU device(s), and self-encrypting drives.

{{< hint warning >}} 
Advanced settings have reasonable defaults in place. A warning message displays for some settings advising of the dangers making changes.
Changing advanced settings can be dangerous when done incorrectly. Use caution before saving changes. 

![ChangingAdvancedSettingsWarning](/images/SCALE/22.02/ChangingAdvancedSettingsWarning.png "Changing Advanced Settings Warning") 

Make sure you are comfortable with ZFS, Linux, and system [configuration backup and restoration]({{< relref "GeneralSettings.md" >}}) before making any changes. 
{{< /hint >}}

![SystemAdvancedScreen](/images/SCALE/22.02/SystemAdvancedScreen.png "SCALE Advanced Settings Screen") 

This article provides information on sysctl, system dataset pool and setting the maximum number of simultaneous replication tasks the system can perform. 

## Managing Sysctl Variables
Use **ADD** on the **Sysctl** widget to add a tunable that configures a kernel parameter at runtime. 

![AdvancedSysctlWidgetNoSysctl](/images/SCALE/22.02/AdvancedSysctlWidgetNoSysctl.png "SCALE Advanced Settings Sysctl Widget") 

The **Add Sysctl** or **Edit Sysctl** configuration screens display the settings.

![AddSysctlConfigScreens](/images/SCALE/22.02/AddSysctlConfigScreen.png "SCALE Add Sysctl Screen") 

Enter the sysctl variable name in **Variable**. Sysctl tunables are used to configure kernel parameters while the system is running and generally take effect immediately.

Enter a [sysctl](https://man7.org/linux/man-pages/man8/sysctl.8.html) value to use for the loader in **Value**. 

Enter a description and then select **Enable**. To disable but not delete the variable, clear the **Enable** checkbox.

Click **Save**.

## Managing the System Dataset Pool 

**System Dataset Pool** widget displays the pool configured as the system dataset pool. The widget allows users to select the storage pool they want to hold the system dataset. 
The system dataset stores debugging core files, encryption keys for encrypted pools, and Samba4 metadata, such as the user and group cache and share level permissions.

![AdvancedSystemDatasetPoolWidget](/images/SCALE/22.02/AdvancedSystemDatasetPoolWidget.png "SCALE Advanced System Dataset Pool Widget") 

Click **Configure** to open the **System Dataset Pool** configuration screen. Select a pool from the dropdown list and click **Save**.

If the system has one pool, TrueNAS configures that pool as the system dataset pool. If your system has more than one pool, you can select the system dataset pool from the dropdown list of available pools. Users can move the system dataset to unencrypted pools or encrypted pools without passphrases.

Users can move the system dataset to a key-encrypted pool, but cannot change the pool encryption type afterward. If the encrypted pool already has a passphrase set, you cannot move the system dataset to that pool.

## Setting the Number of Replication Tasks
The **Replication** widget displays the number of replication tasks that can execute simultaneously configured on the system. It allows users to adjust the maximum number of replication tasks the system can execute simultaneously.

![SystemAdvancedSettingsReplicationWidget](/images/SCALE/22.02/SystemAdvancedSettingsReplicationWidget.png "SCALE Advanced Settings Replication Widget") 

Click **Configure** to open the **Replication** configuration screen. 

![AdvancedSettingsReplicationConfigScreen](/images/SCALE/22.02/AdvancedSettingsReplicationConfigScreen.png "SCALE Advanced Settings Replication Screen") 

Enter a number for the maximum number of simultaneous replication tasks you want to allow the system to process and click **Save**.

{{< taglist tag="scalesettings" limit="10" >}} 
{{< taglist tag="scalereplication" limit="10" title="Related Replication Articles" >}}
