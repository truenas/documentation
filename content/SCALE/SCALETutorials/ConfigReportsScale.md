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

![CPUReportingUsageTemp](/images/SCALE/Reporting/CPUReportingUsageTemp.png "CPU Reporting Usage and Temperature")

{{< expand "What does TrueNAS use for reporting?" "v" >}}
TrueNAS uses [netdata](https://github.com/netdata/netdata) to gather system metrics and present them in the **Reporting** screens.
{{< /expand >}}

Reporting data is saved to permit viewing and monitoring usage trends over time.
This data is preserved across system upgrades and restarts.

## Configuring Report Settings
Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> to open the **Reports Configuration** configuration screen where you control how TrueNAS displays the graphs.

![ReportsConfig](/images/SCALE/Reporting/ReportsConfig.png "Reports Configuration")

Select the general options you want to use in your TrueNAS.

Click **Save**.

## TrueCommand Enhancement

To increase TrueNAS reporting functionality connect it to our TrueCommand multi-system management software.

[TrueCommand](https://www.truenas.com/truecommand/) offers enhanced features for reporting like creating custom graphs and comparing utilization across multiple systems.

## Interacting with Graphs

Click on and drag a certain range of the graph to expand the information displayed in that selected area in the Graph.
Click on the <i class="fa fa-search-plus" aria-hidden="true"></i> icon to zoom in on the graph.
Click on the <i class="fa fa-search-minus" aria-hidden="true"></i> icon to zoom out on the graph.
Click the <i class="fa fa-forward" aria-hidden="true" title="Forward"></i> to move the graph forward.
Click the <i class="fa fa-backward" aria-hidden="true" title="Backward"></i> to move the graph backward.


{{< taglist tag="scalereports" limit="10" >}}