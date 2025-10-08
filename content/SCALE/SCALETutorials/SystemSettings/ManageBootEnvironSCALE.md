---
title: "Boot Pool Management"
description: "Provides instructions on managing the boot pool and boot environments in TrueNAS."
weight: 40
aliases: /scale/scaleuireference/systemsettings/bootenvironment/
tags:
 - boot
 - settings
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- persistent storage
---

The **Boot Environment** screen has options that monitor and manage the ZFS boot pool and devices that store the TrueNAS operating system.

## Changing the Scrub Interval

The **Stats/Settings** option shows current system statistics. It also allows you to change the scrub interval or how often the system runs a data integrity check on the operating system device.

Go to the **System > Boot Environment** screen and click **Stats/Settings**.
The **Stats/Settings** window shows statistics for the operating system device: **Boot Pool Condition** as **Online** or **Offline**, **Size** in GiB, the consumed space in **Used**, and **Last Scrub Run** with the date and time of the most recent scrub task.
By default, the operating system device is scrubbed every seven days.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatsSettingsSCALE.png" alt="Boot Environment Stats/Settings" id="Boot Environment Stats/Settings" >}}

To change the default scrub interval, input a different number in **Scrub interval (in days)** and click **Update Interval**.

## Boot Pool Device Management

From the **Boot Environment** screen, click **Boot Pool Status** to open the **Boot Pool Status** screen.
This screen shows the **boot-pool**. Expand it to show the devices allocated to that pool.
Read, write, or checksum errors show for the pool.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusListingSCALE.png" alt="Boot Pool Status" id="Boot Pool Status" >}}

### Replace Device

Click the <span class="material-icons">more_vert</span> to open the **Actions** options.
Click **Replace**, select the device from the **Member Disk** dropdown, and then click **Save**.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusReplaceDiskSCALE.png" alt="Boot Pool Status" id="Boot Pool Status" >}}

### Attach Device

Click the <span class="material-icons">more_vert</span> to open the **Actions** options for a device.

Click **Attach**, then select a device from the **Member Disk** dropdown.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusAttachDiskSCALE.png" alt="Boot Pool Status" id="Boot Pool Status" >}}

Select **Use all disk space** to use the entire capacity of the new device.

Click **Save**.

## Scrubbing a Boot Pool
You can initiate a manual data integrity check (scrub) of the operating system device at any time.

On the **System > Boot** screen, click **Scrub Boot Pool** to open the **Scrub** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ScrubBootPoolNowSCALE.png" alt="Boot Pool Scrub" id="Boot Pool Scrub" >}}

Click **Confirm** and then **Start Scrub**.

## Boot Environments

TrueNAS supports a ZFS feature known as boot environments.
These are snapshot clones of the TrueNAS **boot-pool** install location that TrueNAS boots into.
Only one boot environment is used for booting at a time.

A boot environment allows restarting the system to a specific point in time and greatly simplifies recovering from system misconfigurations or other potential system failures.
With multiple boot environments, updating the operating system becomes a low-risk operation.

For example, the TrueNAS update process automatically creates a snapshot of the current boot environment and adds it to the boot menu before applying the update.
If anything goes wrong during the update, the system administrator can activate the snapshot of the pre-update environment and restart TrueNAS to restore system functionality.

Boot environments do not preserve or restore the state of any attached storage pools or apps, only the system **boot-pool**.
Storage backups must be handled through the [ZFS snapshot]({{<ref "PeriodicSnapshotTasksSCALE" >}}) feature or other [backup options]({{< ref "/SCALE/SCALETutorials/DataProtection" >}}).
TrueNAS [applications](https://apps.truenas.com) also use separate upgrade and container image management methods to provide app update and rollback features.

To view the list of boot environments on the system, go to **System > Boot**.
Each boot environment entry contains this information:

* **Name**: the name of the boot entry as it appears in the boot menu.
* **Active**: indicates which entry boots by default if a boot environment is not active.
* **Date Created**: indicates the boot environment creation date and time.
* **Space**: shows boot environment size.
* **Keep**: indicates whether or not TrueNAS deletes this boot environment when a system update does not have enough space to proceed.

Use the icons row to take different actions for a boot environment.

### Following Best Practices

Boot environments do not share all system information. TrueNAS carries over central database and configuration elements into a new environment during an update, but other state changes made in one environment do not appear in another.

Changes in a new boot environment do not exist in older environments. Similarly, changes made while booted into an old environment do not propagate forward into new boot environments. 

The isolation among different boot environments means that frequent switching between environments can lead configuration divergence and missing audit information. Because of this, it is only recommended to revert a boot pool upgrade if the new version introduces a problem or to recover from a broken configuration if the system console or IPMI is unavailable.

### Activating a Boot Environment

The option to activate a boot environment only displays for boot entries not set to **Active**

Activating an environment means the system boots into the point of time saved in that environment the next time it is started.
Click the <span class="iconify" data-icon="mdi:check-decagram">Activate</span> (Activate) icon for an inactive boot environment to open the **Activate** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ActivateBootEnvironmentSCALE.png" alt="Activate Boot Environment" id="Activate Boot Environment" >}}

Click **Confirm**, and then click **Activate**.

The **System Boot** screen status changes to **Reboot** and the current **Active** entry changes from **Now/Reboot** to **Now**, indicating that it is the current boot environment but it is not used on the next system restart (boot operation).

{{< hint warning >}}
Activating and booting into an older environment restores only that environment state. Any changes made there do not carry forward into newer environments.
{{< /hint >}}

### Cloning a Boot Environment

Cloning copies the selected boot environment into a new inactive boot environment that preserves the **boot-pool** state at the clone-creation time.

Click the <span class="iconify" data-icon="mdi:content-copy">Clone</span> (Clone) icon to open the **Clone Boot Environment** window.

{{< trueimage src="/images/SCALE/SystemSettings/CloneBootEnvironmentSCALE.png" alt="Clone Boot Environment" id="Clone Boot Environment" >}}

Enter a new name using only alphanumeric characters, and/or the allowed dashes (-), underscores (_), and periods (.) characters.

The **Source** field displays the boot environment you are cloning. If the displayed name is incorrect, close the window and select the correct boot environment to clone.

Click **Save**.

### Deleting a Boot Environment

Deleting a boot environment removes it from the ** Boot Environment** screen and the boot menu.

Click on the <span class="iconify" data-icon="mdi:delete">Delete</span> (Delete) icon for a boot environment to open the **Delete** dialog.
Select **Confirm** and then click **Delete**.

{{< trueimage src="/images/SCALE/SystemSettings/DeleteBootEnvironmentSCALE.png" alt="Delete Boot Environment" id="Delete Boot Environment" >}}

You cannot delete the default or any active entries.
Because you cannot delete an activated boot entry, this option does not show for activated boot environments.
To delete the active boot environment, first, activate another entry and then delete the environment you want to remove.

### Keeping a Boot Environment

By default, TrueNAS prunes boot environments when the boot pool runs out of remaining storage space.

**Keep** toggles with the **Unkeep** option, and they determine whether the TrueNAS updater can automatically delete this boot environment if there is not enough space to proceed with an update.

Click the <span class="iconify" data-icon="mdi:bookmark">Keep</span> (Keep) icon for a boot environment to open the **Keep** dialog.
Select **Confirm** and then click **Keep Flag**.

{{< trueimage src="/images/SCALE/SystemSettings/KeepBootEnvironmentSCALE.png" alt="Keep Boot Environment" id="Keep Boot Environment" >}}

The boot environment action list removes the **Keep** option and adds **Unkeep**.

{{< trueimage src="/images/SCALE/SystemSettings/UnkeepBootEnvironmentSCALE.png" alt="Unkeep Boot Environment" id="Unkeep Boot Environment" >}}

This makes the boot environment subject to automatic deletion if the TrueNAS updater needs space for an update.

### Recovering a Boot Pool

{{< include file="/static/includes/BootPoolRecoveryProcess.md" >}}

