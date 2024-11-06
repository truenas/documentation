---
title: "RAIDZ Extension Calculator"
description: "Use this calculator to estimate the storage capacity efficiency of an extended ZFS RAIDZ VDEV. RAIDZ expansion adds disks to an existing RAIDZ VDEV."
weight: 110
tags:
- zfs
- storage
- raidz
---

RAIDZ extension allows TrueNAS users to add disks one at a time to an existing RAIDZ VDEV, incrementally expanding capacity.
Use this calculator to estimate the storage capacity efficiency of a ZFS RAIDZ VDEV after incremental extension.

Existing data blocks retain their original data-to-parity ratio and block width, but are spread across the larger set of disks.
New data blocks adopt the new data-to-parity ratio and width, or overhead.
Because of this overhead, an extended RAIDZ VDEV can report a lower total capacity than a newly created VDEV with the same number of disks.

Extended VDEVs recover lost headroom as existing data is read and rewritten to the new parity ratio.
This can occur naturally over the lifetime of the pool as you modify or delete data.
To manually recover capacity, simply replicate and rewrite the data to the extended pool.
{{< include file="/static/includes/ExpandedVdevReporting.md" >}}

See [Extending a RAIDZ VDEV]({{< relref "ManagePoolsSCALE.md #extending-a-raidz-vdev" >}}) for more information, including a detailed overview, considerations, and a tutorial.

{{< expand "How to use this calculator" "v" >}}
Edit the values to see how much lost headroom capacity is available to recover.

{{< truetable >}}
| Value | Description |
|-----------|-------------|
| **Drive Size** | Enter the size (in TB) of each disk in the existing VDEV. Added disks should be the same size or larger than existing drives. |
| **RAIDZ Level / Number of Parity Disks** | Enter the RAIDZ level (RAIDZ1, RAIDZ2, or RAIDZ3) of the existing VDEV. Extending a VDEV does not change RAIDZ fault tolerance. |
| **Data expansion threshold** | Enter the percentage of pre-extension VDEV capacity that is filled before adding an additional disk. |
| **Initial number of drives** | Enter the width of the VDEV before extension. |
| **Final number of drives** | Enter the planned final width of the VDEV after extension. |
{{< /truetable >}}
{{< /expand >}}

{{< expand "How to interpret the results" "v" >}}
Calculated values represent how much space on the final extended VDEV is lost to headroom, or data capacity that would be available in an equivalent VDEV created from scratch with the same width and data-to-parity ratio.
This is the capacity available to recover by rewriting existing data to the extended width.

The calculator returns estimated capacity values for two scenarios:
{{< truetable >}}
| Result | Scenario |
|-----------|-------------|
| **Extend VDEV to final width all at once** | Fill the existing VDEV to its threshold percentage, extend to the final width in one continuous process, then rewrite existing data. |
| **Extend VDEV one drive at a time** | Fill the existing VDEV to its threshold percentage, the extend by one additional drive. Continue filling the VDEV until the threshold is reached, then extend by one more drive. Repeat until the final width is reached, then rewrite existing data. This scenario results in more lost headroom available for recovery because there is more data that is not written with the final data-to-parity ratio. |
{{< /truetable >}}
{{< /expand >}}

{{< extension-calculator >}}

<div style="text-align: right; font-size: smaller; padding-top: 1em;">
    Adapted from this <a href="https://docs.google.com/spreadsheets/d/1qiDPfLN-K88FMHMxcgtkxswY5Wtu7h9tBAOgJfnO7VE/edit?usp=sharing">spreadsheet</a> with thanks to TrueNAS community member <a href="https://forums.truenas.com/u/yorick/summary">yorick</a> (<a href="https://github.com/yorickdowne">github</a>). <br> Additional contributions from <a href="https://www.truenas.com/community/threads/raidz-expansion-its-happening-someday.58575/page-11#post-649581">DayBlur</a> and <a href="https://github.com/louwrentius">Louwrentius</a>.
</div>
