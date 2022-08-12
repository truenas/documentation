---
title: "Setting Up a Network Bridge"
description: "This article provides instructions on setting up a network bridge interface."
weight: 20
tags:
- scalenetwork
- scaleinterface
---


In general, a [bridge](https://tools.ietf.org/html/rfc6325) refers to various methods of combining (aggregating) multiple network connections into a single aggregate network.
TrueNAS uses [bridge(4)](https://www.freebsd.org/cgi/man.cgi?bridge(4)) as the kernel bridge driver. 
[Bridge(8)](https://wiki.linuxfoundation.org/networking/bridge) is a command for configuring the kernal bridge in Linux. 
While the examples focus on the deprecated brctl(8) from the bridge-utilities package, we use ip(8) and bridge(8) from iproute2 instead. Refer to the FAQ section that covers bridging topics more generally.

To set up a bridge interface, from the **Network** screen:

1. Click **Add** in the **Interfaces** widget. The **Add Interface** configuration screen displays.
   
   ![AddInterfaceBridgeType](/images/SCALE/22.02/AddInterfaceBridgeType.png "Add Bridge Interface")

2. Select **Bridge** from the **Type** dropdown list. You cannot change the **Type** field value after you click **Apply**.

3. Enter a name for the interface using the format *bridgex* where *x* is a number representing a non-parent interface.
   You cannot change the **Name** of the interface after you click **Apply**.

3. (Optional but recommended) Enter any notes or reminders about this particular bridge in the **Description** field.

4. Select the interfaces on the **Bridge Members** dropdown list.

5. (Optional) Click **Add** to enter another IP address if desired for this bridge interface. Click **Add** to display an IP address field for each IP address you want to add.

6. Click **Apply** when finished.

{{< taglist tag="scaleinterface" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}