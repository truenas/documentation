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
To install the MinIO **enterprise** train app, do the following:

{{< include file="/static/includes/apps/AppsEnterprieseBeforeYouBegin.md" >}}
  
{{< include file="/static/includes/MinIOEnterpriseMultiModeBeforeYouBegin.md" >}}

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.

## Installing MinIO Enterprise

{{< hint info >}}
This basic procedure covers the required MinIO enterprise app settings.
For optional settings, see [Understanding MinIO Wizard Settings](#understanding-minio-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/AddMultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfig1.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfig2.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseMultiModeConfig2.md" >}}

{{< include file="/static/includes/apps/MinIOEnterpriseMultiModeConfigMNMD.md" >}}

Enter the same string in the **Multi Mode (SNMD or MNMD)** field in all four systems in the cluster! 

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeConfigExample.png" alt="Multi Mode MDN Command" id="Multi Mode MNDN Command" >}} 

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

Select **Force** to allow TrueNAS to update the application to the next version. This allows updates and writing to the storage volume if it has data in it.

Click **Add** to the right of **Data Directories** three times to add storage volume settings for the other three datasets, **data2**, **data3**, and **data4**.
Repeat the storage settings for each of these datasets.
Repeat all storage settings on each system in the cluster.

{{< include file="/static/includes/apps/MinIoEnterpriseConfig4.md" >}}

### Completing the MinIO Configuration
After installing and getting the MinIO Enterprise application running in TrueNAS, log into the MinIO web portal and complete the MinIO setup.

Go to **Monitoring > Metrics** to verify the servers match the total number of systems (nodes) you configured. 
Verify the number of drives matches the number you configured on each system, four systems each with four drives (4 systems x 4 drives each = 16 drives).

Refer to MinIO documentation for more information.

## Understanding MinIO Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install MinIO** configuration wizard.

### Application Name Settings

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings

{{< include file="/static/includes/apps/MinIOEnterpriseMinIOConfig.md" >}}

#### MultiMode Configuration
Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** option.

### User and Group Configuration

{{< include file="/static/includes/apps/AppUserAndGroupConfig.md" >}}

### Network Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}

### Storage Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseStorageConfig.md" >}}

#### ACL Configuration Settings
To deploy the MinIO app, you must configure the ACL and ACE settings for both the **/data** host path storage volume(s) or the application does not deploy.

If the storage volume is an ixVolume, permissions apply on every application start but only if the directory is empty (has no data), and if ACLs are not configured.
Configured ACLs take precedence and are applied.

Specify the default user UID **568** or the UID for the new user created in TrueNAS to serve as the MinIO app admin user.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseData1ACLandACESettings.png" alt="MinIO Enterprise ACL and ACE Settings" id="MinIO Enterprise ACL and ACE Setting" >}} 

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

Set ACL permissions for each dataset in the configuration, and on each system in the cluster.

### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}