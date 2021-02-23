---
title: "Major Version Upgrades With ISO"
description: "Upgrade path for major TrueNAS versions and how to use an .iso file to update TrueNAS."
tags: ["Upgrade"]
---

TrueNAS provides flexibility for keeping the operating system up-to-date:

1. Upgrades to major releases, for example from version 9.3 to 9.10, can still be performed using either an ISO or the web interface.
   Unless the Release Notes for the new major release indicate that the current version requires an ISO upgrade, either upgrade method can be used.
2. Minor releases have been replaced with signed updates.
   This means that it is not necessary to wait for a minor release to update the system with a system update or newer versions of drivers and features.
   It is also no longer necessary to manually download an upgrade file and its associated checksum to update the system.
3. The updater automatically creates a boot environment, making updates a low-risk operation.
   Boot environments provide the option to return to the previous version of the operating system by rebooting the system and selecting the previous boot environment from the **System > Boot** menu.

This article describes how to use an `.iso` file to perform a major version upgrade from an earlier version of FreeNAS/TrueNAS.
See the [Updating](/CORE/System/Updating/update-guide/) article for instructions about using the web interface to keep the system updated.

The upgrade path for major versions of FreeNAS/TrueNAS is **9.3 > 9.10 > 11.1 > 11.3 > 12.0**.
It is always recommended to upgrade to a [supported version](/CORE/Introduction/lifecycle/) of the software.

## Caveats

Be aware of these caveats before attempting a major version upgrade:

* **Warning: upgrading a data storage pool can make it impossible to go back to a previous version.**
  For this reason, the update process does not automatically upgrade storage pools, though the system shows an alert when a pool can be upgraded.
  Unless new ZFS feature flags are needed, it is safe to leave the pool at the current version.
  If the pool is upgraded, it will not be possible to boot into a previous TrueNAS version that does not support the newer feature flags.
* Upgrading the firmware of Broadcom SAS HBAs to the latest version is recommended.
* When upgrading from 9.3.x to 9.10, read this [changes FAQ](#upgrading-from-93-to-910-faq) first.
* **Upgrades from FreeNAS 0.7x are not supported.**
  The system has no way to import configuration settings from FreeNAS 0.7x versions.
  The configuration must be manually recreated.
  If supported, the FreeNAS 0.7x pools or disks must be manually imported.
* **Upgrades on 32-bit hardware are not supported.**
  However, if the system is currently running a 32-bit version of FreeNAS/TrueNAS and the hardware supports 64-bit, the system can be upgraded.
  Any archived reporting graphs will be lost during the upgrade.
* **UFS is not supported.**
  If the data currently resides on **one** UFS-formatted disk, [create a ZFS pool](/CORE/Storage/DataPools/) using other disks after the upgrade, then use the instructions in [Importing a Disk](/CORE/Storage/ImportDisk/) to mount the UFS-formatted disk and copy the data to the ZFS pool.
  With only one disk, back up its data to another system or media before the upgrade, format the disk as `ZFS` after the upgrade, then restore the backup.
  If the data currently resides on a UFS RAID of disks, it is not possible to directly import that data to the ZFS pool.
  Instead, back up the data before the upgrade, create a ZFS pool after the upgrade, then restore the data from the backup.
* **If you have GELI-encrypted pools and are upgrading to TrueNAS 12.0 or newer**, you might want to migrate data out of the GELI-encrypted pools into ZFS-encrypted pools.
  The GELI pools **cannot be converted**; the data must be migrated to a new ZFS pool.
  See the [Encryption article](/CORE/Storage/encryption/) for more details.

## Preparation

Before upgrading the operating system, follow these steps:

1. Back up the TrueNAS configuration in **System > General > Save Config**.
2. Back up any or have the keys or passphrases for encrypted data available.
3. Warn users that TrueNAS shared data will be unavailable during the upgrade.
   It is recommended to schedule the upgrade for a time that will least impact users.
4. Stop all system **Services**.

## ISO Upgrades

To upgrade TrueNAS using an `.iso` file, go to https://www.truenas.com/download-truenas-core/ (TrueNAS CORE latest release) or https://download.freenas.org to download the `.iso` to the computer that will be used to prepare the installation media.
For example, this is the path to download an `.iso` of the latest FreeNAS 11.3 release:

![Download Latest](/images/CORE/11.3/Download Latest.png "Download Latest")
<br><br>
<!-- markdown-link-check-disable-next-line -->
Burn the downloaded `.iso` file to a CD or USB stick. Refer to the [Preparing Media](/hub/initial-setup/install/FirstTimeInstall/) instructions in the Installation article for tips about burning the `.iso` to media using different Operating Systems.

Insert the prepared media into the system and boot from it.
The installer waits ten seconds in the installer boot menu before booting the default option.
If needed, press <kbd>Spacebar</kbd> to stop the timer and choose another boot option.
After the media finishes booting into the installation menu, press <kbd>Enter</kbd> to select the default option `1 Install/Upgrade`.
The installer presents a screen showing all available drives.

{{% alert title="Warning" color="warning" %}}
All drives are shown, including boot drives and storage drives.
Only choose boot drives when upgrading.
**Choosing the wrong drives to upgrade or install will cause loss of data.**
If unsure about which drives contain the TrueNAS operating system, reboot and remove the install media.
Log in to the TrueNAS web interface and go to **System > Boot > ACTIONS > Boot Pool Status** to identify the boot drives.
More than one drive is shown when a mirror has been used.
{{% /alert %}}

Highlight the drive where TrueNAS is installed and press <kbd>Spacebar</kbd> to mark it with a star.
If a mirror has been used for the operating system, mark all of the drives where the TrueNAS operating system is installed.
Press <kbd>Enter</kbd> when done.

The installer recognizes earlier versions of FreeNAS/TrueNAS installed on the boot drives and asks to either upgrade or do a fresh install:

![Installer Upgrade Choice](/images/CORE/12.0/InstallerUpgradeChoice.png "Installer Upgrade Choice")
<br><br>

To perform an upgrade, press <kbd>Enter</kbd> to accept the default `Upgrade Install`.
The installer will display another reminder that the operating system should be installed on a disk that is not used for storage.

![Installer Upgrade Method](/images/CORE/12.0/InstallerUpgradeMethod.png "InstallerUpgradeMethod")
<br><br>

The updated system can be installed in a new boot environment, or the entire operating system device can be formatted to start fresh.
Installing into a new boot environment preserves the old code, allowing a roll-back to previous versions if necessary.
Formatting the boot device is usually not necessary but can reclaim space.
User data and settings are preserved when installing to a new boot environment and also when formatting the operating system device.
Move the highlight to one of the options and press <kbd>Enter</kbd> to start the upgrade.

The installer unpacks the new image and checks for upgrades to the existing database file.
The database file that is preserved and migrated contains your TrueNAS configuration settings.

![Installer Upgrade Preserved Database](/images/CORE/12.0/InstallerUpgradePreservedDatabase.png "Installer Upgrade Preserved Database")
<br><br>

Press <kbd>Enter</kbd>.
TrueNAS indicates that the upgrade is complete and a reboot is required.
Press **OK**, highlight `3 Reboot System`, then press <kbd>Enter</kbd> to reboot the system.
If the upgrade installer was booted from CD, remove the CD.

During the reboot there can be a conversion of the previous configuration database to the new version of the database.
This happens during the `Applying database schema changes` line in the reboot cycle.
This conversion can take a long time to finish, sometimes fifteen minutes or more, and can cause the system to reboot again.
The system will start normally afterwards.
If database errors are shown but the web interface is accessible, log in, go to **System > General**, and use the **UPLOAD CONFIG** button to upload the configuration backup that was downloaded before starting the upgrade.

## FAQ: Upgrading from 9.3 to 9.10

**What has changed in 9.10 vs 9.3?**

In a nutshell, the underlying OS and a lot of "ports" used to implement various services.
See the 9.10-RELEASE [Release Notes](https://archive.freenas.org/9.10/RELEASE/ReleaseNotes) as well as the `ChangeLog` files for all the various [9.10 Software Updates](https://archive.freenas.org/9.10/STABLE/) to paint a complete picture.

**I upgraded to 9.10 and my LACP (lagg) interface stopped working. It worked great in 9.3! HELP!**

LACP links actually only "sort of" worked in FreeBSD 9 - they would misbehave in odd and difficult to diagnose ways when one of the physical links failed.
In FreeBSD 10 (and hence FreeNAS 9.10), Active LACP is now enforced so that there is a proper heartbeat and the robustness of the link can be assured.
Re-configure your switch for Active LACP and your lagg will work again.

**Will my 9.3 jails continue to work under 9.10?**

Yes and no.
If you have a 9.3 jail used by a plugin or other application that you don't plan to change in any way (you just want it to continue to work), then yes, it will keep working just fine.
If you are trying to use FreeBSD tools like the ports and packages collection (or any of the various upgrade helpers for them) then NO.
Those tools inspect the currently running OS version and will immediately detect a mis-match and get angry.
If you want to do any "manual jail management" then you need a 9.10 jail.

**How do I create a 9.10 jail?**

Due to the way that templates are cached over the lifetime of a FreeNAS install (an architectural design flaw it is too late to fix now), you will need a fresh (totally empty) jail root in order to trigger the download and installation of a FreeBSD 10 jail environment (template).

**I upgraded to 9.10 and my self-signed SSL certificates that I created earlier (on FreeNAS) no longer work. Help?**

See comments in https://redmine.ixsystems.com/issues/14977 - easiest to just re-issue the certs in 9.10 due to the fact that 9.3 had some bugs in its cert generation logic (non-security compromising ones, but the tightened cert checks in 9.10 catch them nonetheless).

**After upgrading last night, I found myself unable to access the FreeNAS GUI (in HTTPS only mode). How do I get my GUI access back?**

For a rebootless http workaround please do the following:

1. SSH into your system.
2. Make a backup of your system database (for safety): `cp /data/freenas-v1.db /data/freenas-v1.db.bak`.
3. Manually set the GUI's protocol to 'http' in the database: `sqlite3 /data/freenas-v1.db "UPDATE system_settings SET stg_guiprotocol = 'http';"`.
4. Ensure that the above step went through successfully by printing the value of *stg_guiprotocol* from the database: `sqlite3 /data/freenas-v1.db "select stg_guiprotocol from system_settings;"`.
5. Regenerate nginx config file and then restart nginx and django: `service ix-nginx onestart && service nginx restart && service django restart`.

**I'm having authentication issues with SMB and AD / LDAP / ... after upgrading - Why?**

TLSv1 has been deprecated as insecure. Switch to TLSv1.2.
