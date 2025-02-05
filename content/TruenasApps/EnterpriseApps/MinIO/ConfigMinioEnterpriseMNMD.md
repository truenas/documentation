---
title: "Installing MinIO Enterprise MNMD"
description: "Provides instructions on installing and configuring MinIO Enterprise in a Multi-Node Multi-Disk (MNMD) configuration."
weight: 20 
aliases:
 - /scale/scaletutorials/apps/enterpriseapps/minio/configminioenterprisemnmd/
tags:
- s3
- enterprise
- apps
keywords:
- nas data storage
- software storage solutions
- object based storage
- enterprise data storage
- two-factor authentication (2FA)
---

{{< include file="/static/includes/apps/EnterpriseApps.md" >}}

The instructions in this article apply to the TrueNAS MinIO Enterprise application installed in a Multi-Node Multi-Disk (MNMD) multi-mode configuration.

For more information on MinIO multi-mode configurations see [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd).
MinIO recommends using MNMD (distributed) for enterprise-grade performance and scalability.

This article applies to the TrueNAS MinIO application in the **enterprise** train.
This version of MinIO is tested and polished to provide a safe and supportable experience for TrueNAS Enterprise customers.
The enterprise MinIO application is tested and verified as an immutable target for Veeam Backup and Replication.

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.

{{< include file="/static/includes/AddMinioEnterpriseTrain.md" >}}

## Before You Begin
To install the MinIO **enterprise** train app, do the following for each of the four Enterprise systems in the multi-node cluster:
* Acquire and apply the Enterprise VM & Apps license to the system. 

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/MinIOEnterpriseDetailsScreen.png" alt="MinIO Enterprise App Details Screen" id="MinIO Enterprise App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBegingAddAppCertificate.md" >}}

<div style="margin-left: 33px">The <b>Certificates</b> setting is optional for a basic app configuration but is required when setting up multi-mode configurations, and when using MinIO as an S3 storage object target for Veeam Backup and Replication Immutability.

MinIO and MinIO for Veeam integrations, can use a self-signed certificate, however, a certificate from a trusted certificate authority is recommended for production deployments.
If using a self-signed certificate, Veeam shows a security warning dialog when the certificate is added. Click continue to advance through the configuration.

When deploying MNMD configurations, create the certificate on one system, then import both the certificate and keys into each of the remaining three systems in the cluster.</div>

<div style="margin-left: 33px">{{< expand "Importing Certificates for MNMD Configurations" "v" >}}
After creating a certificate authority and certificate on one system in the MNMD cluster, import the certificate into the other three systems:
1. Open a text editor window, and enter a heading for Certificate and Key.
2. On system 1 with the certificate, copy/paste the certificate and key into a text editor.
   a. Select the newly created certificate, click <b>Edit</b>, then click <b>View/Download Certificate</b>.
   b. Click <b>View/Download Certificate</b>, click <b>Copy to Clipboard</b>, then paste the certificate into the text editor under the Certificate header.
   c. Click <b>View/Download Key</b>, click <b>Copy to Clipboard</b>, then paste the key into the text editor under the Key header.
3. Import the certificate into another system in the cluster.
   a. Log into another system in the cluster, go to <b>Credentials > Certificates</b>, and click <b>Add</b> to the right of <b>Certificates</b> to open the <b>Add Certificate</b> wizard.
   b. Enter a name, for example, <i>miniomdmd2</i> for minio certificate mdmd node 2, then select <b>Import Certificate</b> in the <b>Type</b> field.
   c. Select <b>Add To Trusted Store</b>, then click <b>Next</b>.
   d. Paste the certificate into the <b>Certificate</b> field (do not include the header from the text file), then paste the key. Click <b>Next</b>.
4. Confirm the information and click <b>Save</b>.
5. Repeat steps 2 and 3 in each of the other systems in the cluster.
   
When finished, all four systems have the same certificate.
{{< /expand >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
MinIO enterprise train app in an MNMD cluster requires four datasets, <b>data1</b>, <b>data2</b>, <b>data3</b>, and <b>data4</b>. The default mount path follows the dataset naming, <b>data1</b>, <b>data2</b>, <b>data3</b>, and <b>data4</b>. These datasets represent the disks in the MNMD configuration. Repeat this in each of the three remaining systems in the cluster.

Follow the instructions below in **Creating Datasets for Apps** to correctly create the datasets.
You can organize the app dataset(s) under a parent dataset to separate them from datasets for other applications.
For example, create a <i>minio</i> parent dataset with each dataset nested under it.
If you organize the MinIO app required datasets under a parent dataset, set up the required ACL permissions for the parent dataset before using the app installation wizard to avoid receiving installation wizard errors.
Use the <b>Enable ACL</b> option in the <b>Install MinIO</b> wizard to configure permissions for the four datasets.
MinIO object files on disk range from five MiB to five MiB, files smaller than 5 MiB are written in a single part.
</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}
</div>

<div style="margin-left: 33px">{{< expand "Configuring Parent Dataset Permissions" "v" >}} 
Select the parent dataset row on the <b>Datasets</b> screen tree table, scroll down to the <b>Permissions</b> widget, and click <b>Edit</b> to open the <b>Edit ACL</b> screen.
Set the <b>@owner</b> and <b>@group</b> to <b>admin</b> or the name of your TrueNAS administration user account, then click <b>Apply Owner</b> and <b>Apply Group</b>.

Next, click <b>Add Item</b> to add an ACE entry for the <b>MinIO</b> run as user, <b>568</b>.
You might need to add another user, such as <b>www-data</b> if you receive an error message when installing the app.
The error message shows the user name to add. Give both users full permissions.

See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) and [Edit ACL Screen]({{< relref "EditACLScreens.md" >}}) for more information.
{{< /expand >}}</div>
 
## Installing MinIO Enterprise
{{< hint info >}}
This basic procedure covers the required MinIO app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}
{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterprise.png" alt="Install MinIO Enterprise Screen" id="Install MinIO Enterprise Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfigSettings.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseMultiModeConfigMNMD.md" >}}

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseMultiModeStorageConfig.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseFinishConfig.md" >}}

Log into the MinIO web portal, and go to **Monitoring > Metrics**. The MinIO UI should show four servers and 12 drives.

## Understanding App Installation Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install MinIO** configuration wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings
{{< include file="/static/includes/apps/MinIOEnterpriseMinIOConfig.md" >}}

#### MultiMode Configuration
Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** options.

When installing and configuring multi-mode SNMD or MNMD you must create a self-signed certificate.

An SNMD configuration can use the same self-signed certificate created for MNMD.
An MNMD configuration cannot use the certificate for an SNMD configuration because that certificate only includes the IP address for one system.
Create this same self-signed certificate for the MNMD cluster on each system (node) in the cluster! 

{{< include file="/static/includes/apps/InstallWizardCertificateSettings.md" >}}

#### Adding Environment Variables

{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}

### User and Group Configuration

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}

When installing and configuring multi-mode SNMD or MNMD you must create a self-signed certificate.

An SNMD configuration can use the same self-signed certificate created for MNMD.
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
