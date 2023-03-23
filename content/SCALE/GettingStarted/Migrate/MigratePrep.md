---
title: "Preparing to Migrate CORE to SCALE"
description: "This article provides information CORE users plainning to migrate to SCALE need to know and have ready before beginning the one-way process."
weight: 10
aliases:
tags:
- scalemigrate
- scaleconfigure
---

{{< toc >}}

{{< include file="/content/_includes/MigrateCOREtoSCALEWarning.md" >}}

## What can or cannot migrate?

{{< include file="/content/_includes/COREMigratesList.md" type="page" >}}

## Preparing for Migration

Before you attempt to migrate your CORE system to SCALE:

1. Upgrade your CORE system to the most recent publicly-available CORE version. 
   TrueNAS systems on 12.0x or lower should update to the latest CORE 13.0 release (e.g 13.0-U2 or U4 when released) prior to migrating to SCALE. 
   CORE systems at release 13.0-Ux can use the [iso upgrade](#migrating-using-an-iso-file-to-upgrade) method to migrate to SCALE. 
   Lower releases of CORE (12.0-Ux) must do a clean install with the SCALE <file>iso</file> file.
   
2. Verify the root user is not locked. 
   Go to **Accounts > Users**, use **Edit** for the root user to view current settings and confirm **Lock User** is not selected.

3. After updating to the latest publicly-available release of CORE, download your system configuration file and a debug file. 
   Keep these files in a safe place in case you need to revert back to CORE with a clean install of the CORE <kbd>iso</kbd> file.

4. Back up your stored data files. 
   If you need to do a clean install with the SCALE <kbd>iso</kbd> file, you can import your data into SCALE.

5. Write down your network configuration information to use if you do a clean install of SCALE from an <kbd>iso</kbd> file.
   {{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}

6. Back up any critical data!

Download the SCALE [SCALE ISO file](https://www.truenas.com/download-tn-scale/) or the SCALE upgrade file and save it to your computer or a USB drive (see the **Physical Hardware tab** in [Installing SCALE]({{< relref "InstallingSCALE.md" >}})) to use if you upgrade from the physical system. 

{{< taglist tag="scalemigrate" limit="10" >}}