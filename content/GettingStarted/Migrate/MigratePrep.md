---
title: "Preparing to Migrate"
description: "Guides CORE users through preparation elements and steps before beginning the one-way CORE to SCALE migration process."
weight: 10
aliases:
tags:
- migrate
---

{{< enterprise >}}
CORE Enterprise customers should contact iXsystems Support for assistance with the process of moving from CORE to SCALE, especially customers with HA systems.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

## What can or cannot migrate?

{{< include file="/static/includes/WhatDoesNotMigrate.md" >}}

## Preparing for Migration

Read this article before you attempt to migrate your 13.0-U6.x system to TrueNAS 24.10.

{{< hint type="warning" title="Using USB Devices for Backups" >}}
We strongly recommend not using USB flash drives or USB-attached drives for backups as these can have issues, including with recovering backed up files.
For more information on using USB drives and devices in general, read the [CORE Hardware Guide](https://www.truenas.com/docs/core/gettingstarted/corehardwareguide/).
If you must use a USB type device, verify you can access files on the device before you upgrade/migrate to SCALE.
{{< /hint >}}

1. Upgrade your CORE system to the most recent publicly-available CORE major maintenance release version.
   CORE systems at the latest 13.0 release can use the [iso upgrade](#migrating-using-an-iso-file-to-upgrade) method to migrate to SCALE.

2. Migrate [GELI-encrypted pools](https://www.truenas.com/docs/core/coretutorials/storage/pools/storageencryption/#geli-pool-migrations) to a non-GELI-encrypted pool before upgrading from CORE 12.0x or earlier releases!

3. Verify the root user is not locked.
   Go to **Accounts > Users**, select the root user and click **Edit** to view current settings and confirm **Lock User** is not selected.

4. Write down, copy, or take screenshots of settings to use in the event of a post-upgrade/migration issue or to duplicate in SCALE.
   Use the checklist below to guide you through this step:

   <input type="checkbox"> Check the release notes for each major release version. Release notes contain information on feature changes and deprecated services you need to be aware of. Record the settings for deprecated services, and take the steps documented in the release notes to deploy an alternate solution if you choose.

   <input type="checkbox"> System dataset - Identify your system dataset. If you want to use the same dataset for the system dataset in SCALE, note the pool and system dataset.
   When you set up the first required pool on SCALE import this pool first.

   <input type="checkbox"> VMs - If you have virtual machines configured in CORE, write down or screenshot network and other setting information.

   <input type="checkbox"> Plugins or jails - Plugins and jails do not migrate. Record settings for each plugin/jail and back up the data associated with each.

   <input type="checkbox"> CAs, certificates, CSRs - If you added certificate authorities, certificates, or certificate signing requests to CORE, they should migrate with the system config file, but as a precaution against possible malformed certificates copy private and public certificate keys and save each, then copy or screenshot all CA, certificate, and CSR setting. Make sure you have backed-up copies of certificates used in CORE to import or configure in SCALE.

   <input type="checkbox"> Usernames beginning with (0-9) - Review local user account names and rename or replace these with a letter or underscore before migrating.

   <input type="checkbox"> Tunables on CORE - SCALE does not use **Tunables** the way CORE does. SCALE allows adding script configurations on the **System > Advanced Settings** screen, using the **Sysctl** widget.

   <input type="checkbox"> Init/shutdown scripts - If using init/shutdown scripts in CORE, copy them or take a screenshot to add them to SCALE.

   <input type="checkbox"> Cron jobs - If configured in CORE, copy or use screenshots of cron job scripts if you want to add the same jobs in SCALE.

   <input type="checkbox"> Global self-encrypting drive (SED) Password - Unlock these drives in CORE before you clean install SCALE. Write down the SED password configured in CORE to use in SCALE.

   <input type="checkbox"> Credentials - Copy or write down the credentials for SSH connections and keypairs, and any cloud service backup providers configured in CORE if you do not have the credential settings saved in other files kept secured outside of CORE.

   <input type="checkbox"> Data protection tasks - Write down or take screenshots of replication, periodic snapshot, cloud sync, or other task settings to reconfigure these in SCALE if you want to duplicate these tasks.

5. Write down or take screenshots of your network configuration information.
   Capture the global network settings, interfaces (LAGG, VLAN, bridge settings), static IP addresses, and aliases.

   FreeBSD and Linux use different nomenclature for network interfaces, bridges, LAGGs, and VLANs.
   Because of the difference, network settings can either get lost or not transfer which means you have no network connectivity.
   You can find interface names in the CORE UI on the **Network > Interfaces** screen.

   When using a TrueNAS Enterprise system from iXsystems, refer to the network port ID manuals of your [TrueNAS Systems](https://www.truenas.com/docs/hardware/) to find the network port assignments in TrueNAS SCALE.
   When using custom hardware for TrueNAS, refer to the manual or documentation provided with your system or locate this information on your server hardware and take note of it.

   If there are issues after a clean install of SCALE from an <file>iso</file> file or you are not using DHCP for network and interface configuration, use the information from your CORE settings to configure your SCALE network settings and to reconfigure your static IPs or aliases.
      {{< include file="/static/includes/NetworkInstallRequirementsSCALE.md" >}}

6. Migrate the deprecated S3 MinIO service (if in use). See [services deprecated in SCALE](#migrating-from-deprecated-services).
   This is a lengthy process depending on the amount of data stored while using the S3 service.
   Read and follow instructions in [Migrating MinIO Data from CORE to SCALE](https://www.truenas.com/docs/solutions/miniocoretoscale/)!

   Make sure S3 MinIO data is backed up as a precaution. The migration process from the S3 service requires first [migrating to the MinIO plugin in TrueNAS CORE](https://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/#migrating-from-s3-service-to-minio-plugin), migrating from CORE to SCALE, then installing the SCALE MinIO app and importing S3 data.

7. Back up any critical data.

8. Download your [system configuration file](https://www.truenas.com/docs/core/coretutorials/systemconfiguration/usingconfigurationbackups/) and a [debug file](https://www.truenas.com/docs/core/uireference/system/advanced/).
   After updating to the latest publicly-available release of CORE and making any changes to CORE user accounts or any other settings download these files and keep them in a safe place and where you can access them if you need to revert to CORE with a clean install using the CORE <file>iso</file> file.

After completing the steps that apply to your CORE system listed above, download the [SCALE ISO file](https://www.truenas.com/download-tn-scale/) and save it to your computer.
Burn the iso to a USB drive (see **Installing on Physical Hardware** in [Installing SCALE]({{< ref "InstallingSCALE.md#installing-on-physical-hardware" >}})) when upgrading a physical system.
