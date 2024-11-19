&NewLine;

{{< expand "Setting the Storage Volume Type" "v" >}}
To allow TrueNAS to create the storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This adds a storage volume for the application that can be found nested under the hidden **ix-apps** dataset, located on the pool selected as the apps pool.
This is recommended for a test deployment of an app but not for a full app deployment as data does not persist for these volumes after deleting the app where a dataset does.
Datasets make recovering, transfering, and accessing app configuration, user, or other data possible where ixVolumes do not. 

To use an existing dataset, which is the recommended option, set **Type** to **Host Path (Path that already exists on the system)**.

If the install wizard shows a **Mount Path**, either accept the default value or enter the correct mount path. For example, if the dataset name is *data*, enter */data* as the mount path. 

If you do not select **Enable ACL**, either enter or browse to the location of the dataset and select it to populate the **Host Path** field.
If you select **Enable ACL** after populating the **Host Path** you have to repeat this step, so we recommend selecting **Enable ACL** first and setting the host path once.

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

If the app requires additional datasets, repeat setting the host path for each required dataset, or if adding additional storage volumes inside the contanier, click **Add** to the right of **Additional Storage** to show the storage volume fields.

Click **Add** to show the mount and host path fields for each additional dataset and if creating storage volumes for postgres data and postgres backup.
{{< /expand >}}