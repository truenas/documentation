---
title: "Networking Recommendations"
description: "Best practices for TrueNAS network design."
weight: 40
tags:
 - network
 - iscsi
 - interfaces
---

Follow these best practices for a stable and performant network.

{{< hint type=tip >}}
iXsystems welcomes contributions from members of the TrueNAS community!

Use the **Feedback** button on the right side or click <svg class="gdoc-icon gdoc_code"><use xlink:href="#gdoc_code"></svg>**Edit Page** at the top right of this page to suggest your own networking tips and tricks.
{{< /hint >}}

## Static IP Address

By default, TrueNAS configures the primary network interface for Dynamic Host Configuration Protocol (DHCP) IP address management.
Consider assigning a static IP address for increased network stability and communication between devices.

{{< include file="/static/includes/AliasOrStaticIP.md" >}}

See [Setting Up Static IPs]({{< relref "/SCALE/SCALETutorials/Network/Interfaces/_index.md" >}}) for more information.

## Interfaces

Use multiple network interfaces if possible for load balancing and redundancy.
Configure link aggregation (LAGG) to combine multiple physical interfaces into a single logical interface.

{{< include file="/static/includes/MultipleInterfacesOnNetwork.md" >}}

See also [Setting Up a Link Aggregation]({{< relref "settinguplagg.md" >}}).

### LACP

If supported by your network switch and other networking equipment in your environment, select Link Aggregation Control Protocol (LACP) to use the most common protocol for LAGG interfaces based on [IEEE specification 802.3ad](https://www.ieee802.org/3/hssg/public/apr07/frazier_01_0407.pdf).
LACP dynamically aggregates multiple network interfaces into a single logical link, providing increased bandwidth and fault tolerance.

LACP allows you to bundle multiple physical network links into a single logical link, increasing the overall bandwidth available.
This is especially beneficial in environments where high data transfer rates are required, such as when multiple users are accessing storage concurrently.
LACP does not provide a performance benefit for single-user TrueNAS systems.

We do not recommend using LACP/LAGG for iSCSI traffic. [See below](#iscsi) for more information.

### SMB Multichannel

Depending on the requirements of your intended use case, SMB Multichannel (L3+) can offer certain advantages over LACP (L2).

SMB Multichannel allows for dynamic load balancing at the application layer, enabling multiple connections to be established between a client and a server.
This results in more efficient utilization of available network paths, especially in scenarios where the workload consists of multiple parallel data streams.
In contrast, LACP operates at the link layer and aggregates physical links into a single logical link.
While it provides load balancing, the granularity is typically based on source and destination IP addresses or MAC addresses, which may not distribute traffic as dynamically.

{{< hint type=tip >}}
It is not best practice to enable both LACP and SMB Multichannel in conjunction. Consider your network requirements and select the more appropriate aggregation strategy.
{{< /hint >}}

SMB Multichannel allows for flexibility in adapting to varying bandwidth requirements of different applications or workloads.
It can dynamically adjust the number of connections based on the available network resources and the demands of the data being transferred.

SMB Multichannel does not require specific switch configurations or support for link aggregation, making it potentially easier to deploy in environments where switch compatibility or configuration limitations exist.
LACP, on the other hand, relies on switch support for link aggregation.
While it is a standardized protocol, ensuring consistent switch compatibility and configuration can sometimes be more complex in diverse network environments.

SMB Multichannel is application-aware and can optimize connections based on the requirements of the specific application.
This can lead to more efficient use of available network resources for applications that can benefit from parallel connections.
LACP, being a lower-layer protocol, is less aware of the applications running over the network and may not optimize connections at the application layer to the same extent.

These advantages can be more pronounced at higher network speeds, such as in 100G environments ([see below](#link-aggregation)).

See [Setting Up SMB Multichannel]({{< relref "smbmultichannel.md" >}}) for more information.

## Network Traffic Segmentation

Segregate network traffic using both layer 2 and layer 3 methods for improved efficiency and security.
This helps optimize bandwidth, reduce congestion, and enhance overall network resilience against potential security threats.

### Layer 2 Isolation

Use VLANs (Virtual Local Area Networks) to segment your network and isolate traffic.
VLANs allow you to create logical segments within a physical network switch, even if devices in those segments are physically connected to the same switch.

VLANs provide logical segmentation, allowing different groups of devices to be in separate broadcast domains regardless of their physical location in the network.
Devices in one VLAN do not see the broadcast traffic of devices in other VLANs, reducing broadcast domain size and improving network efficiency.
VLANs provide flexibility in network design, providing enhanced isolation, access control, and scalability.
They are often used to group devices based on functional roles or departments and optimize performance by prioritizing discrete traffic types on each VLAN.

See also [Setting Up a Network VLAN]({{< relref "settingupvlan.md" >}}).

### Layer 3 Isolation

Use network layer (subnet) isolation to separate storage traffic from other network traffic to avoid congestion.
If you have multiple subnets in your network, you can run the management UI and IPMI if included on your motherboard on one subnet and data on another.

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

See [Managing Interfaces]({{< relref "/SCALE/SCALETutorials/Network/Interfaces/_index.md" >}}).

## iSCSI

iSCSI shares require specific networking considerations.
iSCSI should be its own dedicated VLAN network to isolate it from other network traffic.
This enhances security, reduces the risk of interference, and provides easier Quality of Service (QoS) management.

Prioritize iSCSI traffic over other types of traffic on the network.
This ensures that storage-related activities receive the necessary network resources for optimal performance.

Ensure consistent network configurations across all components involved in the iSCSI setup.
Consistency helps in maintaining predictability and stability in the network environment.

For more information, see [Block Shares (iSCSI)]({{< relref "scale/scaletutorials/shares/iscsi/_index.md" >}}).
See also [Best Practices for Configuring Networking with Software iSCSI](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.storage.doc/GUID-4C19E34E-764C-4069-9D9F-D0F779F2A96C.html) from VMware.

#### MPIO for iSCSI

Use multipath I/O (MPIO) to combine interfaces when using iSCSI.
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

{{< hint type=note >}}
All network hardware, including switches and client systems, must support and enable jumbo frames to prevent fragmentation and performance degradation.
{{< /hint >}}

To enable jumbo frames, go to the **Network** screen and edit the parent interface(s).
Set the **MTU** (Maximum Transmission Unit) to 9000.
Click **SAVE**.

Restart the system and restart the iSCSI share to inherit.

#### ALUA

{{< enterprise >}}
TrueNAS Enterprise High Availability (HA) systems should enable Asymmetric Logical Unit Access (ALUA) for iSCSI shares.
ALUA and MPIO can be used at the same time.

ALUA allows a client computer to discover the best path to the storage on a TrueNAS® system.
HA storage clusters can provide multiple paths to the same storage.
For example, the disks are directly connected to the primary computer and provide high speed and bandwidth when accessed through that primary computer. The same disks are also available through the secondary computer, but because they are not directly connected to it, speed and bandwidth are restricted. With ALUA, clients automatically ask for and use the best path to the storage. If one of the TrueNAS® HA computers becomes inaccessible, the clients automatically switch to the next best alternate path to the storage. When a better path becomes available, as when the primary host becomes available again, the clients automatically switch back to that better path to the storage.

To enable ALUA, select **Enable iSCSI ALUA** from the **Target Global Configuration** tab on the **iSCSI** screen.

Enterprise customers should contact iXsystems Support to validate network design changes.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

<hr>

## 100 Gigabit Ethernet Design Considerations

In a 100G network environment, established best practices remain relevant, however close attention to detail becomes critical to achieve the expected performance of both single and multi-client deployment strategies.
Configuration and infrastructure elements that may present minor inconveniences at lower speeds, can result in significant disruptions at 100 gigabytes.

### Capacity and Bandwidth

Network backhaul must have sufficient capacity and bandwidth to handle the aggregate traffic generated by one or more 100G connections.
This includes accommodating normal data transfer rates and potential bursts of high-speed data.
The network should provide low latency and high throughput to ensure efficient data transmission.

### Network Architecture

The overall network architecture and design play a significant role in supporting 100G networking.
This includes considerations such as deploying appropriate routers, switches, and other networking equipment capable of handling high-speed data flows.

All components, such as optical transceivers, should be compatible.
Consult your network switch manufacturer's compatibility matrix to confirm.

### Link Aggregation

The increased bandwidth capacity of a 100G network can result in enhanced performance.
However, implementing Link Aggregation Control Protocol (LACP) on 100G switches, particularly with Multi-Chassis Link Aggregations (MLAGs) and additional layers of abstraction, can introduce added complexity.
This can result in performance issues and requires more meticulous configuration.

Implementing SMB Multichannel in a 100G environment can contribute to more efficient utilization of the available resources and improved overall performance for file sharing and data access.

The ability of SMB Multichannel to establish multiple connections in parallel aligns well with the capabilities of a high-speed network.
This parallelism can result in efficient use of the available bandwidth and improved performance, especially when dealing with large data sets.
Optimized for Large Workloads:

In scenarios involving substantial data transfers, such as large file copies or data-intensive applications, SMB Multichannel in a 100G environment can help optimize connections and adapt to the high-speed networking capabilities, leading to improved responsiveness and reduced transfer times.
While SMB Multichannel itself is not specific to a particular network speed, its benefits become more pronounced and impactful in environments with higher bandwidth capacities, such as those provided by 100G networks.

### Record Size Tuning

The increased bandwidth of 100G networks has the potential to expose performance bottlenecks that have limited impacts in 10G or even 40G environments.
This means that optimization practices, such as record size tuning, can have a significant impact on network performance.

You should ensure that the record size for each dataset is in alignment with its I/O workload.
To adjust record size, go to Advanced/Other Options on the **Add** or **Edit Dataset** screen.

For a detailed discussion of record size tuning, see [Tuning Recordsize in OpenZFS](https://klarasystems.com/articles/tuning-recordsize-in-openzfs/) from Klara.

<hr>

## Performance Testing

After completing the initial network configuration, you should obtain performance benchmarks and verify the configuration suits your use case.

{{< hint type=tip >}}
Choose benchmark tests that closely resemble your real-world workload.
Synthetic benchmarks may not give a full understanding of the performance characteristics of your system.
{{< /hint >}}

### Disk Testing

While not strictly a networking concern, storage system disk benchmarking via [fio (Flexible I/O tester)](https://git.kernel.dk/cgit/fio/) can help you evaluate if the system is optimally tuned for your intended use.
For instance, systems that deal primarily with large files, such as data backup or media storage, benefit from a larger block size, while systems dealing primarily with small files, like documents or logs, prefer a smaller block size.
Confirm that your local storage performance is functioning as intended before moving on to test network bandwidth.

{{< hint type=warning >}}
Do not run fio tests with write or trim workloads against an active storage device.
{{< /hint >}}

See the [fio documentation](https://fio.readthedocs.io/en/latest/index.html) for all parameters and options.