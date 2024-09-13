&NewLine;

MinIO storage settings include the option to add storage volumes to use inside the container (pod).
To allow TrueNAS to create a storage volume, leave **Type** set to the default **ixVolume *(Dataset created automatically by the system)**.
This adds a storage volume for the application that can be found nested under the **ix-apps** dataset. To see this, create a recursive snapshot of the **ix-apps** dataset.

{{< trueimage src="/images/SCALE/Apps/InstallMinIOEnterpriseStorageConfig.png" alt="MinIO Add Storage Volumes" id="MinIO Add Storage Volumes" >}}

To use the **data1** existing dataset, select **Host Path (Path that already exists on the system)** from the **Type** dropdown list.
The **Mount Path** field populates with **/data1** as the first storage volume for a basic installation.
Enter the path or browse to select the **data1** dataset and populate the **Host Path** field.

Click **Add** to the right of **Data Directories** to add the datasets created and representing drives in for multi-mode configurations.
Click **Add** for each additional dataset (**data2**, **data3**, and **data4**).
If you change the configuration of a basic installation or SNMD, you can use the **data1** dataset in the configuration and add the three additional datasets.

Change the **Mount Path** to correspond to the dataset path entered or selected in **Host Path**.
Additional mount points are **/data2**, **/data3**, or **/data4**.

When configuring MNMD, create the datasets and repeat the storage settings on each system (node) in the cluster.

{{< hint type="warning" title="Changing Storage Volumes" >}}
If you install MinIO using the default ixVolumes option, recommended when doing a quick deployment for testing purposes, and then decide to change to a dataset host path, the change does not move data from the ixVolume to the host path dataset.
You can copy data from the ixVoume to the dataset but ACL permissions must be correctly set on the dataset to allow it.
At this time, you must use the CLI to copy data from one storage volume to the other.

If you set ACL permissions on an ixVolume, the permissions apply on every application start and only if the directory is empty.
If ACLs are configured they are applied.

If you switch from a dataset to an ixVolume, the permissions must be set correctly and the ixVolume empty.
{{< /hint >}}