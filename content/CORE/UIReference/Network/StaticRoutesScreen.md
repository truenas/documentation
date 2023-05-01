---
title: "Static Routes Screen"
description: "This article describes how to configure static routes in TrueNAS CORE."
weight: 40
tags:
- corestaticroutes
- corenetworkinterfaces
---

Use the **Network Static Routes** screen to define static routes on your TrueNAS. By default, no static routes are defined on a default TrueNAS system.

![NetworkStaticRoutesScreen](/images/CORE/13.0/NetworkStaticRoutesScreen.png "Network Static Routes Screen")

Use the blue **Columns** button to display options to change the information displayed in the **Static Routes** table. Options are **Unselect All**, **Gateway**, **Description** or **Reset to Defaults**.

Use **Add** to dispay the **Static Routes Add** screen.

## Static Route Add Screen

![StaticRouteAddScreen](/images/CORE/13.0/StaticRouteAddScreen.png "Static Route Add Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Destination** | Enter the desination IP using the format *A.B.C.D/E* where *E* is the CIDR mask. |
| **Gateway** | Enter the IP address of the gateway. |
| **Description** | Enter any notes or identifiers describing the static route. |
{{< /truetable >}}

The **SUBMIT** button activates after entering values in the required fields. Use **CANCEL** to exit without saving and retun to the **Static Routes** screen.

{{< taglist tag="corenetworkinterfaces" limit="10" >}}
