---
title: Shutting Down TrueNAS Enterprise HA
description: "Describes the procedure for shutting down an Enterprise HA system in TrueNAS."
weight: 50
tags:
- HA
- toolbar
- install
---

{{< enterprise >}}
This procedure applies to TrueNAS Enterprise High Availability (HA) systems only.
{{< /enterprise >}}

Some TrueNAS models do not support using the UI **Shutdown** option on the power menu.
Instead of shutting down the server, it only reboots.

To shutdown a TrueNAS Enterprise HA system, log into the IPMI connections for each controller and use the Console Setup menu option to shutdown the system.

Selecting the TrueNAS UI **Shutdown** option on the power menu to shut down the HA system only results in the system failing over to the standby controller.

## Shutting Down the TrueNAS HA System

While logged into the TrueNAS Web UI using the virtual IP (VIP):

1. Disable failover in the web UI. Go to **System > Advanced Settings > Failover**, click **Configure**, disable the failover option, and then click **Save**.

2. Sign into the IPMI connections to both the active and standby controllers.

3. Shut down the standby controller using the Console Setup menu **Shutdown** option.

4. Shut down the active controller.

## Powering Up the TrueNAS HA System

After shutting down the TrueNAS System, use the IPMI remote controls to power up the servers, starting with the active controller.

1. Log in to the IPMI connections for both servers.

2. Use the remote power control options to start the active controller.

3. Use the remote power control options to start the standby controller.

4. Wait for the TrueNAS UI to come up, then use the VIP IP address or hostname to log into the UI.

5. Enable failover on the primary controller. Go to **System > Advanced Settings > Failover**, click **Configure**, enable failover, and click **Save**.

6. Check the main dashboard to see which controller is active. If standby controller 2 is active, fail over to controller 1.

