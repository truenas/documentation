---
title: "Third-Party Data Migration"
description: "Provides instructions for TrueNAS Enterprise users migrating data from third-party NAS solutions to TrueNAS SCALE using the Syncthing App."
weight: 45
aliases:
tags:
- migrate
- shares
- syncthing
- smb
- nfs
---

TrueNAS SCALE 24.04 (Dragonfish) adds functionality to mount remote SMB shares in a manner that preserves relevant metadata.
This allows TrueNAS Enterprise customers to migrate data from a third-party NAS solution onto TrueNAS SCALE using the Syncthing Enterprise application.

{{< enterprise >}}
Currently, third party data ingest is only available to TrueNAS Enterprise customers with TrueNAS SCALE 24.04 (Dragonfish) and newer deployed.
The TrueNAS Syncthing Enterprise app is available to Enterprise systems with the appropriate VM and applications license.
iXsystems Support staff are available to assist with deploying Syncthing and migrating data.
Please contact iXsystems Support to learn more and schedule a time to deploy the app and begin migration.

{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

{{< expand "Syncthing Overview" "v" >}}
{{< include file="/_includes/SyncthingOverview.md" >}}
{{< /expand >}}

## Before You Begin

Data migration from a third-party NAS requires advance configuration of both the remote source and TrueNAS SCALE target.

1. Ensure the source NAS supports the SMB protocol version 3 or newer.
   Older versions of the SMB protocol are not supported.

   {{< hint type=note >}}
   There is currently no support for SMB alternate data streams (ADS) used to store application specific metadata.
   ADS support is planned for a future release of TrueNAS SCALE.
   {{< /hint >}}

2. Plan for one-way migration of data from the source to the TrueNAS SCALE target.
   Remote shares must be mounted read only.
   Red-write configuration or bidirectional synchronization is not supported.

3. Configure both source and target systems with directory services and synchronize accounts.

   All accounts referenced in NFSv4 ACLs and Windows Security Descriptors must be available on the TrueNAS server.

   The remote NAS must not have any security information that references local NAS accounts rather than domain accounts.
   Remove ACL entries that reference local accounts or non-domain users and groups prior to migration.

   Mounting a remote NAS for data ingest purposes without a common identity source and agreement in place for handling local accounts is an unsupported configuration.

## Setting Up Data Migration

1. [Install the first instance of the Syncthing Enterprise app]({{< relref "/scale/scaletutorials/apps/enterpriseapps/syncthing.md" >}}) on TrueNAS SCALE.

    a. To avoid name conflicts, use a unique name to indicate this Syncthing instance is mounting the remote share. For example *Syncthing-ingest*.

    b. Accept the defaults in **Version**, **Syncthing Configuration**, and **User and Group Configuration**.

    c. Deselect **Host Network** under **Network Configuration**. Default ports can be used for this Syncthing instance.

    d. Select **ixVolume (Dataset created automatically by the system)** or configure an existing host path for **Syncthing Home Storage** under **Storage Configuration**.

    e. Select **SMB Share (Mounts a persistent volume claim to a SMB share)** from the **Type** dropdown for **Additional Storage**.

    {{< trueimage src="/images/SCALE/Apps/SyncthingSMBMigrationMode.png" alt="Additional Storage" id="Additional Storage" >}}

    Select **Migration Mode** to set additional mount options, which ensure proper transfer of metadata, and ensure the remote SMB share is mounted read only.

2. Access the Syncthing UI for the first instance and configure as needed.

   a. Delete default folder <!-- What does this mean? Do we have screenshots of this? -->

   b. Create GUI credentials

   c. Add a new remote SMB folder using the mount path configured during app setup, */data1* by default.

   d. Configure the device name with a clearly identifying name, such as *Ingest*.

3. [Create a new dataset]({{< relref "datasetsscale.md" >}}) on TrueNAS SCALE to be the target for the data ingest.

    Click **Advanced Options** and then set **ACL Type** to **SMB/NFSv4**.
    Set **ACL Mode** to **Restricted**.

4.