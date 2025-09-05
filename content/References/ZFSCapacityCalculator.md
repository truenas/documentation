---
title: "ZFS Capacity Calculator"
description: "Calculator to determine usable ZFS capacity and other ZFS pool metrics, and to compare storage pool layouts."
weight: 90
hide_toc: true
tags:
- zfs
- storage
---

Use this calculator to plan your TrueNAS storage configuration before [creating pools]({{< relref "/SCALE/SCALETutorials/Storage/CreatePoolWizard.md" >}}). Enter your total disk count and compare different RAID types to see usable capacity after accounting for redundancy and ZFS overhead.

## Quick Configuration Guide

- RAIDZ1: Good capacity efficiency, single-disk fault tolerance.
- RAIDZ2: Balanced capacity and redundancy, double-disk fault tolerance.
- Mirror: Best performance, 50% capacity efficiency.
- [dRAID]({{< relref "/References/dRAIDprimer.md" >}}): For storage arrays with numerous attached disks (>100) where greatly reduced resilver time is needed.

The calculator also shows TrueNAS Enterprise hardware requirements and expansion shelf planning.

Click the help icons (?) for detailed explanations of each setting.

For more background on ZFS concepts, see the [ZFS Primer]({{< relref "/References/ZFSPrimer.md" >}}).

{{< capacity_calculator >}}

<div style="text-align: right; font-size: smaller; padding-top: 1em;">
    ZFS Capacity Calculator originally created by <a href="https://jro.io/capacity/">Jason Rose</a>.
</div>
