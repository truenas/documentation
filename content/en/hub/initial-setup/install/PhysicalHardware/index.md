---
title: "Physical Hardware"
description: "How to obtain and install TrueNAS on physical hardware."
weight: 1
---

{{< imgproc hardware-image Fill "1700x400" >}}
{{< /imgproc >}}

## Hardware Requirements

The following is a list of minimum hardware requirements to install and run TrueNAS.
It is recommended to examine your specific storage and sharing requirements and install TrueNAS on hardware that exceeds these requirements, to best meet your performance needs.

* **RAM**: An absolute minimum of 8GB of RAM is required to run TrueNAS.
  When your system will have more than *8* storage drives, add an additional *1 Gb of RAM for each additional drive*.
  For example, a TrueNAS system that has 12 storage drives will need 12 Gb of RAM, at minimum.

* **Operating system device**: The TrueNAS operating system requires 8 GB of space on a device that is separate from the storage disks.
  It is strongly recommended to use a 16 GB or greater SSD or hard drive for the operating system.
  Using a USB stick as a boot device is not recommended, because the build quality or device lifetime varies too much to reliably use as the operating system device.

* **Storage disks and controllers**: TrueNAS supports hot-pluggable SATA drives when AHCI is enabled in the BIOS.
  TrueNAS is predominantly tested using [Western Digital](https://www.westerndigital.com/products/internal-drives#enterprise "Western Digital") hard drives.
  Therefore, we recommend **WD Red Plus** drives when the system has *fewer than 8* storage drives, **WD Red Pro** drives when the system has *8-16* drives, and **WD Ultrastar** drives for systems with *more than 16* storage drives.
  Always make sure to use a hard drive with conventional magnetic recording (CMR) techology and avoid drives with shingled magnetic recording (SMR) technology for best results with TrueNAS and OpenZFS. 
  A list of supported disk controllers is found in the [FreeBSD Hardware Notes](https://www.freebsd.org/releases/12.1R/hardware.html#support).
* **Network Interfaces**: The *Ethernet* section of the [FreeBSD Hardware Notes](https://www.freebsd.org/releases/12.1R/hardware.html#support) indicates which interfaces are supported by each driver.
  We recommend using Intel or Chelsio interfaces for best performance.

## BIOS Settings for AMD Ryzen processors

If the system that will have TrueNAS installed uses an AMD "Zen" processer, you might want to update your motherboard BIOS or change a few settings before starting the installation process.

### First Generation Zen Processors

Community members have reported a stability issue on 1st Generation AMD Ryzen processors that does not appear to occur with later generation processors.

Fixes reported by the community are:
 + Updating the motherboard BIOS according to the manufacturer recommendations
 + Disabling *CoolNQuiet*
 + Disabling *C-States* in the BIOS

### Second Generation Zen+ Processors

Community members have reported a stability issue on 2nd Generation AMD Ryzen "Zen+" processors that does not appear to occur with later generation processors.

Fixes reported by the Community are:
 + Updating the motherboard BIOS according to the manufacturer recommendations
 + Disabling *C6* in the BIOS

## Preparing the Install Media

The latest STABLE version of TrueNAS CORE can be downloaded from https://www.truenas.com/download-tn-core/.
Open the link and click **Download Now** to save the TrueNAS installer `.iso` file to your local system.

The TrueNAS installer can be run from a CD or USB stick.
The method of writing the installer to a device varies between operating systems.
The following sections explain how to write the installer when you have either Windows or a generic Linux operating system installed.

To use the installer with a CD, download your favorite CD burning utility and burn the `.iso` file to the CD.
Then insert the CD into the TrueNAS system and boot from the CD.

### Windows

To write the TrueNAS installer to a USB stick on Windows, plug the USB stick into the system and use [Rufus](http://rufus.akeo.ie/) to burn the *.iso* file to the stick.
[Win32 Image Writer](https://launchpad.net/win32-image-writer/) can also burn write the TrueNAS installer, but only when the USB stick does not have a previous TrueNAS installer.

The USB stick will not be recognized by Windows after the TrueNAS installer has been written to it.
To reclaim the USB stick after installing TrueNAS, use Rufus to write a "Non bootable" image, then remove and reinsert the USB stick.
Alternately, [diskpart](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart) can be used to clean the USB stick.
Be very careful with `diskpart`, as choosing the wrong disk can result in irretrievable data loss!

### Linux

To write the TrueNAS installer to a USB stick on Linux, plug the USB stick into the system and open a terminal.
First, make sure the USB stick connection path is correct.
There are [many ways](https://www.tecmint.com/find-usb-device-name-in-linux/ "Find USB Device") to do this in Linux.
Type <pre>lsblk -po +vendor,model</pre> and note the path to the USB stick, shown in the NAME column of `lsblk`.

Next, use [dd](https://en.wikipedia.org/wiki/Dd_(Unix)) to write the installer to the USB stick.
Type <pre>dd status=progress if=<i>path/to/.iso</i> of=<i>path/to/USB</i></pre> in the CLI.
If this results in a "permission denied" error, use `sudo dd` with the same parameters and enter your administrator password.
Be very careful when using `dd`, as choosing the wrong "of=" device path can result in irretrievable data loss!

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

{{< imgproc InstallerConsoleSetup Fit "1920x1080" >}}
Select <i>Install/Upgrade</i>.
{{< /imgproc >}}

{{< imgproc InstallerDestinationMedia Fit "1920x1080" >}}
Select the desired install drive.
{{< /imgproc >}}

{{< imgproc InstallerEraseDisk Fit "1920x1080" >}}
Select <i>Yes</i>
{{< /imgproc >}}

{{< imgproc InstallerUpgradeChoice Fit "1920x1080" >}}
Select <i>Fresh Install</i> to do a clean install of the downloaded version of TrueNAS.
<b>This will erase the contents of the selected drive</b>!
{{< /imgproc >}}

{{< imgproc InstallerSwapPartition Fit "1920x1080" >}}
When the operating system device has enough additional space, you can choose to allocate some space for a swap partition to improve performance.
{{< /imgproc >}}

{{< imgproc InstallerRootPassword Fit "1920x1080" >}}
Enter a password for the <code>root</code> user to log in to the web interface.
{{< /imgproc >}}

After following the steps to install, reboot the system and remove the install media.

Congratulations!
TrueNAS is now installed.

The next steps are to either wait for the system to boot and [access the web interface](/hub/initial-setup/login/) or boot the system and configure the [console setup menu](/hub/initial-setup/cli-menu/).
