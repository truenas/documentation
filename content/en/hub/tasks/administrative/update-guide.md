---
title: "Updating TrueNAS"
linkTitle: "Updating TrueNAS"
description: "Update the version of TrueNAS on your system"
---

TrueNAS® has an integrated update system to make it easy to keep up to date.
For Updating HA systems refer to the [Updating a High Availability System]({{< relref "/ha-update-enterprise/" >}}) guide.

## Preparing for Updates
It is best to perform updates at times the TrueNAS® system is idle, with no clients connected and no scrubs or other disk activity going on. Most updates require a system reboot. Plan updates around scheduled maintenance times to avoid disrupting user activities.
The update process will not proceed unless there is enough free space in the boot pool for the new update files. If a space warning is shown, go to Boot to remove unneeded boot environments.

## Updates and Trains
Cryptographically signed update files are used to update TrueNAS®. Update files provide flexibility in deciding when to upgrade the system. Go to Boot to test an update.
TrueNAS® defines software branches, known as trains. There are several trains available for updates, but the web interface only displays trains that can be selected as an upgrade.
Update trains are labeled with a numeric version followed by a short description. The current version receives regular bug fixes and new features. Supported older versions of TrueNAS® only receive maintenance updates. Several specific words are used to describe the type of train:

**STABLE**: Bug fixes and new features are available from this train. Upgrades available from a STABLE train are tested and ready to apply to a production environment.
**Nightlies**: Experimental train used for testing future versions of TrueNAS®.
**SDK**: Software Developer Kit train. This has additional tools for testing and debugging TrueNAS®.

*Warning*:
The UI will warn if the currently selected train is not suited for production use. Before using a non-production train, be prepared to experience bugs or problems. Testers are encouraged to submit bug reports at https://jira.ixsystems.com.
## Checking for Updates

<img src="/images/12.0-system-update.png">
<br><br>

## Update Options
The system checks daily for updates and downloads an update if one is available. An alert is issued when a new update becomes available. The automatic check and download of updates is disabled by unsetting `Check for Updates Daily and Download if Available`. Click &#x27F3; (Refresh) to perform another check for updates.
To change the train, use the drop-down menu to make a different selection.
*Note*: The train selector does not allow downgrades. For example, the STABLE train cannot be selected while booted into a Nightly boot environment, or a 9.10 train cannot be selected while booted into a 11 boot environment. To go back to an earlier version after testing or running a more recent version, reboot and select a boot environment for that earlier version. This screen can then be used to check for updates that train.
Information about the update is displayed along with a link to the *release notes*. It is important to read the release notes before updating to determine if any of the changes in that release impact the use of the system.

## Saving the Configuration File
A dialog to save the system configuration file appears before installing updates.

<img src="/images/12.0-save-config.PNG ">
<br><br>

*Warning*: Keep the system configuration file secure after saving it. The security information in the configuration file could be used for unauthorized access to the TrueNAS® system.

## Applying Updates
Make sure the system is in a low-usage state as described above in Preparing for Updates.
Click **DOWNLOAD UPDATES** to immediately download and install an update.
The Save Configuration dialog appears so the current configuration can be saved to external media.
A confirmation window appears before the update is installed. When `Apply updates and reboot system after downloading` is set and, clicking **CONTINUE** downloads, applies the updates, and then automatically reboots the system. The update can be downloaded for a later manual installation by unsetting the `Apply updates and reboot system after downloading` option.
`APPLY PENDING UPDATE` is visible when an update is downloaded and ready to install. Click the button to see a confirmation window. Setting `Confirm` and clicking **CONTINUE** installs the update and reboots the system.
*Warning*: Each update creates a boot environment. If the update process needs more space, it attempts to remove old boot environments. Boot environments marked with the Keep attribute as shown in Boot are not removed. If space for a new boot environment is not available, the upgrade fails. Space on the operating system device can be manually freed using `System` ➞ `Boot`. Review the boot environments and remove the Keep attribute or delete any boot environments that are no longer needed.

## Manual Updates
Updates can also be manually downloaded and applied in `System` ➞ `Update`.
*Note:* Manual updates cannot be used to upgrade from older major versions.
Go to https://download.FreeNAS.org/ and find an update file of the desired version. Manual update file names end with -manual-update-unsigned.tar.
Download the file to a desktop or laptop computer. Connect to TrueNAS® with a browser and go to `System` ➞ `Update`. **Click INSTALL MANUAL UPDATE FILE**.
The Save Configuration dialog opens. This makes it possible to save a copy of the current configuration to external media for backup in case of an update problem.
After the dialog closes, the manual update screen is shown.
The current version of TrueNAS® is shown for verification.

<img src="/images/12.0-manual-update.PNG ">
<br><br>

Select the manual update file with the **Browse** button. Set `Reboot After Update` to reboot the system after the update has been installed. Click **APPLY UPDATE** to begin the update.

## Update in Progress
Starting an update shows a progress dialog. When an update is in progress, the web interface shows an  icon in the top row. Dialogs also appear in every active web interface session to warn that a system update is in progress. **Do not** interrupt a system update.
