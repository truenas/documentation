---
title: "SSH Connections"
weight: 20
---

{{< toc >}}

The *SSH Connections* window in the **Backup Credentials** screen allows users establish [Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) connections.

To begin setting up a SSH Connection, navigate to **Credentials > Backup Credentials** and click the *Add* button in the *SSH Connections* window.

## Create a Connection

{{< tabs "SSH Connection Methods" >}}
{{< tab "Semi-Automatic" >}}
TrueNAS offers a semi-automatic setup mode that simplifies setting up an SSH connection with another FreeNAS or TrueNAS system without having to log in to that system to transfer SSH keys.
This requires an SSH keypair on the local system and administrator account credentials for the remote TrueNAS.
The remote system must also be configured to allow root access with SSH.
The keypair can be generated as part of the semiautomatic configuration or manually created in **Credentials > Backup Credentials**.

![SSHConnectionsSCALE](/images/SCALE/SSHConnectionsSCALE.png "SSH Connections Form")

{{< include file="static/includes/Reference/SystemSSHConnectionsAddSemiAutoFields.md.part" markdown="true" >}}

Be sure to use a valid URL scheme for the remote TrueNAS URL.
Leave the username as *root* and enter the account password for the remote TrueNAS system.
The private key can be imported from a previously created SSH keypair or created with a new SSH keypair.

Saving the new configuration automatically opens a connection to the remote TrueNAS and exchanges SSH keys.
{{< /tab >}}
{{< tab "Manual" >}}
Choosing to manually set up the SSH connection requires copying a public encryption key from the local to remote system.
This allows a secure connection without a password prompt.

### Adding a Public SSH Key to the TrueNAS Root Account

Log in to the TrueNAS system that generated the SSH keypair and go to **Credentials > Backup Credentials**. Then, click the 
Open the keypair to use for the SSH connection and copy the text of the public SSH key or download the public key as a text file.

Log in to the TrueNAS system that needs to register the public key and go to **Credentials > Local Users**.
Edit the *root* account.
Paste the SSH public key text into the **SSH Public Key** field.
![AccountsUsersRootSSHKeySCALE](/images/SCALE/AccountsUsersRootSSHKeySCALE.png "Accounts Users Root SSH Key")

Start by generating a new SSH keypair in **Credentials > Backup Credentials**.
Copy or download the value for the public key.
Add the public key to the remote NAS.
If the remote NAS is not a TrueNAS system, please see the documentation for that system for instructions on adding a public SSH key.

### Manually Configuring the SSH Connection on the Local TrueNAS

Log back in to the local TrueNAS system and go to **Credentials > Backup Credentials** and add a new connection.
Change the setup method to **Manual**.

![SSHConnectionsManualSCALE](/images/SCALE/SSHConnectionsManualSCALE.png "SSH Connections: Manual Options")

{{< include file="static/includes/SystemSSHConnectionsAddManualFields.md.part" markdown="true" >}}

Make sure to select the private key from the SSH keypair that was used to transfer the public key on the remote NAS.
{{< /tab >}}
{{< /tabs >}}


