---
title: "Installing MinIO (S3) App"
description: "Provides installation instructions for the S3 MinIO community full version application."
weight: 5
aliases:
 - 
tags:
- scaleminio
- scaleapps
- scales3
---

{{< toc >}}

MinIO High Performance Object Storage, released under the Apache Licenses v2.0 is an Open Source, Kubernetes Native, and Amazon S3 cloud storage compatible object storage solution. For more on MinIO, see [MinIO Object Storage for Kubernetes](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect).

The Minio applications,**chart** and **enterprise** train versions, allow users to build high performance infrastructure for machine learning, analytics, and application data workloads.

MinIO supports [distributed mode](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect). 
Distributed mode, allows pooling multiple drives, even on different systems, into a single object storage server. 
For information on configuring a distributed mode cluster in SCALE using MinIO, see [Setting Up MinIO Clustering]({{< relref "MinIOClustering.md" >}}).

For information on installing and configuring MinIO Enterprise, see [Configuring MinIO Enterprise]({{< relref "ConfigMinioEnterprise.md" >}}).

## First Steps

{{< include file="/_includes/MinIODatasetRequirements.md" type="page" >}}

## Installing MinIO (S3) Community App

To install the S3 Minio (community app), go to **Apps**, click on **Discover Apps**, then either begin typing Minio into the search field or scroll down to locate the **charts** version of the **Minio** widget.

{{< trueimage src="/images/SCALE/23.10/AppsMinIOS3widget.png" alt="Minio (S3) Application Widget" id="1: Minio (S3) Application Widget" >}}

Click on the widget to open the **Minio** application information screen.

{{< trueimage src="/images/SCALE/23.10/MiniIOS3AppInfoScreen.png" alt="Minio (S3) App Information Screen" id="2: Minio (S3) App Information Screen" >}}

Click **Install** to open the **Install Minio** screen.

{{< trueimage src="/images/SCALE/23.10/InstallMinioS3Screen.png" alt="Install Minio (S3) Screen" id="3: Install Minio (S3) Screen" >}}

Accept the default values for **Application Name** and **Version**. 
The best practice is to keep the default **Create new pods and then kill old ones** in the **Minio update strategy**. This implements a rolling upgrade strategy.

The Minio application defaults include all the arguments you need to deploy a container for the application. 
Enter the root user name you want to use as the Minio access key. Enter a name of five to 20 characters in length, for example *admin* or *admin1*. 
Next enter the root user password to use as the Minio secret key. Enter eight to 40 random characters, for example *MySecr3tPa$$w0d4Min10*.

Enter these two Environment Variables, MINIO_ROOT_USER and MINIO_ROOT_PASSWORD. 
These are the user credentials to access Minio. For example, enter *admin* in **MINIO_ROOT_USER** and a strong password in **MINIO_ROOT_PASSWORD**.

To add logging select **Enable Log Search API** and enter the amount of storage you want to allocate to logging. The default is 5 disks.

Configure the storage volumes. 
There are three storage volumes, data, postgres data, and postgres backup. The data volume is the only required storage volume. 
Leave **Minio Data Mount Path** set to the default **/export**. 
Click **Add** to the right of **Extra Host Path Volumes** to add the **Mount Path in Pod** and **Host Path** fields. 

{{< trueimage src="/images/SCALE/23.10/InstallMinioStorageAddExtraHostPathVol.png" alt="Add Host Path Volume" id="4: Add Host Path Volume" >}}

Enter or browse to and select the dataset you created for the MinioO container in the **Host Path** and enter the **/data** directory in **Mount Path in Pod**.

If you want to use a host path to store your Minio data volume, select **Enable Host Path for MinIO Data Volume** and then select the path. 

If you want to create volumes for postgres data and postgres backup, select **Postgres Data Volume** and/or **Postgres Backup Volume** to add the mount and host path fields for each. 
If not set, TrueNAS uses the defaults for each **postgres-data** and **postgres-backup**.

Accept the defaults in **Advanced DNS Settings**. 
If you want to limit the CPU and memory resources available to the container, select **Enable Pod resource limits** then enter the new values for CPU and/or memory.

Click **Install** when finished entering the configuration settings.

The **Installed** applications screen displays showing the Minio application in the **Deploying** state, then changes to **Running** when the application is ready to use. 

{{< trueimage src="/images/SCALE/23.10/MinIOAppInstalled.png" alt="MinioO App Installed" id="5: Minio App Installed" >}}

Click **Web Portal** to open the Minio sign-in screen.

{{< trueimage src="/images/SCALE/23.10/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="6: MinIO Sign-In Screen" >}}

### Application Name Settings
Accept the default value or enter a name in **Application Name** field. 
Accept the default version number in **Version**.

### Workload Configuration Settings
The Minio **Workload Configuration** section includes the **Minio update strategy** setting that sets how application updates occur. 

{{< trueimage src="/images/SCALE/23.10/InstallMinioWorkloadConfig.png" alt="Minio Workload Configuration" id="7: Minio Workload Configuration" >}}

Select **Create new pods then kill old ones** to implement a rolling update strategy where the existing container (pod) remains until the update completes, then it is removed. 
Select **Kill existing pods before creating new ones** to implement a recreate update strategy where you remove the existing container (pod) and then create a new one.
The recommended option is to keep the default and use the the rolling update strategy.

### Minio Configuration Settings
The **Minio Configuration** section provides options to set up a cluster, add arguments, credentials, and environment variables to the deployment. 
The app is preconfigured with the **server** and URL argument earlier versions of the app required, so do not enter them here.

{{< trueimage src="/images/SCALE/23.10/InstallMinioAddConfiguration.png" alt="Minio Configuration Settings" id="8: Minio Configuration Settings" >}}

Enter the name for the root user (Minio access key) in **Root User**. Enter a name of five to 20 characters in length. For example *admin* or *admin1*. 
Next enter the root user password (Minio secret key) in **Root Password**. Enter eight to 40 random characters. For example *MySecr3tPa$$w0d4Min10*.

Next click **Add** twice to enter these two Environment Variables, **MINIO_ROOT_USER** and **MINIO_ROOT_PASSWORD**. 
These are user credentials to access Minio. For example, enter *admin* as the **MINIO_ROOT_USER** value and a strong password in **MINIO_ROOT_PASSWORD**.

Accept the default port settings in **Minio Service Configuration**. Before changing ports, refer to [Default Ports]({{< relref "DefaultPorts.md" >}}).

{{< trueimage src="/images/SCALE/23.10/InstallMinioConfigPortsAndLogSearch.png" alt="Minio Port and LogSearch Settings" id="9: Minio Port and LogSearch Settings" >}}

Select the optional **Enable Log Search API** to enable LogSearch API and configure Minio to use this function. This deploys a postgres database to store the logs. 
Enabling this option displays the **Disk Capacity in GB** field. Use this to specify the storage in gigabytes the logs are allowed to occupy.

### Storage Settings

Minio storage settings include the option to add mount paths and storage volumes to use inside the container (pod). 
Accept the default /export value in **Mount Path**.
Click **Add** to the right of **Extra Host Path Volumes** to add a data volume for the dataset and directory you created above.
Enter the **/data** directory in **Mount Path in Pod** and the dataset you created in the [First Steps](#first-steps) section above in **Host Path**.

{{< trueimage src="/images/SCALE/23.10/InstallMinioStorageAddExtraVols.png" alt="Minio Add Storage Volumes" id="10: Minio Add Storage Volumes" >}}

Of the three volume options, adding the data volume and directory are required. 
Adding postgres data volumes is optional.

{{< trueimage src="/images/SCALE/23.10/InstallMinioStorageAddPostgresVolumes.png" alt="Add Postgres Volumes" id="11: Add Postgres Volumes" >}}

To add host paths for postgress storage volumes, select **Enable Host Path for Postgres Data Volume** and/or **Enable Host Path for Postgres Backup Volumes**. 
SCALE default values for each of these postgres volumes are **postgres-data** and **postgres-backup**.

### Advanced DNS Settings

Minio does not require configuring advanced DNS options. 
Accept the default settings or click **Add** to the right of **DNS Options** to show the **Name** and **Value** fields for a DNS option.

{{< trueimage src="/images/SCALE/23.10/InstallMinioAdvancedDNSSettings.png" alt="Minio Advanced DNS Settings" id="12: Minio Advanced DNS Settings" >}}

### Resource Limit Settings
By default, this application is limited to use no more than **4** CPU cores and **8** Gibibytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/23.10/InstallMinioAddResourceLimits.png" alt="Minio Add CPU and Memory Limits" id="13: Minio Add CPU and Memory Limits" >}}

To customize the CPU and memory allocated to the container (pod) the Minio app uses, select **Enable Pod resource limits**. 
This adds the **CPU Resource Limit** and **Memory Limit** fields. 
Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.


{{< taglist tag="scaleminio" limit="10" title="Related Minio Articles" >}}

