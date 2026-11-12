&NewLine;

{{< enterprise >}}
TrueNAS Support strongly discourages using the **FAILOVER** protocol setting when configuring Link Aggregation (bond) interfaces in HA systems.
Using this setting in HA systems might delay moving the virtual IP address from one controller to the other during a failover, causing network access delays.

Additionally, TrueNAS does not allow marking a bond interface in HA systems as **Critical** when the **FAILOVER** protocol is used but it is allowed in non-HA systems.
{{< /enterprise >}}
