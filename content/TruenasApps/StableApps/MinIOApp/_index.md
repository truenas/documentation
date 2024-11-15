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
 - /truenasapps/communityapps/minioapp/
tags:
- s3
- apps
keywords:
- nas data storage
- software storage solutions
- object based storage
---


{{< include file="/static/includes/ProposeArticleChange.md" >}}

MinIO High Performance Object Storage, released under the Apache Licenses v2.0 is an open source Amazon S3 cloud storage compatible object storage solution.
The TrueNAS MinIO applications allow users to build high performance infrastructure for machine learning, analytics, and application data workloads.

TrueNAS has two version of the MinIO application, a **stable** and **enterprise** train version.
The tutorials in this section cover installing the TrueNAS **stable** train version of the MinIO.

The smaller MinIO **enterprise** train version of the application is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
Community members can install either version of this application.

{{< expand "Adding the MinIO (Enterprise) App" "v" >}}
To add the Enterprise MinIO application to the list of available applications: 
{{< include file="/static/includes/apps/AddEnterpriseTrain.md" >}}

Both the **stable** and **enterprise** train versions of the MinIO app widget display on the **Discover** application screen.

![DiscoverScreenMinIOAppWidgets](/images/SCALE/Apps/DiscoverScreenMinIOAppWidgets.png "Minio App Widgets")

{{< /expand >}}

## Installing MinIO (S3) App
This procedure covers the basic requirements and instruction on installing and configuring the MinIO application in the **stable** train.
For instructions on installing the Enterprise version of the MinIO application see [Configuring
Enterprise MinIO]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}).

### Before You Begin
Before you install the **stable** version of the MinIO app:

{{< include file="/static/includes/apps/AppsStableBeforeYouBegin.md" >}}

{{< include file="/static/includes/apps/MinIODatasetRequirements.md" >}}

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.

### Configuring MinIO (S3) Community App
{{< hint info >}}
This basic procedure covers the required MinIO stable app settings.
For optional settings, see [Understanding MinIO Wizard Settings](#understanding-minio-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioS3Screen.png" alt="MinIO Install Wizard Screen" id="MinIO Install Wizard Screen" >}}

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

{{< include file="/static/includes/apps/AddMultipleAppInstancesAndNaming.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/static/includes/apps/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< include file="/static/includes/apps/MinIOPortsAndLogSearch.md" >}}

MinIO uses two datasets and mount paths. Set the first to **/export** with the host path set to the **export** dataset.
The other mount point is **/data** with the host path set to the **data** dataset.

{{< include file="/static/includes/apps/MinIOStorageDataVolume.md" >}}

Select **Enable ACL** for the **/export** storage volume, enter **473** as the user and give it full permissions.
Repeat for the **/data** storage volume.

{{< trueimage src="/images/SCALE/Apps/MinIOConfigExportAndDataACLACESettings.png" alt="Export and Data Host Path ACL and ACE Settings" id="Export and Data Host Path ACL and ACE Settings" >}}

{{< include file="/static/includes/apps/MinIOCompleteInstall.md" >}}

## Understanding MinIO Wizard Settings
The following section provide more detailed explanations of the settings found in each section of the **Install MinIO** configuration screen.

### Application Name

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

### MinIO Configuration
MinIO credentials establish the login credentials for the MinIO web portal and the MinIO administration user, and to enter extra arguments, or environment variables to the deployment.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOConfigSettings.png" alt="MinIO Configuration Settings" id="MinIO Configuration Settings" >}}

Enter existing MinIO credentials if you already have a MinIO account, or create new login credentials for the first time you log into MinIO.

Enter a username for the root user (MinIO access key) in **MinIO Root User** that is limited to five to 20 characters long. For example *admin* or *admin1*.

Enter the root user password (MinIO secret key) in **MinIO Root Password** that is limited to eight to 40 random characters. For example, *MySecr3tPa$$w0d4Min10*.

{{< include file="/static/includes/apps/MinIOEnableDistributedModeInfo.md" >}}

The app is preconfigured with the arguments needed to deploy a container. Do not enter the **server** and URL argument earlier versions of the app required.

Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.

{{< hint type=warning >}}
Keep all passwords and credentials secured and backed up.
{{< /hint >}}

The **Extra Arguments** and **Extra Environment Variables** settings are not required to deploy the application as the app is preconfigured with the arguments needed to deploy a container.
Do not enter the **server** and URL argument required in earlier versions of the app.

### Network Configuration
Network configuration settings set the port number to access the MinIO API and console port.

Accept the default port settings in **Network Configuration**.
Before changing ports, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/).

{{< trueimage src="/images/SCALE/Apps/InstallMinIONetworkConfigSettings.png" alt="Network Configuration Settings" id="Network Configuration Settings" >}}

The **Certificates** setting is not required for a basic configuration but is required when setting up multi-mode configurations with the Enterprise version of the MinIO app and when using MinIO as an immutable target for Veeam Backup and Replication.

{{< include file="/static/includes/apps/AddAppCertificate.md" >}}

To add advanced DNS settings click **Add** to the right of **DNS Options**.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOACLConfigSettings.png" alt="ACL Configuration Settings" id="ACL Configuration Settings" >}}

### Storage Configuration
MinIO storage settings include the option to add mount paths and storage volumes to use inside the container (pod).
Storage configuration uses both the default **/export** and **/data** mount paths. See [First Steps](#before-you-begin) above for more information.

{{< include file="/static/includes/apps/MinIOStorageDataVolume.md" >}}

{{< trueimage src="/images/SCALE/Apps/MinIOConfigExportAndDataACLACESettings.png" alt="Export and Data Host Path ACL and ACE Settings" id="Export and Data Host Path ACL and ACE Settings" >}}

#### Mounting an SMB Share
The TrueNAS MinIO app includes the option to mount an SMB share inside the container pod.

{{< include file="/static/includes/AppWizardStorageSMBOption.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOResourcesConfig.png" alt="MinIO Resource Limits" id="MinIO Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
