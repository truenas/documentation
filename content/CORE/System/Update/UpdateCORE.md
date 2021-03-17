---
title: "Updating CORE"
weight: 10
---

{{< toc >}}

TrueNAS CORE has an integrated update system to make it easy to keep up to date.

## Preparing for Updates

It is best to perform updates at times the TrueNAS system is idle, with no clients connected and no scrubs or other disk activity happening.
Most updates require a system reboot.
Plan updates around scheduled maintenance times to avoid disrupting user activities.

The update process does not proceed unless there is enough free space in the boot pool for the new update files.
If a space warning is shown, go to **System > Boot** to remove unneeded boot environments.

### Updates and Trains

Cryptographically signed update files are used to update TrueNAS.
Update files provide flexibility in deciding when to upgrade the system.
Updates are installed in a new Boot Environment, giving you the opportunity to install and test an update, but revert to a previous Boot Environment in **System > Boot** if anything goes wrong.

TrueNAS defines software branches, known as trains.
There are several trains available for updates, but the web interface only displays trains that can be selected as an upgrade.

Update trains are labeled with a numeric version followed by a short description.
The current version receives regular bug fixes and new features.
Supported older versions of TrueNAS only receive maintenance updates.
See the [Software Development Life Cycle](/CORE/Introduction/#sdlc-application) for more details about the development and support timeline for TrueNAS versions.

Several specific words are used to describe the type of train:

**STABLE**: Bug fixes and new features are available from this train. Upgrades available from a STABLE train are tested and ready to apply to a production environment.

**Nightlies**: Experimental train used for testing future versions of TrueNAS.

**SDK**: Software Developer Kit train. This has additional tools for testing and debugging TrueNAS.

{{< hint warning >}}
The UI shows a warning when the currently selected train is not suited for production use.
Before using a non-production train, be prepared to experience bugs or problems.
Testers are encouraged to submit bug reports at https://jira.ixsystems.com.
{{< /hint >}}

### Checking for Updates

![System Update](/images/CORE/12.0/SystemUpdate.png "System Update")

The system checks daily for updates and downloads an update if one is available.
An alert is issued when a new update becomes available.
The automatic check and download of updates is disabled by unsetting `Check for Updates Daily and Download if Available`.
Click &#x27F3; (Refresh) to perform another check for updates.
To change the train, use the drop-down menu to make a different selection.

{{< hint info >}}
The train selector does not allow downgrades.
For example, the STABLE train cannot be selected while booted into a Nightly boot environment, or a 9.10 train cannot be selected while booted into a 11 boot environment.
To go back to an earlier version after testing or running a more recent version, reboot and select a boot environment for that earlier version.
This screen can then be used to check for updates that train.
{{< /hint >}}

Information about the update is displayed along with a link to the *release notes*.
It is important to read the release notes before updating to determine if any of the changes in that release impact the use of the system.

### Saving the Configuration File

A dialog to save the system configuration file appears before installing updates.

![Save Config](/images/CORE/12.0/SaveConfig.png "Save Config")

{{< hint warning >}}
Keep the system configuration file secure after saving it.
The security information in the configuration file could be used for unauthorized access to your TrueNAS system.
{{< /hint >}}

## Applying Updates

Make sure the system is in a low-usage state as described above in [Preparing for Updates](#preparing-for-updates).
Click *DOWNLOAD UPDATES* to immediately download and install an update.

The *Save Configuration* dialog appears so the current configuration can be saved to external media.

A confirmation window appears before the update is installed.
When *Apply updates and reboot system after downloading* is set, clicking *CONTINUE* downloads and applies the update, then reboots the system.
The update can be downloaded for a later manual installation by unsetting *Apply updates and reboot system after downloading*.

*APPLY PENDING UPDATE* is visible when an update is downloaded and ready to install.
Click this button to see a confirmation window.
Setting *Confirm* and clicking *CONTINUE* installs the update and reboots the system.

{{< hint warning >}}
Each update creates a boot environment.
If the update process needs more space, it attempts to remove old boot environments.
Boot environments marked with the *Keep* attribute as shown in **System > Boot** are not removed.
If space for a new boot environment is not available, the upgrade fails.
Space on the operating system device can be manually freed by going to **System > Boot** and removing the *Keep* attribute or deleting any boot environments that are no longer needed.
{{< /hint >}}

{{< expand "Can I force a full update?" "v" >}}
The TrueNAS updater defaults to delta packages for updates.
During an update, only files that changed in the base operating system since the previous update are downloaded.
Delta update packages are generally preferred over full update packages, providing a faster update and taking less bandwidth.
By contrast, a full update package downloads all of the files included in the base system, even if those files have not changed.

While the full package might require more time to install, there are some rare cases where it is necessary, such as when a patch has been applied as a temporary fix to a local system.
A patch is a piece of software that is used to fix a bug within the main codebase.
While software patches are often used to fix bugs, they can also repair security issues or add new features.

To force a full update, open the web interface **Shell** and enter this command in the console:

`freenas-update -C /tmp/update-$$ –no-delta –reboot update`

The updater downloads the full package, which contains all of the files from the latest software release.
when the download completes, the system reboots with the standard configuration.
{{< /expand >}}

## Manual Updates

Updates can also be manually downloaded and applied in **System > Update**.

{{< hint info >}}
Manual updates cannot be used to upgrade from older major versions.
{{< /hint >}}

Go to https://download.freenas.org/ and find an update file of the desired version.
Manual update file names end with <file>manual-update-unsigned.tar</file>.

Download the desired update file to your local system.
Log in to the TrueNAS web interface and go to **System > Update**.
Click *INSTALL MANUAL UPDATE FILE*.

The *Save Configuration* dialog opens.
This makes it possible to save a copy of the current configuration to external media for backup in case of an update problem.

After the dialog closes, the manual update screen is shown.

The current version of TrueNAS is shown for verification.

![Update Manual](/images/CORE/12.0/UpdateManual.png "Manual Update")

Select the manual update file that was saved to your local system using *Browse*.
Set *Reboot After Update* to reboot the system after the update has been installed.
Click *APPLY UPDATE* to begin the update.

## Update in Progress

Starting an update shows a progress dialog.
When an update is in progress, the web interface shows an animated <i class="material-icons" aria-hidden="true" title="System Update">system_update_alt</i> icon in the top row.
Dialogs also appear in every active web interface session to warn that a system update is in progress.
**Do not** interrupt a system update.
