&NewLine;

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

Leave **Type** set to the default **ixVolume** for the **/export** mount point. A host path dataset is not required for this storage volume.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfigSettings.png" alt="MinIO Enterprise Storage Configuration Settings" id="MinIO Enterprise Storage Configuration Settings" >}}

Set **Type** to **Host Path (Path that already exists on the system)** which is the recommended option for MinIO.
**Mount Path** populates with the default **/data1**.
Click **Enable ACL**.
Enter the path or browse to and click on the **data1** dataset location to populate **Host Path**.
Click **Add** to the right of **Add Entries**, then select **Entry is for a USER** in **ID Type**, enter the run as user ID in **ID**, and give it full control permissions.

Click **Add** to the right of **Data Directories** to show the storage fields to add the other datasets representing drives in for multi-mode configurations.
Click **Add** for each additional dataset (**data2**, **data3**, and **data4**).
If you change the configuration of a basic installation or SNMD, you can use the **data1** dataset in the configuration and add the three additional datasets.

Change the **Mount Path** to match each dataset path in **Host Path**. For example, for **data2** enter **/data2** in the **Mount Point** field.

Select **Force Flag** to allow upgrading the app. This allows writing to the dataset when there is existing data.

Repeat these storage instructions to add all four storage volumes and mount points.
When finished you should have four storage volumes and mount points configured.
