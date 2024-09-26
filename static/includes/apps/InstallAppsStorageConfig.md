&NewLine;

To allow TrueNAS to create the storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This is recommended for a test deployment of an app but not for a full app deployment. 

To use an existing dataset, which is the recommended option, set **Type** to **Host Path (Path that already exists on the system)**.

Either accept the default value in **Mount Path** or enter the correct mount path. For example, if the dataset name is *data*, enter */data* as the mount path. 

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

If the app requires additional datasets, click **Add** to the right of **Additional Storage** to show the storage volume fields.
Repeat the instructions above for each dataset to add.

Click **Add** to show the mount and host path fields for each additional dataset and if creating storage volumes for postgres data and postgres backup.