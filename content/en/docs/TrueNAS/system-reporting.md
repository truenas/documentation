---
title: "Configuring System Reporting"
linkTitle: "Configuring System Reporting"
description: "A how-to guide on configuring basic reports."
---

## Reporting General Settings

testing relative paths
TrueNAS has a built in reporting engine that gives helpful graphs and
information about the system. Under the hood TrueNAS is using
[Graphite](http://graphiteapp.org/ "Graphite Homepage") for metric gathering
and visualizations. Some general settings can be found at
**System > Reporting**.

When *Report CPU usage in percent* is set, it simply reports the CPU usage in
percent rather than units of kernel time. When *Graphite Separate Instances* is
set, it sends the *plugin instance* and *type instance* to Graphite as separate
path components: *host.cpu.0.cpu.idle*. When it is not set, the *plugin* and
*plugin instance* as one path component and *type* and *type instance* as
another component: *host.cpu-0.cpu-idle*.

A *Remote Graphite Server Hostname* can be typed in the respective field. The
*Graph Age in Months* field is used to set the maximum number of months a graph
is stored. The *Number of Graph points* field is used to set the number of
points for each hourly, daily, weekly, monthly, or yearly graph.

{{% alert title="Warning" color="warning" %}}
Report history is cleared when CPU reporting, Graph Age, or Graph Points are
changed.
{{% /alert %}}

## Graphs

A comprehensive list of graphs and reporting are found in **Reporting**. Change
the category of reporting by selecting an option of the drop-down. Graphs can
be interacted with by clicking and dragging on a certain range, or by clicking
<i class="fas fa-search-plus"></i>, <i class="fas fa-search-minus"></i>,
<i class="fas fa-forward"></i>, or <i class="fas fa-backward"></i>.