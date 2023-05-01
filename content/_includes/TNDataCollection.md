---
---

When disabled, no information about system configuration and usage is collected.
The system capacity and software version is still collected.

The protocol for system data collection uses the same TCP ports as HTTPS (*443*) and passes through most firewalls as an outgoing web connection.
If a firewall blocks the data collection or the data collection is disabled, there is no adverse impact to the TrueNAS system.

Non-sensitive system data is used to identify the quality and operational trends in the fleet of TrueNAS systems used by the entire community.
The collected data helps iXsystems identify issues, plan for new features, and determine where to invest resources for future software enhancements.

The non-sensitive system data collected is clearly differentiated from sensitive user data that is explicitly not collected by TrueNAS.
This table describes the differences:

{{< truetable >}}
|               | Sensitive User Data (NOT COLLECTED) | Non-Sensitive System Data (Optionally Collected) |
|---------------|-------------------------------------|--------------------------------------------------|
| **Description** | Any data that includes user identity or business information | Data that only includes information about the TrueNAS system and its operation |
| **Frequency** | NEVER | Daily |
| **Examples** | Usernames, passwords, email addresses | Anonymous hardware inventory, faults, statistics, Pool configuration |
|              | User-created System and dataset names | Software versions, firmware versions |
|              | Directory, files names, user data | Services and features enabled, Usage and Performance statistics |
{{< /truetable >}}
