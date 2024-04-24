---
title: "Reporting"
description: "Provides information on changing settings that control how TrueNAS displays report graphs, interacting with graphs, and the TrueCommand Enhancement option."
weight: 110
alias:
- /scale/scaletutorials/reporting/configreportsscale/
- /scale/scaletutorials/reporting/
tags:
 - scalereports
---

{{< toc >}}

TrueNAS has a built-in reporting engine that provides helpful graphs and information about the system.

{{< trueimage src="/images/SCALE/23.10/CPUReportingUsageTemp.png" alt="Reporting Screen" id="Reporting Screen" >}}

{{< expand "What does TrueNAS use for reporting?" "v" >}}
TrueNAS uses [netdata](https://github.com/netdata/netdata) to gather system metrics and present them in the **Reporting** screens.
{{< /expand >}}

Reporting data is saved to permit viewing and monitoring usage trends over time.
This data is preserved across system upgrades and restarts.

## TrueCommand Enhancement

To increase TrueNAS reporting functionality connect it to our TrueCommand multi-system management software.

[TrueCommand](https://www.truenas.com/truecommand/) offers enhanced features for reporting like creating custom graphs and comparing utilization across multiple systems.

## Interacting with Graphs

Click on and drag a certain range of the graph to expand the information displayed in that selected area in the Graph.
Click on the <i class="fa fa-search-plus" aria-hidden="true"></i> icon to zoom in on the graph.
Click on the <i class="fa fa-search-minus" aria-hidden="true"></i> icon to zoom out on the graph.
Click the <i class="fa fa-forward" aria-hidden="true" title="Forward"></i> to move the graph forward.
Click the <i class="fa fa-backward" aria-hidden="true" title="Backward"></i> to move the graph backward.

## Configuring Reporting Exporters

Click **Exporters** to open the [**Reporting Exporters**]({{< relref "ReportingScreensSCALE.md#reporting-exporters-screen" >}}) screen.
The **Reporting Exporters** screen displays any configured third party reporting exports on the system.

{{< trueimage src="/images/SCALE/23.10/ReportingExportersScreen.png" alt="Reporting Exporters Screen" id="Reporting Exporters Screen" >}}

Exporting enables TrueNAS SCALE to send Netdata reporting metrics to another time-series database.
For more information, see the Netdata [exporting reference guide](https://learn.netdata.cloud/docs/exporting/exporting-reference).

Click **Add** to open the **Add Reporting Exporter** screen and configure a third party reporting integration.

{{< trueimage src="/images/SCALE/23.10/AddReportingExporter.png" alt="Add Reporting Exporter" id="Add Reporting Exporter" >}}

Enter a unique name for the exporter configuration in **Name**. If configuring multiple exporter instances, give each a distinct name.

Select the target database from **Type**.
Graphite is the only current supported option.
Additional settings fields automatically populate to configure the selected exporter type.

Select **Enable** to send reporting metrics to the configured exporter instance. Leave the checkbox cleared to disable the exporter without removing configuration.

### Configuring Graphite Exporting

[Graphite](https://graphiteapp.org/) is a monitoring tool that stores and renders time-series data based on a plaintext database.
Netdata exports reporting metrics to Graphite in the format *prefix*.*hostname*.*chart*.*dimension*.

To send reporting data to Graphite, select **GRAPHITE** in **Type**.

{{< trueimage src="/images/SCALE/23.10/AddReportingExporterGraphite.png" alt="Graphite Settings" id="Graphite Settings" >}}

Enter the IP address of the Graphite server in **Destination Ip**.
Enter the port number the Graphite server monitors in **Destination Port**.

You can accept the defaults for all other settings, or enter configuration settings to match your use case.

See "Graphite Settings" in [Add Reporting Exporter]({{< relref "ReportingScreensSCALE.md#add-reporting-exporter" >}}) for default values.
For additional information, see the Netdata [Graphite exporting guide](https://learn.netdata.cloud/docs/exporting/graphite).

{{< taglist tag="scalereports" limit="10" >}}
