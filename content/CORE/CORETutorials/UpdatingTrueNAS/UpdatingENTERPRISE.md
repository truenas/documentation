---
title: "Updating CORE ENTERPRISE"
description: "Describes how to update Enterprise-licensed TrueNAS CORE deployments."
geekdocCollapseSection: true
weight: 20
aliases:
  - /core/system/update/updateenterprise/
tags:
- coreenterprise
- coreupdateenterprise
---

{{< enterprise >}}
This is Enterprise content that specifically applies to High Availability (HA) systems with a TrueNAS Enterprise license active.
{{< /enterprise >}}

{{< toc >}}

Updating a TrueNAS Enterprise system configured for High Availability (HA) has a slightly different flow from non-HA systems or TrueNAS Core.
The system downloads the update to both controllers, updates and reboots the standby TrueNAS controller, and finally fails over from and updates the active TrueNAS controller.

## Prepare the System

An update usually takes between thirty minutes and an hour.
The system must reboot after the update, so it is recommended to schedule updates during a maintenance window, allowing two to three hours to update, test, and possibly roll back if issues appear.
On large systems, we recommend a proportionally longer maintenance window.

For individual support during an upgrade, please contact iXsystems Support to schedule your upgrade.
{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" type="page" >}}
{{< /expand >}}
Scheduling at least two days ahead of a planned upgrade gives time to ensure a specialist is available for assistance.
Updating from earlier than version 9.3 of TrueNAS must be scheduled with iXsystems Support.

The update process will not proceed unless there is enough free space in the boot pool for the new update files.
If a space warning displays, go to **System > Boot** and remove any unneeded boot environments.

Operating system updates only modify the OS devices and do not affect end-user data on storage drives.

{{< hint type=note >}}
An update could involve upgrading the version of ZFS installed on the storage drives.
When a ZFS version upgrade is available, an <i class="material-icons" aria-hidden="true" title="Alert">notifications</i> **Alert** appears in the web interface.
We do not recommend upgrading the ZFS version on storage drives until you verify that you do not need to roll back to previous operating system versions or swap the storage drives with another system with an earlier ZFS version.
After a ZFS version upgrade, the storage devices are not accessible by earlier TrueNAS versions.
{{< /hint >}}

## Start the Update

In the web interface **Dashboard**, find the entry for the active TrueNAS controller and click **CHECK FOR UPDATES**.
This button changes to **UPDATES AVAILABLE** when there is an available update.

![Dashboard Enterprise](/images/CORE/12.0/DashboardEnterprise.png "Dashboard Enterprise")

Clicking the button goes to **System > Update** and shows the option to **Download Updates** or, when the system has detected and staged an update, **Apply Pending Update**.

When you click **Download Updates** or **Apply Pending Update**, TrueNAS gives an opportunity to save the current system configuration.
We recommend backing up the system configuration before starting the update.
Including the **Password Secret Seed** in the system configuration removes the encryption from sensitive system data, like stored passwords.
When enabling this option, take extra precautions to store the downloaded system configuration file in a secure location.

After downloading the system configuration, you can continue the system update.
While updating and rebooting controllers, HA and other system services are briefly unavailable.

Other users logged in to the web interface see a warning dialog.
A <i class="fa fa-arrow-alt-square-down" aria-hidden="true" title="Down Arrow"></i> **System Updating** icon displays in the top bar of the web interface while the update is in progress.

Update progress displays for both TrueNAS controllers.
The standby TrueNAS controller reboots when it finishes updating.
This can take several minutes.
When the standby controller finishes booting, the system must fail over to update and reboot the active TrueNAS controller.

## Failover to Complete the Update

To deactivate the active TrueNAS controller and finish the update, go to the **Dashboard**, find the entry for the Standby controller, and click **INITIATE FAILOVER**.

![DashboardInitiateFailover](/images/CORE/12.0/DashboardInitiateFailover.png "Initiate Failover")

The failover briefly interrupts TrueNAS services and availability.
The browser logs out of the web interface while the active TrueNAS controller deactivates and the standby TrueNAS controller is brought online.
The web interface login screen reappears when the standby TrueNAS controller finishes activating.

![LoginFailoverEnterprise](/images/CORE/12.0/LoginFailoverEnterprise.png "Login after Failover")

Log in to the web interface and check the <i class="material-icons" aria-hidden="true" title="Cloud">cloud</i> HA status in the top toolbar.
This icon shows that HA is unavailable while the previously active TrueNAS controller reboots.
When HA is available, a dialog asks to finish the update.
Click **CONTINUE** to finish updating the previously active TrueNAS controller.

Verify that the update is complete by going to the **Dashboard** and confirming that the **Version** is the same on both TrueNAS controllers.

{{< expand "Reverting an Update" "v" >}}
If the update did not install on one of the controllers, the web interface generates an alert about a mismatch between controller versions.

![HA Controller Versions Error Enterprise](/images/CORE/12.0/HAControllerVersionsErrorEnterprise.png "HA Controller Versions Error Enterprise")

If something else goes wrong with the update, the system generates an alert and writes details to <file>/data/update.failed</file>.

You can return the system to its pre-update state by activating a previous boot environment during system boot.
To ensure the versions match, do this procedure for both TrueNAS controllers.
This requires physical or IPMI access to the TrueNAS controller console.

Reboot the system and press the space bar when the boot menu appears, pausing the boot process.

![BootMenu](/images/CORE/12.0/BootMenu.png "TrueNAS Boot Menu")

Open the **Boot Environments** menu and cycle the **Active** boot environment until one dated prior to the update displays.

![BootMenuSelectBE](/images/CORE/12.0/BootMenuSelectBE.png "Selecting a Boot Environment")

Return to the first screen and press <kbd>Enter</kbd> to boot into that version of TrueNAS.
{{< /expand >}}

{{< expand "Manually Updating an Enterprise HA System" "v" >}}
Enterprise customers should contact iX Support for assistance updating their TrueNAS system.

* Download the manual update file located at the [TrueNAS/FreeNAS Download Page](https://download.freenas.org/).
* Go to **System -> Update**.
* Click the **INSTALL MANUAL UPDATE** button.
* Set the **Include Password Secret Seed** checkbox and click the **Save Configuration** button.
* Select the **Update File Temporary Storage Location** and click **Choose File**. Select the manual upgrade file you downloaded. Wait for the file to upload, then click **APPLY UPDATE**.
* The Manual update uploads the file, installs it to both controllers, then reboots the Standby Controller. To complete the upgrade, click **Close** in the dialog box. Initiate a failover of the standby controller, as instructed, by clicking **INITIATE FAILOVER** from the Standby Controller's Dashboard card.
* Log into the system.
* Click **Continue** in the **Pending Upgrade** dialog box. The standby controller reboots completing the upgrade.
{{< /expand >}}

{{< taglist tag="coreha" limit="10" >}}
