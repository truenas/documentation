---
title: "Update Screens"
description: "Provides information on functions and fields on the TrueNAS Update screens."
weight: 10
aliases: 
 - /scale/scaleclireference/system/cliupdate/
tags:
- update
- configuration files
---

The TrueNAS **Update** screen provides users with different methods to update the system automatically or manually.
The screen can show up to four information areas:

* Current train
* Upgrade operation and version (only when an update is detected)
* Production/non-production release information (only when an update is detected)
* Update options

The screen shows the **Current Train** and a link to more information on the current train.

**Check for Updates Daily and Download if Available** sets TrueNAS to check the update server daily for updates on the specified train.
When selected, the system automatically downloads an update if one is available.
The refresh <span class="material-icons">refresh</span> button refreshes the information displayed on the screen.

The upgrade operation only displays when the system detects an update.
It includes the upgrade operation information with the current release and available update release versions.

If the current train is not a production release, the screen includes a notification.

After detecting an update, the screen shows three buttons: **Download Updates**, **Apply Pending Updates**, and **Install Manual Update File**.
If not detected, only the manual update option shows.  

{{< trueimage src="/images/SCALE/SystemSettings/SystemUpdateScreenAvailableUpdate.png" alt="System Update Upgrade Available" id="System Update Upgrade Available" >}}

**Download Updates** downloads the update file detected by the system.

**Apply Pending Update** opens the **[Save configuration settings from this machine before updating?](#save-configuration-settings-window)** window before starting the automatic installation process for the downloaded update file.

**Install Manual Update File** also opens the **Save configuration settings from this machine before updating?** window, then opens the **[Manual Update](#manual-update-screen)** window.

The **Check Release Notes** link under the update opens the release notes TrueNAS website page for the update.

## Save Configuration Settings Window
The **Save configuration settings from this machine before updating?** window opens after clicking **Apply Pending Update** or **Install Manual Update File**.

{{< trueimage src="/images/SCALE/SystemSettings/SaveConfigSettingsWindow.png" alt="Save Configuration Settings" id="Save Configuration Settings" >}}

**Export Password Secret Seed** stores hashes of the passwords sufficient for authentication in the system. It does not store user passwords.
The secret seed is used to decrypt encrypted fields in the TrueNAS configuration database.
Various fields are encrypted because they might contain sensitive information such as cryptographic certificates, passwords (not user login passwords), or weak hashing algorithms (for example, NT hashes of SMB users). When a config file is restored without the secret seed, encrypted fields are set to empty values. This means various services can be broken due to the missing information. Examples are SMB via local accounts and apps.

**Save Configuration** downloads the system configuration file to your system. Keep the configuration file in a safe place that is regularly backed up.

## Manual Update Screen
The **Manual Update** screen shows after clicking **Save Configuration** or **Do Not Save** on the save configuration settings window.

{{< trueimage src="/images/SCALE/SystemSettings/ManualUpdateScreen.png" alt="System Manual Update" id="System Manual Update" >}}

**Current Version** displays the TrueNAS release version running on your system.

**Choose File** opens a browse window where you can locate the downloaded update configuration file.

The **Update File Temporary Storage Location** dropdown list includes two options:
* **Memory Device** that sets the mount location to one you select on the dropdown list.
* A mount location on the system designating where on the system to store the upgrade file. For example, a pool or dataset path on your system.

**Apply Update** to start the installation.
