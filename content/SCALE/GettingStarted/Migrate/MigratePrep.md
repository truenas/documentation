---
title: "Preparing to Migrate"
description: "Guides CORE users about elements they should prepare before beginning the one-way CORE to SCALE migration process."
weight: 10
aliases:
 - /scale/gettingstarted/migrate/migrateprepenterprise/
tags:
- migrate
---


{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

## What can or cannot migrate?

{{< include file="/_includes/COREMigratesList.md" >}}

## Preparing for Migration
Before you attempt to migrate your CORE system to a SCALE major version. 
{{< hint type="warning" title="Using USB Devices" >}}
We strongly recommend not using USB flash drives or USB-attached drives as these can have issues, including with recovering backed up files.
For more information on using USB drives and devices read the [CORE Hardware Guide]({{< relref "/CORE/GettingStarted/CoreHardwareGuide.md" >}}).
If you must use a USB type device, verify you can access files on the device before you upgrade/migrate to SCALE.
{{< /hint >}}
{{< enterprise >}}
CORE Enterprise customers are encouraged to contact Support for assistance with the process of moving from CORE to SCALE, especially customers with HA systems.
{{< /enterprise >}}

1. Upgrade your CORE system to the most recent publicly-available CORE major maintenace release version.
   TrueNAS systems on 12.0x or earlier should upgrade to the latest CORE 13.0 release (e.g 13.0-U6.1 or newer) prior to migrating to SCALE.
   CORE systems at the latest 13.0 release can use the [iso upgrade](#migrating-using-an-iso-file-to-upgrade) method to migrate to SCALE.

   Migrate [GELI-encrypted pools](https://www.truenas.com/docs/core/coretutorials/storage/pools/storageencryption/#geli-pool-migrations) to a non-GELI-encrypted pool before upgrading from CORE 12.0x or earlier releases!

2. Verify the root user is not locked.
   Go to **Accounts > Users**, use **Edit** for the root user to view current settings and confirm **Lock User** is not selected.

3. Write down or take screenshots of settings to use in the event of a post-upgrade/migration issue or to duplicate in SCALE.
   Use the checklist below to guide you through this step: 

   <input type="checkbox"> System dataset - Identify your system dataset. If you want to use the same dataset for the system dataset in SCALE, note the pool and system dataset.
   
   <input type="checkbox"> Deprecated services - Record the settings for [services deprecated in SCALE](#migrating-from-deprecated-services).
   
   <input type="checkbox"> VMs - If you have virtual machines configured in CORE, write down or screenshot network and other setting information.
   
   <input type="checkbox"> Plugins or jails - If you use plugins and jails, they do not migrate. Record settings for each plugin/jail and back up the data associated with each.
   
   <input type="checkbox"> CAs, certificates, CSRs - If you added certificate authorities, certificates or certificate signing requests to CORE, these should migrate with the system config file, but as a precaution against possible malformed certificates copy or screenshot all CA, certificate, and CSR settings, and save the public and private keys of each. Make sure you have backed-up copies of certificates used in CORE to import or configure in SCALE.
   
   <input type="checkbox"> Usernames beginning with (0-9) - Review local user account names and rename or replace these with a letter or underscore before migrating.
   When you set up the first required pool on SCALE import this pool first.

   <input type="checkbox"> Tunables on CORE - SCALE does not use **Tunables** the way CORE does. SCALE provides script configuration on the **System Settings > Advanced** screen as **Sysctl** scripts.

   <input type="checkbox"> Init/shutdown scripts in CORE to add to SCALE.

   <input type="checkbox"> Cron jobs configured in CORE if you want to set the same jobs up in SCALE.

   <input type="checkbox"> Global self-encrypting drive (SED) Password - Unlock these drives in CORE before you clean install SCALE. Note the SED password configured in CORE to use in SCALE.

   <input type="checkbox"> Credentials - Note the credentials for SSH connections and keypairs, and cloud service backup providers configured in CORE if you do not have them recorded in other files kept secured outside of CORE.

   <input type="checkbox"> Data protection tasks - Record or screenshot replication, periodic snapshot, cloud sync, or other tasks settings to reconfigure these in SCALE if you want to duplicate these tasks. 

4. Write down your network configuration information or take screenshots of the global network settings, interfaces, static IP addresses, and aliases configured.
   
   FreeBSD and Linux use different nomenclature for network interfaces, bridges, LAGGs, and VLANs. 
   Because of the difference, network settings can either get lost or not transfer which means you have no network connectivity.
   You can find interface names in the CORE UI on the **Network > Interfaces** screen.

   When using a TrueNAS Enterprise system from iXsystems, refer to the network port ID manuals of your [TrueNAS Systems](https://www.truenas.com/docs/hardware/) to find the network port assignments in TrueNAS SCALE.
   When using custom hardware for TrueNAS, refer to the manual or documentation provided with your system or locate this information on your server hardware and take note of it.

   If there are issues after a clean install of SCALE from an <file>iso</file> file or you are not using DHCP for network and interface configuration, use the information from your CORE settings to configure your SCALE network settings and to reconfigure your static IPs or aliases.
      {{< include file="/_includes/NetworkInstallRequirementsSCALE.md" >}}

5. Migrate the deprecated S3 MinIO service (if in use). See [services deprecated in SCALE](#migrating-from-deprecated-services).
   Read and follow instructions in [Migrating from MinIO S3](https://www.truenas.com/docs/scale/22.12/scaletutorials/apps/communityapps/minioclustersscale/migratingfroms3service/)!
   Make sure S3 MinIO data is backed up as a precaution. The S3 service requires installing SCALE 22.12.3 (Bluefin).
   This version of SCALE provides access to both the S3 service and the MinIO app you migrate to. 

6. Back up your stored data files.
   If you need to do a clean install with the SCALE <file>iso</file> file, you can import your data pools into SCALE.
   Verify you can access your backed up files before you upgrade/migrate to SCALE.

7. Back up any critical data. 

8. Download your [system configuration file]({{< relref "UsingConfigurationBackups.md" >}}) and a [debug file]({{< relref "/CORE/UIReference/System/Advanced.md" >}}).
   After updating to the latest publicly-available release of CORE and making any changes to CORE user accounts or any other settings download these files.
   Keep them in a safe place in case you need to revert to CORE with a clean install using the CORE <file>iso</file> file.

After completing the above steps that apply to your CORE system, download the [SCALE ISO file](https://www.truenas.com/download-tn-scale/) and save it to your computer.
Burn the iso to a USB drive (see **Installing on Physical Hardware** in [Installing SCALE]({{< relref "InstallingSCALE.md #installing-on-physical-hardware" >}})) when upgrading a physical system.

## Deprecated Services in SCALE
The built-in services below are available in CORE, but deprecated in SCALE 22.12.3 (Bluefin) and removed in later SCALE releases.
They require attention before attempting to migrate to SCALE. 

TrueNAS SCALE has [apps]({{< relref "/SCALE/SCALETutorials/Apps/_index.md" >}}) you can deploy as replacements for these services.
SCALE 24.04 provides the option to force an upgrade without converting deprecated services.
The force option is not recommended for the S3 service as forcing the upgrade causes loss of the MinIO S3 data.

Review the sections below. Each has information that can help you determine your best steps forward to secure any critical data before attempting to migrate from CORE to SCALE.
These sections also provide details on transitioning from that service to an application with the functionality of the deprecated service.
If migrating the S3 service in Bluefin, you can also transition the other deprecated services to the applications that replace them before you upgrade to the latest major release of SCALE.

See [SCALE Bluefin Deprecated Services](https://www.truenas.com/docs/scale/22.12/gettingstarted/scaledeprecatedfeatures/) for more information.

{{< expand "Migrating from DDNS Service" "v" >}}
Review your Dynamic DNS service provider, domain, IP address, port number, URL, and credential (username and password) settings.
Take a screenshot or record the settings.
If establishing a new provider, create the user account before proceeding. Otherwise, use the existing provider details.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user.
Note the UID and GID for this new user to enter in the application configuration screen.

Install the application using the CORE service settings from your notes.
SCALE suggests other applications to consider other than **DDNS-Updater** application.
{{< /expand >}}

{{< expand "Migrating from OpenVPN Service" "v" >}}
Review your OpenVPN client and server service settings.
Take note of all certificate, device type, port, protocol, TLS crypt authentication, and additional parameter settings.

A certificate configured on CORE should migrate to SCALE, but as a precaution, record the certificate authority (CA) and certificate settings, especially any private and public keys the certificate uses.

Install the application using the CORE service settings from your notes.
SCALE suggests other applications to consider other than the **WG Easy** VPN application.
{{< /expand >}}

{{< expand "Migrating from Rsync Service" "v" >}}
Review your rsync and module service settings.
Take note of all host path, access mode type, number of simultaneous connections, user and group IDs, allow and deny host addresses, and any auxiliary parameter settings.

Before you configure a new rsync application like **Rsync Daemon** (Rsync-d), validate that it is needed.
When rsync is configured externally with SSH or using an rsync task in **Data Protection > Rsync Tasks**, and when **Rsync Mode** is set to SSH, the deprecated rsync service is not used or necessary for rsync to function.

Install the application using the CORE service settings from your notes.
SCALE suggests other applications to consider other than the **Rsync Daemon** application.
{{< /expand >}}

{{< expand "Migrating from S3 MinIO" "v" >}}
You must migrate your S3 service and data before you upgrade or migrate from CORE to SCALE!

If you have S3 service MinIO configured in CORE you must first clean install or upgrade to SCALE 22.12.3 (Bluefin).
The deprecated S3 service is based on the MinIO-deprecated and de-supported Filesystem platform.
MinIO requires you to upgrade and migrate to a MinIO Client (MC) release. After completing this process you can upgrade to SCALE 24.04 (Dragonfish).
SCALE 22.12.3 includes both the deprecated S3 service and the replacement MinIO app you migrate to.
Failing to migrate the S3 service results in losing access to and the ability to complie your MinIO data.

Review your S3 service settings.
Take note of the credentials (**Access Key** and **Secret Key**), and data storage volume and host path.

If a certificate other than the default **freenas_default** is used, take note.
A certificate configured on CORE should migrate to SCALE, but as a precaution, record the certificate authority (CA) and certificate settings, especially any private and public keys the certificate uses.

Follow the migration instructions provided in [Migrating from MinIO S3](https://www.truenas.com/docs/scale/22.12/scaletutorials/apps/communityapps/minioclustersscale/migratingfroms3service/).
This is an involved and time-consuming process with specific requirements. The amount of data being migrated determines how long this process takes.
{{< /expand >}}

{{< expand "Migrating from TFTP Service" "v" >}}
Review your TFTP service settings.
Take note of all directory, host, auxiliary parameter, permission, and credential (username and password) settings.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user.
Note the UID and GID for this new user to enter in the application configuration screen.

To use a specific dataset or volume for files, create any new dataset in Bluefin before installing the application.
Install the application using the CORE service settings from your notes.
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
To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user for the share(s).
Note the UID and GID for this new user to enter in the application configuration screen.

After disabling the WebDAV service and clearing any existing share configurations from the **Shares > WebDAV** screen in Bluefin, install the **WebDAV** application to recreate your shares using the CORE service settings from your notes. Use the **webdav** user and group in control, and the UID and GID (**666**) in the application.
{{< /expand >}}
