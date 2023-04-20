---
title: "Updating CORE"
description: "This article provides information on how to update TrueNAS CORE."
geekdocCollapseSection: true
weight: 10
aliases:
  - /core/system/update/updatecore/
tags:
- coreconfiguration
- coreconfigbackup
- coreupdate
---

{{< toc >}}

TrueNAS CORE has an integrated update system to make it easy to keep up to date.

## Prepare the System

We recommend performing updates when the TrueNAS system is idle, with no clients connected and no scrubs or other disk activity happening.
Most updates require a system reboot.
Plan updates around scheduled maintenance times to avoid disrupting user activities.

The update process does not proceed unless there is enough free space in the boot pool for the new update files.
If a space warning displays, go to **System > Boot** to remove unneeded boot environments.

{{< expand "Updates and Trains" "v" >}}
TrueNAS uses cryptographically signed update files to update.
Update files provide flexibility in deciding when to upgrade the system.
TrueNAS installs updates in a new Boot Environment, allowing you to install and test an update, but revert to a previous Boot Environment in **System > Boot** if anything goes wrong.

TrueNAS defines software branches known as trains.
We have several trains available for updates, but the web interface only displays trains you can select as an upgrade.

Update trains have a numeric version followed by a short description.
The current version receives regular bug fixes and new features.
Supported older versions of TrueNAS only receive maintenance updates.
See the [Software Development Life Cycle]({{< relref "SofDevLifecycle.md" >}}) for more details about the development and support timeline for TrueNAS versions.

We use three different terms to describe train types:

**STABLE**: Bug fixes and new features are available from this train. Upgrades available from a STABLE train are tested and ready to apply to a production environment.

**Nightlies**: Experimental train used for testing future versions of TrueNAS.

**SDK**: Software Developer Kit train has additional tools for testing and debugging TrueNAS.

{{< hint type=important >}}
The UI shows a warning when the selected train does not suit production use.
Before using a non-production train, be prepared to experience bugs or problems.
Testers are encouraged to submit bug reports at https://jira.ixsystems.com.
{{< /hint >}}
{{< /expand >}}

### Check for Updates

![System Update](/images/CORE/12.0/SystemUpdate.png "System Update")

The system checks daily for updates and downloads an update if one is available.
An alert is issued when a new update becomes available.
The automatic check and download of updates are disabled by unsetting **Check for Updates Daily and Download if Available**.
Click <span class="iconify" data-icon="ci:refresh"></span> (Refresh) to perform another check for updates.
To change the train, use the drop-down menu to make a different selection.

{{< hint type=note >}}
The train selector does not allow downgrades.
For example, you cannot select the STABLE train while booted into a Nightly boot environment or a 9.10 train while booted into an 11 boot environment.
To go back to an earlier version after testing or running a more recent version, reboot and select a boot environment for that earlier version.
{{< /hint >}}

Information about the update displays with a link to the release notes.
Alwys read the release notes before updating to determine if any of the changes in that release impact system use.

### Save the Configuration File

A dialog to save the system configuration file appears before installing updates.

![Save Config](/images/CORE/12.0/SaveConfig.png "Save Config")

{{< hint type=important >}}
Keep the system configuration file secure after saving it.
The security information in the configuration file can grant unauthorized access to your TrueNAS system.
{{< /hint >}}

## Update the System

Ensure the system is in a low-usage state as described above in [Preparing for Updates](#prepare-the-system).
Click **DOWNLOAD UPDATES** to download and install an update.

The **Save Configuration** dialog appears so you can save the current configuration to external media.

A confirmation window appears before installing the update.
If you set **Apply updates and reboot system after downloading**, clicking **CONTINUE** downloads and applies the update, then reboots the system.
The update can be downloaded for a later manual installation by unsetting **Apply updates and reboot system after downloading**.

**APPLY PENDING UPDATE** displays when an update is downloaded and ready to install.
Setting **Confirm** and clicking **CONTINUE** updates and reboots the system.

{{< hint type=important >}}
Each update creates a boot environment.
If the update process needs more space, it attempts to remove old boot environments.
TrueNAS does not remove boot environments marked with the *Keep* attribute as shown in **System > Boot**.
The upgrade fails if your system does not have space for a new boot environment.
Space on the operating system device can be manually freed by going to **System > Boot** and removing the *Keep* attribute or deleting any boot environments that are no longer needed.
{{< /hint >}}

{{< expand "Can I force a full update?" "v" >}}
TrueNAS defaults to delta packages for updates.
While updating, TrueNAS only downloads files that changed in the base operating system since the previous update.
Delta update packages are more efficient than full update packages, providing a faster update and taking less bandwidth.
By contrast, a full update package downloads all the files included in the base system, even if those files have not changed.

While the full package might require more time to install, there are some rare cases where it is necessary, such as when aplying a patch as a temporary fix to a local system.
A patch fixes a bug within the main codebase.
While software patches often fix bugs, they can also repair security issues or add new features.

To force a full update, open the web interface **Shell** and enter this command in the console:

`freenas-update -C /tmp/update-$$ –no-delta –reboot update`

The updater downloads the full package containing all the files from the latest software release.
When the download completes, the system reboots with the standard configuration.
{{< /expand >}}

### Manual Updates

You can manually download and apply updates in **System > Update**.

{{< hint type=note >}}
You cannot use manual updates to upgrade from older major versions.
{{< /hint >}}

Go to https://download.freenas.org/ and find an update file of the desired version.
Manual update file names end with <file>manual-update.tar</file>.

Download the desired update file to your local system.
Log in to the TrueNAS web interface and go to **System > Update**.
Click **INSTALL MANUAL UPDATE FILE**.

The **Save Configuration** dialog opens.
You can save a copy of the current configuration to external media for backup in case of an update problem.

After the dialog closes, the manual update screen displays.

The current version of TrueNAS displays for verification.

![Update Manual](/images/CORE/12.0/UpdateManual.png "Manual Update")

Select the manual update file saved to your local system using **Browse**.
Set **Reboot After Update** to reboot the system after the update installs.
Click **APPLY UPDATE** to begin the update.

{{< hint type=important >}}
**Update in Progress**

Starting an update shows a progress dialog.
When an update is in progress, the web interface shows an animated <i class="material-icons" aria-hidden="true" title="System Update">system_update_alt</i> icon in the top row.
Dialogs also appear in every active web interface session to warn that a system update is in progress.
**Do not** interrupt a system update.
{{< /hint >}}

{{< taglist tag="coreupdate" limit="10" >}}
