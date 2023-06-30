---
---

{{< hint type=important >}}
Before you begin configuring the replication task, first verify the destination dataset you want to use to store the replication snapshots is free of existing snapshots, or that snapshots with critical data are backed up before you create the task.
{{< /hint >}}

To create a replication task:

1. Create the destination dataset or storage location you want to use to store the replication snapshots.
   If using another TrueNAS SCALE system, [create a dataset]({{< relref "DatasetsSCALE.md" >}}) in one of your pools.
  
2. Verify the admin user home directory, auxiliary groups, and sudo setting on both the local and remote destination systems.
   Local replication does not require an SSH connection so this only applies to replication to another system.

   If using a TrueNAS CORE system as the remote server, the remote user is always root. 

   If using a TrueNAS SCALE system on an earlier release like Angelfish, the remote user is always root.

   If using an earlier TrueNAS SCALE Bluefin system (22.12.1) or you installed SCALE as the root user, then created the admin user after initial installation, you must verify the admin user is correctly configured.
   {{< expand "Verify Admin User Settings" "v" >}}

   a. Go to **Credentials > Local User**, click anywhere on the **admin** user row to expand it. 
      Scroll down to the **Home Directory** setting. If set to **/home/admin**, select **Create Home Directory**, then Click **Save**.
      
   {{< trueimage src="/images/SCALE/22.12/ChangeAdminUserHomeDirectorySetting.png" alt="Home Directory Settings Early Bluefin" id="1: Home Directory Settings Early Bluefin" >}}

   If set to **/nonexistent**, first create a dataset to use for home directories, like */tank/homedirs*. Enter this in the **Home Directory** field, make sure this is not read only.

   b. Select the sudo permission level you want the admin user to have. If you select **Allow all sudo commands with no password** you do not need to make changes. 
      If you select **Allowed sudo commands with no password** enter `/var/sbin/zfs` in the **Allowed sudo commands** field.

   c. Click **Save**.
   {{< /expand >}}
   