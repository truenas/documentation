---
title: "Resilver Priority"
weight: 70
---

{{< toc >}}

Resilvering is a process that copies data to a replacement disk and is best completed as quickly as possible.
Increasing the priority of resilvers helps them finish faster.
The **Resilver Priority** menu allows you to schedule when a resilver can become a higher priority for the system.
This means scheduling resilvers when the additional I/O or CPU use does not affect normal usage.

Go to **Tasks > Resilver Priority** to configure the priority to a time that is most effective for your environment.

![TasksResilverPriority](/images/CORE/12.0/TasksResilverPriority.png "Scheduling Resilver Priority Times")

{{< include file="static/includes/TasksResilverPriorityFields.md.part" markdown="true" >}}

{{< hint info >}} 
A resilver process running during the time-frame defined between "Begin Time" and "End Time" will likely work faster, as it is not being throttled to run at a lower priority.
Keep in mind that it is advised to avoid putting the system under any intensive activity or heavy loads (replications, SMB transfers, NFS transfers, Rsync transfers, S.M.A.R.T. tests, pool scrubs, etc) during a resilver process. 
{{< /hint >}}
