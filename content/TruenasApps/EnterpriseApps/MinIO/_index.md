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

{{< include file="/static/includes/apps/SCALEEnterpriseApps.md" >}}

This article applies to the TrueNAS MinIO application in the **enterprise** train.
This smaller version of MinIO is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
The enterprise MinIO application is tested and verified as an immutable target for Veeam Backup and Replication.

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.

{{< include file="/static/includes/apps/AddEnterpriseTrain.md" >}}

## Before You Begin
To install the MinIO **enterprise** train app, do the following:

{{< include file="/static/includes/apps/AppsEnterprieseBeforeYouBegin.md" >}}
  
{{< include file="/static/includes/apps/MinIODatasetRequirements.md" >}}

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.

## Installing the MinIO Application
{{< hint info >}}
This basic procedure covers the required MinIO enterprise app settings.
For optional settings, see [Understanding MinIO Wizard Settings](#understanding-minio-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/apps/AddMultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfig1.md" >}}

{{< include file="/static/includes/apps/MinIoEnterpriseConfig2.md" >}}

If setting up a cluster configuration, see [Multi-Mode Configuration](#multi-mode-configuration) below for more information on settings.

{{< include file="/static/includes/apps/MinIOEnterpriseConfig3.md" >}}

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

{{< include file="/static/includes/apps/MinIOEnterpriseConfig4.md" >}}

## Understanding MinIO Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install MinIO** configuration wizard.

### Application Name Settings

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

### MinIO Configuration Settings

{{< include file="/static/includes/apps/MinIOEnterpriseMinIOConfig.md" >}}

#### Multi-Mode Configuration
If creating a multi-disk (SNMD) or MNMD cluster, create four datasets, **data1**, **data2**, **data3** and **data4** on each system (node) in the cluster configuration.

Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** option.

For more information see:

* [SNMD]({{< relref "ConfigMinioEnterpriseSNMD.md" >}})

* [MNMD]({{< relref "ConfigMinioEnterpriseMNMD.md" >}})

### User and Group Configuration

{{< include file="/static/includes/apps/AppInstallWizardUserAndGroupConfig.md" >}}

### Network Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseNetworkConfig.md" >}}

{{< include file="/static/includes/apps/AppInstallWizardCertificateSettings.md" >}}

### Storage Configuration

{{< include file="/static/includes/apps/MinIOEnterpriseStorageConfig.md" >}}

#### ACL and ACE Sttings

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseData1ACLandACESettings.png" alt="Home and Data1 Host Path ACL and ACE Settings" id="Home and Data1 Host Path ACL and ACE Settings" >}}

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

#### Mounting an SMB Share
The TrueNAS MinIO app includes the option to mount an SMB share inside the container pod.

{{< include file="/static/includes/AppWizardStorageSMBOption.md" >}}


### Resource Configuration

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="MinIO Enterprise Resource Limits" id="MinIO Enterprise Resource Limits" >}}

{{< include file="/static/includes/apps/AppInstallWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
