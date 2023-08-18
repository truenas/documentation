---
title: "Managing Boot Environments"
description: "Provides information about managing boot environments on TrueNAS CORE."
weight: 30
aliases:
  - /core/system/boot/bootscreen
tags:
- coreboot
- coreupdate
---

{{< toc >}}

TrueNAS supports a ZFS feature known as boot environments.
These are snapshot clones that TrueNAS can boot into.
You can only use one boot environment for booting.

{{< expand "How does this help me?" "v" >}}
A boot environment allows rebooting into a specific point in time and greatly simplifies recovering from system misconfigurations or other potential system failures.
With multiple boot environments, the process of updating the operating system becomes a low-risk operation.
The updater automatically creates a snapshot of the current boot environment and adds it to the boot menu before applying the update.
If anything goes wrong during the update, the system administrator can boot TrueNAS into the previous environment to restore system functionality.
{{< /expand >}}

## Changing Boot Environments

Sometimes, rolling back to an older boot environment can be useful.
For example, if an update process doesn't go as planned, it is easy to roll back to a previous boot environment.
TrueNAS automatically creates a boot environment when the system updates.

There are two different methods for changing the active boot environment: using the web interface and through a Command Line Interface (CLI)

### Web Interface

Go to **System > Boot** and click <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the desired boot environment, then click **Activate**.

Reboot the system to activate the new boot environment.

### Command Line Interface

Reboot the system.

When the welcome screen appears, press the key that corresponds with the option **Boot Environments** (usually <kbd>7</kbd>).

{{< hint type=note >}}
The *Boot Environments* options does not appear when no additional boot environments are present.
{{< /hint >}}

![BootMenu](/images/CORE/12.0/BootMenu.png "TrueNAS Boot Menu")

Choose the new boot environment to activate byt pressing the key for the *Active:* option. 

![BootMenuSelectBE](/images/CORE/12.0/BootMenuSelectBE.png "Selecting a Boot Environment")

Press the key to cycle through existing boot environments.
When you select the desired boot environment, press <kbd>Backspace</kbd> to return to the welcome menu, then press <kbd>4</kbd> to reboot the system.

## Boot Actions

Go to **System > Boot** and click **ACTIONS**.

### Add a New Boot Environment

Click Add to make a new boot environment from the active environment.

![SystemBootActionsAdd](/images/CORE/12.0/SystemBootActionsAdd.png "Creating a new Boot Environment")

**Name** the new boot environment and click **SUBMIT**.

{{< hint type=note >}}
You may only use alphanumeric characters, dashes (-), and underscores (_) in the **Name**.
{{< /hint >}}

### View Stats/Settings

Click **Stats/Settings** to display statistics for the operating system device.

By default, TrueNAS scrubs the operating system device every 7 days.
To change the default, input a different number in the **Scrub interval (in days)** field and click **UPDATE INTERVAL**.

### View Boot Pool Status

Click **Boot Pool Status** to see the status of each boot-pool device, including any read, write, or checksum errors.

### Scrub the Boot Pool

Click **Scrub Boot Pool** to perform a manual (data integrity check) of the operating system device.  

{{< taglist tag="coreboot" limit="10" >}}
