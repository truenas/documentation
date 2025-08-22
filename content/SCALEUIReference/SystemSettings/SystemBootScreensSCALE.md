---
title: "Boot"
description: "Provides reference descriptions of the boot environment screens and settings."
weight: 40
tags:
- boot
---

The **Boot Environment** screen lists boot environments created by updates performed on the system.
It has options for monitoring and maintaining the TrueNAS install pool and disks, and includes managing OS restore points(called boot environments) for the TrueNAS system.

{{< trueimage src="/images/SCALE/SystemSettings/BootEnvironmentListingSCALE.png" alt="System Boot Screen" id="System Boot Screen" >}}

Screen options shown at the top right of the screen are:

* **Stats/Settings** - Opens the **Stats/Settings** window with the **Boot pool Condition**, **Size** and **Used**, and **Last Scrub Run** statistics for the operating system device, and provides the option to change the default duration between the operating system device scrubs from every seven days to a new duration in days.

* **Boot Pool Status** - Opens the **[Boot Pool Status](#boot-pool-status)** screen that displays the status of each device in the operating system device (boot pool), options for managing boot-pool devices, and lists any read, write, or checksum errors.

* **Scrub Boot Pool** - Opens the **Scrub** dialog. Performs a manual data integrity check (scrub) of the operating system device.

Each boot environment listed in the table shows these columns:

* **Name** - Shows the name of the boot entry as it appears in the boot menu.
* **Active** - Indicates the environment that boots by default if a boot environment is not active. Activated environment displays **Non/Reboot**.
* **Date Created** - Shows the creation date and time.
* **Used Space** - Shows the amount of disk space the boot environment occupies.
* **Keep** - Indicates TrueNAS can delete this boot environment when a system update does not have enough space to proceed.

Each boot environment row on the table shows icon buttons for available actions. 

{{< truetable >}}
|Setting | Description |
|--------|-------------|
| <span class="iconify" data-icon="mdi:check-decagram">Activate</span>**Activate** | Shows for environments not marked as active. Opens the **Activate** dialog. Changes the **System Boot Environment** screen table **Active** stated to **Now** after booting the system into this environment. Indicates the current boot environment. |
| <span class="iconify" data-icon="mdi:content-copy">Clone</span>**Clone** | Opens the **Clone Boot Environment** screen. Copies the selected boot environment into a new entry. Enter a new name using only alphanumeric characters and/or the allowed dashes (-), underscores (_), and periods (.) special characters. |
| <span class="iconify" data-icon="mdi:delete">Delete</span>**Delete** | Opens the **Delete** dialog. It does not display if the boot environment is activated. You cannot delete the default or activated boot environment. Removes the highlighted entry and removes that entry from the boot menu.  |
| <span class="iconify" data-icon="mdi:bookmark">Keep</span>**Keep** | Opens the **Keep** dialog, and toggles the boot environment action to **Unkeep**. Use to prevent the TrueNAS updater from automatically deleting the environment to make more space for a new environment when there is insufficient space to complete the update. |
{{< /truetable >}}

### Boot Pool Status

The **System > Boot > Boot Pool Status** screen shows the status of the current boot pool.
It includes the current status, the path, and the number of read, write, and checksum errors.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusListingSCALE.png" alt="Boot Pool Status" id="Boot Pool Status" >}}

The vertical ellipsis <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> next to a device displays two options, **Attach** or **Replace**.

Each boot pool environment listed expands to show the disk name where the environment resides.
The <span class="material-symbols-outlined">more_vert</span> shows two options, **Replace** and **Attach**.

**Replace** opens the [**Replace** window](#replace-screen).

**Attach** opens the [**Attach** window](#attach-screen).

#### Attach Window

The **Attach** window setting, accessed from the **Boot Status** screen, specifies a device as the disk member to attach to the boot environment, and how much of the device it can use.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusAttachDiskSCALE.png" alt="Boot Status Attach" id="Boot Status Attach" >}}

**Member Disk** shows a dropdown list of devices to select.

**Use all disk space** enables the specified disk to use the entire capacity of that new device.

**Save** makes the change and closes the window.

#### Replace Window

The **Replace** window settings, accessed from the **Boot Status** screen, specify a replacement device for the current boot environment device.

{{< trueimage src="/images/SCALE/SystemSettings/BootPoolStatusReplaceDiskSCALE.png" alt="Boot Status Replace" id="Boot Status Replace" >}}

**Member Disk** shows a dropdown list of devices to select.

**Save** makes the change and closes the window.

### Clone Boot Environment Screen

Each time the system updates to a new software release, it creates a new boot environment. The <span class="iconify" data-icon="mdi:content-copy">Clone</span>**Clone** icon button opens the **Clone Boot Environment** screen where you can clone an existing boot environment to create an operating system restore point.

{{< trueimage src="/images/SCALE/SystemSettings/CloneBootEnvironmentSCALE.png" alt="Clone Boot Environment Screen" id="Clone Boot Environment Screen" >}}

**Name** - The name of the new cloned boot environment. The name can use upper and lowercase alphanumeric and special characters dash (-), underscore (_), and periods (.).

**Source** shows the selected boot environment to be cloned.

### Batch Operations

Select the checkbox to the left of each boot environment to show the **Batch Operations** option at the top of the screen. Currently only **Delete** is available as a batch operation.

{{< trueimage src="/images/SCALE/SystemSettings/BootEnvironmentBatchListingSCALE.png" alt="Batch Operations Boot Screen" id="Batch Operations Boot Screen" >}}

**Delete** opens the **Delete** window.
