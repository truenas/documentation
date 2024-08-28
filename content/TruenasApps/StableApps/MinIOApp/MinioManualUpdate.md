---
title: "Updating MinIO from 1.6.58"
description: "Provides information on updating MinIO from 1.6.58 to newer versions."
weight: 10
aliases:
 - /scale/scaletutorials/apps/minioclustersscale/miniomanualupdate/
 - /scale/scaletutorials/apps/chartapps/minioapp/miniomanualupdate/
 - /scale/scaletutorials/apps/stableapps/minioapp/miniomanualupdate/
tags:
- s3
- apps
keywords:
- nas data storage
- software storage solutions
- object based storage
---

{{< hint info >}}
This article applies to the public release of the S3 **MinIO** community application in the **stable** train for the application catalog.
{{< /hint >}}

{{< include file="/static/includes/AppsUnversioned.md" >}}

## Manual Update Overview

MinIO fails to deploy if you update your version 2022-10-24_1.6.58 Minio app to 2022-10-29_1.6.59 or later using the TrueNAS web UI.

Your app logs display an error similar to the following:

`ERROR Unable to use the drive /export: Drive /export: found backend type fs, expected xl or xl-single: Invalid arguments specified.`

If you get this error after upgrading your MinIO app, use the app **Roll Back** function, found on the **Application Info** widget on the **Installed** applications screen, and return to 2022-10-24_1.6.58 to make your MinIO app functional again.

{{< trueimage src="/images/SCALE/Apps/MinioApplicationInforWidgetWithRollBack.png" alt="Minio Application Info Roll Back" id="Minio Application Info Roll Back" >}}

You need [WSL2 (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) if you are using a Windows computer.

## Manually Updating MinIO
If your system has sharing (SMB, NFS, iSCSI) configured, disable the share service before adding and configuring a new MinIO deployment.
After completing the installation and starting MinIO, enable the share service.

When adding a new MinIO deployment, verify your storage settings are correct in the MinIO application configuration. If not set, click **Install** and enter the required information.

To manually update your MinIO application:

1. [Create a new MinIO deployment](#creating-a-new-minio-deployment).
2. [Download the MinIO client](#downloading-the-minio-client).
3. [Add both TrueNAS MinIO deployments to mc.exe](#adding-both-truenas-minio-deployments-to-mc).
4. [Port both configurations into the new deployment](#porting-configurations-from-old-to-new-minio-deployment).
5. [Restart the MinIO service](#restarting-the-minio-service).
6. [Port bucket data into the new deployment](#porting-bucket-data-from-old-to-new-deployment).
7. [Port Identity and Access Management settings](#porting-identity-and-access-management-iam-settings).
8. [Move objects and data](#moving-objects-and-data).
9. [Delete the old app](#deleting-the-old-app).

### Creating a New MinIO Deployment

Follow the instructions [here]({{< relref "/content/TruenasApps/StableApps/MinIOApp/_index.md" >}}) to make a new, up-to-date MinIO deployment in TrueNAS.
Make sure it is version **2022-10-29_1.6.59** or later.

### Downloading the MinIO Client

[Download the MinIO Client here](https://min.io/docs/minio/linux/reference/minio-mc.html?ref=docs) for your OS and follow the installation instructions.
The MinIO Client (mc) lets you create and manage MinIO deployments via your system command prompt.

### Adding both TrueNAS MinIO Deployments to mc.exe
Open a terminal or CLI.

If you are on a Windows computer, open PowerShell and enter `wsl` to switch to the Linux subsystem.

Change directories to the folder that contains <file>mc.exe</file>.

Add your old deployment to mc by entering: <code>./mc alias set <i>old-deployment-name</i> http://<i>IPaddress</i>:<i>port</i>/ <i>rootuser rootpassword</i></code>.

{{< expand "Example" "v" >}}
<code><i>old-deployment-name</i></code> is your old MinIO app name in TrueNAS.

<code>http://<i>IPaddress</i>:<i>port</i>/</code> is the IP address and port number the app uses, entered with the IP address and port number separated by the colon (:)

<code><i>rootuser</i></code> is the root username.

<code><i>rootpassword</i></code> is the root password.

{{< trueimage src="/images/SCALE/Apps/MinioClientAddDeployment1.png" alt="Add Old Deployment" id="Add Old Deployment" >}}
{{< /expand >}}

Add your new deployment to mc using the same command with the new alias: <code>./mc alias set <i>new-deployment-name</i> http://<i>IPaddress</i>:<i>port</i>/ <i>rootuser rootpassword</i></code>.

{{< expand "Example" "v" >}}
<code><i>new-deployment-name</i>/</code> is your new MinIO app name in TrueNAS.

<code>http://<i>IPaddress</i>:<i>port</i>/</code> is the IP address and port number the app uses, entered with the IP address and port number separated by the colon (:)

<code><i>rootuser</i></code> is the root username.

<code><i>rootpassword</i></code> is the root password.

{{< trueimage src="/images/SCALE/Apps/MinioClientAddDeployment2.png" alt="Add New Deployment" id="Add New Deployment" >}}
{{< /expand >}}

### Porting Configurations from Old to New MinIO Deployment

To port your configuration from your old MinIO deployment to your new, export your old MinIO app configurations by entering <code>./mc.exe admin config export <i>old-deployment-name</i> > <i>config.txt</i></code>.

MinIO Client exports the config file to the current directory path.

{{< expand "Example" "v" >}}
<code><i>old-deployment-name` is your old MinIO app name in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/MinIOClientConfigExport.png" alt="Export Configuration" id="Export Configuration" >}}

In this case, the config file exports to the user downloads folder.
{{< /expand >}}

Next, import the old app config file into the new app by entering: <code>./mc.exe admin config import <i>old-deployment-name</i> < <i>config.txt</i></code>.

{{< expand "Example" "v" >}}
<code><i>new-deployment-name</i>/</code> is your new MinIO app name in TrueNAS.

<code><i>config.txt</i>/</code> is the config file name.

{{< trueimage src="/images/SCALE/Apps/MinIOClientConfigImport.png" alt="Import Configuration" id="Import Configuration" >}}
{{< /expand >}}

### Restarting the MinIO Service

Restart the new MinIO app to apply the configuration changes.

<code>./mc.exe admin service restart <i>new-minio-deployment</i></code>

{{< expand "Example" "v" >}}
<code><i>new-deployment-name</i></code> is your new MinIO app name in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/MinioClientRestartService.png" alt="Restart MinIO App" id="Restart MinIO App" >}}
{{< /expand >}}

### Porting Bucket Data from Old to New Deployment

Export the old app bucket metadata by entering <code>./mc.exe admin cluster bucket export <i>old-minio-deployment</i></code>.

Import the metadata into the new app with <code>./mc.exe admin cluster bucket import <i>new-minio-deployment cluster-metadata.zip</i></code>

{{< expand "Example" "v" >}}
<code><i>old-deployment-name</i></code> is your old MinIO app name in TrueNAS.

<code><i>new-deployment-name</i></code> is your new MinIO app name in TrueNAS.

<code><i>cluster-metadata.zip</i></code> is the metadata zip file name.

{{< trueimage src="/images/SCALE/Apps/MinIOClientBucketExport.png" alt="Export Bucket Metadata" id="Export Bucket Metadata" >}}

{{< trueimage src="/images/SCALE/Apps/MinIOClientBucketImport.png" alt="Import Bucket Metadata" id="Import Bucket Metadata" >}}
{{< /expand >}}

### Porting Identity and Access Management (IAM) Settings

Export the old app IAM settings by entering <code>./mc.exe admin cluster iam export <i>old-minio-deployment</i></code>.

Import the IAM settings into the new app with <code>./mc.exe admin cluster iam import <i>new-minio-deployment alias-iam-info.zip</i></code>.

{{< expand "Example" "v" >}}
<code><i>old-deployment-name</i></code> is your old MinIO app name in TrueNAS.

<code><i>new-deployment-name</i></code> is your new MinIO app name in TrueNAS.

<code><i>alias-iam-info.zip</i></code> is the IAM settings zip file name.

{{< trueimage src="/images/SCALE/Apps/MinIOClientBucketExport.png" alt="Export IAM Settings" id="Export IAM Settings" >}}

{{< trueimage src="/images/SCALE/Apps/MinIOClientIAMImport.png" alt="Import IAM Settings" id="Import IAM Settings" >}}
{{< /expand >}}

### Moving Objects and Data

Create buckets in your new MinIO app to move data and objects to.

Move the objects and data from your old MinIO app to your new one using <code>./mc.exe mirror --preserve --watch <i>source/bucket target/bucket</i></code>.

Repeat for every bucket you intend to move.

{{< expand "Example" "v" >}}
<code><i>source/bucket</i></code> is your old MinIO app name in TrueNAS and one of its buckets.

<code><i>target/bucket</i></code> is your new MinIO app name in TrueNAS and one of its buckets.

{{< trueimage src="/images/SCALE/Apps/MinioClientMoveData.png" alt="Move Data to New Deployment" id="Move Data to New Deployment" >}}
{{< /expand >}}

### Deleting the Old App

After moving all data from the old app to the new one, return to the TrueNAS UI **Apps** screen and stop both MinIO apps.

Delete the old MinIO app. Edit the new one and change the API and UI Access Node Ports to match the old MinIO app.

Restart the new app to finish migrating.

When complete and the app is running, restart any share services.