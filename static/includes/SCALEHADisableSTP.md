&NewLine;

{{< hint type=important title="High Availability and Spanning Tree Protocol Conflicts" >}}
The failover feature on TrueNAS Enterprise platforms with High Availability (HA) can malfunction in network environments that heavily use the Spanning Tree Protocol (STP).
When configuring or troubleshooting HA failover, if TrueNAS does not respond to incoming network traffic, investigate STP use in the network and consider disabling STP on network switch ports connected to the TrueNAS platform.
{{< /hint >}}