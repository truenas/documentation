---
title: "Configuring SSH"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/services/configuringssh/"
description: "Provides instructions on configuring Secure Shell (SSH) on your TrueNAS."
weight: 130
tags:
- sftp
- ssh
---

The SSH service allows connections to TrueNAS with the [Secure Shell Transport Layer Protocol](https://tools.ietf.org/html/rfc4253).
To use TrueNAS as an SSH server, the users in the network must use [SSH client software](https://www.bing.com/search?q=SSH%20client%20software) to transfer files with SSH.

{{< hint type=warning >}}
Allowing external connections to TrueNAS is a security vulnerability!
Only enable SSH when there is a need for external connections.
See [Security Recommendations]({{< relref "Security.md" >}}) for more security considerations when using SSH.
{{< /hint>}}

## Service Configuration

To configure SSH, disable the service and click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesSSHOptions](/images/CORE/Services/ServicesSSHOptions.png "SSH Options")

Configure the options as needed to match your network environment.

See [SSH Screen]({{< relref "/CORE/UIReference/Services/ServicesSSH.md" >}})

{{< hint type=warning >}}
Root access to the system from a remote client is never recommended.
If an unavoidable critical situation requires allowing root access, it is recommended to [configure two-factor authentication]({{< relref "UsingTwoFactorAuthentication.md" >}}) first.
Also, disable root logins as soon as possible.
{{< /hint>}}

Re-enable the SSH service on the **Services** page when all configuration changes are complete.
To create and store specific [SSH connections and keypairs]({{< relref "ConfiguringSSHConnections.md" >}}), go to the **System** menu section.

{{< expand "Advanced: Restricting Command Line Users to scp or sftp" "v" >}}
This only works for users that use command line versions of commands `scp` and `sftp`.
With SSH configured, authenticated users with a user account can use `ssh` to log into the TrueNAS system over the network.
Create user accounts by going to **Accounts > Users** and clicking **ADD**.

By default, the user sees their home directory after logging in with SSH.
The user can still find system locations outside their home directory. Take security precautions before granting users SSH access to the system.
One method to increase security is to change shell for a user to only allow file transfers.
Users can still use commands `scp` and `sftp` to transfer files between their local computer and their home directory. But the TrueNAS system restricts them from logging into the system using `ssh`.

To configure this scenario, go to **Accounts > Users** and edit the desired user account.
Change the **Shell** to **scponly**.
Repeat for each user that needs restricted SSH access.

![Accounts Users Edit Shell Scp only](/images/CORE/Accounts/AccountsUsersEditShellScponly.png "Accounts Users Edit Shell Scp only")

Test the configuration from another system. Run the `sftp`, `ssh`, and `scp` commands as that user account.
`sftp` and `scp` work but `ssh` fails.
{{< /expand >}}
