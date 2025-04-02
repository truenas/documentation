&NewLine;

When storage volumes include a postgres dataset, do not select **Enable ACL** to configure permissions.
Instead, proceed with entering or browsing to select the dataset to populate the **Host Path** field, and then select the **Automatic Permissions** option.
This configures permissions for the postgres dataset and, if configured, the parent dataset used to organize required datasets for the app.

{{< trueimage src="/images/SCALE/Apps/InstallWizardPostgresDatasetAutomaticPermissions.png" alt="Postgres Storage Automatic Permissions" id="Postgres Storage Automatic Permissions" >}}

As with other host path storage volumes, you can create a dataset when entering the host path.

You can use **Enable ACL** to manually configure ACL permissions for the postgres dataset and a parent dataset, but getting the ACL permissions right is involved and if not correctly configured, you are likely to receive errors after clicking **Install** on the application installation wizard. Additionally, the **Automatic Permissions** option does not show on the wizard screen.

{{< expand "Why should I use Automatic Permissions?" "v" >}}
Before the **Automatic Permissions** option, users deploying apps with postgres datasets receive errors or tracebacks prompting them to add built-in users such as the **netdata** user and others.
These built-in users show in the **Run As Context** widget on the information screen for each app.
These users are not added as users through the **Credentials > Users > Add User** screen and might not show on the list of users. 
They are run-as users for the app that should be added as ACL entries to the ACL for the dataset host path.

Additionally, the parent dataset created for app datasets nested as children under the parent has different ACL requirements that must be set up when creating the parent dataset.
To simplify the process and avoid issues with normal ACL behaviors, use the **Automatic Permissions** option which properly configures the parent and postgres dataset ACL permissions.

You can reverse setting the host path with **Enable ACL** selected and configure ACE entries before you click **Install** to finish the installation.
At this point, you should not receive the error again.
If you do not reverse the **Enable ACL** selection and click **Install**, when you receive the error, untangling permission issues for the parent and postgres datasets becomes complicated.
We recommend you use the **Automatic Permissions** option.
{{< /expand >}}