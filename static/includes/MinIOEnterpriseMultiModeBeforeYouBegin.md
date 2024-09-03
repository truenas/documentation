&NewLine;

To install the MinIO **enterprise** train app, first create a self-signed certificate for the MinIO app.
The **Certificates** setting is not required for a basic configuration but is required when setting up multi-mode configurations and when using MinIO as an immutable target for Veeam Backup and Replication.

{{< include file="/static/includes/AddAppCertificate.md" >}}

If not already assigned, set a pool for applications to use.

You can allow the app to create the storage volumes, or use the recommended method and create the required **data1**, **data2**, **data3**, and **data4** datasets to use with the host path option.
[Create the datasets]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
You can organize the datasets under a parent dataset for MinIO to keep the storage datasets separated from dataset for other potential applications.
For example, create the *minio* dataset and nest **data1** under it.

You can also mount other storage volumes inside the container pod using either the ixVolume or Host Path options, but these are not required.
If mounting additional storage volumes with the host path option, create the dataset(s) before using the app installation wizard.

Either use the default user and group IDs or [create a new user]({{< relref "ManageLocalUsersSCALE.md#creating-user-accounts" >}}) with **Create New Primary Group** selected.
Make note of the UID/GID for the new user to add in the installation wizard.

If your system has active sharing configurations (SMB, NFS, iSCSI), disable them in **System > Services** before adding and configuring the MinIO application.
Start any sharing services after MinIO completes the installation and starts.