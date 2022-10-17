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
| **CREATE CLUSTER** | Button. Opens the form to create a new cluster. |

{{< /expand >}}

### Create Cluster

The cluster creation options split into two pages: **Systems** and **Confirmation**.

#### Systems

The initial form has two fields:

![CreateClusterSystems](/images/TrueCommand/2.2/CreateClusterSystems.png "Configuring Systems in the Cluster")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Name** | String. Identifies the cluster. |
| **Systems** | Dropdown list. Shows all connected TrueNAS SCALE systems available for this cluster. Clusters can consist of between 3 and 20 individual SCALE systems. |
| Next | Button. Advances the form to the next screen. |

{{< /expand >}}

Making selections in the **Systems** field adds more options.

![CreateClusterSystemsNetwork](/images/TrueCommand/2.2/CreateClusterSystemsNetwork.png "Network Options for Clustered Systems")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Delete** | Clicking the  <i class="material-icons" aria-hidden="true" title="Delete">delete</i> **Delete** icon removes the system from the cluster. |
| **Network Address** | Dropdown list. Shows available IP addresses to use for cluster traffic. Using private dedicated network addresses is recommended. |

{{< /expand >}}

#### Confirmation

There is a single option on this page.

![CreateClusterReview](/images/TrueCommand/2.2/CreateClusterReview.png "Review and create page for Clusters")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **CREATE** | Button. Begins the creation process for a cluster. This restricts the SMB functionality on the SCALE systems. |

{{< /expand >}}

### Configure Cluster

Successfully creating a cluster adds a cluster widget to the **Clusters** screen and opens options to configure the new cluster.
These options split into three screens: **SMB Network**, **Active Directory**, and **Confirmation**.

#### SMB Network

The SMB Network page has options and fields added for each SCALE system in the cluster.

![ConfigureClusterSMBNetwork](/images/TrueCommand/2.2/ConfigureClusterSMBNetwork.png "Configure Cluster SMB Network")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **NEXT** | Button. Continues to the next page. |
| **Skip this step** | Checkbox. Finalize the cluster configuration without registering a network to use for SMB sharing. Selecting this permanently removes the ability to share data stored in this cluster. |
| **Interface** | Dropdown list. SCALE system network interface to use for SMB traffic. For best functionality, choose an interface that can communicate between the individual SCALE systems, TrueCommand environment, Active Directory, and client systems that need to access data shared from this cluster. |
| **Address** | Dropdown list. IP address used for clients to access the SCALE system. |
| **Netmask** | Dropdown list. Netmask for the IP address. |

{{< /expand >}}

#### Active Directory

The options on this page let you establish a connection between an Active Directory environment, SCALE systems, and TrueCommand.

![ConfigureClusterActiveDirectory](/images/TrueCommand/2.2/ConfigureClusterActiveDirectory.png "Configure Cluster Active Directory Connection")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **NEXT** | Button. Continues to the next page. |
| **Domain Name** | String. Microsoft Active Directory (AD) environment host name. Establishes a connection between the entered host and TrueCommand. |
| **Username** | String. Account credential used to establish the AD connection. Requires an account with administrative access. |
| **Password** | String. Account credential used to establish the AD connection. Requires an account with administrative access. |

{{< /expand >}}

#### Confirmation

All chosen settings display here for you to confirm before being applied to the cluster.

![ConfigureClusterReview](/images/TrueCommand/2.2/ConfigureClusterReview.png "Configure Cluster: Review and confirm")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **CONFIRM** | Button. Saves the configuration settings and permanently applies them to the cluster. |

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
| **CREATE VOLUME** | Button. Opens the form to create new clustered storage. |
| **Rename** | Button. Shows a form to enter a new **Cluster Name**. |
| **Delete** | Button. Disconnects each SCALE system from the cluster and removes the card from TrueCommand. Shows a confirmation popup when clicked. |

{{< /expand >}}

## Cluster Volumes

Clicking **CREATE VOLUME** for an existing cluster shows options to configure new clustered storage.
The options split into two pages: **Details** and **Confirmation**.

### Details

![ClustersCreateVolumeDetails](/images/TrueCommand/2.2/ClustersCreateVolumeDetails.png "Add Cluster Volume: Details")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **NEXT** | Button. Continues to the next page. |
| **Name** | String. Identifying label for this cluster volume. |
| **Type** | Dropdown list. Layout and behavior for the volume. |
| **Cluster** | String (disabled). Shows the cluster that controls the new volume. |
| **Brick Size** | Integer and dropdown list. Storage capacity. Accepts numeric values and selecting units of size. |
| **Pools** | Dropdown list. Storage pool on the individual SCALE system that provides capacity for the cluster volume. |

The **Type** field has four options:

{{< include file="/content/_includes/ClusterTypes.md" type="page" >}}

{{< /expand >}}

### Confirmation

The **Confirmation** page shows details for the chosen volume **Type** and storage makeup of the new clustered volume.

![ClustersCreateVolumeConfirmation](/images/TrueCommand/2.2/ClustersCreateVolumeConfirmation.png "Add Cluster Volume: Review and create")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **BACK** | Button. Goes to the previous configuration page. |
| **CREATE** | Button. Saves the configuration and builds the clustered volume on each system in the cluster. |

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
| **DELETE** | Button. Removes the volume from the cluster. This destroys any stored data. |
| **CREATE SHARE** | Button. Opens the form to configure a new SMB share. This allows remote access to this cluster volume. |

{{< /expand >}}

### Cluster Volume Sharing

Adding a cluster share shows a few options.

![ClustersClusterVolumeExpandedCreateShare](/images/TrueCommand/2.2/ClustersClusterVolumeExpandedCreateShare.png "Add Cluster Share")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **Cluster** | String (disabled). Shows the name of the cluster related to this share. |
| **Cluster Volume** | String (disabled). Shows the name of the cluster volume to share. |
| **Name** | String. Label for this new cluster share. |
| **ACL** | Dropdown list. Access Control List. Sets permissions for the share. |
| **Readonly** | Checkbox. Disables or allows file management options for connected users. Set to disable. |
| **CONFIRM** | Button. Saves the settings, creates the share, and makes the cluster volume accessible to Active Directory user accounts. |

**ACL Options**

* POSIX_OPEN - Template that grants read, write, and execute permissions to all users.
* POSIX_RESTRICTED - Template that grants read, write, and execute to owner and group, but not other. The template may optionally include the special-purpose 'builtin_users' and 'builtin_administrators' groups as well as Domain Users and Domain Admins groups in Active Directory environments.

{{< /expand >}}

#### Managing Cluster Volume Shares

Click the cluster volume name to open the **Cluster Volume Details** and see any shares.

![ClustersClusterVolumeExpandedShareOptions](/images/TrueCommand/2.2/ClustersClusterVolumeExpandedShareOptions.png "Cluster Volume Share Options")

{{< expand "Option descriptions (click to expand)" "v" >}}

| Setting | Description |
|---------|-------------|
| **DELETE** | Button. Remove the share from the Cluster Volume. No data is destroyed in this operation. |
| **CREATE SHARE** | Button. Opens the form to configure a new SMB share. This allows remote access to this cluster volume. |

{{< /expand >}}

## See Also

{{< taglist tag="scaleclustering" limit="10" title=" " >}}
