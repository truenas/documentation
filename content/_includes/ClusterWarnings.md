SMB clusters created in TrueNAS SCALE Bluefin are not  available for cluster expansion. 
Beginning with TrueNAS SCALE Cobia, we plan to implement a method to enable new volumes for SMB cluster expansion.

{{< hint type=warning >}}
Clustering is considered experimental and should not be used in a production environment or for handling critical data!

Clustering is a back-end feature in TrueNAS SCALE. You should only configure clustering using the TrueCommand web interface.
Configuring or managing clusters within the TrueNAS SCALE UI or Shell can result in cluster failures and permanent data loss.
{{< /hint >}}

Using the clustering feature on a SCALE system adds some restrictions to that system:

* You cannot create new SMB shares separately from the clustering settings.
* You cannot add the system to a different cluster.
* You cannot remove single systems from one cluster and migrate to another. This is not currently supported. 
* You cannot remove a system from a cluster until you delete the entire cluster. 
* You cannot reuse an existing node without properly leaving an the cluster and cleaning up old gluster-related metadata.

Existing non-clustered SMB shares no longer function. 

Cluster nodes (systems) must be on the same release of SCALE.

Supported cluster types are replicated, distributed, distributed replicated, and dispersed. 
Distributed dispersed clustering is not currently supported.