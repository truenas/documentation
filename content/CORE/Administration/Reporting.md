---
title: "Statistics Reporting"
weight: 20
---

## Reporting General Settings

TrueNAS has a built in reporting engine that gives helpful graphs and information about the system.
TrueNAS is uses [Graphite](http://graphiteapp.org/ "Graphite Homepage") for metric gathering and visualizations.
Some general settings can be found in **System > Reporting**.

![SystemReporting](/images/CORE/12.0/SystemReporting.png "Reporting Options")

When *Report CPU usage in percent* is set, it simply reports the CPU usage in percent rather than units of kernel time. When *Graphite Separate Instances* is set, it sends the *plugin instance* and *type instance* to Graphite as separate path components: *host.cpu.0.cpu.idle*. When it is not set, the *plugin* and *plugin instance* as one path component and *type* and *type instance* as another component: *host.cpu-0.cpu-idle*.

A *Remote Graphite Server Hostname* can be typed in the respective field. The *Graph Age in Months* field is used to set the maximum number of months a graphis stored. The *Number of Graph points* field is used to set the number of points for each hourly, daily, weekly, monthly, or yearly graph.  

{{< hint warning >}}
Report history is cleared when CPU reporting, Graph Age, or Graph Points are changed.
{{< /hint >}}

## Graphs

TrueNAS uses [collectd](https://collectd.org/) to provide reporting statistics. A comprehensive list of graphs and reporting are found in **Reporting**. Change the category of reporting by selecting an option of the drop-down. Graphs can be interacted with by clicking and dragging on a certain range, or by clicking <i class="fa fa-search-plus" aria-hidden="true"></i>, <i class="fa fa-search-minus" aria-hidden="true"></i>, <i class="fa fa-forward" aria-hidden="true" title="Forward"></i>, <i class="fa fa-backward" aria-hidden="true" title="Backward"></i>.

Below is a summary of what each page of graphs displays:

{{< tabs "Graphs Pages" >}}
{{< tab "CPU" >}}
[CPU](https://collectd.org/wiki/index.php/Plugin:CPU) shows the amount of time spent by the CPU in various states such as executing user code, executing system code, and being idle.
Graphs of short-, mid-, and long-term load are shown, along with CPU temperature graphs.

![ReportingCPUTab](/images/CORE/12.0/ReportingCPUTab.png "CPU Reporting")

{{< /tab >}}
{{< tab "Disk" >}}
[Disk](https://collectd.org/wiki/index.php/Plugin:Disk) shows read and write statistics on I/O, percent busy, latency, operations per second, pending I/O requests, and disk temperature.
Choose the *DEVICES* and *METRICS* to view the selected metrics for the chosen devices.
{{< hint warning >}}
Temperature monitoring for the disk is disabled if *HDD Standby* is enabled on the disk.
{{< /hint >}}

![ReportingDisksTab](/images/CORE/12.0/ReportingDisksTab.png "Disks Reporting")

The default view shows a temperature graph of the first disk. To see the temperature graphs of more disks, select them from the *DEVICES* drop-down. To view other metrics such as *Disk I/O* and *Disk Latency*, select them from the *METRICS* drop-down.
{{< /tab >}}
{{< tab "Memory" >}}
[Memory](https://collectd.org/wiki/index.php/Plugin:Memory) displays memory usage.
[Swap](https://collectd.org/wiki/index.php/Plugin:Swap) displays the amount of free and used swap space.

![ReportingMemoryTab](/images/CORE/12.0/ReportingMemoryTab.png "Memory Reporting")

{{< /tab >}}
{{< tab "Network" >}}
[Network](https://collectd.org/wiki/index.php/Plugin:Interface) shows received and transmitted traffic in megabytes per second for each configured interface.

![ReportingNetworkTab](/images/CORE/12.0/ReportingNetworkTab.png "Network Reporting")

{{< /tab >}}
{{< tab "NFS" >}}
[NFS](https://collectd.org/wiki/index.php/Plugin:NFS) shows information about the number of procedure calls for each procedure and whether the system is a server or client.

![ReportingNFSTab](/images/CORE/12.0/ReportingNFSTab.png "NFS Reporting")

{{< /tab >}}
{{< tab "Partition" >}}
[Partition](https://collectd.org/wiki/index.php/Plugin:DF) displays free, used, and reserved space for each pool and dataset. However, the disk space used by an individual zvol is not displayed as it is a block device.

![ReportingPartitionTab](/images/CORE/12.0/ReportingPartitionTab.png "Partition Reporting")

{{< /tab >}}
{{< tab "System" >}}
[System](https://collectd.org/wiki/index.php/Plugin:Processes) displays the number of processes.
It is grouped by state.

![ReportingSystemTab](/images/CORE/12.0/ReportingSystemTab.png "System Reporting")

{{< /tab >}}
{{< tab "Target" >}}
*Target* shows bandwidth statistics for iSCSI ports.

![ReportingTargetTab](/images/CORE/12.0/ReportingTargetTab.png "iSCSI Target Reporting")

{{< /tab >}}
{{< tab "UPS" >}}
[UPS](https://collectd.org/wiki/index.php/Plugin:NUT) displays statistics about an uninterruptible power supply (UPS) using [Network UPS tools](https://networkupstools.org/).
Statistics include voltages, currents, power, frequencies, load, and temperatures.

![ReportingUPSTab](/images/CORE/12.0/ReportingUPSTab.png "UPS Reporting")

{{< /tab >}}
{{< tab "ZFS" >}}
[ZFS](https://collectd.org/wiki/index.php/Plugin:ZFS_ARC) shows compressed physical ARC size, hit ratio, demand data, demand metadata, and prefetch data.

![ReportingZFSTab](/images/CORE/12.0/ReportingZFSTab.png "ZFS Reporting")

{{< /tab >}}
{{< /tabs >}}

Reporting data is saved to permit viewing and monitoring usage trends over time.
This data is preserved across system upgrades and restarts.

Data files are saved in <file>/var/db/collectd/rrd/</file>.

{{< hint warning >}}
Reporting data is frequently written and should not be stored on the boot pool or operating system device.
{{< /hint >}}
