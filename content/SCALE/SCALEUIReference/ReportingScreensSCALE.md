---
title: "Reporting Screens"
description: "Provides information on TrueNAS SCALE reporting graph screens and settings."
weight: 110
aliases:
- /scale/scaleuireference/reporting/
- /scale/scaleuireference/reporting/reportingscreensscale/
tags:
 - scalereports
---


{{< toc >}}


The **Reporting** screen displays graphs of system information for CPU, disk, memory, network, NFS, partition, target, UPS, ZFS, and system functions. The **CPU** report displays by default.

The <i class="material-icons" aria-hidden="true" title="Settings">settings</i> opens the **[Reports Configuration](#reports-configuration-screen)** configuration screen.

## Reports Configuration Screen
**Reports Configuration** settings specify how TrueNAS displays the graphs and the host name of the Graphite server.

![ReportsConfig](/images/SCALE/22.12/ReportsConfig.png "Reports Configuration")

{{< include file="content/_includes/SystemReportingFields.md" type="page" >}}

## Reporting Screen Display Options

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **CPU** | Displays the **CPU Temperature**, **CPU Usage**, and **System Load** graphs. |
| **Disk** | Displays graphs for each selected system disk and by report type. |
| **Memory** | Displays both the **Physical memory utilization** and **Swap utilization** graphs. |
| **Network** | Displays an **Interface Traffic** graph for each interface in the system. |
| **NFS** | Displays the **NFS Stats (Operations)** and **NFS Stats (Bytes)** graphs. |
| **Partition** | Displays graphs showing disk space allocations.  |
| **System** | Displays both the **Processes** and **Uptime** graphs. |
| **ZFS**| Displays the **ARC Size**, **ARC Hit Ratio**, **ARC Requests demand_data**, **ARC Requests demand_metadata**, **ARC Requests prefetch_data**, and **ARC Requests prefetch_metadata** graphs with the Arc and L2 gigabytes and hits (%), and the hits, misses and total number of requests. |
{{< /truetable >}}

## Report Graphs
The following sections provide examples of each report graph.
### CPU Graphs
{{< expand "Click Here for More Information" "v" >}}
[CPU](https://collectd.org/wiki/index.php/Plugin:CPU) graphs show the amount of time spent by the CPU in various states such as executing user code, executing system code, and being idle.
Graphs of short-, mid-, and long-term load are shown, along with CPU temperature graphs.

![CPUReportingUsageTemp](/images/SCALE/22.12/CPUReportingUsageTemp.png "CPU Reporting Usage and Temperature")

![CPUReportingSystemLoad](/images/SCALE/22.12/CPUReportingSystemLoad.png "CPU Reporting System Load")

{{< /expand >}}
### Disk Graphs
{{< expand "Click Here for More Information" "v" >}}
[Disk](https://collectd.org/wiki/index.php/Plugin:Disk) graphs shows read and write statistics on I/O, percent busy, latency, operations per second, pending I/O requests, and disk temperature.
Use the **Select Disks** dropdown list to select the disks and the **Select Reports** dropdown to select the report types to display. 

![DiskReportingTemperature](/images/SCALE/22.12/DiskReportingTemperature.png "Disks Reporting Temperature")

![DiskReportingIO](/images/SCALE/22.12/DiskReportingIO.png "Disks Reporting I/O")

### Disk Report Options

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Select All** | Displays all available graphs for any or all disks selected on the **Disks** dropdown list. |
| **Disk Temperature** | Displays the minimum, maximum and mean temperature reading for the disk selected. |
| **Disk I/O** | Displays the disk read and write I/O stats in bytes/s. |
{{< /truetable >}}

{{< hint type=important >}}
Temperature monitoring for the disk is disabled if **HDD Standby** is enabled. Check the **Storage > Disks** **Edit Disk*** configuration form for any or all disks in the system if you do not see the temperature monitoring graph.
{{< /hint >}}

{{< hint type=note >}}
Large petabyte systems may report storage numbers inaccurately. Storage configurations with more than 9,007,199,254,740,992 bytes will round the last 4 digits.

For example, a system with 18,446,744,073,709,551,615 bytes reports the number as 18,446,744,073,709,552,000 bytes.
{{< /hint >}}
{{< /expand >}}
### Memory Graphs
{{< expand "Click Here for More Information" "v" >}}
[Memory](https://collectd.org/wiki/index.php/Plugin:Memory) graphs display memory usage and [swap](https://collectd.org/wiki/index.php/Plugin:Swap) graphs display the amount of free and used swap space.

![MemoryReportingPhysSwap](/images/SCALE/22.12/MemoryReportingPhysSwap.png "Memory Reporting Physical and Swap")

{{< /expand >}}
### Network Graphs
{{< expand "Click Here for More Information" "v" >}}
[Network](https://collectd.org/wiki/index.php/Plugin:Interface) graph report received and transmitted traffic in megabytes per second for each configured interface.

![NetworkReportingIntTraffic](/images/SCALE/22.12/NetworkReportingIntTraffic.png "Network Reporting")

{{< /expand >}}
### NFS Graphs
{{< expand "Click Here for More Information" "v" >}}
[NFS](https://collectd.org/wiki/index.php/Plugin:NFS) graphs show information about the number of calls for each procedure and whether the system is a server or client.

![NFSReportingOperationsBytes](/images/SCALE/22.12/NFSReportingOperationsBytes.png "NFS Reporting")

{{< /expand >}}
### Partition Graphs
{{< expand "Click Here for More Information" "v" >}}

[Partition](https://collectd.org/wiki/index.php/Plugin:DF) graphs display free, used, and reserved space for each pool and dataset. However, the disk space used by an individual zvol is not displayed as it is a block device.

![PartitionReportingDiskSpace](/images/SCALE/22.12/PartitionReportingDiskSpace.png "Partition Reporting")

{{< /expand >}}
### System Graphs
{{< expand "Click Here for More Information" "v" >}}
[System](https://collectd.org/wiki/index.php/Plugin:Processes) graphs display the number of processes grouped by state, sleeping, running, stopped, zombies and blocked, and system uptime.

![SystemReportingProcessUptime](/images/SCALE/22.12/SystemReportingProcessUptime.png "System Reporting")

{{< /expand >}}

### ZFS Graphs
{{< expand "Click Here for More Information" "v" >}}
[ZFS](https://collectd.org/wiki/index.php/Plugin:ZFS_ARC) graphs show compressed physical ARC size, hit ratio, demand data, demand metadata, and prefetch data and metadata.

![ZFSReportingARCSizeHit](/images/SCALE/22.12/ZFSReportingARCSizeHit.png "ZFS Reporting ARC Size and Hit Ratio") 


![ZFSReportingARCDemandDataMeta](/images/SCALE/22.12/ZFSReportingARCDemandDataMeta.png "ZFS Reporting demand_data and _metadata") 


![ZFSReportingARCPrefetchDataMeta](/images/SCALE/22.12/ZFSReportingARCPrefetchDataMeta.png "ZFS Reporting Graphs Prefetch_data and _metadata")

{{< /expand >}}

{{< taglist tag="scalereports" limit="10" >}}
