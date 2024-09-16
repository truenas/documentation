---
title: "MinIO"
description: "Tutorials for installing and using the MinIO charts application available in the stable train in TrueNAS SCALE."
geekdocCollapseSection: true
weight:
aliases: 
 - /scale/scaletutorials/apps/minioclustersscale/
 - /scale/scaletutorials/apps/communityapps/minioclustersscale/miniomanualupdate/
 - /scale/scaletutorials/systemsettings/services/s3servicescale/
 - /scale/scaleuireference/systemsettings/services/s3servicescreen/
 - /scale/scaletutorials/apps/chartapps/minioapp/
 - /scale/scaletutorials/apps/stableapps/minioapp/
tags:
- s3
- apps
keywords:
- nas data storage
- software storage solutions
- object based storage
---

{{< include file="/static/includes/AppsUnversioned.md" >}}

This section has tutorials for using the MinIO apps available for TrueNASE.

TrueNAS has two version of the MinIO application.
The stable train version of the MinIO S3 application is found in the **stable** train that includes the applications in GitHub TrueNAS/charts repository.
The smaller MinIO Enterprise version of the application, tested and polished for a safe and supportable experience for TrueNAS Enterprise customers, is found in the **enterprise** train.
Community members can install either version of this application.

{{< expand "Adding the MinIO (Enterprise) App" "v" >}}
To add the Enterprise MinIO application to the list of available applications: 
{{< include file="/static/includes/AddEnterpriseTrain.md" >}}

Both the **stable** and **enterprise** train versions of the MinIO app widget display on the **Discover** application screen.

![DiscoverScreenMinIOAppWidgets](/images/SCALE/Apps/DiscoverScreenMinIOAppWidgets.png "MinioApp Widgets")

{{< /expand >}}
MinIO High Performance Object Storage, released under the Apache Licenses v2.0 is an open source Amazon S3 cloud storage compatible object storage solution.

The Minio applications, **stable** and **enterprise** train versions, allow users to build high performance infrastructure for machine learning, analytics, and application data workloads.

MinIO supports [distributed mode](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect).
Distributed mode, allows pooling multiple drives, even on different systems, into a single object storage server.
For information on configuring a distributed mode cluster in TrueNAS using MinIO, see [Setting Up MinIO Clustering]({{< relref "MinIOClustering.md" >}}).

For information on installing and configuring MinIO Enterprise, see [Installing MinIO Enterprise]({{< relref "/content/TruenasApps/EnterpriseApps/MinIO/_index.md" >}}).

## Installing MinIO (S3) Community App
This procedure covers the basic requirements and instruction on installing and configuring the non-enterprise version of the MinIO application in the **stable** train.
For instructions on installing the Enterprise version of the MinIO application see [Configuring
Enterprise MinIO]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}).

### Before You Begin

{{< include file="/static/includes/MinIODatasetRequirements.md" >}}

### Configuring MinIO (S3) Community App

{{< include file="/static/includes/MinIOInstallAppNameAndVersion.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/static/includes/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< include file="/static/includes/MinIOPortsAndLogSearch.md" >}}

{{< include file="/static/includes/MinIOStorageDataVolume.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioStorageAddExtraHostPathVol.png" alt="Add Host Path Volume" id="Add Host Path Volume" >}}

Click **Add** and to add the mount and host path fields for each additional dataset if you want to create volumes for postgres data and postgres backup.

{{< include file="/static/includes/MinIODNSAndResourceLimits.md" >}}

The **Installed** applications screen displays showing the MinIO application in the **Deploying** state.
It changes to **Running** when the application is ready to use.

{{< trueimage src="/images/SCALE/Apps/MinIOAppInstalled.png" alt="MinIO App Installed" id="MinIO App Installed" >}}

Click **Web Portal** to open the MinIO sign-in screen.

{{< trueimage src="/images/SCALE/Login/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="MinIO Sign-In Screen" >}}

## Understanding MinIO Wizard Settings
The following section provide more detailed explanations of the settings found in each section of the **Install MinIO** configuration screen.

### Application Name

{{< include file="/static/includes/AppsWizardAppNameAndVersion.md" >}}

### MinIO Configuration
The **MinIO Configuration** section provides options to set up a cluster, add arguments, credentials, and environment variables to the deployment.

{{< include file="/static/includes/MinIOEnableDistributedModeInfo.md" >}}

The app is preconfigured with the arguments needed to deploy a container. Do not enter the **server** and URL argument earlier versions of the app required.

Enter the name for the root user (MinIO access key) in **Root User**. Enter a name of five to 20 characters in length. For example *admin* or *admin1*.
Next enter the root user password (MinIO secret key) in **Root Password**. Enter eight to 40 random characters. For example *MySecr3tPa$$w0d4Min10*.

The **Extra Arguments** and **Extra Environment Variables** settings are not required to deploy the application.

### Network Configuration
Accept the default port settings in **Network Configuration**.
Before changing ports, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/).

{{< trueimage src="/images/SCALE/Apps/InstallMinioConfigPortsAndLogSearch.png" alt="Network Configuration Settings" id="Network Configuration Settings" >}}

MinIO does not require adding a certificate or configuring DNS options.
Accept the default settings or click **Add** to the right of **DNS Options** to show the **Name** and **Value** fields for a DNS option.

{{< trueimage src="/images/SCALE/Apps/InstallMinioAdvancedDNSSettings.png" alt="MinIO Advanced DNS Settings" id="MinIO Advanced DNS Settings" >}}

### Storage Configuration
MinIO storage settings include the option to add mount paths and storage volumes to use inside the container (pod).
Storage configuration uses both the default **/export** and **/data** mount paths created in [First Steps](#before-you-begin) above.

{{< include file="/static/includes/MinIOStorageDataVolume.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioStorageAddExtraHostPathVol.png" alt="Add Host Path Volume" id="Add Host Path Volume" >}}

### Resource Configuration
By default, this application is limited to use no more than **4** CPU cores and **8** Gigabytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallMinioAddResourceLimits.png" alt="MinIO Resource Configuration" id="MinIO Resource Configuration" >}}

To customize the CPU and memory allocated to the container (pod) the MinIO app uses, tune thwa limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
