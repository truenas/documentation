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

![CPUReportingUsageTemp](/images/SCALE/22.12/CPUReportingUsageTemp.png "CPU Reporting Usage and Temperature")

{{< expand "What does TrueNAS use for reporting?" "v" >}}
TrueNAS uses [Graphite](https://graphiteapp.org/ "Graphite Homepage") to gather metrics and create visualizations.

TrueNAS uses [collectd](https://collectd.org/) to provide reporting statistics. 
{{< /expand >}}

Reporting data is saved to permit viewing and monitoring usage trends over time.
This data is preserved across system upgrades and restarts.

{{< hint type=important >}}
Because reporting data is written frequently do not store it on the boot pool or operating system device.

TrueNAS clears the report history when you change the report CPU, graph age, or graph points options.
{{< /hint >}}

Data files are saved in <file>/var/db/collectd/rrd/</file>.

## Configuring Report Settings
Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> to open the **Reports Configuration** configuration screen where you control how TrueNAS displays the graphs.

![ReportsConfig](/images/SCALE/22.12/ReportsConfig.png "Reports Configuration")

Select the general options you want to use in your TrueNAS.

Specify either the host name or IP address of the [Graphite](https://graphiteapp.org/) server you want to use.

Click **Save**.

## TrueCommand Enhancement

To increase TrueNAS reporting functionality connect it to our TrueCommand multi-system management software.

TrueCommand [Reports]({{< relref "/content/TrueCommand/Reports/_index.md" >}}) offer enhanced features like creating custom graphs and comparing utilization across multiple systems.

## Interacting with Graphs

Click on and drag a certain range of the graph to expand the information displayed in that selected area in the Graph.
Click on the <i class="fa fa-search-plus" aria-hidden="true"></i> icon to zoom in on the graph.
Click on the <i class="fa fa-search-minus" aria-hidden="true"></i> icon to zoom out on the graph.
Click the <i class="fa fa-forward" aria-hidden="true" title="Forward"></i> to move the graph forward.
Click the <i class="fa fa-backward" aria-hidden="true" title="Backward"></i> to move the graph backward.


{{< taglist tag="scalereports" limit="10" >}}