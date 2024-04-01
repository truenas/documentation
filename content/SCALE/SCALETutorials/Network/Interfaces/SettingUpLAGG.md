---
title: "Setting Up a Link Aggregation"
description: "Provides instructions on setting up a network link aggregation (LAGG) interface."
weight: 25
tags:
- network
- interfaces
---

In general, a [link aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) is a method of combining (aggregating) multiple network connections in parallel to provide additional bandwidth or redundancy for critical networking situations. 
TrueNAS uses [lagg(4)](https://wiki.debian.org/BridgeNetworkConnections) to manage LAGGs.

{{< include file="/static/includes/BeforeYouBridge.md" >}}

To set up a LAGG, go to **Network**, click **Add** on the **Interfaces** widget to open the **Add Interface** screen, then:
   
1. Select **Link Aggregation** from the **Type** dropdown list. You cannot change the **Type** field value after you click **Save**.
   
   {{< trueimage src="/images/SCALE/Network/AddInterfacePanel.png" alt="Add Interface" id="Add Interface" >}}

2. Enter a name for the interface using the format **bond*X***, where *X* is a number representing a non-parent interface.
   You cannot change the **Name** of the interface after clicking **Apply**.

3. (Optional, but recommended) Enter any notes or reminders about this particular LAGG interface in **Description**.

4. Select the protocol from the **Link Aggregation Protocol** dropdown. Options are **LACP**, **FAILOVER**, or **LOADBALANCE**. Each option displays additional settings.

   {{< trueimage src="/images/SCALE/Network/AddInterfaceLinkAggregationSettings.png" alt="Add Interface Settings" id="Add Interface Settings" >}}
   
   ![AddInterfaceLinkAggregationSettings](/images/SCALE/Network/AddInterfaceLinkAggregationSettings.png "Add Interface Settings")
   
   {{< expand "LACP" "v" >}}
   **LACP** is the most common protocol for LAGG interfaces based on [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf).
   
   In LACP mode, the interfaces negotiate with the network switch to form a group of ports that are all active once.
   The network switch must support LACP for this option to function. 
   
   a. Select the hash policy from the **Transmit Hash Policy** dropdown list. **LAYER2+3** is the default selection.

   b. Select the **LACPDU Rate** Option: 

   **SLOW** (default) sets the heartbeat request to every second and the timeout to a three-consecutive heartbeat loss that is three seconds. 

   **FAST** sets the timeout rate at one per second even after synchronization. **FAST** allows for rapid detection of faults.
   {{< /expand >}}
   {{< expand "FAILOVER" "v" >}}
   Select **FAILOVER** send traffic through the primary interface of the group. If the primary interface fails, traffic diverts to the next available interface in the LAGG. 
   {{< /expand >}}
   {{< expand "LOADBALANCE" "v" >}}
   Select **LOADBALANCE** to accept traffic on any port of the LAGG group and balance the outgoing traffic on the active ports in the LAGG group. 
   **LOADBALANCE** is a static setup that does not monitor the link state or negotiate with the switch.

   Select the **Transmit Hash Policy** option from the dropdown list. **LAYER2+3** is the default selection.
   {{< /expand >}}

5. Select the interfaces to use in the aggregation from the **Link Aggregation Interface** dropdown list.

6. (Optional) Click **Add** to the right of **Aliases** to show additional IP address fields for each additional IP address to add to this LAGG interface.

7. Click **Save** when finished.
