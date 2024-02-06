---
title: "Migrating TrueNAS CORE to SCALE"
description: "Provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO file or a manual update file."
weight: 15
aliases:
 - /scale/gettingstarted/migratingfromcore/
tags:
- migrate
- install
---

## Migration Overview

This article provides information and instructions for migrating non-Enterprise TrueNAS CORE to SCALE.

### Migration Preparation

Depending on system configuration, migrating from CORE to SCALE can be more or less complicated.

{{< include file="/_includes/MigrateCoreServicesToCobia.md" >}}

{{< include file="/_includes/RootToAdminUserAccount.md" >}}

**Review the [Migration Preparation article]({{< relref "MigratePrep.md" >}}) for detailed recommendations and preparation steps before attempting to migrate from CORE to SCALE.**

### Migration Methods

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

#### Clean Install

You can migrate from CORE to SCALE with a clean install using an <file>iso</file> file.
With a clean SCALE install, you need to reconfigure your CORE settings in SCALE and import your data.
Follow the instructions in the [Install]({{< relref "InstallingSCALE.md" >}}) articles.

When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "ConsoleSetupMenuScale.md" >}}) to enable GUI accessibility.
After logging in to the TrueNAS SCALE UI, use a system configuration file to restore the system settings to the SCALE installation and import the data storage pools.

#### Manual Update

Alternately, some CORE 13.0 releases can migrate using the CORE UI Upgrade function with the SCALE update file downloaded from the website.
This requires the CORE 13.0 major release is installed and updated to the latest maintenance release to use this method.
If this process fails, retry using the iso file method above.

1. Confirm that the TrueNAS CORE system is on the latest public release, 13.0-U6.1 or newer.

2. Download the [SCALE manual update file](https://www.truenas.com/download-truenas-scale/).

3. Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

4. Click **INSTALL MANUAL UPDATE FILE**.

   ![SCALEManualSidegrade](/images/SCALE/SystemSettings/SidegradeInstallManualUpdate.png "Install the Manual Upgrade")

5. Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.

   ![SCALEConfigSidegrade](/images/SCALE/SystemSettings/SidegradeSaveConfig.png "Save the Config file")

6. Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
   Click **Choose File** and select the <kbd>TrueNAS-SCALE.update</kbd> file you downloaded.

   ![SCALEFileSidegrade](/images/SCALE/SystemSettings/SidegradeSetInstallFile.png "Settings for the Manual Upgrade")

   Then click **APPLY UPDATE**.

7. After the update completes, reboot the system if it does not reboot automatically.

   ![SCALESidegradeReboot](/images/SCALE/SystemSettings/SidegradeRestart.png  "Reboot to Finish")

8. When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "ConsoleSetupMenuScale.md" >}}) to enable GUI accessibility.

After migrating and restoring any system configuration files or importing any pools, review each area of the UI that was previously configured in CORE to validate settings migrated correctly.
