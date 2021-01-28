---
title: "Managing Boot Environments"
description: "How to create, activate, or generally manage boot environments."
tags: ["ZFS"]
---

TrueNAS supports a ZFS feature known as boot environments. With multiple boot environments, the process of updating the operating system becomes a low-risk operation. The updater automatically creates a snapshot of the current boot environment and adds it to the boot menu before applying the update.

## Boot Environments

To view the list of boot environments on the system, go to **System > Boot**.
Each boot environment entry contains this information:

- **Name**: the name of the boot entry as it will appear in the boot menu.
- **Active**: indicates which entry will boot by default if a boot environment
  has not been selected as active.
- **Created**: indicates the date and time the boot entry was created.
- **Space**: displays the size of the boot environment.
- **Keep**: indicates whether or not this boot environment can be pruned if an
  update does not have enough space to proceed.

To access more options for a boot environment, click  <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>.
The options are as follows:

- **Activate**: only appears on entries which are not currently set to Active.
  Activating an evironment means the system boots into the point of time saved in that environment the next time it is started. The status
  changes to *Reboot* and the current *Active* entry changes from *Now/Reboot* to *Now*, indicating that it was used on the last boot but will not be used on the next boot.
- **Clone**: makes a new boot environment from the selected boot environment.
  When prompted for the name of the clone, alphanumeric characters, dashes (-), underscores (_), and periods (.) are allowed.
- **Rename**: used to change the name of the boot environment. Alphanumeric characters, dashes (-), underscores (_), and periods (.) are allowed.
- **Delete**: used to delete the highlighted entry, which also removes that entry from the boot menu.
  Since an activated entry cannot be deleted, this button does not appear for the active boot environment.
  To delete an entry that is currently activated, first activate another entry.
  Note that this button does not appear for the default boot environment as this entry is
  needed to return the system to the original installation state.
- **Keep**: used to toggle whether or not the updater can prune (automatically delete) this boot environment if there is not enough space to proceed with the update.

Click *ACTIONS* to:

- **Add**: make a new boot environment from the active environment.
  The active boot environment contains the text *Now/Reboot* in the Active column.
  Only alphanumeric characters, dashes (-), and underscores (_) are allowed in the name.
- **Stats/Settings**: display statistics for the operating system device: condition, total and used size, and date and time of the last scrub.
  By default, the operating system device is scrubbed every 7 days.
  To change the default, input a different number in the *Automatic scrub interval (in days)* field and click *UPDATE INTERVAL*.
- **Boot Pool Status**: display the status of each device in the operating system device (boot-pool), including any read, write, or checksum errors.
- **Scrub Boot Pool**: perform a manual scrub of the operating system device.

## Changing Boot Environment in the Web Interface

Sometimes, rolling back to an older boot environment can be useful. For example, if an update process doesn't go as planned, it is easy to roll back to a previous boot environment. TrueNAS automatically creates a boot environment when the system updates.

To activate a previous boot environment, go to **System > Boot** and click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for the desired boot environment. Next, click *Activate*. The boot environment that was activated will now have *Reboot* displayed in the *Active* column. This means that the boot environment will become active on the next reboot. 

{{% pageinfo %}}
When changing the boot environment, the system configuration also changes to the state it was in when the boot environment was created.
{{% /pageinfo %}}

## Changing Boot Environments in the Welcome CLI

If the web interface is inaccessible but physical access to the system is still possible, the boot environment can be changed at the welcome screen of the CLI.

Reboot the system. When the welcome screen appears press the key that corresponds with the option *Boot Environments*. In the picture below, the key to select the *Boot Environments* option is <kbd>7</kbd>.

{{% pageinfo %}}
The *Boot Environments* options doesn't appear when there are no extra boot environments on the system.
{{% /pageinfo %}}

<img src="/images/TN-Welcome.png">
<br><br>

After selecting the *Boot Environment* option, choose the new boot environment to activate. Press the corresponding key for the *Active:* option. In the picture below, the key is <kbd>2</kbd>. 

<img src="/images/TN-WelcomeBE.png">
<br><br>

Press the key to cycle through existing boot environments. When the desired boot environment is selected, press <kbd>Backspace</kbd> to return to the welcome menu. Then, press <kbd>4</kbd> to reboot the system. When the system reboots, it will boot into the selected boot environment.
