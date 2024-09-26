&NewLine;

Configure the storage volumes.
Accept the default value in **Mount Path** under **MinIO Export Storage (Data)**, and leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This sets the first mount point to **/export**.

Click **Add** to the right of **Additional Storage**.
Next set the **Mount Path** for the **data** dataset. Enter **/data** in **Mount Path** and enter or browse to select the host path to the **data** dataset.

{{< include file="/static/includes/apps/AppInstallWizardACLConfiguration.md" >}}