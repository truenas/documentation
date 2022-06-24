---
title: "Configuring Rsync"
weight: 43
aliases: 
  - /core/services/rsync/
tags:
- corersync

---

Use the default settings unless you require a specific change.
Don't forget to click **SAVE** after changing any settings.

**Configure**

Enter the **TCP Port** you want Rsync to listen on, then enter any [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) **Auxiliary Parameters**.

![RsyncConfig](/images/CORE/13.0/RsyncConfig.png "Configuring rsync")

**Rsync Module**

TrueNAS lists all created modules here.
To create a new module, click **ADD**.

![RsyncModuleAdd](/images/CORE/13.0/RsyncModuleAdd.png "Creating a rsync module")

**Name** the module and select a **Path** to store it in. Select an **Access Mode** and fill out the rest of the fields to your needs.

{{< hint info >}}
When a **Hosts Allow** list is defined, **only** the IPs and hostnames on the list are able to connect to the module.
{{< /hint >}}

To **EDIT** or **DELETE** a module, go to the **Rsync Modules** list and click <i class="fa fa-chevron-right"></i> for an entry.