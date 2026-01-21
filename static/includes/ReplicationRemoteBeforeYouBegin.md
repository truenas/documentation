&NewLine;

### Before You Begin Remote Replication

Remote replication requires that the admin user on the remote system has SSH access, the SSH connection public key added, a home directory, and sudo command permission. The SSH service must be on when running the periodic snapshot and replication tasks. 
Setting options change based on the source and destination selections.

When setting up remote replication:

1. Set up the data storage for replicated snapshots. On the remote system, go to **Datasets** to add a dataset for the replicated data (snapshots).

   TrueNAS does not allow you to create a new dataset using the **Source** or **Destination** file browsers in the replication wizard or the **Add Replication Task** configuration screen.
   After selecting the existing dataset where you want to store replicated data, the **Destination** file browser allows you to specify (create) a directory in an existing dataset on a local or remote system. You cannot create a directory for a dataset selected in the **Source** file browser.

2. Add a home directory for the admin user on the local and the remote systems.
   The **Home Directory** path on the **Add User** or **Edit User** screen must be set to something other than **/var/empty**.
   
   Click on the **Home Directory** setting to show the options.

   {{< trueimage src="/images/SCALE/Credentials/AddingAHomeDirectory.png" alt="Adding A Home Directory" id="Adding A Home Directory" >}}

   Select **Create Home Directory**, then use the file browser to select an existing dataset or use **Create Dataset** after selecting the parent dataset to create a new dataset for home directories.
   
   See [Managing Users]({{< ref "ManageUsers" >}}) for more information on home directories, SSH access, and sudo commands.

3. Set up an [SSH connection]({{< ref "AddSSHConnectionKeyPair" >}}) in TrueNAS before creating a remote replication task.

   You can go to **Credentials > Backup Credentials > SSH Connection** and click **Add** to create an SSH connection, or select **Generate New** on the **SSH Connection** dropdown in the **Replication Task Wizard** to create an SSH connection to the remote system.

   To configure an SSH connection, you need the IP address or host name for the remote system, and the administrator username and credentials.
   The administrator user on the remote system must have SSH access and the SSH service enabled so the local TrueNAS system can authenticate and communicate with the remote system.

   You can configure the SSH connection while configuring the replication task, but using the **Credentials > Backup Credentials > SSH Connection** option to add a new connection between the local and remote system allows you to properly configure the administration user associated with the task before you add the replication task.
   If not properly configured, TrueNAS shows error messages stating the issue preventing you from continuing.

   Using the **Add SSH Connection** screen creates the connection and keypair.
   You can obtain the public key from the keypair screen to copy/paste into the admin user on both the local and remote systems before you open the replication wizard.

4. Update the admin user settings to to allow SSH access, add the public key for the SSH credential for the remote system, and allow sudo commands.

   Go to **Credentials > Backup Credentials > SSH Credential**.
   Add a new credential to the remote system if one does not exist, and then edit it to see the public key.
   Copy the public key to add to the admin user on the remote system. You can add the credential on the local or remote system.

   On the remote system, go to  **Credentials > Users**, select the admin user, and click **Edit**.
   Verify the account configuration has **SSH Access** selected.
   If not, select it, and then paste the public key for the SSH connection in the **Public SSH Key** field.

   Click on **Sudo Commands** and select **Allow all sudo commands with no password** to enable it.

   Save changes.

5. Check the **SSH Service** settings. Go to **System > Services > SSH** and click the edit icon.
   Select **Allow Password Authentication** to enable this function. Save the change.

   Incorrect SSH service settings can impact the ability of the admin user to establish an SSH session during replication and require you to obtain and paste a public SSH key into the admin user settings.

   Enable **Start Automatically** if you want the SSH service to start after a system restart, and then start or restart the service.
