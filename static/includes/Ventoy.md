&NewLine;

### Installing Using Ventoy

[Ventoy](https://www.ventoy.net/en/index.html) is an open-source tool TrueNAS users can use when creating a bootable USB or other local drive for an ISO image file when installing TrueNAS.
After installing Ventoy on a USB or local drive, users can copy the install media multiple times onto this same device with the Ventoy executable file.
Ventoy provides a directory tree that allows users to browse to or select the <file>iso </file>.

{{< expand "How does Ventoy work?" "v" >}}
The Ventoy executable, Ventoy2Disk.exe, is installed on a device such as a USB drive or a local drive.
The Ventoy executable creates partitions formatted with the exFAT file system on the device. It creates a master boot record (MBR) layout on the disk.

The default MBR layout consists of a minimum of three partitions:
* Part 1 - Main partition of 32 GB to 33 MB for the ISO or other file types.
* Part 2 - EFI system partition (ESP) of 32 MB, for the EFI boot and to hold the Ventoy files.
* Part 3 - MBR and gap partition of 1 MB, to hold the bootloader in Legacy BIOS system.

Ventoy 1.0.14, allows preserving 2 GB of space at the bottom of the disk where users can create part 3 or 4 during the Ventoy installation process.
To create this space in Windows, use the **Option > Partition Configuration** option.
In Linux, use the <code>-r</code> tag with the Ventoy install string.
{{< /expand >}}

Ventoy offers several ways to install their executables and to create bootable media. Always use the default method but if you experience issues, try these alternatives to the default mode:
* Default Ventoy2Disk.exe, to create bootable media on a USB drive

Alternative methods:
* Ventoy LiveCD for Windows
* Ventoy Vlnk for Windows and Linux
* Ventoy Memdisk mode for Windows and Linux
* Ventoy Grub2 mode for Linux

{{< expand "Ventoy2Disk.exe Installations" "v" >}}
To [install Ventoy](https://www.ventoy.net/en/doc_start.html) on a USB drive, download the installation package.
After extracting the Ventoy2Disk.exe file, run it. 
If using Windows GUI mode, select the device and click **Install** or **Update** when updating Ventoy on the drive to a later release.

Ventoy allows using Windows CLI to install the executable file. Refer to Ventoy documentation for more information.
After installing Ventoy on the USB drive, copy the TrueNAS <file>iso</file> to the USB.
When updating to a new TrueNAS release or clean-installing from an <file>iso</file>, copy the new <file>iso</file> to the USB with Ventoy installed.

Ventoy writes data to a USB drive during the installation and upgrades to the installed version.
It writes directly to the physical sector and modifies the MBR and partition table. 
Because of this, Windows systems might experience failures when using the [Ventoy2Disk.exe](https://www.ventoy.net/en/doc_ventoy2disk.html) executable to install Ventoy even after several retry attempts of unplugging and reinserting the USB does not resolve the issue.

Linux systems that use the <code>dd</code> command do not experience the failures instances in Windows installations.

Why does Ventoy fail this way in Windows systems?
Ventoy relies on modifying the MBR and partition table during installation, but Windows restrictions on modifying these components impact this operation.
The process Ventoy uses can be easily affected by other programs such as anti-virus software, system active protection processes, and others.

Ventoy provides two methods to get around the Windows system issue:
* Creating a <file>vtsi</file> file
* Using LiveCD

**Creating a VTSI File**

Enable **Option > Generate VTSI File** and click **Install** in the Ventoy UI to create a <file>VentoySparseImg.vtsi</file> file instead of writing to the disk.
After creating this file, use Rufus (3.15 or greater) to write the <file>vtsi</file> file to the disk to complete the installation of Ventoy.
This requires only selecting the corresponding disk and the <file>vtsi</file> file and leaving the other options in Rufus set to default values.

Rufus only supports USB or removable HDD with a USB interface. A local HDD is not supported. To use the removable HDD pres <kbd>Alt+F</kbd> to show the drive option.

The <file>vtsi</file> file can only be written to the corresponding disk but cannot be written to other disks.
{{< /expand >}}

{{< expand "Ventoy LiveCD Installations" "v" >}}
[Ventoy LiveCD](https://www.ventoy.net/en/doc_livecd.html) is only for Windows users, and only necessary when the Ventoy2.Disk.exe fails to install or upgrade.

The Ventoy LiveCD option provides several options for installing the Ventoy executable and adding a TrueNAS <file>iso</file>.
* Option 1 - Download Rufus and write VentoyLiveCD ISO to the USB drive.
* Option 2 - Format the USB drive with FAT32 and extract the LiveCD files to the USB drive
* Option 3 - Use VMWare to create a VM and add the USB drive as a disk in the VM

After installing Ventoy LiveCD to a device, copy the TrueNAS <file>iso</file> to the USB drive.

Option 1 requires [downloading Rufus](https://rufus.ie), then use Rufus to write the <file>iso</file> to the USB drive. After adding Ventoy LiveCD to the USB drive copy the TrueNAS release <file>iso</file> to the USB drive.

Insert the USB into a USB port on the TrueNAS server as described in the installation instructions.

Option 2 requires formatting the USB drive in FAT32 type by system command or third-party tool.
In Windows systems, USB drives with large capacity might not have a FAT32 formatting option.
In this case, create a small partition using <code>diskpart</code> and specifying a partition size of 4 GB, then format that partition with FAT32.
After formatting the USB drive, extract the Ventoy LiveCD files to the USB drive.

Option 3 is the best option when installing an <file>iso</file> in a VM. It requires VMWare to create a VM with a default configuration, and then delete the default drive before adding the USB drive as a disk for the VM.
{{< /expand >}}

{{< expand "VentoyVlnk.exe Installation" "v" >}}
Ventoy supports booting image files such as <file>iso</file> files from a local disk through Vlnks.
A *VLnk* is a file link in Ventoy that is similar to a softlink that creates a pointer or shortcut to the <file>iso</file> location.
Vlnks allow Ventoy to boot an image file such as an <file>iso</file> file stored on a local disk rather than copying that <file>iso</file> to the USB drive with Ventoy installed on it.
This is particularly useful when dealing with large image files where there is limited space on the USB drive. it saves time and space on the USB drive. 

Ventoy offers Windows and Linux methods to [create Vlnks](https://www.ventoy.net/en/doc_vlnk.html).
In Windows, Use the VentoyVlnk.exe to generate the Vlnk file by selecting the image on the local disk.
In Linux, run a script like VentoyVlnk.sh with a command like <code>sudo bash VentoyVlnk.sh -vc path/to/image.iso</code> to create the Vlnk file.

Vlnks can be used with Ventoy plugins, or like regular image files.

For TrueNAS, store the <file>iso</file> file on a local disk or network-connected drive apart from the USB drive where the VentoyVlnk.exe is installed.
Using VentoyVlnk.ext installed on a USB drive, create the Vlnk and specify the path to the <file>iso</file> file location.
Ventoy creates the Vlnk shortcut to the file (for example, *filename.vlnk.iso*) and location on the USB drive.
Ventoy uses the Vlnk to locate and boot from the original image file at the local drive location.
The TrueNAS system needs access to the location specified in the path, the local disk (or network disk) location.

If security requirements do not allow using Vlnks to a network disk, store the <file>iso</file> on a local disk on the TrueNAS server and create the Vlnk on the USB drive where VentoyVlnk.exe is installed.

Create a Vlnk file for the image file stored on a local disk. You can create the link file in the same directory as the VentoyVlnk.exe file.
You cannot specify the name of the vlnk file created by the VentoyVlnk.exe but you can use command-line mode to change it by entering <code>VentoyVlnk.exe -s</code>. A prompt allows you to save the path after selecting the <file>iso</file>.
Or use <code>VentoyVlnk.ex -i <i>filename</i>.iso -o <i>linkname</i>.vlnk.iso<code> to directly generate the Vlnk file; and no other interactions are nessesary.

Next copy the Vlnk file to the Ventoy USB and boot from it. You can put the Vlnk file in the root directory or a subdirectory.

Observe the rules in the [Ventoy documentation](https://www.ventoy.net/en/doc_vlnk.html) for naming Vlnk files.

To resolve issues with booting files in a local disk, refer to [Browse/Boot Files in Local Disk](https://www.ventoy.net/en/doc_browser.html).
{{< /expand >}}

{{< expand "Memdisk Mode Installation" "v" >}}
[Ventoy Memdisk mode](https://www.ventoy.net/en/doc_memdisk.html) is an alternative to the default Ventoy mode when Legacy BIOS modes have problems.
When booting, Ventoy normal mode only reads the <file>iso</file> file and just the content needed for boot.
Ventoy Memdisk Mode loads the whole ISO image file into memory and boots it.

Activate Ventoy Memdisk mode by pressing <kbd>Ctrl+d</kbd> to switch from default to Memdisk mode.
Press <kbd>Ctrl+d</kbd> again to return to default mode.

Only <file>iso</file> and some IMG files are supported. ISO file size is limited in Memdisk mode (usually less than 1 GB).
TrueNAS <file>iso</file> files typically fall under the 1 GB upper limit.

To use Memdisk mode, after installing Ventoy2Disk.exe on a USB drive and copying the <file>iso</file> with one of the available methods, press <kbd>Ctrl+d</kbd> before selecting the iso file in the Ventoy boot menu.
To return to default mode, press <kbd>Ctrl+d</kbd> again.
{{< /expand >}}

{{< expand "GRUB2 Installation" "v" >}}
[Ventoy GRUB2 mode](https://www.ventoy.net/en/doc_grub2boot.html) is an alternative for booting Linux <file>iso</file> files, and supports Legacy BIOS and UEFI.
It uses a different mechanism to boot an ISO file. It emulates the <file>iso</file> file as a CDROM to boot it.
Ventoy GRUB2 is like booting a CD with an optical drive except the physical drive is not there.

The system motherboard firmware must support this, especially in UEFI mode.
If the BIOS firmware is non-standard, Ventoy can have problems booting an <file>ios</file> file.

Only use GRUB2 mode if you experience problems with the default Ventoy mode.
Ventoy GRUB2 can only be used to boot Linux <file>iso</file> files that contain a grub2 configuration file.
TrueNAS <file>iso</file> files have a grub2 configuration file for booting that is required to use Ventoy GRUB2 mode.

To enter GRUB2 mode, press <kbd>Ctrl+r<kbd>. Press again to return to default mode.
{{< /expand >}}