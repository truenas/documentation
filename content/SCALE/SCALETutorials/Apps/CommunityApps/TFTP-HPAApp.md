---
title: "TFTPD-HPA"
description: "Provides instructions for users migrating from the SCALE TFTP service to the new tftpd-hpa application." 
weight:
aliases:
 - /scale/scaletutorials/apps/tftp-hpaapp/
tags:
- scaletftp
---

This article provides instructions on installing the new **tftpd-hpa** application.
It also provides instructions on migrating from the deprecated SCALE 22.12.3 TFTP service to the tftpd-hpa application.

The tftpd-hpa application is a lightweight TFTP-server container TrueNAS SCALE uses as a replacement for the SCALE service. 
It is not intended for use as a standalone container.

## Before You Begin
Before you configure the new tftpd-hpa application:

* Disable the TFTP service.
  Go to **System Settings > Services** and disable the service and clear the **Start Automatically** checkbox. 
  This prevents the service from re-enabling after a system restart.

* Review your TFTP service settings and note all directory, host, auxiliary parameter, permission, and credential (username and password) settings.

To grant access to a specific user (and group) different from defaults, add the new non-root administrative user and note the UID and GID for this user.

To use a specific dataset or volume for files, create this in the **Storage** screen first.

## Migrating from TrueNAS TFTP Service

After disabling the TFTP service, install the **tftpd-hpa** application.
Go to **Apps** click on **Available Applications** and locate the **tftpd-hpa** application widget.

{{< trueimage src="/images/SCALE/22.12/tftpd-hpaAppWidget.png" alt="tftpd-hpa Application Widget" id="1: tftpd-hpa Application Widget" >}}

Click **Install** to open the **tftpd-hpa** configuration wizard.

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppNameTimezone.png" alt="Install tftpd-hpa Application Name and Timezone" id="2: Install tftpd-hpa Application Name and Timezone" >}}

Accept the default value or enter a name in **Application Name**.

Select the location of the TrueNAS server in **Timezone**.

To add environmental variables, click **Add** to the right of **Additional Environmental Variables**. 

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppAddEnvironVariables.png" alt="Install tftpd-hpa Environmental Variables" id="3: Install tftpd-hpa Environmental Variables" >}}

{{< expand "tftpd-hpa Environmental Variables" "v" >}}
See the table below for a list of environmental variables.
{{< truetable >}}
| Variable | Description |
|----------|-------------|
| BLOCKSIZE | Specifies the maximum permitted blocksize. |
| PERMISSIVE | Performs no additional permission checks. |
| PORTRANGE | Force the server port number (transaction ID) to be in the specified range of port numbers. Default range is 4096:32760. |
| REFUSE | Indicates that a specfic RFC 2347 option should need to be accepted. |
| RETRANSMIT | Determines the default timeout in micro-seconds before the first packet is retransmitted. |
| SECURE | Changes root directory on startup. |
| TIMEOUT | Specifies the number of seconds to wait for a second connection before transmitting the server. |
| UMASK | Sets the umaks for newly created files. |
| VERBOSE | Increases the logging verbosity of tftpd. |
| VERBOSITY | Sets the verbosity value from 0 to 4. |
{{< /truetable >}}
{{< /expand >}}
To allow creating new files, select **Allow Create**, then click **Add** to display the **Name** and **Value** fields. 
Enter **CREATE** in **Name** and **1** in **Value**. 
Click **Add** again, then enter **MAPFILE** in **Name** and **"":** in **Value**. Do not use the mapfile just enter this setting.

The **tftpd-hpa** app uses default port 69 when **Host Network** is selected. 

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppHostNetwork.png" alt="Install tftpd-hpa Host Network" id="4: Install tftpd-hpa Host Network" >}}

To change the default port number, select **Host Network** to clear the checkmark and display the **TFTP Port** field. 
Enter a new port number in **TFTP Port**.

Accept the default value in **TFTP Boot Storage Type**. 
To use the dataset created for TFTP file storage, select **Host Path (Path that already exists on the system)** in **Type** to displays the **Host Path** field. 
Browse to select the dataset created for TFTP file storage or enter the full path.

{{< trueimage src="/images/SCALE/22.12/InstallTFTPdAppHostPath.png" alt="Install tftpd-hpa Host Path" id="5: Install tftpd-hpa Host Path" >}}

Click **Save**.

{{< taglist tag="scaletftp" limit="10" title="Related TFTP Articles" >}}