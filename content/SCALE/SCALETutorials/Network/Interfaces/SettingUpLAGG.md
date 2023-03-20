---
title: "Setting Up a Link Aggregation"
description: "This article provides instructions on setting up a network link aggregation (LAGG) interface."
weight: 25
tags:
- scalenetwork
- scaleinterface
---


In general, a [link aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) is a method of combining (aggregating) multiple network connections in parallel to provide additional bandwidth or redundancy for critical networking situations. 
TrueNAS uses [lagg(4)](https://wiki.debian.org/BridgeNetworkConnections) to manage LAGGs.

To set up a LAGG, from the **Network** screen:

1. Click **Add** in the **Interfaces** widget. The **Add Interface** configuration screen displays.
   
   ![AddInterfaceLinkAggregationTypes](/images/SCALE/22.02/AddInterfacePanel.png "Add Interface Settings")

2. Select **Link Aggregation** from the **Type** dropdown list. You cannot change the **Type** field value after you click **Apply**.

3. Enter a name for the interface using the format *bondX*, where *X* is a number representing a non-parent interface.
   You cannot change the **Name** of the interface after you click **Apply**.

4. (Optional but recommended) Enter any notes or reminders about this particular LAGG interface in the **Description** field.

5. Select the **Link Aggregation Settings** for this interface. 

![AddInterfaceLinkAggregationSettings](/images/SCALE/22.12/AddInterfaceLinkAggregationSettings.png "Add Interface Settings")

{{< expand "LACP" "v" >}}
Select **LACP** to use the most common protocol for LAGG interfaces based on [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf).

In LACP mode, the interfaces negotiate with the network switch to form a group of ports that are all active once. The network switch must support LACP for this option to function.

Select the **Transmit Hash Policy** option from the dropdown list. **LAYER2+3** is the default selection.

Select the **LACPDU Rate** to use. 
* Select **SLOW** (default) to set the heartbeat request to every second and the timeout to a three-consecutive heartbeat loss that is three seconds. 
* Select **FAST** to set the timeout rate at one per second even after synchronization. Using **FAST** allows for rapid detection of faults.

Select the interfaces to use in the aggregation.
{{< /expand >}}

{{< expand "FAILOVER" "v" >}}
Select **FAILOVER** to have traffic sent through the primary interface of the group. If the primary interface fails, traffic diverts to the next available interface in the LAGG.

Select the interfaces to use in the aggregation.
{{< /expand >}}

{{< expand "LOADBALANCE" "v" >}}
Select **LOADBALANCE** to accept traffic on any port of the LAGG group and balance the outgoing traffic on the active ports in the LAGG group. **LOADBALANCE** is a static setup that does not monitor the link state or negotiate with the switch.

Select the **Transmit Hash Policy** option from the dropdown list. **LAYER2+3** is the default selection.

Select the interfaces to use in the aggregation.
{{< /expand >}}

6. (Optional) Click **Add** to enter another IP address if desired for this LAGG interface. Click **Add** to display an IP address field for each IP address you want to add.

7. Click **Save** when finished.

{{< taglist tag="scaleinterface" limit="10" >}}

{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}