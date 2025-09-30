&NewLine;
When using a TrueNAS system on a different release, the remote or destination system user is always root. 

To configure a new SSH connection while in the **Replication Task Wizard**:

1. Select **Add New** on the **SSH Connection** dropdown list to open the **New SSH Connection** configuration screen.

2. Enter a name for the connection.
   
   {{< trueimage src="/images/SCALE/Credentials/NewSSHConnectionNameAndMethod.png" alt="New SSH Connection Name and Method" id="New SSH Connection Name and Method" >}}

3. Select the **Setup Method** from the dropdown list. Leave this set to **Semi-Automatic** for a connection to another TrueNAS system.

4. Enter the remote TrueNAS host name or IP address as a URL in **TrueNAS URL**.   

   {{< trueimage src="/images/SCALE/DataProtection/AddNewSSHConnection.png" alt="New SSH Connection Screen" id="New SSH Connection Screen" >}}

5. Enter the administration user (i.e., root or admin) that logs into the remote system with the web UI in **Admin Username**. 
   Enter the password in **Admin Password**.
   
   If using a TrueNAS 13.0-U6.x system as the remote server, the remote user is always root.

   When using an earlier TrueNAS 22.12.1 system or if you installed TrueNAS as the root user and then created an admin user after initial installation, you must verify the admin user is correctly configured.

6. Enter the administration user (i.e., root or *admin*) for remote system SSH session. 
   If you clear root as the the user and type any other name the **Enable passwordless sudo for ZFS commands** option displays. 
   This option does nothing so leave it cleared.

7. Select **Generate New** from the **Private Key** dropdown list.

8. (Optional) Enter a new value in seconds for the **Connection Timeout** if you want to change the defaults.

9. Click **Save** to create a new SSH connection and populate the **SSH Connection** field in the **Replication Task Wizard**.

After creating a new SSH connection, go to **Credentials > Backup Credentials > SSH Connections**, click **Edit** to copy the public key, then edit the remote user configuration by pasting this in the **Public SSH Key** field.