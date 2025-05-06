&NewLine;

{{< expand "Setting the Storage Volume Type" "v" >}}
Use **ixVolume** to let TrueNAS create a storage volume inside the hidden **ix-apps** dataset on the apps pool.  
Use this option for test deployments only, as ixVolumes do not persist after deleting the app.

For full deployments, set **Type** to **Host Path (Path that already exists on the system)** to use an existing dataset. This ensures persistent storage and easier recovery.

If **Mount Path** appears, accept the default or enter the matching dataset name, such as */data*.

To create a dataset during installation, click into the **Host Path** field, then select the pool or dataset. Click **Create Dataset**, name it, and click **Create**.

Select **Enable ACL** before entering or browsing to the dataset path. Entering the path first clears the field when ACL is enabled.

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}

Repeat for each required dataset.
{{< /expand >}}
