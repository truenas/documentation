---
title: "Rsync Services Screen"
description: "This article provides information on the rsync services screens and settings."
weight: 35
alias: 
tags:
 - scalersync
 - scaleservices
---

{{< toc >}}

Rsync is a utility that copies data across a network. The **Services > Rsync** screen has two tabs: **Configure** and **Rsync Module**.

## Configure Screen

The **Rsync > Configure** screen displays the **TCP Port** and **Auxiliary Parameters** settings. 

![ServicesRsyncConfigureScreen](/images/SCALE/22.02/ServicesRsyncConfigureScreen.png "Services Rsync Configure Screen")

| Setting | Description |
|---------|-------------|
| **TCP Port** | Enter the port **rsyncd** listens on. |
| **Auxiliary Parameters** | Enter any additional parameters from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). |

## Rsync Module Screen

The **Rsync Module** screen displays a list of current rsync modules configured on the system. 
When setting up an [rsync task]({{< relref "RsyncTasksSCALE.md" >}}) you have the option to use either SSH or an rsync module as the  

![ServicesRsyncModuleScreen](/images/SCALE/22.02/ServicesRsyncModuleScreen.png "Services Rsync Module")

Before an rsync module is configured the **Modules** screen displays the **No RSYNC Modules** screen displays with **Add RSYNC Modules** in the center of the screen. Use either **Add RSYNC Modules** or **Add** to configure a module to use as the mode (when you select **Module** in **Rsync Mode**). 

![ServicesNoRsyncModuleScreen](/images/SCALE/22.02/ServicesNoRsyncModuleScreen.png "Rsync Module No Rsync Module")

The name of the module or the <span class="material-icons">navigate_next</span> arrow expand the module to display the details of the module.

### Rsync Module Details Screen
The rsync module details screen displays connections, user, group, allow and deny host information, and any auxiliary parameters configured for that module. 
{{< expand "Click Here for More Information" "v" >}}

![ServicesRsyncModuleDetails](/images/SCALE/22.02/ServicesRsyncModuleDetails.png "Services Rsync Module Details")

**Edit** opens the **Edit Rsync Module** screen. **Delete** opens a confirmation dialog.
{{< /expand >}}
## Add or Edit Rsync Module Screens
**Rsync > Add** and **Rsync > Edit** screens specify the general, access and other settings for the [rsync module](https://download.samba.org/pub/rsync/rsync.1).
{{< expand "Click Here for More Information" "v" >}}

![ServicesAddRsyncModuleGeneral](/images/SCALE/22.02/ServicesAddRsyncModuleGeneral.png "Services Add Rsync Module General Settings")

| Setting | Description |
|---------|-------------|
| **Name** | Enter a module name that matches the name requested by the rsync client. |
| **Path** | Enter or uses the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the pool or dataset to store received data. |
| **Comment** | Enter a description for this module. |
| **Enabled** | Select to activate this module for use with Rsync. Leave clear to deactivate the module without completely removing it. |

![ServicesAddRsyncModuleAccess](/images/SCALE/22.02/ServicesAddRsyncModuleAccess.png "Services Add Rsync Module Access Settings")

| Setting | Description |
|---------|-------------|
| **Access Mode** | Select the permission level for this rsync module from the dropdown list. Options are **Read Only**, **Write Only**, or **Read and Write**. |
| **Max Connections** | Enter the maximum number of connections to this module. **0** is unlimited. |
| **User** | Enter or select the TrueNAS user account that runs the rsync command during file transfers to and from this module from the dropdown list. |
| **Group** | Enter or select the TrueNAS group account that runs the rsync command during file transfers to and from this module from the dropdown list. |
| **Hosts Allow** | Enter a list of patterns to match with the host name and IP address of a connecting client (from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). The connection is rejected if no patterns match. Separate entries by pressing <kbd>Enter</kbd>. |
| **Hosts Deny** | Enter  a list of patterns to match with the hostname and IP address of a connecting client (from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). The connection is rejected when the patterns match. Separate entries by pressing <kbd>Enter</kbd>. |

![ServicesAddRsyncModuleOtherOptions](/images/SCALE/22.02/ServicesAddRsyncModuleOtherOptions.png "Services Add Rsync Module Other Options Settings")

| Setting | Description |
|---------|-------------|
| **Auxiliary Parameters** | Enter any additional parameters from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). |
{{< /expand >}}
{{< taglist tag="scalersync" limit="10" >}}