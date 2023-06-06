---
title: "Updating Jails and Plugins"
description: "Describes how to update jails and plugins in TrueNAS CORE."
weight: 25
tags:
- corejails
- corejailspluginsvm
---

{{< toc >}}

The **Jails** screen displays a list of jails installed on your system.

![Jails](/images/CORE/12.0/Jails.png "Jails List")

Plugins are created as a jail with specific software installed in that jail.
The update process for a jail and plugin is identical, while plugins have an additional step to update software installed inside the jail.

## Jail Operating System Updates and Upgrades

FreeBSD Jails are installed with a specific FreeBSD release, such as 12.3, 13.1, or 14.0.
These major releases can have numerous **patches** to address issues with the release before the next release is available.
**Updating** a jail applies the latest patch level to the installed FreeBSD release.
**Upgrading** a jail adjusts the Jail to use a newer FreeBSD release.

Both updates and upgrades require the jail can connect to the **update.FreeBSD.org** mirrors.

### Update a Jail

To update a jail to the most current patch level of the installed FreeBSD release, go to **Jails** and find the installed jail. Click **>** to expand the jail and then click **Update**.
This does **not** change the installed FreeBSD release.
For example, a jail installed with **FreeBSD 11.2-RELEASE** can update to **p15** or the latest patch of 11.2, but not an 11.3-RELEASE-p# version of FreeBSD.

### Upgrade a Jail

Using **Upgrade** replaces the jail FreeBSD operating system with a new release of FreeBSD, such as taking a jail from FreeBSD 11.2-RELEASE to 11.3-RELEASE.
To upgrade a jail, stop it, open the TrueNAS **Shell** and enter command <code>iocage upgrade <i>name</i> -r <i>release</i></code>, where *name* is the plugin jail name and *release* is the desired FreeBSD release.
You might be prompted to approve additional FreeBSD component installation.

The jail upgrade process can take a long time to download the FreeBSD release and apply it to a jail.
When the chosen FreeBSD release is already stored in the **iocage** dataset, the jail upgrade process is much faster.

![UpgradeJail](/images/CORE/13.0/JailsUpgrade.png "Jail Upgrade Example")

Jail status messages and command output are stored in <file>/var/log/iocage.log</file>.

### Removing Unused FreeBSD Releases

As a space saving measure, you can manually remove unused releases from the `/iocage/releases/` dataset after upgrading a jail.
The release must not be in use by any jail on the system.

## Update Installed Plugin Software

Updating software installed in a jail requires the jail communicate with the online **iocage** plugins repository servers.
The process involves opening a shell from within the running jail and using FreeBSD `pkg` commands to view and update the installed software.

To update the installed software stored within a Plugin jail, go to **Jails** and expand the installed plugin jail.
Click **> Shell** to open a command prompt from within the jail.

Enter `pkg info` to see a list of all installed software.
This example shows the installed software from within the jail created when the **Minio** plugin was installed:

![MinioJailpkg](/images/CORE/13.0/MinioJailpkg.png "Minio Jail Software")

To update the installed software, enter <code>pkg install <i>name</i></code> and replace *name* with the name returned from running `pkg info`.
The command checks if an update is available and prompts to proceed when the software can be updated.
This example shows attempting to update the minio software but no update was available.

![MinioJailUpdateNone](/images/CORE/13.0/MinioJailUpdateNone.png "Minio Jail: no update available")

{{< taglist tag="corejails" limit="10" >}}
