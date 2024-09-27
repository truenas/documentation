&NewLine;

* Create a self-signed certificate for the app.
  The **Certificates** setting is not required for a basic configuration but is required when setting up multi-mode configurations and when using MinIO as an immutable target for Veeam Backup and Replication.
  
  {{< include file="/static/includes/apps/AddAppCertificate.md" >}}

* Set a pool for applications to use if not already assigned.

* (Optional) Create a new TrueNAS user to serve as the administrator for the app.
  You can use the default user or add a new user.
  When you [create a new user]({{< relref "ManageLocalUsersSCALE.md#creating-user-accounts" >}}) select **Create New Primary Group**, and select the appropriate group in the **Auxiliary Group** for the type of user you want to create. Make note of the UID for the new user to add in the installation wizard.

* Create the required dataset(s).