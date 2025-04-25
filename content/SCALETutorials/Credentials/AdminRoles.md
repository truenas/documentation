---
title: "Using Administrator Logins"
description: "Explains role-based administrator logins and functions. Provides instructions on configuring SSH and working with the admin and root user passwords."
weight: 5
tags:
- 2fa
- ssh
keywords:
- enterprise storage solutions
- nas data storage 
- FIPS compliance
---

{{< include file="/static/includes/RootLoginWarnSCALE.md" >}}

{{< include file="/static/includes/AdminAccountSecurity.md" >}}

Administrator accounts have roles and privileges that allow greater control over access to functions in SCALE and to further utilize FIPS compliance.
SCALE includes three predefined admin user account levels:

* Full Admin - Assigned to the local administrator account created by the system when clean installing SCALE using an <file>iso</file> file.
  Also assigned when manually creating an admin user if logged in as the root user account after upgrading from a pre-22.12.3 release of SCALE or migrating from CORE to SCALE.

* Sharing Admin - Assigned to users responsible for only managing shares (SMB, NFS, iSCSI).
  This user can create shares and the datasets for shares, start/restart the share service, and modify the ACL for the share dataset.

* Readonly Admin - Assigned to users that can monitor the system but not make changes to settings.

For more information on the different administrator scenarios users can encounter, read [Logging Into SCALE the First Time]({{< ref "FirstTimeLogin" >}}).

## Changing Administrator Account Passwords
Adminstrator passwords can be changed on the **Edit User** screen or, if currently logged in as that admin user, by clicking the **Settings** <span class="material-icons">account_circle</span> icon on the top toolbar and clicking **Change Password**.

{{< include file="/static/includes/ChangeLoggedInUserPassword.md" >}}

## Configuring Administrative Privileges

[Create a new administrator]({{< ref "managelocalusersscale/#creating-an-administrator-user-account" >}}) account or select an existing account to grant administrative privileges.
Note the primary group assigned to that user.

{{< include file="/static/includes/AddAdminGroup.md" >}}

### Allowing Sudo Commands

As a security hardening feature, administrator accounts in Linux-based TrueNAS releases (22.12.0 or newer) cannot execute certain root-level commands in a shell or SSH session by default.
If a user attempts to execute one of these commands without root-level access, TrueNAS returns a **command not found** error.

Administrative users who need to execute root-level commands to complete a task should temporarily enable sudo permissions for that user by going to **Credentials** and editing the user or group to enable some or all sudo commands.
For best security, enable only the required commands to perform the task and require password authentication, unless the task or app prevents it.
Disable sudo permissions when the task completes and they are no longer required.

**Allowed sudo commands**, **Allow all sudo commands**, **Allowed sudo commands with no password**, and **Allow all sudo commands with no password** grant limited root-like permissions using the sudo command.
Use **Allowed sudo commands** or **Allowed sudo commands with no password** to list specific sudo commands to allow.
Enter each command as an absolute path to the ELF (Executable and Linkable Format) executable file, for example, */usr/bin/nano*.
<file>/usr/bin/</file> is the default location for commands.
Press <kbd>Enter</kbd> after each command.

To allow full access to sudo commands, select either **Allow all sudo commands** or **Allow all sudo commands with no password**.
If sudo commands are allowed with password protection, the user is prompted for a password the first time a sudo command is entered, but not again in the same session.
Disable these settings after completing the task to return to a security-hardened system.

Do not allow sudo permissions for read-only administrators.

## Disabling Root and Admin User Passwords

As a security measure, the root user is no longer the default account and the password is disabled when you create the truenas_admin or admin user during installation.

Do not disable the default admin account, root, and any custom admin account passwords at the same time.
If all root and administrator account passwords become disabled at the same time and the web interface session times out, a one-time sign-in screen allows access to the system.

{{< trueimage src="/images/SCALE/Login/ResetRootAccountPasswordSignIn.png" alt="Reset Root Password Sign-In Screen" id="Reset Root Password Sign-In Screen" >}}

Enter and confirm a password to gain access to the UI.
After logging in, immediately go to **Credentials > Users** to enable the password for an administrator account before the session times out again.
This temporary password is not saved as a new password and it does not enable the admin or root passwords, it only provides one-time access to the UI.

When disabling a password for UI login, it is also disabled for SSH access.

## Accessing the System Through an SSH Session

To enable SSH access to the system as an admin user (or root user), you must first configure the SSH service.

1. Go to **System > Services**, then click <span class="iconify" data-icon="mdi:pencil"></span> (**Edit**) for the SSH service.

2.  Enter the groups (**truenas_admin**, **root**, etc.)  you want to enable for password authentication in the **Password Login Groups** field.

3. Enable **Allow Password Authentication**.

4. Click **Save** and restart the SSH service.

Now you must verify the user configuration options to allow SSH access.

If you want to SSH into the system as the root: 

1. Go to **Credentials > Users** and click the root user, then click <span class="iconify" data-icon="mdi:pencil"></span> (**Edit**).

2. Make sure **Disable Pasword** is disabled. If the root user has **Disable Password** enabled, you cannot use it to gain SSH access to the system.

3. Click **Save**.

To allow an admin user to issue commands in an SSH session:

1. Go to **Credentials > Users**, click the admin user, then click <span class="iconify" data-icon="mdi:pencil"></span> (**Edit**).

2. Enable **SSH password login enabled** under **Authentication**.

3. Click **Save**. 

4. Disable this after completing the SSH session to return to a security-hardened system.

## Two-Factor Authentication (2FA) and Administrator Account Log In

To use two-factor authentication with an administrator account, first configure and enable SSH service to allow SSH access, then [configure two-factor authentication]({{< ref "ManageGlobal2FASCALE" >}}).
If you have the root user configured with a password and enable it, you can SSH into the system with the root user.
Security best practice is to disable the root user password and only use a local administrator account.

## Administrator Logins and TrueCommand

At present, administrator logins work with TrueCommand but you need to set up the TrueNAS connection using an [API key]({{< ref "ManagingAPIKeys" >}}).
