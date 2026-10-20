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
   and click **PGP Signature** to download the Gnu Privacy Guard signature file.  This is a (<kbd>.gpg</kbd>) file.
   Open the [PGP Public key link](https://keyserver.ubuntu.com/pks/lookup?search=0xC8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946&fingerprint=on&op=index) and note the address in your browser and **Search results for** string.

3. Use one of the OpenPGP encryption tools mentioned above to import the public key and verify the PGP signature.

   Go to the <kbd>.iso</kbd> and the <kbd>.iso.gpg</kbd> download location and import the public key using the keyserver address and search results string:

   ```
   user@ubuntu /tmp> gpg --keyserver hkps://keyserver.ubuntu.com --recv-keys 0xc8d62def767c1db0dff4e6ec358eaa9112cf7946
   gpg: key 358EAA9112CF7946: public key "IX SecTeam <security-officer@ixsystems.com>" imported
   gpg: Total number processed: 1
   gpg:               imported: 1
   user@ubuntu /tmp>
   ```

   Use `gpg --verify` with the <kbd>.iso.gpg</kbd> signature file first and the <kbd>.iso</kbd> file second:

   ```
   user@ubuntu /tmp> gpg --verify TrueNAS-SCALE-25.10.7.iso.gpg TrueNAS-SCALE-25.10.7.iso
   gpg: Signature made Wed Sep  2 08:35:50 2026 EDT
   gpg:                using RSA key C8D62DEF767C1DB0DFF4E6EC358EAA9112CF7946
   gpg: Good signature from "IX SecTeam <security-officer@ixsystems.com>" [unknown]
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
The SHA256 checksum file for each TrueNAS release is published alongside the <kbd>.iso</kbd> file on the [TrueNAS Download page](https://www.truenas.com/download/) and in the [TrueNAS software CDN](https://download.truenas.com/).
{{< expand "Click here for the verification process." "v" >}}
The command to verify the checksum varies by operating system:

* BSD: use command `sha256 isofile`
* Linux: use command `sha256sum isofile`
* Mac: use command `shasum -a 256 isofile`
* Windows: in PowerShell, use command `Get-FileHash -Algorithm SHA256 isofile`. PowerShell shows the value in uppercase, and the comparison ignores case.

The value produced by running the command must match the value in the <kbd>.iso.sha256</kbd> checksum file for your release.
Different checksum values indicate a corrupted installer file that you should not use.
{{< /expand >}}

## Installing TrueNAS
You can install TrueNAS on either physical hardware or a virtual machine.

### Installing on Physical Hardware
TrueNAS is flexible and can run on any x86_64 compatible (Intel or AMD) processor.
TrueNAS requires at least 8 GB of RAM (more is better).
TrueNAS recommends a boot device of 20 GB or larger. The installer requires a drive of at least 8 GB and does not list smaller drives.

#### Preparing the Install File
Physical hardware requires writing the TrueNAS installer to a removable device, typically a USB drive.
This device is temporarily attached to the system to install TrueNAS to the system permanent boot device.

{{< expand "Writing the TrueNAS installer to a USB drive on Linux" "v" >}}
To write the TrueNAS installer to a USB drive on Linux, plug the USB drive into the system and open a terminal.

Start by making sure the USB drive connection path is correct.
There are many ways to do this in Linux, but a quick option is to enter the command `lsblk -po +vendor,model` and note the path to the USB drive.
This shows in the **NAME** column of the `lsblk` output.

Next, use the `dd` command to write the installer to the USB drive.

{{< hint type=warning >}}
Be very careful when using `dd`, as choosing the wrong `of=` device path can result in irretrievable data loss!
{{< /hint >}}

Enter this command `dd status=progress if=path/to/.iso of=path/to/USB` in the CLI.

If this results in a permission denied error, use the command `sudo dd` with the same parameters and enter the administrator password.
{{< /expand >}}

You can also use a tool to create the install media:
* Rufus for Windows
* balenaEtcher for Windows, macOS, and Linux
* Ventoy for Windows and Linux, to keep multiple ISO files on one USB drive

The following sections provide more information on a few of these options.

{{< include file="static/includes/Ventoy.md" >}}

{{< include file="static/includes/Rufus.md" >}}

{{< expand "Writing the TrueNAS installer to a USB drive on macOS" "v" >}}
To write the TrueNAS installer to a USB drive on macOS, plug the USB drive into the system and open a terminal.

Start by identifying the USB drive.
Enter `diskutil list` and note the identifier of the USB drive (for example, `/dev/disk4`).
The USB drive shows as `(external, physical)` and matches the size of the drive. Check the size carefully, because writing to the wrong disk erases it.
Unmount the stick with `diskutil unmountDisk /dev/disk4`, replacing `disk4` with your identifier.

{{< hint type=warning >}}
Be very careful when using `dd`, as choosing the wrong `of=` device path can result in irretrievable data loss!
{{< /hint >}}

Next, use the `dd` command to write the installer to the USB drive.
Enter `sudo dd if=path/to/.iso of=/dev/rdisk4 bs=1m`, replacing `path/to/.iso` with the path to the downloaded <kbd>.iso</kbd> file and `rdisk4` with your identifier, then enter the administrator password.
The `rdisk4` device path writes to the raw device, which is faster than `disk4`.
Press <kbd>Ctrl+T</kbd> to show progress while the command runs.

When the command finishes, macOS might show a message that the disk is not readable.
Click **Eject**, then remove the USB drive.
{{< /expand >}}

{{< expand "Using balenaEtcher" "v" >}}
[balenaEtcher](https://etcher.balena.io/) is a free, open-source application for Windows, macOS, and Linux that writes an <file>iso</file> file to a USB drive.

1. Download and install balenaEtcher.
2. Insert a USB drive. Etcher erases all data on the drive, so move any files you want to keep first.
3. Click **Flash from file** and select the TrueNAS <file>iso</file> file.
4. Click **Select target** and choose the USB drive. Check the drive name and size, because Etcher erases the selected target.
5. Click **Flash!** and wait for the write and validation to finish.
{{< /expand >}}

#### Installing From the Device Media
Before you begin:

* Locate the hotkey defined by the manufacturer of your motherboard to use in this process.
* Disable Secure Boot, or set it to **Other OS** if your firmware offers that option, so you can boot the install media.

With the installer added to a USB drive, install TrueNAS onto the desired system using the TrueNAS installer.

Insert the install media and restart or boot the system.
At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to boot into the motherboard UEFI/BIOS.

Choose to boot the install media in **UEFI mode** or **legacy CSM/BIOS mode**.
For Intel chipsets manufactured in 2020 or later, UEFI is likely the only option.

If your system supports Secure Boot and you have not disabled it or set it to **Other OS**, do it now, so you can boot the install media.

Select the install media in the boot menu, exit, and restart the system.
If the USB drive is not shown as a boot option, try a different USB slot.
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
If the system does not boot into the TrueNAS installer or into TrueNAS after the installation, there are several things you can check to resolve the situation:

* Confirm that Secure Boot is disabled or set to **Other OS** in the system firmware settings.
* Try a different USB port, preferably a USB 2.0 port directly on the motherboard, and a different USB drive.
* Check the boot menu for two entries for the same USB drive, one for UEFI and one for legacy BIOS. Try the other entry.
* Make sure the firmware boots in the same mode (UEFI or legacy BIOS) for the installer and for the installed system. If the system installed in legacy BIOS mode fails to boot on later restarts, check the boot mode and the **Legacy Boot** answer you gave during installation.
* Verify the <kbd>.iso</kbd> file using the [ISO verification](#iso-verification) methods and write the media again if the checksum does not match.
* Remove the install media after installation so the system boots from the TrueNAS boot device.

If a USB drive that previously held another image fails to boot after writing the installer, clean the drive before writing it again.
In Windows, open a command prompt as an administrator, run `diskpart`, then enter `list disk`, `select disk <number>`, and `clean`.
Be very careful to specify the correct disk when using `clean`, as it erases the selected disk!
{{< /expand >}}
{{< /expand >}}

### Installing on a Virtual Machine
Because TrueNAS is built and provided as an <kbd>.iso</kbd> file, it works on all virtual machine solutions (Proxmox, VMware, VirtualBox, Hyper-V, etc).
The procedure is similar for most hypervisors.

#### Minimum Virtual Machine Settings
Regardless of the virtualization application, use these minimum settings:

* RAM: at least 8192 MB (8 GB).
* DISKS: two virtual disks, one of at least 20 GB for the operating system and boot environments, and at least one additional virtual disk for data storage.
  Add more data disks to create the storage pool layout you want to use.
  See [Pool Creation]({{< ref "CreatingPools" >}}) for descriptions of the various pool ("vdev") types and layouts.
* NETWORK: Use bridged networking so the VM is reachable from your network. Other modes, such as NAT or host-only, limit access to the VM from your network.

#### Networking Checks for VMware
When installing TrueNAS in a VMware ESXi VM, double-check the virtual switch and port group.
A misconfigured virtual switch or port group can cause network connection errors for apps and virtual machines hosted inside the TrueNAS VM.
Set **Promiscuous Mode**, **MAC Address Changes**, and **Forged Transmits** to **Accept** on the virtual switch first, and then on the port group the VM uses.

If not using static IP addresses, configure your VM to use DHCP to assign IP addresses for seamless network connectivity.

#### Installing on a Generic Virtual Machine
{{< expand "Generic VM Installation Instructions" "v" >}}

1. Create a new virtual machine as usual, taking note of the following:

   * Point a bootable CD/DVD device in the virtual hardware to the TrueNAS installer image (this is usually an <kbd>.iso</kbd>).

   * Configure the virtual network card to allow your network to reach it.
     Bridged mode is optimal, as it treats the network card as if it is plugged into a simple switch on the existing network.

   * Identify the OS you plan to install on the VM. This is required by some products.
     TrueNAS is based on Debian, so select the latest **Debian 64-bit** option your hypervisor offers.
     If not available, try **Other Linux 64-bit** or **Other 64-bit**.

   * Use UEFI firmware if your hypervisor offers it.
     If you use legacy BIOS firmware, answer the **Legacy Boot** prompt in the installer accordingly.
     Disable Secure Boot for the VM.

   * Ensure the VM has sufficient memory and disk space as described in [Minimum Virtual Machine Settings](#minimum-virtual-machine-settings).
     Not all hypervisors allocate enough memory by default.

2. Add the additional virtual disks for data storage.

3. Boot the VM and install TrueNAS as described below.

4. After the installation completes, shut down the VM instead of restarting, and disconnect the CD/DVD from the VM before starting the VM again.

5. After restarting into TrueNAS, install guest tools if applicable for your hypervisor, or ensure they load on boot.
{{< /expand >}}

#### Using the TrueNAS Installer
Just as with installing TrueNAS on physical hardware, complete the installation in the VM by booting into the TrueNAS installer.

{{< expand "Using the TrueNAS Installer in a Virtual Machine" "v" >}}
Start the virtual machine.
The machine boots into the TrueNAS installer.

{{< include file="/static/includes/SCALEInstallerProcedure.md" >}}

After the TrueNAS installation completes, restart the system.
The [Console Setup menu]({{< ref "ConsoleSetupMenuScale" >}}) displays when the system boots successfully.
{{< /expand >}}

Congratulations, TrueNAS is now installed!

The next step is to configure TrueNAS network and general settings.
Experienced users can use the [Console Setup Menu]({{< ref "ConsoleSetupMenuScale" >}}) to configure network settings, but if you are unfamiliar with the Console setup menu and how network configuration works, we recommend using the TrueNAS UI to [configure settings]({{< ref "UIConfigurationSCALE" >}}).
TrueNAS uses DHCP to assign an IP address to the primary system interface and displays it at the top of the Console Setup menu screen. Use this IP address to log into the web UI.
