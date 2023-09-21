---
title: "MinIO Enterprise"
description: "Tutorials for installing and configuring the MinIO Enterprise application in an Enterprise-licensed deployment."
geekdocCollapseSection: true
weight: 20
aliases: 
 - /scale/scaletutorials/apps/enterpriseapps/configminioenterprise/
tags:
- scaleminio
- scaleenterprise
---

{{< toc >}}

{{< enterprise >}}
The instructions in this article apply to the Official TrueNAS Enterprise MinIO application. 
This smaller version of MinIO is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers. 
To use the complete MinIO app without iXsystems support, see the application that is available in the Community Apps catalog.

We recommend that TrueNAS SCALE Enterprise (HA) systems not deploy applications.

SCALE Enterprise single controller systems with the applications and virtual machines license feature have access to the **MinIO Official Enterprise** widget. 
{{< /enterprise >}}

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.
{{< expand "Adding Enterprise Train Apps" "v" >}}
{{< include file="/_includes/AddMinioEnterpriseTrain.md" >}}
{{< /expand >}}
## First Steps

If your system has active sharing configurations (SMB, NFS, iSCSI), disable these sharing services in **System Settings > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the install and starts.

## Installing MinIO Enterprise
{{< hint info >}}
This basic procedure covers the required MinIO Enterprise app settings.
It does not provide instructions for optional settings.
{{< /hint >}}

{{< include file="/_includes/MinIoEnterpriseConfig1.md" >}}

The **Certificates** setting is not required for a basic configuration, but is required when setting up multi mode configurations. 
The **Certificates** dropdown list includes valid unrevoked certificates, added using **Credentials > Certificates**. 

Enter the TrueNAS server IP address and the API port number 30000 as a URL in **MinIO Server URL (API**). For example, http://*ipaddress*:30000.
Enter the TrueNAS server IP address and the web UI browser redirect port number 30001 as a URL in **MinIO Browser Redirect URL**. For example, http://*ipaddres*:30001.

Scroll down to the **Storage Configuration** section. 

{{< trueimage src="/images/SCALE/Apps/InstallMinIOStorageConfig.png" alt="MinIO Enterprise Storage Configuration" id="MinIO Enterprise Storage Configuration" >}}

Select the storage type you want to use. 
**ixVolume (Dataset created automatically by the system)** is the default storage type. 
This creates a dataset for your deployment and populates the rest of the storage fields. 

To use an existing dataset, select **Host Path (Path that already exists on the system)**. 
**Mount Path** populates with the default **/data1**.
Browse to the location of the dataset and click on it to populate the **Host Path**. 

If setting up a cluster configuration, select **Enable Multi Mode (SNMD or MNMD)**, then click **Add** in **MultiMode Configuration**. 
MinIO recommends using MNMD for enterprise-grade performance and scalability. See the related MinIO articles listed below for SNMD and MNMD configurations tutorials.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMDorMNMD.png" alt="MinIO Enterprise MultiMode Configuration" id="MinIO Enterprise MultiMode Configuration" >}}

{{< include file="/_includes/MinIOEnterpriseConfig2.md" >}}

### Understanding MinIO App Settings
The following section provides more detailed explanations of the settings found in each section of the **Install MinIO** configuration screen.

#### Application Name Settings
Accept the default value or enter a name in **Application Name** field. 
Accept the default version number in **Version**.

#### MinIO Credentials
MinIO credentials establish the login credentials for the MinIO web portal and as the MinIO administration user. 

If you have existing MinIO credentials, enter these or create new login credentials for the first time you log into MinIO. 
The **Root User** is the equivalent of the MinIO access key. The **Root Password** is the login password for that user or the MinIO secret key.

Enter the name of five to 20 characters in length for the root user (MinIO access key) in **Root User**. For example *admin* or *admin1*. 

Enter eight to 40 random characters for the root user password (MinIO secret key) in **Root Password**. For example *MySecr3tPa$$w0d4Min10*.

#### User and Group Configuration
Accept the default values in **User and Group Configuration**. 
If you configured SCALE with a new administration user for MinIO enter the UID and GID in these fields.

#### Network Configuration
Accept the default port numbers in **API Port** and **Web Port**. These are the port number MinIO uses to communicate with the app and web portal.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="MinIO Enterprise Network Configuration" >}}

Do not select **Host Network**. 

A certificate is not required for a basic configuration and installation of MinIO Enterprise but if installing and configuring multi mode SNMD or MNMD you must use a certificate. 
A SNMD configuration can use the same self-signed certificate created for MNMD but a MNMD configuration cannot use the certificate created for a SNMD configuration because that certificate would only include the IP address for one system. 

Enter the system IP address in URL format followed by the port number for the API separated by a colon in **MinIO Server URL (API)**. For example, <b>https://<i>10.123.12.123</i>:30000</b>. 
Enter the system IP address in URL format followed by the port number for the web portal separated by a colon in **MinIO Browser Redirect URL**. For example, <b>https://<i>10.123.12.123</i>:30001</b>.

#### Storage Configuration
MinIO storage settings include the option to add storage volumes to use inside the container (pod). 
The default storage **Type** is **ixVolume *(Dataset created automatically by the system)** which adds a storage volume for the application to use. 

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfig.png" alt="MinIO Add Storage Volumes" id="MinIO Add Storage Volumes" >}}

To select an existing dataset, select **Host Path (Path that already exists on the system)** from the **Type** dropdown list. 
The **Host Path** and **Mount Path** fields display. 
Enter or browse to select and populate the **Host Path** field.

Accept the default **Mount Path** /data1 for the first storage volume for a basic installation. 

Click **Add** to add a block of storage volume settings. 

When configuring multi mode, click **Add** three times to add three additional datasets created to serve as the drives in these configurations. 
Multi mode uses four dataset named **data1**, **data2**, **data3**, and **data4**. 
Change the **Mount Path** for the added volumes to **/data2**, **/data3**, or **/data4**, then either enter or browse to select the dataset of the same name to populate the **Host Path**.

When configuring MNMD, repeat the storage settings on each system in the node.

#### MultiMode Configuration
Multi mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enable Multi Mode (SNMD or MNMD)** to enable multi mode and display the **Multi Mode (SNMD or MNMD)** and **Add** options. 
Click **Add** to display the field where you enter the storage or system-port and storage URL string.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMD.png" alt="Multi Mode SNDN Command" id="Multi Mode SNDN Command" >}}

Enter **/data{1...4}** in the field if [configuring SNMD]({{< relref "ConfigMinIOEnterpriseSNMD.md" >}}). 
Where **/data** represents the dataset name and the curly brackets enclosing **1** and **4** separated by three dots represent the numeric value of the dataset names.

Enter <b>https://<i>10.123.123.10</i>{0...3}:30000/data{1...4}</b> in the field if [configuring MNMD]({{< relref "ConfigMinioEnterpriseMNMD.md" >}}). 
Where the last number in the final octet of IP address number is the first number in the **{0...3}** string. 
Separate the numbers in the curly brackets with three dots. 
If your sequential IP addresses are not using 100 - 103, for example *10.123.123.125* through *128*, then enter them as <b>https://<i>10.123.123.12</i>{5...8}:30000/data{1...4}</b>.

If you do not have sequentially numbered IP addresses assigned to the four systems, assign sequentially numbered host names. 
For example, <b>minio1.<i>mycompany.com</i></b> through <b>minio4.<i>mycompany.com</i></b>. 
Enter <b>https://minio{1...4}.<i>mycompany.com</i>:30000/data{1...4}</b> in the **Multi Mode (SNMD or MNMD)** field.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeConfigExample.png" alt="Multi Mode MDN Command" id="Multi Mode MNDN Command" >}} 

#### MinIO Logging
Logging is an optional setting. 
If setting up logging, select **Anonymous** to hide sensitive information from logging or **Quiet** to omit (disable) startup information.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOLoggingEnableLogSearch.png" alt="MinIO Enterprise Logging" id="MinIO Enterprise Logging" >}}

Select **Enable Log Search API** to enable LogSearch API and configure MinIO to use this function and add the configuration settings for LogSearch. This deploys a postgres database to store the logs. 

Enter the disk capacity LogSearch can use in **Disk Capacity (GB)**.

Accept the default **ixVolume** in **Postgres Data Storage** to allow the app to create a storage volume. 
To select an existing dataset to use instead of the default, select **Host Path** from the dropdown list. 
Enter or browse to the dataset to populate the **Host Path** field.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOLogSearchEnterHostPaths.png" alt="LogSearch Enter Host Paths" id="LogSearch Enter Host Paths" >}}

Accept the default **ixVolume** in **Postgres Backup Storage** to allow the app to create the storage volume.
To select an existing dataset to use instead of the default, select **Host Path** from the dropdown list. 
Enter or browse to the dataset to populate the **Host Path** field.

#### Resource Configuration

By default, this application is limited to use no more than **4** CPU cores and **8** Gigabytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseResourcesConfig.png" alt="CPU and Memory Limits" id="CPU and Memory Limits" >}} 

Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

## Contents

{{< children depth="2" description="true" >}}

