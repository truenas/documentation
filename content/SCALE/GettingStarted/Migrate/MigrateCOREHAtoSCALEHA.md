---
title: "Migrating TrueNAS CORE to SCALE (Enterprise HA)"
description: "This article discusses migrating a TrueNAS CORE High Availability (HA) system to SCALE."
weight: 25
aliases:
tags:
- scalemigrate
- scaleinstall
- scaleconfig
---

{{< toc >}}

{{< include file="/content/_includes/MigrateCOREtoSCALEWarning.md" type="page" >}}

Customers with CORE Enterprise High Availability (HA) systems that want to migrate to SCALE cannot directly migrate the system.
Instead, the process is to clean install SCALE on the system and reimport the storage pools.
Due to software differences between CORE and SCALE, an HA system with CORE installed cannot directly migrate to SCALE.

## Moving an HA system from CORE to SCALE

First, back up your data storage and export your pools to the server.

Review the list of preparation steps in [Preparing for SCALE UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise.md" >}}) and gather the information you need before you begin installing SCALE.

Next, do a [clean install of SCALE]({{< relref "InstallEnterpriseHASCALE.md" >}}) using the <file>iso</file> file. You must observe the proper sequence for controller 1 and controller 2 so the system comes up with controller 1 as the primary and controller 2 the standby controller.

Remember:

After installing SCALE, [configure controller 1 using the SCALE UI]({{< relref "UIConfigurationSCALE.md" >}}), configure controller 1 to the point just before you sync to peer, then power up controller 2 with SCALE already installed and at the Console setup menu screen but not configured, then on controller 1 sync to peer.

After configuring network in controller 1, import all your pools.
Creating a new pool before importing pools could result in accidentally wiping disks currently used with an exported pool.

{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}
{{< taglist tag="scaleconfig" limit="10" title="Related Configuration Articles" >}}
