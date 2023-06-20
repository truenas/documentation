SMB clusters created in TrueNAS SCALE Bluefin are not available for cluster expansion. 
TrueNAS SCALE Cobia plans to implement a method to enable new volumes for SMB cluster expansion.

{{< hint type=warning >}}
Clustering is considered experimental and should not be used in a production environment or for handling critical data!

Clustering is a back-end feature in TrueNAS SCALE. You should only configure clustering using the TrueCommand web interface.
Configuring or managing clusters within the TrueNAS SCALE UI or Shell can result in cluster failures and permanent data loss.
{{< /hint >}}

Using the clustering feature on a SCALE system adds some restrictions to that system:

* Activating clustering disables individual SMB share creation on cluster member TrueNAS systems.
* Systems join a single cluster at a time.
* Removing or migrating systems from a cluster requires deleting the entire cluster.


Cluster nodes (systems) must be on the same release of SCALE.

Supported cluster types are replicated, distributed, distributed replicated, and dispersed. 
Distributed dispersed clustering is not currently supported.