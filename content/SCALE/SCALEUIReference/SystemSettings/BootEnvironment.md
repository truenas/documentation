---
title: "Boot Environments"
weight: 40
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

To access more options for a boot environment, click  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> :

{{< tabs "Boot Environment Options" >}}
{{< tab "Activate" >}}
Only appears on entries which are not currently set to **Active**.
Activating an environment means the system boots into the point of time saved in that environment the next time it is started.
The status changes to **Reboot** and the current **Active** entry changes from **Now/Reboot** to **Now**, indicating that it is the currently booted environment but will not be used on next boot.
{{< /tab >}}
{{< tab "Clone" >}}
Copy the selected boot environment into a new entry.
The clone *Name* only allows alphanumeric characters, dashes (`-`), underscores (`_`), and periods (`.`) are allowed.
{{< /tab >}}
{{< tab "Rename" >}}
Changes the boot environment name.
Alphanumeric characters, dashes (`-`), underscores (`_`), and periods (`.`) are allowed.
{{< /tab >}}
{{< tab "Delete" >}}
Removes the highlighted entry and also removes that entry from the boot menu.
The **default** and any **Active** entries cannot be deleted.
Because an activated entry cannot be deleted, this button does not appear for the active boot environment.
To delete a currently **Active** entry, first activate another entry.
{{< /tab >}}
{{< tab "Keep" >}}
Toggles whether or not the updater can prune (automatically delete) this boot environment if there is not enough space to proceed with the update.
{{< /tab >}}
{{< /tabs >}}

## Boot Actions

Click *ACTIONS* to:

{{< tabs "System Boot Actions" >}}
{{< tab "Add" >}}
Make a new boot environment from the active environment:

![SystemBootActionsAdd](/images/SCALE/SCALEBootActionsAdd.png "Creating a new Boot Environment")

Only alphanumeric characters, dashes (`-`), and underscores (`_`) are allowed in the *Name*.
*Name* the new boot environment and click *Save*.
{{< /tab >}}
{{< tab "Stats/Settings" >}}
Display statistics for the operating system device: **Boot pool Condition**, **Size** and **Used**, and **Last Scrub Run**.
By default, the operating system device is scrubbed every 7 days.
To change the default, input a different number in the *Scrub interval (in days)* field and click *Update Interval*.

![SystemBootStatsSettings](/images/SCALE/SCALEBootActionsStatsSettings.png "Boot Environment Stats/Settings")
{{< /tab >}}
{{< tab "Boot Pool Status" >}}
Shows the status of each device in the operating system device (boot-pool), including any read, write, or checksum errors.

![SystemBootPool Status](/images/SCALE/SCALEBootActionsBootPoolStatus.png "Boot Pool Status")
{{< /tab >}}
{{< tab "Scrub Boot Pool" >}}
Perform a manual "scrub" (data integrity check) of the operating system device.
{{< /tab >}}
{{< /tabs >}}

## Changing Boot Environments

Sometimes, rolling back to an older boot environment can be useful.
For example, if an update process doesn't go as planned, it is easy to roll back to a previous boot environment.
TrueNAS automatically creates a boot environment when the system updates.

To activate a different boot environment, go to **System Settings > Boot** and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the desired boot environment.
Next, click *Activate*.
This boot environment shows **Reboot** in the **Active** column.
This means the boot environment becomes active on the next system boot.
The system configuration also changes to the state it was in when the boot environment was created.
