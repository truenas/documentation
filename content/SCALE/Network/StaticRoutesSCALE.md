---
title: "Static Routes"
weight: 20
---

{{< toc >}}

TrueNAS administrators can use the *Static Routes* section to manually enter routes so the router can send packets to a destination network.

![StaticRoutesSCALE](/images/SCALE/StaticRoutesSCALE.png "Static Routes")

TrueNAS does not have defined static routes by default.
If you need a static route to reach portions of the network, add the route by going to **Network** and clicking *Add* in the *Static Routes* window .

![AddStaticRouteSCALE](/images/SCALE/AddStaticRouteSCALE.png "Add Static Route")

| Setting | Description |
|---------|-------------|
| Destination | Use the format *A.B.C.D/E* where *E* is the CIDR mask. |
| Gateway | Enter the IP address of the gateway. |
| Description | Notes or identifiers describing the route. |
