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


MinIO High Performance Object Storage, released under the Apache Licenses v2.0 is an open source Amazon S3 cloud storage compatible object storage solution.
The TrueNAS MinIO applications allow users to build high performance infrastructure for machine learning, analytics, and application data workloads.

TrueNAS has two version of the MinIO application, a **stable** and **enterprise** train version.
The tutorials in this section cover installing the TrueNAS **stable** train version of the MinIO.

The smaller MinIO **enterprise** train version of the application is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
Community members can install either version of this application.

{{< expand "Adding the MinIO (Enterprise) App" "v" >}}
To add the Enterprise MinIO application to the list of available applications: 
{{< include file="/static/includes/AddEnterpriseTrain.md" >}}

Both the **stable** and **enterprise** train versions of the MinIO app widget display on the **Discover** application screen.

![DiscoverScreenMinIOAppWidgets](/images/SCALE/Apps/DiscoverScreenMinIOAppWidgets.png "Minio App Widgets")

{{< /expand >}}

## Installing MinIO (S3) App
This procedure covers the basic requirements and instruction on installing and configuring the MinIO application in the **stable** train.
For instructions on installing the Enterprise version of the MinIO application see [Configuring
Enterprise MinIO]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}).

### Before You Begin

{{< include file="/static/includes/MinIODatasetRequirements.md" >}}

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.

### Configuring MinIO (S3) App

{{< include file="/static/includes/MinIOInstallAppNameAndVersion.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/static/includes/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< include file="/static/includes/MinIOPortsAndLogSearch.md" >}}

{{< include file="/static/includes/MinIOStorageDataVolume.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioStorageAddExtraHostPathVol.png" alt="Add Host Path Volume" id="Add Host Path Volume" >}}

Select **Enable ACL** for the **/export** storage volume, enter **473** as the user and give it full permissions.
Repeat for the **/data** storage volume.

{{< trueimage src="/images/SCALE/Apps/MinIOConfigExportAndDataACLACESettings.png" alt="Export and Data Host Path ACL and ACE Settings" id="Export and Data Host Path ACL and ACE Settings" >}}

See [Storage Configuration](#storage-configuration) for more information on setting ACLs in the installation wizard.

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
MinIO credentials establish the login credentials for the MinIO web portal and the MinIO administration user, and to enter extra arguments, or environment variables to the deployment.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOConfigSettings.png" alt="MinIO Configuration Settings" id="MinIO Configuration Settings" >}}

Enter existing MinIO credentials if you already have a MinIO account, or create new login credentials for the first time you log into MinIO.

Enter a username for the root user (MinIO access key) in **MinIO Root User** that is limited to five to 20 characters long. For example *admin* or *admin1*.

Enter the root user password (MinIO secret key) in **MinIO Root Password** that is limited to eight to 40 random characters. For example, *MySecr3tPa$$w0d4Min10*.

{{< include file="/static/includes/MinIOEnableDistributedModeInfo.md" >}}

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

{{< include file="/static/includes/AddAppCertificate.md" >}}

To add advanced DNS settings click **Add** to the right of **DNS Options**.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOACLConfigSettings.png" alt="ACL Configuration Settings" id="ACL Configuration Settings" >}}

### Storage Configuration
MinIO storage settings include the option to add storage volumes to use inside the container (pod).
To allow TrueNAS to create a storage volume, leave **Type** set to the default **ixVolume *(Dataset created automatically by the system)**.
This adds a storage volume for the application that can be found nested under the **ix-apps** dataset. 
To see this, create a recursive snapshot of the **ix-apps** dataset.

Storage configuration uses both the default **/export** and **/data** data sets and mount paths created in [First Steps](#before-you-begin) above.

{{< include file="/static/includes/MinIOStorageDataVolume.md" >}}

#### ACL Configuration Settings
To deploy the MinIO app, you must configure the ACL and ACE settings for both the **/export** and **/data** storage volumes.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOACLConfigSettings.png" alt="MinIO Enterprise ACL Settings" id="MinIO Enterprise ACL Settings" >}}

{{< include file="/static/includes/AppInstallWizardACLConfiguration.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/AppInstallWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
