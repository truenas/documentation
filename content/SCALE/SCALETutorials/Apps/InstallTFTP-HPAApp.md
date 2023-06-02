---
title: "Installing the TFTPD-HPA Application"
description: "Provides instructions for users migrating from the SCALE TFTP service to the new tftpd-hpa application." 
weight: 66
aliases:
tags:
- scaletftp
---


{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}

This article provides instructions on migrating from the SCALE TFTP service to the new **tftpd-hpa** application. 
This application is a lightweight TFTP-server container TrueNAS SCALE uses as a replacement for the SCALE service. 
It is not intended to be used as a standalone container.

## Before You Begin
Before you configure the new tftpd-hpa application:

* Disable the TFTP service.
  Go to **System Settings > Services** and disable the service and clear the **Start Automatically** checkbox. 
  This prevents the service from re-enabling after a system restart.

* Review your TFTP service settings and note all directory, host, auxiliary parameter, permission, and credential (username and password) settings.

If you want to grant access to a specific user (and group) other than using the defaults, add the new non-root administrative user and take note of the UID and GID for this user.

If you want to use a specific dataset or volume for files, create it before you configure the application.

## Migrating from TrueNAS TFTP Service

After disabling the TFTP service, install the tftpd-hpa application. Go to **Apps** click on **Available Applications** and locate the **tftpd-hpa** application widget.

{{< trueimage src="/images/SCALE/22.12/tftpd-hpaAppWidget.png" alt="tftpd-hpa Application Widget" id="1 tftpd-hpa Application Widget" >}}

Click **Install** to open the **tftpd-hpa** configuration wizard.

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppNameTimezone.png" alt="Install tftpd-hpa Application Name and Timezone" id="2 Install tftpd-hpa Application Name and Timezone" >}}

Accept the default value or enter a name in **Application Name**.

Select the location of the TrueNAS server in **Timezone**.

If you want to add environmental variables, click **Add** to the right of **Additional Environmental Variables**. 

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppAddEnvironVariables.png" alt="Install tftpd-hpa Environmental Variables" id="3 Install tftpd-hpa Environmental Variables" >}}

To allow creation of new files, select **Allow Create**, then click **Add** to display the **Name** and **Value** fields. 
Enter **CREATE** in **Name** and **1** in **Value**. 
Click **Add** again, then enter **MAPFILE** in **Name** and **"":** in **Value**. Do not use the mapfile just enter this setting.

The **tftpd-hpa** app uses default port 69 when **Host Network** is selected. 

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppHostNetwork.png" alt="Install tftpd-hpa Host Network" id="4 Install tftpd-hpa Host Network" >}}

To change the default port number, select **Host Network** to clear the checkmark and display the **TFTP Port** field. 
Enter a new port number in **TFTP Port** to change the default port.

Accept the default value in **TFTP Boot Storage Type**. 
To use the dataset created for TFTP file storage, select **Host Path (Path that already exists on the system)** in **Type** to displays the **Host Path** field. 
Browse to select the dataset created for TFTP file storage or enter the full path.

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppHostPath.png" alt="Install tftpd-hpa Host Path" id="5 Install tftpd-hpa Host Path" >}}

Click **Save**.

{{< taglist tag="scaletftp" limit="10" title="Related TFTP Articles" >}}