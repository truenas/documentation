Clustering is a back-end feature in TrueNAS SCALE and should only be configured using the TrueCommand web interface.
Attempting to configure or manage clustering from within the TrueNAS SCALE UI or Shell can result in cluster failures and permanent data loss.

Using the clustering feature on a SCALE system adds some restrictions to that system:

* Any existing non-clustered SMB shares present no longer function.
* New SMB shares cannot be created separately from the clustering settings.
* When added, the system cannot be added to a different cluster.
* Removing single systems from one cluster and migrating to another is currently unsupported. Removing a system from a cluster requires deleting the entire cluster.