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


The instructions in this article apply to the TrueNAS MinIO Enterprise application installed in a Multi-Node Multi-Disk (MNMD) multi-mode configuration.

For more information on MinIO multi-mode configurations see [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd). MinIO recommends using MNMD (distributed) for enterprise-grade performance and scalability.

This article applies to the TrueNAS MinIO application in the **enterprise** train.
This smaller version of MinIO is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
The enterprise MinIO application is tested and verified as an immutable target for Veeam Backup and Replication.


## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.

{{< include file="/static/includes/AddMinioEnterpriseTrain.md" >}}

## Before You Begin

{{< include file="/static/includes/MinIOEnterpriseMultiModeBeforeYouBegin.md" >}}

## Installing MinIO Enterprise

{{< hint info >}}
This basic procedure covers the required MinIO enterprise app settings.
For optional settings, see [Understanding MinIO Wizard Settings](#understanding-minio-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/AddMultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/MinIoEnterpriseConfig1.md" >}}

{{< include file="/static/includes/MinIOEnterpriseConfig2.md" >}}

{{< include file="/static/includes/MinIOEnterpriseMultiModeConfig2.md" >}}

{{< include file="/static/includes/MinIOEnterpriseMultiModeConfigMNMD.md" >}}

Enter the same string in the **Multi Mode (SNMD or MNMD)** field in all four systems in the cluster! 

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeConfigExample.png" alt="Multi Mode MDN Command" id="Multi Mode MNDN Command" >}} 

{{< include file="/static/includes/MinIOEnterpriseConfig3.md" >}}

{{< include file="/static/includes/MinIOEnterpriseMultiModeConfig3.md" >}}

{{< include file="/static/includes/MinIoEnterpriseConfig4.md" >}}

### Completing the MinIO Configuration

After installing and getting the MinIO Enterprise application running in TrueNAS, log into the MinIO web portal and complete the MinIO setup.

Go to **Monitoring > Metrics** to verify the servers match the total number of systems (nodes) you configured. 
Verify the number of drives matches the number you configured on each system, four systems each with four drives (4 systems x 4 drives each = 16 drives).

Refer to MinIO documentation for more information.

## Understanding MinIO Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install MinIO** configuration wizard.

### Application Name Settings

{{< include file="/static/includes/AppsWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings

{{< include file="/static/includes/MinIOEnterpriseMinIOConfig.md" >}}

#### MultiMode Configuration
Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** option.

{{< include file="/static/includes/MinIOEnterpriseMultiModeConfig.md" >}}

### User and Group Configuration

{{< include file="/static/includes/AppUserAndGroupConfig.md" >}}

### Network Configuration

{{< include file="/static/includes/MinIOEnterpriseNetworkConfig.md" >}}

### Storage Configuration

{{< include file="/static/includes/MinIOEnterpriseStorageConfig.md" >}}

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/SyncthingWizardResourceConfig.md" >}}