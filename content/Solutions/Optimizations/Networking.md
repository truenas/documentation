---
title: "Networking Recommendations"
description: "Best practices for TrueNAS network design."
weight: 40
tags:
 - network
 - iscsi
---

Follow these best practices to design a stable and performant network for your TrueNAS system.
These generally apply to either TrueNAS CORE or TrueNAS SCALE, unless specified, but each software might place the related options in slightly different web interface locations.

{{< hint type=tip >}}
iXsystems welcomes contributions from members of the TrueNAS community!

Use the **Feedback** button on the right side or click <svg class="gdoc-icon gdoc_code"><use xlink:href="#gdoc_code"></svg>**Edit Page** at the top right of this page to suggest your own networking tips and tricks.
{{< /hint >}}

## Static IPs


## Interfaces

Use multiple network interfaces if possible for load balancing and redundancy. Configure link aggregation (LACP) if supported by your networking equipment.

## Traffic Isolation Isolation

### Layer 2 VLAN Isolation
Use VLANs to segment your network and isolate traffic for security and performance reasons.

<!-- VLANs (Virtual Local Area Networks):
Operate at Layer 2 (Data Link Layer):

VLANs are a Layer 2 technology, which means they are concerned with the data link layer of the OSI model.
They allow you to create logical segments within a physical network switch, even if devices in those segments are physically connected to the same switch.
Logical Segmentation:

VLANs provide logical segmentation, allowing different groups of devices to be in separate broadcast domains regardless of their physical location in the network.
Broadcast Isolation:

Devices in one VLAN do not see the broadcast traffic of devices in other VLANs, reducing broadcast domain size and improving network efficiency.
Flexibility:

VLANs provide flexibility in network design, making it easier to manage and scale networks. They are often used to group devices based on functional roles or departments. VLANs: Use VLANs when you want to logically segment devices at Layer 2, even if they share the same physical network infrastructure. VLANs are often used to separate broadcast domains in large networks.

-->


<!-- VLAN separation can be beneficial in a NAS environment for specific use cases where you want to achieve logical segmentation of the network, even if the devices are physically connected to the same network infrastructure. Here's an example use case where VLAN separation makes sense for a NAS environment:

Use Case: Multi-Tenant Environment
Scenario:
You have a storage infrastructure that serves multiple departments or business units within an organization. Each department requires its own isolated storage environment with specific access controls and security measures.

Solution:
Implement VLANs to create logical segmentation for each department's NAS traffic.

Reasons to Use VLANs:

Isolation: VLANs provide logical isolation at Layer 2, allowing each department's NAS traffic to be separate from others. Devices in one VLAN do not see the broadcast traffic of devices in other VLANs, enhancing privacy and security.

Broadcast Domain Control: By using VLANs, you can control the size of broadcast domains. This is important because excessive broadcast traffic can impact network performance. VLANs help contain broadcasts within each logical segment.

Access Control: VLANs can be associated with specific access control policies. You can implement VLAN-based access control lists (ACLs) or firewall rules to regulate communication between different VLANs, providing fine-grained control over who can access the NAS resources.

Scalability: In a growing organization where new departments or business units are added, VLANs offer a scalable solution. You can easily create additional VLANs for new segments without physically rewiring the network.

Performance Optimization: VLANs allow for more efficient use of network resources. You can prioritize NAS traffic within each VLAN, ensuring that storage operations are not adversely affected by other network activities.

Considerations:

Ensure that your network infrastructure, including switches and routers, supports VLANs.
Configure VLAN tagging on the NAS and other devices connected to the network.
Implement proper VLAN-to-subnet mapping to maintain consistency with IP addressing.
In summary, VLAN separation in a NAS environment is particularly useful when you need to create logical segmentation for different departments or business units within an organization, providing enhanced isolation, access control, and scalability. 


Advantages of Spanning Tree in a Large L2 Network:
Loop Prevention:

STP is highly effective at preventing broadcast storms and network loops by identifying and blocking redundant paths. This is crucial in a large L2 network where the potential for loops is higher due to the presence of multiple interconnected switches.
Redundancy and Failover:

STP allows for the creation of a loop-free topology while still providing redundancy. In the event of a link failure, STP can dynamically reconfigure the network to use alternate paths, ensuring continuity of service.
Ease of Deployment:

STP is a standard protocol widely supported by network devices, making it easy to deploy in a variety of network environments. It automatically calculates the topology and determines the best path for traffic.
Challenges of Spanning Tree in a Large L2 Network:
Convergence Time:

In a large network, the convergence time of STP may become a concern. When a topology change occurs (such as a link failure or recovery), STP needs time to recalculate the spanning tree and converge on a new topology. During this time, some paths may be blocked, affecting network performance.
Limited Bandwidth Utilization:

STP typically leaves some redundant paths blocked to maintain a loop-free topology. This means that not all available paths are utilized, potentially leading to underutilization of network bandwidth, especially in large networks with numerous interconnected switches.
Maintenance of Loop-Free Topology:

Ensuring a loop-free topology becomes more challenging as the network scales. The configuration and management of STP settings across numerous switches may require careful planning to prevent misconfigurations that could compromise network stability.
Complexity in Design and Troubleshooting:

As the network size increases, the design and troubleshooting of STP configurations become more complex. Understanding the impact of changes and maintaining a clear view of the spanning tree topology becomes crucial.
Alternatives and Enhancements:
Rapid Spanning Tree Protocols (RSTP):

RSTP is an enhancement to the original STP that provides faster convergence times. It is designed to address some of the challenges associated with STP in large networks.
Multiple Spanning Tree Protocol (MSTP):

MSTP allows for the creation of multiple spanning tree instances, enabling better load balancing and improved bandwidth utilization in larger networks.
Layer 3 Routing:

In some cases, especially in very large networks, it might be beneficial to consider Layer 3 routing instead of relying solely on Layer 2 bridging. This approach can reduce the size of broadcast domains and simplify network design.
In summary, while STP is effective in preventing loops and ensuring a loop-free topology, its behavior in a large Layer 2 network may lead to challenges such as increased convergence times and underutilization of available bandwidth. Network administrators need to carefully plan and optimize STP configurations, consider enhancements like RSTP or MSTP, and weigh the advantages and challenges based on the specific requirements of their network. Additionally, a combination of Layer 2 and Layer 3 technologies may be considered for large and complex networks to achieve stability and scalability.
-->


### Layer 3 Subnet Isolation
Separate storage traffic from other network traffic to avoid congestion.

If you have multiple subnets in your network, you can run the management UI (and IPMI, if you have it) on one subnet and data on another.

<!-- Separate Subnets:
Operate at Layer 3 (Network Layer):

Separate subnets are a Layer 3 concept, dealing with the network layer of the OSI model.
Devices in different subnets cannot communicate directly without the use of a router or layer 3 switch.
IP Addressing:

Each subnet has its own IP address range. Devices within the same subnet share the same network address and have unique host addresses.
Routing Required:

Communication between devices in different subnets requires routing. A router or layer 3 switch is needed to move traffic between subnets.
Broadcasts Are Contained within Subnets:

Broadcast traffic is contained within the boundaries of a subnet. Devices in one subnet do not receive broadcasts from devices in other subnets without routing.

Separate Subnets: Use separate subnets when you want to enforce network separation at Layer 3 and require routing between different segments. Separate subnets are commonly used for security and to manage IP address space efficiently.
 -->

<!-- 
Yes, separating a Network-Attached Storage (NAS) system from general internet data traffic using Layer 3 subnet isolation is a good use case. This approach enhances security, improves network performance, and allows for better control over the flow of traffic within the network. Here are some reasons why you might want to consider this approach:

Security:

By placing the NAS system on a separate subnet, you can isolate it from general internet traffic. This helps in reducing the attack surface and provides an additional layer of security for the NAS.
Access Control:

You can implement access control lists (ACLs) or firewall rules at the router or layer 3 switch to control the traffic flow between the NAS subnet and the rest of the network. This allows you to define specific rules for accessing the NAS, enhancing control over who can communicate with the storage system.
Bandwidth Management:

Separating the NAS onto its own subnet allows for more granular control over bandwidth allocation. You can prioritize or limit the bandwidth for traffic to and from the NAS, ensuring that it gets the necessary resources without being adversely affected by other network activities.
Performance Isolation:

Isolating the NAS on a dedicated subnet helps prevent scenarios where heavy internet traffic impacts the performance of the NAS. This is particularly important if the NAS is used for critical or time-sensitive operations.
Quality of Service (QoS):

With Layer 3 separation, you can implement Quality of Service policies to prioritize storage traffic over other non-essential traffic. This ensures that data transfers to and from the NAS receive the necessary priority and resources.
Simplified Troubleshooting:

If issues arise with the NAS or its connectivity, having it on a separate subnet can simplify troubleshooting. It allows you to focus on a specific segment of the network, making it easier to identify and address problems.
Scalability:

As your network grows, isolating the NAS onto its own subnet provides a scalable solution. It allows you to maintain control and security even as you add more devices and services to the network.
When implementing this approach, make sure to carefully plan and configure the routing, firewall rules, and any necessary security measures. Additionally, consider the specific requirements of the NAS system, such as the protocols used for data access, and configure the network accordingly.-->

## iSCSI

iSCSI should be its own dedicated VLAN network. Don't overload VLAN.

<!-- 

VMWare blurb - iSCSI and VMWare (ref VMWare best practices guide)
	https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.storage.doc/GUID-BC516B24-7EAB-4ADA-819A-10DC496DEE9B.html 
    
When setting up iSCSI sharing in TrueNAS or NAS systems in general, establishing Layer 2 (L2) adjacencies is crucial for optimal performance, reliability, and security. Here are some general best practices for L2 adjacencies in iSCSI setups:

Dedicated VLAN for iSCSI:

Consider placing iSCSI traffic on a dedicated VLAN to isolate it from other network traffic. This enhances security, reduces the risk of interference, and provides easier Quality of Service (QoS) management.
Separate Physical Network or Interfaces:

Whenever possible, use dedicated physical network interfaces for iSCSI traffic. This helps in isolating iSCSI communication from other types of network traffic, reducing contention for bandwidth and improving performance.
Quality of Service (QoS):

Implement Quality of Service policies to prioritize iSCSI traffic over other types of traffic on the network. This ensures that storage-related activities receive the necessary network resources for optimal performance.
Consistent Network Configuration:

Ensure consistent network configurations across all components involved in the iSCSI setup. This includes network interfaces, switch settings, and VLAN configurations. Consistency helps in maintaining predictability and stability in the network environment.
Redundancy:

Utilize redundant network paths and network interfaces to ensure high availability. This includes redundant switches, multiple network connections, to provide failover capability and load balancing.
   
    -->

<!-- ## MPIO for iSCSI

<!-- MPIO (Multipath I/O):
Purpose:

MPIO is designed to improve the reliability and performance of data transfers by using multiple physical paths between the iSCSI initiator (client) and the iSCSI target (storage).
Benefits:

Load Balancing: MPIO can distribute I/O traffic across multiple paths, balancing the load and improving overall performance.
Redundancy: If one path fails, MPIO can automatically switch to an alternate path, ensuring continuous access to the storage.
Considerations:

iSCSI Initiator and Target Support: Both the iSCSI initiator and target must support MPIO for it to be effective.
Configuration: MPIO requires configuration on both the initiator and target sides. Each path needs to be properly identified and managed.
 -->
 <!-- So when using iSCSI:
If > 1 network, don’t use LAGG, configure MPIO
VLANs should be handled on the switch
Use jumbo frames
If HA, use ALUA (ALUA and MPIO can be used at same time)

 -->

 <!-- ALUA: Asymmetric Logical Unit Access allows a client computer to discover the best path to the storage on a TrueNAS® system. HA storage clusters can provide multiple paths to the same storage. For example, the disks are directly connected to the primary computer and provide high speed and bandwidth when accessed through that primary computer. The same disks are also available through the secondary computer, but because they are not directly connected to it, speed and bandwidth are restricted. With ALUA, clients automatically ask for and use the best path to the storage. If one of the TrueNAS® HA computers becomes inaccessible, the clients automatically switch to the next best alternate path to the storage. When a better path becomes available, as when the primary host becomes available again, the clients automatically switch back to that better path to the storage.

 -->

## LACP

<!-- LACP (Link Aggregation Control Protocol):
Purpose:

LACP, often used with technologies like Ethernet link aggregation (such as LACP with NIC teaming), combines multiple physical network links into a single logical link to increase bandwidth and provide fault tolerance.
Benefits:

Increased Bandwidth: LACP aggregates the bandwidth of multiple links, enhancing overall throughput.
Fault Tolerance: If one link fails, traffic is automatically redirected to the remaining active links.
Considerations:

Switch and Device Support: LACP requires support from both the switch infrastructure and the network interfaces on the devices (i.e., iSCSI initiator and target).
Configuration: Both the switch and connected devices must be properly configured to use LACP.
 -->

<!-- LACP is useful for network redundancy and performance but it will only scale throughput beyond a single link's speed if you have multiple simultaneous connections (usually from multiple users accessing the storage at once). If you have a single-user TrueNAS system, LACP will not provide a performance benefit. -->

<!-- 
Link Aggregation Control Protocol (LACP) is a protocol used to dynamically aggregate multiple network interfaces into a single logical link, providing increased bandwidth and fault tolerance. In the context of NAS (Network-Attached Storage) configuration, implementing LACP can offer several benefits:

Increased Bandwidth:

LACP allows you to bundle multiple physical network links into a single logical link, increasing the overall bandwidth available to the NAS. This is especially beneficial in environments where high data transfer rates are required, such as when multiple users are accessing the NAS concurrently.
Load Balancing:

LACP enables load balancing across the aggregated links, distributing network traffic more evenly. This helps prevent bottlenecks and ensures that the network bandwidth is efficiently utilized. Load balancing is particularly advantageous in scenarios where there are multiple clients accessing different files or services on the NAS simultaneously.
Fault Tolerance:

LACP provides fault tolerance by allowing traffic to continue flowing even if one or more individual links in the aggregated group fail. If a link becomes unavailable, LACP dynamically redistributes the traffic across the remaining active links, ensuring continuous access to the NAS resources.
Improved Reliability:

The dynamic nature of LACP enables automatic detection and recovery from link failures. This helps in maintaining a more reliable and resilient network connection to the NAS.
Simplified Management:

Instead of managing multiple individual network links separately, LACP simplifies the configuration and management of link aggregation. It presents a single logical interface to the network, streamlining the administration of network connections on the NAS.
Scalability:

As the network requirements grow, LACP provides a scalable solution. You can easily add additional physical links to the link aggregation group to increase bandwidth without the need for significant reconfiguration.
Consistent Network Configuration:

LACP ensures that the NAS has a consistent network configuration across all the aggregated links. This uniformity is important for maintaining a stable and predictable network environment.
Considerations when Implementing LACP for NAS:

Network Equipment Support:

Ensure that the network switches and other networking equipment in your environment support LACP. Both the NAS and the switch need to be configured to use LACP for successful link aggregation.
Configuration Consistency:

Maintain consistency in LACP configuration settings (such as LACP mode and load-balancing algorithm) across all devices participating in the link aggregation.
Network Redundancy:

While LACP provides fault tolerance within the local network, consider additional measures, such as diverse network paths or connections to redundant switches, to enhance overall network redundancy.
NAS Network Interface Configuration:

Configure the NAS network interfaces to use LACP and follow best practices for link aggregation configuration on the NAS platform. -->



## Monitoring Network performance
Set up monitoring tools to keep an eye on the health and performance of your TrueNAS system.

## TrueNAS Enterprise High Availability Systems

{{< enterprise >}}
Suggestions in this section apply specifically to TrueNAS Enterprise High Availability systems.
{{< /enterprise >}}

HA systems needing to be on a network that supports multicast packets for CARP,

CARP for HA systems on CORE (FreeBSD implementation of VRRP)

For CORE, Multicast needs to be enabled
	People will put multiple VLANs within the same subnet
	Each interface should be within its own subnet with multicast
	consider ignp snooping (should probably be a recommendation) -- keeps a list of communication ports that talk to eachother

SCALE HA doesn't use multicast, uses unicast

	Customer with spanning tree led to HA not being able to failover
	Reccommend not using that - Caleb might have more details relating to UC case


## 100 Gigabit Ethernet Design Considerations

<!-- Details matter more at 100 gig to deliver expected performance for single or multi-client deployment strategies 

iperf for point to point check -- gives bandwith max between computer and truenas
	you can paralelize the stack to check 100 but you need 4 instances on multiple ports
	this is for checking network speeds/looking

	Start multiple servers:
   		iperf3 -s -p 5101&; iperf3 -s -p 5102&; iperf3 -s -p 5103 &
	and then run multiple clients, using the "-T" flag to label the output:
   		iperf3 -c hostname -T s1 -p 5101 &;  
  		iperf3 -c hostname -T s2 -p 5102 &; 
		iperf3 -c hostname -T s3 -p 5103 &;

SMB multichannel
	Could use multiple VLANs over a single 100 gig port  

	Ask Caleb and Andrew


	NFS mount timeout values 
	Why would you choose SMB Multi over LACP - faster multi channel vs single channel 

NVMe being a protocol considerations

General guidance on testing drive speeds with an fio script, etc. getting performance benchmarks.

Sometimes tuning record size can lead to significant performance changes, moreso at 100 gig than regular.


NVMe queue depths - testing with a single system might not give the full picture on deployment without scaling out to more systems (this is a general thing to keep in mind, more impactful in 100 gig scenarios.


Optics should be compatible-- confer with network switch vendor to ensure optics compatibility


It is my position that we should be advising customers as to best practices for 100 Gig networking considerations in general. I had two separate cases this week (both Core) with varying levels of disparate issues relating to the fact that design considerations for 100 Gigabit should be very different than for lower speeds. 

WHY

Every detail matters when it comes to expected performance for single or multi-client deployment strategies. 

In one case, the customer was having trouble with even getting the optics to work stably. This is documented here: https://ixsystems.atlassian.net/browse/SEE-130 Whether or not this is a TN problem or an environmental one should not impact that network design should take into consideration various L1/L2 strategies. 

The ask is for general things like using the correct optics ( switch side) on the switch manufacturers compatibility matrix, having enough network backhaul, to support it, etc. These aren’t unique to 100 gig but the details matter here more.
-->
