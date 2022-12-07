---
title: "Update Screens"
description: ""
weight: 10
alias: 
tags:
 - scaleupdate
---

{{< toc >}}

The TrueNAS SCALE **Update** screen lets users update their system using two different methods: manual and automatic. If updates are available the screen inludes the options to **Download Updates**, **Apply Pending Update** and **Install Manual Update File**. The upgrade available displays in the center of the screen.

![SystemUpdateUpgradeSCALE](/images/SCALE/22.02/SystemUpdateUpgradeSCALE.png "System Update Upgrade Available")

When selected, **Check for Updates Daily and Download if Available** checks the update server daily for any updates on the chosen train. It automatically downloads an update if one is available. 

<span class="material-icons">refresh</span> **Refresh** refreshes the information displayed on the screen.

**Download Updates** begins downloading the update file to the system.

**Apply Pending Update** begins the automatic installation process for the update file you downloaded beginning with the **[Save configuration settings from this machine before updating](#save-configuration-settings-window)** window.

**Install Manual Update File** opens the **[Save configuration settings from this machine before updating](#save-configuration-settings-window)** window first.

{{< hint warning >}}
Prior to starting the update process, confirm that the system storage has enough space to handle the update. The update stops if there is insufficient space for it to finish.
{{< /hint >}}

## System Update No Upgrade Screen

If **Check for Updates Daily and Download if Available** is selected, and the system does not find a new update file, the screen only displays the **Install Manual Update File** option.

![SystemUpdateScale](/images/SCALE/22.02/SystemUpdateScale.png "System Update SCALE")

## Save Configuration Settings Window
Before the automatic or manual update installation process begins the **Save configuration settings from this machine before updating** window displays.

![SaveConfSettingsBeforeUpdate](/images/SCALE/22.02/SaveConfSettingsBeforeUpdate.png "Save Configuration Settings")

Always select **Include Password Secret Seed** before you click **Save Configuration**.

## Manual Update Screen
The **Manual Update** screen displays after you click **Save Configuration** or **No** on the save configuration settings window.

![ManualUpdateScale](/images/SCALE/22.02/ManualUpdateScale.png "System Manual Update SCALE")

The update **Current Version** displays the SCALE release version running on your system.

Use **Update File Temporary Storage Location** dropdown to specify the temporary location to store the upgrade or update file. Select **Memory Device** or to keep a copy in the server, select one of the mount locations on the dropdown list.

**Choose File** opens a browse window that allows you to locate the downloaded update filed.

Click **Apply Update** to start the installation.

{{< taglist tag="scaleupdate" limit="10" >}}
