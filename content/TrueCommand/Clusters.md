---
title: "Clusters Screen"
description: "Descriptions of the options contained inside the TrueCommand Clusters menu."
weight: 60
geekdocCollapseSection: true
tags:
 - scaleclustering
aliases:
 - /truecommand/clustering/
---

{{< toc >}}

TrueCommand 2.2, in conjunction with TrueNAS SCALE, can create and manage clusters, cluster volumes, and cluster volume shares.

{{< hint danger >}}
Clusters are an experimental feature in TrueCommand 2.2.
Before using such features, please back up all your data.
Do not rely on this for critical data.
{{< /hint >}}

## Clusters

The **Clusters** screen contains all options related to the cluster feature.
To see this screen, log in to TrueCommand and click the <span class="iconify" data-icon="mdi:server-network"></span> **Clusters** icon in the upper left.

![ClustersScreen](/images/TrueCommand/2.2/ClustersScreen.png "TrueCommand Clusters Screen")

{{< expand "Option descriptions (click to expand)" "v" >}}
If you have not created a cluster, there is a single option on this screen:

| Setting | Description |
|---------|-------------|
| **CREATE CLUSTER** | Click button to open the form to create a new cluster. |

{{< /expand >}}

### Create Cluster

The cluster creation options split into two pages: **Systems** and **Confirmation**.

#### Systems

The initial form has two fields:

![CreateClusterSystems](/images/TrueCommand/2.2/CreateClusterSystems.png "Configuring Systems in the Cluster")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Name** | Enter a string to identify the cluster. |
| **Systems** | Dropdown list shows all connected TrueNAS SCALE systems available for this cluster. Clusters can consist of between 3 and 20 individual SCALE systems. |
| **Next** | Click button to advance the form to the next screen. |

{{< /expand >}}

Making selections in the **Systems** field adds more options.

![CreateClusterSystemsNetwork](/images/TrueCommand/2.2/CreateClusterSystemsNetwork.png "Network Options for Clustered Systems")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Delete** | Clicking the  <i class="material-icons" aria-hidden="true" title="Delete">delete</i> **Delete** icon removes the system from the cluster. |
| **Network Address** | Dropdown list shows available IP addresses to use for cluster traffic. Using private dedicated network addresses is recommended. |

{{< /expand >}}

#### Confirmation

There is a single option on this page.

![CreateClusterReview](/images/TrueCommand/2.2/CreateClusterReview.png "Review and create page for Clusters")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **CREATE** | Click button to begin the creation process for a cluster. This restricts the SMB functionality on the SCALE systems. |

{{< /expand >}}

### Configure Cluster

Successfully creating a cluster adds a cluster widget to the **Clusters** screen and opens options to configure the new cluster.
These options split into four screens: **VIPs**, **Accociate VIPs**, **Active Directory**, and **Confirmation**.

#### VIPs

The VIPs page has options and fields added for each SCALE system in the cluster.

![ConfigureClusterSMBNetwork](/images/TrueCommand/2.3.1/ConfigureClusterSMBNetwork.png "Configure Cluster SMB Network")

| Setting | Description |
|---------|-------------|
| **ADD** | Adds another line for IPs and netmasks. |
| **Address** | Virtual IP address for one of the cluster systems. |
| **Netmask** | Netmask for the IP address. |

#### Associate VIPs

The Associate VIPs page allows you to select interfaces to assign to the VIPs.

![ConfigureClusterAssociateVIPs](/images/TrueCommand/2.3.1/ConfigureClusterAssociateVIPs.png "Configure Associate VIPs")

| Setting | Description |
|---------|-------------|
| **Interface** | Select an interface from the dropdown list of interface options and to assign it to the VIP.  |

#### Active Directory

The options on this page let you establish a connection between an Active Directory environment, SCALE systems, and TrueCommand.

![ConfigureClusterActiveDirectory](/images/TrueCommand/2.3.1/ConfigureClusterActiveDirectory.png "Configure Cluster Active Directory Connection")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Domain Name** | Enter a string for the Microsoft Active Directory (AD) environment host name. Establishes a connection between the entered host and TrueCommand. |
| **NetBIOS** | Automatically populated with the cluster name. |
| **Username** | Enter a string for the account credential used to establish the AD connection. Requires an account with administrative access. |
| **Password** | Enter a string for the account credential used to establish the AD connection. Requires an account with administrative access. |

{{< /expand >}}

#### Confirmation

All chosen settings display here for you to confirm before being applied to the cluster.

![ConfigureClusterReview](/images/TrueCommand/2.3.1/ConfigureClusterReview.png "Configure Cluster: Review and confirm")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **CONFIRM** | Click the button to save the configuration settings and permanently apply them to the cluster. |

{{< /expand >}}

## Manage Clusters

Clusters display as standalone cards.

![ClusterCard](/images/TrueCommand/2.2/ClusterCard.png "TrueCommand Cluster View")

The card displays the name of the cluster, the current state, and the names of the systems used in the cluster (**Nodes**).
Click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> **Options** icon to see management options for the cluster.
Click the **^** or **v** icons to minimize or expand (respectively) the list of nodes.

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **CREATE VOLUME** | Click the button to open the form to create new clustered storage. |
| **Rename** | Click the button to open the form to enter a new **Cluster Name**. |
| **Delete** | Click the button to disconnect each SCALE system from the cluster and remove the card from TrueCommand. Shows a confirmation popup when clicked. |

{{< /expand >}}

## Cluster Volumes

Clicking **CREATE VOLUME** for an existing cluster shows options to configure new clustered storage.
The options split into two pages: **Details** and **Confirmation**.

### Details

![ClustersCreateVolumeDetails](/images/TrueCommand/2.2/ClustersCreateVolumeDetails.png "Add Cluster Volume: Details")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Name** | Enter a string as an identifying label for this cluster volume. |
| **Type** | Dropdown list. Select layout and behavior for the volume. |
| **Cluster** | String (disabled). Shows the cluster that controls the new volume. |
| **Brick Size** | Enter integer and select from dropdown list to define storage capacity. Accepts numeric values and selecting units of size. |
| **Pools** | Dropdown list. Select storage pool on the individual SCALE system that provides capacity for the cluster volume. |

The **Type** field has four options:

{{< include file="/content/_includes/ClusterTypes.md" type="page" >}}

{{< /expand >}}

### Confirmation

The **Confirmation** page shows details for the chosen volume **Type** and storage makeup of the new clustered volume.

![ClustersCreateVolumeConfirmation](/images/TrueCommand/2.2/ClustersCreateVolumeConfirmation.png "Add Cluster Volume: Review and create")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **BACK** | Click button to go to the previous configuration page. |
| **CREATE** | Click button to save the configuration and build the clustered volume on each system in the cluster. |

{{< /expand >}}

## Managing Cluster Volumes

Created cluster volumes display in the related cluster card.

![ClusterCardwithVolume](/images/TrueCommand/2.2/ClusterCardwithVolume.png "Cluster Volume added to a Cluster")

The card displays the name, used storage, and volume status.
Click the volume name to expand the details and see more management options.

![ClustersClusterVolumeExpanded](/images/TrueCommand/2.2/ClustersClusterVolumeExpanded.png "Cluster Volume Details")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **DELETE** | Click button to remove the volume from the cluster. This destroys any stored data. |
| **CREATE SHARE** | Click button to open the form to configure a new SMB share. This allows remote access to this cluster volume. |

{{< /expand >}}

### Cluster Volume Sharing

Adding a cluster share shows a few options.

![ClustersClusterVolumeExpandedCreateShare](/images/TrueCommand/2.2/ClustersClusterVolumeExpandedCreateShare.png "Add Cluster Share")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Cluster** | String (disabled). Shows the name of the cluster related to this share. |
| **Cluster Volume** | String (disabled). Shows the name of the cluster volume to share. |
| **Name** | Enter string to create label for this new cluster share. |
| **ACL** | Dropdown list. Access Control List. Choose permissions for the share. |
| **Readonly** | Checkbox disables or allows file management options for connected users. Select to disable. |
| **CONFIRM** | Click button to save the settings, creates the share, and makes the cluster volume accessible to Active Directory user accounts. |

**ACL Options**

* **POSIX_OPEN** - Template that grants read, write, and execute permissions to all users.
* **POSIX_RESTRICTED** - Template that grants read, write, and execute to owner and group, but not other. The template may optionally include the special-purpose 'builtin_users' and 'builtin_administrators' groups as well as Domain Users and Domain Admins groups in Active Directory environments.

{{< /expand >}}

#### Managing Cluster Volume Shares

Click the cluster volume name to open the **Cluster Volume Details** and see any shares.

![ClustersClusterVolumeExpandedShareOptions](/images/TrueCommand/2.2/ClustersClusterVolumeExpandedShareOptions.png "Cluster Volume Share Options")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **DELETE** | Click button to remove the share from the Cluster Volume. No data is destroyed in this operation. |
| **CREATE SHARE** | Click button to open the form to configure a new SMB share. This allows remote access to this cluster volume. |

{{< /expand >}}

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

## See Also

{{< taglist tag="scaleclustering" limit="10" title=" " >}}
