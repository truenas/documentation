---
title: "Migrating TrueNAS CORE to SCALE"
description: "Provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO or manual update file."
weight: 15
tags:
- migrate
- install
keywords:
- enterprise data storage solution
- data migration
- nas data storage
- RAIDz
- spinning disk
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

**Review the [Migration Preparation article]({{< relref "MigratePrep.md" >}}) for detailed recommendations and preparation steps before attempting to migrate from CORE to SCALE.**

Depending on system configuration, migrating from CORE to SCALE can be more or less complicated.

## Migration Methods

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

### Clean Install
You can migrate from CORE to SCALE with a clean install using an <file>iso</file> file.
With a clean SCALE install, you need to reconfigure your CORE settings in SCALE and import your data.
Follow the instructions in the [Install]({{< relref "InstallingSCALE.md" >}}) articles.

When TrueNAS SCALE boots, you might need to [use the Console Setup Menu to configure networking interfaces]({{< relref "ConsoleSetupMenuScale.md" >}}) to enable GUI accessibility.
After logging in to the TrueNAS SCALE UI, use a system configuration file to restore the system settings to the SCALE installation and import the data storage pools.

### Select SCALE Update Train

This method is only available for non-Enterprise community systems.

1. Go to **System > Update**

2. From the **Train** dropdown, choose the latest stable TrueNAS SCALE release, 24.04 (Dragonfish) or newer.

3. Review the SCALE migrations warning and verify the system is ready to migrate before confirming and continuing.

4. When the latest update for that chosen TrueNAS release is loaded, click **Apply Pending Update** or **Download Updates** to begin the update process documented in [Updating SCALE]({{< relref "UpdateSCALE.md#performing-an-automatic-update" >}}).
   It is strongly recommended to download the system configuration backup prior to starting the update.

5. After the system installs the update and reboots, log in and review the system configuration to ensure the migration was successful.

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

After TrueNAS SCALE reboots, you might need to [use the Console Setup menu to configure the primary networking interfaces]({{< relref "ConsoleSetupMenuScale.md" >}}) to enable GUI accessibility.

After gaining access to the UI, sign in with the admin user credentials created during installation.

Go to **System > General Settings** and [upload the system config file](/scale/scaletutorials/systemsettings/general/managesysconfigscale/#uploading-the-file).
This migrates your CORE settings, imports your pools, shares, etc. into SCALE.
The system reboots to apply the uploaded configuration.

After TrueNAS SCALE reboots, sign in with the root user credentials used in CORE.
Uploading the CORE config file deletes the **truenas_admin** user account created during a clean install and therefore requires you to [recreate an administrative user](#recreating-the-admin-user-account).

After uploading the config file, review each area of the UI previously configured in CORE to validate pools imported and settings migrated correctly. Begin with your network settings.

{{< hint type=info title="Component Descriptions" >}}
{{< include file="/static/includes/MigratingDescriptions.md" >}}

See [Component Naming]({{< relref "ComponentNaming.md" >}}) for more information.
{{< /hint >}}

Use the information gathered during your preparation to migrate to restore settings, tasks, VMs, credentials, etc. not present in SCALE after uploading the config file.

## Recreating the Admin User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}
