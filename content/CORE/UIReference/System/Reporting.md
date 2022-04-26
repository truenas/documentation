---
title: "Reporting"
weight: 80
aliases: /core/administration/reporting/
---

TrueNAS has a built in reporting engine that displays helpful graphs and information about the system processes.
TrueNAS uses [Graphite](https://graphiteapp.org/ "Graphite Homepage") for metric gathering and visualizations.

Configure system reporting on the **System > Reporting** screen.

![SystemReporting](/images/CORE/12.0/SystemReporting.png "Reporting Options")

{{< include file="static/includes/Reference/SystemReportingFields.md.part" markdown="true" >}}

{{< hint warning >}}
Report history is cleared after changing and saving CPU reporting, graph age, or graph points.
{{< /hint >}}

For more information on using TrueNAS reports, see [Working with TrueNAS Reports]({{< relref "/ " >}}).
For information on how the system displays system reporting in the graphs see [System Reporting]({{< relref "/UIReference/System/Reporing.md >}}). 

Reporting data is saved and preserved across system upgrades and reboots.
This allows viewing usage trends over time.
This data is frequently written and should not be stored on the boot pool or operating system device.
Reporting data is saved in <file>/var/db/collectd/rrd/</file>.
