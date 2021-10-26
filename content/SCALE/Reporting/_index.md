---
title: "Reporting"
geekdocCollapseSection: true
weight: 110
---

{{< toc >}}

TrueNAS has a built-in reporting engine that provides helpful graphs and information about the system.

![ReportingSCALE](/images/SCALE/ReportingSCALE.png "Reporting")

{{< expand "What does TrueNAS use for reporting?" "v" >}}
TrueNAS uses [Graphite](https://graphiteapp.org/ "Graphite Homepage") to gather metrics and create visualizations.
{{< /expand >}}

The <i class="material-icons" aria-hidden="true" title="Settings">settings</i> *Reports Configuration* menu lets you control how TrueNAS displays the graphs.

### Reports Configuration

![ReportingConfigSCALE](/images/SCALE/ReportingConfigSCALE.png "Reporting")

{{< include file="static/includes/Reference/SystemReportingFields.md.part" markdown="true" >}}

{{< hint warning >}}
TrueNAS clears the report history when you change *Report CPU*, *Graph Age*, or *Graph Points*.
{{< /hint >}}

TrueNAS saves and preserves reporting data across system upgrades and reboots so you can view usage trends over time.

Since TrueNAS writes reporting data frequently, do not store it on the boot pool or OS device.
TrueNAS saves reporting data in <file>/var/db/collectd/rrd/</file>.

### TrueCommand Enhancement

Want to increase TrueNAS's reporting functionality? Connect it to our TrueCommand multi-system management software.

TrueCommand [Reports]({{< relref "/content/TrueCommand/Reports/_index.md" >}}) offer enhanced features like creating custom graphs and comparing utilization across multiple systems.
