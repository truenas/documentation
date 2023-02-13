---
title: "Enterprise (HA) System Alerts"
description: "This article provides information on system alerts Enterprise and Enterprise HA systems might see on SCALE."
weight: 50
aliases:
tags:
- scaleenterprise
- scalealerts
---


SCALE Enterprise (HA) systems could experience alerts related to the primary or secondary controller, and about failover operations that failed. 
This article lists some of the alerts and provides direction to tutorials in the TrueNaS Documenation Hub that can help users understand what is occuring or where to find the issues.
{{< hint info >}}
Enterprise HA customers are urged to contact iXsystems Suppor for assistance with resolving system issues especially with HA and failover issues.
{{< /hint >}}

## High Availability (HA) Alerts


| Alert | Description | Level |
|-------|-------------|-------|
| At Least 1 Network Interface Is Required To Be Marked Critical For Failover | Configuration error when configuring Failover service.<br> Check the network settings for controller 2. | Critical |
| Automatic Sync to Peer Failed |  | Critical |
| Controllers VRRP States Do Not Agree |  |Critical  |
| Disks Missing On Active Storage Controller |  | Critical |
| Disks Missing On Standby Storage Controller |  | Critical |
| Failed to Check Failover Status with the Other Controller |  | Critical |
| Failover Failed | Controller 1 did not fail over to controller 2.<br>  | Critical |
| Failover Internal Interface Not Found |  | Critical |
| Syncing Encryption Keys to Peer Failed |  | Critical |
| Syncing KMIP Keys to Peer Failed |  | Critical |
| TrueNAS Software Versions Must Match Between Storage Controllers |  | Critical |


{{< taglist tag="scaleenterprise" limit="10" title="Other Enterprise Articles" >}}
{{< taglist tag="scalealerts" limit="10" title="Related Alerts Articles" >}}