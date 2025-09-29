&NewLine;


### Typical Replication Configuration Process

Setting options change based on the source selections. Replicating to or from a local source does not require an SSH connection.

1. Set up the data storage for replicated snapshots.
   TrueNAS does not allow you to create a new dataset using the file browser in the replication wizard and task configuration screen. Use the file browser to select a dataset configured on the system to store replicated data before you add the task.
   
   The destination settings allow you to specify a directory in a dataset where you want to send data.

2. Make sure the administration user assoicated with the replictation task is correctly configured.

3. Create a periodic snapshot task of the storage locations to back up.
   TrueNAS typically creates a periodic snapshot task right before it performs the replication task if one is not already created for the task.

4. Create an SSH connection between the local TrueNAS system and the remote system for remote replication tasks.
   Local replication does not require an SSH connection.

   You can go to **Credentials > Backup Credentials > SSH Connection** and click **Add** to create the SSH connection, or select **Generate New** on the **SSH Connection** dropdown in the **Replication Task Wizard** to create a connection to the remote system.
   If the administration user is not properly configured, TrueNAS shows error messages indicating the issue that needs to be resolved before you can add the task.

5. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard**.

   If you want to configure a replication task using advanced setting options on the **Add Replication Task** screen, click **Advanced Replication Creation** before entering settings in the replication wizard.
   Settings do not carry over from the wizard to the advanced task creation screen, and TrueNAS shows the dialog where you must confirm you want to leave the wizard screen before it opens.
   Immediately switching to the advanced screen does not show the confirmation dialog, and you do not have to enter your settings again.

### Before You Begin Remote Relication

When setting up remote replication:

1. Set up an [SSH connection]({{< ref "AddSSHConnectionKeyPair" >}}) in TrueNAS before creating a remote replication task.

   To configure an SSH connection you need the IP address or host name for the remote system, and the administration user name and credentials.
   You can configure the SSH connection while configuring the replication task, but using the **Credentials > Backup Credentials > SSH Connection** option to add a new connection between the local and remote system allows you to properly configure the administration user associated with the task before you add the replication task.
   If not properly configured, TrueNAS shows error messages stating what the issue is preventing you from continuing.

   Using the **Add SSH Connection** screen creates the connection and keypair.
   You can obtain the public key from the keypair screen to copy/paste into the admin user on both the local and remote systems before you open the replication wizard.

2. Create a home directory for the administration user on the local and remote systems.
   
   Add a home directory for the administration user on both systems. **Home Directory** must be set to something other than **/var/empty**.
   See [Managing Users]({{< ref "ManageUsersSCALE" >}}) for more information on home directories, SSH access, and sudo commands.

3. Update the user settings to to allow SSH access, add the public key, and allow sudo commands.
   
   Verify the account configuration has **SSH Access** selected.
   If not, edit the user, select this option, and then copy/paste the public key for the SSH connection in the **Public SSH Key** field.

   Click on **Sudo Commands** and select **Allow all sudo commands with no password** to enable it.

   Save changes.

4. Check the **SSH Service** settings. Go to **System > Services > SSH** and click edit.
   Ensure **Allow Password Authentication** selected to enable these capabilities. Save any changes.

   Incorrect SSH service settings can impact the admin user ability to establish an SSH session during replication and require you to obtain and paste a public SSH key into the admin user settings.

5. Add the dataset you want to use to store replicated data (snapshots).
   TrueNAS allows you to create a directory within an existing dataset but does not allow you to create the dataset.

Replication tasks typically require a configured and active [periodic snapshot task]({{< ref "PeriodicSnapshotTasksSCALE" >}}).


[EACCES] NoValidConnectionsError(None, 'Unable to connect to port 22 on 10.220.0.50')
Destination is required