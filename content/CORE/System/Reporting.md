---
title: "Reporting"
weight: 80
---

{{< toc >}}

TrueNAS has a built in reporting engine that gives helpful graphs and information about the system.

{{< expand "What does TrueNAS use for reporting?" "v" >}}
TrueNAS uses [Graphite](http://graphiteapp.org/ "Graphite Homepage") for metric gathering and visualizations.
{{< /expand >}}

The options in **System > Reporting** control how the graphs in **Reporting** appear:

{{< include file="static/includes/SystemReportingFields.md.part" markdown="true" >}}

{{< hint warning >}}
Report history is cleared when *Report CPU*, *Graph Age*, or *Graph Points* are changed.
{{< /hint >}}

Reporting data is saved and preserved across system upgrades and reboots.
This allows viewing usage trends over time.
This data is frequently written and should not be stored on the boot pool or operating system device.
Reporting data is saved in <file>/var/db/collectd/rrd/</file>.
