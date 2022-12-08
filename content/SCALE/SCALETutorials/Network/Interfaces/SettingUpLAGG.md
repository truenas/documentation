---
title: "Setting Up a Link Aggregation"
description: "This article provides instructions on setting up a network link aggregation (LAGG) interface."
weight: 25
tags:
- scalenetwork
- scaleinterface
---


In general, a [link aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) a general method of combining (aggregating) multiple network connections in parallel to provide additional bandwidth or redundancy for critical networking situations. 
TrueNAS uses [lagg(4)](https://wiki.debian.org/BridgeNetworkConnections) to manage LAGGs.

To set up a LAGG interface, from the **Network** screen:

1. Click **Add** in the **Interfaces** widget. The **Add Interface** configuration screen displays.
   
   ![AddInterfaceLinkAggregationTypes](/images/SCALE/22.12/AddInterfaceLinkAggregationType.png "Add LAGG Interface Settings")

2. Select **Link Aggregation** from the **Type** dropdown list. You cannot change the **Type** field value after you click **Apply**.

   ![AddInterfaceLAGGSelected](/images/SCALE/22.12/AddInterfaceLAGGSelected.png "Select Link Aggregation")

3. Enter a name for the interface using the format *laggX* where *X* is a number representing a non-parent interface.
   You cannot change the **Name** of the interface after you click **Apply**.

3. (Optional but recommended) Enter any notes or reminders about this particular LAGG interface in the **Description** field.

4. Select the **Link Aggregation Settings** for this interface. 

   a. Select the **Link Aggregation Protocol** from the dropdown list of options. There are three protocol options, **LACP**, **FAILOVER** and **LOADBALANCE**. 
      Additional fields display based on the LAGG protocol you select.

      Select **LACP** to use the most common protocol for LAGG interfaces based on [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf).
      In LACP mode, negotiation is performed with the network switch to form a group of ports that are all active at the same time. The network switch must support LACP for this option to function.

      Select **FAILOVER** to have traffic sent through the primary interface of the group. If the primary interface failes, traffic diverts to the next available interface in the LAGG.

      Select **LOADBALANCE** to accept traffic on any port of the LAGG group and balance the outgoing traffic on the active ports in the LAGG group. This is a static setup that does not monitor the link state nor does it negotiate with the switch.

   b. Select the LAGG interfaces from the **Link Aggregation Interfaces**.

   c. If the protocol selected is **LACP** or **LOADBALANCE**, select the **Transmit Hash Policy** option from the dropdown list. **LAYER2+3** is the default selection.

   d. If the protocol selected is **LACP**, select the **LACPDU Rate** to used. 
      Select **SLOW** to set the heartbeat request to every second and the timeout to a three-consecutive heartbeat loss that is three seconds (default is SLOW).
      Select **FAST** to set the timeout rate at one per second even after synchronization. Using **FAST** allows for rapid detection of faults.

5. (Optional) Click **Add** to enter another IP address if desired for this LAGG interface. Click **Add** to display an IP address field for each IP address you want to add.

6. Click **Save** when finished.

{{< taglist tag="scaleinterface" limit="10" >}}

{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}