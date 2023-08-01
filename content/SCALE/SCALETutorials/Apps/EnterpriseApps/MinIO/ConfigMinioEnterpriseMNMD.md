---
title: "Installing MinIO Enterprise MNMD"
description: "Provides instructions on installing and configuring MinIO Enterprise in a Multi-Node Multi-Disk (MNMD) configuration."
weight: 20 
aliases: 
tags:
- scaleminio
- scaleenterprise
---


{{< toc >}}

{{< enterprise >}}
The instructions in this article apply to the TrueNAS MinIO Enterprise application installed in a Multi-Node Multi-Disk (MNMD) multi mode configuration. 

SCALE Enterprise single controller systems with the applications and virtual machines license have access to the **MinIO Official Enterprise** widget. 
{{< /enterprise >}}

For more information on MinIO multi mode configurations see [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd). MinIO recommends using MNMD (distributed) for enterprise-grade performance and scalability.

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.

{{< include file="/_includes/AddMinioEnterpriseTrain.md" type="page" >}}

## First Steps
Complete these steps for every system (node) in the cluster. 

Assign four sequential IP addresses or host names such as **minio1.*mycompany.com*** through **minio4.*mycompany.com*** to the TrueNAS SCALE system. 
If you assign IP address numbers such as *#.#.#.*100 - 103 or *#.#.#.134 - .137, you can uses these in the command string in the **Multi Mode** field. 
If not using sequential IP addresses, use assign sequentially numbered host names. 
Add network settings using either the **Network** screen. Enter host names on the **Global Configuration** screen. 

When creating the certificate, enter the system IP addresses for each system in **Subject Alternate Names**.

{{< include file="/_includes/MinIoEnterpriseFirstSteps.md" type="page" >}}

## Installing MinIO Enterprise
{{< hint info >}}
This procedure covers the required Enterprise MinIO App settings.
{{< /hint >}}

Repeat this procedure for every system (node) in the MNND cluster. 

{{< include file="/_includes/MinIoEnterpriseConfig1.md" type="page" >}}

{{< include file="/_includes/MinIOEnterpriseStorageConfig.md" type="page" >}}


Select **Enable Multi Mode (SNMD or MNMD)**, then click **Add**. 
If the systems in the cluster have sequentially assigned IP addresses, use the IP addresses in the command string you enter in the **Multi Mode (SNMD or MNMD)** field. 
For example, **https://*10.123.456.10*{0...3}:30000/data{1...4}** where the last number in the final quarter of IP address number is the first number in the **{0...3}** string. 
Separate the numbers in the curly brackets with three dots. 
If your sequential IP addresses are not using 100 - 103, for example *10.123.456.125 through 128, then enter them as **https://*10.123.456.12*{5...8}:30000/data{1...4}**.
Enter the same string in the **Multi Mode (SNMD or MNMD)** field in all four systems in the cluster. 

If you do not have sequentially numbered IP addresses assigned to the four systems, assign sequentially numbered host names. 
For example, **minio1.*mycompany.com*** through **minio4.*mycompany.com***. 
Enter **https://minio{1...4}.*mycompany.com*:30000/data{1...4}** in the **Multi Mode (SNMD or MNMD)** field.

{{< trueimage src="/images/SCALE/23.10/InstallMinIOAddMultiModeConfigExample.png" alt="Multi Mode MDN Command" id="8: Multi Mode MNDN Command" >}} replace image

{{< include file="/_includes/MinIoEnterpriseConfig2.md" type="page" >}}

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
