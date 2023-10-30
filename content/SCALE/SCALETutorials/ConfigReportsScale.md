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

## TrueCommand Enhancement

To increase TrueNAS reporting functionality connect it to our TrueCommand multi-system management software.

[TrueCommand](https://www.truenas.com/truecommand/) offers enhanced features for reporting like creating custom graphs and comparing utilization across multiple systems.

## Interacting with Graphs

Click on and drag a certain range of the graph to expand the information displayed in that selected area in the Graph.
Click on the <i class="fa fa-search-plus" aria-hidden="true"></i> icon to zoom in on the graph.
Click on the <i class="fa fa-search-minus" aria-hidden="true"></i> icon to zoom out on the graph.
Click the <i class="fa fa-forward" aria-hidden="true" title="Forward"></i> to move the graph forward.
Click the <i class="fa fa-backward" aria-hidden="true" title="Backward"></i> to move the graph backward.
