&NewLine;

TrueNAS provides two options for storage volumes: ixVolumes and host paths.
The MinIO Enterprise app uses host paths as the storage volume type. Only use ixVolumes for a test deployment of the MinIO app.
MinIO uses the default ixVolume for the /export mount path and storage volume by default.
Create the **data** dataset to use as a host path storage volume, and accept the default **/data** as the mount path for this storage volume.

Set **Type** to the default **ixVolume (Dataset created automatically by the system)** to allow TrueNAS to create a storage volume.
This storage volume can be found nested under the hidden **ix-apps** dataset. This is not the recommended storage option except for the /export option.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfig.png" alt="MinIO Add Storage Volumes" id="MinIO Add Storage Volumes" >}}

Set **Type** to **Host Path (Path that already exists on the system)** to use the **data** dataset.
The **Mount Path** field populates with **/data** as the first storage volume for a basic installation.

To add ACL permissions when setting up the host path, select **Enable ACL**.
Enter or browse to select the **data** dataset and populate the **Host Path** field with the path to the dataset.

Click **Add** to the right of **Add Entries**, then select **Entry is for a USER** in **ID Type**, enter the run as user ID in **ID**, and give it full control permissions.

Select **Force Flag** to allow upgrading the app. This allows writing to the dataset when there is existing data.

If configuring either MNMD or SNMD, you must assign all four datasets to each system in the cluster. These datasets represent the disk in the multi-disk configurations.

To add additional datasets as host paths, click **Add** to the right of **Data Directories** to show the storage fields.
Click **Add** to the right of **Data Directories** to add additional datasets created and representing drives for multi-mode configurations.
Click **Add** for each dataset (**data1**, **data2**, **data3**, and **data4**).

Change the **Mount Path** to correspond to the dataset path entered or selected in **Host Path**.
Additional mount points are **/data2**, **/data3**, or **/data4**.
