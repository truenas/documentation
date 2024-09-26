&NewLine;

* Use the recommended method and create the required **data1**, **data2**, **data3**, and **data4** datasets to use with the host path option.
  These dataset represent each disk in the multi-disk configuration.

* [Create the datasets]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
  You can organize the datasets under a parent dataset for MinIO to keep the storage datasets separated from the dataset for other potential applications.
  For example, create the *minio* dataset and nest **data1** and the other datasets under it.

If you want to also mount other storage volumes inside the container pod using the host path option create the dataset(s) before using the app installation wizard.