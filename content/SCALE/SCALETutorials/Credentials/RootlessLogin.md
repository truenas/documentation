---
title: "Using Rootless Login"
description: "This article explains the rootless login functions, provides instructions on properly configuring SSH, working with the admin and root user passwords, and other functions to be aware of."
weight: 5
aliases:
tags:
- scaleadmin
- scale2fa
- scalessh
- scalemigrate
---


The initial implementation of TrueNAS SCALE rootless log in permits users to use the root user but encourages users to create the local administrator account when first [installing SCALE]({{< relref "InstallingSCALE.md" >}}).

{{< include file="/content/_includes/RootLoginDeprecatedSCALE.md" type="page" >}}

If migrating from CORE to SCALE, when [first logging into SCALE]({{< relref "FirstTimeLogin.md" >}}) as the root user, you are advised to create the administrator account. 
All users should [create the local administrator account]({{< relref "ManageLocalUsersSCALE.md" >}}) and stop using root. 

{{< hint info >}}
Some UI screens and settings still refer to the root account, but these references should change to the administrator account in future release of SCALE.
{{< /hint >}}

##  About Admin and Root Logins and Passwords

At present, SCALE has both the root and local administrator user logins and passwords. 
If properly set up, the local administrator (admin) account performs the same functions and has the same access the root user has. 

The root user is no longer the default user so you must add and enable a password to use the root user.

### Disabling Root and Admin User Passwords

To security-harden your system, the root user password is disabled with you create the admin user during installation. 
Do not disable the admin account and root passwords at the same time. 
If you disable both the root and admin account passwords at the same time and the session times, you are not locked out and can still log into the system using a one-time sign-in screen. 

![ResetRootAccountPasswordSignIn](/images/SCALE/22.12/ResetRootAccountPasswordSignIn.png "Reset Root Password Sign-In Screen")

Enter and confirm a password to gain access to the UI. After logging inm immediately go to **Credentials > Local Users** to enable either the root or admin password before your session times out again.  
This temporary password is not saved as a new password and it does not enable the admin or root passwords, it only provides one-time access to the UI. 

If you disable the password for UI login, it is also disabled for SSH access.

## Accessing the System Through an SSH Session

To enable SSH to access the system as root or the admin user: 

1. Configure the SSH service.

   a. Go to **System Settings > Services**, then select **Configure** for the SSH service.

   b. Select **Log in as Root with Password** to enable the root user to sign in as root. 

      Select **Log in as Admin with Password** and **Allow Password Authentication** to enable the admin user to sign in as admin. Select both options.
   
   c. Click **Save** and restart the SSH service.

2. Configure or very the user configuration options to allow ssh access.
   
   If you want to SSH into the system as the root, you must create and enable a password for the root user. 
   If the root password password is disabled in the UI you cannot use it to gain SSH access to the system.

   To allow the admin user to issue commands in an ssh session edit the admin user and select the sudo options you want to permit.

   Select **Allow all sudo commands with no password**. You might see a prompt in the ssh session to enter a password the first time you enter a sudo command but should not see this password prompt again in the same session.

## Two-Factor Authentication (2FA) and Administrator Account Log In

To use two-factor authentication with the administrator account (root or admin user) first configure and enable SSH service to allow SSH access, then [configure two-factor authentication]({{< relref "2faSCALE.md" >}}). 
If you have the root user configured with a password and enable it, you can SSH into the system with the root user. Security best practice is to disable the root user password and only use the local administrator account.

## Rootless Log In and TrueCommand

At present, rootless log in works with TrueCommand but you need to set up and use an [API key]({{< relref "ManagingAPIKeys.md" >}}). Future releases of TrueCommand should eliminate the need for the API key.

{{< taglist tag="scalelogin" limit="10" >}}
{{< taglist tag="scaleadmin" limit="10" title="Related Admin User Articles" >}}
{{< taglist tag="scalessh" limit="10" title="Related SSH Articles" >}}