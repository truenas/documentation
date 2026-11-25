---
title: "Accessing NAS from VMs and Containers"
description: "Provides instructions on how to create a bridge interface for virtual machines and containers, and provides Linux and Windows examples."
weight: 80
aliases: 
 - /scale/network/containernasbridge/
 - /scale/containers/virtualization/accessingnasfromvm/
 - /scale/reporting/virtualization/accessingnasfromvm/
 - /scale/scaletutorials/virtualization/accessingnasfromvm/
 - /scale/scaletutorials/network/containernasbridge/
tags:
 - vm
 - container
 - instances
 - apps
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
doctype: tutorial
---

If you want to access your TrueNAS directories from within a virtual machine or container hosted on the system, you have multiple options:

* Allow TrueNAS to create an automatic bridge (default).
* Manually create a bridge interface if you have only one physical interface.
* Assign a NIC other than the primary one your TrueNAS server uses if you have more than one physical interface.
  This method makes communication more flexible but does not offer the potential speed benefits of a bridge.

  Containers allow you to configure a MACVLAN NIC, which creates a virtual interface based on an existing physical one.
  The assigned unique MAC address allows the container to appear as a separate device on the network.

{{< include file="/static/includes/MacvlanHost.md" >}}

## Creating a Bridge - Single Physical Interface

If your system only has a single physical interface, and you prefer to manually configure a network bridge, complete these steps.

{{< include file="/static/includes/BeforeYouBridge.md" >}}

{{< include file="/static/includes/NetworkBridgeSCALE.md" >}}

After adding the bridge, attach it to a VM or container using the steps in [Attaching a Bridge or Secondary NIC](#attaching-a-bridge-or-secondary-nic) below.

## Attaching a Bridge or Secondary NIC

The steps to attach a bridge or a secondary physical NIC differ depending on whether you want to use it for a virtual machine or a container.

### Virtual Machines

To attach a bridge or a physical NIC to a VM:

1. Go to **Virtual Machines**, click on the VM to expand it, then click <i class="material-icons" aria-hidden="true" title="Devices">device_hub</i> **Devices** to open the **Devices** screen for that VM.
2. Click **Add**, select **NIC** from the **Device Type** dropdown list, then select the bridge or physical interface from the **NIC To Attach** dropdown list.
3. Click **Save**.

See [Adding a NIC Device Type]({{< ref "AddManageVMDevices#adding-a-nic-device-type" >}}) for the full procedure, including MAC address and **Trust Guest Filters** options.

### Containers

Containers can use a bridge or secondary NIC in two ways: as the default network for all new containers, or as a NIC attached to one specific container.

To set a bridge as the default network for all new containers, configure it in **Default Network** settings.
See [Configuring the Default Network]({{< ref "ManagingContainers#configuring-the-default-network" >}}) for the full procedure.

To attach a bridge or secondary NIC to one existing container:

1. Go to **Containers**, select the container, then locate the **NIC Devices** card.
2. Click **Add**, select the bridge or physical interface from the list, then set **NIC Type** to match your network setup, such as **macvlan** for a secondary physical interface.
3. Click **Add** to attach the NIC to the container.

See [Managing NICs]({{< ref "ManagingContainers#managing-nics" >}}) for the full procedure, including MAC address options.

You can now access your TrueNAS storage from the VM or container.
You might have to set up [shares]({{< ref "/SCALE/Shares/iSCSI" >}}) or [users]({{< ref "ManageUsers" >}}) with home directories to access certain files.

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
