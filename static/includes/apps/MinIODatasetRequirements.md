&NewLine;

* Go to **Datasets** and select the pool or dataset where you want to place the MinIO dataset. For example, */tank/apps/minio* or */tank/minio*.
  You can use either an existing pool or [create a new one]({{< relref "CreatePoolWizard.md" >}}).

  [Create the **data** dataset(s)]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
  You can organize the dataset(s) under a parent dataset for MinIO to keep the storage datasets separated from the dataset for other potential applications.
  For example, create the *minio* dataset and nest **data** under it.
  
  After creating the dataset, create the directory where MinIO stores information the application uses.

  {{< include file="/static/includes/MakeDirectory.md" >}}

  MinIO uses both the default **/export** and the **/data** mount points during storage configuration.
  The MinIO enterprise app creates the **/export** mount point for you but you must add this in the stable MinIO app.
  Create the **/data** mount point in both the enterprise and stable versions of the MinIO app.

  You can configure ACL permissions for app datasets by either setting up ACL permissions when prompted as you add datasets or clicking by **Edit** on the **Permissions** widget to open the **Edit ACL** screen after adding all datasets.
  Alternatively, you can configure ACL permissions while using the app installation wizard by selecting the **Enable ACL** option as you configure each app storage volume.
  See information provided in the sections below for details on which user ID and permissions settings to configure.

If you want to also mount other storage volumes inside the container pod using the host path option, create the dataset(s) before using the app installation wizard.