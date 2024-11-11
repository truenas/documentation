&NewLine;

{{< hint type=info title="Do Not Create Pool-Level Dataset Shares" >}}
When creating a share, do not attempt to setup the root or pool-level dataset for the share.
Instead, create a new dataset under the pool-level dataset for the share.
Setting up a share using the root dataset leads to storage reconfiguration issues.
{{< /hint >}}