---
title: "Synchronizing System and SCALE Time"
description: "This article provides instructions on syncronizating the system server and TrueNAS SCALE time when both are out of alignment with each other."
weight: 10
aliases:
tags:
- scaletimesync
---

TrueNAS SCALE allows users to synchronize SCALE and system server time when they get out of sync. 
This function does not correct time differences over 30 days out of alignment.

The **System Information** widget on the **[Dashboard]({{< relref "/SCALE/SCALEUIReference/SCALEDashboard.md" >}})** displays a message and provides an icon button that executes the time-synchronization operation only when SCALE detects a discrepancy between SCALE and system server time.

![DashboardSytemInfoWidgetTimeSync](/images/SCALE/22.12/DashboardSytemInfoWidgetTimeSync.png "System Information Widget with Time Sync")

Click the **Synchronize Time** <span class="material-icons">loop</span> icon button to initiate the time-synchronization operation.

{{< expand "What if my time is off by more than 30 days?" "v" >}}
If your time is off by more than 30 days, TrueNAS SCALE does not allow you to sync since the system probably has one of the following underlying issues:

* The BIOS timezone is incorrect
* The motherboard CMOS battery is failing

To check the BIOS timezone, reboot your system. During boot, press the indicated key that takes you to the BIOS setup screen. The key differes based on manufacturer (<kbd>F2</kbd>, <kbd>Delete</kbd>, <kbd>Esc</kbd>, etc.). If you don't know which key to use, check the manufacturer documentation for your server.

Once you have entered the BIOS setup, ensure the timezone is UTC. If not, set it to UTC, save the configuration changes, and reboot the system.

A dying motherboard CMOS battery can also cause the system clock to be incorrect. If you intend to replace your CMOS, be sure to follow [electrostatic discharge (ESD) safety measures](https://www.wikihow.com/Ground-Yourself-to-Avoid-Destroying-a-Computer-with-Electrostatic-Discharge). 
{{< /expand >}}

{{< expand "I corrected my system time issue. Why won't my apps start?" "v" >}}
If you corrected your system time issues (changed BIOS time, replaced CMOS, etc.) and your apps won't start, ensure all apps have their timezones set to *'UTC' timezone*.
{{< /expand >}}

{{< taglist tag="scaletimesync" limit="10" >}}
