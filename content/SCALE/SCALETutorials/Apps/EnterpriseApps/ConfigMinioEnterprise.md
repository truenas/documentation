---
title: "Configuring Enterprise MinIO App"
description: "Provides installation instructions for the official TrueNAS Enterprise MinIO application."
weight: 20
aliases: 
tags:
- scaleminio
- scaleenterprise
---


{{< toc >}}

{{< enterprise >}}
The instructions in this article apply to the Official TrueNAS Enterprise MinIO application. 
This smaller version of MinIO has been tested and polished for a safe and supportable experience for TrueNAS Enterprise customers. 
To use the complete MinIO app without iXsystems support, see the application that is available in the Community Apps catalog.

We recommend that TrueNAS SCALE Enterprise (HA) systems not deploy applications.

SCALE Enterprise single controller systems with the applications and virtual machines license feature have access to the **MinIO Official Enterprise** widget. 
{{< /enterprise >}}

Community users can add this version of MinIO application by going to **Manage Catalogs**. 
Edit the **Official** catalog by selecting **enterprise** in **Preferred Trains**, and then click **Save**.
Both the Official Charts and Enterprise MinIO widgets display on the **Available Applications** screen.

## First Steps

If your system has active sharing configurations (SMB, NFS, iSCSI), disable these sharing services in **System Settings > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the install and starts.

The MinIO Enterprise application creates a dataset for data storage and application needs.

## Installing MinIO Enterprise
{{< hint info >}}
This basic procedure covers the required Enterprise MinIO App settings.
It does not provide instructions for optional settings.
{{< /hint >}}

Go to **Apps**, click on **Available Applications** and locate the **MinIO Enterprise train** application widget.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseWidget.png" alt="MinIO Enterprise Train Application Widget" id="1 MinIO Enterprise Train Application Widget" >}} 

Click **Install** on the **MinIO Official Enterprise** widget to open the **minio** installation wizard.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseAppNameAndVersion.png" alt="MinIO Enterprise Appliation Name and Version" id="2 MinIO Enterprise Appliation Name and Version" >}} 

Accept the default or enter a name for your MinIO application deployment.  

**Version** populates with the current MinIO version.

Enter the MinIO access key in **Root User** and the secret key in **Root Password**.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseCredentials.png" alt="MinIO Enterprise Credentials" id="3 MinIO Enterprise Credentials" >}}

TrueNAS populates the **User and Group Configuration** and **Network Configuration** settings with the default port values for MinIO Enterprise. 

Do not select **Host Network**. 

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="4 MinIO Enterprise Network Configuration" >}}

(Optional) Select the certificate from the **Certificate** dropdown. 

Scroll down to the **Storage Configuration** section. 

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseStorageConfig.png" alt="MinIO Enterprise Storage Configuration" id="5 MinIO Enterprise Storage Configuration" >}}

Select the storage type you want to use. 
Use the default **ixVolume (Dataset created automatically by the system)**. 
This creates a dataset for your deployment and populates the rest of the storage fields. 

The remaining **minio** wizard settings are optional.

Click **Save** to complete the installation.

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
