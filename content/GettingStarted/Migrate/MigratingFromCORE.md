---
title: "Community Migrations"
description: "Provides instructions for TrueNAS community users to migrate from FreeBSD- to Linux-based TrueNAS versions. Migration methods include using an ISO or manual update file."
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
slug: migrate-community
---

## Migration Overview

This article provides information and instructions for migrating non-Enterprise FreeBSD-based TrueNAS versions (13.0 or 13.3) to Linux-based TrueNAS (22.12 and later).

{{< enterprise >}}

{{< include file="/static/includes/EnterpriseMigrationSupport.md" >}}

The process requires an extended maintenance window, requires executing steps in the correct order to prevent issues with system configuration and operation, and additional system review post-migration to catch and correct any configuration issues.

{{< expand "Contacting TrueNAS Enterprise Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## Migration Preparation

**Review the [Migration Preparation article]({{< ref "MigratePrep" >}}) for detailed recommendations and preparation steps before attempting to migrate.**

Depending on the system configuration, migrating can be more or less complicated.

## Migration Methods

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

{{< include file="/static/includes/MigrateCOREtoSCALE24_04.md" >}}

For all migration methods, you must upgrade to the latest maintenance release of TrueNAS 13.0 or 13.3 before attempting to migrate.
See [Software Releases](https://www.truenas.com/docs/softwarereleases/) to confirm the latest version.

### Performing a Clean Install

To migrate directly from TrueNAS 13.0 or 13.3 to the latest TrueNAS Community Edition release (24.10 or later), perform a clean install using an <file>iso</file> file for the target version.
After obtaining a file from the [Software Releases](https://www.truenas.com/docs/softwarereleases/) page or [Download TrueNAS Community Edition](https://www.truenas.com/truenas-community-edition/) follow the instructions in [Installing TrueNAS]({{< ref "InstallingSCALE" >}}) to install TrueNAS Community Edition.

After logging in to the TrueNAS UI, use the system configuration file downloaded in [Migration Preparation]({{< ref "MigratePrep" >}}) to [restore system settings](#restoring-configuration) and import data storage pools.

### Updating to 24.04

You can migrate from TrueNAS 13.0 or 13.3 to 24.04 using either the update train method or a manual update file.
After migrating, you can follow the standard update process to step through each major release until you reach the latest version.

#### Select Update Train

This method is only available for non-Enterprise community systems.

To migrate to TrueNAS 24.04 using the UI **Update** screen and **Train** selector:

1. Go to **System > Update**

2. From the **Train** dropdown, choose the latest stable TrueNAS release, 24.04 (Dragonfish) or newer.

3. Review the TrueNAS migrations warning and verify the system is ready to migrate before confirming and continuing.

4. When the latest update for that chosen TrueNAS release is loaded, click **Apply Pending Update** or **Download Updates** to begin the update process documented in [Updating TrueNAS]({{< ref "UpdateSCALE.md#performing-an-automatic-update" >}}).
   It is strongly recommended to download the system configuration backup before starting the update.

5. After the system installs the update and reboots, log in and review the system configuration to ensure the migration was successful.

#### Manual Update

To migrate to TrueNAS 24.04 using the UI **Update** screen and a TrueNAS 24.04 update file:

If this process fails, retry using the iso file method above.

1. Confirm that the system is on the latest public release of TrueNAS 13.0 or 13.3.

2. Download the [TrueNAS manual update file](https://www.truenas.com/download-truenas-scale/).
   See [Software Releases](https://www.truenas.com/docs/softwarereleases/#upgrade-paths) for currently recommended update paths to make sure you download and migrate to the correct version.

3. Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

4. Click **INSTALL MANUAL UPDATE FILE**.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeInstallManualUpdate.png" alt="Install the Manual Upgrade" id="Install the Manual Upgrade" >}}

5. Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeSaveConfig.png" alt="Save the Config file" id="Save the Config file" >}}

6. Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
   Click **Choose File** and select the update file you downloaded.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeSetInstallFile.png" alt="Settings for the Manual Upgrade" id="Settings for the Manual Upgrade" >}}

   Then click **APPLY UPDATE**.

7. After the update completes, reboot the system if it does not reboot automatically.

   {{< trueimage src="/images/SCALE/SystemSettings/SidegradeRestart.png" alt="Reboot to Finish" id="Reboot to Finish" >}}

## Restoring Configuration

After TrueNAS reboots, you might need to [use the Console Setup menu to configure the primary networking interfaces]({{< ref "ConsoleSetupMenuScale" >}}) to enable GUI accessibility.

After gaining access to the UI, sign in with the admin user credentials created during installation.

Go to **System > General Settings** and [upload the system config file](/SCALETutorials/systemsettings/general/managesysconfigscale/#uploading-the-file).
Uploading a previously-saved system config file migrates your settings and including accounts, directory services, networking, services, shares, storage configuration, system setting, data protection tasks, and more.
The system reboots to apply the uploaded configuration.

After TrueNAS reboots, sign in with the root user credentials from the previous configuration.
Uploading the config file deletes the **truenas_admin** user account created during a clean install and therefore requires you to [recreate an administrative user](#recreating-the-admin-user-account).

After uploading the config file, review each area of the UI previously configured to validate that pools imported and settings migrated correctly. Begin with your network settings.

{{< hint type=info title="Component Descriptions" >}}
{{< include file="/static/includes/MigratingDescriptions.md" >}}

See [Component Naming]({{< ref "ComponentNaming" >}}) for more information.
{{< /hint >}}

Use the information gathered during your preparation to migrate to restore settings, tasks, VMs configured using the GRUB bootloader, credentials, etc. not present after uploading the config file.

{{< include file="/static/includes/WhyUploadConfig.md" >}}

## Recreating the Admin User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}
