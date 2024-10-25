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

**Review the [Migration Preparation article]({{< relref "MigratePrep.md" >}}) for detailed recommendations and preparation steps before attempting to migrate from CORE to SCALE.**

Depending on system configuration, migrating from CORE to SCALE can be more or less complicated.

{{< include file="/static/includes/RootToAdminUserAccount.md" >}}

## Migration Methods

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

### Clean Install
You can migrate from CORE to SCALE with a clean install using an <file>iso</file> file.
With a clean SCALE install, you need to reconfigure your CORE settings in SCALE and import your data.
Follow the instructions in the [Install]({{< relref "InstallingSCALE.md" >}}) articles.

After TrueNAS SCALE boots, you might need to [use the Console Setup menu to reconfigure networking interfaces]({{< relref "ConsoleSetupMenuScale.md" >}}) to enable GUI accessibility.
After logging in to the TrueNAS UI with the **truenas_admin** administrator account, go to **System Settings > General** and [upload the CORE system config file]({{< relref "ManageSysConfigSCALE.md#uploading-the-file" >}}).
This migrates your CORE settings, imports your pools, shares, etc. into TrueNAS.

After uploading the config file, TrueNAS reboots. 

Uploading the CORE config file deletes the new admin user account created during a clean install and therefore requires you to [recreate it](#recreating-the-admin-user-account).
Log back into TrueNAS using the CORE root user credentials, and go to **Credentials > Users** to add an administration user with full control permissions.
Test the login, then disable the root user password.

Review each area of the UI previously configured in CORE to validate network settings, pools imported, and all other settings migrated correctly.
Begin with your network settings.

{{< hint type=info title="Component Descriptions" >}}
{{< include file="/static/includes/MigratingDescriptions.md" >}}

See [Component Naming]({{< relref "ComponentNaming.md" >}}) for more information.
{{< /hint >}}

Use the information gathered during your migration preparation to restore settings, tasks, VMs, credentials, etc. not present in TrueNAS after uploading the config file.

## Recreating the Admin User Account

{{< include file="/static/includes/AddAdminUserAccount.md" >}}