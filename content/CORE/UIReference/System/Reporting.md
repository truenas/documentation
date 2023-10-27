---
title: "Reporting"
description: "Contains information about the Reporting screen on TrueNAS CORE."
weight: 70
aliases: /core/administration/reporting/
tags:
- corereporting
- coregraphs
---

TrueNAS has a built in reporting engine that displays helpful graphs and information about the system processes.
TrueNAS uses [Graphite](https://graphiteapp.org/ "Graphite Homepage") for metric gathering and visualizations.

Configure system reporting on the **System > Reporting** screen.

![SystemReporting](/images/CORE/System/SystemReporting.png "Reporting Options")

-{{< truetable >}}
| Name | Description |
|------|-------------|
| **Graph Age in Months** | Maximum time (in months) TrueNAS stores a graph. Allowed values are 1-60. Changing this value causes the **Confirm RRD Destroy** dialog to display. Changes do not take effect until TrueNAS destroys the existing reporting database. |
| **Number of Graph Points** | The number of points for each hourly, daily, weekly, monthly, or yearly graph. Allowed values are 1-4096. Changing this value displays the **Confirm RRD Destroy** dialog. Changes do not take effect until TrueNAS destroys the existing reporting database. |
| **Reset to Defaults** | Resets all entered values and settings back to defaults. |
{{< /truetable >}}
{{< hint type=important >}}
Report history is cleared after changing and saving CPU reporting, graph age, or graph points.
{{< /hint >}}

For information on the **Reporting** screen graphs see [System Reporting]({{< relref "/CORE/UIReference/ReportingGraphs.md" >}}). 

Reporting data is saved and preserved across system upgrades and reboots.
This allows viewing usage trends over time.
This data is frequently written and should not be stored on the boot pool or operating system device.
Reporting data is saved in <file>/var/db/collectd/rrd/</file>.

{{< taglist tag="corereporting" vol="CORE" limit="5" >}}
