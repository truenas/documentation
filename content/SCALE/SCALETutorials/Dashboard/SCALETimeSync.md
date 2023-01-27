---
title: "Synchronizing System and SCALE Time"
description: "This article provides instructions on syncronizating the system server and TrueNAS SCALE time when both are out of alignment with each other."
weight: 10
aliases:
tags:
- scaletimesync
---

TrueNAS SCALE provides the ability to synchronize SCALE and system server time when they get out of sync with each other. 
This function is not designed to correct time differences weeks out of alignment.

The **System Information** widget on the main **[Dashboard]({{< relref "/SCALE/SCALEUIReference/SCALEDashboard.md" >}})** displays a message and provides an icon button that executes the time-synchronization operation only when SCALE detects a discrepancy between SCALE and system server time.

![DashboardSytemInfoWidgetTimeSync](/images/SCALE/22.12/DashboardSytemInfoWidgetTimeSync.png "System Information Widget with Time Sync")

Click the **Synchronize Time** <span class="material-icons">loop</span> icon button to initiate the time-synchronization operation.

{{< taglist tag="scaletimesync" limit="10" >}}