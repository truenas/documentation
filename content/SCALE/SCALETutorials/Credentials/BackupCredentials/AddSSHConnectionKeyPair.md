---
title: "Adding SSH Credentials"
description: "Provides information on adding SSH connections, generating SSH key pairs, and adding the SSH public key to the root user."
weight: 20
aliases:
tags:
 - ssh
 - credentials
 - rsync
keywords:
- enterprise data storage
- nas data storage
- cloud backup and recovery
- key pair
- key pairs
---

The **SSH Connections** and **SSH Keypairs** widgets on the **Backup Credentials** screen display a list of SSH connections and key pairs configured on the system.
Using these widgets, users can establish Secure Socket Shell (SSH) connections.

You must also configure and activate the [SSH Service]({{< relref "sshservicescale.md" >}}) to allow SSH access.

## Creating an SSH Connection

To begin setting up an SSH connection, go to **Credentials > Backup Credentials**.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsScreen.png" alt="Backup Credentials Screen" id="Backup Credentials Screen" >}}

Click **Add** on the **SSH Connections** widget.

### Configuring a Semi-Automatic SSH Connection
The procedure in this section covers the semi-automatic setup method for creating an SSH connection with another TrueNAS system.

**Semi-automatic** simplifies setting up an SSH connection with another TrueNAS system without logging in to that system to transfer SSH keys.
This requires an SSH key pair on the local system and administrator account credentials for the remote TrueNAS.
You must configure the remote system to allow root access with SSH.
You can generate the key pair as part of the semiautomatic configuration or a manually created one using **SSH Keypairs**.

{{< include file="/static/includes/AddSSHConnection.md" >}}

### Configuring a Manual SSH Connection
The instructions in this section cover how to set up an SSH connection to a non-TrueNAS system.
To manually set up an SSH connection, you must copy a public encryption key from the local system to the remote system.
A manual setup allows a secure connection without a password prompt.

{{< include file="/static/includes/AddManualSSHConnection.md" >}}

### Adding a Public SSH Key to an Admin User Account
This procedure covers adding a public SSH key to the admin account on the TrueNAS system and generating a new SSH Keypair to add to the remote system (TrueNAS or other).

1. Copy the SSH public key text or download it to a text file:

   Log into the TrueNAS system that generated the SSH key pair and go to **Credentials > Backup Credentials**.

   Click on the name of the key pair on the **SSH Keypairs** widget to open the key pair for the SSH connection.

   Copy the text of the public SSH key or download the public key as a text file.

2. Add the public key to the admin account on the system where you want to register the public key.

   Log into the TrueNAS system where you want to register the public key and go to **Credentials > Users**.

   Edit the admin account.
   Click on the <span class="material-icons">expand_more</span> icon and then click **Edit** to open the **Edit User** screen.

   {{< trueimage src="/images/SCALE/Credentials/SSHEditUserAuthenticationSettings.png" alt="Add SSH Key" id="Add SSH Key" >}}

   Paste the SSH public key text into the **Authorized Keys** field on the **Edit User** configuration screen in the **Authentication** settings.

   Alternately, click **Choose File** to select and upload the SSH key.

   {{< hint type=important >}}
   Do not paste the SSH private key.
   {{< /hint >}}

3. Click **Save**.

If you need to generate a new SSH key pair, see [Generating SSH Keypairs](#generating-ssh-keypairs).

If the remote NAS is not a TrueNAS system, refer to the documentation for that system, and find their instructions on adding a public SSH key.

## Generating SSH Keypairs
TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private key pairs on the **SSH Keypairs** widget found on the **Credentials > Backup Credentials** screen.
Key pairs are generally used when configuring **SSH Connections** or SFTP **Cloud Credentials**.
TrueNAS does not support encrypted key pairs or key pairs with passphrases.

TrueNAS automatically generates key pairs as needed when creating new **SSH Connections** or **Replication** tasks.

To manually create a new key pair:
1. Click **Add** on the **SSH Keypairs** widget.
2. Click **Generate New** on the **SSH Keypairs** screen.
3. Give the new key pair a unique name and click **Save**.
   The key pair displays on the **SSH Keypairs** widget.

{{< trueimage src="/images/SCALE/Credentials/BackupCredentialsSSHKeypairsAdd.png" alt="SSH Keypairs Form" id="SSH Keypairs Form" >}}

Click the vertical ellipsis <span class="material-icons">more_vert</span> at the bottom of the **SSH Keypairs** configuration screen to download these strings as text files for later use.