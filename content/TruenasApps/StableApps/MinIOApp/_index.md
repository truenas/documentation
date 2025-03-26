---
title: "MinIO"
description: "Tutorials for installing and using the MinIO charts application available in the stable train in TrueNAS."
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
 - /truenasapps/stableapps/minioapp/miniomanualupdate/
tags:
- s3
- apps
keywords:
- nas data storage
- software storage solutions
- object based storage
---

{{< github-content 
    path="trains/stable/minio/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

{{< include file="/static/includes/ProposeArticleChange.md" >}}

MinIO High Performance Object Storage, released under the Apache Licenses v2.0 is an open source Amazon S3 cloud storage compatible object storage solution.
The TrueNAS MinIO applications allow users to build high-performance infrastructure for machine learning, analytics, and application data workloads.

TrueNAS has two versions of the MinIO application, a **stable** and **enterprise** train version.
The tutorials in this section cover installing the TrueNAS **stable** train version of the MinIO.

The smaller MinIO **enterprise** train version of the application is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
Community members can install either version of this application.

{{< expand "Adding the MinIO (Enterprise) App" "v" >}}
To add the Enterprise MinIO application to the list of available applications: 
{{< include file="/static/includes/apps/AddEnterpriseTrain.md" >}}

Both the **stable** and **enterprise** train versions of the MinIO app widget display on the **Discover** application screen.

![DiscoverScreenMinIOAppWidgets](/images/SCALE/Apps/DiscoverScreenMinIOAppWidgets.png "Minio App Widgets")

{{< /expand >}}

## Before You Begin
Before you install the **stable** version of the MinIO app:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Plex App Details Screen" id="Plex App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px">Create a parent dataset, such as <i>minio</i>, and then the storage dataset(s) (<b><i>data</i></b>, etc.) under it.
  Select <b>apps</b> as the <b>Dataset Preset</b> for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them to the app.</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}} 

<div style="margin-left: 33px">Adding a certificate is optional, but if you want to use a certificate for this application, either create a new self-signed CA and certificate or import an existing CA and create the certificate for MinIO. A certificate is not required to deploy the stable train MinIO application.</div>

## Installing MinIO (S3) App
This procedure covers the basic requirements and installation and configuration instructions for the **stable** train version of the MinIO application.
For instructions on installing the Enterprise version of the MinIO application see [Configuring
Enterprise MinIO]({{< relref "/content/TruenasApps/EnterpriseApps/_index.md" >}}).
{{< hint info >}}
This basic procedure covers the required MinIO app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioS3Screen.png" alt="MinIO Install Wizard Screen" id="MinIO Install Wizard Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/static/includes/apps/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< include file="/static/includes/apps/MinIOPortsAndLogSearch.md" >}}

Add your **Storage Configuration** settings.

Select **Enable Distributed Mode** if you are setting up MinIO in a cluster configuration.

MinIO uses one dataset, one ixVolume, and two mount paths.
Leave the **MinIO Export Storage (Data)** set to the defaults, with **Type** set to **ixVolume** and the mount path **/export**.
You can create a dataset for this and use the host path option but it is not necessary for this storage volume.

Add the storage volume for MinIO data storage. Click **Add** to the right of **Additional Storage**.
Set **Type** to **Host Path (Path that already exists on the system)**.
Enter **/data** in **Mount Path**, select **Enable ACL**, then enter **data** in **Dataset Name**.

Click **Add** to the right of **ACL Entries** to show the permissions fields.
Set **Id Type** to **Entry is for a USER**, enter **473** in **ID**, and give it full permissions.
Repeat for the **/data** storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddDataHostPathACLandACESettings.png" alt="Data Host Path ACL and ACE Settings" id="Data Host Path ACL and ACE Settings" >}}

{{< include file="/static/includes/apps/MinIOCompleteInstall.md" >}}

## Understanding App Installation Wizard Settings
The following sections provide more detailed explanations of the settings in each section of the **Install MinIO** configuration screen.

### Application Name and Version Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings
MinIO configuration settings include setting up credentials and adding additional environment variables.

MinIO credentials establish the login credentials for the MinIO web portal and the MinIO administration user.
Enter existing MinIO credentials if you already have a MinIO account, or create new login credentials for the first time you log into MinIO.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOConfigSettings.png" alt="MinIO Configuration Settings" id="MinIO Configuration Settings" >}}

Enter a username for the root user (MinIO access key) in **MinIO Root User** that is limited to five to 20 characters long. For example *admin* or *admin1*.

Enter the root user password (MinIO secret key) in **MinIO Root Password**. The password is limited to eight to 40 random characters. For example, *MySecr3tPa$$w0d4Min10*.


Refer to [MinIO User Management](https://docs.min.io/minio/baremetal/security/minio-identity-management/user-management.html) for more information.

{{< hint type=warning >}}
Keep all passwords and credentials secured and backed up.
{{< /hint >}}

#### Adding Environmental Variables
The app is preconfigured with the arguments needed to deploy a container. 
The **Extra Arguments** and **Extra Environment Variables** settings are not required to deploy the application.
Do not enter the **server** and URL argument required in earlier app versions.

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}

### User and Group Configuration Settings

{{< trueimage src="/images/SCALE/Apps/InstallMinIOUserAndGroupSettings.png" alt="MinIO User and Group Configuration Settings" id="MinIO User and Group Configuration Settings" >}}

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration
Network configuration settings set the port number to access the MinIO API and WebUI console ports.
The default ports are **9000** for API port and **9002** for the console port

{{< trueimage src="/images/SCALE/Apps/InstallMinIONetworkConfigSettings.png" alt="Network Configuration Settings" id="Network Configuration Settings" >}}

Accept the default port settings in **Network Configuration**.

{{< include file="/static/includes/apps/InstallWizardDefaultPorts.md" >}}
{{< include file="/static/includes/apps/InstallWizardAdvancedDNSSettings.md" >}}

The **Certificates** setting is required when setting up multi-mode configurations in the Enterprise version of the MinIO app and when using MinIO as an immutable target for Veeam Backup and Replication.
Certificates are optional for basic, non-cluster deployments of the MinIO app.

{{< include file="/static/includes/apps/AddingAppCertificate.md" >}}

### Storage Configuration
Do not select **Enable Distributed Mode** unless setting up a cluster.
{{< include file="/static/includes/apps/MinIOEnableDistributedModeInfo.md" >}}

TrueNAS provides two options for storage volumes: ixVolumes and host paths.
The MinIO Enterprise app uses host paths as the storage volume type. Only use ixVolumes for a test deployment of the MinIO app.
MinIO uses an ixVolume for the /export mount path and storage volume by default. Create the **data** dataset to use as a host path storage volume, and accept the default **/data** as the mount path for this storage volume.

{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}

You can add extra storage volumes during the app installation, or edit the application after it deploys. Stop the app before editing settings.

{{< include file="/static/includes/apps/InstallAppStorageConfig2.md" >}}

#### Setting Dataset ACL Permissions
You can configure ACL permissions for the required dataset in the **Install MinIO** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, scroll down to the **Permissions** widget, and click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For Emby, the run-as users are **0** for **root**. Add a user entry for this user.
Save the ACL before leaving the screen.
{{< /expand >}}

#### Mounting an SMB Share Storage Volume
TrueNAS **Additional Storage** options include the ability to mount an SMB share inside the container pod.

{{< expand "Configuring Additional Storage Volumes" "v" >}}
If you choose to configure additional storage volumes, click **Add** to the right of **Additional Storage** to show the **Type** field with three options:
* **HostPath (Path that already exists on the system)** requires an existing dataset.
* **ixVolume (Dataset created automatically by the system)** creates a storage volume in the hidden **ix-apps** dataset.
* **SMB/CIFS Share (Mounts a volume to a SMB share)** shows settings to create an SMB share storage volume.
  You must create the SMB share user and share dataset before adding this type.
* **Anonymous (Temporary directory created on the disk)** creates a temporary directory in the hidden **ix-apps** dataset.
* **Tmpfs (Temporary directory created on the RAM)** creates a temporary directory in RAM.
{{< /expand >}}

If adding an SMB share as an additional storage volume, create the SMB dataset and share user(s), and add the user ID for the share user(s) to the dataset ACL.
{{< include file="/static/includes/apps/InstallWizardStorageSMBOption.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOResourcesConfig.png" alt="MinIO Resource Limits" id="MinIO Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
