&NewLine;

{{< hint type=important title="Ensure Clean Destination" >}}
Before you begin configuring the replication task, first verify the destination dataset you want to use to store the replication snapshots is free of existing snapshots, or that snapshots with critical data are backed up before you create the task.
{{< /hint >}}

To create a replication task:

1. Create the destination dataset or storage location you want to use to store the replication snapshots.
   If using another TrueNAS system, [create a dataset]({{< ref "DatasetsSCALE" >}}) in one of your pools.
  
2. Verify the admin user home directory, auxiliary groups, and sudo setting on both the local and remote destination systems.
   Local replication does not require an SSH connection, so this only applies to replication to another system.

   If using a TrueNAS 13.0-U6.x system as the remote server, the remote user is always root.

   If using an earlier TrueNAS 22.12.1 system or you installed TrueNAS as the root user then created the admin user after initial installation, you must verify the admin user is correctly configured.

   {{< expand "Verify Admin User Settings" "v" >}}

   a. Go to **Credentials > Local User**, click anywhere on the admin user row to expand it, and then click **Edit**.

   Scroll down to the **Home Directory** setting.
   If set to **/var/empty**, first create a dataset to use for home directories, like */tank/homedirs*. Enter this in the **Home Directory** field, make sure this is not read only.

   {{< trueimage src="/images/SCALE/Credentials/ChangeAdminUserHomeDirectorySetting.png" alt="Home Directory Settings Early Bluefin" id="Home Directory Settings Early Bluefin" >}}

   For more information, follow the instructions in [Adding Home Directories]({{< ref "ManageUsers" >}}) to create the home directory for the admin user.

   b. Select the sudo permission level you want the admin user to have.
      **Allow all sudo commands with no password** must be selected to enable SSH+NETCAT remote replication.

   c. Click **Save**.
   {{< /expand >}}
