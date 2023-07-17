---
title: "Installing MinIO Enterprise App"
description: "Provides installation instructions for the TrueNAS MinIO Enterprise application."
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

{{< include file="/_includes/AddMinioEnterpriseTrain.md" type="page" >}}

## First Steps

If your system has active sharing configurations (SMB, NFS, iSCSI), disable these sharing services in **System Settings > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the install and starts.

If you created a dataset for MinIO shares with the same path as the MinIO application, disable host path validation. 
To use host path validation, create datasets for the share and application with unique paths. 
For example, */pool/shares/minio* for the share and */pool/apps/minio* for the application.

## Installing MinIO Enterprise
{{< hint info >}}
This basic procedure covers the required Enterprise MinIO App settings.
It does not provide instructions for optional settings.
{{< /hint >}}

To install the Minio Enterprise app, go to **Apps**, click on **Discover Apps**, then scroll down to locate the **enterprise** version of the **Minio** widget.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseWidget.png" alt="MinIO Enterprise Train Application Widget" id="1: MinIO Enterprise Train Application Widget" >}} 

Click on the **MinIO Official Enterprise** widget to open the **MinIO** information screen.
Click **Install** to open the **Install MinIO** configuration screen.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseAppNameAndVersion.png" alt="MinIO Enterprise Appliation Name and Version" id="2: MinIO Enterprise Appliation Name and Version" >}} 

Accept the default or enter a name for your MinIO application deployment.  

**Version** populates with the current MinIO version.

Enter the MinIO access key in **Root User** and the secret key in **Root Password**.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseCredentials.png" alt="MinIO Enterprise Credentials" id="3: MinIO Enterprise Credentials" >}}

Accept the **User and Group Configuration** settings default values for MinIO Enterprise. 
If you configured SCALE with a new administration user for MinIO enter the UID and GID.

Enter **Network Configuration** settings.

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="4: MinIO Enterprise Network Configuration" >}}
 
Do not select **Host Network**. 

The **Certificates** setting is not required.
If you have a valid unrevoked certificate, added in **Credentials > Certificates** area, the **Certificates** dropdown list includes it. 
To use a certificate, select it from the dropdown list.

Enter the TrueNAS server IP address and the API port number 30000 as a URL in **MinIO Server URL (API**). For example, http://*ipaddress*:30000.
Enter the TrueNAS server IP address and the web UI browser redirect port number 30001 as a URL in **MinIO Browser Redirect URL**. For example, http://*ipaddres*:30001.

Scroll down to the **Storage Configuration** section. 

{{< trueimage src="/images/SCALE/22.12/MinIOEnterpriseStorageConfig.png" alt="MinIO Enterprise Storage Configuration" id="5: MinIO Enterprise Storage Configuration" >}}

Select the storage type you want to use. 
**ixVolume (Dataset created automatically by the system)** is the default storage type. 
This creates a dataset for your deployment and populates the rest of the storage fields. 

To use an existing dataset, select **Host Path (Path that already exists on the system)**. 
**Mount Path** populates with **/data** or **/data<em>#</em>**, where *#* is a number to distinguish multiple instances of MinIO such as in a cluster configuration. 
Browse to the location of the dataset and click on it to populate the **Host Path**. 

If setting up a cluster configuration, [MinIO Single-Node Mulit-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd), click **Add** in **MultiMode Configuration**. 
MinIO recommends using MNMD (distributed) for enterprise-grade performance and scalability.
For SNMD, enter <code><b>/data*{1..3}</i></b></code> where *{1..3}* represents the number for the drive 1 through 3. 
For MNMD, enter <code><b>https://minio<i>{1...4}.example.com</i>:30000/data<i>{1...4}</i></b></code>

To setup up logging, select **Anonymous** to hide sensitive information from logging, or **Quiet** to disable startup information.

Select the optional **Enable Log Search API** to enable LogSearch API and configure MinIO to use this function and deploy a postgres database to store the logs. 
Specify the storage in gigabytes that the logs are allowed to occupy in **Disk Capacity in GB**. 
Accept the default **ixVolume** in **Postgres Data Storage** and **Postgres Backup Storage** to let the system create the datasets, or select **Host Path** to select an existing dataset on the system to use for these storage volumes.

Accept the default values in **Resources Configuration** or to customize the CPU and memory allocated to the container (pod) the Minio app uses, enter new values in the **CPU Resource Limit** and **Memory Limit** fields. 
Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

By default, this application is limited to use no more than **4** CPU cores and **8** Gibibytes available memory.
The application might use considerably less system resources.

Click **Install** to complete the installation.

The **Installed** applications screen opens showing the MinIO application in the **Deploying** state. 
It changes to **Running** when the application is ready to use. 

{{< trueimage src="/images/SCALE/23.10/MinIOEnterpriseInstalled.png" alt="MinIO App Installed" id="5: MinIO App Installed" >}}

Click **Web Portal** to open the MinIO sign-in screen.

{{< trueimage src="/images/SCALE/23.10/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="6: MinIO Sign-In Screen" >}}

{{< taglist tag="scaleminio" limit="10" title="Related MinIO Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Related Enterprise Articles" >}}
