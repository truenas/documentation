---
title: "Setting Up a Link Aggregation"
description: "Provides instructions on setting up a link aggregation (bond) interface."
weight: 20
tags:
- network
- interfaces
doctype: tutorial
aliases:
 - /scaletutorials/network/interfaces/settinguplagg/
 - /network/interfaces/settinguplagg/
---


A link aggregation combines multiple network interfaces into a single logical **bond** interface (e.g., *bond0*, *bond1*) to provide additional bandwidth or redundancy.
TrueNAS implements link aggregation using [Linux kernel bonding](https://docs.kernel.org/networking/bonding.html).

## Before You Begin

{{< include file="/static/includes/InterfaceBeforeYouBegin.md" >}}
{{< include file="/static/includes/BeforeYouBridge.md" >}}

If configuring an LACP link aggregation, configure a port-channel or link aggregation group on your network switch before creating the bond interface in TrueNAS.
The switch ports connected to your TrueNAS interfaces must be configured for LACP (IEEE 802.3ad) and active before TrueNAS can successfully negotiate the link aggregation.
Consult your switch documentation for specific configuration steps.

{{< include file="/static/includes/TestingNetworkChanges.md" >}}

## Adding a Link Aggregation Interface

To set up a link aggregation, go to **Network**, click **Add** on the **Interfaces** widget to open the **Add Interface** screen, then:

1. Select **Link Aggregation** from the **Type** dropdown list. You cannot change the **Type** field value after you click **Save**.

{{< trueimage src="/images/SCALE/Network/AddInterfaceLAGG.png" alt="Add Link Aggregation Interface" id="Add Link Aggregation Interface" >}}

   Name populates with the default name for a link aggregation interface, **bond1**.

   You cannot change the **Name** of the interface after clicking **Apply**.

   Leave **Define Static IP Addresses** selected.

2. (Optional, but recommended) Enter any notes or reminders about this particular link aggregation interface in **Description**.

3. Select the protocol from the **Link Aggregation Protocol** dropdown. Options are **LACP**, **FAILOVER**, or **LOADBALANCE**. Each option displays additional settings.

   {{< expand "LACP" "v" >}}
   **LACP** is the most common protocol for link aggregation interfaces based on [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf).

   In LACP mode, the interfaces negotiate with the network switch to form a group of ports that are all active at once.
   The network switch must support LACP for this option to function.

   a. Select the hash policy from the **Transmit Hash Policy** dropdown list. **LAYER2+3** is the default selection.

   b. Select the **LACPDU Rate** options are **Slow** or **Fast**.

   **SLOW** (default) sets the heartbeat request to every second and the timeout to a three-consecutive heartbeat loss that is three seconds.

   **FAST** sets the timeout rate at one per second, even after synchronization. **FAST** allows for rapid detection of faults.
   {{< /expand >}}
   {{< expand "FAILOVER" "v" >}}
   Select **FAILOVER** to send traffic through the primary interface of the group. If the primary interface fails, traffic diverts to the next available interface in the bond group.
   {{< /expand >}}
   {{< expand "LOADBALANCE" "v" >}}
   Select **LOADBALANCE** to accept traffic on any port of the bond group and balance the outgoing traffic on the active ports in the bond group.
   **LOADBALANCE** is a static setup that does not monitor the link state or negotiate with the switch.

   Select the **Transmit Hash Policy** option from the dropdown list. **LAYER2+3** is the default selection.
   {{< /expand >}}

4. Select the interfaces to use in the aggregation from the **Link Aggregation Interface** dropdown list.

5. (Optional) Click **Add** to the right of **Static IP Addresses** to show additional IP address fields for each additional IP address to add to this link aggregation interface.

6. Click **Save** when finished.

7. Test the network change when prompted.
