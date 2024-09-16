---
title: "Third-Party Data Migration"
description: "Provides data migration instructions for users wanting move data from a third-party NAS solution to the TrueNAS system using the Syncthing Enterprise app."
weight: 45
draft: false
slug: thirdpartymigration
aliases:
- /scale/gettingstarted/datamigrationsyncthing/
tags:
- migrate
- shares
- syncthing
- smb
- nfs
keywords:
- data migration solution
- Enterprise NAS storage
---

Users of TrueNAS 24.04 (Dragonfish) or newer can migrate data from a third-party NAS solution onto TrueNAS using the [Syncthing Enterprise application]({{< relref "/content/TruenasApps/enterpriseapps/syncthing.md" >}}).
The Syncthing Enterprise application can mount remote SMB shares in a manner that preserves relevant metadata.
TrueNAS 24.10 (Electric Eel) also adds migration support for SMB alternate data streams (ADS), used to store application-specific metadata.

{{< expand "Syncthing Overview" "v" >}}
{{< include file="/static/includes/SyncthingOverview.md" >}}
{{< /expand >}}

{{< enterprise >}}
Third-party data ingest is available to TrueNAS Enterprise customers with TrueNAS 24.04 (Dragonfish) and newer deployed, as well as the appropriate applications license.
iXsystems Support staff are available to assist with deploying the Syncthing Enterprise Application and migrating data.
Please contact iXsystems Support to learn more and schedule a time to deploy the app and begin migration.

{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## Before You Begin

Data migration from a third-party NAS requires advanced configuration of both the remote source and TrueNAS target.

1. Ensure the source NAS supports the SMB protocol version 3 or newer.
   Older versions of the SMB protocol are not supported.

2. Plan for one-way migration of data from the source to the TrueNAS target.
   Remote shares must be mounted read-only.
   Read-write configuration or bidirectional synchronization is not supported.

3. Configure both source and target systems with directory services and synchronize accounts.

   All accounts referenced in NFSv4 ACLs and Windows Security Descriptors must be available on the TrueNAS server.

   The remote NAS must not have any security information that references local NAS accounts rather than domain accounts.
   Remove ACL entries that reference local accounts or non-domain users and groups before migration.

   Mounting a remote NAS for data ingest purposes without a common identity source and agreement in place for handling local accounts is an unsupported configuration.

## Process Overview

The process of setting up data migration from an external NAS to TrueNAS consists of:

* Installing two instances of the Syncthing Enterprise app, configuring the first instance to ingest data from the external source and the second instance to write data to a local dataset on the target system.
* Creating the target dataset for the data ingest on TrueNAS.
* Configuring a Syncthing marker folder on the remote source.
* Connecting the two Syncthing instances and initiating data sync.

## Setting Up Data Migration

1. Install the first instance of the Syncthing Enterprise app on TrueNAS.

    a. Go to **Apps > Discover Apps**, locate the **Syncthing** enterprise app widget.

    {{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppWidget.png" alt="Syncthing Enterprise App Widget" id="Syncthing Enterprise App Widget" >}}

    Ensure the widget reflects the Enterprise train version of the app.
    If the Enterprise version is not available, add the Enterprise train to the **TRUENAS** catalog.

    {{< expand "Adding Enterprise Train Apps" "v" >}}

{{< include file="/static/includes/AddEnterpriseTrain.md" >}}

    {{< /expand >}}

    Click on the widget to open the Syncthing details screen.

    {{< trueimage src="/images/SCALE/Apps/SyncthingEnterpriseAppDetailsScreen.png" alt="Syncthing Enterprise Details Screen" id="Syncthing Enterprise Details Screen" >}}

    Click **Install** to open the **Install Syncthing** screen.

    b. To avoid name conflicts, use a unique name to indicate this Syncthing instance is mounting the remote share. For example *Syncthing-ingest*.

    c. Accept the defaults in **Version**, **Syncthing Configuration**, and **User and Group Configuration**.

    d. Deselect **Host Network** under **Network Configuration**. Default ports can be used for this Syncthing instance.

    e. Select **ixVolume (Dataset created automatically by the system)** or configure an existing host path for **Syncthing Home Storage** under **Storage Configuration**.

    f. Select **SMB Share (Mounts a persistent volume claim to an SMB share)** from the **Type** dropdown for **Additional Storage**.

    {{< trueimage src="/images/SCALE/Apps/SyncthingSMBMigrationMode.png" alt="Additional Storage - SMB Share" id="Additional Storage - SMB Share" >}}

    Select **Migration Mode** to set additional mount options, which ensure proper transfer of metadata and ensure the remote SMB share is mounted read-only.

    Enter the IP address or fully qualified domain name (FQDN) for the remote source in **Server**.

    Enter the share name configured on the remote source in **Share**.

    If needed, enter the domain name for the remote source in **Domain (Optional)**.

    Enter the user name and password for the SMB user on the external source.

    Enter a **Size** larger than the SMB share on the remote source, with overhead.

    g. Click **Install**.

2. Access the Syncthing UI for the first instance and configure it as needed.

   a. Delete the **Default Folder** created by Syncthing during installation.

   b. Create GUI credentials for increased security.
   Go to **Settings > GUI** and enter a user name and password.

   c. Add a new remote SMB folder.

   Click **Add Folder**.

    {{< trueimage src="/images/SCALE/Apps/SyncthingUIAddFolder.png" alt="Add Folder - General" id="Add Folder - General" >}}

   Enter a **Folder Label**, such as *ingest*.
   Enter in **Folder Path** the mount path configured during app setup, */data1* by default.

   Click **Save**.

   d. Configure the device name.

   Click **Actions** in the top toolbar and select **Settings**.

    {{< trueimage src="/images/SCALE/Apps/SyncthingUISettingsDeviceName.png" alt="Settings - INGEST" id="Settings - INGEST" >}}

   Enter a clear identifying name, such as *INGEST*, and click **Save**.

3. [Create a new dataset]({{< relref "datasetsscale.md" >}}) on TrueNAS to be the target for the data ingest, for example, */mnt/tank/ingest*.

    Click **Advanced Options** and set **ACL Type** to **SMB/NFSv4**.
    Set **ACL Mode** to **Restricted**.

4. Install the second instance of the Syncthing Enterprise app on TrueNAS.

    a. Go to **Apps > Discover Apps**, locate the **Syncthing** enterprise app widget.
    Ensure the widget reflects the Enterprise train version of the app.

    b. To avoid name conflicts, use a unique name to indicate this Syncthing instance is writing to a local dataset. For example *Syncthing-migrate*.

    c. Accept the defaults in **Version**, **Syncthing Configuration**, and **User and Group Configuration**.

    d. Deselect **Host Network** under **Network Configuration**.
    Use non-default ports for this Syncthing instance that differ from the configured ports on the first instance.

    e. Select **ixVolume (Dataset created automatically by the system)** or configure an existing host path for **Syncthing Home Storage** under **Storage Configuration**.

    f. Select **Host Path (Path that already exists on the system)** from the **Type** dropdown for **Additional Storage**.
    Enter or browse to select the **Host Path** for the target dataset created in step 3.

    {{< trueimage src="/images/SCALE/Apps/SyncthingAdditionalStorage.png" alt="Additional Storage - Host Path" id="Additional Storage - Host Path" >}}

    g. Click **Install**.

    The **Installed Applications** screen displays both Syncthing instances.

    {{< trueimage src="/images/SCALE/Apps/SyncthingMigrateInstalled.png" alt="Installed Applications" id="Installed Applications" >}}

5. Access the Syncthing UI for the second instance and configure it as needed.

   a. Delete the **Default Folder** created by Syncthing during installation.

   b. Create GUI credentials for increased security.
   Go to **Settings > GUI** and enter a user name and password.

   c. Configure the device name.

   Click **Actions** in the top toolbar and select **Settings**.

    {{< trueimage src="/images/SCALE/Apps/SyncthingUISettingsDeviceNameMigrate.png" alt="Settings - MIGRATE" id="Settings - MIGRATE" >}}

   Enter a clear identifying name, such as *MIGRATE*, and click **Save**

6. Configure a Syncthing marker folder on the remote source.

   By default, Syncthing places a hidden folder, called **.stfolder**, on the root of each share.
   This folder allows Syncthing to confirm that the volume is properly mounted.
   Syncthing cannot sync without a marker folder.
   As the remote SMB share is mounted read-only, Syncthing is not be able to create this marker folder.

   There are two ways to manually configure a marker folder:

   Manually create a hidden folder named **.stfolder** at the root level of the remote share.
   Access the root directory of the remote source from a client that has read-write access to create the folder.

   or

   Access the Syncthing UI for the ingest instance.
   Click **Actions** in the top toolbar and select **Advanced** to open the **Advanced Configuration** screen.
   Select the ingest folder and change **Marker Name** from *.stfolder* to another folder or file that is present on the remote source.

   See [How do I serve a folder from a read-only filesystem?](https://docs.syncthing.net/v1.27.0/users/faq.html#how-do-i-serve-a-folder-from-a-read-only-filesystem) from Syncthing for more information.

7. Connect the two Syncthing instances.

   a. Copy the device ID from the first Syncthing instance UI.
   Click **Actions** in the top toolbar and select **Show ID** to open the **Device Identification** screen.
   Click **Copy**.

   b. Add a remote device on the UI of the second Syncthing instance.
   Click **Add Remote Device** and paste in the device ID copied from the first instance.

   Click **Advanced**.
   Enter the device address and port for the first Syncthing instance, in the format {{< cli >}}tcp://*ip*:*port*{{< /cli >}}.

   {{< trueimage src="/images/SCALE/Apps/SyncthingAddDeviceAdvanced.png" alt="Add Device - Advanced" id="Add Device - Advanced" >}}

   Click **Save**.

   c. Repeat steps a and b in the opposite direction to add a remote device to the first Syncthing instance using the device ID, IP address, and port of the second instance.

8. Initiate migration.

   Access the Syncthing UI for the first instance.

   Click **Edit** on the remote SMB folder created during step 2.

   {{< trueimage src="/images/SCALE/Apps/SyncthingEditFolder.png" alt="Edit Folder - Sharing" id="Edit Folder - Sharing" >}}

   Click **Sharing** and select the migrate instance. Click **Save**.

   Syncthing begins syncing data from the remote source to the ingest dataset on TrueNAS.
