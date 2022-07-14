---
title: "Migrating from TrueNAS CORE"
description: "This article provides instructions on migrating from TrueNAS CORE to SCALE. Migration methods include using an ISO file or amanual update file."
weight: 20
aliases:
 - /docs/scale/gettingstarted/migratingfromcore/
tags:
- scalemigrate
- scaleinstall
---

{{< toc >}}

{{< hint danger >}}
Migrating TrueNAS from CORE to SCALE is a one-way operation. Attempting to activate or roll back to a CORE boot environment can break the system.
You cannot upgrade CORE systems with High Availability enabled (HA) to SCALE HA.
{{< /hint >}}

{{< hint danger >}}
#### Migrating GELI-encrypted Pools to SCALE
TrueNAS SCALE is Linux based, so it does not support FreeBSD GELI encryption.
If you have GELI-encrypted pools on your system that you plan to import into SCALE, you must migrate your data from the GELI pool to a non-GELI encrypted pool *before* migrating to SCALE.
{{< /hint >}}

## Migration Methods

You can migrate from CORE to SCALE using an <file>iso</file> file or a manual update file.
### ISO File Method

Start by saving the [SCALE ISO file](https://www.truenas.com/download-tn-scale/) to a USB drive (see the **Physical Hardware tab** in [Installing SCALE]({{< relref "InstallingSCALE.md" >}})). Plug the USB drive into the CORE system that you want to sidegrade and boot or reboot the system. 

At the motherboard splash screen, use the hotkey defined by your motherboard manufacturer to select a boot device, then select the USB drive with the SCALE <file>.iso<file>.

When the SCALE console setup screen appears, select **Install/Upgrade**.

![SCALEUpgrade1](/images/SCALE/SCALEUpgrade1.png "Install/Upgrade SCALE")

The installer asks if you want to preserve your existing configuration or start with a fresh installation. We recommend selecting **Upgrade Install** when migrating from CORE to SCALE to keep your configuration data. Then select **Install in new boot environment**.

![SCALEUpgrade2](/images/SCALE/SCALEUpgrade2.png "Preserve Existing Configuration")

![SCALEUpgrade3](/images/SCALE/SCALEUpgrade3.png "Install in new boot environment")

{{< hint warning>}}
Although TrueNAS attempts to keep most of your CORE configuration data when upgrading to SCALE, some CORE-specific items do not transfer.
GELI encrypted pools, NIS data, jails, tunables, and boot environments do not migrate from CORE to SCALE.
AFP shares also do not transfer, but you can migrate them into an SMB share with AFP compatibility enabled. 
Init/shutdown scripts transfer, but can break. Review them before use.
The CORE netcli utility is also swapped for a new CLI utility to use for the Console Setup Menu and other commands issued in a CLI.
{{< /hint >}}

After choosing to install in new boot environment, the installer warns that SCALE installs into the boot pool previously used for CORE. Select **Yes**.

![SCALEUpgrade4](/images/SCALE/SCALEUpgrade4.png "Proceed with the upgrade")

Once the installation completes, reboot the system and remove the USB with the SCALE <file>.iso<file> file.

When TrueNAS SCALE boots, you might need to [use the Shell to configure networking interfaces]({{< relref "/SCALE/SCALEUIReference/Network/_index.md" >}}) to enable GUI accessibility.

### Manual Update File Method

Start by downloading the [SCALE manual update file](https://www.truenas.com/download-truenas-scale/).
Confirm that the TrueNAS system is on the latest public, 12.0-U8 or better, release.

Click **CHECK FOR UPDATES** in the **System Information** card on the **Dashboard** or go to **System > Update**.

Click **INSTALL MANUAL UPDATE FILE**.
![SCALEManualSidegrade](/images//SCALE/SidegeadeInstallManualUpdate.png "Install the Manual Upgrade")

Click **SAVE CONFIGURATION** to download a backup file that can restore the system configuration in the event something goes wrong with the migration.
This is recommended but it not required.
![SCALEConfigSidegrade](/images/SCALE/SidegradeSaveConfig.png "Save the Config file")

Select a **Temporary Storage Location** (either **Memory Device** or a **Pool**) for the manual update file.
Click **Choose File** and select the <file>TrueNAS-SCALE.update</file> file you downloaded.
![SCALEFileSidegrade](/images/SCALE/SidegradeSetInstallFile.png "Settings for the Manual Upgrade")
Then click **APPLY UPDATE**.
  
After the update completes, reboot the system.
![SCALESidegradeReboot](/images/SCALE/SidegradeRestart.png  "Reboot to Finish")
  
## Parallel SCALE CLI Commands

The following CLI commands are available after migrating from CORE to SCALE. The CORE equivalent CLI commands are for reference. These commands are for diagnostic use. Making configuration changes using the SCALE OS CLI is not recommended.

| CORE CLI Comand | SCALE CLI Command | Description |
|-----------------|-------------------|-------------|
| [camcontrol devlist](https://www.freebsd.org/cgi/man.cgi?query=camcontrol&sektion=8) | [lshw -class disk -short sfdisk -l](https://linux.die.net/man/1/lshw) | Use `lshw -class disk -short sfdisk -l` to get detailed information on hardware (disk) configuration that includes memory, mainboard and cache cofiguration, firmware version, CPU version and speed. |
| [geom disk list](https://www.freebsd.org/cgi/man.cgi?geom(4)) | [lsblk](https://manpages.debian.org/testing/util-linux/lsblk.8.en.html), [hdparm](https://manpages.debian.org/bullseye/hdparm/hdparm.8.en.html) | Use `lsblk` to lists block devices or `hwparm` to get or set SATA/IDE device parameters. |
| [glabel status](https://www.freebsd.org/cgi/man.cgi?glabel(8)) | [blkid](https://linux.die.net/man/8/blkid) | Use `blkid` to locate or print block device attributes. |
| [gstat -pods](https://www.freebsd.org/cgi/man.cgi?gstat(8)) | [iostat](https://manpages.debian.org/testing/sysstat/iostat.1.en.html)<br> iostat -dtx | Use `iostat -dtx` to display the device utiilization report with the time for each report displayed and includes extended statistics. |
| [ifconfig](https://www.freebsd.org/cgi/man.cgi?ifconfig(8))<br>ifconfig -l | [ip addr](https://linux.die.net/man/8/ip) <br>[ifconfig -s](https://linux.die.net/man/8/ifconfig) <br> [lshw -class network -short](https://linux.die.net/man/1/lshw) <br>[ethtool *devname*](https://linux.die.net/man/8/ethtool) | Use `ip addr` to show or manipulate routing, devices, or policy routing and tunnels. <br>Use `ifconfig -s` cofigure a network interface. <br>Use `lshw -class network -short` to display a network device tree showing hardware paths. <br>Use `ethtool *devnam*` to query or control network driver and hardware settings. |
| [netstat -i](https://www.freebsd.org/cgi/man.cgi?query=netstat&sektion=1) | [ifstat -i](https://linux.die.net/man/1/ifstat) | Use `ifstat -i` to get interface statisitcs on a list of interfaces to monitor. |
| [nvmecontrol devlist](https://www.freebsd.org/cgi/man.cgi?query=nvme&sektion=4) | [nvme list](https://manpages.org/nvme-list-ctrl) | Use `nvme list` to identify the list of NVMe devices on your system. |
| [pmcstat](https://www.freebsd.org/cgi/man.cgi?query=pmcstat&sektion=8) | [profile-bpfcc](https://manpages.debian.org/unstable/bpfcc-tools/profile-bpfcc.8.en.html) | Use `profile-bpfcc` to get a CPU usage profile obtaine by sampling stack traces. |
| [systat -ifstat](https://www.freebsd.org/cgi/man.cgi?query=systat&sektion=1&manpath=FreeBSD+4.9-RELEASE) | [iftop](https://linux.die.net/man/8/iftop) <br>[netstat](https://linux.die.net/man/8/netstat) | Use `iftop` to display interface bandwidth usage by host and `netstat` to print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships. |
| [top -SHIzP](https://www.freebsd.org/cgi/man.cgi?top(1)) | [top -Hi](https://linux.die.net/man/1/top) | Use `top -Hi` to display Linux tasks for all individual threads and starts with the last remembered *i* state reversed. |
| [vmstat -P](https://www.freebsd.org/cgi/man.cgi?query=vmstat&apropos=0&sektion=0&manpath=2.8+BSD&format=html) | [sar -P ALL](https://linux.die.net/man/1/sar) | Use `sar -P ALL` to get reports with statistics for each individual processor and global statistics among all processors. |

{{< taglist tag="scalemigrate" limit="10" >}}
{{< taglist tag="scaleinstall" limit="10" title="Related Installation Articles" >}}