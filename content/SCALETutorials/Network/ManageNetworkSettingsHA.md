---
title: "Managing Network Settings (Enterprise HA)"
description: "Provides instructions on how to make changes to network settings on SCALE Enterprise (HA) systems."
weight: 25
aliases:
tags:
- enterprise
- failover
- network
---

{{< enterprise >}}
The instructions in the article only apply to SCALE Enterprise (HA) systems.
{{< /enterprise >}}

{{< include file="/static/includes/EnterpriseHANetworkIPs.md" >}}

## Configuring Enterprise (HA) Network Settings
{{< include file="/static/includes/ConfigureController1Networking.md" >}}

6. Turn failover back on.
   Go to **System Settings > Failover** and select **Disable Failover** to clear the checkmark and turn failover back on, then click **Save**.

   The system might reboot.
   Monitor the status of controller 2 and wait until the controller is back up and running, then click **Sync To Peer**.
   Select **Reboot standby TrueNAS controller** and **Confirm**, then click **Proceed** to start the sync operation.
   The controller reboots, and SCALE syncs controller 2 with controller 1, which adds the network settings and pool to controller 2.

   {{< trueimage src="/images/SCALE/SystemSettings/FailoverSyncToPeerDialog.png" alt="Failover Sync To Peer" id="Failover Sync To Peer" >}}
