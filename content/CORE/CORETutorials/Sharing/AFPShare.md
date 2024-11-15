---
title: "AFP Share Creation"
redirect: "https://www.truenas.com/docs/core/13.0/coretutorials/sharing/afpshare/"
description: "Provides information on how to create Apple Filing Protocol (AFP) shares on your TrueNAS."
weight: 10
aliases:
 - /core/sharing/afp/afpshare/
 - /core/coretutorials/sharing/afp/afpshare/
tags:
- afp
---

The Apple Filing Protocol (AFP) is a network protocol that allows file sharing over a network.
It is like SMB and NFS, but it is for Apple systems.

{{< hint type=important >}}
Apple began using the SMB sharing protocol as the default option for file sharing in 2013. At that time Apple ceased development of the AFP sharing protocol. The recommendation is to use SMB sharing instead of AFP. AFP sharing is still used if files are being shared with legacy Apple products. Please see https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/FAQ/FAQ.html
{{< /hint >}}

To create a new share, make sure a dataset is available with all the data for sharing.

## AFP Share Configuration

To configure the new share, go to **Sharing > Apple Shares (AFP)** and click **ADD**.
Because AFP sharing is deprecated, confirm that you intend to create an AFP share.
Next, use the file browser to select a dataset to share and enter a descriptive name for the share in **Name**.

Select **Time Machine** if the share is to have Apple Time Machine backups. 
This advertises the share to other Mac systems as a disk that stores Time Machine backups.
Having multiple AFP shares configured for Time Machine backups is not recommended.

Select **Use as Home Share** to create home directories for users that connect to the share.
Only one AFP share can be a home share.

The AFP share is enabled by default.
To create the share but not immediately enable it, clear **Enabled**.
Clicking **SUBMIT** creates the share.

![Sharing AFP Add](/images/CORE/Sharing/SharingAFPAdd.png "Sharing AFP Add")

See [Sharing AFP screen]({{< relref "AFPShareScreen.md" >}}) for more information on screen settings.

To edit an existing AFP share, go to **Sharing > Apple Shares (AFP)** and click  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>.

## Start or Stop AFP Service

To begin advertising the AFP shared location, go to **Services**.  To determine the current state of the AFP service, hover the mouse over the toggle. The toggle turns blue when it is running. Click the AFP toggle to start the service if it is not running, or to stop the service if it is already running.
To automatically start the service after TrueNAS boots, select **Start Automatically**.

### Changing AFP Service settings

If the AFP service is running, stop it before attempting to edit settings.

It is recommended to use the default settings for the AFP service.
To adjust the service settings, click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> icon.

![Services AFP Edit](/images/CORE/Services/ServicesAFPEdit.png "Services AFP Edit")

See [Adding AFP Service]({{< relref "/CORE/UIReference/Services/AFPScreen.md" >}}) for more information on AFP service settings.

## Connecting to the AFP Share

Use an Apple operating system to connect to the share.
Open the **Finder** app on the Mac and click **Go > Connect to Server...** in the top menu bar on the Mac.
Enter `afp://{IPofTrueNASsystem}` and click **Connect**.
For example, entering `afp://192.168.2.2` connects to the TrueNAS AFP share at 192.168.2.2.

![Apple AFP Connect](/images/CORE/AppleAFPConnect.png "Apple AFP Connect")
