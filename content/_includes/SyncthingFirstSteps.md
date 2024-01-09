&NewLine;

You can allow the app to create a storage volume(s) or use existing datasets created in SCALE.
The TrueNAS Syncthing app requires a main configuration storage volume for application information.
You can also mount existing datasets for storage volume inside the container pod.

If you want to use existing datasets for the main storage volume, [create any datasets]{{< relref "DatasetsSCALE.md" >}} before beginning the app installation process (for example, *syncthing* for the configuration storage volume).
If also mounting storage volume inside the container, create a second dataset named **data1**. If mounting multiple storage volumes, create a dataset for each volume (for example, *data2*, *data3*, etc.).

You can have multiple Syncthing app deployments (two or more Charts, two or more Enterprise, or Charts and Enterprise trains, etc.).
Each Syncthing app deployment requires a unique name that can include numbers and dashes or underscores (for example, *syncthing2*, *syncthing-test*, *syncthing_1*, etc.).

Use a consistent file-naming convention to avoid conflict situations where data does not or cannot synchronize because of file name conflicts.
Path and file names in the Syncthing app are case sensitive.
For example, a file named **MyData.txt** is not the same as **mydata.txt** file in Syncthing.

If not already assigned, set a pool for applications to use.

Either use the default user and group IDs or [create the new user]({{< relref "ManageLocalUsersSCALE.md" >}}) with **Create New Primary Group** selected.
Make note of the UID/GID for the new user.