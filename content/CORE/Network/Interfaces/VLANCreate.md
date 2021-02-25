---
title: "VLAN"
weight: 30
---

A virtual LAN (VLAN) is a domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2).  More information on VLANs can be found [here](https://www.ieee802.org/1/pages/802.1Q-2014.html). TrueNAS uses [vlan(4)](https://www.freebsd.org/cgi/man.cgi?vlan(4)) to manage VLANS. 

To set up a VLAN interface, go to **Network > Interface > Add**.

<img src="/images/CORE/12.0/NetworkInterfacesAddVLAN.png">
<br><br>

Set the *Type* to *VLAN* and enter a *Name* for the interface. The name must use the format *vlanX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular VLAN in the *Description*.

Enabling *DHCP* or *Autoconfigure IPv6* requires understanding how this new interface will function inside your particular network environment. By default, TrueNAS allows only one network interface to have *DHCP* enabled.

The remaining **VLAN Settings** must be configured for the interface to function properly:

* *Parent Interface* : Select the VLAN Parent Interface. This is usually an Ethernet card connected to a switch port that has already been configured for the VLAN.
* *Vlan Tag* : Enter a numeric tag for this interface. This is usually preconfigured in the switched network.
* *Priority Code Point* : Define the VLAN [Class of Service](https://tools.ietf.org/html/rfc4761#section-4.2.7). The available *802.1p* class of service ranges from *Best effort (default)* to *Network control (highest)*.

With the VLAN-specific options set, there are a few additional interfaces options to review.

{{< include file="static/includes/InterfaceOptions.md.part" markdown="true" >}}
