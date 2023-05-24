---
title: "Configuring Rsync Modules"
description: "This article provides information on configuring an rsync module and TCP port to use as an alternative to SSH when communicating with TrueNAS as a remote rsync server."
weight: 35
alias: 
tags:
 - scalersync
 - scaleservices
---

{{< toc >}}

Rsync is a utility that copies data across a network. The **Services > Rsync** screen has two tabs: **Configure** and **Rsync Module**. 
Use the **Configure** screen to add the TCP port number for the rsync service. Port 22 is reserved for TrueNAS. 
Use the **Rsync Module** screen to configure an rsync module on a TrueNAS system. You must configure at least one rsync module. This module is used as the communication mode when you set up a data protection [rsyc task]({{< relref "RsyncTasksSCALE.md" >}}). 

## Adding an Rsync Module TCP Port

Go to **Services** and click the **Configure** icon for **Rsync** to open the **Configure** screen.  

![ServicesRsyncConf](/images/SCALE/22.12/ServicesRsyncConf.png "Services Rsync Configure Screen")

Enter a new port number if not the default in **TCP Port**. This is the port the rsync server listens on.

Enter any additional parameters from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) you want to use in **Auxiliary Parameters**. 

Click **Save**.

## Adding an Rsync Module 
When you set up an rsync task on the **Data Protection** screen, you can use either **Module** or **SSH** as the rsync mode. If you select **Module** in **Rsync Mode** on the **Add Rsync Task** screen, it uses the rysnc module set up in the rsync service as a custom-defined remote module of the rsync server. 

To configure an rsync module click **Add** or **Add Rsync Modules** on the **Services > Rsync > Rsync Module** screen. 

![ServicesRsyncCreateModule](/images/SCALE/22.12/ServicesRsyncCreateModule.png "Rsync Module No Rsync Module")

Click either **Add RSYNC Modules** if a remote module does not exist, or **Add** to open the **Add Rsync** screen to configure a module to use as the mode. 

![AddRsyncModuleGeneral](/images/SCALE/22.12/AddRsyncModuleGeneral.png "Services Add Rsync Module General Settings")

Enter a name, and then either enter the path or use the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** to browse to the pool or dataset to store received data. 
Click on the dataset or zvol name to populate the path field. 
To collapse the dataset tree, click the <span class="material-icons">arrow_right</span> to the left of <span class="material-icons">folder</span>**/mnt** again.

Select **Enable** to activate the module for use with rsync.

![AddRsyncModuleAccess](/images/SCALE/22.12/AddRsyncModuleAccess.png "Services Add Rsync Module Access Settings")

Select the permission access level in **Access Mode**.

Select the user and group that runs the rsync command during file transfer to and from this module.

Enter any allow and or deny hosts. Separate multiple entries by pressing <kbd>Enter</kbd> after each entry in **Hosts Allow** and/or **Hosts Deny**.

{{< hint type=note >}}
When a **Hosts Allow** list is defined, *only* the IPs and hostnames on the list are able to connect to the module.
{{< /hint >}}

![AddRsyncModuleOtherOptions](/images/SCALE/22.12/AddRsyncModuleOtherOptions.png "Services Add Rsync Module Other Options Settings")

Enter any additional rsync configuration parameters from [rsyncd.conf(5)](https://www.samba.org/ftp/rsync/rsyncd.conf.html) in **Auxiliary Parameters**.

Click **Save**.

You can now configure an rsync task that uses **Module** in **Rsync Mode** on the **Add Rsync Task** screen, or change an existing rsync task from **SSH** to **Module**.

{{< taglist tag="scalersync" limit="10" >}}