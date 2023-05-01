---
title: "Reporting"
description: "This article contains information about the graphs displayed on the Reporting screen in TrueNAS CORE."
weight: 135
Aliases: /core/system/reporting/
tags:
- corereporting
- coregraphs
---

{{< toc >}}

The **Reporting** screen displays graphs of system information for CPU, disk, memory, network, NFS, partition, target, UPS, ZFS and system functions. 

{{< expand "What does TrueNAS use for reporting?" "v" >}}
TrueNAS uses [Graphite](https://graphiteapp.org/ "Graphite Homepage") for metric gathering and visualizations.

TrueNAS uses [collectd](https://collectd.org/) to provide reporting statistics. 
{{< /expand >}}

Reporting data is saved to permit viewing and monitoring usage trends over time.
This data is preserved across system upgrades and restarts.

Data files are saved in <file>/var/db/collectd/rrd/</file>.

{{< hint type=important >}}
Because reporting data is frequently written it should not be stored on the boot pool or operating system device.
{{< /hint >}}

![ReportingScreenDisplayOptions](/images/CORE/12.0/ReportingScreenDisplayOptions.png "Reporting Screen Display Options")

## Reporting Screen Display Options

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **CPU** | Displays the **CPU Temperature**, **CPU Usage**, and **System Load** graphs. |
| **Disk** | Displays graphs for each disk in the system. |
| **Memory** | Displays both the **Physical memory utilization** and **Swap utilization** graphs. |
| **Network** | Displays an **Interface Traffic** graph for each interface in the system. |
| **NFS** | Displays the **NFS Stats (Operations)** and **NFS Stats (Byptes)** graphs. |
| **Partition** | Displays graphs showing disk space allocations.  |
| **System** | Displays both the **Processes** and **Uptime** graphs. |
| **Target** | Displays graphs only for systems with iSCSI ports configured and shows the bandwidth statistics for iSCSI ports. |
| **UPS** | Displays the graphs only if the system is configured for and uses a UPS. |
| **ZFS**| Displays the **ARC Size**, **ARC Hit Ratio**, **ARC Requests demand_data**, **ARC Requests demand_metadata**, **ARC Requests prefetch_data**, and **ARC Requests prefetch_metadata** graphs with the Arc and L2 gigabytes and hits (%), and the hits, misses and total number of requests. |
{{< /truetable >}}

## Interacting with Graphs

Click on and drag a certain range of the graph to expand the information displayed in that selected area in the Graph.
Click on the <i class="fa fa-search-plus" aria-hidden="true"></i> icon to zoom in on the graph.
Click on the <i class="fa fa-search-minus" aria-hidden="true"></i> icon to zoom out on the graph.
Click the <i class="fa fa-forward" aria-hidden="true" title="Forward"></i> to move the graph forward.
Click the <i class="fa fa-backward" aria-hidden="true" title="Backward"></i> to move the graph backward.

## Graphs
{{< expand "CPU Graphs" "v" >}}
[CPU](https://collectd.org/wiki/index.php/Plugin:CPU) graphs shows the amount of time spent by the CPU in various states such as executing user code, executing system code, and being idle.
Graphs of short-, mid-, and long-term load are shown, along with CPU temperature graphs.

![ReportingCPUTab](/images/CORE/12.0/ReportingCPUTab.png "CPU Reporting")

{{< /expand >}}
{{< expand "Disk Graphs" "v" >}}
[Disk](https://collectd.org/wiki/index.php/Plugin:Disk)graphs shows read and write statistics on I/O, percent busy, latency, operations per second, pending I/O requests, and disk temperature.
Use the **Devices** dropdown list to select one or all system disks for which you want to display a graph. Use the **Metrics** dropdown list to select one or all disk measurements to dispaly. 

![ReportingDisksTab](/images/CORE/12.0/ReportingDisksTab.png "Disks Reporting")

### Disk Metrics Options

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Select All** | Displays all available graphs for any or all disks selected on the **Devices** dropdown list. |
| **Disk Temperature** | Diplays the minimum, maximum and mean temperature reading for the disk selected. |
| **Disk Busy** | Displays the percent the selected disk is busy. |
| **Disk Latency** | Displays the disk latency in time,msec, for read, write and delete operations. |
| **Disk Operations detailed** | Displays the read, write and delete operations for the selected disk. |
| **Pending I/O** | Displays then length of pending I/O requests for the selected disk. |
| **Disk I/O** | Displays the disk read and writed I/O stats in bytes/s. |
{{< /truetable >}}

{{< hint type=important >}}
Temperature monitoring for the disk is disabled if **HDD Standby** is enabled. Check the **Storage > Disks** **Edit Disk*** configuration form for any or all disks in the system if you do not see the temperature monitoring graph.
{{< /hint >}}
{{< /expand >}}
{{< expand "Memory Graphs" "v" >}}
[Memory](https://collectd.org/wiki/index.php/Plugin:Memory) graphs display memory usage and [swap](https://collectd.org/wiki/index.php/Plugin:Swap) graphs display the amount of free and used swap space.

![ReportingMemoryTab](/images/CORE/12.0/ReportingMemoryTab.png "Memory Reporting")

{{< /expand >}}
{{< expand "Network Graphs" "v" >}}
[Network](https://collectd.org/wiki/index.php/Plugin:Interface) graphs report received and transmitted traffic in megabytes per second for each configured interface.

![ReportingNetworkTab](/images/CORE/12.0/ReportingNetworkTab.png "Network Reporting")

{{< /expand >}}
{{< expand "NFS Graphs" "v" >}}
[NFS](https://collectd.org/wiki/index.php/Plugin:NFS) graphs show information about the number of procedure calls for each procedure and whether the system is a server or client.

![ReportingNFSTab](/images/CORE/12.0/ReportingNFSTab.png "NFS Reporting")

{{< /expand >}}
{{< expand "Partitian Graphs" "v" >}}

[Partition](https://collectd.org/wiki/index.php/Plugin:DF) graphs displays free, used, and reserved space for each pool and dataset. However, the disk space used by an individual zvol is not displayed as it is a block device.

![ReportingPartitionTab](/images/CORE/12.0/ReportingPartitionTab.png "Partition Reporting")

{{< /expand >}}
{{< expand "System Graphs" "v" >}}
[System](https://collectd.org/wiki/index.php/Plugin:Processes) graphs displays the number of processes. It is grouped by state.

![ReportingSystemTab](/images/CORE/12.0/ReportingSystemTab.png "System Reporting")

{{< /expand >}}
{{< expand "Target Graphs" "v" >}}

![ReportingTargetTab](/images/CORE/12.0/ReportingTargetTab.png "iSCSI Target Reporting")

{{< /expand >}}
{{< expand "UPS Graphs" "v" >}}
[UPS](https://collectd.org/wiki/index.php/Plugin:NUT)graphs show statistics about an uninterruptible power supply (UPS) using [Network UPS tools](https://networkupstools.org/). Statistics include voltages, currents, power, frequencies, load, and temperatures. 

![ReportingUPSTab](/images/CORE/12.0/ReportingUPSTab.png "UPS Reporting")

{{< /expand >}}
{{< expand "ZFS Graphs" "v" >}}
[ZFS](https://collectd.org/wiki/index.php/Plugin:ZFS_ARC) graphs shows compressed physical ARC size, hit ratio, demand data, demand metadata, and prefetch data.

![ReportingZFSTab](/images/CORE/12.0/ReportingZFSTab.png "ZFS Reporting")

{{< /expand >}}

{{< taglist tag="corereporting" limit="10" >}}
