&NewLine;

If not already assigned, set a pool for applications to use.

You can allow the app to create two storage volume(s) or use the recommended method and create the two datasets to use with the host path option.

[Create the two datasets]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
You can organize these under a parent dataset to keep the Syncthing storage datasets separated from datasets for other potential applications. For example, create a parent dataset *syncthing* with the two child datasets **host** and **data1** nested under it.

You can also mount additional storage volume inside the container pod using either the ix-Volume or hostpath options, but these are not required.
If mounting additional storage volumes with the hostpath option, create the datasets before using the app installation wizard.

Either use the default user and group IDs or [create a new user]({{< relref "ManageLocalUsersSCALE.md" >}}) with **Create New Primary Group** selected.
Make note of the UID/GID for the new user.