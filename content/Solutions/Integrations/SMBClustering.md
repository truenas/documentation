---
title: Clustering and Sharing SCALE Volumes with TrueCommand
description: Requirements and process description for using TrueCommand to cluster and share data from TrueNAS SCALE systems.
weight: 50
tags:
 - scaleclustering
aliases:
 - /truecommand/clustering/clustervolumes/
 - /truecommand/clustering/manageclusters/
 - /truecommand/clustering/mountingclustervolumes/
---

{{< toc >}}

One unique capability of TrueNAS SCALE is ability to cluster groups of systems together.
These clusters can then create new volumes within the existing SCALE storage pools.
Data stored in a clustered volume is shared between the clustered systems and can add additional redundancy or performance to the environment.
Currently, data stored in a clustered volume is shareable using Active Directory (AD) and the SMB protocol.

{{< hint danger >}}
This feature is considered experimental and should not be used in a production environment or for handling critical data!
{{< /hint >}}

## Warnings and Restrictions

Clustering is a back-end feature in TrueNAS SCALE and should only be configured using the TrueCommand web interface.
Attempting to configure or manage clustering from within the TrueNAS SCALE UI or Shell can result in cluster failures and permanent data loss.

Using the clustering feature on a SCALE system adds some restrictions to that system:

1. Any existing non-clustered SMB shares present no longer function.
2. New SMB shares cannot be created separately from the clustering settings.
3. When added, the system cannot be added to a different cluster.
4. Removing single systems from one cluster and migrating to another is currently unsupported. Removing a system from a cluster requires deleting the entire cluster.

## Requirements

To set up clustering with TrueNAS SCALE, you need:

1. 2-4 TrueNAS SCALE systems (version 22.02.2 or later) on the same network. Each SCALE system must have:
   a. Two network interfaces and subnets.
      The primary network interface and subnet is used for client access to the SCALE system 
	  The secondary interface and subnet is dedicated for cluster traffic. This interface must use static IP addresses.
   b. Disks available or Storage pools already created and available for use.
2. A TrueCommand 2.2 or later environment that is on the same network as the SCALE systems.
3. A Microsoft Active Directory environment must be available and connected to the client access subnet on each SCALE system.
   Reverse DNS must be configured to allow the SCALE cluster systems to communicate back and forth with the AD environment.

## Setting up the Environment

Configuring the cluster feature is a multi-step process that spans multiple systems.

### TrueNAS SCALE Systems

Follow this procedure for each TrueNAS SCALE system that is to be connected to TrueCommand and used in the cluster.

1. Log in to the SCALE UI and go the the **Storage** page.
   Ensure a storage pool is available for use in the cluster.
   If not, click **Create Pool** and make a new pool using any of the available disks.

2. Go to the **Network** page and look at the **Interfaces** card.
   a. Ensure two interfaces are available and set the primary interface (used for SCALE web interface access) to a static IP address on the same network/subnet as the TrueCommand, Active Directory, and other SCALE systems.
      This allows connecting the SCALE systems to Active Directory and using TrueCommand to create and manage the cluster.
   b. Ensure the second interface is configured with a static IP address on a different network/subnet that connects all the SCALE systems.
      This interface securely handles all the data sharing traffic between the clustered systems.

3. Go to the **Shares** page and look at the **Windows (SMB) Shares** section. Note if there are any critical shares and take steps to ensure that disabling those shares isn't disruptive.

Repeat this procedure for each SCALE system to be clustered.

### Microsoft Active Directory

1. Verify that the Active Directory (AD) environment to pair with the cluster is available and administratively accessible on the same network as the TrueCommand and TrueNAS SCALE systems.
2. Log in to the AD environment and open the **DNS Manager**.
   Select the **Reverse Lookup Zones** and ensure there are entries present for each TrueNAS SCALE system.
   See [Microsoft's DNS module](https://docs.microsoft.com/en-us/learn/modules/implement-windows-server-dns/3-work-dns-zones-records) for more details about changing DNS records.

### TrueCommand Container

1. If not already completed, [deploy TrueCommand 2.2 or later in a Docker container]({{< relref "/content/TrueCommand/TCGettingStarted/Install/_index.md" >}}).
   The system used for the TrueCommand container cannot be any of the TrueNAS SCALE systems intended for the cluster.
2. In a browser, enter the TrueCommand IP address and create the first user. Log in with these user credentials to see the **Dashboard**.
3. Click **New System** and add the credentials for the first SCALE system. Use the SCALE **root** account password. When ready, click **ADD AND CONTINUE** and repeat the process for each SCALE system intended for the cluster.
   When complete, each SCALE system has a card on the TrueCommand **Dashboard** and is actively displaying system statistics.

{{< hint info >}}
A good practice is to backup the SCALE system configuration before creating the cluster.
In the TrueCommand **Dashboard**, click on the name of a connected system.
This opens a detailed view of that system.
Click **Config Backups** and **CREATE BACKUP** to store the SCALE configuration file with TrueCommand.
This allows quickly restoring the system configuration to the initial working state, should something go wrong.
{{< /hint >}}

## Creating the Cluster

With the SCALE, AD, and TrueCommand environments ready, it's time to cluster the SCALE systems.

1. Log in to TrueCommand and click the **Clusters** icon in the upper left. Click **NEW CLUSTER** to see the cluster creation options.
2. Enter a unique name for the cluster and open the dropdown to select the systems to include in the cluster.
3. When each SCALE system is listed, open the **placeholder** dropdown for each system and choose the static IP address from the previously configured subnet dedicated for cluster traffic.
4. Click **NEXT**, verify the settings, then click **CREATE**

It can take an extended amount of time to create the cluster.

After the initial creation step for the cluster, TrueCommand opens another sidebar to configure the new cluster for AD connectivity and SMB sharing:
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
2. Enter a unique name for the cluster and select a **Type**.

   ### Volume Types

   {{< expand "Current Types (click to expand)" "v" >}}
   * **Distributed** - Distribute files across the bricks in the volume. You can use distributed volumes where the requirement is to scale storage and the redundancy is either not important or is provided by other hardware/software layers.
   * **Replicated** - Replicate files across bricks in the volume. You can use replicated volumes in environments where high-availability and high-reliability are critical.
   * **Distributed** Replicated - Distribute files across replicated bricks in the volume. You can use distributed replicated volumes in environments where the requirement is to scale storage and high-reliability is critical. Distributed replicated volumes also offer improved read performance in most environments. Requires setting an additional **Replica Count**
   * **Dispersed** - Dispersed volumes are based on erasure codes, providing space-efficient protection against disk or server failures. It stores an encoded fragment of the original file to each brick in a way that only a subset of the fragments is needed to recover the original file. The number of bricks that can be missing without losing access to data is configured by the administrator on volume creation time. Requires setting an additional **Redundancy Count**.
   {{< /expand >}}

3. After configuring the **Type**, enter a **Brick Size** based on the available storage from the clustered pools and your storage requirements.
4. Review the **Pools** for each SCALE system in the cluster and ensure that the desired pool is used for this cluster volume.
5. Click **NEXT**.
6. Review the settings for the new volume and click **CREATE** when ready.

New cluster volumes are added to the individual Cluster cards on the TrueCommand **Clusters** screen.

{{< hint info >}}
The web interface for the individual SCALE systems does not show any datasets created for cluster volumes.
To verify the volume is created, go to the **Shell** and enter `gluster volume info all`.
{{< /hint >}}

## Sharing the Cluster Volume

Share a cluster volume by going to the TrueCommand **Clusters** screen, finding the cluster card, and clicking on the desired cluster volume.
Click **CREATE SHARE**:
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
2. In the Navigation bar, clear the contents and enter `\\` followed by the IP address or hostname of one of the clustered SCALE systems. Press <kbd>Enter</kbd>.
3. When prompted, enter user name and password for an Active Directory user account. Be sure to enter the Active Directory system name before the user account name (example: `AD01\sampuser`).
4. Browse to the cluster volume folder to view or modify files.

## See Also

{{< taglist tag="scaleclustering" limit="10" title=" " >}}
