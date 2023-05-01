---
title: "SSH Screens"
description: "This article provides information on the SSH Connections and SSH Keypairs screen widgets and settings."
weight: 20
alias:
tags:
 - scalessh
 - scalecredentials
---

{{< toc >}}


The **Backup Credentials** screen displays the **SSH Connections** and **SSH Keypairs** widgets. 

## SSH Connection and Keypairs Widgets
The **SSH Connections** and **SSH Keypairs** widgets display a list of SSH connections and keypairs configured on the system. 

![BackupCredentialsAllCloudSSH](/images/SCALE/22.12/BackupCredentialsAllCloudSSH.png "SSH Connections and Keypairs Widgets")

The **SSH Connections** widget allows users to establish Secure Socket Shell (SSH) connections. 
The **SSH Keypairs** widget allows users to generate SSH keypairs required to authenticate the identity of a user or process that wants to access the system using SSH protocol.

**Add** button in the **SSH Connections** widget opens the **[SSH Connections](#ssh-connections-screens)** configuration window. 
The connection name on the widget is a link that opens the **SSH Connections** configuration screen already populated with the saved settings for the selected connection.

### SSH Connections Screens
The settings displayed on the **SSH Connections** configuration screens are the same whether you add a new connection or edit an existing connection.

#### Name and Method Settings

![NewSSHConnectNameMethodAuto](/images/SCALE/22.12/NewSSHConnectNameMethodAuto.png "SSH Connections Name and Method Settings")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Name** | Required. Enter a unique name for this SSH connection. For example, use *ssh* and a server name or number like *sshsys1* or *sshtn121* where *sys1* or *tn121* are server designations. |
| **Setup Method** | Default is set to **Semi-automatic (TrueNAS only)**. Select **Semi-automatic (TrueNAS only)** to simplify setting up an SSH connection with another TrueNAS or FreeNAS system without logging into that system to transfer SSH keys. Select **Manual** to enter all settings when setting up an SSH connection with a non-TrueNAS server. Displays other setting options required to [manually configure an SSH connection](#authentication-settings---manual-method). Requires copying a public encryption key from the local system to the remote system. A manual setup allows a secure connection without a password prompt. |
{{< /truetable >}}

#### Authentication Settings - Semi-Automatic Method
These authentication settings display when **Setup Method** is **Semi-automatic (TrueNAS only)**.

![NewSSHConnectAuthentication](/images/SCALE/22.12/NewSSHConnectAuthentication.png "SSH Connections Authentication Settings") 

{{< truetable >}}
| Name | Description |
|------|-------------|
| **TrueNAS URL** | Enter the host name or IP address of the remote system. Use a valid URL scheme for the remote TrueNAS URL. IP address example of *https://10.231.3.76*. |
| **Admin Username** | Enter the user name for logging into the remote system. |
| **Admin Password** | Enter the user account password for logging into the remote system. |
| **One-Time Password (if necessary)** | One-Time Password if two-factor authentication is enabled. |
| **Username** | Username on the remote system used to login via SSH. |
| **Private Key** | Select a saved SSH keypair or you can import the private key from a previously created SSH keypair or select **Generate New** to create a new keypair to use for the connection to this remote system. |
{{< /truetable >}}

#### Authentication Settings - Manual Method
These authentication settings display when **Setup Method** is **Manual**. You must copy a public encryption key from the local system to the remote system.
A manual setup allows a secure connection without a password prompt.

![NewSSHConnectAuthenticationManual](/images/SCALE/22.12/NewSSHConnectAuthenticationManual.png "SSH Connections Manual Authentication Settings") 

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Host** | Enter the host name or IP address of the remote system. A valid URL scheme is required. An IP address example is *https://10.231.3.76*. |
| **Port** | Enter the port number on the remote system to use for the SSH connection. |
| **Username** | Enter the user name for logging into the remote system. |
| **Private Key** | Select a saved SSH keypair or select **Generate New** to create a new keypair to use for the connection to this remote system. |
| **Remote Host Key** | Enter the remote system SSH key for this system to authenticate the connection. Click **Discover Remote Host Key** after properly configuring all other fields to query the remote system and automatically populate this field. |
| **Discover Remote Host Key** | Click to connect to the remote system and attempt to copy the key string to the related TrueNAS field. |
{{< /truetable >}}

#### More Options Settings

![NewSSHConnectMoreOptions](/images/SCALE/22.12/NewSSHConnectMoreOptions.png "SSH Connections More Options Settings") 

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Cipher** | Select the security option from the dropdown list. Select **Standard** for the most secure option, but with the greatest impact on connection speed. Select **Fast** for a less secure option than **Standard** but it can give reasonable transfer rates for devices with limited cryptographc speed. Select **Disabled** to remove all security in favor of maximizing connection speed. Only disable security when used within a secure, trusted network. |
| **Connect Timeout** | Enter time (in seconds) before the system stops attempting to establish a connection with the remote system. |
{{< /truetable >}}

**Save** automatically opens a connection to the remote TrueNAS and exchanges SSH keys.

## SSH Keypairs Widget
The **SSH Keypairs** widget on the **Backup Credentials** screen lists SSH keypairs added to the TrueNAS SCALE system. 

![BackupCredentialsSSHKeypairsWidget](/images/SCALE/22.02/BackupCredentialsSSHKeypairsWidget.png "SSH Keypairs Widget")

The name of the keypair listed on the widget is a link that opens the **[SSH Keypairs](#ssh-keypairs-screen)** configuration screen. 

The <iconify-icon icon="icon-park-outline:download"></iconify-icon> download icon, and the <span class="material-icons">more_vert</span> at the bottom of the **SSH Keypairs** configuration screen, download the public and private key strings as text files for later use. 

The <span class="material-icons">delete</span> delete icon opens the a delete dialog. Click **Confirm** and then **Delete** to remove the stored keypairs from the system.

### SSH Keypairs Screen
The **SSH Keypairs** configuration screen displays the same settings for both add and edit options. Click **Add** to open a new configuration form, or click on an existing keypair to open the configuration screen populated with the settings for the selected keypair.

![BackupCredentialsSSHKeypairsAdd](/images/SCALE/22.12/BackupCredentialsSSHKeypairsAdd.png "SSH Keypairs Settings")

{{< truetable >}}
| Name | Description |
|------|-------------|
| **Name** | Required. Enter a unique name for this SSH keypair. Automatically generated keypairs are named after the object that generated the keypair with **key** appended to the name. |
|**Generate Keypair** | Click to have TrueNAS SCALE automatically generate a new keypair and populate the **Private Key** and **Public Keys** fields with these values. |
| **Private Key** | See **Authentication** in [SSH/Authentication](https://man7.org/linux/man-pages/man1/ssh.1.html). |
| **Public Key** | See **Authentication** in [SSH/Authentication](https://man7.org/linux/man-pages/man1/ssh.1.html) | 
{{< /truetable >}}

**Save** adds the keypair to the widget and activates the <i class="material-icons" aria-hidden="true">more_vert</i> with options to **Download Private Key** and **Download Public key**.

{{< taglist tag="scalessh" limit="10" >}}