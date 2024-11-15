---
title: "Setting Up MinIO Clustering"
description: "Provides configuration instructions using the MinIO Offical Charts application widget. It includes instructions on setting up a distributed cluster configuration."
weight: 20
aliases:
 - /scale/scaleuireference/apps/minioclustersscale/
 - /scale/scaletutorials/apps/minioclustersscale/minioclustering/
 - /scale/scaletutorials/apps/communityapps/minioclustersscale/minioclustering/
 - /scale/scaletutorials/apps/chartapps/minioapp/minioclustering/
 - /scale/scaletutorials/apps/stableapps/minioapp/minioclustering/
 - /truenasapps/communityapps/minioapp/minioclustering/
tags:
- s3
- apps
- clustering
keywords:
- nas data storage
- software storage solutions
- object based storage
---


{{< include file="/static/includes/ProposeArticleChange.md" >}}

{{< hint info >}}
This article applies to the public release of the S3 **MinIO** charts application in the TRUENAS catalog.
{{< /hint >}}

TrueNAS 23.10 and later allows users to create a MinIO S3 distributed instance to scale out TrueNAS to handle individual node failures.
A *node* is a single TrueNAS storage system in a cluster.

The **stable** train version of MinIO supports [distributed mode](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect).
Distributed mode, allows pooling multiple drives, even on different systems, into a single object storage server.
For information on configuring a distributed mode cluster in TrueNAS using MinIO, see [Setting Up MinIO Clustering]({{< relref "MinIOClustering.md" >}}).

The **enterprise** train version of MinIO provides two options for clustering, Single Node Multi Disk (SNMD) and Multi Node Multi Disk (MNMD) configurations. See [MinIO Enterprise]({{< relref "/TruenasApps/EnterpriseApps/MinIO/_index.md" >}}) for more information.

The examples below use four TrueNAS systems to create a distributed cluster.
For more information on MinIO distributed setups, refer to the [MinIO documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## Before You Begin

{{< include file="/static/includes/apps/MinIODatasetRequirements.md" >}}

For a distributed configuration, repeat the above on all system nodes in advance.
Take note of the system (node) IP addresses or host names and have them ready for configuration. Also, have your S3 user name and password ready for later.

If your system has sharing (SMB, NFS, iSCSI) configured, disable the share service before adding and configuring a new MinIO deployment.
After completing the installation and starting MinIO, enable the share service.

For more information on app installation wizard settings see [Understanding MinIO Wizard Settings]({{< relref "TruenasApps/StableApps/MinioApp/_index.md #understanding-minio-wizard-settings" >}})

## Configuring MinIO
Begin on the first node (system) in your cluster.

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioS3Screen.png" alt="MinIO Install Wizard Screen" id="MinIO Install Wizard Screen" >}}

{{< include file="/static/includes/apps/AppsWizardAppNameAndVersion.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/static/includes/MinIOEnableDistributedModeInfo.md" >}}

For a distributed cluster, ensure the values are identical between server nodes and have the same credentials.

{{< include file="/static/includes/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioDistributedModeAddStorage.png" alt="MinIO Distributed Mode Settings" id="MinIO Distributed Mode Settings" >}}

{{< include file="/static/includes/MinIOPortsAndLogSearch.md" >}}

MinIO uses two datasets and mount paths. Set the first to **/export** with the host path set to the **export** dataset.
The other mount point is **/data** with the host path set to the **data** dataset.

{{< include file="/static/includes/apps/MinIOStorageDataVolume.md" >}}

Select **Enable ACL** for the **/export** storage volume, enter **473** as the user and give it full permissions.
Repeat for the **/data** storage volume.

{{< trueimage src="/images/SCALE/Apps/MinIODistributedModeConfigExportAndDataACLACE.png" alt="Export and Data Host Path ACL and ACE Settings" id="Export and Data Host Path ACL and ACE Settings" >}}

{{< include file="/static/includes/apps/MinIOCompleteInstall.md" >}}

Now that the first node is complete, configure any remaining nodes (including datasets and directories).

After installing MinIO on all systems (nodes) in the cluster, start the MinIO applications.