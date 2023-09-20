---
title: "Installing MinIO Enterprise SNMD"
description: "Provides instructions on installing and configuring MinIO Enterprise in a Single-Node Multi-Disk (SNMD) configuration."
weight: 20 
aliases: 
tags:
- scaleminio
- scaleenterprise
---


{{< toc >}}

{{< enterprise >}}
The instructions in this article apply to the TrueNAS MinIO Enterprise application installed in a Single-Node Multi-Disk (SNMD) multi mode configuration. 

SCALE Enterprise single controller systems with the applications and virtual machines license have access to the **MinIO Official Enterprise** widget. 
{{< /enterprise >}}

For more information on MinIO multi mode configurations see [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd). MinIO recommends using MNMD (distributed) for enterprise-grade performance and scalability.

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.

{{< include file="/_includes/AddMinioEnterpriseTrain.md" >}}

## First Steps

{{< include file="/_includes/MinIoEnterpriseFirstSteps.md" >}}

## Installing MinIO Enterprise
{{< hint info >}}
This procedure covers the required Enterprise MinIO App settings.
{{< /hint >}}

{{< include file="/_includes/MinIoEnterpriseConfig1.md" >}}

{{< include file="/_includes/MinIOEnterpriseStorageConfig.md" >}}

Select **Enable Multi Mode (SNMD or MNMD)**, then click **Add**. 
Enter **/data{1...4} in the **Multi Mode (SNMD or MNMD)** field.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMD.png" alt="Multi Mode SNDN Command" id="Multi Mode SNDN Command" >}}

{{< include file="/_includes/MinIoEnterpriseConfig2.md" >}}

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
