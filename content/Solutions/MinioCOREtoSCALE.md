---
title: "Migrating MinIO Data from Previous TrueNAS Versions"
description: "Provides instructions for migrating S3 data from the FreeBSD-based TrueNAS MinIO plugin to the Linux-based TrueNAS MinIO app."
weight: 10
tags:
- gettingstarted
- migrate
- s3
- apps
---

TrueNAS (13.0 or 13.3) users utilizing the MinIO plugin can migrate to TrueNAS 24.04 and keep their existing MinIO buckets and data.
This process does not transfer users, groups, access keys, and all other MinIO settings.
They must be manually recreated on the new app deployment.

{{< hint type=note >}}
It is possible to migrate all users, groups, access keys, and all other MinIO settings using the [MinIO Client (mc)](https://github.com/minio/mc) command line utility, however this requires two independent systems, for example when older hardware is being replaced with a new system.
This process is not covered in this guide.
{{< /hint >}}

This process has been validated in testing on a TrueNAS 13.0-U6.1 system that was migrated using an .update file to TrueNAS 24.04 and a 13.0-U6.1 system that migrated to 23.10.2 using an .update file.

## First Steps

The TrueNAS 13.0 or 13.3 system must have the MinIO plugin deployed, not the deprecated S3 service.
Users with TrueNAS 13.0-U6.1 or earlier installed and the S3 service active must [migrate to the MinIO plugin](https://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/#migrating-from-s3-service-to-minio-plugin) before upgrading to TrueNAS 13.3 or migrating.

Configure the MinIO plugin to access data via a mount point rather than the default MinIO plugin storage location.
In this example MinIO data is stored in <file>/mnt/tank/minio</file>.

Take note of all users, groups, access keys, and all other MinIO settings.
These must be manually recreated on the new app deployment.

## Migrating MinIO Data

1. Migrate following the procedure in [TrueNAS Migrations](https://www.truenas.com/docs/scale/gettingstarted/migrate/).
   Import the config file and validate pools imported and settings migrated correctly.

2. Go to **Datasets**, select the MinIO dataset, and click **Edit** on the **Permissions** widget.
   Adjust permissions to ensure the **apps** user has full control and select **Apply permissions recursively**.
   Click **Save Access Control List**.

   {{< trueimage src="/images/Solutions/MinIODatasetPermissions.png" alt="MinIO Dataset Permissions" id="MinIO Dataset Permissions" >}}

3. Go to **Apps**.
   Click **Discover Apps**, then either begin typing MinIO into the search field or scroll down to locate either the **charts** (community) or **enterprise** version of the [**MinIO**](https://www.truenas.com/docs/scale/scaletutorials/apps/communityapps/minioapp/) app widget.
  
   Community users can install the Enterprise version of the app by following the procedure in [Adding MinIO Enterprise App](https://www.truenas.com/docs/scale/scaletutorials/apps/enterpriseapps/minio/#adding-minio-enterprise-app).

4. Click **Install** to begin configuration.
   If the apps service is not previously configured, click **Setup Pool to Install**, select a pool for apps, and then continue.

   Set login credentials as needed in **Minio Configuration**.

   Select **Host Path (Path that already exists on the system)** in **Storage Configuration** and enter the default mount path, `/data1`, to access the MinIO dataset.

   {{< trueimage src="/images/Solutions/MinIOAppStorage.png" alt="MinIO App Storage" id="MinIO App Storage" >}}

   Click **Install**.

   The **Installed** applications screen displays showing the MinIO application in the **Deploying** state.
   It changes to **Running** when the application is ready to use.

   {{< trueimage src="/images/SCALE/Apps/MinIOAppInstalled.png" alt="MinIO App Installed" id="MinIO App Installed" >}}

5. Click **Web Portal** to open the MinIO sign-in screen.

   {{< trueimage src="/images/SCALE/Login/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="MinIO Sign-In Screen" >}}

   Sign in using configured credentials.
   Buckets from the previous deployment should be visible immediately.

   {{< trueimage src="/images/Solutions/MinIOBucketVisible.png" alt="MinIO Bucket in App" id="MinIO Bucket in App" >}}

6. After confirming data availability, use the MinIO UI to manually reconfigure all MinIO users, groups, access keys, and other settings that you recorded from the plugin deployment in [First Steps](#first-steps).
