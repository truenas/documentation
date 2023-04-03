---
---

{{< hint warning >}}
Before you begin configuring the replication task, first verify the destination dataset you want to use to store the replication snapshots is free of existing snapshots, or that snapshots with critical data are backed up before you create the task.
{{< /hint >}}

To create a replication task:

1. Create the destination dataset or storage location you want to use to store the replication snapshots.
   If using another TrueNAS SCALE system, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) in one of your pools.
  
2. Verify the admin user home directory setting. 
   Go to **Credentials > Local User**, click anywhere on the **admin** user row to expand it. 
   Scroll down to the **Home Directory** setting. If it is set to **/home/admin**, select **Create Home Directory**, then Click **Save**.

   In the early release of Bluefin, the admin user created does not point to **/home/admin/** in the **Home Directory** field. 
   You need to create a dataset to store user home directories, for example, a dataset named *homedirectories*, then edit the admin user to change this to the path to the dataset you created, for example, */tank/homedirectories*.

   ![ChangeAdminUserHomeDirectorySetting](/images/SCALE/22.12/ChangeAdminUserHomeDirectorySetting.png "Home Directory Settings Early Bluefin")

   Make sure the home directory is not read only.
   Click **Save**.

   