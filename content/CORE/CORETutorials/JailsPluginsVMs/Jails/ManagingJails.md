---
title: "Managing Jails"
description: "This article describes how to manage Jails in TrueNAS CORE."
weight: 10
aliases: /core/applications/jails/manage/
tags:
- corejails
- corejailspluginsvm
---

{{< toc >}}


The **Jails** screen displays a list of jails installed on your system.

![Jails](/images/CORE/12.0/Jails.png "Jails List")

Jail status messages and command output are stored in <file>/var/log/iocage.log</file>.

## Applying Operations to Multiple Jails

Operations can be applied to multiple jails by selecting those jails with the checkboxes on the left.
After selecting one or more jails, icons display which can be used on the selected jails: 

   <i class="material-icons" aria-hidden="true" title="Start">play_arrow</i> starts jails

   <i class="material-icons" aria-hidden="true" title="Stop">stop</i> stops jails

   <i class="material-icons" aria-hidden="true" title="Update">update</i> updates jails

   <i class="material-icons" aria-hidden="true" title="Delete">delete</i> deletes jails

To see more information such as **IPV4**, **IPV6**, jail **TYPE**, and whether it is a **TEMPLATE** or **BASEJAIL** click **>** to expand a jail. 
Additional options for that jail also display.

For more information on jail options see [Creating Jails]({{< relref "/CORE/CORETutorials/JailsPluginsVMs/Jails/CreatingJails.md" >}})

## Modifying Jail IP Addresses

{{< hint type=important >}}
To modify the IP address information for a jail, click the <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> for the jail and then **EDIT** instead of issuing the networking commands directly from the command line of the jail.
This ensures changes are saved and survive a jail or TrueNAS reboot.
{{< /hint >}}

{{< taglist tag="corejails" limit="10" >}}
