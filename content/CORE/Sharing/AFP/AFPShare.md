---
title: "Share Creation"
weight: 10
---

{{< toc >}}

The Apple Filing Protocol (AFP) is a network protocol that allows file sharing over a network.
It is similar to SMB and NFS, but was made specifically for Apple systems.

{{< hint warning >}}
Beginning in 2013, Apple began using the SMB sharing protocol as the default option for file sharing and ceased development of the AFP sharing protocol. It is recommended to use SMB sharing instead of AFP, unless files are being shared with legacy Apple products. Please see https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/APFS_Guide/FAQ/FAQ.html
{{< /hint >}}

{{< include file="static/includes/SharingPrereqs.md.part" markdown="true" >}}

## AFP Share Configuration

To configure the new share, go to **Sharing > Apple Shares (AFP)** and click *ADD*.
Because AFP sharing is deprecated, confirm that you intend to create an AFP share.
Next, use the file browser to select a dataset to share and enter a descriptive *Name* for the share.

When the share is to have Time Machine backups, set *Time Machine*.
This advertises the share to other Mac systems as a disk that stores Time Machine backups.
It is not recommended to have multiple AFP shares configured for Time Machine backups.

Setting *Use as Home Share* creates home directories for users that connect to the share.
Only one AFP share can be a home share.

The AFP share is enabled by default.
To create the share but not immediately enable it, unset *Enable*.
Clicking *SUBMIT* creates the share.

![Sharing AFP Add](/images/CORE/12.0/SharingAFPAdd.png "Sharing AFP Add")

{{< expand "Advanced Options" "v" >}}
Opening the *ADVANCED OPTIONS* allows modifying the share **Permissions**, adding a *Description*, and specifying any *Auxiliary Parameters*.

![Sharing AFP Add Advanced](/images/CORE/12.0/SharingAFPAddAdvanced.png "Sharing AFP Add Advanced")
{{< /expand >}}

To edit an existing AFP share, go to **Sharing > Apple Shares (AFP)** and click <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i>.

## AFP Service

To begin advertising the AFP shared location, go to **Services** and toggle *AFP*.
To automatically start the service after TrueNAS boots, set *Start Automatically*.

It is recommended to use the default settings for the AFP service.
However, to adjust the service settings, click <i class="fa fa-pencil" aria-hidden="true" title="Configure"></i>.

![Services AFP Edit](/images/CORE/12.0/ServicesAFPEdit.png "Services AFP Edit")

## Connecting to the AFP Share

Use an Apple operating system to connect to the share.
First, open the *Finder* app and click **Go > Connect to Server...** in the top menu bar.
Next, enter `afp://{IPofTrueNASsystem}` and click *Connect*.
For example, entering `afp://192.168.2.2` connects to the TrueNAS AFP share at `192.168.2.2`.

![Apple AFP Connect](/images/CORE/AppleAFPConnect.png "Apple AFP Connect")
