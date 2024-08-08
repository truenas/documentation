---
title: "Using Administrator Logins"
description: "Explains role-based administrator logins and functions. Provides instructions on configuring SSH and working with the admin and root user passwords."
weight: 5
aliases:
 - /docs/scale/scaletutorials/credentials/rootlesslogin/
tags:
- 2fa
- ssh
keywords:
- enterprise storage solutions
- nas data storage 
- FIPS compliance
---

The initial implementation of the TrueNAS SCALE administrator login permitted users to continue using the root user but encouraged users to create an administrator account when first [installing SCALE]({{< relref "InstallingSCALE.md" >}}).

{{< include file="/static/includes/RootLoginWarnSCALE.md" >}}

The SCALE administrator account name changes from **admin** to **trunase_admin** in 24.10 when fresh installing from an <file>iso</file> file.
Earlier releases of SCALE with the **admin** account retain this account when upgrading to 24.10 through the UI.

Administrator accounts have roles and privileges that allow greater control over access to functions in SCALE and to further utilize FIPS-compliance.
SCALE includes three predefined admin user account levels:

* Full Admin - Assigned to the local administrator account created by the system when clean installing SCALE using an <file>iso</file> file.
  Also assigned when manually creating an admin user if logged in as the root user account after upgrading from a pre-22.12.3 release of SCALE or migrating from CORE to SCALE.

* Sharing Admin - Assigned to users responsible for only managing shares (SMB, NFS, iSCSI).
  This user can create shares and the datasets for shares, start/restart the share service, and modify the ACL for the share dataset.

* Readonly Admin - Assigned to users that can monitor the system but not make changes to settings.

##  About Admin and Root Logins and Passwords
At present, SCALE has both the root and local administrator user logins and passwords.

{{< include file="/static/includes/RootToAdminUserAccount.md" >}}

All systems should [create an administrator account]({{< relref "ManageLocalUsersSCALE.md" >}}) with the full admin role and privileges, and use this account for web interface access.
When properly set up, the administrator (full admin) account performs the same functions and has the same access as the root user.

{{< hint type="note" title="References to Root Account" >}}
Some UI screens and settings still refer to the root account, but these references are updating to the administrator account in future releases of SCALE.
{{< /hint >}}

To improve system security after the administrator account is created, disable the root account password to restrict root access to the system.

For more information on the different administrator scenarios users can encounter, read [Logging Into SCALE the First Time]({{< relref "FirstTimeLogin.md" >}}).

### Disabling Root and Admin User Passwords
As a security measure, the root user is no longer the default account and the password is disabled when you create the truenas_admin or admin user during installation.

Do not disable the admin account and root passwords at the same time.
If both root and admin account passwords become disabled at the same time and the web interface session times out, a one-time sign-in screen allows access to the system.

{{< trueimage src="/images/SCALE/Login/ResetRootAccountPasswordSignIn.png" alt="Reset Root Password Sign-In Screen" id="Reset Root Password Sign-In Screen" >}}

Enter and confirm a password to gain access to the UI.
After logging in, immediately go to **Credentials > Local Users** to enable the root or admin password before the session times out again.
This temporary password is not saved as a new password and it does not enable the admin or root passwords, it only provides one-time access to the UI.

When disabling a password for UI login, it is also disabled for SSH access.

## Accessing the System Through an SSH Session
To enable SSH to access the system as the admin user (or for root):

1. Configure the SSH service.

   a. Go to **System > Services**, then select **Configure** for the SSH service.

   b. Select **Log in as Root with Password** to enable the root user to sign in as root.

      Select **Log in as Admin with Password** and **Allow Password Authentication** to enable the admin user to sign in as admin. Select both options.

   c. Click **Save** and restart the SSH service.

2. Configure or verify the user configuration options to allow SSH access.

   If you want to SSH into the system as the root, you must enable a password for the root user.
   If the root password password is disabled in the UI you cannot use it to gain SSH access to the system.

   To allow the admin user to issue commands in an ssh session, edit the admin user and select which sudo options are allowed.
   Select **SSH password login enabled** to allow authenticating and logging into an SSH session.
   Disable this after completing the SSH session to return to a security hardened system.

   Select **Allow all sudo commands with no password**.
   You to see a prompt in the ssh session to enter a password the first time you enter a sudo command but to not see this password prompt again in the same session.

## Two-Factor Authentication (2FA) and Administrator Account Log In

To use two-factor authentication with the administrator account (root or admin user), first configure and enable SSH service to allow SSH access, then [configure two-factor authentication]({{< relref "ManageGlobal2FASCALE.md" >}}).
If you have the root user configured with a password and enable it, you can SSH into the system with the root user.
Security best practice is to disable the root user password and only use the local administrator account.

## Administrator Logins and TrueCommand

At present, administrator logins work with TrueCommand but you need to set up the TrueNAS connection using an [API key]({{< relref "ManagingAPIKeys.md" >}}).
