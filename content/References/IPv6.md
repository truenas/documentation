---
title: "Understanding IPv6"
description: "Provides information general information on IPv6 and implementation guidance."
weight: 20
tags:
- network
- interfaces
- ipv6
---

## What is IPv6?
IPv6, referred to as the Internet protocol next generation (IPng), is a 128-bit alphanumeric address organized into eight groups of 16 bits with each group expressed as four-digit hexadecimal numbers separated by colons.
An example of an IPv6 address is *fe80:cd00:0000:0cde:1257:0000:211e:729c*.

IPv6 addresses are split into two parts: a network (routing prefix) and a node component(interface ID).

The network component is the first 64 bits of the address and is used for routing.
This component can be split into a block of 48 bits for global network addresses and a block of 16 bits controlled by network administrators for subnets on an internal network.

The node component is the second 64 bits of the IPv6 address and is used to identify the address of the interface.
It is derived from the physical or MAC address, using the 64-bit extended unique identifier (EUI-64) format defined by the Institute of Electrical and Electronics Engineers (IEEE).
This format designed to provide the ability to provide unique addresses to any electronic device equipped with sensors and connect them for data sharing.

The IPv6 total address can be shortened. The addressing scheme allows the omission of any leading zero as well as any sequences consisting of only zeros.
Using the example above, a shorted address looks like *fe80:cd00:0:cde:1257:0:211e:729c*.

The specific layout of IPv6 addresses can vary depending on its format, with three basic parts: routing prefix, subnet ID, and the interface ID.
The routing prefix and subnet ID represent two main levels in the address which is either global or site specific.
Internet Registries and Internet service providers (ISPs) can decide to subdivide the routing prefix bits.
The left most set of numbers or first 48 bits is the site prefix, and the next 16 bits is the subnet ID. The subnet ID lays out site topology.
The 64 bit interface ID can be manually or automatically configured.

IPv6 provides 1028 times more addresses than IPv4, which is running out of numbers due to the ever increasing number devices world wide wanting to connect.

The rise of the Internet of Things (IoT), where connecting smart sensors in homes, motor vehicles, and businesses to the Internet allows data collection and sharing for analytics, device maintenance and monitoring, cost controls, increased safety and productivity, and overall improvement in consumer and customer experiences.

## What are the Benefits of IPv6?
Key benefits to IPv6 include eliminating the need for:

* Network address translation (NAT)

  IPv6 eliminates the need for NAT.
  The structure of the 128 bit IPv6 address does not need the NAT method of remapping one IP address space into another by modifying network address information in the IP header of packets while in transit across a traffic routing device.

* Private address collisions

  Private address collisions occur when the same IP address is assigned to two different devices within the same private network, which can happen if IP addresses are not properly managed.
  Using DHCP-assigned addresses is one way to manage IP address assignments to prevent assigning an IPv4 address to two different devices.

* DHCP 

  IPv6 uses one of two types of auto-configuration of the device addresses, stateful or stateless address autoconfiguration (SLAAC).
  SLAAC allows devices to generate their own IPv6 addresses without requiring a central server like IPv4 networks that use DHCP.
  Devices can generate their own address by basing the interface identifier on the device MAC address.
  This combines with the network prefix received from the router advertisement message that includes network configuration information.

  DHCPv6, which is DHCP with the v6 extension, is an alternative that can still be used in IPv6 networks for more advanced configuration options, such as DNS server assignments and additional parameters.

IPv6 adds new capabilities:

* Built-in auto-configuration 

  IPv6 supports stateful and stateless auto-configuration (SLAAC).
  Stateful auto-configuration requires some human intervention because it needs a DHCPv6 server for the installation and administration of nodes.
  The DHCPv6 server maintains state information so the server knows how long each address is in use and when it might be available for reassignment.

  Stateless auto-configuration (SLAAC) is suitable for small organizations and individuals.
  It can automatically configure IPv6 host parameters on an IPv6 host without the need for manual configuration or a DHCP server.
  Each host determines its addresses from the contents of received router advertisements and using the IEE EUI-64 standard to define the network ID portion of the address, to assume uniqueness of the host address on the link. For more information see [IPv6 Stateless Address Auto-configuration (SLAAC)](https://www.networkacademy.io/ccna/ipv6/stateless-address-autoconfiguration-slaac).

* Improved multicast routing

  IPv6 multicast routing uses multicast groups that logically-group devices that are interested in receiving the multicast traffic.
  These groups are associated with a specific multicast address, which is typically in the range of 244.0.0.0 to 239.255.255.255 (IPv4) or the IPv6 range starting with the prefix ff00::/8. 

  Routers in an IPv6 network must be configured to support multicast routing and enable an IPv6 multicast routing protocol like Protocol Independent Multicast (PIM) for IPv6.
  Routers in the network use the multicast routing protocol to determine how to forward multicast packets based on multicast group membership.
  Packet forwarding occurs to interfaces where devices have joined the corresponding multicast group interested in receiving the traffic.
  With IPv6, multicast boundaries can constrain traffic within specific boundaries or domains of the network to control propagation.
  
* Simpler header format

  IPv6 headers omit the IPv4 flags and fragmentation offset, time to live (TTL), Internet header length, header checksum, and protocol bits in routing headers.
  It uses a flow label for identification, traffic class that is similar to the IPv4 type of service portion of the header, and adds a hop limit, payload length, and next header.
  Both IPv6 and IPv4 include the source and destination in the header but allocates fewer bits to IPv4 headers (32 bits) than what is in IPv6 (128 bits).

* Simplified, more efficient routing

  IPv6 routing routes traffic through the network much the same as IPv4 using network routing protocols, routing tables and the principles of packet forwarding, but it introduces enhancements such as larger address space, simplified header formats, and improvements in routing protocols to accommodate modern network requirements.

  It removes NAT and uses Neighbor Discovery Protocol (NDP) to resolve addresses and discover neighbors and routers.

* Flow labeling and true quality of service (QoS)

  Flow labeling is a 20-bit part in the IPv6 header. It is intended to identify packets belonging to the same flow or traffic stream.
  Flow labeling provides routers and network devices with a way to recognize and classify packets that are part of the same flow, such as packets that belong to a specific real time audio or video stream.
  This allows for more efficient handling of packets within the network.

  Despite potential benefits, flow labeling adoption is currently limited.
  There is a lack of standardized QoS mechanisms and policies on how to make use of this field.
  Flow labeling depends on widespread support and consistent implementation across network devices and protocols but it not implemented this way at present.

* Built-in encryption, authentication, and privacy support

  IPv6 includes built-in support for authentication and privacy features to enhance security and protect network. Two key mechanism for authentication and privacy are Secure Neighbor Discovery (SEND) and Internet Protocol Security (IPsec).

  Secure Neighbor Discovery (SEND) is an extension of NDP.
  It introduces cryptographic mechanisms for neighbor and routing authentication to ensure devices can authenticate the identity of neighboring devices and routers before establishing communication. This provides protection against various attacks such as neighbor spoofing and address theft.
  It also includes mechanisms for securing IPv6 address autoconfiguration to prevent unauthorized devices from obtaining valid IPv6 addresses on the network.

  Internet Protocol Security (IPsec) is a suite of protocols used to secure IPv6 communications at the IP layer.
  IPsec originally defined two protocols for securing IP packets, Authentication Header (AH) and Encapsulating Security Payload (ESP). 
  AH provides data integrity and anti-replay services
  ESP provides encryption and authenticates data.
  It can also includes Internet Key Exchange (IKE), which is used to generate shared security keys that establish security associations (SAs).
  A special router or firewall sitting between two networks usually handles the security associations needed for the encryption/decryption process to negotiate a security level between the two entities.

  It can establish secure tunnels between IPv6 hosts or networks, encrypting all traffic passing through the tunnel and providing protection against eavesdropping and tampering.
  If implemented in transport mode, only the payload of IP packets is encrypted.
  If implemented in tunnel mode, the entire IP packet including the original IP header is encapsulated and encrypted.
  IPsec is widely supported in IPv6-capable devices, and is commonly used to secure communication over IPv6 networks, particularly enterprise and VPN environments.

* Easier implementation of services like peer-to-peer (P2P) networks and voice over IP

## What Are the Downsides of IPv6?
IPv6 is not widely used, but ISPs worldwide are increasing their adoption of this protocol over IPv4 because it offers a significantly larger address space to support the ever growing Internet and the various devices connecting to networks through the Internet of things (IoT) and other emerging technologies.

Existing IPv4 network infrastructure components might not be IPv6-compatable.
This can result in costly changes to upgrade components or replace all or some of enterprise hardware.
It takes time and effort to train IT professionals on how to implement and manage IPv6 networks.

An IPv6 website or network cannot be seen by or communicated with by an IPv4 network without a gateway.
IPv4 and IPv6 do not directly communicate with each other without the aid of either a gateway or other network configuration changes like dual-stacking the two protocols within the same network or deploying IPv6 tunnelling to route traffic.

IPv6 requires IP security where IPv4 security is optional. IPv6 uses an IPSec protocol to provide the required IP security.
For more information, see [IPsec (Internet Protocol Security)](https://www.techtarget.com/searchsecurity/definition/IPsec-Internet-Protocol-Security).

## Converting to IPv6
Before implementing IPv6, there are a few things to consider:

* Does the network equipment accommodate IPv6?
  
  Most modern operating systems (Windows, Linux, Mac) provide IPv6 compatibility, but Internet of Things (IoT) devices, older systems, and legacy network devices that might require attention during a transition from IPv4 to v6 protocol.
  Organizations need to determine if the return on investment justifies the cost of converting to an all IPv6 infrastructure.  
  Research your current infrastructure components to determine what is required to implement IPv6, whether it is updating software or firmware or replacing equipment with more modern equivalents.

  Make sure your DNS server is IPv6 capable to provide the name resolution for these more complex addresses.
  
  Alternatively, organizations can migrate to IPv6 infrastructures through a three stage approach:

  1. Create a dual-stack network by configuring network components and endpoints to use both IPv6 and IPv4.
  2. Use an IPv6 tunnel to address the issue of connecting network devices that lack IPv6 support, and allow for gradual replacement of aging IPv4-only network equipment.
  3. Use NAT Protocol Translation (NAT-PT) as a service to convert IPv4 addresses into IPv6 and vise versa.
     It operates similarly to how standard NAT translates non-internet routable IPv4 addresses to one or more publicly addressable IP addresses.
     Setting up NAT-PT gateways can provide smooth transitions for aging hardware to new IPv6-capable alternatives.

* What type of IPv6 address do you want to assign?

  Internal only or publicly routable, for individual nodes or different nodes, broadcast or for point-to-point communication on the same LAN/VLAN.

  There are six types of IPv6 addresses:

  * Global unicast - Addresses that are routable on the Internet and the equivalent of the public IPv4 addresses. These begin with **2001** as the prefix group.

  * Unicast - Addresses used to identify the interface of an individual node.

  * Anycast - Addresses used to identify a group of interfaces on different nodes.

  * Multicast - Address used to define multicast that send a single packet to multiple destination at one time.

  * Link local - Addresses used inside an internal network (not routed over the Internet), are self-assigned to all interfaces with the IPv6 protocol enabled.
    It is non-routable but can use for all point-to-point communications on the same LAN/VLAN (broadcast domain). It begins with **fe80** as the prefix group. 
  
  * Unique local - Addresses used for private networks (not routed over the Internet), and are the equivalent of the IPv4 addresses 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.

  Assign either a global unicast address for publicly-accessible systems or use unique local addresses for private internal-only interfaces.

* What type of auto-configuration should you use?

  IPv6 supports stateful and stateless auto-configuration (SLAAC).

  Stateful auto-configuration requires some human intervention. It needs a DHCPv6 server for the installation and administration of nodes.
  The DHCPv6 server maintains state information so the server knows how long each address is in use and when it might be available for reassignment.

  Stateless auto-configuration (SLAAC) is suitable for small organizations and individuals.
  SLAAC can automatically configure IPv6 host parameters on an IPv6 host without needing an IT admin to manually configure or use a DHCPv6 server.
  Each host determines its addresses from the contents of received router advertisements and using the IEE EUI-64 standard to define the network ID portion of the address, to assume uniqueness of the host address on the link.
  For more information see [IPv6 Stateless Address Auto-configuration (SLAAC)](https://www.networkacademy.io/ccna/ipv6/stateless-address-autoconfiguration-slaac).
  
  <!-- commenting out until we can verify IPv6 on an HA system. At present HA fails using assigned network addresses at failover.
  {{< enterprise >}}
  SLAAC can be enabled on any pubic or private subnet, but should not be used with an HA supported system because they use an virtual IP address.
  We recommend configuring HA systems on unique VLANs without DHCP or SLAAC support enabled.
  {{< /enterprise >}} 
  -->

* Do you need to route using both IPv6 and IPv4 addresses?

  If you want to deploy an all IPv6 network or all IPv4 network, you need to address the requirements of each and assess your network infrastructure.
  There are several ways to implement IPv6 alone or to dual-stack both IP protocols in the same network.

  Because IPv6 is not widely implemented, and neither IP protocol can directly communicate without configuring your network to accommodate both IPv4 and IPv6 nodes in the same network, you need to choose how you want to implement IPv6.
  At present, IT department options are to dual-stack the protocols, create an IPv6 tunnel to carry IPv6 packets over IPv4 infrastructure, or use a gateway to translate between the two address structures.

  For the network infrastructure, begin by enabling both TCP/IP protocol stacks on the wide area network (WAN) core routers, the perimeter routers and firewalls, followed by the data-center routers/desktop access routers, and finally the end user equipment and devices.

* Can you dual stack IPv4 and IPv6 in SCALE?
  
  Yes! You can configure SCALE with a dual-stack of both if your system has either two network interface cards or a NIC with two ports.
  After wiring both ports or each NIC, configure the SCALE UI with the assigned addresses, and then create a VLAN bridge.

## Helpful IPv6 Commands
These commands are for troubleshooting IPv6 networks:
{{< truetable >}}
| OS | Command | Description |
|----|---------|-------------|
| Linux | `ip addr` | Shows IPv6 addressing information. |
| MacOS | `ifconfig` | Shows IPv6 addressing information. |
| Windows | `ipconfig` |Shows IPv6 addressing information.<br>You might need to include the `/all` parameter to show all IPv6 configurations in addition to the IPv4 on older windows devices.|
| Linux | `ip -6 neighbor show` | Uses the IPv6 Neighbor Discovery to determine nearby nodes on the same segment. Shows the neighbor discovery table to troubleshoot or survey the environment. |
| MacOS | `ndp-a | Uses the IPv6 Neighbor Discovery to determine nearby nodes on the same segment. Shows the neighbor discovery table to troubleshoot or survey the environment. |
| Windows | `netsh interface ipv6 show neighbors` | Uses the IPv6 Neighbor Discovery to determine nearby nodes on the same segment. Shows the neighbor discovery table to troubleshoot or survey the environment. |
| Linux | <code>ping6 <i>IPv6-address</i></code> | Use to ping a remote node. |
| MacOS | <code>ping6 <i>IPv6-address</i></code> | Use to ping a remote node. |
| Windows | <code>ping -6 <i>IPv6-address</i></code> | Use to ping a remote node. |
| Linux | <code>traceroute6 <i>IPv6-address</i></code> | Use to check the network path to a remote system. |
| MacOS | <code>traceroute6 <i>IPv6-address</i></code> | Use to check the network path to a remote system. |
| Windows | <code>traceroute -6 <i>IPv6-address</i></code> | Use to check the network path to a remote system. |
| Windows | <code>tracert-6 <i>IPv6-address</i></code> | Use to trace IPv6 address routes. |
{{< /truetable >}}

## IPv6 Resources

For a list of available IPv6 addresses, refer to [Reserved IPv6 Addresses](https://www.cidr-report.org/as2.0/reserved-ipv6.html) or the [IANA IPv6 Sepcial-Purpose Address Registry](https://www.iana.org/assignments/iana-ipv6-special-registry/iana-ipv6-special-registry.xhtml).

For more information on SLAAC, refer to [IPv6 Stateless Address Auto-configuration (SLAAC)](https://www.networkacademy.io/ccna/ipv6/stateless-address-autoconfiguration-slaac).
This article provide in depth explanations of the 128bit IPv6 address, how SLAAC works to detect device addresses to create unique addresses, and provides information on configuring Cisco routers for IPv6.

The [Internet Society](https://www.internetsociety.org/deploy360/ipv6/) has created a guide to help organizations wade through the process of setting up IPv6.