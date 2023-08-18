---
title: "Using Resilver Priority"
description: "Describes how to configure resliver priority tasks on TrueNAS CORE."
weight: 70
tags:
- corezfstasks
- coreresilverpriority
---

{{< toc >}}

Resilvering is a process that copies data to a replacement disk. You should complete it as quickly as possible.
Increasing the priority of resilvers helps them finish faster.
The **Resilver Priority** menu allows you to schedule when a resilver can become a higher priority for the system.
You should schedule resilvers when the additional I/O or CPU use does not affect normal usage.

Go to **Tasks > Resilver Priority** to configure the priority to the best time for your environment.

![TasksResilverPriority](/images/CORE/12.0/TasksResilverPriority.png "Scheduling Resilver Priority Times")

Set **Enabled**, then use the drop-down menus to select a **Begin** and **End** time and what days of the week you want the priority to run.

{{< hint type=note >}} 
A resilver process running during the time frame defined between "Begin Time" and "End Time" will likely work faster.
We advise you avoid putting the system under any intensive activity or heavy loads (replications, SMB transfers, NFS transfers, Rsync transfers, S.M.A.R.T. tests, pool scrubs, etc) during a resilver process. 
{{< /hint >}}

{{< taglist tag="coreresilverpriority" limit="10" >}}

{{< taglist tag="corezfstasks" limit="10" title="Related ZFS Tasks Articles">}}
