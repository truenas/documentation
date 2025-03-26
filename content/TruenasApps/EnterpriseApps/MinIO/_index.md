---
title: "MinIO Enterprise"
description: "Tutorials for installing and configuring the MinIO Enterprise application in an Enterprise-licensed deployment."
geekdocCollapseSection: true
weight: 
aliases: 
 - /scale/scaletutorials/apps/enterpriseapps/configminioenterprise/
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

{{< include file="/static/includes/apps/EnterpriseApps.md" >}}

{{< github-content 
    path="trains/enterprise/minio/app_versions.json"
	includeFile="/static/includes/apps/Apps-Understanding-Versions.md"
>}}

This article applies to the TrueNAS MinIO application in the **enterprise** train.
This smaller version of MinIO is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
The enterprise MinIO application is tested and verified as an immutable target for Veeam Backup and Replication.

## Before You Begin
To install the MinIO **enterprise** train app, do the following:
* Acquire and apply the Enterprise VM & Apps license to the Enterprise system.

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/MinIOEnterpriseDetailsScreen.png" alt="MinIO Enterprise App Details Screen" id="MinIO Enterprise App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddNewAppUser.md" >}}

{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}}

<p style="margin-left: 33px">The <b>Certificates</b> setting is optional for a basic app configuration but is required when setting up multi-mode configurations, and when using MinIO as an S3 storage object target for Veeam Backup and Replication Immutability</p>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px"><a href="https://www.truenas.com/docs/scale/scaletutorials/datasets/datasetsscale/">Create the dataset(s)</a> before beginning the app installation process.
MinIO enterprise train app requires one dataset, <b>data</b>. The default mount path is <b>/data1</b>.

Follow the instructions below in <b>Creating Datasets for Apps</b> to correctly create the dataset(s).
You can organize the app dataset(s) under a parent dataset to separate them from datasets for other applications.
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
{{< /expand >}}</div>

## Installing the MinIO Application
{{< hint info >}}
This basic procedure covers the required MinIO app settings.
For optional settings, see [Understanding App Installation Wizard Settings](#understanding-app-installation-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}
{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterprise.png" alt="Install MinIO Enterprise Screen" id="Install MinIO Enterprise Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfigSettings.md" >}}

If setting up a cluster configuration, see [Multi-Mode Configuration](#multi-mode-configuration) below for more information on these settings.

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}
If using MinIO for Veeam Immutability S3 object storage, add the certificate.

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

Leave **Type** set to the default **ixVolume** for the **/export** mount point. A host path dataset is not required for this storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfigSettings.png" alt="MinIO Enterprise Storage Configuration Settings" id="MinIO Enterprise Storage Configuration Settings" >}}

Set **Type** to **Host Path (Path that already exists on the system)** which is the recommended option for MinIO.
**Mount Path** populates with the default **/data1**.
Click **Enable ACL**.
Enter or browse to select the **data1** dataset and populate **Host Path**.
Click **Add** to the right of **Add Entries**, then select **Entry is for a USER** in **ID Type**, enter the run as user ID in **ID**, and give it full control permissions.

Select **Force Flag** to allow upgrading the app. This allows writing to the dataset when there is existing data.

{{< include file="/static/includes/apps/MinIoEnterpriseFinishConfig.md" >}}

## Understanding App Installation Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install** installation wizard.

### Application Name Settings

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings

{{< include file="/static/includes/apps/MinIOEnterpriseMinIOConfig.md" >}}

#### Using Multi-Mode Configuration
If creating a multi-disk (SNMD) or MNMD cluster, create four datasets, **data1**, **data2**, **data3**, and **data4** on each system (node) in the cluster configuration.

Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** options.

For more information see:

* [SNMD]({{< relref "ConfigMinioEnterpriseSNMD.md" >}})

* [MNMD]({{< relref "ConfigMinioEnterpriseMNMD.md" >}})

#### Adding Environment Variables
{{< include file="/static/includes/apps/InstallWizardEnvironVariablesSettings.md" >}}

### User and Group Configuration

{{< include file="/static/includes/apps/InstallWizardUserAndGroupConfig.md" >}}

### Network Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}

MinIO does not require a certificate for a basic configuration and installation of MinIO Enterprise.
If installing and configuring multi-mode SNMD or MNMD you must create a self-signed certificate.

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

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/InstallWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
