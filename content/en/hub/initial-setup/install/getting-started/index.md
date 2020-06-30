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

* **RAM**: A absolute minimum of 8GB of RAM is required to run FreeNAS.
  A general recommendation is to use as much RAM as possible. This is
  because additional features in FreeNAS may use more RAM
  than the minimum.

* **Operating system device**: The FreeNAS operating system is installed
to at least one device that is separate from the storage disks. The
device can be an SSD, a small hard drive, or a USB stick. The minimum
space required to install FreeNAS is 8GB. However, it is highly
recommended to have at least 16GB.

* **Storage disks and controllers**: FreeNAS supports hot-pluggable
  SATA drives when AHCI is enabled in the BIOS. We recommend using
  [Western Digital](https://www.westerndigital.com/products/internal-drives#enterprise "Western Digital")
  NAS disk drives as storage drives. Always make sure to use a hard drive with conventional magnetic recording 
  (CMR) techology and avoid drives with shingled magnetic recording (SMR) technology for best results with TrueNAS and OpenZFS. 
  A list of supported disk controllers is found [here](https://www.freebsd.org/releases/11.3R/hardware.html#disk).
* **Network Interfaces**: The [Ethernet section](https://www.freebsd.org/releases/11.3R/hardware.html#ethernet)
  of the FreeBSD Hardware Notes indicates which interfaces are supported by each driver. 
  We recommend using Intel or Chelsio interfaces for best performance.

## Preparing the Install Media

The latest STABLE version of FreeNAS can be downloaded from
https://www.freenas.org/download-freenas-release/. Go to the webpage
and click *Download* to get the FreeNAS installer `.iso` file.

The FreeNAS installer can be run from a CD or USB stick. The method of
writing the installer to a device varies between operating systems.
These directions explain how to on Windows and Linux.

To run the installer from a CD, download your favorite CD burning
utility and burn the `.iso` file to the CD. Then, insert the CD into
your system and boot from the CD.

### Windows

To write the FreeNAS installer to a USB on Windows, plug the USB into
the system and use [Image Writer](https://launchpad.net/win32-image-writer/)
or [Rufus](http://rufus.akeo.ie/).

### Linux

To write the FreeNAS installer to a USB on Linux, plug the USB into the
system and open a terminal. First, make sure the path of the USB
connected is correct. There are
[many ways](https://www.tecmint.com/find-usb-device-name-in-linux/ "Find USB Device")
to do this. Type

<pre>
lsblk -po +vendor,+model
</pre>
and take note of the path to the USB.

Next, use [dd](https://en.wikipedia.org/wiki/Dd_(Unix)) to write
the installer to the USB. Type

<pre>
dd status=progress if=<i>path/to/.iso</i> of=<i>path/to/USB</i>
</pre>
in the CLI.

## Installing FreeNAS

Now that the installer has been installed onto a device, it is time to
install FreeNAS onto the desired system. Insert the install media
and reboot or boot the system. Follow the necessary procedure to boot
into the BIOS of the motherboard. Select the inserted device as the boot
drive, exit, and reboot the system.

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
version of FreeNAS. <b>This will erase the contents of the selected
drive</b>!
{{< /imgproc >}}

{{< imgproc installer-root-password Fit "1920x1080" >}}
Enter a password for the <code>root</code> user to log in to the web
interface.
{{< /imgproc >}}

After following the steps to install, reboot the system and remove the
install media.

Congratulations! TrueNAS is now installed.
