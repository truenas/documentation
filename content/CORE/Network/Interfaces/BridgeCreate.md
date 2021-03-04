---
title: "Network Bridge"
weight: 10
---

A [Bridge](https://tools.ietf.org/html/rfc6325) generally refers to various methods of combining (aggregating) multiple network connections into a single aggregate network. TrueNAS uses [bridge(4)](https://www.freebsd.org/cgi/man.cgi?bridge(4)) to manage Bridges.

To set up a bridge interface, go to **Network > Interface > Add**.

<img src="/images/CORE/12.0/NetworkInterfacesAddBridge.png">
<br><br>

Set the *Type* to *Bridge* and enter a name for the interface. The name must use the format *bridgeX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular bridge in the *Description*.

Under **Bridge Settings**, select which interfaces will be *Bridge Members* and then configure the remaining interface options to match your networking needs.

{{< include file="static/includes/InterfaceOptions.md.part" markdown="true" >}}
