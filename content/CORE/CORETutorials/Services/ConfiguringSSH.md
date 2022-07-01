---
title: "Configuring SSH"
description: "Configuring SSH on your TrueNAS"
weight: 130
tags:
- coresftp
- coressh
---

The SSH service allows connections to TrueNAS with the [Secure SHell Transport Layer Protocol](https://tools.ietf.org/html/rfc4253).
When TrueNAS is used as an SSH server, the users in the network must use [SSH client software](https://www.bing.com/search?q=SSH%20client%20software) to transfer files with SSH.

{{< hint warning >}}
Allowing external connections to TrueNAS is a security vulnerability!
Do not enable SSH unless external connections are required.
{{< /hint>}}

To configure SSH, disable the service and click <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![ServicesSSHOptions](/images/CORE/12.0/ServicesSSHOptions.png "SSH Options")

Configure the options as needed to match your network environment.

See [SSH Screen]({{< relref "/CORE/UIReference/Services/ServicesSSH.md" >}})

Remote systems could require *root* access to the system, but make sure to have all security precautions in place before allowing root access.

There are some additional options recommendations for the SSH service:

* Add ***NoneEnabled no** to the **Auxiliary Parameters** to disable the insecure **none** cipher.
* Increase the **ClientAliveInterval** if SSH connections tend to drop.
* **ClientMaxStartup** defaults to **10**.
  Increase this value when more concurrent SSH connections are required.

Don't forget to re-enable the SSH service on the **Services** page when all configuration changes are complete.
To create and store specific [SSH connections and keypairs]({{< relref "ConfiguringSSHConnections.md" >}}), go to the **System** menu section.

{{< expand "Advanced: Restricting Command Line Users to scp or sftp" "v" >}}
This only works for users that use command line versions of commands `scp` and `sftp`.
When SSH is configured, authenticated users with a user account can use `ssh` to log into the TrueNAS system over the network.
User accounts are created by going to **Accounts > Users** and clicking **ADD**.

By default, the user sees their home directory after logging in with SSH.
However, the user can still find system locations outside their home directory, so take security precautions before granting users SSH access to the system.
One method to increase security is to change shell for a user to only allow file transfers.
This allows users to use commands `scp` and `sftp` to transfer files between their local computer and their home directory on the TrueNAS system while restricting them from logging into the system using `ssh`.

To configure this scenario, go to **Accounts > Users** and edit the desired user account.
Change the **Shell** to **scponly**.
Repeat for each user that needs restricted SSH access.

![Accounts Users Edit Shell Scp only](/images/CORE/12.0/AccountsUsersEditShellScponly.png "Accounts Users Edit Shell Scp only")

Test the configuration from another system by running the `sftp`, `ssh`, and `scp` commands as that user account.
`sftp` and `scp` work but `ssh` fails.
{{< /expand >}}

{{< taglist tag="coressh" limit="10" title="Related Articles" >}}