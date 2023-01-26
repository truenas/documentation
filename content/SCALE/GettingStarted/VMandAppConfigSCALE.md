---
title: "Configuring Virtualization and Apps in TrueNAS SCALE"
weight: 50
tags:
- scalevm
- scaleapps
- scalenetwork
- scalevlan
- scalelagg
- scaledatashare
---

{{< toc >}}

Configuring TrueNAS SCALE to work with virtualized features, such as VMs and Apps, is a part of the setup process that when optimized takes advantage of the network storage capabilities that SCALE offers. 

## Before You Begin

This article assumes that you have the latest release version of TrueNAS SCALE installed on your system. The following steps comprise a list of configuration prerequisites that you have completed and are familiar with before beginning VM and App installation.

### Network Prerequisites

The primary network interface is configured as part of the SCALE installation process. Go to **Network > Global Configuration** screen in the TrueNAS web UI to determine that the default gateway, host name, domain and DNS name servers have been configured correctly. See [Console Setup Menu Configuration]({{< relref "ConsoleSetupMenuScale.md" >}}) for more information on network settings.

### Optional: Network VLAN 

You have the option of configuring a virtual LAN (VLAN) to route traffic for your VMs. VLAN benefits include the reduction of broadcast traffic and the ability to group resources in different physical locations into a broadcast domain. VLANs virtually segment a network. Different VLANs can communicate with each other using layer 3 devices. See [Setting Up a Network VLAN]({{< relref "SettingUpVLAN.md" >}}) for more information on creating virtual LANs (VLAN).

### Storage Prerequisites

Storage pool creation is part of the initial process of setting up storage for SCALE. A TrueNAS dataset is a file system within a data storage pool. See [Setting Up Storage]({{< relref "SetUpStorageScale.md" >}}) to review storage pool creation and [Adding and Managing Datasets]({{< relref "DatasetsSCALE.md" >}}) for information on dataset configuration. 

### Set Up Shares

Once the pool and datasets have been created, set up shares to enable data access. Three types of data sharing methods are discussed in 
[Setting Up Data Sharing]({{< relref "SetUpSharing.md" >}}). More specific coverage of each share should be investigated based on your individual use case. 

A good introduction as to how TrueNAS SCALE handles SMB shares is located at [SMB Shares Screens]({{< relref "SMBSharesScreens.md" >}}) and [Setting Up SMB Home Shares]({{< relref "AddSMBHomeShare.md" >}}). For a better understanding of how to configure Active Directory, see [Active Directory Screen]({{< relref "scale/scaleuireference/credentials/directoryservices/ActiveDirectory.md" >}}). Required Kerberos information is outlined here, but also in this article: [Configuring Kerberos]({{< relref "ConfigKerberosSCALE.md" >}}). Configuring LDAP best practices can be found at: [Configuring LDAP]({{< relref "ConfigLDAPSCALE.md" >}}).

NFS basic share creation information can be found here: [Adding NFS Shares]({{< relref "AddingNFSShares.md" >}}). Adjust access permissions using the advanced options. 

## Virtualization Prerequisites

In order to be able to run a Virtual Machine (VM), hardware requirements include an x86 machine running a recent Linux kernel using an Intel processor with VT extensions, or an AMD processor with SVM extensions (AMD-V). Regardless of virtualization application, use these minimum settings:

* RAM: at least 8192 MB (8GB)
* DISKS: two virtual disks with at least 16GB, one for the operating system and boot environments and at least one additional disk to use as data storage.
* NETWORK: Use NAT, bridged, or host-only depending on your host network configuration.

Software requirements include an installer for the OS you intend to install on the VM, and a TrueNAS storage pool. It is recommended to have additional datasets created beneath the storage pool to further organize your VM data.

Review the [Virtualization Screens]({{< relref "VirtualizationScreens.md" >}}) to determine requirements for VM installation. See [Adding Managing VMs]({{< relref "CreatingManagingVMsSCALE.md" >}}) for more information on adding or managing VMs.

## App Installation Prerequisites

The first time you open the **Applications** screen, the UI asks you to choose a storage pool for applications. Select a pool that has enough space for all the application containers you intend to use. Set up a new dataset before installing your applications if you want to store your application data in a location separated from other storage on your system.

![AppsSettingsChoosePool](/images/SCALE/22.02/AppsSettingsChoosePool.png "Choosing a Pool for Apps")

**Applications** > **Available Applications** displays official applications pre-configured for TrueNAS SCALE. These have fewer requirements for deployment than custom applications. See [Using Apps]({{< relref "UsingApps.md" >}}) for more information, as well as [Application Screens]({{< relref "AppsScreensSCALE.md" >}}).

For custom applications, [Launch Docker Image Screens]({{< relref "LaunchDockerImageScreens.md" >}}) details each field in the **Launch Docker Image** wizard. Prior to beginning a custom App installation, determine the following information:

* Your host networking requirements for the container including host interface
* IP address management: DHCP or Static IP
* DNS policy and nameservers
* Container entrypoint (executables run when the container is started): commands or arguments
* Container environment variables:  names and values
* Any ports to forward to workload
* Storage host path and volume configuration

You can find additional options for configuring general network interfaces and IP adresses for application containers in **Apps > Settings > Advanced Settings**.

{{< taglist tag="scalevm" limit="10" title="Related Virtualization Articles" >}}
{{< taglist tag="scaleapps" limit="10" title="Related Apps Articles" >}}
