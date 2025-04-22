---
title: "Migrating TrueNAS CORE to SCALE"
description: "Provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO or manual update file."
weight: 15
aliases:
 - /scale/gettingstarted/migrate/migratingfromcore/
 - /scale/24.10/gettingstarted/migrate/migratingfromcore/ 
tags:
- migrate
- install
---

## Migration Overview
This article provides information and instructions for migrating non-Enterprise TrueNAS CORE to SCALE.

{{< enterprise >}}
TrueNAS Enterprise customers should consult with iXsystems Support before attempting migrate to TrueNAS SCALE.

The process requires an extended maintenance window, requires executing steps in the correct order to prevent issues with system configuration and operation, and additional system review post-migration to catch and correct any configuration issues.

{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## Migration Preparation
**Review the [Migration Preparation article]({{< ref "MigratePrep" >}}) for detailed recommendations and preparation steps before attempting to migrate from CORE to SCALE.**

Depending on system configuration, migrating from CORE to SCALE can be more or less complicated.

{{< include file="/static/includes/RootToAdminUserAccount.md" >}}

## Migration Methods

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

### Clean Install
You can migrate from CORE to SCALE with a clean install using an <file>iso</file> file.
With a clean SCALE install, you need to reconfigure your CORE settings in SCALE and import your data.
Follow the instructions in the [Install]({{< ref "InstallingSCALE" >}}) articles.

After TrueNAS SCALE boots, you might need to [use the Console Setup menu to reconfigure networking interfaces]({{< ref "ConsoleSetupMenuScale" >}}) to enable GUI accessibility.
After logging in to the TrueNAS UI with the **truenas_admin** administrator account, go to **System Settings > General** and [upload the CORE system config file]({{< ref "ManageSysConfigSCALE.md#uploading-the-file" >}}).
This migrates your CORE settings, imports your pools, shares, etc. into TrueNAS.

After uploading the config file, TrueNAS reboots. 

Uploading the CORE config file deletes the new admin user account created during a clean install and therefore requires you to [recreate it](#recreating-the-admin-user-account).
Log back into TrueNAS using the CORE root user credentials, and go to **Credentials > Users** to add an administration user with full control permissions.
Test the login, then disable the root user password.

Review each area of the UI previously configured in CORE to validate network settings, pools imported, and all other settings migrated correctly.
Begin with your network settings.

{{< hint type=info title="Component Descriptions" >}}
{{< include file="/static/includes/MigratingDescriptions.md" >}}

See [Component Naming]({{< ref "ComponentNaming" >}}) for more information.
{{< /hint >}}

Use the information gathered during your migration preparation to restore settings, tasks, VMs, credentials, etc. not present in TrueNAS after uploading the config file.

### Select SCALE Update Train
This method is only available for non-Enterprise community systems and for releases 24.10 and earlier.

1. Go to **System > Update**

2. From the **Train** dropdown, choose the latest stable TrueNAS SCALE release, 24.04 (Dragonfish) or newer.

3. Review the migrations warning and verify the system is ready to migrate before confirming and continuing.

4. When the latest update for that chosen TrueNAS release is loaded, click **Apply Pending Update** or **Download Updates** to begin the update process documented in [Updating SCALE]({{< ref "UpdateSCALE.md#performing-an-automatic-update" >}}).
   It is strongly recommended to download the system configuration backup prior to starting the update.
   We strongly recommended downloading the system configuration backup prior to starting the update.

5. After the system installs the update and reboots, log in and review the system configuration to ensure the migration was successful.

After the update completes, reboot the system if it does not reboot automatically.

{{< trueimage src="/images/SCALE/SystemSettings/SidegradeRestart.png" alt="Reboot to Finish" id="Reboot to Finish" >}}

### Manual Update
Some CORE 13.0 releases can migrate using the CORE UI **Upgrade** function using a SCALE update file downloaded from the website.
To use this method, you must upgrade to the latest maintenance release.
Earlier releases of CORE must upgrade to 13.0 and then the latest maintenance release (U6.2) to use this method.
For community users, 13.3 and the latest public release is acceptable.
If this process fails, retry using the iso file method above.

1. Confirm that the TrueNAS CORE system is on the latest public release, 13.0-U6.2 (community users could have 13.3-RELEASE or newer installed).

2. Download the [SCALE manual update file](https://www.truenas.com/download-truenas-scale/).

   See [Software Releases](https://www.truenas.com/docs/softwarereleases/#upgrade-paths) for current recommended update paths to make sure you download and migrate to the correct SCALE version.

3. Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

4. Click **INSTALL MANUAL UPDATE FILE**.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeInstallManualUpdate.png" alt="Install the Manual Upgrade" id="Install the Manual Upgrade" >}}

5. Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeSaveConfig.png" alt="Save the Config file" id="Save the Config file" >}}

6. Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
   Click **Choose File** and select the <file>TrueNAS-SCALE.update</file> file you downloaded.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeSetInstallFile.png" alt="Settings for the Manual Upgrade" id="Settings for the Manual Upgrade" >}}

   Then click **APPLY UPDATE**.

7. After the update completes, reboot the system if it does not reboot automatically.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeRestart.png" alt="Reboot to Finish" id="Reboot to Finish" >}}

## Recreating the Admin User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}