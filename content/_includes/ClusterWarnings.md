Clustering is a back-end feature in TrueNAS SCALE. You should only configure clustering using the TrueCommand web interface.
Attempting to configure or manage clustering from within the TrueNAS SCALE UI or Shell can result in cluster failures and permanent data loss.

Using the clustering feature on a SCALE system adds some restrictions to that system:

* Any existing non-clustered SMB shares no longer function.
* You cannot create new SMB shares separately from the clustering settings.
* You cannot add the system to a different cluster.
* Removing single systems from one cluster and migrating to another is currently unsupported. Removing a system from a cluster requires deleting the entire cluster.