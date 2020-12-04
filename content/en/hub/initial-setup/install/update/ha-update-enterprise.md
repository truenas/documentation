---
title: "Updating a High Availability System"
description: "How to update a High Availability (HA) TrueNAS Enterprise system."
tags: ["HA"]
---

Updating a TrueNAS Enterprise system that is configured for High Availability (HA) has a slightly different flow from non-HA systems or TrueNAS Core.
The system downloads the update to both controllers, updates and reboots the standby TrueNAS controller, and finally fails over from and updates the active TrueNAS controller.

## Preparation

An update usually takes between thirty minutes and an hour.
A reboot is required after the update, so it is recommended to schedule updates during a maintenance window, allowing two to three hours to update, test, and possibly roll back if issues appear.
On very large systems, a proportionally longer maintenance window is recommended.

For individual support during an upgrade, please [contact iXsystems Support](/hub/tasks/troubleshooting/enterprise-support/#contacting-ixsystems-support) to schedule your upgrade.
Scheduling at least two days in advance of a planned upgrade gives time to make sure a specialist is available for assistance.
Updating from earlier than version 9.3 of TrueNAS must be scheduled with iXsystems Support.

The update process will not proceed unless there is enough free space in the boot pool for the new update files.
If a space warning is shown, go to **System > Boot** and remove any unneeded boot environments.

Operating system updates only modify the operating system devices and do not affect end-user data on storage drives.

{{% alert title="ZFS Upgrades" color="info" %}}
An update could involve upgrading the version of ZFS that is installed on the storage drives.
When a ZFS version upgrade is available, an <i class="fas fa-bell"> </i> **Alert** appears in the web interface.
Upgrading the ZFS version on storage drives is not recommended until it has been verified that rolling back to previous versions of the operating system is not necessary and that swapping the storage drives with another system that has an earlier ZFS version is not needed.
After a ZFS version upgrade, the storage devices will not be accessible by earlier TrueNAS versions.
{{% /alert %}}

### Starting the Update

In the web interface **Dashboard**, find the entry for the active TrueNAS controller and click **CHECK FOR UPDATES**.
This button changes to **UPDATES AVAILABLE** when there is an available update.

<img src="/images/enterprise-dashboard-example.png">
<br><br>

Clicking the button goes to **System > Update** and shows the option to **Download Updates** or, when the system has already detected and staged an update, **Apply Pending Update**.

When **Download Updates** or **Apply Pending Update** is clicked, it first gives an opportunity to save the current system configuration.
Backing up the system configuration is strongly recommended before starting the update.
Including the *Password Secret Seed* in the system configuration removes the encryption from sensitive system data, like stored passwords.
When enabling this option, take extra precautions to store the downloaded system configuration file in a secure location.

After downloading the system configuration, you can continue to download and/or apply the system update.
This will start the process to update and reboot the TrueNAS controllers.
HA and other system services will be briefly unavailable.

Other users that are logged in to the web interface will see a warning dialog.
A <i class="fas fa-arrow-alt-square-down" aria-hidden="true" title="Down Arrow"></i>&nbsp; **System Updating** icon is shown in the top bar of the web interface while the update is in progress.

Update progress is shown for both TrueNAS controllers.

<img src="/images/ha-update-progress.png">
<br><br>

The standby TrueNAS controller reboots when it is finished updating.
This can take several minutes.
When the standby controller has finished booting, the system must fail over to update and reboot the active TrueNAS controller.

### Fail Over to Complete the Update

To deactivate the active TrueNAS controller and finish the update, go to the **Dashboard**, find the entry for the *Standby* controller, and click **INITIATE FAILOVER**.

<img src="/images/dashboard-initiate-failover.png">
<br><br>

Initiating the failover briefly interrupts TrueNAS services and availability.

The browser logs out of the web interface while the active TrueNAS controller deactivates and the standby TrueNAS controller is brought online.
The web interface login screen reappears when the standby TrueNAS controller finishes activating.

<img src="/images/failover-login.png">
<br><br>

Log in to the web interface and check the <i class="fas fa-cloud" aria-hidden="true" title="Cloud"></i>&nbsp; HA status in the top toolbar.
This icon shows that HA is unavailable while the previously active TrueNAS controller reboots.
When HA is available, a dialog asks to finish the update.
Click **CONTINUE** to finish updating the previously active TrueNAS controller.

Verify that the update is complete by going to the **Dashboard** and confirming that the *Version* is the same on both TrueNAS controllers.

## Reverting an Update

If the update did not install on one of the controllers, the web interface generates an alert about a mismatch between controller versions.

<img src="/images/ha-controller-version-mismatch.png">
<br><br>

If something else goes wrong with the update, the system generates an alert and writes details to `/data/update.failed`.

You can return the system to its pre-update state by activating a previous boot environment during system boot.
To ensure the versions match, do this procedure for both TrueNAS controllers.
This requires physical or IPMI access to the TrueNAS controller console.

Reboot the system and press the space bar when the boot menu appears, pausing the boot process.

<img src="/images/truenas-boot-menu.png">
<br><br>

Open the *Boot Environments* menu and cycle the *Active* boot environment until one that is dated prior to the update is selected.

<img src="/images/truenas-boot-menu-select-boot-environment.png">
<br><br>

Return to the first screen and press <kbd>Enter</kbd> to boot into the version of TrueNAS that was installed on that date.
