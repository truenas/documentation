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

## Overview

MinIO fails to deploy if you update your version 2022-10-24_1.6.58 Minio app to 2022-10-29_1.6.59 or later using the TrueNAS web UI.

Your app logs display an error similar to the following:

`ERROR Unable to use the drive /export: Drive /export: found backend type fs, expected xl or xl-single: Invalid arguments specified.`

If you get this error after upgrading your MinIO app, use the app **Roll Back** function and return to 2022-10-24_1.6.58 to make your MinIO app functional again. 

You will need [WSL2 (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) if you are using a Windows computer.

![MinioRollBack](/images/SCALE/MinioRollBack.png "MinIO Roll Back")

## Manual Update Process

### Create a New MinIO Deployment

Follow the instructions [here]({{< relref "/content/SCALE/SCALETutorials/Apps/MinIOClustersSCALE/_index.md" >}}) to make a new, up-to-date MinIO deployment in TrueNAS. Make sure it is version 2022-10-29_1.6.59 or later.

![MinIOClientISetupNewDeployment](/images/SCALE/MinIOClientISetupNewDeployment.png "Set Up New Deployment")

### Download MinIO Client

[Download the MinIO Client here](https://min.io/docs/minio/linux/reference/minio-mc.html?ref=docs) for your OS and follow the installation instructions. The MinIO Client (mc) lets you create and manage MinIO deployments via your system command prompt. 

### Add both TrueNAS MinIO Deployments to MC

Open a terminal or CLI. 

If you are on a Windows computer, open PowerShell and enter `wsl` to switch to the Linux subsystem.

Change directories to the folder that contains mc.exe.

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

### Port the configurations from the old MinIO deployment into the new one.

Export your old MinIO app configurations by entering `./mc.exe admin config export old-deployment-name > config.txt`.

MinIO Client exports the config file to the current directory path.

{{< expand "Example" "v" >}}
`old-deployment-name` is your old MinIO app name in TrueNAS.

![MinIOClientConfigExport](/images/SCALE/MinIOClientConfigExport.png "Export Configuration")

In this case, the config file exports to the User Downloads folder.
{{< /expand >}}

Import the old app config file into the new app by entering: `./mc.exe admin config import old-deployment-name < config.txt`.

{{< expand "Example" "v" >}}
`new-deployment-name` is your new MinIO app name in TrueNAS.

`config.txt` is the config file name.

![MinIOClientConfigImport](/images/SCALE/MinIOClientConfigImport.png "Import Configuration")
{{< /expand >}}

### Restart the MinIO service

Restart the new MinIO app to apply the configuration changes.

`./mc.exe admin service restart new-minio-deployment`

{{< expand "Example" "v" >}}
`new-deployment-name` is your new MinIO app name in TrueNAS.

![MinioClientRestartService](/images/SCALE/MinioClientRestartService.png "Restart MinIO App")
{{< /expand >}}

### Port bucket data from the old deployment into the new one.

Export the old app bucket metadata by entering `./mc.exe admin cluster bucket export old-minio-deployment`.

Import the metadata into the new app with `./mc.exe admin cluster bucket import new-minio-deployment cluster-metadata.zip`

{{< expand "Example" "v" >}}
`old-deployment-name` is your old MinIO app name in TrueNAS.

`new-deployment-name` is your new MinIO app name in TrueNAS.

`cluster-metadata.zip` is the metadata zip file name.

![MinIOClientBucketExport](/images/SCALE/MinIOClientBucketExport.png "Export Bucket Metadata")

![MinIOClientBucketImport](/images/SCALE/MinIOClientBucketImport.png "Import Bucket Metadata")
{{< /expand >}}

### Port Identity and Access Management (IAM) Settings

Export the old app IAM settings by entering `./mc.exe admin cluster iam export old-minio-deployment`.

Import the IAM settings into the new app with `./mc.exe admin cluster iam import new-minio-deployment alias-iam-info.zip`.

{{< expand "Example" "v" >}}
`old-deployment-name` is your old MinIO app name in TrueNAS.

`new-deployment-name` is your new MinIO app name in TrueNAS.

`alias-iam-info.zip` is the IAM settings zip file name.

![MinIOClientIAMExport](/images/SCALE/MinIOClientBucketExport.png "Export IAM Settings")

![MinIOClientIAMImport](/images/SCALE/MinIOClientIAMImport.png "Import IAM Settings")
{{< /expand >}}

### Move Objects and Data

Create buckets in your new MinIO app to move data and objects to.

Move the objects and data from your old MinIO app to your new one using `./mc.exe mirror --preserve --watch source/bucket target/bucket`.

Repeat for every bucket you intend to move.

{{< expand "Example" "v" >}}
`source/bucket` is your old MinIO app name in TrueNAS and one of its buckets.

`target/bucket` is your new MinIO app name in TrueNAS and one of its buckets.

![MinioClientMoveData](/images/SCALE/MinioClientMoveData.png "Move Data to New Deployment")
{{< /expand >}}

### Delete Old App

After you have moved all data from the old app to the new one, return to the TrueNAS UI **Apps** screen and stop both Minio apps.

Delete the old MinIO app. Edit the new one and change the API and UI Access Node Ports to match the old MinIO app.

Restart the new app to finish migrating.

{{< taglist tag="scaleminio" limit="10" >}}