---
title: "Configuring Rsync"
description: "This article provides information on how to configure remote sync (rsync) on your TrueNAS."
weight: 43
aliases: 
  - /core/services/rsync/
tags:
- corersync

---

Rsync is an open source cross-platform file transfer and synchronization utility. It is a fast and secure way to copy data to another system for backup or to migrate data to a new system.
Use the default settings unless you require a specific change. Don't forget to click **SAVE** after changing any settings.

Log in to the TrueNAS web interface and go to **Services > Rsync**. Click the <span class="material-icons">edit</span> icon to edit the Rsync settings.

## Rsync Configuration Screen

Enter the **TCP Port** you want Rsync to listen on, then enter any [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) **Auxiliary Parameters**.

![RsyncConfigure](/images/CORE/13.0/RsyncConfigure.png "Configuring rsync")

## Rsync Modules

TrueNAS lists all created modules here.  
Use this **Rsync Modules** list to **EDIT** or **DELETE** a module. Click <i class="fa fa-chevron-right"></i> to select a module to edit.  

To create a new module, click **ADD**.

![RsyncModule](/images/CORE/13.0/RsyncModule.png "Creating a rsync module")

**Name** the module and select a **Path** to store it in. Select an **Access Mode** and fill out the rest of the fields to your needs.

![ServicesRsyncModuleAdd](/images/CORE/12.0/ServicesRsyncModuleAdd.png "Creating a rsync module")

{{< hint info >}}
When a **Hosts Allow** list is defined, only the IPs and hostnames on the list are able to connect to the module.
{{< /hint >}}

{{< taglist tag="corersync" limit="10" >}}
