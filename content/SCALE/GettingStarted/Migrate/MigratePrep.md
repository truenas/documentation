---
title: "Preparing to Migrate TrueNAS CORE to SCALE"
description: "Guides CORE users about elements they should prepare before beginning the one-way CORE to SCALE migration process."
weight: 10
aliases:
tags:
- scalemigrate
- scaleconfigure
---

{{< toc >}}

{{< include file="/_includes/MigrateCOREtoSCALEWarning.md" >}}

{{< include file="/_includes/MigrateCoreServicesToCobia.md" >}}

## What can or cannot migrate?

{{< include file="/_includes/COREMigratesList.md" >}}

## Preparing for Migration

Before you attempt to migrate your CORE system to the latest release of SCALE Bluefin (22.12.3.4):

1. Upgrade your CORE system to the most recent publicly-available CORE version.
   TrueNAS systems on 12.0x or earlier should upgrade to the latest CORE 13.0 release (e.g 13.0-U4 or newer) prior to migrating to SCALE.
   CORE systems at the latest 13.0 release can use the [iso upgrade](#migrating-using-an-iso-file-to-upgrade) method to migrate to SCALE.

2. Verify the root user is not locked.
   Go to **Accounts > Users**, use **Edit** for the root user to view current settings and confirm **Lock User** is not selected.

3. After updating to the latest publicly-available release of CORE, download your system configuration file and a debug file.
   Keep these files in a safe place in case you need to revert back to CORE with a clean install of the CORE <kbd>iso</kbd> file.

4. Back up your stored data files.
   If you need to do a clean install with the SCALE <kbd>iso</kbd> file, you can import your data pools into SCALE.

5. Write down your network configuration information to use if you do a clean install of SCALE from an <kbd>iso</kbd> file.
   {{< include file="/_includes/NetworkInstallRequirementsSCALE.md" >}}

6. Back up any critical data!

7. Record the settings for any [service deprecated](#migrating-from-deprecated-services) in SCALE Bluefin to use when you install the application that replaces the functionality of the service.
   
Download the [SCALE ISO file](https://www.truenas.com/download-tn-scale/) or the SCALE upgrade file and save it to your computer or a USB drive (see the **Physical Hardware tab** in [Installing SCALE]({{< relref "InstallingSCALE.md" >}})) to use if you upgrade from the physical system.

## Migrating from Deprecated Services

{{< hint type="info" >}}
Migrating from deprecated services requires disabling active services and could result in service outages.
Schedule the migration time accordingly.
{{< /hint >}}

After installing or updating to the latest SCALE 22.12 (Bluefin) release, disable the service and the **Start Automatically** option.
This prevents the service from re-enabling after a system restart.
Click **Edit** and take note of the settings configured for the service. 

Click on the service below for details on transitioning from that service to an application that provides the functionality of the deprecated service. 
You can install an application replacing the service in either Bluefin or Cobia.

{{< expand "Migrating from DDNS Service" "v" >}}
Review your Dynamic DNS service provider, domain, IP address, port number, URL, and credential (username and password) settings. Take a screenshot or record the settings. 
If establishing a new provider, create the user account before proceeding. Otherwise, use the existing provider details.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user. 
Note the UID and GID for this new user to enter in the application configuration screen.

Install the application using the CORE service settings from your notes. 
Cobia suggests other applications to consider other than DDNS-Updater application. 
{{< /expand >}}

{{< expand "Migrating from OpenVPN Service" "v" >}}
Review your OpenVPN client and server service settings. 
Take note of all certificate, device type, port, protocol, TLS crypt authentication, and additional parameter settings.

A certificate configured on CORE should migrate to SCALE, but as a precaution, record the certificate authority (CA) and certificate settings, especially any private and public keys the certificate uses.

Install the application using the CORE service settings from your notes.
Cobia suggests other applications to consider other than the WG Easy VPN application. 
{{< /expand >}}

{{< expand "Migrating from Rsync Service" "v" >}}
Review your rsync and module service settings. 
Take note of all host path, access mode type, number of simultaneous connections, user and group IDs, allow and deny host addresses, and any auxiliary parameter settings.

Before you configure a new rsync application like Rsync-Daemon (Rsync-d),validate that it is needed. 
When rsync is configured externally with SSH or using an rsync task in **Data Protection > Rsync Tasks**, and when **Rsync Mode** is set to SSH, the deprecated rsync service is not used or necessary for rsync to function.

Install the application using the CORE service settings from your notes.
Cobia suggests other applications to consider other than the Rsync-Daemon application. 
{{< /expand >}}

{{< expand "Migrating from S3 MinIO" "v" >}}
Review your S3 service settings.
Take note of the credentials (**Access Key** and **Secret Key**), and data storage volume and host path. 

If a certificate other than the default **freenas_default** is used, take note. 
A certificate configured on CORE should migrate to SCALE, but as a precaution, record the certificate authority (CA) and certificate settings, especially any private and public keys the certificate uses.

Follow the migration instructions provided in [Migrating from MinIO S3]({{< relref "/SCALE/SCALETutorials/Apps/CommunityApps/MinIOApp/_index.md" >}}).
{{< /expand >}}

{{< expand "Migrating from TFTP Service" "v" >}}
Review your TFTP service settings. 
Take note of all directory, host, auxiliary parameter, permission, and credential (username and password) settings.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user. 
Note the UID and GID for this new user to enter in the application configuration screen.

To use a specific dataset or volume for files, Create any new dataset in Bluefin before installing the application.
Install the application using the CORE service settings from your notes.
Cobia suggests other applications to consider other than the TFTP Server (TFTP-HPA) application. 
{{< /expand >}}

{{< expand "Migrating from WebDAV Service and Shares" "v" >}}
Disable both the WebDAV share and service. Also disable the **Start Automatically** option to prevent the service from re-enabling after a system restart.

Review any existing WebDAV service authentication settings. 
Take note of all IP addresses, port numbers, URLs and credentials (username and password).

Remove any existing WebDAV shares. Go to **Shares > WebDAV** and edit any existing configurations. 
Take note of the share name, path, and read only settings, then delete the WebDAV share configuration.

To grant access to a specific user (and group) other than using the default admin user UID and GID, add the new non-root administrative user. 
Note the UID and GID for this new user to enter in the application configuration screen. 
To recreate any existing shares created with the **webdav** user and group in control, use the UID and GID (**666**) in the application.

After disabling the WebDAV service and clearing any existing share configurations from the **Shares > WebDAV** screen in Bluefin, install the WebDAV application using the CORE service settings from your notes. 
{{< /expand >}}

{{< taglist tag="scalemigrate" limit="10" >}}
