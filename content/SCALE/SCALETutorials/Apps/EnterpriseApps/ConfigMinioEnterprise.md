---
title: "Configuring Enterprise MinIO App"
description: "Provides configuration instructions for MinIO using the official TrueNAS Enterprise MinIO application."
weight: 20
aliases: 
tags:
- scaleminio
- scaleapps
- scaleenterprise
---


{{< toc >}}


{{< enterprise >}}
The instructions in this article apply to the Official TrueNAS Enterprise MinIO application. 
This is a smaller version of MinIO that has been tested and polished for a safe and supportable experience for TrueNAS Enterprise customers. To use the complete MinIO app without iXsystems support, see the application that is available in the Community Apps catalog.

We recommend that TrueNAS SCALE Enterprise (HA) systems not deploy applications.
{{< /enterprise >}}


## First Steps

If your system has active sharing configurations (SMB, NFS, iSCSI), disable these sharing services in **System Settings > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the install and starts.

If you created a dataset for the MinIO shares and it has the same path as the MinIO application, disable host path validation. 
To use host path validation, create a dataset for the application with a unique path. For example, */pool/shares/minio* for the share and */pool/apps/minio* for the application.

## Configuring MinIO Enterprise
{{< hint info >}}
This basic procedure covers the required Enterprise MinIO App settings.
It does not provide instructions for optional settings.
{{< /hint >}}

SCALE Enterprise single controller systems with the applications and virtual machines license feature have access to the **MinIO Official Enterprise** widget. Go to **Apps**, select the pool to use for applications, if not already selected, then click on the **Available Applications** screen.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseWidget.png" alt="MinIO Enterprise Train Application Widget" id="1 MinIO Enterprise Train Application Widget" >}} 

Click **Install** on the **MinIO Official Enterprise** widget to open the **minio** installation wizard.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseAppNameAndVersion.png" alt="MinIO Enterprise Appliation Name and Version" id="2 MinIO Enterprise Appliation Name and Version" >}} 

Enter a name for your MinIO application deployment to override the default value is provided. 
**Version** populates with the current MinIO version.

Next, enter your MinIO administration user credentials (i.e., access and secret keys) in the **Root User** and **Root Password** fields.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseCredentials.png" alt="MinIO Enterprise Credentials" id="3 MinIO Enterprise Credentials" >}}

TrueNAS populates the **User and Group Configuration** and **Network Configuration** settings with the default port values for MinIO Enterprise. 
Leave **Host Network** clear. 

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="4 MinIO Enterprise Network Configuration" >}}

Select the S3 MinIO certificate from the **Certificate** dropdown. 

Scroll down to the **Storage Configuration** section. 
You can either allow TrueNAS to create storage for your deployment or enter the unique storage settings for the dataset you created.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseStorageConfig.png" alt="MinIO Enterprise Storage Configuration" id="5 MinIO Enterprise Storage Configuration" >}}

Select the storage type you want to use. 
Default is **ixVolume (Dataset created automatically by the system)**. 
This creates a dataset for your deployment and populates the rest of the storage fields. 

Select **Host Path (Path that already exists on the system)** to use a dataset you created for the MinIO application data storage. 
**Mount Path** populates with **/data** or **/data*#***, where *#* is a number to distinguish multiple instances of MinIO such as in a cluster configuration. 
Browse to the location of the dataset and click on it to populate the **Host Path**. 

The remaining **minio** wizard settings are optional.

Click **Save** to complete the installation.

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
