SMB clusters created in TrueNAS SCALE Bluefin are not  available for cluster expansion. Beginning with TrueNAS SCALE Cobia, we plan to implement a method to enable new volumes for SMB cluster expansion.

{{< hint danger >}}
Clustering is considered experimental and should not be used in a production environment or for handling critical data!

Clustering is a back-end feature in TrueNAS SCALE. You should only configure clustering using the TrueCommand web interface.
Configuring or managing clusters within the TrueNAS SCALE UI or Shell can result in cluster failures and permanent data loss.
{{< /hint >}}

Using the clustering feature on a SCALE system adds some restrictions to that system:

* Existing non-clustered SMB shares no longer function.
* You cannot create new SMB shares separately from the clustering settings.
* You cannot add the system to a different cluster.
* Removing single systems from one cluster and migrating to another is not currently supported. Removing a system from a cluster requires deleting the entire cluster.