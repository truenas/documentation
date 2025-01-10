---
title: "Installing MinIO Enterprise SNMD"
description: "Provides instructions on installing and configuring MinIO Enterprise in a Single-Node Multi-Disk (SNMD) configuration."
weight: 20 
aliases:
 - /scale/scaletutorials/apps/enterpriseapps/minio/configminioenterprisesnmd/
tags:
- s3
- enterprise
- apps
keywords:
- nas data storage
- software storage solutions
- object based storage
- enterprise data storage
---


The instructions in this article apply to the TrueNAS MinIO Enterprise application installed in a Single-Node Multi-Disk (SNMD) multi-mode configuration.

For more information on MinIO multi-mode configurations see [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd). MinIO recommends using MNMD (distributed) for enterprise-grade performance and scalability.

This article applies to the TrueNAS MinIO application in the **enterprise** train.
This smaller version of MinIO is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
The enterprise MinIO application is tested and verified as an immutable target for Veeam Backup and Replication.

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.

{{< include file="/static/includes/apps/AddMinioEnterpriseTrain.md" >}}

## Before You Begin
To install the MinIO **enterprise** train app, do the following:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/MinIOEnterpriseDetailsScreen.png" alt="MinIO Enterprise App Details Screen" id="MinIO Enterprise App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBegingAddAppCertificate.md" >}}

<p style="margin-left: 33px">The **Certificates** setting is optional for a basic configuration but is required when setting up multi-mode configurations and when using MinIO as an immutable target for Veeam Backup and Replication.</p>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
MinIO enterprise train app requires one dataset, <b>data</b>. The default mount path is <b>/data1</b>.
Multi-mode deployments require creating the **data1**, **data2**, **data3**, and **data4** datasets to use with the host path option.
These dataset represent each disk in the multi-disk configuration.

Follow the instructions below in **Creating Datasets for Apps** to correctly create the dataset(s).
You can organize the app dataset(s) under a parent dataset to keep them separated from datasets for other applications.
For example, create a <i>minio</i> parent dataset with each dataset nested under it.
If you organize the MinIO app required dataset(s) under a parent dataset, set up the required ACL permissions for the parent dataset before using the app installation wizard to avoid receiving installation wizard errors.
Use the <b>Enable ACL</b> option in the <b>Install MinIO</b> wizard to configure permissions for the <b>data</b> dataset.</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}
</div>

<div style="margin-left: 33px">{{< expand "Configuring Parent Dataset Permissions" "v" >}} 
Select the parent dataset row on the **Datasets** screen tree table, scroll down to the **Permissions** widget, and click **Edit** to open the <b>Edit ACL</b> screen.
Set the <b>@owner</b> and <b>@group</b> to <b>admin</b> or the name of your TrueNAS administration user account, and click <b>Apply Owner</b> and <b>Apply Group</b>.

Next, click **Add Item** to add an ACE entry for the <b>MinIO</b> run as user, <b>568</b>.
You might need to add another user, such as <b>www-data</b> if you receive an error message when installing the app.
The error message shows the user name to add. Give both users full permissions.

See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for more information.
{{< /expand >}}

If planning to deploy an additional storage volume as an SMB Share, disable the service in <b>System > Services</b> before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.</div>
 
## Installing MinIO Enterprise
{{< hint info >}}
This basic procedure covers the required MinIO app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}
{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterprise.png" alt="Install MinIO Enterprise Screen" id="Install MinIO Enterprise Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfig2.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfig2.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseMultiModeConfig2.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMD.png" alt="Multi Mode SNDN Command" id="Multi Mode SNDN Command" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseConfig3.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseMultiModeConfig3.md" >}}

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

Select the storage type you want to use.
To use an existing dataset, select **Host Path (Path that already exists on the system)** which is the recommended option for MinIO.
**Mount Path** populates with the default **/data1**.
Select **Enable ACL** to show the mount path and host path fields.
Enter the path or browse to and click on the **data1** dataset location to populate **Host Path**.

Click **Add** to the right of **ACE Entries**.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseData1ACLandACESettings.png" alt="MinIO Enterprise ACL and ACE Settings" id="MinIO Enterprise ACL and ACE Settings" >}}

Set the **ACE Entry** user to the default user **568** or enter the UID for the user created in TrueNAS to serve as the MinIO app administrator, and set the permissions to **FULL_CONTROL**.

Select **Force Flag** to allow TrueNAS to update the application to the next version. **Force Flag** allows updates and writing to the storage volume with existing data.

Click **Add** to the right of **Data Directories** three times to add storage volume settings for the other three datasets, **data2**, **data3**, and **data4**.

Repeat the storage settings for each of these datasets.

{{< include file="/static/includes/apps/MinIoEnterpriseConfig4.md" >}}

## Understanding MinIO Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install MinIO** configuration wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings

{{< include file="/static/includes/apps/MinIOEnterpriseMinIOConfig.md" >}}

#### MultiMode Configuration
Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** option.

#### Adding Environment Variables
{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}

### User and Group Configuration

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}

When installing and configuring multi-mode SNMD or MNMD you must create a self-signed certificate.

A SNMD configuration can use the same self-signed certificate created for MNMD.
An MNMD configuration cannot use the certificate for an SNMD configuration because that certificate only includes the IP address for one system.
Create this same self-signed certificate for the MNMD cluster on each system (node) in the cluster! 

{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

### Storage Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseStorageConfig.md" >}}

#### Setting Dataset ACL Permissions
You can configure ACL permissions for the required dataset in the **Install MinIO** wizard, or from the **Datasets** screen any time after adding the datasets.

{{< include file="/static/includes/apps/InstallWizardStorageACLConfig.md" >}}

{{< expand "Adding ACL Permissions from the Datasets Screen" "v">}}
First, select the dataset row, scroll down to the **Permissions** widget, and click **Edit** to open the **Edit ACL** screen.
Change the **@owner** and **@group** values from **root** to the administrative user for your TrueNAS system, and click apply for each.
Next, add an ACL entry for the run-as user.
For MinIO, the run-as users is **568**. Add a user entry for this user.
Save the ACL before leaving the screen.

See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for more information.
{{< /expand >}}

Set ACL permissions for each dataset in the configuration, and on each system in the cluster.

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}