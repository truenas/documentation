---
title: "Interfaces"
geekdocCollapseSection: true
weight: 30
aliases:
  - /core/network/interfaces/laggcreate/
  - /core/network/interfaces/bridgecreate/
  - /core/network/interfaces/vlancreate/
---

The TrueNAS CORE **Interfaces** section displays interface names and IP addresses, as well as their types and link states. 

## Adding, Editing, and Deleting Interfaces

To add a new network interface, click **ADD**.

To edit or delete an interface, click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> in that interface's row, then click <i class="material-icons" aria-hidden="true" title="edit">edit</i> **EDIT** or <i class="material-icons" aria-hidden="true" title="delete">delete</i> **DELETE**.

You can click <i class="material-icons" aria-hidden="true" title="edit">edit</i> **EDIT** on a phycial interface to [set a static IP address for the TrueNAS UI]({{< relref "EditingPhysicalInterface.md" >}})

You can also [edit your TrueNAS sytem's physical NICs]({{< relref "SettingStaticIP.md" >}}) by clicking <i class="material-icons" aria-hidden="true" title="delete">delete</i> **RESET CONFIGURATION**.

{{< hint warning >}} 
Be careful when configuring the network interface that controls the TrueNAS® web interface or you may lose web connectivity. 
{{< /hint >}}

## Creating LAGG, Bridge, and VLAN Interfaces

{{< expand "Why should I use different interface types?" "v" >}}
{{< include file="/_includes/NetworkInterfaceTypes.md" type="page" >}}
{{< /expand >}}

{{< tabs "Interfaces" >}}
{{< tab "LAGG" >}}
A [Link Aggregation (LAGG)](https://tools.ietf.org/html/rfc7424) is a general method of combining (aggregating) multiple network connections in parallel or a series to provide additional bandwidth or redundancy for critical networking situations. TrueNAS uses [lagg(4)](https://www.freebsd.org/cgi/man.cgi?lagg(4)) to manage LAGGs.

To set up a LAGG interface, go to **Network > Interface > Add**.

![NetworkInterfacesAddLAGG](/images/CORE/12.0/NetworkInterfacesAddLAGG.png "Adding a lagg interface")

Set the *Type* to *Link Aggregation*.

Enter a name for the interface. The name must use the format *laggX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular LAGG in the *Description*.

Under **LAGG Settings**, set the *Lagg Protocol* to configure the interface ports to match your networking needs:

{{< expand "LACP" "v" >}}
LACP is the most commonly used LAGG protocol and is one part of [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf). In LACP mode, negotiation is performed with the network switch to form a group of ports that are all active at the same time. The network switch must support LACP for this option to function.
{{< /expand >}}

{{< expand "Failover" "v" >}}
Failover causes traffic to be sent through the primary interface of the group. If the primary interface fails, traffic diverts to the next available interface in the LAGG.
{{< /expand >}}

{{< expand "Load Balance" "v" >}}
Load Balance accepts inbound traffic on any port of the LAGG group and then balances the outgoing traffic on the active ports in the LAGG group. It is a static setup that does not monitor the link state nor does it negotiate with the switch.
{{< /expand >}}

{{< expand "RoundRobin" "v" >}}
Round robin accepts inbound traffic on any port of the LAGG group and sends outbound traffic using a round robin scheduling algorithm. Traffic is sent out in sequence using each LAGG interface in turn.
{{< /expand >}}

{{< expand "None" "v" >}}
This mode disables traffic on the LAGG interface without disabling the LAGG interface.
{{< /expand >}}

Now define the *Lagg Interfaces* and review the remaining interface options.

{{< include file="static/includes/CORE/InterfaceOptions.md.part" markdown="true" >}}
{{< /tab >}}

{{< tab "Bridge" >}}
A [Bridge](https://tools.ietf.org/html/rfc6325) generally refers to various methods of combining (aggregating) multiple network connections into a single aggregate network. TrueNAS uses [bridge(4)](https://www.freebsd.org/cgi/man.cgi?bridge(4)) to manage Bridges.

To set up a bridge interface, go to **Network > Interface > Add**.

<img src="/images/CORE/12.0/NetworkInterfacesAddBridge.png">
<br><br>

Set the *Type* to *Bridge* and enter a name for the interface. The name must use the format *bridgeX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular bridge in the *Description*.

Under **Bridge Settings**, select which interfaces will be *Bridge Members* and then configure the remaining interface options to match your networking needs.

{{< include file="static/includes/CORE/InterfaceOptions.md.part" markdown="true" >}}
{{< /tab >}}

{{< tab "VLAN" >}}
A virtual LAN (VLAN) is a domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2).  More information on VLANs can be found [here](https://www.ieee802.org/1/pages/802.1Q-2014.html). TrueNAS uses [vlan(4)](https://www.freebsd.org/cgi/man.cgi?vlan(4)) to manage VLANS. 

To set up a VLAN interface, go to **Network > Interface > Add**.

![NetworkInterfacesAddVLAN](/images/CORE/12.0/NetworkInterfacesAddVLAN.png "Adding a new VLAN")

Set the *Type* to *VLAN* and enter a *Name* for the interface. The name must use the format *vlanX*, where *X* is a number representing a non-parent interface.
It is also recommended to add any notes or reminders about this particular VLAN in the *Description*.

Enabling *DHCP* or *Autoconfigure IPv6* requires understanding how this new interface will function inside your particular network environment. By default, TrueNAS allows only one network interface to have *DHCP* enabled.

The remaining **VLAN Settings** must be configured for the interface to function properly:

* *Parent Interface* : Select the VLAN Parent Interface. This is usually an Ethernet card connected to a switch port that has already been configured for the VLAN.
* *Vlan Tag* : Enter a numeric tag for this interface. This is usually preconfigured in the switched network.
* *Priority Code Point* : Define the VLAN [Class of Service](https://tools.ietf.org/html/rfc4761#section-4.2.7). The available *802.1p* class of service ranges from *Best effort (default)* to *Network control (highest)*.

With the VLAN-specific options set, there are a few additional interfaces options to review.

{{< include file="static/includes/CORE/InterfaceOptions.md.part" markdown="true" >}}
{{< /tab >}}
{{< /tabs >}}
