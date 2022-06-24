---
title: "Failover (HA)"
weight: 178
---

## Failover Configuration

![System Failover Enterprise](/images/CORE/12.0/SystemFailoverEnterprise.png "HA Failover Options")

| Name | Description |
|------|------|
| Disable Failover | Disable automatic failover. |
| Default TrueNAS Controller | Make the currently active TrueNAS controller the default when both TrueNAS controllers are online and HA is enabled. To change the default TrueNAS controller, unset this option on the default TrueNAS controller and allow the system to fail over. This briefly interrupts system services. |
| Network Timeout Before Initiating Failover | The number of seconds to wait after a network failure before triggering a failover. 0 means a failover occurs immediately or after two seconds when the system is using a link aggregation. |
| SYNC TO/FROM PEER | Synchronizes the active and standby TrueNAS controllers.
