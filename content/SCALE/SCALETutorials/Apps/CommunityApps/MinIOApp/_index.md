---
title: "MinIO App"
description: "Tutorials for using the MinIO community and Enterprise applications available for TrueNAS SCALE."
geekdocCollapseSection: true
weight:
aliases: 
 - /scale/scaletutorials/apps/minioclustersscale/
 - /scale/scaletutorials/apps/communityapps/minioclustersscale/miniomanualupdate/
 - /scale/scaletutorials/systemsettings/services/s3servicescale/
 - /scale/scaleuireference/systemsettings/services/s3servicescreen/
tags:
- scaleminio
- scaleapps
---

{{< toc >}}

{{< include file="/_includes/CommunityAppsContribute.md" >}}

This section has tutorials for using the MinIO apps available for TrueNAS SCALE.

SCALE has two version of the MinIO application.
The community version of the S3 application available in the **charts** train of TRUENAS catalog application.
The MinIO Enterprise version of the application is a smaller version of MinIO that is tested and polished for a safe and supportable experience for TrueNAS Enterprise customers.
Community members can install either the Enterprise or community version.

{{< expand "Adding the MinIO (Enterprise) App" "v" >}}
{{< include file="/_includes/AddMinioEnterpriseTrain.md" >}}

MinIO High Performance Object Storage, released under the Apache Licenses v2.0 is an Open Source, Kubernetes Native, and Amazon S3 cloud storage compatible object storage solution. For more on MinIO, see [MinIO Object Storage for Kubernetes](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect).

The Minio applications, **chart** and **enterprise** train versions, allow users to build high performance infrastructure for machine learning, analytics, and application data workloads.

MinIO supports [distributed mode](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect).
Distributed mode, allows pooling multiple drives, even on different systems, into a single object storage server.
For information on configuring a distributed mode cluster in SCALE using MinIO, see [Setting Up MinIO Clustering]({{< relref "MinIOClustering.md" >}}).

For information on installing and configuring MinIO Enterprise, see [Installing MinIO Enterprise]({{< relref "/SCALE/SCALETutorials/Apps/EnterpriseApps/MinIO/_index.md" >}}).

{{< /expand >}}

## Installing MinIO (S3) Community App

The instructions in this section cover the basic requirements and instruction on how to install and configure the community MinIO application, **charts** train version.
For instructions on installing the Enterprise version of the MinIO application see [Configuring
Enterprise MinIO]({{< relref "/SCALE/SCALETutorials/Apps/EnterpriseApps/_index.md" >}}).

### First Steps

{{< include file="/_includes/MinIODatasetRequirements.md" >}}

### Configuring MinIO (S3) Community App

{{< include file="/_includes/MinIOInstallAppNameWorkloadConfigSteps.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/_includes/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< include file="/_includes/MinIOPortsAndLogSearch.md" >}}

{{< include file="/_includes/MinIOStorageDataVolume.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioStorageAddExtraHostPathVol.png" alt="Add Host Path Volume" id="Add Host Path Volume" >}}

If you want to create volumes for postgres data and postgres backup, select **Postgres Data Volume** and/or **Postgres Backup Volume** to add the mount and host path fields for each.
If not set, TrueNAS uses the defaults for each **postgres-data** and **postgres-backup**.

{{< include file="/_includes/MinIODNSAndResourceLimits.md" >}}

The **Installed** applications screen displays showing the MinIO application in the **Deploying** state.
It changes to **Running** when the application is ready to use.

{{< trueimage src="/images/SCALE/Apps/MinIOAppInstalled.png" alt="MinIO App Installed" id="MinIO App Installed" >}}

Click **Web Portal** to open the MinIO sign-in screen.

{{< trueimage src="/images/SCALE/Login/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="MinIO Sign-In Screen" >}}

### Understanding MinIO App Settings
The following section provide more detailed explanations of the settings found in each section of the **Install MinIO** configuration screen.

#### Application Name Settings
Accept the default value or enter a name in **Application Name** field.
Accept the default version number in **Version**.

#### Workload Configuration Settings
The MinIO **Workload Configuration** section includes the **MinIO update strategy** setting that sets how application updates occur.

{{< trueimage src="/images/SCALE/Apps/InstallMinioWorkloadConfig.png" alt="MinIO Workload Configuration" id="MinIO Workload Configuration" >}}

Select **Create new pods then kill old ones** to implement a rolling update strategy where the existing container (pod) remains until the update completes, then it is removed.
Select **Kill existing pods before creating new ones** to implement a recreate update strategy where you remove the existing container (pod) and then create a new one.
The recommended option is to keep the default and use the the rolling update strategy.

#### MinIO Configuration Settings
The **MinIO Configuration** section provides options to set up a cluster, add arguments, credentials, and environment variables to the deployment.

{{< include file="/_includes/MinIOEnableDistributedModeInfo.md" >}}

The app is preconfigured with arguments it needs to deploy a container. Do not enter the **server** and URL argument earlier versions of the app required.

{{< trueimage src="/images/SCALE/Apps/InstallMinioAddConfiguration.png" alt="MinIO Configuration Settings" id="MinIO Configuration Settings" >}}

Enter the name for the root user (MinIO access key) in **Root User**. Enter a name of five to 20 characters in length. For example *admin* or *admin1*.
Next enter the root user password (MinIO secret key) in **Root Password**. Enter eight to 40 random characters. For example *MySecr3tPa$$w0d4Min10*.

Next click **Add** twice to enter these two Environment Variables, **MINIO_ROOT_USER** and **MINIO_ROOT_PASSWORD**.
These are user credentials to access MinIO. For example, enter *admin* as the **MINIO_ROOT_USER** value and a strong password in **MINIO_ROOT_PASSWORD**.

Accept the default port settings in **MinIO Service Configuration**. Before changing ports, refer to [Default Ports](https://www.truenas.com/docs/references/defaultports/).

{{< trueimage src="/images/SCALE/Apps/InstallMinioConfigPortsAndLogSearch.png" alt="MinIO Port and LogSearch Settings" id="MinIO Port and LogSearch Settings" >}}

Select the optional **Enable Log Search API** to enable LogSearch API and configure MinIO to use this function. This deploys a postgres database to store the logs.
Enabling this option displays the **Disk Capacity in GB** field. Use this to specify the storage in gigabytes the logs are allowed to occupy.

#### Storage Settings

MinIO storage settings include the option to add mount paths and storage volumes to use inside the container (pod).
There are three storage volumes, data, postgres data, and postgres backup. The data volume is the only required storage volume.

Accept the default /export value in **Mount Path**.
Click **Add** to the right of **Extra Host Path Volumes** to add a data volume for the dataset and directory you created above.
Enter the **/data** directory in **Mount Path in Pod** and the dataset you created in the [First Steps](#first-steps) section above in **Host Path**.

{{< trueimage src="/images/SCALE/Apps/InstallMinioStorageAddExtraVols.png" alt="MinIO Add Storage Volumes" id="MinIO Add Storage Volumes" >}}

Of the three volume options, adding the data volume and directory are required.
Adding postgres data volumes is optional.

{{< trueimage src="/images/SCALE/Apps/InstallMinioStorageAddPostgresVolumes.png" alt="Add Postgres Volumes" id="Add Postgres Volumes" >}}

To add host paths for postgress storage volumes, select **Enable Host Path for Postgres Data Volume** and/or **Enable Host Path for Postgres Backup Volumes**.
SCALE default values for each of these postgres volumes are **postgres-data** and **postgres-backup**.

#### Advanced DNS Settings

MinIO does not require configuring advanced DNS options.
Accept the default settings or click **Add** to the right of **DNS Options** to show the **Name** and **Value** fields for a DNS option.

{{< trueimage src="/images/SCALE/Apps/InstallMinioAdvancedDNSSettings.png" alt="MinIO Advanced DNS Settings" id="MinIO Advanced DNS Settings" >}}

#### Resource Limit Settings
By default, this application is limited to use no more than **4** CPU cores and **8** Gigabytes available memory.
The application might use considerably less system resources.

{{< trueimage src="/images/SCALE/Apps/InstallMinioAddResourceLimits.png" alt="MinIO Add CPU and Memory Limits" id="MinIO Add CPU and Memory Limits" >}}

To customize the CPU and memory allocated to the container (pod) the MinIO app uses, select **Enable Pod resource limits**.
This adds the **CPU Resource Limit** and **Memory Limit** fields.
Tune these limits as needed to prevent the application from overconsuming system resources and introducing performance issues.

## Contents

{{< children depth="2" description="true" >}}
