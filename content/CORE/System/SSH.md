---
title: "SSH"
weight: 120
---

{{< toc >}}

[Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) is a network protocol that provides a secure method to access and transfer files between two hosts while using an unsecure network.
SSH can use user account credentials to establish secure connections, but often uses key pairs shared between host systems for authentication.

When TrueNAS is used as an SSH server, the users in the network must use [SSH client software](https://en.wikipedia.org/wiki/Comparison_of_SSH_clients) to transfer files with SSH.

## Allowing SSH Access to TrueNAS

Configuring and activating the SSH service is done on the **Services** page.

![ServicesDefaults](/images/CORE/12.0/ServicesDefaults.png "System Services")

To configure SSH, click the toggle to disable the service and open the configuration screen.

![ServicesSSHOptions](/images/CORE/12.0/ServicesSSHOptions.png "SSH Service Options")

Configure the options as needed to match your network environment.
Remote systems could require *root* access to the system, but be sure all security precautions are in place before setting that option.
There are some additional options recommendations for the SSH service:

* Add *NoneEnabled no* to disable the insecure *none* cipher.
* Increase the *ClientAliveInterval* if SSH connections tend to drop.
* *ClientMaxStartup* defaults to *10*. Increase this value when more concurrent SSH connections are required.

Don't forget to re-enable the SSH service on the **Services** page when all configuration changes are complete.

{{< expand "Advanced: Restricting Command Line Users to scp or sftp" "v" >}}
This only works for users that use command line versions of *scp* and *sftp*.
When SSH is configured, authenticated users with a user account can use *ssh* to log into the TrueNAS system over the network.
User accounts are created by going to **Accounts > Users** and clicking *ADD*.

By default, the user sees their home directory after logging in with SSH.
However, the user can still find system locations outside their home directory, so take security precautions before granting users SSH access to the system.
One method to increase security is to change a user's shell to only allow file transfers.
This allows users to use *scp* and *sftp* to transfer files between their local computer and their home directory on the TrueNAS system while restricting them from logging into the system using *ssh*.

To configure this scenario, go to **Accounts > Users** and edit the desired user account.
Change the *Shell* to *scponly*.
Repeat for each user that needs restricted SSH access.

![Accounts Users Edit Shell Scp only](/images/CORE/12.0/AccountsUsersEditShellScponly.png "Accounts Users Edit Shell Scp only")

Test the configuration from another system by running the *sftp*, *ssh*, and *scp* commands as that user account.
*sftp* and *scp* will work but *ssh* will fail.
{{< /expand >}}

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
