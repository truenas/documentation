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

When the SCALE, AD, and TrueCommand environments are ready, log into TrueCommand to configure the cluster of SCALE systems.

Click the <span class="iconify" data-icon="mdi:server-network"></span> **Clusters** icon in the upper left. 
Click **CREATE CLUSTER** to see the cluster creation options.

{{< trueimage src="/images/TrueCommand/2.2/CreateClusterSystemsNetwork.png" alt="Network Options for Clustered Systems" id="5: Network Options for Clustered Systems" >}}

1. Enter a unique name for the cluster, and then select the systems to include from the dropdown list. A list of SCALE systems displays.

2. Open the **Network Address** dropdown for each system and choose the static IP address from the previously configured subnet dedicated to cluster traffic.

3. Click **NEXT**, verify the settings, then click **CREATE**.

TrueCommand might take a while to create the cluster.

## Configuring the Cluster

After creating the cluster, TrueCommand opens another sidebar to configure it for AD connectivity and SMB sharing.

### Assigning the Virtual IPs (VIPs)
For each system:

{{< trueimage src="/images/TrueCommand/2.3.1/ConfigureClusterSMBNetwork.png" alt="Configure Cluster SMB Network" id="6: Configure Cluster SMB Network" >}}

1. Choose the IP address related to the primary subnet (typically the IP address you use to connect the SCALE system to TrueCommand).

2. Click **NEXT**.

### Assigning the Associate VIPs
For each system:

{{< trueimage src="/images/TrueCommand/2.3.1/ConfigureClusterAssociateVIPs.png" alt="Configure Associate VIP" id="7: Configure Associate VIPs" >}}

1. Select the interfaces to associate with the VIPs. You should select the interface configured for the SCALE system IP address.

2. Click **Next**.

### Entering Active Directory Credentials
Enter user for Active Directory for the cluster:

{{< trueimage src="/images/TrueCommand/2.3.1/ConfigureClusterActiveDirectory.png" alt="Configure Cluster Active Directory Connection" id="8: Configure Cluster Active Directory Connection" >}}

1. Enter the Microsoft Active Directory credentials.

2. Click **NEXT**.

### Confirming the Configuration
{{< hint type=warning >}}
SMB service does not start if the cluster systems (nodes) are incorrectly configured!
{{< /hint >}}

{{< trueimage src="/images/TrueCommand/2.3.1/ConfigureClusterReview.png" alt="Configure Cluster: Review and confirm" id="9: Configure Cluster: Review and confirm" >}}

1. Verify the connection details are correct.

2. Click **CONFIRM** to configure the cluster, or click **BACK** to adjust the settings.

{{< hint type=note >}}
Creating a cluster has no visible effect on each SCALE web interface.
To verify the cluster is created and active, open the SCALE **Shell** and enter `gluster peer status`.
The command returns the list of SCALE IP addresses and current connection status.
{{< /hint >}}

## Creating Cluster Volumes

1. In the TrueCommand **Clusters** screen, find the cluster to use and click **CREATE VOLUME**.
   
   {{< trueimage src="/images/TrueCommand/2.2/ClustersCreateVolumeDetails.png" alt="Add Cluster Volume: Details" id="10: Add Cluster Volume: Details" >}}
   
2. Enter a unique name for the cluster and select a **Type**.

   {{< expand "Current Volume Types (click to expand)" "v" >}}
   {{< include file="/content/_includes/ClusterTypes.md" type="page" >}}
   {{< /expand >}}

3. After selecting an option in **Type**, enter a value based on the available storage from the clustered pools and your storage requirements in **Brick Size**.

4. Review the pools for each SCALE system in the cluster. 
   If any system does not show the desired pool for this cluster volume, select it from the **Pools** dropdown.

5. Click **NEXT**.

6. Review the settings for the new volume and click **CREATE**.

TrueCommand adds new cluster volumes to the individual cluster cards on the **Clusters** screen.

{{< hint type=note >}}
The web interface for the individual SCALE systems does not show any datasets created for cluster volumes.
To verify the volume created, go to the **Shell** and enter `gluster volume info all`.
{{< /hint >}}

## Sharing the Cluster Volume

To share a cluster volume, go to the TrueCommand **Clusters** screen, finding the cluster card, and click on the desired cluster volume.
Click **CREATE SHARE**.

{{< trueimage src="/images/TrueCommand/2.2/ClustersClusterVolumeExpandedCreateShare.png" alt="Add Cluster Share" id="11: Add Cluster Share" >}}

1. Enter a unique name for the share.

2. Select the ACL type to apply to the share from the **ACL** dropdown list.
   {{< expand "Current Options (click to expand)" "v" >}}
   * **POSIX_OPEN** - Grants read, write, and execute permissions for all users.
   * **POSIX_RESTRICTED** - Grants read, write, and execute to owner and group, but not others. 
   The template might optionally include the special-purpose **builtin_users** and **builtin_administrators** groups, **domain_users** and **domain_admins** groups in Active Directory environments.
   {{< /expand >}}

3. (Optional) Select **Readonly** to prevents users from changing the cluster volume contents.

4. Click **CONFIRM** to create the SMB share and make it immediately active.

{{< hint type=note >}}
The SMB share adds to the SCALE **Shares** > **SMB** section for each system in the cluster.
Attempting to manage the share from the SCALE UI is not recommended.
{{< /hint >}}

### Connecting to the Shared Volume

There are several ways to access an SMB share, but this article demonstrates using Windows 10 File Explorer. From a Windows 10 system: 

1. Connected to the same network as the clustering environment, open **File Explorer**.
   
   {{< trueimage src="/images/TrueCommand/2.2/WindowsFileExplorereAccessClusterShare.png" alt="Cluster Volume Share Options" id="12: Cluster Volume Share Options" >}}

2. Clear the contents and enter `\\` followed by the IP address or host name of one of the clustered SCALE systems in the **Navigation** bar. 
   Press <kbd>Enter</kbd>.

3. Enter the user name and password for an Active Directory user account when prompted. 
   Enter the Active Directory system name followed by the user account name (for example: *AD01\sampuser*).
   
4. Browse to the cluster volume folder to view or modify files.

## Replacing Cluster Nodes

A node is a single TrueNAS storage system in a cluster.

{{< hint type=note >}}
Cluster node replacement only works if you are using TrueCommand 2.3 or later and SCALE 22.12.0 or later.

New replacement nodes must have the same hardware as the old node you are replacing. 
The old node must also have a configuration backup that is safe and accessible. 
{{< /hint >}}

The method you use to replace a cluster node differs depending on whether or not the node has access to the data on the brick.

### The Node Has Access to Brick Data

If replacing a node that still has access to the data on the brick, you must first install the same SCALE version on the replacement system (node).

After installing SCALE on the new system, log into the SCALE web UI and go to **System Settings > General**. 
Click **Manage Configuration**, then select **Upload Config**. 
Select the configuration file from the node you are replacing and click **Upload**.

After applying the configuration, the system reboots and uses the same configuration as the node you are replacing. 
The new system automatically joins the cluster and heals damaged data before returning to a healthy state. 

### The Node Does Not Have Access to Brick Data

If the node you are replacing does not have access to the data on the brick, you must first install the same SCALE version on the replacement system (node).

After installing SCALE on the new system, access the SCALE web UI and go to **Storage**. 
Create a pool with the same name as the pool on the node you are replacing. 

Go to **System Settings > Shell** and enter <code>midclt call gluster.peer.initiate_as_replacement <i>poolname</i> <i>clustervolumename</i>></code>

Where:

* *poolname* is the name of the pool you created.
* *clustervolumename* is the name of the cluster volume you are currently using.

After the command succeeds, go to **System Settings > General**. 
Click **Manage Configuration**, then select **Upload Config**. 
Select the configuration file from the node you are replacing and click **Upload**.

After applying the configuration, the system reboots and uses the same configuration as the node you are replacing. 
The new system automatically joins the cluster and heals damaged data before returning to a healthy state.

## Clustered Backup Strategies
{{< enterprise >}}
TrueNAS Enterprise customers can contact iX Support to discuss their clustered backup strategy options.

{{< expand "Contacting iX Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" type="page" >}}
{{< /enterprise >}}
{{< /expand >}}

{{< taglist tag="scaleclustering" limit="10" title=" " >}}
