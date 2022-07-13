---
title: Clustering, Sharing, and Managing SCALE volumes with TrueCommand
description: Requirements and process description for using TrueCommand to cluster and share data from TrueNAS SCALE systems.
weight:50
tags:
 - scaleclustering
---

{{< toc >}}

One unique capability of TrueNAS SCALE is ability to cluster groups of systems together.
These clusters can then create new volumes within the existing SCALE storage pools.
Data stored in a clustered volume is shared between the clustered systems and adds additional layers of redundancy to the environment.
Currently, data stored in a clustered volume is shareable using Active Directory (AD) and the SMB protocol.

{{< hint warning >}}
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

1. If not already completed, [deploy TrueCommand 2.2 or later in a Docker container]({{< relref "content/TrueCommand/TCGettingStarted/Install/_index.md" >}}).
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

With the environment configured for SCALE, AD, and TrueCommand cross-communication, it's time to cluster the SCALE systems.

1. Log in to TrueCommand and click the **Clusters** icon in the upper left. Click **NEW CLUSTER** to see the cluster creation options.
2. Enter a unique name for the cluster and open the dropdown to select the systems to include in the cluster.