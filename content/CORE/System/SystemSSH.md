---
title: "SSH"
weight: 120
---

{{< toc >}}

[Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) is a network protocol that provides a secure method to access and transfer files between two hosts while using an unsecure network.
SSH can use user account credentials to establish secure connections, but often uses key pairs shared between host systems for authentication.

## Creating an SSH Keypair

TrueNAS generates and stores [RSA-encrypted](https://tools.ietf.org/html/rfc8017) SSH public and private keypairs in **System > SSH Keypairs**.
These are generally used when configuring **SSH Connections** or SFTP **Cloud Credentials**.
Encrypted keypairs or keypairs with passphrases are not supported.

Keypairs are automatically generated as needed when creating new **SSH Connections** or **Replication** tasks.
To manually generate a new keypair, go to **System > SSH Keypairs**, click *ADD*, and give the keypair a unique *Name*.

![System SSH Keypairs Add](/images/CORE/12.0/SystemSSHKeypairsAdd.png "System SSH Keypairs Add")

Clicking the button to generate a keypair adds values to the public and private key fields.
Copy these strings or download them into text files for later use.

## SSH Connections

{{< tabs "SSH Connection Methods" >}}
{{< tab "Semi-Automatic" >}}
TrueNAS offers a semi-automatic setup mode that simplifies setting up an SSH connection with another FreeNAS or TrueNAS system without having to log in to that system to transfer SSH keys.
This requires an SSH keypair on the local system and administrator account credentials for the remote TrueNAS.
The remote system must also be configured to allow root access with SSH.
The keypair can be generated as part of the semiautomatic configuration or manually created in **System > SSH Keypairs**.

Go to **System > SSH Connections** and click **ADD**.

![SystemSSHConnectionsAddSemiAuto](/images/CORE/12.0/SystemSSHConnectionsAddSemiAuto.png "Semi-Auto Connection")

{{< include file="static/includes/SystemSSHConnectionsAddSemiAutoFields.md.part" markdown="true" >}}

Be sure to use a valid URL scheme for the remote TrueNAS URL.
Leave the username as *root* and enter the account password for the remote TrueNAS system.
The private key can be imported from a previously created SSH keypair or created with a new SSH keypair.

Saving the new configuration automatically opens a connection to the remote TrueNAS and exchanges SSH keys.
{{< /tab >}}
{{< tab "Manual" >}}
Choosing to manually set up the SSH connection requires copying a public encryption key from the local to remote system.
This allows a secure connection without a password prompt.

### Adding a Public SSH Key to the TrueNAS Root Account

Log in to the TrueNAS system that generated the SSH keypair and go to **System > SSH Keypairs**.
Open the keypair to use for the SSH connection and copy the text of the public SSH key or download the public key as a text file.

Log in to the TrueNAS system that needs to register the public key and go to **Accounts > Users**.
Edit the *root* account.
Paste the SSH public key text into the **SSH Public Key** field.
![Accounts Users Root SSH Key](/images/CORE/12.0/AccountsUsersRootSSHKey.png "Accounts Users Root SSH Key")

Start by generating a new SSH keypair in **System > SSH Keypairs**.
Copy or download the value for the public key.
The public key needs to be added to the remote NAS.
When the remote NAS is not a TrueNAS system, please see the documentation for that system for instructions on adding a public SSH key.

### Manually Configuring the SSH Connection on the Local TrueNAS

Log back in to the local TrueNAS system and go to **System > SSH Connections** and add a new connection.
Change the setup method over to **Manual**.

![SystemSSHConnectionsAddManual](/images/CORE/12.0/SystemSSHConnectionsAddManual.png "SSH Connections: Manual Options")

{{< include file="static/includes/SystemSSHConnectionsAddManualFields.md.part" markdown="true" >}}

Make sure to select the private key from the SSH keypair that was used to transfer the public key on the remote NAS.
{{< /tab >}}
{{< /tabs >}}
