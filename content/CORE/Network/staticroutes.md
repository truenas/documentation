---
title: "Defining a Static Route"
tags: ["networking"]
---

No static routes are defined on a default TrueNAS system.
If a static route is required to reach portions of the network, add the route by going to **Network > Static Routes** and clicking **ADD**.

<img src="/images/NetworkStaticRoutesAdd.png">
<br><br>

| Setting | Value | Description |
|---------|-------|-------------|
| Destination | integer | Use the format *A.B.C.D/E* where *E* is the CIDR mask. |
| Gateway | integer | Enter the IP address of the gateway. |
| Description | string | Notes or identifiers describing the route. |