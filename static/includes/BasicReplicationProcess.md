&NewLine;
## Setting Up a Simple Replication Task Overview

{{< include file="/static/includes/ReplicationIndexContentSCALE.md" >}}

The sections below provide overviews on what to do before you begin configuring a replication task.

### Local Replication Configuration Process

Local replication does not require the admin user to have SSH access, home directory, or sudo command permissions.
Setting options change based on the source and destination selections. Replicating to or from a local source does not require an SSH connection.

1. Set up the data storage for replicated snapshots. Go to **Datasets** to add a dataset to store the replicated data (snapshots).
   TrueNAS does not allow you to create a new dataset using the **Source** file browser in the replication wizard or the **Add Replication Task** configuration screen. Use the file browser to select the existing dataset on the system where you want to store replicated data.
   
   The **Destination** file browser allows you to specify (create) a directory in an existing dataset on a local or remote system, but you cannot create a directory for a dataset selected in the **Source** file browser.

3. Create a [periodic snapshot task]({{< ref "PeriodicSnapshotTasksSCALE" >}}) of the storage locations to back up.
   TrueNAS typically creates a periodic snapshot task right before it performs the replication task if one is not already created for the task.
   You might need to refresh the screen cache to see the task listed in the **Periodic Snapshot Task** widget. 

4. Go to **Data Protection > Replication Tasks** and click **Add** to open the **Replication Task Wizard**.

   If you want to configure a replication task using advanced setting options on the **Add Replication Task** screen, click **Advanced Replication Creation** before entering settings in the replication wizard.
   Settings do not carry over from the wizard to the advanced task creation screen, and TrueNAS shows the dialog where you must confirm you want to leave the wizard screen before it opens.
   Immediately switching to the advanced screen does not show the confirmation dialog, and you do not have to enter your settings again.

### Before You Begin Remote Replication

Remote replication requires that the admin user on the remote system has SSH access, the SSH connection public key added, a home directory, and sudo command permission. The SSH service must be on when running the periodic snapshot and replication tasks. 
Setting options change based on the source and destination selections.

When setting up remote replication:

1. Set up an [SSH connection]({{< ref "AddSSHConnectionKeyPair" >}}) in TrueNAS before creating a remote replication task.

   You can go to **Credentials > Backup Credentials > SSH Connection** and click **Add** to create the SSH connection, or select **Generate New** on the **SSH Connection** dropdown in the **Replication Task Wizard** to create a connection to the remote system.
   If the administration user is not properly configured, TrueNAS shows error messages indicating the issue that needs to be resolved before you can add the task.

   To configure an SSH connection you need the IP address or host name for the remote system, and the administration user name and credentials.
   The administration user on the remote system must have SSH access and SSH service enabled so the local TrueNAS system can communicate with it.

   You can configure the SSH connection while configuring the replication task, but using the **Credentials > Backup Credentials > SSH Connection** option to add a new connection between the local and remote system allows you to properly configure the administration user associated with the task before you add the replication task.
   If not properly configured, TrueNAS shows error messages stating the issue preventing you from continuing.

   Using the **Add SSH Connection** screen creates the connection and keypair.
   You can obtain the public key from the keypair screen to copy/paste into the admin user on both the local and remote systems before you open the replication wizard.

2. Add a home directory for the admin user on the local and the remote systems.
   
   Select **Create Home Directory**, and use the file broswer select the dataset where you want to create it.
   The file bowser allows you to create a new dataset.
   The **Home Directory** path must be set to something other than **/var/empty**.
   See [Managing Users]({{< ref "ManageUsersSCALE" >}}) for more information on home directories, SSH access, and sudo commands.

3. Update the admin user settings to to allow SSH access, add the public key for the SSH credential for the remote system, and allow sudo commands.
   
   Go to **Credentials > Backup Credentials > SSH Credential**.
   Add a new credential if one to the remote system does not exist, and then edit it to see the public key.
   Copy the public key to add to the admin user on the remote system. You can add the credential on the local or remote system.

   On the remote system, go to  **Credentials > Users**, select the admin user and click **Edit**.
   Verify the account configuration has **SSH Access** selected.
   If not, select it, and then paste the public key for the SSH connection in the **Public SSH Key** field.

   Click on **Sudo Commands** and select **Allow all sudo commands with no password** to enable it.

   Save changes.

4. Check the **SSH Service** settings. Go to **System > Services > SSH** and click the edit icon.
   Enable **Allow Password Authentication**. Save the change.

   Incorrect SSH service settings can impact the admin user ability to establish an SSH session during replication and require you to obtain and paste a public SSH key into the admin user settings.

   Enable **Start Automatically** if you want the SSH service to start after a system restart, and then start or restart the service.

5. Add the dataset you want to use to store replicated data (snapshots).
   TrueNAS allows you to create a directory within an existing dataset but does not allow you to create the dataset in the file browser for the **Destination** location.
