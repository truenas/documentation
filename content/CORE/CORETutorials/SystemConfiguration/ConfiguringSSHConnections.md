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

[Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) is a cryptographic network protocol. It provides a secure method to access and transfer files between two hosts. This is possible even if the two hosts use an unsecured network. 
SSH establishes secure connections by means of user account credentials. It also uses key pairs shared between host systems for authentication.

## Create SSH Keypairs

TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private keypairs in **System > SSH Keypairs**.
The system typically uses keypairs when configuring **SSH Connections** or SFTP **Cloud Credentials**.
Encrypted keypairs or keypairs with passphrases are not supported.

The creation of a new **SSH Connection** or **Replication** task generates new keypairs. 
To manually generate a new keypair, go to **System > SSH Keypairs**, click **ADD**, and give the keypair a unique **Name**. 

![System SSH Keypairs Add](/images/CORE/12.0/SystemSSHKeypairsAdd.png "System SSH Keypairs Add")

Click **GENERATE KEYPAIR** to add values to the public and private key fields.
Copy these strings or download them into text files for later use.

## Create SSH Connections

### Semi-Automatic

TrueNAS offers a semi-automatic setup mode for setting up an SSH connection. This simplifies setting up an SSH connection with another FreeNAS or TrueNAS system. In semi-automatic setup mode it is not necessary to log in to the remote system to transfer SSH keys.  

Semi-automatic setup requires an SSH keypair on the local system. You must have administrator account credentials for the remote TrueNAS. You must also configure the remote system to allow root access with SSH.

The semi-automatic configuration can generate the needed keypair. You can manually create the keypair by going to **System > SSH Keypairs**.

Go to **System > SSH Connections** and click **ADD**.

![SystemSSHConnectionsAddSemiAuto](/images/CORE/12.0/SystemSSHConnectionsAddSemiAuto.png "Semi-Auto Connection")

Use a valid URL scheme for the remote TrueNAS URL. 
Leave the username as *root* and enter the account password for the remote TrueNAS system. 
You can import the private key from a SSH keypair that you created before. Or create a new private key with a new SSH keypair.

Save the new configuration. TrueNAS opens a connection to the remote TrueNAS and exchanges SSH keys.

### Manual Configuration

You can configure a secure SSH connection that does not generate a password prompt. This involves copying a public encryption key from the local system to the remote system.

#### Adding a SSH Public Key to the TrueNAS Root Account

Log in to the TrueNAS system that generated the SSH keypair and go to **System > SSH Keypairs**.
Open the keypair you want to use for the SSH connection. Copy the text of the SSH public key or download the public key as a text file.

Log in to the TrueNAS system that needs to register the public key. Go to **Accounts > Users** and edit the *root* account.
Paste the SSH public key text into the **SSH Public Key** field.

![Accounts Users Root SSH Key](/images/CORE/12.0/AccountsUsersRootSSHKey.png "Accounts Users Root SSH Key")

Generate a new SSH keypair in **System > SSH Keypairs**. Copy or download the value for the public key and add it to the remote NAS.
If the remote NAS is not a TrueNAS system, please see the system documentation on adding a SSH public key.

#### Manually Configuring the SSH Connection on the Local TrueNAS

Log back into the local TrueNAS system and go to **System > SSH Connections**. Add a new connection and change the setup method to **Manual**.

![SystemSSHConnectionsAddManual](/images/CORE/12.0/SystemSSHConnectionsAddManual.png "SSH Connections: Manual Options")

Select the private key from the SSH keypair you used when you transferred the public key on the remote NAS.

{{< taglist tag="coressh" limit="10" >}}

{{< taglist tag="corereplication" limit="10" title="Related Replication Articles" >}}
