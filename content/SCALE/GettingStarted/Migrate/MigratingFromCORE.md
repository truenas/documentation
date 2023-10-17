---
title: "Migrating TrueNAS CORE to SCALE"
description: "Provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO file or a manual update file."
weight: 15
aliases:
 - /scale/gettingstarted/migratingfromcore/
tags:
- scalemigrate
- scaleinstall
---

{{< toc >}}

## Migration Overview

This article provides information and instructions for migrating from TrueNAS CORE to SCALE.

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< include file="/_includes/MigrateCoreServicesToCobia.md" >}}

### What Can and Cannot Migrate?

{{< include file="/_includes/COREMigratesList.md" >}}

### Migration Methods
You can migrate from CORE to SCALE through an upgrade or clean install using an <file>iso</file> file.
Alternately, some CORE 13.0 releases can migrate using the CORE UI Upgrade function with the SCALE update file downloaded from the website.
The easiest method is to upgrade from the CORE system UI, but your system must have the CORE 13.0 major release installed to use this method.
Note the CORE 13.0-U3 release might not work when updating from the CORE UI using the Update function.

If you do a clean-install with a SCALE <file>iso</file> file, you need to reconfigure your CORE settings in SCALE and import your data.

## Migrating Using an ISO File to Upgrade

{{< include file="/_includes/ISOUpgrades.md" >}}

When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "/SCALE/SCALEUIReference/Network/_index.md" >}}) to enable GUI accessibility.

## Migrating using the CORE UI Manual Update 

{{< hint type=warning >}}
Upgrade CORE to the latest publicly-available release before attempting to migrate from CORE to SCALE!
{{< /hint >}}

This method of using the CORE UI Manual Update to migrate using a SCALE update file might fail if using CORE 13.0-U3 but if using CORE 13.0-U2 it should work. 
If it fails, retry using the [iso file upgrade process](#migrating-using-an-iso-file-to-upgrade) in the section above.

Take all the preparation steps mentioned in [Preparing for Migration]({{< relref "MigratePrep.md" >}}).

Start by downloading the [SCALE manual update file](https://www.truenas.com/download-truenas-scale/).
Confirm that the TrueNAS CORE system is on the latest public release, 13.0-U3 or better.

Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

Click **INSTALL MANUAL UPDATE FILE**.

![SCALEManualSidegrade](/images/SCALE/SystemSettings/SidegradeInstallManualUpdate.png "Install the Manual Upgrade")

Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.
This is recommended but is not required.

![SCALEConfigSidegrade](/images/SCALE/SystemSettings/SidegradeSaveConfig.png "Save the Config file")

Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
Click **Choose File** and select the <kbd>TrueNAS-SCALE.update</kbd> file you downloaded.

![SCALEFileSidegrade](/images/SCALE/SystemSettings/SidegradeSetInstallFile.png "Settings for the Manual Upgrade")

Then click **APPLY UPDATE**.
  
After the update completes, reboot the system if it does not reboot automatically.

![SCALESidegradeReboot](/images/SCALE/SystemSettings/SidegradeRestart.png  "Reboot to Finish")

After migration, we strongly recommend you review each area of the UI that was previously configured in CORE.

## Migrating by Clean Install

If it becomes necessary to do a clean install to migrate your CORE system to SCALE using the <file>iso</file> file, follow the instructions in the [Install]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}) articles.

{{< include file="/_includes/RootToAdminUserAccount.md" >}}

{{< taglist tag="scalemigrate" limit="10" >}}
{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
