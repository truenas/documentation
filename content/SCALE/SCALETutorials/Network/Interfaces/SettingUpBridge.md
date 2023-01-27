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

{{< include file="/_includes/NetworkBridgeSCALE.md" type="page" >}}

{{< taglist tag="scaleinterface" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}