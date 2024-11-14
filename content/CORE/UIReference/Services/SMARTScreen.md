---
title: "S.M.A.R.T. Screen"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/services/smartscreen/"
description: "Describes the S.M.A.R.T. screen in TrueNAS CORE."
weight: 100
tags:
- smart
---

Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) is an industry standard. S.M.A.R.T. performs disk monitoring and testing. It checks drive reliability and predicts hardware failures.

{{< hint type=important >}}
S.M.A.R.T. tests run on disks.
Running tests can reduce drive performance. We recommend scheduling tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, do not schedule S.M.A.R.T. tests on the same day as a disk [scrub]({{< relref "CORE/CORETutorials/Tasks/CreatingScrubTasks.md" >}}) or [resilver]({{< relref "CORE/CORETutorials/Tasks/UsingResilverPriority.md" >}}).
{{< /hint >}}

![ServicesSMARTOptions](/images/CORE/Services/ServicesSMARTOptions.png "S.M.A.R.T. Options")

{{< include file="/static/includes/ServicesSMARTFields.md" >}}
