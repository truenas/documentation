---
title: "TFTP Server"
description: "Provides instructions for installing the TFTP Server application in TrueNAS." 
weight:
aliases:
 - /scale/scaletutorials/apps/tftp-hpaapp/
 - /scale/scaletutorials/systemsettings/services/tftpservicescale/
 - /scale/scaleuireference/systemsettings/services/tftpservicescreen/
 - /scale/scaletutorials/apps/communityapps/tftp-hpaapp/
tags:
- tftp
- apps
---

{{< include file="/static/includes/apps/CommunityApp.md" >}}

<!--Comment or remove the following line if your PR changes provide a complete, up-to-date, and working installation tutorial -->
{{< include file=\"/static/includes/apps/CommunityPleaseImprove.md\" >}}

The new **TFTP Server** application provides Trivial File Transfer Protocol (TFTP) server functions.
The TFTP Server application is a lightweight TFTP-server container in TrueNAS. It is not intended for use as a standalone container.

The app runs as root and drops privileges to the tftp (9069) user for the TFTP service.
Every application start launches a container with root privileges.
This checks the parent directory permissions and ownership.
If it finds a mismatch, the container applies the correct permissions to the TFTP directories.
If **Allow Create** is selected, the container also checks and chmods TFTP directories to 757 or to 555 if not checked.
Afterwards, the TFTP container runs as root user, dropping privileges to the tftp (9069) user for the TFTP service.

{{< include file="/static/includes/AppsUnversioned.md" >}}

## First Steps

Configure your DHCP server for network boot to work.

To grant access to a specific user (and group) different from defaults, add the new non-root administrative user and note the UID and GID for this user.

To use a specific dataset or volume for files, create this in the **Storage** screen first.

## Installing the TFTP Service App

You can install the application using all default settings, or you can customize setting to suit your use case.

To install the **TFTP Server** app, go to **Apps**, click **Discover Apps**. Either begin typing TFTP into the search field or scroll down to locate the **TFTP Server** application widget.

{{< trueimage src="/images/SCALE/Apps/TFTPServerAppWidget.png" alt="TFTP Server Application Widget" id="TFTP Server Application Widget" >}}

Click on the widget to open the ***TFTP Server** information screen.

{{< trueimage src="/images/SCALE/Apps/TFTPServerAppInfoScreen.png" alt="TFTP Server Information Screen" id="TFTP Server Information Screen" >}}

Click **Install** to open the **TFTP Server** configuration screen.

{{< trueimage src="/images/SCALE/Apps/InstallTFTPServerAppScreen.png" alt="Install TFTP Server Screen" id="Install TFTP Server Screen" >}}

Application configuration settings are presented in several sections.
To find specific fields click in the **Search Input Fields** search field, scroll down to a particular section or click on the section heading on the navigation area in the upper-right corner.

After accepting or changing the default settings explained in the sections below, click **Install** to start the installation process.
The TFTP Server application displays on the **Installed** applications screen when the installation completes.

{{< trueimage src="/images/SCALE/Apps/TFTPServerAppInstalled.png" alt="TFTP Server App Installed" id="TFTP Server App Installed" >}}

### Application Name Settings
Accept the default values or enter a name in **Application Name**.
Accept the default **Version**.

### TFTP Configuration Settings
Select the location of the TrueNAS server in **Timezone**.

{{< trueimage src="/images/SCALE/Apps/InstallTFTPServerAddTFTPConfigEnvironVariables.png" alt="TFTP Configuration Add Environment Variables" id="TFTP Configuration Add Environment Variables" >}}

Select **Allow Create** to allow creating new files. This sets **CREATE** to **1** and **MAPFILE** to **""**. This changes the permissions of the tftpboot directory to 757, otherwise the tftpboot directory permissiong is 555.

Click **Add** to the right of **Additional Environmental Variables** to display the **Name** and **Value** fields.
Enter the name as shown in the environment variables table below. Do not enter variables that have setting fields or the system displays an error.

{{< expand "TFTP Server Environment Variables" "v" >}}
This table lists docker environmental variables for the TFTP Server (tftpd-hpa) application.
{{< truetable >}}
| Variable | Default | Description |
|----------|---------|-------------|
| BLOCKSIZE | n/a |Specifies the maximum permitted blocksize. |
| CREATE | 0 | Use **Allow Create** to set to 1. 0 means only upload files if they exist. 1 allows creating new files. |
| MAPFILE | "" | Specifies whether to use filename remapping. Enter as /*mapfile* or leave empty "" if not using a mapfile. If entering a mapfile, set ownership to uid/gid 9096. |
| PERMISSIVE | 0 | Performs no additional permission checks. |
| PORTRANGE | 4096:32736 |Force the server port number (transaction ID) to be in the specified range of port numbers. Docker container default range is 4096:32760. |
| REFUSE | "" | Indicates that a specific RFC 2347 option should be accepted. |
| RETRANSMIT | 1 second | Determines the default timeout in micro-seconds before the first packet retransmits. |
| SECURE | "1" | Changes root directory on startup. |
| TIMEOUT | 900 seconds | Specifies the number of seconds to wait for a second connection before transmitting the server. |
| UMASK | "020" | Sets the umask for newly created files. |
| VERBOSE | "1" | Increases the logging verbosity of tftpd. |
| VERBOSITY | 3 | Sets the verbosity value from 0 to 4. |
{{< /truetable >}}
{{< /expand >}}

### Network Configuration Settings

When selected, **Host Network** sets the app to use the default port 69, otherwise the default port is 30031.

{{< trueimage src="/images/SCALE/Apps/InstallTFTPServerAppNetworkConfig.png" alt="TFTP Server Host Network" id="TFTP Server Host Network" >}}

To change the default port number, clear the **Host Network** checkmark to display the **TFTP Port** field.
Enter a new port number in **TFTP Port** within the range 9000-65535.
Refer to the TrueNAS [default port list](https://www.truenas.com/docs/references/defaultports/) for a list of assigned port numbers.

### Storage Configuration Settings

Storage sets the path to store TFTP boot files.
The default storage type is **ixVolume (Dataset created automatically by the system)** where the system automatically creates a dataset named **tftpboot**.
Select **Host Path (Path that already exists on the system)** to show the **Host Path** field.
Enter or browse to select a dataset you created on the system for the application to use.

{{< trueimage src="/images/SCALE/Apps/InstallTFTPServerAppStorageHostPath.png" alt="Enter Host Path" id="Enter Host Path" >}}
