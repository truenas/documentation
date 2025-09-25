---
title: "Static Routes Widget"
description: "The Static Routes widget displays existing static routes or sets up new ones."
weight: 30
tags:
- network
- static routes
---

The **Static Routes** widget on the **Network** screen shows static IP addresses configured as static routes.
Allows manual entry of IP address routes to network destinations outside the TrueNAS network so the router can send packets to a destination network.

{{< trueimage src="/images/SCALE/Network/StaticRoutes.png" alt="Static Routes" id="Static Routes" >}}

TrueNAS does not have defined static routes by default.

**Add** opens the **Add Static Route** screen where you can enter a static route to reach portions of the network.

{{< trueimage src="/images/SCALE/Network/AddStaticRoute.png" alt="Add Static Route" id="Add Static Route" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Destination** |The destination IP address entered in the format *A.B.C.D/E* where *E* is the CIDR or netmask. This is a required field. |
| **Gateway** |The IP address of the gateway. This is a required field. |
| **Description** | Text entry field for any notes or an identifier describing the route. |
{{< /truetable >}}

**Save** adds the static route in TrueNAS.