---
title: "Migrating TrueNAS CORE to SCALE"
description: "Provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO or manual update file."
weight: 15
aliases:
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

You can migrate from 13.0-U6.x to 24.10 with a clean install using an <file>iso</file> file and 13.0 or 13.3 configuration file upload.
With a clean install, you need to review any settings imported from your configuration file and import your storage pools.
Follow the instructions in the [Install]({{< ref "InstallingSCALE" >}}) articles.

After TrueNAS boots, you might need to [use the Console Setup menu to reconfigure networking interfaces]({{< ref "ConsoleSetupMenuScale" >}}) to enable GUI accessibility.
After logging in to the TrueNAS UI with the **truenas_admin** administrator account, go to **System > General Settings** and [upload the 13.0-U6.x system config file]({{< ref "ManageSysConfigSCALE.md#uploading-the-file" >}}).
This migrates your settings, imports your pools, shares, etc. into 24.10.

After uploading the config file, TrueNAS reboots.

Uploading the CORE config file deletes the new admin user account created during a clean install and therefore requires you to [recreate it](#recreating-the-admin-user-account).
Log back into TrueNAS using the CORE root user credentials, and go to **Credentials > Users** to add an administration user with full control permissions.
Test the login, then disable the root user password.

Review each area of the UI previously configured in CORE to validate network settings, pools imported, and all other settings migrated correctly.
Begin with your network settings.

## Migrate to 24.04 and Update

Non-Enterprise TrueNAS 13.0 and 13.3 installations can migrate to 24.04 using update trains.
See the [24.04 Migration documentation](https://www.truenas.com/docs/scale/24.04/gettingstarted/migrate/migratingfromcore/) for details on this method.

After migrating to 24.04, you can use the [24.04 update options](https://www.truenas.com/docs/scale/24.04/scaletutorials/systemsettings/updatescale/) to update to 24.10 as a regular, non-migration update.

## Recreating the Admin User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}
