---
title: "Rsync Services Screen"
description: "Provides information on the rsync services screens and settings."
weight: 35
alias: 
tags:
- scalersync
---

{{< toc >}}

{{< include file="content/_includes/SCALEServiceDeprecationNotice.md" type="page" >}}

{{< hint type="important" >}}
This service is not needed when rsync is configured externally with SSH or with the [TrueNAS built-in rsync task in SSH mode]({{< relref "RsyncTasksSCALE.md" >}}).
It is always recommended to use rsync with SSH as a security best practice.
{{< /hint >}}

Rsync is a utility that copies data across a network.
This service configures and enables an rsync server that other remote systems can access as part of a remote sync operation.
The **Services > Rsync** screen has two tabs: **Configure** and **Rsync Module**.

## Configure Screen

The **Rsync > Configure** screen displays the **TCP Port** and **Auxiliary Parameters** settings. 

{{< trueimage src="/images/SCALE/22.12/ServicesRsyncConf.png" alt="Services Rsync Configure Screen" id="1: Services Rsync Configure Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **TCP Port** | Enter the port **rsyncd** listens on. |
| **Auxiliary Parameters** | Enter any additional parameters from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). |
{{< /truetable >}}

## Rsync Module Screen

The **Rsync Module** screen displays a list of current rsync modules configured on the system. 

Before an rsync module is configured, the **No RSYNC Modules** screen displays. Click **Add** to configure a module to use when the **Rsync** service is active. 

{{< trueimage src="/images/SCALE/22.12//ServicesRsyncCreateModule.png" alt="Rsync Module No Rsync Module" id="2: Rsync Module No Rsync Module" >}}

{{< trueimage src="/images/SCALE/22.12/ServicesRsyncModuleCreated.png" alt="Services Rsync Module" id="3: Services Rsync Module" >}}

Click the name of the module or the <span class="material-icons">navigate_next</span> arrow to display the details of the module.

### Rsync Module Details Screen

The rsync module details screen displays connections, user, group, allow and deny host information, and any auxiliary parameters configured for that module.
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/ServicesRsyncModuleDetails.png" alt="Services Rsync Module Details" id="4: Services Rsync Module Details" >}}

**Edit** opens the **Edit Rsync Module** screen. **Delete** opens a confirmation dialog.
{{< /expand >}}
## Add or Edit Rsync Module Screens
**Rsync > Add** and **Rsync > Edit** screens specify the general, access and other settings for the [rsync module](https://download.samba.org/pub/rsync/rsync.1).
{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/22.12/AddRsyncModuleGeneral.png" alt="Services Add Rsync Module General Setting" id="5: Services Add Rsync Module General Setting" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Enter a module name that matches the name requested by the rsync client. |
| **Path** | Enter or uses the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the pool or dataset to store received data. |
| **Comment** | Enter a description for this module. |
| **Enabled** | Select to activate this module for use with Rsync. Leave clear to deactivate the module without completely removing it. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/22.12/AddRsyncModuleAccess.png" alt="Services Add Rsync Module Access Settings" id="6: Services Add Rsync Module Access Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Access Mode** | Select the permission level for this rsync module from the dropdown list. Options are **Read Only**, **Write Only**, or **Read and Write**. |
| **Max Connections** | Enter the maximum number of connections to this module. **0** is unlimited. |
| **User** | Enter or select the TrueNAS user account that runs the rsync command during file transfers to and from this module from the dropdown list. |
| **Group** | Enter or select the TrueNAS group account that runs the rsync command during file transfers to and from this module from the dropdown list. |
| **Hosts Allow** | Enter a list of patterns to match with the host name and IP address of a connecting client (from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). The connection is rejected if no patterns match. Separate entries by pressing <kbd>Enter</kbd>. |
| **Hosts Deny** | Enter  a list of patterns to match with the hostname and IP address of a connecting client (from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). The connection is rejected when the patterns match. Separate entries by pressing <kbd>Enter</kbd>. |
{{< /truetable >}}

{{< trueimage src="/images/SCALE/22.12/AddRsyncModuleOtherOptions.png" alt="Services Add Rsync Module Other Options Settings" id="7: Services Add Rsync Module Other Options Settings" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Auxiliary Parameters** | Enter any additional parameters from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html). |
{{< /truetable >}}
{{< /expand >}}

{{< taglist tag="scalersync" limit="10" >}}