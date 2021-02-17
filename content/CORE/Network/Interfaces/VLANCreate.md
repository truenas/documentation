---
title: "VLAN"
weight: 30
---

A virtual LAN (VLAN) is a domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2).  More information on VLANs can be found [here](https://www.ieee802.org/1/pages/802.1Q-2014.html). TrueNAS uses [vlan(4)](https://www.freebsd.org/cgi/man.cgi?vlan(4)) to manage VLANS. 

To set up a VLAN interface, go to **Network > Interface > Add**.

<img src="/images/TN-AddVLANInterface.png">
<br><br>

Set interface type to `VLAN` and name the interface with the format of *vlanX*, where X is a number representing a non-parent interface.  Enable DHCP and IPv6 as needed on your network.  
Under *VLAN Settings* select the Parent Interface the VLAN will work with, and create a *vlan tag*.  THe VLAN tag is a numeric tag configured in the switching network. 

Disabling **Hardware Offloading** is discouraged as it can reduce network performance.
Disabling this is only recommended when the interface is managing [Jails](/CORE/Virtualization/Jails/), [Plugins](/CORE/Virtualization/Plugins/), or [Virtual Machines](/CORE/Virtualization/VirtualMachines/).

The Maximum Transmission Unit (MTU) is the largest protocol data unit that can be communicated.
What the largest workable MTU size can be will change according to your available network interfaces and other physical hardware.
`1500` and `9000` are standard Ethernet MTU sizes and TrueNAS recommends leaving this at the default `1500`.
The permissable range of MTU values is 1492 to 9216. 
Leaving this field blank restores the field to the default value of 1500.
