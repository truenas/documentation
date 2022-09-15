---
title: "Managing Boot Environments"
description: "This article provides instructions on managing TrueNAS boot environments."
weight: 40
alias: /scale/scaleuireference/systemsettings/bootenvironment/
tags:
 - scaleboot
---

{{< toc >}}

TrueNAS supports a ZFS feature known as boot environments. These are snapshot clones that TrueNAS can boot into. Only one boot environment can be used for booting.

{{< expand "How does this help me?" "v" >}}
A boot environment allows rebooting into a specific point in time and greatly simplifies recovering from system misconfigurations or other potential system failures.
With multiple boot environments, the process of updating the operating system becomes a low-risk operation.
The updater automatically creates a snapshot of the current boot environment and adds it to the boot menu before applying the update.
If anything goes wrong during the update, the system administrator can boot TrueNAS into the previous environment to restore system functionality.
{{< /expand >}}

## Managing Boot Environments

To view the list of boot environments on the system, go to **System Settings > Boot**. Each boot environment entry contains this information:

* **Name**: the name of the boot entry as it appears in the boot menu.
* **Active**: indicates which entry boots by default if a boot environment is not active.
* **Created**: indicates the boot environment creation date and time.
* **Space**: shows boot environment size.
* **Keep**: indicates whether or not TrueNAS deletes this boot environment when a system update does not have enough space to proceed.

To access more options for a boot environment, click  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> to display the list of options.
### Activating a Boot Environment
The option to activate a boot environment only displays for boot entries not set to **Active**
{{< expand "Click Here for More Information" "v" >}}
Activating an environment means the system boots into the point of time saved in that environment the next time it is started.
Click the <span class="material-icons">more_vert</span> for an inactive boot environment, and then select **Activate** to open the **Activate** dialog.

![BootEnvironmentActivateDialog](/images/SCALE/22.02/BootEnvironmentActivateDialog.png "Activate Boot Environment")

Click **Confirm**, and then click **Activate**. 

The **System Boot** screen status changes to **Reboot** and the current **Active** entry changes from **Now/Reboot** to **Now**, indicating that it is the current boot environment but is not used on next boot.
{{< /expand >}}

### Cloning a Boot Environment
Cloning copies the selected boot environment into a new entry.
{{< expand "Click Here for More Information" "v" >}}
Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Clone** to open the **Clone Boot Environment** window.

![CloneBootEnvironment](/images/SCALE/22.02/CloneBootEnvironment.png "Clone Boot Environment")

Enter a new name using only alphanumeric characters, and/or the allowed dashes (-), underscores (_), and periods (.) characters.

The **Source** field displays the boot environment you are cloning. If the displayed name is incorrect, close the window and select the correct boot environment to clone.

Click **Save**. 
{{< /expand >}}

### Renaming a Boot Environment
You can change the name of any boot environment on the **System > Boot** screen.
{{< expand "Click Here for More Information" "v" >}}
Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Rename** to open the **Rename Boot Environment** window.

![RenameBootEnvironment](/images/SCALE/22.02/RenameBootEnvironment.png "Rename Boot Environment")

Enter a new name using only alphanumeric characters, and/or the allowed dashes (-), underscores (_), and periods (.) characters.

Verify the boot environment in **Name** is the one you want to rename.

Click **Save**.
{{< /expand >}}

### Deleting a Boot Environment
Deleting a boot environment removes it from the **System > Boot** screen and from the boot menu.
{{< expand "Click Here for More Information" "v" >}}
Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Delete** to open the **Delete** dialog.
Select **Confirm** and then click **Delete**.

![DeleteBootEnvironmentSCALE](/images/SCALE/22.02/DeleteBootEnvironmentSCALE.png "Delete Boot Environment") 

You cannot delete the default and any active entries. 
Because you cannot delete an activated boot entry, this option does not display for activated boot environments
To delete the active boot environment, first activate another entry and then delete the environment you want to remove.
{{< /expand >}}

### Keeping a Boot Environment
**Keep** toggles with the **Unkeep** option, and they determine whether the TrueNAS updater can automatically delete this boot environment if there is not enough space to proceed with an update.
{{< expand "Click Here for More Information" "v" >}}
Click the <span class="material-icons">more_vert</span> for a boot environment, and then select **Keep** to open the **Keep** dialog.
Select **Confirm** and then click **Keep Flag**.

![BootEnvironmentKeepDialog](/images/SCALE/22.02/BootEnvironmentKeepDialog.png "Keep Boot Environment")

The boot environment action list removes the **Keep** option and adds **Unkeep**. 

![BootEnvironmentUnkeepDialog](/images/SCALE/22.02/BootEnvironmentUnkeepDialog.png "Unkeep Boot Environment")

This makes the boot environment subject to automatic deletion if the TrueNAS updater needs space for an update.
{{< /expand >}}

## Adding a Boot Environment
You can make a new boot environment to your TrueNAS.
{{< expand "Click Here for More Information" "v" >}}
To add a new boot environment, click **Actions** at the top right of the **System > Boot** screen and click **add** to open the **Create Boot Environment** window.

![CreateBootEnvironmentWindow](/images/SCALE/22.02/CreateBootEnvironmentWindow.png "Create Boot Environment") 

Enter a new name using only alphanumeric characters, and/or the allowed dashes (-), underscores (_), and periods (.) characters.

Click **Save**.
{{< /expand >}}

## Changing the Scrub Interval
The **Stats/Settings** option displays current system statistics and provides the option to change the scrub interval, or how often the system runs a data integrity check on the operating system device.
{{< expand "Click Here for More Information" "v" >}}
Click **Actions** at the top right of the **System > Boot** screen and click **Stats/Settings**. 
The **Stats/Settings** window displays statistics for the operating system device: **Boot pool Condition** as **ONLINE** or **OFFLINE**, **Size** in GiB and the space in use in **Used**, and **Last Scrub Run** with the date and time of the scrub. 
By default, the operating system device is scrubbed every 7 days.

![BootEnvironmentStatsSettings](/images/SCALE/22.02/BootEnvironmentStatsSettings.png "Boot Environment Stats/Settings")

To change the default scrub interval, input a different number in **Scrub interval (in days)** and click **Update Interval**.
{{< /expand >}}

## Checking Boot Pool Status
You an attach or replace the boot environment.
{{< expand "Click Here for More Information" "v" >}}
Click **Actions** at the top right of the **System > Boot** screen and click **Boot Pool Status** to open the **Boot Pool Status** screen that shows current operating system device (boot pool), the path for the pool, and the read, write, or checksum errors for the device. 

![BootPoolStatusScreenSCALE](/images/SCALE/22.02/BootPoolStatusScreenSCALE.png "Boot Pool Status")

Click the <span class="material-icons">more_vert</span> to open the **Actions** options. 
Click **Attach** to select a device from the **Member Disk** dropdown. 

Select **Use all disk space** to use the entire capacity of the new device.

Click **Save**.

If you want to replace the device, click **Replace**, select the device from the **Member Disk** dropdown, and then click **Save**.

To return to the **System > Boot** screen, click **Boot** in the breadcrumb header.
{{< /expand >}}

## Scrubbing a Boot Pool
You can perform a manual data integrity check (scrub) of the operating system device at any time.
{{< expand "Click Here for More Information" "v" >}}
Click **Actions** at the top right of the **System > Boot** screen and click **Scrub Boot Pool** to open the **Scrub** dialog.

![BootPoolScrubDialogSCALE](/images/SCALE/22.02/BootPoolScrubDialogSCALE.png "Boot Pool Scrub")

Click **Confirm** and then **Start Scrub**.
{{< /expand >}}

## Changing Boot Environments

Sometimes, rolling back to an older boot environment can be useful.
For example, if an update process does not go as planned, it is easy to roll back to a previous boot environment.
TrueNAS automatically creates a boot environment when the system updates.

Use the **[Activate](#activating-a-boot-environment)** option on the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the desired boot environment.

This changes the **Active** column to **Reboot** for the boot environment, and means the boot environment becomes active on the next system boot.
The system configuration also changes to the state it was in when the boot environment was created.

{{< taglist tag="scaleboot" limit="10" >}}