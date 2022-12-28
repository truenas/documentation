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

{{< include file="/content/_includes/ClusterIntro.md" type="page" >}}

## Warnings and Restrictions

{{< include file="/content/_includes/ClusterWarnings.md" type="page" >}}

## Requirements

{{< include file="/content/_includes/ClusterRequirements.md" type="page" >}}

## Setting up the Environment

Configuring the cluster feature is a multi-step process that spans multiple systems.

{{< expand "Setup Guide (click to expand)" "v" >}}
{{< include file="/content/_includes/ClusterSetup.md" type="page" >}}
{{< /expand >}}

## Creating the Cluster

When the SCALE, AD, and TrueCommand environments are ready, log in to TrueCommand to cluster the SCALE systems.

1. Click the <span class="iconify" data-icon="mdi:server-network"></span> **Clusters** icon in the upper left. Click **NEW CLUSTER** to see the cluster creation options.

   ![CreateClusterSystemsNetwork](/images/TrueCommand/2.2/CreateClusterSystemsNetwork.png "Network Options for Clustered Systems")

2. Enter a unique name for the cluster and open the dropdown to select the systems to include in the cluster.
3. When each SCALE system is listed, open the **Network Address** dropdown for each system and choose the static IP address from the previously configured subnet dedicated for cluster traffic.
4. Click **NEXT**, verify the settings, then click **CREATE**

It can take an extended amount of time to create the cluster.

After the initial creation step for the cluster, TrueCommand opens another sidebar to configure the new cluster for AD connectivity and SMB sharing:

![ConfigureClusterSMBNetwork](/images/TrueCommand/2.2/ConfigureClusterSMBNetwork.png "Configure Cluster SMB Network")

{{< hint warning >}}
Skipping this step is not recommended because there are no opportunities to reset the configuration after it is completed.
To go back and add the AD and SMB connection details requires deleting and remaking the cluster.
{{< /hint >}}

1. For each SCALE system, choose the IP address related to the primary subnet.
   This is typically the IP address used to connect the SCALE system to TrueCommand.
   Click **NEXT**.
2. Enter the Microsoft Active Directory credentials and click **NEXT**.
3. Verify the connection details are correct and click **SUBMIT**.

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
4. Review the **Pools** for each SCALE system in the cluster and ensure that the desired pool is used for this cluster volume.
5. Click **NEXT**.
6. Review the settings for the new volume and click **CREATE** when ready.

New cluster volumes are added to the individual cluster cards on the TrueCommand **Clusters** screen.

{{< hint info >}}
The web interface for the individual SCALE systems does not show any datasets created for cluster volumes.
To verify the volume is created, go to the **Shell** and enter `gluster volume info all`.
{{< /hint >}}

## Sharing the Cluster Volume

Share a cluster volume by going to the TrueCommand **Clusters** screen, finding the cluster card, and clicking on the desired cluster volume.
Click **CREATE SHARE**.

![ClustersClusterVolumeExpandedCreateShare](/images/TrueCommand/2.2/ClustersClusterVolumeExpandedCreateShare.png "Add Cluster Share")

1. Enter a unique **Name** for the share.
2. Choose an **ACL** to apply to the share.
   {{< expand "Current Options (click to expand)" "v" >}}
   * **POSIX_OPEN** - Template that grants read, write, and execute permissions to all users.
   * **POSIX_RESTRICTED** - Template that grants read, write, and execute to owner and group, but not other. The template may optionally include the special-purpose 'builtin_users' and 'builtin_administrators' groups as well as Domain Users and Domain Admins groups in Active Directory environments.
   {{< /expand >}}
3. Setting **Readonly** prevents users from making any changes to the cluster volume contents.
4. Click **CONFIRM** to create the SMB share and make it immediately active.

{{< hint info >}}
The SMB share is added to the SCALE **Shares** > **SMB** section for each system in the cluster.
Attempting to manage the share from the SCALE UI is not recommended.
{{< /hint >}}

### Connecting to the Shared Volume

There are many different ways to access an SMB share, but this article demonstrates using the Windows 10 File Explorer.

1. From a Windows 10 system that is connected to the same network as the clustering environment, open File Explorer.
2. In the **Navigation** bar, clear the contents and enter `\\` followed by the IP address or host name of one of the clustered SCALE systems. Press <kbd>Enter</kbd>.
3. When prompted, enter user name and password for an Active Directory user account. Be sure to enter the Active Directory system name before the user account name (example: `AD01\sampuser`).
4. Browse to the cluster volume folder to view or modify files.

![WindowsFileExplorereAccessClusterShare](/images/TrueCommand/2.2/WindowsFileExplorereAccessClusterShare.png "Cluster Volume Share Options")

## Clustered Back Up Strategies
TrueNAS Enterprise Customers can contact iX Support to discuss your clustered back up strategy options.
{{< expand "Contacting iX Support" "v" >}}
{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}
{{< /expand >}}

## See Also

{{< taglist tag="scaleclustering" limit="10" title=" " >}}
