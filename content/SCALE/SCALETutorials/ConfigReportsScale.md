---
title: "Reporting"
description: "Provides information on changing settings that control how TrueNAS displays report graphs, how to interact with graphs, and configuring reporting exporters."
weight: 13
aliases:
 - /scale/scaletutorials/reporting/configreportsscale/
 - /scale/scaletutorials/reporting/
tags:
 - reporting
 - data reporting
---

TrueNAS has a built-in reporting engine that provides helpful graphs and information about the system.

{{< include file="static/includes/netdatareporting.md" >}}

Reporting data is saved to permit viewing and monitoring usage trends over time.
This data is preserved across system upgrades and restarts.

{{< hint type="tip" title="Increasing Reporting Functionality with TrueCommand" >}}
[TrueCommand](https://www.truenas.com/truecommand/) offers enhanced features for reporting like creating custom graphs and comparing utilization across multiple systems.
{{< /hint >}}

## Interacting with Graphs

Click on and drag a certain range of the graph to expand the information displayed in that selected area in the Graph.
Click on the <i class="fa fa-search-plus" aria-hidden="true"></i> icon to zoom in on the graph.
Click on the <i class="fa fa-search-minus" aria-hidden="true"></i> icon to zoom out on the graph.
Click the <i class="fa fa-forward" aria-hidden="true" title="Forward"></i> to move the graph forward.
Click the <i class="fa fa-backward" aria-hidden="true" title="Backward"></i> to move the graph backward.

## Using the Netdata UI

Click **Netdata** from the **Reporting** screen to see the built-in Netdata UI.
This UI bases metrics off your local system and browser time, which might be different from the default TrueNAS system time.

{{< trueimage src="/images/SCALE/Reporting/NetdataUI.png" alt="Netdata UI Dashboard" id="Netdata UI Dashboard" >}}

The Netdata UI opens in a new browser tab and automatically logs in.

A **Netdata** dialog also opens in the TrueNAS UI.
If automatic log in fails, use the generated password from this dialog to access the Netdata UI.

{{< trueimage src="/images/SCALE/Reporting/NetdataCredentialsDialog.png" alt="Netdata Credentials" id="Netdata Credentials" >}}

A new password generates each time the **Netdata** button is clicked on the **Reporting** screen.
Click **Generate New Password** on the dialog to force regeneration.
The Netdata UI opens a log in prompt.
Enter the new generated password to regain access.

See [Dashboards and Charts](https://learn.netdata.cloud/docs/dashboards-and-charts/) from Netdata for more information about the Netdata UI.

## Configuring Reporting Exporters
You can configure TrueNAS to export Netdata information to any time-series database, reporting cloud service or application installed on a server.
For example, Graphite, Grafana, etc., installed on a server or use their cloud service.

Creating reporting exporters enables TrueNAS to send Netdata data reporting metrics, formatted as a JSON object, to another reporting entity.

For more information on exporting Netdata records to other servers or services, refer to the Netdata [exporting reference guide](https://learn.netdata.cloud/docs/exporting/exporting-reference).

[Graphite](https://graphiteapp.org/) is a monitoring tool available as an application you can deploy on a server or use their cloud service.
It stores and renders time-series data based on a plaintext database.
Netdata exports data reporting metrics to Graphite in the format *prefix*.*hostname*.*chart*.*dimension*.
For additional information, see the Netdata [Graphite exporting guide](https://learn.netdata.cloud/docs/exporting/graphite).

### Adding a Reporting Exporter
To configure a reporting exporter in TrueNAS, you need the:

* IP address of the reporting service or server.
  If using another TrueNAS system with a data reporting application, this is the IP address of the TrueNAS running the application.
* Port number the reporting service listens on.
  If using another TrueNAS system with a reporting application, this is the port number the TrueNAS system listens on (port:80)

For more information on reporting exporter settings, see [Add Reporting Exporter]({{< relref "ReportingScreensSCALE.md#add-reporting-exporter" >}}).

Go to **Reporting** and click on **Exporters** to open the **Reporting Exporters** screen.
Any reporting exporters configured on the system display on the **Reporting Exporters** screen.

{{< trueimage src="/images/SCALE/Reporting/ReportingExportersScreen.png" alt="Reporting Exporters Screen" id="Reporting Exporters Screen" >}}

Click **Add** to open the **Add Reporting Exporter** screen to configure a third party data reporting integration.

{{< trueimage src="/images/SCALE/Reporting/AddReportingExporter.png" alt="Add Reporting Exporter" id="Add Reporting Exporter" >}}

Enter a unique name for the exporter configuration in **Name**.
When configuring multiple exporter instances, give each a distinct name.

Select the report object format from **Type**.
At present, only **GRAPHITE** is available.
The screen shows the exporter configuration fields.

{{< trueimage src="/images/SCALE/Reporting/AddReportingExporterGraphite.png" alt="Graphite Exporter Settings" id="Graphite Exporter Settings" >}}

Select **Enable** to send reporting metrics to the configured exporter instance.
Clearing the checkmark disables the exporter without removing configuration.

Enter the IP address for the data collection server or cloud service.

Enter the port number the report collecting server, etc. listens on.

Enter the file hierarchy structure, or where in the collecting server, etc. to send the data.
First enter the top-level in **Prefix** and then the data collection folder in the **Namespace** field.
For example, entering *DF* in **Prefix** and *test* in **Namespace** creates two folders in Graphite with *DF* as the parent to *Test*.

You can accept the defaults for all other settings, or enter configuration settings to match your use case.

Click **Save**.

To view the Graphite web UI, enter the *IPaddress:Port#* of the system hosting the application.

{{< trueimage src="/images/SCALE/Reporting/GraphiteWebUIForReportingExporter.png" alt="Graphite Web UI" id="Graphite Web UI" >}}

TrueNAS can now export the data records as Graphite-formatted JSON objects to the other report collection and processing application, service, or servers.

TrueNAS also populates the exporter screen with default settings.
To view these settings, click **Edit** on the row for the exporter.
