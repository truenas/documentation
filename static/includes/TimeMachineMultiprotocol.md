&NewLine;

{{< hint type=info title="Time Machine and Multiprotocol Shares Compatibility" >}}
**TrueNAS 25.04.0**: Time Machine shares are incompatible with multiprotocol (SMB/NFS) shares. TrueNAS automatically disables SMB2/3 lease support and AAPL extensions globally when multiprotocol shares are configured, preventing Time Machine functionality.

**TrueNAS 25.04.1 and later**: This limitation is removed. Multiprotocol shares now use per-share oplock management instead of global oplock disabling, allowing Time Machine and **Final Cut Pro Storage Share** shares to coexist with multiprotocol shares on the same system. SMB leases are permitted globally, with oplocks disabled only at the multiprotocol share level.
{{< /hint >}}
