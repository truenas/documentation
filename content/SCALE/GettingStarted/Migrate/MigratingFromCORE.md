---
title: "Community Migrations"
description: "Provides instructions for TrueNAS community users to migrate from FreeBSD- to Linux-based TrueNAS versions. Migration methods include using an ISO or manual update file."
weight: 15
aliases:
 - /scale/gettingstarted/migratingfromcore/
tags:
- migrate
- install
keywords:
- enterprise data storage solution
- data migration
- nas data storage
- RAIDz
- spinning disk
slug: migrate-community
---

## Migration Overview

This article provides information and instructions for migrating non-Enterprise FreeBSD-based TrueNAS versions (13.0 or 13.3) to Linux-based TrueNAS (24.04).

{{< enterprise >}}
TrueNAS Enterprise customers should consult with TrueNAS Enterprise Support before attempting migrate.

The process requires an extended maintenance window, requires executing steps in the correct order to prevent issues with system configuration and operation, and additional system review post-migration to catch and correct any configuration issues.

{{< expand "Contacting TrueNAS Enterprise Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## Migration Preparation

**Review the [Migration Preparation article]({{< ref "MigratePrep" >}}) for detailed recommendations and preparation steps before attempting to migrate.**

Depending on system configuration, migrating can be more or less complicated.

## Migration Methods

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

### Clean Install
You can migrate with a clean install using an <file>iso</file> file.
With a clean install, you need to reconfigure your settings and import your data.
Follow the instructions in the [Install]({{< ref "InstallingSCALE" >}}) articles.

When TrueNAS boots, you might need to [use the Console Setup Menu to configure networking interfaces]({{< ref "ConsoleSetupMenuScale" >}}) to enable GUI accessibility.
After logging in to the TrueNAS UI, use a system configuration file to restore the system settings and import the data storage pools.

### Select Update Train

This method is only available for non-Enterprise community systems.

1. Go to **System > Update**

2. From the **Train** dropdown, choose the latest stable TrueNAS release, 24.04 (Dragonfish) or newer.

3. Review the TrueNAS migrations warning and verify the system is ready to migrate before confirming and continuing.

4. When the latest update for that chosen TrueNAS release is loaded, click **Apply Pending Update** or **Download Updates** to begin the update process documented in [Updating TrueNAS]({{< ref "UpdateSCALE.md#performing-an-automatic-update" >}}).
   It is strongly recommended to download the system configuration backup prior to starting the update.

5. After the system installs the update and restarts, log in and review the system configuration to ensure the migration was successful.

### Manual Update
Some TrueNAS 13.0 or 13.3 releases can migrate using the UI **Upgrade** function using a TrueNAS 24.04 update file downloaded from the website.
To use this method, you must upgrade to the latest maintenance release.

Earlier releases must upgrade to 13.0 and then the latest maintenance release (U6.2) to use this method.
For community users, 13.3 and the latest public release is acceptable.
If this process fails, retry using the iso file method above.

1. Confirm that the system is on the latest public release, 13.0-U6.2 (community users could have 13.3-RELEASE or newer installed).

2. Download the [TrueNAS manual update file](https://www.truenas.com/download-truenas-scale/).
   See [Software Releases]({{< ref "TrueNASUpgrades/#upgrade-paths" >}}) for current recommended update paths to make sure you download and migrate to the correct version.

3. Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

4. Click **INSTALL MANUAL UPDATE FILE**.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeInstallManualUpdate.png" alt="Install the Manual Upgrade" id="Install the Manual Upgrade" >}}

5. Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeSaveConfig.png" alt="Save the Config file" id="Save the Config file" >}}

6. Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
   Click **Choose File** and select the update file you downloaded.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeSetInstallFile.png" alt="Settings for the Manual Upgrade" id="Settings for the Manual Upgrade" >}}

   Then click **APPLY UPDATE**.

7. After the update completes, restart the system if it does not restart automatically.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeRestart.png" alt="Restart to Finish" id="Restart to Finish" >}}

After TrueNAS restarts, to enable GUI accessibility, you might need to use the [Console Setup menu]({{< ref "ConsoleSetupMenuScale" >}}) to configure the primary networking interfaces.

After gaining access to the UI, sign in with the admin user credentials created during installation.

Go to **System > General Settings** and [upload the system config file](/scale/scaletutorials/systemsettings/general/managesysconfigscale/#uploading-the-file).
This migrates your settings, imports your pools, shares, etc.
The system restarts to apply the uploaded configuration.

After TrueNAS restarts, sign in with the root user credentials from the previous configuration.
Uploading the config file deletes the **truenas_admin** user account created during a clean install and therefore requires you to [recreate an administrative user](#recreating-the-admin-user-account).

After uploading the config file, review each area of the UI previously configured to validate pools imported and settings migrated correctly. Begin with your network settings.

{{< hint type=info title="Component Descriptions" >}}
{{< include file="/static/includes/MigratingDescriptions.md" >}}

See [Component Naming]({{< ref "ComponentNaming" >}}) for more information.
{{< /hint >}}

Use the information gathered during your preparation to migrate to restore settings, tasks, VMs configured using the GRUB bootloader, credentials, etc. not present after uploading the config file.

## Recreating the Admin User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}
