---
title: "MinIO Enterprise"
description: "Tutorials for installing and configuring the MinIO Enterprise application in an Enterprise-licensed deployment."
geekdocCollapseSection: true
weight: 20
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

{{< include file="/static/includes/apps/SCALEEnterpriseApps.md" >}}

This article applies to the TrueNAS MinIO application in the **enterprise** train.
This smaller version of MinIO is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
The enterprise MinIO application is tested and verified as an immutable target for Veeam Backup and Replication.

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.

{{< include file="/static/includes/apps/AddMinioEnterpriseTrain.md" >}}

## Before You Begin
To install the MinIO **enterprise** train app, first create a self-signed certificate for the MinIO app.
The **Certificates** setting is not required for a basic configuration but is required when setting up multi-mode configurations and when using MinIO as an immutable target for Veeam Backup and Replication.

{{< include file="/static/includes/apps/AddAppCertificate.md" >}}

If not already assigned, set a pool for applications to use.

You can allow the app to create the storage volume, or use the recommended method and create the required **data1** dataset to use with the host path option.
[Create the dataset(s)]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
You can organize the dataset(s) under a parent dataset for MinIO to keep the storage datasets separated from the dataset for other potential applications.
For example, create the *minio* dataset and nest **data1** under it.

You can also mount other storage volumes inside the container pod using either the ixVolume or Host Path options, but these are not required.
If mounting additional storage volumes with the host path option, create the dataset(s) before using the app installation wizard.

Either use the default user and group IDs or [create a new user]({{< relref "ManageLocalUsersSCALE.md#creating-user-accounts" >}}) with **Create New Primary Group** selected.
Make note of the UID/GID for the new user to add in the installation wizard.

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.

## Installing the MinIO Application
{{< hint info >}}
This basic procedure covers the required MinIO enterprise app settings.
For optional settings, see [Understanding MinIO Wizard Settings](#understanding-minio-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/AddMultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfig1.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseConfig2.md" >}}

If setting up a cluster configuration, select **Enabled** to show the multi-mode **Multi Mode (SNMD or MNMD Entries)** settings.
See [Multimode Configuration](#multimode-configuration) below for more information on settings.

{{< include file="/static/includes/apps/MinIOEnterpriseConfig3.md" >}}

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfigSettings.png" alt="MinIO Enterprise Storage Configuration Settings" id="MinIO Enterprise Storage Configuration Settings" >}}

Select the storage type you want to use.
To allow TrueNAS to create the storage volume, set **Type** to **ixVolume (Dataset created automatically by the system)**, which is the default but not recommended storage type.

To use an existing dataset, select **Host Path (Path that already exists on the system)** which is the recommended option for MinIO.
**Mount Path** populates with the default **/data1**.
Enter the path or browse to and click on the **data1** dataset location to populate **Host Path**.

{{< include file="/static/includes/apps/MinIOEnterpriseConfig4.md" >}}

## Understanding MinIO Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install MinIO** configuration wizard.

### Application Name Settings

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings

{{< include file="/static/includes/apps/MinIOEnterpriseMinIOConfig.md" >}}

#### Multi-Mode Configuration
Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** option.

{{< include file="/static/includes/apps/MinIOEnterpriseMultiModeConfig.md" >}}

For more information see:

[SNMD]({{< relref "ConfigMinioEnterpriseSNMD.md" >}})

[MNMD]({{< relref "ConfigMinioEnterpriseMNMD.md" >}})

### User and Group Configuration

{{< include file="/static/includes/apps/AppUserAndGroupConfig.md" >}}

### Network Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}

### Storage Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseStorageConfig.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
