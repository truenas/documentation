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
 - /truenasapps/stableapps/minioapp/minioclustering/
tags:
- s3
- apps
- clustering
keywords:
- nas data storage
- software storage solutions
- object based storage
---


This section includes tutorials for using the MinIO **stable** app available in TrueNAS.

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

MinIO **enterprise** supports multi-node deployments that replace the now deprecated [distributed mode](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect).
Multi-mode deployments allow pooling multiple drives, even on different systems, into a single object storage server.
For information on configuring a multi-mode cluster in TrueNAS using MinIO Enterprise, see [Installing MinIO Enterprise]({{< relref "/content/TruenasApps/EnterpriseApps/MinIO/_index.md" >}}).

## Installing MinIO (S3) Stable App
This procedure covers the basic requirements and instruction on installing and configuring the non-enterprise version of the MinIO application in the **stable** train.
For instructions on installing the Enterprise version of the MinIO application see [Configuring Enterprise MinIO]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}).

### Before You Begin

{{< include file="/static/includes/MinIODatasetRequirements.md" >}}

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.

### Configuring MinIO (S3) Stable App
{{< hint info >}}
This basic procedure covers the required MinIO app settings.
For optional settings, see [Understanding MinIO Wizard Settings](#understanding-minio-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/AddMultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/MinIOInstallAppNameAndVersion.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/static/includes/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< include file="/static/includes/MinIOStorageDataVolume.md" >}}

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
MinIO credentials establish the login credentials for the MinIO web portal and the MinIO administration user.
The **MinIO Configuration** section provides options to add MinIO credentials, extra arguments, and environment variables to the deployment.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOConfigSettings.png" alt="MinIO Configuration Settings" id="MinIO Configuration Settings" >}}

Enter existing MinIO credentials if you already have a MinIO account, or create new login credentials for the first time you log into MinIO.

Enter a username for the root user (MinIO access key) in **MinIO Root User** that is limited to five to 20 characters long. For example *admin* or *admin1*.

Enter the root user password (MinIO secret key) in **MinIO Root Password** that is limited to eight to 40 random characters. For example, *MySecr3tPa$$w0d4Min10*.

Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.

{{< hint type=warning >}}
Keep all passwords and credentials secured and backed up.
{{< /hint >}}

The **Extra Arguments** and **Extra Environment Variables** settings are not required to deploy the application as the app is preconfigured with the arguments needed to deploy a container. Do not enter the **server** and URL argument required in earlier versions of the app.

### Network Configuration
Network configuration settings set the port number to access the MinIO API and console port.
Accept the default port settings in **Network Configuration**.
Before changing ports, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/).

{{< trueimage src="/images/SCALE/Apps/InstallMinIONetworkConfigSettings.png" alt="Network Configuration Settings" id="Network Configuration Settings" >}}

MinIO does not require adding a certificate or configuring DNS options.
Accept the default settings or click **Add** to the right of **DNS Options** to show the **Name** and **Value** fields for a DNS option.

The **Certificates** setting is not required for a basic configuration but is required when setting up multi-mode configurations with the Enterprise version of the MinIO app and when using MinIO as an immutable target for Veeam Backup and Replication.

{{< include file="/static/includes/AddAppCertificate.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioAdvancedDNSSettings.png" alt="MinIO Advanced DNS Settings" id="MinIO Advanced DNS Settings" >}}

### Storage Configuration
MinIO storage settings include the option to add storage volumes to use inside the container (pod).
To allow TrueNAS to create a storage volume, leave **Type** set to the default **ixVolume *(Dataset created automatically by the system)**.
This adds a storage volume for the application that can be found nested under the **ix-apps** dataset. 
To see this, create a recursive snapshot of the **ix-apps** dataset.

Storage configuration uses both the default **/export** and **/data** data sets and mount paths created in [First Steps](#before-you-begin) above.

{{< include file="/static/includes/MinIOStorageDataVolume.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="Syncthing Enterprise Resource Limits" id="Syncthing Enterprise Resource Limits" >}}

{{< include file="/static/includes/AppInstallWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
