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

## Reporting Screen Display Options

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **CPU** | Displays the **CPU Temperature**, **CPU Usage**, and **System Load** graphs. |
| **Disk** | Displays graphs for each selected system disk and by report type. |
| **Memory** | Displays both the **Physical memory utilization** and **Swap utilization** graphs. |
| **Network** | Displays an **Interface Traffic** graph for each interface in the system. |
| **System** | Displays both the **Processes** and **Uptime** graphs. |
| **ZFS**| Displays the **ARC Size**, **ARC Hit Ratio**, **ARC Requests demand_data**, **ARC Requests demand_metadata**, **ARC Requests prefetch_data**, and **ARC Requests prefetch_metadata** graphs with the Arc and L2 gigabytes and hits (%), and the hits, misses and total number of requests. |
{{< /truetable >}}

## Report Graphs
The following sections provide examples of each report graph.
### CPU Graphs
{{< expand "Click Here for More Information" "v" >}}
CPU graphs show the amount of time spent by the CPU in various states such as executing user code, executing system code, and being idle.
Graphs of short-, mid-, and long-term load are shown, along with CPU temperature graphs.

![CPUReportingUsageTemp](/images/SCALE/23.10/CPUReportingUsageTemp.png "CPU Reporting Usage and Temperature")

![CPUReportingSystemLoad](/images/SCALE/23.10/CPUReportingSystemLoad.png "CPU Reporting System Load")

{{< /expand >}}
### Disk Graphs
{{< expand "Click Here for More Information" "v" >}}
Disk graphs shows read and write statistics on I/O, percent busy, latency, operations per second, pending I/O requests, and disk temperature.
Use the **Select Disks** dropdown list to select the disks and the **Select Reports** dropdown to select the report types to display.

![DiskReportingIO](/images/SCALE/23.10/DiskReportingIO.png "Disks Reporting I/O")

![DiskReportingTemperature](/images/SCALE/23.10/DiskReportingTemperature.png "Disks Reporting Temperature")

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
Memory graphs display memory usage and swap graphs display the amount of free and used swap space.

![MemoryReportingPhysSwap](/images/SCALE/23.10/MemoryReportingPhysSwap.png "Memory Reporting Physical and Swap")

{{< /expand >}}
### Network Graphs
{{< expand "Click Here for More Information" "v" >}}
Network graph report received and transmitted traffic in megabytes per second for each configured interface.

![NetworkReportingIntTraffic](/images/SCALE/23.10/NetworkReportingIntTraffic.png "Network Reporting")

{{< /expand >}}
### System Graphs
{{< expand "Click Here for More Information" "v" >}}
System graphs display the number of processes grouped by state, sleeping, running, stopped, zombies and blocked, and system uptime.

![SystemReportingProcessUptime](/images/SCALE/23.10/SystemReportingProcessUptime.png "System Reporting")

{{< /expand >}}

### ZFS Graphs
{{< expand "Click Here for More Information" "v" >}}
ZFS graphs show compressed physical ARC size, hit ratio, demand data, demand metadata, and prefetch data and metadata.

{{< trueimage src="/images/SCALE/23.10/ZFSReportingActualHitsHitsRate.png" alt="ZFS ARC Actual Cache Hits Rate and and ARC Hit Rate" id="ZFS ARC Actual Cache Hits Rate and and ARC Hit Rate" >}}
{{< trueimage src="/images/SCALE/23.10/ZFSReportingARCSizeResult.png" alt="ZFS ARC Size and ARC Result" id="ZFS ARC Size and ARC Result" >}}

{{< /expand >}}

## Reporting Exporters Screen

The **Reporting Exporters** screen displays any configured third party reporting exports on the system.
Exporting enables TrueNAS SCALE to send Netdata reporting metrics to another time-series database.
For more information, see the Netdata [exporting reference guide](https://learn.netdata.cloud/docs/exporting/exporting-reference).

{{< trueimage src="/images/SCALE/23.10/ReportingExportersScreen.png" alt="Reporting Exporters Screen" id="Reporting Exporters Screen" >}}

Click **Add** to open the **Add Reporting Exporter** screen.

### Add Reporting Exporter

Use the **Add Reporting Exporter** screen to configure third party reporting integrations.

{{< trueimage src="/images/SCALE/23.10/AddReportingExporter.png" alt="Add Reporting Exporter" id="Add Reporting Exporter" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a unique name for the exporter configuration. If multiple instances are configured, each must have a distinct name. |
| **Type** | Select the exporter type to configure. The only current supported option is **GRAPHITE**. |
| **Enable** | Select to send reporting data to the configured exporter. Deselect to disable the explorer without removing configuration. |
{{< /truetable >}}

Additional settings populate based on the selected **Type** option.

{{< expand "Graphite Settings" "v" >}}

{{< trueimage src="/images/SCALE/23.10/AddReportingExporterGraphite.png" alt="Graphite Settings" id="Graphite Settings" >}}

{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Destination Ip** | Required. Enter the IP address of the Graphite server. |
| **Destination Port** | Required. Enter the port the Graphite server monitors. |
| **Prefix** | Enter the prefix to add to all Netdata metrics sent to Graphite. Defaults to *dragonfish*. |
| **Hostname** | Enter the hostname to add to all metrics, after the prefix, for sending data to the Graphite server. Defaults to *truenas* |
| **Update Every** | Enter the interval to send data to the Graphite database, in seconds. Defaults to *1*. |
| **Buffer On Failures** | Enter the number of iterations (**Update Every** seconds) to buffer data, when the Graphite server is not available. Defaults to *10*. |
| **Send Names Instead Of Ids** | Enter *true* to send Netdata chart and dimension names to Graphite or *false* to send IDs. Defaults to *true*.  |
| **Matching Charts** | Enter one or more space separated patterns in regular expression (use * as wildcard or ! to define a negative match) to specify the charts to send to Graphite. Defaults to * (send all charts). |
{{< /truetable >}}

See [Configuring Graphite Exporting]({{< relref "ConfigReportsScale.md #configuring-graphite-exporting" >}}) for more information.

{{< /expand >}}

{{< taglist tag="scalereports" limit="10" >}}
