---
title: "Virtual Machine (VM)"
description: "A how-to on the process of installing TrueNAS into a VM."
weight: 2
---

TrueNAS can be installed inside a virtual machine using an `.iso` file.
To get the latest version of TrueNAS go to the
[TrueNAS website](https://www.truenas.com/ "TrueNAS Website") and
download TrueNAS Core. The next step is to install it into a VM.

## Virtual Machine Application

Since TrueNAS is built and provided as an `.iso` file, it will work on
all virtual machine applications (VMware, VirtualBox, Citrix
Hypervisor, etc). In this document,
[VMware Workstation Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html)
for Windows is being used.

{{% alert title="Recommended Minimum Virtual Machine Settings:" %}}
What ever virtualization application is used, ensure these minimum
virtual machine settings are met.

* RAM: at least 8192MB (8GB)
* DISKS: one virtual disk with at least 8GB for the operating system
and boot environments and at least one additional virtual disk with
at least 4GB to be used as data storage.
* NETWORK: Use NAT, Bridged, or Host-only depending on your host network
configuration.
{{% /alert %}}

{{% alert title="VMWare products and EFI boot mode:" %}}
A third party bug currently affects EFI (UEFI) booting on VMWare products.
TrueNAS should be installed in BIOS mode until this is resolved.
See iXSystems reference [NAS-107298](https://jira.ixsystems.com/browse/NAS-107298).
{{% /alert %}}

When installing TrueNAS in a VMware VM, double check the virtual switch and VMware port group.
Network connection errors for plugins or jails inside the TrueNAS VM can be caused by a misconfigured virtual switch or VMware port group.
Make sure *MAC spoofing* and *promiscuous mode* are enabled on the switch first, and then the port group the VM is using.

## Outline procedure for all hypervisors

For most hypervisors, the procedure for creating a TrueNAS VM is as follows:

1. Create a new Virtual Machine as usual, taking note of the following settings.
2. Ensure the virtual hardware includes a bootable CD/DVD device, and this points to the installer image for TrueNAS (this will usually be an ISO file).
3. Ensure the virtual network card is configured so that it can be reached from your network. In many cases, "bridged" mode is optimal; this treats the network card as if it is plugged into a simple switch on the existing network.
4. In some products, it is possible or required to specify the type of system being installed on the VM. The ideal option is FreeBSD 12 64 bit; if this is not available try options such as FreeBSD 12, FreeBSD 64 bit, 64 bit OS, or Other. (Do not choose a Windows or Linux related OS type).
5. For VMWare hypervisors, install in BIOS not EFI (UEFI) mode - see warning above.
6. Ensure the VM has sufficient memory and disk space. TrueNAS needs at least 8 GB RAM and may need more. 20 GB disk space is usually enough. Not all hypervisors will allocate enough memory by default.
7. Boot the VM, and install TrueNAS as usual.
8. When install is complete, shut down the VM instead of rebooting, and disconnect the CD/DVD from the VM before rebooting the VM.
9. After rebooting into TrueNAS, install VM tools if applicable for your VM, and if they exist for FreeBSD 12, or ensure they are loaded on boot. For VMWare products, see the note below. For other hypervisors, see the forum or search online, to determine if these are applicable.

## Example installation for VMWare Player 15.5

Open VMware Player and click *Create a New Virtual Machine* to enter
the New Virtual Machine Wizard.

### 1. Installer disk image file

Select the *Installer disk image file (iso)* option, click *Browse...*,
and upload the TrueNAS Core `.iso` file that was downloaded earlier.

### 2. Name the Virtual Machine

In this step, the virtual machine name and location can be changed.

### 3. Specify Disk Capacity

Specify the maximum disk size for the initial disk. The default value
of 20GB is enough for TrueNAS. Next, select *Store virtual disk as a
single file*.

### 4. Review Virtual Machine

Review the virtual machine configuration before proceeding. By default,
VMware Player doesn't set enough RAM for the virtual machine. Click
*Customize Hardware...* > *Memory*. Drag the slider up to 8GB and click
*Ok*. If you wish to power on the machine after creation, select *Power
on this virtual machine after creation*.

## Add Virtual Disk for Storage

After the virtual machine has been created, select it from the virtual
machine list and click *Edit virtual machine settings*. Click
*Add...* and select *Hard Disk*. Select *SCSI* as the virtual disk
type. Select *Create a new virtual disk*. Specify the maximum size
of this additional virtual disk. This disk will be used for data
storage. If desired, allocate the disk space immediately by setting
*Allocate all disk space now*. Select *Store virtual disk as single
file*. Finally, name and chose a location for the new virtual disk.

## TrueNAS Installer

Select the virtual machine from the list and click *Play virtual
machine*. The machine will start and boot into the TrueNAS installer.
Select *Install/Upgrade*.

<img src="/images/InstallerInstall.png">
<br><br>

Select the desired disk for the boot environments.

<img src="/images/InstallerDisk.png">
<br><br>

Select *Yes*. **This will erase all contents on the disk**!

<img src="/images/InstallerFresh.png">
<br><br>

Set a password for root login.

<img src="/images/InstallerPassword.png">
<br><br>

Select *\<Boot via BIOS>*.

<img src="/images/InstallerBios.png">
<br><br>

After the installation of TrueNAS has completed, reboot the system.
Congratulations, TrueNAS is now installed in a virtual machine.

{{% alert title="TrueNAS post-install for VMware" color="info" %}}
After installing TrueNAS in a VMware VM, it is recommended to configure and use the [vmx(4)](https://www.freebsd.org/cgi/man.cgi?query=vmx) drivers on TrueNAS.
To load the VMX driver when TrueNAS boots, log in to the web interface and go to **System** and then **Tunables**.
CLick **Add** and create a new tunable with variable `if_vmx_load`, value `"YES"`, and type `loader`, and save the tunable:

<img src="/images/tunable-if_vmx_load.png">
{{% /alert %}}
