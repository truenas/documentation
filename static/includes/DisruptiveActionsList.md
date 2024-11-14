&NewLine;

Configuring features and functions can result in disruption to services and access to users or system connecting to TrueNAS through sharing or network services.
When adding new or changing existing functions and services, plan maintenance windows to minimize disruptions based on the type and area of change.

{{< expand "Actions that Cause Disruptions" "v" >}}
The following administrator actions  result in disruptions to services and client connections.
Duration of the disruptions depends on system and service configurations, number of users accessing shares and services, network interfaces, and configuration methods (directory service provisioned versus manually configured).
{{< truetable >}}
| Service | Function | Action Description |
|---------|----------|-------------|
| Network |  | Changing any network setting, such as adding or modifying an interface, making a general network change, etc., disrupts network services. An improperly configured network interface can result in lost access to the web UI. Improperly configured general network settings, such as DNS name servers, default gateway, host name, or domain name, can result in broken connectivity. |
| Directory Services |  | Changing Active Directory or LDAP services can result in issues with user access, domain access, etc. TrueNAS alerts users when changes cause breakage in affected areas. |
| SMB service | `smb.update` | Updating SMB clients disrupts access. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| NFS service | `nfs.update` | Updating NFS clients disrupts access. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| SMB shares | `sharing.smb.update`<br>`sharing.smb.delete` | Changing `guest` parameter or toggling `home` on or off in all clients disrupts access, and clients connected to a particular share are disrupted by these actions. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| NFS shares | `sharing.nfs.update`<br>`sharing.nfs.delete` | Updating or deleting clients connected to export is disruptive. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| iSCSI | `iscsi.global.update` | All iSCSI clients (e.g. ALUA toggle, basename changes, etc.) that likely require client-side modifications are disruptive. For example, if ALUA is enabled, TrueNAS serves targets on different IPs then when it is not enabled. Clients have to be reconfigured. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| iSCSI configurations |  | Changes to previously used iSCSI configurations are disruptive. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| iSCSI portal | `iscsi.portal.update`<br>`iscsi.portal.delete` | Updating existing targets to use the portal, or deleting targets using the portal disrupts access. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| iSCSI initiator | `iscsi.initiator.update`<br>`iscsi.initiator.delete` | Updates to targets configured to use the initiator, or deleting targets using the initiator disrupt access. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service.. |
| iSCSI auth | `iscsi.auth.update`<br>`iscsi.auth.delete` | Updating targets configured to use authentication disrupts access. Updates might require client configuration. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| iSCSI auth | `iscsi.discoveryauth.create`<br>`iscsi.discoveryauth.update`<br>`iscsi.discoveryauth.delete` | Changes to all targets disrupt access. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| iSCSI other APIs | `iscsi.target.update` | Changes only impact the target modified. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
| All services | Starts and restarts | Starting, stopping, and restarting any service disrupts clients relying on the service. Before making changes, the service must be stopped and then restarted when complete. Stopping the service disrupts clients relying on the service. |
{{< /truetable >}}
{{< /expand >}}
