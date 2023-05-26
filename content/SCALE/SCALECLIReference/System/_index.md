---
title: "System"
geekdocCollapseSection: true
description: "This article introduces the TrueNAS CLI system namespace, used to access child namespaces and commands including acme, advanced, alert, boot, bootenv, certificate, config, core, failover, general, keychain_credential, kmip, mail, ntp_server, reporting, support, system_dataset, truecommand, truenas, tunable, update, and version." 
weight: 50
---

{{< toc >}}

## Performing Manual Updates

To perform a manual update via the TrueNAS CLI, you must first upload a manual update file onto the system.

Connect to your system with your choice of FTP program (such as [WinSCP](https://winscp.net/eng/index.php)) and place the manual update file in **/var/tmp/firmware**.

Once it finishes uploading, go to the console setup menu and launch the TrueNAS CLI.

Enter `system update manual path="/var/tmp/firmware/updatefilename"`

![TrueNASCLIsystemupdatemanualpath](/images/SCALE/TrueNASCLIsystemupdatemanualpath.png "Manual Update")