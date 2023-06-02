---
title: "Migrating from S3 Service to MinIO Enterprise"
description: "Provides migrating from TrueNAS SCALE S3 service to the MinIO Enterprise train application instructions."
weight: 46
alias: 
tags:
- scales3
- scaleminio
- scaleenterprise
---


{{< toc >}}

{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}

{{< enterprise >}}
The Official TrueNAS Enterprise MinIO application is a smaller version of MinIO that has been tested and polished for a safe and supportable experience for TrueNAS Enterprise customers. 
To use the complete MinIO app without iXsystems support, see the application that is available in the Community Apps catalog.

We recommend that TrueNAS SCALE Enterprise (HA) systems not deploy applications.
{{< /enterprise >}}

This article provides instructions on how to move from using the deprecated S3 service for MinIO to the MinIO Enterprise train application. 

The MinIO Enterprise train application is available by default to all Enterprise systems with the license for applications and virtual machines. 
Community users can add this version of MinIO application to the list of available applications by going to **Manage Catalogs**. 
Select the option to edit the **Official** catalog, select **enterprise** in the **Preferred Trains** field, and then click **Save**.
Both the Official Charts and Enterprise MinIO widgets display on the **Available Applications** screen.

## Before You Begin
Before you configure the MinIO Enterprise application:

* Disable the S3 service.
  Go to **System Settings > Services** and disable the service and clear the **Start Automatically** checkbox. 
  This prevents the service from re-enabling after a system restart.

* Review your S3 service and MinIO settings and note all IP addresses, port numbers, TLS server host name, access and secret keys, storage, and certificate settings.

You can use the dataset created for S3 MinIO as the dataset for the MinIO Enterprise application. 
If you want to create a new dataset in the MinIO Enterprise application wizard.

If you want to grant access to a specific user (and group) other than using the defaults, add the new non-root administrative user and take note of the UID and GID for this user.

## Migrating from TrueNAS S3 Service MinIO

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

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}