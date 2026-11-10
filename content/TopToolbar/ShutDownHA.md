---
title: Shutting Down TrueNAS Enterprise HA
description: "Describes the procedure for shutting down an Enterprise HA system in TrueNAS."
weight: 30
tags:
- HA
- toolbar
- install
doctype: tutorial
---


{{< enterprise >}}
This procedure applies to TrueNAS Enterprise High Availability (HA) systems only.
{{< /enterprise >}}

Some TrueNAS models do not support using the UI **Shutdown** option on the power menu.
Instead of shutting down the server, it only reboots.

To shutdown a TrueNAS Enterprise HA system, log into the IPMI connections for each controller and use the Console Setup menu option to shutdown the system.

Selecting the TrueNAS UI **Shutdown** option on the power menu to shut down the HA system only results in the system failing over to the standby controller.

## Shutting Down a TrueNAS HA System

{{< hint type=hint >}}
Disabling failover in the TrueNAS UI is not necessary and only results in uncertainty as to which controller comes up as the active controller when you power up the HA system.
{{< /hint >}}

1. Sign into the IPMI connections to both the active and standby controllers.

2. Shut down the standby controller using the Console Setup menu **Shutdown** option.

3. Shut down the active controller.

## Powering Up a TrueNAS HA System

After shutting down the TrueNAS System, use the IPMI remote controls to power up the servers, starting with the active controller.

1. Log in to the IPMI connections for both servers.

2. Use the remote power control options to start controller 1 (active controller).

3. Use the remote power control options to start controller 2 (standby controller).

4. Wait for the TrueNAS UI to come up, then use the VIP IP address or hostname to log into the UI.

5. Check the main dashboard to see which controller is active. Controller 1 should be the active controller, but if not, fail over the system and recheck to make sure it is the active controller.

