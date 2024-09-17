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

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfigSettings.png" alt="MinIO Enterprise Storage Configuration Settings" id="MinIO Enterprise Storage Configuration Settings" >}}

Select the storage type you want to use.
To allow TrueNAS to create the storage volume, set **Type** to **ixVolume (Dataset created automatically by the system)**, which is the default but not recommended storage type.

To use the existing **data1** dataset, select **Host Path (Path that already exists on the system)** which is the recommended option for MinIO.
**Mount Path** populates with the default **/data1**.
Enter the path or browse to and click on the **data1** dataset location to populate **Host Path**.

Select **Enable ACL** to show the host path settings and the ACE Entries option. After entering or browsing to the **data** dataset, click **Add** to the right of **ACE Entries**.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseACLAndACESettings.png" alt="MinIO Enterprise ACL and ACE Settings" id="MinIO Enterprise ACL and ACE Settings" >}} new image

Set the **ACE Entry** user to the default user **568** or enter the UID for the user created in TrueNAS to serve as the MinIO app administrator, and set the permissions to **FULL_CONTROL**.

Click **Add** to the right of **Data Directories** three times to add storage volume settings for the other three datasets, **data2**, **data3**, and **data4**.
Repeat the storage settings for each of these datasets.
Repeat all storage settings on each system in the cluster.

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

#### ACL Configuration Settings
To deploy the MinIO app, you must configure the ACL and ACE settings for both the **/data** host path storage volume(s) or the application does not deploy.

If the storage volume is an ixVolume, permissions apply on every application start but only if the directory is empty (has no data), and if ACLs are not configured.
Configured ACLs take precedence and are applied.

Specify the default user UID **568** or the UID for the new user created in TrueNAS to serve as the MinIO app admin user.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOACLConfigSettings.png" alt="MinIO Enterprise ACL and ACE Settings" id=""MinIO Enterprise ACL and ACE Setting" >}} new image

{{< include file="/static/includes/AppInstallWizardACLConfiguration.md" >}}

Set ACL permissions for each dataset in the configuration, and on each system in the cluster.

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/SyncthingWizardResourceConfig.md" >}}