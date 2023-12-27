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


## Network Interfaces

Use multiple network interfaces if possible for load balancing and redundancy. Configure link aggregation (LACP) if supported by your networking equipment.

## VLAN Segmentation

Use VLANs to segment your network and isolate traffic for security and performance reasons.

Separate storage traffic from other network traffic to avoid congestion.

## iSCSI

iSCSI should be its own dedicated VLAN network. Don't overload VLAN.

VMWare blurb - iSCSI and VMWare (ref VMWare best practices guide)
	https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.storage.doc/GUID-BC516B24-7EAB-4ADA-819A-10DC496DEE9B.html

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

<!-- General information 


general best practices about L2 adjacencies for iSCSI and an explaination of how spanning-tree may or may not actually help stabilize a large L2 network customers may have bridged into their datacenters .

LACP and iSCSI > Out of order packets
	Use MPIO instead two interfaces

	Blurb about ALUA checkbox  (? - blurb about not checking it? Our docs say do not enable unless supported and enabled on client computers-- or blurb about making sure it is enabled and supported on client side?)



-->


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
-->
