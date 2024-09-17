&NewLine;

Configure the storage volumes. Scroll down to or click on **Storage Configuration** on the list of wizard sections.
Configure the storage volumes. 
Select the storage type you want to use.
To allow TrueNAS to create the storage volume, set **Type** to **ixVolume (Dataset created automatically by the system)**, which is the default but not recommended storage type.

Accept the default ***value** in **Mount Path** under **MinIO Export Storage (Data)**, which is **/export**.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOStorageConfig.png" alt="MinIO Storage Configuration Settings" id="MinIO Storage Configuration Settings" >}}

To use an existing dataset, set **Type** to **Host Path (Path that already exists on the system)**, which is the recommended option for MinIO.
**Mount Path** populates with the default **/export**.

Accept the default **value** in **Mount Path** under **MinIO Export Storage (Data)**, and leave **Type** set to **ixVolume (Dataset created automatically by the system)**.

Click **Add** to the right of **Additional Storage**.

Enter the path or browse to and click on the **data1** dataset location to populate **Host Path**.

Set the **Type** to **Host Path (Path that already exists on the system)**, and enter **/data** in **Mount Path** to add a data volume for the dataset.

You can select **Enable ACL** to modify dataset permissions and add ACL entries.