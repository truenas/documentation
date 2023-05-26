---
title: "Update"
geekdocCollapseSection: true
description: "Provides information about the system update namespace in the TrueNAS CLI. Includes command syntax and common commands." 
weight: 115
aliases:
draft: false
tags:
- scaleclisystem
---
{< toc >}}

{{< include file="/_includes/CLIGuideWIP.md" type="page" >}}

## Performing Manual Updates

To perform a manual update via the TrueNAS CLI Shell, you must first upload a manual update file onto the system.

Connect to your system with your choice of FTP program (such as [WinSCP](https://winscp.net/eng/index.php)) and place the manual update file in **/var/tmp/firmware**.

Once it finishes uploading, go to the console setup menu and launch the TrueNAS CLI Shell.

Enter `system update manual path="/var/tmp/firmware/updatefilename"`

![TrueNASCLIsystemupdatemanualpath](/images/SCALE/TrueNASCLIsystemupdatemanualpath.png "Manual Update")

{{< taglist tag="scaleclisystem" limit="10" title="Related CLI System Articles" >}}
