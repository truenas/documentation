---
title: "Installing SCALE"
weight: 10
---

{{< toc >}}

Once you have [downloaded](https://www.truenas.com/download-tn-scale/) the <file>.iso</file> file, you can start installing TrueNAS SCALE!

{{< expand "ISO Verification" "v" >}}
The iXsystems Security Team cryptographically signs TrueNAS <file>.iso</file> files so that users can verify the integrity of their downloaded file.
This section demonstrates how to verify an <file>.iso</file> file using the [Pretty Good Privacy (PGP)](https://tools.ietf.org/html/rfc4880) and [SHA256](https://tools.ietf.org/html/rfc6234) methods.

### PGP ISO Verification

You will need an OpenPGP encryption application for this method of ISO verification.
There are many different free applications available, but the OpenPGP group provides a list of available software for different operating systems at https://www.openpgp.org/software/.
The examples in this section show verifying the TrueNAS <file>.iso</file> using [gnupg2](https://gnupg.org/software/index.html) in a command prompt, but [Gpg4win](https://www.gpg4win.org/) is also a good option for Windows users.

To verify the <file>.iso</file> source, go to https://www.truenas.com/download-tn-scale/ , expand the **Security** option, and click *PGP Signature* to download the Gnu Privacy Guard (<file>.gpg</file>) signature file. Open the [PGP Public key link](https://keyserver.ubuntu.com/pks/lookup?search=0xC8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946&fingerprint=on&op=index) and note the address in your browser and **Search results for** string .

Use one of the OpenPGP encryption tools mentioned above to import the public key and verify the PGP signature.

Go to the <file>.iso</file> and <file>.iso.gpg</file> download location and import the public key using the keyserver address and search results string:

```
user@ubuntu /tmp> gpg --keyserver keys.gnupg.net --recv-keys 0xc8d62def767c1db0dff4e6ec358eaa9112cf7946
gpg: DBG: Using CREATE_BREAKAWAY_FROM_JOB flag
gpg: key 358EAA9112CF7946: public key "IX SecTeam <security-officer@ixsystems.com>" imported
gpg: DBG: Using CREATE_BREAKAWAY_FROM_JOB flag
gpg: Total number processed: 1
gpg:               imported: 1
user@ubuntu /tmp>
```

Use `gpg --verify` to compare the <file>.iso</file> and <file>.iso.gpg</file> files:

```
user@ubuntu /tmp>  gpg --verify TrueNAS-SCALE-21.04-ALPHA.1.iso
gpg: Signature made Thu May 27 10:49:02 2021 EDT using RSA key ID 12CF7946
gpg: Good signature from "IX SecTeam <security-officer@ixsystems.com>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C8D6 2DEF 767C 1DB0 DFF4  E6EC 358E AA91 12CF 7946
user@ubuntu /tmp>
```

This response means the signature is correct but still untrusted. Go back to the browser page that has the **PGP Public key** open and manually confirm that the key was issued for `IX SecTeam <security-officer@ixsystems.com>` (iX Security Team) on October 15, 2019 and has been signed by an iXsystems account.

### SHA256 Verification

The command to verify the checksum varies by operating system:

* BSD: `sha256 isofile`
* Linux: `sha256sum isofile`
* Mac: `shasum -a 256 isofile`
* Windows or Mac users can install additional utilities like [HashCalc](https://hashcalc.soft112.com/) or [HashTab](https://implbits.com/products/hashtab/).

The value produced by running the command must match the value shown in the <file>sha256.txt</file> file.
Different checksum values indicate a corrupted installer file that should not be used.
{{< /expand >}}

Choose the install type to see specific instructions:

{{< tabs "Install Types" >}}
{{< tab "Physical Hardware" >}}
{{< expand "Hardware Considerations" "v" >}}
TrueNAS SCALE is very flexible and can run on any x86_64 compatible (Intel or AMD) processor.
SCALE requires at least 8GB of RAM (more is better) and a 20GB Boot Device.
If you're still researching what kind of hardware to use with SCALE, read over the very detailed [SCALE Developer's Notes]({{< relref "/SCALE/DevNotes.md" >}}).
{{< /expand >}}

## Prepare the Install File

Physical hardware requires burning the TrueNAS SCALE installer to a device, typically a CD or removable USB device.
This device is temporarily attached to the system to install TrueNAS SCALE to the system's permanent boot device.

To write the TrueNAS installer to a USB stick on Linux, plug the USB stick into the system and open a terminal.

Start by making sure the USB stick connection path is correct.
There are many ways to do this in Linux, but a quick option is to enter `lsblk -po +vendor,model` and note the path to the USB stick.
This shows in the **NAME** column of the `lsblk` output.

Next, use `dd` to write the installer to the USB stick.
{{< hint danger >}}
Be very careful when using dd, as choosing the wrong *of=* device path can result in irretrievable data loss!
{{< /hint >}}
Enter `dd status=progress if=path/to/.iso of=path/to/USB` in the CLI.
If this results in a “permission denied” error, use `sudo dd` with the same parameters and enter the administrator password.

## Install Process

With the installer added to a device, you can now install TrueNAS SCALE onto the desired system.
Insert the install media and reboot or boot the system.
At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to boot into the motherboard UEFI/BIOS.

Choose to boot in UEFI mode or legacy CSM/BIOS mode.
When installing TrueNAS, make the matching choice for the installation.
For Intel chipsets manufactured in 2020 or later, UEFI is likely the only option.

If your system supports SecureBoot, you will need to either disable it or set it to "Other OS" to be able to boot the install media.

Select the install device as the boot drive, exit, and reboot the system.
If the USB stick is not shown as a boot option, try a different USB slot.
Which slots are available for boot differs by hardware.

After the system has booted into the installer, follow these steps.

Select <i>Install/Upgrade</i>.

![SCALEInstallUpgrade](/images/SCALE/SCALEInstallMainScreen.png "SCALE Install Main Screen")

Select the desired install drive.

![InstallDrive](/images/CORE/12.0/InstallDriveScreen.png "Install Drive Screen")

Select <i>Yes</i>.

![InstallWarning](/images/CORE/12.0/InstallWarningScreen.png "Install Warning Screen")

Select <i>Fresh Install</i> to do a clean install of the downloaded version of TrueNAS SCALE.
<b>This will erase the contents of the selected drive.</b>!

![InstallFresh](/images/CORE/12.0/InstallWarningScreen.png "Upgrade or Fresh Install Screen")

When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.

![InstallPartition](/images/CORE/12.0/InstallPartitionScreen.png "Install Partition Screen")

Enter a password for the `root` user to log in to the web interface.

![InstallPassword](/images/CORE/12.0/InstallPasswordScreen.png "Install Password Screen")

After following the steps to install, reboot the system and remove the install media.

{{< expand "Troubleshooting" "v">}}
If the system does not boot into TrueNAS SCALE, there are several things that can be checked to resolve the situation:

* Check the system BIOS and see if there is an option to change the USB emulation from CD/DVD/floppy to hard drive. If it still will not boot, check to see if the card/drive is UDMA compliant.
* If the system BIOS does not support EFI with BIOS emulation, see if it has an option to boot using legacy BIOS mode.
* If the system starts to boot but hangs with this repeated error message: `run_interrupt_driven_hooks: still waiting after 60 seconds for xpt_config`, go into the system BIOS and look for an onboard device configuration for a `1394 Controller`. If present, disable that device and try booting again.
* If the burned image fails to boot and the image was burned using a Windows system, wipe the USB stick before trying a second burn using a utility such as [Active@ KillDisk](https://www.killdisk.com/eraser.html). Otherwise, the second burn attempt will fail as Windows does not understand the partition which was written from the image file. Be very careful to specify the correct USB stick when using a wipe utility!
{{< /expand >}}
{{< /tab >}}
{{< tab "Virtual Machine" >}}

{{< embed-video name="scaleangelfishvminstall" >}}

Because TrueNAS SCALE is built and provided as an <file>.iso</file> file, it works on all virtual machine solutions (VMware, VirtualBox, Citrix Hypervisor, etc).
This section demonstrates installing with [VMware Workstation Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html) on Windows.

## Minimum Virtual Machine Settings

Regardless of virtualization application, use these minimum settings:
* RAM: at least 8192MB (8GB)
* DISKS: one virtual disk with at least 8GB for the operating system
and boot environments and at least one additional virtual disk with
at least 4GB to be used as data storage.
* NETWORK: Use NAT, Bridged, or Host-only depending on your host network configuration.

{{< expand "Networking checks for VMware" "v">}}
When installing TrueNAS in a VMware VM, double check the virtual switch and VMware port group.
Network connection errors for plugins or jails inside the TrueNAS VM can be caused by a misconfigured virtual switch or VMware port group.
Make sure *MAC spoofing* and *promiscuous mode* are enabled on the switch first, and then the port group the VM is using.

{{< include file="static/includes/CORE/VirtualMachinesJailNetworking.md.part" markdown="true" >}}
{{< /expand >}}

## Generic VM Creation Process

For most hypervisors, the procedure for creating a TrueNAS VM is the same:

1. Create a new Virtual Machine as usual, taking note of the following settings.
2. The virtual hardware has a bootable CD/DVD device pointed to the TrueNAS SCALE installer image (this is usually an <file>.iso</file>).
3. The virtual network card is configured so it can be reached from your network. **bridged** mode is optimal as this treats the network card as if it is plugged into a simple switch on the existing network.
4. Some products require identifying the OS being installed on the VM. The ideal option is *Debian 11 64 bit*. If this is not available, try options like *Debian 11*, *Debian 64 bit*, *64 bit OS*, or *Other*. **Do not choose a Windows, Mac or BSD related OS type.**
5. For VMWare hypervisors, install in BIOS mode.
6. The VM has sufficient memory and disk space. TrueNAS needs at least *8 GB* RAM and *20 GB* disk space. Not all hypervisors allocate enough memory by default.
7. Boot the VM and install TrueNAS as usual.
8. When installation is complete, shut down the VM instead of rebooting, and disconnect the CD/DVD from the VM before rebooting the VM.
9. After rebooting into TrueNAS, install VM tools if applicable for your VM, and if they exist for Debian 11, or ensure they are loaded on boot.

## Example installation for VMWare Player 15.5

Open VMware Player and click *Create a New Virtual Machine* to enter the New Virtual Machine Wizard.

### 1. Installer disk image file

Select the *Installer disk image file (<file>.iso</file>)* option, click *Browse...*, and upload the TrueNAS SCALE <file>.iso</file> downloaded earlier.

### 2. Name the Virtual Machine

In this step, the virtual machine name and location can be changed.

### 3. Specify Disk Capacity

Specify the maximum disk size for the initial disk.
The default *20GB* is enough for TrueNAS.
Next, select *Store virtual disk as a single file*.

### 4. Review Virtual Machine

Review the virtual machine configuration before proceeding.
By default, VMware Player doesn't set enough RAM for the virtual machine.
Click *Customize Hardware...* > *Memory*.
Drag the slider up to 8GB and click *Ok*.
If you wish to power on the machine after creation, select *Power on this virtual machine after creation*.

## Add Virtual Disks for Storage

After the virtual machine has been created, select it from the virtual machine list and click *Edit virtual machine settings*.
Click *Add...* and select *Hard Disk*. Select *SCSI* as the virtual disk type.
Select *Create a new virtual disk*.
Specify the maximum size of this additional virtual disk.
This disk stores data in TrueNAS.
If desired, allocate the disk space immediately by setting *Allocate all disk space now*.
Select *Store virtual disk as single file*.
Finally, name and chose a location for the new virtual disk.

Repeat this process until enough disks are available for TrueNAS to create ideal storage pools
This depends on your specific TrueNAS use case.
See [Pool Creation]({{< relref "PoolCreate.md" >}}) for descriptions of the various pool ("vdev") types and layouts

## TrueNAS Installer

Select the virtual machine from the list and click *Play virtual machine*.
The machine starts and boots into the TrueNAS installer.
Select *Install/Upgrade*.

![InstallVMMain](/images/CORE/12.0/InstallVMMainScreen.png "Install VM Main Screen")

Select the desired disk for the boot environments.

![InstallVMMedia](/images/CORE/12.0/InstallVMMediaScreen.png "Install VM Media Screen")

Select *Yes*. **This will erase all contents on the disk**!

![InstallVMWarning](/images/CORE/12.0/InstallVMWarningScreen.png "Install VM Warning Screen")

Set a password for root login.

![InstallVMPassword](/images/CORE/12.0/InstallVMPasswordScreen.png "Install VM Password Screen")

Select *Boot via BIOS*.

![InstallVMBootMode](/images/CORE/12.0/InstallVMBootMode.png "Install VM Boot Mode Screen")

After the TrueNAS SCALE installation is complete, reboot the system.
The [Console Setup Menu]({{< relref "ConsoleSetupMenu.md" >}}) displays when the system boots successfully.
{{< /tab >}}

Congratulations, TrueNAS SCALE is now installed!

The next step is to boot up the system and [configure SCALE]({{< relref "Post-installConfiguration.md" >}}).
