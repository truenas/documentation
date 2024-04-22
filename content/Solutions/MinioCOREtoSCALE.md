---
title: "Migrating MinIO Data from CORE to SCALE"
description: "Provides instructions for migrating S3 data from the TrueNAS CORE MinIO plugin to the TrueNAS SCALE MinIO app."
weight: 10
tags:
- gettingstarted
- migrate
- s3
- apps
---

TrueNAS CORE users utilizing the MinIO plugin can migrate to TrueNAS SCALE and keep their existing MinIO buckets and data.
This process does not transfer users, groups, access keys, and all other MinIO settings.
They must be manually recreated on the new SCALE app deployment.

{{< hint type=note >}}
It is possible to migrate all users, groups, access keys, and all other MinIO settings using the [MinIO Client (mc)](https://github.com/minio/mc) command line utility, however this requires two independent systems, for example when older hardware is being replaced with a new system.
This process is not covered in this guide.
{{< /hint >}}

This process has been validated using a CORE 13.0-U6.1 system that was upgraded using a .update file to SCALE 24.04 and from CORE 13.0-U6.1 to SCALE 23.10.2 using a .update file.

## First Steps

The TrueNAS CORE system must have the MinIO plugin deployed, not the deprecated S3 service.
Users with TrueNAS CORE 13.0-U6.1 or earlier installed and the S3 service active must [migrate to the MinIO plugin](https://www.truenas.com/docs/core/13.0/coretutorials/jailspluginsvms/plugins/minioplugin/#migrating-from-s3-service-to-minio-plugin) before upgrading to TrueNAS CORE 13.3 or migrating to TrueNAS SCALE.

Configure the CORE MinIO plugin to access data via a mount point rather than the default MinIO plugin storage location.
In this example MinIO data is stored in <file>/mnt/tank/minio</file> on both CORE and SCALE.

Take note of all users, groups, access keys, and all other MinIO settings.
These must be manually recreated on the new SCALE app deployment.

## Migrating MinIO Data

1. Migrate from CORE to SCALE following the procedure in [CORE to SCALE Migrations](https://www.truenas.com/docs/scale/gettingstarted/migrate/).
   Import the CORE config file and validate pools imported and settings migrated correctly.

2. Go to **Datasets**, select the MinIO dataset, and click **Edit** on the **Permissions** widget.
   Adjust permissions to ensure the **apps** user has full control and select **Apply permissions recursively**.
   Click **Save Access Control List**.

{{< trueimage src="/images/Solutions/MinIODatasetPermissions.png" alt="MinIO Dataset Permissions" id="MinIO Dataset Permissions" >}}

3. Go to **Apps**.
   Click **Discover Apps**, then either begin typing MinIO into the search field or scroll down to locate the **charts** version of the [**MinIO**](https://www.truenas.com/docs/scale/scaletutorials/apps/communityapps/minioapp/) app widget.
  Click **Install** to begin configuration.
  If the apps service is not previously configured, click **Setup Pool to Install**, select a pool for apps, and then continue.
  
    This tutorial uses the TrueNAS MinIO Enterprise app.
    Community users can install the Enterprise version of the app by following the procedure in [Adding MinIO Enterprise App](https://www.truenas.com/docs/scale/scaletutorials/apps/enterpriseapps/minio/#adding-minio-enterprise-app).

    a. Set login credentials as needed in **Minio Configuration**.

    b. In **Storage Configuration**, select **Host Path (Path that already exists on the system)** and enter the default mount path, `/data1`, to access the MinIO dataset.

{{< trueimage src="/images/Solutions/MinIOAppStorage.png" alt="MioIO App Storage" id="MioIO App Storage" >}}

4. The **Installed** applications screen displays showing the MinIO application in the **Deploying** state.
    It changes to **Running** when the application is ready to use.

    {{< trueimage src="/images/SCALE/Apps/MinIOAppInstalled.png" alt="MinIO App Installed" id="MinIO App Installed" >}}

    Click **Web Portal** to open the MinIO sign-in screen.

   {{< trueimage src="/images/SCALE/Login/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="MinIO Sign-In Screen" >}}

    Sign in using configured credentials.
    Previous buckets from the CORE deployment should be visible immediately.

{{< trueimage src="/images/Solutions/MinIOBucketVisible.png" alt="MinIO Bucket in App" id="MinIO Bucket in App" >}}

6. After confirming data availability, use the MinIO UI to manually reconfigure all MinIO users, groups, access keys, and other settings that you recorded from the CORE plugin deployment in [First Steps](#first-steps).
