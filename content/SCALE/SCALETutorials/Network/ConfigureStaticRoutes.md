---
title: "Configuring Static Routes"
description: "Provides instructions on configuring a static route using the SCALE web UI."
weight: 35
tags:
- scalenetwork
- scaleinterface
---


TrueNAS does not have defined static routes by default but TrueNAS administrators can use the **Static Routes** widget on the **Network** screen to manually enter routes so a router can send packets to a destination network.

{{< hint type=note >}}
If you have a monitor and keyboard connected to the system you can use the [Console setup menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}) to configure static routes during the installation process, but we recommend using the web UI for all configuration tasks.
{{< /hint >}}

If you need a static route to reach portions of the network, from the **Network** screen:

1. Click **Add** in the **Static Routes** widget. The **Add Static Route** configuration screen displays. 
   
   ![AddStaticRoute](/images/SCALE/22.02/AddStaticRoute.png "Add Static Routes")

2. Enter a value in **Destination**. Enter the destination IP address and CIDR mask in the format *A.B.C.D/E* where *E* is the CIDR mask.

3. Enter the gateway IP address for the destination address in **Gateway**.

4. (Optional) Enter a brief description for this static route, such as the part of the network it reaches.

5. Click **Save**.

{{< taglist tag="scaleinterface" limit="10" >}}