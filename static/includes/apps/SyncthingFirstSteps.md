&NewLine;

  [Create the two datasets]({{< relref "DatasetsSCALE.md" >}}) before beginning the app installation process.
  You can organize these under a parent dataset to keep the Syncthing storage datasets separated from datasets for other potential applications. For example, create a parent dataset *syncthing* with the two child datasets nested under it.

* If not already assigned, set a pool for applications to use.

* (Optional) Create a new TrueNAS user to serve as the administrator for the app
  
  Either use the default user and group IDs or [create a new user]({{< relref "ManageLocalUsersSCALE.md" >}}) with **Create New Primary Group** selected.
  Make note of the UID/GID for the new user.