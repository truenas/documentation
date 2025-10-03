&NewLine;

Click **Add** on the **SSH Connections** widget to open the configuration screen:

1. Enter a name for the connection, then select the **Setup Method**. 

   If establishing an SSH connection to another TrueNAS server use the default **Semi-automatic (TrueNAS only)** option.

   If connecting to a non-TrueNAS server select **Manual** from the dropdown list.

   {{< trueimage src="/images/SCALE/Credentials/NewSSHConnectNameMethodAuto.png" alt="Name and Method Settings" id="Name and Method Settings" >}}

2. Enter the authentication settings.

   {{< trueimage src="/images/SCALE/Credentials/NewSSHConnectAuthentication.png" alt="Authentication Settings" id="Authentication Settings" >}}

   a. Enter a valid URL scheme for the remote TrueNAS URL in **TrueNAS URL**.
      If specifying an IPv6 address, you must enter the IPv6 address enclosed in square brackets.
      For example, **https://[*ffff:ff:59f1:123::12*]**.

   b. Enter an admin user name, which is the username on the remote system entered to log in via the web UI to set up the connection.
      You can leave **Admin Username** set to the default **root** user, then enter the user password in **Admin Password**.

   c. (Optional) Enter the one-time password in **One-Time Password (if necessary)** if two-factor authentication is enabled.

   d. Enter a **Username**, which is the user name on the remote system to log in via SSH.

   e. Enter or import the private key from a previously created SSH key pair, or select **Generate New** to create a new one.

3. (Optional) Enter the number of seconds you want to wait for the remote TrueNAS system to connect in **Connect Timeout**.

   {{< trueimage src="/images/SCALE/Credentials/NewSSHConnectMoreOptions.png" alt="More Options Settings" id="More Options Settings" >}}

4. Click **Save**. 
   
Saving a new connection automatically opens a connection to the remote TrueNAS and exchanges SSH keys.
The new SSH connection displays on the **SSH Connection** and the **SSH Keypairs** widgets.

To edit the SSH connection, select it, then click on edit open the **SSH Connections** configuration screen populated with the saved settings.

To download the private and public keypair, click the <i class="material-icons" aria-hidden="true" title="Download">file_download</i> for the new keypair on the **SSH Keypairs** widget.
To view and copy the public or private key, click the **Edit** option for the keypair to open the **Edit Keypair** screen.