---
title: "Boot Pool Management"
description: "Provides instructions on managing the boot pool and boot environments in SCALE."
weight: 40
tags:
 - boot
 - settings
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
- persistent storage
---

**System > Boot** contains options for monitoring and managing the ZFS pool and devices that store the TrueNAS operating system.

## Changing the Scrub Interval
The **Stats/Settings** option displays current system statistics and provides the option to change the scrub interval, or how often the system runs a data integrity check on the operating system device.

Go to **System > Boot** screen and click **Stats/Settings**.
The **Stats/Settings** window displays statistics for the operating system device: **Boot pool Condition** as **ONLINE** or **OFFLINE**, **Size** in GiB and the space in use in **Used**, and **Last Scrub Run** with the date and time of the scrub.
By default, the operating system device is scrubbed every 7 days.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatsSettingsSCALE.png" alt="Boot Environment Stats/Settings" id="Boot Environment Stats/Settings" >}}

To change the default scrub interval, input a different number in **Scrub interval (in days)** and click **Update Interval**.

## Boot Pool Device Management

From the **System > Boot** screen, click the **Boot Pool Status** button to open the **Boot Pool Status** screen.
This screen shows the **boot-pool** and expands to show the devices that are allocated to that pool.
Read, write, or checksum errors are also shown for the pool.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusListingSCALE.png" alt="Boot Pool Status" id="Boot Pool Status" >}}

{{< expand "Replace Device (Click to expand)" "v" >}}

Click the <span class="material-icons">more_vert</span> to open the **Actions** options.
Click **Replace**, select the device from the **Member Disk** dropdown, and then click **Save**.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusReplaceDiskSCALE.png" alt="Boot Pool Status" id="Boot Pool Status" >}}
{{< /expand >}}

{{< expand "Attach Device (Click to expand)" "v" >}}

Click the <span class="material-icons">more_vert</span> to open the **Actions** options for a device.

Click **Attach**, then select a device from the **Member Disk** dropdown.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusAttachDiskSCALE.png" alt="Boot Pool Status" id="Boot Pool Status" >}}

Select **Use all disk space** to use the entire capacity of the new device.

Click **Save**.
{{< /expand >}}

## Scrubbing a Boot Pool
A manual data integrity check (scrub) of the operating system device can be initiated at any time.

On the **System > Boot** screen, and click **Scrub Boot Pool** to open the **Scrub** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ScrubBootPoolNowSCALE.png" alt="Boot Pool Scrub" id="Boot Pool Scrub" >}}

Click **Confirm** and then **Start Scrub**.

## Boot Environments

TrueNAS supports a ZFS feature known as boot environments.
These are snapshot clones of the TrueNAS **boot-pool** install location that TrueNAS boots into.
Only one boot environment is used for booting at a time.

A boot environment allows rebooting into a specific point in time and greatly simplifies recovering from system misconfigurations or other potential system failures.
With multiple boot environments, the process of updating the operating system becomes a low-risk operation.

For example, the TrueNAS update process automatically creates a snapshot of the current boot environment and adds it to the boot menu before applying the update.
If anything goes wrong during the update, the system administrator can activate the snapshot of the pre-update environment and reboot TrueNAS to restore system functionality.

Boot environments do not preserve or restore the state of any attached storage pools or apps, only the system **boot-pool**.
Storage backups must be handled through the [ZFS snapshot]({{<relref "PeriodicSnapshotTasksSCALE" >}}) feature or other [backup options]({{< ref "/SCALETutorials/DataProtection/" >}}).
TrueNAS [applications](https://www.truenas.com/docs/truenasapps/) also use separate upgrade and container image management methods to provide app update and rollback features.

To view the list of boot environments on the system, go to **System > Boot**.
Each boot environment entry contains this information:

* **Name**: the name of the boot entry as it appears in the boot menu.
* **Active**: indicates which entry boots by default if a boot environment is not active.
* **Date Created**: indicates the boot environment creation date and time.
* **Space**: shows boot environment size.
* **Keep**: indicates whether or not TrueNAS deletes this boot environment when a system update does not have enough space to proceed.

To access more options for a boot environment, click  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> to display the list of options:

{{< expand "Activate (Click to expand)" "v" >}}
The option to activate a boot environment only displays for boot entries not set to **Active**

Activating an environment means the system boots into the point of time saved in that environment the next time it is started.
Click the <span class="material-icons">more_vert</span> for an inactive boot environment, and then select **Activate** to open the **Activate** dialog.

{{< trueimage src="/images/SCALE/SystemSettings/ActivateBootEnvironmentSCALE.png" alt="Activate Boot Environment" id="Activate Boot Environment" >}}

Click **Confirm**, and then click **Activate**.

The **System Boot** screen status changes to **Reboot** and the current **Active** entry changes from **Now/Reboot** to **Now**, indicating that it is the current boot environment but is not used on next boot.
{{< /expand >}}

{{< expand "Clone (Click to expand)" "v" >}}
Cloning copies the selected boot environment into a new inactive boot environment that preserves the **boot-pool** state at the clone creation time.

Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Clone** to open the **Clone Boot Environment** window.

{{< trueimage src="/images/SCALE/SystemSettings/CloneBootEnvironmentSCALE.png" alt="Clone Boot Environment" id="Clone Boot Environment" >}}

Enter a new name using only alphanumeric characters, and/or the allowed dashes (-), underscores (_), and periods (.) characters.

The **Source** field displays the boot environment you are cloning. If the displayed name is incorrect, close the window and select the correct boot environment to clone.

Click **Save**.
{{< /expand >}}

{{< expand "Rename (Click to expand)" "v" >}}
You can change the name of any boot environment on the **System > Boot** screen.
Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Rename** to open the **Rename Boot Environment** window.

{{< trueimage src="/images/SCALE/SystemSettings/RenameBootEnvironmentSCALE.png" alt="Rename Boot Environment" id="Rename Boot Environment" >}}

Enter a new name using only alphanumeric characters, and/or the allowed dashes (-), underscores (_), and periods (.) characters.

Verify the boot environment in **Name** is the one you want to rename.

Click **Save**.
{{< /expand >}}

{{< expand "Delete (Click to expand)" "v" >}}
Deleting a boot environment removes it from the **System > Boot** screen and from the boot menu.

Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Delete** to open the **Delete** dialog.
Select **Confirm** and then click **Delete**.

{{< trueimage src="/images/SCALE/SystemSettings/DeleteBootEnvironmentSCALE.png" alt="Delete Boot Environment" id="Delete Boot Environment" >}}

You cannot delete the default or any active entries.
Because you cannot delete an activated boot entry, this option does not display for activated boot environments.
To delete the active boot environment, first activate another entry and then delete the environment you want to remove.
{{< /expand >}}

{{< expand "Keep/Unkeep (Click to expand)" "v" >}}
By default, TrueNAS prunes boot environments when the **boot-pool** has no remaining storage space.

**Keep** toggles with the **Unkeep** option, and they determine whether the TrueNAS updater can automatically delete this boot environment if there is not enough space to proceed with an update.

Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Keep** to open the **Keep** dialog.
Select **Confirm** and then click **Keep Flag**.

{{< trueimage src="/images/SCALE/SystemSettings/KeepBootEnvironmentSCALE.png" alt="Keep Boot Environment" id="Keep Boot Environment" >}}

The boot environment action list removes the **Keep** option and adds **Unkeep**.

{{< trueimage src="/images/SCALE/SystemSettings/UnkeepBootEnvironmentSCALE.png" alt="Unkeep Boot Environment" id="Unkeep Boot Environment" >}}

This makes the boot environment subject to automatic deletion if the TrueNAS updater needs space for an update.
{{< /expand >}}
