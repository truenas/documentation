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
IPv6 is the next generation Internet protocol replacing the current IPv4 protocol.
IPv4 is running out of numbers due to the ever increasing number devices world wide wanting to connect.
The rise of the Internet of Things (IoT), where smart sensors in homes, motor vehicles, and businesses all want or need to connect to the Internet to allow data collection and sharing for analytics, device maintenance and monitoring, increased safety and productivity, and overall improvement in consumer and customer experiences is a source of an ever-increasing demand for IP addresses.
Because of the length and configuration of IPv6 addresses, there is little risk of this protocol running out of numbers any time soon.

### IPv6 Addresses
An IPv6 address is a 128-bit alphanumeric address organized into eight groups of 16 bits with each group expressed as four-digit hexadecimal numbers separated by colons.
An example of an IPv6 address is *fe80:cd00:0000:0cde:1257:0000:211e:729c*.

IPv6 addresses are split into two parts: a network (routing prefix) and a node component(interface ID).

The network component (commonly 64 bits) is the part of the address and is used for routing.
This component can be split into a block for global network addresses and a block network administrators can use for subnets on an internal network.

The node component is the second part of the IPv6 address.
If using auto-configuration, this part of the address can be derived from a physical or MAC address, using the 64-bit extended unique identifier (EUI-64) format defined by the Institute of Electrical and Electronics Engineers (IEEE).
This format designed to provide the ability to provide unique addresses to any electronic device equipped with sensors and connect them for data sharing.

The IPv6 total address can be shortened. The addressing scheme allows the omission of any leading zero as well as any sequences consisting of only zeros.
Using the example above, a shorted address can look like *fe80:cd00:0:cde:1257:0:211e:729c*.

The specific layout of IPv6 addresses can vary depending on its format. 
It has three basic parts: routing prefix, subnet ID, and the interface ID.
The routing prefix and subnet ID can represent either global or site specific information.
The interface ID can be manually or automatically configured.

## What are the Benefits of IPv6?
IPv6 eliminates the need for:

* {{< expand "Network address translation (NAT)" "v" >}}
  IPv6 eliminates the need for NAT.
  The structure of the 128 bit IPv6 address does not need the NAT method of remapping one IP address space into another by modifying network address information in the IP header of packets while in transit across a traffic routing device.
{{< /expand >}}

* {{< expand "Private address collisions" "v" >}}
  Private address collisions occur when the same IP address is assigned to two different devices within the same private network, which can happen if IP addresses are not properly managed.
  Using DHCP-assigned addresses is one way to manage IP address assignments to prevent assigning an IPv4 address to two different devices.
{{< /expand >}}

* {{< expand "DHCP" "v" >}}
  IPv6 uses one of two types of auto-configuration of the device addresses, stateful or stateless address autoconfiguration (SLAAC).
  SLAAC allows devices to generate their own IPv6 addresses without requiring a central server like IPv4 networks that use DHCP.
  Devices can generate their own address by basing the interface identifier on the device MAC address.
  This combines with the network prefix received from the router advertisement message that includes network configuration information.

  DHCPv6, which is DHCP with the v6 extension, is an alternative that can still be used in IPv6 networks for more advanced configuration options, such as DNS server assignments and additional parameters.
{{< /expand >}}

IPv6 adds new capabilities:
* {{< expand "Built-in auto-configuration" "v" >}}

  IPv6 supports stateful and stateless auto-configuration (SLAAC).
  Stateful auto-configuration requires some human intervention because it needs a DHCPv6 server for the installation and administration of nodes.
  The DHCPv6 server maintains state information so the server knows how long each address is in use and when it might be available for reassignment.

  Stateless auto-configuration (SLAAC) is suitable for small organizations and individuals.
  It can automatically configure IPv6 host parameters on an IPv6 host without the need for manual configuration or a DHCP server.
  Each host determines its addresses from the contents of received router advertisements and using the IEE EUI-64 standard to define the network ID portion of the address, to assume uniqueness of the host address on the link. For more information see [IPv6 Stateless Address Auto-configuration (SLAAC)](https://www.networkacademy.io/ccna/ipv6/stateless-address-autoconfiguration-slaac).
{{< /expand >}}

* {{< expand "Improved multicast routing" "v" >}}

  IPv6 multicast routing uses multicast groups that logically-group devices that are interested in receiving the multicast traffic.
  These groups are associated with a specific multicast address, which is typically in the range of 244.0.0.0 to 239.255.255.255 (IPv4) or the IPv6 range starting with the prefix ff00::/8. 

  Routers in an IPv6 network must be configured to support multicast routing and enable an IPv6 multicast routing protocol like Protocol Independent Multicast (PIM) for IPv6.
  Routers in the network use the multicast routing protocol to determine how to forward multicast packets based on multicast group membership.
  Packet forwarding occurs to interfaces where devices have joined the corresponding multicast group interested in receiving the traffic.
  With IPv6, multicast boundaries can constrain traffic within specific boundaries or domains of the network to control propagation.
  {{< /expand >}}

* {{< expand "Simpler header format" "v" >}}

  IPv6 headers omit the IPv4 flags and fragmentation offset, time to live (TTL), Internet header length, header checksum, and protocol bits in routing headers.
  It uses a flow label for identification, traffic class that is similar to the IPv4 type of service portion of the header, and adds a hop limit, payload length, and next header.
  Both IPv6 and IPv4 include the source and destination in the header but allocates fewer bits to IPv4 headers (32 bits) than what is in IPv6 (128 bits).
{{< /expand >}}

* {{< expand "Simplified, more efficient routing" "v" >}}

  IPv6 routing routes traffic through the network much the same as IPv4 using network routing protocols, routing tables and the principles of packet forwarding, but it introduces enhancements such as larger address space, simplified header formats, and improvements in routing protocols to accommodate modern network requirements.

  It removes NAT and uses Neighbor Discovery Protocol (NDP) to resolve addresses and discover neighbors and routers.
{{< /expand >}}
* {{< expand "Flow labeling and true quality of service (QoS)" "v" >}}

  Flow labeling is a 20-bit part in the IPv6 header. It is intended to identify packets belonging to the same flow or traffic stream.
  Flow labeling provides routers and network devices with a way to recognize and classify packets that are part of the same flow, such as packets that belong to a specific real time audio or video stream.
  This allows for more efficient handling of packets within the network.

  Despite potential benefits, flow labeling adoption is currently limited.
  There is a lack of standardized QoS mechanisms and policies on how to make use of this field.
  Flow labeling depends on widespread support and consistent implementation across network devices and protocols but it not implemented this way at present.
{{< /expand >}}
* {{< expand "Built-in encryption, authentication, and privacy support" "v" >}}

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
{{< /expand >}}
* Easier implementation of services like peer-to-peer (P2P) networks and voice over IP

## What Are the Downsides of IPv6?
IPv6 is not widely used, but ISPs worldwide are increasing their adoption of this protocol over IPv4 because it offers a significantly larger address space to support the ever growing Internet and the various devices connecting to networks through the Internet of things (IoT) and other emerging technologies.

Existing IPv4 network infrastructure components might not be IPv6-compatible.
This can result in costly changes to upgrade components or replace all or some of enterprise hardware.
It takes time and effort to train IT professionals on how to implement and manage IPv6 networks.

An IPv6 website or network cannot be seen by or communicated with by an IPv4 network without a gateway.
IPv4 and IPv6 do not directly communicate with each other without the aid of either a gateway or other network configuration changes like dual-stacking the two protocols within the same network or deploying IPv6 tunneling to route traffic.

IPv6 requires IP security where IPv4 security is optional. IPv6 uses an IPsec protocol to provide the required IP security.
For more information, see [IPsec (Internet Protocol Security)](https://www.techtarget.com/searchsecurity/definition/IPsec-Internet-Protocol-Security).

## Implementing IPv6
Before implementing IPv6, there are a few things to consider:

* {{< expand "Does your network infrastructure accommodate IPv6?" "V" >}}
  
  Most modern operating systems (Windows, Linux, MacOS) include IPv6 compatibility, but some Internet of Things (IoT) devices, older systems, and legacy network devices might require updates or replacement.

  Organizations need to determine if the return on investment justifies the cost of converting to an all IPv6 infrastructure if your network components cannot accommodate v6 addresses.
  Research your current infrastructure components to determine what is required to implement the network configuration that suits your use case.

  Alternatively, you can migrate to IPv6 infrastructures through a staged approach. See [How enterprises can migrate from IPv4 to IPv6](https://www.techtarget.com/searchnetworking/tip/How-enterprises-can-migrate-from-IPv4-to-IPv6) for more information.
{{< /expand >}}

* {{< expand "Can your network infrastructure receive and send both IPv6 and IPv4 traffic?" "v" >}}

  IPv6 and IPv4 networks cannot see or communicate with each other unless some [gateway](https://www.techtarget.com/iotagenda/definition/gateway) exists to allow for this.
  Your DNS server needs to be capable of providing name resolution for these more complex IPv6 addresses.
  
  Specific network topology and configuration instructions and recommendations are outside the scope of this article.
  Consult with your IT network administrator or service provider for how to equip your network to allow communication between both IP protocols.
  
  You can dual-stack IPv4 and IPv6 in SCALE.
{{< /expand >}}

* {{< expand "What type of IPv6 address do you want to assign?" "v" >}}

  Internal only or publicly routable, for individual nodes or different nodes, for broadcast or point-to-point communication on the same LAN/VLAN.
  
  There are six types of IPv6 addresses:

  * Global unicast - Addresses that are routable on the Internet and the equivalent of the public IPv4 addresses. The prefix typically ranges from 2000-3FFF.
  * Unicast - Addresses used to identify the interface of an individual node.

  * Anycast - Addresses used to identify a group of interfaces on different nodes.

  * Multicast - Address used to define multicast that send a single packet to multiple destination at one time.

  * Link local - Addresses used inside an internal network (not routed over the Internet), are self-assigned to all interfaces with the IPv6 protocol enabled.
    It is non-routable but can use for all point-to-point communications on the same LAN/VLAN (broadcast domain). It begins with **fe80** as the prefix group. 
  
  * Unique local - Addresses used for private networks (not routed over the Internet), and are the equivalent of the IPv4 addresses 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.

  Assign either a global unicast address for publicly-accessible systems or use unique local addresses for private internal-only interfaces.
  When assigning publicly-accessible IPv6 addresses, research the security implication for your network and implement appropriate security measures as part of your IPv6 implementation.

  IPv6 security resources:
  * [IPv6 Security Guide: Do you have a blind spot?](https://www.varonis.com/blog/ipv6-security)
  * [IPv6 Security Guidance](https://media.defense.gov/2023/Jan/18/2003145994/-1/-1/0/CSI_IPV6_SECURITY_GUIDANCE.PDF)
  * [Internet Society IPv6 Security](https://www.internetsociety.org/deploy360/ipv6/security/)
{{< /expand >}}
* {{< expand "What type of auto-configuration should you use?" "v" >}}

  IPv6 supports stateful and stateless auto-configuration (SLAAC).

  Stateful auto-configuration requires some human intervention. It needs a DHCPv6 server for the installation and administration of nodes.
  The DHCPv6 server maintains state information so the server knows how long each address is in use and when it might be available for reassignment.

  Stateless auto-configuration (SLAAC) is suitable for small organizations and individuals.
  SLAAC can automatically configure IPv6 host parameters on an IPv6 host without needing an IT admin to manually configure or use a DHCPv6 server to assign the IP address.
  Each host determines its addresses from the contents of received router advertisements and using the IEE EUI-64 standard to define the network ID portion of the address, to assume uniqueness of the host address on the link.
  For more information see [IPv6 Stateless Address Auto-configuration (SLAAC)](https://www.networkacademy.io/ccna/ipv6/stateless-address-autoconfiguration-slaac).
  {{< /expand >}}

## Helpful IPv6 Commands
These commands are for troubleshooting IPv6 networks:
### Showing IPv6 addressing information
{{< truetable >}}
| OS | Command | Description |
|----|---------|-------------|
| Linux | `ip addr` | Shows IPv6 addressing information. |
| MacOS | `ifconfig` | Shows IPv6 addressing information. |
| Windows | `ipconfig` |Shows IPv6 addressing information.<br>You might need to include the `/all` parameter to show all IPv6 configurations in addition to the IPv4 on older windows devices.|
{{< /truetable >}}
### Using IPv6 Neighbor Discovery
{{< truetable >}}
| OS | Command | Description |
|----|---------|-------------|
| Linux | `ip -6 neighbor show` | Uses the IPv6 Neighbor Discovery to determine nearby nodes on the same segment. Shows the neighbor discovery table to troubleshoot or survey the environment. |
| MacOS | `ndp-a | Uses the IPv6 Neighbor Discovery to determine nearby nodes on the same segment. Shows the neighbor discovery table to troubleshoot or survey the environment. |
| Windows | `netsh interface ipv6 show neighbors` | Uses the IPv6 Neighbor Discovery to determine nearby nodes on the same segment. Shows the neighbor discovery table to troubleshoot or survey the environment. |
{{< /truetable >}}
### Pinging a Remote Node
{{< truetable >}}
| OS | Command | Description |
|----|---------|-------------|
| Linux | <code>ping6 <i>IPv6-address</i></code> | Use to ping a remote node. |
| MacOS | <code>ping6 <i>IPv6-address</i></code> | Use to ping a remote node. |
| Windows | <code>ping -6 <i>IPv6-address</i></code> | Use to ping a remote node. |
{{< /truetable >}}
### Checking a Network Path
{{< truetable >}}
| OS | Command | Description |
|----|---------|-------------|
| Linux | <code>traceroute6 <i>IPv6-address</i></code> | Use to check the network path to a remote system. |
| MacOS | <code>traceroute6 <i>IPv6-address</i></code> | Use to check the network path to a remote system. |
| Windows | <code>traceroute -6 <i>IPv6-address</i></code> | Use to check the network path to a remote system. |
| Windows | <code>tracert-6 <i>IPv6-address</i></code> | Use to trace IPv6 address routes. |
{{< /truetable >}}

## Additional IPv6 Resources

For a list of available IPv6 addresses, refer to [Reserved IPv6 Addresses](https://www.cidr-report.org/as2.0/reserved-ipv6.html) or the [IANA IPv6 Special-Purpose Address Registry](https://www.iana.org/assignments/iana-ipv6-special-registry/iana-ipv6-special-registry.xhtml).

For more information on SLAAC, refer to [IPv6 Stateless Address Auto-configuration (SLAAC)](https://www.networkacademy.io/ccna/ipv6/stateless-address-autoconfiguration-slaac).
This article provide in depth explanations of the 128bit IPv6 address, how SLAAC works to detect device addresses to create unique addresses, and provides information on configuring Cisco routers for IPv6.

The [Internet Society](https://www.internetsociety.org/deploy360/ipv6/) has created a guide to help organizations wade through the process of setting up IPv6.
