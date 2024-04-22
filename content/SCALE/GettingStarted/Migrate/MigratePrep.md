---
title: "Preparing to Migrate"
description: "Guides CORE users through preparation elements and steps before beginning the one-way CORE to SCALE migration process."
weight: 10
tags:
- migrate
---


{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

## What can or cannot migrate?

{{< include file="/static/includes/COREMigratesList.md" >}}

## Preparing for Migration
Read this article before you attempt to migrate your CORE system to a SCALE major version.
{{< hint type="warning" title="Using USB Devices for Backups" >}}
We strongly recommend not using USB flash drives or USB-attached drives for backups as these can have issues, including with recovering backed up files.
For more information on using USB drives and devices in general, read the [CORE Hardware Guide](https://www.truenas.com/docs/core/gettingstarted/corehardwareguide/).
If you must use a USB type device, verify you can access files on the device before you upgrade/migrate to SCALE.
{{< /hint >}}
{{< enterprise >}}
CORE Enterprise customers are encouraged to contact Support for assistance with the process of moving from CORE to SCALE, especially customers with HA systems.
{{< /enterprise >}}

1. Upgrade your CORE system to the most recent publicly-available CORE major maintenance release version.
   TrueNAS systems on 12.0x or earlier should upgrade to the latest CORE 13.0 release (e.g 13.0-U6.1 or newer) prior to migrating to SCALE.
   CORE systems at the latest 13.0 release can use the [iso upgrade](#migrating-using-an-iso-file-to-upgrade) method to migrate to SCALE.

2. Migrate [GELI-encrypted pools](https://www.truenas.com/docs/core/coretutorials/storage/pools/storageencryption/#geli-pool-migrations) to a non-GELI-encrypted pool before upgrading from CORE 12.0x or earlier releases!

3. Verify the root user is not locked.
   Go to **Accounts > Users**, select the root user and click **Edit** to view current settings and confirm **Lock User** is not selected.

4. Write down, copy, or take screenshots of settings to use in the event of a post-upgrade/migration issue or to duplicate in SCALE.
   Use the checklist below to guide you through this step:

   <input type="checkbox"> System dataset - Identify your system dataset. If you want to use the same dataset for the system dataset in SCALE, note the pool and system dataset.
   When you set up the first required pool on SCALE import this pool first.

   <input type="checkbox"> Deprecated services - Record the settings for [services deprecated in SCALE](#migrating-from-deprecated-services).

   <input type="checkbox"> VMs - If you have virtual machines configured in CORE, write down or screenshot network and other setting information.

   <input type="checkbox"> Plugins or jails - Plugins and jails do not migrate. Record settings for each plugin/jail and back up the data associated with each.

   <input type="checkbox"> CAs, certificates, CSRs - If you added certificate authorities, certificates, or certificate signing requests to CORE, they should migrate with the system config file, but as a precaution against possible malformed certificates copy private and public certificate keys and save each, then copy or screenshot all CA, certificate, and CSR setting. Make sure you have backed-up copies of certificates used in CORE to import or configure in SCALE.

   <input type="checkbox"> Usernames beginning with (0-9) - Review local user account names and rename or replace these with a letter or underscore before migrating.

   <input type="checkbox"> Tunables on CORE - SCALE does not use **Tunables** the way CORE does. SCALE allows adding script configurations on the **System Settings > Advanced** screen, using the **Sysctl** widget.

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
Burn the iso to a USB drive (see **Installing on Physical Hardware** in [Installing SCALE]({{< relref "InstallingSCALE.md #installing-on-physical-hardware" >}})) when upgrading a physical system.

## Deprecated Services in SCALE
The built-in services listed in this section are available in CORE, but deprecated in SCALE 22.12.3 (Bluefin) and removed in later SCALE releases.
They require attention before attempting to migrate to SCALE.

Each of the sections has information that can help you determine the best steps forward to secure any critical data before attempting to migrate from CORE to SCALE.
They provide details on transitioning from that service to an application with the functionality of the deprecated service.

TrueNAS SCALE has [apps]({{< relref "/SCALE/SCALETutorials/Apps/_index.md" >}}) you can deploy as replacements for these services.
SCALE 24.04 provides the option to force an upgrade without converting deprecated services to apps.
The force option is not recommended for the S3 service as forcing the upgrade results in losing access to and the ability to recover the MinIO S3 data.

See [SCALE Bluefin Deprecated Services](https://www.truenas.com/docs/scale/22.12/gettingstarted/scaledeprecatedfeatures/) for more information.

{{< expand "Migrating from DDNS Service" "v" >}}
Review and write down or take screenshots of your Dynamic DNS service provider, domain, IP address, port number, URL, and credential (username and password) settings to use when you reconfigure in a replacement app.
If establishing a new provider, create the user account before proceeding. Otherwise, use the existing provider details.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add a new non-root administrative user.
Note the UID and GID for this new user to enter in the application configuration screen.

Install a replacement application such as **DDNS-Updater** using the CORE service settings from your notes.
SCALE suggests other applications to consider other than **DDNS-Updater** application.
{{< /expand >}}

{{< expand "Migrating from OpenVPN Service" "v" >}}
Review your OpenVPN client and server service settings.
Take note of all certificate, device type, port, protocol, TLS crypt authentication, and additional parameter settings to use in a replacement app.

A certificate configured on CORE should migrate to SCALE, but as a precaution, record the certificate authority (CA) and certificate settings, and make a copy of the the private and public keys the CA and certificate uses.

Install a replacement application such as **WG Easy** using the CORE service settings from your notes.
SCALE suggests other applications to consider other than the **WG Easy** VPN application.
{{< /expand >}}

{{< expand "Migrating from Rsync Service" "v" >}}
Review your rsync and module service settings.
Take note of all host path, access mode type, number of simultaneous connections, user and group IDs, allow and deny host addresses, and any auxiliary parameter settings.

Before you configure a new rsync application like **Rsync Daemon** (Rsync-d), validate that it is needed.
When rsync is configured externally with SSH or using an rsync task in **Data Protection > Rsync Tasks**, and when **Rsync Mode** is set to SSH, the deprecated rsync service is not used or necessary for rsync to function.

Install a replacement application such as **Rsync Daemon** using the CORE service settings from your notes.
SCALE suggests other applications to consider other than the **Rsync Daemon** application.
{{< /expand >}}

{{< expand "Migrating from S3 MinIO" "v" >}}
You must migrate your S3 service and data before you upgrade or migrate from CORE to SCALE!

If you have S3 service MinIO configured in CORE you must first [migrate to the MinIO plugin](https://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/#migrating-from-s3-service-to-minio-plugin). After migrating from CORE to SCALE and then installing the [SCALE MinIO Enterprise app](https://www.truenas.com/docs/scale/scaletutorials/apps/enterpriseapps/minio/) you can import S3 data from the CORE plugin to the SCALE app.

Review your S3 service settings.
Take note of the credentials (**Access Key** and **Secret Key**), and data storage volume and host path.

If a certificate other than the default **freenas_default** is used, take note.
A certificate configured on CORE should migrate to SCALE, but as a precaution, record the certificate authority (CA) and certificate settings, especially any private and public keys the certificate uses.

Follow the migration instructions provided in [Migrating MinIO Data from CORE to SCALE](https://www.truenas.com/docs/solutions/miniocoretoscale/).
This is an involved and time-consuming process with specific requirements. The amount of data being migrated determines how long this process takes.
{{< /expand >}}

{{< expand "Migrating from TFTP Service" "v" >}}
Review your TFTP service settings.
Take note of all directory, host, auxiliary parameter, permission, and credential (username and password) settings.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user.
Note the UID and GID for this new user to enter in the application configuration screen.

To use a specific dataset or storage volume for files, create any new dataset in Bluefin before installing the application.
Install the replacement application such as **TFTP Server** (TFTP-HPA) using the CORE service settings from your notes.
SCALE suggests other applications to consider other than the **TFTP Server** (TFTP-HPA) application.
{{< /expand >}}

{{< expand "Migrating from WebDAV Service and Shares" "v" >}}
Disable both the WebDAV share and service.
Also disable the **Start Automatically** option to prevent the service from re-enabling after a system restart.

Review any existing WebDAV service authentication settings.
Take note of all IP addresses, port numbers, URLs and credentials (username and password).

Remove any existing WebDAV shares. Go to **Shares > WebDAV** and use **Edit** to view any existing configurations.
Take note of the share name, path, and read only settings. Delete the WebDAV share configuration.

In SCALE Bluefin:
To grant access to a specific user (and group) other than using the default admin user UID and GID, add a new non-root administrative user for the share(s).
Note the UID and GID for this new user to enter in the application configuration screen.

After disabling the WebDAV service and clearing any existing share configurations from the **Shares > WebDAV** screen in Bluefin, install the **WebDAV** application to recreate your shares using the CORE service settings from your notes. Use the **webdav** user and group in control, and the UID and GID (**666**) in the application.
{{< /expand >}}
