&NewLine;

### Prerequisites
Before setting up a replication task, you must configure an [admin user]({{< relref "ManageLocalUsersSCALE" >}}) with the **Home Directory** set to something other than **/var/empty**.
Ensure the account configuration has **SSH password login enabled** set.
**Allow all sudo commands with no password** must also be enabled to enable SSH+NETCAT remote replication.

Remote replication requires setting up an [SSH connection]({{< relref "AddSSHConnectionKeyPair" >}}) in TrueNAS before creating a remote replication task.

Verify the SSH service settings to ensure **Allow Password Authentication** selected to enable these capabilities.
Incorrect SSH service settings can impact the admin user ability to establish an SSH session during replication and require you to obtain and paste a public SSH key into the admin user settings.

Replication tasks typically require a configured and active [periodic snapshot task]({{< relref "PeriodicSnapshotTasksSCALE" >}}).

### Typical Replication Configuration Process

1. Set up the data storage for where you want to save replicated snapshots.

2. Make sure the admin user is correctly configured.

3. Create a periodic snapshot task of the storage locations to back up.

4. Create an SSH connection between the local TrueNAS system and the remote system for remote replication tasks.
   Local replication does not require an SSH connection.
   You can do this from either **Credentials > Backup Credentials > SSH Connection** and clicking **Add** or from the **Replication Task Wizard** using the **Generate New** option in the settings for the remote system.

5. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard** where you specify the settings for the replication task.

   Setting options change based on the source selections. Replicating to or from a local source does not require an SSH connection.