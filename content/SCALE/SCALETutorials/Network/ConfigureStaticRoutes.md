---
title: "Configuring Static Routes"
description: "This article guides user through configuring a static route using the SCALE web UI."
weight: 40
tags:
- scalenetwork
- scaleinterface
---


TrueNAS does not have defined static routes by default but TrueNAS administrators can use the **Static Routes** widget on the **Network** screen to manually enter routes so the router can send packets to a destination network.

{{< hing info >}}
If you have a monitor and keyboard connected to the system you can use the Console Setup Menu to configure static routes.
{{< /hint >}}

If you need a static route to reach portions of the network, from the **Network** screen:

1. Click **Add** in the **Static Routes** widget. The **Add Static Route** configuration screen displays. 
   
   ![AddStaticRoute](/images/SCALE/22.02/AddStaticRoute.png "Add Static Routes")

2. Enter a value in **Destination**. Enter the destination IP address and CIDR mask in the format *A.B.C.D/E* where *E* is the CIDR mask.

3. Enter the gateway IP address for the destination address in **Gateway**.

4. (Optional) Enter a brief description for this static route, such as the part of the network it reaches.

5. Click **Save**.

{{< taglist tag="scalenetwork" limit="10" >}}
{{< taglist tag="scaleinterface" limit="10" "Related Interface Articles" >}}