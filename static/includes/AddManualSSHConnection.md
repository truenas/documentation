&NewLine;

Click **Add** on the **SSH Connections** widget to open the configuration screen:

1. Enter a name for the connection, then select **Manual** from the **Setup Method** dropdown list.

   {{< trueimage src="/images/SCALE/Credentials/NewSSHConnectNameMethodManual.png" alt="Manual Name and Method" id="Manual Name and Method" >}}

2. Enter the authentication settings.

   {{< trueimage src="/images/SCALE/Credentials/NewSSHConnectAuthenticationManual.png" alt="Manual Authentication Settings" id="Manual Authentication Settings" >}}

   a. Enter the remote system host name or IP address.
      An IP address example is *https://10.231.3.76*.
      This is a required field.

   b. Enter the port number of the remote system to use for the SSH connection.

   c. Enter the username of the remote system you wish to connect to in **Username**.

   d. Select the private key from the SSH key pair that you use to transfer the public key on the remote NAS from the **Private Key** dropdown.

   e. Click **Discover Remote Host Key** after properly configuring all other fields to query the remote system and automatically populate the **Remote Host Key** field.

4. (Optional) Enter the number of seconds you want SCALE to wait for the remote TrueNAS system to connect in **Connect Timeout**.

   {{< trueimage src="/images/SCALE/Credentials/NewSSHConnectMoreOptions.png" alt="Manual More Options" id="Manual More Options" >}}

5. Click **Save**. 

   Saving a new connection automatically opens a connection to the remote TrueNAS and exchanges SSH keys.
   The new SSH connection displays on the **SSH Connection** widget.
   To edit it, click on the name to open the **SSH Connections** configuration screen populated with the saved settings.