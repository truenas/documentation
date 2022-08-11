---
title: "S.M.A.R.T. Screen"
description: "Use the S.M.A.R.T. screen to configure Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) on your TrueNAS."
weight: 100
tags:
- coresmart
---

Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) is an industry standard. S.M.A.R.T. performs disk monitoring and testing. It checks drive reliability and predicts hardware failures.

{{< hint warning >}}
S.M.A.R.T. tests run on disks.
Running tests can reduce drive performance. We recommend scheduling tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, do not schedule S.M.A.R.T. tests on the same day as a disk [scrub]({{< relref "CORE/CORETutorials/Tasks/CreatingScrubTasks.md" >}}) or [resilver]({{< relref "CORE/CORETutorials/Tasks/UsingResilverPriority.md" >}}).
{{< /hint >}}

![ServicesSMARTOptions](/images/CORE/12.0/ServicesSMARTOptions.png "S.M.A.R.T. Options")

{{< include file="static/includes/Reference/ServicesSMARTFields.md.part" markdown="true" >}}

{{< taglist tag="coresmart" limit="10" >}}
