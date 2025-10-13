---
title: "Installing TrueNAS"
description: "Provides the TrueNAS iso file installation instructions for physical hardware and virtual machines. Describes the iso verification process using an OpenPGP encryption application."
weight: 15
tags:
- install
- update
- vm
keywords:
- nas storage
- data storage system
- DHCP
---

After you [download](https://www.truenas.com/download-tn-scale/) the <kbd>.iso</kbd> file, you can start installing TrueNAS!

This article describes verifying the <kbd>.iso</kbd> file, then installing TrueNAS using that file, and selecting the type of installation as either on [physical hardware](#installing-on-physical-hardware) or a [virtual machine (VM)](#installing-on-a-virtual-machine).

{{< enterprise >}}
TrueNAS Enterprise customers should receive their systems already installed and ready for UI configuration. If any issues require you to install or re-install TrueNAS, contact TrueNAS Enterprise Support for assistance.

Enterprise customers with High Availability (HA) systems should not attempt to re-install their systems on their own. The dual controller install process is complicated and the risk of causing serious network issues is high. Contact TrueNAS Enterprise Support for assistance!

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## ISO Verification
The iXsystems Security Team cryptographically signs TrueNAS <kbd>.iso</kbd> files so that users can verify the integrity of their downloaded files.
This section demonstrates how to verify an <kbd>.iso</kbd> file using the [Pretty Good Privacy (PGP)](https://tools.ietf.org/html/rfc4880) and [SHA256](https://tools.ietf.org/html/rfc6234) methods.

### Performing PGP ISO Verification
You need an OpenPGP encryption application for this method of ISO verification.
{{< expand "Click here for the verification process." "v" >}}

1. Obtain an OpenPGP encryption application to use.
   There are many free applications available. The OpenPGP group provides a list of available software for different operating systems at https://www.openpgp.org/software/.
   The examples in this section show verifying the TrueNAS <kbd>.iso</kbd> using [gnupg2](https://gnupg.org/software/index.html) in a command prompt, but [Gpg4win](https://www.gpg4win.org/) is also a good option for Windows users.

2. To verify the <kbd>.iso</kbd> source, go to https://www.truenas.com/download-tn-scale/, expand the **Security** option,
   and click **PGP Signature** to download the Gnu Privacy Guard signature file.  This file can be a (<kbd>.gpg</kbd>) or a (<kbd>.sig<kbd>) file.
   Open the [PGP Public key link](https://keyserver.ubuntu.com/pks/lookup?search=0xC8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946&fingerprint=on&op=index) and note the address in your browser and **Search results for** string.

3. Use one of the OpenPGP encryption tools mentioned above to import the public key and verify the PGP signature.

   Go to the <kbd>.iso</kbd> and the <kbd>.iso.gpg</kbd> or <kbd>.iso.sig</kbd> download location and import the public key using the keyserver address and search results string:

   ```
   user@ubuntu /tmp> gpg --keyserver keys.gnupg.net --recv-keys 0xc8d62def767c1db0dff4e6ec358eaa9112cf7946
   gpg: DBG: Using CREATE_BREAKAWAY_FROM_JOB flag
   gpg: key 358EAA9112CF7946: public key "IX SecTeam <security-officer@ixsystems.com>" imported
   gpg: DBG: Using CREATE_BREAKAWAY_FROM_JOB flag
   gpg: Total number processed: 1
   gpg:               imported: 1
   user@ubuntu /tmp>
   ```

   Use `gpg --verify` to compare the <kbd>.iso</kbd> and the <kbd>.iso.gpg</kbd> or <kbd>.iso.sig</kbd> files:

   ```
   user@ubuntu /tmp>  gpg --verify TrueNAS-SCALE-21.04-ALPHA.1.iso
   gpg: Signature made Thu May 27 10:49:02 2021 EDT using RSA key ID 12CF7946
   gpg: Good signature from "IX SecTeam <security-officer@ixsystems.com>"
   gpg: WARNING: This key is not certified with a trusted signature!
   gpg:          There is no indication that the signature belongs to the owner.
   Primary key fingerprint: C8D6 2DEF 767C 1DB0 DFF4  E6EC 358E AA91 12CF 7946
   user@ubuntu /tmp>
   ```

   This response means the signature is correct but still untrusted.

4. Go back to the browser page that has the **PGP Public key**.
   Open and manually confirm that the key is issued for `IX SecTeam <security-officer@ixsystems.com>` (iX Security Team) on October 15, 2019, and is signed by an iXsystems account.
{{< /expand >}}

### Using SHA256 Verification
SHA256 verification uses the checksum to validate/verify the file.
{{< expand "Click here for the verification process." "v" >}}
The command to verify the checksum varies by operating system:

* BSD: use command `sha256 isofile`
* Linux: use command `sha256sum isofile`
* Mac: use command `shasum -a 256 isofile`

Freeware or online checksum utilities are available for Windows users.

The value produced by running the command must match the value shown in the <kbd>sha256.txt</kbd> file.
Different checksum values indicate a corrupted installer file that you should not use.
{{< /expand >}}

## Installing TrueNAS
You can install TrueNAS on either physical hardware or a virtual machine.

{{< hint type=important >}}
Before starting the update process, confirm that the system storage has enough space to handle the update.
The update stops if there is insufficient space to complete.
{{< /hint >}}

### Installing on Physical Hardware
TrueNAS is flexible and can run on any x86_64 compatible (Intel or AMD) processor.
TrueNAS requires at least 8GB of RAM (more is better) and a 20GB Boot Device.

#### Preparing the Install File
Physical hardware requires burning the TrueNAS installer to a device, typically a CD or removable USB device.
This device is temporarily attached to the system to install TrueNAS to the system permanent boot device.

{{< expand "Writing the TrueNAS installer to a USB stick on Linux" "v" >}}
To write the TrueNAS installer to a USB stick on Linux, plug the USB stick into the system and open a terminal.

Start by making sure the USB stick connection path is correct.
There are many ways to do this in Linux, but a quick option is to enter the command `lsblk -po +vendor,model` and note the path to the USB stick.
This shows in the **NAME** column of the `lsblk` output.

Next, use the `dd` command to write the installer to the USB stick.

{{< hint type=warning >}}
Be very careful when using `dd`, as choosing the wrong `of=` device path can result in irretrievable data loss!
{{< /hint >}}

Enter this command `dd status=progress if=path/to/.iso of=path/to/USB` in the CLI.

If this results in a permission denied error, use the command `sudo dd` with the same parameters and enter the administrator password.
{{< /expand >}}

TrueNAS allows using other methods to create boot media such as:
* Ventoy for Windows and Linux operating systems
* TINU for MacOS Operating systems
* DiskMaker X for MacOS 
* Rufus for Windows and Linux operating systems, or by creating a Windows VM in your Mac
* Universal USB Installer (UUI) similar to Rufus
* Your Universal Multiboot Installer (YUMI) for multiple operating systems
* MultiBootUSB for Windows, Linux operating systems

The following sections provide more information on a few of these options.

{{< include file="static/includes/Ventoy.md" >}}

{{< include file="static/includes/Rufus.md" >}}

{{< expand "Using TINU" "v" >}}
[TINU](https://github.com/ITzTravelInTime/TINU) is an open-source tool to create bootable MacOS installers.
It creates bootable MacOS installers capable of running Apple MacOS.
The program uses a GU for the `createinstallmedia` executable found in any MacOS installer app.
This allows you to easily create MacOS install media without using the command line or Disk Utility, and it detects and prevents the most common errors when creating bootable MacOS installers

Follow the instructions provided in the GUI to begin creating the bootable media.

This program works with every MacOS installer app with the `creteinstallmedia` executable inside its internal resources folder. The program does not require special preparation, requirements are:
* A computer that runs MacOS X Yosemite or later
* A drive or partition to turn into a MacOS installer, of at least 8 GB (some MacOS releases require 9 GB or 12 Gb)
* A copy of a ".ap" MacOS/Mac OS x installer

To use:
1. [Download a copy](https://github.com/ITzTravelInTime/TINU/releases) of the TINU app
2. Launch the program and follow the instructions in the GUI.
{{< /expand >}}

#### Installing From the Device Media
Before you begin:

* Locate the hotkey defined by the manufacturer of your motherboard to use in this process.
* Disable SecureBoot if your system supports it or set it to **Other OS**, so you can boot to the install media.

With the installer added to a device (CD or USB), install TrueNAS onto the desired system using the TrueNAS installer.

Insert the install media and restart or boot the system.
At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to boot into the motherboard UEFI/BIOS.

Choose to boot in **UEFI mode** or **legacy CSM/BIOS mode**.
When installing TrueNAS, make the matching choice for the installation.
For Intel chipsets manufactured in 2020 or later, UEFI is likely the only option.

If your system supports SecureBoot, and you have not disabled it or set it to **Other OS**, do it now, so you can boot the install media.

Select the install device as the boot drive, exit, and restart the system.
If the USB stick is not shown as a boot option, try a different USB slot.
Slots available for boot differ by hardware.

#### Using the TrueNAS Installer
{{< hint type=important >}}
If you are doing a clean install from the TrueNAS <kbd>.iso</kbd> file as part of migrating from a different TrueNAS version, or to recover from a serious issue that requires you to re-install TrueNAS from the <kbd>.iso</kbd>, have your network configuration information ready to use after the installation completes.
Also have your TrueNAS system configuration file and data backups handy, so you can recover your system settings and import your data into the recovered TrueNAS clean-install system.
{{< /hint >}}

After the system boots into the installer, follow these steps.

{{< expand "TrueNAS Installer Instructions" "v" >}}
{{< include file="/static/includes/SCALEInstallerProcedure.md" >}}

After following the installation steps, restart the system, and then remove the install media.

{{< expand "Troubleshooting" "v">}}
If the system does not boot into TrueNAS, there are several things you can check to resolve the situation:

* Check the system BIOS for an option to change **USB emulation** from **CD/DVD/floppy** to **hard drive**.
  After making the change it still does not boot, check to see if the card/drive is UDMA compliant.
* Check to see if the system BIOS supports **UEFI with BIOS emulation**.
  If not, check for an option to boot using **legacy BIOS mode**.

If the system starts to boot but hangs with this repeating error message: `run_interrupt_driven_hooks: still waiting after 60 seconds for xpt_config`, go into the system BIOS and look for an onboard device configuration for a `1394 Controller`.
If present, disable that device and try booting again.

If the burned image fails to boot and you burned the image using a Windows system, wipe the USB stick before trying a second burn using a utility such as [Active@ KillDisk](https://www.killdisk.com/eraser.html).
Otherwise, the second burn attempt fails as Windows does not understand the partition written from the image file.
Be very careful to specify the correct USB stick when using a wipe utility!
{{< /expand >}}
{{< /expand >}}

### Installing on a Virtual Machine
Because TrueNAS is built and provided as an <kbd>.iso</kbd> file, it works on all virtual machine solutions (Proxmox, VMware, VirtualBox, Citrix Hypervisor, etc).
This section describes installing on a VM using [VMware Workstation Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html) on Windows.

#### Minimum Virtual Machine Settings
Regardless of the virtualization application, use these minimum settings:

* RAM: at least 8192MB (8GB)
* DISKS: two virtual disks with at least 16GB, one for the operating system and boot environments, and at least one additional virtual disk for data storage.
* NETWORK: Use NAT, bridged, or host-only depending on your host network configuration.

#### Networking Checks for VMWare
When installing TrueNAS in a VMWare VM, double-check the virtual switch and VMWare port group.
A misconfigured virtual switch or VMWare port group can cause network connection errors for TrueNAS systems with additional applications installed inside the TrueNAS VM.
Enable **MAC spoofing** and **promiscuous mode** on the switch first, and then the port group the VM is using. 

If not using static IP addresses, configure your VM to use DHCP to assign IP addresses for seamless network connectivity.

{{< include file="/static/includes/VirtualMachinesJailNetworking.md" >}}

#### Installing on a Generic Virtual Machine
The procedure for creating a TrueNAS VM is the same for most hypervisors.
{{< expand "Generic VM Installation Instructions" "v" >}}

1. Create a new virtual machine as usual, taking note of the following:

   * Point a bootable CD/DVD device in the virtual hardware to the TrueNAS installer image (this is usually an <kbd>.iso</kbd>).

   * Configure the virtual network card to allow your network to reach it.
     Bridged mode is optimal, as it treats the network card as if it is plugged into a simple switch on the existing network.

   * Identify the OS you plan to install on the VM. This is required by some products. The ideal option is **Debian 11 64 bit**.
     If not available, try options like Debian 11, Debian 64 bit, 64 bit OS, or other.

   * Install in BIOS mode for VMWare hypervisors.

   * Ensure the VM has sufficient memory and disk space. For TrueNAS set to at least 8 GB RAM and 20 GB disk space.
     Not all hypervisors allocate enough memory by default.

2. Boot the VM and install TrueNAS as usual.

3. After the installation completes, shut down the VM instead of restarting, and disconnect the CD/DVD from the VM before restarting the VM.

4. After restarting into TrueNAS, install VM tools if applicable for your VM, and if they exist for Debian 11, or ensure they loaded on boot.
{{< /expand >}}

#### Installing Using VMWare Player 15.5
This example describes installing TrueNAS using VMWare Player 15.5.

{{< expand "Installation Instructions" "v" >}}
Open VMware Player and click **Create a New Virtual Machine** to enter the New Virtual Machine Wizard.

1. Install the disk image file.

   Select the **Installer disk image file (<kbd>.iso</kbd>)** option, click **Browse...**, and upload the TrueNAS <kbd>.iso</kbd> downloaded earlier.

2. Name the virtual machine.

   You can change the virtual machine name and location.

3. Specify the disk capacity.

   Specify the maximum disk size for the initial disk.
   The default 20GB is enough for TrueNAS.

   Next, select **Store virtual disk as a single file**.

4. Review the virtual machine configuration.

   Review the virtual machine configuration before proceeding.
   By default, VMware Player does not set enough RAM for the virtual machine.

   Click **Customize Hardware...** > **Memory**.
   Drag the slider up to 8GB and click **Ok**.

5. Power on the machine after creation if desired. Select **Power on this virtual machine after creation**.
{{< /expand >}}

#### Adding Virtual Disks
After installing TrueNAS on a virtual machine (VM), add virtual disks to the VM.
You need a minimum of two disks, 16 GB each.
One disk is for the boot environment the other for data storage.

{{< expand "Adding Virtual Disk Instructions" "v" >}}

1. After creating the virtual machine, select it on the virtual machine list and click **Edit virtual machine settings**.

2. Click **Add...** and select **Hard Disk**. Select **SCSI** as the virtual disk type.

3. Select **Create a new virtual disk**. Specify the maximum size for this additional virtual disk.
   This disk stores data in TrueNAS.
   If desired, allocate the disk space immediately by setting **Allocate all disk space now**.

4. Select **Store virtual disk as single file**.

5. Enter a name and choose a location for the new virtual disk.

Repeat this process until enough disks are available for TrueNAS to create ideal storage pools.
This depends on your specific TrueNAS use case.
See [Pool Creation]({{< ref "CreatePoolWizard" >}}) for descriptions of the various pool ("vdev") types and layouts.
{{< /expand >}}

#### Using the TrueNAS Installer
Just as with installing TrueNAS on physical hardware, complete the installation in the VM by booting into the TrueNAS installer.

{{< expand "Using the TrueNAS Installer in a Virtual Machine" "v" >}}
Select the virtual machine from the list and click **Play virtual machine**.
The machine starts and boots into the TrueNAS installer.

{{< include file="/static/includes/SCALEInstallerProcedure.md" >}}

After the TrueNAS installation completes, reboot the system.
The [Console Setup menu]({{< ref "ConsoleSetupMenuScale" >}}) displays when the system boots successfully.
{{< /expand >}}

Congratulations, TrueNAS is now installed!

The next step is to configure TrueNAS network and general settings.
Experienced users can use the [Console Setup Menu]({{< ref "ConsoleSetupMenuScale" >}}) to configure network settings, but if you are unfamiliar with the Console setup menu and how network configuration works, we recommend using the TrueNAS UI to [configure settings]({{< ref "UIConfigurationSCALE" >}}).
TrueNAS uses DHCP to assign an IP address to the primary system interface and displays it at the top of the Console Setup menu screen. Use this IP address to log into the web UI.
