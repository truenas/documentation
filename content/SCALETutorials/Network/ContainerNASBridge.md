---
title: "Accessing NAS from Containers"
description: "Provides instructions on how to create a bridge interface for virtual machines or applications and provides Linux and Windows examples."
weight: 60
tags:
 - vm
 - container
 - apps
keywords:
- nas data storage
- software storage solutions
- storage container virtualization
---

{{< include file="/static/includes/25.04Virtualization.md" >}}

If you want to access your TrueNAS directories from within a virtual machine, Linux container, or app hosted on the system, you have multiple options:

* If you have only one physical interface, you must create a bridge interface.
* If your system has more than one physical interface you can assign your containers to a NIC other than the primary one your TrueNAS server uses.
  This method makes communication more flexible but does not offer the potential speed of a bridge.

## Creating a Bridge: Single Physical Interface

If your system only has a single physical interface, complete these steps to create a network bridge.

{{< include file="/static/includes/BeforeYouBridge.md" >}}

{{< include file="/static/includes/NetworkBridgeSCALE.md" >}}

<!-- Not Validated in 25.04 Instances -->

12. To assign the bridge to a VM or container, go to **Instances**, expand the VM you want to use to access TrueNAS storage, and click **Devices**.
   Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **NIC** row and select **Edit**.
   Select the new bridge interface from the **NIC to Attach** dropdown list, then click **Save**.

   {{< trueimage src="/images/SCALE/Virtualization/VMEditDeviceNIC.png" alt="Edit NIC Device" id="Edit NIC Device" >}}

You can now access your TrueNAS storage from the container.
You might have to set up [shares]({{< relref "/SCALEUIReference/Shares/_index.md" >}}) or [users]({{< relref "ManageLocalUsersSCALE.md" >}}) with home directories to access certain files.

## Assigning a Secondary NIC: Multiple Physical Interfaces

If you have more than one NIC on your system, you can assign VM traffic to a secondary NIC.
Configure the secondary interface as described in [Managing Interfaces]({{< relref "/SCALETutorials/Network/Interfaces/_index.md" >}}) before attaching it to a VM.

If you are creating a new VM, use the **Attach NIC** dropdown menu under **Network Interface** to select the secondary NIC.

To edit the NIC attached to an existing VM:

1. Go to **Instances**, expand the VM or container you want to use to access TrueNAS storage, and click **Devices**.

   {{< trueimage src="/images/SCALE/Virtualization/VMDevicesListed.png" alt="Virtual Machine Devices" id="Virtual Machine Devices" >}}

2. Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **NIC** row and select **Edit**.

   {{< trueimage src="/images/SCALE/Virtualization/VMEditDeviceSecondaryNIC.png" alt="Attach Secondary NIC Device" id="Attach Secondary NIC Device" >}}

3. Select the secondary interface from the **NIC to Attach** dropdown list, then click **Save**.

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

{{<include file="/static/includes/addcolumnorganizer.md">}}
