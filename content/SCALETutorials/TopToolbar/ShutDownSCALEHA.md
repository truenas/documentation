---
title: Shutting Down SCALE Enterprise HA
description: "Describes the procedure for shutting down an Enterprise HA system in TrueNAS SCALE."
weight: 50
tags:
- HA
- toolbar
- install
---

{{< enterprise >}}
This procedure applies to SCALE Enterprise High Availability (HA) systems only.
{{< /enterprise >}}

If you need to power down your SCALE Enterprise system with HA enabled, this is the procedure:

## Shut Down From the SCALE Web UI

![PowerButtonSCALE](/images/SCALE/Dashboard/PowerButtonSCALE.png "Power Button SCALE")

While logged into the SCALE Web UI using the virtual IP (VIP), click the power button in the top right corner of the screen.

1. Select **Shut Down** from the dropdown list.

2. This shuts down the active controller.

3. The system fails over to the standby controller.

4. When the SCALE Web UI login screen displays, log back in to the system. This logs you in to the standby controller.

5. Click the power button in the top right corner of the screen.

6. Select **Shut Down** from the dropdown list.

7. This shuts down the standby controller.
