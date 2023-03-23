---
title: "Parallel CLI Commands"
description: "This article provides a list of CLI commands that work in SCALE."
weight: 45
aliases:
 - /scale/gettingstarted/migratingfromcore/
tags:
- scalemigrate
- scaleconfigure
---


## Parallel SCALE CLI Commands

The following CLI commands are available after migrating from CORE to SCALE. 

The CORE equivalent CLI commands are for reference. These commands are for diagnostic use. Making configuration changes using the SCALE OS CLI is not recommended.

| CORE CLI Command | SCALE CLI Command | Description |
|------------------|-------------------|-------------|
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

{{< taglist tag="scalemigrate" limit="10" title="Related Migration Articles" >}}
{{< taglist tag="scaleconfigure" limit="10" title="Related Configuration Articles" >}}