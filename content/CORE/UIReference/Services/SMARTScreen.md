---
title: "S.M.A.R.T. Screen"
description: "Use the S.M.A.R.T. screen to configure Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) on your TrueNAS."
weight: 100
tags:
- coresmart
---

Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) is an industry standard for disk monitoring and testing. It is used to evaluate drive reliability and predict hardware failures.

{{< hint warning >}}
S.M.A.R.T. tests are run on a disk.
Running tests can reduce drive performance, so we recommend scheduling tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, S.M.A.R.T. tests should not be scheduled on the same day as a disk [scrub]({{< relref "CORE/CORETutorials/Tasks/CreatingScrubTasks.md" >}}) or [resilver]({{< relref "CORE/CORETutorials/Tasks/UsingResilverPriority.md" >}}).
{{< /hint >}}

![ServicesSMARTOptions](/images/CORE/12.0/ServicesSMARTOptions.png "S.M.A.R.T. Options")

{{< include file="static/includes/Reference/ServicesSMARTFields.md.part" markdown="true" >}}

{{< taglist tag="coresmart" limit="10" >}}
