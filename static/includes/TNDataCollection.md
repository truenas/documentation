&NewLine;

The protocol for system data collection uses the same TCP ports as HTTPS (443) and passes through most firewalls as an outgoing web connection.
If a firewall blocks the data collection or the data collection is disabled, there is no adverse impact to the TrueNAS system.

When **Usage collection** is disabled, anonymous usage statistics consisting only of the software version and total system capacity (e.g. TrueNAS 24.04.0, 55 TB) are still collected.
Information about system configuration and usage is not collected.

When enabled, non-sensitive system data is transmitted to the TrueNAS team.
TrueNAS collects this data and uses it to identify the quality and operational trends in the fleet of TrueNAS systems used by the entire community, to identify issues, plan for new features, and determine where to invest resources for future software enhancements.

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

{{< expand "Reviewing Usage Collection" "v" >}}
To review system usage data collected by TrueNAS, access the system shell via SSH or the console and enter `midclt call usage.gather`.
This command returns the same statistics that are transmitted to the TrueNAS team when **Usage collection** is enabled.
{{< /expand >}}

TrueNAS does not collect any user-defined names for servers, pools, datasets, shares, files, applications/jails, processes, and similar.
Applications do transmit chart release names for deployed applications (e.g. “minio/2.0.6”) but not user-defined names.

{{< hint type=important title="Debug files do contain sensitive user data" >}}
While usage collection gathers only non-sensitive system data, sensitive user data is included in a TrueNAS-generated [debug file](https://www.truenas.com/docs/contributing/issuereporting/jiraissuereporting/#downloading-a-debug-file), such as those requested for a bug report, feature request, or other troubleshooting.
Always store debug files in a secure location.
Please review debugs and redact any sensitive information before sharing with external entities.
The [TrueNAS Privacy Policy](https://www.ixsystems.com/privacy-policy/) contains a detailed statement of our commitment to data privacy.
{{< /hint >}}
