---
title: "Updating SCALE Enterprise HA"
description: "This article provides instruction on how to update SCALE Enterprise (HA) to a new release."
weight: 15
aliases:
tags:
- scaleupdate
- scaleenterprise
- scaleadmin
---

{{<enterprise>}}
This article applies to SCALE Enterprise (HA) systems.
{{</enterprise>}}

## Updating Enterprise (HA) Systems
{{< hint warning >}}
This procedure only applies to SCALE Enterprise (HA) systems. If updating from CORE to SCALE, see [Migrating from TrueNAS CORE]{{< relref "MigratingFromCORE.md" >}}
{{</hint >}}

If you migrated your CORE Enterprise (HA) system but did not create an admin account, [create the admin user]({{< relref "ManageLocalUsersSCALE.md" >}}) as part of this procedure.

Take a screenshot of the license information found on the **Support** widget on the **System Settings > General** screen. You use this to verify the license after the update.

To update your Enterprise (HA) system to the latest SCALE release, log into the SCALE UI using the virtual IP (VIP) address and then:

1. Check for updates. Go to the main **Dashboard** and click **Check for Updates** on the **System Information** widget for the active controller. 
   This opens the **System Settings > Update** screen. If an update is available it displays on this screen.

2. Save the password secret seed and configuration settings. Click **Install Manual Updates**. The **Save configuration settings** window opens. 
   Select **Export Password Secret Seed** then click **Save Configuration**. The system downloads the file.

3. Select the update file and start the process. 
   Click **Choose File** and select the <kbd>update</kbd> file downloaded to your system, then click **Apply Update** to start the update process.
   After the system to finishes updating it reboots.

4. Sign into the SCALE UI. If using root to sign in, create the admin account now.
   If using admin, continue to the next step.

5. Verify the system license after the update. Go to **System Settings > General**.
   Verify the license information in the screenshot of the **Support** widget you took before the update matches the information on the **Support** widget after updating the system.  

6. Verify the admin user settings, or if not created, [create the admin user]({{< relref "ManageLocalUsersSCALE.md" >}}) account now. 
   Sudo settings changed in 22.0.1. If you want the admin account to have the ability to execute sudo commands in an SSH session, select the option for the sudo access you want to allow. 
   Also, verify **Shell** is set to **bash** if you want the admin user to have the ability to execute commands in **Shell**. 
   To set a location where the admin user can save to, browse to, and select the dataset in **Home Directory**. If set to the default **/nonexistent** files are not saved for this user.

7. Verify the SSH service settings. Go to **System Settings > Services**, then edit the **SSH** service. 
   If you just created the admin user, select **Log In As Admin with Password** and clear the **Log In As Root with Password** checkbox. Click **Save**. Select **Start automatically**, which means this service automatically starts after a system reboot.

8. Test the admin user access to the UI and to SSH if you just created it. 
   a. Log out of the UI. 
   b. Enter the admin user credentials in the sign-in splash screen. 
   c. Start an SSH session and log into it with the admin credentials. 
   d. Test access by issuing the `zectl list` command. 
      This should display the list of boot environments. If nothing happens, try `sudo zectl list` and enter the admin password. 
   
   After validating access to both SSH and the SCALE UI using the admin credentials, disable the root user password. 
   Go to **Credentials > Local User** and edit the root user. Select **Disable Password** and click **Save**.

Finish off your update by saving your [system configuration file]({{< relref "SetUpBackUpSCALE.md" >}}) and [create a new boot environment]({{< relref "ManageBootEnvironSCALE.md" >}}) to use as a restore point if it becomes necessary.

{{< taglist tag="scaleupdate" limit="10" >}}
{{< taglist tag="scaleadmin" limit="10" title="Related Admin Articles" >}}
{{< taglist tag="scaleenterprise" limit="10" title="Other Enterprise Articles" >}}
