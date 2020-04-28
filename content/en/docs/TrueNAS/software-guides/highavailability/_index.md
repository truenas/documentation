---
title: "High Availablity"
linkTitle: "High Availablity"
description: "How to update a High Availability TrueNAS Enterprise system"
---

{{% alert title="Licensed Feature" color="warning" %}}
High Availability is a TrueNAS Enterprise licensed feature only.
For assistance, please contact iX Support.

{{% /alert %}}

TrueNAS Enterprise uses an active/standby configuration of dual TrueNAS controllers for HA.
Dual-ported disk drives are connected to both TrueNAS controllers simultaneously.
One TrueNAS controller is active, the other standby.

<img src="/images/ha-dashboard.png">
<br><br>

The active TrueNAS controller sends periodic announcements to the network.
If a fault occurs and the active TrueNAS controller stops sending the announcements, the standby TrueNAS controller detects this and initiates a failover.
Storage and cache devices are imported on the standby TrueNAS controller, then I/O operations switch over to it.
The standby TrueNAS controller then becomes the active TrueNAS controller.
This failover operation can happen in seconds rather than the minutes of other configurations, significantly reducing the chance of a client timeout.

The Common Address Redundancy Protocol ([CARP](https://www.openbsd.org/faq/pf/carp.html)) is used to provide high availability and failover.
CARP was originally developed by the OpenBSD project and provides an open source, non patent-encumbered alternative to the VRRP and HSRP protocols.
Failover is not allowed if both TrueNAS controllers have the same CARP state.

{{% alert title="Service Interruptions" color="warning" %}}
Seamless failover is only available with iSCSI or NFSv4. Other protocols can failover, but connections are disrupted by the failover event.
{{% /alert %}}