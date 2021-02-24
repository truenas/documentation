---
title: "Installing TrueNAS"
geekdocCollapseSection: true
weight: 10
---

{{< toc >}}

## ISO Verification

The iXsystems Security Team cryptographically signs TrueNAS ISO files so that users can verify the integrity of their downloaded file.
This article demonstrates how to verify an ISO file using the [Pretty Good Privacy (PGP)](https://tools.ietf.org/html/rfc4880) and [SHA256](https://tools.ietf.org/html/rfc6234) methods.

### PGP ISO Verification

You will need an OpenPGP encryption application for this method of ISO verification.
There are many different free applications available, but the OpenPGP group provides a list of available software for different operating systems at https://www.openpgp.org/software/.
The examples in this section show verifying the TrueNAS `.iso` using [gnupg2](https://gnupg.org/software/index.html) in a command prompt, but [Gpg4win](https://www.gpg4win.org/) is also a good option for Windows users.

To verify the `.iso` source, go to https://www.truenas.com/download-tn-core/ , expand the **Security** option,  and click **PGP Signature** to download the Gnu Privacy Guard (`.gpg`) signature file. Open the [PGP Public key link](http://keys.gnupg.net/pks/lookup?search=0xC8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946&fingerprint=on&op=index) and note the address in your browser and **Search results for** string .

Use one of the OpenPGP encryption tools mentioned above to import the public key and verify the PGP signature.

Go to the `.iso` and `.iso.gpg` download location and import the public key using the keyserver address and search results string:

```
q5sys@athena /tmp>  gpg --keyserver keys.gnupg.net --recv-keys 0xc8d62def767c1db0dff4e6ec358eaa9112cf7946
gpg: requesting key 12CF7946 from hkp server keys.gnupg.net
gpg: key 12CF7946: "IX SecTeam <security-officer@ixsystems.com>" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
q5sys@athena /tmp>
```

Use `gpg --verify` to compare the `.iso` and `.iso.gpg` files:

```
q5sys@athena /tmp>  gpg --verify TrueNAS-12.0-BETA2.1.iso.gpg TrueNAS-12.0-BETA2.iso
gpg: Signature made Thu Aug 27 10:06:02 2020 EDT using RSA key ID 12CF7946
gpg: Good signature from "IX SecTeam <security-officer@ixsystems.com>"
gpg: WARNING: This key is not certified with a trusted signature!
gpg:          There is no indication that the signature belongs to the owner.
Primary key fingerprint: C8D6 2DEF 767C 1DB0 DFF4  E6EC 358E AA91 12CF 7946
q5sys@athena /tmp>
```

This response means the signature is correct but still untrusted. Go back to the browser page that has the **PGP Public key** open and manually confirm that the key was issued for `IX SecTeam <security-officer@ixsystems.com>` (iX Security Team) on October 15, 2019 and has been signed by an iXsystems account.

### SHA256 Verification

The command to verify the checksum varies by operating system:

+ BSD: `sha256 isofile`
+ Linux: `sha256sum isofile`
+ Mac: `shasum -a 256 isofile`
+ Windows or Mac users can install additional utilities like [HashCalc](https://hashcalc.soft112.com/) or [HashTab](http://implbits.com/products/hashtab/).

The value produced by running the command must match the value shown in the `sha256.txt` file. Different checksum values indicate a corrupted installer file that should not be used.

## Installing TrueNAS

With the installer added to a device, you can now install TrueNAS onto the desired system.
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
![InstallUpgrade](/images/CORE/12.0/InstallMainScreen.png "Install Main Screen")
<br><br>

Select the desired install drive.
![InstallDrive](/images/CORE/12.0/InstallDriveScreen.png "Install Drive Screen")
<br><br>

Select <i>Yes</i>
![InstallWarning](/images/CORE/12.0/InstallWarningScreen.png "Install Warning Screen")
<br><br>

Select <i>Fresh Install</i> to do a clean install of the downloaded version of TrueNAS.
<b>This will erase the contents of the selected drive.</b>!
![InstallFresh](/images/CORE/12.0/InstallWarningScreen.png "Upgrade or Fresh Install Screen")
<br><br>

When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.
![InstallPartition](/images/CORE/12.0/InstallPartitionScreen.png "Install Partition Screen")
<br><br>

Enter a password for the <code>root</code> user to log in to the web interface.
![InstallPassword](/images/CORE/12.0/InstallPasswordScreen.png "Install Password Screen")
<br><br>

After following the steps to install, reboot the system and remove the install media.

Congratulations!
TrueNAS is now installed.

The next steps are to either wait for the system to boot and access the web interface or boot the system and configure the console setup menu.

## Installation Troubleshooting

If the system does not boot into TrueNAS, there are several things that can be checked to resolve the situation:

* Check the system BIOS and see if there is an option to change the USB emulation from CD/DVD/floppy to hard drive. If it still will not boot, check to see if the card/drive is UDMA compliant.
* If the system BIOS does not support EFI with BIOS emulation, see if it has an option to boot using legacy BIOS mode.
* If the system starts to boot but hangs with this repeated error message: `run_interrupt_driven_hooks: still waiting after 60 seconds for xpt_config`, go into the system BIOS and look for an onboard device configuration for a `1394 Controller`. If present, disable that device and try booting again.
* If the burned image fails to boot and the image was burned using a Windows system, wipe the USB stick before trying a second burn using a utility such as [Active@ KillDisk](https://www.killdisk.com/eraser.html). Otherwise, the second burn attempt will fail as Windows does not understand the partition which was written from the image file. Be very careful to specify the correct USB stick when using a wipe utility!

## Virtual Machine Application

Since TrueNAS is built and provided as an `.iso` file, it will work on
all virtual machine applications (VMware, VirtualBox, Citrix
Hypervisor, etc). In this document,
[VMware Workstation Player](https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html)
for Windows is being used.

{{< hint [info] >}}
**Recommended Minimum Virtual Machine Settings**\
What ever virtualization application is used, ensure these minimum
virtual machine settings are met.
* RAM: at least 8192MB (8GB)
* DISKS: one virtual disk with at least 8GB for the operating system
and boot environments and at least one additional virtual disk with
at least 4GB to be used as data storage.
* NETWORK: Use NAT, Bridged, or Host-only depending on your host network configuration.
{{< /hint >}}

{{< hint [info] >}}
**VMWare products and EFI boot mode:**\
A third party bug currently affects EFI (UEFI) booting on VMWare products.
TrueNAS should be installed in BIOS mode until this is resolved.
See iXSystems reference [NAS-107298](https://jira.ixsystems.com/browse/NAS-107298).
{{< /hint >}}

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

![InstallVMMain](/images/CORE/12.0/InstallVMMain.png "Install VM Main Screen")
<br><br>

Select the desired disk for the boot environments.

![InstallVMMedia](/images/CORE/12.0/InstallVMMedia.png "Install VM Media Screen")
<br><br>

Select *Yes*. **This will erase all contents on the disk**!

![InstallVMWarning](/images/CORE/12.0/InstallVMWarning.png "Install VM Warning Screen")
<br><br>

Set a password for root login.

![InstallVMPassword](/images/CORE/12.0/InstallVMPassword.png "Install VM Password Screen")
<br><br>

Select *\<Boot via BIOS>*.

![InstallVMBootMode](/images/CORE/12.0/InstallVMBootMode.png "Install VM Boot Mode Screen")
<br><br>

After the installation of TrueNAS has completed, reboot the system.
Congratulations, TrueNAS is now installed in a virtual machine.

{{< hint [info] >}}
**TrueNAS post-install for VMWare:**\
After installing TrueNAS in a VMware VM, it is recommended to configure and use the [vmx(4)](https://www.freebsd.org/cgi/man.cgi?query=vmx) drivers on TrueNAS.
To load the VMX driver when TrueNAS boots, log in to the web interface and go to **System** and then **Tunables**.
CLick **Add** and create a new tunable with variable `if_vmx_load`, value `"YES"`, and type `loader`, and save the tunable:
![InstallVMTunable](/images/CORE/12.0/InstallVMTunable.png "Tunable WebUI Screen")
{{< /hint >}}




