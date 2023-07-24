---
---

Select **Enable Distributed Mode** when setting up a cluster of SCALE systems in a distributed cluster. 

MinIO in distributed mode allows you to pool multiple drives or TrueNAS SCALE systems (even if they are different machines) into a single object storage server for better data protection in the event of single or multiple node failures because MinIO distributes the drives across several nodes. 
For more information, see the [Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide).

To create a distributed cluster, click **Add** to show the **Distributed MinIO Instance URI(s)** fields for each TrueNAS system (node) IP addresses/host names to include in the cluster. Use the same order across all the nodes.