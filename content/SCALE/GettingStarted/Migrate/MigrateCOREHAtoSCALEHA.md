---
title: "Enterprise HA Migrations"
description: "Discusses migrating a TrueNAS CORE High Availability (HA) system to SCALE."
weight: 25
aliases:
tags:
- migrate
- install
- HA
---

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< include file="/_includes/MigrateCoreServicesToCobiaEnterprise.md" >}}

Due to software differences between CORE and SCALE, an HA system with CORE installed cannot directly migrate to SCALE.
Instead, the process is to clean install SCALE on the system and reimport the storage pools.

**Review the [Migration Preparation article]({{< relref "MigratePrep.md" >}}) for detailed recommendations and preparation steps before attempting to migrate from CORE to SCALE.**

Enterprise customers with HA systems should contact iXsystems Support for assistance with migrating to TrueNAS SCALE.

{{< expand "iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

## Moving an HA system from CORE to SCALE

First, back up your data storage and export your pools to the server.

Review the list of preparation steps in [Preparing for SCALE UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise.md" >}}) and gather the information you need before you begin installing SCALE.

Next, do a [clean install of SCALE]({{< relref "InstallEnterpriseHASCALE.md" >}}) using the <file>iso</file> file. You must observe the proper sequence for controller 1 and controller 2, so the system comes up with controller 1 as the primary and controller 2 the standby controller.

Remember:

After installing SCALE, [configure controller 1 using the SCALE UI]({{< relref "UIConfigurationSCALE.md" >}}), configure controller 1 to the point just before you sync to peer, then power up controller 2 with SCALE already installed and at the Console setup menu screen but not configured, then on controller 1 sync to peer.

After configuring network in controller 1, import all your pools.
Creating a new pool before importing pools could result in accidentally wiping disks currently used with an exported pool.
