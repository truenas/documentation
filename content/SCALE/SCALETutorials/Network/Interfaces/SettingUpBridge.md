---
title: "Setting Up a Network Bridge"
description: "Provides instructions on setting up a network bridge interface."
weight: 20
tags:
- network
- interfaces
---

In general, a [bridge](https://tools.ietf.org/html/rfc6325) refers to various methods of combining (aggregating) multiple network connections into a single aggregate network.

TrueNAS uses [bridge(4)](https://www.freebsd.org/cgi/man.cgi?bridge(4)) as the kernel bridge driver.
[Bridge(8)](https://wiki.linuxfoundation.org/networking/bridge) is a command for configuring the bridge in Linux.
While the examples focus on the deprecated brctl(8) from the bridge-utilities package, we use ip(8) and bridge(8) from iproute2 instead. Refer to the FAQ section that covers bridging topics more generally.

Network bridging does not inherently aggregate bandwidth like [link aggregation (LAGG)]({{< relref "settinguplagg.md" >}}).
Bridging is often used for scenarios where you need to extend a network segment or combine different types of network traffic.
Bridging can be used to integrate different types of networks (e.g., wireless and wired networks) or to segment traffic within the same network.
A bridge can also be used to allow a VM configured on TrueNAS to communicate with the host system. See [Accessing NAS From a VM]({{< relref "accessingnasfromvm.md" >}}) for more information.

{{< include file="/static/includes/BeforeYouBridge.md" >}}

{{< include file="/static/includes/NetworkBridgeSCALE.md" >}}
