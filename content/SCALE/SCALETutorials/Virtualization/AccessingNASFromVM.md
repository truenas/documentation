---
title: "Accessing NAS From a VM"
description: "Provides instructions on how to create a bridge interface for the VM and provides Linux and Windows examples."
weight: 20
alias: /scale/scaleuireference/virtualization/accessingnasfromvm/
tags:
 - vm
---

If you want to access your TrueNAS SCALE directories from a VM, you have multiple options:

* If you have only one physical interface, you must create a bridge interface for the VM to use.
* If your system has more than one physical interface, you can assign your VMs to a NIC other than the primary one your TrueNAS server uses.
  This method makes communication more flexible, but does not offer the potential speed of a bridge.


Prepare your system for interface changes by stopping and/or removing apps, VM NIC devices, and services that can cause conflicts:

* If you have apps running, disable them before proceeding.
* Power off any running VMs before making interface IP changes. Remove active NIC devices.
* If you encounter issues with testing network changes, you might need to stop any services using the current IP address, including Kubernetes and sharing services, such as SMB.
<!-- Fuller procedure to be added below in a separate PR (PD-1018): click **Devices** and remove the attached NIC before proceeding. After creating the bridge, [recreate NIC device(s)]({{< relref "AddManageVMDevicesSCALE.md" >}}) to attach the bridge. -->

## Creating a Bridge: Single Physical Interface

If your system only has a single physical interface, complete these steps in order to create a network bridge.

1. Go to **Virtualization**, find the VM you want to use to access TrueNAS storage, and toggle it off.

   {{< trueimage src="/images/SCALE/Virtualization/VirtualMachinesScreenwithVM.png" alt="Virtual Machine Screen" id="Virtual Machine Screen" >}}

2. Go to **Network > Interfaces** and find the active interface you used as the VM parent interface.
   Note the interface IP Address and subnet mask.
   Click the interface to open the **Edit Interface** screen.

   {{< trueimage src="/images/SCALE/Network/NetworkInterfacesSCALE.png" alt="Network Interfaces" id="Network Interfaces" >}}

3. If enabled, clear the **DHCP** checkbox.
   Note the IP address and mask under **Aliases**.
   Click the **X** next to the listed alias to remove the IP address and mask.
   The **Aliases** field now reads **No items have been added yet**.
   Click **Save**.

   {{< trueimage src="/images/SCALE/Network/EditInterfaceNicDeviceSCALE.png" alt="Edit Network Interface" id="Edit Network Interface" >}}

4. The **Interfaces** widget displays the edited interface with no IP information.

   {{< trueimage src="/images/SCALE/Network/NetworkInterfacesNoIPSCALE.png" alt="Network Interface Widget" id="Network Interface Widget" >}}

5. Add Bridge Interface.

   {{< include file="/_includes/NetworkBridgeSCALE.md" >}}

6. Test and confirm changes.
   To determine if network changes are suitable, click **Test Changes**.

   {{< trueimage src="/images/SCALE/Virtualization/VMTestNetworkChanges.png" alt="Test Network Changes" id="Test Network Changes" >}}

   Once TrueNAS finishes testing the interface, click **Save Changes** if you want to keep the changes.
   Click **Revert Changes** to discard the changes and return to the previous configuration.

<!-- Troubleshooting network testing here -->

   {{< trueimage src="/images/SCALE/Virtualization/VMSaveNetworkChanges.png" alt="Save Network Changes" id="Save Network Changes" >}}

   The new bridge interface displays with associated IP information.

   {{< trueimage src="/images/SCALE/Network/NetworkInterfacesBridgeSCALE.png" alt="Network Interfaces with Bridge" id="Network Interfaces with Bridge" >}}

7. Edit VM Device Configuration

   Go to **Virtualization**, expand the VM you want to use to access TrueNAS storage, and click **Devices**.
   Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **NIC** row and select **Edit**.
   Select the new bridge interface from the **NIC to Attach** dropdown list, then click **Save**.

   {{< trueimage src="/images/SCALE/Virtualization/VMEditDeviceNIC.png" alt="Edit NIC Device" id="Edit NIC Device" >}}

You can now access your TrueNAS storage from the VM.
You might have to set up [shares]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}) or [users]({{< relref "ManageLocalUsersSCALE.md" >}}) with home directories to access certain files.

## Assigning a Secondary NIC: Multiple Physical Interfaces

If you have more than one NIC present on your system, you can assign VM traffic to a secondary NIC.
Configure the secondary interface as described in [Managing Interfaces]({{< relref "managinginterfaces.md" >}}) before attaching it to a VM.

If you are creating a new VM, use the **Attach NIC** dropdown menu under **Network Interface** to select the secondary NIC.

To edit the NIC attached to an existing VM:

1. Go to **Virtualization**, expand the VM you want to use to access TrueNAS storage, and click **Devices**.

{{< trueimage src="/images/SCALE/Virtualization/VMDevicesListed.png" alt="Virtual Machine Devices" id="Virtual Machine Devices" >}}

2. Click <i class="material-icons" aria-hidden="true" title="System Update">more_vert</i> in the **NIC** row and select **Edit**.

{{< trueimage src="/images/SCALE/Virtualization/VMEditDeviceSecondaryNIC.png" alt="Attach Secondary NIC Device" id="Attach Secondary NIC Device" >}}

3. Select the secondary interface from the **NIC to Attach** dropdown list, then click **Save**.

## VM Access Examples

{{< expand "Linux Example" "v" >}}
Linux VMs can access TrueNAS storage using FTP, SMB, and NFS.

In the example below, the Linux VM is using FTP to access a home directory for a user on TrueNAS.

{{< trueimage src="/images/SCALE/AccessNASfromVM6.png" alt="Connecting to FTP Path" id="Connecting to FTP Path" >}}

{{< trueimage src="/images/SCALE/AccessNASfromVM7.png" alt="FTP Home Directory" id="FTP Home Directory" >}}
{{< /expand >}}

{{< expand "Windows Example" "v" >}}
Windows VMs can access TrueNAS storage using FTP and SMB.

In the example below, the Windows VM accessing an SMB share on TrueNAS.

{{< trueimage src="/images/SCALE/AccessNASfromVM8.png" alt="Enter SMB Share Path" id="Enter SMB Share Path" >}}

{{< trueimage src="/images/SCALE/AccessNASfromVM9.png" alt="SMB Share" id="SMB Share" >}}
{{< /expand >}}
