BackupCredentialsAllCloudSSH---
title: "SSH Screens"
description: "Provides information on the SSH Connections and SSH Keypairs screens, widgets, and settings."
weight: 20
tags:
 - ssh
 - credentials
 - key pair
 - key pairs
---

The **Backup Credentials** screen displays the **SSH Connections** and **SSH Keypairs** widgets.

You must also configure and activate the [SSH Service]({{< relref "sshservicescreenscale" >}}) to allow SSH access.

## SSH Connection and Keypairs Widgets

The **SSH Connections** and **SSH Keypairs** widgets display a list of SSH connections and key pairs configured on the system.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsScreen.png" alt="Backup Credentials Screen" id="Backup Credentials Screen" >}}

The **SSH Connections** widget allows users to establish Secure Socket Shell (SSH) connections.
The **SSH Keypairs** widget allows users to generate SSH key pairs required to authenticate the identity of a user or process that wants to access the system using SSH protocol.

**Add** in the **SSH Connections** widget opens the **[SSH Connections](#ssh-connections-screens)** configuration window. 
The connection name on the widget is a link that opens the **SSH Connections** configuration screen already populated with the saved settings for the selected connection.

### SSH Connections Screens

The settings on the **SSH Connections** configuration screens are the same whether you add a new connection or edit an existing connection.

#### Name and Method Settings

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectNameMethodAuto.png" alt="Name and Method" id="Name and Method" >}}

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Name** | (Required) Enter a unique name for this SSH connection. For example, use *ssh* and a server name or number like *sshsys1* or *sshtn121* where *sys1* or *tn121* are server designations. |
| **Setup Method** | Select the setup method to use from the dropdown list of options. Options are:<br><li>**Semi-automatic (TrueNAS only)** - Select to simplify setting up an SSH connection with another TrueNAS or FreeNAS system without logging into that system to transfer SSH keys. The default is set to **Semi-automatic (TrueNAS only)**.<br><li>**Manual** - Select to enter all settings when setting up an SSH connection with a non-TrueNAS server. Displays other setting options required to [manually configure an SSH connection](#authentication-settings---manual-method). Requires copying a public encryption key from the local system to the remote system. A manual setup allows a secure connection without a password prompt.</li> |
{{< /truetable >}}

#### Authentication - Semi-Automatic Method Settings
These authentication settings show when **Setup Method** is **Semi-automatic (TrueNAS only)**.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectAuthentication.png" alt="Authentication Settings" id="Authentication Settings" >}}

{{< truetable >}}
| Name | Description |
|------|-------------|
| **TrueNAS URL** | (Required) Enter the host name or IP address of the remote system. Use a valid URL scheme for the remote TrueNAS URL. IP address example of *https://10.231.3.76*. |
| **Admin Username** | Enter the user name for logging into the remote system. The default is set to **root** but change this to the name of the system administrator for the remote system for this connection. |
| **Admin Password** | (Required) Enter the administrator user account password for logging into the remote system. |
| **One-Time Password (if necessary)** | One-time password if two-factor authentication is enabled. |
| **Username** | (Required) Username on the remote system used to log in via SSH. |
| **Private Key** | (Required) Select a saved SSH key pair, import the private key from a previously created SSH key pair, or select **Generate New** to create a new key pair to use for the connection to this remote system. |
{{< /truetable >}}

#### Authentication - Manual Method Settings
These authentication settings show when **Setup Method** is **Manual**. You must copy a public encryption key from the local system to the remote system.
A manual setup allows a secure connection without a password prompt.

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectAuthenticationManual.png" alt="Manual Authentication Settings" id="Manual Authentication Settings" >}}

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Host** | (Required) Enter the host name or IP address of the remote system. A valid URL scheme is required. An IP address example is *https://10.231.3.76*. |
| **Port** | (Required) Enter the port number on the remote system to use for the SSH connection. |
| **Username** | (Required) Enter the user name for logging into the remote system. |
| **Private Key** | (Required) Select a saved SSH key pair or select **Generate New** to create a new key pair to use for the connection to this remote system. |
| **Remote Host Key** | Enter the remote system SSH key for this system to authenticate the connection. Click **Discover Remote Host Key** after properly configuring all other fields to query the remote system and automatically populate this field. |
| **Discover Remote Host Key** | Click to connect to the remote system and attempt to copy the key string to the related TrueNAS field. |
{{< /truetable >}}

#### More Options Settings

{{< trueimage src="/images/SCALE/Credentials/NewSSHConnectMoreOptions.png" alt="More Options Settings" id="More Options Settings" >}}

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Connect Timeout** | Enter the time (in seconds) before the system stops attempting to establish a connection with the remote system. |
{{< /truetable >}}

**Save** automatically opens a connection to the remote TrueNAS and exchanges SSH keys.

### SSH Keypairs Widget

The **SSH Keypairs** widget on the **Backup Credentials** screen lists SSH key pairs added to the TrueNAS system.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsSSHKeypairsWidget.png" alt="SSH Keypairs Widgit" id="SSH Keypairs Widgit" >}}

The name of the key pair listed on the widget is a link that opens the **[SSH Keypairs](#ssh-keypairs-screen)** configuration screen.

The <iconify-icon icon="icon-park-outline:download"></iconify-icon> download icon, and the <span class="material-icons">more_vert</span> at the bottom of the **SSH Keypairs** configuration screen, download the public and private key strings as text files for later use.

The <span class="material-icons">delete</span> delete icon opens the delete dialog. Click **Confirm** and then **Delete** to remove the stored key pairs from the system.

#### SSH Keypairs Screen

The **SSH Keypairs** configuration screen displays the same settings for both add and edit options. Click **Add** to open a new configuration form, or click on an existing key pair to open the configuration screen populated with the settings for the selected key pair.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsSSHKeypairsAdd.png" alt="SSH Keypairs Settings" id="SSH Keypairs Settings" >}}

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Name** | Required. Enter a unique name for this SSH key pair. Automatically generated key pairs are named after the object that generated the key pair with **key** appended to the name. |
|**Generate Keypair** | Click to have TrueNAS automatically generate a new key pair and populate the **Private Key** and **Public Keys** fields with these values. |
| **Private Key** | See **Authentication** in [SSH/Authentication](https://man7.org/linux/man-pages/man1/ssh.1.html). |
| **Public Key** | See **Authentication** in [SSH/Authentication](https://man7.org/linux/man-pages/man1/ssh.1.html) |
{{< /truetable >}}

**Save** adds the key pair to the widget and activates the <i class="material-icons" aria-hidden="true">more_vert</i> with options to **Download Private Key** and **Download Public key**.
