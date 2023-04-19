---
title: "Updating MinIO from 1.6.58"
description: "This article provides information on updating MinIO from 1.6.58 to newer versions."
weight: 10
tags:
- scaleminio
- scaledocker
- scaleapps
---


{{< toc >}}


{{< hint info >}}
This article applies to the public release of the **MinIO Official Charts** application.
{{< /hint >}}

## Manual Update Overview

MinIO fails to deploy if you update your version 2022-10-24_1.6.58 Minio app to 2022-10-29_1.6.59 or later using the TrueNAS web UI.

Your app logs display an error similar to the following:

`ERROR Unable to use the drive /export: Drive /export: found backend type fs, expected xl or xl-single: Invalid arguments specified.`

If you get this error after upgrading your MinIO app, use the app **Roll Back** function and return to 2022-10-24_1.6.58 to make your MinIO app functional again. 

You need [WSL2 (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) if you are using a Windows computer.

![MinioRollBack](/images/SCALE/MinioRollBack.png "MinIO Roll Back")

## Manually Updating MinIO
If your system has sharing (SMB, NFS, iSCSI) configured, disable the share service before adding and configuring a new MinIO deployment. 
After completing the installation and starting MinIO, enable the share service.

If the dataset for the MinIO share has the same path as the MinIO application, disable host path validation before starting MinIO. 
To use host path validation set up a new dataset for the application with a completely different path. For example, for the share */pool/shares/minio* and for the application */pool/apps/minio*.

When adding a new MinIO deployment, verify your storage settings are correct in the MinIO wizard. If not set, click **Add** and enter the required information.

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

Follow the instructions [here]({{< relref "/content/SCALE/SCALETutorials/Apps/MinIOClustersSCALE/_index.md" >}}) to make a new, up-to-date MinIO deployment in TrueNAS. 
Make sure it is version 2022-10-29_1.6.59 or later.

![MinIOClientISetupNewDeployment](/images/SCALE/MinIOClientISetupNewDeployment.png "Set Up New Deployment")

### Downloading the MinIO Client

[Download the MinIO Client here](https://min.io/docs/minio/linux/reference/minio-mc.html?ref=docs) for your OS and follow the installation instructions. 
The MinIO Client (mc) lets you create and manage MinIO deployments via your system command prompt. 

### Adding both TrueNAS MinIO Deployments to mc.exe

Open a terminal or CLI. 

If you are on a Windows computer, open PowerShell and enter `wsl` to switch to the Linux subsystem.

Change directories to the folder that contains <file>mc.exe</file>.

Add your old deployment to mc by entering: `./mc alias set old-deployment-name http://IPaddress:port/ rootuser rootpassword`.

{{< expand "Example" "v" >}}
`old-deployment-name` is your old MinIO app name in TrueNAS.

`http://IPaddress:port/` is the IP address and port number the app uses.

`rootuser` is the root username.

`rootpassword` is the root password.

![MinioClientAddDeployment1](/images/SCALE/MinioClientAddDeployment1.png "Add Old Deployment")
{{< /expand >}}

Add your new deployment to mc using the same command with the new alias: `./mc alias set new-deployment-name http://IPaddress:port/ rootuser rootpassword`.

{{< expand "Example" "v" >}}
`new-deployment-name` is your new MinIO app name in TrueNAS.

`http://IPaddress:port/` is the IP address and port number the app uses.

`rootuser` is the root username.

`rootpassword` is the root password.

![MinioClientAddDeployment2](/images/SCALE/MinioClientAddDeployment2.png "Add New Deployment")
{{< /expand >}}

### Porting Configurations from Old to New MinIO Deployment

To port your configuration from your old MinIO deployment to your new, export your old MinIO app configurations by entering `./mc.exe admin config export old-deployment-name > config.txt`.

MinIO Client exports the config file to the current directory path.

{{< expand "Example" "v" >}}
`old-deployment-name` is your old MinIO app name in TrueNAS.

![MinIOClientConfigExport](/images/SCALE/MinIOClientConfigExport.png "Export Configuration")

In this case, the config file exports to the User Downloads folder.
{{< /expand >}}

Next, import the old app config file into the new app by entering: `./mc.exe admin config import old-deployment-name < config.txt`.

{{< expand "Example" "v" >}}
`new-deployment-name` is your new MinIO app name in TrueNAS.

`config.txt` is the config file name.

![MinIOClientConfigImport](/images/SCALE/MinIOClientConfigImport.png "Import Configuration")
{{< /expand >}}

### Restarting the MinIO Service

Restart the new MinIO app to apply the configuration changes.

`./mc.exe admin service restart new-minio-deployment`

{{< expand "Example" "v" >}}
`new-deployment-name` is your new MinIO app name in TrueNAS.

![MinioClientRestartService](/images/SCALE/MinioClientRestartService.png "Restart MinIO App")
{{< /expand >}}

### Porting Bucket Data from Old to New Deployment

Export the old app bucket metadata by entering `./mc.exe admin cluster bucket export old-minio-deployment`.

Import the metadata into the new app with `./mc.exe admin cluster bucket import new-minio-deployment cluster-metadata.zip`

{{< expand "Example" "v" >}}
`old-deployment-name` is your old MinIO app name in TrueNAS.

`new-deployment-name` is your new MinIO app name in TrueNAS.

`cluster-metadata.zip` is the metadata zip file name.

![MinIOClientBucketExport](/images/SCALE/MinIOClientBucketExport.png "Export Bucket Metadata")

![MinIOClientBucketImport](/images/SCALE/MinIOClientBucketImport.png "Import Bucket Metadata")
{{< /expand >}}

### Porting Identity and Access Management (IAM) Settings

Export the old app IAM settings by entering `./mc.exe admin cluster iam export old-minio-deployment`.

Import the IAM settings into the new app with `./mc.exe admin cluster iam import new-minio-deployment alias-iam-info.zip`.

{{< expand "Example" "v" >}}
`old-deployment-name` is your old MinIO app name in TrueNAS.

`new-deployment-name` is your new MinIO app name in TrueNAS.

`alias-iam-info.zip` is the IAM settings zip file name.

![MinIOClientIAMExport](/images/SCALE/MinIOClientBucketExport.png "Export IAM Settings")

![MinIOClientIAMImport](/images/SCALE/MinIOClientIAMImport.png "Import IAM Settings")
{{< /expand >}}

### Moving Objects and Data

Create buckets in your new MinIO app to move data and objects to.

Move the objects and data from your old MinIO app to your new one using `./mc.exe mirror --preserve --watch source/bucket target/bucket`.

Repeat for every bucket you intend to move.

{{< expand "Example" "v" >}}
`source/bucket` is your old MinIO app name in TrueNAS and one of its buckets.

`target/bucket` is your new MinIO app name in TrueNAS and one of its buckets.

![MinioClientMoveData](/images/SCALE/MinioClientMoveData.png "Move Data to New Deployment")
{{< /expand >}}

### Deleting the Old App

After moving all data from the old app to the new one, return to the TrueNAS UI **Apps** screen and stop both MinIO apps.

Delete the old MinIO app. Edit the new one and change the API and UI Access Node Ports to match the old MinIO app.

Restart the new app to finish migrating.

When complete and the app is running, restart any share services.

{{< taglist tag="scaleminio" limit="10" >}}