---
title: "Configuring SSH Connections"
description: "This article provides information on how to configure Secure Socket Shell (SSH) connections on your TrueNAS."
weight: 110
aliases:
  - /core/system/systemssh
tags:
- coressh
---

{{< toc >}}

[Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) is a network protocol that provides a secure method to access and transfer files between two hosts while using an unsecured network.
SSH can use user account credentials to establish secure connections or key pairs shared between host systems for authentication.

## Create SSH Keypairs

TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private keypairs in **System > SSH Keypairs**.
The system typically uses keypairs when configuring **SSH Connections** or SFTP **Cloud Credentials**.
Encrypted keypairs or keypairs with passphrases are not supported.

Keypairs are automatically generated as needed when creating new **SSH Connections** or **Replication** tasks.
To manually generate a new keypair, go to **System > SSH Keypairs**, click **ADD**, and give the keypair a unique **Name**.

![System SSH Keypairs Add](/images/CORE/12.0/SystemSSHKeypairsAdd.png "System SSH Keypairs Add")

Click **GENERATE KEYPAIR** to add values to the public and private key fields.
Copy these strings or download them into text files for later use.

## Create SSH Connections

### Semi-Automatic

TrueNAS offers a semi-automatic setup mode that simplifies setting up an SSH connection with another FreeNAS or TrueNAS system without logging in to that system to transfer SSH keys.
Semi-automatic setup requires an SSH keypair on the local system and administrator account credentials for the remote TrueNAS.
You must also configure the remote system to allow root access with SSH.
The keypair can be generated as part of the semi-automatic configuration or manually created in **System > SSH Keypairs**.

Go to **System > SSH Connections** and click **ADD**.

![SystemSSHConnectionsAddSemiAuto](/images/CORE/12.0/SystemSSHConnectionsAddSemiAuto.png "Semi-Auto Connection")

Use a valid URL scheme for the remote TrueNAS URL.
Leave the username as *root* and enter the account password for the remote TrueNAS system.
You can import the private key from a previously created SSH keypair or create a new one with a new SSH keypair.

Save the new configuration. TrueNAS automatically opens a connection to the remote TrueNAS and exchanges SSH keys.

### Manual

Manually configuring the SSH connection requires copying a public encryption key from the local system to the remote system, which allows a secure connection without a password prompt.

#### Adding a Public SSH Key to the TrueNAS Root Account

Log in to the TrueNAS system that generated the SSH keypair and go to **System > SSH Keypairs**.
Open the keypair you want to use for the SSH connection and copy the text of the public SSH key or download the public key as a text file.

Log in to the TrueNAS system that needs to register the public key. Go to **Accounts > Users** and edit the *root* account.
Paste the SSH public key text into the **SSH Public Key** field.

![Accounts Users Root SSH Key](/images/CORE/12.0/AccountsUsersRootSSHKey.png "Accounts Users Root SSH Key")

Generate a new SSH keypair in **System > SSH Keypairs**, then copy or download the value for the public key and add it to the remote NAS.
If the remote NAS is not a TrueNAS system, please see the system documentation on adding a public SSH key.

#### Manually Configuring the SSH Connection on the Local TrueNAS

Log back into the local TrueNAS system and go to **System > SSH Connections**. Add a new connection and change the setup method to **Manual**.

![SystemSSHConnectionsAddManual](/images/CORE/12.0/SystemSSHConnectionsAddManual.png "SSH Connections: Manual Options")

Select the private key from the SSH keypair you used to transfer the public key on the remote NAS.

{{< taglist tag="coressh" limit="10" >}}
