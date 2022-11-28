---
title: "Adding SSH Credentials"
description: "This article provides information on adding SSH connections, generating SSH keypairs, and adding the SSH public key to the root user."
weight: 20
alias:
tags:
 - scalessh
 - scalecredentials
 - scalersync
---


{{< toc >}}


The **SSH Connections** and **SSH Keypairs** widgets on the **Backup Credentials** screen display a list of SSH connections and keypairs configured on the system. 
Using these widgets, users can establish [Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) connections.

![BackupCredentialsSSHWidgets](/images/SCALE/22.02/BackupCredentialsSSHWidgets.png "SSH Connections and Keypairs Widgets")

To begin setting up an SSH connection, go to **Credentials > Backup Credentials** and click the **Add** button on the **SSH Connections** widget.

## Creating an SSH Connection 
This procedure uses the semi-automatic setup method for creating an SSH connection with other TrueNAS or FreeNAS systems. 
{{< expand "Click here for more information" "v" >}}
**Semi-automatic** simplifies setting up an SSH connection with another FreeNAS or TrueNAS system without logging in to that system to transfer SSH keys. 
This requires an SSH keypair on the local system and administrator account credentials for the remote TrueNAS. 
You must configure the remote system to allow root access with SSH. 
You can generate the keypair as part of the semiautomatic configuration or a manually created one using **SSH Keypairs**.

Using the **SSH Connections** configuration screen:

1. Enter a name and select the **Setup Method**. If establishing an SSH connection to another TrueNAS server use the default **Semi-automatic (TrueNAS only)** option.
   If connecting to a non-TrueNAS server select **Manual** from the dropdown list.

   ![SSHConnectionNameAndMethodSettings](/images/SCALE/22.02/SSHConnectionNameAndMethodSettings.png "SSH Connections Name and Method Settings")

2. Enter the authentication settings. 

   ![SSHConnectionAuthenticationSettings](/images/SCALE/22.02/SSHConnectionAuthenticationSettings.png "SSH Connections Authentication Settings")

   a. Enter a valid URL scheme for the remote TrueNAS URL in **TrueNAS URL**. This is a required field.

   b. Enter a user name or leave **Username** set to the default **root** user and enter the user password **Password**.

   c. Enter or import the private key from a previously created SSH keypair, or create a new one using the **SSH Keypair** widget.

3. (Optional) Select a security option from the **Cipher** dropdown list. 
   Select **Standard** for the most secure option, but this has the greatest impact on connection speed. 
   Select **Fast** for a less secure option than **Standard** but it can give reasonable transfer rates for devices with limited cryptographic speed. 
   Select **Disabled** to remove all security and maximize connection speed, but only disable security when using this connection within a secure, trusted network.

   ![SSHConnectionMoreOptionsSettings](/images/SCALE/22.02/SSHConnectionMoreOptionsSettings.png "SSH Connections More Options Settings") 

4. (Optional) Enter the number of seconds you want to have SCALE wait for the remote TrueNAS/FreeNAS system to connect in **Connect Timeout**.

5. Click **Save**. Saving a new connection automatically opens a connection to the remote TrueNAS and exchanges SSH keys. 
   The new SSH connection displays on the **SSH Connection** widget. To edit it, click on the name to open the **SSH Connections** configuration screen populated with the saved settings.
{{< /expand >}}
## Manually Configuring an SSH Connection
This procedure provides instructions on setting up an SSH connection to a non-TruNAS or non-FreeNAS system.
To manually set up an SSH connection, you must copy a public encryption key from the local system to the remote system.
A manual setup allows a secure connection without a password prompt.
{{< expand "Manual" "v" >}}

Using the **SSH Connections** configuration screen:

1. Enter a name and select **Manual** from the **Setup Method** dropdown list.

   ![SSHConnectionManualMethod](/images/SCALE/22.02/SSHConnectionManualMethod.png "SSH Connections Manual Method")

2. Enter the authentication settings. 

   ![SSHConnectionManualAuthentication](/images/SCALE/22.02/SSHConnectionManualAuthentication.png "SSH Connections Manual Authentication Settings")

   a. Enter a host name or host IP address for the remote non-TruNAS/FreeNAS system as a valid URL. An IP address example is *https://10.231.3.76*. This is a required field.

   b. Enter the port number of the remote system to use for the SSH connection.
   
   c. Enter a user name for logging into the remote system in **Username**. 

   c. Select the private key from the SSH keypair that you used to transfer the public key on the remote NAS from the **Private Key** dropdown.

   d. Enter the remote system SSH key for this TrueNAS SCALE system in **Remote Host Key** to authenticate the connection.

   e. Click **Discover Remote Host Key** after properly configuring all other fields to connect to the remote system and attempt to copy the key string to the related SCALE field.
   
3. (Optional) Select a security option from the **Cipher** dropdown list. 
   Select **Standard** for the most secure option, but this has the greatest impact on connection speed. 
   Select **Fast** for a less secure option than **Standard** but it can give reasonable transfer rates for devices with limited cryptographic speed. 
   Select **Disabled** to remove all security in favor of maximizing connection speed, but only disable security when usisg this connection within a secure, trusted network.

   ![SSHConnectionMoreOptionsSettings](/images/SCALE/22.02/SSHConnectionMoreOptionsSettings.png "SSH Connections More Options Settings") 

4. (Optional) Enter the number of seconds you want to have SCALE wait for the remote TrueNAS/FreeNAS system to connect in **Connect Timeout**.

5. Click **Save**. Saving a new connection automatically opens a connection to the remote TrueNAS and exchanges SSH keys. 
   The new SSH connection displays on the **SSH Connection** widget. To edit it, click on the name to open the **SSH Connections** configuration screen populated with the saved settings. 

{{< /expand >}}
### Adding a Public SSH Key to the TrueNAS Root Account
This procedure covers adding a public SSH key to the root user account on the TrueNAS SCALE system and generating a new SSH Keypair to add to the remote system (TrueNAS or other).
{{< expand "Click here for more information" "v" >}}
1. Copy the SSH public key text or download it to a text file.
   
   Log into the TrueNAS system that generated the SSH keypair and go to **Credentials > Backup Credentials**. 

   Click on the name of the keypair on the **SSH Keypairs** widget to open the keypair for the SSH connection. 

   Copy the text of the public SSH key or download the public key as a text file.

2. Add the public key to the **root** user account on the system where you want to register the public key.
   
   Log into the TrueNAS system that you want to register the public key on and go to **Credentials > Local Users**.

   Edit the **root** user account. Click on the <span class="material-icons">expand_more</span> icon and then click **Edit** to open the **Edit User** screen.

   Paste the SSH public key text into the **SSH Public Key** field on the **Edit User** configuration screen in the **Authentication** settings.

   Click **Save**.

   ![SSHEditUserAuthenticationSettings](/images/SCALE/22.02/SSHEditUserAuthenticationSettings.png "Edit Root Users SSH Key")

3. Add a new public SSH key to the remote system.
   
   Generate a new SSH keypair in **Credentials > Backup Credentials**. Click **Add** on the **SSH Keypairs** widget and select **Generate New**.

   Copy or download the value for the new public key.

   Add the public key to the remote NAS.

If the remote NAS is not a TrueNAS system, refer to the documentation for that system, and find their instructions on adding a public SSH key.
{{< /expand >}}
## Generating SSH Keypairs

TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private keypairs on the **SSH Keypairs** widget found on the **Credentials > Backup Credentials** screen. 
Keypairs are generally used when configuring **SSH Connections** or SFTP **Cloud Credentials**. 
TrueNAS does not support encrypted keypairs or keypairs with passphrases.

TrueNAS automatically generates keypairs as needed when creating new **SSH Connections** or **Replication** tasks.
To manually create a new keypair, click **Add** on the **SSH Keypairs** widget. Click **Generate New** on the **SSH Keypairs** screen. Give the new keypair a unique name and click **Save**. The keypair displays on the **SSH Keypairs** widget. 

![AccountsUsersRootSSHKeySCALE](/images/SCALE/AccountsUsersRootSSHKeySCALE.png "SSH Keypairs Form")

Use the <iconify-icon icon="icon-park-outline:download"></iconify-icon> download icon or click the <span class="material-icons">more_vert</span> at the bottom of the **SSH Keypairs** configuration screen to download these strings as text files for later use. 

{{< taglist tag="scalessh" limit="10" >}}