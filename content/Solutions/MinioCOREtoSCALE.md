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

TrueNAS CORE users who are utilizing the MinIO plugin can side grade to TrueNAS SCALE and keep their existing MinIO buckets and their data. This process does not transfer users, groups, access keys, and all other MinIO settings. They must manually be created on the new SCALE app deployment.

It is possible to migrate using MinIO command line utilities, however this will require 2 independent systems, for example when older hardware is being replaced. This process can transfer all users, groups, access keys, and all other MinIO settings. This process is not covered in this guide.

This walkthrough was conducted using a CORE 13.0-U6.1 system that was upgraded using a .update file to SCALE 24.04.0-INTERNAL7. Also tested from CORE 13.0-U6.1 to SCALE 23.10.2 using a .update file.

Prerequisites

Ensure the TrueNAS CORE deployment is running MinIO as a plugin, not the S3 service. If the user is currently using the deprecated S3 service, they must migrate to the MinIO plugin. https://www.truenas.com/docs/core/coretutorials/jailspluginsvms/plugins/minioplugin/
Strongly suggest ensuring that CORE MinIO data is accessed via a mount point rather than the default MinIO plugin storage location.
In this example MinIO data is stored in /mnt/tank/minio on both CORE and SCALE.

Process

1. Migrate from CORE to SCALE following the procedure in []().

2. Adjust permissions on MinIO dataset, ensuring the apps user has full control and permissions are recursively applied.

{{< trueimage src="/" alt="MinIO Dataset Permissions" id="MinIO Dataset Permissions" >}}

3. Initiate installation of the MinIO app. This may require setting the apps pool if this has not been done before. TrueNAS Enterprise MinIO app was used in this demonstration.

4. Configure MinIO app. Ensure that default mount path, /data1, is configured as a host path and is configured to access the MinIO dataset under host path configuration. Set login credentials as needed.

{{< trueimage src="/" alt="MioIO App Storage" id="MioIO App Storage" >}}

5. Once the MinIO app has finished deploying, access using configured credentials. Previous buckets from CORE deployment should be visible immediately.

{{< trueimage src="/" alt="MinIO Bucket in App" id="MinIO Bucket in App" >}}

6. As this process only transfers MinIO data. All other MinIO settings will need to be manually reconfigured.
