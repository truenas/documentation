---
title: "Configuring Virtualization and Apps"
description: "Provides general information on setting up virtual machines and applications in TrueNAS."
weight: 80
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
See [Console Setup Menu Configuration]({{< relref "ConsoleSetupMenuScale.md" >}}) for more information on network settings.

{{< include file="static/includes/ABridgeToSellYou.md" >}}

### VLAN Configuration (Optional)

You can configure a virtual LAN (VLAN) to route traffic for your VMs.
VLAN benefits include the reduction of broadcast traffic and the ability to group resources in different physical locations into a broadcast domain.
VLANs virtually segment a network.
Different VLANs can communicate with each other using layer 3 devices.
See [Setting Up a Network VLAN]({{< relref "SettingUpVLAN.md" >}}) for more information on creating virtual LANs (VLAN).

### Storage Configuration

Storage pool creation is part of the initial process of setting up storage.
A TrueNAS dataset is a file system within a data storage pool.
See [Setting Up Storage]({{< relref "SetUpStorageScale.md" >}}) to review storage pool creation and [Adding and Managing Datasets]({{< relref "DatasetsSCALE.md" >}}) for information on dataset configuration.

### Shares Configuration

After creating the pool and datasets, set up shares to enable data access and sharing.
Different types of data sharing methods are discussed in [Setting Up Data Sharing]({{< relref "SetUpSharing.md" >}}).
You should investigate more specific coverage of each share based on your use case.

[SMB Shares Screens]({{< relref "SMBSharesScreens.md" >}}) and [Setting Up SMB Home Shares]({{< relref "AddSMBHomeShare.md" >}}) provide a good introduction as to how TrueNAS handles SMB shares.

See [Adding NFS Shares]({{< relref "AddingNFSShares.md" >}}) for information on creating a basic NFS share.
Adjust access permissions using the advanced options.

### Directory Services Configuration

Certain directory services must be set up as part of SMB and NFS share configuration.
See [Active Directory Screen]({{< relref "/SCALEUIReference/credentials/directoryservices/ActiveDirectory.md" >}}) for a better understanding of how to configure Active Directory and [Configuring Kerberos]({{< relref "ConfigKerberosSCALE.md" >}}) for an outline of required Kerberos information.
For LDAP best practices see [Configuring LDAP]({{< relref "ConfigLDAPSCALE.md" >}}).

## Virtualization Configuration

{{< include file="/static/includes/25.04Virtualization.md" >}}

To run a virtual machine (VM), hardware requirements include an x86 machine running a recent Linux kernel using either an Intel processor with VT extensions or an AMD processor with SVM extensions (AMD-V).
To install a VM, first research the minimum and recommended specifications for the OS you plan to use and your full use case for that VM.
Allocating too many resources to a VM can cause performance on the TrueNAS system to suffer.
We recommend you plan for and ensure your system has the resources to run itself and a full VM deployment effectively, taking into account the need for high availability (HA) and persistent storage.

Software requirements include an installer for the OS you intend to install on the VM.

A TrueNAS storage pool is required.
We recommend you create additional datasets beneath the storage pool to organize your VM data further.

Review [Virtualization Screens]({{< relref "VirtualizationScreens.md" >}}) to determine requirements for VM installation.
See [Adding and Managing VMs]({{< relref "/SCALETutorials/Virtualization/_index.md" >}}) for more information on adding or managing VMs.

## Application Configuration

The first time you open the **Applications** screen, it displays an <i class="fa fa-cog" aria-hidden="true"></i> **Apps Service Not Configured** status on the screen header.

Click **Settings > Choose Pool** to choose a storage pool for Apps.

A storage pool for applications must be chosen before application installation can begin.
Select a pool with enough space for all the application containers you intend to use.
Set up a new dataset before installing your applications if you want to store your application data in a separate location from other storage on your system.

After an Apps storage pool is configured, the status changes to <span class="iconify" data-icon="mdi:check-circle" color=#71BF44></span> **Apps Service Running**.

Use **Discover Apps** to view available applications.
See [Apps tutorials](https://www.truenas.com/docs/truenasapps/) and [Apps reference guide]({{< relref "/SCALEUIReference/Apps/_index.md" >}}) for more information.

For custom applications, [Install Custom App]({{< relref "InstallCustomAppScreens.md" >}}) details each field on the **Install Custom App** screen.
Before beginning a custom application installation, determine the following information:

* Container host networking requirements, including host interface
* IP address management: DHCP or static IP
* DNS policy and nameservers
* Container entrypoint (executables run when the container is started): commands or arguments
* Container environment variables: names and values
* Port forwarding
* Storage: host path and mount path configuration

You can find additional options for configuring general network interfaces and IP addresses for application containers in **Apps > Settings > Advanced Settings**.
