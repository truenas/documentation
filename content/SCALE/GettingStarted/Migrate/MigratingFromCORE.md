---
title: "Migrating from TrueNAS CORE to SCALE"
description: "This article provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO file or a manual update file."
weight: 20
aliases:
 - /scale/gettingstarted/migratingfromcore/
tags:
- scalemigrate
- scaleinstall
---

{{< toc >}}

## Migration Overview

This article provides information and instructions for migrating from TrueNAS CORE to SCALE.

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" type="page" >}}

### What Can and Cannot Migrate?

{{< include file="/_includes/COREMigratesList.md" type="page" >}}

### Migration Methods
You can migrate from CORE to SCALE through an upgrade or clean install using an <file>iso</file> file.
Alternately, some CORE 13.0 releases can migrate using the CORE UI Upgrade function with the SCALE update file downloaded from the website.
The easiest method is to upgrade from the CORE system UI, but your system must have the CORE 13.0 major release installed to use this method.
Note the CORE 13.0-U3 release might not work when updating from the CORE UI using the Update function.

If you do a clean-install with a SCALE <file>iso</file> file, you need to reconfigure your CORE settings in SCALE and import your data.

## Migrating Using an ISO File to Upgrade

Start by plugging the USB drive with the saved [SCALE ISO file](https://www.truenas.com/download-tn-scale/) into a USB port on the physical CORE system that you want to sidegrade and then boot or reboot the system. 

At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to select a boot device, then select the USB drive with the SCALE <file>.iso<file>.

When the SCALE console setup screen displays, select **Install/Upgrade**.

![SCALEUpgrade1](/images/SCALE/SCALEUpgrade1.png "Install/Upgrade SCALE")
 
Next, select your TrueNAS boot disk.
 
![SCALEUpgrade02](/images/SCALE/ScaleSelectBootDrive.png "Select the boot drive")

The installer asks if you want to preserve your existing configuration or start with a fresh installation. We recommend selecting **Upgrade Install** when migrating from CORE to SCALE to keep your configuration data. Then select **Install in new boot environment**.

![SCALEUpgrade2](/images/SCALE/SCALEUpgrade2.png "Preserve Existing Configuration")

![SCALEUpgrade3](/images/SCALE/SCALEUpgrade3.png "Install in new boot environment")

After choosing to install in new boot environment, the installer warns that SCALE installs into the boot pool previously used for CORE. Select **Yes**.

![SCALEUpgrade4](/images/SCALE/SCALEUpgrade4.png "Proceed with the upgrade")

After the installation completes, reboot the system and remove the USB with the SCALE <file>.iso<file> file.

When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "/SCALE/SCALEUIReference/Network/_index.md" >}}) to enable GUI accessibility.

## Migrating using the CORE UI Manual Update 

{{< hint type=warning >}}
Upgrade CORE to the latest publicly-available release before attempting to migrate from CORE to SCALE!
{{< /hint >}}

This method of using the CORE UI Manual Update to migrate using a SCALE update file might fail if using CORE 13.0-U3 but if using CORE 13.0-U2 it should work. 
If it fails, retry using the [iso file upgrade process](#migrating-using-an-iso-file-to-upgrade) in the section above.

Take all the preparation steps mentioned in [Preparing for Migration](#preparing-for-migration).

Start by downloading the [SCALE manual update file](https://www.truenas.com/download-truenas-scale/).
Confirm that the TrueNAS CORE system is on the latest public release, 13.0-U3 or better.

Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

Click **INSTALL MANUAL UPDATE FILE**.
![SCALEManualSidegrade](/images/SCALE/SidegeadeInstallManualUpdate.png "Install the Manual Upgrade")

Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.
This is recommended but is not required.
![SCALEConfigSidegrade](/images/SCALE/SidegradeSaveConfig.png "Save the Config file")

Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
Click **Choose File** and select the <kbd>TrueNAS-SCALE.update</kbd> file you downloaded.

![SCALEFileSidegrade](/images/SCALE/SidegradeSetInstallFile.png "Settings for the Manual Upgrade")

Then click **APPLY UPDATE**.
  
After the update completes, reboot the system if it does not reboot automatically.

![SCALESidegradeReboot](/images/SCALE/SidegradeRestart.png  "Reboot to Finish")

After migration, we strongly recommend you review each area of the UI that was previously configured in CORE.

## Migrating by Clean Install

If it becomes necessary to do a clean install to migrate your CORE system to SCALE using the <file>iso</file> file, follow the instructions in the [Install]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}) articles.


{{< taglist tag="scalemigrate" limit="10" >}}
{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
