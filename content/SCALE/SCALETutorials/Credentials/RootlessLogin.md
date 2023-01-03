---
title: "Using Rootless Log In"
description: "This article explains the rootless log in functions, provides instructions on properly configuring SSH, working with the admin and root user passwords, and other functions to be aware of."
weight: 5
aliases:
tags:
- scalelogin
- scaleadmin
- scale2fa
- scalessh
---


The initial implementation of TrueNAS SCALE rootless login still permits users to use the root user but encourages users to create the local administrator account when first [installing SCALE]({{< relref "InstallingSCALE.md" >}}).

{{< include file="/_includes/RootLoginDeprecatedSCALE.md" type="page" >}}

If migrating from CORE to SCALE, when [first logging into SCALE]({{< relref "/SCALE/GettingStarted/FirstTimeLogin.md" >}}) as the root user, and alert displays informing you to create the administrator account. 
All users should [create the local administrator account]({{< relref "ManageLocalUsersSCALE.md" >}}) and stop using root. 

{{< hint info >}}
Some screens and UI settings still refer to the root account. These references should change to the administrator account in future release of SCALE.
{{< /hint >}}

##  About Admin and Root Logins and Passwords

At present, SCALE has both the root and local administrator user logins and passwords. 
If properly set up, the local administrator (admin) account performs the same functions and has the same access the root user has. 

The root user is no longer the default user so you must add a password to use the root user.

### Disabling Passwords

To security-harden your system, disable the root user password but do not disable the admin account password at the same time. 
If you have both the root and admin account passwords disabled and the session times out you can still log into the system using a one-time sign-in screen. 

![ResetRootAccountPasswordSignIn](/images/SCALE/22.12/ResetRootAccountPasswordSignIn.png "Reset Root Password Sign-In Screen")

Enter and confirm a password to gain access to the UI, but then immediately go to **Credentials > Local Users** to enable either the root or admin password.  
This password is not saved as a new password and it does not enable the admin or root passwords. 
It only gives temporary sign in access if you lock yourself out of the box.

If you disable the password for UI login, it is also disabled for ssh access.

## Accessing the System Using SSH

Use the administrator account when using SSH to access the system. 

To enable SSH access, select the **Log in as Root with Password** on the **System Settings > Services > SSH** screen. 
Selecting this option to allows administrator account access to the system with the admin or root accounts.

If you want to SSH into the system as the root, you must create and enable a password for the root user. 
If the root password password is disabled in the UI you cannot use it to gain SSH access to the system.

## Two-Factor Authentication (2FA) and Administrator Account Log In

To use two-factor authentication with the administrator account (root or admin user) first configure and enable SSH service to allow SSH access, then [configure two-factor authentication]({{< relref "2faSCALE.md" >}}). 
If you have the root user configured with a password and enable it, you can SSH into the system with the root user. Security best practice is to disable the root user password and only use the local administrator account.

## Rootless Log In and TrueCommand

At present, rootless log in works with TrueCommand but you need to set up and use an [API key]({{< relref "ManagingAPIKeys.md" >}}). Future releases of TrueCommand should eliminate the need for the API key.

{{< taglist tag="scalelogin" limit="10" >}}
{{< taglist tag="scaleadmin" limit="10" title="Related Admin User Articles" >}}
{{< taglist tag="scalessh" limit="10" title="Related SSH Articles" >}}