---
title: "AFP Share Creation"
weight: 10
aliases: /core/sharing/afp/afpshare/
tags:
- coreafp
---

{{< toc >}}

The Apple Filing Protocol (AFP) is a network protocol that allows file sharing over a network.
It is similar to SMB and NFS, but was made specifically for Apple systems.

{{< hint warning >}}
Beginning in 2013, Apple began using the SMB sharing protocol as the default option for file sharing and ceased development of the AFP sharing protocol. It is recommended to use SMB sharing instead of AFP, unless files are being shared with legacy Apple products. Please see https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/FAQ/FAQ.html
{{< /hint >}}

To create a new share, make sure a dataset is available with all the data for sharing.

## AFP Share Configuration

To configure the new share, go to **Sharing > Apple Shares (AFP)** and click **ADD**.
Because AFP sharing is deprecated, confirm that you intend to create an AFP share.
Next, use the file browser to select a dataset to share and enter a descriptive name for the share in **Name**.

When the share is to have Apple Time Machine backups, set **Time Machine**.
This advertises the share to other Mac systems as a disk that stores Time Machine backups.
It is not recommended to have multiple AFP shares configured for Time Machine backups.

Setting **Use as Home Share** creates home directories for users that connect to the share.
Only one AFP share can be a home share.

The AFP share is enabled by default.
To create the share but not immediately enable it, unset **Enable**.
Clicking **SUBMIT** creates the share.

![Sharing AFP Add](/images/CORE/12.0/SharingAFPAdd.png "Sharing AFP Add")

See [Sharing AFP screen]({{< relref "/CORE/UIReference/Sharing/AFP/AFPShareScreen.md" >}}) for more information on screen settings.

To edit an existing AFP share, go to **Sharing > Apple Shares (AFP)** and click  <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>.

## Start or Stop AFP Service

To begin advertising the AFP shared location, go to **Services** and click the **AFP** toggle to start if not running or if running, to stop it.
To automatically start the service after TrueNAS boots, set **Start Automatically**.

### Changing AFP Service settings

If the AFP service is running, stop it before attempting to edit settings.

It is recommended to use the default settings for the AFP service.
However, to adjust the service settings, click <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![Services AFP Edit](/images/CORE/12.0/ServicesAFPEdit.png "Services AFP Edit")

See [Adding AFP Service]({{< relref "/CORE/UIReference/Services/AFPScreen.md" >}}) for more information on AFP service settings.

## Connecting to the AFP Share

Use an Apple operating system to connect to the share.
First, open the **Finder** app on the Mac and click **Go > Connect to Server...** in the top menu bar on the Mac.
Next, enter `afp://{IPofTrueNASsystem}` and click **Connect**.
For example, entering `afp://192.168.2.2` connects to the TrueNAS AFP share at 192.168.2.2.

![Apple AFP Connect](/images/CORE/AppleAFPConnect.png "Apple AFP Connect")

{{< taglist tag="coreafp" limit="10" title="Related Articles" >}}