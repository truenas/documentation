---
title: "Migrating from TrueNAS CORE"
description: "This article provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO file or a manual update file."
weight: 20
aliases:
 - /scale/gettingstarted/migratingfromcore/
tags:
- scalemigrate
- scaleinstall
---

{{< toc >}}

## Migration Overview

This article provides information and instructions for migrating from TrueNAS CORE to SCALE.

{{< hint danger >}}
Migrating TrueNAS from CORE to SCALE is a one-way operation. Attempting to activate or roll back to a CORE boot environment can break the system.

You cannot upgrade CORE Enterprise systems with High Availability enabled (HA) to SCALE Enterprise HA.
Enterprise customers should contact iXsystems Support for assistance with migrating or upgrading HA systems.
{{< /hint >}}

TrueNAS SCALE is Linux based, so it does not support FreeBSD GELI encryption.
If you have GELI-encrypted pools on your system that you plan to import into SCALE, you must migrate your data from the GELI pool to a non-GELI encrypted pool *before* migrating to SCALE.

TrueNAS SCALE validates the system certificates when a CORE system migrates to SCALE. When a malformed certificate is found, SCALE generates a new self-signed certificate to ensure system accessibility.

{{< hint warning >}}
Plugins do not migrate from CORE to SCALE. Save the configuration information for your plugin and back up stored data. 
After completing the SCALE install, add the application using the **Apps** option. 
If your CORE plugin is not listed as an available application in SCALE, use the **Launch Docker Image** option to add it as and application and import data from the backup into a new SCALE dataset for the application.
{{< /hint >}}

### Migration Methods
You can migrate from CORE to SCALE through an upgrade or clean install using and <kbd>iso</kbd> file, or in some CORE 13.0 release you can migrate using the CORE UI Upgrade function with the SCALE update file downloaded from the website. 
The easiest method is to upgrade from the CORE system UI, but your system must be at a CORE 13.0 release to use this method. 
Note, the CORE 13.0-U3 release might not work when updating from the CORE UI using the Update function.

If you do a clean-install with a SCALE <kbd>iso</kbd> file, you need to reconfigure your CORE settings in SCALE and import your data.

## Preparing for Migration
{{< hint danger >}}
CORE Enterprise and Enterprise (HA) customers should not attempt to migrate from CORE to SCALE Enterprise (HA) by themselves. Contact iXsystems Support for assistance!
{{< /hint >}}
Before you attempt to migrate your CORE system to SCALE:

1. Upgrade your CORE system to the most recent publicly-available CORE version. 
   TrueNAS systems on 12.0x or lower should update to the latest CORE 13.0 release (e.g 13.0-U2 or U4 when released) prior to migrating to SCALE. 
   CORE systems at release 13.0-Ux can use the [iso upgrade](#migrating-using-an-iso-file-to-upgrade) method to migrate to SCALE. 
   Lower releases of CORE (12.0-Ux) must do a clean install with the SCALE <kbd>iso</kbd> file.
2. Verify the root user is not locked. 
   Go to **Accounts > Users**, use **Edit** for the root user to view current settings and confirm **Lock User** is not selected.
3. After updating to the latest publicly available release of CORE, download your system configuration file and a debug file. 
   Keep these files in a safe place in case you need to revert back to CORE with a clean install of the CORE <kbd>iso</kbd> file.
4. Back up your stored data files. 
   If you need to do a clean install with the SCALE <kbd>iso</kbd> file, you can import your data into SCALE.
5. Write down your network configuration information to use if you do a clean install of SCALE from an <kbd>iso</kbd> file.
   {{< include file="/_includes/NetworkInstallRequirementsSCALE.md" type="page" >}}

{{< hint warning >}}
Plugins to not migrate to SCALE. Save plugin (or jails) configuration information and back up stored data. 
After completing the SCALE migration or installation, add the application using the **Apps** screen. 
If the CORE plugin is not listed as an available application in SCALE, use the **Launch Docker Image** option to add it and import data from the backup into a new SCALE dataset.
{{< /hint >}}

Download the SCALE [SCALE ISO file](https://www.truenas.com/download-tn-scale/) or the SCALE upgrade file and save it to your computer or a USB drive (see the **Physical Hardware tab** in [Installing SCALE]({{< relref "InstallingSCALE.md" >}})) to use if you upgrade from the physical system.  

## Migrating Using an ISO File to Upgrade
{{< hint danger >}}
Upgrading from CORE to SCALE is a one way operation!
{{< /hint >}}

Start by plugging the USB drive with the saved [SCALE ISO file](https://www.truenas.com/download-tn-scale/) into a USB port on the physical CORE system that you want to sidegrade and then boot or reboot the system. 

At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to select a boot device, then select the USB drive with the SCALE <file>.iso<file>.

When the SCALE console setup screen displays, select **Install/Upgrade**.

![SCALEUpgrade1](/images/SCALE/SCALEUpgrade1.png "Install/Upgrade SCALE")
 
Next, select your TrueNAS boot disk.
 
![SCALEUpgrade02](/images/SCALE/ScaleSelectBootDrive.png "Select the boot drive")

The installer asks if you want to preserve your existing configuration or start with a fresh installation. We recommend selecting **Upgrade Install** when migrating from CORE to SCALE to keep your configuration data. Then select **Install in new boot environment**.

![SCALEUpgrade2](/images/SCALE/SCALEUpgrade2.png "Preserve Existing Configuration")

![SCALEUpgrade3](/images/SCALE/SCALEUpgrade3.png "Install in new boot environment")

{{< hint warning>}}
Although TrueNAS attempts to keep most of your CORE configuration data when upgrading to SCALE, some CORE-specific items do not transfer. 
GELI encrypted pools, NIS data, plugins and jails, tunables, and boot environments do not migrate from CORE to SCALE.

VM storage and its basic configuration transfer over during a migration, but you need to double-check the VM configuration and the network interface settings specifically before starting the VM.

AFP shares also do not transfer, but you can migrate them into an SMB share with AFP compatibility enabled. 

Init/shutdown scripts transfer, but can break. Review them before use.

The CORE `netcli` utility is also swapped for a new CLI utility to use for the [Console Setup Menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) and other commands issued in a CLI.
{{< /hint >}}

After choosing to install in new boot environment, the installer warns that SCALE installs into the boot pool previously used for CORE. Select **Yes**.

![SCALEUpgrade4](/images/SCALE/SCALEUpgrade4.png "Proceed with the upgrade")

After the installation completes, reboot the system and remove the USB with the SCALE <file>.iso<file> file.

When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "/SCALE/SCALEUIReference/Network/_index.md" >}}) to enable GUI accessibility.

## Migrating using the CORE UI Manual Update 

This method of using the CORE UI Manual Update to migrate using a SCALE update file might fail if using CORE 13.0-U3 but if using CORE 13.0-U2 it should work. 
If it fails, retry using the [iso file upgrade process](#migrating-using-an-iso-file-to-upgrade) in the section above.

Take all the preparation steps mentioned in [Preparing for Migration](#preparing-for-migration).
{{< hint danger >}}
Do not use this method to migrate CORE Enterprise (HA) to SCALE Enterprise (HA)! Contact iXsystems Support for assistance!
{{< /hint >}}

Start by downloading the [SCALE manual update file](https://www.truenas.com/download-truenas-scale/).
Confirm that the TrueNAS CORE system is on the latest public release, 13.0-U3 or better.

Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

Click **INSTALL MANUAL UPDATE FILE**.
![SCALEManualSidegrade](/images/SCALE/SidegeadeInstallManualUpdate.png "Install the Manual Upgrade")

Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.
This is recommended but it not required.
![SCALEConfigSidegrade](/images/SCALE/SidegradeSaveConfig.png "Save the Config file")

Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
Click **Choose File** and select the <kbd>TrueNAS-SCALE.update</kbd> file you downloaded.

![SCALEFileSidegrade](/images/SCALE/SidegradeSetInstallFile.png "Settings for the Manual Upgrade")

Then click **APPLY UPDATE**.
  
After the update completes, reboot the system if it does not reboot automatically.

![SCALESidegradeReboot](/images/SCALE/SidegradeRestart.png  "Reboot to Finish")

## Migrating by Clean Install

If it becomes necessary to do a clean install to migrate your CORE system to SCALE using the <kbd>iso</kbd> file, follow the instructions in the [Install]({{< relref "/SCALE/GettingStarted/Install/_index.md" >}}) articles. 

If you are an Enterprise customer please contact iXsupport for assistance.

## Parallel SCALE CLI Commands

The following CLI commands are available after migrating from CORE to SCALE. 
{{< expand "List of CLI Commands" "v" >}}
The CORE equivalent CLI commands are for reference. These commands are for diagnostic use. Making configuration changes using the SCALE OS CLI is not recommended.

| CORE CLI Command | SCALE CLI Command | Description |
|-----------------|-------------------|-------------|
| [camcontrol devlist](https://www.freebsd.org/cgi/man.cgi?query=camcontrol&sektion=8) | [lshw -class disk -short sfdisk -l](https://linux.die.net/man/1/lshw) | Use `lshw -class disk -short sfdisk -l` to get detailed information on hardware (disk) configuration that includes memory, mainboard and cache configuration, firmware version, CPU version and speed. |
| [geom disk list](https://www.freebsd.org/cgi/man.cgi?geom(4)) | [lsblk](https://manpages.debian.org/testing/util-linux/lsblk.8.en.html), [hdparm](https://manpages.debian.org/bullseye/hdparm/hdparm.8.en.html) | Use `lsblk` to lists block devices or `hwparm` to get or set SATA/IDE device parameters. |
| [glabel status](https://www.freebsd.org/cgi/man.cgi?glabel(8)) | [blkid](https://linux.die.net/man/8/blkid) | Use `blkid` to locate or print block device attributes. |
| [gstat -pods](https://www.freebsd.org/cgi/man.cgi?gstat(8)) | [iostat](https://manpages.debian.org/testing/sysstat/iostat.1.en.html)<br> iostat -dtx | Use `iostat -dtx` to display the device utiilization report with the time for each report displayed and includes extended statistics. |
| [ifconfig](https://www.freebsd.org/cgi/man.cgi?ifconfig(8))<br>ifconfig -l | [ip addr](https://linux.die.net/man/8/ip) <br>[ifconfig -s](https://linux.die.net/man/8/ifconfig) <br> [lshw -class network -short](https://linux.die.net/man/1/lshw) <br>[ethtool *devname*](https://linux.die.net/man/8/ethtool) | Use `ip addr` to show or manipulate routing, devices, or policy routing and tunnels. <br>Use `ifconfig -s` configure a network interface. <br>Use `lshw -class network -short` to display a network device tree showing hardware paths. <br>Use `ethtool *devnam*` to query or control network driver and hardware settings. |
| [netstat -i](https://www.freebsd.org/cgi/man.cgi?query=netstat&sektion=1) | [ifstat -i](https://linux.die.net/man/1/ifstat) | Use `ifstat -i` to get interface statisitcs on a list of interfaces to monitor. |
| [nvmecontrol devlist](https://www.freebsd.org/cgi/man.cgi?query=nvme&sektion=4) | [nvme list](https://manpages.org/nvme-list-ctrl) | Use `nvme list` to identify the list of NVMe devices on your system. |
| [pmcstat](https://www.freebsd.org/cgi/man.cgi?query=pmcstat&sektion=8) | [profile-bpfcc](https://manpages.debian.org/unstable/bpfcc-tools/profile-bpfcc.8.en.html) | Use `profile-bpfcc` to get a CPU usage profile obtaine by sampling stack traces. |
| [systat -ifstat](https://www.freebsd.org/cgi/man.cgi?query=systat&sektion=1&manpath=FreeBSD+4.9-RELEASE) | [iftop](https://linux.die.net/man/8/iftop) <br>[netstat](https://linux.die.net/man/8/netstat) | Use `iftop` to display interface bandwidth usage by host and `netstat` to print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships. |
| [top -SHIzP](https://www.freebsd.org/cgi/man.cgi?top(1)) | [top -Hi](https://linux.die.net/man/1/top) | Use `top -Hi` to display Linux tasks for all individual threads and starts with the last remembered *i* state reversed. |
| [vmstat -P](https://www.freebsd.org/cgi/man.cgi?query=vmstat&apropos=0&sektion=0&manpath=2.8+BSD&format=html) | [sar -P ALL](https://linux.die.net/man/1/sar) | Use `sar -P ALL` to get reports with statistics for each individual processor and global statistics among all processors. |
{{< /expand >}}
{{< taglist tag="scalemigrate" limit="10" >}}
{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}
