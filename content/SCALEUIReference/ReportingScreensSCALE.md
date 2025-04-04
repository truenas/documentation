---
title: "Reporting"
description: "Provides information on TrueNAS SCALE reporting graph screens and settings."
weight: 110
tags:
 - reporting
---

The **Reporting** screen displays graphs of system information for CPU, disk, memory, network, NFS, partition, target, UPS, ZFS, and system functions.
Use the dropdown in the upper right corner to select between reporting graph display options.
The **CPU** report displays by default.

{{< include file="static/includes/netdatareporting.md" >}}

To configure a third-party reporting integration, such as Graphite, click **Exporters** to open the [**Reporting Exporters**](#reporting-exporters-screen) screen.

## Report Graphs
The following sections provide examples of each report graph.
There are a few controls to change the default graph view:

* The **Auto Refresh** toggle updates the graphs with the latest reporting data every few seconds.
  When active, the graph resets to the chosen **Reset Zoom** view every time the reporting data updates.
  Disable **Auto Refresh** before manually zooming in on any section of the graph.
* **Step Back** (<span class="iconify" data-icon="mdi:rewind"></span>) moves the graph backward in time by whatever time increment is currently active in **Reset Zoom**.
* **Step Forward** (<span class="iconify" data-icon="mdi:fast-forward"></span>) moves the graph forward in time by whatever time increment is currently active in **Reset Zoom**.
  The default graph view is to show the latest data, which disables this button.
* **Zoom Out** (<span class="iconify" data-icon="mdi:zoom-out"></span>) adjusts the time period shown in the graph between 1 Hour, 1 Day, 1 Week, 1 Month, and 6 Month views.
* The **Reset Zoom** indicator shows which time value is active for the graph.
  The default **1 Hour** is the default (and minimum) time period that can be active.
  When **Zoom Out** is active, click **Reset Zoom** to reset the graph view to **1 Hour**.
* **Zoom In** (<span class="iconify" data-icon="mdi:zoom-in"></span>) adjusts the time period shown in the graph between 1 Hour, 1 Day, 1 Week, 1 Month, and 6 Month views.
  This is active when the graph changes from the default 1 Hour view.

To manually adjust the vertical or horizontal precision of the graph, disable **Auto Refresh**, then click and drag within the graph view.
A left-to-right (or vice-versa) motion increases the horizontal view precision, while an up-to-down (or vice-versa) motion increases the vertical precision.

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
Disk graphs show read and write statistics on I/O, percent busy, latency, operations per second, pending I/O requests, and disk temperature.
Use the **Select Disks** dropdown list to select the disks and the **Select Reports** dropdown to select the report types to display.

{{< trueimage src="/images/SCALE/Reporting/DiskReportingIO.png" alt="Disks Reporting I/O" id="Disks Reporting I/O" >}}

{{< trueimage src="/images/SCALE/Reporting/DiskReportingTemperature.png" alt="Disks Reporting Temperature" id="Disks Reporting Temperature" >}}

#### Disk Report Setting Options
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Select All** | Displays all available graphs for any or all disks selected on the **Disks** dropdown list. |
| **Disk Temperature** | Displays the minimum, maximum, and mean temperature readings for the disk selected. |
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

### UPS Graphs
Displays the **UPS Charging** percentage, **UPS Runtime**, **UPS Voltage - Battery**, **UPS Voltage - Input**, **UPS Voltage - Output**, **UPS Input Current**, **UPS Input Frequency**, **UPS Input Load**, and **UPS Temperature**.

The **UPS** service must be [configured]({{< ref "upsservicesscale" >}}) with a compatible Uninterruptible Power Supply (UPS) device.

{{< trueimage src="/images/SCALE/Reporting/UPSReportingChargingRuntime.png" alt="UPS Reporting" id="UPS Reporting" >}}

### ZFS Graphs
Displays the **ARC Size**, **ARC Hit Ratio**, **ARC Requests demand_data**, **ARC Requests demand_metadata**, **ARC Requests prefetch_data**, and **ARC Requests prefetch_metadata** graphs with the Arc and L2 gigabytes and hits (%), and the hits, misses and total number of requests.

{{< expand "Click Here for More Information" "v" >}}
ZFS graphs show compressed physical ARC size, hit ratio, demand data, demand metadata, and prefetch data and metadata.

{{< trueimage src="/images/SCALE/Reporting/ZFSReportingActualHitsHitsRate.png" alt="ZFS ARC Actual Cache Hits Rate and ARC Hit Rate" id="ZFS ARC Actual Cache Hits Rate and ARC Hit Rate" >}}
{{< trueimage src="/images/SCALE/Reporting/ZFSReportingARCSizeResult.png" alt="ZFS ARC Size and ARC Result" id="ZFS ARC Size and ARC Result" >}}

{{< /expand >}}

## Reporting Exporters Screen
**Exporter** on the **Reporting** screen opens the **Reporting Exporter** screen.
The **Reporting Exporters** screen displays reporting exporters configured on the system.
Exporting enables TrueNAS SCALE to send Netdata reporting metrics to another time-series database.
Exporters send Netdata reporting records as JSON objects to third-party reporting collection cloud services or applications installed on servers.
For more information, see the Netdata [exporting reference guide](https://learn.netdata.cloud/docs/exporting/exporting-reference).

{{< trueimage src="/images/SCALE/Reporting/ReportingExportersScreen.png" alt="Reporting Exporters Screen" id="Reporting Exporters Screen" >}}

**Add** opens the **Add Reporting Exporter** screen.

### Add Reporting Exporter
Use the **Add Reporting Exporter** screen to configure third-party reporting integrations.

{{< trueimage src="/images/SCALE/Reporting/AddReportingExporter.png" alt="Add Reporting Exporter" id="Add Reporting Exporter" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a unique name for the exporter configuration. If configuring multiple instances, give each a distinct name. |
| **Type** | Select the report object format. At present, **GRAPHITE** is the only current supported option. Selecting **GRAPHITE** displays the exporter configuration settings |
| **Enable** | Select to enable sending reporting data to the configured exporter. Leave the checkbox clear to disable the explorer without removing the configuration. |
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
| **Prefix** | Enter the top level of the file hierarchy for the path to use to store exported records. For example, enter the top-level folder name for the path, and use **Namespace** to enter the folder for the data records. For example, enter *dragonfish*. |
| **namespace** | Enter the name of the folder where you store data records. Use the **Prefix** to define the full path. You can also enter the host name to add to all data records sent to the Graphite server. Defaults to *truenas*. |
| **Update Every** | (Optional) Enter the number of seconds for the interval to send data to the Graphite database. Defaults to *1*. |
| **Buffer On Failures** | (Optional) Enter the number of iterations (**Update Every** seconds) to buffer data when the Graphite server is not available. Defaults to *10*. |
| **Send Names Instead Of Ids** | (Optional) Enter **true** to send Netdata chart and dimension names to Graphite or **false** to send IDs. Defaults to **true**.  |
| **Matching Charts** | (Optional) Enter one or more space-separated patterns in regular expression. Use the asterisk (*) as a wildcard to send all charts or the exclamation mark (!) to define a negative match to specify the charts to send to Graphite. Defaults to (*). |
{{< /truetable >}}
{{< /expand >}}

See [Adding a Reporting Exporter]({{< ref "ConfigReportsScale.md#adding-a-reporting-exporter" >}}) for guidance with configuring a Graphite exporter on TrueNAS.
