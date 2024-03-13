---
title: "Reporting"
description: "Provides information on TrueNAS SCALE reporting graph screens and settings."
weight: 110
aliases:
- /scale/scaleuireference/reporting/
- /scale/scaleuireference/reporting/reportingscreensscale/
tags:
 - reporting
---

The **Reporting** screen displays graphs of system information for CPU, disk, memory, network, NFS, partition, target, UPS, ZFS, and system functions.
Use the dropdown in the upper right corner to select between reporting graph display options.
The **CPU** report displays by default.

{{< expand "What does TrueNAS SCALE use for reporting?" "v" >}}
TrueNAS SCALE uses [Netdata](https://www.netdata.cloud/) to gather metrics, create visualizations, and provide reporting statistics.
{{< /expand >}}

To configure a third-party reporting integration, such as Graphite, click **Exporters** to open the [**Reporting Exporters**](#reporting-exporters-screen) screen.

## Report Graphs
The following sections provide examples of each report graph.

### CPU Graphs
Displays the **CPU Temperature**, **CPU Usage**, and **System Load** graphs.
{{< expand "Click Here for More Information" "v" >}}
CPU graphs show the amount of time spent by the CPU in various states such as executing user code, executing system code, and being idle.
Graphs of short-, mid-, and long-term load are shown, along with CPU temperature graphs.

{{< trueimage src="/images/SCALE/Reporting/CPUReportingUsageTemp.png" alt="CPU Reporting Usage and Temperature" id="CPU Reporting Usage and Temperature" >}}

{{< trueimage src="/images/SCALE/Reporting/CPUReportingSystemLoad.png" alt="CPU Reporting System Load" id="CPU Reporting System Load" >}}

{{< /expand >}}

### Disk Graphs
Displays graphs for each selected system disk and by report type.

{{< expand "Click Here for More Information" "v" >}}
Disk graphs shows read and write statistics on I/O, percent busy, latency, operations per second, pending I/O requests, and disk temperature.
Use the **Select Disks** dropdown list to select the disks and the **Select Reports** dropdown to select the report types to display.

{{< trueimage src="/images/SCALE/Reporting/DiskReportingIO.png" alt="Disks Reporting I/O" id="Disks Reporting I/O" >}}

{{< trueimage src="/images/SCALE/Reporting/DiskReportingTemperature.png" alt="Disks Reporting Temperature" id="Disks Reporting Temperature" >}}

#### Disk Report Setting Options
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
Displays both the **Physical memory utilization** and **Swap utilization** graphs.

{{< expand "Click Here for More Information" "v" >}}
Memory graphs display memory usage and swap graphs display the amount of free and used swap space.

{{< trueimage src="/images/SCALE/Reporting/MemoryReportingPhysSwap.png" alt="Memory Reporting" id="Memory Reporting" >}}

{{< /expand >}}

### Network Graphs
Displays an **Interface Traffic** graph for each interface in the system.
{{< expand "Click Here for More Information" "v" >}}
Network graph report received and transmitted traffic in megabytes per second for each configured interface.

{{< trueimage src="/images/SCALE/Reporting/NetworkReportingIntTraffic.png" alt="Network Reporting" id="Network Reporting" >}}

{{< /expand >}}

### System Graphs
Displays both the **Processes** and **Uptime** graphs.
{{< expand "Click Here for More Information" "v" >}}
System graphs display the number of processes grouped by state, sleeping, running, stopped, zombies and blocked, and system uptime.

{{< trueimage src="/images/SCALE/Reporting/SystemReportingProcessUptime.png" alt="System Reporting" id="System Reporting" >}}

{{< /expand >}}

### ZFS Graphs
Displays the **ARC Size**, **ARC Hit Ratio**, **ARC Requests demand_data**, **ARC Requests demand_metadata**, **ARC Requests prefetch_data**, and **ARC Requests prefetch_metadata** graphs with the Arc and L2 gigabytes and hits (%), and the hits, misses and total number of requests.

{{< expand "Click Here for More Information" "v" >}}
ZFS graphs show compressed physical ARC size, hit ratio, demand data, demand metadata, and prefetch data and metadata.

{{< trueimage src="/images/SCALE/Reporting/ZFSReportingActualHitsHitsRate.png" alt="ZFS ARC Actual Cache Hits Rate and and ARC Hit Rate" id="ZFS ARC Actual Cache Hits Rate and and ARC Hit Rate" >}}
{{< trueimage src="/images/SCALE/Reporting/ZFSReportingARCSizeResult.png" alt="ZFS ARC Size and ARC Result" id="ZFS ARC Size and ARC Result" >}}

{{< /expand >}}

## Reporting Exporters Screen
**Exporter** on the **Reporting** screen opens the **Reporting Exporter** screen.
The **Reporting Exporters** screen displays reporting exporters configured on the system.
Exporting enables TrueNAS SCALE to send Netdata reporting metrics to another time-series database.
Exporters send Netdata reporting records in the form of JSON objects to third party reporting collection cloud services or applications installed on servers.
For more information, see the Netdata [exporting reference guide](https://learn.netdata.cloud/docs/exporting/exporting-reference).

{{< trueimage src="/images/SCALE/Reporting/ReportingExportersScreen.png" alt="Reporting Exporters Screen" id="Reporting Exporters Screen" >}}

**Add** opens the **Add Reporting Exporter** screen.

### Add Reporting Exporter
Use the **Add Reporting Exporter** screen to configure third party reporting integrations.

{{< trueimage src="/images/SCALE/Reporting/AddReportingExporter.png" alt="Add Reporting Exporter" id="Add Reporting Exporter" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a unique name for the exporter configuration. If configuring multiple instances, give each a distinct name. |
| **Type** | Select the report object format. At present, **GRAPHITE** is the only current supported option. Selecting **GRAPHITE** displays the exporter configuration settings |
| **Enable** | Select to enable sending reporting data to the configured exporter. Leave checkbox clear to disable the explorer without removing configuration. |
{{< /truetable >}}

Additional settings populate based on the selected **Type** option.

#### Graphite Settings

{{< trueimage src="/images/SCALE/Reporting/AddReportingExporterGraphite.png" alt="Graphite Exporter Settings" id="Graphite Exporter Settings" >}}

{{< expand "Graphite Setting Descriptions" "v" >}}
{{< truetable >}}
| Setting | Description |
|-----------|-------------|
| **Destination Ip** | Required. Enter the IP address of the Graphite server. |
| **Destination Port** | Required. Enter the port the Graphite server monitors. |
| **Prefix** | Enter the top-level of the file hierarchy for the path to use to store exported records. For example, enter the top-level folder name for the path, and use **Namespace** to enter the folder for the data records. For example, enter *dragonfish*. |
| **namespace** | Enter the name for the folder where you store data records. Use with the **Prefix** to define the full path. You can also enter the host name to add to all data records sent to the Graphite server. Defaults to *truenas*. |
| **Update Every** | (Optional) Enter the number of seconds for the interval to send data to the Graphite database. Defaults to *1*. |
| **Buffer On Failures** | (Optional) Enter the number of iterations (**Update Every** seconds) to buffer data, when the Graphite server is not available. Defaults to *10*. |
| **Send Names Instead Of Ids** | (Optional) Enter **true** to send Netdata chart and dimension names to Graphite or **false** to send IDs. Defaults to **true**.  |
| **Matching Charts** | (Optional) Enter one or more space separated patterns in regular expression. Use the asterisk (*) as wildcard to send all charts or the exclamation mark (!) to define a negative match to specify the charts to send to Graphite. Defaults to (*). |
{{< /truetable >}}
{{< /expand >}}

See [Adding a Reporting Exporter]({{< relref "ConfigReportsScale.md #adding-a-reporting-exporter" >}}) for guidance with configuring a Graphite exporter on TrueNAS.
