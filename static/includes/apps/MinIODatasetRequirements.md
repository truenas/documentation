&NewLine;

Before configuring MinIO, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) and shared directory for the persistent MinIO data.

Go to **Datasets** and select the pool or dataset where you want to place the MinIO dataset. For example, */tank/apps/minio* or */tank/minio*.
You can use either an existing pool or [create a new one]({{< relref "CreatePoolWizard.md" >}}).

After creating the dataset, create the directory where MinIO stores information the application uses.

{{< include file="/static/includes/MakeDirectory.md" >}}

MinIO uses both the default **/export** and the **/data** mount points during storage configuration.