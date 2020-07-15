---
title: "System Reporting"
description: "A how-to guide on configuring basic reports."
---

## Reporting General Settings

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

TrueNAS uses [collectd](https://collectd.org/ "collectd Start Page") to provide
reporting statistics. A comprehensive list of graphs and reporting are found
in **Reporting**. Change the category of reporting by selecting an option of
the drop-down. Graphs can be interacted with by clicking and dragging on a
certain range, or by clicking
<i class="fas fa-search-plus"></i>, <i class="fas fa-search-minus"></i>,
<i class="fas fa-forward"></i>, or <i class="fas fa-backward"></i>.

Below is a summary of what each page of graphs displays:

- [CPU](https://collectd.org/wiki/index.php/Plugin:CPU) shows the amount of time
  spent by the CPU in various states such as executing user code, executing
  system code, and being idle. Graphs of short-, mid-, and long-term load are
  shown, along with CPU temperature graphs.

- [Disk](https://collectd.org/wiki/index.php/Plugin:Disk) shows read and write
  statistics on I/O, percent busy, latency, operations per second, pending I/O
  requests, and disk temperature. Choose the DEVICES and METRICS to view the
  selected metrics for the chosen devices.
> NOTE: Temperature monitoring for the disk is disabled if *HDD Standby* is enabled on the disk.

- [Memory](https://collectd.org/wiki/index.php/Plugin:Memory) displays memory usage.\
  [Swap](https://collectd.org/wiki/index.php/Plugin:Swap) displays the amount of
  free and used swap space.

- [Network](https://collectd.org/wiki/index.php/Plugin:Interface) shows received 
  and transmitted traffic in megabytes per second for each configured interface.

- [NFS](https://collectd.org/wiki/index.php/Plugin:NFS) shows information about
  the number of procedure calls for each procedure and whether the system is a
  server or client.

- [Partition](https://collectd.org/wiki/index.php/Plugin:DF) displays free, used,
  and reserved space for each pool and dataset. However, the disk space used by an
  individual zvol is not displayed as it is a block device.

- [System](https://collectd.org/wiki/index.php/Plugin:Processes) displays the
  number of processes. It is grouped by state.

- *Target* shows bandwidth statistics for iSCSI ports.

- [UPS](https://collectd.org/wiki/index.php/Plugin:NUT) displays statistics about
  an uninterruptible power supply (UPS) using
  [Network UPS tools](https://networkupstools.org/). Statistics include voltages,
  currents, power, frequencies, load, and temperatures.

- [ZFS](https://collectd.org/wiki/index.php/Plugin:ZFS_ARC) shows compressed
  physical ARC size, hit ratio, demand data, demand metadata, and prefetch data.

Reporting data is saved to permit viewing and monitoring usage trends over
time. This data is preserved across system upgrades and restarts.

Data files are saved in `/var/db/collectd/rrd/`.

{{% alert title=Warning color=warning %}}
Reporting data is frequently written and should not be stored on the boot pool
or operating system device.
{{% /alert %}}