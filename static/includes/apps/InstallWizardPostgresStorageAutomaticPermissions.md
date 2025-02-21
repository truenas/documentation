&NewLine;

When storage volumes include a postgres dataset, do not select **Enable ACL** to configure permissions.
Instead, proceed with entering or browsing to select the dataset and populate the **Host Path** field, then select the **Automatic Permissions** option.
This configures permissions for the postgres dataset and, if configured, the parent dataset used to organize required datasets for the app.

{{< trueimage src="/images/SCALE/Apps/InstallWizardPostgresDatasetAutomaticPermissions.png" alt="Postgres Storage Automatic Permissions" id="Postgres Storage Automatic Permissions" >}}

As with other host path storage volumes, you can create a dataset when entering the host path.

You can use **Enable ACL** to manually configure ACL permissions for the postgres dataset and a parent dataset, but the process is involved and you receive errors after clicking **Install** on the application installation wizard. Additionally, the **Automatic Permissions** option does not show on the wizard screen.

You can reverse setting the host path with **Enable ACL** selected and configuring ACE entries up to the point where you click **Install** to finish the installation.
After this and when you receive the error, untangling permissions issues for the parent and postgres datasets gets complicated.
We recommend you use the **Automatic Permissions** option.