---
title: "Installing the Rsyncd Application"
description: "Provides installation instructions for users migrating from the deprecated SCALE rsync service to the new rsyncd application." 
weight: 67
aliases:
tags:
- scalersync
---


{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}

This article provides instructions on migrating from the SCALE rsync service to the new **rsyncd** application. 
This application is an open source utility that provides fast incremental file transfers TrueNAS SCALE uses as a replacement for the deprecated SCALE rsync service. 

## Migrating from TrueNAS Rsync Service

Before you configure the new rsync application:

* Disable the rsync service.
  Go to **System Settings > Services** and disable the service and clear the **Start Automatically** checkbox. 
  This prevents the service from re-enabling after a system restart.

* Review your rsync and module service settings. Note all host path, access mode type, number of simultaneous connections, user and group IDs, the allow and deny host addresses, and any auxiliary parameter settings.

## Installing the Rsyncd Application 

After disabling the rsync service, install the **rsyncd** application. 
Go to **Apps** click on **Available Applications** and locate the **rsyncd** application widget.

{{< trueimage src="/images/SCALE/22.12/RsyncdAppWidget.png" alt="Rsyncd Application Widget" id="1: Rsyncd Application Widget" >}}

Click **Install** to open the **rsyncd** configuration wizard.

{{< trueimage src="/images/SCALE/22.12/RsyncdApplicationName.png" alt="Install rsyncd Application Name and Version" id="2: Install rsyncd Application Name and Version" >}}

Accept the default value or enter a name in **Application Name**.

If you want to add additional parameters, click **Add** to the right of **Auxilliary Parameters**. 

{{< trueimage src="/images/SCALE/22.12/RsyncdRsyncConfigAddAuxParameters.png" alt="Install rsyncd Add Auxilliary Parameters" id="3: Install rsyncd Add Auxilliary Parameters" >}} 

You can specify rsyncd [global or module parameters](https://www.samba.org/ftp/rsync/rsyncd.conf.html) using the **Auxilliary Parameters** fields.

Accept the default port number rsync listens on, or to change it, enter a new port number in **Rsync Port**. 
We recommend that you leave **Host Network** unselected. 

To configure a module, click **Add** to display the **Module Configuration** fields. A module creates an alias for a connection (path) you want to use rsync with. 

{{< trueimage src="/images/SCALE/22.12/RsyncdAddModuleNameAndPath.png" alt="Install rsyncd Add Module Name and Path" id="4: Install rsyncd Add Module Name and Path" >}}  

Enter a name in **Module Name**. 
Allowed characters are upper and lowercase alphanumeric characters, numbers, and the underscore (_), hyphen (-) and dot (.). 
Do not begin or end the name with the special characters.

Use **Comment** to enter an optional description that displays next to the module name when clients obtain a list of available modules. 
Default is to leave this field blank.

Leave **Enable Module** selected, then enter or browse to the location where you want to use rsync (destination path) in **Host Path**. 

{{< trueimage src="/images/SCALE/22.12/RsyncdAddModuleAccessMode.png" alt="Install rsyncd Add Module Access Mode" id="5: Install rsyncd Add Module Access Mode" >}}  

Select the type of access from the **Access Mode** dropdown list. 
Specify the maximum number of simultaneous connections you want to allow in **Max Connections** or accept the default **0** which means unlimited. 
Accept the default values in **UID** and **GID**, or change to the user and group ID you want to use for the connection.

To specify a list of allowed or denied hosts, click **Add** for each host you want to enter. Leave blank to allow all or deny no hosts.

{{< trueimage src="/images/SCALE/22.12/RsyncdAddModuleAllowDenyHosts.png" alt="Install rsyncd Add Module Allow or Deny Hosts" id="6: Install rsyncd Add Module Allow or Deny Hosts" >}} 

Accept the default values in **Resources Configuration** or enter the CPU and memory values for the destination system.

{{< trueimage src="/images/SCALE/22.12/RsyncdResourceConfig.png" alt="Install rsyncd Resources Configuration" id="7: Install rsyncd Resources Configuration" >}}

Click **Save**.

{{< taglist tag="scalersync" limit="10" title="Related Rsync Articles" >}}

