---
title: "Updating a High Availability System"
description: "How to update a High Availability (HA) TrueNAS Enterprise system"
---

## Process Summary

Go to **System > Update**

  * Click **Download Updates** or **Apply Pending Updates**.
  * Save a backup of the system configuration.
    * SSH keys must be backed up separately: located in */usr/local/etc/ssh/*. Root user keys are in */root/.ssh*.
    * Click **Export Password Secret Seed** to include all passwords in the config backup (Security Risk - please secure backup file).
    * Click **Export Pool Encryption Keys** to include GELI encryption keys of any encrypted pools (Security Risk). Encryption Keys are automatically restored when the config file is uploaded to the system.
  * Both controllers begin updating. Progress is shown in a dialog.
    * Update warning dialog and icon appears for all logins.
    * "Standby" controller reboots when it is finished updating.
    * Dialog requests failover to finish the update procedure.
  * Fail over to reboot the current “active” Controller and promote the “standby” controller to “active”
    * Go to the **Dashboard**, find the **System Information (Standby)** card, and click **INITIATE FAILOVER**.
      * System services are interrupted.
      * Set **Confirm** and click **FAILOVER**.
      * UI logs out, a status dialog shows failover progress, then the UI log in screen is shown when failover is complete.
    * Log back in to the UI and go to the **Dashboard**.
      * **Dashboard** shows that the "standby" controller is now "active" in the **System Information** card.
      * HA is disabled while the previously "active" controller reboots as the new "standby" controller.
        * UI alerts might be generated while a controller is offline.
        * Reboot can take a long time.
        * HA status icon (cloud) shows more details when clicked.
    * Wait for “standby” (previously active) controller to come back online
      * Don’t change any system settings.
    * Apply the update to the Standby (previously active) controller
      * **Pending Upgrade** dialog appears when the standby controller is online.
      * Click **CONTINUE** to finish applying the update to the standby controller.
        * Standby controller reboots.
        * **Dashboard** might not immediately show the new version applied to the standby controller.
   * Wait for the standby controller to come back online and confirm update was successful in the **Dashboard**.
     * Compare versions shown on both **System Information** and **System Information (Standby)** cards.
     * UI alert appears if the update fails.
     * Details are written to */data/update.failed*.

## Updating a High Availability (HA) TrueNAS Enterprise System

Updating a TrueNAS Enterprise system that is configured for High Availability has a slightly different flow from TrueNAS Core.
The system downloads the update to both controllers, updates and reboots the standby TrueMAS controller, and finally fails over from and updates the active TrueNAS controller.

### Preparatory Steps

An update usually takes between thirty minutes and an hour.
A reboot is required after the update, so it is recommended to schedule updates during a maintenance window, allowing two to three hours to update, test, and possibly roll back if issues appear.
On very large systems, a proportionally longer maintenance window is recommended.

For individual support during an upgrade, please [contact iXsystems Support]() to schedule one.
Scheduling at least two days in advance of a planned upgrade gives time to make sure a specialist is available for assistance.
Updates from older versions of TrueNAS before 9.3 must be scheduled with iXsystems Support.

The update process will not proceed unless there is enough free space in the boot pool for the new update files.
If a space warning is shown, go to **System > Boot** and remove any unneeded boot environments.

Operating system updates only modify the operating system devices and do not affect end-user data on storage drives.

Available ZFS version upgrades are indicated by an Alert in the web interface.
However, upgrading the ZFS version on storage drives is not recommended until after verifying that rolling back to previous versions of the operating system will not be necessary, and that interchanging the devices with some other system using an older ZFS version is not needed.
After a ZFS version upgrade, the storage devices will not be accessible by older versions of TrueNAS.

### Starting the Update

On the Dashboard of the active TrueNAS controller, click **CHECK FOR UPDATES**.
This button changes to **UPDATES AVAILABLE** when there is an available update.
Clicking the button goes to **System > Update** and shows the option to **Download Updates** or, when the system has already detected and staged an update, **Apply Pending Update**.

When **Download Updates** or **Apply Pending Update** is clicked, it first gives an opportunity to save the current system configuration.
Backing up the system configuration is strongly recommended before starting the update.
Click **CONTINUE** to start updating both TrueNAS controllers.

Other users that are logged in to the web interface will see a warning dialog, and a “System Updating” icon is shown in the top bar while the update is in progress.

Update progress is shown for both TrueNAS controllers.
The standby TrueNAS controller reboots when it is finished updating.
To finish updating the active TrueNAS controller, the system must fail over and deactivate the active TrueNAS controller.

### Fail Over to Complete the Update

To deactivate the active TrueNAS controller and finish the update, go to the **Dashboard** and click **INITIATE FAILOVER**.
This will temporarily interrupt TrueNAS services and availability.
To start the failover, confirm the action and click **FAILOVER**.
The browser logs out of the web interface while the active TrueNAS controller deactivates and the other TrueNAS controller is brought online.

The browser shows the web interface login screen when the other TrueNAS controller finishes activating.
Log in to the web interface and check the HA status icon in the top toolbar.
This icon shows that HA is unavailable while the previously active TrueNAS controller reboots.
The icon changes to show HA is available when the TrueNAS controller is back online.
Click **CONTINUE** to finish updating the previously active TrueNAS controller and reboot it again.

### Confirm the Update is Finished

When both TrueNAS controllers are online, verify that the update is complete by going to the **Dashboard** and confirming that the *Version* is the same on both TrueNAS controllers.

## Reverting an Update

If something goes wrong with the update, the system generates an alert and writes details to `/data/update.failed`.

You can return the system to its pre-update state by activating a previous boot environment during system boot.
This requires physical or IPMI access to the system console.
Reboot the system and press the space bar when the boot menu appears, pausing the boot process.

Open the *Boot Environments* menu and select a boot environment that is dated prior to the update.
Return to the first screen and press <kbd>Enter</kbd> to boot into the version of TrueNAS that was installed on that date.