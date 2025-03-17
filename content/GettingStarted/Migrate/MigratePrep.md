---
title: "Preparing to Migrate"
description: "Guides FreeBSD-based TrueNAS users through preparation elements and steps before beginning the one-way FreeBSD- to Linux-based TrueNAS migration process."
weight: 10
tags:
- migrate
keywords:
- nas storage software
- data migration
- enterprise data storage solution
- backup strategies
---


{{< include file="/static/includes/MigrateCOREtoSCALEWarning.md" >}}

## What can or cannot migrate?

{{< include file="/static/includes/COREMigratesList.md" >}}

## Preparing for Migration
Read this article before you attempt to migrate your FreeBSD-based system to a Linux-based TrueNAS version.
{{< hint type="warning" title="Using USB Devices for Backups" >}}
We strongly recommend not using USB flash drives or USB-attached drives for backups as these can have issues, including with recovering backed up files.
For more information on using USB drives and devices in general, read the [Hardware Guide]({{< relref "scalehardwareguide.md" >}}).
If you must use a USB type device, verify you can access files on the device before you migrate.
{{< /hint >}}
{{< enterprise >}}
Enterprise customers are strongly encouraged to contact Support for assistance with the process of moving from a FreeBSD-based (13.3 or earlier) to a Linux-based (22.12 or newer) TrueNAS version, especially customers with HA systems with iSCSI shares. Enterprise customers should not attempt to migrate their HA systems with iSCSI on their own!
Enterprise systems with iSCSI deployments require complex, special preparation and migration steps executed before and after migration to ensure data integrity.
Please contact Support for assistance!
{{< /enterprise >}}

1. Upgrade your system to either the latest 13.0 or 13.3 release.
   TrueNAS Enterprise-licensed (or community systems that haven't switched to 13.3) systems on 12.0x or earlier should upgrade to the latest 13.0 release (e.g 13.0-U6.2 or newer) prior to migration.
   Community users with 13.3 installed should update to the latest maintenance release of that version prior to migration.
   Either major version can use the [iso upgrade](#migrating-using-an-iso-file-to-upgrade) method for migration.

2. Migrate [GELI-encrypted pools](https://www.truenas.com/docs/core/13.0/coretutorials/storage/pools/storageencryption/#geli-pool-migrations) to a non-GELI-encrypted pool before upgrading from TrueNAS 12.0x or earlier releases!
   If you do not migrate from GELI to ZFS encryption before upgrading to 13.0-U6.2 (or newer) or migrating to TrueNAS 24.04, you permanently lose access to the data in the GELI encrypted pool(s).

3. Verify the root user is not locked.
   Go to **Accounts > Users**, select the root user and click **Edit** to view current settings and confirm **Lock User** is not selected.

4. Write down, copy, or take screenshots of settings to duplicate after migrating or use in the event of a post-upgrade/migration issue.
   Use the checklist below to guide you through this step:

   <input type="checkbox"> System dataset - Identify your system dataset. If you want to use the same dataset for the system dataset after migrating, note the pool and system dataset.
   When you set up the first required pool after migrating import this pool first.

   <input type="checkbox"> Deprecated services - Record the settings for [services deprecated in newer TrueNAS versions](#deprecated-services).

   <input type="checkbox"> VMs - If you have virtual machines configured, write down or screenshot network, bootloader, and other setting information.

   <input type="checkbox"> Plugins or jails - Plugins and jails do not migrate. Record settings for each plugin/jail and back up the data associated with each.

   <input type="checkbox"> CAs, certificates, CSRs - If you added certificate authorities, certificates, or certificate signing requests, they should migrate with the system config file, but as a precaution against possible malformed certificates copy private and public certificate keys and save each, then copy or screenshot all CA, certificate, and CSR setting. Make sure you have backed-up copies of certificates used to import or configure after migrating.

   <input type="checkbox"> Usernames beginning with (0-9) - Review local user account names and rename or replace these with a letter or underscore before migrating.

   <input type="checkbox"> Tunables - Linux-based TrueNAS (22.12 or newer) does not use **Tunables** in the same way. Copy script configurations to add on the **System > Advanced Settings** screen, using the **Sysctl** widget, after migrating.

   <input type="checkbox"> Init/shutdown scripts - If using init/shutdown scripts, copy them or take a screenshot to add them after migrating.

   <input type="checkbox"> Cron jobs - If configured, copy or use screenshots of cron job scripts if you want to add the same jobs after migrating.

   <input type="checkbox"> Global self-encrypting drive (SED) Password - Unlock these drives before migrating. Write down the SED password to use after migrating.

   <input type="checkbox"> Credentials - Copy or write down the credentials for SSH connections and keypairs, and any configured cloud service backup providers if you do not have the credential settings saved in other files kept secured outside of TrueNAS.

   <input type="checkbox"> Data protection tasks - Write down or take screenshots of replication, periodic snapshot, cloud sync, or other task settings to reconfigure these after migrating.

   Community users with iSCSI deployments can migrate their systems without assistance. Note, unlike FreeBSD systems, Linux Debian systems require at least one LUN set to zero.
   iSCSI portals in Linux Debian-based systems are defined globally instead of per port.

   Enterprise systems with iSCSI shares deployments have special requirements, preparation and migration steps to ensure data integrity and a smooth migration.
   Other iSCSI differences only apply to Enterprise High Availability (HA) systems. Enterprise users **must** contact TrueNAS Customer Support for assistance with their migrations!

5. Remove all SMB auxiliary parameter settings before migrating.
   In TrueNAS 23.10 (Cobia) or newer, the SMB **Auxiliary Parameters** option is not available in the UI.
   Attempting to migrate with these settings can result in broken SMB shares post upgrade that require CLI access to fix.

6. Write down or take screenshots of your network configuration information.
   Capture the global network settings, interfaces (LAGG, VLAN, bridge settings), static IP addresses, and aliases.

   FreeBSD and Linux use different nomenclature for network interfaces, bridges, LAGGs, and VLANs.
   Because of the difference, network settings can either get lost or not transfer which means you have no network connectivity.
   See [Component Naming]({{< relref "ComponentNaming.md" >}}) for more information.

   When using a TrueNAS Enterprise system, refer to the network port ID manuals of your [TrueNAS Systems](https://www.truenas.com/docs/hardware/) to find the network port assignments in TrueNAS.
   When using custom hardware for TrueNAS, refer to the manual or documentation provided with your system or locate this information on your server hardware and take note of it.

   If there are issues after a clean install from an <file>iso</file> file, or if you are not using DHCP for network and interface configuration, use the recorded information from your previous settings to configure your network settings and reconfigure your static IPs or aliases after migrating.
      {{< include file="/static/includes/NetworkInstallRequirementsSCALE.md" >}}

7. Offline the deprecated S3 MinIO service (if in use).
   This might require a manual data backup and restore strategy.
   Enterprise customers can contact iX Support to discuss migration and backup strategies.

8. Back up any critical data.

9. Download your [system configuration file](https://www.truenas.com/docs/core/coretutorials/systemconfiguration/usingconfigurationbackups/) and a [debug file](https://www.truenas.com/docs/core/uireference/system/advanced/).
   After updating to the latest publicly-available release of TrueNAS 13.0 (or 13.3 for community users) and making any changes to user accounts or any other settings, download these files and keep them in a safe place and where you can access them if you need to revert with a clean install using the TrueNAS 13.0 or 13.3 <file>iso</file> file.

After completing the steps listed above that apply to your existing system, download the latest [TrueNAS 24.04 ISO file](https://www.truenas.com/download-tn-scale/) and save it to your computer.
See [Software Releases](https://www.truenas.com/docs/softwarereleases/#upgrade-paths) for current recommended update paths to make sure you download and migrate to and from the correct TrueNAS versions.
Burn the iso to a USB drive (see [**Installing on Physical Hardware**]({{< relref "InstallingSCALE.md#installing-on-physical-hardware" >}})) when upgrading a physical system.

## Deprecated Services
The built-in services listed in this section are available in 13.0, but deprecated in 22.12.3 (Bluefin) and removed in later TrueNAS releases.
They require attention before attempting to migrate to 24.04.

Each of the sections has information that can help you determine the best steps forward to secure any critical data before attempting to migrate from 13.0 to 24.04.
They provide details on transitioning from that service to an application with the functionality of the deprecated service.

TrueNAS has [apps](https://www.truenas.com/docs/truenasapps/) you can deploy as replacements for these services.
24.04 provides the option to force an upgrade without converting deprecated services to apps.
The force option is not recommended for the S3 service as forcing the upgrade results in losing access to and the ability to recover the MinIO S3 data.

See [Bluefin Deprecated Services](https://www.truenas.com/docs/scale/22.12/gettingstarted/scaledeprecatedfeatures/) for more information.

{{< expand "Migrating from DDNS Service" "v" >}}
Review and write down or take screenshots of your Dynamic DNS service provider, domain, IP address, port number, URL, and credential (username and password) settings to use when you reconfigure in a replacement app.
If establishing a new provider, create the user account before proceeding. Otherwise, use the existing provider details.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add a new non-root administrative user.
Note the UID and GID for this new user to enter in the application configuration screen.

Install a replacement application, such as **DDNS-Updater**, using the service settings from your notes.
{{< /expand >}}

{{< expand "Migrating from OpenVPN Service" "v" >}}
Review your OpenVPN client and server service settings.
Take note of all certificate, device type, port, protocol, TLS crypt authentication, and additional parameter settings to use in a replacement app.

A configured certificate should migrate, but as a precaution, record the certificate authority (CA) and certificate settings, and make a copy of the the private and public keys the CA and certificate uses.

Install a replacement application, such as **WG Easy**, using the service settings from your notes.
{{< /expand >}}

{{< expand "Migrating from Rsync Service" "v" >}}
Review your rsync and module service settings.
Take note of all host path, access mode type, number of simultaneous connections, user and group IDs, allow and deny host addresses, and any auxiliary parameter settings.

Before you configure a new rsync application like **Rsyncd**, validate that it is needed.
When rsync is configured externally with SSH or using an rsync task in **Data Protection > Rsync Tasks**, and when **Rsync Mode** is set to SSH, the deprecated rsync service is not used or necessary for rsync to function.

Install a replacement application such as **Rsync Daemon** using the 13.0 service settings from your notes.
TrueNAS 24.10 suggests other applications to consider other than the **Rsync Daemon** application.
{{< /expand >}}

{{< expand "Migrating from TFTP Service" "v" >}}
Review your TFTP service settings.
Take note of all directory, host, auxiliary parameter, permission, and credential (username and password) settings.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user.
Note the UID and GID for this new user to enter in the application configuration screen.

To use a specific dataset or storage volume for files, create any new dataset before installing the application.
Install the replacement application, such as **TFTP Server** (TFTP-HPA), using the service settings from your notes.
{{< /expand >}}

{{< expand "Migrating from WebDAV Service and Shares" "v" >}}
Disable both the WebDAV share and service.
Also disable the **Start Automatically** option to prevent the service from re-enabling after a system restart.

Review any existing WebDAV service authentication settings.
Take note of all IP addresses, port numbers, URLs and credentials (username and password).

Remove any existing WebDAV shares. Go to **Shares > WebDAV** and use **Edit** to view any existing configurations.
Take note of the share name, path, and read only settings. Delete the WebDAV share configuration.

In Bluefin:
To grant access to a specific user (and group) other than using the default admin user UID and GID, add a new non-root administrative user for the share(s).
Note the UID and GID for this new user to enter in the application configuration screen.

After disabling the WebDAV service and clearing any existing share configurations from the **Shares > WebDAV** screen in Bluefin, install the **WebDAV** application to recreate your shares using the service settings from your notes. Use the **webdav** user and group in control, and the UID and GID (**666**) in the application.
{{< /expand >}}