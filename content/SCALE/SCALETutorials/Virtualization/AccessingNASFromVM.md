---
title: "Accessing NAS From a VM"
description: "This article provides instructions on how to create a bridge interface for the VM and provides a Linux and Windows example."
weight: 20
alias: /scale/scaleuireference/virtualization/accessingnasfromvm/
tags:
 - scalevm
---

{{< toc >}}

If you want to access your TrueNAS SCALE directories from a VM, you have multiple options. If your system has more than one physical interface, you can assign your VMs to a NIC other than the primary one your TrueNAS server uses. This method makes communication more flexible, but does not offer the potential speed of a bridge.

If you have only one physical interface, you must create a bridge interface for the VM to use. 

## Creating a Bridge: Single Physical Interface

{{< hint warning >}}
If the only interface you have is a single physical interface, complete the following steps in order to create a network bridge:
* If you have apps running, disable them before proceeding. 
* Clear the DHCP checkbox on the single physical interface you have, but don't apply the changes.
* Create a bridge interface and add your physical interface as a member. Configure relevant networking options such as DHCP.
* Then apply the changes and connect to the UI with the new networking settings.
* These steps are outlined below.
{{< /hint >}}


## Creating a Bridge: One Active Interface

Go to **Virtualization**, find the VM you want to use to access TrueNAS storage, and toggle it off.

![VirtualMachinesScreenwithVM](/images/SCALE/22.12/VirtualMachinesScreenwithVM.png "Virtual Machine Screen")

### Edit Interface

{{< expand "Using the shell to obtain IP address" "v" >}}

You can also get the IP address and subnet mask by going to **Shell** and entering `ip a`.

![AccessNASfromVM3](/images/SCALE/AccessNASfromVM3.png "Add IP and Subnet Mask")
{{< /expand >}}

Go to **Network > Interfaces** and find the active interface you used as the VM parent interface. Note the interface IP Address and subnet mask. 
Click the interface.

![NetworkInterfacesSCALE](/images/SCALE/22.12/NetworkInterfacesSCALE.png "Network Interfaces SCALE")

The **Edit Interface** screen appears. If selected, clear the **DHCP** checkbox. Note the IP address and mask under **Aliases**. Click the **X** next to the listed alias to remove the IP address and mask. The **Aliases** field now reads **No items have been added yet**. Click **Save**.

![EditInterfaceNicDeviceSCALE](/images/SCALE/22.12/EditInterfaceNicDeviceSCALE.png "Edit Network Interface SCALE")

The **Interfaces** widget displays the edited interface with no IP information.

![NetworkInterfacesNoIPSCALE](/images/SCALE/22.12/NetworkInterfacesNoIPSCALE.png "Network Interface Widget")

### Add Bridge Interface

{{< include file="/_includes/NetworkBridgeSCALE.md" type="page" >}}

To determine if network changes are suitable, click **Test Changes**. 

![VMTestNetworkChanges](/images/SCALE/22.12/VMTestNetworkChanges.png "Test Network Changes")

![VMTestNetworkChangesConfirm](/images/SCALE/22.12/VMTestNetworkChangesConfirm.png "Confirm Network Changes")

Once TrueNAS finishes testing the interface, click **Save Changes** if you want to keep the changes. Click **Revert Changes** to discard the changes and return to the previous configuration.

![VMSaveNetworkChanges](/images/SCALE/22.12/VMSaveNetworkChanges.png "Save Network Changes")

The new bridge interface displays with associated IP information.

![NetworkInterfacesBridgeSCALE](/images/SCALE/22.12/NetworkInterfacesBridgeSCALE.png "Network Interfaces with Bridge")

### Edit VM Device Configuration

Go to **Virtualization**, expand the VM you want to use to access TrueNAS storage, and click **Devices**. Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **NIC** row and select **Edit**.
Select the new bridge interface from the **Nic to Attach** dropdown list, then click **Save**.

![VMEditDeviceNIC](/images/SCALE/22.12/VMEditDeviceNIC.png "VM Edit NIC Device")

You can now access your TrueNAS storage from the VM. You might have to set up [shares]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}) or [users]({{< relref "ManageLocalUsersSCALE.md" >}}) with home directories to access certain files.

## VM Access Examples

{{< expand "Linux Example" "v" >}}
Linux VMs can access TrueNAS storage using FTP, SMB, and NFS.

In the example below, the Linux VM is using FTP to access a home directory for a user on TrueNAS.

![AccessNASfromVM6](/images/SCALE/AccessNASfromVM6.png "Connecting to FTP Path")

![AccessNASfromVM7](/images/SCALE/AccessNASfromVM7.png "FTP Home Directory")
{{< /expand >}}

{{< expand "Windows Example" "v" >}}
Windows VMs can access TrueNAS storage using FTP and SMB.

In the example below, the Windows VM accessing an SMB share on TrueNAS.

![AccessNASfromVM8](/images/SCALE/AccessNASfromVM8.png "Enter SMB Share Path")

![AccessNASfromVM9](/images/SCALE/AccessNASfromVM9.png "SMB Share")
{{< /expand >}}

{{< taglist tag="scalevm" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}
