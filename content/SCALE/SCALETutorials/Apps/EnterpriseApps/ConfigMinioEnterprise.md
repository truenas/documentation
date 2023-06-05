---
title: "Configuring Enterprise MinIO App"
description: "Provides installation instructions for the official TrueNAS Enterprise MinIO application, and instruction on migrating from the deprecated S3 service to MinIO Enterprise."
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

If you created a dataset for the MinIO shares and it has the same path as the MinIO application, disable host path validation. 
To use host path validation, create a dataset for the application with a unique path. 
For example, */pool/shares/minio* for the share and */pool/apps/minio* for the application.

## Installing MinIO Enterprise
{{< hint info >}}
This basic procedure covers the required Enterprise MinIO App settings.
It does not provide instructions for optional settings.
{{< /hint >}}

After disabling the S3 service, install the MinIO Enterprise train application. 
Go to **Apps**, click on **Available Applications** and locate the **MinIO Enterprise train** application widget.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseWidget.png" alt="MinIO Enterprise Train Application Widget" id="1 MinIO Enterprise Train Application Widget" >}} 

Click **Install** on the **MinIO Official Enterprise** widget to open the **minio** installation wizard.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseAppNameAndVersion.png" alt="MinIO Enterprise Appliation Name and Version" id="2 MinIO Enterprise Appliation Name and Version" >}} 

Enter a name for your MinIO application deployment. You can override the default value if you choose. 
**Version** populates with the current MinIO version.

Enter your MinIO access key in the **Root User** and the secret key in **Root Password**.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseCredentials.png" alt="MinIO Enterprise Credentials" id="3 MinIO Enterprise Credentials" >}}

TrueNAS populates the **User and Group Configuration** and **Network Configuration** settings with the default port values for MinIO Enterprise. 
Leave **Host Network** clear. 

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="4 MinIO Enterprise Network Configuration" >}}

Select the S3 MinIO certificate from the **Certificate** dropdown.

Scroll down to the **Storage Configuration** section. 

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseStorageConfig.png" alt="MinIO Enterprise Storage Configuration" id="5 MinIO Enterprise Storage Configuration" >}}

Select the storage type you want to use. 
Default is **ixVolume (Dataset created automatically by the system)**. 
This creates a dataset for your deployment and populates the rest of the storage fields. 

To use your existing S3 MinIO dataset, select **Host Path (Path that already exists on the system)** to use a dataset you created for the MinIO application data storage. 
**Mount Path** populates with **/data** or **/data*#***, where *#* is a number to distinguish multiple instances of MinIO such as in a cluster configuration. 
Browse to the location of the dataset and click on it to populate the **Host Path**. 

The remaining **minio** wizard settings are optional.

Click **Save** to complete the installation.

## Migrating from TrueNAS S3 Service MinIO
The instructions in this section document migrating from the deprecated S3 service for MinIO to the MinIO Enterprise train application. 

When migrating, before you configure the MinIO Enterprise application:

* Disable the S3 service.
  Go to **System Settings > Services** and disable the service and clear the **Start Automatically** checkbox. 
  This prevents the service from re-enabling after a system restart.

* Review your S3 service and MinIO settings and note all IP addresses, port numbers, TLS server host name, access and secret keys, storage, and certificate settings.

You can use the dataset created for S3 MinIO as the dataset for the MinIO Enterprise application. 
If you want to create a new dataset in the MinIO Enterprise application wizard.

If you want to grant access to a specific user (and group) other than using the defaults, add the new non-root administrative user and take note of the UID and GID for this user.

Follow the instructions in [Installing MinIO Enterprise](#installing-minio-enterprise) to complete the process.

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
