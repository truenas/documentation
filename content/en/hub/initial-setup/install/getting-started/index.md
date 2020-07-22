---
title: "Physical Hardware"
description: "How to obtain and install TrueNAS on physical hardware."
weight: 1
---

{{< imgproc hardware-image Fill "1700x400" >}}
{{< /imgproc >}}

## Hardware Requirements

Although there are many system hardware configurations, the minimum
requirements must be met to use FreeNAS optimally.

* **RAM**: A absolute minimum of 8GB of RAM is required to run TrueNAS.
  A general recommendation is to use as much RAM as possible. This is
  because additional features in FreeNAS may use more RAM
  than the minimum.

* **Operating system device**: The TrueNAS operating system is installed
to at least one device that is separate from the storage disks. The
device can be an SSD or a small hard drive. Using a USB as a boot device is not
recommended. The are poor quality and usually wear out quicker than an SSD or
hard drive. The minimum space required to install TrueNAS is 8GB. However, it
is highly recommended to have at least 16GB.

* **Storage disks and controllers**: TrueNAS supports hot-pluggable
  SATA drives when AHCI is enabled in the BIOS. We recommend using
  [Western Digital](https://www.westerndigital.com/products/internal-drives#enterprise "Western Digital")
  NAS disk drives as storage drives. Always make sure to use a hard drive with conventional magnetic recording 
  (CMR) techology and avoid drives with shingled magnetic recording (SMR) technology for best results with TrueNAS and OpenZFS. 
  A list of supported disk controllers is found [here](https://www.freebsd.org/releases/11.3R/hardware.html#disk).
* **Network Interfaces**: The [Ethernet section](https://www.freebsd.org/releases/11.3R/hardware.html#ethernet)
  of the FreeBSD Hardware Notes indicates which interfaces are supported by each driver. 
  We recommend using Intel or Chelsio interfaces for best performance.

## Preparing the Install Media

The latest STABLE version of TrueNAS can be downloaded from
https://www.freenas.org/download-freenas-release/. Go to the webpage
and click *Download* to get the TrueNAS installer `.iso` file.

The TrueNAS installer can be run from a CD or USB stick. The method of
writing the installer to a device varies between operating systems.
These directions explain how to on Windows and Linux.

To run the installer from a CD, download your favorite CD burning
utility and burn the `.iso` file to the CD. Then, insert the CD into
your system and boot from the CD.

### Windows

To write the TrueNAS installer to a USB stick on Windows, plug the USB stick into
the system and use [Rufus](http://rufus.akeo.ie/). 
[Win32 Image Writer](https://launchpad.net/win32-image-writer/) has been tested as well and will write
the TrueNAS installer successfully, but is unable to write to a USB stick that already contains a 
TrueNAS installer.

The USB stick will not be recognized by Windows after the TrueNAS installer has been written to it.
If you wish to reclaim the USB stick after you are done with the installation of TrueNAS, 
you can use Rufus to write a "Non bootable" image, then remove and reinsert the USB stick. Alternatively,
"diskpart" can be used to clean the USB stick. Take great care with diskpart, as choosing the wrong disk
can wipe your Windows data.

### Linux

To write the TrueNAS installer to a USB stick on Linux, plug the USB stick into the
system and open a terminal. First, make sure the path of the USB stick
connected is correct. There are
[many ways](https://www.tecmint.com/find-usb-device-name-in-linux/ "Find USB Device")
to do this. Type

<pre>
lsblk -po +vendor,model
</pre>
and take note of the path to the USB stick, shown in the NAME column of lsblk.

Next, use [dd](https://en.wikipedia.org/wiki/Dd_(Unix)) to write
the installer to the USB stick. Type

<pre>
dd status=progress if=<i>path/to/.iso</i> of=<i>path/to/USB</i>
</pre>
in the CLI. If this results in a "permission denied" error, use "sudo dd" with the same parameters.
Take great care with dd, as choosing the wrong "of=" device path can wipe your Linux data.

## Installing TrueNAS

Now that the installer has been installed onto a device, it is time to
install TrueNAS onto the desired system. 
Insert the install media
and reboot or boot the system. Follow the necessary procedure to boot
into the UEFI/BIOS of the motherboard. 

Choose whether to boot in UEFI mode or legacy CSM/BIOS mode. When installing TrueNAS,
make the matching choice for the installation. Intel plans to
[remove legacy CSM/BIOS support](https://www.zdnet.com/article/intel-were-ending-all-legacy-bios-support-by-2020/) in
reference code for new chipsets by 2020.

If your system supports SecureBoot, you will need to turn it off or set
it to "Other OS" in order to be able to boot the install media.

Select the inserted device as the boot drive, exit, and reboot the system.

If the USB stick is not shown as a boot option, try a different USB slot,
and try USB 2.0 slots. Which slots are available for boot differs from
board to board.

After the system has booted into the installer, follow these steps.

{{< imgproc installer-install-menu Fit "1920x1080" >}}
Select <i>Install/Upgrade</i>.
{{< /imgproc >}}

{{< imgproc installer-drive-select Fit "1920x1080" >}}
Select the desired install drive.
{{< /imgproc >}}

{{< imgproc installer-drive-warning Fit "1920x1080" >}}
Select <i>Yes</i>
{{< /imgproc >}}

{{< imgproc installer-upgrade-or-fresh-install Fit "1920x1080" >}}
Select <i>Fresh Install</i> to do a clean install of the downloaded
version of TrueNAS. <b>This will erase the contents of the selected
drive</b>!
{{< /imgproc >}}

{{< imgproc installer-root-password Fit "1920x1080" >}}
Enter a password for the <code>root</code> user to log in to the web
interface.
{{< /imgproc >}}

After following the steps to install, reboot the system and remove the
install media.

Congratulations! TrueNAS is now installed.

## Bios Settings for AMD Ryzen processors

### First Generation "Zen" Processors

Community members have reported a stability issue on 1st Generation AMD Ryzen processors, that dooes not seem to exist with later generation processors.

Fixes reported by the Community are:
 + Updating the motherboard BIOS according to the Manufactures Recommendations
 + Disabling *CoolNQuiet*
 + Disabling *C-States* in the BIOS

### Second Generation Zen+ Processors

Community members have reported a stability issue on 2nd Generation AMD Ryzen "Zen+" processors, that dooes not seem to exist with later generation processors.

Fixes reported by the Community are:
 + Updating the motherboard BIOS according to the Manufactures Recommendations
 + Disabling *C6* in the BIOS

