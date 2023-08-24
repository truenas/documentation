---
title: "Reporting"
description: "Contains information about the Reporting screen on TrueNAS CORE."
weight: 70
tags:
- corereporting
- coregraphs
---

TrueNAS has a built in reporting engine that displays helpful graphs and information about the system processes.
TrueNAS uses [Graphite](https://graphiteapp.org/ "Graphite Homepage") for metric gathering and visualizations.

Configure system reporting on the **System > Reporting** screen.

![SystemReporting](/images/CORE/12.0/SystemReporting.png "Reporting Options")

{{< include file="content/_includes/SystemReportingFields.md" >}}

{{< hint type=important >}}
Report history is cleared after changing and saving CPU reporting, graph age, or graph points.
{{< /hint >}}

For information on the **Reporting** screen graphs see [System Reporting]({{< relref "/UIReference/ReportingGraphs.md" >}}). 

Reporting data is saved and preserved across system upgrades and reboots.
This allows viewing usage trends over time.
This data is frequently written and should not be stored on the boot pool or operating system device.
Reporting data is saved in <file>/var/db/collectd/rrd/</file>.

{{< taglist tag="corereporting" limit="10" >}}
