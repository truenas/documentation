---
title: "SSH Connections"
description: "How to create and save SSH connections."
---

[Secure Socket Shell (SSH)](https://searchsecurity.techtarget.com/definition/Secure-Shell) is a network protocol that provides a secure method to access and transfer files between two hosts while using an unsecure network.
SSH can use user account credentials to establish secure connections, but often uses key pairs shared between host systems for authentication.

When TrueNAS is used as an SSH server, the users in the network must use [SSH client software](https://en.wikipedia.org/wiki/Comparison_of_SSH_clients) to transfer files with SSH.

## Process Summaries

* [Allowing SSH Access to TrueNAS](#allowing-ssh-access-to-truenas)
    * **Services > SSH > Configure**
    * Set options as required by your environment.
      * Configuring replications can require allowing root access to the system.
      * Make sure any security precautions are in place before allowing root access with SSH.
    * Extra Options Recommendations:
      * Add *NoneEnabled no* to disable the insecure *none* cipher.
      * Increase the *ClientAliveInterval* if SSH connections tend to drop.
      * *ClientMaxStartup* defaults to *10*. Increase this value when more concurrent SSH connections are required.
    * Enable the SSH service on the **Services** page.

* [Restricting Command Line Users to *scp* or *sftp*](#restricting-command-line-users-to-scp-or-sftp)
  * This only works for users that use command line versions of *scp* and *sftp*.
  * Go to **Accounts > Users** and edit the user account that must be restricted.
    * Change the user's shell to *scponly*

* [Creating an SSH Keypair](#creating-an-ssh-keypair)
  * Can be automatically generated as part of creating a replication or SSH connection.
  * **System > SSH Keypairs > ADD**
    * Enter a name for the keypair.
    * Click **GENERATE KEYPAIR** to create public and private key values.
    * Key values can be copied to the clipboard or downloaded as text files.

* [SSH Connections: Semi-Auto Setup](#creating-a-semi-automatic-connection-between-two-truenas-systems)
  * Only possible between FreeNAS or TrueNAS systems
  * **System > SSH Connections**
  * Requires the remote system have SSH root access enabled in Services > SSH.
  * Enter hostname or IP address of the remote FreeNAS or TrueNAS system.
  * A valid URL scheme is required.
  * Enter login credentials for the remote system.
  * Choose an existing SSH Keypair or generate a new keypair for this connection.
  * Clicking Save automatically connects to the remote FreeNAS/TrueNAS and configures the SSH keys.

* [SSH Connections: Manual Setup](#creating-a-manual-connection-between-truenas-and-a-second-nas-system)
  * Requires manually copying a local system public SSH key over to a remote system.
    * Go to **System > SSH Keypairs** and open the keypair to be used for the connection.
    * Highlight the entire Public Key text and copy it to the clipboard or download the public key as a text file.
  * Log in to the remote system and follow the procedure recommended by that system’s software documentation to add the Public Key.
    * [FreeNAS/TrueNAS](#adding-an-ssh-key-to-the-truenas-root-account)
    * Go to **Accounts > Users** and edit the root account.
    * Paste the Public Key text into the SSH Public Key box and click Save.
  * Local system
    * Go to **System > SSH Connections > ADD**
      * Setup Method = Manual
      * Enter the hostname or IP address of the remote system that has the public SSH key.
      * Private Key: Select the Keypair that was used to copy the SSH key to the remote system.
      * Click Discover Remote Host Key to initiate connection and add that key to the form.

## Allowing SSH Access to TrueNAS

Configuring and activating the SSH service is done on the **Services** page

<img src="/images/services.png">
<br><br>

To configure SSH, disable the service and open the configuration screen.

<img src="/images/services-ssh.png">
<br><br>


Configure the options as needed to match your network environment.
Remote systems could require *root* access to the system, but be sure all security precautions are in place before setting that option.
There are some additional options recommendations for the SSH service:

* Add *NoneEnabled no* to disable the insecure *none* cipher.
* Increase the *ClientAliveInterval* if SSH connections tend to drop.
* *ClientMaxStartup* defaults to *10*. Increase this value when more concurrent SSH connections are required.

Don't forget to re-enable the SSH service on the **Services** page when all the configuration changes are complete.

## Restricting Command Line Users to *scp* or *sftp*

This only works for users that use command line versions of *scp* and *sftp*.
When SSH is configured, authenticated users with a user account can use *ssh* to log into the TrueNAS system over the network.
User accounts are created by going to **Accounts > Users** and clicking ADD.

By default, the user will see their home directory after logging in with SSH.
However, the user can still navigate to system locations outside their home directory, so take security precautions before granting users SSH access to the system.
One method to increase security is to change a user's shell to only allow file transfers.

To allow users to use *scp* and *sftp* to transfer files between their local computer and their home directory on the TrueNAS system, while restricting them from logging into the system using *ssh*.
To configure this scenario, go to **Accounts > Users** and edit the desired user account.
Change the user's shell to **scponly**.
Repeat for each user that needs restricted SSH access.

<img src="/images/users-shell-scponly.png">
<br><br>

Test the configuration from another system by running the *sftp*, *ssh*, and *scp* commands as the user.
*sftp* and *scp* will work but *ssh* will fail.

## Creating an SSH Keypair

TrueNAS generates and stores [RSA-encrypted](https://en.wikipedia.org/wiki/RSA_%28cryptosystem%29) SSH public and private keypairs in **System > SSH Keypairs**.
These are generally used when configuring SSH Connections or SFTP Cloud Credentials.
Encrypted keypairs or keypairs with passphrases are not supported.

Keypairs can be automatically generated as needed when creating new SSH Connections or Replication tasks.
To manually generate a new keypair, click **ADD** and give the keypair a unique name.

<img src="/images/system-sshkeypairs-add.png">
<br><br>

Clicking the button to generate a keypair adds values to the public and private key fields.
These values can be highlighted and copied or downloaded as text files for later use.

## Creating a Semi-Automatic Connection Between Two TrueNAS Systems

TrueNAS offers a semi-automatic setup mode that simplifies setting up an SSH connection with another FreeNAS or TrueNAS system without having to log in to that system to transfer SSH keys.
This requires an SSH keypair on the local system and administrator account credentials for the remote TrueNAS.
The remote system must also be configured to allow root access with SSH.
The keypair can be generated as part of the semiautomatic configuration or manually created in **System > SSH Keypairs**.

Go to **System > SSH Connections** and click **ADD**.

<img src="/images/system-sshconnections-semiauto.png">
<br><br>

Be sure to use a valid URL scheme for the remote TrueNAS URL.
Leave the username as *root* and enter the account password for the remote TrueNAS system.
The private key can be imported from a previously created SSH keypair or created with a new SSH keypair.

Saving the new configuration automatically opens a connection to the remote TrueNAS and exchanges SSH keys.

## Creating a Manual Connection Between TrueNAS and a Second NAS System

Choosing to manually set up the SSH connection requires copying a public encryption key from the local to remote system.
This allows a secure connection without a password prompt.

Start by generating a new SSH keypair in **System > SSH Keypairs**.
Copy or download the value for the public key.
The public key needs to be added to the remote NAS.
When the remote NAS is not a TrueNAS system, please see the documentation for that system for instructions on adding a public SSH key.

### Adding a Public SSH Key to the TrueNAS Root Account

Log in to the TrueNAS system that generated the SSH keypair and go to **System > SSH Keypairs**.
Open the keypair to use for the SSH connection and copy the text of the public SSH key or download the public key as a text file.

<img src="/images/system-sshkeypairs-copypublic.png">
<br><br>

Log in to the TrueNAS system that needs to register the public key and go to **Accounts > Users**.
Edit the *root* account.
Paste the SSH public key text into the **SSH Public Key** field.

<img src="/images/accounts-users-root-publicsshkey.png">
<br><br>

### Manually Configuring the SSH Connection on the Local TrueNAS

Log back in to the local TrueNAS system and go to **System > SSH Connections** and add a new connection.
Change the setup method over to **Manual**.

<img src="/images/system-sshconnections-manual.png">
<br><br>

Fill in the required information.
Make sure to select the private key from the SSH keypair that was used to transfer the public key on the remote NAS.
When all connection details are added, click the button to discover the remote host key.
TrueNAS connects to the remote NAS and adds a value to the remote host key field.