---
title: "Setting Up MinIO Clustering"
description: "Provides configuration instructions using the MinIO Offical Charts application widget. It includes instructions on setting up a distributed cluster configuration."
weight: 20
aliases:
 - /scale/scaleuireference/apps/minioclustersscale/
 - /scale/scaletutorials/apps/minioclustersscale/minioclustering/
tags:
- scaleminio
- scaleapps
- scaleclustering
---

{{< toc >}}


{{< hint info >}}
This article applies to the public release of the S3 **MinIO** charts application in the TRUENAS catalog.
{{< /hint >}}

On TrueNAS SCALE 23.102-ALPHA.2 and later, users can create a MinIO S3 distributed instance to scale out and handle individual node failures. 
A node is a single TrueNAS storage system in a cluster.

The examples below use four TrueNAS systems to create a distributed cluster.
For more information on MinIO distributed setups, refer to the [MinIO documentation](https://docs.min.io/docs/distributed-minio-quickstart-guide.html).

## First Steps

{{< include file="/_includes/MinIODatasetRequirements.md" type="page" >}}

For a distributed configuration, repeat this on all system nodes in advance. 

Take note of the system (node) IP addresses or host names and have them ready for configuration. Also, have your S3 user name and password ready for later.

## Configuring MinIO

Configure the MinIO application using the full version **Minio charts** widget. 
Go to **Apps**, click **Discover Apps** then 

We recommend using the **Install** option on the **MinIO** application widget. 

If your system has sharing (SMB, NFS, iSCSI) configured, disable the share service before adding and configuring a new MinIO deployment. 
After completing the installation and starting MinIO, enable the share service.

If the dataset for the MinIO share has the same path as the MinIO application, disable host path validation before starting MinIO. 
To use host path validation, set up a new dataset for the application with a completely different path. For example, for the share */pool/shares/minio* and for the application */pool/apps/minio*.

### Configuring MinIO Using Install

Begin on the first node (system) in your cluster. 

{{< include file="/_includes/MinIOInstallAppNameWorkloadConfigSteps.md" type="page" >}}

Next, enter the **MinIO Configuration** settings.

{{< include file="/_includes/MinIOEnableDistributedModeInfo.md" type="page" >}}

{{< include file="/_includes/MinIOInstallArgAndEnvironVarSteps.md" type="page" >}}

For a distributed cluster, ensure the values are identical between nodes and fill the **Minio image environment** values with proper random credentials.

{{< trueimage src="/images/SCALE/23.10/InstallMinioAddConfigurationDistribMode.png" alt="Minio Configuration Settings" id="5: Minio Configuration Settings" >}}

{{< include file="/_includes/MinIOPortsAndLogSearch.md" type="page" >}}

{{< trueimage src="/images/SCALE/23.10/InstallMinioConfigPortsAndLogSearch.png" alt="Minio Port and LogSearch Settings" id="6: Minio Port and LogSearch Settings" >}}

You can also configure a MinIO certificate if you wish.

{{< include file="/_includes/MinIOStorageDataVolume.md" type="page" >}}

{{< trueimage src="/images/SCALE/23.10/InstallMinioStorageAddExtraVols.png" alt="Minio Add Storage Volumes" id="7: Minio Add Storage Volumes" >}}

{{< include file="/_includes/MinIODNSAndResourceLimits.md" type="page" >}}

Now that the first node is complete, configure any remaining nodes (including datasets and directories).

After installing MinIO on all systems (nodes) in the cluster. Start the MinIO applications. 

## Accessing the MinIO Setup

After you create datasets, you can navigate to the TrueNAS address at port **:9000** to see the MinIO UI. After creating a distributed setup, you can see all your TrueNAS addresses.

Log in with the **MINIO_ROOT_USER** and **MINIO_ROOT_PASSWORD** keys you created as environment variables.

Click **Web Portal** to open the Minio sign-in screen.

{{< trueimage src="/images/SCALE/23.10/MinIOWebPortal.png" alt="MinIO Sign-In Screen" id="8: MinIO Sign-In Screen" >}}


{{< taglist tag="scaleminio" limit="10" >}}
{{< taglist tag="scaleclustering" limit="10" title="Related Clustering Articles" >}}
