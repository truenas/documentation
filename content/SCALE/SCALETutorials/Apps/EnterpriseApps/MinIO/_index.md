---
title: "MinIO Enterprise"
description: "Tutorials for installing and configuring the MinIO Enterprise application in an Enterprise-licensed deployment."
geekdocCollapseSection: true
weight: 20
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

{{< include file="/static/includes/SCALEEnterpriseApps.md" >}}

This article applies to the TrueNAS MinIO application in the **enterprise** train.
This smaller version of MinIO is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
The enterprise MinIO application is tested and verified as an immutable target for Veeam Backup and Replication.

## Adding MinIO Enterprise App
Community members can add and use the MinIO Enterprise app or the default community version.
{{< expand "Adding Enterprise Train Apps" "v" >}}
{{< include file="/static/includes/AddMinioEnterpriseTrain.md" >}}
{{< /expand >}}

## Before You Begin
To install the MinIO **enterprise** train app, first create a self-signed certificate for the MinIO app.
The **Certificates** setting is not required for a basic configuration but is required when setting up multi-mode configurations and when using MinIO as an immutable target for Veeam Backup and Replication.
{{< expand "Adding an App Certificate" "v" >}}
{{< include file="/static/includes/AddAppCertificate" >}}
{{< /expand >}}

If not already assigned, set a pool for applications to use.

You can allow the app to create the storage volume or use the recommended method and create the required **data1** dataset to use with the host path option.
[Create the dataset]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
You can organize the dataset under a parent dataset for MinIO to keep the storage datasets separated from dataset for other potential applications.
For example, create the *minio* dataset and nest **data1** under it.

You can also mount other storage volumes inside the container pod using either the ixVolume or Host Path options, but these are not required.
If mounting additional storage volumes with the host path option, create the dataset(s) before using the app installation wizard.

Either use the default user and group IDs or [create a new user]({{< relref "ManageLocalUsersSCALE.md#creating-user-accounts" >}}) with **Create New Primary Group** selected.
Make note of the UID/GID for the new user to add in the installation wizard.

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.

## Installing the MinIO Application
{{< hint info >}}
This basic procedure covers the required MinIO enterprise app settings.
For optional settings, see [Understanding MinIO Wizard Settings](#understanding-minio-wizard-settings).
{{< /hint >}}

{{< include file="/static/includes/AddMultipleAppInstancesAndNaming.md" >}}

{{< include file="/static/includes/MinIoEnterpriseConfig1.md" >}}

{{< include file="/static/includes/MinIOEnterpriseNetworkConfig.md" >}}

Enter the TrueNAS server IP address and the API port number 30000 as a URL in **MinIO Server URL (API**). For example, http://*ipaddress*:30000.
Enter the TrueNAS server IP address and the web UI browser redirect port number 30001 as a URL in **MinIO Browser Redirect URL**. For example, http://*ipaddres*:30001.

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfigSettings.png" alt="MinIO Enterprise Storage Configuration Settings" id="MinIO Enterprise Storage Configuratio Settings" >}}

Select the storage type you want to use.
To allow TrueNAS to create the storage volume, set **Type** to **ixVolume (Dataset created automatically by the system)**, which is the default storage type.

To use an existing dataset, select **Host Path (Path that already exists on the system)**.
**Mount Path** populates with the default **/data1**.
Enter the path or browse to and click on the **data1** dataset location to populate **Host Path**.

If setting up a cluster configuration, select **Enabled** to show the multi-mode **Multi Mode (SNMD or MNMD Entries)** settings.

{{< include file="/static/includes/MinIOEnterpriseConfig2.md" >}}

### Understanding MinIO Wizard Settings
The following section provides more detailed explanations of the settings in each section of the **Install MinIO** configuration wizard.

#### Application Name Settings

{{< include file="/static/includes/AppsWizardAppNameAndVersion.md" >}}

#### MinIO Configuration Settings

{{< include file="/static/includes/MinIOEnterpriseMinIOConfig.md" >}}

#### User and Group Configuration

{{< include file="/static/includes/AppUserAndGroupConfig.md" >}}

#### Network Configuration
Accept the default port numbers in **API Port** and **Console Port (Web UI)**, which are the port numbers MinIO uses to communicate with the app and web portal.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseNetworkConfig.png" alt="MinIO Enterprise Network Configuration" id="MinIO Enterprise Network Configuration" >}}

Enter the system IP address in URL format followed by the port number for the API separated by a colon in **Server URL**. For example, <b>https://<i>10.123.12.123</i>:30000</b>.

Enter the system IP address in URL format followed by the port number for the web portal separated by a colon in **Console URL**. For example, <b>https://<i>10.123.12.123</i>:30001</b>.

{{< hint type=note >}}
MNMD MinIO installations require HTTPS for both **Server URL** and **Console URL** to verify the integrity of each node.
Standard or SNMD MinIO installations do not require HTTPS.
{{< /hint >}}

Do not select **Host Network**.

MinIO does not require a certificate for a basic configuration and installation of MinIO Enterprise, but if installing and configuring multi-mode SNMD or MNMD, you must create a self-signed certificate.

A SNMD configuration can use the same self-signed certificate created for MNMD, but a MNMD configuration cannot use the certificate created for a SNMD configuration because that certificate only includes the IP address for one system.
Create this same self-signed certificate for the MNMD cluster on each system (node) in the cluster! 

#### Storage Configuration
MinIO storage settings include the option to add storage volumes to use inside the container (pod).
To allow TrueNAS to create a storage volume, leave **Type** set to the default **ixVolume *(Dataset created automatically by the system)**.
This adds a storage volume for the application that can be found nested under the **ix-apps** dataset. To see this, create a recursive snapshot of the **ix-apps** dataset.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfig.png" alt="MinIO Add Storage Volumes" id="MinIO Add Storage Volumes" >}}

To use the **data1** existing dataset, select **Host Path (Path that already exists on the system)** from the **Type** dropdown list.
The **Mount Path** field populates with **/data1** as the first storage volume for a basic installation.
Enter the path or browse to select the **data1** dataset and populate the **Host Path** field.

Click **Add** to the right of **Data Directories** to add the storage volume for multi-mode configurations.
For MNMD, click **Add** three times to add the three additional datasets created to serve as the drives in these configurations. Create these before launching the MinIO installation wizard.
Multi node multi-disk clusters require creating four dataset, n**data1**, **data2**, **data3**, and **data4**.
If you change the configuration of a basic installation or SNSD, you can use the **data1** dataset in the configureation and add the three additional datasets.

Change the **Mount Path** for the added volumes to **/data2**, **/data3**, or **/data4**, then either enter or browse to select the dataset of the same name to populate the **Host Path**.

When configuring MNMD, create the same datasets and repeate the storage settings on each system in the cluster.

#### MultiMode Configuration
Multi-mode installs the app in either a [MinIO Single-Node Multi-Drive (SNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-multi-drive.html) or [Multi-Node Multi-Drive (MNMD)](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-multi-node-multi-drive.html#minio-mnmd) cluster.
MinIO recommends using MNMD for enterprise-grade performance and scalability.

Click **Enabled** under **Multi Mode (SNMD or MNMD) Configuration** to enable multi-mode and show the **Multi Mode (SNMD or MNMD)** and **Add** option.
Click **Add** to show the field where you enter the storage or system port and storage URL string for the type of cluster you want to create.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeSNMD.png" alt="Multi Mode SNDN String" id="Multi Mode SNDN String" >}}

Enter **/data{1...4}** in the field if [configuring SNMD]({{< relref "ConfigMinIOEnterpriseSNMD.md" >}}).
Where **/data** represents the dataset name and the curly brackets enclosing **1** and **4** separated by three dots represent the numeric value of the dataset names.

Enter <b>https://<i>10.123.12.100</i>{0...3}:30000/data{1...4}</b> in the field if [configuring MNMD]({{< relref "ConfigMinioEnterpriseMNMD.md" >}}).
The last number in the final octet of the IP address number is the first number in the **{0...3}** string.
Separate the numbers in the curly brackets with three dots.
If your sequential IP addresses are not using 100 - 103, for example *10.123.123.125* through *128*, then enter them as <b>https://<i>10.123.123.12</i>{5...8}:30000/data{1...4}</b>.

If the IP addresses assigned to the four systems are not sequentially numbered, assign sequentially numbered host names.
For example, <b>minio1.<i>mycompany.com</i></b> through <b>minio4.<i>mycompany.com</i></b>.
Enter <b>https://minio{1...4}.<i>mycompany.com</i>:30000/data{1...4}</b> in the **Multi Mode (SNMD or MNMD)** field.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddMultiModeConfigExample.png" alt="Multi Mode MNMD String" id="Multi Mode MNDN String" >}}

#### Resource Configuration

{{< include file="/static/includes/SyncthingWizardResourceConfig.md" >}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
