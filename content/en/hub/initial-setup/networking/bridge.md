title: "Creating a Network Bridge"
description: "How to create a network Bridge on TrueNAS."
tags: ["Bridge", "networking"]
---

A [Bridge](https://tools.ietf.org/html/rfc6325) generally refers to various methods of combining (aggregating) multiple network connections into a single, aggregate network from multiple communication networks or network segments. TrueNAS uses [bridge(4)](https://www.freebsd.org/cgi/man.cgi?bridge(4)) to manage Bridges. 

To set up a Bridge interface, go to **Network > Interface > Add**.

<img src="/images/TN-AddBridgeInterface.png">
<br><br>

Set **Type** to *Bridge*.

Enter a name for the interface. The name must use the format, *bridgeX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular LAGG in the **Description**.

Under Bridge Settings, select the *Bridge Members* to configure the interface ports to match your networking needs:

Disabling **Hardware Offloading** is discouraged as it can reduce network performance.
Disabling this is only recommended when the interface is managing [Jails](/hub/tasks/advanced/jails/), [Plugins](/hub/tasks/advanced/plugins/), or [Virtual Machines](/hub/tasks/advanced/virtual-machines/).

The Maximum Transmission Unit (MTU) is the largest protocol data unit that can be communicated.
What the largest workable MTU size can be will change according to your available network interfaces and other physical hardware.
`1500` and `9000` are standard Ethernet MTU sizes and TrueNAS recommends leaving this at the default `1500`.
The permissable range of MTU values is 1492 to 9216. 
Leaving this field blank restores the field to the default value of 1500.

If additional tuning is needed, you can enter additional [ifconfig](https://www.freebsd.org/cgi/man.cgi?query=ifconfig) settings in the **Options**

You can also define additional aliases for the LAGG interface.
Either IPv4 or IPv6 interfaces can be defined.
