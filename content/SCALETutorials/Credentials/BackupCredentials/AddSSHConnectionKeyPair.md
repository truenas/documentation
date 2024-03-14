---
title: "Adding SSH Credentials"
description: "Provides information on adding SSH connections, generating SSH keypairs, and adding the SSH public key to the root user."
weight: 20
alias:
tags:
 - ssh
 - credentials
 - rsync
---

The **SSH Connections** and **SSH Keypairs** widgets on the **Backup Credentials** screen display a list of SSH connections and keypairs configured on the system.
Using these widgets, users can establish Secure Socket Shell (SSH) connections.

You must also configure and activate the [SSH Service]({{< relref "sshservicescale.md" >}}) to allow SSH access.

## Creating an SSH Connection

To begin setting up an SSH connection, go to **Credentials > Backup Credentials**.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsAllCloudSSH.png" alt="Backup Credentials Screen" id="Backup Credentials Screen" >}}

Click **Add** on the **SSH Connections** widget.

### Configuring a Semi-Automatic SSH Connection

This procedure uses the semi-automatic setup method for creating an SSH connection with other TrueNAS or FreeNAS systems.
{{< expand "Click here for more information" "v" >}}
**Semi-automatic** simplifies setting up an SSH connection with another FreeNAS or TrueNAS system without logging in to that system to transfer SSH keys.
This requires an SSH keypair on the local system and administrator account credentials for the remote TrueNAS.
You must configure the remote system to allow root access with SSH.
You can generate the keypair as part of the semiautomatic configuration or a manually created one using **SSH Keypairs**.

Using the **SSH Connections** configuration screen:

1. Enter a name and select the **Setup Method**. If establishing an SSH connection to another TrueNAS server use the default **Semi-automatic (TrueNAS only)** option.
   If connecting to a non-TrueNAS server select **Manual** from the dropdown list.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectNameMethodAuto.png" alt="Name and Method Settings" id="Name and Method Settings" >}}

2. Enter the authentication settings.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectAuthentication.png" alt="Authentication Settings" id="Authentication Settings" >}}

   a. Enter a valid URL scheme for the remote TrueNAS URL in **TrueNAS URL**.
      This is a required field.

   b. Enter an admin user name, which is the username on the remote system entered to log in via the web UI to set up the connection.
      Or, leave **Admin Username** set to the default **root** user and enter the user password in **Admin Password**.

   c. If two-factor authentication is enabled, enter the one-time password in **One-Time Password (if neccessary)**.

   d. Enter a **Username**, which is the user name on the remote system to log in via SSH.

   e. Enter or import the private key from a previously created SSH keypair, or create a new one using the **SSH Keypair** widget.

4. (Optional) Enter the number of seconds you want to have SCALE wait for the remote TrueNAS/FreeNAS system to connect in **Connect Timeout**.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectMoreOptions.png" alt="More Options Settings" id="More Options Settings" >}}

5. Click **Save**. Saving a new connection automatically opens a connection to the remote TrueNAS and exchanges SSH keys.
   The new SSH connection displays on the **SSH Connection** widget.
   To edit it, click on the name to open the **SSH Connections** configuration screen populated with the saved settings.
{{< /expand >}}

### Configuring a Manual SSH Connection

Follow these instructions to set up an SSH connection to a non-TrueNAS or non-FreeNAS system.
To manually set up an SSH connection, you must copy a public encryption key from the local system to the remote system.
A manual setup allows a secure connection without a password prompt.
{{< expand "Click here for more information" "v" >}}

Using the **SSH Connections** configuration screen:

1. Enter a name and select **Manual** from the **Setup Method** dropdown list.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectNameMethodManual.png" alt="Manual Name and Method" id="Manual Name and Method" >}}

2. Enter the authentication settings.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectAuthenticationManual.png" alt="Manual Authentication Settings" id="Manual Authentication Settings" >}}

   a. Enter a host name or host IP address for the remote non-TrueNAS/FreeNAS system as a valid URL.
   An IP address example is *https://10.231.3.76*.
   This is a required field.

   b. Enter the port number of the remote system to use for the SSH connection.

   c. Enter a user name for logging into the remote system in **Username**.

   c. Select the private key from the SSH keypair that you use to transfer the public key on the remote NAS from the **Private Key** dropdown.

   d. Click **Discover Remote Host Key** after properly configuring all other fields to query the remote system and automatically populate thr **Remote Host Key** field.

4. (Optional) Enter the number of seconds you want SCALE wait for the remote TrueNAS/FreeNAS system to connect in **Connect Timeout**.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectMoreOptions.png" alt="Manual More Options" id="Manual More Options" >}}

5. Click **Save**. Saving a new connection automatically opens a connection to the remote TrueNAS and exchanges SSH keys.
   The new SSH connection displays on the **SSH Connection** widget.
   To edit it, click on the name to open the **SSH Connections** configuration screen populated with the saved settings.

{{< /expand >}}

### Adding a Public SSH Key to an Admin User Account

This procedure covers adding a public SSH key to the admin account on the TrueNAS SCALE system and generating a new SSH Keypair to add to the remote system (TrueNAS or other).
{{< expand "Click here for more information" "v" >}}
1. Copy the SSH public key text or download it to a text file:

   Log into the TrueNAS system that generated the SSH keypair and go to **Credentials > Backup Credentials**.

   Click on the name of the keypair on the **SSH Keypairs** widget to open the keypair for the SSH connection.

   Copy the text of the public SSH key or download the public key as a text file.

2. Add the public key to the admin account on the system where you want to register the public key.

   Log into the TrueNAS system where you want to register the public key and go to **Credentials > Local Users**.

   Edit the admin account.
   Click on the <span class="material-icons">expand_more</span> icon and then click **Edit** to open the **Edit User** screen.

   {{< trueimage src="/images/SCALE/Credentials/SSHEditUserAuthenticationSettings.png" alt="Add SSH Key" id="Add SSH Key" >}}

   Paste the SSH public key text into the **Authorized Keys** field on the **Edit User** configuration screen in the **Authentication** settings.

   Alternately, click **Choose File** to select and upload the SSH key.

   {{< hint type=important >}}
   Do not paste the SSH private key.
   {{< /hint >}}

3. Click **Save**.

If you need to generate a new SSH keypair:

1. Go to **Credentials > Backup Credentials**.
2. Click **Add** on the **SSH Keypairs** widget and select **Generate New**.
3. Copy or download the value for the new public key.
4. Add the new public key to the remote NAS.

If the remote NAS is not a TrueNAS system, refer to the documentation for that system, and find their instructions on adding a public SSH key.
{{< /expand >}}

## Generating SSH Keypairs

TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private keypairs on the **SSH Keypairs** widget found on the **Credentials > Backup Credentials** screen.
Keypairs are generally used when configuring **SSH Connections** or SFTP **Cloud Credentials**.
TrueNAS does not support encrypted keypairs or keypairs with passphrases.

TrueNAS automatically generates keypairs as needed when creating new **SSH Connections** or **Replication** tasks.

To manually create a new keypair:
1. Click **Add** on the **SSH Keypairs** widget.
2. Click **Generate New** on the **SSH Keypairs** screen.
3. Give the new keypair a unique name and click **Save**.
   The keypair displays on the **SSH Keypairs** widget.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsSSHKeypairsAdd.png" alt="SSH Keypairs Form" id="SSH Keypairs Form" >}}

Click the vertical ellipsis <span class="material-icons">more_vert</span> at the bottom of the **SSH Keypairs** configuration screen to download these strings as text files for later use.
