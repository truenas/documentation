---
title: "Managing Network Settings (Enterprise HA)"
description: "Provides instructions on how to make changes to network settings on TrueNAS Enterprise (HA) systems."
weight: 25
tags:
- enterprise
- failover
- network
---

{{< enterprise >}}
The instructions in the article only apply to TrueNAS Enterprise (HA) systems.
{{< /enterprise >}}

## Configuring Enterprise (HA) Network Settings
{{< include file="/static/includes/ConfigureController1Networking.md" >}}

6. Turn failover back on.
   Go to **System > Failover** and select **Disable Failover** to clear the checkmark and turn failover back on, then click **Save**.

   The system might restart.
   Monitor the status of controller 2 and wait until the controller is back up and running, then click **Sync To Peer**.
   Select **Reboot standby TrueNAS controller** and **Confirm**, then click **Proceed** to start the sync operation.
   The controller restarts, and TrueNAS syncs controller 2 with controller 1, which adds the network settings and pool to controller 2.

   {{< trueimage src="/images/SCALE/SystemSettings/FailoverSyncToPeerDialog.png" alt="Failover Sync To Peer" id="Failover Sync To Peer" >}}
