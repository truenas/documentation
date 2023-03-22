### Replicated

Replicated volumes are the most similar to ZFS mirrors. They have exact copies of all data on all bricks. Since TrueNAS SCALE SMB cluster implementation requires a minimum of three nodes, a replicated volume has three identical copies of all data. 

A replicated volume can experience multiple brick failures, yet you can still access the data if a single brick is still accessible. Replicated volumes excel in data reliability and data redundancy at the cost of lower overall storage.

### Distributed Replicated

Distributed replicated volumes distribute files across replicated sets of bricks. You set the replica count during the initial volume configuration. 

Distributed replicated volumes require a minimum of three replicas to avoid potential issues with split-brain. The number of bricks must be a multiple of the replica count. The minimum number of nodes for this volume type is six since each replica set requires three nodes.

Distributed replicated volumes are best when you need highly-available data with redundancy protection, although they scale poorly. 

TrueCommand currently allows distributed replicated volumes with two replicas. This unintended behavior can lead to potential data loss due to split-brain situations. We are working to resolve this in [TC-2626](https://ixsystems.atlassian.net/browse/TC-2626).

### Dispersed

Dispersed volumes are most similar to Raidz. Data is striped across the bricks with parity added. You configure the number of redundant bricks during volume creation. The number of parity bricks determines the number of bricks the cluster can lose without impacting volume operation.