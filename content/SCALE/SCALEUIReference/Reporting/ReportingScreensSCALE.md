---
title: "Reporting Screens"
description: "This article provides information on TrueNAS reporting graph screens and settings."
weight: 10
alias: /scale/scaleuireference/reporting/
tags:
 - scalereports
---


{{< toc >}}


The **Reporting** screen displays graphs of system information for CPU, disk, memory, network, NFS, partition, target, UPS, ZFS and system functions. The **CPU** report displays by default.

The <i class="material-icons" aria-hidden="true" title="Settings">settings</i> opens the **[Reports Configuration](#reports-configuration-screen)** configuration screen.

## Reports Configuration Screen
**Reports Configuration** settings specify how TrueNAS displays the graphs and the host name of the Graphite server.

![ReportsConfigurationSCALE](/images/SCALE/22.02/ReportsConfigurationSCALE.png "Reports Configuration")

{{< include file="static/includes/Reference/SystemReportingFields.md.part" markdown="true" >}}

## Reporting Screen Display Options

| Setting | Description |
|---------|-------------|
| **CPU** | Displays the **CPU Temperature**, **CPU Usage**, and **System Load** graphs. |
| **Disk** | Displays graphs for each selected system disk and by report type. |
| **Memory** | Displays both the **Physical memory utilization** and **Swap utilization** graphs. |
| **Network** | Displays an **Interface Traffic** graph for each interface in the system. |
| **NFS** | Displays the **NFS Stats (Operations)** and **NFS Stats (Bytes)** graphs. |
| **Partition** | Displays graphs showing disk space allocations.  |
| **System** | Displays both the **Processes** and **Uptime** graphs. |
| **Target** | Displays graphs only for systems with iSCSI ports configured and shows the bandwidth statistics for iSCSI ports. |
| **UPS** | Displays the graphs only if the system is configured for and uses a UPS. |
| **ZFS**| Displays the **ARC Size**, **ARC Hit Ratio**, **ARC Requests demand_data**, **ARC Requests demand_metadata**, **ARC Requests prefetch_data**, and **ARC Requests prefetch_metadata** graphs with the Arc and L2 gigabytes and hits (%), and the hits, misses and total number of requests. |

## Report Graphs
The following sections provide example of each report graph.
### CPU Graphs
{{< expand "Click Here for More Information" "v" >}}
[CPU](https://collectd.org/wiki/index.php/Plugin:CPU) graphs shows the amount of time spent by the CPU in various states such as executing user code, executing system code, and being idle.
Graphs of short-, mid-, and long-term load are shown, along with CPU temperature graphs.

![ReportingCPUGraphs1SCALE](/images/SCALE/22.02/ReportingCPUGraphs1SCALE.png "CPU Reporting Usage and Temperature")

![ReportingCPUGraphs2SCALE](/images/SCALE/22.02/ReportingCPUGraphs2SCALE.png "CPU Reporting System Load")

{{< /expand >}}
### Disk Graphs
{{< expand "Click Here for More Information" "v" >}}
[Disk](https://collectd.org/wiki/index.php/Plugin:Disk) graphs shows read and write statistics on I/O, percent busy, latency, operations per second, pending I/O requests, and disk temperature.
Use the **Select Disks** dropdown list to select the disks and the **Select Reports** dropdown to select the report types to display. 

![ReportingDiskGraphSCALE](/images/SCALE/22.02/ReportingDiskGraphSCALE.png "Disks Reporting")

### Disk Report Options
| Setting | Description |
|---------|-------------|
| **Select All** | Displays all available graphs for any or all disks selected on the **Disks** dropdown list. |
| **Disk Temperature** | Displays the minimum, maximum and mean temperature reading for the disk selected. |
| **Disk I/O** | Displays the disk read and write I/O stats in bytes/s. |

{{< hint warning >}}
Temperature monitoring for the disk is disabled if **HDD Standby** is enabled. Check the **Storage > Disks** **Edit Disk*** configuration form for any or all disks in the system if you do not see the temperature monitoring graph.
{{< /hint >}}
{{< /expand >}}
### Memory Graphs
{{< expand "Click Here for More Information" "v" >}}
[Memory](https://collectd.org/wiki/index.php/Plugin:Memory) graphs display memory usage and [swap](https://collectd.org/wiki/index.php/Plugin:Swap) graphs display the amount of free and used swap space.

![ReportingMemoryGraphsSCALE](/images/SCALE/22.02/ReportingMemoryGraphsSCALE.png "Memory Reporting")

{{< /expand >}}
### Network Graphs
{{< expand "Click Here for More Information" "v" >}}
[Network](https://collectd.org/wiki/index.php/Plugin:Interface) graph report received and transmitted traffic in megabytes per second for each configured interface.

![ReportingNetworkGraphsSCALE](/images/SCALE/22.02/ReportingNetworkGraphsSCALE.png "Network Reporting")

{{< /expand >}}
### NFS Graphs
{{< expand "Click Here for More Information" "v" >}}
[NFS](https://collectd.org/wiki/index.php/Plugin:NFS) graphs show information about the number of calls for each procedure and whether the system is a server or client.

![ReportingNFSGraphsSCALE](/images/SCALE/22.02/ReportingNFSGraphsSCALE.png "NFS Reporting")

{{< /expand >}}
### Partition Graphs
{{< expand "Click Here for More Information" "v" >}}

[Partition](https://collectd.org/wiki/index.php/Plugin:DF) graphs displays free, used, and reserved space for each pool and dataset. However, the disk space used by an individual zvol is not displayed as it is a block device.

![ReportingPartitionGraphsSCALE](/images/SCALE/22.02/ReportingPartitionGraphsSCALE.png "Partition Reporting")

{{< /expand >}}
### System Graphs
{{< expand "Click Here for More Information" "v" >}}
[System](https://collectd.org/wiki/index.php/Plugin:Processes) graphs displays the number of processes grouped by state, sleeping, running, stopped, zombies and blocked, and system uptime.

![ReportingSystemGraphsSCALE](/images/SCALE/22.02/ReportingSystemGraphsSCALE.png "System Reporting")

{{< /expand >}}
### Target Graphs
{{< expand "Click Here for More Information" "v" >}}

![ReportingTargetTab](/images/CORE/12.0/ReportingTargetTab.png "iSCSI Target Reporting")

{{< /expand >}}
### UPS Graphs
{{< expand "Click Here for More Information" "v" >}}
[UPS](https://collectd.org/wiki/index.php/Plugin:NUT)graphs show statistics about an uninterruptible power supply (UPS) using [Network UPS tools](https://networkupstools.org/). Statistics include voltages, currents, power, frequencies, load, and temperatures. 

![ReportingUPSTab](/images/CORE/12.0/ReportingUPSTab.png "UPS Reporting")

{{< /expand >}}
### ZFS Graphs
{{< expand "Click Here for More Information" "v" >}}
[ZFS](https://collectd.org/wiki/index.php/Plugin:ZFS_ARC) graphs shows compressed physical ARC size, hit ratio, demand data, demand metadata, and prefetch data and metadata.

![ReportingZFSGraphs1SCALE](/images/SCALE/22.02/ReportingZFSGraphs1SCALE.png "ZFS Reporting ARC Size and Hit Ratio") 


![ReportingZFSGraphs2SCALE](/images/SCALE/22.02/ReportingZFSGraphs2SCALE.png "ZFS Reporting demand_data and _metadata") 


![ReportingZFSGraphs3SCALE](/images/SCALE/22.02/ReportingZFSGraphs3SCALE.png "ZFS Reporting Graphs Prefetch_data and _metadata")

{{< /expand >}}

{{< taglist tag="scalereports" limit="10" >}}