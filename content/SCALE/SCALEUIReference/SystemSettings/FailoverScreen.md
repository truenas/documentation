---
title: "Failover Screen"
description: "This article provides information on the **Failover** screen settings and functions."
weight: 45
aliases:
tags:
- scaleenterprise
- scalefailover
---


{{< enterprise >}}
This article only applies to SCALE Enterprise (HA) systems
{{< /enterprise >}}

The **System Settings > Failover** screen displays settings used on SCALE Enterprise (HA) systems to turn the failover function on or off, sync the primary and standby controllers, and allow administrator users to configure failover. The main menu option and screen only display on Enterprise (HA) systems with the correct license applied.

![FailoverScreen](/images/SCALE/22.12/FailoverScreen.png "Failover Screen")

| Setting | Description |
|---------|-------------|
| **Disable Failover** | Select to turn failover off. Leave clear to enable failover. |
| **Default TrueNAS controller** | Select to make the current active controller the default controller when both TrueNAS controllers are online and HA is enabled. To change the default TrueNAS controller, leave unselected on the default TrueNAS controller and allow the system to fail over. This process briefly interrupts system services. |
| **Network Timeout Before Initiating Failover** | Enter a number in seconds to wait after a network failure before triggering a failover. Default is **0** which means failover occurs immediately, or after two seconds when the system is using a link aggregate. |
| **Sync To Peer** | Initiates a sync operation that copies over the primary controller configuration to the standby controller. Opens the **[Sync To Peer](#sync-to-or-from-peer)** dialog to confirm the operation. |
| **Sync From Peer** | Initiates a sync operation that copies over the standby controller configuration to the primary controller. |

## Sync To or From Peer
**Sync To Peer** and **Sync From Peer** buttons each open a confirmation dialog before SCALE performs the operation requested.

![FailoverSyncToPeerDialog](/images/SCALE/22.12/FailoverSyncToPeerDialog.png "Failover Sync To Peer Dialog")

| Setting | Description |
|---------|-------------|
| **Reboot standby TrueNAS controller** | Select to cause the standby controller to reboot after the sync operation completes. |
| **Confirm** | Select to confirm you want to perform the sync-to-peer operation. |
| **Proceed** | Begins the sync operation. |


{{< taglist tag="scaleEnterprise" limit="10" title="Related Enterprise Articles" >}}