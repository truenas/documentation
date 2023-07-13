---
---

Before configuring MinIO, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) and shared directory for the persistent MinIO data. 

Go to **Datasets** and select the pool or dataset where you want to place the MinIO dataset. For example, */tank/apps/minio* or */tank/minio*.
You can use either an existing pool or [create a new one]({{< relref "CreatePoolSCALE.md" >}}). 

After creating the dataset, create the directory where MinIO stores information the application uses. 
There are two ways to do this, one as the root user and the other as the local administrator (admin).
The root user can use either SCALE Shell or create a share that then creates the directory.
The local administrator account (admin) can only create the share, and then create the directory.
MinIO uses **/data** but allows users to replace this with the directory of their choice. 

If logged in as root, go to **System Settings > Shell**, change to the */pool/dataset* directory and then use the `mkdir /mnt/data` command to create the **/data** directory. 
If logged in as admin, create a share (i.e, an SMB share), log into that share, then create the directory.