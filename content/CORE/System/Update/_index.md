---
title: "Update"
geekdocCollapseSection: true
weight: 150
---

{{< toc >}}

{{< tabs "Updating Systems" >}}
{{< tab "Updating CORE" >}}

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
See the [Software Development Life Cycle]({{< relref "SofDevLifecycle.md" >}}) for more details about the development and support timeline for TrueNAS versions.

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

{{< /tab >}}
{{< tab "Updating ENTERPRISE (HA)" >}}
{{< toc >}}
---
title: "Updating Enterprise (HA)"
weight: 20
---

{{< toc >}}

Updating a TrueNAS Enterprise system that is configured for High Availability (HA) has a slightly different flow from non-HA systems or TrueNAS Core.
The system downloads the update to both controllers, updates and reboots the standby TrueNAS controller, and finally fails over from and updates the active TrueNAS controller.

## Preparation

An update usually takes between thirty minutes and an hour.
A reboot is required after the update, so it is recommended to schedule updates during a maintenance window, allowing two to three hours to update, test, and possibly roll back if issues appear.
On very large systems, a proportionally longer maintenance window is recommended.

For individual support during an upgrade, please contact iXsystems Support to schedule your upgrade.
{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}
{{< /expand >}}
Scheduling at least two days in advance of a planned upgrade gives time to make sure a specialist is available for assistance.
Updating from earlier than version 9.3 of TrueNAS must be scheduled with iXsystems Support.

The update process will not proceed unless there is enough free space in the boot pool for the new update files.
If a space warning is shown, go to **System > Boot** and remove any unneeded boot environments.

Operating system updates only modify the operating system devices and do not affect end-user data on storage drives.

{{< hint info >}}
An update could involve upgrading the version of ZFS that is installed on the storage drives.
When a ZFS version upgrade is available, an <i class="material-icons" aria-hidden="true" title="Alert">notifications</i> **Alert** appears in the web interface.
Upgrading the ZFS version on storage drives is not recommended until it has been verified that rolling back to previous versions of the operating system is not necessary and that swapping the storage drives with another system that has an earlier ZFS version is not needed.
After a ZFS version upgrade, the storage devices will not be accessible by earlier TrueNAS versions.
{{< /hint >}}

### Starting the Update

In the web interface **Dashboard**, find the entry for the active TrueNAS controller and click *CHECK FOR UPDATES*.
This button changes to *UPDATES AVAILABLE* when there is an available update.

![Dashboard Enterprise](/images/CORE/12.0/DashboardEnterprise.png "Dashboard Enterprise")

Clicking the button goes to **System > Update** and shows the option to *Download Updates* or, when the system has already detected and staged an update, *Apply Pending Update*.

When *Download Updates* or *Apply Pending Update* is clicked, it first gives an opportunity to save the current system configuration.
Backing up the system configuration is strongly recommended before starting the update.
Including the *Password Secret Seed* in the system configuration removes the encryption from sensitive system data, like stored passwords.
When enabling this option, take extra precautions to store the downloaded system configuration file in a secure location.

After downloading the system configuration, you can continue to download and/or apply the system update.
This will start the process to update and reboot the TrueNAS controllers.
HA and other system services will be briefly unavailable.

Other users that are logged in to the web interface will see a warning dialog.
A <i class="fa fa-arrow-alt-square-down" aria-hidden="true" title="Down Arrow"></i> **System Updating** icon is shown in the top bar of the web interface while the update is in progress.

Update progress is shown for both TrueNAS controllers.
The standby TrueNAS controller reboots when it is finished updating.
This can take several minutes.
When the standby controller has finished booting, the system must fail over to update and reboot the active TrueNAS controller.

### Fail Over to Complete the Update

To deactivate the active TrueNAS controller and finish the update, go to the **Dashboard**, find the entry for the *Standby* controller, and click *INITIATE FAILOVER*.

![DashboardInitiateFailover](/images/CORE/12.0/DashboardInitiateFailover.png "Initiate Failover")

Initiating the failover briefly interrupts TrueNAS services and availability.
The browser logs out of the web interface while the active TrueNAS controller deactivates and the standby TrueNAS controller is brought online.
The web interface login screen reappears when the standby TrueNAS controller finishes activating.

![LoginFailoverEnterprise](/images/CORE/12.0/LoginFailoverEnterprise.png "Login after Failover")

Log in to the web interface and check the <i class="material-icons" aria-hidden="true" title="Cloud">cloud</i> HA status in the top toolbar.
This icon shows that HA is unavailable while the previously active TrueNAS controller reboots.
When HA is available, a dialog asks to finish the update.
Click *CONTINUE* to finish updating the previously active TrueNAS controller.

Verify that the update is complete by going to the **Dashboard** and confirming that the *Version* is the same on both TrueNAS controllers.

{{< expand "Reverting an Update" "v" >}}
If the update did not install on one of the controllers, the web interface generates an alert about a mismatch between controller versions.

![HA Controller Versions Error Enterprise](/images/CORE/12.0/HAControllerVersionsErrorEnterprise.png "HA Controller Versions Error Enterprise")

If something else goes wrong with the update, the system generates an alert and writes details to <file>/data/update.failed</file>.

You can return the system to its pre-update state by activating a previous boot environment during system boot.
To ensure the versions match, do this procedure for both TrueNAS controllers.
This requires physical or IPMI access to the TrueNAS controller console.

Reboot the system and press the space bar when the boot menu appears, pausing the boot process.

![BootMenu](/images/CORE/12.0/BootMenu.png "TrueNAS Boot Menu")

Open the *Boot Environments* menu and cycle the *Active* boot environment until one that is dated prior to the update is selected.

![BootMenuSelectBE](/images/CORE/12.0/BootMenuSelectBE.png "Selecting a Boot Environment")

Return to the first screen and press <kbd>Enter</kbd> to boot into the version of TrueNAS that was installed on that date.
{{< /expand >}}

{{< expand "Manually Updating an Enterprise HA System" "v" >}}
Enterprise customers should contact iX Support for assistance updating their TrueNAS system.

* Download the manual update file located at the [TrueNAS/FreeNAS Download Page](https://download.freenas.org/).
* Go to **System -> Update**.
* Click the *INSTALL MANUAL UPDATE* button.
* Set the *Include Password Secret Seed* checkbox and click the *Save Configuration* button.
* Select the *Update File Temporary Storage Location*, click the *Choose File* button. Select the manual upgrade file that was downloaded. Wait for the file to upload and then click the *APPLY UPDATE* button.
* The Manual update will upload the file, install the file to both controllers, and then reboot the Standby Controller. To complete the upgrade process click the *Close* button in the dialog box. Initiate a failover of the standby controller, as instructed, by clicking *INITIATE FAILOVER* from the Standby Controller's Dashboard card.
* Log into the system.
* Click the *Continue* button at the Pending Upgrade dialog box and the standby controller will reboot completing the upgrade.

{{< /expand >}}

{{< /tab >}}
{{< tab "Major Version Upgrades" >}}

---
title: "Major Version Upgrades"
weight: 30
---

{{< toc >}}

TrueNAS provides flexibility for keeping the operating system up-to-date:

1. Upgrades to major releases, for example from version 9.3 to 9.10, can still be performed using either an ISO or the web interface.
   Unless the Release Notes for the new major release indicate that the current version requires an ISO upgrade, either upgrade method can be used.
2. Minor releases have been replaced with signed updates.
   This means that it is not necessary to wait for a minor release to update the system with a system update or newer versions of drivers and features.
   It is also no longer necessary to manually download an upgrade file and its associated checksum to update the system.
3. The updater automatically creates a boot environment, making updates a low-risk operation.
   Boot environments provide the option to return to the previous version of the operating system by rebooting the system and selecting the previous boot environment from the **System > Boot** menu.

This article describes how to use an <file>.iso</file> file to perform a major version upgrade from an earlier version of FreeNAS/TrueNAS.
See the [Updating]({{< relref "UpdateCORE.md" >}}) article for instructions about using the web interface to keep the system updated.

The upgrade path for major versions of FreeNAS/TrueNAS is **9.3 > 9.10 > 11.1 > 11.3 > 12.0**.
It is always recommended to upgrade to a [supported version]({{< relref "SofDevLifecycle.md" >}}) of the software.

## Caveats

Be aware of these caveats before attempting a major version upgrade:

* **Upgrading a data storage pool can make it impossible to go back to a previous version.**
  For this reason, the update process does not automatically upgrade storage pools, though the system shows an alert when a pool can be upgraded.
  Unless new ZFS feature flags are needed, it is safe to leave the pool at the current version.
  If the pool is upgraded, it will not be possible to boot into a previous TrueNAS version that does not support the newer feature flags.
* Upgrading the firmware of Broadcom SAS HBAs to the latest version is recommended.
* When upgrading from 9.3.x to 9.10, read this [changes FAQ]({{< relref "9.3to9.10UpgradeFAQ.md" >}}) first.
* **Upgrades from FreeNAS 0.7x are not supported.**
  The system has no way to import configuration settings from FreeNAS 0.7x versions.
  The configuration must be manually recreated.
  If supported, the FreeNAS 0.7x pools or disks must be manually imported.
* **Upgrades on 32-bit hardware are not supported.**
  However, if the system is currently running a 32-bit version of FreeNAS/TrueNAS and the hardware supports 64-bit, the system can be upgraded.
  Any archived reporting graphs will be lost during the upgrade.
* **UFS is not supported.**
  If the data currently resides on **one** UFS-formatted disk, [create a ZFS pool]({{< relref "PoolCreate.md" >}}) using other disks after the upgrade, then use the instructions in [Importing a Disk]({{< relref "ImportDisk.md" >}}) to mount the UFS-formatted disk and copy the data to the ZFS pool.
  With only one disk, back up its data to another system or media before the upgrade, format the disk as `ZFS` after the upgrade, then restore the backup.
  If the data currently resides on a UFS RAID of disks, it is not possible to directly import that data to the ZFS pool.
  Instead, back up the data before the upgrade, create a ZFS pool after the upgrade, then restore the data from the backup.
* **If you have GELI-encrypted pools and are upgrading to TrueNAS 12.0 or newer**, you might want to migrate data out of the GELI-encrypted pools into ZFS-encrypted pools.
  The GELI pools **cannot be converted**; the data must be migrated to a new ZFS pool.
  See the [Encryption article]({{< relref "StorageEncryption.md" >}}) for more details.

## Preparation

Before upgrading the operating system, follow these steps:

1. Back up the TrueNAS configuration in **System > General > Save Config**.
2. Back up any or have the keys or passphrases for encrypted data available.
3. Warn users that TrueNAS shared data will be unavailable during the upgrade.
   It is recommended to schedule the upgrade for a time that will least impact users.
4. Stop all system **Services**.

## ISO Upgrades

To upgrade TrueNAS using an <file>.iso</file> file, go to https://www.truenas.com/download-truenas-core/ (TrueNAS CORE latest release) or https://download.freenas.org to download the <file>.iso</file> to the computer that will be used to prepare the installation media.
For example, this is the path to download an <file>.iso</file> of the latest FreeNAS 11.3 release:

![DownloadLatest](/images/CORE/11.3/DownloadLatest.png "Path to latest 11.3 release")

Burn the downloaded <file>.iso</file> file to a CD or USB stick. Refer to the [Prepare the Install File]({{< relref "/Core/GettingStarted/Install.md#prepare-the-install-file" >}}) instructions in the Installation article for tips about burning the <file>.iso</file> to media using different Operating Systems.

Insert the prepared media into the system and boot from it.
The installer waits ten seconds in the installer boot menu before booting the default option.
If needed, press <kbd>Spacebar</kbd> to stop the timer and choose another boot option.
After the media finishes booting into the installation menu, press <kbd>Enter</kbd> to select the default option `1 Install/Upgrade`.
The installer presents a screen showing all available drives.

{{< hint warning >}}
All drives are shown, including boot drives and storage drives.
Only choose boot drives when upgrading.
**Choosing the wrong drives to upgrade or install will cause loss of data.**
If unsure about which drives contain the TrueNAS operating system, reboot and remove the install media.
Log in to the TrueNAS web interface and go to **System > Boot > ACTIONS > Boot Pool Status** to identify the boot drives.
More than one drive is shown when a mirror has been used.
{{< /hint >}}

Highlight the drive where TrueNAS is installed and press <kbd>Spacebar</kbd> to mark it with a star.
If a mirror has been used for the operating system, mark all of the drives where the TrueNAS operating system is installed.
Press <kbd>Enter</kbd> when done.

The installer recognizes earlier versions of FreeNAS/TrueNAS installed on the boot drives and asks to either upgrade or do a fresh install:

![InstallerUpgradeChoice](/images/CORE/12.0/InstallerUpgradeChoice.png "Upgrade Choice")

To perform an upgrade, press <kbd>Enter</kbd> to accept the default `Upgrade Install`.
The installer will display another reminder that the operating system should be installed on a disk that is not used for storage.

![InstallerUpgradeMethod](/images/CORE/12.0/InstallerUpgradeMethod.png "Upgrade Method")

The updated system can be installed in a new boot environment, or the entire operating system device can be formatted to start fresh.
Installing into a new boot environment preserves the old code, allowing a roll-back to previous versions if necessary.
Formatting the boot device is usually not necessary but can reclaim space.
User data and settings are preserved when installing to a new boot environment and also when formatting the operating system device.
Move the highlight to one of the options and press <kbd>Enter</kbd> to start the upgrade.

The installer unpacks the new image and checks for upgrades to the existing database file.
The database file that is preserved and migrated contains your TrueNAS configuration settings.

![Installer Upgrade Preserved Database](/images/CORE/12.0/InstallerUpgradePreservedDatabase.png "Preserved Database")

Press <kbd>Enter</kbd>.
TrueNAS indicates that the upgrade is complete and a reboot is required.
Press *OK*, highlight `3 Reboot System`, then press <kbd>Enter</kbd> to reboot the system.
If the upgrade installer was booted from CD, remove the CD.

During the reboot there can be a conversion of the previous configuration database to the new version of the database.
This happens during the `Applying database schema changes` line in the reboot cycle.
This conversion can take a long time to finish, sometimes fifteen minutes or more, and can cause the system to reboot again.
The system will start normally afterwards.
If database errors are shown but the web interface is accessible, log in, go to **System > General**, and use the **UPLOAD CONFIG** button to upload the configuration backup that was downloaded before starting the upgrade.


{{< /tab >}}
{{< /tabs >}}
