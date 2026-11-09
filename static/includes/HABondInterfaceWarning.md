&NewLine;

{{< enterprise >}}
TrueNAS Support strongly discourages using the **FAILOVER** protocol setting when configuring Link Aggregation (bond) interfaces in HA systems.
Using this setting in HA systems is known to cause a delay in moving the virtual IP address from one controller to the other during a failover, which causes network access delays.

TrueNAS does not allow marking a bond interface in HA systems as **Critical**.
{{< /enterprise >}}