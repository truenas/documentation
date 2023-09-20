---
title: "Update Screens"
description: "Provides information on functions and fields on the TrueNAS SCALE Update screens."
weight: 10
alias: 
tags:
- scaleupdate
---

{{< toc >}}

The TrueNAS SCALE **Update** screen provides users with two different methods to update the system, automatic or manual. The screen can have up to four information panes:

* Current train
* Upgrade operation and version (only when an update is detected)
* Production/non-production release information (only when an update is detected)
* Update options

The screen displays the **Current Train** and a link to more information on the current train.
**Check for Updates Daily and Download if Available** sets SCALE to check the update server daily for updates on the specified train.
When selected, the system automatically downloads an update if one is available.
The refresh <span class="material-icons">refresh</span> button refreshes the information displayed on the screen.

The upgrade operation pane only displays when the system detects an update. It includes the upgrade operation information with the current release and available update release versions.

If the current train is not a production release, the screen includes a notification.

Finally, the screen includes three buttons if an update is detected: **Download Updates**, **Apply Pending Updates**, and **Install Manual Update File**.
If not detected, only the option to manually install an update file displays.  

{{< trueimage src="/images/SCALE/SystemSettings/SystemUpdateScreenAvailableUpdate.png" alt="System Update Upgrade Available" id="System Update Upgrade Available" >}}

**Download Updates** downloads the update file detected by the system.

**Apply Pending Update** opens the **[Save configuration settings from this machine before updating?](#save-configuration-settings-window)** window before starting the automatic installation process for the downloaded update file.

**Install Manual Update File** also opens the **Save configuration settings from this machine before updating?** window, then opens the **[Manual Update](#manual-update-screen)** window.

The **Check Release Notes** link under the update opens the release notes TrueNAS website page for the update.

## Save Configuration Settings Window
The **Save configuration settings from this machine before updating?** window displays after clicking **Apply Pending Update** or **Install Manual Update File**.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigSettingsWindow.png" alt="Save Configuration Settings" id="Save Configuration Settings" >}}

Always select **Include Password Secret Seed** before you click **Save Configuration**.
**Save Configuration** downloads the system configuration file to your system.
Keep the configuration file in a safe place that is regularly backed up.

## Manual Update Screen
The **Manual Update** screen displays after you either click **Save Configuration** or **Do Not Save** on the save configuration settings window.

{{< trueimage src="/images/SCALE/SystemSettings/ManualUpdateScreen.png" alt="System Manual Update SCALE" id="System Manual Update SCALE" >}}

**Current Version** displays the SCALE release version running on your system.

**Choose File** opens a browse window where you can locate the downloaded update file.

The **Update File Temporary Storage Location** dropdown list includes two option, **Memory Device** or a mount location on your system.
Select the temporary location option on the to designate where the system stores the upgrade file.
Select **Memory Device** or select one of the mount locations on the dropdown list to keep a copy in the server.

Click **Apply Update** to start the installation.

{{< taglist tag="scaleupdate" limit="10" >}}
