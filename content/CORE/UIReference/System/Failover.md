---
title: "Failover (HA)"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/system/failover/"
description: "Describes the fields in the Failover Configuration screen on TrueNAS CORE."
weight: 178
tags:
- HA
- failover
---

{{< enterprise >}}
This article only applies to licensed TrueNAS Enterprise High availability (HA) systems.
Contact the [iXsystems Sales Team](mailto:sales@ixsystems.com) to inquire about purchasing TrueNAS Enterprise licenses.
{{< /enterprise >}}

## Failover Configuration

![System Failover Enterprise](/images/CORE/System/SystemFailoverEnterprise.png "HA Failover Options")

{{< truetable >}}
| Name | Description |
|------|------|
| **Disable Failover** | Disable automatic failover. |
| **Default TrueNAS Controller** | Make the currently active TrueNAS controller the default when both TrueNAS controllers are online and HA is enabled. To change the default TrueNAS controller, unset this option on the default TrueNAS controller and allow the system to fail over. This briefly interrupts system services. |
| **Network Timeout Before Initiating Failover** | The number of seconds to wait after a network failure before triggering a failover. 0 means a failover occurs immediately or after two seconds when the system is using a link aggregation. |
| **SYNC TO/FROM PEER** | Synchronizes the active and standby TrueNAS controllers. |
{{< /truetable >}}
