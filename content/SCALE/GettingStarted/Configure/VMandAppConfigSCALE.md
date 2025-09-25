---
title: "Configuring Virtualization and Apps"
description: "Provides general information on setting up virtual machines and applications in TrueNAS."
weight: 80
aliases:
 - /scale/gettingstarted/vmandappconfigscale/
tags:
- vm
- apps
- network
keywords:
- nas storage software
- nas storage solutions
- data sharing
---

Configuring TrueNAS to work with virtualized features, such as virtual machines (VMs) and applications, is part of the setup process that, when optimized, takes advantage of the network storage capabilities that TrueNAS offers.

## Before You Begin

This article assumes you have the latest release version of TrueNAS installed on your system.
The following steps are a list of configuration prerequisites you have completed and are familiar with before beginning VM and application installations.

### Network Configuration

The primary network interface is configured as part of the installation process.
Go to **Network > Global Configuration** screen in the TrueNAS web UI to determine if the default gateway, host name, domain, and DNS name servers have been configured correctly.
See [Console Setup Menu Configuration]({{< ref "ConsoleSetupMenuScale" >}}) for more information on network settings.

{{< include file="static/includes/ABridgeToSellYou.md" >}}

### VLAN Configuration (Optional)

You can configure a virtual LAN (VLAN) to route traffic for your VMs.
VLAN benefits include the reduction of broadcast traffic and the ability to group resources in different physical locations into a broadcast domain.
VLANs virtually segment a network.
Different VLANs can communicate with each other using layer 3 devices.
See [Setting Up a Network VLAN]({{< ref "SettingUpVLAN" >}}) for more information on creating virtual LANs (VLAN).

### Storage Configuration

Storage pool creation is part of the initial process of setting up storage.
A TrueNAS dataset is a file system within a data storage pool.
See [Setting Up Storage]({{< ref "SetUpStorageScale" >}}) to review storage pool creation and [Adding and Managing Datasets]({{< ref "DatasetsSCALE" >}}) for information on dataset configuration.

### Shares Configuration

After creating the pool and datasets, set up shares to enable data access and sharing.
Different types of data sharing methods are discussed in [Setting Up Data Sharing]({{< ref "SetUpSharing" >}}).
You should investigate more specific coverage of each share based on your use case.

[SMB Shares Screens]({{< ref "SMBSharesScreens" >}}) and [Setting Up SMB Home Shares]({{< ref "SMBPrivateDatasetShare" >}}) provide a good introduction as to how TrueNAS handles SMB shares.

See [Adding NFS Shares]({{< ref "AddingNFSShares" >}}) for information on creating a basic NFS share.
Adjust access permissions using the advanced options.

### Directory Services Configuration

Certain directory services must be set up as part of SMB and NFS share configuration.
See [Active Directory Screen]({{< ref "/SCALE/SCALEUIReference/credentials/directoryservices/ActiveDirectory" >}}) for a better understanding of how to configure Active Directory and [Configuring Kerberos]({{< ref "ConfigKerberosSCALE" >}}) for an outline of required Kerberos information.
For LDAP best practices see [Configuring LDAP]({{< ref "ConfigLDAPSCALE" >}}).

## Virtual Machine and Container Configuration

{{< include file="/static/includes/25.04Virtualization.md" >}}

TrueNAS includes built-in virtualization capabilities that enable you to run multiple operating systems and containerized applications on a single system, maximizing hardware utilization and consolidating workloads.

### Virtual Machines

Virtual machines provide complete isolation by running full operating systems with dedicated virtualized hardware including network interfaces, storage, graphics adapters, and other components. VMs are ideal for running legacy applications, different operating systems, or services that require dedicated environments.

{{< include file="/static/includes/VMRequirements.md" >}}

See [Virtual Machines](/scale/scaletutorials/virtualmachines/) for VM setup and management information.

### Containers

Linux containers, powered by LXC, offer lightweight, isolated environments that share the host system kernel while maintaining separate file systems, processes, and network settings. Containers start quickly, use fewer system resources than VMs, and scale efficiently, making them ideal for deploying applications with minimal overhead.

{{< include file="/static/includes/ContainerRequirements.md" >}}

See [Containers]({{< ref "/scale/scaletutorials/containers/" >}}) for Linux container configuration and management information.

## Application Configuration

The first time you open the **Applications** screen, it displays an <i class="fa fa-cog" aria-hidden="true"></i> **Apps Service Not Configured** status on the screen header.

Click **Settings > Choose Pool** to choose a storage pool for Apps.

A storage pool for applications must be chosen before application installation can begin.
Select a pool with enough space for all the application containers you intend to use.
Set up a new dataset before installing your applications if you want to store your application data in a separate location from other storage on your system.

After an Apps storage pool is configured, the status changes to <span class="iconify" data-icon="mdi:check-circle" color=#71BF44></span> **Apps Service Running**.

Use **Discover Apps** to view available applications.
See [TrueNAS Apps Market](https://apps.truenas.com/) and [Apps reference guide]({{< ref "/SCALE/SCALEUIReference/Apps" >}}) for more information.

For custom applications, [Install Custom App]({{< ref "InstallCustomAppScreens" >}}) details each field on the **Install Custom App** screen.
Before beginning a custom application installation, determine the following information:

* Container host networking requirements, including host interface
* IP address management: DHCP or static IP
* DNS policy and nameservers
* Container entrypoint (executables run when the container is started): commands or arguments
* Container environment variables: names and values
* Port forwarding
* Storage: host path and mount path configuration

You can find additional options for configuring general network interfaces and IP addresses for application containers in **Apps > Settings > Advanced Settings**.
