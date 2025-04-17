&NewLine;

{{< hint type=info title="Time Machine and Multiprotocol Shares Are Not Compatible" >}}
To prevent unexpected failures in SMB shares, TrueNAS 25.04 and later automatically disables SMB2/3 lease support and AAPL extensions (typically used to configure Time Machine) globally when multiprotocol SMB/NFS shares are enabled.

This means that in TrueNAS 25.04 and later, multiprotocol shares are incompatible with Time Machine shares on the same system.
To prevent service interruption, Time Machine users should make sure that no multiprotocol shares are configured on TrueNAS.
{{< /hint >}}
