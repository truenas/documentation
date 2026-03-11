&NewLine;

TrueNAS 26 brings many new features and improvements to the TrueNAS experience.

### SMB Stateful Failover

TrueNAS 26 introduces stateful SMB HA failover for Enterprise systems with High Availability (HA) configurations.
When enabled in the SMB service configuration, TrueNAS maintains SMB session state across controller failover events, allowing SMB clients to recover existing connections without re-authentication after a failover.
See [Enabling SMB Stateful Failover]({{< ref "AddManageSMBShares#enabling-smb-stateful-failover" >}}) for configuration details.

{{< columns >}}

<--->

{{< /columns >}}
