&NewLine;

You can allow the app to create the storage volume, or use the recommended method and create the required **data1** dataset to use with the host path option.
[Create the dataset(s)]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
You can organize the dataset(s) under a parent dataset for MinIO to keep the storage datasets separated from the dataset for other potential applications.
For example, create the *minio* dataset and nest **data1** under it.

MinIO uses both the default **/export** and the **/data** mount points during storage configuration.

Go to **Datasets** and select the pool or dataset where you want to place the MinIO dataset. For example, */tank/apps/minio* or */tank/minio*.
You can use either an existing pool or [create a new one]({{< relref "CreatePoolWizard.md" >}}).

You can also mount other storage volumes inside the container pod using either the ixVolume or host path options, but these are not required.
If mounting additional storage volumes with the host path option, create the dataset(s) before using the app installation wizard.