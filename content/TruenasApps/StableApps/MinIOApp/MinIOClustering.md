---
title: "Setting Up MinIO Clustering"
description: "Provides configuration instructions using the MinIO Offical Charts application widget. It includes instructions on setting up a distributed cluster configuration."
weight: 20
aliases:
 - /scale/scaleuireference/apps/minioclustersscale/
 - /scale/scaletutorials/apps/minioclustersscale/minioclustering/
 - /scale/scaletutorials/apps/communityapps/minioapp/minioclustering/
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
This article applies to the public release of the TrueNAS S3 **MinIO** stable train application configured in a distributed mode cluster.
{{< /hint >}}

TrueNAS 23.10 and later allows users to create a MinIO S3 distributed instance to scale out TrueNAS to handle individual node failures.
A *node* is a single TrueNAS storage system in a cluster.

The **stable** train version of MinIO supports [distributed mode](https://min.io/docs/minio/kubernetes/upstream/index.html?ref=docs-redirect).
Distributed mode, allows pooling multiple drives, even on different systems, into a single object storage server.
For information on configuring a distributed mode cluster in TrueNAS using MinIO, see [Setting Up MinIO Clustering]({{< relref "MinIOClustering.md" >}}).

The **enterprise** train version of MinIO provides two options for clustering, Single Node Multi-Disk (SNMD) and Multi-Node Multi-Disk (MNMD) configurations. See [MinIO Enterprise]({{< relref "/TruenasApps/EnterpriseApps/MinIO/_index.md" >}}) for more information.

The examples below use four TrueNAS systems to create a distributed cluster.
For more information on MinIO distributed setups, refer to the [MinIO documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## Before You Begin
Before you install the **stable** version of the MinIO app:

{{< include file="/static/includes/apps/BeforeYouBeginStableApps.md" >}}
{{< include file="/static/includes/apps/BeforeYouBeginRunAsUser.md" >}}

<div style="margin-left: 33px">{{< trueimage src="/images/SCALE/Apps/MinIOS3AppInfoScreen.png" alt="Plex App Details Screen" id="Plex App Details Screen" >}}</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasets.md" >}}

<div style="margin-left: 33px">Create a parent dataset, such as <i>minio</i>, and then the storage dataset(s) (<b><i>data</i></b>, etc.) under it.
  Select <b>apps</b> as the <b>Dataset Preset</b> for these datasets. You can modify the dataset ACLs at the time of creation, or modify them later when adding them to the app.</div>

<div style="margin-left: 33px">{{< include file="/static/includes/apps/BeforeYouBeginAddAppDatasetsProcedure.md" >}}

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.</div>

{{< include file="/static/includes/apps/BeforeYouBeginAddAppCertificate.md" >}} 

<div style="margin-left: 33px">Adding a certificate is optional, but if you want to use a certificate for this application, either create a new self-signed CA and certificate or import an existing CA and create the certificate for MinIO. A certificate is not required to deploy the stable train MinIO application.</div>

## Configuring MinIO in a Cluster
Begin on the first node (system) in your cluster.

{{< include file="/static/includes/apps/LocateAndOpenInstallWizard.md" >}}

{{< trueimage src="/images/SCALE/Apps/InstallMinioS3Screen.png" alt="MinIO Install Wizard Screen" id="MinIO Install Wizard Screen" >}}

{{< include file="/static/includes/apps/InstallWizardAppNameAndVersion.md" >}}

{{< include file="/static/includes/apps/MultipleAppInstancesAndNaming.md" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/static/includes/apps/MinIOInstallArgAndEnvironVarSteps.md" >}}

{{< include file="/static/includes/apps/MinIOPortsAndLogSearch.md" >}}

{{< include file="/static/includes/MinIOPortsAndLogSearch.md" >}}

Add your **Storage Configuration** settings.

{{< include file="/static/includes/MinIOEnableDistributedModeInfo.md" >}}

For a distributed cluster, ensure the values are identical between server nodes and that they have the same credentials.

{{< trueimage src="/images/SCALE/Apps/InstallMinioDistributedModeAddStorage.png" alt="MinIO Distributed Mode Settings" id="MinIO Distributed Mode Settings" >}}

MinIO uses one dataset, one ixVolume, and two mount paths.
Leave the **MinIO Export Storage (Data)** set to the defaults, with **Type** set to **ixVolume** and the mount path **/export**.
You can create a dataset for this and use the host path option but it is not necessary for this storage volume.

Add the storage volume for MinIO data storage. Click **Add** to the right of **Additional Storage**.
Set **Type** to **Host Path (Path that already exists on the system)**.
Enter **/data** in **Mount Path**, select **Enable ACL**, then enter **data** in **Dataset Name**.

Click **Add** to the right of **ACL Entries** to show the permissions fields.
Set **Id Type** to **Entry is for a USER**, enter **473** in **ID**, and give it full permissions.
Repeat for the **/data** storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOAddDataHostPathACLandACESettings.png" alt="Data Host Path ACL and ACE Settings" id="Data Host Path ACL and ACE Settings" >}}

{{< include file="/static/includes/apps/MinIOCompleteInstall.md" >}}

After completing the first node, begin configuring the remaining system nodes in the cluster (including datasets and directories).

After installing MinIO on all systems (nodes) in the cluster, start the MinIO applications.
