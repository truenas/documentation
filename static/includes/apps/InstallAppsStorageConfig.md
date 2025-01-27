&NewLine;

{{< expand "Setting the Storage Volume Type" "v" >}}
To allow TrueNAS to create the storage volume, leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This adds a storage volume for the application nested in the hidden **ix-apps** dataset, located on the pool selected as the apps pool.
Using ixVolume is intended for a test deployment of an app but not for a full app deployment, as data does not persist for these volumes after deleting the app where a dataset does.
Datasets make recovering, transferring, and accessing app configuration, user, or other data possible where ixVolumes do not. 

To use an existing dataset, which is the recommended option, set **Type** to **Host Path (Path that already exists on the system)**.

If the install wizard shows a **Mount Path**, either accept the default value or enter the correct mount path. For example, if the dataset name is *data*, enter */data* as the mount path. 

To create a dataset while in the app installation wizard, with **Type** set to the host path option, go to the **Host Path** field, click into the pool or a dataset in the pool to activate the **Create Dataset** option. Click on **Create Dataset** to open the dialog.
Enter the name for the dataset, then click **Create**. TrueNAS creates the dataset in the location selected.

Select **Enable ACL** to define ACL permissions and to populate the **Host Path** field by either entering or browsing to and selecting the location of the dataset.
Populating the **Host Path** with the dataset location and then selecting **Enable ACL** clears the values, so we recommend selecting **Enable ACL** before entering the host path.

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

Repeat the above for each required dataset.
{{< /expand >}}