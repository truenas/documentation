&NewLine;

MinIO storage settings include the option to add storage volumes to use inside the container (pod).
To allow TrueNAS to create a storage volume, leave **Type** set to the default **ixVolume *(Dataset created automatically by the system)**.
This adds a storage volume for the application that can be found nested under the hidden **ix-apps** dataset. To see this, create a recursive snapshot of the **ix-apps** dataset.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfig.png" alt="MinIO Add Storage Volumes" id="MinIO Add Storage Volumes" >}}

To use the **data** existing dataset, select **Host Path (Path that already exists on the system)** from the **Type** dropdown list.
The **Mount Path** field populates with **/data1** as the first storage volume for a basic installation.
Enter the path or browse to select the **data1** dataset and populate the **Host Path** field.

Click **Add** to the right of **Data Directories** to add the datasets created and representing drives in for multi-mode configurations.
Click **Add** for each dataset (**data1**, **data2**, **data3**, and **data4**).

If configuring either MNMD or SNMD, you must all all four datasets to each system in the cluster. These datasets represent the disk in the multi-disk configurations.

Change the **Mount Path** to correspond to the dataset path entered or selected in **Host Path**.
Additional mount points are **/data2**, **/data3**, or **/data4**.

You can select **Enable ACL** to modify dataset permissions and add ACL entries.