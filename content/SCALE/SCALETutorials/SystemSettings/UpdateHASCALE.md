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

{{<enterprise>}}
This procedure only applies to TrueNAS Enterprise (HA) systems.
If attempting to migrate from FreeBSD- to Linux-based TrueNAS versions, see [TrueNAS Migrations]({{< relref "MigratingFromCORE.md" >}}).
{{</enterprise>}}

## Updating Enterprise (HA) Systems
If the system does not have an administrative user account, [create the admin user]({{< relref "ManageLocalUsersSCALE.md" >}}) as part of this procedure.

Take a screenshot of the license information found on the **Support** widget on the **System > General Settings** screen. You use this to verify the license after the update.

To update your Enterprise (HA) system to the latest TrueNAS release, log into the TrueNAS UI using the virtual IP (VIP) address and then:

1. Check for updates. Go to the main **Dashboard** and click **Check for Updates** on the **System Information** widget for the active controller.
This opens the **System > Update** screen. If an update is available it shows on this screen.

2. Save the password secret seed and configuration settings to a secure location. Click **Install Manual Updates**. The **Save configuration settings** window opens.
Select **Export Password Secret Seed** then click **Save Configuration**. The system downloads the file with sensitive system data. Keep this file in a secure location.

 {{< include file="/static/includes/SecretSeed.md" >}}

3. Select the update file and start the process.
 Click **Choose File** and select the <kbd>update</kbd> file downloaded to your system, then click **Apply Update** to start the update process.
 After the system finishes updating it restarts.

4. Sign into the TrueNAS UI. If using root to sign in, create the admin account now.
 If using admin, continue to the next step.

5. Verify the system license after the update. Go to **System > General Settings**.
 Verify the license information in the screenshot of the **Support** widget you took before the update matches the information on the **Support** widget after updating the system.  

6. Verify the admin user settings, or if not created, [create the admin user]({{< relref "ManageLocalUsersSCALE.md" >}}) account now.
 If you want the admin account to have the ability to execute `sudo` commands in an SSH session, select the option for the sudo access you want to allow.
 Also, verify **Shell** is set to **bash** if you want to give the admin user the ability to execute commands in **Shell**.
 To set a location where the admin user can save or browse files, and then select the dataset path in **Home Directory**. If set to the default **/nonexistent** files are not saved for this user.

7. Test the admin user access to the UI.

 a. Log out of the UI.

 b. Enter the admin user credentials in the sign-in splash screen.

8. After validating access to the TrueNAS UI using the admin credentials, disable the root user password.
 Go to **Credentials > Local User** and edit the root user. Select **Disable Password** and click **Save**.

Finish the update by saving your updated [system configuration file]({{< relref "SetUpBackUpSCALE.md" >}}) to a secure location and [create a new boot environment]({{< relref "ManageBootEnvironSCALE.md" >}}) to use as a restore point if it becomes necessary.