---
title: "Static Routes Widget"
description: "The Static Routes widget displays existing static routes or sets up new ones."
weight: 30
tags:
- scalenetwork
- scalesinterfaces
---

The **Static Routes** widget on the **Network** screen displays static IP addresses configured as static routes. Use this to manually enter routes to network destinations outside the TrueNAS network so the router can send packets to a destination network.

![StaticRoutesSCALE](/images/SCALE/StaticRoutesSCALE.png "Static Routes")

TrueNAS does not have defined static routes by default.
If you need a static route to reach portions of the network, add the route by going to **Network** and clicking **Add** in the **Static Routes** window.

![AddStaticRouteSCALE](/images/SCALE/AddStaticRouteSCALE.png "Add Static Route")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Destination** | Enter the destination IP address using the format *A.B.C.D/E* where *E* is the CIDR mask. This is a required field. |
| **Gateway** | Enter the IP address of the gateway. This is a required field. |
| **Description** | Enter notes or an identifier describing the route. |
{{< /truetable >}}

Use **Save** to add the static route.

{{< taglist tag="scaleinterfaces" limit="10" >}}

{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}