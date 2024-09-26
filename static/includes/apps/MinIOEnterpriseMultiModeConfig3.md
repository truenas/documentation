&NewLine;

Scroll down to or click on **Storage Configuration** on the list of wizard sections.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfigSettings.png" alt="MinIO Enterprise Storage Configuration Settings" id="MinIO Enterprise Storage Configuration Settings" >}}

To create the storage volume, set **Type** to **Host Path (Path that already exists on the system)** which is the recommended option for MinIO.
**Mount Path** populates with the default **/data1**.
Enter the path or browse to and click on the **data1** dataset location to populate **Host Path**.

Click **Add** to the right of **Data Directories** to show the storage fields to add the other datasets representing drives in for multi-mode configurations.
Click **Add** for each additional dataset (**data2**, **data3**, and **data4**).
If you change the configuration of a basic installation or SNMD, you can use the **data1** dataset in the configuration and add the three additional datasets.

Change the **Mount Path** to match each dataset path in **Host Path**. For example, for **data2** enter **/data2** in the **Mount Point** field.

Repeat these storage instructions to add all four storage volumes and mount points.
When finsihed you should have four storage volumes and mount points configured.