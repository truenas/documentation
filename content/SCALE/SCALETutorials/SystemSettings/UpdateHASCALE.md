---
title: "Updating TrueNAS Enterprise HA"
description: "Provides instructions on how to update TrueNAS releases on Enterprise (HA) systems."
weight: 15
aliases:
tags:
- update
- enterprise
- HA
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
---

{{< enterprise >}}
This procedure only applies to TrueNAS Enterprise (HA) systems.
If attempting to migrate from FreeBSD- to Linux-based TrueNAS versions, see [TrueNAS Migrations]({{< ref "MigratingFromCORE" >}}).

Installing, upgrading, or making some changes to TrueNAS on High Availability (HA) systems is complicated and should be guided by Enterprise-level support.
Contact TrueNAS Enterprise Support for assistance whenever attempting to install or make some changes to TrueNAS on Enterprise HA hardware.

{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## Updating Enterprise (HA) Systems

If the system does not have an administrative user account, [create the admin user]({{< ref "ManageUsers" >}}) as part of this procedure.

Take a screenshot of the license information found on the **Support** widget on the **System > General Settings** screen. You use this to verify the license after the update.

To update your Enterprise (HA) system to the latest TrueNAS release, log into the TrueNAS UI using the virtual IP (VIP) address and then:

1. Check for updates. Go to the main **Dashboard** and click **Check for Updates** on the **System Information** widget for the active controller.
   This opens the **System > Update** screen. If an update is available for the **Update Profile** selected, it shows on this screen.
   Click **Install Update**.

2. Save the password secret seed and configuration settings to a secure location.
   The **Save configuration settings** window opens.
   Leave **Export Password Secret Seed** selected, then click **Save Configuration**.
   The system downloads the file with sensitive system data. Keep this file in a secure location.

<div style="margin-left: 33px">{{< include file="/static/includes/SecretSeed.md" >}}</div>

3. Click **Install** to begin the installation, click **Cancel** to return to the **Update** screen.

If manually updating your system:

1. click **Install** to the right of **Manual Update**.

2. Save the secret seed, and configuration file to a secure location, and click **Save Configuration** to show the **Manual Install** screen.
   
3. Click **Choose File** and use the file browser to select the <kbd>update</kbd> file downloaded to your system.
   Click **Apply Update** to start the update process.
   After the system finishes updating it restarts.

After the system sign-in screen shows:

1. Sign in to the TrueNAS UI. If using root to sign in, create the admin account (see step 3).
   If using admin, continue to the next step.

2. Verify the system license after the update. Go to **System > General Settings**.
   Verify the license information in the screenshot of the **Support** widget you took before the update matches the information on the **Support** widget after updating the system.  

3. Verify the admin user settings, or if not created, [create the admin user]({{< ref "ManageUsers" >}}) account now.
   
   Before adding a new admin user, create a dataset for home directories if you do not have one already set up.

   If editing an existing admin user, select the user on the **Credentials > Users** screen and click **Edit**.
   
   If you want the admin account to have the ability to execute `sudo` commands in an SSH session, set **Allow Access** to both **TrueNAS Access** and **SSH Access**, assign the new admin user the **Full Admin** role. 
   Add the SSH pubic key, enter and confirm the password, then go to **Sudo Commands** to set the option for sudo access you want to allow.
   
   Verify **Shell** is set to **bash** if you want to give the admin user the ability to execute commands in **Shell**.

   To set a location where the admin user can save or browse files, and then select the dataset path in **Home Directory**.
   If set to the default **/nonexistent** files are not saved for this user.

   Click **Save** to create the user or save changes to the existing user.

4. Verify the admin user can log in to the UI.

   a. Log out of the UI.

   b. Enter the admin user credentials in the sign-in splash screen.

5. After validating access to the TrueNAS UI using the admin credentials, disable the root user password.
   Go to **Credentials > User**, select the root user, then click **Edit**. Select **Dissable Password** and click **Save**.

Finish the update by saving your updated [system configuration file]({{< ref "SetUpBackUpSCALE" >}}) to a secure location and [create a new boot environment]({{< ref "ManageBootEnvironSCALE" >}}) to use as a restore point if it becomes necessary.
