---
title: "Networking Recommendations"
description: "Best practices for TrueNAS network design."
weight: 40
tags:
 - network
 - iscsi
---

Follow these best practices for a stable and performant network.
These generally apply to either TrueNAS CORE or TrueNAS SCALE, unless specified, but each software might place the related options in slightly different web interface locations.

{{< hint type=tip >}}
iXsystems welcomes contributions from members of the TrueNAS community!

Use the **Feedback** button on the right side or click <svg class="gdoc-icon gdoc_code"><use xlink:href="#gdoc_code"></svg>**Edit Page** at the top right of this page to suggest your own networking tips and tricks.
{{< /hint >}}

## Static IP Address

By default, TrueNAS SCALE configures the primary network interface for Dynamic Host Configuration Protocol (DHCP) IP address management.
Consider assigning a static IP address for increased network stability and communication between devices.

{{< include file="/_includes/AliasOrStaticIP.md" >}}

See [Setting Up Static IPs]({{< relref "settingupstaticips.md" >}}) for more information.

## Interfaces

Use multiple network interfaces if possible for load balancing and redundancy.
Configure link aggregation (LAGG) to combine multiple physical interfaces into a single logical interface.

{{< include file="/_includes/MultipleInterfacesOnNetwork.md" >}}

See also [Setting Up a Link Aggregation]({{< relref "settinguplagg.md" >}}).

### LACP

If supported by your network switch and other networking equipment in your environment, select LACP to use the most common protocol for LAGG interfaces based on [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf).
Link Aggregation Control Protocol (LACP) dynamically aggregates multiple network interfaces into a single logical link, providing increased bandwidth and fault tolerance.

LACP allows you to bundle multiple physical network links into a single logical link, increasing the overall bandwidth available.
This is especially beneficial in environments where high data transfer rates are required, such as when multiple users are accessing storage concurrently.
LACP does not provide a performance benefit for single-user TrueNAS systems.

## Network Traffic Segmentation

Segregate network traffic using both Layer 2 and Layer 3 methods for improved efficiency and security.
This helps optimize bandwidth, reduce congestion, and enhance overall network resilience against potential security threats.

### Layer 2 Isolation

Use VLANs (Virtual Local Area Networks) to segment your network and isolate traffic.
VLANs allow you to create logical segments within a physical network switch, even if devices in those segments are physically connected to the same switch.

VLANs provide logical segmentation, allowing different groups of devices to be in separate broadcast domains regardless of their physical location in the network.
Devices in one VLAN do not see the broadcast traffic of devices in other VLANs, reducing broadcast domain size and improving network efficiency.
VLANs provide flexibility in network design, providing enhanced isolation, access control, and scalability.
They are often used to group devices based on functional roles or department and optimize performance by prioritizing discrete traffic types on each VLAN.

See also [Setting Up a Network VLAN]({{< relref "settingupvlan.md" >}}).

#### Spanning Tree Protocol

A Spanning Tree Protocol (STP) in a large Layer 2 network can offer enhanced stability by preventing loops, but comes with potential downsides, including scalability limitations and suboptimal bandwidth utilization.

STP is effective at preventing broadcast storms and network loops by identifying and blocking redundant paths.
This is crucial in a large L2 network where the potential for loops is higher due to the presence of multiple interconnected switches.
In the event of a link failure, STP can dynamically reconfigure the network to use alternate paths, ensuring continuity of service.

STP also simplifies deployment as it is a standard protocol widely supported by network devices.
It automatically calculates the topology and determines the best path for traffic.

However, in a large network, the convergence time of STP can be a concern.
When a topology change occurs (such as a link failure or recovery), STP needs time to recalculate the spanning tree and converge on a new topology.
During this time, some paths may be blocked, affecting network performance.

STP typically leaves some redundant paths blocked to maintain a loop-free topology.
This means that not all available paths are utilized, especially in large networks with numerous interconnected switches.

Ensuring a loop-free topology becomes more challenging as the network scales.
As the network size increases, the design and troubleshooting of STP configurations become more complex.
The configuration and management of STP settings across numerous switches may require careful planning to prevent misconfigurations that could compromise network stability.

While STP is effective in preventing loops, its behavior in a large Layer 2 network may lead to challenges such as increased convergence times and underutilization of available bandwidth.
Especially for large networks, it is beneficial to consider a combination of Layer 2 and Layer 3 technologies instead of relying solely on Layer 2 bridging. This approach can reduce the size of broadcast domains and simplify network design.

### Layer 3 Isolation

Use network layer (subnet) isolation to separate storage traffic from other network traffic to avoid congestion.
If you have multiple subnets in your network, you can run the management UI (and IPMI, if you have it) on one subnet and data on another.

Devices in different subnets cannot communicate directly without the use of a router or layer 3 switch.
Each subnet has its own IP address range.
Devices within the same subnet share the same network address and have unique host addresses.

Communication between devices in different subnets requires routing.
Broadcast traffic is contained within the boundaries of a subnet.
Devices in one subnet do not receive broadcasts from devices in other subnets without routing.

Separate subnets are commonly used for security and to manage IP address space efficiently.
By placing the TrueNAS system on a separate subnet, you can isolate it from general internet traffic.
This helps in reducing the attack surface and provides an additional layer of security.

Separating the TrueNAS system onto its own subnet allows for more granular control over bandwidth allocation
You can prioritize or limit the bandwidth for traffic to and from the NAS, ensuring that it gets the necessary resources without being adversely affected by other network activities.
Isolating the NAS on a dedicated subnet helps prevent scenarios where heavy internet traffic impacts the performance of the NAS. This is particularly important if the NAS is used for critical or time-sensitive operations.
Implement Quality of Service policies to prioritize storage traffic over other non-essential traffic. This ensures that data transfers to and from the NAS receive the necessary priority and resources.

As your network grows, isolating the NAS onto its own subnet provides a scalable solution.
It allows you to maintain control and security even as you add more devices and services to the network.

See [Managing Interfaces]({{< relref "managinginterfaces.md" >}}) and [Setting Up Static IPs]({{< relref "settingupstaticips.md" >}}) for more information.

## iSCSI

iSCSI shares require specific networking considerations.
iSCSI should be its own dedicated VLAN network to isolate it from other network traffic.
This enhances security, reduces the risk of interference, and provides easier Quality of Service (QoS) management.

Prioritize iSCSI traffic over other types of traffic on the network.
This ensures that storage-related activities receive the necessary network resources for optimal performance.

Ensure consistent network configurations across all components involved in the iSCSI setup.
Consistency helps in maintaining predictability and stability in the network environment.

See [Block Shares (iSCSI)]({{< relref "scale/scaletutorials/shares/iscsi/_index.md" >}}) for more information.

#### MPIO for iSCSI

Use MPIO (Multipath I/O) to combine interfaces when using iSCSI.
Do not use LAGG link aggregation.

MPIO is designed to improve the reliability and performance of data transfers by using multiple physical paths between the iSCSI initiator (client) and the iSCSI target (storage).
MPIO can distribute I/O traffic across multiple paths, balancing the load and improving overall performance.
If one path fails, MPIO can automatically switch to an alternate path, ensuring continuous access to the storage.

Both the iSCSI initiator and target must support MPIO for it to be effective.
MPIO requires configuration on both the initiator and target sides. Each path needs to be properly identified and managed.

To configure multipath for iSCSI, go to the **iSCSI** screen and configure additional Portal IP addresses.

#### iSCSI and VMWare

Refer to the [VMWare best practices guide](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.storage.doc/GUID-BC516B24-7EAB-4ADA-819A-10DC496DEE9B.html) for information on configuring multiple network adapters when using VMWare with your TrueNAS system.

#### Jumbo Frames

Enable jumbo frames on an iSCSI share to enhance storage performance through the transmission of larger data packets, reducing overhead and improving overall efficiency.

To enable jumbo frames, go to the **Network** screen and edit the parent interface(s).
Set the **MTU** (Maximum Transmission Unit) to 9000.
Click **SAVE**.

Reboot the system and restart the iSCSI share to inherit.

#### ALUA

{{< enterprise >}}
TrueNAS Enterprise High Availability (HA) systems should enable ALUA (Asymmetric Logical Unit Access) for iSCSI shares.
ALUA and MPIO can be used at same time.

ALUA allows a client computer to discover the best path to the storage on a TrueNAS® system. HA storage clusters can provide multiple paths to the same storage. For example, the disks are directly connected to the primary computer and provide high speed and bandwidth when accessed through that primary computer. The same disks are also available through the secondary computer, but because they are not directly connected to it, speed and bandwidth are restricted. With ALUA, clients automatically ask for and use the best path to the storage. If one of the TrueNAS® HA computers becomes inaccessible, the clients automatically switch to the next best alternate path to the storage. When a better path becomes available, as when the primary host becomes available again, the clients automatically switch back to that better path to the storage.

To enable ALUA, select **Enable iSCSI ALUA** from the **Target Global Configuration** tab on the **iSCSI** screen.
{{< /enterprise >}}

## Multicast

{{< enterprise >}}
TrueNAS Enterprise HA systems need to be on a network that supports Multicast DNS for CARP.

From the **Network** screen, click **Settings** to edit Global Configuration.
Select **mDNS** under **Service Announcement** to enable multicast.
{{< /enterprise >}}

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

Every detail matters when it comes to expected performance for single or multi-client deployment strategies. 

In one case, the customer was having trouble with even getting the optics to work stably. This is documented here: https://ixsystems.atlassian.net/browse/SEE-130 Whether or not this is a TN problem or an environmental one should not impact that network design should take into consideration various L1/L2 strategies. 

The ask is for general things like using the correct optics ( switch side) on the switch manufacturers compatibility matrix, having enough network backhaul, to support it, etc. These aren’t unique to 100 gig but the details matter here more.
-->
