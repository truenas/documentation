---
title: "Setting Up Link Aggregations"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/network/interfaces/laggcreate/"
description: "Provides instructions on setting up a network link aggregation (LAGG) interface on TrueNAS CORE."
weight: 20
tags:
- network
- interfaces
---

A [Link Aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) is a general method of combining (aggregating) many network connections. The connections are either parallel or in series. This provides extra bandwidth or redundancy for critical networking situations. TrueNAS uses [lagg(4)](https://www.freebsd.org/cgi/man.cgi?lagg(4)) to manage LAGGs.

To set up a LAGG interface, go to **Network > Interface > Add**.

![NetworkInterfacesAddLAGG](/images/CORE/Network/NetworkInterfacesAddLAGG.png "Adding a lagg interface")

Set the **Type** to **Link Aggregation**.

Enter a name for the interface. The name must use the format *laggX*, where *X* is a number representing a non-parent interface.
Enter any notes or reminders about this particular LAGG in the **Description** field.

Go to **LAGG Settings** and then **Lagg Protocol** to configure the interface ports to match your networking needs:

## Lagg Protocols

### LACP
The most commonly used LAGG protocol.
It is one part of [IEEE specification802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf). LACP mode performs negotiation with the network switch to form a group of ports.
These are all active at the same time.
The network switch must support LACP for this option to function.

### Failover
Failover sends traffic through the primary interface of the group.
Traffic diverts to the next available interface in the LAGG if the primary is not accessible.

### Load Balance
Load Balance accepts inbound traffic on any port of the LAGG group.
It then balances the outgoing traffic on the active ports in the LAGG group.
It is a static setup that does not watch the link state nor does it negotiate with the switch.

### Round Robin
Round robin accepts inbound traffic on any port of the LAGG group.
It sends outbound traffic using a round robin scheduling algorithm.
The outbound traffic sends in sequence, using each LAGG interface in turn.

### None
This mode disables traffic on the LAGG interface without disabling the LAGG interface.

## Lagg Interfaces

Now define the **Lagg Interfaces** and review the remaining interface options.

See [Interfaces Screen]({{< relref "/CORE/UIReference/Network/InterfacesScreen.md" >}}) for more information on settings.

{{< include file="/static/includes/InterfaceOptions.md" markdown="true" >}}
