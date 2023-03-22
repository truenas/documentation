---
title: "Clustering and Sharing SCALE Volumes with TrueCommand"
description: "Requirements and process description for using TrueCommand to cluster and share data from TrueNAS SCALE systems."
weight: 50
tags:
 - scaleclustering
aliases:
 - /truecommand/clustering/clustervolumes/
 - /truecommand/clustering/manageclusters/
 - /truecommand/clustering/mountingclustervolumes/
---

{{< toc >}}

## Introduction

{{< include file="/content/_includes/ClusterIntro.md" type="page" >}}

## Requirements

{{< include file="/content/_includes/ClusterRequirements.md" type="page" >}}

## Warnings and Restrictions

{{< include file="/content/_includes/ClusterWarnings.md" type="page" >}}

## Setting up the Environment

Configuring the cluster feature is a multi-step process that spans multiple systems.

{{< expand "Setup Guide (click to expand)" "v" >}}
{{< include file="/content/_includes/ClusterSetup.md" type="page" >}}
{{< /expand >}}

## Creating the Cluster

When the SCALE, AD, and TrueCommand environments are ready, log in to TrueCommand to cluster the SCALE systems.

Click the <span class="iconify" data-icon="mdi:server-network"></span> **Clusters** icon in the upper left. Click **CREATE CLUSTER** to see the cluster creation options.

   ![CreateClusterSystemsNetwork](/images/TrueCommand/2.2/CreateClusterSystemsNetwork.png "Network Options for Clustered Systems")

1. Enter a unique name for the cluster and open the dropdown to select the systems to include.
2. When each SCALE system is listed, open the **Network Address** dropdown for each one and choose the static IP address from the previously configured subnet dedicated to cluster traffic.
3. Click **NEXT**, verify the settings, then click **CREATE**

TrueCommand may take a while to create the cluster.

## Configuring the Cluster

After creating the cluster, TrueCommand opens another sidebar to configure it for AD connectivity and SMB sharing:

### VIPs

![ConfigureClusterSMBNetwork](/images/TrueCommand/2.3.1/ConfigureClusterSMBNetwork.png "Configure Cluster SMB Network")

1. For each system, choose the IP address related to the primary subnet (typically the IP address you use to connect the SCALE system to TrueCommand).
2. Click **NEXT**.

### Associate VIPs

![ConfigureClusterAssociateVIPs](/images/TrueCommand/2.3.1/ConfigureClusterAssociateVIPs.png "Configure Associate VIPs")

1. Select the interfaces to associate with the VIPs. You should select the interface configured for the SCALE system IP address.
2. Click **Next**.

### Active Directory

![ConfigureClusterActiveDirectory](/images/TrueCommand/2.3.1/ConfigureClusterActiveDirectory.png "Configure Cluster Active Directory Connection")

1. Enter the Microsoft Active Directory credentials.
2. Click **NEXT**.

### Confirmation

![ConfigureClusterReview](/images/TrueCommand/2.3.1/ConfigureClusterReview.png "Configure Cluster: Review and confirm")

1. Verify the connection details are correct.
2. Click **CONFIRM** to configure the cluster, or click **BACK** to adjust the settings.

{{< hint info >}}
Creating a cluster has no visible effect on each SCALE web interface.
To verify the cluster is created and active, open the SCALE **Shell** and enter `gluster peer status`.
The command returns the list of SCALE IP addresses and current connection status.
{{< /hint >}}

## Creating Cluster Volumes

1. In the TrueCommand **Clusters** screen, find the cluster to use and click **CREATE VOLUME**.
   
   ![ClustersCreateVolumeDetails](/images/TrueCommand/2.2/ClustersCreateVolumeDetails.png "Add Cluster Volume: Details")
   
2. Enter a unique name for the cluster and select a **Type**.

  **Volume Types**

   {{< expand "Current Types (click to expand)" "v" >}}
   {{< include file="/content/_includes/ClusterTypes.md" type="page" >}}
   {{< /expand >}}

3. After configuring the **Type**, enter a **Brick Size** based on the available storage from the clustered pools and your storage requirements.
4. Review the **Pools** for each SCALE system in the cluster and ensure you use the desired pool for this cluster volume.
5. Click **NEXT**.
6. Review the settings for the new volume and click **CREATE** when ready.

TrueCommand adds new cluster volumes to the individual cluster cards on the **Clusters** screen.

{{< hint info >}}
The web interface for the individual SCALE systems does not show any datasets created for cluster volumes.
To verify the volume created, go to the **Shell** and enter `gluster volume info all`.
{{< /hint >}}

## Sharing the Cluster Volume

Share a cluster volume by going to the TrueCommand **Clusters** screen, finding the cluster card, and clicking on the desired cluster volume.
Click **CREATE SHARE**.

![ClustersClusterVolumeExpandedCreateShare](/images/TrueCommand/2.2/ClustersClusterVolumeExpandedCreateShare.png "Add Cluster Share")

1. Enter a unique **Name** for the share.
2. Choose an **ACL** to apply to the share.
   {{< expand "Current Options (click to expand)" "v" >}}
   * **POSIX_OPEN** - Grants read, write, and execute permissions for all users.
   * **POSIX_RESTRICTED** - Grants read, write, and execute to owner and group, but not others. The template might optionally include the special-purpose 'builtin_users' and 'builtin_administrators' groups and Domain Users and Domain Admins groups in Active Directory environments.
   {{< /expand >}}
3. Setting **Readonly** prevents users from changing the cluster volume contents.
4. Click **CONFIRM** to create the SMB share and make it immediately active.

{{< hint info >}}
The SMB share adds to the SCALE **Shares** > **SMB** section for each system in the cluster.
Attempting to manage the share from the SCALE UI is not recommended.
{{< /hint >}}

### Connecting to the Shared Volume

There are several ways to access an SMB share, but this article demonstrates using Windows 10 File Explorer.

1. From a Windows 10 system connected to the same network as the clustering environment, open File Explorer.
2. In the **Navigation** bar, clear the contents and enter `\\` followed by the IP address or host name of one of the clustered SCALE systems. Press <kbd>Enter</kbd>.
3. When prompted, enter the user name and password for an Active Directory user account. Be sure to enter the Active Directory system name before the user account name (example: `AD01\sampuser`).
4. Browse to the cluster volume folder to view or modify files.

![WindowsFileExplorereAccessClusterShare](/images/TrueCommand/2.2/WindowsFileExplorereAccessClusterShare.png "Cluster Volume Share Options")

## Replacing Cluster Nodes

{{< hint info >}}
Cluster node replacement only works if you are using TrueCommand 2.3 or later and SCALE 22.12.0 or later.

New replacement nodes must have the same hardware as the old node you are replacing. The old node must also have a configuration backup that is safe and accessible. 
{{< /hint >}}

The method you use to replace a cluster node differs depending on whether or not the node has access to the data on the brick.

### The Node Has Access to Brick Data

If the node you are replacing still has access to the data on the brick, you must first install the same SCALE version on the replacement system (node).

After installing SCALE on the new system, access the web UI and go to **System Settings > General**. Click **Manage Configuration**, then select **Upload Config**. Select the configuration file from the node you are replacing and click **Upload**.

After applying the configuration, the system reboots and uses the same configuration as the node you are replacing. The new system automatically joins the cluster and heals damaged data before returning to a healthy state. 

### The Node Does Not Have Access to Brick Data

If the node you are replacing does not have access to the data on the brick, you must first install the same SCALE version on the replacement system (node).

After installing SCALE on the new system, access the web UI and go to **Storage**. Create a pool with the same name as the pool on the node you are replacing. 

Go to **System Settings > Shell** and enter `midclt call gluster.peer.initiate_as_replacement <poolname> <clustervolumename>`

`poolname` is the name of the pool you created.
`clustervolumename` is the name of the cluster volume you are currently using.

After the command succeeds, go to **System Settings > General**. Click **Manage Configuration**, then select **Upload Config**. Select the configuration file from the node you are replacing and click **Upload**.

After applying the configuration, the system reboots and uses the same configuration as the node you are replacing. The new system automatically joins the cluster and heals damaged data before returning to a healthy state.

## Clustered Backup Strategies
TrueNAS Enterprise Customers can contact iX Support to discuss your clustered backup strategy options.

{{< expand "Contacting iX Support" "v" >}}
{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}
{{< /expand >}}

## See Also

{{< taglist tag="scaleclustering" limit="10" title=" " >}}
