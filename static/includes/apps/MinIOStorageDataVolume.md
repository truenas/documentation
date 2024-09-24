&NewLine;

Configure the storage volumes. 
Accept the default ***value** in **Mount Path** under **MinIO Export Storage (Data)**, and leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
Accept the default value in **Mount Path** under **MinIO Export Storage (Data)**, and leave **Type** set to **ixVolume (Dataset created automatically by the system)**.
This sets the first mount point to **/export**.

Click **Add** to the right of **Additional Storage**.
Next set the **Mount Path** for the **data** dataset. Enter **/data** in **Mount Path** and enter or browse to select the host path to the **data** dataset.

Select **Host Path (Path that already exists on the system)** in **Type**, enter **/data** in **Mount Path** to add a data volume for the dataset and directory created above.
Enter or browse to the path for the **data** dataset created in the First Steps to set the **Host Path** value.

You can select **Enable ACL** to modify dataset permissions here, or go to **Datasets**, select the row for the **/minio/dataset** and click **Edit** on the **Permissions** widget to open the **ACL Editor** screen and customize dataset permissions and add ACE entries.
{{< include file="/static/includes/apps/InstallAppsStorageConfig.md" >}}