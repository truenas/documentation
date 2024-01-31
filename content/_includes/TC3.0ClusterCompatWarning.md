&NewLine;

{{< hint type="warning" title="Clustering Compatibility" >}}
TrueCommand 3.0.0 introduced a significant rebuild of the TrueNAS SCALE clustering feature.
This is to allow for greater stability, upgradeability, and less disruptive changes in the future.
This changes which TrueNAS SCALE versions are compatible with TrueCommand-managed clustering:

* SCALE 22.12 TrueNAS SCALE deployments can continue to use the clustering feature present in TrueCommand 2.3.3 or earlier.
* SCALE 23.10 and later TrueNAS SCALE deployments must use the clustering feature present in TrueCommand 3.0.0 and later.
* SCALE 24.04 and later is not compatible with TrueCommand clustering.

Upgrading a TrueCommand deployment with a SCALE cluster to 3.0.0 requires updating the SCALE systems to 23.10 and redeploying the cluster.
{{< /hint >}}
