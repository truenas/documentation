---
title: "Migrating TrueNAS CORE to SCALE"
description: "Provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO or manual update file."
weight: 15
aliases:
 - /scale/gettingstarted/migratingfromcore/
tags:
- migrate
- install
---

## Migration Overview

This article provides information and instructions for migrating non-Enterprise TrueNAS CORE to SCALE.

## Migration Preparation

**Review the [Migration Preparation article]({{< relref "MigratePrep.md" >}}) for detailed recommendations and preparation steps before attempting to migrate from CORE to SCALE.**

Depending on system configuration, migrating from CORE to SCALE can be more or less complicated.

{{< include file="/_includes/RootToAdminUserAccount.md" >}}

## Migration Methods

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

### Clean Install
You can migrate from CORE to SCALE with a clean install using an <file>iso</file> file.
With a clean SCALE install, you need to reconfigure your CORE settings in SCALE and import your data.
Follow the instructions in the [Install]({{< relref "InstallingSCALE.md" >}}) articles.

When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "ConsoleSetupMenuScale.md" >}}) to enable GUI accessibility.
After logging in to the TrueNAS SCALE UI, use a system configuration file to restore the system settings to the SCALE installation and import the data storage pools.

### Manual Update
Some CORE 13.0 releases can migrate using the CORE UI **Upgrade** function using a SCALE update file downloaded from the website.
To use this method, you must upgrade to the latest maintenance release.

Earlier releases of CORE must upgrade to 13.0 and then the latest maintenance release U6.1 to use this method. 
If this process fails, retry using the iso file method above.

1. Confirm that the TrueNAS CORE system is on the latest public release, 13.0-U6.1 or newer.

2. Download the [SCALE manual update file](https://www.truenas.com/download-truenas-scale/).

3. Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

4. Click **INSTALL MANUAL UPDATE FILE**.

   ![SCALEManualSidegrade](/images/SCALE/SystemSettings/SidegradeInstallManualUpdate.png "Install the Manual Upgrade")

5. Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.

   ![SCALEConfigSidegrade](/images/SCALE/SystemSettings/SidegradeSaveConfig.png "Save the Config file")

6. Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
   Click **Choose File** and select the <file>TrueNAS-SCALE.update</file> file you downloaded.

   ![SCALEFileSidegrade](/images/SCALE/SystemSettings/SidegradeSetInstallFile.png "Settings for the Manual Upgrade")

   Then click **APPLY UPDATE**.

7. After the update completes, reboot the system if it does not reboot automatically.

   ![SCALESidegradeReboot](/images/SCALE/SystemSettings/SidegradeRestart.png  "Reboot to Finish")

After TrueNAS SCALE reboots, sign in with the root user credentials used in CORE.
Uploading the CORE config file deletes the admin user account created during a clean install and therefore requires you to [recreate it](#recreating-the-admin-user-account).

After gaining access to the UI, you might need to [use the Shell to configure the primary networking interfaces]({{< relref "ConsoleSetupMenuScale.md" >}}) to enable GUI accessibility.

After booting and gaining access to the UI, go to **System Settings > General** and [upload the system config file](/scale/scaletutorials/systemsettings/general/managesysconfigscale/#uploading-the-file). 
This migrates your CORE settings, imports your pools, shares, etc. into SCALE.

After uploading the config file, review each area of the UI previously configured in CORE to validate pools imported and settings migrated correctly. Begin with your network settings.

Use the information gathered during your preparation to migrate to restore settings, tasks, VMs, credentials, etc. not present in SCALE after uploading the config file.

## Recreating the Admin User Account
{{< include file=/_includes/AddAdminUserAccount.md" >}}

