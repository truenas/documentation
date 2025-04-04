---
title: "Accessing NAS from VMs and Containers"
description: "Provides instructions on how to create a bridge interface for virtual machines or applications and provides Linux and Windows examples."
weight: 60
aliases: 
- /scale/scaleuireference/virtualization/accessingnasfromvm/
- /scale/scaletutorials/virtualization/accessingnasfromvm/
tags:
 - vm
 - container
 - instances
 - apps
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

If you want to access your TrueNAS directories from within a virtual machine or container hosted on the system, you have multiple options:

* Allow TrueNAS to create an automatic bridge (default)
* If you have only one physical interface, you can manually create a bridge interface.
* If you have more than one physical interface, you can assign a NIC other than the primary one your TrueNAS server uses.
  This method makes communication more flexible but does not offer the potential speed benefits of a bridge.
  
  Instances (Linux containers or VMs) allow you to configure a MACVLAN NIC, which creates a virtual interface based on an existing physical one.
  The assigned unique MAC address allows the instance to appear as a separate device on the network.

{{< include file="/static/includes/MacvlanHost.md" >}}

## Using Default Network Settings

Leave **Use default network settings** selected while creating a new instance to allow TrueNAS to automatically assign the default network bridge.
This is the simplest way to allow communication between containers and the TrueNAS host.

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkDefault.png" alt="Default Network Settings" id="Default Network Settings" >}}

## Creating a Bridge: Single Physical Interface

If your system only has a single physical interface, and you prefer to manually configure a network bridge, complete these steps.

{{< include file="/static/includes/BeforeYouBridge.md" >}}

{{< include file="/static/includes/NetworkBridgeSCALE.md" >}}

12. To assign the bridge to a VM or container, go to **Instances**, select the instance you want to use to access TrueNAS storage, and locate the **NIC** widget.
   Click **Add** and select the new bridge interface from the dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceAddNIC.png" alt="Add NIC" id="Add NIC" >}}

You can now access your TrueNAS storage from the container.
You might have to set up [shares]({{< ref "/SCALE/SCALEUIReference/Shares" >}}) or [users]({{< ref "ManageLocalUsersSCALE" >}}) with home directories to access certain files.

## Assigning a Secondary NIC: Multiple Physical Interfaces

If you have more than one NIC on your system, you can assign container traffic to a secondary NIC.
Configure the secondary interface as described in [Managing Interfaces]({{< ref "/SCALE/SCALETutorials/Network/Interfaces" >}}) before attaching it to an instance.

If you are creating a new instance, use the **Network** settings to deselect **Use default network Settings** and select the secondary NIC from **Macvlan NICs**.

{{< trueimage src="/images/SCALE/Virtualization/InstancesNetworkNonDefault.png" alt="Non-Default Network Settings" id="Non-Default Network Settings" >}}

To edit the NIC attached to an existing VM:

1. Go to **Instances**, select the instance you want to use to access TrueNAS storage, and locate the **NIC** widget.

2. Click **Add** and select the secondary interface from the **MAC VLAN** dropdown list.

   {{< trueimage src="/images/SCALE/Virtualization/InstanceAddNIC.png" alt="Add NIC" id="Add NIC" >}}

## VM Access Examples

{{< expand "Linux Example" "v" >}}
Linux VMs and containers can access TrueNAS storage using FTP, SMB, and NFS.

In the example below, the Linux VM uses FTP to access a home directory for a user on TrueNAS.

{{< trueimage src="/images/SCALE/AccessNASfromVM6.png" alt="Connecting to FTP Path" id="Connecting to FTP Path" >}}

{{< trueimage src="/images/SCALE/AccessNASfromVM7.png" alt="FTP Home Directory" id="FTP Home Directory" >}}
{{< /expand >}}

{{< expand "Windows Example" "v" >}}
Windows VMs can access TrueNAS storage using FTP and SMB.

The example below shows the Windows VM accessing an SMB share on TrueNAS.

{{< trueimage src="/images/SCALE/AccessNASfromVM8.png" alt="Enter SMB Share Path" id="Enter SMB Share Path" >}}

{{< trueimage src="/images/SCALE/AccessNASfromVM9.png" alt="SMB Share" id="SMB Share" >}}
{{< /expand >}}
